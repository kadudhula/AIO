function GetPhoneContacts() {
	var people = Ti.Contacts.getAllPeople();
	Ti.API.info('Total contacts: ' + people.length);
	for (var i = 0, ilen = people.length; i < ilen; i++) {
		var person = people[i];
		var createTableRow = Titanium.UI.createTableViewRow({
			title : person['fullName']
		});
		contactsData.push(createTableRow);
		groupContactsTableView.data = contactsData;
	}
}
