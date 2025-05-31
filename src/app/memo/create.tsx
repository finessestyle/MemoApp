import { View, TextInput, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import { auth, db } from '../../config'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useState } from 'react'
import CircleButton from '../../components/CirecleButton'
import Icon from '../../components/Icon'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'

const handlePress = (bodyText: string) => {
  if (auth.currentUser === null ) return
  const ref = collection(db, `/users/${auth.currentUser.uid}/memos`)
  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
  .then( (docRef)=> {
    console.log('success', docRef.id)
    router.back()
  })
  .catch((error) => {
    console.log(error)
  })
}

const Create = () => {
  const [bodyText, setBodyText] = useState('')
  return(
    <KeyboardAvoidingView  style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          onChangeText={(text) => {setBodyText(text)}}
          value={bodyText}
          autoFocus
        />
      </View>
      <CircleButton onPress={() => {handlePress(bodyText) }} >
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
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 32,
    paddingHorizontal: 27,
  }
})
export default Create
