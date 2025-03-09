import { View, Text,  TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { auth } from '../../config'
import { signInWithEmailAndPassword } from '@firebase/auth'
import Button from '../../components/Button'

const handlePress = (email: string, password: string): void => {
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

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>

      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          value={email}
          style={styles.input}
          onChangeText={(text) => { setEmail(text) }}
          autoCapitalize='none'
          keyboardType='email-address'
          placeholder='Email Address'
          textContentType='emailAddress'
        />
        <TextInput
          value={password}
          style={styles.input}
          onChangeText={(text) => { setPassword(text) }}
          autoCapitalize='none'
          secureTextEntry
          placeholder='Password'
          textContentType='password'
        />
        <Button  label= 'submit' onPress={ () => {handlePress(email, password)} }/>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link replace href='/auth/signup' asChild>
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
    flex: 1
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
    backgroundColor: '#F0F4F8',
    flex: 1
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

export default Login
