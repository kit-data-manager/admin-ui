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
import {Edit, TabbedForm, FormTab } from 'react-admin'
import withStyles from '@material-ui/core/styles/withStyles';
import IdentifiersFormTab from './IdentifiersFormTab';
import BasicTab from './BasicFormTab';
import ContributorsTab from './ContributionFormTab';
import DatesTab from './DatesFormTab';
import DescriptionsTab from './DescriptionsFormTab';
import FundingsTab from './FundingsFormTab';
import AuthorizationTab from './AuthorizationFormTab';
import MiscTab from './MiscFormTab';
/*import {ContentInformationList} from './ContentInformationList';*/
import ContentInformationView from './ContentInformationView';

import {editStyle} from './styles'

export const ResourceEdit = withStyles(editStyle)(({ classes, ...props }) =>
    <Edit {...props}>
        <TabbedForm>
            <FormTab label="basic" >
                <BasicTab/>
            </FormTab>
            <FormTab label="identifiers">
                <IdentifiersFormTab/>
            </FormTab>
            <FormTab label="contribution">
                <ContributorsTab/>
            </FormTab>
            <FormTab label="dates">
                <DatesTab/>
            </FormTab>
            <FormTab label="descriptions">
                <DescriptionsTab/>
            </FormTab>
            <FormTab label="funding">
                <FundingsTab/>
            </FormTab>
            <FormTab label="authorization">
                <AuthorizationTab/>
            </FormTab>
            <FormTab label="misc">
                <MiscTab/>
            </FormTab>
            <FormTab label="content">
               <ContentInformationView {...props} fullWidth/>
            </FormTab>
        </TabbedForm>
    </Edit>
);
