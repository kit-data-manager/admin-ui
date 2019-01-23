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
import React, {Component, Fragment} from 'react';
import { ArrayInput, NumberInput, SimpleFormIterator, TextInput} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'react-admin';
import {editStyle, headerStyle} from './styles'
import PropTypes from 'prop-types';

class MiscTab extends Component {
   /*Render the tab*/

   render() {

      const CaptionField = ({value = {}}) => <h4>{value}</h4>;

      CaptionField.propTypes = {
         label: PropTypes.string,
      };

      const MiscTabContent = withStyles(editStyle)(({classes, ...props }) => (
                 <ArrayInput source="geoLocations" label=" " >
                    <SimpleFormIterator>
                       <CaptionField style={classes.margin} value="Place"/>
                       <TextInput source="place" label=" " formClassName={classes.row} fullWidth/>
                       <CaptionField style={classes.margin} value="Point"/>
                       <NumberInput source="point.longitude" label="longitude" formClassName={classes.row}/>
                       <NumberInput source="point.latitude" label="latitude" formClassName={classes.row}/>
                       <CaptionField style={classes.margin} value="Box"/>
                       <NumberInput source="box.westLongitude" label="west longitude" formClassName={classes.row}/>
                       <NumberInput source="box.eastLongitude" label="east longitude" formClassName={classes.row}/>
                       <NumberInput source="box.southLatitude" label="south latitude" formClassName={classes.row}/>
                       <NumberInput source="box.northLatitude" label="north latitude" formClassName={classes.row}/>
                       <CaptionField style={classes.margin} value="Polygon"/>
                       <ArrayInput source="polygon.points" label=" " fullWidth >
                          <SimpleFormIterator>
                             <NumberInput source="longitude" label="longitude" formClassName={classes.row}/>
                             <NumberInput source="latitude" label="latitude" formClassName={classes.row}/>
                          </SimpleFormIterator>
                       </ArrayInput>
                    </SimpleFormIterator>
                 </ArrayInput>

                 ));

      return (
              <Fragment>
                 <h3 style={headerStyle.margin}>Geo Locations</h3>
                 <MiscTabContent/>
                 <h3 style={headerStyle.margin}>Formats and Sizes</h3>
                 <ArrayInput source="formats" fullWidth>
                    <SimpleFormIterator>
                       <TextInput label=" " defaultValue="application/octet-stream" resettable/>
                    </SimpleFormIterator>
                 </ArrayInput>
                 <ArrayInput source="sizes" fullWidth>
                    <SimpleFormIterator>
                       <TextInput label=" " defaultValue="0" resettable/>
                    </SimpleFormIterator>
                 </ArrayInput>
              </Fragment>
              );
   }
}
;

/*Enhance function to link translation and redux store*/
const enhance = compose(
        translate,
        connect()
        );

/*Export tab after linking*/
export default enhance(MiscTab);
