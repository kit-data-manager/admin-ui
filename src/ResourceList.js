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
import { List, Datagrid, DateField, TextField, EditButton } from 'react-admin';

export const ResourceList = props => (
           <List {...props}>
           <Datagrid rowClick="edit">
              <TextField source="id" label="id"/>
              <TextField source="identifier.value" label="DOI" sortable={false} />
              <TextField source="titles[0].value" label="Title" sortable={false} />
              <TextField source="resourceType.typeGeneral" label="ResourceType" sortable={false} />
              <TextField source="publicationYear" label="PublicationYear"/>
              <DateField source="dates[0].value" label="CreationDate" sortable={false} showTime />
              <TextField source="version" label="Version"/>
              <TextField source="state" label="State"/>
              <EditButton/>
           </Datagrid>
           </List>
           );
