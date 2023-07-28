import React, { Component } from 'react'
import { StyleSheet, View} from 'react-native';
import { colors } from '../utils';
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
          <HeaderComponent navigation={navigation}/>
          <BannerSlider />
          <View style={styles.pilihJersey}>
            <ListJerseys jerseys={jerseys} navigation={navigation}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.white},
  pilihJersey: {
    marginHorizontal: 30,
    marginTop: 10,
  },
});