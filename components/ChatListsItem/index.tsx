import moment from 'moment';
import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import { ChatRoom } from '../../types';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListsItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const user = chatRoom.users[1];
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Image source={{ uri: user.imageUri }} style={styles.avatar}/>

                <View style={styles.midContainer}>
                    <Text style={styles.username}>
                        {user.name }
                    </Text>
                    <Text style={styles.lastMessage}>
                        {chatRoom.lastMessage.content}
                    </Text>
                </View>
            
            </View>

            <Text style={styles.timezone}>
                {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </View>
    )
};

export default ChatListsItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    leftContainer: {
        flexDirection: 'row',
    },
    midContainer: {
        justifyContent: 'space-around'
    },
    lastMessage: {
        fontSize: 16,
        color: 'grey',
    },
    avatar: {
        height: 60,
        width: 60,
        marginRight: 10,
        borderRadius: 50,
    },
    timezone: {
        fontSize: 16,
        color: 'grey',
    }
});