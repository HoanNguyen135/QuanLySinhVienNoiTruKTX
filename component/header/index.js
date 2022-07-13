import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import IconHeader from "../iconHeader";
import SearchInfo from "../searchInfo";

const Header = ({ icon, name }) => {
  let iconRight = "cart";

  switch (icon) {
    case "sort":
      iconRight = "sort";
      break;
    case "delete":
      iconRight = "delete";
      break;
    default:
      break;
  }

  return (
    <View style={styles.container}>
      <IconHeader name={"menu"} />
      <SearchInfo />
      <IconHeader name={iconRight} />
    </View>
  );
};

export default Header;
