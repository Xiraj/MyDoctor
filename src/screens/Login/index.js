import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets'
import { Button, Field, Gap, Link } from '../../components'

const Login = () => {
    return (
        <View style={styles.container}>
            <ILLogo />
            <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
            <Field label="Email Address" />
            <Gap height={24} />
            <Field label="Password"/>
            <Gap height={10} />
            <Link title="Forgot My Password" size={12} />
            <Gap height={40} />
            <Button title="Sign In" />
            <Gap height={30} />
            <Link title="Create New Account" size={16} align="center" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 40,
        backgroundColor: 'white',
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color: '#112340',
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 158,
    }
})
export default Login;