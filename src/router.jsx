import { render } from "solid-js/web";
import { lazy } from "solid-js";
import { Route, Router } from "@solidjs/router";

const Home = lazy(() => import("./routes/home.jsx"));
const Projects = lazy(() => import("./routes/projects.jsx"));
const NotFound = lazy(() => import("./routes/404.jsx"));
const About = lazy(() => import("./routes/about.jsx"));

render(
    () => (
        <Router>
            <Route path='/' component={Home} />
            <Route path='/projects' component={Projects} />
            <Route path='/about' component={About} />
            <Route path='*' component={NotFound} />
        </Router>
    ),
    document.getElementById("aspy.dev"),
);
