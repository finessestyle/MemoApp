import { Text, TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native'

interface Props {
  children: JSX.Element
  style?: ViewStyle
  onPress?: () => void
}

const CircleButton = (props: Props) => {
  const { children, style, onPress } = props
  return (
    <TouchableOpacity onPress={onPress} style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
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
    shadowColor: '#000000',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8
  },
  circleButtonLabel: {
    fontSize: 40,
    lineHeight: 48,
    color: '#ffffff'
  }
})
export default CircleButton
