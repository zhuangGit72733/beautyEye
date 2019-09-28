$(function () {

    var getId=GetRequest();
    var recommend_id= getId['recommend_id'];
    var type_id= getId['type_id'];
    function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("?");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    if (recommend_id!=null){
        $.get('http://myapp.home.test/api/recommendProducts?recommend_id='+recommend_id,
            function (data) {
                if (data.err==1){
                    $('.null_product').show();
                } else {
                    $('.null_product').hide();
                    for (var i = 0; i < data.length; i++) {
                        $('#product_list').append(
                            "<div class='product_item'>" + "<a href='detail.html?product_id="+data[i].id+"'>" +
                            "<img class='product_item_image' src="+data[i].logo+" />" +
                            "<div class='product_item_text'>"+data[i].name+"" +
                            "</div>" +
                            "<div class='product_item_price'>售价:¥"+data[i].price+"</div>" +
                            "</a></div>");
                    }
                }
            });
    }
    if (type_id!=null){
        $.get('http://myapp.home.test/api/typeProducts?type_id='+type_id,
            function (data) {
                if (data.err==1){
                    $('.null_product').show();
                } else {
                    $('.null_product').hide();
                    for (var i = 0; i < data.length; i++) {
                        $('#product_list').append(
                            "<div class='product_item'>" + "<a href='detail.html?product_id="+data[i].id+"'>" +
                            "<img class='product_item_image' src="+data[i].logo+" />" +
                            "<div class='product_item_text'>"+data[i].name+"" +
                            "</div>" +
                            "<div class='product_item_price'>售价:¥"+data[i].price+"</div>" +
                            "</a></div>");
                    }
                }
            });
    }
    $('.search_button').on('click',function () {
        var word=$('.search_input').val();
        $.get(' http://myapp.home.test/api/findProduct?word='+word,
            function (data) {
                var text = '';
                for (var i = 0; i < data.length; i++) {
                    text+=
                        "<div class='product_item'>" + "<a href='detail.html?product_id="+data[i].id+"'>" +
                        "<img class='product_item_image' src="+data[i].logo+" />" +
                        "<div class='product_item_text'>"+data[i].name+"" +
                        "</div>" +
                        "<div class='product_item_price'>售价:¥"+data[i].price+"</div>" +
                        "</a></div>";
                }
                document.getElementById("product_list").innerHTML=text;

            });
    })



});
