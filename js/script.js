/*****   Exercice Daily challenge  
 * 
 * @author : Magara Etychien N'gouan
 * 
 * Description :  
 * 
                  Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
                  Do this Daily Challenge by youself, without looking at the answers on the internet.
 * 
 * 
 * Date : 30 Decembre 2022
 * 
 * ***/

//1.  Write a JavaScript program that recreates the pattern below.

  /*    *  
        * *  
        * * *  
        * * * *  
        * * * * *
        * * * * * *    */ 

  //nous constactons que nois avons une variation de la colonne et au fur et a mesure que la ligne tend vers 6

  let compteurLigne = 1;  //declaration de la 1 ere valeur de la ligne
  let compteurcolonne = 0; //declaration de la 1ere valeur de la colonne

  let pattern ="";

  while (compteurLigne <= 6 && compteurcolonne < compteurLigne + 1) {
    if (compteurLigne == 1) {
        
        //mettre la seule etoile de la 1ere ligne

        pattern += "*\n";
        compteurLigne++;
        compteurcolonne++;

    } else {
        /* simulation */

        if (compteurcolonne == compteurLigne) {
            pattern += "*\n";
            compteurcolonne = 1;
            compteurLigne++;

        } else {

            /* sinon la mise en place du motif */

            pattern += "*";
            compteurcolonne++;
        }
    }
}
console.log("pattern 1: \n" + pattern);

//2. Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).

let pattern_nouveau = "";

for (let compteurLigne = 0; compteurLigne<=6;compteurLigne++){
    if (compteurLigne ==0) {

        pattern_nouveau ="*\n";
    
    } else {

        for (let compteurcolonne = 0; compteurcolonne < compteurLigne + 1; compteurcolonne++) {
            if (compteurcolonne == compteurLigne) {
                pattern_nouveau += "*\n";
            } else {
                pattern_nouveau += "*";
            }
        }
    }

    }

    console.log("pattern nouveau: \n" + pattern_nouveau);








