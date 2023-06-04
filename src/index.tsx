import { render } from 'solid-js/web';
import { Routes, Route, Router } from '@solidjs/router';

import { Home } from './routes/home';
import { Projects } from './routes/projects';
import { FourOhFour } from './routes/404';

render(
    () => (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="*" element={<FourOhFour />} />
            </Routes>
        </Router>
    ),
    document.getElementById('root')!
)