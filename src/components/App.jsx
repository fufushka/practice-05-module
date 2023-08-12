// import { HOME_ROUTE, SEARCHPOST_ROUTE } from 'constants/constants';
import { Routes as Router, NavLink, Route, Navigate } from 'react-router-dom';
import * as Routes from '../constants/constants';
// import Home from 'pages/Home/Home';
// import SearchPost from 'pages/SearchPost/SearchPost';
// import PostDetails from 'pages/PostDetails/PostDetails';
import { Suspense, lazy } from 'react';
import { Dna } from 'react-loader-spinner';

const Home = lazy(() => import('pages/Home/Home'));
const SearchPost = lazy(() => import('pages/SearchPost/SearchPost'));
const PostDetails = lazy(() => import('pages/PostDetails/PostDetails'));

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={Routes.HOME_ROUTE}>Home</NavLink>
            </li>
            <li>
              <NavLink to={Routes.SEARCHPOST_ROUTE}>Search</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense
          fallback={
            <Dna
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          }
        >
          <Router>
            <Route path={Routes.HOME_ROUTE} element={<Home />} />

            <Route path={Routes.SEARCHPOST_ROUTE} element={<SearchPost />} />
            <Route path="/posts/:postId/*" element={<PostDetails />} />
            <Route path="*" element={<Navigate to={Routes.HOME_ROUTE} />} />
          </Router>
        </Suspense>
      </main>
      <footer>{new Date().getFullYear()}</footer>
    </>
  );
};
