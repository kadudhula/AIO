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

function GetFriendsList(groupName) {

	var facebook = require('facebook');
	facebook.appid = "128937420636391";
	
	facebook.permissions = ['publish_stream', 'read_stream'];
	facebook.forceDialogAuth = true;
	facebook.requestWithGraphPath('me/friends', {
		'fields' : 'id,name,picture,username'
		//,'limit' : '30'
	}, 'GET', function(e) {
		if (e.success) {
		} else {
			if (e.error) {
				alert(e.error);
			} else {
				alert("Unknown result");
			}
		}
		var result = JSON.parse(e.result);
		result = result.data;

		var data = [];
		for (var c = 0; c < result.length; c++) {

			var row = result[c];

			var tvRow = Ti.UI.createTableViewRow({
				height : 20,
				width : '100%',
				selectedBackgroundColor : '#fff',
				backgroundColor : '#fff'
			});
			var imageView;
			imageView = Ti.UI.createImageView({
				image : row.picture === null ? '../images/custom_tableview/user.png' : row.picture.data.url,
				left : 10,
				width : 30,
				height : 30
			});

			tvRow.add(imageView);

			var usernameLabel = Ti.UI.createLabel({
				visible : false,
				text : row.username
			});
			tvRow.add(usernameLabel);

			var userLabel = Ti.UI.createLabel({
				font : {
					fontSize : 16,
					fontWeight : 'bold'
				},
				left : 70,
				right : 5,
				height : 20,
				width : '80%',
				color : '#576996',
				text : row.name
			});
			tvRow.add(userLabel);

			var checkbox = Ti.UI.createSwitch({
				style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
				title : "Sound Enabled",
				value : false,
				right : '10%'
			});

			tvRow.uid = row.uid;
			//tvRow.add(checkbox);

			data[c] = tvRow;
		}

		newGroupContactsTableView.setData(data, {
			animationStyle : Titanium.UI.iPhone.RowAnimationStyle.DOWN
		});
		groupsLabel.setText(groupName);
		Ti.App.Properties.setString('groupName', groupName);
		newtopBarView.add(groupsLabel);
		newtopBarView.add(addGroupContactsButton);
		newtopBarView.add(SaveGroupContactsButton);
		newgroupContactsListView.add(newGroupContactsTableView);

		newgroupContactsWindow.add(newtopBarView);
		newgroupContactsWindow.add(newgroupContactsListView);

		newgroupContactsWindow.open();
		newgroupContactsWindow.addEventListener('android:back', function() {
			
			require('groupsWindow');
			newgroupContactsWindow.close();
		});
	});
}