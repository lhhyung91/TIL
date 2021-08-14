import BackGroundImage from "./components/BackGroundImage/BackGroundImage";
import Time from "./components/Time/Time";
import styled from "styled-components";
import TodosContainer from "./containers/TodosContainer";
import TodoListContainer from "./containers/TodoListContainer";

const StyledAppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

function App() {
  return (
    <StyledAppWrapper>
      <BackGroundImage />
      <TodosContainer />
      <Time />
      <TodoListContainer />
    </StyledAppWrapper>
  );
}

export default App;
