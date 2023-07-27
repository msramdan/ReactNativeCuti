import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Inputan, Jarak, Tombol} from '../../components';
import {colors, fonts, responsiveHeight} from '../../utils';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <Logo />
          <Text style={styles.titleDplash}>Aplikasi E-Cuti</Text>
        </View>
        <View style={styles.cardLogin}>
          <Inputan label="NIK" />
          <Inputan label="Password" secureTextEntry />
          <Jarak height={25} />
          <Tombol title="Login" type="text" padding={12} fontSize={18} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ilustrasi: {
    position: 'absolute',
    bottom: 0,
    right: -100,
  },
  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(70),
  },
  cardLogin: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 10
  },
  register: {
      alignItems: 'center',
      marginTop: 10
  },
  textBlue: {
      fontSize: 18,
      fontFamily: fonts.primary.bold,
      color: colors.primary
  },
  titleDplash: {
    fontSize:32,
    color: '#007EAF',
    
  }
});
