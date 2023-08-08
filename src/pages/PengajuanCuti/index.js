import React, {Component} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {colors, responsiveHeight, fonts, getData} from '../../utils';
import {Inputan, Tombol, HeaderComponent, Pilihan} from '../../components';
import {connect} from 'react-redux';
import { storePengajuan } from '../../actions/PengajuanAction';



const countries = [
  "Cuti Tahunan",
  "Cuti Menikah (Special Leave)",
  "Cuti Melahirkan Anak (Special Leave)",
  "Cuti Khitan Anak (Special Leave)",
  "Cuti Baptis Anak (Special Leave)",
  "Cuti Istri Melahirkan / Keguguran (Special Leave)",
  "Cuti Keluarga Meninggal (Special Leave)",
  "Cuti Keluarga Dalam Satu Rumah Meninggal (Special Leave)",
  "Cuti Ibadah Haji"
]

class PengajuanCuti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jenisCuti: '',
      alasan: '',
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  ubahJenisCuti = (jenisCuti) => {
    this.setState({
      jenisCuti: jenisCuti,
    });
  };

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

  storePengajuan = () => {
    const {jenisCuti , alasan , id} = this.state;
    if (jenisCuti && alasan) {
      this.props.dispatch(storePengajuan(jenisCuti, alasan, id));
      Alert.alert('Sukses', 'Pengajuan cuti berhasil dikirim');
      this.props.navigation.replace('MainApp');
    } else {
      Alert.alert('Error', 'Jenis Cuti, Alasan harus diisi');
    }
  };
  render() {
    const {nama_karyawan, nik, jenisCuti} = this.state;
    const {storePengajuanCutiLoading} = this.props;
    return (
      <View>
        <View style={styles.form}>
          <View>
            <Inputan label="NIK" value={nik} disabled />
            <Inputan label="Nama" value={nama_karyawan} disabled />
            <Pilihan
                label="Jenis Cuti"
                datas={countries}
                selectedValue={jenisCuti}
                onValueChange={(jenisCuti) => this.ubahJenisCuti(jenisCuti)}
              />
            <Inputan label="Alasan" textarea onChangeText={alasan => this.setState({alasan})} />
          </View>
          <View style={styles.submit}>
            <Tombol
              title="Submit"
              type="textIcon"
              icon="submit"
              padding={responsiveHeight(15)}
              fontSize={18}
              loading={storePengajuanCutiLoading}
              onPress={() => this.storePengajuan()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  storePengajuanCutiLoading: state.PengajuanCutiReducer.storePengajuanCutiLoading,
  storePengajuanCutiResult: state.PengajuanCutiReducer.storePengajuanCutiResult,
  storePengajuanCutiError: state.PengajuanCutiReducer.storePengajuanCutiError,
});
export default connect(mapStateToProps, null)(PengajuanCuti);

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
