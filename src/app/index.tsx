import { View, Text, StyleSheet } from 'react-native'

const Index = () => {
  return(
    <View style={styles.container}>

      <View style={styles.inner}>
        <View>
          <Text>MemoApp</Text>
          <Text>ログアウト</Text>
        </View>
      </View>

      <View>
        <View>
            <Text>買い物リスト</Text>
            <Text>2025年5月28日0:07</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>

        <View>
            <Text>買い物リスト</Text>
            <Text>2025年5月28日0:07</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>

        <View>
            <Text>買い物リスト</Text>
            <Text>2025年5月28日0:07</Text>
        </View>
        <View>
          <Text>X</Text>
        </View>

      </View>

      <View>
        <Text>＋</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inner: {
  }
})

export default Index
