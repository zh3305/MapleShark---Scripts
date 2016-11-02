function CHAR_INFO() {
    chrId = mplew.writeInt("chr.getId()");
    if (mplew.write(0))//0
    {
        v4 = mplew.write("v4");
        v5 = v4 != 0;
        v19 = mplew.write("") != 0;
        mplew.writeMapleAsciiString("");
        if (!v5) {
            sub_15E01D0(/* 0, iPacket */);
        }
    }
    else {
        v27 = mplew.write("chr.getLevel()");
        v30 = mplew.writeShort("getJob");
        v29 = mplew.writeShort("getSubcategory");
        v32 = mplew.write("pvpRank");
        v31 = mplew.writeInt("getFame");
        if (mplew.write("marriage", 0))
            sub_726ED0(/* &v33, iPacket */);
        v10 = mplew.write("size");
        mplew.StartNode("prof");
        if (v10 > 0) {
            v23 = v10;
            do {
                v11 = mplew.writeShort("prof");
                v13 = v23-- == 1;
            }
            while (!v13);
        }
        mplew.EndNode(false);
        mplew.writeMapleAsciiString("");
        mplew.writeMapleAsciiString("");
        mplew.write("isSelf", -1, 0);
        mplew.write("unk", 0);
        PetsisEmpty = mplew.write("getPets.isEmpty", 0, 1);
        SetPetInfo();
        mplew.StartNode("wishlistSize");
        wishlistSize = mplew.write("wishlistSize");
        if (wishlistSize > 0) {
            // mplew.writeBuffer("aWishItem.a", 4 * v32);
            mplew.writeInt("aWishItem.a");

        }
        mplew.EndNode(false);
        Decode();
        DamageSkinSaveInfoDecode();

        mplew.write("nCharisma");
        mplew.write("nInsight");
        mplew.write("nWill");
        mplew.write("nCraft");
        mplew.write("nSense");
        mplew.write("nCharm");

        mplew.writeInt("unk 1");
        mplew.writeInt("unk 2");

        v33 = mplew.writeInt("SETUP");
        // if (v33 > 0) {
        for (var i = 0; i < v33; i++) {
            // mplew.writeBuffer("SETUP Item", 4 * v33);
            mplew.writeInt("SETUP Item " + i);
        }
        // }

        v34 = mplew.writeInt("EQUIP");
        for (var i = 0; i < v34; i++) {
            mplew.writeInt("EQUIP Item " + i);
        }
        // if (v34 > 0) {
        //     mplew.writeBuffer("aWishItem.a", 4 * v34);
        // }
        mplew.writeInt("getDamageSkin");
        mplew.writeInt("");
        unksize = mplew.writeInt("unksize");
        for (var i = 0; i < unksize; i++) {
            mplew.writeInt("unk " + i);
        }
    }
}
function sub_726ED0(/*  */) {
    //   return mplew.writeBuffer("marriage", 0x30);
    mplew.writeInt("marriage.getId()"); //marriage id  dwMarriageNo
    mplew.writeInt("marriage.getHusbandId()"); //husband char id  dwGroomID
    mplew.writeInt("marriage.getWifeId()"); //wife char id dwBrideID
    mplew.writeShort(3); //msg type  usStatus
    mplew.writeInt("chr.getMarriageItemId()"); //ring id husband nGroomItemID
    mplew.writeInt("chr.getMarriageItemId()"); //ring id wife nBrideItemID
    mplew.writeAsciiString("marriage.getHusbandName()", 13); //husband name sGroomName
    mplew.writeAsciiString("marriage.getWifeName()", 13); //wife name  sBrideName

}
function sub_15E01D0(/*  */) {
    v3 = mplew.writeInt("v3");
    v7 = 1;
    v38 = 1;
    do {
        if ((v7 - 1) > 8 || v7 != 9) {
            v8 = mplew.writeInt("v8");
            v7 = v38;
        }
        v38 = ++v7;
    }
    while (v7 < 10);
    mplew.write("");
    v12 = mplew.writeInt("v12");
    var v13 = true;
    if (v13) {
    }
    else {
        v45 = mplew.writeBuffer("v45", 0x18);
        v46 = mplew.writeBuffer("v46", 2);
        v19 = mplew.writeInt("v19");
        sub_596250(/* *(v2 + 1456), iPacket, v19 */);
    }
}
function sub_596250(/*  */) {
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.writeInt("");
    result = mplew.writeInt("result");
}

function SetPetInfo() {
    mplew.StartNode("SetPetInfo");
    result = mplew.write("index");
    if (result) {
        do {
            v5 = mplew.writeInt("getPetIndex");
            v6 = mplew.writeInt("getPetItemId");
            v9 = mplew.writeMapleAsciiString("getName");
            mplew.write("getLevel");
            mplew.writeShort("getCloseness");
            mplew.write("getFullness");
            mplew.writeShort("getFlags");
            mplew.writeInt("getItemId");
            mplew.writeInt(-1);
            v20 = 0;
        }
        while (mplew.write("while"));
    }
    mplew.EndNode(false);
}
CHAR_INFO();
function Decode() {
    mplew.StartNode("Decode");
    mplew.writeInt("getItemId");
    v4 = mplew.writeShort("medalQuests.size");
    if (v4 > 0) {
        v18 = v4;
        while (1) {
            mplew.StartNode("Decode  " + v18);
            v7 = mplew.writeInt("left,right");
            v24 = mplew.writeBuffer("v24", 8);
            mplew.EndNode(false);
            v15 = v18-- == 1;
            if (v15) {
                mplew.EndNode(false);
                return;
            }
        }
    }
    mplew.EndNode(false);
}

function DamageSkinSaveInfoDecode() {
    mplew.StartNode("DamageSkinSaveInfoDecode");
    v4 = mplew.write(0);
    if (v4) {
        DAMAGESKINSAVEDATA_Decode();             // ActiveDamageSkin
        DAMAGESKINSAVEDATA_Decode();             // PremiumDamageSkin
        mplew.writeShort("");
        v4 = mplew.writeShort("v4");
        if (v4 > 0) {
            v12 = v4;
            do {
                DAMAGESKINSAVEDATA_Decode();
                --v12;
            }
            while (v12);
        }
    }
    mplew.EndNode(false);
}
function DAMAGESKINSAVEDATA_Decode() {
    mplew.writeInt("this");
    mplew.writeInt("");
    mplew.write("");
    v4 = mplew.writeMapleAsciiString("v4");
}