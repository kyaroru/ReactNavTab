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

class Detail extends React.Component {
  render() {
    return (
      <View style={commonStyles.container}>
        <NavBar title="Detail" onLeftIconPressed={() => this.props.goBackFromTab(0)} />
        <View style={styles.innerContainer}>
          <Text>Detail</Text>
          <Button
            label="Go Back"
            onPress={() => this.props.goBackFromTab(0)}
          />
        </View>
      </View>
    );
  }
}

Detail.propTypes = {
  goBackFromTab: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  goBackFromTab: Actions.goBackFromTab,
};

export default connect(null, mapDispatchToProps)(Detail);
