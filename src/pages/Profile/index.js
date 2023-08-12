import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import { colors, fonts, getData, responsiveHeight, responsiveWidth } from '../../utils'
import { RFValue } from "react-native-responsive-fontsize";
import { heightMobileUI } from '../../utils/constant';
import { dummyMenu, dummyProfile } from '../../data';
import { ListMenu } from '../../components';

import {connect} from 'react-redux';class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
       profile: dummyProfile,
       menus: dummyMenu
    }
  }

  componentDidMount() {
    this.getUserData();
  }
  
  getUserData = () => {
    getData('user').then((res) => {
      const data = res;
      this.setState({
        id: data.id,
        nama_karyawan: data.nama_karyawan,
        no_hp: data.no_hp,
        alamat: data.alamat,
      });
    });
  };
  
  render() {
    const { navigation } = this.props;
    const {
      profile,
      menus,
      nama_karyawan,
      no_hp,
      alamat,
    } = this.state;
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Image source={profile.avatar} style={styles.foto} />
          <View style={styles.profile}>
            <Text style={styles.nama}>{nama_karyawan}</Text>
            <Text style={styles.desc}>No. HP : {no_hp}</Text>
            <Text style={styles.desc}>{alamat}</Text>
          </View>
          <ListMenu menus={menus} navigation={navigation}/>
        </View>
      </View>
    );
  }
}


export default connect()(Profile);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(680),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40
  },
  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: -responsiveWidth(75)
  },
  profile: {
    marginTop: 10,
    alignItems: 'center'
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(24, heightMobileUI)
  },
  desc: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(18, heightMobileUI)
  }
});
