import { View, Text, StyleSheet } from 'react-native'

const Index = () => {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>Memo App</Text>
          <Text style={styles.headerRight}>ログアウト</Text>
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2025年11月19日21:58</Text>
        </View>
        <View style={styles.deleteButton}>
          <Text>x</Text>
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2025年11月19日21:58</Text>
        </View>
        <View style={styles.deleteButton}>
          <Text>x</Text>
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2025年11月19日21:58</Text>
        </View>
        <View style={styles.deleteButton}>
          <Text>x</Text>
        </View>
      </View>

      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLabel}>＋</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    fontWeight: 'bold',
    lineHeight: 32,
    color: '#ffffff'
  },
  headerRight: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    color: 'rgba(255,255,255,0.7)'
  },
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
  },
  circleButton: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 40,
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    textShadowOffset: {width: 0, height: 8},
    elevation: 8
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 48
  }
})

export default Index
