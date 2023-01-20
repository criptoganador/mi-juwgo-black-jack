import _ from 'underscore';
/**
 * 
 * @param {arreglo} tiposDecartas 
 * @param {arregolo} tiposEspeciales 
 * @returns 
 */

export const crearDeck = (tiposDecartas,tiposEspeciales) => {
     let deck =[];   
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDecartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDecartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    
    deck = _.shuffle( deck );
    
    return deck;
}