const input = document.getElementById('nameinput');
const select = document.getElementById('preference');
const button = document.getElementById('submitbutton');
const mainSpan = document.getElementById('textone');
const packageSpan = document.getElementById('texttwo');
const mainParagraph = document.getElementById('paragraphlast');


button.addEventListener('click', () => {
    const newValue = input.value;
    const newSelect = select.value;

    const selectedOption = select.options[select.selectedIndex];
    const newColor = selectedOption.getAttribute('data-color');
    
    if (newValue.trim() !== "") {
        mainSpan.textContent =  ` ${newValue}`;
        packageSpan.textContent = ` ${newSelect}`;
        mainParagraph.style.display = 'block';
        input.value = "";
    }
    else {
        alert("Please enter your name");
    }
    if (newSelect !== "" && newColor) {
        document.body.style.backgroundColor = newColor
    }
});