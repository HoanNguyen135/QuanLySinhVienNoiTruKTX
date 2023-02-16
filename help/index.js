import { Platform } from "react-native";

export const FormatPrice = (number) => {
  if (Platform.OS === "ios") {
    return number.toLocaleString("it-IT", {
      style: "currency",
      currency: "VND",
    });
  } else {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " đ";
  }
};

export const FormatDate = (date) => {
  var myDate = new Date(date);
  return (
    myDate.getDate()  + "/" + (myDate.getMonth() + 1) + "/" + myDate.getFullYear()
  );
};

export const formatDateMySQL= (date) => {

  const [day, month, year] = date.split('/');

  const result = `${year}/${month}/${day}`


  return result
}