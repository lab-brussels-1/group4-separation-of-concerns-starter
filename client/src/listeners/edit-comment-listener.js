import { editCommentClicked } from '../handlers/edit-comment-handler.js';

export const editComment = (id = '') => {
	document.getElementById(id).addEventListener('click', editCommentClicked);
};
