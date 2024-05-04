import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router'
import BottomSheet from './BottomSheet';
// import { BottomSheet } from '@gorhom/bottom-sheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const SearchBar = () => (
    <View style={styles.searchContainer}>
         <View style={styles.searchSection}>
            <View style={styles.searchField}>
                <Ionicons 
                style={styles.searchIcon}
                name="search-outline" size={22}/>
                <TextInput 
                style={styles.input}
                placeholder='Restaurants, Groceries, and Cuisines😁'/>
            </View>
            <Link href={'/(modal)/filter'} asChild>
                <TouchableOpacity style={styles.optionButton}>
                    <Ionicons name="options-outline" size={24} color={Colors.primary}/>
                </TouchableOpacity>
            </Link>
         </View>
    </View>
);


const CustomHeader = () => {
    const bottomSheetRef = useRef<BottomSheetModal>(null);

    const openModal = () => {
        // console.log("open Modal...")
        bottomSheetRef.current?.present();
        
    };

  return (
    <SafeAreaView style={styles.safeArea}>
        <BottomSheet ref={bottomSheetRef} />

        <View style={styles.container}>
            <TouchableOpacity onPress={openModal}>
                <Image style={styles.bike}
                source={require('@/assets/images/bike.png')}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={openModal}
            style={styles.titleContainer  }>
                <Text style={styles.title }>
                    Deliver . Now!
                </Text>
                <View style={styles.locationName}>
                    <Text style={styles.subtitle }>Selected Location</Text>
                    <Ionicons name="chevron-down" size={20} color={Colors.primary} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={openModal}
            style={styles.profileButton}>
                <Ionicons name='person-outline' size={20} color={Colors.primary}/>
            </TouchableOpacity>
        </View>
        <SearchBar />
    </SafeAreaView>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        height: 60,
        backgroundColor: '#fff',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    locationName: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#38bb9f'
    }, 
    bike: {
        width: 35,
        height: 35,
    },
    titleContainer: {
        flex: 1,

    },
    profileButton: {
        backgroundColor: Colors.lightGrey,
        padding: 10,
        borderRadius: 50,
    },
    title: {
        fontSize: 14, 
        color: Colors.medium,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    searchContainer: {
        height: 60,
        // backgroundColor: 'gray'
    },
    searchButton: {

    },
    searchSection: {
        flexDirection: 'row',
        gap: 10,
        flex: 1,
    },
    searchField: {
        flex: 1, 
        backgroundColor: Colors.lightGrey,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
    }, 
    optionButton: {
        padding: 10,
        borderRadius: 50,
    },
    input:  {
        padding: 10,
        color: Colors.mediumDark,
    },
    searchIcon: {
        paddingLeft: 10
    }
})