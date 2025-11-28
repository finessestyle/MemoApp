import { ReactNode, useState } from 'react'
import {
  ScrollView, TextInput, StyleSheet
} from 'react-native'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { auth, db } from '../../config'
import Icon from '../../components/Icon'
import CircleButton from '../../components/CircleButton'
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
  .catch((error) => {
    console.log(error)
  })
}

const Create = (): ReactNode => {
  const [bodyText, setBodyText] = useState('')
  return (
    <KeyboardAvoidingView  style={styles.container}>
      <ScrollView style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => {setBodyText(text)}}
          autoFocus
        />
      </ScrollView>
      <CircleButton onPress={() => {handlePress(bodyText)}}>
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
