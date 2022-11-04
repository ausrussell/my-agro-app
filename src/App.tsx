import { connect } from "react-redux";
import { useAppDispatch } from "./hooks";

import MysteryComponent from "./components/Mystery/MysteryComponent";
import MysteryCounter from "./components/Mystery/MysteryCounter";
import { mysteryClick } from "./redux/mysterySlice";
const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <div className="app">
      <MysteryCounter />
      <MysteryComponent
        onClick={() => dispatch(mysteryClick())}
        styleType="primary"
        size="large"
      >
        Mystery
      </MysteryComponent>
    </div>
  );
};

export default connect()(App);
