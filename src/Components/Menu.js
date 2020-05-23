import React,{Component} from 'react';
import '../Style.css';
import {Link} from 'react-router-dom';

class Menu extends Component{
	render(){
		return 	<div className="menu_style">
					<ul>
						<li><Link to="/"> Home </Link></li>
						<li><Link to="/about"> About </Link></li>
						<li><Link to="/contact"> Contact </Link></li>
					</ul>
				</div>
	}
}

export default Menu;