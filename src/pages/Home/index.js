import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../utils';
import {HeaderComponent} from '../../components';
import BannerSlider from '../../components/besar/BannerSlider';
import ListJerseys from '../../components/besar/ListJerseys';
import {dummyJerseys} from '../../data';
import {connect} from 'react-redux';
import { fonts, getData } from '../../utils';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jerseys: dummyJerseys,
    };
  }

  componentDidMount() {
    getData('user').then((res) => {
      if (!res) {
        this.props.navigation.replace('Login');
      }
    });
  }

  render() {
    const {navigation} = this.props;
    const {jerseys} = this.state;
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} />
        {/* <BannerSlider /> */}
        <View style={styles.pilihJersey}>
          <ListJerseys jerseys={jerseys} navigation={navigation} />
        </View>
      </View>
    );
  }
}

export default connect()(Home);

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