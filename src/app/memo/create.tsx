import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { router } from 'expo-router'

import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = () => {
  router.back()
}

const create = () => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input} value=''></TextInput>
      </View>
      <CircleButton onPress={() => {handlePress()}}>
        <Icon name='check' size={40} color='#ffffff' />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default create
