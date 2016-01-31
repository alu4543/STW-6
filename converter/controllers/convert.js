(function(){
    "use strict";
    var Measures = require('./measures.js');
    exports.convert = function(value)
    {
        var result1    = "",
            result2    = "",
            regexp = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+(?:\.\d+)?)?)\s*(º?(f(arenheit)?|c(elsius)?)|(k(elvin)?)|(((c(enti)?)|(k(ilo)?))?(m(eter)?)))\s*$/i,
            value     = value.match(regexp);

        if(value){
          var num = value[1],
              type   = value[2].replace('º','').toLowerCase(),
              num = parseFloat(num),
              measure = new Measures.Measure(num);
          //var measure = new Measure(num);

          if (type.substr(0) == 'c') {
            measure = new Measures.Celsius(num);
            result1 = measure.toFarenheit().toString();
            result2 = measure.toKelvin().toString();
          }
          else if (type.substr(0) == 'f'){
            measure = new Measures.Farenheit(num);
            result1 = measure.toCelsius().toString();
            result2 = measure.toKelvin().toString();
          }
          else if (type.substr(0) == 'k'){
            measure = new Measures.Kelvin(num);
            result1 = measure.toCelsius().toString();
            result2 = measure.toFarenheit().toString();
          }
          else if (type.substr(0) == 'm'){
            measure = new Measures.Meter(num);
            result1 = measure.toCentimeter().toString();
            result2 = measure.toKilometer().toString();
          }
          else if (type.substr(0) == 'cm'){
            measure = new Measures.Centimeter(num);
            result1 = measure.toMeter().toString();
            result2 = measure.toKilometer().toString();
          }
          else if (type.substr(0) == 'km'){
            measure = new Measures.Kilometer(num);
            result1 = measure.toMeter().toString();
            result2 = measure.toCentimeter().toString();
          }
          else{
            measure = new Measures.Measure(num,type);
            result1 = measure.toString();
          }
          return [result1, result2];
          //return result1;
        }
    }

})(this);
