import { Header } from './components/Layout/Header';
import { Orders } from './components/Orders';
import { GlobalStyles } from './styles/GlobalStyles';

export const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Orders/>
    </>
  );
};
