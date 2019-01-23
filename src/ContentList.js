import React from 'react';
import { List, Datagrid, DateField, TextField,EditButton } from 'react-admin';

export const ResourceList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" label="id"/>
            <TextField source="identifier.value" label="DOI"/>
            <TextField source="titles[0].value" label="Title"/>
            <TextField source="resourceType.typeGeneral" label="ResourceType"/>
            <TextField source="publicationYear" label="PublicationYear"/>
            <DateField source="dates[0].value" label="CreationDate" showTime/>
            <TextField source="version" label="Version"/>
            <TextField source="state" label="State"/>
            <EditButton/>
        </Datagrid>
    </List>
);
