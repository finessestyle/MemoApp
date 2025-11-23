import { ReactNode } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { router, Link } from 'expo-router'
import Button from '../../components/Button'

const handlePress = () => {
  // 新規登録
  router.replace('/memo/list')
}
const SignUp = (): ReactNode => {
  return (
    <View style={styles.container} >
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          value='Emaill address'
          style={styles.input}
        />
        <TextInput
          value='Password'
          style={styles.input}
        />
        <Button label='Submit' onPress={() => {handlePress()}}/>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href='/auth/login' asChild>
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
