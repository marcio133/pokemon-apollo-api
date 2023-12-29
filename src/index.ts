import { readFileSync } from 'fs';
import { pokemonResolvers } from './resolvers/pokemon.resolvers.js';
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from '@apollo/server';

const typeDefs = readFileSync('src/schema/pokemon.graphql', { encoding: 'utf-8' });

const resolvers = pokemonResolvers;

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);