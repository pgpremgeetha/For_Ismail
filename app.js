const logo = document.querySelectorAll("#line1 path");

for(let i = 0; i<logo.length; i++){
console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}