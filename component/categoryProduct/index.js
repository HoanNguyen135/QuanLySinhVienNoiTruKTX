import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";

const carouseItems = [
  {
    name: "mew1",
    img: require("../../assets/Mew.jpg"),
  },
  {
    name: "mew2",
    img: require("../../assets/Mew.jpg"),
  },
  {
    name: "mew3",
    img: require("../../assets/Mew.jpg"),
  },
  {
    name: "mew4",
    img: require("../../assets/Mew.jpg"),
  },
  {
    name: "mew5",
    img: require("../../assets/Mew.jpg"),
  },
  {
    name: "mew6",
    img: require("../../assets/Mew.jpg"),
  },
];

const CategoryProduct = () => {
  const renderCategoryProduct = ({ item }) => {
    return (
      <TouchableOpacity style={styles.boxCategoryProduct}>
        <View style={styles.boxImg}>
          <Image style={styles.img} source={item.img} />
        </View>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleCategory}>
        <Text>Danh mục sản phẩm </Text>
      </View>
      <FlatList
        horizontal={true}
        data={carouseItems}
        renderItem={renderCategoryProduct}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(product) => product.name.toString()}
      />
    </View>
  );
};

export default CategoryProduct;
