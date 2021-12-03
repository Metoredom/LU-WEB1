function processHyperlinks() {
var hl = document.getElementsByTagName('a');
for (var i = 0; i < hl.length; i++) {
hl[i].onclick = function() {
console.log("Hyperlink #" + i + " was clicked!");
}
addEventListener("click", onclick());
}
}
