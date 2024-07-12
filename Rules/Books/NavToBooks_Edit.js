export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/A/Services/Aurl.service').isDraftEnabled('Books')) {
        return clientAPI.executeAction({
            'Name': '/A/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Books'
                },
                'OnSuccess': '/A/Actions/Books/NavToBooks_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/A/Actions/Books/NavToBooks_Edit.action');
    }
}