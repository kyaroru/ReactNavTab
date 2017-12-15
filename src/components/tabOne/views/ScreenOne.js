import React from 'react';
import { connect } from 'react-redux';
import Actions from 'actions';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'common/Button';
import { styles as commonStyles } from 'themes/styles';
import NavBar from 'common/NavBar';

class ScreenOne extends React.Component {
  render() {
    return (
      <View style={commonStyles.container}>
        <NavBar title="Screen One" />
        <View style={styles.innerContainer}>
          <Text>Tab One Screen One</Text>
          <Button
            label="Next Screen"
            onPress={() => this.props.goToFromTab('TabOne', 'TabOneScreenTwo')}
            color="primary"
            type="fill"
          />
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

ScreenOne.propTypes = {
  signOut: PropTypes.func.isRequired,
  goToFromTab: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  goToFromTab: Actions.goToFromTab,
  signOut: Actions.signOut,
};

export default connect(null, mapDispatchToProps)(ScreenOne);
