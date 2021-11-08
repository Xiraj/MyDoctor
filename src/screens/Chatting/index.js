import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

const Chatting = () => {
    return (
        <View style={styles.screen}>
            <Header type="dark-profile" label="Nairobi Putri Hayza" />
            <View style={styles.content}>
                <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
                <ChatItem isMe />
                <ChatItem Other />
                <ChatItem isMe />
            </View>
            <InputChat />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        flex: 1,
    },
    chatDate: {
        fontSize: 11,
        fontFamily: fonts.primary.normal,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center',
    }
})
export default Chatting;