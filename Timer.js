function countDown(mins){
	var seconds =60;
	var minutes = mins;
	function tick(){
		var counter = document.getElementById('counter');
		var current_minutes =minutes -1;
		seconds--;
		counter.innerHTML = current_minutes.toString()+':'+(seconds<10? '0': '')+ String(seconds);
		if(seconds >= 0){
			setTimeout(tick,1000)

			}else{
				if (minutes>1) {
					countDown(minutes-1);
				}
			}
	}
	tick();
}
countDown(5);