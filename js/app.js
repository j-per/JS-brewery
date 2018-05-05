const deadpan = document.getElementById("deadpan");
const apricot = document.getElementById("apricot");
const ipa = document.getElementById("ipa");
const fortune = document.getElementById("fortune");
var total = 0;

//Function that adds the price of the beer to a total
function addBeer (kindofbeer) {
    total += kindofbeer;
    return total.toFixed(2);
}

//Function to create new line item every time a button is click
function addLine (beername, id) {
    var node = document.createElement("h3");                                          // Create a <li> node
    var textnode = document.createTextNode(beername);                                 // Create a text node
    node.appendChild(textnode);                                                       // Append the text to <li>
    document.getElementById(id).appendChild(node);                                    // Append <li> to <ul> with id="lineitems"
}                                                                                     

//Function to add delete button to new line items
function deleteLine () {
    var node = document.createElement("button");
    var textnode = document.createTextNode("X");
    node.appendChild(textnode);
    document.getElementById('lineitems').appendChild(node);
}
//Deadpan Click
deadpan.addEventListener("click", function () {
    var cost = addBeer(beerList[0].price);
    document.getElementById('total').innerHTML = `<h2>Total: $${cost}</h2>`;
    addLine(beerList[0].name, "lineitems");
    deleteLine ();
});
//Apricot Wheat Click
apricot.addEventListener("click", function () {
    var cost = addBeer(beerList[1].price);
    document.getElementById('total').innerHTML = `<h2>Total: $${cost}</h2>`;
    addLine(beerList[1].name, "lineitems");
});
//Wiens IPA Click
ipa.addEventListener("click", function () {
    var cost = addBeer(beerList[2].price);
    document.getElementById('total').innerHTML = `<h2>Total: $${cost}</h2>`;
    addLine(beerList[2].name, "lineitems");
});
//Fortune Teller Click
fortune.addEventListener("click", function () {
    var cost = addBeer(beerList[3].price);
    document.getElementById('total').innerHTML = `<h2>Total: $${cost}</h2>`;
    addLine(beerList[3].name, "lineitems");
});

