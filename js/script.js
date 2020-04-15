/*import {admin} from './admin.js';*/


function multi(){


    let nm1 = document.getElementById('inp_1').value;
    let nm2 = document.getElementById('inp_2').value;
    let nm3 = document.getElementById('inp_3').value;
    let nm4 = document.getElementById('inp_4').value;
    let nm5 = document.getElementById('inp_5').value;

    let array = [];
    array.push(nm1, nm2, nm3, nm4, nm5);

    for(let i in array){

        alert(array[i]);
    }

    let a = document.getElementById('WTF').innerHTML;
    alert(a);
}
