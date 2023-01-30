import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import '../public/static/fonts/AeonikFono-Black-Web/css/stylesheet-family-support.css';
import '../public/static/fonts/AeonikFono-Black-Web/css/stylesheet-individual-weights.css';
import '../public/static/fonts/AeonikFono-Bold-Web/css/stylesheet-family-support.css';
import '../public/static/fonts/AeonikFono-Bold-Web/css/stylesheet-individual-weights.css';
import '../public/static/fonts/AeonikFono-Medium-Web/css/stylesheet-family-support.css';
import '../public/static/fonts/AeonikFono-Medium-Web/css/stylesheet-individual-weights.css';
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
