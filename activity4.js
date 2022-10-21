function array(val)
   {
     return function(evalue, index, array)
     {
     return (evalue <= val);
     };
   }
var result = [30, 15, 12, 21, 19]. filter(array(18));
console.log(result);