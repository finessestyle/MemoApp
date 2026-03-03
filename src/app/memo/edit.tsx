import {
  View, TextInput, StyleSheet, Alert
} from 'react-native'
import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { router, useLocalSearchParams } from 'expo-router'
import { Octicons } from '@expo/vector-icons'

import { auth , db } from '../../config'
import CircleButton from '../../components/CircleButton'
import KeyboardAvoidingView from '../../components/KeyBordAvoidingView'

const handlePress = (id: string, bodyText: string) => {
  if(auth.currentUser === null) return
  if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    setDoc(ref, {
      bodyText,
      updatedAt: Timestamp.fromDate(new Date())
    })
    .then (() => {
      router.replace('memo/list')
    })
    .catch(() => {
      Alert.alert('更新に失敗しました')
    })
}

const Edit = () => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        const RemoteBodyText = docRef.data()?.bodyText
        setBodyText(RemoteBodyText)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
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
      <CircleButton onPress={() => { handlePress(id, bodyText) }}>
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
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingHorizontal: 27,
  }
})

export default Edit
