import { ReactNode, useState, useEffect } from 'react'
import {
  ScrollView, TextInput, StyleSheet, Alert
} from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { db, auth } from '../../config'
import KeyboardAvoidingView from '../../components/KeyBoardAvoidingView'
import Icon from '../../components/Icon'
import CircleButton from '../../components/CircleButton'

const handlePress = (id: string, bodyText: string) => {
  if (auth.currentUser === null) return
  const ref = doc(db, `/users/${auth.currentUser.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
  .then (() => {
    router.back()
  })
  .catch(() => {
    Alert.alert('更新に失敗しました')
  })

}

const Edit = (): ReactNode => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `/users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        console.log(docRef.data())
        const RemoteBodyText = docRef.data()?.bodyText
        setBodyText(RemoteBodyText)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          autoFocus
          onChangeText={(text) => {setBodyText(text)}}
        />
      </ScrollView>
      <CircleButton onPress={() => {handlePress(id, bodyText)}}>
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
    paddingHorizontal: 27
  }
})

export default Edit
