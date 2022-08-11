/* eslint-disable indent */
/* eslint-disable no-tabs */
export const removeCommentHandler = (ev) => {
	if (ev.target.classList.contains('remove-button')) {
		ev.target.parentElement.parentElement.remove();
	}
};
