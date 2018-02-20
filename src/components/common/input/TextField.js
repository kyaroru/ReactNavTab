import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from 'themes/colors';

class TextField extends Component {
  render() {
    const {
      input: { value, onChange }, label,
    } = this.props;
    return (
      <View style={styles.container}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={text => onChange(text)}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: Colors.primary,
    backgroundColor: Colors.transparent,
  },
  input: {
    marginTop: 5,
    height: 40,
    borderColor: Colors.dark,
    borderBottomWidth: 1,
    justifyContent: 'center',
    fontFamily: 'Arial',
  },
  dateValue: {
    fontSize: 16,
  },
});

TextField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

TextField.defaultProps = {
  label: null,
  type: 'text',
  placeholder: '',
};

export default TextField;
