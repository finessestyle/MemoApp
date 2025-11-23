import { ReactNode } from 'react'
import {
  ScrollView, TextInput, StyleSheet, KeyboardAvoidingView
} from 'react-native'
import { router } from 'expo-router'
import Icon from '../../components/Icon'
import CircleButton from '../../components/CircleButton'

const handlePress = () => {
  router.push('/memo/detail')
}

const Edit = (): ReactNode => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <ScrollView style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={'買い物\nリスト'}
        />
      </ScrollView>
      <CircleButton onPress={() => {handlePress()}}>
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

export default Edit
