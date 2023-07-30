import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {Inputan, Jarak, Tombol} from '../../components';
import {colors, fonts, responsiveHeight} from '../../utils';
import {connect} from 'react-redux';
import { loginUser } from '../../actions/AuthAction';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nik: '',
      password: '',
    };
  }

  login = () => {
    const {nik, password} = this.state;
    if (nik && password) {
      //action
      this.props.dispatch(loginUser(nik, password));
    } else {
      Alert.alert('Error', 'Nik & Password harus diisi');
    }
  };

  componentDidUpdate(prevProps) {
    const {loginResult} = this.props;
    if (loginResult && prevProps.loginResult !== loginResult) {
      this.props.navigation.replace('MainApp');
    }
  }

  render() {
    const {nik, password} = this.state;
    const {loginLoading} = this.props;

    return (
      <View style={styles.pages}>
        <View style={styles.logo}>
          <Logo />
          <Text style={styles.titleDplash}>Aplikasi E-Cuti</Text>
        </View>
        <View style={styles.cardLogin}>
          <Inputan
            label="NIK"
            value={nik}
            onChangeText={nik => this.setState({nik})}
          />
          <Inputan
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={password => this.setState({password})}
          />
          <Jarak height={25} />
          <Tombol
            title="Login"
            type="text"
            padding={12}
            fontSize={18}
            loading={loginLoading}
            onPress={() => this.login()}
          />
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

export default connect(mapStateToProps, null)(Login);

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ilustrasi: {
    position: 'absolute',
    bottom: 0,
    right: -100,
  },
  logo: {
    alignItems: 'center',
    marginTop: responsiveHeight(70),
  },
  cardLogin: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  register: {
    alignItems: 'center',
    marginTop: 10,
  },
  textBlue: {
    fontSize: 18,
    fontFamily: fonts.primary.bold,
    color: colors.primary,
  },
  titleDplash: {
    fontSize: 32,
    color: '#007EAF',
  },
});
