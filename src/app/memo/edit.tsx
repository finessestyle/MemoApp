import { View, StyleSheet, TextInput } from 'react-native'
import Header from '../../components/Header'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const Edit = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          value='買い物リスト'
          style={styles.input}
          multiline
        />
      </View>
      <CircleButton style={{ bottom: 40 }}>
        <Icon name='check' size={40} color='#ffffff' />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1,
    textAlignVertical: 'top'
  },
  input: {
  }
})

export default Edit
