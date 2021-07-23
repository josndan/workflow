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
				break;

				default:
				console.log("Undefined option")

			}
		}
	}
	);