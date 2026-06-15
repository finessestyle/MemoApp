import { View, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
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
        <TextInput
          value={'買い物リスト\n・りんご'}
          style={styles.input}
          multiline
        />
      </View>
      <CircleButton onPress={handlePress} style={{ bottom: 40 }}>
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
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: 'top'
  }
})

export default Edit
