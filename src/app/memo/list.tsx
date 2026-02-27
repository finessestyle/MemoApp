import { View, StyleSheet, Text } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { Octicons } from '@expo/vector-icons'

import LogOutButton from '../../components/LogOutButton'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'

const handlePress = () => {
  router.push('/memo/create')
}

const List = () => {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])
  return (
    <View style={styles.container}>
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <CircleButton onPress={() => handlePress()}>
        <Octicons name='plus' size={40} />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default List
