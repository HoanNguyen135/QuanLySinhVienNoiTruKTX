import { View, Text } from "react-native";
import { React, useState } from "react";
import { SearchBar } from "@rneui/themed";
import styles from "./styles";

const SearchInfo = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Tìm kiếm sản phẩm"
        onChangeText={updateSearch}
        value={search}
        lightTheme
        containerStyle={styles.container}
        inputContainerStyle={styles.inputText}
      />
    </View>
  );
};

export default SearchInfo;
