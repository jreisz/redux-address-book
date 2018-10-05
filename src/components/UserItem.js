import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { hashHistory } from 'react-router';
import { firstToUpper } from '../utilities/utitlities';

export default class UserItem extends Component {
  getHighlightedText(text, highlight) {
    this.text = text;

    // Split text on higlight term, include term itself into parts, ignore case
    const parts = this.text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {
          parts.map((part, index) => {
            if (part.toLowerCase() === highlight.toLowerCase()) {
              return <b key={index}>{part}</b>;
            }
            return part;
          })
        }
      </span>
    );
  }

  handleClick(ev, path) {
    const { onClick } = this.props;
    ev.preventDefault();
    onClick();
    hashHistory.push(path);
  }

  render() {
    const { user, term } = this.props;
    return (
      <tr onClick={ev => this.handleClick(ev, `/user:${user.login.username}`)} to={`/user:${user.login.username}`}>
        <td>
          <img
            src={user.picture.thumbnail}
            alt={`${firstToUpper(user.name.first)} ${firstToUpper(user.name.last)}`}
            className="avatar-image"
          />
        </td>
        <td>
          {`${firstToUpper(user.name.title)}`}
        </td>
        <td>{this.getHighlightedText(`${firstToUpper(user.name.first)}`, term)}</td>
        <td>{this.getHighlightedText(`${firstToUpper(user.name.last)}`, term)}</td>
      </tr>
    );
  }
}

UserItem.propTypes = {
  onClick: PropTypes.func,
  user: PropTypes.object,
  term: PropTypes.string,
};
