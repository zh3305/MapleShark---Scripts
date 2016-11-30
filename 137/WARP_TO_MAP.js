var gropjob;


result = mplew.writeShort(1);
if (result && result > 0) {
    v5 = result;
    do {
        v6 = mplew.writeInt("v6", 1);
        iPacket = mplew.writeInt(0);
        --v5;
    }
    while (v5);
}
mplew.writeInt("Channel");
mplew.write(0);
mplew.writeInt(0);
mplew.write(0);
// mplew.AddShort("1");
// mplew.writeLong("1");
// mplew.writeLong("Channel");
mplew.write("CharInfo");
mplew.writeInt("未知");
mplew.writeInt("未知固定INT");
mplew.writeInt("未知固定INT");
var CharInfo = mplew.write("CharInfo");
v9 = mplew.writeShort("0", 0);
if (v9) {
    v11 = mplew.writeMapleAsciiString("");
    if (v9 > 0) {
        do {
            mplew.writeMapleAsciiString("");
            --v9;
        }
        while (v9);
    }
}
if (CharInfo) {
    mplew.StartNode("connectData");
    mplew.writeInt("INT");
    mplew.writeInt("INT");
    mplew.writeInt("定INT");
    mplew.EndNode(true);

    mplew.StartNode("CharacterData::Decode");
    var mask = mplew.writeLong("Flag");
    mplew.write("Unknown");
    mplew.StartNode("Seeds");
    for (i = 1; i <= 3; i++) {
        mplew.writeInt("timeGetTime+");
    }
    mplew.EndNode(false);

    v8 = mplew.write("v8");
    if (v8 > 0) {
        v309 = v8;
        do {
            v9 = mplew.writeInt("v9");
            v11 = v309-- == 1;
        }
        while (!v11);
    }
    mplew.writeInt("0");
    mplew.StartNode("flag & 0x01");
    if ((mask & 0x01) != 0) {
        mplew.write("137 new");
        addCharStats();
        mplew.write("好友上限");
        mplew.StartNode("祝福");
        fairy = mplew.AddBool("精灵的祝福");
        if (fairy)
            mplew.AddString("祝福");
        empress = mplew.AddBool("女皇的祝福");
        if (empress)
            mplew.AddString("祝福");
        ultimate = mplew.AddBool("终极冒险家信息");
        if (ultimate)
            mplew.AddString("祝福");
        mplew.EndNode(false);
        UnkFunctin6();
    }

    mplew.EndNode(false);
    mplew.StartNode("flag & 0x02");
    if ((mask & 0x02) != 0) {
        mplew.writeLong("Meso 金币信息");
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x08");
    if ((mask & 0x08) != 0) {
        addInventoryInfo(); //物品信息
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x100");
    if ((mask & 0x100) != 0) {
        addSkillInfo();
        var v87 = 0;
        mplew.StartNode("技能连 ");
        v87 = mplew.writeShort("技能连数量");
        for (var i = 0; i < v87; i++) {
            mplew.writeInt(0);
            mplew.writeShort(0);
        }
        mplew.EndNode(false);

    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x8000");
    if ((mask & 0x8000) != 0) {
        addCoolDownInfo();
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x200");
    if ((mask & 0x200) != 0) {
        addStartedQuestInfo();
    }

    mplew.EndNode(false);
    mplew.StartNode("flag & 0x4000");
    if ((mask & 0x4000) != 0) {
        addCompletedQuestInfo();
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x400");
    if ((mask & 0x400) != 0) {
        mplew.StartNode("addMiniGameInfo小游戏");
        count = mplew.AddShort("Count");
        for (i = 1; i <= count; i++) {
            mplew.StartNode("小游戏Match Record " + i);
            mplew.writeInt("Unknown");
            mplew.writeInt("Unknown");
            mplew.writeInt("Unknown");
            mplew.writeInt("Unknown");
            mplew.writeInt("Unknown");
            mplew.EndNode(false);
        }
        mplew.EndNode(false);

    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x800");
    if ((mask & 0x800) != 0) {
        mplew.StartNode("addRingInfo");

        mplew.StartNode("Couple");
        count = mplew.AddShort("Count");
        for (i = 1; i <= count; i++) {
            mplew.StartNode("Couple Ring " + i);
            mplew.writeInt("getPartnerChrId");
            mplew.AddPaddedString("getPartnerName", 13);
            mplew.writeLong("getRingId");
            mplew.writeLong("getPartnerRingId");
            mplew.EndNode(false);
        }
        mplew.EndNode(false);

        mplew.StartNode("Friendship");
        count = mplew.AddShort("Count");
        for (i = 1; i <= count; i++) {
            mplew.StartNode("Friendship Ring " + i);
            mplew.writeInt("getPartnerChrId");
            mplew.AddPaddedString("getPartnerName", 13);
            mplew.writeLong("getRingId");
            mplew.writeLong("getPartnerRingId");
            mplew.writeInt("getItemId");
            mplew.EndNode(false);
        }
        mplew.EndNode(false);

        mplew.StartNode("Marriage");
        count = mplew.AddShort("Count");
        for (i = 1; i <= count; i++) {
            mplew.StartNode("Marriage Ring " + i);
            mplew.writeInt("marriageId 30000");
            mplew.writeInt("chr.id 30000");
            mplew.writeInt("getPartnerChrId");
            mplew.writeShort("", 3);
            mplew.writeInt("getItemId");
            mplew.writeInt("getItemId");
            mplew.AddPaddedString("chr.getName()", 13);
            mplew.AddPaddedString("getPartnerName", 13);


            mplew.EndNode(false);
        }

        mplew.EndNode(false);

        mplew.EndNode(false);
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x1000");
    if ((mask & 0x1000) != 0) {
        mplew.StartNode("addRocksInfo FF C9 9A 3B");
        for (i = 1; i <= 28; i++) {
            mplew.writeInt("Teleport Rock " + i + " Map Id");
        }
        mplew.EndNode(false);
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x40000");
    if ((mask & 0x40000) != 0) {
        QuestInfoPacket();
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x20");
    if ((mask & 0x20) != 0) {
        mplew.StartNode("Unknown 0x20");
        count = mplew.AddShort("Count");
        for (i = 1; i <= count; i++) {
            mplew.StartNode("Unknown " + i);
            mplew.writeInt("Unknown");
            mplew.writeLong("错误!未解析的代码段! addCharLook");
            mplew.EndNode(false);
        }
        mplew.EndNode(false);
    }

    mplew.EndNode(false);
    mplew.StartNode("flag & 0x1000");
    if ((mask & 0x1000) != 0) {
        mplew.StartNode("Unknown");
        count = mplew.writeInt("Count 0x1000");
        for (i = 1; i <= count; i++) {
            mplew.StartNode("Unknown " + i);
            mplew.writeInt("Unknown");
            mplew.writeInt("Unknown");
            mplew.EndNode(false);
        }
        mplew.EndNode(false);
    }

    mplew.EndNode(false);
    mplew.StartNode("flag & 0x200000");
    if ((mask & 0x200000) != 0) {
        if ((gropjob >= 3300) && (gropjob <= 3312)) {
            mplew.StartNode("豹子职业 Wild Hunter");
            mplew.write("JAGUAR");
            for (i = 0; i < 5; i++) {
                mplew.writeInt("", 0);
            }
            mplew.EndNode(false);
        }
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x800");
    if ((mask & 0x800) != 0) {
        if (IsZero(gropjob)) {
            mplew.StartNode("神之子 ");
            // mplew.StartNode("zeroData");
            var v4 = 0xFFFF;
            mplew.writeShort("flag", v4);
            if ((v4 & 1) != 0) {
                mplew.write("", 0);
            }
            if ((v4 & 2) != 0) {
                mplew.writeInt("maxhp");
            }
            if ((v4 & 4) != 0) {
                mplew.writeInt("maxmp");
            }
            if ((v4 & 8) != 0) {
                mplew.write("", 0);
            }
            if ((v4 & 0x10) != 0) {
                mplew.writeInt("getSecondHair");
            }
            if ((v4 & 0x20) != 0) {
                mplew.writeInt("getSecondFace");
            }
            if ((v4 & 0x40) != 0) {
                mplew.writeInt("maxhp");
            }
            if (v4 < 0) {
                mplew.writeInt("maxmp");
            }
            if ((v4 & 0x100) != 0) {
                mplew.writeInt("", 0);//未知
            }
            if ((v4 & 0x200) != 0) {
                mplew.writeInt("", -1);//未知
                mplew.writeInt("", 0);//未知
                mplew.writeInt("", 0);//未知
            }
            // mplew.EndNode(false);
            mplew.EndNode(false);
        }
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x400000");
    if ((mask & 0x400000) != 0) {
        mplew.StartNode("Unknown 0x400000");
        count = mplew.AddShort("Count");
        var dummyBLD = {};
        for (i = 1; i <= count; i++) {
            mplew.StartNode("Unknown " + i);
            _m_pStr = mplew.writeShort("_m_pStr ");
            v324 = mplew.writeInt("v324");
            if (_m_pStr && v324) {
                for (; _m_pStr > 0; --_m_pStr) {
                    v399 = 0;
                    if (v399) {
                        dummyBLD.dwNPCID = mplew.writeInt("dummyBLD.dwNPCID");
                        dummyBLD.nItemIndex = mplew.writeShort("dummyBLD.nItemIndex ");
                        dummyBLD.nItemID = mplew.writeInt("dummyBLD.nItemID");
                        dummyBLD.nCount = mplew.writeShort("dummyBLD.nCount ");
                        mplew.writeBuffer("dummyBLD.ftDate -2?", "00 40 E0 FD 3B 37 4F 01")
                        // mplew.writeLong("dummyBLD.ftDate");
                    }
                    else {
                        dummyBLD.dwNPCID = mplew.writeInt("dummyBLD.dwNPCID");
                        dummyBLD.nItemIndex = mplew.writeShort("dummyBLD.nItemIndex ");
                        dummyBLD.nItemID = mplew.writeInt("dummyBLD.nItemID");
                        dummyBLD.nCount = mplew.writeShort("dummyBLD.nCount ");
                        mplew.writeBuffer("dummyBLD.ftDate -2?", "00 40 E0 FD 3B 37 4F 01")
                        // mplew.writeLong("dummyBLD.ftDate");
                    }
                }
            }
            mplew.EndNode(false);
        }
        mplew.EndNode(false);
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x4000000 幻影复制技能");
    if ((mask & 0x4000000) != 0) {
        mplew.StartNode("addStealSkills");
        // mplew.StartNode("addStolenSkills");
        for (i = 1; i <= 5; i++) {
            mplew.StartNode("jobNum " + i);
            // addStolenSkills(mplew, chr, i, false); // 52
            count = 0;
            while (count < getNumSteal(i)) { //for now?
                mplew.writeInt("", 0);
                count++;
            }
            mplew.EndNode(false);;
        }
        // mplew.EndNode(false);;
        mplew.EndNode(false);
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x10000000 addChosenSkills");
    if ((mask & 0x10000000) != 0) {
        mplew.StartNode("addChosenSkills");
        for (i = 1; i <= 5; i++) {
            mplew.writeInt("sk.left ");
        }

        mplew.EndNode(false);
    }
    mplew.EndNode(false);

    mplew.StartNode("flag & 0x80000000 角色内在能力");
    if ((mask & 0x80000000) != 0) {
        mplew.StartNode("addAbilityInfo");
        addAbilityInfo();
        mplew.EndNode(false);
    }
    mplew.EndNode(false);

    mplew.StartNode("flag & 0x10000 GW_SoulCollection");
    if ((mask & 0x10000) != 0) {
        v143 = mplew.writeShort("Count");//未知
        for (var i = 0; i < v143; i++) {//ZMap<long,ZRef<GW_SoulCollection>,long>::Insert
            mplew.writeInt("");
            mplew.writeInt("");
        }
    }
    mplew.EndNode(false);

    mplew.StartNode("flag & 0x1 內在能力聲望訊息 ");
    if ((mask & 0x1) != 0) {
        mplew.StartNode("addHonorInfo");
        mplew.writeInt("getHonorLevel");
        mplew.writeInt("getHonourExp");
        mplew.EndNode(false);
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x2 CharacterData::SetEntryRecord");
    if ((mask & 0x2) != 0) {
        if (mplew.write("", 1)) {
            for (iPacket2 = mplew.writeShort("forCount", 0); iPacket2 > 0; --iPacket2) {
                lpOutputString = mplew.writeShort("lpOutputString");
                v257 = mplew.writeShort("v257");
                if (v257 > 0) {
                    do {
                        lpOutputString = mplew.writeInt("lpOutputString");
                        v258 = mplew.writeInt("v258");
                        --v257;
                    }
                    while (v257 > 0);
                }
            }
        }
        else {
            for (lpOutputString = mplew.writeShort("forCount"); lpOutputString > 0; --lpOutputString) {
                iPacket2 = mplew.writeShort("iPacket2");
                v259 = mplew.writeInt("v259");
                v260 = mplew.writeInt("v260");
            }
        }
    }
    mplew.EndNode(false);

    mplew.StartNode("flag & 0x4 ReturnEffectInfo::Decode");
    if ((mask & 0x4) != 0) {
        if (mplew.write("Bool", 0, 1)) {
            result = mplew.writeInt("result");//0100
        }
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x8 GW_DressUpInfo::Decode")
    if ((mask & 0x8) != 0) {
        mplew.writeInt("nFace", 0);
        mplew.writeInt("nHair", 0);
        mplew.writeInt("nClothe", 0);
        mplew.write("nSkin", 0);
        mplew.writeInt("nMixBaseHairColor", -1);
        mplew.writeInt("nMixAddHairColor", 0);
        mplew.writeInt("nMixHairBaseProb", 0);
    }
    mplew.EndNode(false);


    mplew.StartNode("flag & 0x20000")
    if ((mask & 0x20000) != 0) {
        mplew.writeInt("", 0);
        mplew.writeInt("", 0);
        mplew.writeBuffer("getTime(-2)", "00 40 E0 FD 3B 37 4F 01")
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x10 addEvolutionInfo")
    if ((mask & 0x10) != 0) {
        v267 = mplew.writeShort("v267", 0);
        if (v267 > 0) {
            iPacket2 = v267;
            do {
                lpOutputString = mplew.writeShort("lpOutputString");
                mplew.writeInt("nCoreID", 0);
                mplew.writeInt("nLeftCount", 0);
                --iPacket2;
            }
            while (iPacket2);
        }
        v269 = mplew.writeShort("v269", 0);
        if (v269 > 0) {
            iPacket2 = v269;
            do {
                lpOutputString = mplew.writeShort("lpOutputString");
                mplew.writeInt("nCoreID", 0);
                mplew.writeInt("nLeftCount", 0);
                --iPacket2;
            }
            while (iPacket2);
        }
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x80 MemorialCubeInfo::Decode")
    if ((mask & 0x80) != 0) {
        if (mplew.write("bool", 0)) {
            mplew.write("CreateItem", 0)
            mplew.writeInt("nCubeItemID", 0);
            mplew.writeInt("nEItemPOS", 0);
        }
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x400 _ZtlSecureTear_")
    if ((mask & 0x400) != 0) {
        //_ZtlSecureTear_
        mplew.writeInt("", 0);
        mplew.writeBuffer("getTime(-2)", "00 40 E0 FD 3B 37 4F 01")
        mplew.writeInt("", 0);
    }
    mplew.EndNode(false);

    mplew.StartNode("flag & 0x20000 RunnerGameRecord::Decode")
    if ((mask & 0x20000) != 0) {//RunnerGameRecord::Decode
        //              struct RunnerGameRecord
        //            {
        //              unsigned int dwCharacterID;
        //              int nLastScore;
        //              int nHighscore;
        //              int nRunnerPoint;
        //              _FILETIME tLastPlayed;
        //              int nTotalLeft;
        //            };
        mplew.writeInt("chr.getId()");
        mplew.writeInt("nLastScore", 0);
        mplew.writeInt("nHighscore", 0);
        mplew.writeInt("nRunnerPoint", 0);
        mplew.writeBuffer("tLastPlayed getTime(-2)", "00 40 E0 FD 3B 37 4F 01")
        mplew.writeInt("nTotalLeft", 0x0A);
    }
    mplew.EndNode(false);
    mplew.StartNode("flag & 0x80000  137 new")
    if ((mask & 0x80000) != 0) {
        // function sub_75CA30 (/*  */)
        // {
        v4 = mplew.writeInt(0);
        if (v4 > 0) {
            v11 = v4;
            do {
                mplew.writeInt(0);
                mplew.write(0);
                mplew.write(0);
                mplew.write(0);
                v9 = v11-- == 1;
            }
            while (!v9);
        }
        mplew.writeInt(0);
        mplew.writeLong(0);
        // }
    }
    mplew.EndNode(false);



    mplew.StartNode("OX_System")
    OX_System = mplew.AddShort("OX_System");
    for (i = 1; i <= OX_System; i++) {
        mplew.StartNode("OX_System " + i);
        mplew.writeInt("");
        mplew.AddString("OX_System ");
        mplew.EndNode(false);
    }
    mplew.EndNode(false);

    mplew.StartNode("flag & 0x4000");
    if ((mask & 0x4000) != 0) {
        mplew.StartNode("Unknown 0x4000");
        count = mplew.AddShort("Count");
        for (i = 1; i <= count; i++) {
            mplew.StartNode("Unknown " + i);
            mplew.writeInt("");
            mplew.AddString("Unknown ");
            mplew.EndNode(false);
        }

        mplew.EndNode(false);
    }
    mplew.EndNode(false);
    mplew.write("", 0);
    result = mplew.writeInt("Unknown", 0);
    if (result > 0) {
        do {
            mplew.writeInt(0);
            mplew.writeMapleAsciiString("");
            --result;
        } while (result != 0);
    }
    if (mask & 0x100000) {
        for (i3 = mplew.writeShort("137 new", 0); i3 > 0; --i3) {
            Packet_ReadInt(0);
            Packet_ReadInt(0);
        }
    }
    mplew.StartNode("flag & 0x80000 ")
    if (mask & 0x80000) {
        if (mplew.write("bool", 1)) {
            mplew.write("", 0);
            mplew.writeInt("", 1);
            mplew.writeInt("", 0);
            mplew.writeInt("", 0x64);
            mplew.writeLong("getTime(System.currentTimeMillis() + 86400000L)");
        }
        v275 = mplew.writeShort("v275");
        if (v275 > 0) {
            iPacket2 = v275;
            do {
                mplew.write("", 0);//*this = Packet_ReadByte(a2);
                mplew.writeInt("", 0);//*(v2 + 1) = Packet_ReadInt(a2);
                mplew.writeInt("", 0);// result = Packet_ReadInt(a2);
                --iPacket2;
            }
            while (iPacket2);
        }
        v277 = mplew.writeShort("v277");
        if (v277 > 0) {
            iPacket2 = v277;
            do {
                mplew.writeInt("", 0);//*this = Packet_ReadInt(CInPacket);
                mplew.writeInt("", 0);//  *(v2 + 4) = Packet_ReadInt(CInPacket);
                mplew.writeLong("", 0);//return Packet_ReadBuffer(CInPacket, v2 + 8, 8u);
                --iPacket2;
            }
            while (iPacket2);
        }
    }
    mplew.EndNode(false);

    mplew.StartNode("flag & 0x1000000 ")
    if ((mask & 0x1000000) != 0) {
        mplew.write(0);
    }
    mplew.EndNode(false);

    mplew.StartNode("flag & 0x2000000 ")
    if ((mask & 0x2000000) != 0) {
        v3 = mplew.writeInt("v3");
        if (v3 > 0) {
            v4 = v3;
            do {
                mplew.writeShort("", 0);
                mplew.writeShort("", 0);
                --v4;
            }
            while (v4);
        }
        v5 = mplew.writeInt("v5");
        if (v5 > 0) {
            v6 = v5;
            do {
                mplew.writeInt("", 0);
                mplew.writeShort("", 0);
                --v6;
            }
            while (v6);
        }
    }
    mplew.EndNode(false);



    mplew.StartNode("flag & 0x40000  addCoreAura")
    if ((mask & 0x40000) != 0) {//addCoreAura
        addCoreAura();
        mplew.write("", 1);
    }
    mplew.EndNode(false);


    mplew.StartNode("flag & 0x80000")
    if ((mask & 0x80000) != 0) {
        for (i1 = mplew.writeShort("i1"); i1 > 0; --i1) {
            mplew.writeInt("", 0);
            mplew.writeInt("", 0);
            mplew.writeMapleAsciiString("");
            mplew.writeLong("", 0);
            mplew.writeInt("", 0);
            mplew.writeMapleAsciiString("");
            mplew.write("", 0);
            mplew.write("", 0);
            mplew.writeLong("", 0);
            mplew.writeMapleAsciiString("");
        }
    }
    mplew.EndNode(false);

    mplew.StartNode("flag & 0x100000")
    if ((mask & 0x100000) != 0) {
        for (i2 = mplew.writeShort("i2"); i2 > 0; --i2) {
            mplew.writeZeroBytes(0x14);
        }
    }
    mplew.EndNode(false);

    mplew.StartNode("flag & 0x200000 addRedLeafInfo")
    if ((mask & 0x200000) != 0) {
        addRedLeafInfo();
    }
    mplew.EndNode(false);

    mplew.StartNode("flag & 0x4000000")
    if ((mask & 0x4000000) != 0) {
        // mplew.write(0);
        // sub_42D560
        v1 = 0;
        v2 = 0;
        v3 = 5;
        while (1) {
            v4 = mplew.write(0);
            v2 |= (v4 & 0x7F) << v1;
            if (v4 >= 0)
                break;
            if (--v3 <= 0) {
                v7 = -2147467259;
                CxxThrowException(v7, 0x204B878);
            }
            v1 += 7;
        }
        mplew.AddComment("sub_42D560 return:" + ((v2 & 1) + (v2 >> 1)) * (1 - 2 * (v2 & 1)))
        //  return ((v2 & 1) + (v2 >> 1)) * (1 - 2 * (v2 & 1));
        // sub_42D560 end
    }

    mplew.EndNode(false);

    // end addCharacterInfo
    mplew.EndNode(true);
    UnkFunction();

} else {
    mplew.write("", 0);
    mplew.writeInt("to.getId()地图ID");
    mplew.write("spawnPoint");
    mplew.writeInt("chr.getStat().getHp()");
}

mplew.write("", 0);
mplew.write("", 0);
mplew.writeLong("currentTimeMillis");
mplew.writeInt("", 100, 0x64);
mplew.writeShort("", 0);
mplew.write("", 0);
mplew.write("", 1, 0);

count133 = mplew.writeInt("New 133 Unknown count", 0x2c, 0x32, 0x6A);
mplew.StartNode("New 133 Unknown")
// mplew.AddField("New 133 Unknown ", 48);
mplew.writeBuffer("Unknown hex", "02 00 00 00 82 16 FB 52 01 00 00")//3 int
unkmake = mplew.write("unk make", 0xDC, 0x14, 0x8C);
mplew.writeInt("make", count133 - 36);
mplew.AddPaddedString("nuk make", count133 - 36);
mplew.writeBuffer("Unknown hex", "F7 24 11 76 00 00 00")//3 int
mplew.write("unk make", unkmake);
mplew.writeBuffer("Unknown hex", " 08 00 00 00 01 00 00")//3 int
mplew.write("unk make", unkmake);
mplew.writeInt(0);
mplew.EndNode(true);
//6A 00 00 00 02 00 00 00 82 16 FB 52 01 00 00 DC 46 00 00 00 00 00 00 00 02 C8 EC 02 00 00 00 00 00 02 03 FF FF 7B 21 98 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 21 03 46 40 00 00 00 00 01 00 0D 00 01 00 12 00 09 00 00 00 00 00 00 00 00 00 06 00 00 00 00 00 00 F7 24 11 76 00 00 00 DC 08 00 00 00 01 00 00 DC 00 00 00 00
//2C 00 00 00 02 00 00 00 82 16 FB 52 01 00 00 14 08 00 00 00 00 00 00 00 00 00 00 00                   F7 24 11 76 00 00 00 14 08 00 00 00 01 00 00 14 00 00 00 00
//32 00 00 00 02 00 00 00 82 16 FB 52 01 00 00 14 0E 00 00 00 00 00 00 00 00 00 00 06 00 00 00 00 00 00 F7 24 11 76 00 00 00 14 08 00 00 00 01 00 00 14 00 00 00 00

// if (CharInfo) {
//     mplew.writeInt("", 0x2C);
//     // mplew.write(HexTool.getByteArrayFromHexString("2C 00 00 00 02 00 00 00 82 16 FB 52 01 00 00 04 08 00 00 00 00 00 00 00 00 00 00 00 F7 24 11 76 00 00 00 04 08 00 00 00 01 00 00 04 00 00 00 00"));
// } else {
//     mplew.writeInt("", 0x32);
// }

// mplew.writeInt("", 0x02);
// mplew.writeInt("", 0x52FB1682);
// mplew.write("", 1);
// mplew.writeShort("", 0);
// mplew.write("", 0x14);
// mplew.write("", 0x08);//第一次 进 08 传送 0E
// mplew.writeZeroBytes(10);

// // if (!CharInfo) {
// //     t = 0x06;
// // }
// mplew.StartNode("Unknown Data");
// var t = mplew.write("Unknown Data count");
// for (var i = 0; i < t; i++) {
//     mplew.write("", 0);
// }
// mplew.EndNode(false);

// mplew.writeInt("", 0x761124F7);
// mplew.writeShort("", 0);
// mplew.write("", 0);
// mplew.writeInt("", 0x814);
// mplew.writeInt("", 0x100);
// mplew.writeInt("", 0x14);
// mplew.write("", 0);
//429
if (mplew.write("")) {
    v43 = mplew.writeInt("v43");
}
//sub_16718E0
v3 = mplew.write(0);
if (v3) {
    mplew.writeInt(0);
    v4 = mplew.write(0);
    if (v4 >= 0xA) {
        v7 = 0;
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
    mplew.writeInt("");
}
//438
if (mplew.write(0)) {
    // sub_194CF30 (/* v153, iPacket */);
    mplew.writeInt(0);
    mplew.write(0);
    mplew.writeBuffer(0, 8);
}
//sub_16DACE0
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
//sub_16B4DF0 
//sub_16B4DF0
mplew.write("this");
mplew.writeInt("result");
//sub_1671410
mplew.writeInt("result");
//sub_16D7B80
result = mplew.writeInt("result");
v23 = result;
for (i = 0; i < v23; ++i) {
    v9 = mplew.writeInt("v9");
}
//old
// mplew.writeInt( 0);
// mplew.writeLong("", 0);
// mplew.writeInt("", 0);
// mplew.writeInt("", 0);

function ReadIfFlaggedByte(value, flag, text) {
    if ((value & flag) == flag) {
        mplew.write(text + " - " + flag);
        return value - flag;
    }
    return value;
}
function ReadIfFlaggedShort(value, flag, text) {
    if ((value & flag) == flag) {
        mplew.AddShort(text + " - " + flag);
        return value - flag;
    }
    return value;
}
function ReadIfFlaggedInt(value, flag, text) {
    if ((value & flag) == flag) {
        mplew.writeInt(text + " - " + flag);
        return value - flag;
    }
    return value;
}
function ReadIfFlaggedLong(value, flag, text) {
    if ((value & flag) == flag) {
        mplew.writeLong(text + " - " + flag);
        mplew.AddComment("Left over flags: " + (value - flag));
        return value - flag;
    }
    return value;
}
function HasSeparatedSP(job) {
    if (IsAran(job))
        return false;
    else if (job == 900 || job == 910 || job == 800)
        return false;
    return true;
}

function HasFaceMark(job) {
    return IsXenon(job) || IsDemonSlayer(job) || IsDemonAvenger(job);
}
function IsKOC(job) {
    return job >= 1000 && job < 2000;
}
function IsAran(job) {
    return job >= 2000 && job <= 2112 && job != 2001 && job != 2002 && job != 2003 && job != 2004;
}
function IsDemonSlayer(job) {
    return job == 30001 || (job >= 3100 && job <= 3112 && job != 3101);
}
function IsXenon(job) {
    return job == 3002 || (job >= 3600 && job <= 3612);
}
function IsDemonAvenger(job) {
    return job == 3001 || job == 3101 || (job >= 3120 && job <= 3122);
}
function IsZero(job) {
    return job == 10000 || (job >= 10100 && job <= 10112);
}

function addCharStats() {
    mplew.StartNode("addCharStats");

    mplew.writeInt("Id");
    mplew.writeInt("Id");
    mplew.writeInt("Unknown");
    mplew.AddPaddedString("Name", 13);
    mplew.write("Gender");
    mplew.write("Skin");
    mplew.writeInt("Face");
    mplew.writeInt("Hair");
    mplew.AddField("Unknown", 3);
    mplew.write("Level");
    job = mplew.AddShort("Job");
    gropjob = job;
    mplew.StartNode("connectData");
    mplew.AddShort("Strength");
    mplew.AddShort("Dexterity");
    mplew.AddShort("Intelligence");
    mplew.AddShort("Luck");
    mplew.writeInt("Current HP");
    mplew.writeInt("Max HP");
    mplew.writeInt("Current MP");
    mplew.writeInt("Max MP");

    mplew.EndNode(true);
    mplew.AddShort("Available AP");
    mplew.StartNode("Available SP");

    // if (HasSeparatedSP(job)) {
    if (is_extendsp_job(job)) {
        //ExtendSP::Decode
        count = mplew.write("Count");
        for (i = 1; i <= count; i++) {
            mplew.StartNode("Advancement " + i);

            mplew.write("Advancement");
            mplew.writeInt("Value");

            mplew.EndNode(false);
        }
    } else {
        mplew.AddShort("Value");
    }

    mplew.EndNode(false);
    mplew.writeLong("Experience");
    mplew.writeInt("Fame");
    mplew.writeInt("Weapon Points");
    mplew.writeInt("Gachapon Experience");
    mplew.writeInt("未知 133新出现INT");
    mplew.writeLong("-2L Time");
    mplew.writeInt("Map Id");
    mplew.write("Spawn Point");
    //  mplew.writeInt("Unknown");
    mplew.AddShort("Job Subcategory");

    if (HasFaceMark(job)) {
        mplew.writeInt("Face Mark");
    }

    mplew.write("Fatigue");
    mplew.writeInt("Current date");
    //  mplew.AddField("Unknown", 164);

    mplew.StartNode("maoletraitype exp");
    mplew.writeInt("charisma");
    mplew.writeInt("insight");
    mplew.writeInt("will");
    mplew.writeInt("craft");
    mplew.writeInt("sense");
    mplew.writeInt("charm");
    mplew.EndNode(false);

    mplew.StartNode("maoletraitype exp");
    mplew.AddShort("charisma");
    mplew.AddShort("insight");
    mplew.AddShort("will");
    mplew.AddShort("craft");
    mplew.AddShort("sense");
    mplew.AddShort("charm");
    mplew.EndNode(false);

    mplew.write("", 0);
    mplew.writeLong("-2L Time");
    mplew.writeInt("Pvp exp");
    mplew.write("pvpRank ");
    mplew.writeInt("BattlePoints");
    mplew.write("5");
    mplew.write("6");
    mplew.writeInt("", 0);

    mplew.StartNode("addPartTimeJob");
    parttimeJob = mplew.write("parttime.getJob()");
    if (parttimeJob > 0 && parttimeJob <= 5) {
        mplew.writeReversedLong(parttime.getTime());
        mplew.writeLong("Reversed parttime.getTime()");
    } else {
        mplew.writeLong("Reversed -2L Time");
    }
    mplew.writeInt("getReward"); //
    mplew.write("getReward > 0"); //
    mplew.EndNode(false);

    mplew.StartNode("connectData cards");
    for (i = 0; i < (9 - 0); i++) { //
        mplew.StartNode("cards " + i);
        mplew.writeInt("Unknown"); //
        mplew.write("Unknown"); //
        mplew.writeInt("Unknown"); //
        mplew.EndNode(true);
    }
    mplew.EndNode(true);
    mplew.writeLong("Reversed Time"); //
    mplew.StartNode("137 new sub_750220");
    mplew.writeBuffer("", 8);
    mplew.writeBuffer("", 8);
    mplew.writeInt(0);
    mplew.writeInt(0);
    mplew.writeInt(0);
    result = mplew.write(0);
    mplew.EndNode(false);
    mplew.writeInt("Unknown", 0); //sub_750220
    mplew.EndNode(false);
    mplew.writeInt("未知Int", 0); //sub_750220
}

function UnkFunctin6() {
    mplew.StartNode("UnkFunctin6");
    v7 = 2;
    while (v7 < 74) {
        mplew.writeInt("Unknown", 0); //
        while (true) {
            res = 255;
            mplew.write("Unknown", 255); //
            if (res == 255) {
                break;
            }
            mplew.writeInt("Unknown"); //
        }
        v7 += 36;
    }
    mplew.EndNode(false);
}

function addPotionPotInfo() {
    mplew.StartNode("addPotionPotInfo");
    size = mplew.writeInt("PotionPot size");

    for (i = 0; i < size; i++) {
        mplew.StartNode("PotionPot " + i);
        //  mplew.writeInt(p.getId());
        mplew.writeInt("id");
        mplew.writeInt("MaxValue");
        mplew.writeInt("Hp");
        mplew.writeInt("Unknown");
        mplew.writeInt("Mp");
        mplew.writeLong("StartDate");
        mplew.writeLong("EndDate");
        mplew.EndNode(false);
    }
    mplew.EndNode(false);

}

function addInventoryInfo() {
    mplew.StartNode("addInventoryInfo");

    mplew.writeInt("Character Id");
    mplew.StartNode("Unknown");
    for (i = 1; i <= 2; i++) {
        mplew.StartNode("Unknown " + i);
        mplew.writeInt("Unknown", 0);
        var unksize = mplew.writeInt("unksize", 0);
        // for (i = 0; i < unksize; i++) {
        //     mplew.StartNode("unk data " + i);
        //     mplew.writeInt("未知 怪物ID");
        //     mplew.writeLong("unk", 0x0A);
        //     mplew.writeInt("Unknown");
        //     mplew.writeLong("unk");
        //     mplew.write("Unknown");
        //     mplew.writeInt("Unknown", 9998714);
        //     mplew.writeInt("index 0-" + unksize);
        //     mplew.EndNode(false);
        // }
        mplew.EndNode(false);
    }
    mplew.EndNode(false);
    mplew.writeInt("Character Id");
    mplew.AddField("Unknown", 31);

    addPotionPotInfo();

    mplew.StartNode("Inventory");

    mplew.write("装备栏数量");
    mplew.write("消耗栏数量");
    mplew.write("设置栏数量");
    mplew.write("其他栏数量");
    mplew.write("现金栏数量");
    mplew.writeLong("Default Expiration Time");

    mplew.write("Unknown");

    DecodeEquipmentInventory("普通装备Equipped Equipment Inventory");
    DecodeEquipmentInventory("现金装备Cash Equipped Equipment Inventory");
    DecodeEquipmentInventory("装备栏Equipment Inventory");
    DecodeEquipmentInventory("龙魔龙装备Unknown Inventory");
    DecodeEquipmentInventory("机甲装备 Dragon Inventory");
    DecodeEquipmentInventory("机器人的现金装备Mechanic Inventory");
    DecodeEquipmentInventory("天使破坏者装备Android Inventory");
    DecodeEquipmentInventory("拼图 Inventory");
    DecodeEquipmentInventory("Unknown Inventory");
    DecodeEquipmentInventory("兽魔装备 Inventory");
    DecodeEquipmentInventory("Totem Inventory");
    DecodeEquipmentInventory("图腾 Inventory");
    DecodeEquipmentInventory("13 Inventory");
    DecodeEquipmentInventory("14 Inventory");
    DecodeEquipmentInventory("15 Inventory");
    DecodeEquipmentInventory("16 Inventory");
    DecodeEquipmentInventory("17 Inventory");
    DecodeItemInventory("消耗 Inventory");
    DecodeItemInventory("设置 Inventory");
    DecodeItemInventory("其他 Inventory");
    DecodeItemInventory("现金 Inventory");

    mplew.writeInt("", 0);
    mplew.writeInt("", 0);

    mplew.StartNode("ExtendedSlots");
    size = mplew.writeInt("getExtendedSlots().size()");
    for (i = 0; i < size; i++) {
        mplew.StartNode("ExtendedSlots " + i);
        mplew.writeInt("index");
        mplew.writeInt("getExtendedSlot");
        for (j = 1; j != 0; j++) {
            pos = mplew.writeInt("Byte Position");
            if (pos == -1) {
                break;
            }
            mplew.StartNode("Position " + pos);
            DecodeItem();
            mplew.EndNode(false);
        }
        mplew.EndNode(false);
    }
    mplew.EndNode(false);
    mplew.AddField("Unknown 0", 9);
    mplew.EndNode(true);
    mplew.EndNode(false);

}

function DecodeItemInventory(name) {

    mplew.StartNode(name);
    for (i = 1; i != 0; i++) {
        pos = mplew.write("Byte Position");
        if (pos == 0) {
            break;
        }
        mplew.StartNode("Position " + pos);
        DecodeItem();
        mplew.EndNode(false);
    }
    mplew.EndNode(false);

}

function DecodeEquipmentInventory(name) {

    mplew.StartNode(name);
    for (i = 1; i != 0; i++) {
        pos = mplew.AddUShort("Position");
        if (pos == 0) {
            break;
        }
        mplew.StartNode("Position " + pos);
        DecodeItem();
        mplew.EndNode(false);
    }
    mplew.EndNode(false);

}

function DecodeItem() {
    type = mplew.write("Type");
    item = mplew.writeInt("Item ID");
    hasUniqueId = mplew.write("HasCashid");
    if (hasUniqueId == 0x01) {
        mplew.writeLong("CashID");
    }
    if (type == 0x01) {
        mplew.writeLong("Expiration Time");
        mplew.writeInt("-1 ?");
        mplew.StartNode("addEquipStats");

        mplew.StartNode("Flags part 1");
        var flag = mplew.writeInt("Status Flags v.132");
        inputflag = flag;
        flag = ReadIfFlaggedByte(flag, 0x01, "Slots 可使用捲軸次數");
        flag = ReadIfFlaggedByte(flag, 0x02, "Scrolls 捲軸強化次數");
        flag = ReadIfFlaggedShort(flag, 0x04, "Str 力量");
        flag = ReadIfFlaggedShort(flag, 0x08, "Dex 敏捷");
        flag = ReadIfFlaggedShort(flag, 0x10, "Int");
        flag = ReadIfFlaggedShort(flag, 0x20, "Luk");
        flag = ReadIfFlaggedShort(flag, 0x40, "HP");
        flag = ReadIfFlaggedShort(flag, 0x80, "MP");
        flag = ReadIfFlaggedShort(flag, 0x100, "WATK");
        flag = ReadIfFlaggedShort(flag, 0x200, "MATK");
        flag = ReadIfFlaggedShort(flag, 0x400, "WDEF");
        flag = ReadIfFlaggedShort(flag, 0x800, "MDEF");
        flag = ReadIfFlaggedShort(flag, 0x1000, "ACC");
        flag = ReadIfFlaggedShort(flag, 0x2000, "Avo");
        flag = ReadIfFlaggedShort(flag, 0x4000, "Hands");
        flag = ReadIfFlaggedShort(flag, 0x8000, "Speed");
        flag = ReadIfFlaggedShort(flag, 0x10000, "Jump");
        flag = ReadIfFlaggedInt(flag, 0x20000, "Flags");
        flag = ReadIfFlaggedByte(flag, 0x40000, "Increased Skill");
        flag = ReadIfFlaggedByte(flag, 0x80000, "Item Level");
        flag = ReadIfFlaggedLong(flag, 0x100000, "Item EXP");
        flag = ReadIfFlaggedInt(flag, 0x200000, "耐久度 DURABILITY ");
        flag = ReadIfFlaggedInt(flag, 0x400000, "鐵鎚提煉次數 VICIOUS_HAMMER ");
        flag = ReadIfFlaggedShort(flag, 0x800000, "大亂鬥傷害 PVP Damage");
        flag = ReadIfFlaggedByte(flag, 0x1000000, "套用等級減少 DOWNLEVEL ");
        flag = ReadIfFlaggedShort(flag, 0x2000000, "ENHANCT_BUFF ");
        flag = ReadIfFlaggedInt(flag, 0x4000000, "特殊耐久度 DURABILITY_SPECIAL ");
        flag = ReadIfFlaggedByte(flag, 0x8000000, "需求等級 REQUIRED_LEVEL ");
        flag = ReadIfFlaggedByte(flag, 0x10000000, "露塔必思箱子開出來的裝備的特殊功能 ? YGGDRASIL_WISDOM ");
        flag = ReadIfFlaggedByte(flag, 0x20000000, "FINAL_STRIKE");
        flag = ReadIfFlaggedByte(flag, 0x40000000, "BOSS傷 ? BOSS_DAMAGE ");
        flag = ReadIfFlaggedByte(flag, 0x80000000, "無視防禦 ? ");
        if (flag != 0) {
            mplew.AddComment("FLAG NOT EMTPY: " + flag);
        }
        mplew.EndNode(true);

        mplew.StartNode("Flags part 2");
        flag = mplew.writeInt("Status Flags v.132");
        flag = ReadIfFlaggedByte(flag, 0x01, "TOTAL_DAMAGE");
        flag = ReadIfFlaggedByte(flag, 0x02, "ALL_STAT");
        flag = ReadIfFlaggedByte(flag, 0x04, "KARMA_COUNT");
        flag = ReadIfFlaggedLong(flag, 0x08, "FIRE");
        flag = ReadIfFlaggedInt(flag, 0x10, "STAR_FORCE");
        if (flag != 0) {
            mplew.AddComment("FLAG NOT EMTPY: " + flag);
        }
        mplew.EndNode(true);
        mplew.EndNode(true); //addEquipStats
        mplew.StartNode("addEquipBonusStats");
        mplew.AddString("拥有者名字");
        mplew.write("潜能等级Status Flag");
        mplew.write("装备星级");
        mplew.AddShort("潜能1");
        mplew.AddShort("潜能2");
        mplew.AddShort("潜能3");
        mplew.AddShort("附加潜能4");
        mplew.AddShort("附加潜能5");
        mplew.AddShort("附加潜能6");
        mplew.AddShort("Anvilled item ID + (itemid - (itemid % 10000))");
        mplew.AddShort("Socket state?");
        mplew.AddShort("getSocket1");
        mplew.AddShort("getSocket2");
        mplew.AddShort("getSocket3");

        if (hasUniqueId == 0x00)
            mplew.writeLong("?x8"); // Unique ID?
        mplew.writeBuffer("getTime(-2)", "00 40 E0 FD 3B 37 4F 01")
        mplew.writeInt("-1");
        mplew.writeLong("", 0);
        mplew.writeBuffer("getTime(-2)", "00 40 E0 FD 3B 37 4F 01")
        mplew.writeLong("", 0);
        mplew.writeLong("", 0);
        // mplew.AddField("", 6);
        mplew.AddShort("魂武器类型");
        mplew.AddShort("魂武器");
        mplew.AddShort("魂武器 炽热结晶数量");
        mplew.writeInt("突破伤害上限 LimitBreak");

        mplew.EndNode(true); //addEquipBonusStats
    } else if (type == 0x02) {
        mplew.writeLong("Expiration Time");
        mplew.writeInt("-1 ?");
        mplew.AddShort("数量");
        mplew.AddString("Name");
        mplew.AddShort("Flags");
        item = parseInt(item / 10000);
        if (item == 233 || item == 207 || item == 287) //203 子弹 207 飞镖
            mplew.writeLong("?");
        mplew.AddField("133 未知 0(19)  ", 19);
    } else if (type == 0x03) { //宠物
        mplew.writeLong("Expiration Time");
        mplew.writeInt("-1 ?");
        mplew.AddPaddedString("Petname", 13);
        mplew.write("Level");
        mplew.AddShort("Closeness");
        mplew.write("Fullness");
        mplew.writeLong("Time");
        mplew.AddShort("Unknown!?");
        mplew.AddShort("Flags?");
        mplew.writeInt("SecondsLeft!?");
        mplew.AddShort("CanPickup!?");
        mplew.write("-.-");
        mplew.writeInt("BuffSkill ?!");
        mplew.writeInt("", -1);
        mplew.writeInt("", 100);
        mplew.writeInt("", 0);
        mplew.writeInt("", 0);
        mplew.AddShort("Unknown");
    }

}

function addCompletedQuestInfo() {

    mplew.StartNode("Quests (Completed)");
    newFormat = mplew.AddBool("New Format");
    if (newFormat) {
        count = mplew.AddShort("Count");
        for (i = 1; i <= count; i++) {
            mplew.StartNode("Quest " + i);
            mplew.writeInt("Id");
            mplew.writeInt("Completion Time");
            mplew.EndNode(false);
        }
    } else {
        mplew.AddComment("Unsupported");
    }
    mplew.EndNode(false);
}

function addStartedQuestInfo() {
    mplew.StartNode("addStartedQuestInfo");
    newFormat = mplew.AddBool("New Format");
    if (newFormat) {
        count = mplew.AddShort("Count");
        for (i = 1; i <= count; i++) {
            mplew.StartNode("Quest " + i);
            mplew.writeInt("Id");
            mplew.AddString("Kills");
            mplew.EndNode(false);
        }
    }
    mplew.EndNode(false);
}

function addCoolDownInfo() {
    mplew.StartNode("addCoolDownInfo");
    cooldownSkillsCount = mplew.AddShort("技能冷却总数Cooldown Skills Count");
    for (i = 0; i < cooldownSkillsCount; i++) {
        mplew.StartNode("Cooldown Skill " + (i + 1));
        mplew.writeInt("ID");
        mplew.writeInt("Remaining Seconds");
        mplew.EndNode(false);
    }
    // if (cooldownSkillsCount == 0)
    //        mplew.AddShort("No cooldowns");
    mplew.EndNode(false);
}

function addSkillInfo() {
    mplew.StartNode("Skills");
    if (mplew.AddBool("newPacket")) {
        mplew.StartNode("New Skills Format");
        skillCount = mplew.AddShort("Skills Count");
        isFourthJob = true;
        for (i = 0; i < skillCount; i++) {
            mplew.StartNode("Skill " + (i + 1));
            Skills = mplew.writeInt("Skills ID");
            mplew.writeInt("Level ? teachId?");
            mplew.writeLong("Default Expiration Time");//, 150842304000000000
            if (is_skill_need_master_level(Skills)) {
                mplew.writeInt("FourthJob")
            }
            mplew.EndNode(false);
        }
        mplew.EndNode(false);
    }
    else {
        mplew.StartNode("old Skills Format");

        mplew.EndNode(false);
    }
    mplew.EndNode(false);
}


function UnkFunction() {
    mplew.StartNode("UnkFunction");
    mplew.writeInt("", 0);
    for (i = 1; i <= 3; i++) {
        mplew.writeInt("", 0);
    }
    mplew.EndNode(false);

}
function addRedLeafInfo() {
    mplew.StartNode("addRedLeafInfo");
    mplew.writeInt("chr.getClient().getAccID()");
    mplew.writeInt("chr.getId()");
    count = mplew.writeInt("Count", 5);
    mplew.writeInt("Unknown", 0);
    for (i = 1; i <= count; i++) {//Packet_ReadBuffer(a2, (v2 + 4), 0x28u);
        mplew.StartNode("addRedLeafInfo " + i);
        mplew.writeInt("9410165-9410168");
        mplew.writeInt("getFriendShipPoints");
        mplew.EndNode(false);
    }
    mplew.EndNode(false);

}
function addCoreAura() {
    mplew.StartNode("addCoreAura");
    mplew.writeInt("", 0);
    mplew.writeInt("level");
    mplew.writeInt("aura.getExpire()");
    mplew.writeInt("", 0);
    mplew.writeInt("", 0);
    // v4 = 6;
    // do {
    //     mplew.writeInt("v3");
    //     --v4;
    mplew.writeInt("aura.getAtt()");//wep att
    mplew.writeInt("aura.getDex()");//dex
    mplew.writeInt("aura.getLuk()");//luk
    mplew.writeInt("aura.getMagic()");//magic att
    mplew.writeInt("aura.getInt()");//int
    mplew.writeInt("aura.getStr()");//str
    // }
    // while (v4);
    // v6 = 4;
    // do {
    mplew.writeInt("", 0);
    mplew.writeInt("aura.getTotal()");//max
    mplew.writeInt(0);
    mplew.writeInt(0);
    //     mplew.writeInt("v5");
    //     --v6;
    // }
    // while (v6);
    mplew.writeLong("currentTimeMillis");
    mplew.write("is龙的传人&&is林之灵 0 or 1");
    mplew.EndNode(false);

}
function getNumSteal(jobNum) {
    switch (jobNum) {
        case 1:
        case 2:
            result = 4;
            break;
        case 3:
            result = 3;
            break;
        case 4:
        case 5:
            result = 2;
            break;
        default:
            result = 0;
            break;
    }
    return result;
}


function QuestInfoPacket() {

    mplew.StartNode("QuestInfoPacket");
    count = mplew.AddShort("Count");
    for (i = 1; i <= count; i++) {
        mplew.StartNode("Quest " + i);
        mplew.writeInt("Id");
        mplew.AddString("Data");
        mplew.EndNode(false);
    }
    mplew.EndNode(false);

}
function addAbilityInfo() {
    v143 = mplew.writeShort("角色内在能力 count");//未知

    for (var i = 0; i < v143; i++) {
        mplew.StartNode("Inner-Statistic " + i);
        mplew.write("", i + 1);
        mplew.writeInt("",
            70000061,//	运气和敏捷增加	运气和敏捷增加。
            70000062,//	运气和智力增加	运气和智力增加。
            70000060,//	智力和敏捷增加	智力和敏捷增加。
            70000050,//	金币获得量增加	金币获得量增加。
            70000051,//	力量和敏捷增加	力量和敏捷增加。
            70000052,//	力量和智力增加	力量和智力增加。
            70000053,//	力量和运气增加	力量和运气增加。
            70000054,//	敏捷和智力增加	敏捷和智力增加。
            70000055,//	敏捷和运气增加	敏捷和运气增加。
            70000056,//	智力和运气增加	智力和运气增加。
            70000057,//	敏捷和力量增加	敏捷和力量增加。
            70000058,//	智力和力量增加	智力和力量增加。
            70000059,//	运气和力量增加	运气和力量增加。
            70000041,//	物防提升伤害	攻击时，根据物理防御力的一定比例，增加最终伤害。
            70000042,//	魔防提升伤害	攻击时，根据魔法防御力的一定比例，增加最终伤害。
            70000040,//	命中值提升伤害	攻击时，根据命中值的一定比例，增加最终伤害。
            70000045,//	有一定概率无冷却时间	使用技能后，有一定概率无冷却时间。
            70000046,//	被动技能等级加1	被动技能的技能等级增加1级。
            70000043,//	受到魔攻减少伤害	受到魔法攻击时，根据物理防御力的一定比例，减少伤害。
            70000044,//	受到物攻减少伤害	受到物理攻击时，根据魔法防御力的一定比例，减少伤害。
            70000049,//	物品掉落率增加	物品掉落率增加。
            70000047,//	增加群攻技能对象数	增加群攻技能的攻击对象数量。
            70000048,//	增益持续时间增加	增益持续时间增加。
            70000029,//	物理防御力增加%	物理防御力增加一定比例。
            70000037,//	阿斯旺塔追加伤害	攻击塔时，伤害增加一定比例。
            70000036,//	一般怪物追加伤害	攻击普通怪物时，伤害提高。
            70000039,//	给异常敌人额外伤害	对象存在状态异常效果时，伤害增加。
            70000038,//	一击必杀解放战补给模式普通怪物	攻击解放战补给模式的普通怪物时，有一定概率造成一击必杀效果。
            70000033,//	命中率增加	命中率增加。
            70000032,//	最大MP增加一定比例	最大MP增加一定比例。
            70000035,//	攻击BOSS怪物时伤害提高	攻击BOSS怪物时，伤害提高。
            70000034,//	回避率增加	回避率增加。
            70000031,//	最大HP增加一定比例	最大HP增加一定比例。
            70000030,//	魔法防御力增加%	魔法防御力增加一定比例。
            70000018,//	魔防提升物防	根据魔法防御力的一定比例，增加物理防御力。
            70000019,//	命中值提升MP上限	根据命中值的一定比例，增加最大MP。
            70000028,//	回避值增加%	回避值增加一定比例。
            70000027,//	命中值增加%	命中值增加一定比例。
            70000026,//	升级增加魔法攻击力	每达到一定等级，魔法攻击力增加1。
            70000025,//	升级增加物理攻击力	每达到一定等级，攻击力增加1。
            70000024,//	运气提升敏捷	根据投资了AP的运气的一定比例，增加敏捷。
            70000023,//	智力提升运气	根据投资了AP的智力的一定比例，增加运气。
            70000022,//	敏捷提升力量	根据投资了AP的敏捷的一定比例，增加力量。
            70000021,//	力量提升敏捷	根据投资了AP的力量的一定比例，增加敏捷。
            70000020,//	回避值提升HP上限	根据回避值的一定比例，增加最大HP。
            70000007,//	魔法防御力增加	魔法防御力增加。
            70000008,//	最大HP增加	最大HP增加。
            70000009,//	最大MP增加	最大MP增加。
            70000011,//	移动速度增加	移动速度增加。
            70000010,//	跳跃力增加	跳跃力增加。
            70000013,//	魔法攻击力增加	魔法攻击力增加。
            70000012,//	物理攻击力增加	物理攻击力增加。
            70000015,//	全属性增加	所有能力值增加。
            70000014,//	爆击率增加	爆击率增加。
            70000017,//	物防提升魔防	根据物理防御力的一定比例，增加魔法防御力。
            70000016,//	攻击速度提升	攻击速度提高1阶段。
            70000002,//	智力增加	智力增加。
            70000001,//	敏捷增加	敏捷增加。
            70000000,//	力量增加	力量增加。
            70000006,//	物理防御力增加	物理防御力增加。
            70000005,//	回避值增加	回避值增加。
            70000004,//	命中值增加	命中值增加。
            70000003//	运气增加	运气增加。
        );
        mplew.write("Inner" + i + " Level");
        mplew.write("Inner" + i + " Rank");
        mplew.EndNode(false);
    }
}