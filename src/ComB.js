import React from 'react';
import { connect } from 'react-redux';
import { twelthDispatcher } from './actions';

const ComB = ({
  myinfo,
  twelthschool,
  changeTwelth,
  changeFirstPhone,
  changeSecondAdd,
}) => {
  //   console.log(myinfo);
  return (
    <>
      <h1>From ComB</h1>
      {/* {myinfo.map((cval, index) => {
        const { phone1, add1 } = cval;
        return (
          <div key={index}>
            <h3>My Phone is : {phone1}</h3>
            <h3>My address is: {add1}</h3>
          </div>
        );
      })} */}
      <h3>My first phone is {myinfo[0].phone1}</h3>
      <h3>My first address is {myinfo[0].add1}</h3>
      <h3>My second phone is {myinfo[1].phone2}</h3>
      <h3>My second address is {myinfo[1].add2}</h3>
      <h3>My twelth school is {twelthschool}</h3>

      <button
        onClick={() => {
          changeTwelth();
        }}
      >
        Change Twelth
      </button>
      <button
        onClick={() => {
          changeFirstPhone();
        }}
      >
        Change 1st phone
      </button>
      <button
        onClick={() => {
          changeSecondAdd();
        }}
      >
        change second add
      </button>
    </>
  );
};

const mapStateToProps = (store) => {
  return {
    myinfo: store.info,
    twelthschool: store.edu.twelth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeTwelth: () => {
      dispatch(twelthDispatcher());
    },
    changeFirstPhone: () => {
      dispatch({ type: 'FIRST_PHONE', payload: 1357 });
    },
    changeSecondAdd: () => {
      dispatch({ type: 'SECOND_ADD', payload: 'New York' });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ComB);
