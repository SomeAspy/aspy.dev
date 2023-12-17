import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

const Home = lazy(() => import("./routes/home"));
const Projects = lazy(() => import("./routes/projects"));
const About = lazy(() => import("./routes/about"));
const FourOhFour = lazy(() => import("./routes/404"));
const Contact = lazy(() => import("./routes/contact"));

render(() => (
        <Router>
            <Route path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/*" component={FourOhFour} />
            <Route path="/contact" component={Contact}/>
        </Router>
    ),
    document.getElementById("root")!
);