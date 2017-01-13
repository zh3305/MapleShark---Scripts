CHARLIST();

function CHARLIST() {
    v5 = mplew.write("v5");
    v7 = v5;
    v4 = 0;
    if (!v7 || v7 == 12 || v7 == 22) {
        mplew.writeMapleAsciiString("");
        v2204 = mplew.writeInt("v2204");
        v0 = mplew.write("v0") != 0;
        v13 = mplew.writeInt("v13");
        v65 = mplew.writeBuffer("v65", 8);
        if (v13 > 0) {
            v60 = v13;
            do {
                v15 = mplew.writeInt("v15");
                v67 = mplew.writeBuffer("v67", 8);
                --v60;
            }
            while (v60);
        }
        v60 = 0;
        mplew.write("");
        v21 = mplew.writeInt("v21");
        if (v21 > 0) {
            do {
                v22 = mplew.writeInt("v22");
                ++v4;
            }
            while (v4 < v21);
        }
        v24 = mplew.write("v24");

        for (var i = 0; i < v24; i++) {
            sub_AB5200();
            mplew.write("v30");
        }
        //  "i < v24:" + i < v24 + " I " + i + " v24 " + v24;
        // mplew.LogMessage(msg);
        mplew.write("");
        mplew.write("");
        mplew.writeInt("");
        mplew.writeInt("");
        v35 = mplew.writeInt(-1);

        //     if (v35 > 3511) {
        //         if (v35 == 6111 || v35 == 6511) {
        //             LABEL_78:
        v36 = mplew.writeInt("currentTimeMillis");
        v37 = mplew.writeInt("currentTimeMillis");
        mplew.write("更改角色名");
        mplew.write("協議書開關");
        mplew.write("139 new");
        mplew.writeInt(0);
        mplew.write("JobConstants.开放职业创建", 1);
        mplew.write("JobConstants.职业顺序");
        // for (LoginJob j : LoginJob.values()) {
        for (var jjj = 0; jjj < 23; jjj++) {
            mplew.StartNode("enableCreate " + jjj);
            mplew.write("j.enableCreate()");
            mplew.writeShort(1);
            mplew.EndNode(true);
        }
        // if (v79C4 == v21A8 || *(v62 + 33652) != -1)
        //     continue LABEL_100;
        // v41 = sub_AD6950(/* 0, v2 + 1356 */);
        // v42 = v41 == 6;
        // if (v41 != 6) {
        //     if (v41 != 7) {
        //         LABEL_100:
        //         if (mplew.write("")) {
        //             v45 = mplew.write("v45");
        //             v46 = -1580 - v2;
        //             v8194 = v45;
        //             v47 = v2 + 1580;
        //             v48 = 8300;
        //             v62 = -1580 - v2;
        //             do {
        //                 v49 = mplew.write("v49");
        //                 v51 = mplew.writeShort("v51");
        //                 v51;
        //                 v52 = *v47;
        //                 v64 = 0;
        //                 if ( &v47[v46] <= 0x16) {
        //                     v47[v46 + 33176] = v52;
        //                     v46 = v62;
        //                     v64[v48] = v51;
        //                 }
        //                 ++v47;
        //                 ++v48;
        //             }
        //             while ( &v47[v46] < 23);
        //         }
        //         return result;
        //     }
        // }
        //             continue LABEL_100;
        //         }
        //     }
        //     else if (v35 == 3511 || v35 == 432 || v35 == 3111) {
        //         continue LABEL_78;
        //     }
        //     continue LABEL_78;
    }
    // return result;
}

function sub_AB5200( /*  */ ) {
    result = GW_CharacterStatDecode();
    AvatarLookDecode();
    if (result == 10000 || result == 10100 || result == 10110 || result == 10111 || result == 10112) {
        AvatarLookDecode();
    }
}

function GW_CharacterStatDecode() {
    mplew.StartNode("GW_CharacterStatDecode");

    mplew.writeInt("Id");
    mplew.writeInt("Id");
    mplew.writeInt("Unknown");
    mplew.AddPaddedString("Name", 13);
    mplew.write("Gender");
    mplew.write("Skin");
    mplew.writeInt("Face");
    mplew.writeInt("Hair");
    mplew.write("Unknown", -1);
    mplew.write("Unknown", 0);
    mplew.write("Unknown", 0);
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
    if (is_extendsp_job(job) || job == 512 || job == 522) {
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
    mplew.AddLong("Experience");
    mplew.writeInt("Fame");
    mplew.writeInt("Weapon Points");
    mplew.writeInt("Gachapon Experience");
    mplew.writeInt("未知 133新出现INT");
    mplew.AddLong("-2L Time");
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
    mplew.AddLong("-2L Time");
    mplew.writeInt("Pvp exp");
    mplew.write("pvpRank ");
    mplew.writeInt("BattlePoints");
    mplew.write("5");
    mplew.write("6");
    mplew.writeInt("", 0);

    mplew.StartNode("addPartTimeJob");
    parttimeJob = mplew.write("parttime.getJob()");
    if (parttimeJob > 0 && parttimeJob <= 5) {
        mplew.writeReversedLong("parttime.getTime()");
        mplew.AddLong("Reversed parttime.getTime()");
    } else {
        mplew.AddLong("Reversed -2L Time");
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
    mplew.AddLong("Reversed Time"); //
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
    result = job;
    return result;
}

function AvatarLookDecode() {

    mplew.StartNode("AvatarLookDecode");
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
    mplew.EndNode(false);
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