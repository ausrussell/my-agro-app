import React from "react";
import { connect } from "react-redux";
import type { RootState } from '../../redux/store'

interface IMysteryCounter {
  clickCounter: number;
}

const MysteryCounter = ({clickCounter}: IMysteryCounter): JSX.Element=> {
  return (<h1 className="mystery__secondary">Counter {clickCounter}</h1>);
};

const mapStateToProps = (state: RootState) => {
  return {clickCounter: state.mystery.clickCounter};
};

export default connect(mapStateToProps)(MysteryCounter);
