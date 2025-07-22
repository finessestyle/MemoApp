import { View, TextInput, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import { useState } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { auth, db } from '../../config'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import KeyboardAvoidingView from '../../components/KeyBoardAvoidingView'

const handlePress = (bodyText: string) => {
  if (auth.currentUser === null) return
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
  .then((docRef) => {
    console.log('success', docRef.id)
    router.back()
  })
  .catch((e) => {
    console.log(e)
  })
}

const create = () => {
  const [bodyText, setBodyText] = useState('')

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          value={bodyText}
          style={styles.input}
          autoFocus
          onChangeText={(text) => { setBodyText(text) }}
        />
      </View>
      <CircleButton onPress={ () => { handlePress(bodyText) }}>
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
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default create
