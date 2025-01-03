let initialState = {
    islogin: "N",
    profile: {},
    basket: [],
    total: 0,
};

export function appReducer(state = initialState, action) {
    switch (action.type) {
        case "setLogin":
            return { ...state, islogin: action.value };

        case "setProfile":
            return { ...state, profile: action.value };

        case "addInBasket": {
            let arr = [...state.basket];
            let existingProduct = arr.find(item => item.pcode === action.pcode);

            if (existingProduct) {
                arr = arr.map(item =>
                    item.pcode === action.pcode
                        ? { ...item, qty: item.qty + action.qty }
                        : item
                );
            } else {
                arr.push({
                    pcode: action.pcode,
                    qty: action.qty,
                    pname: action.pname, // Adding product name
                    photo: action.photo, // Adding product photo
                    price: action.price, // Adding product price
                });
            }

            return { ...state, basket: arr };
        }

        case "removeBasket": {
            let arr = state.basket.filter(item => item.pcode !== action.pcode);
            return { ...state, basket: arr };
        }

        case "updateQtyInBasket": {
            let arr = [...state.basket];
            let idx = arr.findIndex(item => item.pcode === action.pcode);

            if (idx >= 0) {
                arr[idx] = { ...arr[idx], qty: action.qty };
            }
            return { ...state, basket: arr };
        }

        case "setTotal":
            return { ...state, total: parseInt(state.total) + parseInt(action.value) };

        default:
            return state;
    }
}
