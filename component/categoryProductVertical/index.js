import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./styles";
import { FormatPrice } from "../../help/index";
import StarComponent from "../starComponent";

const carouseItems = [
  {
    name: "mew1",
    img: require("../../assets/Mew.jpg"),
    content: "8GB/16GB",
    star: 4,
    price: 23000000,
  },
  {
    name: "mew2",
    img: require("../../assets/Mew.jpg"),
    content: "8GB/16GB",
    star: 4,
    price: 23000000,
  },
  {
    name: "mew3",
    img: require("../../assets/Mew.jpg"),
    content: "8GB/16GB",
    star: 4,
    price: 23000000,
  },
  {
    name: "mew4",
    img: require("../../assets/Mew.jpg"),
    content: "8GB/16GB",
    star: 4,
    price: 23000000,
  },
  {
    name: "mew5",
    img: require("../../assets/Mew.jpg"),
    content: "8GB/16GB",
    star: 4,
    price: 23000000,
  },
  {
    name: "mew6",
    img: require("../../assets/Mew.jpg"),
    content: "8GB/16GB",
    star: 4,
    price: 23000000,
  },
  {
    name: "mew7",
    img: require("../../assets/Mew.jpg"),
    content: "8GB/16GB",
    star: 4,
    price: 23000000,
  },
  {
    name: "mew8",
    img: require("../../assets/Mew.jpg"),
    content: "8GB/16GB",
    star: 4,
    price: 23000000,
  },
];

const CategoryProductVertical = () => {
  const renderCategoryProduct = ({ item }) => {
    return (
      <TouchableOpacity style={styles.boxCategoryProduct}>
        <View style={styles.boxImg}>
          <Image style={styles.img} source={item.img} />
        </View>
        <View style={styles.info}>
          <Text numberOfLines={1}>{item.name}</Text>
          <Text numberOfLines={1}>{item.content}</Text>
          <Text numberOfLines={1}><StarComponent/></Text>
          <Text numberOfLines={1}>{FormatPrice(item.price)}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleCategory}>
        <Text>Danh mục sản phẩm </Text>
      </View>
      <FlatList
        data={carouseItems}
        renderItem={renderCategoryProduct}
        keyExtractor={(item) => item.name.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CategoryProductVertical;
