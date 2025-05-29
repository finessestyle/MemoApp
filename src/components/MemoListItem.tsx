import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import Icon from './Icon'

const handlePress = () => {
  router.push('/memo/detail')
}

const MemoListItem = () => {
  return(
    <TouchableOpacity style={styles.memoListItem} onPress={handlePress}>
      <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2025年5月28日0:07</Text>
      </View>
      <View>
        <Text>
          <Icon name='delete' size={40} color='#848484' />
        </Text>
      </View>
    </TouchableOpacity>
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
    borderColor: 'rgba(0, 0, 0, 0.15)'
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
