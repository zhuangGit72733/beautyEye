$(function () {
    $.get('http://myapp.home.test/api/types',
        function (data) {
            for (var i = 0; i < data.length; i++) {
                $('.top_type_list').append( "<div class='top_type_item'>" +
                    "<a href='search.html?type_id="+data[i].id+"'>" +
                    "<img src="+data[i].icon+" alt=''/>"+data[i].name+"" +
                    "</a>" +
                    "</div>")
            };
        });

    $.get('http://myapp.home.test/api/recommendedTypes',
        function (data) {
            for (var i = 0; i < data.length; i++) {
                    $('.pro_body').append(
                        "<div class='recommended_type'> " +
                        "<div class='recommended_type_title'>"+data[i].name+" " +
                        "<a href='search.html?recommend_id="+data[i].id+"'>" +
                        "<img src='images/more.jpg' alt=''>" +
                        "</a> " +
                        "</div> " +
                        "<div class='recommended_type_list'> " +
                        "<div class='recommended_type_item'>" +
                        "<a href='detail.html?product_id="+data[i].id+"'>" +
                        "<img src="+data[i].products[0].logo+" alt=''>" +
                        "</a>" +
                        "</div> " +
                        "<div class='recommended_type_item'>" +
                        "<a href='detail.html?product_id="+data[i].id+"'>" +
                        "<img src="+data[i].products[1].logo+" alt=''>" +
                        "</a>" +
                        "</div> " +
                        "<div class='recommended_type_item'>" +
                        "<a href='detail.html?product_id="+data[i].id+"'>" +
                        "<img src="+data[i].products[2].logo+" alt=''>" +
                        "</a>" +
                        "</div> " +
                        "</div> " +
                        "</div>")
                }
        });

});
