import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Field, Gap, Header } from '../../components'
import { colors } from '../../utils'

const Register = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Header label="Daftar Akun" onPress={() => navigation.goBack()} />
            <View style={styles.content}>
                <Field label="Full Name" />
                <Gap height={24} />
                <Field label="Pekerjaan" />
                <Gap height={24} />
                <Field label="Email" />
                <Gap height={24} />
                <Field label="Password" />
                <Gap height={40} />
                <Button title="Continue" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0,
    }
})
export default Register;