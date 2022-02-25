let wfData={}

function clicked(x){
	return () => {
		chrome.runtime.sendMessage({
			msg:"OptionClicked",
			data:{
				option: x
			}
		});};
}

document.addEventListener('DOMContentLoaded',function(){
	document.getElementById("o1").addEventListener('click',() => display(wfData));
    document.getElementById("o2").addEventListener('click',clicked(2));
    document.getElementById("o3").addEventListener('click',clicked(3));

		chrome.runtime.sendMessage({
			msg:"sendManage",
			data:true
		})
})

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
    if(request.msg==="manage"){
      console.log(request.data);
			wfData= request.data;
    }
  });

function display(data){
	  console.log("From display" )
	  console.log(data)
	  let container = document.getElementById('container');
		container.innerHTML="";
		let clear =document.createElement("a");
		clear.href="";
		clear.setAttribute("id","clear");
		container.appendChild(clear);

	  for (let wf of data){
	    let div = document.createElement("div");
			div.appendChild(document.createTextNode(wf.name));
			div.setAttribute("class","options scale_in");
	    div.addEventListener("click",function(){
				chrome.runtime.sendMessage({
					msg:"activate",
					data:wf
				})
				clear.click();
	    });
	    container.appendChild(div);
	  }
	}
