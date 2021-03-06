import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Gap, NewsItem } from '../../components'
import DoctorCategory from '../../components/molecules/DoctorCategory'
import HomeProfile from '../../components/molecules/HomeProfile'
import RatedDoctor from '../../components/molecules/RatedDoctor'
import { colors, fonts } from '../../utils'
import { JSONCategoryDoctor } from '../../assets'

const Doctor = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.wrapperSection}>
                    <Gap height={30} />
                    <HomeProfile />
                    <Text style={styles.welcome}>Mau konsultasi dengan siapa hari ini?</Text>
                </View>
                    <View style={styles.wrapperScroll}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <View style={styles.category}>
                                <Gap  width={32} />
                                { JSONCategoryDoctor.data.map(item => {
                                        return (
                                            <DoctorCategory 
                                             key={item.id} 
                                             category={item.category} 
                                             onPress={() => navigation.navigate("ChooseDoctor")} 
                                             />  
                                        );
                                    })}
                                <Gap  width={22} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.wrapperSection}>
                        <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
                        <RatedDoctor />
                        <RatedDoctor />
                        <RatedDoctor />
                        <Text style={styles.sectionLabel}>Good News</Text>
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    wrapperSection: {
        paddingHorizontal:16,
    },
    welcome: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
        maxWidth: 209,
    },
    category: {
        flexDirection: 'row',
    },
    wrapperScroll: {
        marginHorizontal: -16
    },
    sectionLabel: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        marginTop: 30,
        marginBottom: 16,
    }
})
export default Doctor;