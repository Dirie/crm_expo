import React, {Component} from 'react';

import {View, Text, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import PeopleItem from './peopleItem';
import PeopleDetail from './peopleDetails';
import {loadInitialContacts} from '../actions/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 353,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
});

class PeopleList extends Component {
  state = {};

  renderInitialView() {
    if (this.props.detailView === true) {
      return <PeopleDetail />;
    } else {
      return (
        <FlatList
          data={this.props.People}
          renderItem={({item}) => <PeopleItem people={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      );
    }
  }

  componentWillMount() {
    this.props.loadInitialContacts();
  }

  render() {
    return (
      <>
        <View style={styles.container}>{this.renderInitialView()}</View>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    People: state.people,
    detailView: state.detailView,
  };
};

export default connect(mapStateToProps, {loadInitialContacts})(PeopleList);
