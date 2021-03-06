import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { colors, fonts } from '../../../utils'

const Field = ({label}) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 10,
        padding: 12,
    },
    label: {
        fontSize: 16,
        color: colors.text.secondary,
        marginBottom: 6,
        fontFamily: fonts.primary[600],
    }
})
export default Field;