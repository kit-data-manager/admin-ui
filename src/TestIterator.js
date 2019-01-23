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
// in src/comments.js
import React, {Component,Fragment} from 'react';
import { AutocompleteInput, ArrayInput, DisabledInput, NumberInput, EditButton,ArrayField, Datagrid, List,SimpleForm,DateField,  TextField, TextInput,CardActions,RefreshButton } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};
export const CommentGrid = withStyles(cardStyle)(({classes, record, basePath }) => (
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
));

CommentGrid.defaultProps = {
  record: {}
};

export const CommentList = (props) => (
  <ArrayInput source="titles" {...props} fullWidth>
    <CommentGrid />
  </ArrayInput>
);

{/*<Card key={id} style={cardStyle}>
  *  <CardHeader
  *      title={<TextField record={data[id]} source="identifierType" />}
  *      subheader={<DateField record={data[id]} source="value" />}
  *       />}
  *  />
  *  <CardContent>
  *      <TextInput record={data[id]} source="value" />
  *  </CardContent>
*</Card>*/}
