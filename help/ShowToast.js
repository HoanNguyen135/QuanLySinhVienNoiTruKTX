import { showMessage } from "react-native-flash-message";

const showNotice = (message,type) => {
    type = type ? 'danger' : 'success'
    showMessage({
        message: message,
        type: type,
    });
}

export default showNotice;
