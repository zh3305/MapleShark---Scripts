function HashMap() {
    var size = 0;
    var entry = new Object();
    this.put = function(key, value) {
        if (!this.containsKey(key)) { size++ }
        entry[key] = value
    };
    this.get = function(key) { if (this.containsKey(key)) { return entry[key] } else { return null } };
    this.remove = function(key) { if (delete entry[key]) { size-- } };
    this.containsKey = function(key) { return (key in entry) };
    this.containsValue = function(value) { for (var prop in entry) { if (entry[prop] == value) { return true } } return false };
    this.values = function() { var values = new Array(size); for (var prop in entry) { values.push(entry[prop]) } return values; };
    this.keys = function() { var keys = new Array(size); for (var prop in entry) { keys.push(prop) } return keys; };
    this.size = function() { return size; }
}
var map = new HashMap();
map.put(0x28b1bf0, 60);
map.put(0x28b21d8, 74);
map.put(0x28b2220, 75);
map.put(0x28b2268, 328);
map.put(0x28b2070, 70);
map.put(0x28b20b8, 190);
map.put(0x28b2190, 73);
map.put(0x28b2148, 72);
map.put(0x28b2418, 82);
map.put(0x28b2460, 185);
map.put(0x28b24a8, 83);
map.put(0x28b24f0, 84);
map.put(0x28b40c8, 184);
map.put(0x28b4110, 189);
map.put(0x28b2538, 169);
map.put(0x28b25c8, 172);
map.put(0x28b2610, 170);
map.put(0x28b2658, 171);
map.put(0x28b2100, 71);
map.put(0x28b2100, 71);
map.put(0x28b13c8, 78);
map.put(0x28b1e30, 63);
map.put(0x28b2028, 69);
map.put(0x28b26a0, 85);
map.put(0x28b26e8, 101);
map.put(0x28b2898, 91);
map.put(0x28b28e0, 238);
map.put(0x28b1770, 239);
map.put(0x28b29b8, 92);
map.put(0x28b2bf8, 98);
map.put(0x28b2c88, 102);
map.put(0x28b2cd0, 111);
map.put(0x28b2d18, 103);
map.put(0x28b2df0, 105);
map.put(0x28b2e38, 106);
map.put(0x28b2e80, 107);
map.put(0x28b2ec8, 108);
map.put(0x28b2f10, 109);
map.put(0x28b2f58, 110);
map.put(0x28b3270, 121);
map.put(0x28b8958, 499);
map.put(0x28b3300, 123);
map.put(0x28b3348, 124);
map.put(0x28b3390, 125);
map.put(0x28b33d8, 127);
map.put(0x28b34b0, 130);
map.put(0x28b3540, 131);
map.put(0x28b3588, 186);
map.put(0x28b35d0, 167);
map.put(0x28b3a98, 134);
map.put(0x28b36a8, 136);
map.put(0x28b3780, 147);
map.put(0x28b37c8, 309);
map.put(0x28b37c8, 309);
map.put(0x28b3a08, 155);
map.put(0x28b3738, 138);
map.put(0x28b3a50, 156);
map.put(0x28b3b70, 159);
map.put(0x28b3bb8, 243);
map.put(0x28b3db0, 165);
map.put(0x28b3e88, 173);
map.put(0x28b3ed0, 180);
map.put(0x28b41e8, 188);
map.put(0x28b3078, 115);
map.put(0x28b4158, 194);
map.put(0x28b5bc8, 201);
map.put(0x28b1260, 203);
map.put(0x28b4428, 205);
map.put(0x28b4620, 213);
map.put(0x28b4788, 218);
map.put(0x28b47d0, 237);
map.put(0x28b4860, 220);
map.put(0x28b1848, 242);
map.put(0x28b48a8, 255);
map.put(0x28b48f0, 221);
map.put(0x28b4a10, 226);
map.put(0x28b9138, 227);
map.put(0x28b9180, 412);
map.put(0x28b4b78, 230);
map.put(0x28b4bc0, 232);
map.put(0x28b4db8, 235);
map.put(0x28b4ae8, 244);
map.put(0x28b2a00, 246);
map.put(0x28b4d28, 247);
map.put(0x28b4e48, 245);
map.put(0x28b4ed8, 253);
map.put(0x28b4f20, 254);
map.put(0x28b4fb0, 256);
map.put(0x28b12f0, 257);
map.put(0x28b1338, 259);
map.put(0x28b5040, 260);
map.put(0x28b5088, 269);
map.put(0x28b50d0, 126);
map.put(0x28b4e90, 251);
map.put(0x28b5160, 264);
map.put(0x28b51a8, 265);
map.put(0x28b51f0, 266);
map.put(0x28b5238, 267);
map.put(0x28b5238, 267);
map.put(0x28b5280, 268);
map.put(0x28b52c8, 270);
map.put(0x28b5310, 271);
map.put(0x28b5358, 272);
map.put(0x28b53a0, 273);
map.put(0x28b53e8, 274);
map.put(0x28b5430, 275);
map.put(0x28b5478, 333);
map.put(0x28b54c0, 276);
map.put(0x28b5508, 277);
map.put(0x28b5550, 278);
map.put(0x28b5598, 279);
map.put(0x28b4398, 200);
map.put(0x28b4c50, 248);
map.put(0x28b3660, 135);
map.put(0x28b57d8, 284);
map.put(0x28b2fe8, 113);
map.put(0x28b5820, 285);
map.put(0x28b5868, 286);
map.put(0x28b1800, 287);
map.put(0x28b58f8, 289);
map.put(0x28b5940, 290);
map.put(0x28b1380, 291);
map.put(0x28b5988, 295);
map.put(0x28b5c10, 300);
map.put(0x28b5ca0, 302);
map.put(0x28b5d30, 304);
map.put(0x28b34f8, 307);
map.put(0x28b1530, 339);
map.put(0x28b5d78, 308);
map.put(0x28b4b30, 310);
map.put(0x28b5dc0, 311);
map.put(0x28b5e08, 312);
map.put(0x28b5e50, 313);
map.put(0x28b5f70, 317);
map.put(0x28b5fb8, 318);
map.put(0x28b6000, 319);
map.put(0x28b6048, 320);
map.put(0x28b6090, 321);
map.put(0x28b60d8, 322);
map.put(0x28b62d0, 332);
map.put(0x28b3cd8, 163);
map.put(0x28b14a0, 340);
map.put(0x28b6480, 344);
map.put(0x28b6438, 342);
map.put(0x28b64c8, 345);
map.put(0x28b6510, 346);
map.put(0x28b14e8, 343);
map.put(0x28b14e8, 343);
map.put(0x28b5748, 326);
map.put(0x28b4c50, 248);
map.put(0x28b1578, 139);
map.put(0x28b6870, 359);
map.put(0x28b6990, 364);
map.put(0x28b5ce8, 303);
map.put(0x28b6dc8, 380);
map.put(0x28b6e10, 381);
map.put(0x28b6f78, 386);
map.put(0x28b8400, 462);
map.put(0x28b8448, 463);
map.put(0x28b8490, 464);
map.put(0x28b84d8, 465);
map.put(0x28b8520, 466);
map.put(0x28b8568, 467);
map.put(0x28b85b0, 468);
map.put(0x28b6fc0, 387);
map.put(0x28b7008, 388);
map.put(0x28b7dd0, 400);
map.put(0x28b4aa0, 229);
map.put(0x28b78c0, 422);
map.put(0x28b7b00, 430);
map.put(0x28b7b48, 431);
map.put(0x28b7b48, 431);
map.put(0x28b7cb0, 436);
map.put(0x28b7ef0, 442);
map.put(0x28b80e8, 450);
map.put(0x28b80a0, 449);
map.put(0x28b2928, 240);
map.put(0x28b2970, 241);
map.put(0x28b8250, 456);
map.put(0x28b17b8, 402);
map.put(0x28b8718, 473);
map.put(0x28b8760, 474);
map.put(0x28b8298, 457);
map.put(0x28b86d0, 472);
map.put(0x28b6750, 355);
map.put(0x28b8ac0, 483);
map.put(0x28b89a0, 501);
map.put(0x28b89e8, 502);
map.put(0x28b16e0, 505);
map.put(0x28b8b08, 484);
map.put(0x28b8eb0, 496);
map.put(0x28b8be0, 485);
map.put(0x28b8be0, 485);
map.put(0x28b8c28, 492);
map.put(0x28b8c70, 486);
map.put(0x28b8d00, 489);
map.put(0x28b8d48, 490);
map.put(0x28b8d90, 491);
map.put(0x28b8e20, 494);
map.put(0x28b7dd0, 400);
map.put(0x28b8eb0, 496);
map.put(0x28b27c0, 88);
map.put(0x28b7cb0, 436);
map.put(0x28b8b98, 508);
map.put(0x28b8ef8, 487);
map.put(0x28b8f40, 497);
map.put(0x28b8f88, 512);
map.put(0x28b8fd0, 513);
map.put(0x28b9060, 515);
map.put(0x28b90a8, 516);
map.put(0x28b90f0, 517);
map.put(0x28b6000, 319);
map.put(0x28b64c8, 345);
map.put(0x28b6510, 346);
map.put(0x28b6f78, 386);
map.put(0x28b7368, 405);
map.put(0x28b73f8, 407);
map.put(0x28b78c0, 422);
map.put(0x28b7ef0, 442);
map.put(0x28b8250, 456);
map.put(0x28b17b8, 402);
map.put(0x28b72d8, 403);
map.put(0x28b7320, 404);
map.put(0x28b8718, 473);
map.put(0x28b1848, 242);
map.put(0x28b34f8, 307);

