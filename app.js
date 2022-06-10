const logo = document.querySelectorAll("#line2 path");

for(let i = 0; i<logo.length; i++){
console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}