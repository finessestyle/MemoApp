import { View, Text, StyleSheet, ScrollView } from 'react-native'
// import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const detaile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
          <Text style={styles.memoTitle}>買い物リスト</Text>
          <Text style={styles.memoDate}>2025年8月14日18:30</Text>
      </View>
      <ScrollView style={styles.memoBody }>
          <Text style={styles.memoBodyText}>
            買い物リスト
            ・りんご
            ・バナナ
            ・いちご
          </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }}>
        <Icon name='pencil' size={40} color='#ffffff' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    height: 96,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    paddingHorizontal: 19,
    paddingVertical: 24
  },
  memoTitle: {
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingHorizontal: 27,
    paddingVertical: 32
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  }
})

export default detaile
