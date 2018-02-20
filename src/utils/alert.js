import { Alert } from 'react-native';

export const alert = (title, content, okText = 'OK', callback) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: okText,
        onPress: () => {
          if (callback) {
            callback();
          }
        },
      },
    ],
  );
};

export const confirmation = (title, content, okText, cancelText, callback) => {
  Alert.alert(
    title,
    content,
    [
      {
        text: okText,
        onPress: () => {
          if (callback) {
            callback();
          }
        },
      },
      { text: cancelText, onPress: () => {} },
    ],
  );
};
