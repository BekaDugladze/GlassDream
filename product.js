
// Product

const g4 = document.querySelector('.guardian4');
const select = document.querySelector('#glassSelect')
let img = document.querySelector('#img')

select.onchange = () => {
    switch (select.value) {
        //Guardian
        case 'guardian4':
            img.src = './ff/Site/1.png';
            break;
        case 'guardian6':
            img.src = './ff/Site/1.png';
            break;
        case 'guardian8':
            img.src = './ff/Site/1.png';
            break;
        case 'guardian10':
            img.src = './ff/Site/1.png';
            break;
        case 'ge4':
            img.src = './ff/Site/2.png';
            break;
        case 'ge6':
            img.src = './ff/Site/2.png';
            break;
        case 'ge8':
            img.src = './ff/Site/2.png';
            break;
        case 'ge10':
            img.src = './ff/Site/2.png';
            break;
        //GuardianEND

        //AGC
        case 'agc4':
            img.src = './ff/Site/3.png';
            break;
        case 'am4':
            img.src = './ff/Site/AGC.png';
            break;
        case 'agc6':
            img.src = './ff/Site/3.png';
            break;
        case 'am6':
            img.src = './ff/Site/AGC.png';
            break;
        case 'agc8':
            img.src = './ff/Site/3.png';
            break;
        case 'am8':
            img.src = './ff/Site/AGC.png';
            break;
        case 'agc10':
            img.src = './ff/Site/3.png';
            break;
        case 'am10':
            img.src = './ff/Site/AGC.png';
            break;
        //AGCEnd

        //SGG
        case 'sgg4':
            img.src = './ff/Site/SGG2.png';            
            break;
        case 'extra4':
            img.src = './ff/Site/Sgg.png';
            break;
        case 'sgg6':
            img.src = './ff/Site/SGG2.png';
            break;
        case 'extra6':
            img.src = './ff/Site/Sgg.png';
            break;
        case 'sgg8':
            img.src = './ff/Site/SGG2.png';
            break;
        case 'extra8':
            img.src = './ff/Site/Sgg.png';
            break;
        case 'sgg10':
            img.src = './ff/Site/SGG2.png';
            break;
        case 'extra10':
            img.src = './ff/Site/Sgg.png';
            break;
        //SGGEnd
        
        //Sisecam
        case 's4':
            img.src = './ff/Site/s.png';
            break;
        case 'sr4':
            img.src = './ff/Site/sr.png';
            break;
        case 'sl4':
            img.src = './ff/Site/sl.png';
            break;
        case 'sf4':
            img.src = './ff/Site/sf.png';
            break;
        case 'sm4':
            img.src = './ff/Site/sm.png';
            break;
        case 's6':
            img.src = './ff/Site/s.png';
            break;
        case 'sr6':
            img.src = './ff/Site/sr.png';
            break;
        case 'sl6':
            img.src = './ff/Site/sl.png';
            break;
        case 'sf6':
            img.src = './ff/Site/sf.png';
            break;
        case 'sm6':
            img.src = './ff/Site/sm.png';
            break;
        case 's8':
            img.src = './ff/Site/s.png';
            break;
        case 'sr8':
            img.src = './ff/Site/sr.png';
            break;
        case 'sl8':
            img.src = './ff/Site/sl.png';
            break;
        case 'sf8':
            img.src = './ff/Site/sf.png';
            break;
        case 'sm8':
            img.src = './ff/Site/sm.png';
            break;
        case 's10':
            img.src = './ff/Site/s.png';
            break;
        case 'sr10':
            img.src = './ff/Site/sr.png';
            break;
        case 'sl10':
            img.src = './ff/Site/sl.png';
            break;
        case 'sf10':
            img.src = './ff/Site/sf.png';
            break;
        case 'sm10':
            img.src = './ff/Site/sm.png';
            break;
        //SisecamEnd

        //Incicam
        case 'is4':
            img.src = './ff/Site/is.png';
            break;
        case 'ir4':
            img.src = './ff/Site/ir.png';
            break;
        case 'if4':
            img.src = './ff/Site/if.png';
            break;
        case 'im4':
            img.src = './ff/Site/im.png';
            break;
        case 'is6':
            img.src = './ff/Site/is.png';
            break;
        case 'ir6':
            img.src = './ff/Site/ir.png';
            break;
        case 'if6':
            img.src = './ff/Site/if.png';
            break;
        case 'im6':
            img.src = './ff/Site/im.png';
            break;
        case 'is8':
            img.src = './ff/Site/is.png';
            break;
        case 'ir8':
            img.src = './ff/Site/ir.png';
            break;
        case 'if8':
            img.src = './ff/Site/if.png';
            break;
        case 'im8':
            img.src = './ff/Site/im.png';
            break;
        case 'is10':
            img.src = './ff/Site/is.png';
            break;
        case 'ir10':
            img.src = './ff/Site/ir.png';
            break;
        case 'if10':
            img.src = './ff/Site/if.png';
            break;
        case 'im10':
            img.src = './ff/Site/im.png';
            break;
        //IncicamEnd
        
        //SalavatSteklo
        case 'ss4':
            img.src = './ff/Site/SS.png';
            break;
        case 'ss6':
            img.src = './ff/Site/SS.png';
            break;
        case 'ss8':
            img.src = './ff/Site/SS.png';
            break;
        case 'ss10':
            img.src = './ff/Site/SS.png';
            break;
        //SSEnd

        //AzerFloat

        //AzerEnd

        
        //

        //Default
        default:
            img.src = './ff/Black and White Circle Elegant Photographer Initials Logo (7).png';
            break;
    }
    }