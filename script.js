function myFunction() {
    let input = document.getElementById("myText").value;

const words = {
    noun: ["poem", "quality", "location", "guidance", "comparison"],
    verbs: ["help", "seek", "require", "share", "steal"],
    adjectives: ["psychotic", "funny", "opposite", "hysterical", "accessible"],
    names: ["Jeremy", "Norman", "Viola", "Kelsey", "Thora"],
    conjunction: ["for", "and", "of", "but", "yet"],
}

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



const vowels = ["a", "e", "i", "o", "u", "y"]
const upperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const randomNameNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const bandNameGenerator = (data) => {
    if(vowels.includes(data[0]) && vowels.includes(data[data.length-1]) ){
        bandName = `The ${upperCase(words.adjectives[randomNameNumber(0, words.adjectives.length)])}`
    }  else if (vowels.includes(data[0])) {
        bandName = `${upperCase(words.names[randomNameNumber(0, words.names.length )])} ${upperCase(words.verbs[randomNameNumber(0, words.verbs.length)])}s`
    } else {
        bandName = `${upperCase(words.adjectives[randomNameNumber(0, words.adjectives.length )])} ${upperCase(words.names[randomNameNumber(0, words.names.length)])}`
    }
    return bandName
}
console.log(bandNameGenerator(input))


/* let counter = 0
for(let i = 0; i < vowels.length; i++){
    if(vowels[i] === input[0]){
        counter++
    } else {
        counter = counter
    }
} 

// console.log(counter) 
    
if (counter === 1 ) {
    bandName = "The " + bandNameGenerator(words.adjectives[randomNameNumber(0, words.adjectives.length )])
    } else {
    bandName = bandNameGenerator(words.adjectives[randomNameNumber(0, words.adjectives.length )]) + ' ' + bandNameGenerator(names[randomNameNumber(0, words.names.length)])
    } */

// console.log(bandName)   


const albumTitleGenerator = (generatedBandName) => {
    if(generatedBandName.includes("The") /* && (Math.floor(bandName.length % 2)) === 0 */ ){
        albumTitle = upperCase(`Some ${words.verbs[Math.floor(Math.random() * (5 - 0) + 0)]} ${words.noun[Math.floor(Math.random() * (5 - 0) + 0)]}` )

    } else {
        albumTitle = upperCase(words.verbs[Math.floor(Math.random() * (5 - 0) + 0)] +" "+ words.conjunction[Math.floor(Math.random() * (5 - 0) + 0)] +" "+ words.noun[Math.floor(Math.random() * (5 - 0) + 0)])
        
    }
    
   return albumTitle 

} 

console.log(albumTitleGenerator(bandName))

/* console.log(album)
console.log(words.verbs[Math.floor(Math.random() * (5 - 0) + 0)])
*///console.log(Math.floor(bandName.length / 3)-1)

let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]
//console.log(alphabetFirst.substring(0, 5))

const americanRock = `"${albumTitle}" is the latest album by the American rock band "${bandName}". The album features 12 tracks, each with a unique sound that blends classic rock with modern pop. The band's lead singer, Lena Smith, delivers powerful vocals on every track, while the guitar riffs of Jimi Hendrix and Eddie Van Halen add a touch of nostalgia to the album. The standout tracks include “Breaking Barriers”, “Inclusive Rhythms”, and “Beyond Accessibility”. Overall, Breaking Barriers is a must-listen for fans of classic rock and modern pop alike.`

const americanPop =`"${albumTitle}" is the latest album by the American pop band "${bandName}". The album features 10 tracks, each with a unique sound that blends pop with electronic music. The band's lead singer, Lena Smith, delivers powerful vocals on every track, while the synth beats of Calvin Harris and David Guetta add a touch of nostalgia to the album. The standout tracks include “Electric Dreams”, “Lost in the City”, and “Pop and Roll”. Overall, Electric Dreams is a must-listen for fans of pop and electronic music alike.`

