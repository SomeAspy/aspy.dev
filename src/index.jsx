/* @refresh reload */
import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Routes, Route, Router } from 'solid-app-router';
import { MetaProvider, renderTags } from 'solid-meta';

const Home = lazy(() => import('./pages/home.jsx'));
const About = lazy(() => import('./pages/about.jsx'));
const Projects = lazy(() => import('./pages/projects.jsx'));
const Contact = lazy(() => import('./pages/contact.jsx'));
const Tixte = lazy(() => import('./pages/tixte.jsx'));
const NotFound = lazy(() => import('./pages/404.jsx'));

const tags = [];

render(
    () => (
        <MetaProvider>
            <Router>
                <Routes>
                    <Route path='/' element={Home} />
                    <Route path='/projects' element={Projects} />
                    <Route path='/contact' element={Contact} />
                    <Route path='/about' element={About} />
                    <Route path='/tixte' element={Tixte} />
                    <Route path='*' element={NotFound} />
                </Routes>
            </Router>
        </MetaProvider>
    ),
    document.getElementById('root'),
);
