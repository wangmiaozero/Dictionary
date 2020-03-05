/* 
 *Types：dicttinaries
  * @ClassName: Dictionary
  * @Description: select value
  * @author: wangmiao
  * @Company: xxxx
  * @date: 2019-05-01 10:49**
*/
/* ==================
   仅供学习交流，如作它用所承受的法律责任一概与作者无关
   请注明基于 wangmiao
 ==================== */

/* 
  字典是一种以键-值对形式存储数据结构,比如:名字-电话号码,通过名字能找到对应的电话号码,名字就是键(key),电话号码就是值(value).
*/

function Dictionary(){
  this.datastore = new Object();
  /* 检查是否有某一个键 */
  this.has = function(key){
    return this.datastore.hasOwnProperty(key);
  }
}
Dictionary.prototype = {
  /* 修正constructor */
  constructor: Dictionary,
  /* 统计个数 */
  size: function(){
      return Object.keys(this.datastore).length;
  },
  /* 添加元素,给数组添加属性 */
  add: function(key, value){
    return this.datastore[key] = value;
  },
  /* 查找指定key的元素 */
  find: function(key){
      return this.has(key)?this.datastore[key]:undefined;
  },
  /* 移除指定key的元素 */
  remove: function(key){
    if(this.has(key)){
      delete this.datastore[key];
      return true;
    }
    return false;
  },
  /* 清空字典 */
  clear: function(){
   return this.datastore = new Object();
  },
  /* 显示所有的键值对 */
  showAll: function(){
      return this.datastore;
  },
  /* 返回字典中的所有值 */
  list: function(){
    let list = new Array()
    for(var key in this.datastore){
      if(this.has(key)){
        list.push(this.datastore[key])
      }
    }
    return list;
  },
  /* 获取字典所有的键 */
  getKeys:function(){
    return Object.keys(this.datastore);
  }
};
/* 排序-1 */
Dictionary.prototype.sort = function(){
  let data = new Dictionary()
  let keys = Object.keys(this.datastore).sort();
  for(var i = 0,len = keys.length; i < len; i++){
    let key = keys[i];
    data.add(key,this.find(key))
  }
  return data
}
/* 排序-2 */
Dictionary.prototype.sortAB = function(){
  let data = new Dictionary()
  let keys = Object.keys(this.datastore).sort(function(a,b){ return a-b; });
  for(var i = 0,len = keys.length; i < len; i++){
    let key = keys[i];
    data.add(key,this.find(key))
  }
  return data
}