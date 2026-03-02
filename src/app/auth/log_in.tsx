import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useState } from 'react'
import { Link, router } from 'expo-router'
import Button from '../../components/Button'
import { auth } from '../../config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const handlePress = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential.user.uid)
    router.replace('/memo/list')
  })
  .catch((error) => {
    const { code, message } = error
    console.log(code, message)
    Alert.alert(message)
  })
}

const LogIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder='Email Address'
          keyboardType='email-address'
          autoCapitalize='none'
          autoFocus
          textContentType='emailAddress'
          onChangeText={(text) => {setEmail(text)}}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder='Password'
          secureTextEntry
          autoCapitalize='none'
          textContentType='password'
          onChangeText={(text) => {setPassword(text)}}
        />
        <Button label='Submit' onPress={() => { handlePress(email, password)} } />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href='/auth/sign_up' asChild  replace>
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
    marginBottom: 24
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDDDDD',
    backgroundColor: '#ffffff',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row',
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
