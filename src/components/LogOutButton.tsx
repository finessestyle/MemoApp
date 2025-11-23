import { Text, TouchableOpacity, StyleSheet } from 'react-native'

interface Props {
  handlePress: () => void
}

const LogOutButton = (props: Props) => {
  const { handlePress } = props
  return (
    <TouchableOpacity onPress={() => {handlePress()}}>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255,255,255,0.7)'
  }
})

export default LogOutButton
