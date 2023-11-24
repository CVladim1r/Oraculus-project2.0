function switchLanguage() {
    var elementsToTranslate = document.querySelectorAll(".translate");
    elementsToTranslate.forEach(function(element) {
        if (element.getAttribute("data-en")) {
            var enText = element.getAttribute("data-en");
            var ruText = element.getAttribute("data-ru");
            if (element.textContent === enText) {
                element.textContent = ruText;
            } else {
                element.textContent = enText;
            }
        }
    });
}