import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconHapus} from '../../../assets';
import {
  colors,
  fonts,
  responsiveHeight,
  responsiveWidth,
} from '../../../utils';
import Jarak from '../Jarak';

const CardKeranjang = ({keranjang}) => {
  return (
    <View style={styles.container}>
      <View style={styles.desc}>
        <Text style={styles.nama}>Cuti Tahunan</Text>
        <Text style={styles.textBold}>Status Pengajuan : {keranjang.ukuran}</Text>
        <Text style={styles.textBold}>Tanggal Pengajuan : 07-08-2023</Text>
        <Text style={styles.textBold}>Tanggal Cuti : 07-08-2023 s.d 07-08-2023</Text>
        <Text style={styles.textBold}>Alasan:</Text>
        <Text style={styles.textBold}>{keranjang.keterangan} </Text>
      </View>
      <View style={styles.hapus}>
        <IconHapus />
      </View>
    </View>
  );
};

export default CardKeranjang;

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
