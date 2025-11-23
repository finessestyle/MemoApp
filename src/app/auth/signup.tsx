import { ReactNode, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { router, Link } from 'expo-router'
import Button from '../../components/Button'

const handlePress = () => {
  // 新規登録
  router.replace('/memo/list')
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
        <Button label='Submit' onPress={() => {handlePress()}}/>
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
