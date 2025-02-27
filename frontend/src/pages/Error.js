import { useRouteError } from 'react-router-dom';

import PageContent from '../components/PageContent/PageContent';

function ErrorPage() {
  const error = useRouteError();
  console.log(22, error);

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.error?.message) {
    message = error.error.message;
  }

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
