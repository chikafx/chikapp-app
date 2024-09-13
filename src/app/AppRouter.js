import AppRouter from './AppRouter';

function App({Component, pageProps}) {
  return (
    <div>
      <AppRouter />
        <Component {...pageProps} />
    </div>
  );
}

export default App;