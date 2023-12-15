const matrix=[[4,9,6,2],
            [11,12,16,13],
            [23,19,18,17],
            [31,30,33,36]];

function printBorderElement(){
    let borderElement = [];

    for(let i = 0;i<matrix.length;i++){

        for(let j=0;j<matrix[i].length;j++){

            if(i===0||j===matrix.length-1||
                j===0||matrix[i].length-1){

                        borderElement.push(matrix[i][j]);
                }
        }
    }
    console.log(borderElement);
}

            