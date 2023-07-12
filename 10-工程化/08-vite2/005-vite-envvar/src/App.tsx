const App = () => {
  return (
    <>
      <h1>Hello React!</h1>
      <h2>{import.meta.env.VITE_APP_NAME}</h2>
      <h3>I am in {import.meta.env.VITE_APP_ENVIRONMENT}!</h3>
    </>
  );
};

export default App;
