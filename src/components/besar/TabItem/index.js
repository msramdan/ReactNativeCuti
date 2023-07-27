import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { IconHome, IconHomeWhite, IconPhone, IconPhoneWhite, IconUser, IconUserWhite } from '../../../assets';
import { colors } from '../../../utils';


const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
    const Icon = () => {
        if (label === 'Home') {
            return isFocused ? <IconHomeWhite /> : <IconHome />
        }

        if (label === 'Kontak Masukan') {
            return isFocused ? <IconPhoneWhite /> : <IconPhone />
        }

        if (label === 'Profile') {
            return isFocused ? <IconUserWhite /> : <IconUser />
        }
        return <IconHome />
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}
        >
            <Icon />
            <Text style={styles.text(isFocused)}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}
export default TabItem
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: (isFocused) => ({
        color: isFocused ? colors.white : colors.secondary,
        fontSize: 11,
        marginTop: 4,
    })
})
