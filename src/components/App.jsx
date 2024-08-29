const loggedIn = false;
const loginStatus = loggedIn ? (
  <h1>you are logged in</h1>
) : (
  <h1>You need to login</h1>
);


function App() {
  return <section>{loginStatus}</section>;
}

export default App;
