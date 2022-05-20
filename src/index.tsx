import { createRoot } from 'react-dom/client';

import App from '@/App';
import axios from "axios";

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL =
//     process.env.NODE_ENV === 'prod' ? 'http://localhost:8000' : 'http://localhost:8000';

const container = document.getElementById('root');
const root = createRoot(container as Element);
root.render(<App />);