/*
const atomKeys = [
  'atomicNumber',
  'symbol',
  'name',
  'atomicMass',
  'electronicConfiguration',
  'electronegativity',
  'atomicRadius',
  'ionRadius',
  'vanDerWaalsRadius',
  'ionizationEnergy',
  'electronAffinity',
  'oxidationStates',
  'standardState',
  'bondingType',
  'meltingPoint',
  'boilingPoint',
  'density',
  'groupBlock',
  'yearDiscovered',
  'block',
  'cpkHexColor',
  'period',
  'group',
];
*/
const atomKeys = [
  "name",
  "appearance",
  "atomic_mass",
  "boil",
  "category",
  "density",
  "discovered_by",
  "melt",
  "molar_heat",
  "named_by",
  "number",
  "period",
  "phase",
  "xpos",
  "ypos",
  "symbol",
  "electron_configuration",
];

//console.log('We in HERE!');
async function loadAtoms() { 
  //const URL = "./data.json"//'https://secure-oasis-28926.herokuapp.com/https://periodic-table-elements-info.herokuapp.com/elements';
  const URL = "./periodic.json";//'https://secure-oasis-28926.herokuapp.com/https://periodic-table-elements-info.herokuapp.com/elements';
  const res = await fetch(`${URL}`);
  const data = await res.json();
  return data;
}
const atoms = loadAtoms();

async function getAtom(name) {
  //const URL = `https://secure-oasis-28926.herokuapp.com/https://periodic-table-elements-info.herokuapp.com/element/atomicName/${name}`;
  const URL = "./periodic.json";
  const res = await fetch(`${URL}`);
  const elements = await res.json();
  var data;
  for (let i = 0; i < 118; i++) {
    const currentAtom = elements[i];
    if(currentAtom.name == name){
      data = currentAtom;
      console.log(data);
    }
  }
  return data;
}

async function retrieveAtom(atom) {
  atom = await getAtom(atom);
  //console.log('sodium', atom);
  // next line clears the html in the "atom-content" paragraph (innerHTML)
  document.getElementsByClassName('atom-content')[0].innerHTML = "";
  for (let i = 0; i < atomKeys.length; i++) {
    //const atomValue = atom[0][`${atomKeys[i]}`];
    const atomValue = atom[`${atomKeys[i]}`];
    if (atomValue != 'unknown') {
      console.log('Getting value', atomValue, 'From key', atomKeys[i]);
      const content = document.createTextNode(atomKeys[i]);
      const content1 = document.createTextNode(atomValue);
      const p = document.getElementsByClassName('atom-content')[0];
      p.appendChild(content);
      // next line adds colons between keys and values in the htm
      // the "atom-content" paragraph (innerHTML)
      document.getElementsByClassName('atom-content')[0].innerHTML += ": ";
      p.appendChild(content1);
      // next lines make line breaks to separate "content" (was all on one line before)
      const lineBreak = document.createElement("p");
      p.appendChild(lineBreak);
    }
  }
}

//console.log('At the end of the file');

