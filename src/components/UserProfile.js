import React from 'react'
import { browserHistory } from 'react-router';
import Button from './Button';
import { firstToUpper } from '../utilities/utitlities'

const UserProfile = (props) => {
	const history = browserHistory;
	const { userProfile } = props;
	return(
		userProfile ?
		<div className="container">
			<div className="card-user-container">
				<div className="card-user-avatar">
					<img 
						src={`${userProfile.picture.large}`} 
						alt={`${firstToUpper(props.userProfile.name.first)} ${firstToUpper(props.userProfile.name.last)}`}
						className="user-image"
					/>
				</div>
				<div className="card-user-bio">
					<h4>
						{`${firstToUpper(userProfile.name.title)}. ${firstToUpper(userProfile.name.first)} ${firstToUpper(userProfile.name.last)}`}
					</h4>
					<p>
						<i className="fi-telephone"></i> {userProfile.phone}<br />
						<i className="fi-mail"></i> {userProfile.email}
					</p>
					<span className="location">
						<i className="fi-home"></i> 
						<span className="location-text">{`${firstToUpper(userProfile.location.city)}, ${firstToUpper(userProfile.location.state)}`}</span>
					</span>
				</div>
						
				<div className="card-user-button">
					<a href="#" className="hollow button" onClick={history.goBack}>Back to users list</a>
				</div>
		
			</div>
		</div>
		: 
		<div className="container">
			<h3>Looks like you haven't selected a user</h3>
		</div>
	)
}

export default UserProfile;
