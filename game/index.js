String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

// A --> orange
// B-->green


function play() {

    document.getElementById('firstpage').style.display = 'none';
    document.getElementById('secondpage').style.display = 'block';
    document.getElementsByTagName('body')[0].style.color='black';
    document.getElementsByTagName('body')[0].style.backgroundColor='black';

    if(document.getElementById('fp').value!=="" && document.getElementById('sp').value!=="")
    {
        document.getElementById('la').innerText = document.getElementById('fp').value+":";
        document.getElementById('lb').innerText = document.getElementById('sp').value+":";
    }
    
    let main = document.getElementById('main_container');
    let noofcard = parseInt(document.getElementById("no_Of_card").value);
    if (noofcard % 2) {
        noofcard = noofcard + 1;
    }
    console.log(noofcard);
    let content_obj = '';
    let ch = 'a';
    let halfcard = parseInt(noofcard / 2);
    for (let x = 65; x < 65 + halfcard; x++) {
        content_obj += String.fromCharCode(x);
    }
    for (let x = 65; x < 65 + halfcard; x++) {
        content_obj += String.fromCharCode(x);
    }
    console.log(content_obj);
    content_obj = content_obj.shuffle();

    for (let x = 1; x <= noofcard; x++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.setAttribute("tabindex", -1 * x);
        let p = document.createElement('p');
        p.innerHTML = content_obj[x - 1];
        div.setAttribute('id', x);
        div.appendChild(p);
        main.appendChild(div);
    }
}

let turn_a = true;
document.getElementById('label_a').style.color = 'orange';
let a_score = 0;
let b_score = 0;
var vis = [];
var visval = [];


let rand = () => {
    let fp=document.getElementById('la').innerText; 
    let sp=document.getElementById('lb').innerText; 
    let noofcard = parseInt(document.getElementById("no_Of_card").value);
    if (noofcard % 2) {
        noofcard += 1;
    }
    let num = parseInt((Math.random() * noofcard)) + 1;

    while (vis.includes(num)) {
        num = parseInt((Math.random() * noofcard)) + 1;
        console.log(num);
        if (vis.length == noofcard) {
            if (a_score > b_score)
                alert(`${fp} is winner`);
            else if (a_score < b_score)
                alert(`${sp} is winner`);
            else
                alert("Draw");
        return;
        }
        
    }
    vis.push(num);
    // document.getElementById('num').innerHTML=num;
    let div = document.getElementById(num);

    div.focus();
   
    div.style.backgroundColor = 'yellow';
    let active = document.activeElement.textContent;

    if (turn_a) {
        document.getElementById('label_b').style.color = 'green';
        document.getElementById('label_a').style.color = 'black';
    }
    else {
        document.getElementById('label_b').style.color = 'black';
        document.getElementById('label_a').style.color = 'orange';
    }
    if (visval.includes(active)) {
        let ind = visval.indexOf(active);
        console.log(ind);
        if (turn_a) {
            a_score++;
            document.getElementById('A').innerHTML = a_score;
            document.getElementById(vis[ind]).style.backgroundColor = 'orange';
            div.style.backgroundColor = 'orange';
        }
        else {
            b_score++;
            document.getElementById('B').innerHTML = b_score;
            document.getElementById(vis[ind]).style.backgroundColor = 'green';
            div.style.backgroundColor = 'green';

        }

        if (vis.length == noofcard) {
            if (a_score > b_score)
                alert(`${fp} is winner`);
            else if (a_score < b_score)
                alert(`${sp} is winner`);
            else
                alert("Draw");
        }
    }

    visval.push(document.activeElement.textContent);

    console.log(vis, visval);
    turn_a = !turn_a;
    console.log(turn_a);



    setTimeout(()=>{
        if( div.style.backgroundColor==="yellow")
             div.style.backgroundColor="red";
    },1000);
    setTimeout(()=>{
        let btn_rand = document.getElementById("rand_btn");
        btn_rand.focus();
    },2000);

   
    // console.log();
}


// let main = document.getElementById('main_container');
// let content_obj = 'ABCDEFABCDEFGGH';
// content_obj = content_obj.shuffle();
// console.log(main);
// for (let x = 1; x <= 15; x++) {
//     let div = document.createElement('div');
//     div.setAttribute('class', 'card');
//     div.setAttribute("tabindex", -1 * x);
//     let p = document.createElement('p');
//     p.innerHTML = content_obj[x - 1];
//     div.setAttribute('id', x);
//     div.appendChild(p);
//     main.appendChild(div);
// }