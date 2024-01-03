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

const port = Number.parseInt(process.env.PORT) || 4000;


const { url } = await startStandaloneServer(server, {
    listen: { port },
});

console.log(`🚀  Server ready at: ${url}`);
