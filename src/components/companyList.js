import React, {Component} from 'react';

import {View, StyleSheet, FlatList} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash';
import CompanyItem from './companyItem';

import * as actions from '../actions';
import { act } from 'react-test-renderer';



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 353,
      flexWrap: 'wrap',
      paddingTop: 20,
      paddingLeft: 20,
    },
  });


class CompanyList extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <FlatList
              data={this.props.companies}
              renderItem={({item}) => <CompanyItem companies={item} />}
              keyExtractor={(item, index) => index.toString()}
        />
        </View>
      </>
    );
  }
}

const mapStateToProps = state => {
  const people = state.people;
  const companies = _.chain(people).groupBy('company').map( (value, key) => {
    return {
      company: key,
      names: value 
    }
  }).value();
  return {companies};
};

export default connect(mapStateToProps, actions)(CompanyList);
