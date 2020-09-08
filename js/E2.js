//Redondeando el precio a mostrar a dos cifras decimales
function formatDecimal(val, n) {
    n = n || 2;
    var str = "" + Math.round (parseFloat(val) * Math.pow(10, n));
    while (str.length <= n) {
    str = "0" + str;
    }
    var pt = str.length - n;
    return str.slice(0,pt) + "." + str.slice(pt);
   }
   //Obtiene el subtotal del valor de la pizza de acuerdo al tamaño
   function getSizePrice(e) {
    this.form.elements['sz_tot'].value = parseFloat(this.value);
    
    updatePizzaTotal(this.form);
}
//Calcula el precio total a cancelar por la pizza tomando en cuenta
//los subtotales de acuerdo al tamaño y a los ingredientes seleccionados
function updatePizzaTotal(form) {
 var sz_tot = parseFloat(form.elements['sz_tot'].value);
 var galones = parseFloat(form.elements['galones'].value);
 form.elements['total'].value = formatDecimal(sz_tot * galones);
}
(function() {
 var form = document.getElementById('pizzaForm');
 var sz = form.elements['size'];
 for (var i=0, len=sz.length; i<len; i++) {
 sz[i].onclick = getSizePrice;
 }

 // set sz_tot to value of selected
 form.elements['sz_tot'].value = formatDecimal(parseFloat(getRadioVal(form, 'size')));
 updatePizzaTotal(form);
})();