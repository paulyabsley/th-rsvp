const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

// Creating new list items
createLi = function(text) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.textContent = text;
	li.appendChild(span);
	const label = document.createElement('label');
	label.textContent = 'Confirmed';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label);
	const editButton = document.createElement('button');
	editButton.textContent = 'Edit';
	li.appendChild(editButton);
	const removeButton = document.createElement('button');
	removeButton.textContent = 'Remove';
	li.appendChild(removeButton);
	return li;
}

// Form submission handler
form.addEventListener('submit', (e) => {
	e.preventDefault();
	let text = input.value;
	input.value = '';
	const li = createLi(text);
	ul.appendChild(li);
});

// Confirming invitees
ul.addEventListener('change', (e) => {
	const checkbox = e.target;
	const checked = checkbox.checked;
	const listItem = checkbox.parentNode.parentNode;
	if (checked) {
		listItem.className = 'responded';
	} else {
		listItem.className = '';
	}
});

// Removing invitees
ul.addEventListener('click', (e) => {
	if (e.target.tagName === 'BUTTON') {
		const button = e.target;
		const li = button.parentNode;
		const ul = li.parentNode;

		if (button.textContent === 'Remove') {
			ul.removeChild(li);
		} else if (button.textContent === 'Edit') {
			const span = li.firstElementChild;
			const input = document.createElement('input');
			input.type = 'text';
			input.value = span.textContent;
			li.insertBefore(input, span);
			li.removeChild(span);
			button.textContent = 'Save';
		} else if (button.textContent === 'Save') {
			const input = li.firstElementChild;
			const span = document.createElement('span');
			span.textContent = input.value;
			li.insertBefore(span, input);
			li.removeChild(input);
			button.textContent = 'Edit';
		}
	}
});