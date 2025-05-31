import { View, TextInput, StyleSheet, Alert } from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { useState, useEffect } from 'react'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import { auth, db } from '../../config'
import CircleButton from '../../components/CirecleButton'
import Icon from '../../components/Icon'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'

const handlePress = (id: string, bodyText: string) => {
  if(auth.currentUser === null) return
  const ref = doc(db, `/users/${auth.currentUser.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  })
  .then(()=>{
    router.back()
  })
  .catch(()=>{
    Alert.alert('更新に失敗しました')
  })
}

const Edit = () => {
  const id = String(useLocalSearchParams().id)
  const [bodyText, setBodyText] = useState('')
  console.log('edit', id)
  useEffect(()=> {
    if(auth.currentUser === null) return
    const ref = doc(db, `/users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref)
      .then((docRef) => {
        const RemoteBodyText = docRef.data()?.bodyText
        setBodyText(RemoteBodyText)
      })
      .catch((error)=> {
        console.log(error)
      })
  }, [])

  return(
    <KeyboardAvoidingView  style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={(text) => {setBodyText(text)}}
          multiline
          style={styles.input}
          value={bodyText}
          autoFocus
        />
      </View>
      <CircleButton onPress={()=>{handlePress(id, bodyText)}} >
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
    paddingVertical: 32,
    paddingHorizontal: 27,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})
export default Edit
