import React from 'react';
import StepForm from './Component/stepform';
import auth from './auth';
import Home from './Component/home';

function App() {
	if (auth.isAuthenticated()) return <Home />;
	else return <StepForm />;
}

export default App;
