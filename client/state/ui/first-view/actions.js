/**
 * Internal dependencies
 */
import {
	FIRST_VIEW_HIDE
} from 'state/action-types';

import { savePreference } from 'state/preferences/actions';
import { getPreference } from 'state/preferences/selectors';

export function hideView( { view, enabled } ) {
	const hideAction = {
		type: FIRST_VIEW_HIDE,
		view,
	};

	return ( dispatch, getState ) => {
		dispatch( hideAction );
		dispatch( persistToPreferences( { getState, view, disabled: ! enabled } ) );
	};
}

function persistToPreferences( { getState, view, disabled } ) {
	return savePreference( 'firstViewHistory', [
		...getPreference( getState(), 'firstViewHistory' ).filter( item => item.view !== view ), {
			view,
			timestamp: Date.now(),
			disabled,
		}
	] );
}
