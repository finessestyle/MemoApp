import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'

const Detail = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2026年2月25日 0:23</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          ・りんご
          ・もも
          ・バナナ
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 160, bottom: 'auto' }}>
        <Feather name='check' size={40} />
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
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  }
})

export default Detail
