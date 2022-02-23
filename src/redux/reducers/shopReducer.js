const initialState = [
    {
        id: 0,
        shopName: "XYZ shop",
        shopCity: "Mumbai",
        shopCategory: "grocery"

    },
    {
        id: 1,
        shopName: "ABC shop",
        shopCity: "Pune",
        shopCategory: "Baker"

    }
];

const shopReducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_SHOP":
            state = [...state, action.payload];
            return state;

        case "UPDATE_CONTACT":

            const updatedState = state.map(shop => shop.id === action.payload.id ?
                action.payload : shop);
            state = updatedState;
            return state;

        case "DELETE_SHOP":
            const filterShops = state.filter(
                (shop) => shop.id !== action.payload && shop
            );
            state = filterShops;
            return state;

        default:
            return state;
    }
}

export default shopReducer;
