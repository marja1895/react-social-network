import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Profile from './Components/Profile/Profile'
import Dialogs from './Components/Dialogs/Dialogs'
import { Route } from 'react-router-dom'

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Route
					path='/dialogs'
					render={() => <Dialogs store={props.store} state={props.state.dialogsPage} />}
				/>
				<Route
					path='/profile'
					render={() => (
						<Profile
							state={props.state.profilePage}
							dispatch={props.dispatch}
						/>
					)}
				/>
			</div>
		</div>
	)
}

export default App
