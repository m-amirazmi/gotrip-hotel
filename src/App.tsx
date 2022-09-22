import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HLP } from './pages/HLP';

export const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HLP />} />
			</Routes>
		</BrowserRouter>
	);
};
