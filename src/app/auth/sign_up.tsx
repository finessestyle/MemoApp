import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Link, router } from 'expo-router'

import Button from '../../components/Button'

const handlePress = () => {
  // 会員登録
  router.replace('/memo/list')
}

const signUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input}>Email Address</TextInput>
        <TextInput style={styles.input}>Password</TextInput>
        <Button label='Submit' onPress={() => { handlePress() }} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link replace href='/auth/log_in' asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log In.</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 16
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#DDDDDD',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#000000'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})
export default signUp
