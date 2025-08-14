import { View, Text, StyleSheet } from 'react-native'

const MemoListItem = () => {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2025年8月14日16:15</Text>
        </View>
        <View style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>×</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#rgba(0,0,0,0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
  deleteButton: {
  },
})

export default MemoListItem
