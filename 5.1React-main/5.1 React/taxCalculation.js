/**
 * 2. Tax Calculation(MYOB)
 *
 * | Income thresholds | Rate  | Tax payable on this income                 |
 * |-------------------|-------|--------------------------------------------|
 * | $0-$18,200        | 0%    | Nil                                        |
 * | $18,201 - $37,000 | 19%   | 19c for each $1 over $18,200               |
 * | $37,001 - $90,000 | 20.5% | $3,572 plus 20.5% of amounts over $ 37,000 |
 * | $90,001 - $180,000 | 37%   | $20,797 plus 37% of amounts over $90,000   |
 * | $18,001 and over  | 45%   | $54,096 plus 45% of amounts over $18,000   |
 *
 *
 * 计算 应缴税的步骤 -> 三个responsibility
 * 1. 查税
 * 2. 找到区间
 * 3. 计算税
 *
 * 下面的方法，都是混合在一起的；职责不够清晰
 * */
let payroll;
let taxPayment;
const taxCalculation = function (payroll) {
    // if (!isNaN(payroll)) {
    //     // if (payroll > 0 && payroll <= 18200) {
    //     //     taxPayment = 0;
    //     // }
    //     // if (payroll >= 18201 && payroll <= 37000) {
    //     //     taxPayment = (payroll-18000) * 0.19
    //     // }
    //     // if (payroll >= 37000 && payroll <= 90000) {
    //     //     taxPayment = 3572 + (payroll - 37000) * 0.205
    //     // }
    //     // if (payroll >= 90001 && payroll <= 180000) {
    //     //     taxPayment = 20797 + (payroll - 90000) * 0.37
    //     // }if(payroll >=180001){
    //     //     taxPayment = 54096 + (payroll - 180000) * 0.45
    //     // }
    //     // return taxPayment;
    //
    //     // not working appropriately.
    //     let taxPaymentL1 = (payroll > 0 && payroll <= 18200) && 0;
    //     let taxPaymentL2 = (payroll >= 18201 && payroll <= 37000) && ((payroll-18000) * 0.19);
    //     let taxPaymentL3 = (payroll >= 37000 && payroll <= 90000) && (3572 + (payroll - 37000) * 0.205);
    //     let taxPaymentL4 = (payroll >= 90001 && payroll <= 180000) && (20797 + (payroll - 90000) * 0.37);
    //     let taxPaymentL5 = (payroll >=180001) && (54096 + (payroll - 180000) * 0.45);
    //     taxPayment = taxPaymentL1 || taxPaymentL2 || taxPaymentL3 || taxPaymentL4 || taxPaymentL5
    //     return taxPayment;
    // } else {
    //     console.log(`please input a number`);
    // }

    return (payroll > 0 && payroll <= 18200
        ? 0 : payroll >= 18201 && payroll <= 37000
            ? (payroll - 18000) * 0.19 : payroll >= 37000 && payroll <= 90000
                ? 20797 + (payroll - 90000) * 0.37 : payroll >= 180001
                    ? 54096 + (payroll - 180000) * 0.45
                    : 'INVALID INPUT');

}
/**
 * 程序思路： 你问你朋友
 * 1. 你的收入是不是在 0 -18000之间
 *      定义计算方法
 * 2 你的收入是不是在 182001 - 37000之间
 *      定义计算方法
 * 3. 你的收入是不是在 37000 - 90000之间
 *      定义计算方法
 * 4. 用户回答是 - 根据计算方法，计算税；
 * */
console.log(taxCalculation(20));
console.log(taxCalculation(18201));
console.log(taxCalculation(37001));
console.log(taxCalculation(90001));
console.log(taxCalculation(180001));
console.log(taxCalculation(190000));
console.log(taxCalculation('abc'));

// console.log(20 || false);
// console.log(20 || 0);


