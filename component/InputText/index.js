import { View, Text, TextInput } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import styles from "./styles";

const InputText = ({
  control,
  inputName,
  placehorder,
  rules = {},
  data,
  editable,
  secureTextEntry,
}) => {
  let nameLabel;

  switch (inputName) {
    case "Username":
      nameLabel = "Tài khoản";
      break;
    case "Date_update":
      nameLabel = "Ngày sửa";
      break;
    case "Password":
      nameLabel = "Mật khẩu";
      break;
    case "Level":
      nameLabel = "Mức độ vi phạm";
      break;
    case "Position":
      nameLabel = "Chức vụ";
      break;
    case "Note":
      nameLabel = "Ghi chú";
      break;
    case "Date_created":
      nameLabel = "Ngày tạo";
      break;
    case "NameArea":
      nameLabel = "Tên Khu";
      break;
    case "NameRoom":
      nameLabel = "Tên Phòng";
      break;
    case "NameFloor":
      nameLabel = "Tên Tầng";
      break;
    case "NumberLimit":
      nameLabel = "Số lượng người";
      break;
    case "Describe":
      nameLabel = "Mô tả";
      break;
    case "Status":
      nameLabel = "Trạng thái";
      break;
    case "FullName":
      nameLabel = "Họ và tên";
      break;
    case "MSV":
      nameLabel = "Mã sinh viên";
      break;
    case "Birthday":
      nameLabel = "Ngày sinh";
      break;
    case "PhoneNumber":
      nameLabel = "Số điện thoại";
      break;
    case "Sex":
      nameLabel = "Giới tính";
      break;
    case "Ethnic":
      nameLabel = "Dân tộc";
      break;
    case "Country":
      nameLabel = "Quê quán";
      break;
    case "Major":
      nameLabel = "Ngành học";
      break;
    case "Email":
      nameLabel = "Email";
      break;
    case "Class":
      nameLabel = "Lớp";
      break;
    case "Address":
      nameLabel = "Địa chỉ thường trú";
      break;
    case "Name_Father":
      nameLabel = "Họ tên bố";
      break;
    case "Name_Mother":
      nameLabel = "Họ tên mẹ";
      break;
    case "PhoneNumber_Father":
      nameLabel = "Số điện thoại bố";
      break;
    case "PhoneNumber_Mother":
      nameLabel = "Số điện thoại mẹ";
      break;
    case "Email_Parent":
      nameLabel = "Email phụ huynh";
      break;
    case "NumberPhone_Parent":
      nameLabel = "Số điện thoại phụ huynh";
      break;
    case "CCCD":
      nameLabel = "CCCD/CMND";
      break;
    case "Floor":
      nameLabel = "Tên tầng";
      break;
    case "Entity":
      nameLabel = "Đối tượng ưu tiên";
      break;
    case "ContentViolent":
      nameLabel = "Nội dung vi phạm";
      break;
    case "Room":
      nameLabel = "Phòng";
      break;
    case "OldNumber":
      nameLabel = "Số cũ";
      break;
    case "NewNumber":
      nameLabel = "Số mới";
      break;
    case "OldNumberWater":
      nameLabel = "Số nước cũ";
      break;
    case "OldNumberElectric":
      nameLabel = "Số điện cũ";
      break;
    case "NewNumberWater":
      nameLabel = "Số nước mới";
      break;
    case "NewNumberElectric":
      nameLabel = "Số điện mới";
      break;
    case "SumMoney":
      nameLabel = "Tổng tiền";
      break;
    case "NameInfrastructure":
      nameLabel = "Tên cơ sở vật chất";
      break;
    case "NumberGood":
      nameLabel = "Số lượng còn tốt";
      break;
    case "NumberBad":
      nameLabel = "Số lượng đã hỏng";
      break;
    case "Number":
      nameLabel = "Số lượng";
      break;
    case "Price":
      nameLabel = "Giá tiền";
      break;
    case "PriceElectric":
      nameLabel = "Giá số điện";
      break;
    case "PriceWater":
      nameLabel = "Giá số nước";
      break;
    case "ContentRepair":
      nameLabel = "Nội dung sửa chữa";
      break;

    default:
      nameLabel = inputName;
      break;
  }

  return (
    <Controller
      control={control}
      name={inputName}
      rules={rules}
      defaultValue={data}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={styles.container}>
          <View style={styles.boxInput}>
            <View style={styles.boxText}>
              <Text style={styles.nameText}>{nameLabel}</Text>
            </View>
            <TextInput
              secureTextEntry={secureTextEntry}
              onBlur={onBlur}
              value={value}
              placeholder={placehorder}
              onChangeText={(text) => {
                onChange(text);
              }}
              style={[
                styles.inputText,
                {
                  borderColor: error ? "red" : "orange",
                },
              ]}
              editable={editable}
            />
          </View>
          {error && (
            <View style={styles.boxError}>
              <Text style={{ color: "red" }}>{error.message}</Text>
            </View>
          )}
        </View>
      )}
    />
  );
};

export default InputText;
