import { View, Text, StyleSheet } from 'react-native'

const List = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text>MemoApp</Text>
          <Text>ログアウト</Text>
        </View>
      </View>
      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2026年2月23日21:13</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2026年2月23日21:13</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2026年2月23日21:13</Text>
          </View>
          <View>
            <Text>×</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default List
