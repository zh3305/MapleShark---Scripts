function sub_B7C3F0(uFlag, a2) {
  var result; // eax@2
  if (a2 < 0x220)
  { result = (uFlag[a2 >> 5] >> (31 - (a2 & 0x1F))) & 1; }
  else
  { result = 0; }
  return result;
}
var mask = new Array(3);
mask[0] = 0x0;
mask[1] = 0x0;
mask[2] = 1073741824;
mask[3] = 0x0;
mask[4] = 0x0;
mask[5] = 0x0;
mask[6] = 0x0;
mask[7] = 0x0;
mask[8] = 0x0;
mask[9] = 0x0;
mask[10] = 0x0;
mask[11] = 0x0;
mask[12] = 0x0;
mask[13] = 0x4;
mask[14] = 0x0;
mask[15] = 0x0;
mask[16] = 0x0;


var str = "";
for (var index = 0; index < 0x220; index++) {
  if (sub_B7C3F0(mask, index)) {
    str = str + " " + index + " ";
    // console.log("-------" + index.toString(10) + "-------");
  }
}
// console.log(str);
//console.log(gethexind(0x1000, 5))
// pattern2 =/^(((-?\d+)(\.\d+)?)|0x[a-fA-F0-9]{1,8})$/igm
// console.log(pattern2.test("-1.0"))

// console.log("0x11".toString(10));
// console.log(parseInt("0xFF").toString(16).toUpperCase());



function gethexind(buffstat, firstStr) {
  if (buffstat > 2147483648) {
    return 0;
  }
  var value = 0;
  while (buffstat > 1) {
    buffstat /= 2;
    value++;
  }
  value = 31 - value;
  first = firstStr;
  value += first * 32;
  return value;
  // var Y = (Math.log(buffstat) / Math.log(2));
  // return (31 - Y) + (firstStr * 32)
}
function HashMap() {
  var size = 0;/** Map 大小 **/
  var entry = new Object();  /** 对象 **/
  /** 存 **/
  this.put = function (key, value) {
    if (!this.containsKey(key)) {
      size++;
    }
    entry[key] = value;
  }
  /** 取 **/
  this.get = function (key) {
    if (this.containsKey(key)) {
      return entry[key];
    }
    else {
      return null;
    }
  }

  /** 删除 **/
  this.remove = function (key) {
    if (delete entry[key]) {
      size--;
    }
  }

  /** 是否包含 Key **/
  this.containsKey = function (key) {
    return (key in entry);
  }

  /** 是否包含 Value **/
  this.containsValue = function (value) {
    for (var prop in entry) {
      if (entry[prop] == value) {
        return true;
      }
    }
    return false;
  }

  /** 所有 Value **/
  this.values = function () {
    var values = new Array(size);
    for (var prop in entry) {
      values.push(entry[prop]);
    }
    return values;
  }

  /** 所有 Key **/
  this.keys = function () {
    var keys = new Array(size);
    for (var prop in entry) {
      keys.push(prop);
    }
    return keys;
  }

  /** Map Size **/
  this.size = function () {
    return size;
  }
}

var map = new HashMap();

/*
map.put("A","1");
map.put("B","2");
map.put("A","5");
map.put("C","3");
map.put("A","4");
*/

/*
alert(map.containsKey("XX"));
alert(map.size());
alert(map.get("A"));
alert(map.get("XX"));
map.remove("A");
alert(map.size());
alert(map.get("A"));
*/

/** 同时也可以把对象作为 Key **/
/*
var arrayKey = new Array("1","2","3","4");
var arrayValue = new Array("A","B","C","D");
map.put(arrayKey,arrayValue);
var value = map.get(arrayKey);
for(var i = 0 ; i < value.length ; i++)
{
    //alert(value[i]);
}
*/
/** 把对象做为Key时 ，自动调用了该对象的 toString() 方法 其实最终还是以String对象为Key**/

/** 如果是自定义对象 那自己得重写 toString() 方法 否则 . 就是下面的结果 **/

//  function MyObject(name)
//  {
//      this.name = name;
//  }

/**
function MyObject(name)
{
    this.name = name;
     
    this.toString = function ()
    {
        return this.name;
    }
}
**/
//  var object1 = new MyObject("小张");
//  var object2 = new MyObject("小名");

//  map.put(object1,"小张");
//  map.put(object2,"小名");
//  alert(map.get(object1));
//  alert(map.get(object2));
//  alert(map.size());

/** 运行结果 小名 小名 size = 1 **/

/** 如果改成复写toString()方法的对象 , 效果就完全不一样了 **/


function operator(m_data) {
  v1 = 0;
  while (!m_data[v1]) {
    if (++v1 >= 14) {
      if (!m_data[14])
        return 0;
      return 1;
    }
  }
  return 1;
}
console.log(!(554100 % 10000))