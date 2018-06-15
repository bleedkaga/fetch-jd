const cheerio = require('cheerio')
var text = `<li class="d-item" clstag="pageclick|keycount|BusinessIntelligence_35662878_31|0">            <div class="d-img-warp">              <a href="//item.jd.com/5782095.html" target="_blank">                <img class="" src="//img12.360buyimg.com/n2/jfs/t21097/12/589550487/154726/efae46a1/5b1162b4N2897b1ac.jpg">              </a>                          </div>                    <div class="d-wname">            <a href="//item.jd.com/5782095.html" target="_blank">              360手机 N6 Pro 全网通 6GB+64GB 极夜黑 移动联通电信4G手机 双卡双待 全面屏 游戏手机            </a>            </div>                    <div class="d-price">          <div class="d-now-price">            <span class="d-rmb">￥</span><!--          --><span class="J_nowPrice">1349</span><span class="promotion-discount">立省550</span>          </div>                    <div class="d-old-price">            <span class="d-rmb">￥</span><!--           --><span class="J_oldPrice">1899</span>          </div>                  </div>         <!-- 进行中 -->        <a href="//item.jd.com/5782095.html" class="d-btn" target="_blank">          去抢购        </a>                  </li>                    <li class="d-item" clstag="pageclick|keycount|BusinessIntelligence_35662878_32|0">            <div class="d-img-warp">              <a href="//item.jd.com/3989389.html" target="_blank">                <img class="" src="//img12.360buyimg.com/n2/jfs/t4687/112/548423108/598231/ee82085c/58d1617bN614200f1.jpg">              </a>                          </div>                    <div class="d-wname">            <a href="//item.jd.com/3989389.html" target="_blank">              Apple iPad 平板电脑 9.7英寸（32G WLAN版/A9 芯片/Retina显示屏/Touch ID技术 MP2G            </a>            </div>                    <div class="d-price">          <div class="d-now-price">            <span class="d-rmb">￥</span><!--          --><span class="J_nowPrice">2088</span><span class="promotion-discount">立省600</span>          </div>                    <div class="d-old-price">            <span class="d-rmb">￥</span><!--           --><span class="J_oldPrice">2688</span>          </div>                  </div>         <!-- 进行中 -->        <a href="//item.jd.com/3989389.html" class="d-btn" target="_blank">          去抢购        </a>                  </li>                    <li class="d-item" clstag="pageclick|keycount|BusinessIntelligence_35662878_33|0">            <div class="d-img-warp">              <a href="//item.jd.com/3161570.html" target="_blank">                <img class="" src="//img12.360buyimg.com/n2/jfs/t21826/28/632112422/141846/a1337754/5b13b180N7c6703b9.jpg">              </a>                          </div>                    <div class="d-wname">            <a href="//item.jd.com/3161570.html" target="_blank">              格力（GREE）3匹 定频 i酷 冷暖圆柱柜机空调 KFR-72LW/(72551)NhAa-3            </a>            </div>                    <div class="d-price">          <div class="d-now-price">            <span class="d-rmb">￥</span><!--          --><span class="J_nowPrice">6199</span><span class="promotion-discount">立省1300</span>          </div>                    <div class="d-old-price">            <span class="d-rmb">￥</span><!--           --><span class="J_oldPrice">7499</span>          </div>                  </div>         <!-- 进行中 -->        <a href="//item.jd.com/3161570.html" class="d-btn" target="_blank">          去抢购        </a>                  </li>                    <li class="d-item" clstag="pageclick|keycount|BusinessIntelligence_35662878_34|0">            <div class="d-img-warp">              <a href="//item.jd.com/1089807.html" target="_blank">                <img class="" src="//img12.360buyimg.com/n2/jfs/t17353/351/2037214723/146436/26f27461/5ae2e39dNcb2b7780.jpg">              </a>                          </div>                    <div class="d-wname">            <a href="//item.jd.com/1089807.html" target="_blank">              蒙牛 纯甄 常温酸牛奶 200g*12 礼盒装            </a>            </div>                    <div class="d-price">          <div class="d-now-price">            <span class="d-rmb">￥</span><!--          --><span class="J_nowPrice">49.89</span><span class="promotion-discount">立省20</span>          </div>                    <div class="d-old-price">            <span class="d-rmb">￥</span><!--           --><span class="J_oldPrice">69.4</span>          </div>                  </div>         <!-- 进行中 -->        <a href="//item.jd.com/1089807.html" class="d-btn" target="_blank">          去抢购        </a>                  </li>                    <li class="d-item" clstag="pageclick|keycount|BusinessIntelligence_35662878_35|0">            <div class="d-img-warp">              <a href="//item.jd.com/3166589.html" target="_blank">                <img class="" src="//img12.360buyimg.com/n2/jfs/t16744/364/2016377696/342848/c897ce64/5ae29d8dN4487d078.jpg">              </a>                          </div>                    <div class="d-wname">            <a href="//item.jd.com/3166589.html" target="_blank">              清扬(CLEAR)洗发水 男士去屑洗发露清爽控油型500g(新老包装随机发)            </a>            </div>                    <div class="d-price">          <div class="d-now-price">            <span class="d-rmb">￥</span><!--          --><span class="J_nowPrice">33.8</span><span class="promotion-discount">立省46</span>          </div>                    <div class="d-old-price">            <span class="d-rmb">￥</span><!--           --><span class="J_oldPrice">79.9</span>          </div>                  </div>         <!-- 进行中 -->        <a href="//item.jd.com/3166589.html" class="d-btn" target="_blank">          去抢购        </a>                  </li>    `
let $ = cheerio.load(text);
const fs = require('fs')


let data = [];
$('.d-item').each( (index, item) => {
    data.push({
        img: $(item).find('img').prop('src'),
        title: $(item).find('.d-wname').text().trim(),
        price: $(item).find('.J_nowPrice').text(),
        sheng: $(item).find('.promotion-discount').text(),
        oldPrice: $(item).find('.J_oldPrice').text(),
    })
})

fs.writeFile('2.json', JSON.stringify(data))
