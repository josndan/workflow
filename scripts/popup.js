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
	document.getElementById("o1").addEventListener('click',clicked(1));
    document.getElementById("o2").addEventListener('click',clicked(2));
    document.getElementById("o3").addEventListener('click',clicked(3));
})