import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";
import {firebase} from '../firebase'
import showNotice from "../help/ShowToast";


const imgPicker = async (setImg,updateToMysql,{idSV}) => {

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    const uriImg = await result.uri;

    const response = await fetch(uriImg);

    const blob = await response.blob();

    const uploadUri =
      Platform.OS === "ios" ? uriImg.replace("file://", "") : uriImg;
    let fileName = uploadUri?.substring(uploadUri.lastIndexOf("/") + 1);

    const extension = fileName.split(".").pop();

    const name = fileName.split(".").slice(0, -1).join("");

    let nameFull = name + Date.now() + "." + extension;

    var metadata = {
      contentType: "image/jpeg",
    };

    var storageRef = firebase.storage().ref();

    var uploadTask = storageRef.child("images/" + nameFull).put(blob, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error.message, true);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(async (downloadURL) => {
          await setImg(downloadURL);
          await updateToMysql({Avatar: downloadURL, idSV: idSV})
          // showNotice('Cập nhật avatar thành công')
        });
      }
    );
  }
};

export default imgPicker;
