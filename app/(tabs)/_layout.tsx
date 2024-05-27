import { Link, Tabs } from 'expo-router'
import React from 'react'
import { Pressable, View, Text } from 'react-native'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={
        {
          // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
        }
      }
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <View>
                    <Text>X</Text>
                    {/* <FontAwesome */}
                    {/*   name="info-circle" */}
                    {/*   size={25} */}
                    {/*   // color={Colors[colorScheme ?? 'light'].text} */}
                    {/*   style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }} */}
                    {/* /> */}
                  </View>
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  )
}
