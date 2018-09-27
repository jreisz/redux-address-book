import React, { Component } from 'react'
import { hashHistory } from 'react-router';
import { firstToUpper } from '../utilities/utitlities';

export default class UserItem extends Component {

	handleClick(ev, path) {
		ev.preventDefault();
		this.props.onClick();
		hashHistory.push(path);
	}
	
	getHighlightedText(text, higlight) {
    // Split text on higlight term, include term itself into parts, ignore case
    var parts = text.split(new RegExp(`(${higlight})`, 'gi'));
    return <span>{parts.map((part, i) => part.toLowerCase() === higlight.toLowerCase() ? <b key={i}>{part}</b> : part)}</span>;
	}
	
	render() {
		return (
			<tr onClick={(ev) => this.handleClick(ev, `/user:${this.props.user.login.username}`)} to={`/user:${this.props.user.login.username}`}>
				<td>
					<img 
						src={this.props.user.picture.thumbnail} 
						alt={`${firstToUpper(this.props.user.name.first)} ${firstToUpper(this.props.user.name.last)}`} 
						className="avatar-image"
					/>
				</td>
				<td>
						{`${firstToUpper(this.props.user.name.title)}`}
				</td>
				<td>{this.getHighlightedText(`${firstToUpper(this.props.user.name.first)}`, this.props.term)}</td>
				<td>{this.getHighlightedText(`${firstToUpper(this.props.user.name.last)}`, this.props.term)}</td>
			</tr>
		)
	}
}
