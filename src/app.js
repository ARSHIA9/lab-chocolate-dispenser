var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color,count)
{
    if(count < 1)
    {
        return "Number cannot be zero/negative";
    }
    for(x=0;x<count;x++)
    {
        chocolates.unshift(color);
    }
}

//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates,number)
{
    if(number < 1)
    {
        return "Number cannot be zero/negative";
    }
    if(number>chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }
    let array1 = [];
    for(x=0;x<number;x++)
    {
        array1[x]=chocolates.shift();
    }
    return array1;

}

//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates,number)
{
    if(number < 1)
    {
        return "Number cannot be zero/negative";
    }
    if(number>chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }
    let array2=[];
    for(x=0;x<number;x++)
    {
        array2[x]=chocolates.pop();
    }
    return array2;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number,color)
{
    if(number < 1)
    {
        return "Number cannot be zero/negative";
    }
    if(number>chocolates.length)
    {
        return "Insufficient chocolates in the dispenser";
    }
    let array3=[];
    for(x=0;x<number;x++)
    {
        array3[x]=chocolates.pop(color);
    }
    return array3;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

//    var count=0;
//    var finalCount=[];
//    var array4 = ["green", "silver", "blue", "crimson", "purple", "red", "pink"];
//    if(chocolates.length<0)
//    {
//        return [];
//    }
//     for(var i=0;i<=array4.length;i++)
//     {
//         for(var j=0;j<=chocolates.length;j++)
//         {
//             if(array4[i]==chocoltes[j])
//             {
//                 count++;
//             }
//         }
//         if(count == 0)
//         {
//             count = undefined;
//         }
//         else
//         {
//             finalCount.push(count);
//         }
//     }
//     return finalCount;
function noOfChocolates(chocolates)
{
       let array4=[];
       //return array4;
       for(var i=0;i<chocolates.length;i++)
       {
           if(chocolates[i]!==0)
           {
              var count = 1; 
              for(var j=i+1;j<chocolates.length;j++)
              {
                  if(chocolates[i]==chocolates[j])
                  {
                     count++
                     chocolates[j]=0;
                  }
              }
              array4.push(count);
           }
       }
    return array4;
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates)
{
    // var count = {}, value;
    // // compute count of each value
    // for(var i = 0; i < chocolates.length; i++) {
    //     value = chocolates[i];
    //     if(value in count) {
    //         count[value]++;
    //     }
    //     else {
    //         count[value] = 1;
    //     }
    // }
    // var array5 = [];
    // for(value in count) {
    //     array5.push(value);
    // }
    // // // sort the uniques array in descending order by frequency
    // // function compareCount(a, b) {
    // //     return count[b] - count[a];
    // // }
    //  var a = array5.sort();
    //  return a.reverse();
    let light= chocolates.reduce(function(b, a) {
        if (a in b) {
            b[a]++;
        } else {
            b[a] = 1;
        }
        return b;
    }, {});
    let sorted = chocolates.sort((a, b) => {
        if (light[b] > light[a]) {
            return 1;
        }
        if (light[b] < light[a]) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    });
    chocolates = sorted;
}



    


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, count, currentColor, finalColor)
{
    if (currentColor == finalColor)
        return "Can't replace the same chocolates";
    else if (count > 0) 
    {
        for (var i = chocolates.length; i >= 0; i--) 
        {
            if (chocolates[i] == currentColor)
                chocolates[i] = finalColor;
        }
        return chocolates;
    } else
        return "Number cannot be zero/negative";
}
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, currentColor, finalColor) 
{
    if (currentColor == finalColor)
        return "Can't replace the same chocolates";
    else
    {
        for (var i = chocolates.length; i >= 0; i--) 
        {
            if (chocolates[i] == currentColor)
                chocolates[i] = finalColor;
        }
    }
    var array6 = [chocolates.length, chocolates];
    return array6;
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
