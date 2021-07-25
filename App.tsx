import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import NewsScreen from "./screens/NewsScreen";
import EventsScreen from "./screens/EventsScreen";
import NoticesScreen from "./screens/NoticesScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        {/* <NewsScreen /> */}
        {/* <EventsScreen /> */}
        {/* <NoticesScreen /> */}
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
