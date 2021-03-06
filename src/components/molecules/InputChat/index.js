import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Button } from '../../atom'
import { colors, fonts } from '../../../utils'

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis Pesan Untuk Nairobi" />
            <Button type='button-icon-send' title="send" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
    },
    input: {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        maxHeight: 45,
    }
})
export default InputChat;