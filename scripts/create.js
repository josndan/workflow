
document.addEventListener('DOMContentLoaded',function(){
	let addButton = document.getElementById('add_button');
	addButton.addEventListener("click",function(){
		let input = document.createElement("input");
		input.type="text";
		input.name="url";
		input.setAttribute("class","form_input url");
		document.getElementById('grid').appendChild(input);
	})

	form_handler();
});

function form_handler(){
	let form = document.forms[0];
	form.addEventListener('submit',function (event){
		let wf ={};
		let urls = form.elements['url'];
		wf.name = form.elements['name'].value;
		wf.url = new Array(urls.length)
		for (let i=0;i<urls.length;i++){
			wf.url[i] = urls[i].value;
		}
		console.log(wf);
		chrome.runtime.sendMessage({
			msg:"submitted",
			data:wf
		})
		alert("Submitted");
	})	
}