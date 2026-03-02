import {
  View, TextInput, StyleSheet
} from 'react-native'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useState } from 'react'
import { router } from 'expo-router'
import { Octicons } from '@expo/vector-icons'
import { db, auth } from '../../config'

import KeyboardAvoidingView from '../../components/KeyBordAvoidingView'
import CircleButton from '../../components/CircleButton'

const handlePress = (bodyText: string) => {
  if (auth.currentUser === null) return
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
  .then((docRef) => {
    console.log('success', docRef.id)
    router.replace('memo/detail')
  })
  .catch((error) => {
    console.log(error)
  })
}


const Create = () => {
  const [bodyText, setBodyText] = useState('')
  return (
    <KeyboardAvoidingView  style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline
          value={bodyText}
          autoFocus
          onChangeText={(text) => {setBodyText(text)}}
        />
      </View>
      <CircleButton onPress={() => { handlePress(bodyText)} }>
        <Octicons name='check' size={40} color='#ffffff' />
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
