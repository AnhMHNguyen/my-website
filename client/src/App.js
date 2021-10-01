import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import {ErrorBoundary} from 'react-error-boundary'
import Spinner from './components/spinner/spinner.component'
import NotFound from './components/not-found/not-found.component';
import { GlobalStyle } from './global.styles'
const HomePage  = lazy(() => import('./pages/homePage/homePage.component'));

function App() {
  return (
    <div>
      <GlobalStyle />
      <ErrorBoundary FallbackComponent={NotFound}>
      <Suspense fallback={<Spinner />}>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route component={NotFound} />
        </Switch>
      </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
