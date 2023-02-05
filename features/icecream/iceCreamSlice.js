const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numberOfIcream: 10,
};

const iceCreamSlice = createSlice({
  name: "IceCream",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIcream--;
    },
    restock: (state, action) => {
      state.numberOfIcream += action.payload;
    },
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
