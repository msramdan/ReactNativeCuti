import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { colors, fonts, responsiveHeight } from '../../../utils';
import { IconLogout, IconUserLog } from '../../../assets';
import { Jarak } from '../../kecil';

export default class HeaderComponent extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <IconUserLog />
          <View style={styles.welcomSection}>
            <Text style={styles.welcome}> Selamat datang, </Text>
            <Text style={styles.welcome}> Muhammad Saeful Ramdan, </Text>
          </View>

          <View style={styles.logoutSection}>
            <Text style={styles.logout}> Logout</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <IconLogout />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(125),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  welcomSection: {
    flex: 1,
    paddingLeft: 5,
    paddingTop: 7,
  },
  welcome: {
    color: '#fff',
    fontSize: 12,
  },

  logoutSection: {
    paddingLeft: 5,
    paddingTop: 10,
    flexDirection: 'row',
  },
  logout: {
    color: '#fff',
    fontSize: 14,
    paddingRight: 5,
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
  },
});
