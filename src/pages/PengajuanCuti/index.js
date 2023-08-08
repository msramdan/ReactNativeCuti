import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image, Alert} from 'react-native';
import {
  colors,
  fonts,
  getData,
  responsiveHeight,
  responsiveWidth,
} from '../../utils';
import {Inputan, Tombol, Pilihan, InputDate} from '../../components';
import {connect} from 'react-redux';
import {storePengajuan} from '../../actions/PengajuanAction';
import {launchImageLibrary} from 'react-native-image-picker';
import {DefaultImage} from '../../assets';
import CalendarPicker from 'react-native-calendar-picker';

const countries = [
  'Cuti Tahunan',
  'Cuti Menikah (Special Leave)',
  'Cuti Melahirkan Anak (Special Leave)',
  'Cuti Khitan Anak (Special Leave)',
  'Cuti Baptis Anak (Special Leave)',
  'Cuti Istri Melahirkan / Keguguran (Special Leave)',
  'Cuti Keluarga Meninggal (Special Leave)',
  'Cuti Keluarga Dalam Satu Rumah Meninggal (Special Leave)',
  'Cuti Ibadah Haji',
];

export default class PengajuanCuti extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jenisCuti: '',
      alasan: '',
      avatar: false,
      avatarForDB: '',
      updateAvatar: false,
      selectedStartDate: null,
      selectedEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  componentDidMount() {
    this.getUserData();
  }

  ubahJenisCuti = jenisCuti => {
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

  onDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: date,
      });
    } else {
      this.setState({
        selectedStartDate: date,
        selectedEndDate: null,
      });
    }
  }

  getImage = () => {
    launchImageLibrary(
      {
        quality: 1,
        maxWidth: 500,
        maxHeight: 500,
        includeBase64: true,
        selectionLimit: 1,
        cameraType: 'front',
      },
      response => {
        if (response.didCancel || response.errorCode || response.errorMessage) {
          Alert.alert('Error', 'Maaf sepertinya anda tidak memilih fotonya');
        } else {
          const source = response.assets[0].uri;
          const fileString = `data:${response.assets[0].type};base64,${response.assets[0].base64}`;

          this.setState({
            avatar: source,
            avatarForDB: fileString,
            updateAvatar: true,
          });
        }
      },
    );
  };

  storePengajuan = () => {
    const {jenisCuti, alasan, id} = this.state;
    if (jenisCuti && alasan) {
      this.props.dispatch(storePengajuan(jenisCuti, alasan, id));
      Alert.alert('Sukses', 'Pengajuan cuti berhasil dikirim');
      this.props.navigation.replace('MainApp');
    } else {
      Alert.alert('Error', 'Jenis Cuti, Alasan harus diisi');
    }
  };

  render() {
    const {nama_karyawan, nik, jenisCuti, avatar} = this.state;
    const {storePengajuanCutiLoading} = this.props;
    const {selectedStartDate, selectedEndDate} = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2040, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Inputan label="NIK" value={nik} disabled />
            <Inputan label="Nama" value={nama_karyawan} disabled />
            <Pilihan
              label="Jenis Cuti"
              datas={countries}
              selectedValue={jenisCuti}
              onValueChange={jenisCuti => this.ubahJenisCuti(jenisCuti)}
            />

            {/* <View style={styles.inputFoto}>
              <Text style={styles.label}>File :</Text>
              <View style={styles.wrapperUpload}>
                <Image
                  source={avatar ? {uri: avatar} : DefaultImage}
                  style={styles.foto}
                />
                <View style={styles.tombolChangePhoto}>
                  <Tombol
                    title="Select File"
                    type="text"
                    padding={7}
                    onPress={() => this.getImage()}
                  />
                </View>
              </View>
            </View> */}

            {/* <View style={styles.submit}>
              <Tombol
                title="Submit"
                type="textIcon"
                icon="submit"
                padding={responsiveHeight(15)}
                fontSize={18}
                loading={storePengajuanCutiLoading}
                onPress={() => this.storePengajuan()}
              />
            </View> */}
          </View>

          <View style={styles.datePicker}>
            <Text style={styles.label}>Pilih Tanggal :</Text>
            <CalendarPicker style={styles.CalendarPicker}   
              startFromMonday={true}
              allowRangeSelection={true}
              minDate={minDate}
              maxDate={maxDate}
              width={responsiveWidth(350)}
              todayBackgroundColor="#f2e6ff"
              selectedDayColor="#7300e6"
              selectedDayTextColor="#FFFFFF"
              restrictMonthNavigation ={true}
              onDateChange={this.onDateChange}
            />
            {/* <Text> START:{startDate}</Text>
            <Text> END:{endDate}</Text> */}
          </View>

          <View>
            <Inputan
              label="Alasan"
              textarea
              onChangeText={alasan => this.setState({alasan})}
            />
          </View>

          <View style={styles.inputFoto}>
            <Text style={styles.label}>File :</Text>
            <View style={styles.wrapperUpload}>
              <Image
                source={avatar ? {uri: avatar} : DefaultImage}
                style={styles.foto}
              />
              <View style={styles.tombolChangePhoto}>
                <Tombol
                  title="Select File"
                  type="text"
                  padding={7}
                  onPress={() => this.getImage()}
                />
              </View>
            </View>
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
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  datePicker: {
    marginTop:20,
    marginBottom:10,
  },
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
  },

  inputFoto: {
    marginTop: 20,
  },
  foto: {
    width: responsiveWidth(100),
    height: responsiveWidth(100),
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    fontFamily: fonts.primary.regular,
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
