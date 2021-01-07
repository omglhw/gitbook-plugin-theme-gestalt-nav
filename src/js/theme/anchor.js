/*
 * @Descripttion: 
 * @version: 
 * @Author: lihw02
 * @Date: 2021-01-04 16:27:31
 * @LastEditors: lihw02
 * @LastEditTime: 2021-01-07 18:56:10
 */
//生成内容导航
function generateSectionNavigator(){
    var $h = $(".page-inner .markdown-section").find("h1,h2,h3");
    $h.each(function(){
        var cls="anchor-h1";
        if($(this).is("h2")){
            cls="anchor-h2";
        }
        if($(this).is("h3")){
            cls="anchor-h3";
        }
        var text = $(this).text();
        var href = $(this).attr("id");
        $(".book-anchor-body").append("<a id='an_"+text+"' class='anchor-text "+cls+"' title='"+text+"'  href='#"+href+"'>"+text+"</a>")
    });

    
    if ($h.length === 0) {
        $('.book-anchor').hide();
    }

    $(".book-anchor-title").click(function () {
        // $(".book-anchor-body").toggle();
    });

    $(".book-anchor-body>a").click(function(){
        $(".book-anchor-body>a").removeClass("selected");
        $(this).addClass("selected");
    });

    //获取hash值定向到指定位置
    var hash = decodeURIComponent(location.hash);
    if(hash){
        hash = hash.substring(1);
        $("#an_"+hash).addClass("selected");
    }
    
}


module.exports = {
    init: generateSectionNavigator
};
