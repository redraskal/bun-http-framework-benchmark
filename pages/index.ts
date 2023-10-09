import { Route } from "gateway";

export default class implements Route {
	body() {
		return new Response("Hi");
	}
};
