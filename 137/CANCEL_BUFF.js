
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
map.put(0x225c9ec,496); 
map.put(0x225c590,64); //t
map.put(0x225c5e0,73); 
map.put(0x225c630,85); 
map.put(0x225c680,87); 
map.put(0x225c6d0,88); 
map.put(0x225c720,104); 
map.put(0x225c770,90); 
map.put(0x225c7c0,94); //t
map.put(0x225ccb0,490); 
map.put(0x225cc60,491); 
map.put(0x225cd50,133); 
map.put(0x225cda0,134); 
map.put(0x225cdf0,190); 
map.put(0x225ce40,226); 
map.put(0x225ce90,11); 
map.put(0x225cee0,10); 
map.put(0x225cf30,235); 
map.put(0x225cd00,489); 
map.put(0x225cf80,160); 
map.put(0x225cfd0,244); 
map.put(0x225d020,245); 
map.put(0x225d070,246); 
map.put(0x225d0c0,259); 
map.put(0x225d110,269); 
map.put(0x225d160,184);
map.put(0x225d1b0,309); 
map.put(0x225d200,341); 
map.put(0x225d250,344); 
map.put(0x225d2a0,142); 
map.put(0x225d2f0,368); 
map.put(0x225d340,478); 
map.put(0x225ca80,497); 
map.put(0x225d390,404); 
map.put(0x225d3e0,406); 
map.put(0x225d430,270); 
map.put(0x225d480,49); 
map.put(0x225d4d0,48);
mplew.StartNode("mask");
var mask = Array();
writeMaskFromList(mask, 0x44);
mplew.EndNode(false);
function writeMaskFromList(mask, len) {
  var MAX_MOBSTAT = parseInt(len / 4);
  for (var i = 0; i < MAX_MOBSTAT; i++) {
    mask[i] = mplew.writeInt("mask[(" + i + ")]");
  }
}
for (var index = 0; index < 0x220; index++) {
  if (sub_B7C3F0(mask, index)) {
   // str = str + " " + index + " ";
   mplew.AddComment("--- Buff " + index.toString(10) + "---");
    // console.log("-------" + index.toString(10) + "-------");
  }
}
sub_E86220(mask)

for (var index = 0; index < 0x220; index++) {
  if (sub_B7C3F0(mask, index)) {
    if(sub_E60680(mask))
    {
      mplew.write("isMoveStat  "+index,0)
    }
  }
}



function sub_B7C3F0(uFlag, a2) {
  var result; // eax@2
  if (a2 < 0x220)
  { result = (uFlag[a2 >> 5] >> (31 - (a2 & 0x1F))) & 1; }
  else
  { result = 0; }
  return result;
}
function sub_E86220(mask/*  */) {
  v3 = 0;
  // v4 = Data;
  for ( i = 0; ; i += 40 )
  {
    result=true;
    if ( !result || v3 >=50 )
      break;
    if (maskbufftest(mask, v3))
    {
    mplew.StartNode(" Stack buff  "+v3  );
      sub_E84E80();
    mplew.EndNode(false);
    }
    ++v3;
  }
}
function maskbufftest(buff, mask)
{
  var result = 0; // eax@2
  if (mask < 0x220)
    result = (buff[mask >> 5] >> (31 - (mask & 0x1F))) & 1;
  return result;
}

function sub_E84E80(/*  */) {
  v5 = mplew.writeInt("buffs.size()");
  v6 = v5;
  if (v6 > 0) {
    v47 = v6;
    do {
      mplew.StartNode("Stack buff " + v47);
      v49 = mplew.writeInt("getSkillId");
      v50 = mplew.writeInt("getBuffStatValueHolder().value");
      v59 = mplew.writeInt("currentTime");
      v9 = mplew.writeInt("ctime");
      v75 = mplew.writeInt("getBuffStatValueHolder().localDuration");
      v11 = mplew.writeInt("nuk Size");
      if (v11 > 0) {
        do {
          mplew.StartNode("nuk data " + v47);
          v73 = mplew.writeInt("v73");
          v76 = mplew.writeInt("v76");
          --v11;
          mplew.EndNode(false);
        }
        while (v11);
      }
      mplew.EndNode(false);
      --v47;
    }
    while (v47);
  }
  return
}

var acc=0;
function sub_E60680 (mask)
{
  var value1=false;
  if ( !(acc & 1) )
  {
    acc = 1;
  value1=(Check_Buff(mask,0x225C9EC )
  ||Check_Buff(mask, 0x225C590)
  ||Check_Buff(mask, 0x225C5E0)
  ||Check_Buff(mask, 0x225C630)
  ||Check_Buff(mask, 0x225C680)
  ||Check_Buff(mask, 0x225C6D0)
  ||Check_Buff(mask, 0x225C720)
  ||Check_Buff(mask, 0x225C770)
  ||Check_Buff(mask, 0x225C7C0)
  ||Check_Buff(mask, 0x225CCB0)
  ||Check_Buff(mask, 0x225CC60)
  ||Check_Buff(mask, 0x225CD50)
  ||Check_Buff(mask, 0x225CDA0)
  ||Check_Buff(mask, 0x225CDF0)
  ||Check_Buff(mask, 0x225CE40)
  ||Check_Buff(mask, 0x225CE90)
  ||Check_Buff(mask, 0x225CEE0)
  ||Check_Buff(mask, 0x225CF30)
  ||Check_Buff(mask, 0x225CD00)
  ||Check_Buff(mask, 0x225CF80)
  ||Check_Buff(mask, 0x225CFD0)
  ||Check_Buff(mask, 0x225D020)
  ||Check_Buff(mask, 0x225D070)
  ||Check_Buff(mask, 0x225D0C0)
  ||Check_Buff(mask, 0x225D110)
  ||Check_Buff(mask, 0x225D160)
  ||Check_Buff(mask, 0x225D1B0)
  ||Check_Buff(mask, 0x225D200)
  ||Check_Buff(mask, 0x225D250)
  ||Check_Buff(mask, 0x225D2A0)
  ||Check_Buff(mask, 0x225D2F0)
  ||Check_Buff(mask, 0x225D340)
  ||Check_Buff(mask, 0x225CA80)
  ||Check_Buff(mask, 0x225D390)
  ||Check_Buff(mask, 0x225D3E0)
  ||Check_Buff(mask, 0x225D430)
  ||Check_Buff(mask, 0x225D480)
  ||Check_Buff(mask, 0x225D4D0))
  }
  return value1;
}
function Check_Buff(mask, Key) {
  return sub_B7C3F0(mask, map.get(Key))
}
function sub_B7C3F0(uFlag, a2) {
  var result; // eax@2
  if (a2 < 0x220) {
    result = (uFlag[a2 >> 5] >> (31 - (a2 & 0x1F))) & 1;
  }
  else {
    result = 0;
  }
  return result;
}