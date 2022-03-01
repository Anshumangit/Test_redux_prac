export const twelthDispatcher = () => {
  return { type: 'CHANGE_TWELTH', payload: 'DAV' };
};

// export const changeNameViaAPI = async () => {
//   const resp = await fetch('https://jsonplaceholder.typicode.com/users');
//   const data = await resp.json();
//   return { type: 'CHANGE_NAME', payload: data[0].name };
// };

export const changeNameViaAPI = () => {
  return async (dispatch) => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    dispatch({ type: 'CHANGE_NAME', payload: data[0].name });
  };
};
