import { View, Text, StyleSheet } from 'react-native'

const MemoListItem = (): JSX.Element => {
  return (
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListItemTitle}>買い物リスト</Text>
        <Text style={styles.memoListItemDate}>2024年8月31日15:33</Text>
      </View>
      <View>
        <Text>X</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#FFFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 80,
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD'
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
