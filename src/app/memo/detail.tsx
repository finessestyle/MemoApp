import { ReactNode } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = () => {
  router.push('/memo/edit')
}

const Detail = (): ReactNode => {
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoHeaderTitle}>買い物リスト</Text>
        <Text style={styles.memoHeaderDate}>20252025年11月20日22:30</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          ・りんご
          ・みかん
          ・バナナ
        </Text>
      </ScrollView>
      <CircleButton style={{ top: 60 }} onPress={() => {handlePress()}}>
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
  memoHeaderTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoHeaderDate: {
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
