import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { firstToUpper } from '../utilities/utitlities';

const UserProfile = (props) => {
  const history = browserHistory;
  const { userProfile } = props;
  return (
    userProfile
      ? (
        <div className="container">
          <div className="card-user-container">
            <div className="card-user-avatar">
              <img
                src={`${userProfile.picture.large}`}
                alt={`${firstToUpper(userProfile.name.first)} ${firstToUpper(userProfile.name.last)}`}
                className="user-image"
              />
            </div>
            <div className="card-user-bio">
              <h4>
                {`${firstToUpper(userProfile.name.title)}. ${firstToUpper(userProfile.name.first)} ${firstToUpper(userProfile.name.last)}`}
              </h4>
              <p>
                <i className="fi-telephone" />
                &nbsp;
                {userProfile.phone}
                <br />
                <i className="fi-mail" />
                &nbsp;
                {userProfile.email}
              </p>
              <span className="location">
                <i className="fi-home" />
                <span className="location-text">
                  {`${firstToUpper(userProfile.location.city)}, ${firstToUpper(userProfile.location.state)}`}
                </span>
              </span>
            </div>

            <div className="card-user-button">
              <button type="button" className="hollow button" onClick={history.goBack}>
                Back to users list
              </button>
            </div>

          </div>
        </div>
      )
      : (
        <div className="container">
          <h3>
            {"Looks like you haven't selected a user"}
          </h3>
        </div>
      )
  );
};

UserProfile.propTypes = {
  userProfile: PropTypes.object,
};

export default UserProfile;
