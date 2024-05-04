import CustomHeader from '@/components/CustomHeader';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModalProvider, TouchableOpacity } from '@gorhom/bottom-sheet';
import { Stack, useNavigation } from 'expo-router';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

const RootLayoutNav = () => {
  const navigation =  useNavigation();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{ 
              header: () => <CustomHeader />,
            }} 
          />
          <Stack.Screen 
            name="(modal)/filter" 
            options={{
              presentation: 'modal',
              headerTitle: "Filter",
              headerShadowVisible: true,
              headerStyle: {
                backgroundColor: Colors.lightGrey,
              },
              headerLeft: () => (
                <TouchableOpacity onPress={navigation.goBack}>
                  <Ionicons name='close-outline' size={30} color={Colors.primary}/>
                </TouchableOpacity>
              )
            }}
          />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayoutNav;


// import CustomHeader from '@/components/CustomHeader';
// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
// import { Stack } from 'expo-router';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';


// export {
//   // Catch any errors thrown by the Layout component.
//   ErrorBoundary,
// } from 'expo-router';

// export const unstable_settings = {
//   // Ensure that reloading on `/modal` keeps a back button present.
//   initialRouteName: 'index',
// };

// const RootLayoutNav = () => {
//   return (
//       <BottomSheetModalProvider>
//         <Stack>
//           <Stack.Screen 
//             name="index" 
//             options={{ 
//                header: () => <CustomHeader />,
//             }} 
//           />
//         </Stack>
//       </BottomSheetModalProvider>
//   );
// };

// export default RootLayoutNav;



// // import CustomHeader from '@/components/CustomHeader';
// // import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
// // import { Stack } from 'expo-router';
// // import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

// // export {
// //   // Catch any errors thrown by the Layout component.
// //   ErrorBoundary,
// // } from 'expo-router';

// // export const unstable_settings = {
// //   // Ensure that reloading on `/modal` keeps a back button present.
// //   initialRouteName: 'index',
// // };

// // const RootLayoutNav = () => {
// //   return (
// //       <BottomSheetModalProvider>
// //       <Stack>
// //         <Stack.Screen 
// //           name="index" 
// //           options={{ 
// //             header: () => <CustomHeader />,
// //           }} 
// //         />
// //       </Stack>
// //     </BottomSheetModalProvider>    
// //   );
// // };

// // export default RootLayoutNav;


// // import CustomHeader from '@/components/CustomHeader';
// // import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
// // import { Stack } from 'expo-router';
// // import { PanGesture, PanGestureHandler } from 'react-native-gesture-handler';



// // export {
// //   // Catch any errors thrown by the Layout component.
// //   ErrorBoundary,
// // } from 'expo-router';

// // export const unstable_settings = {
// //   // Ensure that reloading on `/modal` keeps a back button present.
// //   initialRouteName: 'index',
// // };

// // export default function RootLayoutNav() {

// //   return (
// //     <PanGestureHandler>
// //         <BottomSheetModalProvider>
// //         <Stack>
// //           <Stack.Screen name="index" 
// //             options={{ 
// //              header: () => <CustomHeader />,
// //               }} />
// //         </Stack>
// //     </BottomSheetModalProvider>
// //     </PanGestureHandler>
      
// //   );
// // }
