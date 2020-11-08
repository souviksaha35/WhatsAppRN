const { GraphQLServer } = require('graphql-yoga')

const { PrismaClient } = require('@prisma/client')

const Mutation = require('./resolvers/Mutation')

const Query = require('./resolvers/Query')

const prisma = new PrismaClient();

// 2
const resolvers = {
  Mutation,
  Query
}

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
      prisma,
  }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
