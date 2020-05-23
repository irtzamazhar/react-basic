import React,{Component} from 'react';
import '../Style.css';
import 'tachyons';

class AvatarList extends Component{
	render(){
		return 	<div className="avatar_card ma4 bg-light-purple dib pa3 tc grow shadow4">
					<img src={`https://joeschmoe.io/api/v1/${this.props.name}`} alt={this.props.name}/>
					<h1>{this.props.name} </h1>
					<p> {this.props.work} </p>
				</div>
	}
}

export default AvatarList;