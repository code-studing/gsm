function color(fontColor, bgColor, lable){
  document.querySelector('body').style.color=fontColor;
  document.querySelector('body').style.backgroundColor=bgColor;
  document.querySelector('#toggle').value = lable;
  var alist = document.querySelectorAll('a');
  var i = 0;
  while(i<alist.length){
    alist[i].style.color = fontColor;
    i = i + 1;
  }
}
