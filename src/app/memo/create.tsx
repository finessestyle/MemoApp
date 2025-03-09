import {
  View, TextInput, StyleSheet
} from 'react-native'
import { router } from 'expo-router'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { db, auth } from '../../config'
import { useState } from 'react'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import KeyboardAvoidingView from '../../components/KeybordAvoingView'

const handlePress =  (bodyText: string): void => {
  // ログイン中のユーザーが存在するか確認
  if (auth.currentUser === null) return
  // usersコレクションのユーザーmemosを参照する
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  // 参照したドキュメントに追加する
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

const Create = (): JSX.Element => {
  const [bodyText, setBodyText] = useState('')
  return (
    <KeyboardAvoidingView  style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          style={styles.input}
          value={bodyText}
          onChangeText={(text) => { setBodyText(text)}}
          autoFocus
        />
      </View>
      <CircleButton onPress={() => {handlePress(bodyText)} }>
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

export default Create
