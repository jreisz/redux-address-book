import React, { Component } from 'react';

export default class SearchInput extends Component {

	render(){
		let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <div className="">
        <div className="">
          <form onSubmit={(evt) => handleSubmitQuery(evt)}>
            <div className="input-group">
							{/* <span className="input-group-label"><Icon name="fi-magnifying-glass" /></span> */}
              <input
                onChange={(evt) => handleSearchInput(evt)}
                value={query}
                className="input-group-field"
                type="search"
								placeholder="Search..."
								ref="searchInput" 
								autoFocus
							/>
							<div className="input-group-button">
								<button className="button" type="submit">Search <i className="fi-magnifying-glass"></i></button>
            	</div>	
            </div>
          </form>
        </div>
      </div>
    )
  }
}
