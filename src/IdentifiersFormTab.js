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
import {ArrayInput, DisabledInput, SelectInput, SimpleFormIterator, TextInput} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'react-admin';
import {identifierTypes, relationTypes} from './Constants' ;
import {editStyle, headerStyle} from './styles'

class IdentifiersTab extends Component {
  /*Render the tab*/


  render() {
      const AlternateIdentifierInput = withStyles(editStyle)(({classes, ...props }) => (
        <ArrayInput source="alternateIdentifiers" label=" " fullWidth>
        <SimpleFormIterator>
        <SelectInput source="identifierType" formClassName={classes.row} choices={identifierTypes} />
        <TextInput label="value" source="value" fullWidth resettable/>
        </SimpleFormIterator>
        </ArrayInput>
      ));

      const RelatedIdentifierInput = withStyles(editStyle)(({classes, ...props }) => (
        <ArrayInput source="relatedIdentifiers" label=" " fullWidth>
        <SimpleFormIterator>
        <SelectInput source="identifierType" formClassName={classes.row} choices={identifierTypes} />
        <SelectInput source="relationType" formClassName={classes.row} choices={relationTypes} />
        <TextInput label="value" source="value" fullWidth resettable/>
        {/*Skip sheme for the moment... <TextInput label="scheme uri" source="scheme.schemeUri" fullWidth resettable/>*/}
        <TextInput label="related metadata scheme" type="URL" source="relatedMetadataScheme" fullWidth resettable/>
        </SimpleFormIterator>
        </ArrayInput>
      ));

      return (
        <Fragment>
        <h3 style={headerStyle.margin}>Primary Identifier</h3>
        <DisabledInput label="Identifier Type" source="identifier.identifierType" style={editStyle.row}  />
        <TextInput label="Identifier" source="identifier.value" fullWidth  />
        <h3 style={headerStyle.margin}>Alternate Identifiers</h3>
        <AlternateIdentifierInput />
        <h3 style={headerStyle.margin}>Related Identifiers</h3>
        <RelatedIdentifierInput/>
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
  export default enhance(IdentifiersTab);
