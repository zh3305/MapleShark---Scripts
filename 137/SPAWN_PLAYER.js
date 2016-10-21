function HashMap(){var size=0;var entry=new Object();this.put=function(key,value){if(!this.containsKey(key)){size++}entry[key]=value}this.get=function(key){if(this.containsKey(key)){return entry[key]}else{return null}}this.remove=function(key){if(delete entry[key]){size--}}this.containsKey=function(key){return(key in entry)}this.containsValue=function(value){for(var prop in entry){if(entry[prop]==value){return true}}return false}this.values=function(){var values=new Array(size);for(var prop in entry){values.push(entry[prop])}return values}this.keys=function(){var keys=new Array(size);for(var prop in entry){keys.push(prop)}return keys}this.size=function(){return size}}


Init();
function Init()
//LONG __thiscall CUserRemote::Init(int this, var CInPacket2, var a3, int a4)
{
    mplew.writeInt("chr.getId()");
    mplew.write("chr.getLevel()");
    v5 = mplew.writeMapleAsciiString("chr.getName()");
    v6 = mplew.writeMapleAsciiString("ultExplorer.getCustomData()");
    v7 = mplew.writeMapleAsciiString("gs.getName()");

    m_nGuildMarkBg = mplew.writeShort("m_nGuildMarkBg");
    m_nGuildMarkBgColor = mplew.write("m_nGuildMarkBgColor");
    m_nGuildMark = mplew.writeShort("m_nGuildMark");
    m_nGuildMarkColor = mplew.write("m_nGuildMarkColor");
    m_nGender = mplew.write("m_nGender");
    m_nAccountGender = mplew.write("m_nAccountGender");
    m_nPopularity = mplew.writeInt("m_nPopularity");
    m_nFarmLevel = mplew.writeInt("m_nFarmLevel");
    mplew.writeInt("m_nNameTagMark");
    mplew.StartNode(" SecondaryStat::DecodeForRemote");
    DecodeForRemote();
    mplew.EndNode(false);

    m_nJobCode = mplew.writeShort("m_nJobCode");
    m_nSubJobCode = mplew.writeShort("m_nSubJobCode");
    m_nTotalCHUC = mplew.writeInt("m_nTotalCHUC");

    mplew.StartNode("AvatarLook::Decode");
    addCharLook();
    mplew.EndNode(false);
    if (m_nJobCode == 10000 || m_nJobCode == 10100 || m_nJobCode == 10110 || m_nJobCode == 10111 || m_nJobCode == 10112) {
        mplew.AddComment("神之子");
        addCharLook();
    }

    mplew.StartNode("UnkFunctin6");
    UnkFunctin6();
    mplew.EndNode(false);
    mplew.writeInt("m_dwDriverID");
    mplew.writeInt("m_dwPassenserID");
    sub_18A4210();
    v127 = mplew.writeInt("Effect pfh");
    mplew.writeInt("5010150 猴子STYLE 现金特效");
    mplew.writeInt("nKaiserTailID");
    mplew.writeInt("头顶效果");
    mplew.writeInt("伤害皮肤");
    mplew.writeInt("伤害皮肤");
    mplew.writeInt("unk");
    mplew.writeInt("unk");
    mplew.writeInt("unk");
    mplew.writeInt("unk");
    mplew.writeMapleAsciiString("unk");
    mplew.writeMapleAsciiString("unk");

    mplew.writeShort("unk", -1);
    mplew.writeShort("unk", -1);
    mplew.write("unk", 0);
    mplew.writeShort("unk", -1);
    mplew.writeInt("unk", 0);
    mplew.writeInt("unk", 0);
    mplew.writeInt("getChair or 0", 0);
    if (mplew.writeInt("椅子文字长度")) {
        v11 = mplew.writeMapleAsciiString("椅子文字");
    }
    v12 = mplew.writeInt("unk 136new");
    if (v12 > 0) {
        v126 = v12;
        do {
            v134 = mplew.writeInt("unk");
            --v126;
        }
        while (v126);
    }
    if(  if ( mplew.write("137 new",0) ))
    {
        //sub_EC3500(v16, iPacket);
        mplew.writeInt("unk", 0);
        mplew.writeInt("unk", 0);
    }
    v140 = mplew.writePos("chr.getTruePosition()");
    mplew.write("chr.getStance()");
    v15 = mplew.writeShort("chr.getFH()");

    mplew.StartNode("chr.getPets()");
    i = 0;
    while (mplew.write("")) {
        mplew.StartNode("Pet " + i);
        v31 = mplew.writeInt("getPetIndex(pet)");
        sub_CE5A20(/*  */)
        mplew.EndNode(false);
    }
    mplew.EndNode(false);
    while (mplew.write("阴阳师读取,未处理")) {
        mplew.writeInt("haku.getObjectId()");
        mplew.writeInt("", 40020109);
        mplew.write("", 1);
        mplew.writePos("haku.getPosition()");
        mplew.write("", 0);
        mplew.writeShort("haku.getStance()");
    }
    m_nTamingMobLevel = mplew.writeInt("m_nTamingMobLevel");
    m_nTamingMobExp = mplew.writeInt("m_nTamingMobExp");
    m_nTamingMobFatigue = mplew.writeInt("m_nTamingMobFatigue");

    v41 = mplew.write("m_nMiniRoomType");
    if (v41) {
        v42 = mplew.writeInt("m_dwMiniRoomSN ");
        v43 = mplew.writeMapleAsciiString("m_sMiniRoomTitle");
        mplew.write("m_bPrivate");
        mplew.write("m_nGameKind");
        mplew.write("m_nCurUsers");
        mplew.write("m_nMaxUsers");
        mplew.write("m_bDelayedLoad 延迟加载?", 1);
    }


    v57 = mplew.write("getChalkboard");
    if (v57) {
        mplew.writeMapleAsciiString("");
    }
    mplew.StartNode("addRingInfo getLeft");
    addRingInfo();
    mplew.EndNode(false);
    mplew.StartNode("addRingInfo getMid");
    addRingInfo();
    mplew.EndNode(false);

    if (mplew.write("未知数据?addMRingInfo")) {
        mplew.writeInt("unk ");
        mplew.writeInt("unk");
        mplew.writeInt("unk");
    }
    if (mplew.write("未知 v65")) {
        v71 = mplew.writeInt("未知 v71");
        if (v71 > 0) {
            v72 = v71;
            do {
                v73 = mplew.writeInt("未知 v73");
                --v72;
            }
            while (v72);
        }
    }
    // mplew.StartNode("");
    // mplew.EndNode(false);

    unk_mask = mplew.write("unk_mask");
    if (unk_mask & 1) {
        mplew.StartNode("1");
        mplew.EndNode(false);
    }
    if (unk_mask & 2) {
        mplew.StartNode("2");
        mplew.EndNode(false);
    }
    if (unk_mask & 8) {
        mplew.StartNode("8");
        v75 = mplew.writeInt("v75");
        mplew.EndNode(false);
    }
    else if (unk_mask & 0x10) {
        mplew.StartNode("0x10");
        v76 = mplew.writeInt("v76");
        mplew.EndNode(false);
    }
    if (unk_mask & 0x20) {
        mplew.StartNode("0x20");
        v77 = mplew.writeInt("v77");
        mplew.EndNode(false);
    }
    v78 = mplew.writeInt("骑宠id");
    if (parseInt(m_nJobCode / 100) != 61 && m_nJobCode != 6000) {
    }
    else {
        v80 = mplew.writeInt("extern");
        v81 = mplew.writeInt("inner");
        a2 = mplew.write("premium") != 0;
    }
    v83 = mplew.writeInt("v83");
    v84 = 0;
    do {
        v84 += 4;
        mplew.write("v85", 0xFF);
    }
    while (v84 < 20);
    v86 = mplew.writeInt("unk v86", 0);
    if (v86) {
        v87 = mplew.writeMapleAsciiString("if(v86)");
    }
    mplew.write("", 1);

    if (MapleJob.is狂龙战士(m_nJobCode)) {
        mplew.AddComment("狂龙战士未处理!!!!!!!!!!!!!");
        // // v93 = *(v92 + 16);
        // v94 = parseInt(v93 / 10000);
        // if (parseInt(v93 / 10000) == 190
        //     || v94 == 193
        //     || v94 == 199
        //     || v93 == 1902040//1902040	第1阶段龙
        //     || v93 == 1902041//1902041	第2阶段龙	
        //     || v93 == 1902042//1902042	第3阶段龙
        //     || parseInt(v93 / 1000) == 1983) {

        //     if ( *(a2 + 16)) {
        //         v100 = *(a2 + 16);
        //     }
        //     else {
        //         v100 = *(a2 + 16);
        //     }
        //     if (v100 == 1932249) {
        //         v103 = mplew.writeInt("v103");
        //         if (v103 > 0) {
        //             v133 = v103;
        //             do {
        //                 v104 = mplew.writeInt("v104");
        //                 v89 = v133-- == 1;
        //             }
        //             while (!v89);
        //         }
        //     }
        // }
    }
    if (mplew.write("")) {
        if (mplew.write("")) {
            v106 = mplew.writeInt("v106");
            mplew.writeInt("");
            a2 = mplew.writeShort("a2");
            v135 = mplew.writeShort("v135");
        }
    }
    // mplew.StartNode("");
    // mplew.EndNode(false);
    mplew.StartNode("sub_1628210");
    sub_1628210(/* iPacket */);
    mplew.EndNode(false);
    mplew.StartNode("sub_16922A0");
    sub_16922A0(/* iPacket */);
    mplew.EndNode(false);
    mplew.StartNode("sub_16AB6F0");
    sub_16AB6F0(/* v4, iPacket */);
    mplew.EndNode(false);
    mplew.StartNode("sub_16623B0");
    sub_16623B0(/* v4, iPacket */);
    mplew.EndNode(false);
    mplew.StartNode("sub_1627C50");
    sub_1627C50(/* v4, iPacket */);
    mplew.EndNode(false);
    v108 = mplew.write("v108",0);
    mplew.write("",1);
    v109 = mplew.writeInt("v109",0);
    v113 = mplew.writeInt("v113",0);
    mplew.StartNode("sub_17EEC10");
    sub_17EEC10(/* iPacket_1 */);
    mplew.EndNode(false);
    mplew.writeInt("", 0);
    mplew.writeInt("", 0);
    mplew.writeInt("", 0);
    mplew.StartNode("sub_168BD30");
    sub_168BD30(/* iPacket */);
    mplew.EndNode(false);
    mplew.StartNode("sub_1A20350");
    sub_1A20350(/* iPacket */);
    mplew.EndNode(false);


}
function sub_1A20350(/*  */)
//void __stdcall sub_1A20350 (/* int a1, var a2, int a3 */)
{
    v5 = mplew.writeInt("v5");
    v22 = v5;
    v6 = v5 == 0;
    v32 = 0;
    if (!v6) {
        do {
            v8 = mplew.writeInt("v8");
            v9 = mplew.writeInt("v9");
            v13 = mplew.writeInt("v13");
            ++v32;
        }
        while (v32 < v22);
        v4 = 0;
    }
}
function sub_168BD30() {
    mplew.writeInt("", 0);
}
function sub_17EEC10(/*  */) {
    result = mplew.writeInt("result");
    if (result > 0) {
        v7 = result;
        while (1) {
            v5 = mplew.writeInt("v5");
            v6 = v5;
            a2 = mplew.writeInt("a2");
            if (v6 == 0x1607E49)
                break;
            if (v6 == 0x280E268) {
            }
            else {
                if (v6 == 0x280E26A) {
                    break;
                }
                if (v6 == 0x271A02A) {
                }
                else {
                    if (v6 == 0x27374E8) {
                        break;
                    }
                    if (v6 == 0x282B34B) {
                        break;
                    }
                }
            }
            if (!--v7)
                return result;
        }
    }
    return result;
}
function sub_1627C50(/*  */) {
    result = mplew.writeInt("result");
}
function sub_16623B0(/*  */) {
    sub_EA4770(/* this + 17079, a2 */);
}
function sub_EA4770(/*  */) {
    mplew.write("this");
    result = mplew.writeInt("result");
}
function sub_16AB6F0(/*  */) {
    result = mplew.writeInt("result");
    if (result > 0) {
        v8 = result;
        do {
            v5 = mplew.writeInt("v5");
            mplew.writeMapleAsciiString("");
            --v8;
        }
        while (v8);
    }
    return result;
}
function sub_16922A0(/*  */) {
    v5 = mplew.writeInt("while count");
    if (v5 <= 0) {
        return;
    }
    v6 = v5;
    while (1) {
        v7 = mplew.writeInt("unk int");
        v6--;
        if (!v6)
            break;
    }
}
function sub_1628210(/*  */)
//char __thiscall sub_1628210 (/* char *this, int a2 */)
{
    v3 = mplew.write("");
    if (v3) {
        v2 = mplew.writeInt("v2");
        v4 = mplew.write("v4");
        if (v4 >= 0xA) {
            v7 = 0;
            v8 = (v2 + 44);
            do {
                mplew.writeInt("");
                mplew.writeInt("v8");
                mplew.writeInt("v9");
                ++v7;
            }
            while (v7 < 10);
        }
        else {
            mplew.writeInt("");
            mplew.writeInt("");
            mplew.writeInt("v6");
        }
        mplew.writeBuffer("", 8);
        mplew.writeInt("");
        mplew.writeInt("v3");
    }
    return v3;
}
function addRingInfo() {
    if (mplew.write("addRingInfo")) {
        v65 = mplew.writeInt("rings.size()");
        if (v65 > 0) {
            v133 = v65;
            do {
                mplew.StartNode("addRingInfo " + v133);
                // pvarg= mplew.writeBuffer("pvarg",0x10);{
                mplew.writeLong("ring.getRingId()");
                mplew.writeLong("ring.getPartnerRingId()");
                mplew.writeInt("ring.getItemId()");
                --v133;
                mplew.EndNode(false);
            }
            while (v133);
        }
    }
}
function sub_CE5A20(/*  */)
//void __userpurge sub_CE5A20 (/* int a1@<ecx>, var a2, var a3, var a4, var a5, var a6, var a7, int a8 */)
{
    v11 = mplew.writeInt("pet.getPetItemId()");
    v13 = mplew.writeMapleAsciiString("pet.getName()");
    mplew.writeBuffer("pet.getUniqueId()", 8);
    v18 = mplew.writePos("pet.getPos()");
    mplew.write("pet.getStance()");
    v22 = mplew.writeShort("pet.getFh()");
    mplew.writeInt("unk -1", -1);
    mplew.writeShort("unk 100", 100);
    mplew.write("unk", 0);
    mplew.write("unk", 0);
}

