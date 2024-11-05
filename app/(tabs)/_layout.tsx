import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import TabBarComponent from "@/components/TabBarComponent";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <>
            <TabBarComponent />

            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
                    headerShown: false,
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                name={focused ? "home-sharp" : "home-outline"}
                                color={focused ? "#3669c9" : color}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="wishlist"
                    options={{
                        title: "Wishlist",
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                name={focused ? "heart" : "heart-outline"}
                                color={focused ? "#3669c9" : color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="order"
                    options={{
                        title: "Order",
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                name={focused ? "bag" : "bag-outline"}
                                color={focused ? "#3669c9" : color}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="account"
                    options={{
                        title: "Account",
                        tabBarIcon: ({ color, focused }) => (
                            <TabBarIcon
                                name={focused ? "people" : "people-outline"}
                                color={focused ? "#3669c9" : color}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
}
