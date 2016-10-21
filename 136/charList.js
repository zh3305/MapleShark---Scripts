function isSeparatedSp(job) {
    return !is管理员(job) && !is林芝林(job) && !is皮卡啾(job);
}
function is管理员(job) {
    return job == 800 || job == 900 || job == 910;
}
function is林芝林(job) {
    return parseInt(job / 100) == 112 || job == 11000;
}
function is皮卡啾(job) {
    return parseInt(job / 100) == 131 || job == 13000;
}
var MapleJob = {

    is尖兵: function (job) {
        return parseInt(job / 100) == 36 || job == 3002;
    },
    is林芝林: function (job) {
        return parseInt(job / 100) == 112 || job == 11000;
    },
    is恶魔杀手: function (job) {
        return parseInt(job / 10) == 311 || job == 3100;
    },
    is恶魔复仇者: function (job) {
        return parseInt(job / 10) == 312 || job == 3101;
    },
    is恶魔: function (job) {
        return MapleJob.is恶魔杀手(job) || MapleJob.is恶魔复仇者(job) || job == 3001;
    },
    is神之子: function (job) {
        return job == 10000 || job == 10100 || job == 10110 || job == 10111 || job == 10112;
    },
};
var getJob;

ScriptAPI.AddByte("0");
ScriptAPI.AddString("normal");
ScriptAPI.AddByte("4");
ScriptAPI.AddLong("0");
ScriptAPI.AddLong("System.currentTimeMillis")
ScriptAPI.AddByte("0");
ScriptAPI.StartNode("charPos");
var CharPos = ScriptAPI.AddInt("charPos.size()");
for (i = 0; i < CharPos; i++) {
    ScriptAPI.AddInt("chr.getId()");
}
ScriptAPI.EndNode(true)//charPos

ScriptAPI.StartNode("addCharEntry");
var Charsize = ScriptAPI.AddByte("chars.size()");
for (var i = 0; i < Charsize; i++) {
    addCharEntry()
}
ScriptAPI.EndNode(true)//addCharEntry
ScriptAPI.AddShort("0");
ScriptAPI.AddByte("0  136+");
ScriptAPI.AddInt("0  136+");
ScriptAPI.AddInt("4");
ScriptAPI.AddInt("0");// 50级角色卡角色数量
ScriptAPI.AddInt("-1");
ScriptAPI.AddLong("PacketHelper.getTime(System.currentTimeMillis())");
ScriptAPI.AddByte("0");
ScriptAPI.AddByte("1");
ScriptAPI.AddInt("0");
var enableJobs = ScriptAPI.AddByte("JobConstants.enableJobs");
if (enableJobs) {
    ScriptAPI.AddByte("JobConstants.jobOrder");
    // for (LoginJob j : LoginJob.values()) {
    ScriptAPI.StartNode("显示可以创建的职业");
    for (var i = 0; i < 23; i++) {
        ScriptAPI.AddByte("j.enableCreate()");
        ScriptAPI.AddShort("1");
    }
    ScriptAPI.EndNode(true)//显示可以创建的职业
}



