import React, {Component} from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import {MKTextField, MKColor, MKButton} from 'react-native-material-kit';
import * as actions from '../actions';

const styles = StyleSheet.create({
  form: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'space-around',
  },
  fieldStyles: {
    height: 40,
    color: MKColor.Orange,
  },
  addButton: {
    marginTop: 20,
  },
});

const AddButton = MKButton.coloredButton()
  .withText('ADD')
  .build();

class AddPerson extends Component {
  onAddPress() {
    const {
      firstName,
      lastName,
      phone,
      email,
      company,
      notes,
    } = this.props;
  
    this.props.createNewContact({
      firstName,
      lastName,
      phone,
      email,
      company,
      notes,
    });
    this.props.navigation.navigate('PeopleList');
  }

  render() {
    return (
      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <View>
              <Text>Add a new contact</Text>
            </View>

            <MKTextField
              textInputStyle={styles.fieldStyles}
              placeholder={'First Name...'}
              tintColor={MKColor.Teal}
              value={this.props.firstName}
              onChangeText={value =>
                this.props.formUpdate({prop: 'firstName', value})
              }
            />
            <MKTextField
              textInputStyle={styles.fieldStyles}
              placeholder={'Last Name...'}
              tintColor={MKColor.Teal}
              value={this.props.lastName}
              onChangeText={value =>
                this.props.formUpdate({prop: 'lastName', value})
              }
            />
            <MKTextField
              textInputStyle={styles.fieldStyles}
              placeholder={'Phone...'}
              tintColor={MKColor.Teal}
              value={this.props.phone}
              onChangeText={value =>
                this.props.formUpdate({prop: 'phone', value})
              }
            />
            <MKTextField
              textInputStyle={styles.fieldStyles}
              placeholder={'Email...'}
              tintColor={MKColor.Teal}
              value={this.props.email}
              onChangeText={value =>
                this.props.formUpdate({prop: 'email', value})
              }
            />
            <MKTextField
              textInputStyle={styles.fieldStyles}
              placeholder={'Company...'}
              tintColor={MKColor.Teal}
              value={this.props.company}
              onChangeText={value =>
                this.props.formUpdate({prop: 'company', value})
              }
            />

            <MKTextField
              textInputStyle={styles.fieldStyles}
              placeholder={'Notes...'}
              tintColor={MKColor.Teal}
              value={this.props.notes}
              onChangeText={value =>
                this.props.formUpdate({prop: 'notes', value})
              }
            />
          </View>
          <View style={styles.addButton}>
            <AddButton onPress={this.onAddPress.bind(this)} />
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = state => {
  const {firstName, lastName, phone, email, company, notes} = state;
  return {
    firstName,
    lastName,
    phone,
    email,
    company,
    notes,
  };
};

export default connect(mapStateToProps, actions)(AddPerson);
