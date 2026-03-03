import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { Octicons } from '@expo/vector-icons'
import { onSnapshot, doc } from 'firebase/firestore'
import { auth, db } from '../../config'
import { type Memo } from '../../../types/memo'

import CircleButton from '../../components/CircleButton'

const handlePress = () => {
  router.push('memo/edit')
}

const Detail = () => {
  const { id } = useLocalSearchParams()
  const [memo, setMemo] = useState<Memo | null>(null)
  useEffect(() => {
    if(auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, String(id))
    const unsubscribe = onSnapshot(ref, (memoDoc) => {
      const { bodyText, updatedAt } = memoDoc.data() as Memo
      setMemo({
        id: memoDoc.id,
        bodyText,
        updatedAt
      })
    })
    return unsubscribe
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>{memo?.bodyText}</Text>
        <Text style={styles.memoDate}>{memo?.updatedAt?.toDate().toLocaleString('ja-JP')}</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>{memo?.bodyText}</Text>
      </ScrollView>
      <CircleButton style={{ top: 60, bottom: 'auto' }} onPress={() => handlePress()}>
        <Octicons name='pencil' size={32} />
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
    paddingHorizontal: 27,
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000',
    paddingVertical: 32,
  }
})

export default Detail
