
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix)
    return [];

    var result = [];
    let index = 0;
   
    for(let i = 0; matrix.length > i; i++) {
       if((i + 1) % 2 === 0)
        matrix[i].reverse();
    
        for(let j = 0; matrix[i].length > j; j++) {
            result[index] = matrix[i][j];
            index++;
        }
   }
   return result;
}
