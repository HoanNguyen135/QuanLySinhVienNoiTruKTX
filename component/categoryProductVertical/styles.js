import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom : 30,
  },
  titleCategory: {
    padding: 5,
    backgroundColor: "orange",
    width: 150,
    marginBottom: 10,
  },
  boxCategoryProduct: {
    flexDirection: "row",
    marginRight: 25,
    borderRadius: 15,
    width: 230,
  },
  boxImg: {
    width: 110,
    height: 110,
    borderRadius: 15,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    resizeMode: "contain",
  },
  info:{
    marginLeft : 15,
    justifyContent : 'space-around',
    maxWidth : 120,
  }
});

export default styles;
