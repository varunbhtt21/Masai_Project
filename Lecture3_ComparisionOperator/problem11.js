// amazon discount eligibility above 4000.
// check whether sikhandar is eligible for discount or not


var minimum_purchase = 4000;
var sikhandar_purchase = 4000;

var eligible_for_discount = sikhandar_purchase > minimum_purchase;

console.log("Eligible for discount",eligible_for_discount);