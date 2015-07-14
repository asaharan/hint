// var words=['Amit','Saharan','Techkriti','IITK','Ranju','Kularia','Snaya','Kiran','Arpita','Mallik','Aishwarya','Who','Am','I','You','Can','Do'];
var lwords=[];
var count=0;
var prevQuery='';
function refresh(query){
	// console.log(value);
	localBouncedCount=0;
	if(prevQuery==query){
		return;
	}
	prevQuery=query;
	gethints(query.toLowerCase());
	sethints();
}
var hints=[];
function gethints(query){
	if(count==0){
		lowerthem();
	}
	count++;
	hints=[];
	if(lwords.indexOf(query)==1){
		var topush=[];
		topush['p']=1;
		topush['w']=query;
		hints.push(topush);
	}
	for(var i=0;i<lwords.length;i++){
		var topush=[];
		topush['p']=percent(query,lwords[i]);
		topush['w']=words[i];
		hints.push(topush);
	}
	// console.log(hints);
	hints.sort(function(a,b){
		return b.p - a.p;
	})
	return hints;
}
function sethints(){
	$('.hints').html('');
	for (var i = 0; i < hints.length && i < 10; i++) {
		// console.log(hints[i]);
		$('.hints').html($('.hints').html()+'<span>'+hints[i].w+'</span>')
	};
	bouncedCount+=localBouncedCount;
	$('.process').text(bouncedCount+', '+localBouncedCount);
}
var localBouncedCount,bouncedCount=0;
function percent(of,into){
	var matchedCount=0;
	for(var i=0;i<of.length;i++){
		localBouncedCount++;
		if(into.indexOf(of.charAt(i))>-1){
			matchedCount++;
		}
	}
	var probability=matchedCount*2/(of.length+into.length);
	// console.log('searching '+of+' into '+into+' and '+matchedCount+' chars matched,'+'probability is '+probability);
	return probability;
}
function lowerthem(){
	for(var i=0;i<words.length;i++){
		lwords.push(words[i].toLowerCase());
	}
}