import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Actions from 'actions';
import Button from 'common/Button';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

class SignIn extends Component {
  constructor() {
    super();
    this.onSignInPress = this.onSignInPress.bind(this);
  }

  onSignInPress() {
    this.props.signIn();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome! Press Sign In to Continue</Text>
        <Button
          label="Sign In"
          color="primary"
          type="fill"
          onPress={this.onSignInPress}
        />
      </View>
    );
  }
}

SignIn.propTypes = {
  navigation: PropTypes.object.isRequired,
  signIn: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  signIn: Actions.signIn,
};


export default connect(null, mapDispatchToProps)(SignIn);
