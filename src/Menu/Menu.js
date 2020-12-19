import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// router imports
import Home from "../Home/Home";
import Bank from "../Bank/Bank";
import Bills from "../Bills/Bills";

export default function Menu() {
	return (
		<div>
			<nav className='menuWrap'>
				<NavLink className='link' exact to='/' activeClassName='active'>
					Home
				</NavLink>
				<NavLink className='link' to='/Bank' activeClassName='active'>
					Bank Ballance
				</NavLink>
				<NavLink className='link' to='/Bills' activeClassName='active'>
					Bills
				</NavLink>
			</nav>
			<div>
				<Route exact path='/' component={Home} />
				<Route exact path='/Bank' component={Bank} />
				<Route exact path='/Bills' component={Bills} />
			</div>
		</div>
	);
}
