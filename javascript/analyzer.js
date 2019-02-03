let obj = JSON.parse(json);
let dataUnitsJSON = JSON.parse(dataUnitsFromJSON);

function range(data) {

    sorted = data.sort(function(a, b){return a-b});


    sortedMedian = sorted[(sorted.length)/2];


    leftSubArray = sorted.slice(0,data.length/2);
    rightSubArray = sorted.slice(data.length/2 + 1, data.length);

    alert("data: " + sorted + "\n" + leftSubArray + "\n" + rightSubArray);

    q1 = leftSubArray[(leftSubArray.length)/2];
    q3 = rightSubArray[(rightSubArray.length)/2];


    iqr = q3 - q1;

    return [q1,q3,iqr];

}


function rangeBetter(someArray) {

    if(someArray.length < 4)
      return someArray;
  
    let values, q1, q3, iqr, maxValue, minValue;
  
    values = someArray.slice().sort( (a, b) => a - b);//copy array fast and sort
  
    //alert(values);

    if((values.length / 4) % 1 == 0){//find quartiles
      q1 = 1/2 * (values[(values.length / 4)] + values[(values.length / 4) + 1]);
      q3 = 1/2 * (values[(values.length * (3 / 4))] + values[(values.length * (3 / 4)) + 1]);
    } else {
      q1 = values[Math.floor(values.length / 4 + 1)];
      q3 = values[Math.ceil(values.length * (3 / 4) + 1)];
    }
  
    iqr = q3 - q1;
    maxValue = q3 + iqr * 1.5;
    minValue = q1 - iqr * 1.5;
  
    return [q1,q3,iqr];
  }