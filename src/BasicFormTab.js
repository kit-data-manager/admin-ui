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
import { ArrayInput, DisabledInput, SimpleFormIterator, TextInput, SelectInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'react-admin';
import {titleTypes, isoLangs, states} from './Constants' ;
import {editStyle} from './styles'

class BasicTab extends Component {
  /*Render the tab*/
  render() {


    const TitlesInput = withStyles(editStyle)(({classes, ...props }) => (
        <ArrayInput source="titles" label=" " fullWidth>
          <SimpleFormIterator>
            <SelectInput source="titleType" choices={titleTypes} formClassName={classes.row}/>
            <SelectInput label="language" source="lang" choices={isoLangs} formClassName={classes.row}/>
            <TextInput label="value" source="value" fullWidth/>
          </SimpleFormIterator>
        </ArrayInput>
    ));

    return (
        <Fragment>
          <h3>General Information</h3>
          <DisabledInput label="id" source="id" style={editStyle.row} />
          <TextInput label="publisher" source="publisher" style={editStyle.row} />
          <TextInput label="publication year" source="publicationYear" style={editStyle.row}/>
          <br/>
          <SelectInput label="language" source="language" choices={isoLangs} style={editStyle.row}/>
          <TextInput label="version" source="version" style={editStyle.row}/>
          <SelectInput label="state" source="state" choices={states} style={editStyle.row}/>
          <h3>Titles</h3>
          <TitlesInput/>
        </Fragment>
    );
  }
};

/*Enhance function to link translation and redux store*/
const enhance = compose(
    translate,
    connect()
);

/*Export tab after linking*/
export default enhance(BasicTab);
