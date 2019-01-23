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
import React, {Component,Fragment} from 'react';
import { ReferenceManyField,TextInput,Datagrid,ChipField,TextField} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'react-admin';
import {editStyle, headerStyle} from './styles'
import { parse } from 'query-string';


const ContentFormTab = props => {

  const record_id = props.record.id;


  console.log(props);

  return (
      <Fragment>
      <h3 style={headerStyle.margin}>Content Information</h3>
        <ReferenceManyField label="Content" reference="contentinformation" target="parentResource.id">
          <Datagrid >
            <TextField source="relativePath" label="Path"/>
            <ChipField source="tags"/>
          </Datagrid>
        </ReferenceManyField>
      </Fragment>
    );
};


/*Export tab after linking*/
export default ContentFormTab;
