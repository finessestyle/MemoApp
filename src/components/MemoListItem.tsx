import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

import Icon from './Icon'

const MemoListItem = (): JSX.Element => {
  return (
    <Link href='/memo/detail' asChild>
      <TouchableOpacity>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2024年4月3日22:00</Text>
          </View>
          <TouchableOpacity>
            <Icon name='delete' size={40} color='#B0B0B0' />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    color: '#ffffff',
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
