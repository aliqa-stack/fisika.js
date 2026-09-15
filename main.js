
let FORCE;
let MASS;
let ACCELERATION;
let FG;
//function uI(){
    //let userInput = document.getElementById('input').value
    //const para = document.createElement('p')
    //para.innerText = userInput
    //document.body.appendChild(para)
    //console.log("user input :", para)
//}
/*
    Tp sin 30
    tpj sin 37
    Lm sin 50
*/

let derajat = {
    Tp : 30,
    Tpj : 37,
    Lm : 50,

}
console.log(derajat['Tp'])
const radian = derajat['Tp'] * (Math.PI / 180);
const cossines = Math.cos(radian)

function Newton2(m, a){
    FORCE = m * a;
    return FORCE;
}

function pembagian(a, b){
    return a / b;
}

function SearchFG(miu, N){
     FG = miu * N  
    return FG;
}

function searchACC(mass, grav, FG){
   ACCELERATION =  mass * grav - FG;
   return ACCELERATION
}

function searchN(Wa, grav, cossines){
    const N = Wa * grav *cossines
    return N

}

console.log(searchN(2, 10, cossines))

const test = SearchFG(0.5,  17)
console.log(Math.floor(test))