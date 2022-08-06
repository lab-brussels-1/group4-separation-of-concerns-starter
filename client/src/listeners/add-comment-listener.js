import { ADD_EVENT } from '../../data/constants.js';
import { addCommentHandle } from '../handlers/add-comment-handler.js';

export const addCommentEvent = (element) => {
	element.addEventListener(ADD_EVENT, addCommentHandle);
};
