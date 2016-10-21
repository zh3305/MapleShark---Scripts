
  v5 = mplew.writeInt("dwCharacterID");
  SPAWN_SUMMON();
  m_nSkillID;
  function SPAWN_SUMMON()
{
  v5 = mplew.writeInt("dwSummonedID");
  m_nSkillID = mplew.writeInt("nSkillID");
   v22  = mplew.write("nCharLevel");
  v21 = mplew.write("nSLV");
 CSummoned_Init() 
}

  function CSummoned_Init()
{
  v3 = 0;
  if (true )           // /this.m_nSkillID sub_E26430 (/* 0, m_nSkillID */)
  {
    v37 = mplew.writeShort("nX");
    v35 = mplew.writeShort("nY");
    v33 = mplew.write("nMoveAction",5,4);
    v5 = mplew.writeShort("nCurFoothold");
    v29 = mplew.write("nMoveAbility");
    v27 = mplew.write("nAssistType");
    v34 = mplew.write("nEnterType");
    v26 = mplew.writeInt("dwMobID");
    v32 = mplew.write("bFlyMob");
    v28 = mplew.write("bBeforeFirstAttack");
    v38 = mplew.writeInt("nLookID");
    v30 = mplew.writeInt("nBulletID");
    v6 = mplew.write("AvatarLook");
    if ( v6 )
   { 
       mplew.StartNode("AvatarLook::Decode");
    addCharLook();
    mplew.EndNode(false);
}
    v7 =m_nSkillID;
    if ( v7 == 0x217C05A )
    {
      v8 = mplew.write("m_nTeslaCoilState");
      if ( v8 == 1 )
      {
        do
        {
          v9 = mplew.writeShort("pTriangle.x");
          v10 = mplew.writeShort("pTriangle.y");
          v3++;
        }
        while ( v3 < 3 );
      }
    }
    else if ( v7 == 0x282901B )
    {
      mplew.writeShort("unk");
      mplew.writeShort("unk");
      mplew.writeShort("unk");
      mplew.writeShort("unk");
    }
     mplew.write("m_bJaguarActive");
     mplew.writeInt("m_tSummonTerm");
   mplew.write("m_bAttackActive");
  }
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