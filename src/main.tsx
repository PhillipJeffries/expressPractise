import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'

import './commonStyle.scss'

const root = createRoot(document.getElementById('root'));
root.render(<App />);