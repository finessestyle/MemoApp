import { View, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CirecleButton'
import Icon from '../../components/Icon'

const handlePress = () => {
  router.push('/memo/create')
}
const List = () => {
  return(
    <View style={styles.container}>
      <Header />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <CircleButton onPress={handlePress}>
        <Icon name='plus' size={40} color={'#ffffff'} />
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
