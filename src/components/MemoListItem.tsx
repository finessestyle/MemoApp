import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import Icon from '../components/Icon'

const MemoListItem = () => {
  return(
    <View>
      <Link href='/memo/detail' asChild>
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2025年3月4日22:43</Text>
        </View>
        <TouchableOpacity>
          <Icon name='delete' size={40} color='#B0B0B0' />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>

    </View>

  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
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
    color: '#848484'
  }
})

export default MemoListItem
