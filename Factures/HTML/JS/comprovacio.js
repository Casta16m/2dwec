var adder = document.querySelector("#getme");
adder.addEventListener("click", getMe);
var by = document.querySelector("#out");
by.addEventListener("click", checkOut);
var cme = document.querySelector("#clr");
cme.addEventListener("click", clearMe);

function getMe() {
    sfruit = document.querySelector("#sf").value;
    perkg = parseFloat(document.querySelector("#entrybox").value);
    gw = document.querySelector("#writeme");
    if (Number.isNaN(perkg) === true) {
        alert("Only Numbers !!! Or The Field is Empty");
        check = 0;
    }
    else if (perkg < 0) {
        alert("Negative value!! @stupid");
        check = 0;
    }
    else {
        check = 1;
    }
    if (check == 1) {

        switch (sfruit) {
            case "Poma":
                var st = straw * perkg;
                gw.value += "Poma" + perkg + " kg = " + st + " rs\r";
                total += st;
                perkg.value = "";
                break;
            case "Patata":
                var at = apple * perkg;
                gw.value += "Patata " + perkg + " kg = " + at + " rs\r";
                total += at;
                perkg.value = "";
                break;
            case "Tomaquet":
                var gr = grapes * perkg;
                gw.value += "Tomaquet " + perkg + " Kg  = " + gr + " rs\r";
                total += gr;
                perkg.value = "";
                break;
        }

    }
}