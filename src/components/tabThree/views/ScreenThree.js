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
          title="Screen Three"
          onLeftIconPressed={() => this.props.goBackFromTab('TabThree')}
        />
        <View style={styles.innerContainer}>
          <Text>Tab Three Screen Three</Text>
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
};

const mapDispatchToProps = {
  goBackFromTab: Actions.goBackFromTab,
};

export default connect(null, mapDispatchToProps)(ScreenTwo);
