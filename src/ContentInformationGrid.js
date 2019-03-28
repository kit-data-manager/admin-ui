/* 
 * Copyright 2019 Karlsruhe Institute of Technology.
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
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { translate } from 'react-admin';
import { List, Datagrid, DateField, TextField, ArrayField, SingleFieldList, ChipField, FileField} from 'react-admin';

const styles = {
   main: {
      display: 'flex',
      zIndex: 1,
      flex: '1',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: '1em',
      marginTop: 20,
      position: 'relative',
   },
   content: {
      padding: 0,
      '&:last-child': {padding: 0}
   },
   card: {
      flexGrow: 1,
      //overflow: 'inherit',
      textAlign: 'left',
      padding: 16,
      margin: 12,
      minHeight: 52,
      //background: 'light-gray',
   },
    listElement: {
      margin: 5
   },
};

const stringArrayToJson = (record) => {
   return {name: record};
}

const TagsField = ({ record }) => (
    <ChipField record={stringArrayToJson(record.tags)} source='name'/>
)

TagsField.defaultProps = {addLabel: true};

/*Custom field to present map-based metadata as Datagrid*/

const mapToJson = (record) => {
   var array = [];
   var cnt = 0;
   for (var key in record) {
      if (record.hasOwnProperty(key)) {
         array[cnt] = {key: key, value: record[key]};
         cnt++;
      }
   }
   return {metadata: array};
}
const MetadataField = ({ record }) => (
           <ArrayField record={mapToJson(record.metadata)} source="metadata">
              <Datagrid>
                 <TextField source='key' label="Key"/>
                 <TextField source='value' label="Value"/>
              </Datagrid>
           </ArrayField>
           )

const getDownloadUrl = (record, apiUrl) => {
   var url = [apiUrl, '/', record.parentResource.id, '/data/', record.relativePath].join('');
   return {value: url};
}

const ContentDownloadField = ({ record, apiUrl}) => (
           <FileField record={getDownloadUrl(record, apiUrl)} source='value' title="Download" target="_blank"/>
           )

const ContentInformationGrid = ({ value, apiUrl, classes, isLoading}) => (
           <div className={classes.main}>
              {value ? (value.map(element =>
                            <Card key={element.id} className={classes.card}>
                            <CardHeader title={element.relativePath} />
                            <CardContent className={classes.content}>
                               <Typography className={classes.title} color="textSecondary">
                               <div className={classes.listElement}><b>ParentId:</b> {element.parentResource.id}<br/></div> 
                               <div className={classes.listElement}>   <b>MediaType:</b> {element.mediaType}<br/></div> 
                               <div className={classes.listElement}>   <b>Hash:</b> {element.hash}<br/></div> 
                               <div className={classes.listElement}>   <b>Size:</b> {element.size} Bytes<br/></div> 
                               <div className={classes.listElement}>   <b>Metadata:</b><br/></div> 
                               <div className={classes.listElement}>   <MetadataField record={element}/></div> 
                               <div className={classes.listElement}>  <b>Tags:</b><br/></div> 
                               <div className={classes.listElement}>  <TagsField record={element}/> </div> 
                               <div className={classes.listElement}>  <br/></div> 
                               <div className={classes.listElement}> <ContentDownloadField record={element} apiUrl={apiUrl}/></div> 
                               </Typography>
                            </CardContent>
                            </Card>
                           )) : (
                            <p>Loading content information...</p>
                            )}
                         </div>
                                 
                                             );


 export default translate(withStyles(styles)(ContentInformationGrid));