import { View, TextInput,  Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link, router } from 'expo-router'
import Button from '../../components/Button'

const handlePress = (): void => {
  // 新規登録
  router.replace('/memo/list')
}

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput value='Email addres' style={styles.input}/>
        <TextInput value='Password' style={styles.input}/>
        <Button label='submit' onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Link href='/auth/login' asChild >
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
