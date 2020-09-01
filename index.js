// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const prepString = (str) => str.toLowerCase().replace(/[\W_]/g, "");

const isPalindromic = (str) => {
  console.log(str)
  const prepped = prepString(str);
  const reversed = prepped.split("").reverse().join("");
  console.log(reversed)
  return prepped === reversed;
}

const word = "mamal";

console.log('First Solution', isPalindromic(word))

const isPalindromic = (str) => {
  const prepped = prepString(str);
  const characters = prepped.split("");


  for(let char of characters){
    if(char !== characters.pop()){
      return false;
    }
  }

  return true;
}

console.log('Second Solution', isPalindromic(word))

const isPalindromic = (str) => {
  const prepped = prepString(str);
  const strLenght = Math.floor(prepped.length /2);

  for(let i = 0; i < strLenght; i++){
    if(prepped[i] !== prepped[strLenght - 1 - i]){
      return false;
    }
  }

  return true;
}

console.log('Third Solution', isPalindromic(word))