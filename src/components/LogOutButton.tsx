import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native'
import { router } from 'expo-router'
import { signOut } from 'firebase/auth'
import { auth } from '../config'

const handlePress = () => {
  signOut(auth)
  .then(() => {
    router.replace('/auth/log_in')
  })
  .catch((error) => {
    const { message, code } = error
    console.log(message, code)
    Alert.alert(message)
  })
}

const LogOutButton  = () => {
  return (
    <TouchableOpacity onPress={() => {handlePress()}}>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255,255,255,0.7)'
  }
})

export default LogOutButton
