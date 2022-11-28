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
console.log('We in HERE!');
async function loadAtoms() {
  const URL = 'https://periodic-table-elements-info.herokuapp.com/elements';
  const res = await fetch(`${URL}`);
  const data = await res.json();
  return data;
  //if (data.Response == "True") displayMovieList(data.Search);
}
const atoms = loadAtoms();

async function getAtom(name) {
  const URL = `https://periodic-table-elements-info.herokuapp.com/element/atomicName/${name}`;
  const res = await fetch(`${URL}`);
  const data = await res.json();
  return data;
}
async function retrieveAtom(atom) {
  atom = await getAtom(atom);
  console.log('sodium', atom);
  for (let i = 0; i < atomKeys.length; i++) {
    const atomValue = atom[0][`${atomKeys[i]}`];
    if (atomValue != 'unknown') {
      console.log('Getting value', atomValue, 'From key', atomKeys[i]);
      const content = document.createTextNode(atomValue);
      const p = document.getElementsByClassName('atom-content')[0];
      p.appendChild(content);
    }
  }
}

//console.log('At the end of the file');

async function addAtoms(theAtoms) {
  theAtoms = await theAtoms;
  //console.log('Before looping',theAtoms);
  //console.log('Get individual element', theAtoms[0]);
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
addAtoms(atoms);

// Get the modal
var modal = document.getElementById('myModal');
console.log('myModal', modal);
console.log('document', document);
// Get the button that opens the modal
var btn = document.getElementById('btn');
console.log('btn', btn);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  retrieveAtom('sodium');
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
