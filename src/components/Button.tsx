import { ReactNode } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  label: string
}

const Button = (props: Props): ReactNode => {
  const { label } = props
  return (
    <View style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    alignSelf: 'flex-start',
    borderRadius: 4,
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 24
  }
})

export default Button
