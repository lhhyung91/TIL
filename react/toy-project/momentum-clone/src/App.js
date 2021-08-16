import BackGroundImage from "./components/BackGroundImage/BackGroundImage";
import Time from "./components/Time/Time";
import styled, { ThemeProvider } from "styled-components";
import TodosContainer from "./containers/TodosContainer";
import TodoListContainer from "./containers/TodoListContainer";
import { palette } from "./styles/color";

const StyledAppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={palette}>
      <StyledAppWrapper>
        <BackGroundImage />
        <TodosContainer />
        <Time />
        <TodoListContainer />
      </StyledAppWrapper>
    </ThemeProvider>
  );
}

export default App;
