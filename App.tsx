import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Hello from './src/components/Hello'

export default function App() {
  return (
    <View style={styles.container}>
      <Hello bang>World</Hello>
      <Hello style={{ fontSize: 32, backgroundColor: 'red'}}>World</Hello>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
