import React from 'react';
import Navbar from './Navbar';

const App = (props) => (
  <div>
		<Navbar />
    <div className="grid-container">
			<div className="grid-x grid-margin-x">
				<div className="cell large-10 medium-10 small-12 medium-offset-1 large-offset-1">
					<p></p>
					{props.children}
				</div>
			</div>
    </div>
  </div>
)

export default App;