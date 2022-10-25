console.log('We in HERE!');
function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open('GET', theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
}
const url = 'https://periodic-table-elements-info.herokuapp.com/elements';
const response = httpGet(url);
console.log('We are here!', response);

const paragraph = document.createElement('p');
const content = document.createTextNode('We in here!');
paragraph.appendChild(content);
const div1 = document.getElementById('div1');
div1.appendChild(paragraph);
console.log('At the end of the file');
