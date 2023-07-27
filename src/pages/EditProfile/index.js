import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {dummyProfile} from '../../data';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {Inputan, Pilihan, Tombol} from '../../components';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProvinsi: [],
      dataKota: [],
      profile: dummyProfile,
    };
  }

  render() {
    const {dataKota, dataProvinsi, profile} = this.state;
    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Inputan label="NIK" value={profile.nik} />
          <Inputan label="Nama" value={profile.nama} />
          <Inputan label="Tempat Lahir" value={profile.tempatLahir} />
          <Inputan label="Tanggal Lahir" value={profile.tglLahir} />
          <Inputan label="No. Handphone" value={profile.nomerHp} />
          <Pilihan label="Jenis kelamin" datas={dataProvinsi} />
          <Inputan label="Alamat" value={profile.alamat} textarea />
          
          <View style={styles.submit}>
             <Tombol title="Submit" type="textIcon" icon="submit" padding={responsiveHeight(15)} fontSize={18}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  inputFoto: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40,
  },
  wrapperUpload: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  tombolChangePhoto: {
    marginLeft: 20,
    flex: 1,
  },
  submit: {
    marginVertical: 30,
  },
});
