import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { forwardRef, useCallback, useMemo, useRef } from 'react'
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetModalProvider,
    BottomSheetBackdrop,
    useBottomSheetModal,
  } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'

export type Ref = BottomSheetModal;

const BottomSheet = forwardRef<Ref>((props, ref) => {
  
   const snapPoints = useMemo(() => ['50%'], []);
   const renderBackdrop = useCallback((props: any) => 
   <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props}/>, []);

   const { dismiss } = useBottomSheetModal();


    return (
      <GestureHandlerRootView>  
        <BottomSheetModal 
        handleIndicatorStyle={{ display: 'none'}}   
        style={{borderRadius: 0, backgroundColor: Colors.lightGrey}}
        backdropComponent={renderBackdrop}
        ref={ref} snapPoints={snapPoints}>
            <View style={styles.contentContainer}>
              <View style={styles.toggle}>
                <TouchableOpacity style={styles.toggleActive}>
                <Text style={styles.activeText}>Delivery</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.toggleInactive}>
                <Text style={styles.InactiveText}>Pickup</Text>
                </TouchableOpacity>
              </View>
              
              <Text style={styles.subheader}>Your Location</Text>
              <Link href={'/'} asChild>
                <TouchableOpacity>
                  <View style={styles.item}>
                    <Ionicons name="location-outline"/>
                    <Text style={{ flex: 1 }}>Current Location</Text>
                    <Ionicons name="chevron-forward" size={20} color={Colors.primary}/>
                  </View>
                </TouchableOpacity>
              </Link>
              <Text style={styles.subheader}>Arrival Time</Text>
              <TouchableOpacity>
                  <View style={styles.item}>
                    <Ionicons name="stopwatch-outline"/>
                    <Text style={{ flex: 1 }}>Now</Text>
                    <Ionicons name="chevron-forward" size={20} color={Colors.primary}/>
                  </View>
                </TouchableOpacity>
              
              <TouchableOpacity 
              style={styles.button}
              onPress={() => dismiss()}>
                <Text style={styles.buttonText}>Confirm</Text>
              </TouchableOpacity>
            </View>
        </BottomSheetModal>
      </GestureHandlerRootView>       
    );
});

export default BottomSheet;

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
      },
      button: {
        backgroundColor: Colors.primary,
        padding: 18,
        margin: 16,
        borderRadius: 4,
        alignItems: 'center'
      },
      buttonText: {
        fontSize: 16,
      },
      toggle: {
        flexDirection: "row",
        justifyContent: 'center',
        gap: 10,
        marginBottom: 32,
      },
      activeText:{
        color: '#fff',
        fontWeight: '700'
      },
      InactiveText:{
        color: Colors.primary,
        fontWeight: '700'
      },
      toggleActive: {
        backgroundColor: Colors.primary,
        padding: 8,
        borderRadius: 32,
        paddingHorizontal: 30,
      },
      toggleInactive: {
        backgroundColor: Colors.lightGrey,
        padding: 8,
        borderRadius: 32,
        paddingHorizontal: 30,
      },
      subheader: {
        fontSize: 16,
        fontWeight: '600',
        margin: 16,
      },
      item: {
        flexDirection: 'row',
        padding: 16,
        gap: 8,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: Colors.grey,
        borderWidth: 1,
      }
});



// import { StyleSheet, Text, View } from 'react-native'
// import React, { forwardRef, useMemo } from 'react'
// import { BottomSheetModal } from '@gorhom/bottom-sheet'

// export type Ref = BottomSheetModal;


// const BottomSheet = forwardRef<Ref>((props, ref) => {
//     const snapPoints = useMemo(() => ["50"], []);

//   return (
//     <BottomSheetModal ref={ref} snapPoints={snapPoints}>
//         <View>
//             <Text>Bottom Sheet</Text>
//         </View>
//     </BottomSheetModal>
//   )
// });

// export default BottomSheet

// const styles = StyleSheet.create({})