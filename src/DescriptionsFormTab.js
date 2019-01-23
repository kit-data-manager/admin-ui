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
import { ArrayInput,  LongTextInput, SimpleFormIterator, SelectInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {translate } from 'react-admin';
import {descriptionTypes, isoLangs} from './Constants' ;
import {editStyle, headerStyle} from './styles'

class DescriptionsTab extends Component {
  /*Render the tab*/
  render() {

    const SubjectsInput = withStyles(editStyle)(({classes, ...props }) => (
      <ArrayInput source="subjects" label=" ">
      <SimpleFormIterator disableRemove>
      <SelectInput label="language" source="lang" choices={isoLangs}/>
      <LongTextInput label="value" source="value" resettable/>
      </SimpleFormIterator >
      </ArrayInput>
    ));

    const DescriptionsInput = withStyles(editStyle)(({classes, ...props }) => (
      <ArrayInput source="descriptions"  label=" " >
      <SimpleFormIterator>
      <SelectInput source="type" choices={descriptionTypes}/>
      <SelectInput label="language" source="lang" choices={isoLangs}/>
      <RichTextInput source="description" toolbar={[ ['bold', 'italic', 'underline', 'link'] ]} fullWidth resettable/>
      </SimpleFormIterator>
      </ArrayInput>
    ));

    return (
      <Fragment>
      <h3 style={headerStyle.margin}>Subjects</h3>
      <SubjectsInput/>
      <h3 style={headerStyle.margin}>Descriptions</h3>
      <DescriptionsInput/>
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
export default enhance(DescriptionsTab);
