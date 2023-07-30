import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, responsiveHeight, fonts, getData} from '../../utils';
import {Inputan, Tombol, HeaderComponent} from '../../components';
import {connect} from 'react-redux';
class Kontak extends Component {
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
        no_hp: data.no_hp,
        alamat: data.alamat,
      });
    });
  };

  render() {
    const {navigation} = this.props;
    const {nama_karyawan, no_hp, alamat, nik} = this.state;
    return (
      <View>
        <HeaderComponent navigation={navigation} />
        <View style={styles.form}>
          <View>
            <Inputan label="NIK" value={nik} disabled />
            <Inputan label="Nama" value={nama_karyawan} disabled />
            <Inputan label="Judul" onChangeText={judul => this.setState({judul})} />
            <Inputan label="Deskripsi" textarea onChangeText={deskripsi => this.setState({deskripsi})} />
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

const mapStateToProps = state => ({
  loginLoading: state.AuthReducer.loginLoading,
  loginResult: state.AuthReducer.loginResult,
  loginError: state.AuthReducer.loginError,
});
export default connect(mapStateToProps, null)(Kontak);

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
