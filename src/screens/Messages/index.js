import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets'
import { ListDoctor, ListHospital } from '../../components'
import { colors, fonts } from '../../utils'

const Messages = () => {
    const [doctors] = useState([
        {
            id: 1,
            profile: DummyDoctor1,
            name: 'Alexander Jannie',
            desc: 'Baik ibu, terima kasih banyak atas wakt...',
        },
        {
            id: 2,
            profile: DummyDoctor2,
            name: 'Nairobi Putri Hayza',
            desc: 'Oh tentu saja tidak karena jeruk it...',
        },
        {
            id: 3,
            profile: DummyDoctor3,
            name: 'John McParker Steve',
            desc: 'Oke menurut pak dokter bagaimana unt...',
        },
    ])
    return (
        <View style={styles.screen}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {doctors.map(doctor => {
                        return ( 
                        <ListDoctor
                            key={doctor.id}
                            profile={doctor.profile} 
                            name={doctor.name} 
                            desc={doctor.desc} 
                         />
                        );
                    })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    title: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16,
    }
})
export default Messages;