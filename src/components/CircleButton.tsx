import { Text, StyleSheet, type ViewStyle, type TextStyle, TouchableOpacity } from 'react-native'

interface Props {
  children: JSX.Element
  style?: ViewStyle
  labelStyle?: TextStyle
  onPress: () => void
}

const CircleButton  = (props: Props) => {
  const { children, style, labelStyle, onPress } = props
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Text style={[styles.circleButtonLabel, labelStyle] }>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  circleButton: {
    height: 64,
    width: 64,
    borderRadius: 32,
    backgroundColor: '#467FD3',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 40,
    right: 40,
    shadowColor: '#00000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 8, height: 8 },
    elevation: 8
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 48
  }
})

export default CircleButton
