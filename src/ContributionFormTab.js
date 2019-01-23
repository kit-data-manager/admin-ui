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
import { ArrayInput, SimpleFormIterator, TextInput, SelectInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'react-admin';
import {contributionTypes} from './Constants' ;
import {editStyle, headerStyle} from './styles'

class ContributorsTab extends Component {
  /*Render the tab*/
  render() {

    const CreatorInput = withStyles(editStyle)(({classes, ...props }) => (
      <ArrayInput source="creators" label=" ">
      <SimpleFormIterator disableRemove>
      <TextInput label="given name" source="givenName" formClassName={classes.row} resettable/>
      <TextInput label="family name" source="familyName" formClassName={classes.row} resettable/>
      <ArrayInput source="affiliations" fullWidth>
      <SimpleFormIterator>
      <TextInput label=" " placeHolder="your affiliation" fullWidth/>
      </SimpleFormIterator>
      </ArrayInput>
      </SimpleFormIterator>
      </ArrayInput>
    ));

    const ContributorInput = withStyles(editStyle)(({classes, ...props }) => (
      <ArrayInput source="contributors" label=" " fullWidth>
      <SimpleFormIterator>
      <SelectInput source="contributionType" formClassName={classes.row} choices={contributionTypes} />
      <TextInput label="given name" source="user.givenName" formClassName={classes.row} resettable/>
      <TextInput label="family name" source="user.familyName" formClassName={classes.row}  resettable/>
      <ArrayInput source="user.affiliations" fullWidth>
      <SimpleFormIterator>
      <TextInput label=" " placeholder="your affiliation" fullWidth/>
      </SimpleFormIterator>
      </ArrayInput>
      </SimpleFormIterator>
      </ArrayInput>
    ));

    return (
      <Fragment>
      <h3 style={headerStyle.margin}>Creators</h3>
      <CreatorInput/>
      <h3 style={headerStyle.margin}>Contributors</h3>
      <ContributorInput/>
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
export default enhance(ContributorsTab);
