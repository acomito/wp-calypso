/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Main from 'components/main';
import StickyPanel from 'components/sticky-panel';
import Gridicon from 'components/gridicon';

export default class FullPostContainer extends React.Component {

	componentWillMount() {
		document.getElementsByClassName( 'layout' )[ 0 ].classList.add( 'has-no-sidebar' );
	}

	componentWillUnmount() {
		// this may be too late?
		document.getElementsByClassName( 'layout' )[ 0 ].classList.remove( 'has-no-sidebar' );
	}

	render() {
		return (
			<Main className="reader-full-post">
				<StickyPanel>
					<div className="reader-full-post__back">
						<Gridicon icon="back" />
						Back
					</div>
				</StickyPanel>
				Reader full post
			</Main>
		);
	}
}
