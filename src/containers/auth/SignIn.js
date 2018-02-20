import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import { styles as commonStyles } from 'themes/styles';
import { connect } from 'react-redux';
import TextField from 'common/input/TextField';
import Actions from 'actions';
import Button from 'common/Button';
import Spinner from 'common/Spinner';

const selector = formValueSelector('login');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
});

class SignIn extends Component {
  constructor() {
    super();
    this.onSignInPress = this.onSignInPress.bind(this);
  }

  onSignInPress() {
    const { signInData } = this.props;
    this.props.signIn(signInData);
  }

  render() {
    const { isLoading } = this.props;
    return (
      <View style={styles.container}>
        <Field
          name="username"
          component={TextField}
          type="text"
          placeholder="username"
        />
        <Field
          name="password"
          component={TextField}
          type="text"
          placeholder="password"
          secureTextEntry
        />
        <Button
          label="Sign In"
          color="primary"
          type="fill"
          onPress={this.onSignInPress}
        />
        {isLoading &&
        <View style={commonStyles.spinnerView}>
          <Spinner />
        </View>
        }
      </View>
    );
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  signInData: selector(store, 'username', 'password'),
  isLoading: store.AUTH.signIn.isLoading,
});

const mapDispatchToProps = {
  signIn: Actions.signIn,
};

const createReduxForm = reduxForm({ form: 'login' });
const SignInForm = createReduxForm(SignIn);

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