function addCharEntry() {
    addCharCreateStats();
    addCharLook()
    if (MapleJob.is神之子(getJob)) {
        addCharLook();
    }
    var ranking = ScriptAPI.AddByte("ranking ? 1 : 0");
    if (ranking) {
        ScriptAPI.AddInt("chr.getRank()");
        ScriptAPI.AddInt("chr.getRankMove()");
        ScriptAPI.AddInt("chr.getJobRank()");
        ScriptAPI.AddInt("chr.getJobRankMove()");
    }
}
function addCharLook() {
    ScriptAPI.StartNode("addCharLook");

    ScriptAPI.AddByte("second ? chr.getSecondGender() : chr.getGender()");
    ScriptAPI.AddByte("second ? chr.getSecondSkinColor() : chr.getSkinColor()");
    ScriptAPI.AddInt("second ? chr.getSecondFace() : chr.getFace()");
    ScriptAPI.AddInt("getJob");
    ScriptAPI.AddByte("mega ? 0 : 1");
    ScriptAPI.AddInt("second ? chr.getSecondHair() : chr.getHair()");

    ScriptAPI.StartNode("equip");
    var jsq = 1;
    while (ScriptAPI.DAddByte() != 0xff) {
        ScriptAPI.AddComment("equip " + jsq++);
        ScriptAPI.AddByte("((Byte) entry.getKey())");
        ScriptAPI.AddInt("((Integer) entry.getValue())");
    }

    jsq = 1;
    ScriptAPI.AddByte("FF");
    while (ScriptAPI.DAddByte() != 0xff) {
        ScriptAPI.AddComment("equip " + jsq++);
        ScriptAPI.AddByte("((Byte) entry.getKey())");
        ScriptAPI.AddInt("((Integer) entry.getValue())");
    }
    ScriptAPI.AddByte("FF");
    jsq = 1;
    // ScriptAPI.CWrite(ScriptAPI.DAddByte() != 0xff)
    // ScriptAPI.CWrite(ScriptAPI.DAddByte())
    while (ScriptAPI.DAddByte() != 0xff) {
        ScriptAPI.AddComment("equip " + jsq++);
        ScriptAPI.AddByte("((Byte) entry.getKey())");
        ScriptAPI.AddInt("((Integer) entry.getValue())");
    }
    ScriptAPI.AddByte("FF");

    ScriptAPI.EndNode(true)//equip

    // boolean zero = MapleJob.is神之子(getJob);
    // Integer cWeapon = equip.get(Byte.valueOf((byte) - 111));
    // Integer Weapon = equip.get(Byte.valueOf((byte) - 11));
    // Integer Shield = equip.get(Byte.valueOf((byte) - 10));

    ScriptAPI.AddInt("cWeapon != null ? cWeapon : 0");
    ScriptAPI.AddInt("Weapon != null ? Weapon : 0");
    ScriptAPI.AddInt("!zero && Shield != null ? Shield : 0");// 盾
    ScriptAPI.AddByte("!MapleJob.is双弩精灵(getJob) ? chr.getElf() : chr.getElf() == 0 ? 1 : 0");// 精灵耳朵
    ScriptAPI.AddInt("0 宠物[1]"); // 宠物[1]
    ScriptAPI.AddInt("0 宠物[2]"); // 宠物[2]
    ScriptAPI.AddInt("0 宠物[3]"); // 宠物[3]


    //        这个是宠物代码 从121的端搬来的
    //         for (int i = 0; i < 3; i++) {
    //            if (channelserver) {
    //                ScriptAPI.AddInt("chr.getPet(i) != null ? chr.getPet(i).getPetItemId() : 0");
    //            } else {
    //                ScriptAPI.AddInt("0");
    //            }
    //        }


    if (MapleJob.is恶魔(getJob)) {
        ScriptAPI.AddInt("chr.getFaceMarking()");
    } else if (MapleJob.is尖兵(getJob)) {
        ScriptAPI.AddInt("chr.getFaceMarking()");
    } else if (MapleJob.is神之子(getJob)) {
        ScriptAPI.AddByte("1");
    } else if (MapleJob.is林芝林(getJob)) {
        ScriptAPI.AddInt("chr.getFaceMarking()");
        ScriptAPI.AddByte("1");
        ScriptAPI.AddInt("chr.getEars()");
        ScriptAPI.AddByte("1");
        ScriptAPI.AddInt("chr.getTail()");
    }
    ScriptAPI.AddByte("0");//176+
    ScriptAPI.AddByte("0");//176+

    ScriptAPI.EndNode(true)//addCharLook

}
function addCharCreateStats() {
    ScriptAPI.StartNode("addCharCreateStats");
    ScriptAPI.AddInt("chr.getId()");

    ScriptAPI.AddField("未知数据", 8);
    //"06 00 1E 00 C2 B0 A2 35"
    //尖兵06 00 2C 00 2A 0B 7A 01 
    //恶魔06 00 1E 00 99 11 1D 01 
    //夜光法师 50 49 C0 0F C0 F7 98 15 
    ScriptAPI.AddPaddedString("chr.getName()", 13);
    ScriptAPI.AddByte("MapleJob.is神之子(getJob) ? 0 : chr.getGender()");
    // ScriptAPI.AddByte("0); // addCharCreateStats unk
    ScriptAPI.AddByte("chr.getSkinColor()");
    ScriptAPI.AddInt("chr.getFace()");
    ScriptAPI.AddInt("chr.getHair()");
    ScriptAPI.AddByte("-1");//176+
    ScriptAPI.AddByte("0");//176+
    ScriptAPI.AddByte("0");//176+        
    ScriptAPI.AddByte("chr.getLevel()");
    getJob = ScriptAPI.AddShort("getJob");
    ScriptAPI.StartNode("connectData");
    ScriptAPI.AddShort("str");
    ScriptAPI.AddShort("dex");
    ScriptAPI.AddShort("int_");
    ScriptAPI.AddShort("luk");
    ScriptAPI.AddInt("hp");
    ScriptAPI.AddInt("maxhp");
    ScriptAPI.AddInt("mp");
    ScriptAPI.AddInt("maxmp"); //maxmp
    ScriptAPI.EndNode(true)//connectData

    ScriptAPI.AddShort("chr.getRemainingAp()");

    ScriptAPI.StartNode("getRemainingSpSize");
    if (isSeparatedSp(getJob)) { //
        // int size = chr.getRemainingSpSize();
        var getRemainingSpSize = ScriptAPI.AddByte("size");
        for (var i = 0; i < getRemainingSpSize; i++) {
            // if (chr.getRemainingSp(i) > 0) {
            ScriptAPI.AddByte("i + 1");
            ScriptAPI.AddInt("chr.getRemainingSp(i)");
            // }
        }
    } else {
        ScriptAPI.AddShort("chr.getRemainingSp()");
    }
    ScriptAPI.EndNode(true)//getRemainingSpSize

    ScriptAPI.AddLong("chr.getExp()");
    ScriptAPI.AddInt("chr.getFame()");
    ScriptAPI.AddInt("chr.getWeaponPoint()"); // 未知国服132新出 位置51  A5 5D 5B 00 |0C AD BA 13  |A8 18 3B 00  |6D 28 3B 00  |E0 1F 3B 00

    ScriptAPI.AddLong("chr.getGachExp()");
    ScriptAPI.AddLong("System.currentTimeMillis()");//时间
    ScriptAPI.AddInt("chr.getMapId()");
    ScriptAPI.AddByte("chr.getInitialSpawnpoint()");
    ScriptAPI.AddShort("chr.getSubcategory()");
    if (MapleJob.is恶魔(getJob) || MapleJob.is尖兵(getJob) || MapleJob.is林芝林(getJob)) {
        //恶魔 36 72 0F 00
        ScriptAPI.AddInt("chr.getFaceMarking()");
    }
    ScriptAPI.AddByte("chr.getFatigue()");

    ScriptAPI.AddInt("GameConstants.getCurrentDate()");//登陆还是注册时间?
    // for (MapleTrait.MapleTraitType t : MapleTrait.MapleTraitType.values()) {//性向,循环6次
    for (var i = 0; i < 6; i++) {
        ScriptAPI.AddInt("chr.getTrait(t).getTotalExp()");
        // charisma(500, MapleStat.CHARISMA), //ambition
        // insight(500, MapleStat.INSIGHT),
        // will(500, MapleStat.WILL), //willpower
        // craft(500, MapleStat.CRAFT), //diligence
        // sense(500, MapleStat.SENSE), //empathy
        // charm(5000, MapleStat.CHARM);
    }
    //idb - 21
    // for (MapleTrait.MapleTraitType t : MapleTrait.MapleTraitType.values()) {//性向,循环6次
    for (var i = 0; i < 6; i++) {
        ScriptAPI.AddShort("0"); // today's trait points
    }
    ScriptAPI.AddByte("0");
    ScriptAPI.AddLong("getTime(-2L)");//00 40 E0 FD 3B 37 4F 01
    //        ScriptAPI.AddInt("chr.getStat().pvpExp");
    //        ScriptAPI.AddByte(chr.getStat().pvpRank);
    //        ScriptAPI.AddInt("chr.getBattlePoints()");
    //        ScriptAPI.AddByte(0);
    //        ScriptAPI.AddInt("0);//132.2后出现 38 51 C5 3A | F8 CD 66 69 |68 D0 11 3B |F8 CD 66 69 |28 2F 96 "A1
    ScriptAPI.AddShort("0");
    ScriptAPI.AddInt("0");
    ScriptAPI.AddInt("88");
    ScriptAPI.AddInt("0");
    ScriptAPI.AddByte("1");

    //9E 3B 00 00 00 00 58 00 00 00 00 00 00 00 01
    //FD 33 00 00 00 00 58 00 00 00 00 00 00 00 01 
    //F7 3A 00 00 00 00 58 00 00 00 00 00 00 00 01

    addPartTimeJob();
    connectData();//chr.getCharacterCard().connectData
    ScriptAPI.AddLong("getTime(System.currentTimeMillis())");
    ScriptAPI.AddByte("0");
    ScriptAPI.AddInt("getTime(System.currentTimeMillis())");
    ScriptAPI.EndNode(true);

}


