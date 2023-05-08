import { Route, Routes} from 'react-router-dom';
import './meltdown.css';
import { Register } from './Auth/Register';
import { Login } from './Auth/Login';
import { NavBar } from './Components/Nav/NavBar';
import { ApplicationViews } from './Components/Views/ApplicationViews';
import { Authorized } from './Components/Views/Authorized.js';
import { SimpleBottomNavigation } from './Components/Nav/BottomNav';

export const Meltdown = () => {
	return <Routes>
		<Route path="/login" element={<Login/>} />
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			<Authorized>
				<>
          <NavBar/>
          <ApplicationViews/>
		  <SimpleBottomNavigation/>
        </>
			</Authorized>


		} />
	</Routes>
}
