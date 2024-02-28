// --------------------------- MoveElemet ---------------------------------------

// const myBox = document.getElementById("mybox");

// let x = 0;
// let y = 0

// const moveAmount = 2

// document.addEventListener("keydown", event => {
//     if (event.key.startsWith("Arrow")) {
//         event.preventDefault();
//         switch (event.key) {
//             case "ArrowUp":
//                 y -= moveAmount
//                 break;
//             case "ArrowDown":
//                 y += moveAmount
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount
//                 break;
//             case "ArrowRight":
//                 x += moveAmount
//                 break
//         }
//     }
//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
// })



//-------------------------------------Click--------------------

const myForm = document.getElementById("my-form");

myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const thing = e.target[0].value;
    const amount = e.target[1].value;
for (let i = 0; i < amount; i++) {
console.log(thing)    
}
})