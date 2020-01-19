function sum(a, b) {
  return a + b;
}
module.exports = sum;

function paddingLeft(a, b, c) {
   while (a.lenght <= b) {
     a = c + a;
   }
   return a;
}