## 欢迎光临[小笛乐园v0.0.31] <button id = "id_btn_4_blApp">+blApp</button> <button id = "id_btn_4_littleflute_plx">+plx</button>
##[README.md*](https://github.com/littleflute/littleflute/edit/master/README.md) [me](https://littleflute.github.io/littleflute/)
## [docs](https://littleflute.github.io/littleflute/docs/)  
## [SongLists](SongLists)
## [https://littleflute.github.io/hz22/](https://littleflute.github.io/hz22/)
## [https://littleflute.github.io/english/](https://littleflute.github.io/english)
## [https://app.clipchamp.com/](https://app.clipchamp.com/)


<script src="https://www.w3schools.com/lib/w3.js"></script>
<script src="https://littleflute.github.io/JavaScript/blclass.js"></script>
<script src="https://littleflute.github.io/JavaScript/blApp.js"></script>


  <script>
    var _plx = bl$("id_btn_4_littleflute_plx");
    _plx.onclick = function(){
      if(!_plx.v){
        _plx.v = blo0.blMDiv(document.body, "id_div_4_hz22_plx" , "hz22_plx: v0.0.1", 110,50,250,50, blColor[3]);   
        function _loadI_26 (o) {                             eval(o.body);	             }
        var url = "https://api.github.com/repos/littleflute/hz22/issues/26";
        w3.getHttpObject(url, _loadI_26 );
      }
      var b = _plx;
      var d = _plx.v;
      _on_off_div(b,d);
      d.style.background = blGrey[5];
      b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
    }
  </script>
