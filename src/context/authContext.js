import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const Provider = AuthContext.Provider;

const AuthProvider = ({ children }) => {
	const [id, setId] = useState(1);

	return (
	<Provider value={{ id, setId }}>
		{children}
	</Provider>
	)
};

export { AuthContext, AuthProvider };