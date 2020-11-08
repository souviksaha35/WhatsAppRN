function users(parent, args, context, info) {
    const user = context.prisma.user.create({
        data: {
            name: args.name,
            imageUri: args.imageUri,
            status: args.status
        }
    })

    return user
}

function chatRoomUser(parent, args, context, info) {
    const chatRoomUser = context.prisma.chatRoomUser.create({
        data: {
            userrID: args.userID,
            chatRoomID: args.chatRoomID,
        }
    })

    return chatRoomUser
}

module.exports = {
    users,
    chatRoomUser,
}