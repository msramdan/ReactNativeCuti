import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {
  colors,
  fonts,
  getData,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {Inputan, Tombol} from '../../components';
import {connect} from 'react-redux';
import { updateProfile } from '../../actions/ProfileAction';

class EditProfile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      nik: '',
      nama_karyawan: '',
      no_hp: '',
      alamat: '',
    }
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    getData('user').then(res => {
      const data = res;
      this.setState({
        id: data.id,
        nama_karyawan: data.nama_karyawan,
        no_hp: data.no_hp,
        alamat: data.alamat,
        nik: data.nik,
      });
    });
  };

  onSubmit = () => {
    const {
      nama_karyawan,
      alamat,
      no_hp,
    } = this.state;
    if(nama_karyawan && alamat && no_hp) {
      this.props.dispatch(updateProfile(this.state))
    }else {
      Alert.alert("Error", "Nama No. HP, Alamat harus diis")
    }
  }


  render() {
    const {nama_karyawan, no_hp, alamat,nik} = this.state;
    const {updateProfileLoading} = this.props;
    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Inputan label="NIK" value={nik} onChangeText={(nik) => this.setState({nik})} disabled  />
          <Inputan label="Nama" value={nama_karyawan} onChangeText={(nama_karyawan) => this.setState({nama_karyawan})} />
          <Inputan label="No. Handphone" value={no_hp} onChangeText={(no_hp) => this.setState({no_hp})} />
          <Inputan label="Alamat" value={alamat} textarea onChangeText={(alamat) => this.setState({alamat})} />

          <View style={styles.submit}>
            <Tombol
              title="Submit"
              type="textIcon"
              icon="submit"
              padding={responsiveHeight(15)}
              fontSize={18}
              loading={updateProfileLoading}
              onPress={() => this.onSubmit()}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  updateProfileLoading: state.ProfileReducer.updateProfileLoading,
  updateProfileResult: state.ProfileReducer.updateProfileResult,
  updateProfileError: state.ProfileReducer.updateProfileError,
});

export default connect(mapStateToProps, null)(EditProfile);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  inputFoto: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
  },
  foto: {
    width: responsiveWidth(150),
    height: responsiveWidth(150),
    borderRadius: 40,
  },
  wrapperUpload: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  tombolChangePhoto: {
    marginLeft: 20,
    flex: 1,
  },
  submit: {
    marginVertical: 30,
  },
});
