import { ReactNode } from 'react'
import {
  ScrollView, TextInput, StyleSheet, KeyboardAvoidingView
} from 'react-native'
import Header from '../../components/Header'
import Icon from '../../components/Icon'
import CircleButton from '../../components/CircleButton'

const Create = (): ReactNode => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <Header />
      <ScrollView style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value=''
        />
      </ScrollView>
      <CircleButton>
        <Icon name='check' size={40} color='#ffffff' />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default Create
