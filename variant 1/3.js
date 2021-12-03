

function remHyperlinks() {
    var elements = document.getElementsByTagName("a");
    if (elements.length > 0) {
        for (var i = 0; i < elements.length; i++) {
            if (!(elements[i].href)) {
                elements[i].parentNode.removeChild(elements[i]);
                i--;
            }
        }

    }
}
