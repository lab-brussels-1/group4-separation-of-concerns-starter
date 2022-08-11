export const editCommentClicked = (ev) => {
	// if the button clicked was an edit button which has a class of edit button
	if (ev.target.classList.contains('edit-button')) {
		// console.log(ev.target);
		// console.dir(ev.target.parentElement.nextElementSibling);

		// making the comment paragraph into an input so the user can change it
		const input = document.createElement('input');
		input.value = ev.target.parentElement.nextElementSibling.innerText;
		// replacing the paragraph with the input text box
		ev.target.parentElement.nextElementSibling.replaceWith(input);
		// adding a submit button after user is finished editing the comment in input
		const editedComment = document.createElement('button');
		editedComment.appendChild(document.createTextNode('submit'));
		ev.target.parentElement.parentElement.appendChild(editedComment);
		// once the submit button is clicked
		editedComment.addEventListener('click', (eve) => {
			// console.log(eve.target.previousElementSibling);
			// the text inside the input box is put inside the paragraph element
			// which replaces the input box again
			const newCommentText = eve.target.previousElementSibling.value;
			const newComment = document.createElement('p');
			newComment.innerText = newCommentText;
			newComment.classList = 'the-comment';
			input.replaceWith(newComment);
			// and removes the submit button that we had created for the input
			eve.target.parentElement.removeChild(editedComment);
		});
	}
};
