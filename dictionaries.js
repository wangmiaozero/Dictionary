/* 
 *Types：dicttinaries
  * @ClassName: ${type_name}
  * @Description: select value
  * @author: wangmiao
  * @Company: xxxx
  * @date: 2019-05-01 10:34**
*/
/* ==================
  仅供学习交流，如作它用所承受的法律责任一概与作者无关
   请注明基于 wangmiao
 ==================== */

/* 
  字典是一种以键-值对形式存储数据结构,比如:名字-电话号码,通过名字能找到对应的电话号码,名字就是键(key),电话号码就是值(value).
*/

var dic = { c:4, a:2, d:3,b:1};// 定义一个字典
for(var key in dic){
  console.log("key: " + key + " ,value: " + dic[key]);
  return 'key:' + key + 'value' + dic[key]
}
/*
 输出最初的字典元素
 key: c, value: 4
 key: a, value: 2
 key: d, value: 3
 key: b, value: 1
*/

var res = Object.keys(dic).sort(); 
for(var key in res){
    console.log("key: " + res[key] + " ,value: " + dic[res[key]]);
}

/*
 字典元素按key值排序
 key: a, value: 2
 key: b, value: 1
 key: c, value: 4
 key: d, value: 3
*/

var res2 = Object.keys(dic).sort(function(a,b){ return dic[a]-dic[b]; });
for(var key in res2){
    console.log("key: " + res2[key] + " ,value: " + dic[res2[key]]);
}

/*
 字典元素按value值排序
 key: b, value: 1
 key: a, value: 2
 key: d, value: 3
 key: c, value: 4
*/
