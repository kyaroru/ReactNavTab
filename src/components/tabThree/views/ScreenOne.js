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
          <Text>Tab Three Screen One</Text>
          <Button
            label="Next Screen"
            onPress={() => this.props.goToFromTab('TabThree', 'TabThreeScreenTwo')}
            color="primary"
            type="fill"
          />
          <Button
            label="Jump to First Tab"
            onPress={() => this.props.jumpToTab(0)}
            color="primary"
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
  goToFromTab: PropTypes.func.isRequired,
  jumpToTab: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  jumpToTab: Actions.jumpToTab,
  goToFromTab: Actions.goToFromTab,
};

export default connect(null, mapDispatchToProps)(ScreenOne);
