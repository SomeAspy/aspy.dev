import { render } from 'solid-js/web';
import { Routes, Route, Router } from '@solidjs/router';

import { Home } from './routes/home';
import { Projects } from './routes/projects';

render(
    () => (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    ),
    document.getElementById('root')!
)