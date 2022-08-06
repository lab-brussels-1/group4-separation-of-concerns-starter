/* eslint-disable indent */
/* eslint-disable no-tabs */
/* eslint-disable sonarjs/no-duplicate-string */
import { INPUT_ID, OUTPUT_ID } from '../../data/constants.js';

export const addCommentHandle = () => {
	const commentParent = document.getElementById('content-container');
	// creating a div to wrap the entire comment
	const divEl = document.createElement('div');
	divEl.className = 'comment-section';
	divEl.id = 'comment-section-id';
	document.getElementById(OUTPUT_ID).appendChild(divEl);
	commentParent.prepend(divEl);
	// creating a list to display all the buttons on comment
	const divButtons = document.createElement('div');
	divButtons.className = 'comment-buttons';
	divButtons.id = 'comment-buttons-id';
	document.getElementById('comment-section-id').appendChild(divButtons);

	// creating all the buttons

	// upvote button

	const upVoteButton = document.createElement('button');
	upVoteButton.className = 'up-vote';
	upVoteButton.id = 'upvote-button';
	upVoteButton.type = 'button';
	upVoteButton.innerHTML = 'Up Vote';
	document.getElementById('comment-buttons-id').appendChild(upVoteButton);

	// downvote button

	const downVoteButton = document.createElement('button');
	downVoteButton.className = 'down-vote';
	downVoteButton.id = 'downvote-button';
	downVoteButton.type = 'button';
	downVoteButton.innerHTML = 'Down Vote';
	document.getElementById('comment-buttons-id').appendChild(downVoteButton);

	// edit button

	const editButton = document.createElement('button');
	editButton.className = 'edit-button';
	editButton.id = 'edit-button-id';
	editButton.type = 'button';
	editButton.innerHTML = 'Edit';
	document.getElementById('comment-buttons-id').appendChild(editButton);

	// remove button

	const removeButton = document.createElement('button');
	removeButton.className = 'remove-button';
	removeButton.id = 'remove-button-id';
	removeButton.type = 'button';
	removeButton.innerHTML = 'x';
	document.getElementById('comment-buttons-id').appendChild(removeButton);

	// creating a p element to display the input paragraphSeparator
	const commentP = document.getElementById(INPUT_ID).value;
	const pEl = document.createElement('p');
	pEl.className = 'the-comment';
	pEl.id = 'the-comment-id';
	pEl.innerText = commentP;
	document.getElementById('comment-section-id').appendChild(pEl);
};
