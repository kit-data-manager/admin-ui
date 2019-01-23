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
      minHeight: 52,
      //background: 'light-gray',
   },
};

const ContentInformationGrid = ({ value, apiUrl, classes, isLoading}) => (
           <div className={classes.main}>
              {value ? (value.map(element =>
                            <Card key={element.id} className={classes.card}>
                            <CardHeader title={element.relativePath} />
                            <CardContent className={classes.content}>
                               <Typography className={classes.title} color="textSecondary">
                                  <b>ParentId:</b> {element.parentResource.id}<br/>
                                  <b>MediaType:</b> {element.mediaType}<br/>
                                  <b>Hash:</b> {element.hash}<br/>
                                  <b>Size:</b> {element.size} Bytes<br/>
                                  <b>Direct Link:</b>  <span>{apiUrl}/{element.parentResource.id}/data/{element.relativePath}</span>
                               </Typography>
                            </CardContent>
                            </Card>
                 )) : (
                  <p>Loading content information...</p>
               )}
            </div>
);


 export default translate(withStyles(styles)(ContentInformationGrid));