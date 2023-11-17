import { render } from "solid-js/web";
import { Routes, Route, Router } from "@solidjs/router";
import { lazy } from "solid-js";

// apparently loading EVERY page at any given moment is default behavior
const Home = lazy(() => import("./routes/home"));
const Projects = lazy(() => import("./routes/projects"));
const About = lazy(() => import("./routes/about"));
const FourOhFour = lazy(() => import("./routes/404"));
const Contact = lazy(() => import("./routes/contact"));

render(
    () => (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<FourOhFour />} />
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    ),
    document.getElementById("root")!
);