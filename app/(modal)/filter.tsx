import { FlatList, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { useNavigation } from 'expo-router'
import { StatusBar } from 'react-native';
import categories from '@/assets/data/filter.json';
import { Ionicons } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";


interface Category {
  name: string,
  count: number,
  checked?: boolean,
}


const ItemBox = () => (
  <>
  <View style={styles.itemContainer}>
    <TouchableOpacity style={styles.item}>
      <Ionicons name="arrow-down-outline"/>
        <Text style={{ flex: 1 }}>Sort</Text>
      <Ionicons name="chevron-forward" size={20} color={Colors.primary}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
      <Ionicons name="fast-food-outline"/>
        <Text style={{ flex: 1 }}>Hygiene rating</Text>
      <Ionicons name="chevron-forward" size={20} color={Colors.primary}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
      <Ionicons name="pricetag-outline"/>
        <Text style={{ flex: 1 }}>Offers and Dietary</Text>
      <Ionicons name="chevron-forward" size={20} color={Colors.primary}/>
    </TouchableOpacity>

    <TouchableOpacity style={styles.item}>
      <Ionicons name="nutrition-outline"/>
        <Text style={{ flex: 1 }}>Offers and Dietary</Text>
      <Ionicons name="chevron-forward" size={20} color={Colors.primary}/>
    </TouchableOpacity>
  </View>
  <Text style={styles.header}>Categories</Text>
  </>
)


const filter = () => {
  const navigation = useNavigation();

  const renderItem: ListRenderItem<Category> = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.itemText}>{item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        size={20}
        fillColor={Colors.primary}
        unFillColor="#ffffff"
        iconStyle={{ borderColor: Colors.primary, borderRadius: 4, borderWidth: 2, }}
        innerIconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
        onPress={() => {}}
        isChecked={item.checked} />
    </View>
  );

  return (
    // <StatusBar barStyle={auto}/>
    <View style={styles.container}>
      <FlatList data={categories}
      renderItem={renderItem}
      ListHeaderComponent={ItemBox}>
        
      </FlatList>
      <View style={{ height: 90 }} />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.fullbutton}
        onPress={() => navigation.goBack()}>
        <Text style={styles.footerText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default filter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: '#fff',
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    }
  },
  fullbutton: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  footerText: {
    color: '#fff',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
  },
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    paddingVertical: 10,
    borderColor: Colors.grey,
    // borderWidth: 1,
    borderBottomWidth: 2,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  itemText: {
    flex: 1,
  }
})