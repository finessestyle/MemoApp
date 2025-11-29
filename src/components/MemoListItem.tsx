import { ReactNode } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Link } from 'expo-router'
import { deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../config'
import Icon from '../components/Icon'
import { type Memo } from '../../types/memo'

interface Props {
  memo: Memo
}

const handlePress = (id: string) => {
  if ( auth.currentUser === null ) return
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  Alert.alert('メモを削除します', 'よろしいですか？', [
    {
      text: 'キャンセル'
    },
    {
      text: '削除する',
      style: 'destructive',
      onPress: () => {
        deleteDoc(ref)
        .catch(() => {
          Alert.alert('削除に失敗しました')
        })
      }
    }
  ])

}
const MemoListItem = (props: Props): ReactNode | null => {
  const { memo } = props
  const { bodyText, updatedAt} = memo
  if ( bodyText === null || updatedAt === null) return
  const dateString = updatedAt.toDate().toLocaleString('ja-JP')
  return (
    <Link
      href={{ pathname: '/memo/detail', params: { id: memo.id} }} asChild
    >
      <TouchableOpacity style={styles.memoListItem} >
        <View>
          <Text
            numberOfLines={1}
            style={styles.memoListItemTitle}>
            {bodyText.length > 20 ? bodyText.slice(0, 20) + '...': bodyText}
          </Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity onPress={() => {handlePress(memo.id)}}>
          <Text>
            <Icon name='delete' size={30} color='#B0B0B0' />
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 19,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484"
  }
})
export default MemoListItem
