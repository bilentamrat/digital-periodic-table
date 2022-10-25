console.log("We in HERE!")
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
const url="https://periodic-table-elements-info.herokuapp.com/elements"
const response = httpGet(url)
console.log("We are here!",response)