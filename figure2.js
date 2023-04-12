//meore versia

const one = document.getElementById('partnor1');
const two = document.getElementById('partnor2');
const three = document.getElementById('partnor3');
const four = document.getElementById('partnor4')
const pir = document.getElementById('pirveli');
const dam = document.getElementById('dam');
const mes = document.getElementById('mesame');
const otxi = document.getElementById('meotxe')



pir.onclick = () => {
    one.style.position = 'sticky';
    one.style.visibility = 'visible';
    two.style.position = 'absolute';
    two.style.visibility = 'hidden';
    three.style.position = 'absolute';
    three.style.visibility = 'hidden';
    four.style.position = 'absolute';
    four.style.visibility = 'hidden';
    one.style.transform = 'translate3d(0, 0, 0)';
    one.style.transition = 'all 1s ease 0s';
    two.style.transform = 'translate3d(-1000px, 0, 0)';
    two.style.transition = 'all 1s ease 0s';
    three.style.transform = 'translate3d(-1000px, 0, 0)';
    three.style.transition = 'all 1s ease 0s';
    four.style.transform = 'translate3d(-1000px, 0, 0)';
    four.style.transition = 'all 1s ease 0s';
    pir.style.backgroundColor = 'rgb(66, 84, 182)';
    dam.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
    mes.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
    otxi.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
}

dam.onclick = () => {
    one.style.position = 'absolute';
    one.style.visibility = 'hidden';
    two.style.position = 'sticky';
    two.style.visibility = 'visible';
    three.style.position = 'absolute';
    three.style.visibility = 'hidden';
    four.style.position = 'absolute';
    four.style.visibility = 'hidden';
    one.style.transform = 'translate3d(-1000px, 0, 0)';
    one.style.transition = 'all 1s ease 0s';
    two.style.transform = 'translate3d(0, 0, 0)';
    two.style.transition = 'all 1s ease 0s';
    three.style.transform = 'translate3d(-1000px, 0, 0)';
    three.style.transition = 'all 1s ease 0s';
    four.style.transform = 'translate3d(-1000px, 0, 0)';
    four.style.transition = 'all 1s ease 0s';
    pir.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
    dam.style.backgroundColor = 'rgb(66, 84, 182)';
    mes.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
    otxi.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
}

mes.onclick = () => {
    one.style.position = 'absolute';
    one.style.visibility = 'hidden';
    two.style.position = 'absolute';
    two.style.visibility = 'hidden';
    three.style.position = 'sticky';
    three.style.visibility = 'visible';
    four.style.position = 'absolute';
    four.style.visibility = 'hidden';
    one.style.transform = 'translate3d(-1000px, 0, 0)';
    one.style.transition = 'all 1s ease 0s';
    two.style.transform = 'translate3d(-1000px, 0, 0)';
    two.style.transition = 'all 1s ease 0s';
    three.style.transform = 'translate3d(0, 0, 0)';
    three.style.transition = 'all 1s ease 0s';
    four.style.transform = 'translate3d(-1000px, 0, 0)';
    four.style.transition = 'all 1s ease 0s';
    pir.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
    dam.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
    mes.style.backgroundColor = 'rgb(66, 84, 182)';
    otxi.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
}

otxi.onclick = () => {
    one.style.position = 'absolute';
    one.style.visibility = 'hidden';
    two.style.position = 'absolute';
    two.style.visibility = 'hidden';
    three.style.position = 'absolute';
    three.style.visibility = 'hidden';
    four.style.position = 'sticky';
    four.style.visibility = 'visible';
    one.style.transform = 'translate3d(-1000px, 0, 0)';
    one.style.transition = 'all 1s ease 0s';
    two.style.transform = 'translate3d(-1000px, 0, 0)';
    two.style.transition = 'all 1s ease 0s';
    three.style.transform = 'translate3d(-1000px, 0, 0)';
    three.style.transition = 'all 1s ease 0s';
    four.style.transform = 'translate3d(0, 0, 0)';
    four.style.transition = 'all 1s ease 0s';
    pir.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
    dam.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
    mes.style.backgroundColor = 'rgba(66, 84, 182, 0.2)';
    otxi.style.backgroundColor = 'rgb(66, 84, 182)';

}


const array = [one, two]

/*setInterval(() => {
    if(
        one.style.position === 'sticky' &&
        one.style.visibility === 'visible'){
            one.style.position = 'absolute';
            one.style.visibility = 'hidden';
            two.style.position = 'sticky';
            two.style.visibility = 'visible';}
    else{
        one.style.position = 'sticky';
        one.style.visibility = 'visible';
        two.style.position = 'absolute';
        two.style.visibility = 'hidden';

    }
}, 5000)*/