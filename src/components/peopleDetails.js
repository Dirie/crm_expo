import React, {Component} from 'react';

import { View} from 'react-native';
import {connect} from 'react-redux';

import DetailsView from './detailView';
import UpdatePerson from './updatePerson'
import * as actions from '../actions';

class PeopleDetail extends Component {

  renderDetails() {
    if (this.props.toUpdate){
      return <UpdatePerson />;
    }
    else {
      return <DetailsView />;
    }
  }


  render() {
    return (    
        <View>
         {this.renderDetails()}
        </View>
    );
  }
}

const mapStateToProps = state => {
  return {toUpdate: state.toUpdate};
};

export default connect(mapStateToProps, actions)(PeopleDetail);
