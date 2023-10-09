import { MatchedRoute } from "bun";
import { Route, Data } from "gateway";

export default class implements Route {
	data(_: Request, route: MatchedRoute) {
		return {
			id: route.params.slug,
			query: route.query.name,
		};
	}	

	body(data: Data<this>) {
		return new Response(`${data.id} ${data.query}`, {
			headers: {
				"x-powered-by": "benchmark",
			},
		});
	}
};
