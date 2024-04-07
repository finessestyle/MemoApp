import {
  View, Text, TextInput, StyleSheet, TouchableOpacity
} from 'react-native'
import { Link, router } from 'expo-router'

import Button from '../../components/Button'

const handlePress = (): void => {
  // ログイン
  router.replace('/memo/list')
}

const LogIn = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.innner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input}>Email Address</TextInput>
        <TextInput style={styles.input}>Password</TextInput>
        <Button onPress={handlePress} label='Submit' />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registerd?</Text>
          <Link href='/auth/sign_up' asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here!</Text>
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
  innner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
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
    marginRight: 8
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }

})

export default LogIn
