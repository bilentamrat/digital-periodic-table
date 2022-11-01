console.log('We in HERE!');
async function loadElements() {
    const URL = 'https://periodic-table-elements-info.herokuapp.com/elements';
    const res = await fetch(`${URL}`);
    const data = await res.json();
    //console.log("The data", data)
    return data
    //if (data.Response == "True") displayMovieList(data.Search);
  }
const elements = loadElements()
const url = 'https://periodic-table-elements-info.herokuapp.com/elements';
//const response = httpGet(url);
//console.log('We are here!', response);

const paragraph = document.createElement('p');
const content = document.createTextNode('We in here!');
paragraph.appendChild(content);
const div1 = document.getElementById('div1');
div1.appendChild(paragraph);
console.log('At the end of the file');

async function addElements(theElements) {
  theElements = await theElements;
  console.log('Before looping', theElements);
  console.log('Get individual element', theElements[0]);
  for (let i = 0; i < theElements.length; i++) {
   const currentElement = theElements[i];
    console.log('The currentElement', currentElement);
 }
}
addElements(elements);
