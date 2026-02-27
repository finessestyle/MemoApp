import { View, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'

const handlePress = () => {
  router.push('/memo/create')
}

const List = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <CircleButton onPress={() => handlePress()}>
        <Feather name='plus' size={40} />
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
