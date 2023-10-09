import { Route } from "gateway";

export default class implements Route {
	async data(req: Request) {
		return await req.json();
	}
};
