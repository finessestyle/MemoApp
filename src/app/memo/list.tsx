import { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const Index = (): ReactNode => {
  return (
    <View style={styles.container}>
      <Header />
      <MemoListItem />
      <MemoListItem />
      <MemoListItem />
      <CircleButton>
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

export default Index