function sub_18A4210(/*  */)
//int __thiscall sub_18A4210 (/* int this, int a2 */)
{
    mplew.writeInt("未知?飞天骑乘 妮娜的魔法阵");
    mplew.writeInt("chr.getId()");
    result = mplew.writeInt("for size");
    if (result > 0) {
        v5 = result;
        do {
            v6 = mplew.writeInt("v6 " + v5);
            a2 = mplew.writeInt("a2 " + v5);
            --v5;
        }
        while (v5);
    }
    return result;
}

function UnkFunctin6(/*  */)
//char __thiscall sub_727C30 (/* _DWORD *this, int iPacket */)
{
    v2 = 2;
    do {
        mplew.writeInt("v7");
        result = mplew.write("result");
        for (i = result; result != 255; i = result) {
            v5 = mplew.writeInt("v5");
            result = mplew.write("result");
        }
        v2 += 38;
    }
    while (v2 < 78);
    return result;
}
function addCharLook() {

    AvatarLook = {};
    AvatarLook_1 = AvatarLook;
    AvatarLook.nGender = mplew.write("AvatarLook.nGender");
    AvatarLook_1.nSkin = mplew.write("AvatarLook_1.nSkin");
    AvatarLook_1.nFace = mplew.writeInt("AvatarLook_1.nFace");
    AvatarLook_1.nJob = mplew.writeInt("AvatarLook_1.nJob");
    mplew.write("");
    mplew.writeInt("anHairEquip");

    mplew.StartNode("for Item 1");
    for (v3 = mplew.write("for count"); v3 != 0xFF; v3 = mplew.write("")) {
        v4 = mplew.writeInt("ItemID");
    }
    mplew.EndNode(false);

    mplew.StartNode("for Item 2");
    for (v6 = mplew.write("for count 2"); v6 != 0xFF; v6 = mplew.write("")) {
        v7 = mplew.writeInt("ItemID");
    }
    mplew.EndNode(false);

    mplew.StartNode("for Item 3");
    for (i = mplew.write("i"); i != 0xFF; i = mplew.write("i")) {
        v10 = mplew.writeInt("ItemID");
    }
    mplew.EndNode(false);

    mplew.writeInt("nWeaponStickerID");
    mplew.writeInt("nWeaponID");
    mplew.writeInt("nSubWeaponID");
    mplew.write("精灵的耳朵 bDrawElfEar") != 0;
    //  mplew.writeBuffer("anPetID",0xC);
    mplew.StartNode("anPetID 宠物");
    mplew.writeInt("PetID1");
    mplew.writeInt("PetID2");
    mplew.writeInt("PetID3");
    mplew.EndNode(false);

    v12 = AvatarLook_1.nJob;
    if (parseInt(v12 / 100) != 31 && v12 != 3001) {
        if (parseInt(v12 / 100) != 36 && v12 != 3002) {
            if (v12 != 10000 && v12 != 10100 && v12 != 10110 && v12 != 10111 && v12 != 10112) {
                if (sub_5917B0(v12)) {
                    mplew.writeInt("unk");
                    mplew.write("unk", 1);
                    mplew.writeInt("getEars");
                    mplew.write("unk", 1);
                    mplew.writeInt("getTail");
                }
            }
            else {
                mplew.write("bIsZeroBetaLook") != 0;
            }
        }
        else {
            mplew.writeInt("nXenonDefFaceAcc");
        }
    }
    else {
        mplew.writeInt("nDemonSlayerDefFaceAcc");
    }
    mplew.write("nMixedHairColor");
    mplew.write("nMixHairPercent");
    v13 = mplew.writeBuffer("unk new", 5);
}
function sub_5917B0(job/*  */) {
    return parseInt(job / 100) == 112 || job == 11000;
}
function writeMaskFromList(mask, len) {
    var MAX_MOBSTAT = parseInt(len / 4);
    for (var i = 0; i < MAX_MOBSTAT; i++) {
        mask[i] = mplew.writeInt("mask[(" + i + ")]");
    }
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
function DecodeForRemote()
//int __thiscall SecondaryStat::DecodeForRemote(char *this, var a2, int iPacket)
{
    mplew.StartNode("mask");
    var mask = Array();
    writeMaskFromList(mask, 0x44);
    mplew.EndNode(false);
    //   v562= mplew.writeBuffer("v562",0x44);
    //   Check_Buff(&v562, &v560   , 0x2240C58);     // 27?
    if (sub_B7C3F0(mask, 27)) {
        mplew.StartNode("Mask- " + 27);
        v3 = mplew.write("v3");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v559   , 0x2241288);      // 77 斗气集中    COMBO
    if (sub_B7C3F0(mask, 77)) {
        mplew.StartNode("Mask- " + 77);
        v4 = mplew.write("v4");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v558   , 0x22412D0);      // 78 属性攻击WK_CHARGE
    if (sub_B7C3F0(mask, 78)) {
        mplew.StartNode("Mask- " + 78);
        v5 = mplew.writeShort("v5");
        v6 = mplew.writeInt("v6");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v557   , 0x2241318);      // ELEMENTAL_CHARGE 330  属性攻击
    if (sub_B7C3F0(mask, 330)) {
        mplew.StartNode("Mask- " + 330);
        v7 = mplew.writeShort("v7");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v556   , 0x2241120);      // 73 //昏迷  STUN(73),
    if (sub_B7C3F0(mask, 73)) {
        mplew.StartNode("Mask- " + 73);
        v8 = mplew.writeShort("v8");
        v9 = mplew.writeInt("v9");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v555   , 0x2241168);      // 194
    if (sub_B7C3F0(mask, 194)) {
        mplew.StartNode("Mask- " + 194);
        v10 = mplew.write("v10");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v554   , 0x2241240);      // 76 DARKNESS
    if (sub_B7C3F0(mask, 76)) {
        mplew.StartNode("Mask- " + 76);
        v11 = mplew.writeShort("v11");
        v12 = mplew.writeInt("v12");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v553   , 0x22411F8);      // 75
    if (sub_B7C3F0(mask, 75)) {
        mplew.StartNode("Mask- " + 75);
        v13 = mplew.writeShort("v13");
        v14 = mplew.writeInt("v14");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v552   , 0x22414C8);      // 85
    if (sub_B7C3F0(mask, 85)) {
        mplew.StartNode("Mask- " + 85);
        v15 = mplew.writeShort("v15");
        v16 = mplew.writeInt("v16");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v551   , 0x2241510);      // 189
    if (sub_B7C3F0(mask, 189)) {
        mplew.StartNode("Mask- " + 189);
        v17 = mplew.writeShort("v17");
        v18 = mplew.writeInt("v18");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v550   , 0x2241558);      // 86
    if (sub_B7C3F0(mask, 86)) {
        mplew.StartNode("Mask- " + 86);
        v19 = mplew.writeShort("v19");
        v20 = mplew.writeInt("v20");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v549   , 0x22415A0);      // 87
    if (sub_B7C3F0(mask, 87)) {
        mplew.StartNode("Mask- " + 87);
        v21 = mplew.writeShort("v21");
        v22 = mplew.writeInt("v22");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v548   , 0x22430E8);      // 188??
    if (sub_B7C3F0(mask, 188)) {
        mplew.StartNode("Mask- " + 188);
        v23 = mplew.writeShort("v23");
        v24 = mplew.writeInt("v24");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v547   , 0x2243130);      // 193
    if (sub_B7C3F0(mask, 193)) {
        mplew.StartNode("Mask- " + 193);
        v25 = mplew.writeShort("v25");
        v26 = mplew.writeInt("v26");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v546   , 0x22415E8);      // 173
    if (sub_B7C3F0(mask, 173)) {
        mplew.StartNode("Mask- " + 173);
        v27 = mplew.writeShort("v27");
        v28 = mplew.writeInt("v28");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v545   , 0x2241678);      // 176
    if (sub_B7C3F0(mask, 176)) {
        mplew.StartNode("Mask- " + 176);
        v29 = mplew.write("v29");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v544   , 0x22416C0);      // 174
    if (sub_B7C3F0(mask, 174)) {
        mplew.StartNode("Mask- " + 174);
        v30 = mplew.writeShort("v30");
        v31 = mplew.writeInt("v31");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v543   , 0x2241708);      // 175
    if (sub_B7C3F0(mask, 175)) {
        mplew.StartNode("Mask- " + 175);
        v32 = mplew.writeShort("v32");
        v33 = mplew.writeInt("v33");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v542   , 0x22411B0);      // 74
    if (sub_B7C3F0(mask, 74)) {
        mplew.StartNode("Mask- " + 74);
        v34 = mplew.writeShort("v34");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v541   , 0x22411B0);      // 74
    if (sub_B7C3F0(mask, 74)) {
        mplew.StartNode("Mask- " + 74);
        v35 = mplew.writeShort("v35");
        v36 = mplew.writeInt("v36");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v540   , 0x2240598);      // 81
    if (sub_B7C3F0(mask, 81)) {
        mplew.StartNode("Mask- " + 81);
        v37 = mplew.writeShort("v37");
        v38 = mplew.writeInt("v38");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v539   , 0x2240EE0);      // 66
    if (sub_B7C3F0(mask, 66)) {
        mplew.StartNode("Mask- " + 66);
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(mask, 72)) {
        mplew.StartNode("Mask- " + 72);
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(mask, 88)) {
        mplew.StartNode("Mask- " + 88);
        v39 = mplew.writeShort("v39");
        v40 = mplew.writeInt("v40");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v536   , 0x2241798);      // 104
    if (sub_B7C3F0(mask, 104)) {
        mplew.StartNode("Mask- " + 104);
        v41 = mplew.writeShort("v41");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v535   , 0x2241948);      // 94???
    if (sub_B7C3F0(mask, 94)) {
        mplew.StartNode("Mask- " + 94);
        v42 = mplew.writeShort("v42");
        v43 = mplew.writeInt("v43");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v534   , 0x2241990);      // 244
    if (sub_B7C3F0(mask, 244)) {
        mplew.StartNode("Mask- " + 244);
        v44 = mplew.writeShort("v44");
        v45 = mplew.writeInt("v45");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v533   , 0x22408B0);      // 245
    if (sub_B7C3F0(mask, 245)) {
        mplew.StartNode("Mask- " + 245);
        v46 = mplew.writeShort("v46");
        v47 = mplew.writeInt("v47");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v532   , 0x22419D8);      // 95
    if (sub_B7C3F0(mask, 95)) {
        mplew.StartNode("Mask- " + 95);
        v48 = mplew.writeInt("v48");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v531   , 0x2241C18);      // 101
    if (sub_B7C3F0(mask, 101)) {
        mplew.StartNode("Mask- " + 101);
        v49 = mplew.writeShort("v49");
        v50 = mplew.writeInt("v50");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v530   , 0x2241CA8);      // 105
    if (sub_B7C3F0(mask, 105)) {
        mplew.StartNode("Mask- " + 105);
        v51 = mplew.writeShort("v51");
        v52 = mplew.writeInt("v52");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v529   , 0x2241CF0);      // 114
    if (sub_B7C3F0(mask, 114)) {
        mplew.StartNode("Mask- " + 114);
        v53 = mplew.writeShort("v53");
        v54 = mplew.writeInt("v54");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v528   , 0x2241D38);      // 106
    if (sub_B7C3F0(mask, 106)) {
        mplew.StartNode("Mask- " + 106);
        v55 = mplew.writeShort("v55");
        v56 = mplew.writeInt("v56");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v527   , 0x2241E10);      // 108
    if (sub_B7C3F0(mask, 108)) {
        mplew.StartNode("Mask- " + 108);
        v57 = mplew.writeInt("v57");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v526   , 0x2241E58);      // 109
    if (sub_B7C3F0(mask, 109)) {
        mplew.StartNode("Mask- " + 109);
        v58 = mplew.writeInt("v58");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v525   , 0x2241EA0);      // 110
    if (sub_B7C3F0(mask, 110)) {
        mplew.StartNode("Mask- " + 110);
        v59 = mplew.writeInt("v59");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v524   , 0x2241EE8);      // 111
    if (sub_B7C3F0(mask, 111)) {
        mplew.StartNode("Mask- " + 111);
        v60 = mplew.writeInt("v60");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v523   , 0x2241F30);      // 112
    if (sub_B7C3F0(mask, 112)) {
        mplew.StartNode("Mask- " + 112);
        v61 = mplew.writeShort("v61");
        v62 = mplew.writeInt("v62");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v522   , 0x2241F78);      // 113
    if (sub_B7C3F0(mask, 113)) {
        mplew.StartNode("Mask- " + 113);
        mplew.EndNode(false);
    }

    if (sub_B7C3F0(mask, 124)) {
        mplew.StartNode(" Mask - " + 124);
        v63 = mplew.writeShort(" v63 ");
        v64 = mplew.writeInt(" v64 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v520   , 0x22472B8);      // 472
    if (sub_B7C3F0(mask, 472)) {
        mplew.StartNode(" Mask - " + 472);
        v65 = mplew.writeShort(" v65 ");
        v66 = mplew.writeInt(" v66 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v519   , 0x2242320);      // 126
    if (sub_B7C3F0(mask, 126)) {
        mplew.StartNode(" Mask - " + 126);
        v67 = mplew.writeShort(" v67 ");
        v68 = mplew.writeInt(" v68 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v518   , 0x2242368);      // 127
    if (sub_B7C3F0(mask, 127)) {
        mplew.StartNode(" Mask - " + 127);
        v69 = mplew.writeShort(" v69 ");
        v70 = mplew.writeInt(" v70 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v517   , 0x22423B0);      // 128
    if (sub_B7C3F0(mask, 128)) {
        mplew.StartNode(" Mask - " + 128);
        v71 = mplew.writeShort(" v71 ");
        v72 = mplew.writeInt(" v72 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v516   , 0x22423F8);      // 130
    if (sub_B7C3F0(mask, 130)) {
        mplew.StartNode(" Mask - " + 130);
        v73 = mplew.writeInt(" v73 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v515   , 0x22424D0);      // 133
    if (sub_B7C3F0(mask, 133)) {
        mplew.StartNode(" Mask - " + 133);
        mplew.EndNode(false);
    }

    // 0x213342560 // 134
    if (sub_B7C3F0(mask, 134)) {
        mplew.StartNode("Mask- " + 134);
        unk_mask = mplew.writeShort("unk_mask");
        v75 = mplew.writeInt("v75");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v513   , 0x22425A8);      // 190
    if (sub_B7C3F0(mask, 190)) {
        mplew.StartNode("Mask- " + 190);
        v76 = mplew.writeShort("v76");
        v77 = mplew.writeInt("v77");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v512   , 0x22425F0);      // 171
    if (sub_B7C3F0(mask, 171)) {
        mplew.StartNode("Mask- " + 171);
        v78 = mplew.writeShort("v78");
        v79 = mplew.writeInt("v79");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v511   , 0x2242AB8);      // 137
    if (sub_B7C3F0(mask, 137)) {
        mplew.StartNode("Mask- " + 137);
        v80 = mplew.writeShort("v80");
        v81 = mplew.writeInt("v81");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v510   , 0x22426C8);      // 139
    if (sub_B7C3F0(mask, 139)) {
        mplew.StartNode("Mask- " + 139);
        v82 = mplew.writeShort("v82");
        v83 = mplew.writeInt("v83");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v509   , 0x22427A0);      // 151
    if (sub_B7C3F0(mask, 151)) {
        mplew.StartNode("Mask- " + 151);
        v84 = mplew.write("v84");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v508   , 0x22427E8);      // 311
    if (sub_B7C3F0(mask, 311)) {
        mplew.StartNode("Mask- " + 311);
        v85 = mplew.write("v85");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v507   , 0x22427E8);      // 311
    if (sub_B7C3F0(mask, 311)) {
        mplew.StartNode("Mask- " + 311);
        mplew.EndNode(false);
    }
    // 0x231142A28);      // 159
    if (sub_B7C3F0(mask, 159)) {
        mplew.StartNode("Mask- " + 159);
        mplew.EndNode(false);
    }
    // 0x215942758); // 141
    if (sub_B7C3F0(mask, 141)) {
        mplew.StartNode("Mask- " + 141);
        mplew.EndNode(false);
    }
    // 0x214142A70);      // 160
    if (sub_B7C3F0(mask, 160)) {
        mplew.StartNode(" Mask - " + 160);
        v86 = mplew.writeShort(" v86 ");
        v87 = mplew.writeInt(" v87 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v503   , 0x2242B90);      // 163
    if (sub_B7C3F0(mask, 163)) {
        mplew.StartNode("Mask- " + 163);
        mplew.EndNode(false);
    }
    // 0x216342BD8); // 247
    if (sub_B7C3F0(mask, 247)) {
        mplew.StartNode("Mask- " + 247);
        mplew.EndNode(false);
    }
    // 0x224742DD0);      // 169
    if (sub_B7C3F0(mask, 169)) {
        mplew.StartNode(" Mask - " + 169);
        v88 = mplew.writeShort(" v88 ");
        v89 = mplew.writeInt(" v89 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v500   , 0x2242EA8);      // 177
    if (sub_B7C3F0(mask, 177)) {
        mplew.StartNode(" Mask - " + 177);
        v90 = mplew.writeShort(" v90 ");
        v91 = mplew.writeInt(" v91 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v499   , 0x2242EF0);      // 184
    if (sub_B7C3F0(mask, 184)) {
        mplew.StartNode(" Mask - " + 184);
        v92 = mplew.writeShort(" v92 ");
        v93 = mplew.writeInt(" v93 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v498   , 0x2243208);      // 192
    if (sub_B7C3F0(mask, 192)) {
        mplew.StartNode(" Mask - " + 192);
        v94 = mplew.writeShort(" v94 ");
        v95 = mplew.writeInt(" v95 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v497   , 0x2242098);      // 118
    if (sub_B7C3F0(mask, 118)) {
        mplew.StartNode(" Mask - " + 118);
        v96 = mplew.writeShort(" v96 ");
        v97 = mplew.writeInt(" v97 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v496   , 0x2243178);      // 198
    if (sub_B7C3F0(mask, 198)) {
        mplew.StartNode("Mask- " + 198);
        mplew.EndNode(false);
    }
    //  0x219844C78); // 205
    if (sub_B7C3F0(mask, 205)) {
        mplew.StartNode("Mask- " + 205);
        v98 = mplew.writeShort("v98");
        v99 = mplew.writeInt("v99");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v494   , 0x2240430);      // 207
    if (sub_B7C3F0(mask, 207)) {
        mplew.StartNode("Mask- " + 207);
        v100 = mplew.writeShort("v100");
        v101 = mplew.writeInt("v101");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v493   , 0x2243448);      // 145
    if (sub_B7C3F0(mask, 145)) {
        mplew.StartNode("Mask- " + 145);
        v102 = mplew.writeShort("v102");
        v103 = mplew.writeInt("v103");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v492   , 0x2243640);      // 153
    if (sub_B7C3F0(mask, 153)) {
        mplew.StartNode("Mask- " + 153);
        v104 = mplew.writeShort("v104");
        v105 = mplew.writeInt("v105");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v491   , 0x2243838);      // 224
    if (sub_B7C3F0(mask, 224)) {
        mplew.StartNode("Mask- " + 224);
        v106 = mplew.writeShort("v106");
        v107 = mplew.writeInt("v107");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v490   , 0x2243880);      // 243
    if (sub_B7C3F0(mask, 243)) {
        mplew.StartNode("Mask- " + 243);
        v108 = mplew.writeShort("v108");
        v109 = mplew.writeInt("v109");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v489   , 0x2243910);      // 226
    if (sub_B7C3F0(mask, 226)) {
        mplew.StartNode("Mask- " + 226);
        v110 = mplew.writeShort("v110");
        v111 = mplew.writeInt("v111");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v488   , 0x2243958);      // 246
    if (sub_B7C3F0(mask, 246)) {
        mplew.StartNode("Mask- " + 246);
        v112 = mplew.writeShort("v112");
        v113 = mplew.writeInt("v113");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v487   , 0x22439A0);      // 259
    if (sub_B7C3F0(mask, 259)) {
        mplew.StartNode("Mask- " + 259);
        v114 = mplew.writeShort("v114");
        v115 = mplew.writeInt("v115");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v486   , 0x22439E8);      // 227
    if (sub_B7C3F0(mask, 227)) {
        mplew.StartNode("Mask- " + 227);
        v116 = mplew.writeShort("v116");
        v117 = mplew.writeInt("v117");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v485   , 0x2243B08);      // 232
    if (sub_B7C3F0(mask, 232)) {
        mplew.StartNode("Mask- " + 232);
        v118 = mplew.writeInt("v118");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v484   , 0x2247A08);      // 233
    if (sub_B7C3F0(mask, 233)) {
        mplew.StartNode("Mask- " + 233);
        v119 = mplew.write("v119");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v483   , 0x2247A50);      // 410
    if (sub_B7C3F0(mask, 410)) {
        mplew.StartNode("Mask- " + 410);
        v120 = mplew.write("v120");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v482   , 0x2243C70);      // 236
    if (sub_B7C3F0(mask, 236)) {
        mplew.StartNode("Mask- " + 236);
        v121 = mplew.writeShort("v121");
        v122 = mplew.writeInt("v122");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v481   , 0x2243CB8);      // 238
    if (sub_B7C3F0(mask, 238)) {
        mplew.StartNode("Mask- " + 238);
        v123 = mplew.writeShort("v123");
        v124 = mplew.writeInt("v124");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v480   , 0x2243EB0);      // 241
    if (sub_B7C3F0(mask, 241)) {
        mplew.StartNode("Mask- " + 241);
        v125 = mplew.writeShort("v125");
        v126 = mplew.writeInt("v126");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v479   , 0x2243BE0);      // 248
    if (sub_B7C3F0(mask, 248)) {
        mplew.StartNode("Mask- " + 248);
        v127 = mplew.writeShort("v127");
        v128 = mplew.writeInt("v128");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v478   , 0x2241A20);      // 250
    if (sub_B7C3F0(mask, 250)) {
        mplew.StartNode("Mask- " + 250);
        v129 = mplew.writeShort("v129");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v477   , 0x2243E20);      // 251
    if (sub_B7C3F0(mask, 251)) {
        mplew.StartNode("Mask- " + 251);
        v130 = mplew.writeInt("v130");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v476   , 0x2243F40);      // 249
    if (sub_B7C3F0(mask, 249)) {
        mplew.StartNode("Mask- " + 249);
        v131 = mplew.writeShort("v131");
        v132 = mplew.writeInt("v132");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v475   , 0x2243FD0);      // 257
    if (sub_B7C3F0(mask, 257)) {
        mplew.StartNode("Mask- " + 257);
        v133 = mplew.writeShort("v133");
        v134 = mplew.writeInt("v134");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v474   , 0x2244018);      // 258
    if (sub_B7C3F0(mask, 258)) {
        mplew.StartNode("Mask- " + 258);
        v135 = mplew.writeShort("v135");
        v136 = mplew.writeInt("v136");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v473   , 0x22440A8);      // 260
    if (sub_B7C3F0(mask, 260)) {
        mplew.StartNode("Mask- " + 260);
        v137 = mplew.writeShort("v137");
        v138 = mplew.writeInt("v138");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v472   , 0x22404C0);      // 261
    if (sub_B7C3F0(mask, 261)) {
        mplew.StartNode("Mask- " + 261);
        v139 = mplew.writeShort("v139");
        v140 = mplew.writeInt("v140");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v471   , 0x2240508);      // 263
    if (sub_B7C3F0(mask, 263)) {
        mplew.StartNode("Mask- " + 263);
        v141 = mplew.writeShort("v141");
        v142 = mplew.writeInt("v142");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v470   , 0x2244138);      // 264
    if (sub_B7C3F0(mask, 264)) {
        mplew.StartNode("Mask- " + 264);
        v143 = mplew.writeShort("v143");
        v144 = mplew.writeInt("v144");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v469   , 0x2244180);      // 273
    if (sub_B7C3F0(mask, 273)) {
        mplew.StartNode("Mask- " + 273);
        v145 = mplew.writeShort("v145");
        v146 = mplew.writeInt("v146");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v468   , 0x22441C8);      // 129
    if (sub_B7C3F0(mask, 129)) {
        mplew.StartNode("Mask- " + 129);
        v147 = mplew.writeShort("v147");
        v148 = mplew.writeInt("v148");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v467   , 0x2243F88);      // 255
    if (sub_B7C3F0(mask, 255)) {
        mplew.StartNode("Mask- " + 255);
        v149 = mplew.writeShort("v149");
        v150 = mplew.writeInt("v150");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v466   , 0x2244258);      // 268
    if (sub_B7C3F0(mask, 268)) {
        mplew.StartNode("Mask- " + 268);
        v151 = mplew.writeShort("v151");
        v152 = mplew.writeInt("v152");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v465   , 0x22442A0);      // 269
    if (sub_B7C3F0(mask, 269)) {
        mplew.StartNode("Mask- " + 269);
        v153 = mplew.writeShort("v153");
        v154 = mplew.writeInt("v154");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v464   , 0x22442E8);      // 270
    if (sub_B7C3F0(mask, 270)) {
        mplew.StartNode("Mask- " + 270);
        v155 = mplew.writeShort("v155");
        v156 = mplew.writeInt("v156");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v463   , 0x2244330);      // 271
    if (sub_B7C3F0(mask, 271)) {
        mplew.StartNode("Mask- " + 271);
        v157 = mplew.writeShort("v157");
        v158 = mplew.writeInt("v158");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v462   , 0x2244330);      // 271
    if (sub_B7C3F0(mask, 271)) {
        mplew.StartNode("Mask- " + 271);
        v159 = timeGetTime();
        v160 = mplew.writeInt("v160");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v461   , 0x2244378);      // 272
    if (sub_B7C3F0(mask, 272)) {
        mplew.StartNode("Mask- " + 272);
        v161 = mplew.writeShort("v161");
        v162 = mplew.writeInt("v162");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v460   , 0x22443C0);      // 274
    if (sub_B7C3F0(mask, 274)) {
        mplew.StartNode("Mask- " + 274);
        v163 = mplew.writeShort("v163");
        v164 = mplew.writeInt("v164");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v459   , 0x2244408);      // 275
    if (sub_B7C3F0(mask, 275)) {
        mplew.StartNode("Mask- " + 275);
        v165 = mplew.writeShort("v165");
        v166 = mplew.writeInt("v166");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v458   , 0x2244450);      // 276
    if (sub_B7C3F0(mask, 276)) {
        mplew.StartNode("Mask- " + 276);
        v167 = mplew.writeShort("v167");
        v168 = mplew.writeInt("v168");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v457   , 0x2244498);      // 277
    if (sub_B7C3F0(mask, 277)) {
        mplew.StartNode("Mask- " + 277);
        v169 = mplew.writeShort("v169");
        v170 = mplew.writeInt("v170");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v456   , 0x22444E0);      // 278
    if (sub_B7C3F0(mask, 278)) {
        mplew.StartNode("Mask- " + 278);
        v171 = mplew.writeShort("v171");
        v172 = mplew.writeInt("v172");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v455   , 0x2244528);      // 335
    if (sub_B7C3F0(mask, 335)) {
        mplew.StartNode("Mask- " + 335);
        v173 = mplew.writeShort("v173");
        v174 = mplew.writeInt("v174");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v454   , 0x2244570);      // 279
    if (sub_B7C3F0(mask, 279)) {
        mplew.StartNode("Mask- " + 279);
        v175 = mplew.writeShort("v175");
        v176 = mplew.writeInt("v176");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v453   , 0x22445B8);      // 280
    if (sub_B7C3F0(mask, 280)) {
        mplew.StartNode("Mask- " + 280);
        v177 = mplew.writeShort("v177");
        v178 = mplew.writeInt("v178");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v452   , 0x2244600);      // 281
    if (sub_B7C3F0(mask, 281)) {
        mplew.StartNode("Mask- " + 281);
        mplew.EndNode(false);
    }
    //  0x228144648);      // 282
    if (sub_B7C3F0(mask, 282)) {
        mplew.StartNode(" Mask - " + 282);
        v179 = mplew.writeShort(" v179 ");
        v180 = mplew.writeInt(" v180 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v450   , 0x22433B8);      // 204
    if (sub_B7C3F0(mask, 204)) {
        mplew.StartNode(" Mask - " + 204);
        v181 = mplew.writeShort(" v181 ");
        v182 = mplew.writeInt(" v182 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v449   , 0x2243D48);      // 252
    if (sub_B7C3F0(mask, 252)) {
        mplew.StartNode(" Mask - " + 252);
        v183 = mplew.writeShort(" v183 ");
        v184 = mplew.writeInt(" v184 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v448   , 0x2242680);      // 138
    if (sub_B7C3F0(mask, 138)) {
        mplew.StartNode(" Mask - " + 138);
        v185 = mplew.writeShort(" v185 ");
        v186 = mplew.writeInt(" v186 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v447   , 0x2244888);      // 287
    if (sub_B7C3F0(mask, 287)) {
        mplew.StartNode(" Mask - " + 287);
        v187 = mplew.writeShort(" v187 ");
        v188 = mplew.writeInt(" v188 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v446   , 0x2242008);      // 116
    if (sub_B7C3F0(mask, 116)) {
        mplew.StartNode(" Mask - " + 116);
        v189 = mplew.writeShort(" v189 ");
        v190 = mplew.writeInt(" v190 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v445   , 0x22448D0);      // 288
    if (sub_B7C3F0(mask, 288)) {
        mplew.StartNode(" Mask - " + 288);
        v191 = mplew.writeShort(" v191 ");
        v192 = mplew.writeInt(" v192 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v444   , 0x2244918);      // 289
    if (sub_B7C3F0(mask, 289)) {
        mplew.StartNode(" Mask - " + 289);
        v193 = mplew.writeShort(" v193 ");
        v194 = mplew.writeInt(" v194 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v443   , 0x22449A8);      // 291
    if (sub_B7C3F0(mask, 291)) {
        mplew.StartNode(" Mask - " + 291);
        v195 = mplew.writeShort(" v195 ");
        v196 = mplew.writeInt(" v196 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v442   , 0x22449F0);      // 292
    if (sub_B7C3F0(mask, 292)) {
        mplew.StartNode(" Mask - " + 292);
        v197 = mplew.writeShort(" v197 ");
        v198 = mplew.writeInt(" v198 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v441   , 0x2240550);      // 293
    if (sub_B7C3F0(mask, 293)) {
        mplew.StartNode(" Mask - " + 293);
        v199 = mplew.write(" v199 ");
        v200 = mplew.writeInt(" v200 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v440   , 0x2244A38);      // 297
    if (sub_B7C3F0(mask, 297)) {
        mplew.StartNode(" Mask - " + 297);
        v201 = mplew.writeShort(" v201 ");
        v202 = mplew.writeInt(" v202 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v439   , 0x2244CC0);      // 302
    if (sub_B7C3F0(mask, 302)) {
        mplew.StartNode(" Mask - " + 302);
        v203 = mplew.writeShort(" v203 ");
        v204 = mplew.writeInt(" v204 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v438   , 0x2244D50);      // 304
    if (sub_B7C3F0(mask, 304)) {
        mplew.StartNode(" Mask - " + 304);
        v205 = mplew.write(" v205 ");
        v206 = mplew.writeInt(" v206 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v437   , 0x2244DE0);      // 306
    if (sub_B7C3F0(mask, 306)) {
        mplew.StartNode(" Mask - " + 306);
        v207 = mplew.write(" v207 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v436   , 0x2242518);      // 309
    if (sub_B7C3F0(mask, 309)) {
        mplew.StartNode(" Mask - " + 309);
        v208 = mplew.writeShort(" v208 ");
        v209 = mplew.writeInt(" v209 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v435   , 0x2240790);      // 341
    if (sub_B7C3F0(mask, 341)) {
        mplew.StartNode(" Mask - " + 341);
        v210 = mplew.writeShort(" v210 ");
        v211 = mplew.writeInt(" v211 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v434   , 0x2244E28);      // 310
    if (sub_B7C3F0(mask, 310)) {
        mplew.StartNode(" Mask - " + 310);
        v212 = mplew.writeShort(" v212 ");
        v213 = mplew.writeInt(" v213 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v433   , 0x2243C28);      // 312
    if (sub_B7C3F0(mask, 312)) {
        mplew.StartNode(" Mask - " + 312);
        v214 = mplew.writeShort(" v214 ");
        v215 = mplew.writeInt(" v215 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v432   , 0x2244E70);      // 313
    if (sub_B7C3F0(mask, 313)) {
        mplew.StartNode(" Mask - " + 313);
        v216 = mplew.writeShort(" v216 ");
        v217 = mplew.writeInt(" v217 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v431   , 0x2244EB8);      // 314
    if (sub_B7C3F0(mask, 314)) {
        mplew.StartNode(" Mask - " + 314);
        v218 = mplew.writeShort(" v218 ");
        v219 = mplew.writeInt(" v219 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v430   , 0x2244F00);      // 315
    if (sub_B7C3F0(mask, 315)) {
        mplew.StartNode(" Mask - " + 315);
        v220 = mplew.writeShort(" v220 ");
        v221 = mplew.writeInt(" v221 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v429   , 0x2245020);      // 319
    if (sub_B7C3F0(mask, 319)) {
        mplew.StartNode(" Mask - " + 319);
        v222 = mplew.writeShort(" v222 ");
        v223 = mplew.writeInt(" v223 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v428   , 0x2245068);      // 320
    if (sub_B7C3F0(mask, 320)) {
        mplew.StartNode(" Mask - " + 320);
        v224 = mplew.writeShort(" v224 ");
        v225 = mplew.writeInt(" v225 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v427   , 0x22450B0);      // 321
    if (sub_B7C3F0(mask, 321)) {
        mplew.StartNode(" Mask - " + 321);
        v226 = mplew.writeShort(" v226 ");
        v227 = mplew.writeInt(" v227 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v426   , 0x22450F8);      // 322
    if (sub_B7C3F0(mask, 322)) {
        mplew.StartNode(" Mask - " + 322);
        v228 = mplew.writeShort(" v228 ");
        v229 = mplew.writeInt(" v229 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v425   , 0x2245140);      // 323
    if (sub_B7C3F0(mask, 323)) {
        mplew.StartNode(" Mask - " + 323);
        v230 = mplew.writeShort(" v230 ");
        v231 = mplew.writeInt(" v231 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v424   , 0x2245188);      // 324
    if (sub_B7C3F0(mask, 324)) {
        mplew.StartNode(" Mask - " + 324);
        v232 = mplew.writeShort(" v232 ");
        v233 = mplew.writeInt(" v233 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v423   , 0x2245380);      // 334
    if (sub_B7C3F0(mask, 334)) {
        mplew.StartNode(" Mask - " + 334);
        v234 = mplew.writeShort(" v234 ");
        v235 = mplew.writeInt(" v235 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v422   , 0x2242CF8);      // 167
    if (sub_B7C3F0(mask, 167)) {
        mplew.StartNode(" Mask - " + 167);
        v236 = mplew.writeShort(" v236 ");
        v237 = mplew.writeInt(" v237 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v421   , 0x2240700);      // 342
    if (sub_B7C3F0(mask, 342)) {
        mplew.StartNode(" Mask - " + 342);
        v238 = mplew.writeShort(" v238 ");
        v239 = mplew.writeInt(" v239 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v420   , 0x2245530);      // 346
    if (sub_B7C3F0(mask, 346)) {
        mplew.StartNode(" Mask - " + 346);
        v240 = mplew.writeShort(" v240 ");
        v241 = mplew.writeInt(" v241 ");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v419   , 0x22454E8);      // 344
    if (sub_B7C3F0(mask, 344)) {
        mplew.StartNode(" Mask - " + 344);
        mplew.EndNode(false);
    }
    //  0x234445578); // 347
    if (sub_B7C3F0(mask, 347)) {
        mplew.StartNode("Mask- " + 347);
        v242 = mplew.writeShort("v242");
        v243 = mplew.writeInt("v243");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v417   , 0x22455C0);      // 348
    if (sub_B7C3F0(mask, 348)) {
        mplew.StartNode("Mask- " + 348);
        v244 = mplew.writeShort("v244");
        v245 = mplew.writeInt("v245");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v416   , 0x2240748);      // 345
    if (sub_B7C3F0(mask, 345)) {
        mplew.StartNode("Mask- " + 345);
        v246 = mplew.writeInt("v246");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v415   , 0x2240748);      // 345
    if (sub_B7C3F0(mask, 345)) {
        mplew.StartNode("Mask- " + 345);
        v247 = mplew.writeInt("v247");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v414   , 0x22447F8);      // 328
    if (sub_B7C3F0(mask, 328)) {
        mplew.StartNode("Mask- " + 328);
        v248 = mplew.writeInt("v248");
        v249 = timeGetTime();
        v250 = mplew.writeInt("v250");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v413   , 0x2243D48);      // 252
    if (sub_B7C3F0(mask, 252)) {
        mplew.StartNode("Mask- " + 252);
        v251 = mplew.write("") != 0;
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v412   , 0x22407D8);      // 142
    if (sub_B7C3F0(mask, 142)) {
        mplew.StartNode("Mask- " + 142);
        v252 = mplew.writeInt("v252");
        v253 = mplew.writeInt("v253");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v411   , 0x2245920);      // 360
    if (sub_B7C3F0(mask, 360)) {
        mplew.StartNode("Mask- " + 360);
        v254 = mplew.writeInt("v254");
        v255 = mplew.writeInt("v255");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v410   , 0x2245A40);      // 365
    if (sub_B7C3F0(mask, 365)) {
        mplew.StartNode("Mask- " + 365);
        v256 = mplew.writeShort("v256");
        v257 = mplew.writeInt("v257");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v409   , 0x2244D98);      // 305
    if (sub_B7C3F0(mask, 305)) {
        mplew.StartNode("Mask- " + 305);
        v258 = mplew.writeShort("v258");
        v259 = mplew.writeInt("v259");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v408   , 0x2245E78);      // 381
    if (sub_B7C3F0(mask, 381)) {
        mplew.StartNode("Mask- " + 381);
        v260 = mplew.writeShort("v260");
        v261 = mplew.writeInt("v261");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v407   , 0x2245EC0);      // 382
    if (sub_B7C3F0(mask, 382)) {
        mplew.StartNode("Mask- " + 382);
        v262 = mplew.writeShort("v262");
        v263 = mplew.writeInt("v263");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v406   , 0x2246028);      // 387
    if (sub_B7C3F0(mask, 387)) {
        mplew.StartNode("Mask- " + 387);
        v264 = mplew.writeShort("v264");
        v265 = mplew.writeInt("v265");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v405   , 0x2246070);      // 388
    if (sub_B7C3F0(mask, 388)) {
        mplew.StartNode("Mask- " + 388);
        v266 = mplew.writeShort("v266");
        v267 = mplew.writeInt("v267");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v404   , 0x22460B8);      // 389
    if (sub_B7C3F0(mask, 389)) {
        mplew.StartNode("Mask- " + 389);
        v268 = mplew.writeShort("v268");
        v269 = mplew.writeInt("v269");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v403   , 0x2246DA8);      // 401
    if (sub_B7C3F0(mask, 401)) {
        mplew.StartNode("Mask- " + 401);
        v270 = mplew.writeShort("v270");
        v271 = mplew.writeInt("v271");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v402   , 0x2243B98);      // 235
    if (sub_B7C3F0(mask, 235)) {
        mplew.StartNode("Mask- " + 235);
        v272 = mplew.writeShort("v272");
        v273 = mplew.writeInt("v273");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v401   , 0x2246898);      // 420
    if (sub_B7C3F0(mask, 420)) {
        mplew.StartNode("Mask- " + 420);
        v274 = mplew.writeShort("v274");
        v275 = mplew.writeInt("v275");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v400   , 0x2246AD8);      // 428
    if (sub_B7C3F0(mask, 428)) {
        mplew.StartNode("Mask- " + 428);
        v276 = mplew.writeInt("v276");
        v277 = mplew.writeInt("v277");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v399   , 0x2246B20);      // 429
    if (sub_B7C3F0(mask, 429)) {
        mplew.StartNode("Mask- " + 429);
        v278 = mplew.writeShort("v278");
        v279 = mplew.writeInt("v279");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v398   , 0x2246B20);      // 429
    if (sub_B7C3F0(mask, 429)) {
        mplew.StartNode("Mask- " + 429);
        v280 = mplew.writeInt("v280");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v397   , 0x2246C88);      // 434
    if (sub_B7C3F0(mask, 434)) {
        mplew.StartNode("Mask- " + 434);
        v281 = mplew.writeShort("v281");
        v282 = mplew.writeInt("v282");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v396   , 0x2246EC8);      // 440
    if (sub_B7C3F0(mask, 440)) {
        mplew.StartNode("Mask- " + 440);
        v283 = mplew.writeInt("v283");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v395   , 0x2247108);      // 448
    if (sub_B7C3F0(mask, 448)) {
        mplew.StartNode("Mask- " + 448);
        v284 = mplew.writeInt("v284");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v394   , 0x22470C0);      // 479
    if (sub_B7C3F0(mask, 479)) {
        mplew.StartNode("Mask- " + 479);
        v285 = mplew.writeInt("v285");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v393   , 0x2247270);      // 454
    if (sub_B7C3F0(mask, 454)) {
        mplew.StartNode("Mask- " + 454);
        v286 = mplew.writeShort("v286");
        v287 = mplew.writeInt("v287");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v392   , 0x2247420);      // 456
    if (sub_B7C3F0(mask, 456)) {
        mplew.StartNode("Mask- " + 456);
        v288 = mplew.writeShort("v288");
        v289 = mplew.writeInt("v289");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v391   , 0x2247300);      // 474
    if (sub_B7C3F0(mask, 474)) {
        mplew.StartNode("Mask- " + 474);
        v290 = mplew.writeShort("v290");
        v291 = mplew.writeInt("v291");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v390   , 0x2247348);      // 475
    if (sub_B7C3F0(mask, 475)) {
        mplew.StartNode("Mask- " + 475);
        v292 = mplew.writeShort("v292");
        v293 = mplew.writeInt("v293");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v389   , 0x2240628);      // 478
    if (sub_B7C3F0(mask, 478)) {
        mplew.StartNode("Mask- " + 478);
        v294 = mplew.writeInt("v294");
        v295 = mplew.writeInt("v295");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v388   , 0x2247468);      // 457
    if (sub_B7C3F0(mask, 457)) {
        mplew.StartNode("Mask- " + 457);
        v296 = mplew.writeShort("v296");
        v297 = mplew.writeInt("v297");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v387   , 0x2247810);      // 469
    if (sub_B7C3F0(mask, 469)) {
        mplew.StartNode("Mask- " + 469);
        v298 = mplew.writeShort("v298");
        v299 = mplew.writeInt("v299");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v386   , 0x2247540);      // 458
    if (sub_B7C3F0(mask, 458)) {
        mplew.StartNode("Mask- " + 458);
        v300 = mplew.writeShort("v300");
        v301 = mplew.writeInt("v301");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v385   , 0x2247540);      // 458
    if (sub_B7C3F0(mask, 458)) {
        mplew.StartNode("Mask- " + 458);
        v302 = mplew.writeInt("v302");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v384   , 0x2247588);      // 465
    if (sub_B7C3F0(mask, 465)) {
        mplew.StartNode("Mask- " + 465);
        v303 = mplew.writeShort("v303");
        v304 = mplew.writeInt("v304");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v383   , 0x22475D0);      // 459
    if (sub_B7C3F0(mask, 459)) {
        mplew.StartNode("Mask- " + 459);
        v305 = mplew.writeShort("v305");
        v306 = mplew.writeInt("v306");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v382   , 0x2247660);      // 462
    if (sub_B7C3F0(mask, 462)) {
        mplew.StartNode("Mask- " + 462);
        v307 = mplew.writeShort("v307");
        v308 = mplew.writeInt("v308");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v381   , 0x22476A8);      // 463
    if (sub_B7C3F0(mask, 463)) {
        mplew.StartNode("Mask- " + 463);
        v309 = mplew.writeShort("v309");
        v310 = mplew.writeInt("v310");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v380   , 0x22476F0);      // 464
    if (sub_B7C3F0(mask, 464)) {
        mplew.StartNode("Mask- " + 464);
        v311 = mplew.writeShort("v311");
        v312 = mplew.writeInt("v312");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v379   , 0x2247780);      // 467
    if (sub_B7C3F0(mask, 467)) {
        mplew.StartNode("Mask- " + 467);
        v313 = mplew.writeShort("v313");
        v314 = mplew.writeInt("v314");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v378   , 0x2246DA8);      // 465
    if (sub_B7C3F0(mask, 465)) {
        mplew.StartNode("Mask- " + 465);
        v315 = mplew.writeShort("v315");
        v316 = mplew.writeInt("v316");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v377   , 0x2247810);      // 469
    if (sub_B7C3F0(mask, 469)) {
        mplew.StartNode("Mask- " + 469);
        v317 = mplew.writeShort("v317");
        v318 = mplew.writeInt("v318");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v376   , 0x2241870);      // 91
    if (sub_B7C3F0(mask, 91)) {
        mplew.StartNode("Mask- " + 91);
        v319 = mplew.writeShort("v319");
        v320 = mplew.writeInt("v320");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v375   , 0x2246C88);      // 434
    if (sub_B7C3F0(mask, 434)) {
        mplew.StartNode("Mask- " + 434);
        v321 = mplew.writeShort("v321");
        v322 = mplew.writeInt("v322");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v374   , 0x22474F8);      // 449
    if (sub_B7C3F0(mask, 449)) {
        mplew.StartNode("Mask- " + 449);
        v323 = mplew.writeShort("v323");
        v324 = mplew.writeInt("v324");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v373   , 0x2247858);      // 460
    if (sub_B7C3F0(mask, 460)) {
        mplew.StartNode("Mask- " + 460);
        v325 = mplew.writeShort("v325");
        v326 = mplew.writeInt("v326");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v372   , 0x22478A0);      // 470
    if (sub_B7C3F0(mask, 470)) {
        mplew.StartNode("Mask- " + 470);
        v327 = mplew.writeShort("v327");
        v328 = mplew.writeInt("v328");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v371   , 0x22478E8);      // 485
    if (sub_B7C3F0(mask, 485)) {
        mplew.StartNode("Mask- " + 485);
        v329 = mplew.writeInt("v329");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v370   , 0x2247930);      // 486
    if (sub_B7C3F0(mask, 486)) {
        mplew.StartNode("Mask- " + 486);
        v330 = mplew.writeInt("v330");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v369   , 0x22479C0);      // 488
    if (sub_B7C3F0(mask, 488)) {
        mplew.StartNode("Mask- " + 488);
        v331 = mplew.writeShort("v331");
        v332 = mplew.writeInt("v332");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v368   , 0x22450B0);      // 321
    if (sub_B7C3F0(mask, 321)) {
        mplew.StartNode("Mask- " + 321);
        v333 = mplew.write("v333");
        mplew.EndNode(false);
    }
    v334 = mplew.write("");
    v335 = mplew.write("")
    v336 = mplew.write("v336")
    //   Check_Buff(&v562, &v367   , 0x2245578);      // 347
    if (sub_B7C3F0(mask, 347)) {
        mplew.StartNode("Mask- " + 347);
        v337 = mplew.write("v337");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v366   , 0x22455C0);      // 348
    if (sub_B7C3F0(mask, 348)) {
        mplew.StartNode("Mask- " + 348);
        v338 = mplew.write("v338");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v365   , 0x2246028);      // 387
    if (sub_B7C3F0(mask, 387)) {
        mplew.StartNode("Mask- " + 387);
        v339 = mplew.write("v339");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v364   , 0x2246388);      // 403
    if (sub_B7C3F0(mask, 403)) {
        mplew.StartNode("Mask- " + 403);
        v340 = mplew.writeInt("v340");
        v341 = mplew.writeInt("v341");
        v342 = mplew.writeInt("v342");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v363   , 0x2246418);      // 405
    if (sub_B7C3F0(mask, 405)) {
        mplew.StartNode("Mask- " + 405);
        v343 = mplew.writeInt("v343");
        v344 = mplew.writeInt("v344");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v362   , 0x2246898);      // 420
    if (sub_B7C3F0(mask, 420)) {
        mplew.StartNode("Mask- " + 420);
        v345 = mplew.writeInt("v345");
        v346 = mplew.write("v346");
        v347 = mplew.writeInt("v347");
        v348 = mplew.writeInt("v348");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v361   , 0x2246EC8);      // 440
    if (sub_B7C3F0(mask, 440)) {
        mplew.StartNode("Mask- " + 440);
        v349 = mplew.write("v349");
        mplew.EndNode(false);
    }
    //   Check_Buff(&v562, &v360   , 0x2247270);      // 454
    if (sub_B7C3F0(mask, 454)) {
        mplew.StartNode("Mask- " + 454);
        v350 = mplew.writeInt("v350");
        mplew.EndNode(false);
    }
    mplew.writeInt("sub_E8C3D0");
    mplew.writeInt("sub_E8C3D0");
    mplew.writeInt("sub_E8C3D0");
    mplew.writeInt("sub_E8C3D0");
    v351 = mplew.writeInt("v351");



    mplew.StartNode("for ( i = 0; i < 9; ++i )");
    mplew.writeInt("", 0);
    mplew.writeInt("", 0);
    mplew.write("", 1);
    mplew.writeInt("CHAR_MAGIC_SPAWN");//1

    mplew.writeZeroBytes(8);
    mplew.write("", 1);
    mplew.writeInt("CHAR_MAGIC_SPAWN");//2

    mplew.writeZeroBytes(10);
    mplew.write("", 1);
    mplew.writeInt("CHAR_MAGIC_SPAWN");//3

    mplew.writeShort("", 0);
    mplew.writeInt("ItemId()");
    mplew.writeInt("buffSrc");
    mplew.write("", 1);
    mplew.writeInt("CHAR_MAGIC_SPAWN");//4
    mplew.writeLong(0);
    mplew.write("", 1);
    mplew.writeInt("CHAR_MAGIC_SPAWN");//5
    mplew.write("", 0);//129
    mplew.writeInt("Randomizer.nextInt()");
    mplew.writeZeroBytes(10);
    mplew.write("", 1);
    mplew.writeInt("CHAR_MAGIC_SPAWN");//6
    mplew.writeZeroBytes(16);
    mplew.write("", 1);
    mplew.writeInt("CHAR_MAGIC_SPAWN");//7
    mplew.writeZeroBytes(10);
    mplew.write("", 1);
    mplew.writeInt("CHAR_MAGIC_SPAWN");//8

    mplew.writeZeroBytes(10);
    mplew.write("", 1);
    mplew.writeInt("CHAR_MAGIC_SPAWN");//9
    mplew.EndNode(false);
    //   for ( i = 0; i < 9; ++i )
    //   {
    //     v352 = sub_419000 (/* &v359, i */);
    //     // Check_Buff(&v562, &v358, v352);
    //     if(sub_B7C3F0(mask,))
    //     {
    //       (*(*v353 + 24))(v353, iPacket);
    //     }
    //   }
    // //   Check_Buff(&v562, &v357   , 0x2242518);      // 309
    // if(sub_B7C3F0(mask, 309))
    //   {
    //     v354 = mplew.writeInt("v354");
    // }
    //   return a2;
}
