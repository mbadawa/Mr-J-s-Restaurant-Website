import "../css/main.css";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "../pages/ContactUs";
import Menu from "../pages/Menu";
import Catering from "../pages/Catering";

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/gallery" component={Gallery}></Route>
				<Route exact path="/contact-us" component={ContactUs}></Route>
				<Route exact path="/menu" component={Menu}></Route>
				<Route exact path="/catering" component={Catering}></Route>
			</Switch>
		</Router>
	);
}

export default App;
