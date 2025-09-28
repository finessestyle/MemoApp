import { View, KeyboardAvoidingView, TextInput, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = () => {
  router.back()
}
const Edit = () => {
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.input}  value={'買い物リスト\nリスト'} />
      </View>
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
    lineHeight: 32
  }
})

export default Edit
