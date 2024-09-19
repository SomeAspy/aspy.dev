import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";
import { render } from "solid-js/web";

const Home = lazy(() => import("./routes/home"));
const Projects = lazy(() => import("./routes/projects"));
const FourOhFour = lazy(() => import("./routes/404"));

render(
	() => (
		<Router>
			<Route path="/" component={Home} />
			<Route path="/projects" component={Projects} />
			<Route path="/*" component={FourOhFour} />
		</Router>
	),
	document.getElementById("root")!,
);