const britishIndie = `${albumTitle} is the latest album by the British indie band ${bandName}. The album features 10 tracks, each with a unique sound that blends indie rock with electronic music. The band's lead singer, Lena Smith, delivers powerful vocals on every track, while the guitar riffs of Johnny Marr and The Edge add a touch of nostalgia to the album. The standout tracks include “The Sound of Silence”, “Lost in the City”, and “Electric Dreams”. Overall, The Sound of Silence is a must-listen for fans of indie rock and electronic music alike.`

const descriptionGenerator = (generatedTitle) => {
    let x = randomNameNumber(0, generatedTitle.length)
   
    alphabet.map((element, index) => {
        
        if(element === generatedTitle[x] && index >= 0 && index < 7 ){
           description= americanPop

        } else if (element === generatedTitle[x] && index > 6 && index < 13) {
            description = americanRock

        } else if (element === generatedTitle[x] && index > 12 && index < 19) {
            description = britishIndie
            
        } else if (element === generatedTitle[x] && index > 18 && index < 28){
            description = britishIndie

        }
        
    })
    return description
}

console.log(descriptionGenerator(albumTitle))



 // YEAR GENERATOR

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

//console.log(counter1, counter2)

/*if(counter1 > 1 && counter2 > 2 || sumCounters > 3) {
    yearFirstTwoChar = 20
} else {
    yearFirstTwoChar = 19
} */

if(counter1 > Math.floor(albumTitle.length / 14) && counter2 > Math.floor(albumTitle.length / 12) || sumCounters > 3) {
    yearFirstTwoChar = 20
} else {
    yearFirstTwoChar = 19
}


/* console.log(yearFirstTwoChar)
console.log(counterTotalChar)
*/

let includeArray = ['r', 's', 'j', 'd', 'e', 't', 'b', 'm', 'f', 'o', 'q', 'w', 'x']

if (yearFirstTwoChar === 20){ // <24 && >=0
    for(let i = 0; i < albumTitle.length; i++){
        if(albumTitle.length < 24 && albumTitle.length >= 10){
            yearLastTwoChar = albumTitle.length
        } else if (albumTitle.length < 10 ){
            yearLastTwoChar = "0" + albumTitle.length
        } else {
            yearLastTwoChar = albumTitle.length-13
        }
    }
} else if (yearFirstTwoChar === 19) {
    for(let i = 0; i < albumTitle.length; i++){
        if(includeArray.includes(albumTitle[13]) && albumTitle.length < 12){
            yearLastTwoChar = albumTitle.length * 7
        } else if(includeArray.includes(albumTitle[13]) && albumTitle.length > 12 && albumTitle.length < 25){
            yearLastTwoChar = albumTitle.length * 4
        } else if(includeArray.includes(albumTitle[13]) && albumTitle.length > 25 && albumTitle.length < 33){
            yearLastTwoChar = albumTitle.length * 3
        } else if(includeArray.includes(albumTitle[13]) && albumTitle.length > 32 && albumTitle.length < 45){
            yearLastTwoChar = albumTitle.length * 2
        } else {
            yearLastTwoChar = albumTitle.length
        }
    }
}


year = yearFirstTwoChar + "" + yearLastTwoChar

/* console.log(albumTitle)
 *//* console.log(counter1)
console.log(counter2)
console.log(fourthChar)
console.log(minusFourthChar)
*/
// console.log(year)

let album = {
    bandname: bandName,
    albumtitle: albumTitle,
    description: description,
    year: year
}

console.log(album) 


    document.getElementById("demo").innerHTML = bandName;
    
  
    document.getElementById("album").innerHTML = albumTitle;
    
    
    document.getElementById("rotate").innerHTML = year;
}



function imageChange (fileName){

   let img = document.querySelector("#bannerImage");
    img.setAttribute("src", fileName);

}
