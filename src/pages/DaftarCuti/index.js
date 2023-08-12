import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import { ListDaftarCuti} from '../../components';
import {colors, fonts, getData} from '../../utils';
import {connect} from 'react-redux';
import { daftarCutiToday } from '../../actions/DaftarCutiToday';



class DaftarCuti extends Component {
  componentDidMount() {
    getData('user').then((res) => {
      if (res) {
        this.props.dispatch(daftarCutiToday());
      } else {
        this.props.navigation.replace('Login');
      }
    });
  }

  render() {
    const {daftarCutiTodayResult} = this.props;
    return (
      <View style={styles.page}>
        <ListDaftarCuti {...this.props} />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  daftarCutiTodayLoading: state.daftarCutiReducer.daftarCutiTodayLoading,
  daftarCutiTodayResult: state.daftarCutiReducer.daftarCutiTodayResult,
  daftarCutiTodayError: state.daftarCutiReducer.daftarCutiTodayError,
});
export default connect(mapStateToProps, null)(DaftarCuti);

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
