import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { doc, setDoc, getDoc, Timestamp} from 'firebase/firestore'
import { auth, db } from '../../config'
import CircleButton from '../../components/CircleButton'
import Icon from '../../components/Icon'

const handlePress = (id: string, bodyText: string) => {
  if ( auth.currentUser === null ) return
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
  router.back()
}

const edit = () => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  useEffect(() => {
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        console.log(docRef.data())
        const RemoteBodyText = docRef?.data()?.bodyText
        setBodyText(RemoteBodyText)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])
  return (
    <KeyboardAvoidingView behavior='height' style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          multiline
          value={bodyText}
          style={styles.input}
          onChangeText={(text) => {setBodyText(text)}}
          autoFocus
        />
      </View>
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
    paddingVertical: 32,
    flex: 1
  },
  input: {
    flex: 1,
    paddingHorizontal: 27,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default edit
