function Currency(code, rateToGel){
    this.code = code;
    this.rateToGel = rateToGel;
    //this.convertToGel = function(amount){
    //    var amount = amount * this.rateToGel;
    //};

}

var GEL = new Currency('GEL', 1);
var EUR = new Currency('EUR', 2.67);
var USD = new Currency('USD', 2.44);
var UAH = new Currency('UAH', 0.1);
var CAD = new Currency('CAD', 1.67);
var RUB = new Currency('RUB', 0.03);
var AZN = new Currency('AZN', 1.51);


window.onload = function () {

    function errorMessage(message){

        var errorInput = document.getElementById('error');
        if (message == 'inputError'){
            errorInput.style.display = 'block';
            errorInput.value = 'Please insert correctly the amount and currency (like this "10 GEL")';
            errorInput.style.color = 'red';
        }

        if (message == 'currencyError'){
            errorInput.style.display = 'block';
            errorInput.value = 'Please insert correctly currency (gel, eur, usd, uah, cad or rub)';
            errorInput.style.color = 'red';
        }

    }




    document.getElementById("convert").addEventListener("click", function(){
        document.getElementById('error').style.display = 'None';
 		var str = document.getElementById('converter-input').value;
        var amount = parseInt(str);
        var parseStr = str.split(amount);
        console.log(amount)

        if (typeof parseStr[1] === 'string') {
            var code = parseStr[1].trim();
        }
        else {
            errorMessage('inputError');
        }
        code = code.toUpperCase();

        for(var key in window) {
            var value = window[key];
            if (value instanceof Currency && value.code == code) {
                if (code == 'GEL'){
                    for(var key1 in window) {
                        var value1 = window[key1];
                        if (value1.code != 'GEL') {
                            var converted = amount * value1.rateToGel;
                            document.getElementById(value1.code).innerHTML = converted;
                        }
                    }
                }


            }
            else {
                errorMessage('currencyError')
            }
        }


    });
};