import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Gap } from '../..';
import { colors, fonts } from '../../../utils';
import DarkProfile from './DarkProfile';

const Header = ({label, onPress, type}) => {
    if(type === 'dark-profile') {
        return <DarkProfile />
    }
    return (
        <View style={styles.container(type)}>
            <Button 
             type="icon-only" 
             icon={type === 'dark' ? 'back-light' : 'black-dark'} 
             onPress={onPress} 
            />
            <Text style={styles.text(type)}>{label}</Text>
            <Gap width={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: (type) => ( 
    {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: type === 'dark' ? colors.secondary : colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: type === 'dark' ? 20 : 0 ,
        borderBottomRightRadius: type === 'dark' ? 20 : 0,
    }),
    text: (type) => ({
        textAlign: 'center',
        flex: 1,
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: type === 'dark' ? colors.white : colors.text.primary,
    }),
})
export default Header;