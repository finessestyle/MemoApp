import { View, StyleSheet, FlatList } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db, auth } from '../../config'

import { type Memo } from '../../../types/memo'

import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogOutButton from '../../components/LogOutButton'

const handlePress = () => {
  router.push('/memo/create')
}

const List = (): JSX.Element => {
  const [memos, setMemos] = useState<Memo[]>([])
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    // 問い合わせる
    const q = query(ref, orderBy('updatedAt', 'desc'))
    // リアルタイムに変更があったらデータを取得する(onSnapshot)
    const unsubscribe = onSnapshot(q, (snapShot)=> {
      const remoteMemos: Memo[] = []
      snapShot.forEach((doc)=> {
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt
        })
      })
      setMemos(remoteMemos)
    })
    return unsubscribe
  }, [])

  const navigation = useNavigation()
  useEffect( () => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        //リストに表示するデータ
        data={memos}
        renderItem={({ item }) => <MemoListItem memo={item} />}
      />
      <CircleButton onPress={() => {handlePress()} }>
        <Icon name='plus' color='#ffffff' size={40} />
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
