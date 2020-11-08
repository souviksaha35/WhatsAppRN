function user(parent, args, context, info) {
    return context.prisma.user.findOne()
}

module.exports = {
    user,
}