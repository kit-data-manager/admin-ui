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

import { withStyles }
from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { translate }
from 'react-admin';
import PropTypes from 'prop-types';

const styles = {
   main: {
      display: 'flex',
      zIndex: 1,
      flex: '1'
   },

   flexContainer: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'space-around',
      alignItems: 'baseline'
   },

   content: {
      padding: 0,
      '&:last-child': {padding: 0}
   },
   card: {
      flexGrow: 1,
      overflow: 'inherit',
      textAlign: 'left',
      padding: 16,
      margin: 12,

   },
   cardBig: {
      flexGrow: 1,
      overflow: 'inherit',
      textAlign: 'left',
      padding: 16,
      margin: 12,
      flexBasis: '100%'

   },
   up: {
      color: 'green'
   },
   error: {
      color: 'red'
   },
   misc: {
      color: 'grey'
   }
};

const addHealthElement = (identifier, status, detailsLabel, value, classes) => (
           <Card key={identifier} className={classes.card}>
           <CardHeader title={identifier}/>
           <CardContent className={classes.content}>
              <Typography className= {classes.title} color="textSecondary">
           
                 {status === 'UP' ? (
                                 <div>
                                    <div className={classes.up}><b>Status:</b> {status}</div>
                                    <div><b>{detailsLabel}:</b> {value}</div>
                                 </div>
                                    ) : (
                       {status === 'OUT_OF_SERVICE' ? (
                         <div className={classes.misc}><b>Status:</b> {status}</div>
                        ) : (
                         <div className={classes.error}><b>Status:</b> {status}</div>
                            )}
                     )}
              </Typography>
           </CardContent>
           </Card>
           )

const HealthComponent = ({ value, classes}) => (
           <div className={classes.main}>                     
              {value ? (
                         <div className={classes.flexContainer}>
                               <Card className={classes.cardBig}>
                               <CardHeader title="Overall Health"/>
                                <CardContent className={classes.content}>
                              <div>The overall health status of the repository system. The status changed from 'UP' as soon as at least one component is not working.</div>
                                 <br/>
                               <Typography className= {classes.title} color="textSecondary">
                                  {value.status === 'UP' ? (
                                       <div>
                                            <div className={classes.up}><b>Status:</b> {value.status}</div>
                                          </div>
                                    ) : (
                                 <div className={classes.error}><b>Status:</b> {value.status}</div>
                                    )}
                              </Typography>
                               </CardContent>
                               </Card>
                                    
                            {addHealthElement("DataResourceService", value.details.dataResourceService.status, "Resources", value.details.dataResourceService.details.DataResources, classes)}
                              {addHealthElement("ContentInformationService", value.details.contentInformationService.status, "Files", value.details.contentInformationService.details.ContentInformation, classes)}
                              {addHealthElement("Database", value.details.db.status, "System", value.details.db.details.database, classes)}
                            {addHealthElement("RabbitMQ", value.details.rabbit.status, "Version", value.details.rabbit.details.version, classes)}
                              {addHealthElement("Local Harddisk", value.details.diskSpace.status, "Free Diskspace", value.details.diskSpace.details.free, classes)}
                                 </div>
                                 ) : (
                         <p>Loading content information...</p>
                         )}
           </div>
           );


export default translate(withStyles(styles)(HealthComponent));