import {Text, StyleSheet, TouchableOpacity } from 'react-native'

interface Props{
  label: string
  onPress?: () => void
}

const Button = (props: Props) => {
  const { label , onPress} = props
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ffffff'
  }
})

export default Button
