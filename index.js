var data = {
  200: 2,
  100: 1,
  50: 2,
  20: 3,
  10: 2,
  5: 1,
  1: 4,
};
var valute = [200, 100, 50, 20, 10, 5, 1];
var price = process.argv[2];
function hesab(valute, price) {
    cem=0;
  allSum = [];
  valute.forEach((val) => {
    var qaliq = price % val;
    var say = (price - qaliq) / val;
    if (say <= data["" + val]) {
      allSum[" " + val] = say;
      price=price-val*say;
    } else {
        allSum[" " + val] = data[""+val];
      price = price - val * data[""+val];
    }
    cem+=data[''+val]*val;
  });
  if(cem<price){
    return "Pul çatmır"
  }
  return allSum;
}
var cavab = hesab(valute, price);
console.log(cavab);


