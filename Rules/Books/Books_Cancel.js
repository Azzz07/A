export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/A/Services/Aurl.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/A/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Books'
                },
                'OnSuccess': '/A/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/A/Actions/CloseModalPage_Cancel.action');
    }
}