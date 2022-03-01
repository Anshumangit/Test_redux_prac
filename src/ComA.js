import React from 'react';
import { connect } from 'react-redux';
import { changeNameViaAPI } from './actions';

const ComA = ({ name, firstwish, tenthedu, changeName, hobby, fhobby }) => {
  //   console.log(dispatch);
  return (
    <>
      <h1>From ComA</h1>
      <h3>My name is {name}</h3>
      <h3>I wish to {firstwish}</h3>
      <h3>My 10th school name is {tenthedu}</h3>
      <h3>My hobby is {hobby}</h3>

      {/* <button
        onClick={() => {
          dispatch({ type: 'CHANGE_NAME_PROPS_DISPATCH', payload: 'anshuman' });
        }}
      >
        change name by props dispatch
      </button> */}
      <button
        onClick={() => {
          changeName();
        }}
      >
        change name
      </button>
      <button
        onClick={() => {
          fhobby();
        }}
      >
        change hobby
      </button>
      <hr />
    </>
  );
};

const mapStateToProps = (store, oe) => {
  // console.log(store);
  // console.log(oe);
  return {
    name: store.name,
    firstwish: store.wish[0],
    tenthedu: store.edu.tenth,
    hobby: store.hobby,
  };
};

const mapDispatchToProps = (dispatch, ownprops) => {
  // console.log(ownprops.hobby);
  const { propshobby } = ownprops;
  // console.log(propshobby);
  return {
    changeName: () => {
      // dispatch({ type: 'CHANGE_NAME', payload: 'Vishy' });
      dispatch(changeNameViaAPI());
      console.log(changeNameViaAPI());
    },
    fhobby: () => {
      dispatch({ type: 'HOBBY', payload: propshobby });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ComA);
