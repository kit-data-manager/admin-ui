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

import {
    GET_LIST,
    GET_MANY_REFERENCE,
    GET_ONE,
    CREATE
} from 'react-admin';

export const apiUrl = 'http://episteme2.scc.kit.edu:8080/api/v1/dataresources';

/**
 * Maps react-admin queries to my REST API
 *
 * @param {string} type Request type, e.g GET_LIST
 * @param {string} resource Resource name, e.g. "posts"
 * @param {Object} payload Request parameters. Depends on the request type
 * @returns {Promise} the Promise for a data response
 */
export default (type, resource, params) => {
    let url = '';
    const options = {
        headers : new Headers({
            Accept: 'application/vnd.datamanager.content-information+json',
            'Content-Type': 'application/json'
        }),
    };
    switch (type) {
        case GET_LIST: {
            //console.log("GET LIST");
            //const { page, perPage } = params.pagination;
            //const { field, order } = params.sort;
           // const query = {
           //     sort: JSON.stringify([field, order]),
           //     range: JSON.stringify([
           //         (page - 1) * perPage,
           //         page * perPage - 1,
           //     ]),
                //filter: JSON.stringify(params.filter),
           // };

           // url = `${apiUrl}/${resource}/?${stringify(query)}`;
            url = `${apiUrl}/${params.parentId}/data/`;
           // console.log("GET LIST", url);
            break;
        }
        case GET_MANY_REFERENCE: {
           // console.log("Get Many REF ", params );
            url = `${apiUrl}/${params.id}/data/`;
            //console.log('URL: ', url)
            break;
        }
        case GET_ONE:
            //console.log("GET ONE! ", params);
            //GET using double-encoded id in order to escape % in the second run
            url = `${apiUrl}/${encodeURIComponent(encodeURIComponent(params.id))}/data/`;
            // console.log("GET ONE", url);
            break;
       
        default:
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }

    let headers;
    return fetch(url, options)
    .then(res => {
        headers = res.headers;
        return res.json();
    }).then(json => {
      // console.log("JSON ", json);
            //store etag directly in resource for update
            if (headers.has("ETag")) {
                json.etag = headers.get("ETag");
            }
           // console.log("TYPE: " , type);
            switch (type) {
                case GET_LIST:
                case GET_MANY_REFERENCE:
                  //  console.log("RESULT!!!", json);
                   // if (!headers.has('Content-Range')) {
                   //     throw new Error(
                   ///         'The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?'
                   //     );
                   // }
                //   console.log("RESULT ", json);
                                      
                    return {
                        data: json,
                        total: 1
                    };
                case CREATE:
                    return { data: { ...params.data, id: json.id } };
                default:{  
                   //console.log("RESULT ", json);
                   return { data: json };
                  }
            }
        });
};
