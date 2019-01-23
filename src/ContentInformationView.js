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

import React, { Component, Fragment } from 'react';
import {  GET_LIST } from 'react-admin';
import ContentInformationProvider from './ContentInformationProvider';
import {apiUrl} from './ContentInformationProvider';

import compose from 'recompose/compose';
import { translate } from 'react-admin';
import { connect } from 'react-redux';
import ContentInformationGrid from './ContentInformationGrid';


/*Custom component to provide a string as ChipField*/

class ContentInformationView extends Component {
    state = {};

   componentDidMount() {     
      Promise.resolve(ContentInformationProvider(GET_LIST, 'contentinformation', {
            filter: { },
            sort: { field: 'id', order: 'DESC' },
            pagination: { page: 1, perPage: 10 },
            parentId: this.props.id, 
        })
      ).then(resp => {
            //TODO: dont load all TEI files here, this puts a lot of load on the server
            this.setState({data: resp.data})
          }
        )
    }

    render() {
        const {
            data
        } = this.state;
        return (
            <Fragment>
              <ContentInformationGrid value={data} apiUrl={apiUrl}/>
            </Fragment>
        );
    }
}

const enhance = compose(
    translate,
   connect()
  );
export default enhance(ContentInformationView);

