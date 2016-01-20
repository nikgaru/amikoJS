window.onload = function () {
    function Currency(code, rateToGel){
        this.code = code;
        this.rateToGel = rateToGel;
        console.log(this.code + ' ' + this.rateToGel)
    }

    var GEL = new Currency('GEL', 1);
    var EUR = new Currency('EUR', 2.67);
    var USD = new Currency('USD', 2.44);
    var UAH = new Currency('UAH', 0.1);
    var RUB = new Currency('RUB', 0.03);
    var CAD = new Currency('CAD', 1.67);
    console.log(GEL);

    function errorMessage(message){
        if (message == 'inputError'){
            var errorInput = document.getElementById('error');
            errorInput.style.display = 'block';
            errorInput.value = 'Please insert correctly the amount and currency (like this "10 GEL")';
            errorInput.style.color = 'red';
        }

    }



    document.getElementById("convert").addEventListener("click", function(){
        document.getElementById('error').style.display = 'None';
 		var amount = document.getElementById('converter-input').value;
        console.log(amount);
        var parseStr = amount.split(parseInt(amount));
        if (typeof parseStr[1] === 'string') {
            var code = parseStr[1].trim();
        }
        else {
            errorMessage('inputError');
        }

        for (var i =0; i<6; i++){

        }



        console.log(code);

    });
};