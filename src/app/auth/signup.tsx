import { ReactNode, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { router, Link } from 'expo-router'
import { auth } from '../../config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Button from '../../components/Button'

const handlePress = (email: string, password: string) => {
  // 新規登録
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential)=> {
    console.log(userCredential.user.uid)
    router.replace('/memo/list')
  })
  .catch((error) => {
    const {code, message} = error
    console.log(code, message)
    Alert.alert(message)
  })
}
const SignUp = (): ReactNode => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container} >
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          value={email}
          onChangeText={(text) => {setEmail(text)}}
          style={styles.input}
          keyboardType='email-address'
          autoCapitalize='none'
          placeholder='E-mail'
          placeholderTextColor='#CCCCCC'
        />
        <TextInput
          value={password}
          onChangeText={(text) => {setPassword(text)}}
          style={styles.input}
          autoCapitalize='none'
          placeholder='Password'
          placeholderTextColor='#CCCCCC'
          textContentType='password'
          secureTextEntry
        />
        <Button label='Submit' onPress={() => {handlePress(email, password)}}/>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href='/auth/login' replace asChild>
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
    fontWeight: 'bold',
    lineHeight: 32,
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
