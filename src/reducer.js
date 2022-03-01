const iStore = {
  name: 'anshu',
  wish: ['eat', 'code', 'repeat'],
  info: [
    {
      add1: 'Danapur',
      phone1: 1234,
    },
    {
      add2: 'Bangalore',
      phone2: 5678,
    },
  ],
  edu: {
    tenth: 'Scholar Abode',
    twelth: 'Leeds Asian',
  },
  hobby: 'dancing',
};

const reducer = (state = iStore, action) => {
  if (action.type === 'CHANGE_NAME_PROPS_DISPATCH') {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === 'CHANGE_NAME') {
    return {
      ...state,
      name: action.payload,
    };
  }
  if (action.type === 'HOBBY') {
    return {
      ...state,
      hobby: action.payload,
    };
  }
  if (action.type === 'CHANGE_TWELTH') {
    return {
      ...state,
      edu: {
        ...state.edu,
        twelth: action.payload,
      },
    };
  }
  if (action.type === 'FIRST_PHONE') {
    return {
      ...state,
      info: [
        { ...state.info[0], phone1: action.payload },
        { ...state.info[1] },
      ],
    };
  }
  if (action.type === 'SECOND_ADD') {
    return {
      ...state,
      info: [{ ...state.info[0] }, { ...state.info[1], add2: action.payload }],
    };
  }
  return state;
};
export default reducer;
