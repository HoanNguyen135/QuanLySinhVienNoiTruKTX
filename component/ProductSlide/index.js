import { View, Text, Image } from "react-native";
import { React, useState } from "react";
import Carousel, { Pagination } from "react-native-snap-carousel";
import styles from "./styles";
import { Dimensions } from "react-native";

const widthScreen = Dimensions.get("screen").width - 20;

const carouseItems = [
  {
    img: require("../../assets/Mew.jpg"),
  },
  {
    img: require("../../assets/Mew.jpg"),
  },
  {
    img: require("../../assets/Mew.jpg"),
  },
];

const ProductSlide = () => {
  const [sliderFocus, setSliderFocus] = useState(0);

  const renderItems = (item) => {
    return (
      <View style={styles.slider}>
        <Image style={styles.img} source={item.item.img} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={carouseItems}
        renderItem={renderItems}
        sliderWidth={widthScreen}
        itemWidth={widthScreen}
        onSnapToItem={(value) => setSliderFocus(value)}
      />
      <View style={styles.pagination}>
        <Pagination
          dotsLength={carouseItems.length}
          activeDotIndex={sliderFocus}
          dotContainerStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: "rgba(255, 255, 255, 0.92)",
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

export default ProductSlide;
