var a = 1; // Number, Integer
var b = 'one'; //string
alert(1+1);
if(prompt('password?') === '111111'){
	alert('주인님 안녕하세요? ^^');
} else {
	alert('뉘슈?');
}
var a = ['a','b','c'];
var i = 0;
while(i < a.length){
	document.write('<li>'+a[i]+'</li>');
	//i = i + 1;
	i++;
}
function sum(left, right){
	return left+right;
}
alert(sum(1,5));
email('a@a.com', sum(1,5))
