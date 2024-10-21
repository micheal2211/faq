const plus = document.querySelectorAll("plus");
const minus = document.querySelectorAll("minus");
const hind = document.querySelectorAll("hind");
const text = document.querySelectorAll("text");

for(let i = 0; i< plus.length; i++){
    plus[i].addEventListener("click", function() {
        plus[i].classlist.toggle("hidden");
        minus[i].classlist.toggle("hidden");
        hind[i].classlist.toggle("hidden");
    });
}

for(let i = 0; i< minus.length; i++){
    minus[i] .addEventListener("click", function() {
        minus[i].classlist.toggle("hidden");
        plus[i].classlist.toggle("hidden");
        hind[i].classlist.toggle("hidden");
    });
}

