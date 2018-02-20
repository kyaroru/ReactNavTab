import React from 'react';
import { connect } from 'react-redux';
import Actions from 'actions';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { styles as commonStyles } from 'themes/styles';
import NavBar from 'common/NavBar';

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
});

class Favourite extends React.Component {
  render() {
    return (
      <View style={commonStyles.container}>
        <NavBar title="Favourite" />
        <View style={styles.innerContainer}>
          <Text>Favourite</Text>
        </View>
      </View>
    );
  }
}

Favourite.propTypes = {
  goToFromTab: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  goToFromTab: Actions.goToFromTab,
};

export default connect(null, mapDispatchToProps)(Favourite);
