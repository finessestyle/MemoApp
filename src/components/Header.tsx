import { ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (): ReactNode => {
  return (
    <View style={styles.header}>
      <View style={styles.headerInner}>
        <Text style={styles.headerTitle}>Memo App</Text>
        <Text style={styles.headerRight}>ログアウト</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
  }
})

export default Header
