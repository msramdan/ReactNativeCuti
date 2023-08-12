import React from 'react';
import { Image,StyleSheet, Text, View} from 'react-native';
import {IconCheck, IconHapus, IconWait} from '../../../assets';

import {
  colors,
  fonts,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';

const CardDaftarCuti = ({statusPengajuan , id}) => {

  const renderText = (text) => {
    if (text == 'Pending') {
      return <IconWait />
    } else if (text == 'Approved') {
      return <IconCheck />
    } else {
      return <IconHapus />
    }
  }
  return (
    <View style={styles.container}>
      <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png'}}style={styles.gambar} />
      <View style={styles.desc}>
        <Text style={styles.nama}>{statusPengajuan.nama_karyawan}</Text>
        <Text style={styles.textBold}>NIK : {statusPengajuan.nik}</Text>
        <Text style={styles.textBold}>Jenis Cuti : {statusPengajuan.jenis_cuti}</Text>
        <Text style={styles.textBold}>Departemen : {statusPengajuan.nama_departemen}</Text>
        <Text style={styles.textBold}>Jabatan : {statusPengajuan.nama_jabatan}</Text>
      </View>
    </View>
  );
};

export default CardDaftarCuti;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
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
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  gambar: {
    width: responsiveWidth(77),
    height: responsiveHeight(88),
    resizeMode: 'contain',
  },
  hapus: {
    flex: 1,
    alignItems: 'flex-end',
  },
  nama: {
    fontFamily: fonts.primary.bold,
    fontSize: 13,
    textTransform: 'capitalize',
  },
  text: {
    fontFamily: fonts.primary.regular,
    fontSize: 11,
  },
  textBold: {
    fontFamily: fonts.primary.bold,
    fontSize: 11,
  },
});
