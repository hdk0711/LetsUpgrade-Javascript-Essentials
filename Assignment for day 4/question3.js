const myArray=[

    {
        name:"MS DHONI",
        age:39,
        country:"INDIA",
       hobbies:["Biking","Playing football","Tennis"],
    },
    {
        name:"KANE WILLIAMSON",
        age:27,
        country:"NEWZELAND",
      hobbies:["Listening to music","Travelling","Cooking"],
    },
    {
        name:"DAVID WARNER",
        age:33,
        country:"AUSTRALIA",
       hobbies:["Travelling","Writting","Swimming"],
    },
    {
        name:"VIRAT KOHLI",
        age:28,
        country:"INDIA",
       hobbies:["Workout","Travelling","Singing","Dancing"],
    }]

myArray.forEach(function(answer){
    console.log(answer);
});
function getAge(){
    for (let i = 0; i < myArray.length; i++) {
    if(myArray[i].age<30)
    console.log(myArray[i]);
   }
}
getAge();
function getCountry(){
    for (let j = 0; j < myArray.length; j++) {
        if(myArray[j].country=="INDIA")
        console.log(myArray[j]);
}

}
getCountry();