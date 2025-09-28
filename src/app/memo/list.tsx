import { View, StyleSheet } from 'react-native'
import { router } from 'expo-router'
// import { Feather } from '@expo/vector-icons'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = () => {
  router.push('/memo/create')
}

const List = () => {
  return (
    <View style={styles.container}>
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <CircleButton onPress={() => {handlePress()}}>
        <Icon name='plus' size={40} color='#ffffff' />
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
