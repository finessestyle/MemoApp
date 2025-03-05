import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { router } from 'expo-router'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = (): void => {
  router.push('/memo/edit')
}

const Detail = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2025年3月5日9:34</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          ・りんご
          ・バナナ
          ・オレンジ
          ・イチゴ
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 140, bottom: 'auto' }} onPress={handlePress}>
        <Icon name='pencil' size={40} color='#ffffff' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  memoHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19
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
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  }
})

export default Detail
