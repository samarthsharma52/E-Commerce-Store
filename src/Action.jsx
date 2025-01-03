/*
setLogin
setProfile
addInBasket
removeBasket
updateQtyInBasket
 */
export let setLogin = (val) => ({ type: 'setLogin', value: val });
export let setTotal = (val) => ({ type: 'setTotal', value: val });
export let setProfile = (val) => ({ type: 'setProfile', value: val });
export let addInBasket = (pcode, qty) => ({ type: 'addInBasket', pcode: pcode, qty: qty });
export let removeBasket = (pcode) => ({ type: 'removeBasket', pcode: pcode });
export let updateQtyInBasket = (pcode, qty) => ({ type: 'updateQtyInBasket', pcode: pcode, qty: qty });