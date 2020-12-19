import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

// router imports
import Home from "../Home/Home";
import Bank from "../Bank/Bank";
import Bills from "../Bills/Bills";
import Schedule from "../Schedule/Schedule";
import Plans from "../Plans/Plans";

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
				<NavLink className='link' to='/Schedule' activeClassName='active'>
					Schedule
				</NavLink>
				<NavLink className='link' to='/Plans' activeClassName='active'>
					Plans
				</NavLink>
			</nav>
			<div>
				<Route exact path='/' component={Home} />
				<Route exact path='/Bank' component={Bank} />
				<Route exact path='/Bills' component={Bills} />
				<Route exact path='/Schedule' component={Schedule} />
				<Route exact path='/Plans' component={Plans} />
			</div>
		</div>
	);
}
