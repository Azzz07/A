export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/A/Services/Aurl.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/A/Actions/Books/Books_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/A/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Books'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/A/Actions/Books/Books_UpdateEntity.action');
    }
}