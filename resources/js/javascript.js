// Write a message to the console.
let sigane = document.getElementById('sigane');
let simagle = document.getElementById('simagle');
let raodenoba = document.getElementById('raodenoba');

const gamotvale = (sigane, simagle, raodenoba) => {
  //const kvadrati = Math.floor(sigane * simagle * raodenoba);
 const kvadrati = sigane * simagle * raodenoba;
if (sigane <= 0 || simagle <= 0 || raodenoba <=0) {alert('Error')}
else {alert(`მოცემული პროდუქტი არის ${kvadrati} კვადრატი.`)}

//fasis gamotvla 2

const glassSelect = '';
let fasi = '';
if (glassSelect === 'guardian4') {
  fasi = 4.6;
}
else if (glassSelect === 'guardian6') {
  fasi = 6;
}
else {alert('Error!')}

const sruliFasi = Math.floor(fasi * kvadrati);

if (sigane <= 0 || simagle <= 0 || raodenoba <=0) {alert('Error!')}
else{ alert(`პროდუქტის ფასია ${sruliFasi} დოლარი`)
}
}

