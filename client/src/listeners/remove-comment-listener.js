import { REMOVE_COMMENT_ID, ADD_EVENT } from '../../data/constants.js';
import { removeCommentHandler } from '../handlers/remove-comment-handler.js';

export const removeCommentListen = document.getElementById(
	ADD_EVENT,
	function (e) {
		if (e.target && e.target.id === REMOVE_COMMENT_ID) {
			return removeCommentHandler;
		}
	},
);
