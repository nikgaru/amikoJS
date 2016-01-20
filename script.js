window.onload = function () {
    function Currency(code, rateToGel){
        this.code = code;
        this.rateToGel = rateToGel;
    }
    var GEL = new Currency('GEL', 1);
    var EUR = new Currency('EUR', 2.67);
    var USD = new Currency('USD', 2.44);
    var UAH = new Currency('UAH', 0.1);
    var RUB = new Currency('RUB', 0.03);
    var CAD = new Currency('CAD', 1.67);



    document.getElementById("convert").addEventListener("click", function(){
 		amount = document.getElementById('converter-input').value;
        console.log(amount);
        code = amount.split(parseInt(amount))[1].trim();
        console.log(code);

    });
};