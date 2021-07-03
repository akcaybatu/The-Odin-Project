const body = document.body;
const container = document.querySelector('#container');

// Add child div
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

// Add red paragraph
const p = document.createElement('p');
p.textContent = "Hey l'm red!";
p.setAttribute('style', 'color: red');
body.append(p);

// Add blue header
const h3 = document.createElement('h3');
h3.textContent = ("l'm a blue h3!");
h3.setAttribute('style', 'color: blue');
body.append(h3);

// Adding a div with multiple elements
const myDiv = document.createElement('div');
myDiv.textContent = "This is a div";
container.appendChild(myDiv);

const h1 = document.createElement('h1');
h1.textContent = "l'm in a div";
myDiv.appendChild(h1);

const myPara = document.createElement('p');
myPara.textContent = "MEE TOO!";
myDiv.appendChild(myPara);