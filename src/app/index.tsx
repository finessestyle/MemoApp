import { View, StyleSheet } from 'react-native'

import Header from '../components/Header'
import MemoListItem from '../components/MemoListItem'
import CirecleButton from '../components/CircleButton'

const Index = () => {
  return (
    <View style={styles.container}>
      <Header />
      <MemoListItem />
      <CirecleButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default Index
