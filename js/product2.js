//Product Figures
const array = [document.getElementById('guard'),
document.getElementById('agc'),
document.getElementById('sgg')];
const photo = [document.getElementById('guardian'),
document.getElementById('agcphoto'),
document.getElementById('sggphoto')];
const des = [document.getElementById('guardianp'),
document.getElementById('agcp'),
document.getElementById('sggp')]



array[0].onclick = () => {
    photo[0].style.position = 'sticky';
    photo[0].style.visibility = 'visible';
    photo[0].style.transform = 'translate3d(0, 0, 0)';
    photo[0].style.transition = 'all 0.5s ease 0s';
    des[0].style.position = 'sticky';
    des[0].style.visibility = 'visible';
    des[0].style.transform = 'translate3d(0, 0, 0)';
    des[0].style.transition = 'all 0.5s ease 0s';
    photo[2].style.position = 'absolute';
    photo[2].style.visibility = 'hidden';
    photo[2].style.transform = 'translate3d(-1000px, 0, 0)';
    photo[2].style.transition = 'all 0.5s ease 0s';
    photo[1].style.position = 'absolute';
    photo[1].style.visibility = 'hidden';
    photo[1].style.transform = 'translate3d(-1000px, 0, 0)';
    photo[1].style.transition = 'all 0.5s ease 0s';
    des[2].style.position = 'absolute';
    des[2].style.visibility = 'hidden';
    des[2].style.transform = 'translate3d(-100%, 0, 0)';
    des[2].style.transition = 'all 0.5s ease 0s';
    des[1].style.position = 'absolute';
    des[1].style.visibility = 'hidden';
    des[1].style.transform = 'translate3d(-100%, 0, 0)';
    des[1].style.transition = 'all 0.5s ease 0s';
}

array[1].onclick = () => {
    photo[1].style.position = 'sticky';
    photo[1].style.visibility = 'visible';
    photo[1].style.transform = 'translate3d(0, 0, 0)';
    photo[1].style.transition = 'all 0.5s ease 0s';
    des[1].style.position = 'sticky';
    des[1].style.visibility = 'visible';
    des[1].style.transform = 'translate3d(0, 0, 0)';
    des[1].style.transition = 'all 0.5s ease 0s';
    photo[0].style.position = 'absolute';
    photo[0].style.visibility = 'hidden';
    photo[0].style.transform = 'translate3d(-1000px, 0, 0)';
    photo[0].style.transition = 'all 0.5s ease 0s';
    photo[2].style.position = 'absolute';
    photo[2].style.visibility = 'hidden';
    photo[2].style.transform = 'translate3d(-1000px, 0, 0)';
    photo[2].style.transition = 'all 0.5s ease 0s';
    des[0].style.position = 'absolute';
    des[0].style.visibility = 'hidden';
    des[0].style.transform = 'translate3d(-100%, 0, 0)';
    des[0].style.transition = 'all 0.5s ease 0s';
    des[2].style.position = 'absolute';
    des[2].style.visibility = 'hidden';
    des[2].style.transform = 'translate3d(-100%, 0, 0)';
    des[2].style.transition = 'all 0.5s ease 0s';
}

array[2].onclick = () => {
    photo[2].style.position = 'sticky';
    photo[2].style.visibility = 'visible';
    photo[2].style.transform = 'translate3d(0, 0, 0)';
    photo[2].style.transition = 'all 0.5s ease 0s';
    des[2].style.position = 'sticky';
    des[2].style.visibility = 'visible';
    des[2].style.transform = 'translate3d(0, 0, 0)';
    des[2].style.transition = 'all 0.5s ease 0s';
    photo[0].style.position = 'absolute';
    photo[0].style.visibility = 'hidden';
    photo[0].style.transform = 'translate3d(-1000px, 0, 0)';
    photo[0].style.transition = 'all 0.5s ease 0s';
    photo[1].style.position = 'absolute';
    photo[1].style.visibility = 'hidden';
    photo[1].style.transform = 'translate3d(-1000px, 0, 0)';
    photo[1].style.transition = 'all 0.5s ease 0s';
    des[0].style.position = 'absolute';
    des[0].style.visibility = 'hidden';
    des[0].style.transform = 'translate3d(-100%, 0, 0)';
    des[0].style.transition = 'all 0.5s ease 0s';
    des[1].style.position = 'absolute';
    des[1].style.visibility = 'hidden';
    des[1].style.transform = 'translate3d(-100%, 0, 0)';
    des[1].style.transition = 'all 0.5s ease 0s';
}

