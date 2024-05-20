import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Profile = () => {
  return (
    <View className="flex items-center justify-center w-100 h-96">
      <Link href="/SignUp">Log Out</Link>
    </View>
  )
}

export default Profile
