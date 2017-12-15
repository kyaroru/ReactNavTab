import React from 'react';
import { connect } from 'react-redux';
import Actions from 'actions';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'common/Button';
import { styles as commonStyles } from 'themes/styles';
import NavBar from 'common/NavBar';

class ScreenTwo extends React.Component {
  render() {
    return (
      <View style={commonStyles.container}>
        <NavBar
          title="Screen Two"
          onLeftIconPressed={() => this.props.goBackFromTab('TabThree')}
        />
        <View style={styles.innerContainer}>
          <Text>Tab Three Screen Two</Text>
          <Button
            label="Next Screen"
            onPress={() => this.props.goToFromTab('TabThree', 'TabThreeScreenThree')}
            color="primary"
            type="fill"
          />
          <Button
            label="Go Back"
            onPress={() => this.props.goBackFromTab('TabThree')}
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

ScreenTwo.propTypes = {
  goBackFromTab: PropTypes.func.isRequired,
  goToFromTab: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  goToFromTab: Actions.goToFromTab,
  goBackFromTab: Actions.goBackFromTab,
};

export default connect(null, mapDispatchToProps)(ScreenTwo);