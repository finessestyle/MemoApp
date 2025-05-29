import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import CircleButton from '../../components/CirecleButton'
// import { AntDesign } from '@expo/vector-icons'
import Icon from '../../components/Icon'

const handlePress = () => {
  router.push('/memo/edit')
}

const Detail = () => {
  return(
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2025年5月28日1:18</Text>
      </View>
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          ・りんご
          ・バナナ
          ・にんじん
          ・ジャガイモ
        </Text>
      </ScrollView >
      <CircleButton style={{ top: 60, bottom: 'auto' }} onPress={handlePress}>
        <Icon name='pencil' size={40} color={'#ffffff'} />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 18
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold'
  },
  memoDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#000000'
  }
})

export default Detail