function sub_42CEB0(bool) {
    return bool;
}

function Check_Buff(mask, Key) {
    return sub_B7C3F0(mask, map.get(Key))
}

function sub_B7C3F0(uFlag, a2) {
    var result;
    if (a2 < 0x220) {
        result = (uFlag[a2 >> 5] >> (31 - (a2 & 0x1F))) & 1;
    } else {
        result = 0;
    }
    return result;
}
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
    // mplew.StartNode(" SecondaryStat::DecodeForRemote");
    DecodeForRemote();
    // mplew.EndNode(false);
    m_nJobCode = mplew.writeShort("m_nJobCode");
    m_nSubJobCode = mplew.writeShort("m_nSubJobCode");
    m_nTotalCHUC = mplew.writeInt("m_nTotalCHUC");
    mplew.writeInt("unk 139  int");
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
    if (mplew.write("137 new", 0)) {
        //sub_EC3500(v16, iPacket);
        mplew.writeInt("unk", 0);
        mplew.writeInt("unk", 0);
    }
    v140 = mplew.writePos("chr.getTruePosition()");
    mplew.write("chr.getStance()");
    v15 = mplew.writeShort("chr.getFH()");
    mplew.write("139 new", 0);
    mplew.StartNode("chr.getPets()");
    i = 0;
    while (mplew.write("")) {
        mplew.StartNode("Pet " + i);
        v31 = mplew.writeInt("getPetIndex(pet)");
        sub_CE5A20( /*  */ )
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
    } else if (unk_mask & 0x10) {
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
    if (parseInt(m_nJobCode / 100) != 61 && m_nJobCode != 6000) {} else {
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
        //     || v93 == 1902040//1902040 第1阶段龙
        //     || v93 == 1902041//1902041 第2阶段龙
        //     || v93 == 1902042//1902042 第3阶段龙
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
    sub_1628210( /* iPacket */ );
    mplew.EndNode(false);
    mplew.StartNode("sub_16922A0");
    sub_16922A0( /* iPacket */ );
    mplew.EndNode(false);
    mplew.StartNode("sub_16AB6F0");
    sub_16AB6F0( /* v4, iPacket */ );
    mplew.EndNode(false);
    mplew.StartNode("sub_16623B0");
    sub_16623B0( /* v4, iPacket */ );
    mplew.EndNode(false);
    mplew.StartNode("sub_1627C50");
    sub_1627C50( /* v4, iPacket */ );
    mplew.EndNode(false);
    v108 = mplew.write("v108", 0);
    mplew.write("", 1);
    v109 = mplew.writeInt("v109", 0);
    v113 = mplew.writeInt("v113", 0);
    mplew.StartNode("sub_17EEC10");
    sub_17EEC10( /* iPacket_1 */ );
    mplew.EndNode(false);
    mplew.writeInt("", 0);
    mplew.writeInt("", 0);
    mplew.writeInt("", 0);
    mplew.StartNode("sub_168BD30");
    sub_168BD30( /* iPacket */ );
    mplew.EndNode(false);
    mplew.StartNode("sub_1A20350");
    sub_1A20350( /* iPacket */ );
    mplew.EndNode(false);
}

function sub_1A20350( /*  */ )
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

function sub_17EEC10( /*  */ ) {
    result = mplew.writeInt("result");
    if (result > 0) {
        v7 = result;
        while (1) {
            v5 = mplew.writeInt("v5");
            v6 = v5;
            a2 = mplew.writeInt("a2");
            if (v6 == 0x1607E49)
                break;
            if (v6 == 0x280E268) {} else {
                if (v6 == 0x280E26A) {
                    break;
                }
                if (v6 == 0x271A02A) {} else {
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

function sub_1627C50( /*  */ ) {
    result = mplew.writeInt("result");
}

function sub_16623B0( /*  */ ) {
    sub_EA4770( /* this + 17079, a2 */ );
}

function sub_EA4770( /*  */ ) {
    mplew.write("this");
    result = mplew.writeInt("result");
}

function sub_16AB6F0( /*  */ ) {
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

function sub_16922A0( /*  */ ) {
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

function sub_1628210( /*  */ )
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
        } else {
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

function sub_CE5A20( /*  */ )
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

function sub_18A4210( /*  */ )
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

function UnkFunctin6( /*  */ )
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
            } else {
                mplew.write("bIsZeroBetaLook") != 0;
            }
        } else {
            mplew.writeInt("nXenonDefFaceAcc");
        }
    } else {
        mplew.writeInt("nDemonSlayerDefFaceAcc");
    }
    mplew.write("nMixedHairColor");
    mplew.write("nMixHairPercent");
    v13 = mplew.writeBuffer("unk new", 5);
}

function sub_5917B0(job /*  */ ) {
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
    } else {
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
    for (var index = 0; index < 0x220; index++) {
        if (sub_B7C3F0(mask, index)) {
            mplew.AddComment("--- Buff " + index.toString(10) + "---");
        }
    }
    mplew.StartNode("SecondaryStat::DecodeForRemote");
    if (Check_Buff(mask, 0x28B1BF0)) {
        mplew.StartNode("Mask - " + map.get(0x28B1BF0)); //60
        v3 = mplew.write("v3");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B21D8)) {
        mplew.StartNode("Mask - " + map.get(0x28B21D8)); //74
        v4 = mplew.write("v4");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2220)) {
        mplew.StartNode("Mask - " + map.get(0x28B2220)); //75
        v5 = mplew.writeShort("v5");
        v6 = mplew.writeInt("v6");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2268)) {
        mplew.StartNode("Mask - " + map.get(0x28B2268)); //328
        v7 = mplew.writeShort("v7");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2070)) {
        mplew.StartNode("Mask - " + map.get(0x28B2070)); //70
        v8 = mplew.writeShort("v8");
        v9 = mplew.writeInt("v9");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B20B8)) {
        mplew.StartNode("Mask - " + map.get(0x28B20B8)); //190
        v10 = mplew.write("v10");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2190)) {
        mplew.StartNode("Mask - " + map.get(0x28B2190)); //73
        v11 = mplew.writeShort("v11");
        v12 = mplew.writeInt("v12");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2148)) {
        mplew.StartNode("Mask - " + map.get(0x28B2148)); //72
        v13 = mplew.writeShort("v13");
        v14 = mplew.writeInt("v14");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2418)) {
        mplew.StartNode("Mask - " + map.get(0x28B2418)); //82
        v15 = mplew.writeShort("v15");
        v16 = mplew.writeInt("v16");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2460)) {
        mplew.StartNode("Mask - " + map.get(0x28B2460)); //185
        v17 = mplew.writeShort("v17");
        v18 = mplew.writeInt("v18");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B24A8)) {
        mplew.StartNode("Mask - " + map.get(0x28B24A8)); //83
        v19 = mplew.writeShort("v19");
        v20 = mplew.writeInt("v20");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B24F0)) {
        mplew.StartNode("Mask - " + map.get(0x28B24F0)); //84
        v21 = mplew.writeShort("v21");
        v22 = mplew.writeInt("v22");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B40C8)) {
        mplew.StartNode("Mask - " + map.get(0x28B40C8)); //184
        v23 = mplew.writeShort("v23");
        v24 = mplew.writeInt("v24");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4110)) {
        mplew.StartNode("Mask - " + map.get(0x28B4110)); //189
        v25 = mplew.writeShort("v25");
        v26 = mplew.writeInt("v26");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2538)) {
        mplew.StartNode("Mask - " + map.get(0x28B2538)); //169
        v27 = mplew.writeShort("v27");
        v28 = mplew.writeInt("v28");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B25C8)) {
        mplew.StartNode("Mask - " + map.get(0x28B25C8)); //172
        v29 = mplew.write("v29");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2610)) {
        mplew.StartNode("Mask - " + map.get(0x28B2610)); //170
        v30 = mplew.writeShort("v30");
        v31 = mplew.writeInt("v31");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2658)) {
        mplew.StartNode("Mask - " + map.get(0x28B2658)); //171
        v32 = mplew.writeShort("v32");
        v33 = mplew.writeInt("v33");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2100)) {
        mplew.StartNode("Mask - " + map.get(0x28B2100)); //71
        v34 = mplew.writeShort("v34");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2100)) {
        mplew.StartNode("Mask - " + map.get(0x28B2100)); //71
        v35 = mplew.writeShort("v35");
        v36 = mplew.writeInt("v36");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B13C8)) {
        mplew.StartNode("Mask - " + map.get(0x28B13C8)); //78
        v37 = mplew.writeShort("v37");
        v38 = mplew.writeInt("v38");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B1E30)) {
        mplew.StartNode("Mask - " + map.get(0x28B1E30));
        mplew.EndNode(false);
    } //63
    if (Check_Buff(mask, 0x28B2028)) {
        mplew.StartNode("Mask - " + map.get(0x28B2028));
        mplew.EndNode(false);
    } //69
    if (Check_Buff(mask, 0x28B26A0)) {
        mplew.StartNode("Mask - " + map.get(0x28B26A0)); //85
        v39 = mplew.writeShort("v39");
        v40 = mplew.writeInt("v40");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B26E8)) {
        mplew.StartNode("Mask - " + map.get(0x28B26E8)); //101
        v41 = mplew.writeShort("v41");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2898)) {
        mplew.StartNode("Mask - " + map.get(0x28B2898)); //91
        v42 = mplew.writeShort("v42");
        v43 = mplew.writeInt("v43");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B28E0)) {
        mplew.StartNode("Mask - " + map.get(0x28B28E0)); //238
        v44 = mplew.writeShort("v44");
        v45 = mplew.writeInt("v45");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B1770)) {
        mplew.StartNode("Mask - " + map.get(0x28B1770)); //239
        v46 = mplew.writeShort("v46");
        v47 = mplew.writeInt("v47");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B29B8)) {
        mplew.StartNode("Mask - " + map.get(0x28B29B8)); //92
        v48 = mplew.writeInt("v48");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2BF8)) {
        mplew.StartNode("Mask - " + map.get(0x28B2BF8)); //98
        v49 = mplew.writeShort("v49");
        v50 = mplew.writeInt("v50");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2C88)) {
        mplew.StartNode("Mask - " + map.get(0x28B2C88)); //102
        v51 = mplew.writeShort("v51");
        v52 = mplew.writeInt("v52");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2CD0)) {
        mplew.StartNode("Mask - " + map.get(0x28B2CD0)); //111
        v53 = mplew.writeShort("v53");
        v54 = mplew.writeInt("v54");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2D18)) {
        mplew.StartNode("Mask - " + map.get(0x28B2D18)); //103
        v55 = mplew.writeShort("v55");
        v56 = mplew.writeInt("v56");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2DF0)) {
        mplew.StartNode("Mask - " + map.get(0x28B2DF0)); //105
        v57 = mplew.writeInt("v57");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2E38)) {
        mplew.StartNode("Mask - " + map.get(0x28B2E38)); //106
        v58 = mplew.writeInt("v58");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2E80)) {
        mplew.StartNode("Mask - " + map.get(0x28B2E80)); //107
        v59 = mplew.writeInt("v59");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2EC8)) {
        mplew.StartNode("Mask - " + map.get(0x28B2EC8)); //108
        v60 = mplew.writeInt("v60");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2F10)) {
        mplew.StartNode("Mask - " + map.get(0x28B2F10)); //109
        v61 = mplew.writeShort("v61");
        v62 = mplew.writeInt("v62");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2F58)) {
        mplew.StartNode("Mask - " + map.get(0x28B2F58));
        mplew.EndNode(false);
    } //110
    if (Check_Buff(mask, 0x28B3270)) {
        mplew.StartNode("Mask - " + map.get(0x28B3270)); //121
        v63 = mplew.writeShort("v63");
        v64 = mplew.writeInt("v64");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8958)) {
        mplew.StartNode("Mask - " + map.get(0x28B8958)); //499
        v65 = mplew.writeShort("v65");
        v66 = mplew.writeInt("v66");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3300)) {
        mplew.StartNode("Mask - " + map.get(0x28B3300)); //123
        v67 = mplew.writeShort("v67");
        v68 = mplew.writeInt("v68");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3348)) {
        mplew.StartNode("Mask - " + map.get(0x28B3348)); //124
        v69 = mplew.writeShort("v69");
        v70 = mplew.writeInt("v70");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3390)) {
        mplew.StartNode("Mask - " + map.get(0x28B3390)); //125
        v71 = mplew.writeShort("v71");
        v72 = mplew.writeInt("v72");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B33D8)) {
        mplew.StartNode("Mask - " + map.get(0x28B33D8)); //127
        v73 = mplew.writeInt("v73");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B34B0)) { // 130
        mplew.StartNode("Mask - " + map.get(0x28B34B0));
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3540)) {
        mplew.StartNode("Mask - " + map.get(0x28B3540)); //131
        v74 = mplew.writeShort("v74");
        v75 = mplew.writeInt("v75");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3588)) {
        mplew.StartNode("Mask - " + map.get(0x28B3588)); //186
        v76 = mplew.writeShort("v76");
        v77 = mplew.writeInt("v77");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B35D0)) {
        mplew.StartNode("Mask - " + map.get(0x28B35D0)); //167
        v78 = mplew.writeShort("v78");
        v79 = mplew.writeInt("v79");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3A98)) {
        mplew.StartNode("Mask - " + map.get(0x28B3A98)); //134
        v80 = mplew.writeShort("v80");
        v81 = mplew.writeInt("v81");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B36A8)) {
        mplew.StartNode("Mask - " + map.get(0x28B36A8)); //136
        v82 = mplew.writeShort("v82");
        v83 = mplew.writeInt("v83");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3780)) {
        mplew.StartNode("Mask - " + map.get(0x28B3780)); //147
        v84 = mplew.write("v84");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B37C8)) {
        mplew.StartNode("Mask - " + map.get(0x28B37C8)); //309
        v85 = mplew.write("v85");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B37C8)) {
        mplew.StartNode("Mask - " + map.get(0x28B37C8));
        mplew.EndNode(false);
    } //309
    if (Check_Buff(mask, 0x28B3A08)) {
        mplew.StartNode("Mask - " + map.get(0x28B3A08));
        mplew.EndNode(false);
    } //155
    if (Check_Buff(mask, 0x28B3738)) {
        mplew.StartNode("Mask - " + map.get(0x28B3738));
        mplew.EndNode(false);
    } //138
    if (Check_Buff(mask, 0x28B3A50)) {
        mplew.StartNode("Mask - " + map.get(0x28B3A50)); //156
        v86 = mplew.writeShort("v86");
        v87 = mplew.writeInt("v87");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3B70)) {
        mplew.StartNode("Mask - " + map.get(0x28B3B70));
        mplew.EndNode(false);
    } //159
    if (Check_Buff(mask, 0x28B3BB8)) {
        mplew.StartNode("Mask - " + map.get(0x28B3BB8));
        mplew.EndNode(false);
    } //243
    if (Check_Buff(mask, 0x28B3DB0)) {
        mplew.StartNode("Mask - " + map.get(0x28B3DB0)); //165
        v88 = mplew.writeShort("v88");
        v89 = mplew.writeInt("v89");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3E88)) {
        mplew.StartNode("Mask - " + map.get(0x28B3E88)); //173
        v90 = mplew.writeShort("v90");
        v91 = mplew.writeInt("v91");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3ED0)) {
        mplew.StartNode("Mask - " + map.get(0x28B3ED0)); //180
        v92 = mplew.writeShort("v92");
        v93 = mplew.writeInt("v93");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B41E8)) {
        mplew.StartNode("Mask - " + map.get(0x28B41E8)); //188
        v94 = mplew.writeShort("v94");
        v95 = mplew.writeInt("v95");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3078)) {
        mplew.StartNode("Mask - " + map.get(0x28B3078)); //115
        v96 = mplew.writeShort("v96");
        v97 = mplew.writeInt("v97");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4158)) {
        mplew.StartNode("Mask - " + map.get(0x28B4158));
        mplew.EndNode(false);
    } //194
    if (Check_Buff(mask, 0x28B5BC8)) {
        mplew.StartNode("Mask - " + map.get(0x28B5BC8)); //201
        v98 = mplew.writeShort("v98");
        v99 = mplew.writeInt("v99");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B1260)) {
        mplew.StartNode("Mask - " + map.get(0x28B1260)); //203
        v100 = mplew.writeShort("v100");
        v101 = mplew.writeInt("v101");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4428)) {
        mplew.StartNode("Mask - " + map.get(0x28B4428)); //205
        v102 = mplew.writeShort("v102");
        v103 = mplew.writeInt("v103");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4620)) {
        mplew.StartNode("Mask - " + map.get(0x28B4620)); //213
        v104 = mplew.writeShort("v104");
        v105 = mplew.writeInt("v105");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4788)) {
        mplew.StartNode("Mask - " + map.get(0x28B4788)); //218
        v106 = mplew.writeShort("v106");
        v107 = mplew.writeInt("v107");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B47D0)) {
        mplew.StartNode("Mask - " + map.get(0x28B47D0)); //237
        v108 = mplew.writeShort("v108");
        v109 = mplew.writeInt("v109");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4860)) {
        mplew.StartNode("Mask - " + map.get(0x28B4860)); //220
        v110 = mplew.writeShort("v110");
        v111 = mplew.writeInt("v111");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B1848)) {
        mplew.StartNode("Mask - " + map.get(0x28B1848)); //242
        v112 = mplew.writeShort("v112");
        v113 = mplew.writeInt("v113");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B48A8)) {
        mplew.StartNode("Mask - " + map.get(0x28B48A8)); //255
        v114 = mplew.writeShort("v114");
        v115 = mplew.writeInt("v115");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B48F0)) {
        mplew.StartNode("Mask - " + map.get(0x28B48F0)); //221
        v116 = mplew.writeShort("v116");
        v117 = mplew.writeInt("v117");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4A10)) {
        mplew.StartNode("Mask - " + map.get(0x28B4A10)); //226
        v118 = mplew.writeInt("v118");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B9138)) {
        mplew.StartNode("Mask - " + map.get(0x28B9138)); //227
        v119 = mplew.write("v119");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B9180)) {
        mplew.StartNode("Mask - " + map.get(0x28B9180)); //412
        v120 = mplew.write("v120");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4B78)) {
        mplew.StartNode("Mask - " + map.get(0x28B4B78)); //230
        v121 = mplew.writeShort("v121");
        v122 = mplew.writeInt("v122");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4BC0)) {
        mplew.StartNode("Mask - " + map.get(0x28B4BC0)); //232
        v123 = mplew.writeShort("v123");
        v124 = mplew.writeInt("v124");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4DB8)) {
        mplew.StartNode("Mask - " + map.get(0x28B4DB8)); //235
        v125 = mplew.writeShort("v125");
        v126 = mplew.writeInt("v126");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4AE8)) {
        mplew.StartNode("Mask - " + map.get(0x28B4AE8)); //244
        v127 = mplew.writeShort("v127");
        v128 = mplew.writeInt("v128");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2A00)) {
        mplew.StartNode("Mask - " + map.get(0x28B2A00)); //246
        v129 = mplew.writeShort("v129");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4D28)) {
        mplew.StartNode("Mask - " + map.get(0x28B4D28)); //247
        v130 = mplew.writeInt("v130");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4E48)) {
        mplew.StartNode("Mask - " + map.get(0x28B4E48)); //245
        v131 = mplew.writeShort("v131");
        v132 = mplew.writeInt("v132");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4ED8)) {
        mplew.StartNode("Mask - " + map.get(0x28B4ED8)); //253
        v133 = mplew.writeShort("v133");
        v134 = mplew.writeInt("v134");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4F20)) {
        mplew.StartNode("Mask - " + map.get(0x28B4F20)); //254
        v135 = mplew.writeShort("v135");
        v136 = mplew.writeInt("v136");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4FB0)) {
        mplew.StartNode("Mask - " + map.get(0x28B4FB0)); //256
        v137 = mplew.writeShort("v137");
        v138 = mplew.writeInt("v138");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B12F0)) {
        mplew.StartNode("Mask - " + map.get(0x28B12F0)); //257
        v139 = mplew.writeShort("v139");
        v140 = mplew.writeInt("v140");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B1338)) {
        mplew.StartNode("Mask - " + map.get(0x28B1338)); //259
        v141 = mplew.writeShort("v141");
        v142 = mplew.writeInt("v142");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5040)) {
        mplew.StartNode("Mask - " + map.get(0x28B5040)); //260
        v143 = mplew.writeShort("v143");
        v144 = mplew.writeInt("v144");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5088)) {
        mplew.StartNode("Mask - " + map.get(0x28B5088)); //269
        v145 = mplew.writeShort("v145");
        v146 = mplew.writeInt("v146");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B50D0)) {
        mplew.StartNode("Mask - " + map.get(0x28B50D0)); //126
        v147 = mplew.writeShort("v147");
        v148 = mplew.writeInt("v148");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4E90)) {
        mplew.StartNode("Mask - " + map.get(0x28B4E90)); //251
        v149 = mplew.writeShort("v149");
        v150 = mplew.writeInt("v150");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5160)) {
        mplew.StartNode("Mask - " + map.get(0x28B5160)); //264
        v151 = mplew.writeShort("v151");
        v152 = mplew.writeInt("v152");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B51A8)) {
        mplew.StartNode("Mask - " + map.get(0x28B51A8)); //265
        v153 = mplew.writeShort("v153");
        v154 = mplew.writeInt("v154");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B51F0)) {
        mplew.StartNode("Mask - " + map.get(0x28B51F0)); //266
        v155 = mplew.writeShort("v155");
        v156 = mplew.writeInt("v156");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5238)) {
        mplew.StartNode("Mask - " + map.get(0x28B5238)); //267
        v157 = mplew.writeShort("v157");
        v158 = mplew.writeInt("v158");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5238)) {
        mplew.StartNode("Mask - " + map.get(0x28B5238)); //267
        v159 = v72584360();
        v160 = mplew.writeInt("v160");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5280)) {
        mplew.StartNode("Mask - " + map.get(0x28B5280)); //268
        v161 = mplew.writeShort("v161");
        v162 = mplew.writeInt("v162");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B52C8)) {
        mplew.StartNode("Mask - " + map.get(0x28B52C8)); //270
        v163 = mplew.writeShort("v163");
        v164 = mplew.writeInt("v164");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5310)) {
        mplew.StartNode("Mask - " + map.get(0x28B5310)); //271
        v165 = mplew.writeShort("v165");
        v166 = mplew.writeInt("v166");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5358)) {
        mplew.StartNode("Mask - " + map.get(0x28B5358)); //272
        v167 = mplew.writeShort("v167");
        v168 = mplew.writeInt("v168");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B53A0)) {
        mplew.StartNode("Mask - " + map.get(0x28B53A0)); //273
        v169 = mplew.writeShort("v169");
        v170 = mplew.writeInt("v170");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B53E8)) {
        mplew.StartNode("Mask - " + map.get(0x28B53E8)); //274
        v171 = mplew.writeShort("v171");
        v172 = mplew.writeInt("v172");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5430)) {
        mplew.StartNode("Mask - " + map.get(0x28B5430)); //275
        v173 = mplew.writeShort("v173");
        v174 = mplew.writeInt("v174");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5478)) {
        mplew.StartNode("Mask - " + map.get(0x28B5478)); //333
        v175 = mplew.writeShort("v175");
        v176 = mplew.writeInt("v176");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B54C0)) {
        mplew.StartNode("Mask - " + map.get(0x28B54C0)); //276
        v177 = mplew.writeShort("v177");
        v178 = mplew.writeInt("v178");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5508)) {
        mplew.StartNode("Mask - " + map.get(0x28B5508)); //277
        v179 = mplew.writeShort("v179");
        v180 = mplew.writeInt("v180");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5550)) {
        mplew.StartNode("Mask - " + map.get(0x28B5550));
        mplew.EndNode(false);
    } //278
    if (Check_Buff(mask, 0x28B5598)) {
        mplew.StartNode("Mask - " + map.get(0x28B5598)); //279
        v181 = mplew.writeShort("v181");
        v182 = mplew.writeInt("v182");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4398)) {
        mplew.StartNode("Mask - " + map.get(0x28B4398)); //200
        v183 = mplew.writeShort("v183");
        v184 = mplew.writeInt("v184");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4C50)) {
        mplew.StartNode("Mask - " + map.get(0x28B4C50)); //248
        v185 = mplew.writeShort("v185");
        v186 = mplew.writeInt("v186");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3660)) {
        mplew.StartNode("Mask - " + map.get(0x28B3660)); //135
        v187 = mplew.writeShort("v187");
        v188 = mplew.writeInt("v188");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B57D8)) {
        mplew.StartNode("Mask - " + map.get(0x28B57D8)); //284
        v189 = mplew.writeShort("v189");
        v190 = mplew.writeInt("v190");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2FE8)) {
        mplew.StartNode("Mask - " + map.get(0x28B2FE8)); //113
        v191 = mplew.writeShort("v191");
        v192 = mplew.writeInt("v192");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5820)) {
        mplew.StartNode("Mask - " + map.get(0x28B5820)); //285
        v193 = mplew.writeShort("v193");
        v194 = mplew.writeInt("v194");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5868)) {
        mplew.StartNode("Mask - " + map.get(0x28B5868)); //286
        v195 = mplew.writeShort("v195");
        v196 = mplew.writeInt("v196");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B1800)) {
        mplew.StartNode("Mask - " + map.get(0x28B1800)); //287
        v197 = mplew.writeInt("v197");
        v198 = mplew.writeInt("v198");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B58F8)) {
        mplew.StartNode("Mask - " + map.get(0x28B58F8)); //289
        v199 = mplew.writeShort("v199");
        v200 = mplew.writeInt("v200");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5940)) {
        mplew.StartNode("Mask - " + map.get(0x28B5940)); //290
        v201 = mplew.writeShort("v201");
        v202 = mplew.writeInt("v202");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B1380)) {
        mplew.StartNode("Mask - " + map.get(0x28B1380)); //291
        v203 = mplew.write("v203");
        v204 = mplew.writeInt("v204");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5988)) {
        mplew.StartNode("Mask - " + map.get(0x28B5988)); //295
        v205 = mplew.writeShort("v205");
        v206 = mplew.writeInt("v206");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5C10)) {
        mplew.StartNode("Mask - " + map.get(0x28B5C10)); //300
        v207 = mplew.writeShort("v207");
        v208 = mplew.writeInt("v208");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5CA0)) {
        mplew.StartNode("Mask - " + map.get(0x28B5CA0)); //302
        v209 = mplew.write("v209");
        v210 = mplew.writeInt("v210");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5D30)) {
        mplew.StartNode("Mask - " + map.get(0x28B5D30)); //304
        v211 = mplew.write("v211");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B34F8)) {
        mplew.StartNode("Mask - " + map.get(0x28B34F8)); //307
        v212 = mplew.writeShort("v212");
        v213 = mplew.writeInt("v213");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B1530)) {
        mplew.StartNode("Mask - " + map.get(0x28B1530)); //339
        v214 = mplew.writeShort("v214");
        v215 = mplew.writeInt("v215");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5D78)) {
        mplew.StartNode("Mask - " + map.get(0x28B5D78)); //308
        v216 = mplew.writeShort("v216");
        v217 = mplew.writeInt("v217");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4B30)) {
        mplew.StartNode("Mask - " + map.get(0x28B4B30)); //310
        v218 = mplew.writeShort("v218");
        v219 = mplew.writeInt("v219");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5DC0)) {
        mplew.StartNode("Mask - " + map.get(0x28B5DC0)); //311
        v220 = mplew.writeShort("v220");
        v221 = mplew.writeInt("v221");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5E08)) {
        mplew.StartNode("Mask - " + map.get(0x28B5E08)); //312
        v222 = mplew.writeShort("v222");
        v223 = mplew.writeInt("v223");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5E50)) {
        mplew.StartNode("Mask - " + map.get(0x28B5E50)); //313
        v224 = mplew.writeShort("v224");
        v225 = mplew.writeInt("v225");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5F70)) {
        mplew.StartNode("Mask - " + map.get(0x28B5F70)); //317
        v226 = mplew.writeShort("v226");
        v227 = mplew.writeInt("v227");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5FB8)) {
        mplew.StartNode("Mask - " + map.get(0x28B5FB8)); //318
        v228 = mplew.writeShort("v228");
        v229 = mplew.writeInt("v229");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6000)) {
        mplew.StartNode("Mask - " + map.get(0x28B6000)); //319
        v230 = mplew.writeShort("v230");
        v231 = mplew.writeInt("v231");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6048)) {
        mplew.StartNode("Mask - " + map.get(0x28B6048)); //320
        v232 = mplew.writeShort("v232");
        v233 = mplew.writeInt("v233");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6090)) {
        mplew.StartNode("Mask - " + map.get(0x28B6090)); //321
        v234 = mplew.writeShort("v234");
        v235 = mplew.writeInt("v235");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B60D8)) {
        mplew.StartNode("Mask - " + map.get(0x28B60D8)); //322
        v236 = mplew.writeShort("v236");
        v237 = mplew.writeInt("v237");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B62D0)) {
        mplew.StartNode("Mask - " + map.get(0x28B62D0)); //332
        v238 = mplew.writeShort("v238");
        v239 = mplew.writeInt("v239");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B3CD8)) {
        mplew.StartNode("Mask - " + map.get(0x28B3CD8)); //163
        v240 = mplew.writeShort("v240");
        v241 = mplew.writeInt("v241");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B14A0)) {
        mplew.StartNode("Mask - " + map.get(0x28B14A0)); //340
        v242 = mplew.writeShort("v242");
        v243 = mplew.writeInt("v243");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6480)) {
        mplew.StartNode("Mask - " + map.get(0x28B6480)); //344
        v244 = mplew.writeShort("v244");
        v245 = mplew.writeInt("v245");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6438)) { // 342
        mplew.StartNode("Mask - " + map.get(0x28B6438));
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B64C8)) {
        mplew.StartNode("Mask - " + map.get(0x28B64C8)); //345
        v246 = mplew.writeShort("v246");
        v247 = mplew.writeInt("v247");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6510)) {
        mplew.StartNode("Mask - " + map.get(0x28B6510)); //346
        v248 = mplew.writeShort("v248");
        v249 = mplew.writeInt("v249");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B14E8)) {
        mplew.StartNode("Mask - " + map.get(0x28B14E8)); //343
        v250 = mplew.writeInt("v250");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B14E8)) {
        mplew.StartNode("Mask - " + map.get(0x28B14E8)); //343
        v251 = mplew.writeInt("v251");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5748)) {
        mplew.StartNode("Mask - " + map.get(0x28B5748)); //326
        v252 = mplew.writeInt("v252");
        v253 = v72584360();
        v254 = mplew.writeInt("v254");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4C50)) {
        mplew.StartNode("Mask - " + map.get(0x28B4C50)); //248
        v255 = mplew.write("") != 0;
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B1578)) {
        mplew.StartNode("Mask - " + map.get(0x28B1578)); //139
        v256 = mplew.writeInt("v256");
        v257 = mplew.writeInt("v257");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6870)) {
        mplew.StartNode("Mask - " + map.get(0x28B6870)); //359
        v258 = mplew.writeInt("v258");
        v259 = mplew.writeInt("v259");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6990)) {
        mplew.StartNode("Mask - " + map.get(0x28B6990)); //364
        v260 = mplew.writeShort("v260");
        v261 = mplew.writeInt("v261");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B5CE8)) {
        mplew.StartNode("Mask - " + map.get(0x28B5CE8)); //303
        v262 = mplew.writeShort("v262");
        v263 = mplew.writeInt("v263");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6DC8)) {
        mplew.StartNode("Mask - " + map.get(0x28B6DC8)); //380
        v264 = mplew.writeShort("v264");
        v265 = mplew.writeInt("v265");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6E10)) {
        mplew.StartNode("Mask - " + map.get(0x28B6E10)); //381
        v266 = mplew.writeShort("v266");
        v267 = mplew.writeInt("v267");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6F78)) {
        mplew.StartNode("Mask - " + map.get(0x28B6F78)); //386
        v268 = mplew.writeShort("v268");
        v269 = mplew.writeInt("v269");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8400)) {
        mplew.StartNode("Mask - " + map.get(0x28B8400)); //462
        v270 = mplew.writeShort("v270");
        v271 = mplew.writeInt("v271");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8448)) {
        mplew.StartNode("Mask - " + map.get(0x28B8448)); //463
        v272 = mplew.writeShort("v272");
        v273 = mplew.writeInt("v273");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8490)) {
        mplew.StartNode("Mask - " + map.get(0x28B8490)); //464
        v274 = mplew.writeShort("v274");
        v275 = mplew.writeInt("v275");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B84D8)) {
        mplew.StartNode("Mask - " + map.get(0x28B84D8)); //465
        v276 = mplew.writeShort("v276");
        v277 = mplew.writeInt("v277");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8520)) {
        mplew.StartNode("Mask - " + map.get(0x28B8520)); //466
        v278 = mplew.writeShort("v278");
        v279 = mplew.writeInt("v279");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8568)) {
        mplew.StartNode("Mask - " + map.get(0x28B8568)); //467
        v280 = mplew.writeShort("v280");
        v281 = mplew.writeInt("v281");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B85B0)) {
        mplew.StartNode("Mask - " + map.get(0x28B85B0)); //468
        v282 = mplew.writeShort("v282");
        v283 = mplew.writeInt("v283");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6FC0)) {
        mplew.StartNode("Mask - " + map.get(0x28B6FC0)); //387
        v284 = mplew.writeShort("v284");
        v285 = mplew.writeInt("v285");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7008)) {
        mplew.StartNode("Mask - " + map.get(0x28B7008)); //388
        v286 = mplew.writeShort("v286");
        v287 = mplew.writeInt("v287");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7DD0)) {
        mplew.StartNode("Mask - " + map.get(0x28B7DD0)); //400
        v288 = mplew.writeShort("v288");
        v289 = mplew.writeInt("v289");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B4AA0)) {
        mplew.StartNode("Mask - " + map.get(0x28B4AA0)); //229
        v290 = mplew.writeShort("v290");
        v291 = mplew.writeInt("v291");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B78C0)) {
        mplew.StartNode("Mask - " + map.get(0x28B78C0)); //422
        v292 = mplew.writeShort("v292");
        v293 = mplew.writeInt("v293");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7B00)) {
        mplew.StartNode("Mask - " + map.get(0x28B7B00)); //430
        v294 = mplew.writeInt("v294");
        v295 = mplew.writeInt("v295");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7B48)) {
        mplew.StartNode("Mask - " + map.get(0x28B7B48)); //431
        v296 = mplew.writeShort("v296");
        v297 = mplew.writeInt("v297");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7B48)) {
        mplew.StartNode("Mask - " + map.get(0x28B7B48)); //431
        v298 = mplew.writeInt("v298");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7CB0)) {
        mplew.StartNode("Mask - " + map.get(0x28B7CB0)); //436
        v299 = mplew.writeShort("v299");
        v300 = mplew.writeInt("v300");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7EF0)) {
        mplew.StartNode("Mask - " + map.get(0x28B7EF0)); //442
        v301 = mplew.writeInt("v301");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B80E8)) {
        mplew.StartNode("Mask - " + map.get(0x28B80E8)); //450
        v302 = mplew.writeInt("v302");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B80A0)) {
        mplew.StartNode("Mask - " + map.get(0x28B80A0)); //449
        v303 = mplew.writeInt("v303");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2928)) {
        mplew.StartNode("Mask - " + map.get(0x28B2928)); //240
        v304 = mplew.writeShort("v304");
        v305 = mplew.writeInt("v305");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B2970)) {
        mplew.StartNode("Mask - " + map.get(0x28B2970)); //241
        v306 = mplew.writeShort("v306");
        v307 = mplew.writeInt("v307");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8250)) {
        mplew.StartNode("Mask - " + map.get(0x28B8250)); //456
        v308 = mplew.writeShort("v308");
        v309 = mplew.writeInt("v309");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B17B8)) {
        mplew.StartNode("Mask - " + map.get(0x28B17B8)); //402
        v310 = mplew.writeInt("v310");
        v311 = mplew.writeInt("v311");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8718)) {
        mplew.StartNode("Mask - " + map.get(0x28B8718)); //473
        v312 = mplew.writeInt("v312");
        v313 = mplew.writeInt("v313");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8760)) {
        mplew.StartNode("Mask - " + map.get(0x28B8760)); //474
        v314 = mplew.writeInt("v314");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8298)) {
        mplew.StartNode("Mask - " + map.get(0x28B8298)); //457
        v315 = mplew.writeInt("v315");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B86D0)) {
        mplew.StartNode("Mask - " + map.get(0x28B86D0)); //472
        v316 = mplew.writeInt("v316");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6750)) {
        mplew.StartNode("Mask - " + map.get(0x28B6750)); //355
        v317 = mplew.writeShort("v317");
        v318 = mplew.writeInt("v318");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8AC0)) {
        mplew.StartNode("Mask - " + map.get(0x28B8AC0)); //483
        v319 = mplew.writeShort("v319");
        v320 = mplew.writeInt("v320");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B89A0)) {
        mplew.StartNode("Mask - " + map.get(0x28B89A0)); //501
        v321 = mplew.writeShort("v321");
        v322 = mplew.writeInt("v322");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B89E8)) {
        mplew.StartNode("Mask - " + map.get(0x28B89E8)); //502
        v323 = mplew.writeShort("v323");
        v324 = mplew.writeInt("v324");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B16E0)) {
        mplew.StartNode("Mask - " + map.get(0x28B16E0)); //505
        v325 = mplew.writeInt("v325");
        v326 = mplew.writeInt("v326");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8B08)) {
        mplew.StartNode("Mask - " + map.get(0x28B8B08)); //484
        v327 = mplew.writeShort("v327");
        v328 = mplew.writeInt("v328");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8EB0)) {
        mplew.StartNode("Mask - " + map.get(0x28B8EB0)); //496
        v329 = mplew.writeShort("v329");
        v330 = mplew.writeInt("v330");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8BE0)) {
        mplew.StartNode("Mask - " + map.get(0x28B8BE0)); //485
        v331 = mplew.writeShort("v331");
        v332 = mplew.writeInt("v332");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8BE0)) {
        mplew.StartNode("Mask - " + map.get(0x28B8BE0)); //485
        v333 = mplew.writeInt("v333");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8C28)) {
        mplew.StartNode("Mask - " + map.get(0x28B8C28)); //492
        v334 = mplew.writeShort("v334");
        v335 = mplew.writeInt("v335");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8C70)) {
        mplew.StartNode("Mask - " + map.get(0x28B8C70)); //486
        v336 = mplew.writeShort("v336");
        v337 = mplew.writeInt("v337");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8D00)) {
        mplew.StartNode("Mask - " + map.get(0x28B8D00)); //489
        v338 = mplew.writeShort("v338");
        v339 = mplew.writeInt("v339");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8D48)) {
        mplew.StartNode("Mask - " + map.get(0x28B8D48)); //490
        v340 = mplew.writeShort("v340");
        v341 = mplew.writeInt("v341");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8D90)) {
        mplew.StartNode("Mask - " + map.get(0x28B8D90)); //491
        v342 = mplew.writeShort("v342");
        v343 = mplew.writeInt("v343");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8E20)) {
        mplew.StartNode("Mask - " + map.get(0x28B8E20)); //494
        v344 = mplew.writeShort("v344");
        v345 = mplew.writeInt("v345");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7DD0)) {
        mplew.StartNode("Mask - " + map.get(0x28B7DD0)); //400
        v346 = mplew.writeShort("v346");
        v347 = mplew.writeInt("v347");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8EB0)) {
        mplew.StartNode("Mask - " + map.get(0x28B8EB0)); //496
        v348 = mplew.writeShort("v348");
        v349 = mplew.writeInt("v349");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B27C0)) {
        mplew.StartNode("Mask - " + map.get(0x28B27C0)); //88
        v350 = mplew.writeShort("v350");
        v351 = mplew.writeInt("v351");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7CB0)) {
        mplew.StartNode("Mask - " + map.get(0x28B7CB0)); //436
        v352 = mplew.writeShort("v352");
        v353 = mplew.writeInt("v353");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8B98)) {
        mplew.StartNode("Mask - " + map.get(0x28B8B98)); //508
        v354 = mplew.writeShort("v354");
        v355 = mplew.writeInt("v355");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8EF8)) {
        mplew.StartNode("Mask - " + map.get(0x28B8EF8)); //487
        v356 = mplew.writeShort("v356");
        v357 = mplew.writeInt("v357");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8F40)) {
        mplew.StartNode("Mask - " + map.get(0x28B8F40)); //497
        v358 = mplew.writeShort("v358");
        v359 = mplew.writeInt("v359");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8F88)) {
        mplew.StartNode("Mask - " + map.get(0x28B8F88)); //512
        v360 = mplew.writeInt("v360");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8FD0)) {
        mplew.StartNode("Mask - " + map.get(0x28B8FD0)); //513
        v361 = mplew.writeInt("v361");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B9060)) {
        mplew.StartNode("Mask - " + map.get(0x28B9060)); //515
        v362 = mplew.writeShort("v362");
        v363 = mplew.writeInt("v363");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B90A8)) {
        mplew.StartNode("Mask - " + map.get(0x28B90A8)); //516
        v364 = mplew.writeInt("v364");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B90F0)) {
        mplew.StartNode("Mask - " + map.get(0x28B90F0)); //517
        v365 = mplew.writeInt("v365");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6000)) {
        mplew.StartNode("Mask - " + map.get(0x28B6000)); //319
        v366 = mplew.write("v366");
        mplew.EndNode(false);
    }
    v367 = mplew.write("");
    v368 = mplew.write("");
    v369 = mplew.write("v369");
    if (Check_Buff(mask, 0x28B64C8)) {
        mplew.StartNode("Mask - " + map.get(0x28B64C8)); //345
        v370 = mplew.write("v370");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6510)) {
        mplew.StartNode("Mask - " + map.get(0x28B6510)); //346
        v371 = mplew.write("v371");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B6F78)) {
        mplew.StartNode("Mask - " + map.get(0x28B6F78)); //386
        v372 = mplew.write("v372");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7368)) {
        mplew.StartNode("Mask - " + map.get(0x28B7368)); //405
        v373 = mplew.writeInt("v373");
        v374 = mplew.writeInt("v374");
        v375 = mplew.writeInt("v375");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B73F8)) {
        mplew.StartNode("Mask - " + map.get(0x28B73F8)); //407
        v376 = mplew.writeInt("v376");
        v377 = mplew.writeInt("v377");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B78C0)) {
        mplew.StartNode("Mask - " + map.get(0x28B78C0)); //422
        v378 = mplew.writeInt("v378");
        v379 = mplew.write("v379");
        v380 = mplew.writeInt("v380");
        v381 = mplew.writeInt("v381");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7EF0)) {
        mplew.StartNode("Mask - " + map.get(0x28B7EF0)); //442
        v382 = mplew.write("v382");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8250)) {
        mplew.StartNode("Mask - " + map.get(0x28B8250)); //456
        v383 = mplew.writeInt("v383");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B17B8)) {
        mplew.StartNode("Mask - " + map.get(0x28B17B8)); //402
        v384 = mplew.writeShort("v384");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B72D8)) {
        mplew.StartNode("Mask - " + map.get(0x28B72D8)); //403
        v385 = mplew.writeShort("v385");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B7320)) {
        mplew.StartNode("Mask - " + map.get(0x28B7320)); //404
        v386 = mplew.writeShort("v386");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B8718)) {
        mplew.StartNode("Mask - " + map.get(0x28B8718)); //473
        v387 = mplew.writeInt("v387");
        v388 = mplew.writeInt("v388");
        v389 = mplew.writeInt("v389");
        v390 = mplew.writeInt("v390");
        mplew.EndNode(false);
    }
    if (Check_Buff(mask, 0x28B1848)) {
        mplew.StartNode("Mask - " + map.get(0x28B1848)); //242
        v391 = mplew.writeInt("v391");
        mplew.EndNode(false);
    }
    sub_F16EE0( /*  + 2399, ipacket */ );
    v392 = mplew.writeInt("v392");
    var basemask = 518;
    for (l = 0; l < 9; ++l) {
        if (sub_B7C3F0(mask, (basemask + l))) {
            mplew.StartNode("mask " + (basemask + l) + "  : " + l);
            mplew.writeShort(0);
            switch (l) {
                case 0:
                case 1:
                case 4:
                    mplew.writeShort(0);
                    mplew.writeInt(0);
                    break;
                case 3:
                    mplew.writeInt("c_mount.getItemId()");
                    mplew.writeInt("buffSrc");
                    break;
                case 6:
                    mplew.writeShort(0);
                    mplew.writeInt(0);
                    mplew.writeLong("0");
                    break;
                case 5:
                    mplew.writeInt(0);
                    mplew.writeLong("0");
                    mplew.write(0);
                    break;
                    // case 2:
                    // case 7:
                    // case 8:
                default:
                    mplew.writeInt(0);
                    mplew.writeInt(0);
                    break;
            }
            mplew.write(1);
            mplew.writeInt("CHAR_MAGIC_SPAWN");
            mplew.EndNode(false);
        }
    }
    if (Check_Buff(mask, 0x28B34F8)) {
        mplew.StartNode("Mask - " + map.get(0x28B34F8)); //307
        v395 = mplew.writeInt("v395");
        mplew.EndNode(false);
    }
    //   add_buff(a2, &v769,0x220u);
}

function sub_F16EE0( /*  */ ) {
    mplew.StartNode("sub_F16EE0");
    mplew.writeInt("v2");
    mplew.writeInt("");
    mplew.writeInt("");
    result = mplew.writeInt("result");
    if (result > 0) {
        v10 = result;
        do {
            result = mplew.writeInt("result");
            --v10;
        }
        while (v10);
    }
    mplew.EndNode(false);
}