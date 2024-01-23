import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 0,
  step_wide: 0,
  counters: [1, 2],
  users: [
    {
      id: 1,
      firstName: "Ulug'bek",
      lastName: "Qodirov",
      age: 38,
      email: "ulugbek38@gmail.com",
    },
    {
      id: 2,
      firstName: "Robert",
      lastName: "Downey JR",
      age: 56,
      email: "robert56@gmail.com",
    },
    {
      id: 3,
      firstName: "Chris",
      lastName: "Hemsworth",
      age: 42,
      email: "chris42@gmail.com",
    },
  ],
  searchResults: [],
  defaultValue: "",
  modalVisible: false,
  index: "",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.step += state.step_wide;
    },
    increase_wide(state) {
      state.step_wide += 1;
    },
    addCounters: (state, action) => {
      state.counters.push(action.payload);
    },
    increaseCount: (state, action) => {
      state.counters[action.payload] += 1;
    },
    decreaseCount: (state, action) => {
      state.counters[action.payload] -= 1;
    },
    search: (state, action) => {
      if (action.payload) {
        let searchUsers = action.payload.toLowerCase();
        let filtered__users = action.payload
          ? state.users.filter(
              (item) =>
                item.firstName.toLowerCase().includes(searchUsers) ||
                item.lastName.toLowerCase().includes(searchUsers)
            )
          : state.users;
        state.searchResults = filtered__users;
      } else {
        state.searchResults = state.users;
      }
    },
    addUsers: (state, action) => {
      if (state.defaultValue !== "") {
        state.searchResults.splice(state.index, 1, action.payload);
      } else {
        state.searchResults.push(action.payload);
      }
      state.modalVisible = false
    },
    getIndex: (state, action)=> {
        state.index = action.payload
    },
    editUser: (state, action) => {
      state.modalVisible = true;
      state.defaultValue = action.payload;
    },
    openForAdd: (state) => {
      state.modalVisible = true;
    },
    closeModal: (state) => {
      state.modalVisible = false;
      state.defaultValue = "";
    },
    deleteUser: (state, action)=> {
        state.searchResults.splice(action.payload, 1)
    }
  },
});

export const {
  increment,
  increase_wide,
  addCounters,
  increaseCount,
  decreaseCount,
  search,
  addUsers,
  editUser,
  closeModal,
  openForAdd,
  getIndex,
  deleteUser
} = counterSlice.actions;
export default counterSlice.reducer;
