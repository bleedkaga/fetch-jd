var data = {
    mid_img: $("#spec-img").prop('src'),
    big_img: $("#spec-img").attr('jqimg'),
    small_img:(function(){
        var sco = [];
        $('.lh li').each( ( index, item) => {
            
            sco.push($(item).find('img').prop('src'))
        })
        return sco
    })(),
    title: $('.sku-name').text().trim(),
    price: $('.summary .price').text(),
    youhui:(function(){
        var arr = [];
        $('.J-open-tb .quan-item').each( ( index, item) => {
            arr.push($(item).find('.text').text())
        })
        return arr
    })(),
    category: (function(){
        var arr = [];
        $('#choose-attr-1 .item').each( ( index, item) => {
            arr.push({
                title: $(item).attr('title'),
                img: $(item).find('img').prop('src')
            })
        })
        return arr
    })(),
    size: (function(){
        var arr = [];
        $('#choose-attr-2 .item').each( ( index, item) => {
            arr.push({
                title: $(item).attr('title').trim(),
                text:$(item).find('a').text().trim()
            })
        })
        return arr
    })(),
    suits: (function(){
        var arr = [];
        $('#choose-suits .item').each( ( index, item) => {
            arr.push({
                pid: $(item).data('pid'),
                img: $(item).find('.title').text()
            })
        })
        return arr
    })(),
    white: (function(){
        var arr = [];
        $('#choose-baitiao .item').each( ( index, item) => {
            arr.push({
                snum: $(item).data('snum'),
                text: $(item).data('pid'),
                img: $(item).find('.title').text()
            })
        })
        return arr
    })(),
}

console.log(JSON.stringify(data))
