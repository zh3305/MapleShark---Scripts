mplew.writeInt("life.getObjectId()");
EncodeTemporary();

function EncodeTemporary() {

    mplew.StartNode("mask");
    var mask = Array(3);
    writeMaskFromList(mask);
    mplew.EndNode(false);


    mplew.StartNode("MobStat::DecodeTemporary");
    sub_E831C0(mask);
    mplew.EndNode(false);

    mplew.writeShort(0);
    mplew.write(1);

}

function sub_B7C3F0(uFlag, a2) {
    var result; // eax@2

    if (a2 < 0x60) {
        var rest = (uFlag[a2 >> 5] >> (31 - (a2 & 0x1F))) & 1;
        if (rest) {
            mplew.AddComment("uFlag " + a2)
        }
        result = rest;
    } else {
        result = 0;
    }
    return result;
}

function writeMaskFromList(mask) {
    //  int[] mask = new int[GameConstants.MAX_MOBSTAT];
    // for (MonsterStatusEffect statup : ss) {
    //     mask[(statup.getStati().getPosition())] |= statup.getStati().getValue();
    // }
    var MAX_MOBSTAT = 3;
    for (var i = 0; i < MAX_MOBSTAT; i++) {
        mask[i] = mplew.writeInt("mask[(" + i + ")]");
    }
}

function sub_E831C0(uFlag) //MobStat *MobStat, int uFlag, int iPacket, int tCur
{
    if (sub_B7C3F0(uFlag, 0x4B)) {
        mplew.writeInt("getX");
        var size = mplew.writeInt("unk");
        for (var _t = 0; _t < size; _t++) {
            mplew.writeInt("getFromID");
            mplew.writeInt("getSkill()"); // 伤害数值
            // if (mse.getSkill() > 0) {
            //     mplew.writeInt(eff.getDOTTime() * 1000);// DotAnimation
            //     mplew.writeInt(eff.getDOTTime());// DotCount
            // } else {
            // }
            // mplew.writeInt("未知东西");
        }
        // v14 = v6;
        // v8 = MobStat1[1].nACC;
        // if (v8)
        //     v14 = *(v8 + 24);
        // sub_B82A50(&MobStat1[1].tMDR_);
        // for (iPacketa = 0; iPacketa < MobStat1 ->tDeadlyCharge_; ++iPacketa) {
        //     v15 = 0;
        //     v16 = 0;
        //     v17 = 0;
        //     v18 = 0;
        //     v19 = 0;
        //     v20 = 0;
        //     v22 = 0;
        //     v23 = 0;
        //     v24 = 0;
        //     v27 = 0;
        //     v28 = 0;
        //     sub_E600B0(v7);
        //     v21 = tCur;
        //     v26 = tCur + v25;
        //     v9 = sub_E69C90(&MobStat1[1].tMDR_);
        //     qmemcpy(v9, &v15, 0x40);
        // }
        // tCur = MobStat1[1].nACC;
        // if (tCur) {
        //     do {
        //         v10 = sub_B81410(&tCur);
        //         v11 = tCur == 0;
        // *(v10 + 24) = v14;
        //     }
        //     while (!v11);
        // }
    }

}