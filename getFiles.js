$(document).ready(function() {
    $("button").click(function() {
        let i = 0;
        return function () {
            console.log(i);
            $.get("https://api.github.com/repos/MLuebbers/pensive/commits?path=./index.html", function(data, status) {
                console.log(data);
                if(i < data.length) {
                    $.ajax({
                        headers: {
                            Accept: "application/vnd.github.v3.raw"
                        },
                        data: "data",
                        method: "GET",
                        url: `https://api.github.com/repos/MLuebbers/pensive/contents/index.html?ref=${data[i].sha}`,
                
                        success: function(response) {
                            console.log(response);
                            $(`.frame:nth-of-type(${i+1})`).append(response);
                            i ++;
                        }
                    });
                }
            });
        };
    }()); 
});