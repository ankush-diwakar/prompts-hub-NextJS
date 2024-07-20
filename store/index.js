import { proxy } from 'valtio';

// Create a proxy object to hold your store state
const store = proxy({
    userID_DB: '',
    email: '',
});

export default store;