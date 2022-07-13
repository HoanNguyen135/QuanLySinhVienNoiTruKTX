import { View, Text,Image } from "react-native";
import { React, useState } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { DrawerItemComponent } from "../../component";
import styles from "./styles";

const DrawerScreen = (props) => {
  const [focus, setFocus] = useState("Home");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.boxAvatar}>
          <Image style={styles.imgAvatar} source={require('../../assets/Mew.jpg')}/>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoName}>Nguyen Cong Hoan</Text>
          <Text>I'm a developer mobile</Text>
        </View>
      </View>
      <View style={styles.body}>
        <DrawerContentScrollView>
          <DrawerItemComponent
            name={"Home"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
          <DrawerItemComponent
            name={"Favourite"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
          <DrawerItemComponent
            name={"Setting"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
        </DrawerContentScrollView>
      </View>
    </View>
  );
};

export default DrawerScreen;
