function custom(sortingProperties, idForElement) {

    temp = document.getElementById(idForElement);

    callName = "null";
    dataValue = "NOT FOUND";
    units = "NOT FOUND";
    rating = "NOT FOUND";
    color = "blue";

    for (i = 0; i < sortingProperties.length; i++) {
        sortingProperties[i] = sortingProperties[i].trim();
        //first edit the titles and stuff
        //then run the analysis function
        //then edit the other parts of the value

        callName = "null";
        dataValue = "NOT FOUND";
        units = "NOT FOUND";
        rating = "NOT FOUND";
        color = "blue";

        callName = sortingProperties[i];

        if(obj[sortingProperties[i]] != undefined) {

            //dataValue = obj[sortingProperties[i]][0];

            //now that you have array, get the iqr values and stuff

            rangeVals = rangeBetter(obj[sortingProperties[i]]); //q1,q3,iqr

            q1 = rangeVals[0];
            q3 = rangeVals[1];


            //dataValue = testData[]
            dataValue = getValue(sortingProperties[i]);

            //x.keys().index("d")
            //Object.keys(json).indexOf(keytoFind);
            //myobj[Object.keys(myobj)[0]];

            
            unitTemp = dataUnitsJSON[Object.keys(dataUnitsJSON)[Object.keys(obj).indexOf(sortingProperties[i])]];


            if (unitTemp == undefined) {
                units = "N/A";
            } else {
                units = unitTemp;
            }

            if (dataValue <= q1) {
                color = "lightgreen";
            } else if (dataValue > q1 && dataValue < q3) {
                color = "yellow";
            } else if (dataValue >= q3) {
                color = "salmon";
            } else {
                color = "blue";
            }
            
            buttonInfoData = "";

            buttonInfo = "[Good Values < " + round(q1,3) + "]\n";
            buttonInfo += "[Average Values > " + round(q1,3) + " < " + round(q3,3) + "]\n";
            buttonInfo += "[Bad Values > " + round(q3,3) + "]";


        } else {
            continue;
        }
        

        

        element = '<div class="col-xl-3 col-ml-6 col-mdl-4 col-sm-6 mt-5"> <div class="card"> <div class="pricing-list"> <div class="prc-head"> <h4 style="color:'+ color + '">' + callName + '</h4> </div> <div class="prc-list" style="background-color:'+ color + '"> <ul> <li><h1>' + dataValue + '</h1></li> <li><h6> ' + units + ' </h6></li> </ul>     <br><br>    <button type="button" class="btn btn-lg btn-primary mb-3 mr-1" data-container="body" data-toggle="popover" title="" data-placement="bottom" data-html="true" data-content="'+ buttonInfo +  ' " data-original-title="Ranges" aria-describedby="popover16043">More Info</button></div> </div> </div> </div> ';

    
        temp.innerHTML += element;

    }

}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }
  

function getValue(value) {

    
    for (j = 0; j < testData.length; j++) {
        if (testData[j][0] == value) {
            return testData[j][1];
        }
    }

}

