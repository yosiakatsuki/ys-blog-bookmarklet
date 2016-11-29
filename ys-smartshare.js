(function(){
    var d='tarahako.com'
        ,t=document.title.replace(' – たらハコ','')
        ,h=location.href.replace(/\?.*$/,'')
        ,img=''
        ,cimg=''
        ,cbl=''
        ,ctag='';
        if(h.indexOf(d)>=0){
          img=document.getElementById('ys-first-img').getElementsByTagName('img')[0].src.replace(/http:\/\/.+\.wp\.com\//,'http://').replace(/\?.*$/,'').replace(/\.pagespeed.+$/,'').replace('.jpg','-150x150.jpg').replace('.png','-150x150.png');
          cimg='<a href="'+h+'"><img class="ys-share-img" src="'+img+'" alt="'+t+'" width=\"150\" height=\"150\" /></a>';
        } else {
          cimg='';
          cbl=' target="_blank"';
        }
        ctag='<div class="ys-share">'+cimg+'<a href="'+h+'"'+cbl+' >'+t+'</a></div>';
        s=prompt('tag',ctag);
  })();