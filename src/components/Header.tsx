import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>MemoApp</Text>
        <Text style={styles.headerRight}>ログアウト</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 24,
    lineHeight: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginBottom: 8
  },
  headerRight: {
    position: 'absolute',
    right: 19,
    bottom: 8,
    color: 'rgba(255,255,255,0.7)'
  },
})
export default Header
