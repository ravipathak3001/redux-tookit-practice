const { cakeActions } = require("../cake/cakeSlice");

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
  // extraReducers: {
  //   ["Cakes/ordered"]: (state) => {
  //     state.numberOfIcream--;
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numberOfIcream--;
    });
  },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
