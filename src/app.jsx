/* @refresh reload */
import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Routes, Route, Router } from 'solid-app-router';
import { MetaProvider } from 'solid-meta';

const Home = lazy(() => import('./routes/home.jsx'));
const About = lazy(() => import('./routes/about.jsx'));
const Projects = lazy(() => import('./routes/projects.jsx'));
const Contact = lazy(() => import('./routes/contact.jsx'));
const Tixte = lazy(() => import('./routes/tixte.jsx'));
const NotFound = lazy(() => import('./routes/404.jsx'));

const tags = [];

render(
    () => (
        <MetaProvider>
            <Router>
                <Routes>
                    <Route path='/' component={Home} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} />
                    <Route path='/tixte' component={Tixte} />
                    <Route path='*' component={NotFound} />
                </Routes>
            </Router>
        </MetaProvider>
    ),
    document.getElementById('app'),
);
