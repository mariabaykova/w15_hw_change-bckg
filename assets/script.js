let colors = {
    dark: "rgb(63, 63, 93)",
    blue: "rgb(100, 100, 248)",
    pink: "pink",
    white: "rgb(252, 241, 241)"
};
const bodyElem = document.body;

let selectElem = document.querySelector('.main__theme-selection');
selectElem.addEventListener('change', 
                            (eventChange) => {
                                changeStyleProperty( bodyElem, "background", "");
                                changeStyleProperty( bodyElem, "background", colors[eventChange.target.value]);
                            } );

function changeStyleProperty ( elem, property, propertyVal ) {
    elem.style[property] = propertyVal;
}