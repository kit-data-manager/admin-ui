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
// in src/Dashboard.js
import React, { Component, Fragment } from 'react';
import {  GET_ONE } from 'react-admin';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title, ChipField, Datagrid, ListGuesser } from 'react-admin';

import compose from 'recompose/compose';
import { translate } from 'react-admin';
import { connect } from 'react-redux';
import HealthDataProvider from './HealthDataProvider';
import HealthComponent from './HealthComponent';
import { withStyles } from '@material-ui/core/styles';

class HealthDashbord extends Component {
   state = {};
 
   componentDidMount() {
      Promise.resolve(HealthDataProvider(GET_ONE, 'health')
              ).then(resp => {
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
                 <Title title="Repository Health Information"/> 
                 <HealthComponent value={data}/> 
              </Fragment>
              );
   }
}

const enhance = compose(
        translate,
        connect()
        );

 export default translate(HealthDashbord);

