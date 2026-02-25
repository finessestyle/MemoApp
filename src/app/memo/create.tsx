import {
  View, TextInput, StyleSheet, KeyboardAvoidingView
 } from 'react-native'
import { Feather } from '@expo/vector-icons'

import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'


const Create = () => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          value=''
        />
      </View>
      <CircleButton>
        <Feather name='check' size={40} color='#ffffff' />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default Create
