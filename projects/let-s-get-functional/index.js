// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-johnbuhler");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./johnbuhler.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //must use the filter function to filter out the male customers//
    //output must be a number//
    return _.filter(array, function(customer){
        //return a condition that resolves to true or false based on the arguments//
        //test if the customer obj has a gender prop of male//
        return customer.gender === "male";
    }).length;
};

var femaleCount = function(array) {
    //must use filter function to filter out the male customers//
    //output must be a number//
    return _.filter(array, function(customer){
        //return a condition that resolves to true or false based on the arguments//
        //test is the customer obj has a gender prop of female//
        return customer.gender === "female";
    }).length;
};

var oldestCustomer = function(array) {
    //place holder
    let olderThanOld = 0;
    let olderThanOldName = array.reduce((oldest, value) => {
        //look over array of people//
        if(value.age > olderThanOld){
         olderThanOld = value.age;
            return value.name;
        }
        return oldest;
    },'');
    return olderThanOldName;
};

var youngestCustomer = function(array) {
    //first person is the yougest//
    let youngerThanYoung = 100;
    //place holder//
    let youngerThanYoungName = array.reduce((youngest, person) => {
        //look over array to find the ages//
        if(person.age < youngerThanYoung) {
            youngerThanYoung = person.age;
            return person.name;
        }
    //let the yougest be known//
    return youngest;
    },'');
    //return youngerThanYoungName//
    return youngerThanYoungName;    
};

var averageBalance = function(array) {
  //grab all balances into place holder//
    let newArray = _.pluck(array, "balance");
    let money = newArray.map(function (moneySign) {
        //remove the $//
        return moneySign.slice(1);
    }); //hold then replace//
    let moneyKeepsGoing = money.map(function(moneyReplace) {
        return (moneyReplace.replace(/,/g,''));
    });
    let moneyTalk = moneyKeepsGoing.map(function(moneyReplaceReplace) {
        return parseFloat(moneyReplaceReplace);
    });//get the size and total then '/'//
    let size = newArray.length;
    let total = _.reduce(moneyTalk,function(moneyMoney, personWithMoney){
        return moneyMoney + personWithMoney;
    },0);
    let averageNumber = total / size;
    //return the output ^//
    return averageNumber; 
};


var firstLetterCount = function(array, letter) {
    //pluck names and hold//
    let personName = _.pluck(array, "name");
    //compare first letter and given letter//
    let firstLetter = _.filter(personName, function(letter1){
        return letter1[0].toUpperCase() === letter.toUpperCase();
    });
    return firstLetter.length;
};


var friendFirstLetterCount = function(array, customer, letter) {
    //first letter is being searched for over the array//
    let filterCount = array.filter(function(customerPerson){
        return customerPerson.name.toUpperCase() === customer.toUpperCase();
    });
    //makes array of friends//
    let filterCountNames = _.pluck(filterCount, "friends");
    filterCountNames = filterCountNames[0];
    //return all friends//
    let filterArray = _.filter(filterCountNames, function(person){
        return person.name[0].toUpperCase() === letter.toUpperCase();
    });
        return filterArray.length;
};


var friendsCount = function(array, customerName) {
    //place holder [];
    let arrayOfFriends = [];
   
    //look through persons for friends//
    _.each(array, function(persons, i, array){
        //friends place holder//
        let friends = persons.friends;
        //names place holder, pluck names//
        let friendsNames = _.pluck(friends, "name");
    //look at each person for each customer's name//
    _.each(friendsNames, function(person, i, array){
        if (person === customerName){
            arrayOfFriends.push(persons.name);
    }
    });
    });
    return arrayOfFriends;    
};


var topThreeTags = function(array){
    //think about concating all the tag arrays together//
    //pulling the tags out of the object//
    let tags = _.pluck(array, "tags");
    //console.log(tags);
    //joins all the sub arrays into one big string//
    let tagsj = tags.join(",");
    //separates the string by a comma//
    let tagsS = tagsj.split(",");
  //console.log(tagsS);
    let count = _.reduce(tagsS,function(acc,curr){
        if(acc[curr]){
            acc[curr]++;
        }else {acc[curr] = 1}
        return acc;
    },{});//if the words are in the array then they will be counted and if not they wil be added//
   //console.log(count);
    let arr = [];
    for (let key in count){
        //push the results of count into a new array//
        arr.push([key,count[key]]);
    }
    //console.log(arr);
    arr.sort(function(a,b){//sorting the arrays by highest word count
       return b[1] - a[1];
    });
    console.log(arr);
 //taking the top 3 word in their array//
 let top3arr =  arr.slice(0,3);
 console.log(top3arr);//[[a:2], [b:4], [c:1]]
 let top3Words = _.map(top3arr,function(wordAndCount){//taking only the words out of their sub arrays//
     return wordAndCount[0];
 });
 return top3Words;
};


var genderCount = function(array) {
    //to hold total gender count//
    let totalCount = {};
   
    //look over each person and find all females//
    let femmaleCount = _.reduce(array, function(femaleGender, person, i){
        if (person.gender === "female") {
        femaleGender++;
    }
    return femaleGender;
    },0);
   
    //look over each person and find all males//
    let maleCount = _.reduce(array, function(maleGender, person, i){
        if (person.gender === "male") {
        maleGender++;
    }
    return maleGender;
    },0);
   

    //look over each person and find all nonBinaries//
    let nonBinary = _.reduce(array, function(acc, person, i){
        if(person.gender === "non-binary"){
         acc++;
    }
    return acc;
    }, 0);


totalCount.female = femmaleCount;
totalCount.male = maleCount;
totalCount["non-binary"] = nonBinary;
return totalCount;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
