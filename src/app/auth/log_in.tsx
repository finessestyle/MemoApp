import { View, Text, TextInput, StyleSheet } from 'react-native'
import Header from '../../components/Header'
import Button from '../../components/Button'

const LogIn = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.innner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput value='Email Addres' style={styles.input} />
        <TextInput value='Password' style={styles.input} />
        <Button label='Submit' />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Text style={styles.footerLink}>Sign up here!</Text>
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

export default LogIn
