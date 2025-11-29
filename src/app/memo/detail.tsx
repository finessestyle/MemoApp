import { ReactNode, useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { auth, db } from '../../config'
import { onSnapshot, doc } from 'firebase/firestore'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import { type Memo } from '../../../types/memo'

const handlePress = () => {
  router.push('/memo/edit')
}

const Detail = (): ReactNode => {
  const id = useLocalSearchParams()
  console.log(id)
  const [memo, setMemo] = useState<Memo | null>(null)
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `/users/${auth.currentUser.uid}/memos`, String(id))
    const unsubscrive =onSnapshot(ref, (memoDoc) => {
      const { bodyText, updatedAt } = memoDoc.data() as Memo
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt
      })
    })
    return unsubscrive
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text
          numberOfLines={1}
          style={styles.memoHeaderTitle}>
          {memo?.bodyText}
        </Text>
        <Text style={styles.memoHeaderDate}>
          {memo?.updatedAt?.toDate().toLocaleString('ja-JP')}
        </Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          {memo?.bodyText}
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
    paddingHorizontal: 27
  },
  memoBodyText: {
    paddingVertical: 32,
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  }
})

export default Detail
