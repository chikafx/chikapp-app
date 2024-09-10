import React from 'react';
import AppRouter from './AppRouter';
import {loadingPage} from "./providers"

function App({Component, pageProps}) {
  return (
    <div>
      <AppRouter />
      <loadingProvider>
        <Component {...pageProps} />
      </loadingProvider>
    </div>
  );
}

export default App;