import { createContext, useState } from 'react';

const AuthContext = createContext();

const Provider = AuthContext.Provider;

const initialState = {
	fullname: '',
	phonenumber: '',
	course: '',
	local: '',
	note: '',
};

const AuthProvider = ({ children }) => {
	const [state, setState] = useState(initialState);

	return (
	<Provider value={{ state, setState }}>
		{children}
	</Provider>
	)
};

export { AuthContext, AuthProvider };