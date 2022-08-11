import { editCommentClicked } from '../handlers/edit-comment-handler.js';

/* eslint-disable indent */
/* eslint-disable no-tabs */
export const editComment = (id = '') => {
	document.getElementById(id).addEventListener('click', editCommentClicked);
};
