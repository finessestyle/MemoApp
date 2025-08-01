import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Link, router } from 'expo-router'
import { useState } from 'react'
import { auth } from '../../config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Button from '../../components/Button'

const handlePress = (email: string, password: string) => {
  // ログイン
  signInWithEmailAndPassword(auth, email, password)
  .then(()=> {
    router.replace('/memo/list')
  })
  .catch((e)=> {
    const {code, message} = e
    console.log(code, message)
    Alert.alert('ログインに失敗しました')})
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
          value={email}
          placeholder='E-mail'
          autoCapitalize='none'
          keyboardType='email-address'
          onChangeText={(text) => {setEmail(text)}}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder='Password'
          autoCapitalize='none'
          textContentType='password'
          secureTextEntry
          onChangeText={(text) => {setPassword(text)}}
        />
        <Button label='submit' onPress={() => {handlePress(email, password)}}/>
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
