const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);


const paragraph = document.createElement('p');
paragraph.textContent = 'Hey I’m red!';
paragraph.style.color = 'red';

container.appendChild(paragraph);

const header3 = document.createElement('h3');
header3.textContent = 'I’m a blue h3!';
header3.style.color = 'blue';

container.appendChild(header3);

const div = document.createElement('div');
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';

const header1 = document.createElement('h1');
header1.textContent = 'I’m in a div';
div.appendChild(header1);

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'ME TOO!';
div.appendChild(paragraph2);

container.appendChild(div);

