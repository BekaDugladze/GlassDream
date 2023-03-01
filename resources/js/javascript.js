let simagle = document.querySelector("simagle")
let sigane = document.querySelector("sigane")
let raodenoba = document.querySelector("raodenoba")
const gamotvla = document.getElementById('gamotvla')


gamotvla.onclick = function gamotvale (simagle, sigane, raodenoba) {
  const kvadrati = simagle * sigane * raodenoba;
    return alert(`მოცემული პროდუქტი არის ${kvadrati} კვადრატი.`)
}
