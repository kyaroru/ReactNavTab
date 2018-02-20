import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Colors from 'themes/colors';

const {
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const IS_IPHONE_X = SCREEN_HEIGHT === 812;
const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === 'ios' ? (IS_IPHONE_X ? 88 : 64) : 45;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

class NavBar extends Component {
  render() {
    const {
      title, rightIcon, onRightIconPressed, onLeftIconPressed,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <View style={styles.navBar}>
          {onLeftIconPressed &&
            <TouchableOpacity style={styles.iconLeft} onPress={onLeftIconPressed}>
              <Icon name="arrow-back" size={25} color="#fff" />
            </TouchableOpacity>
          }
          <Text style={styles.title}>
            {title}
          </Text>
          {rightIcon &&
            <TouchableOpacity style={styles.iconRight} onPress={onRightIconPressed}>
              <Icon name={rightIcon} size={25} color="#fff" />
            </TouchableOpacity>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: HEADER_HEIGHT,
  },
  statusBar: {
    height: STATUS_BAR_HEIGHT,
    backgroundColor: Colors.primary,
  },
  navBar: {
    height: NAV_BAR_HEIGHT,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
  iconRight: {
    position: 'absolute',
    right: 10,
    top: 5,
    bottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeft: {
    position: 'absolute',
    left: 10,
    top: 5,
    bottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  rightIcon: PropTypes.string,
  onRightIconPressed: PropTypes.func,
  onLeftIconPressed: PropTypes.func,
};

NavBar.defaultProps = {
  rightIcon: null,
  onRightIconPressed: null,
  onLeftIconPressed: null,
};

export default NavBar;
