import RepoDataProvider from './RepoDataProvider';
import ContentInformationProvider from './ContentInformationProvider';
import HealthDataProvider from './HealthDataProvider';

const dataProviders = [
    { dataProvider: RepoDataProvider, resources: ['dataresources'] },
    { dataProvider: ContentInformationProvider, resources: ['contentinformation'] },
    { dataProvider: HealthDataProvider, resources: ['health'] }
];

export default (type, resource, params) => {
    const dataProviderMapping = dataProviders.find(dp => dp.resources.includes(resource));
    //console.log(type, resource, params);
   // console.log(dataProviderMapping);
    return dataProviderMapping.dataProvider(type, resource, params);
};