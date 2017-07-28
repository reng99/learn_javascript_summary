var http = require("http"),
 cheerio = require("cheerio");//类似jquery


 var url = "http://www.kjzxfw.com/ia/guangdong/zcxx.html";

 function filterChapters(html){
     var $ = cheerio.load(html);
     var departments = $(".department_left_ul li");

    //  [{
    //      link:'',
    //      time:''
    //  }]
    var departmentsData = [];

    departments.each(function(item){
        var department = $(this);
        var link = department.find('a');
        var time = department.find('.time').text();

        var linkArea = link.find('em').text();
        var linkTitle = link.text().split(']')[1].trim();
        var linksData = linkArea + linkTitle;

        departmentsData.push({
            link : linksData,
            time : time
        })
    })
    return departmentsData;
 }

 function showMessage(departments){
    departments.forEach(function(item){
        console.log(item.link+"<->"+item.time+'\n');
    });
 }

 function start(){
     http.get(url,function(res){
         var html = '';
         res.on("data",function(data){
             html += data;
         })
            res.on("end",function(){
                var departments = filterChapters(html);
                showMessage(departments);
            })
     }).on("error",function(){
         console.log("error happen");
     })
 }

exports.start= start;