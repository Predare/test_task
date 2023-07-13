export const state = () => ({
  credentials: {
    first_name: '',
    last_name: '',
    phone: '',
  }
});

export const mutations = {
  setFirstName(state, firstName) {
    state.credentials.first_name = firstName;
  },

  setLastName(state, lastName) {
    state.credentials.last_name = lastName;
  },

  setPhone(state, phone) {
    state.credentials.phone = phone;
  }
}
