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
import {ArrayInput, SimpleFormIterator, TextInput, SelectInput } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'react-admin';
import {permissionTypes} from './Constants' ;
import {editStyle, headerStyle} from './styles'

class AuthorizationTab extends Component {
  /*Render the tab*/

  render() {

    const AclInput = withStyles(editStyle)(({classes, ...props }) => (
      <ArrayInput source="acls" label=" ">
      <SimpleFormIterator>
      <TextInput label="sid" source="sid" formClassName={classes.row} resettable/>
      <SelectInput source="permission" formClassName={classes.row} choices={permissionTypes} />
      </SimpleFormIterator>
      </ArrayInput>
    ));

      return (
        <Fragment>
        <h3 style={headerStyle.margin}>Access Control Entries</h3>
        <AclInput/>
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
  export default enhance(AuthorizationTab);
