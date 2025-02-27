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
    <sidebar className={classes.sidebar}>
      <h2 className={classes.logo}>Company</h2>
      <nav>
        <ul className={classes.list}>
          { links.map(link => (
            <li>
            <NavLink
              to={ link.url }
              className={({ isActive }) => isActive && classes.active }
              end={ link.end }
            >
              { link.name }
            </NavLink>
          </li>
          )) }
        </ul>
      </nav>
      {token && (
        <Form action="/logout" method="post">
          <button>Logout</button>
        </Form>
    )}
      <NewsletterSignup />
    </sidebar>
  );
}

export default Sidebar;
