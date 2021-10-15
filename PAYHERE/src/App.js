import { Route } from 'react-router';
import styled from 'styled-components';
import BookMarkPage from './BookmarksPage';
import Home from './components/Home/Home';
import HomeHeaderContainer from './containers/HomeHeaderContainer/HomeHeaderContainer';
import GlobalStyles from './styles/GlobalStyles';

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyles />
      <HomeHeaderContainer />
      <Route path='/' exact component={Home} />
      <Route path='/bookmark' component={BookMarkPage} />
    </StyledApp>
  );
}

export default App;
