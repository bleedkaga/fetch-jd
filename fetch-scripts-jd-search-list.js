var data = [];
$(".gl-warp > li").each( (index, item) => {
    var scroll = [];
	data.push({
        img: $(item).find('.p-img img').prop('src'),
        link: $(item).find('.p-img a').prop('href'),
        scorll: (function(item){
            let sco = [];
            $(item).find('.p-scroll .ps-wrap .ps-item').each( (index, item) => {
                sco.push({
                    title: $(item).find('a').attr('title'),
                    img: $(item).find('img').prop('src')
                })
            })
            
            return sco
        })(item),
        title: $(item).find('.p-name em').text(),
        price: $(item).find('.p-price i').text(),
        comments: parseFloat($(item).find('.p-commit a').text()),
        shangjia: $(item).find('.p-shop .curr-shop').text(),
        type: ( function(item){
            let sco2 = [];
             $(item).find('.p-icons i').each( (index, items) => {
                sco2.push({
                    title: $(items).text(),
                    mtitle: $(items).data('tips')
                })
            })
            
            return sco2
        })(item)
	})
})

console.log(JSON.stringify(data))