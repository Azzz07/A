export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/A/Services/Aurl.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/A/Actions/Books/Books_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/A/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Books',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/A/Actions/Books/Books_CreateEntity.action');
    }
}