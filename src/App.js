import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Home, Test, DonutPage, SpotLightPage, LightingDonut, PhysicDonut } from './pages'

function App() {
	return (
		<div>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/test' element={<Test />} />
					<Route path='/donut' element={<DonutPage />} />
					<Route path='/spotlight' element={<SpotLightPage />} />
					<Route path='/ligthing' element={<LightingDonut />} />
					<Route path='/physic' element={<PhysicDonut />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
