import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {colors, responsiveHeight, fonts, getData} from '../../utils';
import {Inputan, Tombol, HeaderComponent} from '../../components';
import {connect} from 'react-redux';
import {storeKontak} from '../../actions/KontakAction';

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
      if (data) {
        this.setState({
          id: data.id,
          nik: data.nik,
          nama_karyawan: data.nama_karyawan,
        });
      } else {
        this.props.navigation.replace('Login');
      }
    });
  };

  storeKontak = () => {
    const {judul, deskripsi, id} = this.state;
    if (judul && deskripsi) {
      this.props.dispatch(storeKontak(judul, deskripsi, id));
      Alert.alert('Success', 'Kotak masukan berhasil dikirim');
      this.props.navigation.replace('MainApp');
    } else {
      Alert.alert('Error', 'Judul & Deskripsi harus diisi');
    }
  };

  render() {
    const {navigation, storeLoading} = this.props;
    const {nama_karyawan, nik} = this.state;
    return (
      <View>
        <HeaderComponent navigation={navigation} />
        <View style={styles.form}>
          <View>
            <Inputan label="Nama" value={nama_karyawan} disabled />
            <Inputan
              label="Judul"
              onChangeText={judul => this.setState({judul})}
            />
            <Inputan
              label="Deskripsi"
              textarea
              onChangeText={deskripsi => this.setState({deskripsi})}
            />
          </View>
          <View style={styles.submit}>
            <Tombol
              title="Submit"
              type="textIcon"
              icon="submit"
              padding={responsiveHeight(15)}
              fontSize={18}
              loading={storeLoading}
              onPress={() => this.storeKontak()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  storeLoading: state.KontakReducer.storeLoading,
  storeResult: state.KontakReducer.storeResult,
  storeError: state.KontakReducer.storeError,
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
