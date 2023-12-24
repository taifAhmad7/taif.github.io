let myHeading = document.querySelector('h1');

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Wecome to my website, ${storedName}`;
}

const myImage = document.querySelector('img');
let myButton = document.querySelector('button');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/taif.jpg') {
    myImage.setAttribute('src', 'images/taif-2.jpg');
  } else {
    myImage.setAttribute('src', 'images/taif.jpg');
  }
};

function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Welcome to my website, ${myName}`;
  }
}

myButton.onclick = () => {
  setUserName();
};
