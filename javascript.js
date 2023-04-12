// Gamotvla
const nav = document.getElementById
const gamotvla = document.getElementById('gamotvla');

gamotvla.onclick = function() {
    let simagle = document.getElementById('simagle').value;
    let sigane = document.getElementById('sigane').value;
    let raodenoba = document.getElementById('raodenoba').value;

    const kvadrati = Math.round(100 * simagle * sigane * raodenoba) / 100; //Measedebamde damrgvaleba!

    let mina = document.getElementById('glassSelect').value;
    let fasi = 0;
    switch (mina){
        case 'guardian4':
            fasi = 4.1;
            break;
        case 'guardian6':
            fasi = 6;
            break;
        case 'guardian8':
            fasi = 8.5;
            break;
        default:
            fasi = 0;
            break;
    }

    let par = document.getElementById('pasuxi')

    if(kvadrati > 0 && mina !== '') {
        return par.innerHTML = `მოცემული პროდუქტი არის ${kvadrati} კვადრატი. 
        პროდუქტის ფასია ${Math.round(100 * fasi * kvadrati) / 100} დოლარი.`;
        /*let paragraph = document.createElement("P");
      paragraph.innerHTML = "This is paragraph "+x;
      document.getElementById("SampleDIV").appendChild(paragraph);*/
    }
    else if (kvadrati > 0 && mina === '') {
        return par.innerHTML = `მოცემული პროდუქტი არის ${kvadrati} კვადრატი.`;
    }
    else{
        return par.innerHTML = `გთხოვთ, მიუთითოთ შესაბამისი მნიშვნელობა.`
    }


}
/*const ci = document.querySelector(".figure");

ci.addEventListener("mouseover", (e) => {
    console.log('works')

    ci.classList.add('move-c');})
    
ci.addEventListener('mouseleave', () => {
        ci.classList.remove('move-c');})*/
