(function(){
  var d='tarahako.com'
      ,t=document.title.replace(' – たらハコ','')
      ,h=location.href.replace(/\?.*$/,'')
      ,b=''
      ,ctag=''
      ,s;
      if(h.indexOf(d)<0){
        b=' target="_blank"';
      }
  ctag='<li><a href="'+h+'"'+b+'>'+t+'</a></li>';
  s=prompt('atag',ctag);
})();