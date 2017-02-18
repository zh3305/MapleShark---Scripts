mplew.write("", 0); //new143
mplew.writeInt("life.getObjectId()");
mplew.write("", 1);
var WzMonstrId = mplew.writeInt("WzMonstrId");
addMonsterStatus();
//Collection<MonsterStatusEffect> buffs = life.getStati().values();
EncodeTemporary();
//addMonsterInformation(mplew, life, newSpawn, false, (byte) spawnType, link);

function addMonsterStatus() {
    getChangedStats = mplew.write("life.getChangedStats() != null", 0, 1);
    if (getChangedStats) {
        mplew.writeInt("life.getChangedStats().hp");
        mplew.writeInt("life.getChangedStats().mp");
        mplew.writeInt("life.getChangedStats().exp");
        mplew.writeInt("life.getChangedStats().watk");
        mplew.writeInt("life.getChangedStats().matk");
        mplew.writeInt("life.getChangedStats().PDRate");
        mplew.writeInt("life.getChangedStats().MDRate");
        mplew.writeInt("life.getChangedStats().acc");
        mplew.writeInt("life.getChangedStats().eva");
        mplew.writeInt("life.getChangedStats().pushed");
        mplew.writeInt("life.getChangedStats().speed");
        mplew.writeInt("life.getChangedStats().level");
        mplew.writeInt("nUserCount");
    }
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

function EncodeTemporary() {

    mplew.StartNode("mask");
    var mask = Array(3);
    writeMaskFromList(mask);
    mplew.EndNode(false);
    mplew.StartNode("MobStat::DecodeTemporary");
    sub_E831C0(mask);
    mplew.EndNode(false);

    mplew.StartNode("addMonsterInformation");
    addMonsterInformation()
    mplew.EndNode(false);
}

function addMonsterInformation() {
    mplew.write("136+ 未知数据0", 0)
    mplew.write("136+ 未知数据0", 0)
    mplew.writePos("life.getTruePosition()");
    mplew.write("life.getStance()");
    //mplew.writeShort(0); // spawnPoint？ 135
    if (WzMonstrId == 8910000 || WzMonstrId == 8910100 || WzMonstrId == 9990033) {
        mplew.write("is_banban_boss_mob", 0);
    }
    mplew.writeShort("life.getFh()");
    mplew.writeShort("life.getFh()");
    var spawnType = mplew.writeShort("newSpawn? spawnType:life.isFake()?-4:-1");
    if ((spawnType == -3) || (spawnType >= 0)) {
        mplew.writeInt("link");
    }
    mplew.write("life.getCarnivalTeam()");
    mplew.writeLong("life.getHp()"); // life.getHp() > 2147483647 ? 2147483647 : (life.getChangedStats() != null ? (int) life.getChangedStats().getHp() : (int) life.getHp())
    mplew.writeInt("nEffectItemID", 0);
    if (mplew.DAddInt() == -2350 /*unk*/ ) { // 巡逻怪物的侦测范围?
        mplew.writeInt("", -2350);
        mplew.writeInt("", -1750);
        mplew.writeInt("", 150);
        mplew.writeInt("", 100);
    }
    mplew.writeInt("", 0);
    mplew.writeInt("", 0);
    mplew.writeInt("", 0);
    mplew.writeInt("", 0);
    if (WzMonstrId / 10000 == 961) //pvp怪物
    {
        mplew.writeMapleAsciiString("pvp怪物"); //m_sLifeReleaseMobName
    }
    mplew.writeInt("nAfterAttack", -1);
    mplew.writeInt("nCurrentAction", -1);
    mplew.write("bIsLeft", 0);
    v32 = mplew.writeInt("unk Count");
    if (v32 > 0) {
        v33 = v32;
        do {
            mplew.StartNode("unk Count " + v33);
            mplew.writeInt("MapKey");
            mplew.writeInt("pvcMobActiveObj");
            --v33;
            mplew.EndNode(false);
        }
        while (v33);
    }
    mplew.writeInt("m_nScale life.getEliteMobType() >= 0 ? 200 : 100", 200, 100);
    var getEliteMobType = mplew.writeInt("life.getEliteMobType()", -1);
    // if (mplew.write("life.getEliteMobType() >= 0 菁英怪物", 0)) // 菁英怪物
    // {
    //     mplew.LogAppend("找到菁英怪物");
    // }
    if (getEliteMobType >= 0) {
        mplew.LogAppend("找到菁英怪物");
        v36 = mplew.writeInt("unk Count");
        if (v36 > 0) {
            v172 = v36;
            do {
                v37 = mplew.writeInt("v37");
                v38 = mplew.writeInt("v38");
                --v172;
            }
            while (v172);
        }
        v42 = mplew.writeInt("v42");
    }
    // if (getEliteMobType >= 0) {
    //     mplew.LogAppend("找到getEliteMobType怪物");
    //     mplew.writeInt(getEliteMobType != 2 ? 0x8000000 : 0x6E000000); //*(v2 + 1)
    //     mplew.writeInt(getEliteMobType != 2 ? 0x24000000 : 0xD000000); //*(v2 + 2)
    //     mplew.writeInt(0x1000000); //*(v2 + 3)
    //     mplew.writeInt(0); //*(v2 + 4)
    // }
    mplew.write("", 0);
    mplew.writeInt("", 0);
    mplew.write(0);
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

function sub_E831C0(uFlag) //MobStat *MobStat, int uFlag, int iPacket, int tCur
{
    if (sub_B7C3F0(uFlag, 0)) {
        mplew.StartNode("mask  0");
        mplew.writeInt("MobStat1->wPDR_");
        mplew.writeInt("MobStat1->nMAD");
        mplew.writeShort("MobStat1->nMAD_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 1)) {
        mplew.StartNode("mask  1");
        mplew.writeInt("MobStat1->tMAD_");
        mplew.writeInt("MobStat1->nMDR");
        mplew.writeShort("MobStat1->nMDR_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 2)) {
        mplew.StartNode("mask  2");
        mplew.writeInt("MobStat1->wMDR_");
        mplew.writeInt("MobStat1->nACC");
        mplew.writeShort("MobStat1->nACC_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 3)) {
        mplew.StartNode("mask  3");
        mplew.writeInt("MobStat1->tACC_");
        mplew.writeInt("MobStat1->nEVA");
        mplew.writeShort("MobStat1->nEVA_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 4)) {
        mplew.StartNode("mask  4");
        mplew.writeInt("MobStat1->nSpeed_");
        mplew.writeInt("MobStat1->rSpeed_");
        mplew.writeShort("MobStat1->tSpeed_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 5)) {
        mplew.StartNode("mask  5");
        mplew.writeInt("MobStat1->nStun_");
        mplew.writeInt("MobStat1->rStun_");
        mplew.writeShort("MobStat1->tStun_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 6)) {
        mplew.StartNode("mask  6");
        mplew.writeInt("MobStat1->rFreeze_");
        mplew.writeInt("MobStat1->tFreeze_");
        mplew.writeShort("MobStat1->cFreeze_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 7)) {
        mplew.StartNode("mask  7");
        mplew.writeInt("MobStat1->rPoison_");
        mplew.writeInt("MobStat1->tPoison_");
        mplew.writeShort("MobStat1->wPoison_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 8)) {
        mplew.StartNode("mask  8");
        mplew.writeInt("MobStat1->cPoison_");
        mplew.writeInt("MobStat1->nSeal_");
        mplew.writeShort("MobStat1->rSeal_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 9)) {
        mplew.StartNode("mask  9");
        mplew.writeInt("MobStat1->nDarkness_");
        mplew.writeInt("MobStat1->rDarkness_");
        mplew.writeShort("MobStat1->tDarkness_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0xA)) {
        mplew.StartNode("mask  0xA");
        mplew.writeInt("MobStat1->tPowerUp_");
        mplew.writeInt("MobStat1->nMagicUp_");
        mplew.writeShort("MobStat1->rMagicUp_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0xB)) {
        mplew.StartNode("mask  0xB");
        mplew.writeInt("MobStat1->tMagicUp_");
        mplew.writeInt("MobStat1->nPGuardUp_");
        mplew.writeShort("MobStat1->rPGuardUp_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0xC)) {
        mplew.StartNode("mask  0xC");
        mplew.writeInt("MobStat1->tPGuardUp_");
        mplew.writeInt("MobStat1->nMGuardUp_");
        mplew.writeShort("MobStat1->rMGuardUp_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0xD)) {
        mplew.StartNode("mask  0xD");
        mplew.writeInt("MobStat1->tMGuardUp_");
        mplew.writeInt("MobStat1->nWeb_");
        mplew.writeShort("MobStat1->rWeb_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0xE)) {
        mplew.StartNode("mask  0xE");
        mplew.writeInt("MobStat1->tWeb_");
        mplew.writeInt("MobStat1->nPImmune_");
        mplew.writeShort("MobStat1->rPImmune_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0xF)) {
        mplew.StartNode("mask  0xF");
        mplew.writeInt("MobStat1->tPImmune_");
        mplew.writeInt("MobStat1->nMImmune_");
        mplew.writeShort("MobStat1->rMImmune_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x10)) {
        mplew.StartNode("mask  0x10");
        mplew.writeInt("MobStat1->tPowerImmune_");
        mplew.writeInt("MobStat1->nShowdown_");
        mplew.writeShort("MobStat1->rShowdown_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x11)) {
        mplew.StartNode("mask  0x11");
        mplew.writeInt("MobStat1->tShowdown_");
        mplew.writeInt("MobStat1->nHardSkin_");
        mplew.writeShort("MobStat1->rHardSkin_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x12)) {
        mplew.StartNode("mask  0x12");
        mplew.writeInt("MobStat1->tMImmune_");
        mplew.writeInt("MobStat1->nPowerImmune_");
        mplew.writeShort("MobStat1->rPowerImmune_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x13)) {
        mplew.StartNode("mask  0x13");
        mplew.writeInt("MobStat1->rVenom_");
        mplew.writeInt("MobStat1->tVenom_");
        mplew.writeShort("MobStat1->wVenom_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x14)) {
        mplew.StartNode("mask  0x14");
        mplew.writeInt("MobStat1->nBlind_");
        mplew.writeInt("MobStat1->rBlind_");
        mplew.writeShort("MobStat1->tBlind_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x15)) {
        mplew.StartNode("mask  0x15");
        mplew.writeInt("MobStat1->rSealSkill_");
        mplew.writeInt("MobStat1->tSealSkill_");
        mplew.writeShort("MobStat1->nDazzle_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x16)) {
        mplew.StartNode("mask  0x16");
        mplew.writeInt("MobStat1->tDazzle_");
        mplew.writeInt("MobStat1->nRiseByToss_");
        mplew.writeShort("MobStat1->rRiseByToss_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x17)) {
        mplew.StartNode("mask  0x17");
        mplew.writeInt("MobStat1->tRiseByToss_");
        mplew.writeInt("MobStat1->nPCounter_");
        mplew.writeShort("MobStat1->rPCounter_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x18)) {
        mplew.StartNode("mask  0x18");
        mplew.writeInt("MobStat1->tPCounter_");
        mplew.writeInt("MobStat1->wPCounter_");
        mplew.writeShort("MobStat1->nMCounter_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x19)) {
        mplew.StartNode("mask  0x19");
        mplew.writeInt("MobStat1->nCounterProb_");
        mplew.writeInt("MobStat1->tCounterDelay_");
        mplew.writeShort("*&MobStat1->bCounterDelay_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x1A)) {
        mplew.StartNode("mask  0x1A");
        mplew.writeInt("MobStat1->nBodyPressure_");
        mplew.writeInt("MobStat1->rBodyPressure_");
        mplew.writeShort("MobStat1->tBodyPressure_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x1B)) {
        mplew.StartNode("mask  0x1B");
        mplew.writeInt("MobStat1->rMCounter_");
        mplew.writeInt("MobStat1->tMCounter_");
        mplew.writeShort("MobStat1->wMCounter_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x1C)) {
        mplew.StartNode("mask  0x1C");
        mplew.writeInt("MobStat1->tTimeBomb_");
        mplew.writeInt("MobStat1->wTimeBomb_");
        mplew.writeShort("MobStat1->nMagicCrash_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x1D)) {
        mplew.StartNode("mask  0x1D");
        mplew.writeInt("MobStat1->rMagicCrash_");
        mplew.writeInt("MobStat1->tMagicCrash_");
        mplew.writeShort("MobStat1->nDamagedElemAttr_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x1E)) {
        mplew.StartNode("mask  0x1E");
        mplew.writeInt("MobStat1->tAmbush_");
        mplew.writeInt("MobStat1->wAmbush_");
        mplew.writeShort("MobStat1->nVenom_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x1F)) {
        mplew.StartNode("mask  0x1F");
        mplew.writeInt("HIDWORD(MobStat1->nFs)");
        mplew.writeInt("MobStat1->nInvincible_");
        mplew.writeShort("MobStat1->rInvincible_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x20)) {
        mplew.StartNode("mask  0x20");
        mplew.writeInt("MobStat1->tInvincible_");
        mplew.writeInt("MobStat1->nTreasure_");
        mplew.writeShort("MobStat1->rTreasure_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x21)) {
        mplew.StartNode("mask  0x21");
        mplew.writeInt("MobStat1->tAddDamParty_");
        mplew.writeInt("MobStat1->pAddDamParty_");
        mplew.writeShort("MobStat1->cAddDamParty_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x22)) {
        mplew.StartNode("mask  0x22");
        mplew.writeInt("MobStat1->wAddDamParty_");
        mplew.writeInt("MobStat1->nHitCriDamR_");
        mplew.writeShort("MobStat1->rHitCriDamR_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x23)) {
        mplew.StartNode("mask  0x23");
        mplew.writeInt("MobStat1->tHitCriDamR_");
        mplew.writeInt("MobStat1->nAddEffect_");
        mplew.writeShort("MobStat1->rAddEffect_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x24)) {
        mplew.StartNode("mask  0x24");
        mplew.writeInt("MobStat1->tFatality_");
        mplew.writeInt("MobStat1->uFatality_");
        mplew.writeShort("MobStat1->yFatality_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x25)) {
        mplew.StartNode("mask  0x25");
        mplew.writeInt("MobStat1->nExplosion_");
        mplew.writeInt("MobStat1->rExplosion_");
        mplew.writeShort("MobStat1->tExplosion_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x26)) {
        mplew.StartNode("mask  0x26");
        mplew.writeInt("MobStat1->wDeadlyCharge_");
        mplew.writeInt("MobStat1->nSmite_");
        mplew.writeShort("MobStat1->rSmite_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x27)) {
        mplew.StartNode("mask  0x27");
        mplew.writeInt("MobStat1->sLinkTeam._m_pStr");
        mplew.writeInt("MobStat1->nAddDamSkill_");
        mplew.writeShort("MobStat1->rAddDamSkill_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x28)) {
        mplew.StartNode("mask  0x28");
        mplew.writeInt("MobStat1->rMultiDamSkill_");
        mplew.writeInt("MobStat1->tMultiDamSkill_");
        mplew.writeShort("MobStat1->cMultiDamSkill_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x29)) {
        mplew.StartNode("mask  0x29");
        mplew.writeInt("MobStat1->rTrueSight_");
        mplew.writeInt("MobStat1->tTrueSight_");
        mplew.writeShort("MobStat1->cTrueSight_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x2A)) {
        mplew.StartNode("mask  0x2A");
        mplew.writeInt("MobStat1->tDodgeBodyAttack_");
        mplew.writeInt("MobStat1->nDebuffHealing_");
        mplew.writeShort("MobStat1->rDebuffHealing_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x2B)) {
        mplew.StartNode("mask  0x2B");
        mplew.writeInt("MobStat1->tAddDamSkill2_");
        mplew.writeInt("MobStat1->nBodyAttack_");
        mplew.writeShort("MobStat1->rBodyAttack_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x2C)) {
        mplew.StartNode("mask  0x2C");
        mplew.writeInt("MobStat1->tBodyAttack_");
        mplew.writeInt("MobStat1->nTempMoveAbility_");
        mplew.writeShort("MobStat1->rTempMoveAbility_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x2D)) {
        mplew.StartNode("mask  0x2D");
        mplew.writeInt("MobStat1->tTempMoveAbility_");
        mplew.writeInt("MobStat1->nSeperateSoulP_");
        mplew.writeShort("MobStat1->rSeperateSoulP_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x2E)) {
        mplew.StartNode("mask  0x2E");
        mplew.writeInt("MobStat1->tSeperateSoulP_");
        mplew.writeInt("MobStat1->wSeperateSoulP_");
        mplew.writeShort("MobStat1->uSeperateSoulP_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x2F)) {
        mplew.StartNode("mask  0x2F");
        mplew.writeInt("MobStat1->nSeperateSoulC_");
        mplew.writeInt("MobStat1->rSeperateSoulC_");
        mplew.writeShort("MobStat1->tSeperateSoulC_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x30)) {
        mplew.StartNode("mask  0x30");
        mplew.writeInt("MobStat1->tEmber_");
        mplew.writeInt("MobStat1->wEmber_");
        mplew.writeShort("MobStat1->uEmber_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x31)) {
        mplew.StartNode("mask  0x31");
        mplew.writeInt("MobStat1->nElementResetBySummon_");
        mplew.writeInt("MobStat1->rElementResetBySummon_");
        mplew.writeShort("MobStat1->tElementResetBySummon_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x32)) {
        mplew.StartNode("mask  0x32");
        mplew.writeInt("MobStat1->nJaguarProvoke_");
        mplew.writeInt("MobStat1->rJaguarProvoke_");
        mplew.writeShort("MobStat1->tJaguarProvoke_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x33)) {
        mplew.StartNode("mask  0x33");
        mplew.writeInt("MobStat1->nPinkbeanFlowerPot_");
        mplew.writeInt("MobStat1->rPinkbeanFlowerPot_");
        mplew.writeShort("MobStat1->tPinkbeanFlowerPot_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x34)) {
        mplew.StartNode("mask  0x34");
        mplew.writeInt("MobStat1->tBMageDebuff_");
        mplew.writeInt("MobStat1->cBMageDebuff_");
        mplew.writeShort("MobStat1->nDarkLightning_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x35)) {
        mplew.StartNode("mask  0x35");
        mplew.writeInt("MobStat1->rDarkLightning_");
        mplew.writeInt("MobStat1->tDarkLightning_");
        mplew.writeShort("MobStat1->cDarkLightning_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x36)) {
        mplew.StartNode("mask  0x36");
        mplew.writeInt("MobStat1->rBattlePvP_Helena_Mark_");
        mplew.writeInt("MobStat1->tBattlePvP_Helena_Mark_");
        mplew.writeShort("MobStat1->cBattlePvP_Helena_Mark_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x37)) {
        mplew.StartNode("mask  0x37");
        mplew.writeInt("MobStat1->rPsychicLock_");
        mplew.writeInt("MobStat1->tPsychicLock_");
        mplew.writeShort("MobStat1->nPsychicLockCoolTime_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x38)) {
        mplew.StartNode("mask  0x38");
        mplew.writeInt("MobStat1->rPsychicLockCoolTime_");
        mplew.writeInt("MobStat1->tPsychicLockCoolTime_");
        mplew.writeShort("MobStat1->nPsychicGroundMark_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x39)) {
        mplew.StartNode("mask  0x39");
        mplew.writeInt("MobStat1->tPsychicGroundMark_");
        mplew.writeInt("MobStat1->nPsychicForce_");
        mplew.writeShort("MobStat1->rPsychicForce_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x3A)) {
        mplew.StartNode("mask  0x3A");
        mplew.writeInt("MobStat1->tPsychicForce_");
        mplew.writeInt("MobStat1->nBossPropPlus_");
        mplew.writeShort("MobStat1->rBossPropPlus_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x3B)) {
        mplew.StartNode("mask  0x3B");
        mplew.writeInt("MobStat1->tBossPropPlus_");
        mplew.writeInt("MobStat1->nMultiPMDR_");
        mplew.writeShort("MobStat1->rMultiPMDR_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x3C)) {
        mplew.StartNode("mask  0x3C");
        mplew.writeInt("MobStat1->tHardSkin_");
        mplew.writeInt("MobStat1->nAmbush_");
        mplew.writeShort("MobStat1->rAmbush_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x3D)) {
        mplew.StartNode("mask  0x3D");
        mplew.writeInt("MobStat1->tMultiPMDR_");
        mplew.writeInt("MobStat1->cMultiPMDR_");
        mplew.writeShort("MobStat1->nBahamutLightElemAddDam_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x3E)) {
        mplew.StartNode("mask  0x3E");
        mplew.writeInt("MobStat1->cBahamutLightElemAddDam_");
        mplew.writeInt("MobStat1->nHangOver_");
        mplew.writeShort("MobStat1->rHangOver_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x3F)) {
        mplew.StartNode("mask  0x3F");
        mplew.writeInt("MobStat1->rAreaInstallByHit_");
        mplew.writeInt("MobStat1->tAreaInstallByHit_");
        mplew.writeShort("MobStat1->nLaser_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x40)) {
        mplew.StartNode("mask  0x40");
        mplew.writeInt("MobStat1->nRWLiftPress_");
        mplew.writeInt("MobStat1->rRWLiftPress_");
        mplew.writeShort("MobStat1->tRWLiftPress_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x41)) {
        mplew.StartNode("mask  0x41");
        mplew.writeInt("MobStat1->rBahamutLightElemAddDam_");
        mplew.writeInt("MobStat1->tBahamutLightElemAddDam_");
        mplew.writeShort("MobStat1->pBahamutLightElemAddDam_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x42)) {
        mplew.StartNode("mask  0x42");
        mplew.writeInt("MobStat1->pTrueSight_");
        mplew.writeInt("MobStat1->uTrueSight_");
        mplew.writeShort("MobStat1->wTrueSight_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x43)) {
        mplew.StartNode("mask  0x43");
        mplew.writeInt("MobStat1->m_tLastUpdateResetTemporary");
        mplew.writeInt("*(&MobStat1->m_tLastUpdateResetTemporary + 1)");
        mplew.writeShort("MobStat1[1].nLevel");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x44)) {
        mplew.StartNode("mask  0x44");
        mplew.writeInt("MobStat1[1].aDamagedElemAttr");
        mplew.writeInt("MobStat1[1].nPAD");
        mplew.writeShort("MobStat1[1].nPAD_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x45)) {
        mplew.StartNode("mask  0x45");
        mplew.writeInt("MobStat1->rDamagedElemAttr_");
        mplew.writeInt("MobStat1->tDamagedElemAttr_");
        mplew.writeShort("*(&MobStat1->tDamagedElemAttr_ + 1)");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x46)) {
        mplew.StartNode("mask  0x46");
        mplew.writeInt("MobStat1->tMystery_");
        mplew.writeInt("MobStat1->nAddDamParty_");
        mplew.writeShort("MobStat1->rAddDamParty_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x47)) {
        mplew.StartNode("mask  0x47");
        mplew.writeInt("MobStat1->pFatality_");
        mplew.writeInt("MobStat1->mFatality_");
        mplew.writeShort("MobStat1->wFatality_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x48)) {
        mplew.StartNode("mask  0x48");
        mplew.writeInt("MobStat1->tDark_");
        mplew.writeInt("MobStat1->nMystery_");
        mplew.writeShort("MobStat1->rMystery_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x49)) {
        mplew.StartNode("mask  0x49");
        mplew.writeInt("MobStat1->nLifting_");
        mplew.writeInt("MobStat1->rLifting_");
        mplew.writeShort("MobStat1->tLifting_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x4A)) {
        mplew.StartNode("mask  0x4A");
        mplew.writeInt("MobStat1->tRWChoppingHammer_");
        mplew.writeInt("LODWORD(MobStat1->dEquipDropRate)");
        mplew.writeShort("HIDWORD(MobStat1->dEquipDropRate)");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 1)) {
        mplew.StartNode("mask  1");
        mplew.writeInt("MobStat1->rMDR_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 3)) {
        mplew.StartNode("mask  3");
        mplew.writeInt("MobStat1->rEVA_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x19)) {
        mplew.StartNode("mask  0x19");
        mplew.writeInt("MobStat1->nAggroRank_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x1A)) {
        mplew.StartNode("mask  0x1A");
        mplew.writeInt("MobStat1->nWeakness_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x19) || sub_B7C3F0(uFlag, 0x1A)) {
        mplew.StartNode("mask  0x19");
        mplew.writeInt("MobStat1->rWeakness_");
        mplew.write("LOBYTE(MobStat1->nTimeBomb_)") != 0;
        mplew.writeInt("MobStat1->rTimeBomb_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x25)) {
        mplew.StartNode("mask  0x25");
        mplew.writeInt("MobStat1->bPImmune");
        mplew.writeInt("MobStat1->wExplosion_");
        mplew.writeInt("MobStat1->bExchangeAttack");
        mplew.writeInt("MobStat1->bBalogDisable");
        mplew.writeInt("MobStat1->nTotalDotCount");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x49)) {
        mplew.StartNode("mask  0x49");
        mplew.writeInt("*&MobStat1->bReBounding_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x4E) && mplew.write("")) {
        mplew.StartNode("mask  0x4E");
        mplew.writeInt("MobStat1[1].nPDR");
        mplew.writeInt("MobStat1[1].nPDR_");
        mplew.writeInt("MobStat1[1].rPDR_");
        mplew.writeInt("MobStat1[1].tPDR_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x27)) {
        mplew.StartNode("mask  0x27");
        mplew.writeInt("MobStat1->tAddDamSkill_");
        mplew.writeInt("MobStat1->nMultiDamSkill_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x2A)) {
        mplew.StartNode("mask  0x2A");
        mplew.writeInt("MobStat1->rAddDamSkill2_");
        mplew.writeInt("MobStat1->tDebuffHealing_");
        mplew.writeInt("MobStat1->nAddDamSkill2_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 6)) {
        mplew.StartNode("mask  6");
        mplew.write("MobStat1->nPoison_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x33)) {
        mplew.StartNode("mask  0x33");
        mplew.writeInt("MobStat1->nBattlePvP_Helena_Mark_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x36)) {
        mplew.StartNode("mask  0x36");
        mplew.writeInt("MobStat1->nPsychicLock_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x38)) {
        mplew.StartNode("mask  0x38");
        mplew.writeInt("MobStat1->rPsychicGroundMark_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x3E)) {
        mplew.StartNode("mask  0x3E");
        mplew.writeInt("MobStat1->tHangOver_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 8)) {
        mplew.StartNode("mask  8");
        mplew.writeInt("MobStat1->tSeal_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x4B)) {
        mplew.StartNode("mask  0x4B");
        tDeadlyCharge = mplew.write("MobStat1->tDeadlyCharge_");
        // v14 = v6;
        // v8 = MobStat1[1].nACC;
        // if (v8)
        //     v14 = *(v8 + 24);
        // sub_B82A50(&MobStat1[1].tMDR_);
        for (i = 0; i < tDeadlyCharge; ++i) {
            // sub_E8C2C0(v7);
            v2[0] = mplew.writeInt(0);
            v2[1] = mplew.writeInt(0);
            v2[2] = mplew.writeInt(0);
            v2[3] = mplew.writeInt(0);
            v2[4] = mplew.writeInt(0);
            v2[5] = mplew.writeInt(0);
            v2[8] = mplew.writeInt(0);
            v2[9] = mplew.writeInt(0);
            v2[10] = mplew.writeInt(0);
            v2[12] = mplew.writeInt(0);
            v2[13] = mplew.writeInt(0);
            v2[14] = mplew.writeInt(0);
            v2[15] = mplew.writeInt(0);
            v2[16] = mplew.writeInt(0);
            // sub_E8C2C0(v7); end
        }
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x4C)) {
        mplew.StartNode("mask  0x4C");
        mplew.write("MobStat1->tDark_");
        mplew.write("MobStat1->nDeadlyCharge_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x4D)) {
        mplew.StartNode("mask  0x4D");
        mplew.write("MobStat1->rDeadlyCharge_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x23)) {
        mplew.StartNode("mask  0x23");
        mplew.writeInt("MobStat1->rFatality_");
        mplew.writeInt("MobStat1->tAddEffect_");
        mplew.writeInt("MobStat1->nFatality_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x4F)) {
        mplew.StartNode("mask  0x4F");
        // v12 = sub_4EE040(tCur);
        // v29 = 0;
        // sub_47E230(v12);
        // v29 = -1;
        // if (tCur)
        //     sub_47DB30((tCur - 12));
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x50)) {
        mplew.StartNode("mask  0x50");
        mplew.writeInt("MobStat1->wIncizing_");
        mplew.writeInt("MobStat1->nDodgeBodyAttack_");
        mplew.writeInt("MobStat1->rDodgeBodyAttack_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x51)) {
        mplew.StartNode("mask  0x51");
        mplew.writeInt("MobStat1->wSeperateSoulC_");
        mplew.writeInt("MobStat1->nFixDamRBuff_");
        mplew.writeShort("MobStat1->rFixDamRBuff_");
        mplew.writeInt("MobStat1->tFixDamRBuff_");
        mplew.writeInt("MobStat1->nElementDarkness_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x52)) {
        mplew.StartNode("mask  0x52");
        mplew.writeInt("MobStat1->rElementDarkness_");
        mplew.writeInt("MobStat1->tElementDarkness_");
        mplew.writeShort("MobStat1->nEmber_");
        mplew.writeInt("MobStat1->rEmber_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x53)) {
        mplew.StartNode("mask  0x53");
        mplew.writeInt("MobStat1->cElementResetBySummon_");
        mplew.writeInt("MobStat1->pElementResetBySummon_");
        mplew.writeInt("MobStat1->wElementResetBySummon_");
        mplew.writeInt("MobStat1->uElementResetBySummon_");
        mplew.writeInt("MobStat1->nAreaInstallByHit_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x54)) {
        mplew.StartNode("mask  0x54");
        mplew.writeInt("MobStat1->rSoulExplosion_");
        mplew.writeInt("MobStat1->wSoulExplosion_");
        mplew.writeInt("MobStat1->nIncizing_");
        mplew.writeInt("MobStat1->rIncizing_");
        mplew.writeInt("MobStat1->tIncizing_");
        mplew.writeInt("MobStat1->uIncizing_");
        mplew.writeInt("MobStat1->pIncizing_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x42)) {
        mplew.StartNode("mask  0x42");
        mplew.writeInt("MobStat1->nSoulExplosion_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x55)) {
        mplew.StartNode("mask  0x55");
        mplew.writeInt("MobStat1->nJaguarBleeding_");
        mplew.writeInt("MobStat1->rJaguarBleeding_");
        mplew.writeInt("MobStat1->tJaguarBleeding_");
        mplew.writeInt("MobStat1->nBMageDebuff_");
        mplew.writeInt("MobStat1->rBMageDebuff_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x3F)) {
        mplew.StartNode("mask  0x3F");
        mplew.writeInt("MobStat1->rLaser_");
        mplew.writeInt("MobStat1->tLaser_");
        mplew.writeInt("MobStat1->uLaser_");
        mplew.writeInt("MobStat1->wLaser_");
        mplew.EndNode(false);
    }
    if (sub_B7C3F0(uFlag, 0x40)) {
        mplew.StartNode("mask  0x40");
        mplew.writeInt("MobStat1->nRWChoppingHammer_");
        mplew.writeInt("result");
        // MobStat1 ->rRWChoppingHammer_ = result;
        mplew.EndNode(false);
    }
}