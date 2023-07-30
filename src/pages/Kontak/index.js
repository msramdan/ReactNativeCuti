import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, responsiveHeight, fonts} from '../../utils';
import {Inputan, Tombol, HeaderComponent} from '../../components';
import {dummyProfile} from '../../data';
export default class Kontak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: dummyProfile,
    };
  }

  render() {
    const {navigation} = this.props;
    const {profile} = this.state;
    return (
      <View>
          <HeaderComponent navigation={navigation} />
        <View style={styles.form} >
        <View>
          <Inputan label="NIK" value={profile.nik} />
          <Inputan label="Nama" value={profile.nama} />
          <Inputan label="Judul" />
          <Inputan label="Deskripsi" textarea />
        </View>
        <View style={styles.submit}>
          <Tombol
            title="Submit"
            type="textIcon"
            icon="submit"
            padding={responsiveHeight(15)}
            fontSize={18}
          />
        </View>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  form: {
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  
  submit: {
    marginVertical: 30,
  },
});
