/*
* Copyright 2018 Karlsruhe Institute of Technology.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import React from 'react';
import { Admin, Resource} from 'react-admin';
//import jsonServerProvider from 'ra-data-json-server';
import { ResourceList } from './ResourceList';
//import { ContentInformationList } from './ContentInformationList';

import { ResourceEdit } from './ResourceEdit';
//import fakeDataProvider from 'ra-data-fakerest';
import HealthDashboard from './HealthDashboard';
//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
//import { createMuiTheme } from '@material-ui/core/styles';
//import { createMuiTheme } from '@material-ui/core/styles';
import dataProviders from './dataProviders';


//import red from '@material-ui/core/colors/red';
//import blue from '@material-ui/core/colors/blue';


//RepoDataProvider;

/*fakeDataProvider({
  dataresources: [
    {
      id: 1,
      identifier: {
        id: 1,
        value: "(:tba)",
        identifierType: "DOI"
      },
      resourceIdentifier: "79380191-e293-428d-8613-821db44f0a13",
      creators: [{
        id: 1,
        familyName: "Doe",
        givenName: "John",
        affiliations: ["Karlsruhe Institute of Technology"]
      }],
      titles: [
        {
          id: 1,
          value: "Most basic resource for testing",
          titleType: "OTHER"
        },
        {
          id: 3,
          value: "Secondary Title",
          titleType: "SUBTITLE"
        }
      ],
      publisher: "SELF",
      publicationYear: "2018",
      resourceType: {
        id: 1,
        value: "testingSample",
        typeGeneral: "DATASET"
      },
      dates: [{
        id: 1,
        value: "2018-11-23T13:00:07Z",
        type: "CREATED"
      }],
      alternateIdentifiers: [
        {
          id: 2,
          value: "79380191-e293-428d-8613-821db44f0a13",
          identifierType: "INTERNAL"
        }
      ],
      relatedIdentifiers: [
        {
          id: 1,
          identifierType: "OTHER",
          value: "test123",
          relationType: "IS_PART_OF",
          scheme : {
            id: 1,
            schemeId: 1,
            schemeUri: "http://example.com/myScheme"
          },
          relatedMetadataScheme: "http://example.com/dc"
        }
      ],
      fundingReferences :[
        {
          id: 1,
          funderName: "BMBF",
          funderIdentifier: {
            id: 1,
            type: "CROSSREF_FUNDER_ID",
            value: "bmbf-1"
          },
          awardNumber: {
            id: 1,
            schemeId: "BMBF",
            schemeUri: "http://bmbf.de/scheme"
          },
          awardUri: "http://www.bmbf.de",
          awardTitle: "Funding for Testing"
        }
      ],
      geoLocations: [
        {
          id: 1,
          point: {
            id: 1,
            longitude: 12.1212,
            latitude: 33.1223
          },
          box: {
            id: 1,
            westLongitude: 1.12,
            eastLongitude: -23.12,
            southLatitude: 12.11,
            northLatitude: 44.1
          },
          place: "Karlsruhe",
          polygon: {
            id: 1,
            points: [
              {
                id: 1,
                longitude: 1.1212,
                latitude: 1.1223
              },
              {
                id: 2,
                longitude: 2.1212,
                latitude: 23.1223
              },
              {
                id: 3,
                longitude: 3.1212,
                latitude: 3.1223
              },

            ]
          }
        }
      ],
      state: "VOLATILE",
      language: "en",
      formats: [
        "test",
        "test2"
      ],
      acls: [
        {
          id: 1,
          sid: "SELF",
          permission: "ADMINISTRATE"
        }
      ],
      data:[
        {
          id: 1,
          parentResource:{
            id: 1
          },
          contentUri: "http://myhost.de/file.txt",
          mediaType: "text/plain",
          hash: "1233asd234abcf44efb23209bca",
          size: "2048",
          metadata: [
            {
              key: "value",
              key2: "value2"
            }
          ],
          tags: [
            "file",
            "text"
          ]
        },
        {
          id: 2,
          parentResource:{
            id: 1
          },
          contentUri: "http://myhost.de/file.jpeg",
          mediaType: "image/jpeg",
          hash: "",
          size: "123412",
          metadata: [
            {
              content: "bunnies"
            }
          ],
          tags: [
            "bunny",
            "images"
          ]
        }
      ]
    },
    {
      id: 2,
      identifier: {
        id: 1,
        value: "(:tba)",
        identifierType: "DOI"
      },
      resourceIdentifier: "79380191-e293-428d-8613-821db44f0a13",
      creators: [
        {
          id: 1,
          familyName: "Doe",
          givenName: "John",
          affiliations: ["Karlsruhe Institute of Technology"]
        }
      ],
      titles: [
        {
          id: 2,
          value: "Second resource for testing",
          titleType: "OTHER"
        }
      ],
      publisher: "SELF",
      publicationYear: "2013",
      resourceType: {
        id: 2,
        value: "testingSample",
        typeGeneral: "DATASET"
      },
      dates: [
        {
          id: 2,
          value: "2018-11-23T13:00:07Z",
          type: "CREATED"
        }
      ],
      alternateIdentifiers: [
        {
          id: 2,
          value: "79380191-e293-428d-8613-821db44f0a13",
          identifierType: "INTERNAL"
        }
      ],
      state: "VOLATILE",
      language: "en",
      formats: [
        "test",
        "test2"
      ],
      acls: [
        {
          id: 2,
          sid: "SELF",
          permission: "ADMINISTRATE"
        }
      ]
    }
  ]
});

const myTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiButton: { // override the styles of all instances of this component
      root: { // Name of the rule
        color: 'white', // Some CSS
      },
    },
  },
});

const myDarkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blue,
    secondary: blue,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
  },

});*/

const App = () => (
  <Admin dashboard={HealthDashboard} dataProvider={dataProviders}>
  <Resource name="dataresources" list={ResourceList} edit={ResourceEdit}/>
  <Resource name="contentinformation"/>
  <Resource name="health"/>
  </Admin>
);


export default App;