// ScriptAPI.EndNode(true)//charPos

function addPartTimeJob() {
    ScriptAPI.StartNode("addPartTimeJob");
    var parttime_getJob = ScriptAPI.AddByte("parttime_getJob()");
    if (parttime_getJob > 0 && parttime_getJob <= 5) {
        ScriptAPI.AddLong("parttime_getTime()");
    } else {
        ScriptAPI.AddLong("getTime(-2)");
    }
    ScriptAPI.AddInt("parttime_getReward()");
    ScriptAPI.AddByte("parttime_getReward() > 0");
    ScriptAPI.EndNode(true)//addPartTimeJob
}
function connectData() {
    ScriptAPI.StartNode("connectData cards");
    for (i = 0; i < (9 - 0); i++) { //
        ScriptAPI.StartNode("cards " + i);
        ScriptAPI.AddInt("Unknown"); //
        ScriptAPI.AddByte("Unknown"); //
        ScriptAPI.AddInt("Unknown"); //
        ScriptAPI.EndNode(true);
    }
    ScriptAPI.EndNode(true);
    // ScriptAPI.AddInt("Unknown"); //
    // ScriptAPI.AddByte("Unknown"); //
    // ScriptAPI.AddInt("Unknown"); //
    // ScriptAPI.EndNode(false);
}