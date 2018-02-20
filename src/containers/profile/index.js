import React from 'react';
import { connect } from 'react-redux';
import Actions from 'actions';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import Button from 'common/Button';
import { styles as commonStyles } from 'themes/styles';
import NavBar from 'common/NavBar';

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={commonStyles.container}>
        <NavBar title="Profile" />
        <View style={styles.innerContainer}>
          <Button
            label="Sign Out"
            onPress={() => this.props.signOut()}
            color="default"
            type="outline"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
});

ProfileScreen.propTypes = {
  goToFromTab: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  goToFromTab: Actions.goToFromTab,
  signOut: Actions.signOut,
};

export default connect(null, mapDispatchToProps)(ProfileScreen);
