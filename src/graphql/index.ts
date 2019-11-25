import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
	serviceList: [
		{ name: 'accounts', url: 'http://localhost:14047/graphql' },
		// { name: 'reviews', url: 'http://localhost:14044/graphql' },
		// { name: 'products', url: 'http://localhost:14043/graphql' },
		// { name: 'inventory', url: 'http://localhost:14042/graphql' },
	],
});
@Injectable()
export class GraphqlService implements GqlOptionsFactory {
	async createGqlOptions(): Promise<GqlModuleOptions> {
		const { schema, executor } = await gateway.load();
		return {
			schema,
			executor,
		};
	}
}
