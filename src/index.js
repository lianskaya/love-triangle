/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

 
 module.exports = function getLoveTrianglesCount(preferences = []) {
   var number = 0;
   for (count = 0;count<preferences.length; count++){
   if(preferences[preferences[preferences[count]-1]-1]-1 == count )
    number++;
   }
   return parseInt(number/3);

};