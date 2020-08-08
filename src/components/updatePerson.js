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

const UpdateButton = MKButton.coloredButton()
  .withText('UPDATE')
  .build();

class UpdatePerson extends Component {
  onUpdatePress() {
    const {
      firstName,
      lastName,
      phone,
      email,
      company,
      notes,
      _id,
    } = this.props;
  
    this.props.saveContact({
      firstName,
      lastName,
      phone,
      email,
      company,
      notes,
      _id
    });
  }

  render() {
    return (
      <>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.form}>
            <View>
              <Text>Update Contact</Text>
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
            <UpdateButton onPress={this.onUpdatePress.bind(this)} />
          </View>
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = state => {
  const {firstName, lastName, phone, email, company, notes, _id} = state;
  return {
    firstName,
    lastName,
    phone,
    email,
    company,
    notes,
    _id,
  };
};

export default connect(mapStateToProps, actions)(UpdatePerson);
