/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/EvilIcons';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import reducers from '../reducers/peopleReducer';

import PeopleList from './peopleList';
import CompanyList from './companyList';
import AddPerson from './addPerson';

import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName={'PeopleList'}
            screenOptions={({route}) => ({
              tabBarIcon: ({color, size}) => {
                let iconName;

                if (route.name === 'PeopleList') {
                  iconName = 'user';
                } else if (route.name === 'AddPerson') {
                  iconName = 'plus';
                } else if (route.name === 'CompanyList') {
                  iconName = 'archive';
                }

                // You can return any component that you like here!
                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: 'white',
              inactiveTintColor: '#80cbc4',
              showLabel: false,
              showIcon: true,
              style: {
                backgroundColor: '#26a69a',
              },
            }}>
            <Tab.Screen name="PeopleList" component={PeopleList} />
            <Tab.Screen name="AddPerson" component={AddPerson} />
            <Tab.Screen name="CompanyList" component={CompanyList} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
