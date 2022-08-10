import { render } from 'react-dom';
import App from './App';
import { SankeyData } from './types/sankey';

const rootElement = document.getElementById('root');
render(<App />, rootElement);