async function createTables(theAtoms) {
  theAtoms = await theAtoms;
  console.log("THE ATOMS", theAtoms);
  const div1 = document.getElementById('div1');
  const table = document.createElement('table');
  table.setAttribute('id','periodic_table');
  table.setAttribute('align','center');

  for (let i = 1; i < 8; i++) {
      let table_row = document.createElement('tr');
      for (let j = 1; j < 19; j++) {
          let table_cell = document.createElement('td');
          table_cell.setAttribute('id', "table_1_" + i + "_" + j);
          table_row.appendChild(table_cell);
      }
      table.appendChild(table_row);
  }
  div1.appendChild(table);

  const table2 = document.createElement('table');
  table2.setAttribute('id','periodic_table1');
  table2.setAttribute('align','center');

  for (let i = 1; i < 3; i++) {
      let table_row = document.createElement('tr');
      for (let j = 1; j < 15; j++) {
          let table_cell = document.createElement('td');
          table_cell.setAttribute('id', "table_2_" + i + "_" + j);
          table_row.appendChild(table_cell);
      }
      table2.appendChild(table_row);
  }
  div1.appendChild(table2);

  //for (let i = 0; i < theAtoms.length; i++) {
  for (let i = 0; i < 118; i++) {
    const currentAtom = theAtoms[i];

    const atomBox = document.createElement('div');
    atomBox.setAttribute('id', 'atom-box');
    const p1 = document.createElement('p');
    //const content = document.createTextNode(currentAtom.atomicNumber);
    const content = document.createTextNode(currentAtom.number);
    p1.appendChild(content);
    const p2 = document.createElement('p');
    const content1 = document.createTextNode(currentAtom.symbol);
    p2.appendChild(content1);
    const p3 = document.createElement('p');
    const content2 = document.createTextNode(currentAtom.name);
    p3.appendChild(content2);

    //var row = currentAtom.period;
    //var col = currentAtom.group;
    var row = currentAtom.ypos;
    var col = currentAtom.xpos;

    atomBox.appendChild(p1);
    atomBox.appendChild(p2);
    atomBox.appendChild(p3);

    //const atomicNum = parseInt(currentAtom.atomicNumber);
    const atomicNum = parseInt(currentAtom.number);
    //console.log(atomicNum);
    //console.log(col);
    /*
    Boron is just wrong
    if (atomicNum == 5){
      row = "2";
    }*/

    if(atomicNum < 57 || atomicNum > 103 || (atomicNum > 71 && atomicNum < 89)){
      periodicTableLocation = document.getElementById("table_1_" + row + '_' + col);
      //console.log("table_1_" + row + '_' + col);
      periodicTableLocation.setAttribute("class", currentAtom.category +'_unselected');
      periodicTableLocation.appendChild(atomBox);
    }
    if(atomicNum >= 57 && atomicNum <= 70 )
    {
      newColumn = String(atomicNum - 56);
      //console.log(newColumn);
      periodicTableLocation = document.getElementById("table_2_1" + '_' + newColumn);
      periodicTableLocation.setAttribute("class", currentAtom.category +'_unselected');
      periodicTableLocation.appendChild(atomBox);

    }
    // Atomic 71 is wrong
    if(atomicNum == 71){
      periodicTableLocation = document.getElementById("table_1_6_3");
      periodicTableLocation.setAttribute("class", currentAtom.category +'_unselected');
      periodicTableLocation.appendChild(atomBox);     
    }
    // Atomic 103 is wrong
    if(atomicNum == 103){
      periodicTableLocation = document.getElementById("table_1_7_3");
      periodicTableLocation.setAttribute("class", currentAtom.category +'_unselected');
      periodicTableLocation.appendChild(atomBox);     
    }  
    if(atomicNum >= 89 && atomicNum <= 102 )
    {
      newColumn = String(atomicNum - 88);
      periodicTableLocation = document.getElementById("table_2_2" + '_' + newColumn);
      periodicTableLocation.setAttribute("class", currentAtom.category +'_unselected');
      periodicTableLocation.appendChild(atomBox);
    }

    atomBox.onclick = function () {
      retrieveAtom(currentAtom.name);
      modal.style.display = 'block';
    };
    
  } 
} 
  //console.log("Lord Sesshomaru");
createTables(atoms);

async function addAtoms(theAtoms) {
  theAtoms = await theAtoms;
  //console.log('Before looping',theAtoms);
  //console.log('Get individual element', theAtoms[0]);
  //for (let i = 0; i < theAtoms.length; i++) {
  for (let i = 0; i < theAtoms.length; i++) {
    const currentAtom = theAtoms[i];
    const atomBox = document.createElement('div');
    atomBox.setAttribute('id', 'atom-box');
    const p1 = document.createElement('p');
    const content = document.createTextNode(currentAtom.atomicNumber);
    p1.appendChild(content);
    const p2 = document.createElement('p');
    const content1 = document.createTextNode(currentAtom.symbol);
    p2.appendChild(content1);
    const p3 = document.createElement('p');
    const content2 = document.createTextNode(currentAtom.name);
    p3.appendChild(content2);

    atomBox.appendChild(p1);
    atomBox.appendChild(p2);
    atomBox.appendChild(p3);
    const div1 = document.getElementById('div1');
    div1.appendChild(atomBox);
    atomBox.onclick = function () {
      retrieveAtom(currentAtom.name);
      modal.style.display = 'block';
    };

    //console.log('The currentAtom', currentAtom);
  }
}
//addAtoms(atoms);

// Get the modal
var modal = document.getElementById('myModal');
console.log('myModal', modal);
console.log('document', document);
// Get the button that opens the modal
var btn = document.getElementById('btn');
console.log('btn', btn);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];


// categories
function noble_gas(){
  console.log("noble gas");
  selection = document.getElementsByClassName("noble gas_unselected");
  console.log(selection);
  console.log(selection.length);
  for(let i = 0; i < selection.length; i++){
    selection[i].setAttribute("class", "selected");
  }
  console.log(selection);

}


function alkaline_earth_metal(){
  console.log("alkaline earth metal");
  selection = document.getElementsByClassName("alkaline earth metal_unselected");
  console.log(selection);

  for(let i = 0; i < selection.length; i++){
    selection[i].setAttribute("class", "selected");
  }
  console.log(selection);

}


// When the user clicks on the button, open the modal
btn.onclick = function () {
  //retrieveAtom('sodium');
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

