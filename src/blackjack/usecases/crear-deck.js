import _ from "underscore";



/**
 * esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCartas ejemplos: ['C','D','H','S'];
 * @param {Array<string} tiposEspeciales ejemplos: ['A','J','Q','K'];
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if(!tiposDeCartas || tiposDeCartas.length===0 )
         throw new Error ('tipos de cartas es olbigatorio como array de sttring')

    if(!tiposEspeciales || tiposEspeciales.length===0 )
         throw new Error ('tipos especiales es olbigatorio como array de string')
   

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }  
    }
    // console.log( deck );
    deck = _.shuffle( deck );
  
    return deck;
}