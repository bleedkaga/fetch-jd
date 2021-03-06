var request = require('request')
var fs = require('fs')

const imageList = [
  [
    { text: '景点', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224203170-1528315005.png' },
    { text: 'KTV', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224309185-1519181081.png' },
    { text: '购物', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224150045-30962603.png' },
    { text: '生活服务', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224237513-176380794.png' },
    { text: '美发', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224222123-643915682.png' },
    { text: '亲子', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224229451-475201730.png' },
    { text: '小吃快餐', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224244545-1583700011.png' },
    { text: '自助餐', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224113560-1012968440.png' },
    { text: '酒吧', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224210732-490953965.png' },
    { text: '美食', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224409107-2018112337.png' },
  ],
  [
    { text: '电影', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224033873-290248113.png' },
    { text: '酒店', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224051513-2057698989.png' },
    { text: '休闲娱乐', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224129076-2058206915.png' },
    { text: '生活服务', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224237513-176380794.png' },
    { text: '外卖', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224121920-424129491.png' },
    { text: '火锅', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224046342-1896393176.png' },
    { text: '丽人', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224057670-257626875.png' },
    { text: '度假出行', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224040842-2050913385.png' },
    { text: '足疗按摩', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224144060-1009120401.png' },
    { text: '周边游', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224138123-197921773.png' },
  ],
  [
    { text: '日本菜', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224354951-1102565687.png' },
    { text: 'SPA', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224419998-1442330810.png' },
    { text: '结婚', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224340545-213074048.png' },
    { text: '学习培训', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224415013-114294334.png' },
    { text: '西餐', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224409107-2018112337.png' },
    { text: '火车机票', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224323467-1926976043.png' },
    { text: '烧烤', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224402576-1611337354.png' },
    { text: '嫁妆', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224333185-1082315113.png' },
    { text: '宠物', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224315779-157132725.png' },
    { text: '全部分类', url: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161022224348467-646596364.png' },
  ]
]

let allList = [];
imageList.map((image, index) => {
  image.map((item, index) => {
    allList.push(item.url)
  })
})
console.log(allList)
// for (const url of allList) {
//   const name = url.slice(url.lastIndexOf('/') + 1)
//   request(url).pipe(fs.createWriteStream('./' + name));
// }