import { Form, NavLink, useRouteLoaderData } from 'react-router-dom';
import classes from './Sidebar.module.css';
import NewsletterSignup from '../../NewsletterSignup/NewsletterSignup';

function Sidebar() {
  const token = useRouteLoaderData('root');
  const links = [
    {
      url: '/main',
      name: 'Home',
      end: true
    },
    {
      url: '/main/events',
      name: 'Events',
    },
    {
      url: '/main/newsletter',
      name: 'Newsletter',
    }
  ];

  return (
    <nav className={classes.sidebar}>
      <h2 className={classes.logo}>Company</h2>

        <ul className={classes.list}>
          { links.map(link => (
            <li key={ link.url }>
            <NavLink
              to={ link.url }
              className={({ isActive }) => isActive ? classes.active : null }
              end={ link.end }
            >
              { link.name }
            </NavLink>
          </li>
          )) }
        </ul>
      {token && (
        <Form action="/logout" method="post">
          <button>Logout</button>
        </Form>
    )}
    </nav>
  );
}

export default Sidebar;
