import buildClient from '../api/buildClient';

const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1>Signed In</h1> : <h1>Not Signed In</h1>;
};

LandingPage.getInitialProps = async context => {
  const client = buildClient(context);
  const { data } = await client.get('/api/users/current-user');
  return data;
};

export default LandingPage;
