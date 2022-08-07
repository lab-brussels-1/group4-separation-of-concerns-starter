import { TRANSFORM_EVENT_ID } from '../data/constants.js';
import { addCommentEvent } from './listeners/add-comment-listener.js';

addCommentEvent(document.getElementById(TRANSFORM_EVENT_ID));
