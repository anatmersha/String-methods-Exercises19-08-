// 1
function longerThan (string) {
if(string.length>5) {
    return "long";
}
return "short";
}
console.log(longerThan ("anat mersha"));

// 2
function isAinside(string) {
    for (var index = 0; index < string.length; index++) {
        if (string.indexOf("s") != -1) {
            return string.indexOf("s");
        }
        return "not found";

    }
}
console.log(isAinside("anat mersha"));
// 3
function isRInside(string) {
    for(var index=0;index<string.length;index++) {
        if(string.indexOf("z") != -1) {
            return true;
        }
    }
    return false;
}
console.log(isRInside("anat mersha"));
// 4
function isCharIn (string, char) {
for(var index=0;index<string.length;index++) {
    if(string.indexOf(char) != -1) {
return true;
    }
}
return false;
}
console.log(isCharIn ("anat", 's'));
// 5
function isCharInside(char, string) {
    for(var index=0;index<string.length;index++) {
        if(string.lastIndexOf(char) != -1) {
            return string.lastIndexOf(char);
        }
    }
    return "char isn`t inside";
}
console.log(isCharInside('s', "anat mersha"));
// 6
function firstThreeChars(string) {
        return string.substring(0, 6);
}
console.log(firstThreeChars("anat mersha"));
// 8
function getPartString(string) {
    return string.substring(string.indexOf('o'));
}
getPartString(string)
// 9
function whosLonger(index, string) {
        if(index<string.length) {
            return string.substr(index);
        }
    return "too big";
}
console.log(whosLonger(3, "anat mersha"));
// 10
function getLonger(index, string) {
if(index>string.length) {
return "too big";
}
else {
    return string.substr(index, 3);
}
}
console.log(getLonger(0,  "anat mersha"));
// 11
function getPartOfString(string, numOne, numTwo) {
    if (typeof (numOne) && typeof(numTwo) == typeof (3)) {
        return string.substr(numOne, numTwo);
    }
}
console.log(getPartOfString("anat mersha", 2, 6));
// 12
function getPartString(string) {
    return string.substr(0, 3);
}
console.log(getPartString("sayonara"));
// 13
function getPartOfString(string) {
    return string.substr(string.indexOf("y"), 4);
}
console.log(getPartOfString("sayonara"));
// 14
function getPartString(string) {
    return string.substr(string.indexOf("o"), 4);
}
console.log(getPartString("sayonara"));
// 15
function printString(fullName) {
    console.log(fullName.length);
    console.log(fullName.indexOf(" "));
    console.log(fullName.substring(0, fullName.indexOf(" ")));
    console.log(fullName.substring(fullName.indexOf(" ") + 1));
}
printString("anat mersha");
// 16
function areSimiliar(string1, string2) {
    if(string1.toLowerCase() == string2.toLowerCase()) {
        return "the same";
    }
    return "not the same"
}
console.log(areSimiliar("anat", "anat"));
// 17
function areEqual(stringOne, stringTwo) {
    if(stringOne.toUpperCase() == stringTwo.toUpperCase()) {
return "the same";
    }
    return "not the same";
}
console.log(areEqual("MershA", "meRshA"));
// 18
function longerName(firstName, lastName) {
    if (firstName.length > lastName.length) {
        console.log(firstName);
    }
    else {
        console.log(lastName);
    }
}
console.log(longerName("anat", "mersha"));
// 19
function iaCharInString(firstName, lastName) {
    if(firstName.indexOf("a") != -1) {
        console.log("is inside");
    }
    else {
        console.log("not inside");
    }
    if(lastName.indexOf("api") != -1) {
        console.log("is inside");
    }
    else {
        console.log("not inside");
    }
}
console.log(iaCharInString("anat", "mersha"));
// 20
function longerThan5(string) {
    if(string.length>5) {
        return "long";
    }
    return "short";
}
console.log(longerThan5("mersha"));
// 21
function isShorterThan3(string) {
    if(string.length<3) {
        return "yes";
    }
    return "no";
}
console.log(isShorterThan3("peru"));
// 22
function isLongerThan6(string, char) {
    if (string.length > 6) {
        return string;
    }
    return string.indexOf(char);
}
console.log(isLongerThan6("anat", 'a'));
// 23
function isCharInString(string, char) {
    if(string.indexOf(char) != -1) {
        return string.indexOf(char);
    }
    return string;
}
console.log(isCharInString("anat", 'm'));
// 24
function changeString(firstName, lastName) {
    var newString = `${firstName[0]}. ${lastName.toUpperCase()}`;
    return newString;
}
console.log(changeString("anat", "mersha"));
// 25
function getLongerName(lastName1, lastName2) {
if(lastName1.length>lastName2.length) {
    console.log(`shorter name: ${lastName2}`); 
    return lastName1;
}
console.log(`shorter name: ${lastName1}`); 
    return lastName2; 
}
console.log(getLongerName("partush", "mersha"));
// 26
function inCHarInName(inputName, char) {
    if(inputName.indexOf(char) != -1) {
        return inputName;
    }
    return "not inside"
}
console.log(inCHarInName("anat", 'z'));
// 27
function isMultibleWords(inputFullName) {
    var twoParts = [];
    if (inputFullName.indexOf(" ") == -1) {
        return `${inputFullName[0].toUpperCase()}${inputFullName.substr(1).toLowerCase()}`;
    }
    if((inputFullName.indexOf(" ") && inputFullName.lastIndexOf(" ")) != -1) {
        var firstHalf = inputFullName.substr(0, inputFullName.indexOf(" "));
        var secondHalf = inputFullName.substring(inputFullName.indexOf(" "), inputFullName.lastIndexOf(" "));
        var thirdHalf = inputFullName.substr(inputFullName.lastIndexOf(" "));
        return `First name: ${firstHalf} Middle name: ${secondHalf} Last name: ${thirdHalf}`;
    }        
    if (inputFullName.indexOf(" ") != -1) {
            var firstHalf = inputFullName.substr(0, inputFullName.indexOf(" "));
        var secondHalf = inputFullName.substr(inputFullName.indexOf(" "));
        twoParts.push(firstHalf, secondHalf);
        return twoParts;
    }    
}
console.log(isMultibleWords("anat mersha"));



















