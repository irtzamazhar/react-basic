import React,{Component} from 'react';
import AvatarList from './AvatarList';
import '../Style.css';
import 'tachyons';

class Avatar extends Component{
	constructor(){
		super();
		this.state = {
			name: "My first react app"
		}
	}
	stateChange(){
		this.setState({
			name: "Text changed"
		})
	}
	render(){
		const avatarListArr = [
			{
				id: 1,
				name: "Irtza Mazhar",
				work: "Web Developer"
			},
			{
				id: 2,
				name: "Asad Siddique",
				work: "Technical Support"
			},
			{
				id: 3,
				name: "Ranna Azam",
				work: "Operation Manager"
			},
			{
				id: 4,
				name: "Istehbab Ullah",
				work: "Network Engineer"
			},
		]
		const avatarCards = avatarListArr.map( (ac, i) => {
			return <AvatarList key={i} id={avatarListArr[i].id} name={avatarListArr[i].name} work={avatarListArr[i].work}/>
		})
		return 	<div className="main_page">
					<h1 className="tc">{this.state.name}</h1>
					{avatarCards}
					<button onClick={ () => this.stateChange() }>Click</button>
				</div>
	}
}

export default Avatar;