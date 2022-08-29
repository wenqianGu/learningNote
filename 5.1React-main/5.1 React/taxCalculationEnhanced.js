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
 * 正常计算税率的步骤
 * 1. Google 找到tax table
 * 2. 找到收入区间
 * 3. 根据收入区间里面的定义，计算税
 *
 * 计算 应缴税的步骤 -> 三个responsibility
 * 1. 查税
 * 2. 找到区间
 * 3. 计算税
 *
 * function taxCal(income){
 * // -> single responsibility 三个block，分别负责不同的事情
 *     1.taxTable （改变税率，改变数值； 不能该改变查询方法(find range)，不能改变计算方法(calcTax)）
 *     2. findRange(table)
 *     3. CalcTax (income, range)
 * }
 *  如果一个block逻辑没有关闭的话，改一个B 可能会影响A -> open close原则
 *
 * */
const TAX_TABLE_2021 = [
    {min:0, max: 18200, base:0, rate:0},
    {min:18201, max: 37000, base:0, rate:0.19},
    {min:37001, max: 90000, base:3572, rate:0.205},
    {min:90001, max: 180000, base:20797, rate:0.37},
    {min:180001, max: Infinity, base:54096, rate:0.45}
];
const TAX_TABLE_2020 = [];
const TAX_TABLE_WORKING_HOLIDAY = [];
/**
 * 依赖注入原则
 * 1. 当一个人找你计算税务的时候，你要知道 税表 和 income
 * -> 你是那个类型的税务居民 海外、PR、Working Holiday
 * ->你的income
 * 依赖都是注入进来的。
 * */
function calculateTax(income, taxTable){
    const [range] = taxTable.filter( x => income > x.min && income < x.max);
    let taxPayable = range.base + (income - range.min - 1) * range.rate;
    return taxPayable;
}

console.log(calculateTax(200000, TAX_TABLE_2021));

