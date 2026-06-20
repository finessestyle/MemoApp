import { StyleSheet, TextInput, KeyboardAvoidingView, Alert, ScrollView } from 'react-native'
import { router } from 'expo-router'
import { useLocalSearchParams } from 'expo-router'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { auth, db } from '../../config'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = (id: string, bodyText: string) => {
  if (auth.currentUser === null) return
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
  .then (() => {
    router.back()
  })
  .catch ((error) => {
    Alert.alert(error)
  })
}

const Edit = () => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then( (docRef) => {
        const remoteBodyText = docRef?.data()?.bodyText
        setBodyText(remoteBodyText)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])


  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <ScrollView style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          style={styles.input}
          multiline
          autoFocus
          onChangeText={(text) => {setBodyText(text)}}
        />
      </ScrollView>
      <CircleButton onPress={() => handlePress(id, bodyText)} style={{ bottom: 40 }}>
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
    fontSize: 16,
    lineHeight: 24,
    textAlignVertical: 'top',
    paddingVertical: 32,
    paddingHorizontal: 27,
  }
})

export default Edit
