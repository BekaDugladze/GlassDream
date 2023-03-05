// Gamotvla

const nav = document.getElementsByClassName('nav');
const gamotvla = document.getElementById('gamotvla');

gamotvla.onclick = function() {
    let simagle = document.getElementById('simagle').value;
    let sigane = document.getElementById('sigane').value;
    let raodenoba = document.getElementById('raodenoba').value;

    const kvadrati = Math.floor(simagle * sigane * raodenoba);

    if(kvadrati > 0) {
        return alert(`მოცემული პროდუქტი არის ${kvadrati} კვადრატი.`)
    }
    else{
        return alert(`Error!`)
    }
}