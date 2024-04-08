document.addEventListener("Creating and Inserting DOM Elements"() {
    document.getElementById("text").textContent = "Liz Wachira is the champion"});



const newHeader = document.createElement('main');
newHeader.id = 'victory';
newHeader.textContent = 'Liz Wachira is the champion';

document.querySelector('main#main').remove(); //you can no longer see the text content

document.body.appendChild(newHeader);
//creating a new element in the web console
const paragraph = document.createElement('test');
newHeader.id = 'bodytest';
//add the paragraph element to an existing element with the ID "test"
document.getElementById("test").appendChild(paragraph);
