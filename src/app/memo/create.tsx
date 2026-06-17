import { View, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from 'react-native'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { auth, db } from '../../config'
import { useState } from 'react'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = async (bodyText: string) => {
  if (auth.currentUser === null) return
  const ref = collection(db, `user/${auth.currentUser.uid}/memos`)
  await addDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then((docRef) => {
      console.log('success', docRef.id)
      router.back()
    })
    .catch((error) => {
      Alert.alert(error)
    })
}

const Create = () => {
  const [bodyText, setBodyText] = useState('')
  return (
    <KeyboardAvoidingView
      behavior='height'
      style={styles.container}
      keyboardVerticalOffset={80}
    >
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          style={styles.input}
          multiline
          onChangeText={(text) => {setBodyText(text)}}
        />
      </View>
      <CircleButton onPress={() => {handlePress(bodyText)}} >
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

export default Create
