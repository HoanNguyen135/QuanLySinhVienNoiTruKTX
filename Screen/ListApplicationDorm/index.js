import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles";
import { RegisterDorm } from "../../component";
import ModalDropdown from "react-native-modal-dropdown";
import {
  fetchListApplication,
  fetchNumberPage,
} from "../../store/slices/applicationdorm";
import { useSelector, useDispatch } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-virtualized-view";
import { fetchAcceptAllApplication } from "../../store/slices/applicationdorm";
import {Loading} from "../../component";

const ListApplicationDorm = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true)

  const dataApplicationInPage = useSelector(
    (states) => states.Application.listApplication
  );

  const update = useSelector((states) => states.Application.update);

  const route = useRoute();

  const [page, setPage] = useState();

  const handleSelect = (index, value) => {
    setPage(value);
  };

  const [arrPage, setArrPage] = useState([]);

  useEffect(() => {
    dispatch(fetchNumberPage()).then((res) => {
      setArrPage(res.payload.data);
      setPage(res.payload.data[0]);
      setLoading(false)
    });
  }, [update]);

  useEffect(() => {
    dispatch(fetchListApplication({ current_page: page })).then((res)=>{
      if (!res.error) {
        setLoading(false)
      }
    })
  }, [page, update]);

  if(loading){
    return <Loading/>
  }

  const renderRegisterDorm = ({ item }) => {
    return <RegisterDorm data={item} />;
  };

  const handleAcceptAll = () => {
    dispatch(fetchAcceptAllApplication({ dataAccept: dataApplicationInPage ,type: 'Đã duyệt'}));
  };

  const handleRejectAll = () => {
    dispatch(fetchAcceptAllApplication({ dataAccept: dataApplicationInPage ,type: 'Từ chối'}));
  };

  return (
    <ScrollView style={styles.container}>
      {arrPage.length > 0 && (
        <>
          <TouchableOpacity
            style={styles.btnAcceptAll}
            onPress={handleAcceptAll}
          >
            <Text style={styles.txtAccept}>Chấp nhận danh sách</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRejectAll}
            onPress={handleRejectAll}
          >
            <Text style={styles.txtAccept}>Từ chối danh sách</Text>
          </TouchableOpacity>
          <ModalDropdown
            options={arrPage}
            style={styles.modelDrop}
            onSelect={(index, value) => handleSelect(index, value)}
          >
            <Text>{page}</Text>
          </ModalDropdown>
        </>
      )}
      <FlatList
        style={styles.flatList}
        data={dataApplicationInPage}
        renderItem={renderRegisterDorm}
        keyExtractor={(item) => item.idDonDK.toString()}
      />
    </ScrollView>
  );
};

export default ListApplicationDorm;
