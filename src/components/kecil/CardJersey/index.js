import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { colors, fonts, responsiveWidth } from '../../../utils';
import Tombol from '../Tombol';

const CardJersey = ({jersey, navigation}) => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <Image source={jersey.gambar[0]} style={styles.gambar} />
        <Text style={styles.text}>{jersey.nama}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardJersey;

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.yellow,
        width: responsiveWidth(150),
        alignItems: 'center',
        padding: 5,
        borderRadius: 10,
        marginBottom: 10
    },
    gambar: {
        width: 110,
        height: 110
    },
    text: {
        fontFamily: fonts.primary.bold,
        fontSize: 15,
        textTransform: 'capitalize',
        textAlign: 'center'
    }
});
