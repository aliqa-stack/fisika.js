


/*
    export Tp sin 30
    export tpj sin 37
    export Lm sin 50
*/

export let derajat = {
     TigaPuluh : 30,
    TigaTujuh : 37,
     LimaPuluh : 50,

}
export const radian = derajat['TigaPuluh'] * (Math.PI / 180);
export const cossines = Math.cos(radian)


export function type(obj){
    return ({}).toString.call(obj).match(/\s(\w+)/)[1].toLowerCase();
}
export function checktype(args, types){
     args = [].slice.call(args)
     for(let i = 0 ; i < types.length; i++){
         if(type(args[i]) != types[i]){
             throw new TypeError("the parameters of "+ i +'must be type of' +  types[i])
        }
    }
}

export function chooseCos(der){
    if(!Object.hasOwn(derajat, der)) {
      throw new Error("object doenst have that property") 
   } else{
     return derajat[der]
   }

    //export return derajat[der] * (Math.PI / 180)
}
 //console.log(chooseCos('TigaPuluh'))

export function Newton2(m, a){
    if(!m && !a) throw new Error ("parameters could not be empty")
     var FORCE = m * a;
     return FORCE;
}

export function pembagian(a, b){
     return a / b;
}

export function SearchFG(miu, N){
     if(!miu && !N) throw new Error("Parameters could not be empty");
     checktype(arguments, ['number', 'number'])
      var FG = miu * N  
     return FG;
}

export function searchACC(mass, grav, FG){
    if(!mass && !grav && !FG) throw new Error("Parameters could not be empty");
    ACCELERATION =  mass * grav - FG;
    return ACCELERATION
}

export function searchN(Wa, grav, cossines){
     if(!Wa && !grav && !cossines) throw new Error("Parameters could not be empty");
         
     const N = Wa * grav *cossines
     return N

}

export function pyshic(user, W, grav, input){
    if(input === "CariN"){
    const cos = chooseCos(user);
    let radian = cos * (Math.PI / 180)

    let N = searchN(W, grav, radian) 
    return N
    }
   
}
/////pyshic('TigaPuluh', 4, 10, 'CariN')