import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { colors, fonts, responsiveHeight } from '../../../utils';
import { IconLogout, IconUserLog } from '../../../assets';
import {connect} from 'react-redux';
import { getUser } from '../../../actions/UserAction';

class HeaderComponent extends Component {

  componentDidMount() {
    this.props.dispatch(getUser());
  }

  render() {
    const { navigation,dataUser } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <IconUserLog />
          <View style={styles.welcomSection}>
            <Text style={styles.welcome}> Selamat datang, </Text>
            <Text style={styles.welcome}>
            {dataUser.nama_karyawan}
            </Text>
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
const mapStateToProps = (state) => ({
  dataUser: state.UserReducer.dataUser,
});

export default connect(mapStateToProps, null)(HeaderComponent);

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
