import { Stack } from 'expo-router'

const Layout = () => {
  return <Stack screenOptions = {{
    headerStyle: {
      backgroundColor: '#467FD3'
    },
    headerTintColor: '#ffffff',
    headerTitle: 'Memo App',
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: 'bold'
    },
    headerBackTitle: 'Back'
  }} />
}

export default Layout
