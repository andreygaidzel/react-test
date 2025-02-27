import { Outlet } from 'react-router-dom';
import classes from './Main.module.css';
import MainNavigation from './Sidebar/Sidebar';

function Main() {

  return (
    <main className={ classes.main }>
      <MainNavigation/>
      <section className={ classes.content }>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */ }
        <Outlet/>
      </section>
    </main>
  );
}

export default Main;
