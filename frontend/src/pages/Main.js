import { redirect } from 'react-router-dom';
import Main from '../components/Main/Main';

export function action() {
  return redirect('/main');
}

function MainLayout() {
  return (
    <Main />
  );
}

export default MainLayout;
