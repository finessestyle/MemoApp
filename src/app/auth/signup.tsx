import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { useState } from 'react'
import { router, Link } from 'expo-router'
import { auth } from '../../config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Button from '../../components/Button'

const handlePress = (email: string, password: string) => {
  // 新規登録
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

const SignUp= (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          autoCapitalize='none' //小文字入力
          keyboardType='email-address'
          placeholder='Email Address'
          textContentType='emailAddress'
          onChangeText={(text)=>{setEmail(text)}}
        />
        <TextInput
          style={styles.input}
          value={password}
          autoCapitalize='none'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
          onChangeText={(text)=>{setPassword(text)}}
        />
        <Button label='submit' onPress={() => {handlePress(email, password)}} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link replace href='/auth/login' asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log in. </Text>
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
    marginRight: 8,
    color: '#000000'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})

export default SignUp
