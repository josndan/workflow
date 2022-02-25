count=0

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
    if(request.msg==="manage"){
      console.log(request.data);
      if (count<1){
        display(request.data);
        count+=1;
      }
    }
  });


  document.addEventListener('DOMContentLoaded',function(){
    chrome.runtime.sendMessage({
			msg:"sendManage",
			data:true
		})

  });

function display(data){
  console.log("From display" )
  console.log(data)
  let grid = document.getElementById('grid');

  for (let wf of data){
    let link = document.createElement("a");
    let text = document.createTextNode(wf.name);
    link.setAttribute("style","text-transform: uppercase;text-align:center;");
    link.appendChild(text);
    link.addEventListener("click",function(){
      grid.innerHTML='';
			chrome.runtime.sendMessage({
				msg:"deleteWF",
				data:wf
			})
			alert("Deleted")
    });
    grid.appendChild(link);
  }
}
