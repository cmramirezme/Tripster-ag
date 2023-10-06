import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	usuarioQueries,
	usuarioTypeDef,
	usuarioMutations,
	reservaQueries,
	reservaTypeDef,
	reservaMutations,
	routesTypeDef,
	routeQueries,
	routeMutations,
	flightQueries,
	flightTypeDef,
	countryMutations
} from './swarch2023ii/categories/typeDefs';

import usuarioResolvers from './swarch2023ii/categories/resolvers';


// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		usuarioTypeDef,
		reservaTypeDef,
		routesTypeDef,
		flightTypeDef
	],
	[
		usuarioQueries,
		reservaQueries,
		routeQueries,
		flightQueries
	],
	[
		usuarioMutations,
		reservaMutations,
		routeMutations,
		countryMutations
	],
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		usuarioResolvers
	)
});
