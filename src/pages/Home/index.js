import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../utils';
import {HeaderComponent} from '../../components';
import BannerSlider from '../../components/besar/BannerSlider';
import ListJerseys from '../../components/besar/ListJerseys';
import {dummyJerseys} from '../../data';
import {connect} from 'react-redux';
import {getData} from '../../utils';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jerseys: dummyJerseys,
    };
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.getUserData();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;
      if (data) {
        this.setState({
          profile: data,
        });
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };

  render() {
    const {navigation} = this.props;
    const {jerseys} = this.state;
    return (
      <View style={styles.page}>
        <HeaderComponent navigation={navigation} />
        <BannerSlider />
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
  pilihJersey: {
    marginHorizontal: 30,
    marginTop: 10,
  },
});
