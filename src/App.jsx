import { useState } from 'react';

import Header from './components/header';
import UserInput from './components/user-input';
import Results from './components/results';
import Footer from './components/footer';
function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1000,
		annualReturns: 7,
		duration: 5,
	});
	function handleInputChange(inputField, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				[inputField]: +newValue,
			};
		});
	}
	const inputIsValid = userInput.duration > 0;
	return (
		<>
			<Header />
			<UserInput
				onChange={handleInputChange}
				userInput={userInput}
			/>
			{!inputIsValid && (
				<p className="center">Please enter duration greater than 0 </p>
			)}
			{inputIsValid && <Results userInput={userInput} />}
			<Footer />
		</>
	);
}

export default App;
