import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Logo } from '../../assets'


export default class Splash extends Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.replace('MainApp')
    }, 3000)
  }

  render() {
    return (
      <View style={styles.pages}>
        <Logo />
        <View style={styles.logoFooter}>
        </View>
        <Text style={styles.titleDplash}>Aplikasi E-Cuti</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1, alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  logoFooter: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  titleDplash: {
    fontSize:38,
    color: '#007EAF',
    
  }
})
