import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getTheme} from 'react-native-material-kit';


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
    left: 100,
    fontSize: 24,
  },
  action: {
    backgroundColor: 'black',
    color: 'white',
    paddingBottom: 5,
    paddingTop: 5,
  },
  icons: {
    position: 'absolute',
    top: 15,
    left: 10,
    color: 'white',
    backgroundColor: 'rgba(255,255,255,0)',
  },
});

const CompanyItem = props => {
 
    console.log('in company items');
  return (
    <>
        <View style={[theme.cardStyle, styles.card]}>
          <Image
            source={require('../img/bg.jpg')}
            style={theme.cardImageStyle}
          />
          <Icon name={'business'} size={100} style={styles.icons} />
          <Text style={[theme.cardTitleStyle, styles.title]}>
          {props.companies.company}
          </Text>
          {props.companies.names.map( (name, index) => (<Text key={index} style={[theme.cardActionStyle, styles.action]}>{name.firstName} {name.lastName}</Text>))
        }
        </View>
    </>
  );
};

// const mapStateToProps = state => {
//   return {personSelected: state.personSelected};
// };

export default CompanyItem;
