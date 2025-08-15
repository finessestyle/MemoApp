import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'

import Button from '../../components/Button'

const handlePress = () => {
  // ログイン
  router.replace('/memo/list')
}

const logIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text)=> {setEmail(text)}}
          value={email}
          placeholder='E-mail'
          keyboardType='email-address'
          autoCapitalize='none'
          textContentType='emailAddress'
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => {setPassword(text)}}
          value={password}
          placeholder='Password'
          autoCapitalize='none'
          secureTextEntry
          textContentType='password'
        />
        <Button label='Submit' onPress={() => { handlePress() }} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link replace href='/auth/sign_up' asChild>
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
export default logIn
