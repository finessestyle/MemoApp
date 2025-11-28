import { ReactNode } from 'react'
import { TouchableOpacity, StyleSheet, type ViewStyle } from 'react-native'

//ReactNodeはchildrenだけに適用可能
//ReactNodeはReactがレンダリング可能なもの全てを表す型
interface Props {
  children: ReactNode
  style?: ViewStyle
  onPress?: () => void
  disabled?: boolean
}

const CircleButton = (props: Props) => {
  const { children, style, onPress, disabled } = props
  return (
    <TouchableOpacity
      style={[styles.circleButton, style]}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
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
    textShadowOffset: {width: 0, height: 8},
    elevation: 8
  }
})

export default CircleButton
