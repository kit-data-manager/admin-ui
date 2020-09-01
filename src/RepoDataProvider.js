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

import { stringify } from 'query-string';
import {
    GET_LIST,
    GET_ONE,
    CREATE,
    UPDATE,
    DELETE
} from 'react-admin';

const apiUrl = process.env.API_URL;

//const apiUrl = 'http://episteme2.scc.kit.edu:8080/api/v1';

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
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }),
    };
    switch (type) {
        case GET_LIST: {
            const { page, perPage } = params.pagination;
            const { field, order } = params.sort;
            //console.log("SORT ", field);
            const query = {
                page: JSON.stringify(page-1),
                size: JSON.stringify(perPage),
                sort: field + ',' + order,
            };

           // console.log("GET LIST ", query);
            url = `${apiUrl}/${resource}/?${stringify(query)}`;
            //console.log("GET LIST ", url);
           //url = `${apiUrl}/${resource}/`;
            break;
        }
        case GET_ONE:
            //GET using double-encoded id in order to escape % in the second run
            url = `${apiUrl}/${resource}/${encodeURIComponent(encodeURIComponent(params.id))}`;
            break;
        case CREATE:
            url = `${apiUrl}/${resource}`;
            options.method = 'POST';
            options.body = JSON.stringify(params.data);
            break;
        case UPDATE:
            url = `${apiUrl}/${resource}/${params.id}`;
            options.method = 'PUT';
            //use etag from resource and add IF-MATCH header
            options.headers.set("IF-MATCH", params.data.etag);
            options.body = JSON.stringify(params.data);
            break;
        case DELETE:
            //use etag from resource and add IF-MATCH header
            options.headers.set("IF-MATCH", params.data.etag);
            url = `${apiUrl}/${resource}/${params.id}`;
            options.method = 'DELETE';
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
            //store etag directly in resource for update
            if (headers.has("ETag")) {
                json.etag = headers.get("ETag");
            }

            switch (type) {
                case GET_LIST:
                    if (!headers.has('Content-Range')) {
                        throw new Error(
                            'The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?'
                        );
                    }
                    return {
                        data: json,
                        total: parseInt(
                            headers
                                .get('content-range')
                                .split('/')
                                .pop(),
                            10
                        ),
                    };
                case CREATE:
                    return { data: { ...params.data, id: json.id } };
                default:{
                   return { data: json };
                  }
            }
        });
};
