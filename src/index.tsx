import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import '../public/fonts/AeonikFono-Black-Web/css/stylesheet-family-support.css';
import '../public/fonts/AeonikFono-Black-Web/css/stylesheet-individual-weights.css';
import '../public/fonts/AeonikFono-Bold-Web/css/stylesheet-family-support.css';
import '../public/fonts/AeonikFono-Bold-Web/css/stylesheet-individual-weights.css';
import '../public/fonts/AeonikFono-Medium-Web/css/stylesheet-family-support.css';
import '../public/fonts/AeonikFono-Medium-Web/css/stylesheet-individual-weights.css';
import './index.css';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
