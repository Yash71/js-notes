// const grandparent=document.querySelector(".grandparent");
// const parent=document.querySelector(".parent");
// const child=document.querySelector(".child");

// // grandparent.addEventListener("click",e=>{
//     //     console.log(e.target);
// // })
// // grandparent.addEventListener("click",e=>{
// //     console.log("grandparent 1");
// // })
// // grandparent.addEventListener("click",e=>{
// //     console.log("grandparent 2");
// // })


// // Bubble Events
// grandparent.addEventListener("click",e=>{
//     console.log("grandparent bubble");
// })
// // parent.addEventListener("click",e=>{
// //     console.log("parent bubble");
// // })
// child.addEventListener("click",e=>{
//     console.log("child bubble");
// })
// document.addEventListener("click",e=>{
//     console.log("document bubble");
// })
// // when we click on the child div block, first "child 1" is printed, then "parent 1" is printed then "grandparent 1" is printed then "document 1" is printed. This is known as even bubbling (inside to outside)

// //Capture Events
// grandparent.addEventListener("click",e=>{
//     console.log("grandparent capture");
// },{capture:true})
// parent.addEventListener("click",e=>{
//     console.log("parent capture");
// },{capture:true})
// child.addEventListener("click",e=>{
//     console.log("child capture");
//     e.stopPropagation(); // stop propagation is used to stop propagating after a certain event is finished 
// },{capture:true})
// document.addEventListener("click",e=>{
//     console.log("document capture");
// },{capture:true})


// // To make your eventlistener run only once, use "once:true" as a third parameter
// parent.addEventListener("click",e=>{
//     console.log("parent bubble");
// },{once:true})


const divs=document.querySelectorAll('div');

divs.forEach(div=>{
    div.addEventListener("click",()=>{
        console.log("hello");
    });
});

// this would append a new div into the html
const newDiv=document.createElement("div");
newDiv.style.width='200px';
newDiv.style.height='200px';
newDiv.style.backgroundColor="purple";
document.body.append(newDiv);

// clicking on this div won't do anything since divs was created before this insertion took place. To prevent this, use the following code block
document.addEventListener("click",e=>{
    if(e.target.matches("div")){
        console.log("Hi");
    }
}); // this would work even after a div is added