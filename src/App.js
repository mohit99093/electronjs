import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Details from './Components/Details'
function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/:id" component={Details} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
		</>
	)
}

export default App
