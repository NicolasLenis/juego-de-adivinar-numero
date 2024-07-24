let numerosecreto;
let contador;
let valorcaja;
let listanumerossorteados=[];
let numerogenerado;
let numeromaximo=10;
condicionesiniciales()
function asignartextoelemento(elemento, texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML=texto;
}
function verificarintento(){
    let numerodeusuario=parseInt(document.getElementById('Valorusuario').value);
    console.log(typeof(numerodeusuario));
    console.log(numerosecreto);
    console.log(numerodeusuario);
    
    
    console.log(contador);
    if(numerodeusuario===numerosecreto){
        asignartextoelemento('p',`acertaste en ${contador}${contador==1 ? ' vez':' veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //el usuario no acerto
        if(numerodeusuario>numerosecreto){

            asignartextoelemento('p','el numero secreto es menor');
    }else{
        asignartextoelemento('p','el numero secreto es mayor');
    }
    contador++;
    limpiarcaja();
};
    limpiarcaja()
    return
}
function generarnumerosecreto(){
    numerogenerado = Math.floor(Math.random()*numeromaximo)+1;
    if(listanumerossorteados.length==numeromaximo){
        asignartextoelemento('p','ya se sortearon todos los numero posibles');
    }else{
    if(listanumerossorteados.includes(numerogenerado)){

        return generarnumerosecreto();
    }else{
        listanumerossorteados.push(numerogenerado);
        return numerogenerado;
    }
}
}
function limpiarcaja(){
    valorcaja=document.querySelector('#Valorusuario').value='';
} 
function condicionesiniciales(){
    asignartextoelemento('h1','juego del número secreto');
    asignartextoelemento('p',`indica un número del 1 al ${numeromaximo}`);
    numerosecreto= generarnumerosecreto();
    contador=1;


}
function reiniciarjuego(){
    limpiarcaja();
    condicionesiniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    


}

