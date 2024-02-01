import Toast from 'react-native-toast-message';

export const toastShow = (type, text1, text2 = '') => {
  Toast.show({
    type,
    text1,
    text2,
  });
};

export const toastHide = () => {
  Toast.hide();
};
