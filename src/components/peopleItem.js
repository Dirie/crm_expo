import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import {getTheme} from 'react-native-material-kit';

import * as actions from '../actions';

const theme = getTheme();

const styles = StyleSheet.create({
  card: {
    marginTop: 20,
  },
  image: {
    height: 100,
  },
  title: {
    top: 20,
    left: 80,
    fontSize: 24,
  },
  action: {
    backgroundColor: 'black',
    color: 'white',
  },
  icons: {
    position: 'absolute',
    top: 15,
    left: 0,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)',
  },
});

const peopleItem = props => {
  const {firstName, lastName, company} = props.people;
  return (
    <>
      <TouchableWithoutFeedback
        onPress={() => props.selectPerson(props.people)}>
        <View style={[theme.cardStyle, styles.card]}>
          <Image
            source={require('../img/bg.jpg')}
            style={theme.cardImageStyle}
          />
          <Icon name={'user'} size={100} style={styles.icons} />
          <Text style={[theme.cardTitleStyle, styles.title]}>
            {firstName} {lastName}
          </Text>

          <Text style={[theme.cardActionStyle, styles.action]}>{company}</Text>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

// const mapStateToProps = state => {
//   return {personSelected: state.personSelected};
// };

export default connect(null, actions)(peopleItem);
