import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {
  clearStorage,
  colors,
  fonts,
  getData,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightMobileUI} from '../../utils/constant';
import {dummyMenu, dummyProfile} from '../../data';
import {ListMenu} from '../../components';
import {connect} from 'react-redux';
import { IconArrowRight, IconSignOut } from '../../assets';
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: dummyProfile,
      menus: dummyMenu,
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    getData('user').then(res => {
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
    const {navigation} = this.props;
    const {profile, menus, nama_karyawan, no_hp, alamat} = this.state;
    const onSubmit = () => {
      clearStorage();
      navigation.replace('Login');
    };
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <Image source={profile.avatar} style={styles.foto} />
          <View style={styles.profile}>
            <Text style={styles.nama}>{nama_karyawan}</Text>
            <Text style={styles.desc}>No. HP : {no_hp}</Text>
            <Text style={styles.desc}>{alamat}</Text>
          </View>
          <ListMenu menus={menus} navigation={navigation} />
          <TouchableOpacity
            style={styles.containerMenu}
            onPress={() => onSubmit()}>
            <View style={styles.menu}>
              <IconSignOut />
              <Text style={styles.text}>Sign Out</Text>
            </View>
            <IconArrowRight />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default connect()(Profile);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(680),
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: -responsiveWidth(75),
  },
  profile: {
    marginTop: 10,
    alignItems: 'center',
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: RFValue(24, heightMobileUI),
  },
  desc: {
    fontFamily: fonts.primary.regular,
    fontSize: RFValue(18, heightMobileUI),
  },

  containerMenu: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginHorizontal: 30,
    padding: responsiveHeight(15),
    borderRadius: 10,
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    marginLeft: 20
  },
  menu: {
      flexDirection: 'row',
      alignItems: 'center'
  }
});
