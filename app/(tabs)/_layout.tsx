import { Redirect, Tabs } from 'expo-router' // Change Slot to Tabs

export default function _layout() {
  const isAuthenticated = false; // Change this to true to see your tabs!

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" /> // Redirect to Auth, not Profile
  }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="search" options={{ title: 'Search' }} />
      <Tabs.Screen name="cart" options={{ title: 'Cart' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  )
}