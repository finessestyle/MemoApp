import { View, TextInput, StyleSheet, Alert } from 'react-native'
import { router } from 'expo-router'
import { useState } from 'react'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { auth, db } from '../../config'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'

const handlePress = (bodyText: string) => {
  if (auth.currentUser === null) return
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then((docRef) => {
      console.log(docRef.id)
      router.back()
    })
    .catch((error) => {
      console.log(error)
      Alert.alert('投稿に失敗しました')
    })
}

const Create = () => {
  const [bodyText, setBodyText] = useState('')
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => { setBodyText(text) }}
        />
      </View>
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
    lineHeight: 32
  }
})

export default Create
