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
import {ArrayInput, SimpleFormIterator, SelectInput, TextInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {translate } from 'react-admin';
import {funderIdentifierTypes} from './Constants' ;
import {editStyle, headerStyle} from './styles'

class FundingsTab extends Component {
  /*Render the tab*/
  render() {

    const FundingsInput = withStyles(editStyle)(({classes, ...props }) => (
        <ArrayInput source="fundingReferences" label=" ">
          <SimpleFormIterator>
            <h4 style={headerStyle.margin}>Funder</h4>
            <TextInput label="funder name" source="funderName" formClassName={classes.row}/>
            <SelectInput label="funder identifier type" source="funderIdentifier.type" choices={funderIdentifierTypes} formClassName={classes.row}/>
            <TextInput label="funder identifier" source="funderIdentifier.value" formClassName={classes.row}/>
            <h4 style={headerStyle.margin}>Award Number</h4>
            <TextInput label="award number id" source="awardNumber.schemeId" formClassName={classes.row}/>
            <TextInput label="award number uri" source="awardNumber.schemeUri" formClassName={classes.row}/>
            <h4 style={headerStyle.margin}>Award</h4>
            <TextInput label="award uri" source="awardUri" formClassName={classes.row}/>
            <TextInput label="award title" source="awardTitle" formClassName={classes.row}/>
          </SimpleFormIterator>
        </ArrayInput>
    ));

    return (
        <Fragment>
          <FundingsInput/>
        </Fragment>
    );
  }
}

/*Enhance function to link translation and redux store*/
const enhance = compose(
    translate,
    connect()
);

/*Export tab after linking*/
export default enhance(FundingsTab);
