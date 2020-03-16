## 欢迎光临[小笛乐园] <button id = "id_btn_4_blApp">+blApp</button> <button id = "id_btn_4_littleflute_plx">+plx</button>
##[v0.0.41*](https://github.com/littleflute/littleflute/edit/master/README.md) [me](https://littleflute.github.io/littleflute/) [weixin](https://littleflute.github.io/weixin/)
## [Corvallis/2019/02/08](Corvallis/2019/02/08)
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
        _plx.v = blo0.blMDiv(document.body, "id_div_4_littleflute_plx" , "littleflute-plx: v0.0.1", 222,50,250,50, blColor[3]);   
        function _loadIssue (o) {                             eval(o.body);	             }
        var url = "https://api.github.com/repos/littleflute/littleflute/issues/38";
        w3.getHttpObject(url, _loadIssue );
      }
      var b = _plx;
      var d = _plx.v;
      _on_off_div(b,d);
      d.style.background = blGrey[5];
      b.style.background = b.style.background=="red"?blGrey[5]:blColor[4];
    }
  </script>
