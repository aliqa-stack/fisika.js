


/*
    Tp sin 30
    tpj sin 37
    Lm sin 50
*/

let derajat = {
    TigaPuluh : 30,
    TigaTujuh : 37,
    LimaPuluh : 50,

}
const radian = derajat['TigaPuluh'] * (Math.PI / 180);
const cossines = Math.cos(radian)


function type(obj){
    return ({}).toString.call(obj).match(/\s(\w+)/)[1].toLowerCase();
}
function checktype(args, types){
    args = [].slice.call(args)
    for(let i = 0 ; i < types.length; i++){
        if(type(args[i]) != types[i]){
            throw new TypeError("the parameters of "+ i +'must be type of' +  types[i])
        }
    }
}

function chooseCos(der){
   if(!Object.hasOwn(derajat, der)) {
     throw new Error("object doenst have that property") 
   }else{
    return derajat[der]
   }

    //return derajat[der] * (Math.PI / 180)
}
console.log(chooseCos('TigaPuluh'))

function Newton2(m, a){
    if(!m && !a) throw new Error ("parameters could not be empty")
    FORCE = m * a;
    return FORCE;
}

function pembagian(a, b){
    return a / b;
}

function SearchFG(miu, N){
    if(!miu && !N) throw new Error("Parameters could not be empty");
    checktype(arguments, ['number', 'number'])
     FG = miu * N  
    return FG;
}

function searchACC(mass, grav, FG){
   if(!mass && !grav && !FG) throw new Error("Parameters could not be empty");
   ACCELERATION =  mass * grav - FG;
   return ACCELERATION
}

function searchN(Wa, grav, cossines){
    if(!Wa && !grav && !cossines) throw new Error("Parameters could not be empty");
         
    const N = Wa * grav *cossines
    return N

}

function uI(){
    let miuInput = parseFloat(document.getElementById('input').value)
    let Ninput = parseFloat(document.getElementById('inputN').value)

    let result = SearchFG(miuInput, Ninput)

    const para = document.createElement('p')

    para.innerText = result 

    document.body.appendChild(para)
}
console.log(SearchFG())