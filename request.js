const fs= require('fs')
const http = require('http');
const cheerio = require('cheerio')
const request = require('request')

let allList = [
    'https://img10.360buyimg.com/n7/jfs/t17383/125/1470478028/71155/1cb53bc2/5acc5248N6a5f81cd.jpg',
    'https://img14.360buyimg.com/n7/jfs/t19342/199/1516671468/71132/8e37293d/5acc524cN424bbaa0.jpg',
    'https://img13.360buyimg.com/n7/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg',
    'https://img10.360buyimg.com/n7/jfs/t277/193/1005339798/768456/29136988/542d0798N19d42ce3.jpg',
    'https://img14.360buyimg.com/n7/jfs/t3268/124/2646283367/114153/f5704b88/57e4a358N9ccc6645.jpg',
    'https://img14.360buyimg.com/n7/jfs/t20971/57/1137157097/363300/c8f6db7/5b20c6e4N91851410.jpg',
    'https://img11.360buyimg.com/n7/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg',
    'https://img11.360buyimg.com/n7/jfs/t21013/293/238596786/202257/e1d79e6b/5b053959Ne9dd2a53.jpg',
    'https://img12.360buyimg.com/n7/jfs/t3298/58/1622979569/120892/64989235/57d0d400Nfd249af4.jpg',
    'https://img12.360buyimg.com/n7/jfs/t3034/299/2060854617/119711/577e85cb/57d11b6cN1fd1194d.jpg',
    'https://img13.360buyimg.com/n7/jfs/t7318/349/3043564035/84322/3686a33a/59b8902cN3c5f8b20.jpg',
    'https://img11.360buyimg.com/n7/jfs/t10255/301/1203045537/393913/8e905560/59ddf3dbN70752707.jpg',
    'https://img11.360buyimg.com/n7/jfs/t8458/133/243433621/192676/99053ad8/59a3e38fN548981f3.jpg',
    'https://img11.360buyimg.com/n7/jfs/t3049/326/4875061308/594623/37c45385/585a2bb3N7e2b13a0.jpg',
    'https://img12.360buyimg.com/n7/jfs/t10198/341/2049136605/181101/89253dbc/59ec3325N906f107e.jpg',
    'https://img12.360buyimg.com/n7/jfs/t18598/217/1852364317/241972/19c9ec63/5adac3daNd0a62b44.jpg',
    'https://img11.360buyimg.com/n7/jfs/t8950/138/883869469/83344/71a76e82/59b8c2b7Ncf9f8759.jpg',
    'https://img11.360buyimg.com/n7/jfs/t10246/79/382654964/320569/45768bfc/59cdf9ebNbba2edac.jpg',
    'https://img12.360buyimg.com/n7/jfs/t10171/45/2516117655/281637/4283887d/59f8519dN09f49351.jpg',
    'https://img11.360buyimg.com/n7/jfs/t13240/53/1964459654/113177/9be1675b/5a4619f5Na920f0eb.jpg',
    'https://img12.360buyimg.com/n7/jfs/t17368/92/2298447846/324453/407f7da3/5aefccd2N07e234c4.jpg',
    'https://img13.360buyimg.com/n7/jfs/t19627/118/2004920915/84537/bf5dd880/5ae09da7N491612ce.jpg',
    'https://img14.360buyimg.com/n7/jfs/t8860/181/1372526464/83344/71a76e82/59b89d2dNfdf1a998.jpg',
    'https://img11.360buyimg.com/n7/jfs/t17554/150/1452033602/249507/8e864df7/5acb27d6N4e8e5ff5.jpg',
    'https://img13.360buyimg.com/n7/jfs/t14242/164/1556047231/88476/7e240d09/5a51e984N6b3bc1a9.jpg',
    'https://img14.360buyimg.com/n7/jfs/t16678/175/2051124699/253238/15ed505d/5ae30e6eNfc156826.jpg',
    'https://img12.360buyimg.com/n7/jfs/t16186/216/173577391/76503/a26f7740/5a2a2ec9N1376f6b6.jpg',
    'https://img13.360buyimg.com/n7/jfs/t7435/269/816277966/87349/53691158/59975950Ndd28d7a8.jpg',
    'https://img12.360buyimg.com/n7/jfs/t10087/129/1668416126/235377/49646d5f/59e48897N6c5eb343.jpg',
    'https://img11.360buyimg.com/n7/jfs/t18673/308/839272329/282657/7ef00010/5aab3af5N3c01c195.jpg',
    'https://img14.360buyimg.com/n7/jfs/t13510/258/1501777162/77225/c83f3f1/5a20dc9cNe422ac67.jpg',
    'https://img12.360buyimg.com/n7/jfs/t12262/297/2623201618/81785/4adec70f/5a45ff62N4210b538.jpg',
    'https://img13.360buyimg.com/n7/jfs/t2620/26/4311962520/75463/825a2fec/57b28863Nacf89b01.jpg',
    'https://img13.360buyimg.com/n7/jfs/t8524/43/1363529437/87978/2d80837b/59b89d6bNd11b5fe8.jpg',
    'https://img11.360buyimg.com/n7/jfs/t9880/177/333364654/245675/56d9062a/59cc88c9Ncdc29e48.jpg',
    'https://img10.360buyimg.com/n7/jfs/t19138/122/1717416644/196357/ed4a540e/5ad58d89Ncaabf413.jpg',
    'https://img10.360buyimg.com/n7/jfs/t21274/159/1051800455/244964/80a3fbdd/5b1e7703N7afdc2df.jpg',
    'https://img13.360buyimg.com/n7/jfs/t4207/264/2597855607/93150/de996dc0/58d39a3aN2fdfa901.jpg',
    'https://img10.360buyimg.com/n7/jfs/t17005/6/592656995/66580/c24d7fe0/5a989f8fN274728d1.jpg',
    'https://img13.360buyimg.com/n7/jfs/t12352/88/127708421/67468/90baaf73/5a04172aN29f845bf.jpg',
    'https://img12.360buyimg.com/n7/jfs/t12532/90/2141355633/130727/a5f4ef2c/5a324cd1Nb0e38f30.jpg',
    'https://img12.360buyimg.com/n7/jfs/t3244/133/1862505358/77665/8338e400/57d50f21Naabeb513.jpg',
    'https://img13.360buyimg.com/n7/jfs/t9172/289/2254377395/275320/8fc5f69a/59c8a46fN52f21ec0.jpg',
    'https://img12.360buyimg.com/n7/jfs/t12349/254/2622250726/70806/decec0bb/5a45f82cN5c17b240.jpg',
    'https://img13.360buyimg.com/n7/jfs/t5674/56/3790413632/289754/dc0a957d/59437e6aNa87bdddf.jpg',
    'https://img10.360buyimg.com/n7/jfs/t3448/27/1001281942/96818/dda55698/581af181Nee668ef2.jpg',
    'https://img11.360buyimg.com/n7/jfs/t9736/130/2196424951/348309/9e6d671c/59f1a5e3Nf3aa9d8c.jpg',
    'https://img12.360buyimg.com/n7/jfs/t17296/128/1709564662/181586/d04a2e6f/5ad58ee4Ndc5b8919.jpg',
    'https://img10.360buyimg.com/n7/jfs/t10690/249/1626659345/69516/b3643998/59e4279aNff3d63ac.jpg',
    'https://img14.360buyimg.com/n7/jfs/t5995/277/6362230758/83828/a9b5fe31/59717548N4ba1bdf2.jpg',
    'https://img12.360buyimg.com/n7/jfs/t8755/265/1373043207/84322/3686a33a/59b8c305N63b991b2.jpg',
    'https://img13.360buyimg.com/n7/jfs/t13654/332/64051468/129076/dbcdea1e/5a02c564Na7dbca00.jpg',
    'https://img13.360buyimg.com/n7/jfs/t20905/26/1099518358/365052/95cd648/5b1ff767Ne89d8549.jpg',
    'https://img10.360buyimg.com/n7/jfs/t9295/130/1356734150/88476/7e240d09/59b88854N4b1d5cfc.jpg',
    'https://img13.360buyimg.com/n7/jfs/t9238/300/1456859242/166198/e101f2a2/59b9e379N8839d12b.jpg',
    'https://img12.360buyimg.com/n7/jfs/t15292/5/2063356587/246557/dcc015f9/5a69a6d9Nf3494305.jpg',
    'https://img11.360buyimg.com/n7/jfs/t5473/194/433600496/117186/65b42954/590006efN73a1346c.jpg',
    'https://img12.360buyimg.com/n7/jfs/t11803/275/748476635/88476/7e240d09/59f85426N0b821265.jpg',
    'https://img10.360buyimg.com/n7/jfs/t4660/166/2592558821/281637/4283887d/58f08525N7eb65e5a.jpg',
    'https://img13.360buyimg.com/n7/jfs/t15769/331/2485147221/205714/f7c8571f/5aaa0d35N102a893c.jpg'
]
if(!fs.existsSync('imgs')){
    fs.mkdirSync('imgs')
}
for (const url of allList) {
  const name = url.slice(url.lastIndexOf('/') + 1)
  request(url).pipe(fs.createWriteStream('imgs/'+ name));
}