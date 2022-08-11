import { TRANSFORM_EVENT_ID } from '../data/constants.js';
import { addCommentEvent } from './listeners/add-comment-listener.js';
import { editComment } from './listeners/edit-comment-listener.js';

addCommentEvent(document.getElementById(TRANSFORM_EVENT_ID));
editComment('content-container');
