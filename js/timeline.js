$( document ).ready(function() {
	var data = {
	session: {startTime:1448904600, endTime:1448908200},
	students:[{id:67, name:'JaneDoe'},{id:89, name:'Mary'},{id:100, name:'John'}],
	teachers:[{id:1, name:'Mrs.Teacher'}],
	commands:
		[
			{
				timestamp:1448907300,// timestamp
				commandName:'Circle', // human readable command commandType:'lock', 
				commandType:'circle', // font awesome icon name without prefix
				createdBy:1, // teacher id
				sentTo:[67,89,100] //studentids
			},
			{
				timestamp:1448906400,// timestamp
				commandName:'Stop', // human readable command commandType:'lock', 
				commandType:'stop-circle-o', // font awesome icon name without prefix
				createdBy:1, // teacher id
				sentTo:[67,89,100] //studentids
			},
			{
				timestamp:1448905500,// timestamp
				commandName:'Check', // human readable command commandType:'lock', 
				commandType:'check', // font awesome icon name without prefix
				createdBy:1, // teacher id
				sentTo:[67,89,100] //studentids
			}
		]
	}

	function timestampConverter(timestamp) {
		var date = new Date(timestamp*1000);
		var time = date.getHours() + ':' + date.getMinutes();
		if (date.getHours() < 12) {
			time += " am"
		} else {
			time += " pm"
		}
		return time
	}

	function commandsList(data){
		var commandsArray = data.commands;
		var teachersArray = data.teachers;
		var studentsArray = data.students;
		var startSession = timestampConverter(data.session.startTime);
		var endSession = timestampConverter(data.session.endTime);
		var output = '<div class="item-wrapper"><div class="vertical-line"></div>' +
				'<li>' +
					'<div class="item" id="session-end">' + endSession + '</div>' +
					'<div class="item icon-container">' + '<i class="item-icon fa fa-circle-o fa-2x"></i>' + 
					'</div>' +
					'<div class="item session">Class session ended</div>' +
				'</li>' +
			  '</div>'
		commandsArray.forEach(function(elem) {
			var timeslot = timestampConverter(elem.timestamp);
			var commandName = elem.commandName;
			var commandType = elem.commandType;
		  var createdBy = elem.createdBy;
		  var sentToArray = elem.sentTo;
		  var studentNames = "";
		  for(var i = 0; i < studentsArray.length; i++) {
		  	var studentNamesArray = [];
		  	if (sentToArray.indexOf(studentsArray[i].id) === 0) {
		  		studentNamesArray.push(studentsArray[i].name)
		  	}
		  	studentNames += studentNamesArray.join("")
		  }
		  
		  output += 
		  '<div class="item-wrapper"><div class="vertical-line"></div>' +		  
		    '<li>' + 
		   	'<div class="item timeslot">' + timeslot + '</div>' +
		   	'<div class="item icon-container">' + '<i class="fa fa-' + commandType + ' fa-2x"' + '></i>' + '</div>' +
		   	'<div class="item description">' + '<div class="command-title">' + commandName + '</div>' +
		   	'<div class="command-subtitle">' + 'Sent by ' + createdBy + '</div>' +
		   	'<div class="command-title">' + 'Sent to ' + studentNames + ' students' + '</div>' +
		   	'<div class="command-subtitle">' + 'some names' + '</div>' +
		   '</li></div>' 
			})
		  var secondOutput = 
		  '<div class="item-wrapper">' +
				'<li>' +
					'<div class="item" id="session-end">' + startSession + '</div>' +
					'<div class="item icon-container">' + '<i class="item-icon fa fa-circle-o fa-2x"></i>' + 
					'</div>' +
					'<div class="item session">Class session started</div>' +
				'</li>' +
			  '</div>';
			output += secondOutput;
			console.log(output);
		  $("ul").html(output);
	}

  commandsList(data);
});




