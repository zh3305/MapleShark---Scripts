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
    }
    else {
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
function sub_E831C0(uFlag)//MobStat *MobStat, int uFlag, int iPacket, int tCur
{
    var MobStat1; // ebx@1
    var Int_v5; // eax@1
    var Int_v6; // esi@1
    var Int_v7; // ebp@1
    var Int_v8; // eax@186
    var Int_v9; // edi@189
    var Int_v10; // eax@191
    var bool_v11; // zf@191
    var Int_v12; // eax@199
    var Int_result; // eax@217
    var Int_v14; // [sp+14h] [bp-50h]@186
    var Int_v15; // [sp+18h] [bp-4Ch]@189
    var Int_v16; // [sp+1Ch] [bp-48h]@189
    var Int_v17; // [sp+20h] [bp-44h]@189
    var Int_v18; // [sp+24h] [bp-40h]@189
    var Int_v19; // [sp+28h] [bp-3Ch]@189
    var Int_v20; // [sp+2Ch] [bp-38h]@189
    var Int_v21; // [sp+30h] [bp-34h]@189
    var Int_v22; // [sp+34h] [bp-30h]@189
    var Int_v23; // [sp+38h] [bp-2Ch]@189
    var Int_v24; // [sp+3Ch] [bp-28h]@189
    var Int_v25; // [sp+40h] [bp-24h]@189
    var Int_v26; // [sp+44h] [bp-20h]@189
    var Int_v27; // [sp+50h] [bp-14h]@189
    var Int_v28; // [sp+54h] [bp-10h]@189
    var Int_v29; // [sp+60h] [bp-4h]@199
    var Int_iPacketa; // [sp+6Ch] [bp+8h]@188

    //   MobStat1 = MobStat;
    v5 = sub_B7C3F0(uFlag, 0);
    // v6 = tCur;
    // v7 = iPacket;
    if (v5) {
        mplew.writeInt("MobStat1->wPDR_");
        mplew.writeInt("MobStat1->nMAD");
        mplew.writeShort("MobStat1->nMAD_");
    }
    if (sub_B7C3F0(uFlag, 1)) {
        mplew.writeInt("MobStat1->tMAD_");
        mplew.writeInt("MobStat1->nMDR");
        mplew.writeShort("MobStat1->nMDR_");
    }
    if (sub_B7C3F0(uFlag, 2)) {
        mplew.writeInt("MobStat1->wMDR_");
        mplew.writeInt("MobStat1->nACC");
        mplew.writeShort("MobStat1->nACC_");
    }
    if (sub_B7C3F0(uFlag, 3)) {
        mplew.writeInt("MobStat1->tACC_");
        mplew.writeInt("MobStat1->nEVA");
        mplew.writeShort("MobStat1->nEVA_");
    }
    if (sub_B7C3F0(uFlag, 4)) {
        mplew.writeInt("MobStat1->nSpeed_");
        mplew.writeInt("MobStat1->rSpeed_");
        mplew.writeShort("MobStat1->tSpeed_");
    }
    if (sub_B7C3F0(uFlag, 5)) {
        mplew.writeInt("MobStat1->nStun_");
        mplew.writeInt("MobStat1->rStun_");
        mplew.writeShort("MobStat1->tStun_");
    }
    if (sub_B7C3F0(uFlag, 6)) {
        mplew.writeInt("MobStat1->rFreeze_");
        mplew.writeInt("MobStat1->tFreeze_");
        mplew.writeShort("MobStat1->cFreeze_");
    }
    if (sub_B7C3F0(uFlag, 7)) {
        mplew.writeInt("MobStat1->rPoison_");
        mplew.writeInt("MobStat1->tPoison_");
        mplew.writeShort("MobStat1->wPoison_");
    }
    if (sub_B7C3F0(uFlag, 8)) {
        mplew.writeInt("MobStat1->cPoison_");
        mplew.writeInt("MobStat1->nSeal_");
        mplew.writeShort("MobStat1->rSeal_");
    }
    if (sub_B7C3F0(uFlag, 9)) {
        mplew.writeInt("MobStat1->nDarkness_");
        mplew.writeInt("MobStat1->rDarkness_");
        mplew.writeShort("MobStat1->tDarkness_");
    }
    if (sub_B7C3F0(uFlag, 0xA)) {
        mplew.writeInt("MobStat1->tPowerUp_");
        mplew.writeInt("MobStat1->nMagicUp_");
        mplew.writeShort("MobStat1->rMagicUp_");
    }
    if (sub_B7C3F0(uFlag, 0xB)) {
        mplew.writeInt("MobStat1->tMagicUp_");
        mplew.writeInt("MobStat1->nPGuardUp_");
        mplew.writeShort("MobStat1->rPGuardUp_");
    }
    if (sub_B7C3F0(uFlag, 0xC)) {
        mplew.writeInt("MobStat1->tPGuardUp_");
        mplew.writeInt("MobStat1->nMGuardUp_");
        mplew.writeShort("MobStat1->rMGuardUp_");
    }
    if (sub_B7C3F0(uFlag, 0xD)) {
        mplew.writeInt("MobStat1->tMGuardUp_");
        mplew.writeInt("MobStat1->nWeb_");
        mplew.writeShort("MobStat1->rWeb_");
    }
    if (sub_B7C3F0(uFlag, 0xE)) {
        mplew.writeInt("MobStat1->tWeb_");
        mplew.writeInt("MobStat1->nPImmune_");
        mplew.writeShort("MobStat1->rPImmune_");
    }
    if (sub_B7C3F0(uFlag, 0xF)) {
        mplew.writeInt("MobStat1->tPImmune_");
        mplew.writeInt("MobStat1->nMImmune_");
        mplew.writeShort("MobStat1->rMImmune_");
    }
    if (sub_B7C3F0(uFlag, 0x10)) {
        mplew.writeInt("MobStat1->tPowerImmune_");
        mplew.writeInt("MobStat1->nShowdown_");
        mplew.writeShort("MobStat1->rShowdown_");
    }
    if (sub_B7C3F0(uFlag, 0x11)) {
        mplew.writeInt("MobStat1->tShowdown_");
        mplew.writeInt("MobStat1->nHardSkin_");
        mplew.writeShort("MobStat1->rHardSkin_");
    }
    if (sub_B7C3F0(uFlag, 0x12)) {
        mplew.writeInt("MobStat1->tMImmune_");
        mplew.writeInt("MobStat1->nPowerImmune_");
        mplew.writeShort("MobStat1->rPowerImmune_");
    }
    if (sub_B7C3F0(uFlag, 0x13)) {
        mplew.writeInt("MobStat1->rVenom_");
        mplew.writeInt("MobStat1->tVenom_");
        mplew.writeShort("MobStat1->wVenom_");
    }
    if (sub_B7C3F0(uFlag, 0x14)) {
        mplew.writeInt("MobStat1->nBlind_");
        mplew.writeInt("MobStat1->rBlind_");
        mplew.writeShort("MobStat1->tBlind_");
    }
    if (sub_B7C3F0(uFlag, 0x15)) {
        mplew.writeInt("MobStat1->rSealSkill_");
        mplew.writeInt("MobStat1->tSealSkill_");
        mplew.writeShort("MobStat1->nDazzle_");
    }
    if (sub_B7C3F0(uFlag, 0x16)) {
        mplew.writeInt("MobStat1->tDazzle_");
        mplew.writeInt("MobStat1->nRiseByToss_");
        mplew.writeShort("MobStat1->rRiseByToss_");
    }
    if (sub_B7C3F0(uFlag, 0x17)) {
        mplew.writeInt("MobStat1->tRiseByToss_");
        mplew.writeInt("MobStat1->nPCounter_");
        mplew.writeShort("MobStat1->rPCounter_");
    }
    if (sub_B7C3F0(uFlag, 0x18)) {
        mplew.writeInt("MobStat1->tPCounter_");
        mplew.writeInt("MobStat1->wPCounter_");
        mplew.writeShort("MobStat1->nMCounter_");
    }
    if (sub_B7C3F0(uFlag, 0x19)) {
        mplew.writeInt("MobStat1->nCounterProb_");
        mplew.writeInt("MobStat1->tCounterDelay_");
        mplew.writeShort("*&MobStat1->bCounterDelay_");
    }
    if (sub_B7C3F0(uFlag, 0x1A)) {
        mplew.writeInt("MobStat1->nBodyPressure_");
        mplew.writeInt("MobStat1->rBodyPressure_");
        mplew.writeShort("MobStat1->tBodyPressure_");
    }
    if (sub_B7C3F0(uFlag, 0x1B)) {
        mplew.writeInt("MobStat1->rMCounter_");
        mplew.writeInt("MobStat1->tMCounter_");
        mplew.writeShort("MobStat1->wMCounter_");
    }
    if (sub_B7C3F0(uFlag, 0x1C)) {
        mplew.writeInt("MobStat1->tTimeBomb_");
        mplew.writeInt("MobStat1->wTimeBomb_");
        mplew.writeShort("MobStat1->nMagicCrash_");
    }
    if (sub_B7C3F0(uFlag, 0x1D)) {
        mplew.writeInt("MobStat1->rMagicCrash_");
        mplew.writeInt("MobStat1->tMagicCrash_");
        mplew.writeShort("MobStat1->nDamagedElemAttr_");
    }
    if (sub_B7C3F0(uFlag, 0x1E)) {
        mplew.writeInt("MobStat1->tAmbush_");
        mplew.writeInt("MobStat1->wAmbush_");
        mplew.writeShort("MobStat1->nVenom_");
    }
    if (sub_B7C3F0(uFlag, 0x1F)) {
        mplew.writeInt("HIDWORD(MobStat1->nFs)");
        mplew.writeInt("MobStat1->nInvincible_");
        mplew.writeShort("MobStat1->rInvincible_");
    }
    if (sub_B7C3F0(uFlag, 0x20)) {
        mplew.writeInt("MobStat1->tInvincible_");
        mplew.writeInt("MobStat1->nTreasure_");
        mplew.writeShort("MobStat1->rTreasure_");
    }
    if (sub_B7C3F0(uFlag, 0x21)) {
        mplew.writeInt("MobStat1->tAddDamParty_");
        mplew.writeInt("MobStat1->pAddDamParty_");
        mplew.writeShort("MobStat1->cAddDamParty_");
    }
    if (sub_B7C3F0(uFlag, 0x22)) {
        mplew.writeInt("MobStat1->wAddDamParty_");
        mplew.writeInt("MobStat1->nHitCriDamR_");
        mplew.writeShort("MobStat1->rHitCriDamR_");
    }
    if (sub_B7C3F0(uFlag, 0x23)) {
        mplew.writeInt("MobStat1->tHitCriDamR_");
        mplew.writeInt("MobStat1->nAddEffect_");
        mplew.writeShort("MobStat1->rAddEffect_");
    }
    if (sub_B7C3F0(uFlag, 0x24)) {
        mplew.writeInt("MobStat1->tFatality_");
        mplew.writeInt("MobStat1->uFatality_");
        mplew.writeShort("MobStat1->yFatality_");
    }
    if (sub_B7C3F0(uFlag, 0x25)) {
        mplew.writeInt("MobStat1->nExplosion_");
        mplew.writeInt("MobStat1->rExplosion_");
        mplew.writeShort("MobStat1->tExplosion_");
    }
    if (sub_B7C3F0(uFlag, 0x26)) {
        mplew.writeInt("MobStat1->wDeadlyCharge_");
        mplew.writeInt("MobStat1->nSmite_");
        mplew.writeShort("MobStat1->rSmite_");
    }
    if (sub_B7C3F0(uFlag, 0x27)) {
        mplew.writeInt("MobStat1->sLinkTeam._m_pStr");
        mplew.writeInt("MobStat1->nAddDamSkill_");
        mplew.writeShort("MobStat1->rAddDamSkill_");
    }
    if (sub_B7C3F0(uFlag, 0x28)) {
        mplew.writeInt("MobStat1->rMultiDamSkill_");
        mplew.writeInt("MobStat1->tMultiDamSkill_");
        mplew.writeShort("MobStat1->cMultiDamSkill_");
    }
    if (sub_B7C3F0(uFlag, 0x29)) {
        mplew.writeInt("MobStat1->rTrueSight_");
        mplew.writeInt("MobStat1->tTrueSight_");
        mplew.writeShort("MobStat1->cTrueSight_");
    }
    if (sub_B7C3F0(uFlag, 0x2A)) {
        mplew.writeInt("MobStat1->tDodgeBodyAttack_");
        mplew.writeInt("MobStat1->nDebuffHealing_");
        mplew.writeShort("MobStat1->rDebuffHealing_");
    }
    if (sub_B7C3F0(uFlag, 0x2B)) {
        mplew.writeInt("MobStat1->tAddDamSkill2_");
        mplew.writeInt("MobStat1->nBodyAttack_");
        mplew.writeShort("MobStat1->rBodyAttack_");
    }
    if (sub_B7C3F0(uFlag, 0x2C)) {
        mplew.writeInt("MobStat1->tBodyAttack_");
        mplew.writeInt("MobStat1->nTempMoveAbility_");
        mplew.writeShort("MobStat1->rTempMoveAbility_");
    }
    if (sub_B7C3F0(uFlag, 0x2D)) {
        mplew.writeInt("MobStat1->tTempMoveAbility_");
        mplew.writeInt("MobStat1->nSeperateSoulP_");
        mplew.writeShort("MobStat1->rSeperateSoulP_");
    }
    if (sub_B7C3F0(uFlag, 0x2E)) {
        mplew.writeInt("MobStat1->tSeperateSoulP_");
        mplew.writeInt("MobStat1->wSeperateSoulP_");
        mplew.writeShort("MobStat1->uSeperateSoulP_");
    }
    if (sub_B7C3F0(uFlag, 0x2F)) {
        mplew.writeInt("MobStat1->nSeperateSoulC_");
        mplew.writeInt("MobStat1->rSeperateSoulC_");
        mplew.writeShort("MobStat1->tSeperateSoulC_");
    }
    if (sub_B7C3F0(uFlag, 0x30)) {
        mplew.writeInt("MobStat1->tEmber_");
        mplew.writeInt("MobStat1->wEmber_");
        mplew.writeShort("MobStat1->uEmber_");
    }
    if (sub_B7C3F0(uFlag, 0x31)) {
        mplew.writeInt("MobStat1->nElementResetBySummon_");
        mplew.writeInt("MobStat1->rElementResetBySummon_");
        mplew.writeShort("MobStat1->tElementResetBySummon_");
    }
    if (sub_B7C3F0(uFlag, 0x32)) {
        mplew.writeInt("MobStat1->nJaguarProvoke_");
        mplew.writeInt("MobStat1->rJaguarProvoke_");
        mplew.writeShort("MobStat1->tJaguarProvoke_");
    }
    if (sub_B7C3F0(uFlag, 0x33)) {
        mplew.writeInt("MobStat1->nPinkbeanFlowerPot_");
        mplew.writeInt("MobStat1->rPinkbeanFlowerPot_");
        mplew.writeShort("MobStat1->tPinkbeanFlowerPot_");
    }
    if (sub_B7C3F0(uFlag, 0x34)) {
        mplew.writeInt("MobStat1->tBMageDebuff_");
        mplew.writeInt("MobStat1->cBMageDebuff_");
        mplew.writeShort("MobStat1->nDarkLightning_");
    }
    if (sub_B7C3F0(uFlag, 0x35)) {
        mplew.writeInt("MobStat1->rDarkLightning_");
        mplew.writeInt("MobStat1->tDarkLightning_");
        mplew.writeShort("MobStat1->cDarkLightning_");
    }
    if (sub_B7C3F0(uFlag, 0x36)) {
        mplew.writeInt("MobStat1->rBattlePvP_Helena_Mark_");
        mplew.writeInt("MobStat1->tBattlePvP_Helena_Mark_");
        mplew.writeShort("MobStat1->cBattlePvP_Helena_Mark_");
    }
    if (sub_B7C3F0(uFlag, 0x37)) {
        mplew.writeInt("MobStat1->rPsychicLock_");
        mplew.writeInt("MobStat1->tPsychicLock_");
        mplew.writeShort("MobStat1->nPsychicLockCoolTime_");
    }
    if (sub_B7C3F0(uFlag, 0x38)) {
        mplew.writeInt("MobStat1->rPsychicLockCoolTime_");
        mplew.writeInt("MobStat1->tPsychicLockCoolTime_");
        mplew.writeShort("MobStat1->nPsychicGroundMark_");
    }
    if (sub_B7C3F0(uFlag, 0x39)) {
        mplew.writeInt("MobStat1->tPsychicGroundMark_");
        mplew.writeInt("MobStat1->nPsychicForce_");
        mplew.writeShort("MobStat1->rPsychicForce_");
    }
    if (sub_B7C3F0(uFlag, 0x3A)) {
        mplew.writeInt("MobStat1->tPsychicForce_");
        mplew.writeInt("MobStat1->nBossPropPlus_");
        mplew.writeShort("MobStat1->rBossPropPlus_");
    }
    if (sub_B7C3F0(uFlag, 0x3B)) {
        mplew.writeInt("MobStat1->tBossPropPlus_");
        mplew.writeInt("MobStat1->nMultiPMDR_");
        mplew.writeShort("MobStat1->rMultiPMDR_");
    }
    if (sub_B7C3F0(uFlag, 0x3C)) {
        mplew.writeInt("MobStat1->tHardSkin_");
        mplew.writeInt("MobStat1->nAmbush_");
        mplew.writeShort("MobStat1->rAmbush_");
    }
    if (sub_B7C3F0(uFlag, 0x3D)) {
        mplew.writeInt("MobStat1->tMultiPMDR_");
        mplew.writeInt("MobStat1->cMultiPMDR_");
        mplew.writeShort("MobStat1->nBahamutLightElemAddDam_");
    }
    if (sub_B7C3F0(uFlag, 0x3E)) {
        mplew.writeInt("MobStat1->cBahamutLightElemAddDam_");
        mplew.writeInt("MobStat1->nHangOver_");
        mplew.writeShort("MobStat1->rHangOver_");
    }
    if (sub_B7C3F0(uFlag, 0x3F)) {
        mplew.writeInt("MobStat1->rAreaInstallByHit_");
        mplew.writeInt("MobStat1->tAreaInstallByHit_");
        mplew.writeShort("MobStat1->nLaser_");
    }
    if (sub_B7C3F0(uFlag, 0x40)) {
        mplew.writeInt("MobStat1->nRWLiftPress_");
        mplew.writeInt("MobStat1->rRWLiftPress_");
        mplew.writeShort("MobStat1->tRWLiftPress_");
    }
    if (sub_B7C3F0(uFlag, 0x41)) {
        mplew.writeInt("MobStat1->rBahamutLightElemAddDam_");
        mplew.writeInt("MobStat1->tBahamutLightElemAddDam_");
        mplew.writeShort("MobStat1->pBahamutLightElemAddDam_");
    }
    if (sub_B7C3F0(uFlag, 0x42)) {
        mplew.writeInt("MobStat1->pTrueSight_");
        mplew.writeInt("MobStat1->uTrueSight_");
        mplew.writeShort("MobStat1->wTrueSight_");
    }
    if (sub_B7C3F0(uFlag, 0x43)) {
        mplew.writeInt("MobStat1->m_tLastUpdateResetTemporary");
        mplew.writeInt("*(&MobStat1->m_tLastUpdateResetTemporary + 1)");
        mplew.writeShort("MobStat1[1].nLevel");
    }
    if (sub_B7C3F0(uFlag, 0x44)) {
        mplew.writeInt("MobStat1[1].aDamagedElemAttr");
        mplew.writeInt("MobStat1[1].nPAD");
        mplew.writeShort("MobStat1[1].nPAD_");
    }
    if (sub_B7C3F0(uFlag, 0x45)) {
        mplew.writeInt("MobStat1->rDamagedElemAttr_");
        mplew.writeInt("MobStat1->tDamagedElemAttr_");
        mplew.writeShort("*(&MobStat1->tDamagedElemAttr_ + 1)");
    }
    if (sub_B7C3F0(uFlag, 0x46)) {
        mplew.writeInt("MobStat1->tMystery_");
        mplew.writeInt("MobStat1->nAddDamParty_");
        mplew.writeShort("MobStat1->rAddDamParty_");
    }
    if (sub_B7C3F0(uFlag, 0x47)) {
        mplew.writeInt("MobStat1->pFatality_");
        mplew.writeInt("MobStat1->mFatality_");
        mplew.writeShort("MobStat1->wFatality_");
    }
    if (sub_B7C3F0(uFlag, 0x48)) {
        mplew.writeInt("MobStat1->tDark_");
        mplew.writeInt("MobStat1->nMystery_");
        mplew.writeShort("MobStat1->rMystery_");
    }
    if (sub_B7C3F0(uFlag, 0x49)) {
        mplew.writeInt("MobStat1->nLifting_");
        mplew.writeInt("MobStat1->rLifting_");
        mplew.writeShort("MobStat1->tLifting_");
    }
    if (sub_B7C3F0(uFlag, 0x4A)) {
        mplew.writeInt("MobStat1->tRWChoppingHammer_");
        mplew.writeInt("LODWORD(MobStat1->dEquipDropRate)");
        mplew.writeShort("HIDWORD(MobStat1->dEquipDropRate)");
    }
    if (sub_B7C3F0(uFlag, 1))
        mplew.writeInt("MobStat1->rMDR_");
    if (sub_B7C3F0(uFlag, 3))
        mplew.writeInt("MobStat1->rEVA_");
    if (sub_B7C3F0(uFlag, 0x19))
        mplew.writeInt("MobStat1->nAggroRank_");
    if (sub_B7C3F0(uFlag, 0x1A))
        mplew.writeInt("MobStat1->nWeakness_");
    if (sub_B7C3F0(uFlag, 0x19) || sub_B7C3F0(uFlag, 0x1A)) {
        mplew.writeInt("MobStat1->rWeakness_");
        mplew.write("LOBYTE(MobStat1->nTimeBomb_)") != 0;
        mplew.writeInt("MobStat1->rTimeBomb_");
    }
    if (sub_B7C3F0(uFlag, 0x25)) {
        mplew.writeInt("MobStat1->bPImmune");
        mplew.writeInt("MobStat1->wExplosion_");
        mplew.writeInt("MobStat1->bExchangeAttack");
        mplew.writeInt("MobStat1->bBalogDisable");
        mplew.writeInt("MobStat1->nTotalDotCount");
    }
    if (sub_B7C3F0(uFlag, 0x49))
        mplew.writeInt("*&MobStat1->bReBounding_");
    if (sub_B7C3F0(uFlag, 0x4E) && mplew.write("")) {
        mplew.writeInt("MobStat1[1].nPDR");
        mplew.writeInt("MobStat1[1].nPDR_");
        mplew.writeInt("MobStat1[1].rPDR_");
        mplew.writeInt("MobStat1[1].tPDR_");
    }
    if (sub_B7C3F0(uFlag, 0x27)) {
        mplew.writeInt("MobStat1->tAddDamSkill_");
        mplew.writeInt("MobStat1->nMultiDamSkill_");
    }
    if (sub_B7C3F0(uFlag, 0x2A)) {
        mplew.writeInt("MobStat1->rAddDamSkill2_");
        mplew.writeInt("MobStat1->tDebuffHealing_");
        mplew.writeInt("MobStat1->nAddDamSkill2_");
    }
    if (sub_B7C3F0(uFlag, 6))
        mplew.write("MobStat1->nPoison_");
    if (sub_B7C3F0(uFlag, 0x33))
        mplew.writeInt("MobStat1->nBattlePvP_Helena_Mark_");
    if (sub_B7C3F0(uFlag, 0x36))
        mplew.writeInt("MobStat1->nPsychicLock_");
    if (sub_B7C3F0(uFlag, 0x38))
        mplew.writeInt("MobStat1->rPsychicGroundMark_");
    if (sub_B7C3F0(uFlag, 0x3E))
        mplew.writeInt("MobStat1->tHangOver_");
    if (sub_B7C3F0(uFlag, 8))
        mplew.writeInt("MobStat1->tSeal_");
    if (sub_B7C3F0(uFlag, 0x4B)) {
        var size = mplew.write("MobStat1->tDeadlyCharge_");
        for (var _t = 0; _t < size; _t++) {
            mplew.writeInt("chrId");
            mplew.writeInt("技能ID");
            mplew.writeInt("mse.getX()");// 伤害数值
            mplew.writeInt(1000); // 延遲毫秒 : dotInterval * 1000
            mplew.writeInt(0);// 结束时间
            // if (mse.getSkill() > 0) {
            //     mplew.writeInt(eff.getDOTTime() * 1000);// DotAnimation
            //     mplew.writeInt(eff.getDOTTime());// DotCount
            // } else {
            mplew.writeInt(0);
            mplew.writeInt(0);
            // }
            mplew.writeInt(0);//SuperPos
            mplew.writeInt(0);//AttackDelay
            mplew.writeInt(0);//DotTickIdx
            mplew.writeInt(50);//DotTickDamR
            mplew.writeInt("mons.getController() != null ? mons.getController().getSkillLevel(mse.getSkill()) : 999999");//经常为空
            mplew.writeInt(0);//未知
            mplew.writeInt("mse.getX()");
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
    if (sub_B7C3F0(uFlag, 0x4C)) {
        mplew.write("MobStat1->tDark_");
        mplew.write("MobStat1->nDeadlyCharge_");
    }
    if (sub_B7C3F0(uFlag, 0x4D))
        mplew.write("MobStat1->rDeadlyCharge_");
    if (sub_B7C3F0(uFlag, 0x23)) {
        mplew.writeInt("MobStat1->rFatality_");
        mplew.writeInt("MobStat1->tAddEffect_");
        mplew.writeInt("MobStat1->nFatality_");
    }
    if (sub_B7C3F0(uFlag, 0x4F)) {
        // v12 = sub_4EE040(tCur);
        // v29 = 0;
        // sub_47E230(v12);
        // v29 = -1;
        // if (tCur)
        //     sub_47DB30((tCur - 12));
    }
    if (sub_B7C3F0(uFlag, 0x50)) {
        mplew.writeInt("MobStat1->wIncizing_");
        mplew.writeInt("MobStat1->nDodgeBodyAttack_");
        mplew.writeInt("MobStat1->rDodgeBodyAttack_");
    }
    if (sub_B7C3F0(uFlag, 0x51)) {
        mplew.writeInt("MobStat1->wSeperateSoulC_");
        mplew.writeInt("MobStat1->nFixDamRBuff_");
        mplew.writeShort("MobStat1->rFixDamRBuff_");
        mplew.writeInt("MobStat1->tFixDamRBuff_");
        mplew.writeInt("MobStat1->nElementDarkness_");
    }
    if (sub_B7C3F0(uFlag, 0x52)) {
        mplew.writeInt("MobStat1->rElementDarkness_");
        mplew.writeInt("MobStat1->tElementDarkness_");
        mplew.writeShort("MobStat1->nEmber_");
        mplew.writeInt("MobStat1->rEmber_");
    }
    if (sub_B7C3F0(uFlag, 0x53)) {
        mplew.writeInt("MobStat1->cElementResetBySummon_");
        mplew.writeInt("MobStat1->pElementResetBySummon_");
        mplew.writeInt("MobStat1->wElementResetBySummon_");
        mplew.writeInt("MobStat1->uElementResetBySummon_");
        mplew.writeInt("MobStat1->nAreaInstallByHit_");
    }
    if (sub_B7C3F0(uFlag, 0x54)) {
        mplew.writeInt("MobStat1->rSoulExplosion_");
        mplew.writeInt("MobStat1->wSoulExplosion_");
        mplew.writeInt("MobStat1->nIncizing_");
        mplew.writeInt("MobStat1->rIncizing_");
        mplew.writeInt("MobStat1->tIncizing_");
        mplew.writeInt("MobStat1->uIncizing_");
        mplew.writeInt("MobStat1->pIncizing_");
    }
    if (sub_B7C3F0(uFlag, 0x42))
    { mplew.writeInt("MobStat1->nSoulExplosion_"); }
    if (sub_B7C3F0(uFlag, 0x55)) {
        mplew.writeInt("MobStat1->nJaguarBleeding_");
        mplew.writeInt("MobStat1->rJaguarBleeding_");
        mplew.writeInt("MobStat1->tJaguarBleeding_");
        mplew.writeInt("MobStat1->nBMageDebuff_");
        mplew.writeInt("MobStat1->rBMageDebuff_");
    }
    if (sub_B7C3F0(uFlag, 0x3F)) {
        mplew.writeInt("MobStat1->rLaser_");
        mplew.writeInt("MobStat1->tLaser_");
        mplew.writeInt("MobStat1->uLaser_");
        mplew.writeInt("MobStat1->wLaser_");
    }
    result = sub_B7C3F0(uFlag, 0x40);
    if (result) {
        mplew.writeInt("MobStat1->nRWChoppingHammer_");
        mplew.writeInt("result");
        // MobStat1 ->rRWChoppingHammer_ = result;
    }
    return result;
}