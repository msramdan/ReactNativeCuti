import React, { Component } from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent';
import { colors } from '../utils';
import { fonts } from '../../utils';

export default class Home extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation}/>
          {/* <BannerSlider /> */}
          {/* <View style={styles.pilihLiga}>
            <Text style={styles.label}>Pilih Liga</Text>
            <ListLiga ligas={ligas} />
          </View> */}

          {/* <View style={styles.pilihJersey}>
            <Text style={styles.label}>
              Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda
              Inginkan
            </Text>
            <ListJerseys jerseys={jerseys} navigation={navigation}/>

            <Tombol title="Lihat Semua" type="text" padding={7} />
          </View> */}

          {/* <Jarak height={100}/> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  pilihLiga: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  pilihJersey: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  boldLabel: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
  },
});