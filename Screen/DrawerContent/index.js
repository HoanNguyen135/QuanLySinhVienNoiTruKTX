import React, { useState } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Drawer } from "react-native-paper";
import { View, Text, Image } from "react-native";
import { DrawerItemComponent } from "../../component";
import { useSelector } from "react-redux";

import styles from "./styles";

const DrawerContent = () => {
  const user = useSelector((states) => states.User.user);

  const dataStudent = useSelector((states) => states.User.dataStudent);

  const [focus, setFocus] = useState("Home");


  if (user[0]?.ChucVu != "Sinh viên" && user.length > 0) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBox}>
            <Image
              style={styles.img}
              source={require("../../assets/images/avatar.png")}
            />
          </View>
          <Text style={styles.headerTitle}>{user[0]?.TenTaiKhoan}</Text>
        </View>
        <DrawerContentScrollView style={styles.body}>
          <DrawerItemComponent
            name={"HomeScreen"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
          <DrawerItemComponent
            name={"ApplicationStackScreen"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
          <DrawerItemComponent
            name={"ListInfrastructure"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
          
          {user[0].ChucVu == "Giám đốc trung tâm nội trú" && (
            <DrawerItemComponent
              name={"PriceElectricAndWaterStackScreen"}
              setFocus={(value) => setFocus(value)}
              focus={focus}
            />
          )}
          <DrawerItemComponent
            name={"ManageNumberScreen"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
          <DrawerItemComponent
            name={"LogOut"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <Text style={styles.bottomDrawerSectionText}>TLU</Text>
        </Drawer.Section>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerBox}>
            <Image
              style={styles.img}
              source={require("../../assets/images/avatar.png")}
            />
          </View>
          <Text style={styles.headerTitle}>{user[0]?.Username}</Text>
        </View>
        <DrawerContentScrollView style={styles.body}>
          <DrawerItemComponent
            name={"RegisterOfStudent"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
          <DrawerItemComponent
            name={"ProfileStudent"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
          {dataStudent.length > 0 && (
            <DrawerItemComponent
              name={"RepairOfStudent"}
              setFocus={(value) => setFocus(value)}
              focus={focus}
            />
          )}
          <DrawerItemComponent
            name={"LogOut"}
            setFocus={(value) => setFocus(value)}
            focus={focus}
          />
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <Text style={styles.bottomDrawerSectionText}>TLU</Text>
        </Drawer.Section>
      </View>
    );
  }
};

export default DrawerContent;
