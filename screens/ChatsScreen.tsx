import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ChatListsItem from '../components/ChatListsItem';

import ChatRooms from '../data/ChatRooms';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
      data={ChatRooms}
      renderItem={({ item }) => <ChatListsItem chatRoom={item}/>}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
