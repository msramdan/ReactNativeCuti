import React, {Component} from 'react';
import { StyleSheet, View,Alert} from 'react-native';
import {colors, responsiveHeight, fonts, getData} from '../../utils';
import {Inputan, Tombol, HeaderComponent} from '../../components';
import {connect} from 'react-redux';
import { storeKontak } from '../../actions/KontakAction';

export class PengajuanCuti extends Component {

  constructor(props) {
    super(props);
    this.state = {
      judul: '',
      deskripsi: '',
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;
      this.setState({
        id: data.id,
        nik: data.nik,
        nama_karyawan: data.nama_karyawan,
      });
    });
  };
  render() {
    const {nama_karyawan,nik} = this.state;
    return (
      <View>
        <View style={styles.form}>
          <View>
            <Inputan label="NIK" value={nik} disabled />
            <Inputan label="Nama" value={nama_karyawan} disabled />
            <Inputan label="Judul" />
            <Inputan label="Deskripsi" textarea />
          </View>
          <View style={styles.submit}>
            <Tombol
              title="Submit"
              type="textIcon"
              icon="submit"
              padding={responsiveHeight(15)}
              fontSize={18}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default PengajuanCuti

const styles = StyleSheet.create({
  form: {
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  submit: {
    marginVertical: 30,
  },
});
