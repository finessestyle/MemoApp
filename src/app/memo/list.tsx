import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CirecleButton'

const List = () => {
  return(
    <View style={styles.container}>
      <Header />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <CircleButton>＋</CircleButton>
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
