import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from 'themes/colors';

class Button extends React.Component {
  render() {
    const {
      label, onPress, color, type, iconLeft, iconRight, style, textStyle,
    } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, styles[color][type], style]}
        onPress={onPress}
      >
        {iconLeft && <View style={styles.icon}>{iconLeft}</View>}
        {
          label &&
          <View style={styles.labelContainer}>
            <Text style={[styles.text[color][type], textStyle]}>{label}</Text>
          </View>
        }
        {iconRight && <View style={styles.icon}>{iconRight}</View>}
      </TouchableOpacity>
    );
  }
}

const styles = {
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    minHeight: 50,
    borderRadius: 3,
  },
  labelContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  primary: {
    fill: {
      borderWidth: 0,
      backgroundColor: Colors.primary,
    },
    outline: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: Colors.primary,
      backgroundColor: Colors.transparent,
    },
    borderless: {
      borderWidth: 0,
      backgroundColor: Colors.transparent,
    },
  },
  default: {
    fill: {
      borderWidth: 0,
      backgroundColor: Colors.white,
    },
    outline: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: Colors.dark,
      backgroundColor: Colors.transparent,
    },
    borderless: {
      borderWidth: 0,
      backgroundColor: Colors.transparent,
    },
  },
  text: {
    primary: {
      fill: {
        color: Colors.white,
      },
      outline: {
        color: Colors.black,
      },
      borderless: {
        color: Colors.primary,
      },
    },
    default: {
      fill: {
        color: Colors.dark,
      },
      outline: {
        color: Colors.dark,
      },
      borderless: {
        color: Colors.dark,
      },
    },
  },
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  onPress: PropTypes.func,
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  style: PropTypes.any,
  textStyle: PropTypes.any,
};

Button.defaultProps = {
  label: null,
  color: 'primary',
  type: 'outline',
  onPress: () => null,
  iconLeft: null,
  iconRight: null,
  style: null,
  textStyle: null,
};

export default Button;
