import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { Store } from '@src/redux';
import { Router } from '@src/router';

const App: React.FC<{}> = React.memo(() => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      /**
       * This timeout simulate the time needed to
       * resolve our application context.
       *
       * For example get the user session from stored jwt token) or
       * any other action that we need to resolve before lets app ready
       * for the user.
       *
       * Once we resolve the context, we can hide splash
       * screen
       */
      RNBootSplash.hide({ fade: true });
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Provider store={Store}>
      <Router />
    </Provider>
  );
});

export default App;
