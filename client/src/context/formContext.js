import { createContext, useState } from 'react';

const FormContext = createContext();

const Provider = FormContext.Provider;

const initialState = {
	fullname: '',
	phonenumber: '',
	course: '',
	local: '',
	note: '',
};

const FormProvider = ({ children }) => {
	const [state, setState] = useState(initialState);

	return (
	<Provider value={{ state, setState }}>
		{children}
	</Provider>
	)
};

export { FormContext, FormProvider };