//Q.1 PROGRAM TO SEARCH FOR A PARTICULAR CHARACTER IN A STRING.
 
 let str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 let match1=str.match("D");
 let search1=str.search("D");
 console.log(match1+":"+search1);


 //Q.2 PROGRAM TO CONVERT MINUTES TO SECONDS.

let m;
function convert(m) 
     {
       let s=m*60;
           return(m +" Minutes"+":"+s+" Seconds")
     }
console.log(convert(3));


 //Q.3 PROGRAM TO SEARCH FOR A ELEMENT IN A ARRAY OF STRINGS.

 let arr1=["apple","banana","mango","orange","pineapple"];
 let index=arr1.indexOf("banana");
 let ans=arr1.includes("banana");
 if (ans==true)
 console.log("Element found at position: "+index);
   

 // Q.4 PROGRAM TO DISPLAY ONLY ELEMENTS CONTAINING 'a' IN THEM FROM AN ARRAY.

let arr2=["cpl","ipl","bpl","apl","spl"];
for (let i = 0; i < arr2.length; i++) 
       {
           if(arr2[i].includes('a'))
             console.log(arr2[i]);
       }



 //Q.5 PRINT AN ARRAY IN REVERSE ORDER.
 let arr3=["cpl","ipl","bpl","apl","spl"];
 console.log("MY ARRAY : "+arr3);
 let arr4=arr3.reverse();
 console.log("AN ARRAY IN REVERSE ORDER : "+arr4);

