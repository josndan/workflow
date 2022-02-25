chrome.storage.sync.set({workflow: []}, function(){});

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		if(request.msg==="OptionClicked"){
			console.log(request.data);
			switch(request.data.option){
				case 1:
				break;

				case 2:
				chrome.tabs.create({url:"../html/create.html"});
				break;

				case 3:
				chrome.tabs.create({url:"../html/manage.html"});
				break;

				default:
				console.log("Undefined option")

			}
		}
		else if(request.msg === "submitted"){
			console.log(request);
			chrome.storage.sync.get(['workflow'], function(result) {
				console.log('Value currently is ' + result.workflow);
				result.workflow.push(request.data);
				chrome.storage.sync.set({workflow: result.workflow}, function() {
					console.log('Value is set to ' + result.workflow);
				});
			});
		}
		else if(request.msg === "sendManage"){
			chrome.storage.sync.get(['workflow'], function(result) {
				chrome.runtime.sendMessage({
					msg:"manage",
					data: result.workflow
				})
			})
		}
		else if(request.msg==="activate"){
			console.log("activate");
			for (u of request.data.url){
				chrome.tabs.create({url:"https://www."+u});
			}
		}
		else if(request.msg==="deleteWF"){
			console.log("deleteWF");
			console.log(request.data);
			chrome.storage.sync.get(['workflow'], function(result) {
				console.log('Value currently is ' + result.workflow);
				result.workflow = result.workflow.filter( (val)=> request.data.name !== val.name);
				chrome.storage.sync.set({workflow: result.workflow}, function() {
					console.log('Value is set to ' + result.workflow);
				});
			});
		}
	}
	);
