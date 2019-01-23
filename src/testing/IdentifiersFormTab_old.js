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
import { Resource,Show, SimpleShowLayout, Edit,DateField, List, Labeled, AutocompleteInput, Datagrid,
   EditButton, SimpleList, ReferenceManyField, ArrayInput, DisabledInput, SingleFieldList, SimpleFormIterator, ChipField, BooleanInput, DateInput, LongTextInput, TextInput, TextField, TabbedForm, FormTab, ListGuesser } from 'react-admin'
import withStyles from '@material-ui/core/styles/withStyles';

const editStyles = {
    first_name: { display: 'inline-block' },
    last_name: { display: 'inline-block', marginLeft: 32},
    email: { width: 544 },
    address: { maxWidth: 544 },
    zipcode: { display: 'inline-block' },
    city: { display: 'inline-block', marginLeft: 32 },
    comment: {
        maxWidth: '20em',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
};

export const IdentifiersTab = withStyles(editStyles)(({ classes, ...props }) =>
   <DisabledInput label="Identifier Type" source="identifier.identifierType" formClassName={classes.first_name}  />
      <TextInput label="Identifier" source="identifier.value" formClassName={classes.last_name} />
         <ArrayInput source="alternateIdentifiers" fullWidth>
            <SimpleFormIterator >
                  <AutocompleteInput source="identifierType" choices={[
                { id: 'ARK', name: 'ARK' },
                                  { id: 'AR_XIV', name: 'AR_XIV' },
                                  { id: 'BIBCODE', name: 'BIBCODE' },
                                  { id: 'DOI', name: 'DOI' },
                                  { id: 'EAN_13', name: 'EAN_13' },
                                  { id: 'EISSN', name: 'EISSN' },
                                  { id: 'HANDLE', name: 'HANDLE' },
                                  { id: 'IGSN', name: 'IGSN' },
                                  { id: 'ISBN', name: 'ISBN' },
                                  { id: 'ISSN', name: 'ISSN' },
                                  { id: 'ISTC', name: 'ISTC' },
                                  { id: 'LISSN', name: 'LISSN' },
                                  { id: 'LSID', name: 'LSID' },
                                  { id: 'PMID', name: 'PMID' },
                                  { id: 'PURL', name: 'PURL' },
                                  { id: 'UPC', name: 'UPC' },
                                  { id: 'URL', name: 'URL' },
                                  { id: 'URN', name: 'URN' },
                                  { id: 'INTERNAL', name: 'INTERNAL' },
                                  { id: 'OTHER', name: 'OTHER' },
                                  ]} />
               <TextInput label="value" source="value" fullWidth resettable/>
            </SimpleFormIterator>
         </ArrayInput>
          <ArrayInput source="relatedIdentifiers" fullWidth>
            <SimpleFormIterator >
          <AutocompleteInput source="identifierType" autoFocus formClassName={classes.first_name} choices={[
                                  { id: 'ARK', name: 'ARK' },
                                  { id: 'AR_XIV', name: 'AR_XIV' },
                                  { id: 'BIBCODE', name: 'BIBCODE' },
                                  { id: 'DOI', name: 'DOI' },
                                  { id: 'EAN_13', name: 'EAN_13' },
                                  { id: 'EISSN', name: 'EISSN' },
                                  { id: 'HANDLE', name: 'HANDLE' },
                                  { id: 'IGSN', name: 'IGSN' },
                                  { id: 'ISBN', name: 'ISBN' },
                                  { id: 'ISSN', name: 'ISSN' },
                                  { id: 'ISTC', name: 'ISTC' },
                                  { id: 'LISSN', name: 'LISSN' },
                                  { id: 'LSID', name: 'LSID' },
                                  { id: 'PMID', name: 'PMID' },
                                  { id: 'PURL', name: 'PURL' },
                                  { id: 'UPC', name: 'UPC' },
                                  { id: 'URL', name: 'URL' },
                                  { id: 'URN', name: 'URN' },
                                  { id: 'INTERNAL', name: 'INTERNAL' },
                                  { id: 'OTHER', name: 'OTHER' }
                                  ]} />
                                   <AutocompleteInput source="relationType"  formClassName={classes.last_name} choices={[
                                  { id: 'IS_CITED_BY', name: 'IsCitedBy' },
                                  { id: 'CITES', name: 'Cites' },
                                  { id: 'IS_SUPPLEMENT_TO', name: 'IsSupplementTo' },
                                  { id: 'IS_SUPPLEMENTED_BY', name: 'IsSupplementedBy' },
                                  { id: 'IS_CONTINUED_BY', name: 'IsContinuedBy' },
                                  { id: 'CONTINUES', name: 'Continues' },
                                  { id: 'IS_NEW_VERSION_OF', name: 'IsNewVersionOf' },
                                  { id: 'IS_PREVIOUS_VERSION_OF', name: 'IsPreviousVersionOf' },
                                  { id: 'IS_PART_OF', name: 'IsPartOf' },
                                  { id: 'HAS_PART', name: 'HasPart' },
                                  { id: 'IS_REFERENCED_BY', name: 'IsReferencedBy' },
                                  { id: 'REFERENCES', name: 'References' },
                                  { id: 'IS_DOCUMENTED_BY', name: 'IsDocumentedBy' },
                                  { id: 'DOCUMENTS', name: 'Documents' },
                                  { id: 'IS_COMPILED_BY', name: 'IsCompiledBy' },
                                  { id: 'COMPILES', name: 'Compiles' },
                                  { id: 'IS_VARIANT_FORM_OF', name: 'IsVariantFormOf' },
                                  { id: 'IS_ORIGINAL_FORM_OF', name: 'IsOriginalFormOf' },
                                  { id: 'IS_IDENTICAL_TO', name: 'IsIdenticalTo' },
                                  { id: 'HAS_METADATA', name: 'HasMetadata' },
                                  { id: 'IS_METADATA_FOR', name: 'IsMetadataFor' },
                                  { id: 'REVIEWS', name: 'Reviews' },
                                  { id: 'IS_REVIEWED_BY', name: 'IsReviewedBy' },
                                  { id: 'IS_DERIVED_FROM', name: 'IsDerivedFrom' },
                                  { id: 'IS_SOURCE_OF', name: 'IsSourceOf' }
                                  ]} />
               <TextInput label="value" source="value" fullWidth resettable/>
            </SimpleFormIterator>
         </ArrayInput>
       );
