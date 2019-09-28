$(function () {
    var getId=GetRequest();
    var product_id= getId['product_id'];
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
    $.get('  http://myapp.home.test/api/showProduct?product_id='+product_id,
        function (data) {
                $('.main').append(
                    "<div class='banner_list'> <img src="+data.logo+" alt=''></div>" +
                    " <div class='product_text'>"+data.name+"</div>" +
                    "<div class='product_price'>售价:¥"+data.price+"</div>" +
                    "<div class='product_show'>截图联系店家,立享折扣优惠</div>");

        });

});
