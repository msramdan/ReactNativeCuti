import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import {clearStorage, colors, fonts, getData, responsiveHeight} from '../../../utils';
import {IconLogout, IconUserLog} from '../../../assets';
import {connect} from 'react-redux';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      nama_karyawan: '',
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    getData('user').then((res) => {
      const data = res;
      this.setState({
        id: data.id,
        nama_karyawan: data.nama_karyawan,
      });
    });
  };

  render() {
    const {navigation} = this.props;
    const {
      nama_karyawan,
    } = this.state;
    const onSubmit = () => {
      clearStorage();
      navigation.replace('Login');
    };
    return (
      <View style={styles.container}>
        <View style={styles.wrapperHeader}>
          <IconUserLog />
          <View style={styles.welcomSection}>
            <Text style={styles.welcome}> Selamat datang, </Text>
            <Text style={styles.welcome}>{nama_karyawan}</Text>
          </View>

          <View style={styles.logoutSection}>
            <Text style={styles.logout}> Logout</Text>
            <TouchableOpacity
              onPress={() => onSubmit()}>
              <IconLogout />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  dataUser: state.UserReducer.dataUser,
});

export default connect(mapStateToProps, null)(HeaderComponent);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveHeight(125),
  },
  wrapperHeader: {
    marginTop: 15,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  welcomSection: {
    flex: 1,
    paddingLeft: 5,
    paddingTop: 7,
  },
  welcome: {
    color: '#fff',
    fontSize: 12,
  },

  logoutSection: {
    paddingLeft: 5,
    paddingTop: 10,
    flexDirection: 'row',
  },
  logout: {
    color: '#fff',
    fontSize: 14,
    paddingRight: 5,
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary.regular,
  },
});
