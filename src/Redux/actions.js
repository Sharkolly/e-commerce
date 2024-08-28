import {
    createSlice
} from "@reduxjs/toolkit";
import stores from '../Json/apiStore.json';


// // let stores;
// const fetchStoreWithItems = async () => {
//     try {
//         const data = await fetch('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg');
//         const response = await data.json();
//         // stores = response;
//     } catch (err) {
//         console.log(err);
//     }
// }

const updatedStore = stores.map((store) => ({
    ...store,
    clicked: false,
    amountOrdered: 0
}));
const sortedStore = updatedStore.sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    return 0;
});

const appSlice = createSlice({
    name: 'store',
    initialState: {
        order: [],
        // amount: 0,
        sortedStore,
        openCart: false,
        totalAmount: 0
        // count: 0
    },
    reducers: {
        clicks: (state, action) => {
            const {
                id
            } = action.payload;
            const updateClickedItem = state.sortedStore.map((store) => store.id === id ? {
                ...store,
                clicked: !store.clicked
            } : store);

            state.sortedStore = updateClickedItem;
        },
        addtoCarts: (state, action) => {
            const {
                id,
                name,
                price
            } = action.payload
            state.sortedStore = state.sortedStore.map((store) => store.id === id ? {
                ...store,
                amountOrdered: store.amountOrdered + 1
            } : store);
            const findAmount = state.sortedStore.find(order => order.id === id);
            const orderDetails = {
                id,
                name,
                amountOrdered: findAmount.amountOrdered,
                price,
                totalPrice: findAmount.amountOrdered * price
            };
            state.order.push(orderDetails);
            state.order = state.order.reduce((acc, current) => {
                const existing = acc.find(item => item.name === current.name);

                if (existing && current.amountOrdered > existing.amountOrdered) acc = acc.map(item => item.name === current.name ? current : item);
                if (!existing) acc.push(current);
                return acc;
            }, []);

            state.openCart = true;
        },
        minusFromCarts: (state, action) => {
            const {
                id,
                name,
                price
            } = action.payload
            state.sortedStore = state.sortedStore.map((store) => store.id === id ? {
                ...store,
                amountOrdered: store.amountOrdered <= 0 ? 0 : store.amountOrdered - 1
            } : store);
            const findAmount = state.sortedStore.find(order => order.id === id);
            const orderDetails = {
                id,
                name,
                amountOrdered: findAmount.amountOrdered,
                price,
                totalPrice: findAmount.amountOrdered * price
            };
            state.sortedStore = state.sortedStore.map((store) => store.id === id && store.amountOrdered === 0 ? {
                ...store,
                clicked: false
            } : store);
            state.order.push(orderDetails);
            state.order = state.order.reduce((acc, current) => {
                const existing = acc.find(item => item.name === current.name);
                if (existing && current.amountOrdered < existing.amountOrdered) acc = acc.map(item => item.name === current.name ? current : item);
                if (!existing) acc.push(current);
                return acc;
            }, []);
            state.order = state.order.filter((order) => order.amountOrdered !== 0);
        },
        deleteFromCarts: (state, action) => {
            const {
                id
            } = action.payload;
            const deletedItem = state.order.filter((order) => order.id === id);
            state.order = state.order.filter((order) => order.id !== id);
            state.sortedStore = state.sortedStore.map((store) => store.id === deletedItem[0].id ? {
                ...store,
                amountOrdered: 0,
                clicked: false
            } : store);
        },

        totalAmountPrice: (state) => {
            state.totalAmount = state.order.reduce((acc, current) => {
                return acc + current.totalPrice;
            }, 0);
        },
        clearOrder: (state) => {
            state.order = [];
            state.sortedStore = state.sortedStore.map((store) => ({
                ...store,
                clicked: false,
                amountOrdered: 0
            }));
        }
    }
});

export const {
    addtoCarts,
    clicks,
    minusFromCarts,
    deleteFromCarts,
    totalAmountPrice,
    clearOrder
} = appSlice.actions

export default appSlice.reducer;