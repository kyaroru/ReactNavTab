import React from 'react';
import { connect } from 'react-redux';
import Actions from 'actions';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { styles as commonStyles } from 'themes/styles';
import NavBar from 'common/NavBar';
import Button from 'common/Button';

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Home extends React.Component {
  render() {
    return (
      <View style={commonStyles.container}>
        <NavBar title="Home" />
        <View style={styles.innerContainer}>
          <Text>Home</Text>
          <Button
            label="Next Screen"
            onPress={() => this.props.goToFromTab(0, 'Detail')}
          />
        </View>
      </View>
    );
  }
}

Home.propTypes = {
  goToFromTab: PropTypes.func.isRequired,
};

// const mapStateToProps = store => ({
// });

const mapDispatchToProps = {
  goToFromTab: Actions.goToFromTab,
};

export default connect(null, mapDispatchToProps)(Home);
