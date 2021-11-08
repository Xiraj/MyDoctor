import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DummyDoctor1 } from '../../assets'
import { Header, ListDoctor } from '../../components'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <Header 
             type="dark" 
             label="Pilih Doctor Anak" 
             onPress={() => navigation.goBack()} 
            />
            <ListDoctor 
             type="next" 
             profile={DummyDoctor1} 
             name="Alexander Jannie" 
             desc="Wanita"
             onPress={() => navigation.navigate('Chatting')}
            />
            <ListDoctor 
             type="next" 
             profile={DummyDoctor1} 
             name="Alexander Jannie" 
             desc="Wanita" 
            />
            <ListDoctor 
             type="next" 
             profile={DummyDoctor1} 
             name="Alexander Jannie" 
             desc="Wanita" 
            />
            <ListDoctor 
             type="next" 
             profile={DummyDoctor1} 
             name="Alexander Jannie" 
             desc="Wanita" 
            />
            <ListDoctor 
             type="next" 
             profile={DummyDoctor1} 
             name="Alexander Jannie" 
             desc="Wanita" 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.white,
        flex: 1,
    }
})
export default ChooseDoctor;