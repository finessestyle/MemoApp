import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { router, Link } from 'expo-router'
import Button from '../../components/Button'

const handlePress = () => {
  // 新規登録
  router.replace('/memo/list')
}

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput value='Email Address' style={styles.input} />
        <TextInput value='Password' style={styles.input} />
        <Button label='Submit' onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href='/auth/log_in' asChild>
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
    backgroundColor: '#F3F4F8'
  },
  innner: {
    paddingVertical: 32,
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

export default SignUp
