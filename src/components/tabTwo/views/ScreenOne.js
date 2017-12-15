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
          <Text>Tab Two Screen One</Text>
          <Button
            label="Next Screen"
            onPress={() => this.props.goToFromTab('TabTwo', 'TabTwoScreenTwo')}
            color="primary"
            type="fill"
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
  goToFromTab: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  goToFromTab: Actions.goToFromTab,
};

export default connect(null, mapDispatchToProps)(ScreenOne);
