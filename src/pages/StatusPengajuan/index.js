import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { ListStatusPengajuan} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {connect} from 'react-redux';
import { getListPengajuan } from '../../actions/ListPengajuan';


class StatusPengajuan extends Component {
  componentDidMount() {
    getData('user').then((res) => {
      if (res) {
        this.props.dispatch(getListPengajuan(res.uid));
      } else {
        this.props.navigation.replace('Login');
      }
    });
  }

  render() {
    // const {getListPengajuanResult} = this.props;
    return (
      <View style={styles.page}>
        <ListStatusPengajuan {...this.props} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  getListPengajuanLoading: state.StatusPengajuanReducer.getListPengajuanLoading,
  getListPengajuanResult: state.StatusPengajuanReducer.getListPengajuanResult,
  getListPengajuanError: state.StatusPengajuanReducer.getListPengajuanError,
});
export default connect(mapStateToProps, null)(StatusPengajuan);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  footer: {
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6.84,
    elevation: 11,
    paddingBottom: 30
  },
  totalHarga: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 20
  },
  textBold: {
      fontSize: 20,
      fontFamily: fonts.primary.bold
  }
});
