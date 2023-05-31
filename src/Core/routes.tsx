import React from 'react';
import { type RouteObject } from 'react-router-dom';
import ConferenceListWrapper from '../Conference/components/ConferenceListWrapper';
import ConferenceFormWrapper from '../Conference/components/ConferenceFormWrapper';
import AuthorFormWrapper from '../Author/components/AuthorFormWrapper';
import PresentationFormWrapper from '../Presentation/components/PresentationFormWrapper';
import Main from './Main';
import ConferenceOutlet from '../Conference/components/ConferenceOutlet';
import App from './App';
import PresentationOutlet from '../Presentation/components/PresentationOutlet';
import AuthorOutlet from '../Author/components/AuthorOutlet';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <App />
      },
      {
        path: '/conference',
        element: <ConferenceOutlet />,
        children: [
          {
            path: '/conference',
            element: <ConferenceListWrapper />
          },
          {
            path: '/conference/add',
            element: <ConferenceFormWrapper />
          }
        ]
      },
      {
        path: '/presentation',
        element: <PresentationOutlet />,
        children: [
          {
            path: '/presentation',
            element: <PresentationFormWrapper />
          },
          {
            path: '/presentation/add',
            element: <PresentationFormWrapper />
          }
        ]
      },
      {
        path: '/author',
        element: <AuthorOutlet />,
        children: [
          {
            path: '/author',
            element: <AuthorFormWrapper />
          },
          {
            path: '/author/add',
            element: <AuthorFormWrapper />
          }
        ]
      }
    ]
  }];

export default routes;
