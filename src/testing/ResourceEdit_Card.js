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
        import { Resource, Edit,DateField, List, Labeled, AutocompleteInput, Datagrid, EditButton, SimpleList, ReferenceManyField, ArrayInput, DisabledInput, SingleFieldList, SimpleFormIterator, ChipField, BooleanInput, DateInput, LongTextInput, TextInput, TextField, TabbedForm, FormTab, ListGuesser } from 'react-admin'
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';


const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};
const titleStyle = {
   textOverflow: 'ellipsis',
   overflow: 'hidden',
   maxWidth: '20em',
   fontSize: '32px'
};
/**
*const Title = ({ record, label }) => (
*    <Labeled label={label}>
*       <span style={titleStyle}>{record.titles[0].value}</span>
*   </Labeled>
);
*<Title label=" "  />
*/

const styles = {
    root: { display: 'inline-block', marginTop: '1em', zIndex: 2 },
    content: { padding: 0, '&:last-child': { paddingLeft: 15, paddingRight: 15 } },
    img: {
        width: 'initial',
        minWidth: 'initial',
        maxWidth: '42em',
        maxHeight: '15em',
    }
};

const TitlesGrid = withStyles(styles)(({ classes, record, basePath }) => (
    <div>
  {record.titles.map(title =>
        <Card key={title.id} className={classes.root}>
            <CardContent className={classes.content}>
                <TextInput record={title} label="type" source="value" />
                <AutocompleteInput record={title} source="titleType" choices={[
                { id: 'ALTERNATIVE_TITLE', name: 'AlternativeTitle' },
                                 { id: 'SUBTITLE', name: 'Subtitle' },
                                 { id: 'TRANSLATED_TITLE', name: 'TranslatedTitle' },
                                  { id: 'OTHER', name: 'Other' },
                                 ]} />
            </CardContent>
        </Card>
    )}
    </div>
))
TitlesGrid.defaultProps = {
    record: {},
};

/**
*<SimpleFormIterator disableRemove disableAdd fullWidth>
*               <AutocompleteInput source="titleType" choices={[
 *               { id: 'ALTERNATIVE_TITLE', name: 'AlternativeTitle' },
 *                                 { id: 'SUBTITLE', name: 'Subtitle' },
 *                                 { id: 'TRANSLATED_TITLE', name: 'TranslatedTitle' },
  *                                { id: 'OTHER', name: 'Other' },
  *                                ]} />
  *             <TextInput label="value" source="value" />
   *         </SimpleFormIterator>
*/
export const ResourceEdit = ((props) =>
<Edit {...props}>
   <TabbedForm>
      <FormTab label="Basic" >
         <TextInput label="" source="publisher"  />
         <TextInput label="" source="publicationYear"  />
          <ArrayInput source="titles" fullWidth>
            <TitlesGrid/>
         </ArrayInput>
      </FormTab>
      <FormTab label="body">
          <List {...props} fullWidth>
        <Datagrid fullWidth>
            <TextField source="id" />
            <TextField source="publisher" />
        </Datagrid>
    </List>
      </FormTab>
   </TabbedForm>
</Edit>
 );
