const noun = ["poem", "quality", "location", "guidance", "comparison"]
const verbs= ["help", "seek", "require", "share", "steal"]
const adjectives = ["psychotic", "funny", "opposite", "hysterical", "accessible"]
const names = ["Jeremy", "Norman", "Viola", "Kelsey", "Thora"]
const conjunctions = ["for", "and", "of", "but", "yet"]


const longest1 = noun.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];
/* console.log(longest1.length)
 */
const longest2 = adjectives.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];
/* console.log(longest2.length)
 */
const longest3 = verbs.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];
/* console.log(longest3.length)
 */
const longest4 = names.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];
/* console.log(longest4.length)
 */
const longest5 = conjunctions.sort(
    function (a, b) {
        return b.length - a.length;
    }
)[0];
/* console.log(longest5.length)
 */
/* console.log(longest1.length + longest2.length + longest3.length + longest4.length + longest5.length)
 */

const shortest1 = noun.sort(
    function (a, b) {
        return a.length - b.length;
    }
)[0];
/* console.log(longest1.length)
 */
const shortest2 = adjectives.sort(
    function (a, b) {
        return a.length - b.length;
    }
)[0];
/* console.log(longest2.length)
 */
const shortest3 = verbs.sort(
    function (a, b) {
        return a.length - b.length;
    }
)[0];
/* console.log(longest3.length)
 */
const shortest4 = names.sort(
    function (a, b) {
        return a.length - b.length;
    }
)[0];
/* console.log(longest4.length)
 */
const shortest5 = conjunctions.sort(
    function (a, b) {
        return a.length - b.length;
    }
)[0];
/* console.log(longest5.length)
 */
/* console.log(shortest1.length + shortest2.length + shortest3.length + shortest4.length + shortest5.length)
 */



let bandName = ""
let albumTitle = ""
let description = ""
let year = 0 // 1900 < year < 2023

// Bandname -- István
// Album -- Berni
// Description -- Pali
// Year -- Petra
// Albumdata -- Petra

// https://randomwordgenerator.com/noun.php

const bandNameGenerator = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const randomNameNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const theRandomName = () =>  bandNameGenerator(verbs[randomNameNumber(0, verbs.length )]) + ' ' + bandNameGenerator(names[randomNameNumber(0, names.length)]);
console.log(theRandomName())



albumTitle = noun[0] + " " + conjunctions[2] + " " + adjectives[3] + " " + noun[1]
let counter1 = 0 // counts the 4.char of the string
let counter2 = 0 // counts the -4.char of the string
let fourthChar = albumTitle[3]
let minusFourthChar = albumTitle[albumTitle.length-4]

let yearFirstTwoChar = 0
let yearLastTwoChar = 0

for( let i = 0; i < albumTitle.length; i++){
    if(albumTitle[i] === fourthChar){
        counter1++
    } else if (albumTitle[i] === minusFourthChar) {
        counter2++
} else {
    counter1 = counter1
    counter2 = counter2
}
}
let sumCounters = counter1 + counter2

if(counter1 > 3 && counter2 > 2 || sumCounters > 5) {
    yearFirstTwoChar = 20
} else {
    yearFirstTwoChar = 19
}
/* console.log(yearFirstTwoChar)
console.log(counterTotalChar)
*/

console.log(albumTitle.length)
let includeArray = ['r', 's', 'j', 'd', 'e', 't']

if (yearFirstTwoChar === 20){ // <24 && >=0
    for(let i = 0; i < albumTitle.length; i++){
        if(includeArray.includes(albumTitle[13])){
            yearLastTwoChar = albumTitle.length 
        } else {
            yearLastTwoChar = albumTitle.length-12
        }
    }
} else if (yearFirstTwoChar === 19) {
    for(let i = 0; i < albumTitle.length; i++){
        if(includeArray.includes(albumTitle[13])){
            yearLastTwoChar = albumTitle.length 
        } else {
            yearLastTwoChar = 0
        }
    }
}


console.log(yearLastTwoChar)

year = yearFirstTwoChar + "" + yearLastTwoChar

console.log(albumTitle)
/* console.log(counter1)
console.log(counter2)
console.log(fourthChar)
console.log(minusFourthChar)
*/
console.log(year)

let album = {
    bandname: bandName,
    albumtitle: albumTitle,
    description: description,
    year: year
}
console.log(album)
