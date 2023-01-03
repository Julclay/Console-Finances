var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

// Title

console.log('Financial Analysis');

// sum of total month

console.log('Total month: ' + finances.length);


//calculate the total of the profits/loss

    //make a variable to only calculate the numbers as strings can not be calculate
    //make a loop to calculate the total of  all the number element in the array

    let total = 0;

for (let i = 0; i < finances.length; i++) { // loop to go through all the array and calculate the total
    const [date, amount] = finances[i];

    total += amount;
    
}

console.log('Total: $' + total);


    
    
//calculate the average change in profit/loss

    //make an array to store each profit/loss change
    //create a loop to go through each value of the array
    //calculate each change by substracting the following month by the preceding month
    // push the result for each change in the array
    
    //create a loop to calulate the total of the number element in the new array (same as exercise 1)
    //divided the total by the number of element in the array 

// make an array to calculate each changes in profit/loss

    let gapMonth = []; //new array

    for (let i = 0; i < finances.length - 1; i++) {
    
    

        gap = finances[i+1][1] - finances[i][1]; //looop to go through the finances array and calculate each change. [i+1] because we start with 2nd month - 1st month
    
        gapMonth.push([finances[i+1][0], gap]); //push the change calculated (let gap) in the new array. Finances[i+1][0] is to push the month with it.
        
    }
    
   



// calcul the average gap 

    let average = 0;

for (let i = 0; i < gapMonth.length; i++) { // loop to go through all the array and calculate the total like in first exercise
    const [date2, gap2] = gapMonth[i];

    average += gap2;
    
}

let totalAverage = average/gapMonth.length;

let roundAverage = totalAverage.toFixed(2); // to round the number to 2 decimals

console.log('Average Change: $' + roundAverage);



// calculate the greatest and smallest in  profit 
    //push in the array with the change the month
    //find the greatest with the formula 

    // greatest increase

let greatest = 0; // variable to find the greatest profit in the array gapMonth
let monthGreatest = ''; // variable to find the month related to the greatest profit in the array

for (let i = 0; i < gapMonth.length; i++) { //loop to go through all items in the array gapMonth
    let [date3, gap3] = gapMonth[i];

    

    if (gap3 > greatest) { // each time a value in the array is bigger than the let greatest the value is sotred in the varialbe


        greatest = gap3;
        monthGreatest = date3 // to store the related month in another variable because it is a string

    }
    
}

console.log('Greatest Increase in Profits: ' +  monthGreatest + ' '+ '($' + greatest + ')');




// greatest decrease


let smallest = 0;
let monthSmallest = '';

for (let i = 0; i < gapMonth.length; i++) {
    let [date4, gap4] = gapMonth[i];

    

    if (gap4 < smallest) {


        smallest = gap4;
        monthSmallest = date4;

    }
    
}

console.log('Greatest Decrease in Profits: ' + monthSmallest+ ' '+ '($' + smallest + ')');
