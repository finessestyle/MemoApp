import { View, TextInput,  Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { auth } from '../../config'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import Button from '../../components/Button'

const handlePress = (email: string, password: string): void => {
  // 会員登録
  console.log(email, password)
  createUserWithEmailAndPassword(auth, email, password)
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

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
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
        <Button label='submit' onPress={() => {handlePress(email, password)} }/>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link replace href='/auth/login' asChild >
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log in.</Text>
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
  button: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
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

export default Signup
