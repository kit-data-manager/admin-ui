import React, {Fragment} from 'react';
import { List, Datagrid, DateField, TextField,EditButton,ReferenceManyField ,ArrayField, SingleFieldList,ChipField,FileField} from 'react-admin';
import { Tree, NodeView, NodeActions } from 'ra-tree-ui-materialui';


/*Custom component to provide a string as ChipField*/

const stringArrayToJson = (record) =>{
    return {name: record};
}

const TagsField = ({ record }) => (
    <ChipField record={stringArrayToJson(record)} source='name'/>
)

TagsField.defaultProps = { addLabel: true };

/*Custom field to present map-based metadata as Datagrid*/

const mapToJson = (record) =>{
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

MetadataField.defaultProps = { addLabel: true };


/*Custom field to provide download link to content.*/

const getDownloadUrl = (record) =>{
    var url = "http://episteme2.scc.kit.edu:8080/api/v1/dataresources/" + record.parentResource.id + "/data/" + record.relativePath;
    return {value: url};
}

const ContentDownloadField = ({ record }) => (
   <FileField record={getDownloadUrl(record)} source='value' title="Download" target="_blank"/>
)

ContentDownloadField.defaultProps = { addLabel: true };


export const ContentInformationList = props => (
    <List  {...props} title=" " exportActionButton={false}>
         <Datagrid>
         <TextField source="id" />
         <ReferenceManyField label="Content" reference="contentinformation" target="parentResource.id">
                <Datagrid>
                    <TextField source="relativePath" label="Path"/>
                    <TextField source="mediaType" label="Mediatype"/>
                    <TextField source="hash" label="Checksum"/>
                    <TextField source="size" label="Size"/>
                    <MetadataField label="Metadata"/>
                    <ArrayField source="tags">
                        <SingleFieldList>
                            <TagsField label=" "/>
                        </SingleFieldList>
                    </ArrayField>
                    <ContentDownloadField label="Download"/>
                </Datagrid>
            </ReferenceManyField>
        </Datagrid>

    </List>
);
