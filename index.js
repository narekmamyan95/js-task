const WINNING_SUM = 123.40;
/**
@param {Array} cartItemsPrices
*/
function doesCartWinPrize(cartItemsPrices) {
    let sum = 0;
    cartItemsPrices.map(value => sum += parseFloat(value));
    return sum.toFixed(2) == WINNING_SUM;
}
module.exports = doesCartWinPrize;
