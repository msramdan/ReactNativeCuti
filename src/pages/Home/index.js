import React, { Component } from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import { colors } from '../utils';
import { fonts } from '../../utils';
import { HeaderComponent } from '../../components';
import BannerSlider from '../../components/besar/BannerSlider';
import ListJerseys from '../../components/besar/ListJerseys';
import { dummyJerseys } from '../../data';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jerseys: dummyJerseys,
    };
  }

  render() {
    const { navigation } = this.props
    const { jerseys} = this.state;
    return (
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderComponent navigation={navigation}/>
          <BannerSlider />
          <View style={styles.pilihJersey}>
            <Text style={styles.label}>
              <Text style={styles.boldLabel}>Main Menu </Text>
            </Text>
            <ListJerseys jerseys={jerseys} navigation={navigation}/>

          </View>
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