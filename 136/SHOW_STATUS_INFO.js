
if (typeof SHOW_STATUS_INFO_Message == "undefined") {
    var SHOW_STATUS_INFO_Message = {
        DropPickUpMessage: 0,
        QuestRecordMessage: 1,
        QuestRecordMessageAddValidCheck: 2,
        QuestRecordExMessage: 0xD,
        WorldShareRecordMessage: 0xE,
        CashItemExpireMessage: 3,
        IncEXPMessage: 4,
        IncNonCombatStatEXPMessage: 0x13,
        LimitNonCombatStatEXPMessage: 0x14,
        IncSPMessage: 5,
        IncPOPMessage: 6,
        IncMoneyMessage: 7,
        IncPvPPointMessage: 0x18,
        PvPItemUseMessage: 0x19,
        UnMessage3: 0x2B,
        IncGPMessage: 8,
        IncCommitmentMessage: 9,
        GiveBuffMessage: 0xA,
        GeneralItemExpireMessage: 0xB,
        SystemMessage: 0xC,
        ItemProtectExpireMessage: 0xF,
        ItemExpireReplaceMessage: 0x10,
        ItemAbilityTimeLimitedExpireMessage: 0x11,
        SkillExpireMessage: 0x12,
        AndroidMachineHeartAlsetMessage: 0x16,
        IncFatigueByRestMessage: 0x17,
        WeddingPortalError: 0x1A,
        IncHardCoreExpMessage: 0x1B,
        NoticeAutoLineChanged: 0x1C,
        EntryRecordMessage: 0x1D,
        EvolvingSystemMessage: 0x1E,
        EvolvingSystemMessageWithName: 0x1F,
        CoreInvenOperationMessage: 0x20,
        NxRecordMessage: 0x21,
        BlockedBehaviorMessage: 0x22,
        IncWPMessage: 0x23,
        MaxWPMessage: 0x24,
        StylishKillMessage: 0x25,
        BarrierEffectIgnoreMessage: 0x26,
        ExpiredCashItemResultMessage: 0x27,
        CollectionRecordMessage: 0x28,
        RandomChanceMessage: 0x29,
        UnMessage1: 0x2A,
        UnMessage2: 0x2C
    }
}
// test.getKeyByValue( 42 );  // returns 'key1'

function SHOW_STATUS_INFO()//var  this,var lpMultiByteStr
{
    //   var  v2; // esi@1
  
    var result; // eax@1
    //   v2 = this;
    result = mplew.write(SHOW_STATUS_INFO_Message.getKeyByValue( mplew.DAddByte()) );
    switch (result) {
        case 0:
            DropPickUpMessage();
            break;
        case 1:
            QuestRecordMessage();
            break;
        case 2:
            QuestRecordMessageAddValidCheck();
            break;
        case 0xD:
            QuestRecordExMessage();
            break;
        case 0xE:
            WorldShareRecordMessage();
            break;
        case 3:
            CashItemExpireMessage();
            break;
        case 4:
            IncEXPMessage();
            break;
        case 0x13:
            IncNonCombatStatEXPMessage();
            break;
        case 0x14:
            LimitNonCombatStatEXPMessage();
            break;
        case 5:
            IncSPMessage();
            break;
        case 6:
            IncPOPMessage();
            break;
        case 7:
            IncMoneyMessage();
            break;
        case 0x18:
            IncPvPPointMessage();
            break;
        case 0x19:
            PvPItemUseMessage();
            break;
        case 0x2B:
            sub_19A4B90();
            break;
        case 8:
            IncGPMessage();
            break;
        case 9:
            IncCommitmentMessage();
            break;
        case 0xA:
            GiveBuffMessage();
            break;
        case 0xB://No
            GeneralItemExpireMessage();
            break;
        case 0xC://No
            SystemMessage();
            break;
        case 0xF:
            ItemProtectExpireMessage();
            break;
        case 0x10:
            ItemExpireReplaceMessage();
            break;
        case 0x11:
            ItemAbilityTimeLimitedExpireMessage();
            break;
        case 0x12:
            SkillExpireMessage();
            break;
        case 0x16:
            AndroidMachineHeartAlsetMessage();
            break;
        case 0x17:
            IncFatigueByRestMessage();
            break;
        case 0x1A:
            WeddingPortalError();
            break;
        case 0x1B:
            IncHardCoreExpMessage();
            break;
        case 0x1C:
            NoticeAutoLineChanged();
            break;
        case 0x1D:
            EntryRecordMessage();
            break;
        case 0x1E://no
            EvolvingSystemMessage();
            break;
        case 0x1F://no
            EvolvingSystemMessageWithName();
            break;
        case 0x20:
            CoreInvenOperationMessage();
            break;
        case 0x22:
            BlockedBehaviorMessage();
            break;
        case 0x23:
            IncWPMessage();
            break;
        case 0x24:
            MaxWPMessage();
            break;
        case 0x25:
            StylishKillMessage();
            break;
        case 0x26:
            BarrierEffectIgnoreMessage();
            break;
        case 0x27:
            ExpiredCashItemResultMessage();
            break;
        case 0x28:
            CollectionRecordMessage();
            break;
        case 0x29:
            RandomChanceMessage();
            break;
        case 0x2A:
            sub_19A4B00();
            break;
        case 0x2C:
            sub_1990450();
            break;
        default:
            return result;
    }
    return result;
}
function DropPickUpMessage()//int *this,var iPacketa
{
    v38 = this;
    lpMultiByteStr = 0;
    // iPacketa2 = iPacketa;
    v41 = 0;
    mode = mplew.write("mode");
    if (mode != 4) {
        if (mode == 1) {
            v4 = mplew.write("v4");
            v5 = mplew.writeInt("v5");
            v6 = mplew.writeShort("iPacketa2");
            v7 = mplew.writeShort("iPacketa2");
            //   sub_EA0560();
            //   v8 = *sub_4BFF90(&iPacketa, 348);
            //   LOBYTE(v41) = 1;
            //   sub_499AB0(&lpMultiByteStr, v8, v5);
            //   LOBYTE(v41) = 0;
            //   if ( iPacketa )
            //     sub_47DB30((iPacketa - 12));
            //   if ( v4 )
            //   {
            //     sub_EA0560();
            //     v9 = sub_4BFF90(&iPacketa, 299);
            //     LOBYTE(v41) = 2;
            //     sub_4C4B10(v9, 7, -1, -1, 0);
            //     LOBYTE(v41) = 0;
            //     if ( iPacketa )
            //       sub_47DB30((iPacketa - 12));
            //   }
            //   if ( v6 > 0 )
            //   {
            //     sub_EA0560();
            //     v10 = *sub_4BFF90(&iPacketa, 350);
            //     LOBYTE(v41) = 3;
            //     sub_499AB0(&lpMultiByteStr, v10, v6);
            //     LOBYTE(v41) = 0;
            //     if ( iPacketa )
            //       sub_47DB30((iPacketa - 12));
            //   }
            //   if ( v7 > 0 )
            //   {
            //     sub_EA0560();
            //     v11 = *sub_4BFF90(&iPacketa, 351);
            //     LOBYTE(v41) = 4;
            //     sub_499AB0(&lpMultiByteStr, v11, v7);
            //     LOBYTE(v41) = 0;
            //     if ( iPacketa )
            //       sub_47DB30((iPacketa - 12));
            //   }
            //   if ( v5 > 0 )
            //     sub_198A740(v5);
            //   continue LABEL_76;
            return;
        }
        if (mode == 8) {
            v12 = mplew.writeInt("v12");
            v13 = mplew.writeShort("iPacketa2");
            //   sub_EA0560();
            //   v14 = *sub_4BFF90(&iPacketa, 352);
            //   LOBYTE(v41) = 5;
            //   sub_499AB0(&lpMultiByteStr, v14, v12);
            //   LOBYTE(v41) = 0;
            //   if ( iPacketa )
            //     sub_47DB30((iPacketa - 12));
            //   if ( v13 > 0 )
            //   {
            //     sub_EA0560();
            //     v15 = *sub_4BFF90(&iPacketa, 350);
            //     LOBYTE(v41) = 6;
            //     sub_499AB0(&lpMultiByteStr, v15, v13);
            //     LOBYTE(v41) = 0;
            //     if ( iPacketa )
            //       sub_47DB30((iPacketa - 12));
            //   }
            //   continue LABEL_76;
            return;
        }
        if (!mode) {
            v16 = mplew.writeInt("v16");
            v17 = mplew.writeInt("v17");
            //   sub_A11A20(&iPacketa, v16);
            //   LOBYTE(v41) = 7;
            //   if ( parseInt(v16 / 10000) == 360 )
            //   {
            // if ( !sub_47C9B0(&iPacketa) )
            // {
            //   v35 = (v17 <= 1 ? 120 : 96);
            //   v34 = (v17 <= 1 ? 120 : 96);
            //   v39 = &v34;
            //   sub_181C210(&v34, 0);
            //   sub_182ED30(&iPacketa, v34, v35);
            //   if ( v17 <= 1 )
            //   {
            //     v35 = 9102;
            //     v34 = &v38;
            //     sub_EA0560();
            //     v19 = *sub_4BFF90(v34, v35);
            //     v35 = iPacketa;
            //     LOBYTE(v41) = 9;
            //     sub_499AB0(&lpMultiByteStr, v19, iPacketa);
            //   }
            //   else
            //   {
            //     v35 = 9104;
            //     v34 = &v38;
            //     sub_EA0560();
            //     v18 = *sub_4BFF90(v34, v35);
            //     v35 = v17;
            //     v34 = iPacketa;
            //     LOBYTE(v41) = 8;
            //     sub_499AB0(&lpMultiByteStr, v18, iPacketa, v17);
            //   }
            //   LOBYTE(v41) = 7;
            //   if ( v38 )
            //     sub_47DB30(v38 - 3);
            //   if ( sub_4C1860() && (*(sub_4C1860() + 1136) == 86 || *(sub_4C1860() + 1136) == 104) )
            //     sub_4C4B10(&lpMultiByteStr, 6, -1, -1, 0);
            // }
            //   }
            //   else
            //   {
            //     sub_9D6E30(&v37, v16);
            //     LOBYTE(v41) = 10;
            //     if ( !sub_47C9B0(&iPacketa) )
            //     {
            //       v35 = (v17 <= 1 ? 120 : 96);
            //       v34 = v20;
            //       v39 = &v34;
            //       sub_181C210(&v34, 0);
            //       sub_182ED30(&iPacketa, v34, v35);
            //       if ( v17 <= 1 )
            //       {
            //         v35 = 356;
            //         v34 = &v38;
            //         sub_EA0560();
            //         v22 = *sub_4BFF90(v34, v35);
            //         v35 = iPacketa;
            //         v34 = v37;
            //         LOBYTE(v41) = 12;
            //         sub_499AB0(&lpMultiByteStr, v22, v37, iPacketa);
            //       }
            //       else
            //       {
            //         v35 = 354;
            //         v34 = &v38;
            //         sub_EA0560();
            //         v21 = *sub_4BFF90(v34, v35);
            //         v35 = v17;
            //         v34 = iPacketa;
            //         LOBYTE(v41) = 11;
            //         sub_499AB0(&lpMultiByteStr, v21, v37, iPacketa, v17);
            //       }
            //       LOBYTE(v41) = 10;
            //       if ( v38 )
            //         sub_47DB30(v38 - 3);
            //       if ( sub_4C1860() && (*(sub_4C1860() + 1136) == 86 || *(sub_4C1860() + 1136) == 104) )
            //         sub_4C4B10(&lpMultiByteStr, 6, -1, -1, 0);
            //     }
            //     LOBYTE(v41) = 7;
            //     if ( v37 )
            //       sub_47DB30(v37 - 3);
            //   }
            //   continue LABEL_74;
        }
        if (mode == 2) {
            v23 = mplew.writeInt("v23");
            //   sub_A11A20(&iPacketa, v23);
            //   LOBYTE(v41) = 13;
            //   sub_9D6E30(&v38, v23);
            //   LOBYTE(v41) = 14;
            //   if ( sub_1182180(v23) && (v24 = sub_A35890(v23)) != 0 && *(v24 + 360) )
            //   {
            //     v35 = 120;
            //     v34 = v25;
            //     v39 = &v34;
            //     sub_181C210(&v34, 0);
            //     sub_182ED30(&iPacketa, v34, v35);
            //     v39 = &v35;
            //     sub_47E140(MultiByteStr, -1);
            //     v34 = v26;
            //     v40 = &v34;
            //     LOBYTE(v41) = 15;
            //     sub_47E8E0(&iPacketa);
            //     LOBYTE(v41) = 14;
            //     sub_EA9DE0(&v37, v34, v35);
            //     v35 = 13674;
            //     v34 = &v39;
            //     LOBYTE(v41) = 16;
            //     sub_EA0560();
            //     v27 = *sub_4BFF90(v34, v35);
            //     v35 = MultiByteStr;
            //     v34 = v37;
            //     LOBYTE(v41) = 17;
            //     sub_499AB0(&lpMultiByteStr, v27, v37, MultiByteStr);
            //     LOBYTE(v41) = 16;
            //     if ( v39 )
            //       sub_47DB30(v39 - 3);
            //     LOBYTE(v41) = 14;
            //     if ( v37 )
            //       sub_47DB30(v37 - 3);
        }
        //   else if ( !sub_47C9B0(&iPacketa) && !sub_196DF50(v23) && !sub_196DFC0(v23) )
        //   {
        //     v35 = 120;
        //     v34 = v28;
        //     v40 = &v34;
        //     sub_181C210(&v34, 0);
        //     sub_182ED30(&iPacketa, v34, v35);
        //     v35 = 356;
        //     v34 = &v39;
        //     sub_EA0560();
        //     v29 = *sub_4BFF90(v34, v35);
        //     v35 = iPacketa;
        //     v34 = v38;
        //     LOBYTE(v41) = 18;
        //     sub_499AB0(&lpMultiByteStr, v29, v38, iPacketa);
        //     LOBYTE(v41) = 14;
        //     if ( v39 )
        //       sub_47DB30(v39 - 3);
        //   }
        //   LOBYTE(v41) = 13;
        //   if ( v38 )
        //     sub_47DB30(v38 - 3);
        //   continue LABEL_74;
    }
    if (mode != -2) {
        if (mode == -3) {
            //         sub_EA0560();
            //         v30 = sub_4BFF90(&iPacketa, 362);
            //         LOBYTE(v41) = 21;
            //         sub_4C4B10(v30, 11, -1, -1, 0);
            // LABEL_74:
            //         LOBYTE(v41) = 0;
            //         if ( iPacketa )
            //           sub_47DB30((iPacketa - 12));
            // continue LABEL_76;
            return;
        }
        if (mode != -4 && mode != -5 && mode == -10) {
            v31 = mplew.writeInt("v31");
            // sub_A11A20(&iPacketa, v31);
            // LOBYTE(v41) = 25;
            // if ( sub_47C9B0(&iPacketa) )
            // {
            //   result = iPacketa;
            //   LOBYTE(v41) = 0;
            //   v32 = iPacketa == 0;
            //   continue LABEL_77;
            // }
            // sub_EA0560();
            // v33 = *sub_4BFF90(&v39, 9166);
            // LOBYTE(v41) = 26;
            // sub_499AB0(&lpMultiByteStr, v33, iPacketa);
            // LOBYTE(v41) = 25;
            // if ( v39 )
            //   sub_47DB30(v39 - 3);
            // continue LABEL_74;
        }
    }
    // LABEL_76:
    return;
    //     result = lpMultiByteStr;
    //     v41 = -1;
    //     v32 = lpMultiByteStr == 0;
    // LABEL_77:
    //     if ( !v32 )
    //       result = sub_47DB30(result - 3);
    //   }
    //   return result;
}
function QuestRecordMessage()//var this,var a2
{
    var v2; // esi@1
    var result; // eax@1
    var v4; // edi@2
    var v5; // edi@3
    var v6; // ebp@3
    var char_v7; // [sp+4h] [bp-8h]@2

    v2 = this;
    result = false;//sub_A83350(1);
    if (!result) {
        v4 = false;
        // v4 = *(sub_1910D40(&v7) + 4) == 0;
        // result = sub_4C3290(&v7);
        if (!v4) {
            v5 = mplew.writeInt("Quest().getId");
            v6 = mplew.write("RedMod 1=Str", 1);
            sub_19B5520(v6, v5);
            //   sub_19193B0(v5);
            //   sub_19190A0(v5, 0);
            //   sub_19194B0(v5);
            //   result = parseInt(v5 / 10);
            //   if ( parseInt(v5 / 10) != 1493 && v5 != 10335 && v5 != 18821 )
            //   {
            //     sub_18F1BA0(v2);
            //     sub_1931830(0, 0);
            //     result = sub_198AC60(v5, v6);
            //   }
        }
    }
    return result;
}
function QuestRecordMessageAddValidCheck()//var this,var a2
{
    var v2; // edi@1
    var result; // eax@1
    var v4; // esi@2
    var v5; // ebx@3
    var v6; // esi@3
    var v7; // ebp@3
    var char_v8; // [sp+4h] [bp-8h]@2
    var v9; // [sp+10h] [bp+4h]@3

    v2 = this;
    result = false;//sub_A83350(1);
    if (!result) {
        v4 = false;
        //v4 = *(sub_1910D40(&v8) + 4) == 0;
        // result = sub_4C3290(&v8);
        if (!v4) {
            //   v5 = a2;
            v6 = mplew.writeInt("v6");
            v9 = mplew.write("v9") != 0;
            v7 = mplew.write("v7");
            sub_19B5520(v7, v6);
            //   sub_19193B0(v6);
            //   sub_19190A0(v6, 0);
            //   sub_19194B0(v6);
            //   result = parseInt(v6 / 10);
            //   if ( parseInt(v6 / 10) != 1493 && v6 != 10335 && v6 != 18821 && !v9 )
            //   {
            //     sub_18F1BA0(v2);
            //     sub_1931830(0, 0);
            //     result = sub_198AC60(v6, v7);
            //   }
        }
    }
    return result;
}

function sub_19B5520(a2, a4) {
    //   void *v4; // edi@1
    //   void (__thiscall ***v5)(_DWORD, _DWORD); // esi@2
    //   volatile LONG *v6; // ebp@2
    //   int result; // eax@10
    //   int v8; // eax@11
    //   int v9; // ebp@11
    //   int v10; // eax@11
    //   int v11; // eax@11
    //   int v12; // eax@12
    //   int v13; // ebp@12
    //   void (__thiscall ***v14)(_DWORD, _DWORD); // esi@13
    //   volatile LONG *v15; // ebx@13
    //   int v16; // eax@20
    //   unsigned int v17; // edx@21
    //   int i; // esi@21
    //   int v19; // ecx@22
    //   int v20; // ST08_4@26
    //   int v21; // eax@26
    //   signed int *v22; // eax@27
    //   int v23; // esi@28
    //   int v24; // esi@32
    //   int v25; // ecx@32
    //   int v46; // ebp@58
    //   void (__thiscall ***v47)(_DWORD, _DWORD); // esi@59
    //   volatile LONG *v48; // edi@59
    //   int v49; // eax@67
    //   signed int v50; // ecx@70
    //   int v51; // ST08_4@70
    //   int v52; // eax@70
    //   int v53; // eax@71
    //   int v54; // ebp@71
    //   int v55; // eax@71
    //   int v56; // ebp@73
    //   int v57; // ecx@74
    //   int v58; // ecx@77
    //   int v59; // eax@80
    //   int v60; // eax@80
    //   int v61; // eax@81
    //   int v62; // ecx@83
    //   int v63; // eax@87
    //   int v64; // esi@93
    //   int v65; // eax@93
    //   int v66; // eax@94
    //   int v67; // ST08_4@99
    //   int v68; // eax@99
    //   signed int *v69; // eax@100
    //   int v70; // ebp@101
    //   int v71; // ebx@109
    //   int v72; // eax@109
    //   int v73; // ebp@109
    //   int v74; // esi@109
    //   int v75; // eax@110
    //   int v76; // eax@111
    //   bool v77; // bl@113
    //   int v78; // eax@116
    //   int v79; // ecx@117
    //   signed int v81; // [sp-8h] [bp-B4h]@52
    //   signed int v82; // [sp-4h] [bp-B0h]@26
    //   int v83; // [sp+14h] [bp-98h]@1
    //   signed int *v84; // [sp+18h] [bp-94h]@1
    //   int v85; // [sp+1Ch] [bp-90h]@11
    //   int v86; // [sp+20h] [bp-8Ch]@66
    //   int v87; // [sp+24h] [bp-88h]@1
    //   char v88; // [sp+28h] [bp-84h]@1
    //   int v89; // [sp+2Ch] [bp-80h]@1
    //   int v91; // [sp+38h] [bp-74h]@11
    //   char v92; // [sp+40h] [bp-6Ch]@12
    //   int v93; // [sp+44h] [bp-68h]@12
    //   int v95; // [sp+4Ch] [bp-60h]@80
    //   char v96; // [sp+50h] [bp-5Ch]@58
    //   int v97; // [sp+54h] [bp-58h]@58
    //   char v98; // [sp+58h] [bp-54h]@11
    //   char v99; // [sp+60h] [bp-4Ch]@71
    //   char v100; // [sp+68h] [bp-44h]@109
    //   char v101; // [sp+70h] [bp-3Ch]@11
    //   char v102; // [sp+78h] [bp-34h]@110
    //   char v103; // [sp+80h] [bp-2Ch]@11
    //   char v104; // [sp+88h] [bp-24h]@111
    //   char v105; // [sp+90h] [bp-1Ch]@71
    //   char v106; // [sp+98h] [bp-14h]@116
    //   int v107; // [sp+A8h] [bp-4h]@11

    //   v4 = this;
    //   v84 = 0;
    //   v83 = 0;
    //   v87 = *(sub_1910D40(&v88) + 4);
    //   if ( v89 )
    //   {
    //     v5 = (v89 - 20);
    //     v6 = (v89 - 20 + 4);
    //     if ( !InterlockedDecrement(v6) )
    //     {
    //       if ( v89 )
    //         *(v89 - 8) = 1;
    //       InterlockedIncrement(v6);
    //       if ( v5 )
    //         (**v5)(v5, 1);
    //     }
    //     v89 = 0;
    //   }
    if (!a2) {
        var v71 = mplew.write("v71");
        // v72 = *(sub_1910D40(&v100) + 4);
        // v73 = a4;
        // v84 = a4;
        // v74 = sub_75FBF0(&v84) != 0;
        // sub_4C3290(&v100);
        // if ( v74 )
        // {
        //   v75 = *(sub_1910D40(&v102) + 4);
        //   v107 = 16;
        //   sub_734940(v73);
        //   v107 = -1;
        //   sub_4C3290(&v102);
        //   sub_7AB0D0(&a4);
        // }
        // v76 = *(sub_1910D40(&v104) + 4);
        // v107 = 17;
        // v84 = 1;
        // v77 = sub_7275F0(v73) && v71;
        // v107 = -1;
        // sub_4C3290(&v104);
        // if ( v77 )
        // {
        //   v78 = *(sub_1910D40(&v106) + 4);
        //   v107 = 18;
        //   sub_73F100(v73);
        //   v107 = -1;
        //   sub_4C3290(&v106);
        // }
        // sub_1971D10(v73);
        // v79 = *(v4 + 7380);
        return;//sub_1352DB0(v73);
    }
    if (a2 == 1) {
        var v85 = mplew.writeMapleAsciiString("v85");
        //     v107 = 0;
        //     if ( sub_C4D3A0(a4) )
        //     {
        //       v50 = *(v4 + 2170) > 0;
        //       v82 = *(v4 + 2170);
        //       v81 = v50;
        //       v51 = v87;
        //       v52 = sub_C4D3A0(a4);
        //       sub_D20C60(a4, *(v52 + 28), v51, v4 + 9224, v4 + 8752, v81, v82);
        //     }
        //     v83 = 0;
        //     LOBYTE(v107) = 1;
        //     v53 = *(sub_1910D40(&v105) + 4);
        //     v54 = a4;
        //     LOBYTE(v107) = 2;
        //     v86 = a4;
        //     sub_5D22C0(&v86, &v83);
        //     LOBYTE(v107) = 1;
        //     sub_4C3290(&v105);
        //     v55 = *(sub_1910D40(&v99) + 4);
        //     LOBYTE(v107) = 3;
        //     sub_73D2B0(v54, &v85);
        //     LOBYTE(v107) = 1;
        //     sub_4C3290(&v99);
        //     if ( !sub_4EAF70(&v83) )
        //     {
        //       v84 = &v82;
        //       v82 = 0;
        //       sub_47E230(&v82, &v83);
        //       sub_1981CD0(v54, 0, v82);
        //     }
        //     sub_7AB0D0(&a4);
        //     v56 = a4;
        //     sub_D0E0C0(a4);
        //     v86 = 1;
        //     sub_47FDE0(&a4, &v86);
        //     if ( v56 == 12484 )
        //     {
        //       v57 = *(v4 + 8442);
        //       *(v4 + 7733) = 0;
        //       if ( v57 )
        //       {
        //         v82 = 10000;
        //         v81 = 12484;
        // LABEL_79:
        //         sub_1345760(v81, v82);
        //         goto LABEL_80;
        //       }
        //     }
        //     else if ( v56 == 10664 )
        //     {
        //       v58 = *(v4 + 8442);
        //       *(v4 + 7734) = 0;
        //       if ( v58 )
        //       {
        //         v82 = 10000;
        //         v81 = 10664;
        //         goto LABEL_79;
        //       }
        //     }
        // LABEL_80:
        //     v59 = sub_5707E0(&byte_1EA7170, 0, 0);
        //     v60 = *sub_47EAE0(&v95, v59);
        //     LOBYTE(v107) = 4;
        //     if ( v60 )
        //       v61 = sub_1A95BED(v60);
        //     else
        //       v61 = 0;
        //     v62 = *(v4 + 7380);
        //     sub_13550F0(v56, v61);
        //     LOBYTE(v107) = 1;
        //     if ( v95 )
        //       sub_47DB30((v95 - 12));
        //     if ( v56 == 10227 )
        //     {
        //       if ( v85 )
        //         v63 = sub_1A95BED(v85);
        //       else
        //         v63 = 0;
        //       *(v4 + 7807) = v63;
        //     }
        //     v86 = sub_721550(v87 + 2620);
        //     if ( v86 )
        //     {
        //       while ( 1 )
        //       {
        //         v64 = *sub_734610(&v86, 0);
        //         v91 = v64;
        //         v65 = sub_C4D3A0(v64);
        //         if ( v65 )
        //         {
        //           v66 = *(v65 + 108);
        //           if ( !v66 )
        //             v66 = v64;
        //           if ( v66 == v56 && !sub_D0E2C0(v64) && !sub_47F720(&v91, 0) )
        //           {
        //             v82 = *(v4 + 2170);
        //             v81 = v82 > 0;
        //             v67 = v87;
        //             v68 = sub_C4D3A0(v64);
        //             if ( !sub_D20C60(v64, *(v68 + 28), v67, v4 + 9224, v4 + 8752, v81, v82) )
        //             {
        //               v84 = 1;
        //               sub_47FDE0(&v91, &v84);
        //               v69 = sub_40DCD0(dword_226D658, 0x198u);
        //               v84 = v69;
        //               LOBYTE(v107) = 5;
        //               if ( v69 )
        //                 v70 = sub_7B1070(v69);
        //               else
        //                 v70 = 0;
        //               LOBYTE(v107) = 1;
        //               sub_7B9FF0(v64);
        //               sub_1980B30(v70);
        //             }
        //           }
        //         }
        //         if ( !v86 )
        //           break;
        //         v56 = a4;
        //       }
        //     }
        //     LOBYTE(v107) = 0;
        //     if ( v83 )
        //       sub_47DB30((v83 - 12));
        //     result = v85;
        //     v107 = -1;
        //     if ( v85 )
        //       result = sub_47DB30((v85 - 12));
        // return result;
        return;
    }
    result = a2 - 2;
    if (a2 == 2) {
        var v91 = mplew.writeBuffer("DateTime", 8);
        //     v8 = *(sub_1910D40(&v101) + 4);
        //     v9 = a4;
        //     v107 = 6;
        //     sub_740860(a4, &v91);
        //     v107 = -1;
        //     sub_4C3290(&v101);
        //     v10 = *(sub_1910D40(&v103) + 4);
        //     v107 = 7;
        //     sub_734940(v9);
        //     v107 = -1;
        //     sub_4C3290(&v103);
        //     sub_7AB0D0(&a4);
        //     sub_1971D10(v9);
        //     v11 = sub_1910D40(&v98);
        //     v85 = sub_721550(*(v11 + 4) + 2620);
        //     sub_4C3290(&v98);
        //     while ( v85 )
        //     {
        //       v12 = *(sub_1910D40(&v92) + 4);
        //       v107 = 8;
        //       v13 = *sub_734610(&v85, 0);
        //       v107 = -1;
        //       if ( v93 )
        //       {
        //         v14 = (v93 - 20);
        //         v15 = (v93 - 20 + 4);
        //         if ( !InterlockedDecrement(v15) )
        //         {
        //           if ( v93 )
        //             *(v93 - 8) = 1;
        //           InterlockedIncrement(v15);
        //           if ( v14 )
        //             (**v14)(v14, 1);
        //         }
        //         v93 = 0;
        //       }
        //       if ( a4 != v13 )
        //       {
        //         v16 = sub_C4D3A0(v13);
        //         if ( !v16 )
        //           break;
        //         v17 = 0;
        //         for ( i = 0; ; i += 12 )
        //         {
        //           v19 = *(v16 + 120);
        //           if ( !v19 || v17 >= *(v19 - 4) )
        //             break;
        //           if ( *(i + v19) == a4 )
        //           {
        //             v82 = *(v4 + 2170);
        //             v20 = v87;
        //             v21 = sub_C4D3A0(v13);
        //             if ( !sub_D20C60(v13, *(v21 + 28), v20, v4 + 9224, v4 + 8752, v82 > 0, v82) )
        //             {
        //               v22 = sub_40DCD0(dword_226D658, 0x198u);
        //               v84 = v22;
        //               v107 = 9;
        //               if ( v22 )
        //                 v23 = sub_7B1070(v22);
        //               else
        //                 v23 = 0;
        //               v107 = -1;
        //               sub_7B9FF0(v13);
        //               sub_1980B30(v23);
        //             }
        //             break;
        //           }
        //           ++v17;
        //         }
        //       }
        //     }
        //     v24 = a4;
        //     v25 = *(v4 + 7380);
        //     sub_1352DB0(a4);
        //     if ( v24 == 6500 || v24 == 7884 )
        //       *(v4 + 55) = 1;
        //     if ( v24 == 17004 )
        //       sub_195C4F0(555, -1);
        //     v46 = *(sub_1910D40(&v96) + 4);
        //     if ( v97 )
        //     {
        //       v47 = (v97 - 20);
        //       v48 = (v97 - 20 + 4);
        //       if ( !InterlockedDecrement(v48) )
        //       {
        //         if ( v97 )
        //           *(v97 - 8) = 1;
        //         InterlockedIncrement(v48);
        //         if ( v47 )
        //           (**v47)(v47, 1);
        //       }
        //       v24 = a4;
        //       v97 = 0;
        //     }
        //     result = sub_4C1570(v46 + 44, *(v46 + 48)) / 1000;
        //     if ( !result )
        //     {
        //       v86 = v24;
        //       v83 = 0;
        //       result = sub_47F720(&v86, &v83);
        //       if ( v83 )
        //       {
        //         v49 = sub_590980(184);
        //         result = sub_72B200(&a4, v49);
        //       }
        //     }
    }
    return result;
}


function QuestRecordExMessage()//var  this,var lpMultiByteStr
{
    var result; // eax@1
    var v3; // esi@2
    var v4; // edi@3
    var v5; // eax@3
    var v6; // eax@3
    var v7; // eax@3
    var v8; // esi@3
    var v9; // eax@6
    var v10; // eax@6
    var v11; // eax@8
    var v12; // eax@8
    var v13; // ebx@9
    var v14; // edi@9
    var v15; // ebp@9
    var v16; // esi@9
    var v17; // ebp@27
    var v18; // esi@33
    var v19; // eax@57
    var v20; // eax@61
    var v21; // eax@86
    var v22; // eax@110
    var v23; // ecx@110
    var v24; // eax@113
    var v25; // eax@114
    var v26; // eax@115
    var v27; // esi@116
    var v28; // eax@123
    var v29; // edi@123
    var v30; // ebp@124
    var v31; // esi@124
    var v32; // ebx@125
    var v47; // esi@160
    var v48; // [sp+0h] [bp-DCh]@91
    var v49; // [sp+4h] [bp-D8h]@14
    var v50; // [sp+1Ch] [bp-C0h]@5
    var long_v51; // [sp+20h] [bp-BCh]@5
    var v52; // [sp+24h] [bp-B8h]@5
    var v53; // [sp+28h] [bp-B4h]@3
    var v54; // [sp+2Ch] [bp-B0h]@2
    var v55; // [sp+30h] [bp-ACh]@56
    var bool_v56; // [sp+37h] [bp-A5h]@3
    var v57; // [sp+38h] [bp-A4h]@3
    var v58; // [sp+3Ch] [bp-A0h]@113
    var v59; // [sp+40h] [bp-9Ch]@1
    var v60; // [sp+44h] [bp-98h]@3
    var char_v61; // [sp+48h] [bp-94h]@22
    var v62; // [sp+4Ch] [bp-90h]@9
    var v63; // [sp+50h] [bp-8Ch]@9
    var v64; // [sp+54h] [bp-88h]@9
    var v65; // [sp+58h] [bp-84h]@3
    var v66; // [sp+5Ch] [bp-80h]@3
    var v67; // [sp+60h] [bp-7Ch]@3
    var v68; // [sp+64h] [bp-78h]@3
    var v69; // [sp+70h] [bp-6Ch]@6
    var char_v71; // [sp+88h] [bp-54h]@168
    var v72; // [sp+8Ch] [bp-50h]@3
    var v73; // [sp+90h] [bp-4Ch]@3
    var v74; // [sp+94h] [bp-48h]@3
    var char_v75; // [sp+98h] [bp-44h]@168
    var v76; // [sp+9Ch] [bp-40h]@3
    var v77; // [sp+A0h] [bp-3Ch]@3
    var v78; // [sp+A4h] [bp-38h]@3
    var char_v79; // [sp+B8h] [bp-24h]@123
    var v81; // [sp+D8h] [bp-4h]@3

    // v59 = this;
    result = false;//sub_A83350(1);
    if (result)
        return result;
    // v3 = *(sub_1910D40(&v54) + 4) == 0;
    // result = sub_4C3290(&v54);
    // if (v3)
    //     return result;
    v4 = mplew.writeInt("v4");
    // v60 = v4;
    v57 = mplew.writeMapleAsciiString("v57");
    // v81 = 0;
    // v56 = (v4 - 12300) <= 0x14;
    // v65 = &off_1EA90EC;
    // v66 = 0;
    // v67 = 31;
    // v68 = 0;
    // sub_7216C0(100);
    // LOBYTE(v81) = 1;
    // v5 = *(sub_1910D40(&v54) + 4);
    // LOBYTE(v81) = 2;
    // v53 = v4;
    // sub_73EDF0(&v53, &v65);
    // LOBYTE(v81) = 1;
    // sub_4C3290(&v54);
    // v6 = *(sub_1910D40(&v54) + 4);
    // LOBYTE(v81) = 3;
    // sub_740290(v4, &v57);
    // LOBYTE(v81) = 1;
    // sub_4C3290(&v54);
    // v7 = *(sub_1910D40(&v54) + 4);
    // LOBYTE(v81) = 4;
    // v53 = v4;
    // v8 = sub_73EDF0(&v53, 0);
    // LOBYTE(v81) = 1;
    // sub_4C3290(&v54);
    // v76 = 0;
    // v77 = 0;
    // v78 = 0;
    // v72 = 0;
    // v73 = 0;
    // v74 = 0;
    // LOBYTE(v81) = 6;
    // if (v8 && *(v8 + 12) > 0) {
    //     sub_19B4F90(v68);
    //     v50 = 0;
    //     v52 = 0;
    //     LOBYTE(v81) = 8;
    //     v51 = sub_7215B0(&v65);
    //     while (v51) {
    //         v9 = sub_7346F0(&v51, &v52);
    //         sub_47E230(&v50, v9);
    //         v10 = sub_1989070(&v50, &v52);
    //         LOBYTE(v81) = 9;
    //         sub_19B54B0(v10);
    //         LOBYTE(v81) = 8;
    //         sub_1904880(&v69);
    //     }
    //     sub_19B4F90(*(v8 + 12));
    //     v51 = sub_7215B0(v8);
    //     while (v51) {
    //         v11 = sub_7346F0(&v51, &v52);
    //         sub_47E230(&v50, v11);
    //         v12 = sub_1989070(&v50, &v52);
    //         LOBYTE(v81) = 10;
    //         sub_19B54B0(v12);
    //         LOBYTE(v81) = 8;
    //         sub_1904880(&v69);
    //     }
    //     v13 = v77;
    //     v14 = v76;
    //     sub_19B5490(v76, v77, v53);
    //     v15 = v73;
    //     v16 = v72;
    //     sub_19B5490(v72, v73, v53);
    //     v62 = 0;
    //     v63 = 0;
    //     v64 = 0;
    //     LOBYTE(v81) = 11;
    //     sub_19B4F90((v15 - v16) >> 3);
    //     if (v14 == v13) {
    //         LABEL_19:
    //         while (v16 != v15) {
    //             v49 = v16;
    //             v16 += 2;
    //             sub_19B54B0(v49);
    //         }
    //     }
    //     else {
    //         while (v16 != v15) {
    //             if (sub_47CAB0(*v16) >= 0) {
    //                 if (sub_47CAB0(*v14) >= 0) {
    //                     if (!sub_4EAF70(v16 + 1))
    //                         sub_19B54B0(v16);
    //                     v14 += 2;
    //                     v16 += 2;
    //                 }
    //                 else {
    //                     v49 = v16;
    //                     v16 += 2;
    //                     sub_19B54B0(v49);
    //                 }
    //             }
    //             else {
    //                 v14 += 2;
    //             }
    //             if (v14 == v13)
    //                 continue LABEL_19;
    //         }
    //     }
    //     if ((v63 - v62) & 0xFFFFFFF8)
    //         sub_1989190(v60, &v61);
    //     LOBYTE(v81) = 8;
    //     sub_1990870(&v61);
    //     LOBYTE(v81) = 7;
    //     if (v52)
    //         sub_47DB30((v52 - 12));
    //     LOBYTE(v81) = 6;
    //     if (v50)
    //         sub_47DB30((v50 - 12));
    // }
    // v17 = v59;
    // if (v59[7368])
    //     sub_1337D90(1);
    // if (v17[7378])
    //     sub_121F9E0(1);
    // if (v17[7370])
    //     sub_13938D0(1);
    // v17[7433];
    // v18 = v60;
    // if (v17[7437] && v60 == 56995)
    //     sub_FBF2D0();
    // if (v17[7441] && v18 == 12509 && sub_5707E0("reset", 0, 0) >= 0)
    //     sub_1934640(80);
    // if (v17[7443] && v18 == 13504 && sub_5707E0("reset", 0, 0) >= 0)
    //     sub_1934640(130);
    // if (v17[7473])
    //     sub_10D2530(0);
    // if (v17[7439])
    //     sub_16157D0();
    // if (v17[7439] && v18 == 12962)
    //     sub_1615C70();
    // if (v17[7483])
    //     sub_F29300();
    // if (v17[8532])
    //     sub_10C5010();
    // switch (v18) {
    //     case 49000:
    //         sub_1910D40(&v54);
    //         LOBYTE(v81) = 12;
    //         if (v55) {
    //             sub_EA0560();
    //             v19 = sub_4BFF90(&v53, 4905);
    //             LOBYTE(v81) = 13;
    //             sub_73F6B0(&v51, 104, v19);
    //             LOBYTE(v81) = 15;
    //             if (v53)
    //                 sub_47DB30((v53 - 12));
    //             if (v51 && *v51 && ((v20 = sub_484490(v51), v20 == 2) || v20 == 3))
    //                 sub_194DE90(267, -1, 0, 0, 0);
    //             else
    //                 sub_1934640(267);
    //             LOBYTE(v81) = 12;
    //             if (v51)
    //                 sub_47DB30(v51 - 3);
    //         }
    //         LOBYTE(v81) = 6;
    //         sub_4C3290(&v54);
    //         break;
    //     case 12359:
    //         if (sub_1926070(v17) && v17[8442])
    //             sub_1345760(12359, 10000);
    //         break;
    //     case 12348:
    //         sub_197A100(v17);
    //         break;
    // }
    // if (v18 == 26422 && v17[7554])
    //     sub_18C6A30();
    // sub_1987280(v17);
    // sub_19803E0(v18);
    // sub_198B1E0(v18);
    // if (v57 && *v57) {
    //     if (v18 > 12939) {
    //         if (v18 > 26350) {
    //             if (v18 == 56070) {
    //                 if (!v17[8442])
    //                     continue LABEL_160;
    //                 v49 = 10000;
    //                 v48 = 56070;
    //                 LABEL_159:
    //                 sub_1345760(v48, v49);
    //                 continue LABEL_160;
    //             }
    //         }
    //         else {
    //             if (v18 == 26350) {
    //                 sub_1985710(v17);
    //                 continue LABEL_160;
    //             }
    //             if (v18 > 13653) {
    //                 if (v18 == 14489) {
    //                     sub_726110(&v65);
    //                     v28 = *(sub_1910D40(&v79) + 4);
    //                     LOBYTE(v81) = 39;
    //                     sub_1997080(-103, &v65);
    //                     LOBYTE(v81) = 6;
    //                     sub_4C3290(&v79);
    //                     v29 = 0;
    //                     v51 = 0;
    //                     LOBYTE(v81) = 40;
    //                     do {
    //                         v49 = v29;
    //                         sub_499AB0(&v51, &dword_1E9337C, v29);
    //                         sub_73ABA0(&v50, &v51);
    //                         LOBYTE(v81) = 41;
    //                         v30 = -1;
    //                         v31 = 0;
    //                         if (sub_47CD70(&v50) > 0) {
    //                             v32 = v50;
    //                             while ( *(v31 + v32) != 50) {
    //                                 if (++v31 >= sub_47CD70(&v50))
    //                                     continue LABEL_130;
    //                             }
    //                             v30 = v31;
    //                         }
    //                         LABEL_130:
    //                         v49 = v30;
    //                         v58 = &v48;
    //                         v48 = 0;
    //                         sub_47E230(&v48, &v50);
    //                         sub_19277C0(v29, v48, v49);
    //                         LOBYTE(v81) = 40;
    //                         if (v50)
    //                             sub_47DB30((v50 - 12));
    //                         ++v29;
    //                     }
    //                     while (v29 < 5);
    //                     LOBYTE(v81) = 6;
    //                     if (v51)
    //                         sub_47DB30(v51 - 3);
    //                     continue LABEL_160;
    //                 }
    //             }
    //             else {
    //                 if (v18 == 13653) {
    //                     if (v17[7465]) {
    //                         v22 = sub_FD9E80();
    //                         v23 = *(v17[7465] + 5508);
    //                         if (v23)
    //                             v23 = *(v23 - 4);
    //                         if (v23 == v22) {
    //                             v24 = sub_40DCD0(dword_226D658, 0x208u);
    //                             v58 = v24;
    //                             LOBYTE(v81) = 37;
    //                             if (v24 && (v25 = sub_FD5270(v24)) != 0 && (v26 = v25 + 8) != 0) {
    //                                 v27 = v26 - 8;
    //                                 v55 = v26 - 8;
    //                                 if (v26 != 8)
    //                                     InterlockedIncrement((v27 + 12));
    //                             }
    //                             else {
    //                                 v27 = 0;
    //                                 v55 = 0;
    //                             }
    //                             LOBYTE(v81) = 38;
    //                             if (sub_748940(v27) == 2)
    //                                 sub_1934640(139);
    //                             LOBYTE(v81) = 6;
    //                             sub_190D240(&v54);
    //                         }
    //                     }
    //                     continue LABEL_160;
    //                 }
    //                 if (v18 >= 13649 && v18 <= 13651) {
    //                     if (v17[7465])
    //                         sub_FD9E80();
    //                     continue LABEL_160;
    //                 }
    //             }
    //         }
    //         LABEL_156:
    //         sub_1931830(0, 0);
    //         continue LABEL_160;
    //     }
    //     if (v18 >= 12937) {
    //         if (v17[7463])
    //             sub_FD8970();
    //         continue LABEL_160;
    //     }
    //     if (v18 > 7785) {
    //         if (v18 != 7982) {
    //             if (v18 == 12334 || v18 == 12860)
    //                 continue LABEL_160;
    //             continue LABEL_156;
    //         }
    //         if (v17[8442]) {
    //             v49 = 10000;
    //             v48 = 7982;
    //             continue LABEL_159;
    //         }
    //     }
    //     else if (v18 == 7785) {
    //         sub_194DE90(2, -1, 0, 0, 0);
    //         sub_14992C0(0);
    //         sub_149FCA0(0);
    //     }
    //     else {
    //         if (v18 != 1652) {
    //             if (v18 == 7022) {
    //                 if (v17[7487])
    //                     sub_1608740();
    //                 continue LABEL_160;
    //             }
    //             if (v18 == 7784) {
    //                 sub_196EBD0(0);
    //                 sub_EA0560();
    //                 v21 = sub_4BFF90(&v69, 8653);
    //                 LOBYTE(v81) = 21;
    //                 sub_4C4B10(v21, 11, -1, -1, 0);
    //                 LOBYTE(v81) = 6;
    //                 if (v69)
    //                     sub_47DB30((v69 - 12));
    //                 continue LABEL_160;
    //             }
    //             continue LABEL_156;
    //         }
    //         if (v17[8442]) {
    //             v49 = 10000;
    //             v48 = 1652;
    //             continue LABEL_159;
    //         }
    //     }
    // }
    // LABEL_160:
    // v47 = v60;
    // sub_5EB410(v60);
    // if (v59[7467])
    //     sub_FD7A80();
    // if (v56)
    //     sub_199E600(v47, &v65);
    // if (parseInt(v47 / 10) != 1493 && v47 != 10335 && v47 != 18821)
    //     sub_1931830(0, 0);
    // LOBYTE(v81) = 5;
    // sub_1990870(&v71);
    // LOBYTE(v81) = 1;
    // sub_1990870(&v75);
    // LOBYTE(v81) = 0;
    // v65 = &off_1EA90EC;
    // sub_726110(&v65);
    // result = v57;
    // v81 = -1;
    // if (v57)
    //     result = sub_47DB30(v57 - 3);
    // return result;
}

function WorldShareRecordMessage()//int a1
{
    var v1; // edi@1
    var char_v2; // bp@1
    var v3; // eax@1
    var v42 // esi@
    var long_v5; // edi@2
    var result; // eax@8
    var char_v7; // [sp+10h] [bp-14h]@1
    var v8; // [sp+14h] [bp-10h]@1
    var v9; // [sp+20h] [bp-4h]@1

    // v1 = a1;
    v2 = mplew.writeInt("v2");
    a1 = mplew.writeMapleAsciiString("a1");
    // v9 = 0;
    // v3 = *(sub_1910D40(&v7) + 4);
    // LOBYTE(v9) = 1;
    // sub_7402C0(v2, &a1);
    // LOBYTE(v9) = 0;
    // if (v8) {
    //     v4 = (v8 - 20);
    //     v5 = (v8 - 20 + 4);
    //     if (!InterlockedDecrement(v5)) {
    //         if (v8)
    //     *(v8 - 8) = 1;
    //         InterlockedIncrement(v5);
    //         if (v4)
    //             (**v4)(v4, 1);
    //     }
    //     v8 = 0;
    // }
    // result = a1;
    // v9 = -1;
    // if (a1)
    //     result = sub_47DB30((a1 - 12));
    // return result;
}
function CashItemExpireMessage()//int a1
{
    var v1; // eax@1
    var result; // eax@1
    var bool_v3; // zf@1
    var char_v4; // ST0C_4@3
    var v5; // [sp+4h] [bp-14h]@1
    var v6; // [sp+8h] [bp-10h]@3
    var v7; // [sp+14h] [bp-4h]@1

    v1 = mplew.writeInt("v1");
    // sub_A11A20(&v5, v1);
    // result = v5;
    // v7 = 0;
    // v3 = v5 == 0;
    // if (v5) {
    //     if ( *v5) {
    //         a1 = 0;
    //         LOBYTE(v7) = 1;
    //         sub_EA0560();
    //         v4 = *sub_4BFF90(&v6, 364);
    //         LOBYTE(v7) = 2;
    //         sub_499AB0(&a1, v4, v5);
    //         LOBYTE(v7) = 1;
    //         if (v6)
    //             sub_47DB30((v6 - 12));
    //         sub_4C4B10(&a1, 11, -1, -1, 0);
    //         LOBYTE(v7) = 0;
    //         if (a1)
    //             sub_47DB30((a1 - 12));
    //         result = v5;
    //     }
    //     v3 = result == 0;
    // }
    // v7 = -1;
    // if (!v3)
    //     result = sub_47DB30((result - 12));
    // return result;
}

function IncEXPMessage()//int lpMultiByteStr_1
{
    var v1; // edx@1
    var v2; // esi@1
    var v3; // edi@1
    var char_v4; // ST0C_4@1
    var char_v5; // ST0C_4@4
    var char_v6; // ST0C_4@7
    var char_v15; // ST0C_4@34
    var char_v16; // ST0C_4@37
    var char_v17; // ST0C_4@40
    var char_v18; // ST0C_4@43
    var char_v19; // ST0C_4@46
    var char_v20; // ST0C_4@49
    var char_v21; // ST0C_4@52
    var char_v22; // ST0C_4@55
    var char_v23; // ST0C_4@58
    var char_v24; // ST0C_4@61
    var char_v25; // ST0C_4@64
    var char_v26; // ST0C_4@67
    var char_v27; // ST0C_4@70
    var char_v28; // ST08_4@73
    var char_v29; // ST0C_4@76
    var char_v30; // ST0C_4@79
    var char_v31; // ST0C_4@82
    var char_v32; // ST0C_4@85
    var char_v33; // ST0C_4@88
    var char_v34; // ST0C_4@91
    var char_v35; // ST0C_4@94
    var char_v36; // ST0C_4@97
    var char_v37; // ST0C_4@100
    var v38; // ebp@102
    var v39; // edi@104
    var char_v40; // ST0C_4@105
    var long_v41; // esi@108
    var char_v42; // ST0C_4@109
    var result; // eax@115
    var v44; // ebx@121
    var v45; // [sp+14h] [bp-128h]@1
    var v46; // [sp+18h] [bp-124h]@24
    var v47; // [sp+1Ch] [bp-120h]@10
    var v48; // [sp+20h] [bp-11Ch]@24
    var long_v49; // [sp+24h] [bp-118h]@18
    var v50; // [sp+28h] [bp-114h]@1
    var v51; // [sp+2Ch] [bp-110h]@1
    var long_v52; // [sp+30h] [bp-10Ch]@1
    var v53; // [sp+34h] [bp-108h]@1
    var lpMultiByteStr; // [sp+38h] [bp-104h]@1
    var v55; // [sp+3Ch] [bp-100h]@1
    var v56; // [sp+40h] [bp-FCh]@1
    var v57; // [sp+44h] [bp-F8h]@1
    var v58; // [sp+48h] [bp-F4h]@1
    var v59; // [sp+4Ch] [bp-F0h]@1
    var v60; // [sp+50h] [bp-ECh]@1
    var v61; // [sp+54h] [bp-E8h]@1
    var v62; // [sp+58h] [bp-E4h]@1
    var v63; // [sp+5Ch] [bp-E0h]@1
    var v64; // [sp+60h] [bp-DCh]@1
    var v65; // [sp+64h] [bp-D8h]@1
    var v66; // [sp+68h] [bp-D4h]@1
    var v67; // [sp+6Ch] [bp-D0h]@1
    var v68; // [sp+70h] [bp-CCh]@1
    var v69; // [sp+74h] [bp-C8h]@1
    var v70; // [sp+78h] [bp-C4h]@1
    var v71; // [sp+7Ch] [bp-C0h]@1
    var v72; // [sp+80h] [bp-BCh]@1
    var v73; // [sp+84h] [bp-B8h]@1
    var v74; // [sp+88h] [bp-B4h]@1
    var v75; // [sp+8Ch] [bp-B0h]@1
    var v76; // [sp+90h] [bp-ACh]@32
    var char_v78; // [sp+A4h] [bp-98h]@1
    var v79; // [sp+A8h] [bp-94h]@1
    var v80; // [sp+ACh] [bp-90h]@1
    var v81; // [sp+B0h] [bp-8Ch]@1
    var v82; // [sp+B8h] [bp-84h]@1
    var v83; // [sp+BCh] [bp-80h]@54
    var v84; // [sp+C0h] [bp-7Ch]@33
    var v85; // [sp+C4h] [bp-78h]@36
    var v86; // [sp+C8h] [bp-74h]@3
    var v87; // [sp+CCh] [bp-70h]@39
    var v88; // [sp+D0h] [bp-6Ch]@45
    var v89; // [sp+D4h] [bp-68h]@48
    var v90; // [sp+D8h] [bp-64h]@6
    var v91; // [sp+DCh] [bp-60h]@9
    var v92; // [sp+E0h] [bp-5Ch]@57
    var v93; // [sp+E4h] [bp-58h]@60
    var v94; // [sp+E8h] [bp-54h]@63
    var v95; // [sp+ECh] [bp-50h]@66
    var v96; // [sp+F0h] [bp-4Ch]@69
    var v97; // [sp+F4h] [bp-48h]@78
    var v98; // [sp+F8h] [bp-44h]@75
    var v99; // [sp+FCh] [bp-40h]@81
    var v100; // [sp+100h] [bp-3Ch]@84
    var v101; // [sp+104h] [bp-38h]@87
    var v102; // [sp+108h] [bp-34h]@72
    var v103; // [sp+10Ch] [bp-30h]@73
    var v104; // [sp+110h] [bp-2Ch]@90
    var v105; // [sp+118h] [bp-24h]@93
    var v106; // [sp+11Ch] [bp-20h]@96
    var v107; // [sp+120h] [bp-1Ch]@99
    var v108; // [sp+124h] [bp-18h]@102
    var v109; // [sp+128h] [bp-14h]@104
    var v110; // [sp+12Ch] [bp-10h]@108
    var v111; // [sp+138h] [bp-4h]@1

    // v45 = 0;
    v78 = Array();
    v78 = sub_196DDE0(v78);
    function sub_196DDE0(Data) {
        var result; // eax@1
        result = Data;
        Data[0] = 0;
        Data[1] = 0;
        Data[2] = 0;
        Data[3] = 0;
        Data[4] = 0;
        Data[5] = 0;
        Data[6] = 0;
        Data[7] = 0;
        Data[8] = 0;
        Data[9] = 0;
        Data[10] = 0;
        Data[11] = 0;
        Data[12] = 0;
        Data[13] = 0;
        Data[14] = 0;
        Data[15] = 0;
        Data[16] = 0;
        Data[17] = 0;
        Data[18] = 0;
        Data[19] = 0;
        Data[20] = 0;
        Data[21] = 0;
        Data[22] = 0;
        Data[23] = 0;
        Data[24] = 0;
        Data[25] = 0;
        Data[26] = 0;
        Data[27] = 0;
        Data[28] = 0;
        Data[29] = 0;
        Data[30] = 0;
        Data[31] = 0;
        Data[32] = 0;
        Data[33] = 0;
        Data[34] = 0;
        return result;
    }
    sub_EA47B0(v78);

    function sub_EA47B0(Tempchar) {
        var v2; // edi@1
        var v3; // esi@1
        var result; // eax@61
        var v5; // [sp+10h] [bp-8h]@1
        var v6; // [sp+14h] [bp-4h]@1

        v2 = Tempchar;
        Tempchar = mplew.write("Tempchar", 0x01);
        v2[1] = mplew.writeInt("v2[1]");
        v2[2] = mplew.write("v2[2]");
        v5 = 0;
        v6 = 0;
        v5 = mplew.writeBuffer("v5", 8);
        v3 = v5;
        if (v5 & 1)
            v2[3] = mplew.writeInt("v2[3]");
        if (v3 & 4)
            v2[4] = mplew.write("v2[4]");
        if (v2[2])
            v2[5] = mplew.write("v2[5]");
        if (v2[5] > 0)
            v2[6] = mplew.write("v2[6]");
        if (v3 & 0x20)
            v2[8] = mplew.writeInt("v2[8]");
        if (v3 & 0x10)
            v2[7] = mplew.writeInt("v2[7]");
        if (v3 & 0x40)
            v2[9] = mplew.writeInt("v2[9]");
        if (v3 & 0x80)
            v2[10] = mplew.writeInt("v2[10]");
        if (v3 & 0x100)
            v2[11] = mplew.writeInt("v2[11]");
        if (v3 & 0x200)
            v2[12] = mplew.writeInt("v2[12]");
        if (v3 & 0x400)
            v2[13] = mplew.writeInt("v2[13]");
        if (v3 & 0x800)
            v2[14] = mplew.writeInt("v2[14]");
        if (v3 & 0x1000)
            v2[15] = mplew.writeInt("v2[15]");
        if (v3 & 0x2000)
            v2[16] = mplew.writeInt("v2[16]");
        if (v3 & 0x4000)
            v2[17] = mplew.writeInt("v2[17]");
        if (v3 & 0x8000)
            v2[18] = mplew.writeInt("v2[18]");
        if (v3 & 0x10000)
            v2[19] = mplew.writeInt("v2[19]");
        if (v3 & 0x20000)
            v2[20] = mplew.writeInt("v2[20]");
        if (v3 & 0x40000)
            v2[21] = mplew.writeInt("v2[21]");
        if (v3 & 0x80000)
            v2[22] = mplew.writeInt("v2[22]");
        if (v3 & 0x100000)
            v2[23] = mplew.writeInt("v2[23]");
        if (v3 & 0x200000)
            v2[24] = mplew.writeInt("v2[24]");
        // if (_ImageBase & v3) {
        //     v2[25] = mplew.writeInt("v2[25]");
        //     v2[26] = mplew.writeInt("v2[26]");
        // }
        if (v3 & 0x800000)
            v2[27] = mplew.writeInt("v2[27]");
        // if ((loc_FFFFFF + 1) & v3)
        //     v2[28] = mplew.writeInt("v2[28]");
        // if (dword_2000000 & v3)
        //     v2[29] = mplew.writeInt("v2[29]");
        if (v3 & 0x4000000)
            v2[30] = mplew.writeInt("v2[30]");
        if (v3 & 0x4000000)
            v2[31] = mplew.writeInt("v2[31]");
        if (v3 & 0x8000000)
            v2[32] = mplew.writeInt("v2[32]");
        if (v3 & 0x10000000)
            v2[33] = mplew.writeInt("v2[33]");
        result = 0;
        if (v3 & 0x20000000) {
            result = mplew.writeInt("result");
            v2[34] = result;
        }
        return result;
    }
    // v1 = ((1374389535i64 * v79 * v82) >> 32) >> 5;
    // v2 = v80 == 0 ? v81 : 0;
    // v3 = v1 + (v1 >> 31);
    // lpMultiByteStr = 0;
    // v111 = 0;
    // v68 = 0;
    // v66 = 0;
    // v64 = 0;
    // v62 = 0;
    // v52 = 0;
    // v50 = 0;
    // v60 = 0;
    // v58 = 0;
    // v57 = 0;
    // v67 = 0;
    // v74 = 0;
    // v65 = 0;
    // v71 = 0;
    // v63 = 0;
    // v56 = 0;
    // v61 = 0;
    // v69 = 0;
    // v53 = 0;
    // v59 = 0;
    // v73 = 0;
    // v72 = 0;
    // v70 = 0;
    // v75 = 0;
    // v51 = 0;
    // v55 = 0;
    // LOBYTE(v111) = 25;
    // sub_EA0560();
    // v4 = *sub_4BFF90(&v45, 317);
    // LOBYTE(v111) = 26;
    // sub_499AB0(&lpMultiByteStr, v4, v79);
    // LOBYTE(v111) = 25;
    // if (v45)
    //     sub_47DB30((v45 - 12));
    // if (v86) {
    //     sub_EA0560();
    //     v5 = *sub_4BFF90(&v45, 325);
    //     LOBYTE(v111) = 27;
    //     sub_499AB0(&v68, v5, v86);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v90) {
    //     sub_EA0560();
    //     v6 = *sub_4BFF90(&v45, 327);
    //     LOBYTE(v111) = 28;
    //     sub_499AB0(&v67, v6, v90);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v91)
    //     BYTE3(v47) = 0;
    // if (v84 > 0) {
    //     sub_EA0560();
    //     v15 = *sub_4BFF90(&v45, 5500);
    //     LOBYTE(v111) = 36;
    //     sub_499AB0(&v64, v15, v84);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v85) {
    //     sub_EA0560();
    //     v16 = *sub_4BFF90(&v45, 324);
    //     LOBYTE(v111) = 37;
    //     sub_499AB0(&v60, v16, v85);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v87) {
    //     sub_EA0560();
    //     v17 = *sub_4BFF90(&v45, 321);
    //     LOBYTE(v111) = 38;
    //     sub_499AB0(&v66, v17, v87);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v2) {
    //     sub_EA0560();
    //     v18 = *sub_4BFF90(&v45, 322);
    //     LOBYTE(v111) = 39;
    //     sub_499AB0(&v62, v18, v2);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v88) {
    //     sub_EA0560();
    //     v19 = *sub_4BFF90(&v45, 323);
    //     LOBYTE(v111) = 40;
    //     sub_499AB0(&v58, v19, v88);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v89) {
    //     sub_EA0560();
    //     v20 = *sub_4BFF90(&v45, 326);
    //     LOBYTE(v111) = 41;
    //     sub_499AB0(&v57, v20, v89);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v3) {
    //     sub_EA0560();
    //     v21 = *sub_4BFF90(&v45, 330);
    //     LOBYTE(v111) = 42;
    //     sub_499AB0(&v52, v21, v3);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    //     if (v83) {
    //         sub_EA0560();
    //         v22 = *sub_4BFF90(&v45, 345);
    //         LOBYTE(v111) = 43;
    //         sub_499AB0(&v50, v22, v83);
    //         LOBYTE(v111) = 25;
    //         if (v45)
    //             sub_47DB30((v45 - 12));
    //     }
    // }
    // if (v92) {
    //     sub_EA0560();
    //     v23 = *sub_4BFF90(&v45, 329);
    //     LOBYTE(v111) = 44;
    //     sub_499AB0(&v65, v23, v92);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v93) {
    //     sub_EA0560();
    //     v24 = *sub_4BFF90(&v45, 331);
    //     LOBYTE(v111) = 45;
    //     sub_499AB0(&v71, v24, v93);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v94) {
    //     sub_EA0560();
    //     v25 = *sub_4BFF90(&v45, 332);
    //     LOBYTE(v111) = 46;
    //     sub_499AB0(&v63, v25, v94);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v95) {
    //     sub_EA0560();
    //     v26 = *sub_4BFF90(&v45, 333);
    //     LOBYTE(v111) = 47;
    //     sub_499AB0(&v56, v26, v95);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v96) {
    //     sub_EA0560();
    //     v27 = *sub_4BFF90(&v45, 335);
    //     LOBYTE(v111) = 48;
    //     sub_499AB0(&v61, v27, v96);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v102) {
    //     sub_EA0560();
    //     v28 = *sub_4BFF90(&v45, 342);
    //     LOBYTE(v111) = 49;
    //     sub_499AB0(&v70, v28, v103, v102);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v98) {
    //     sub_EA0560();
    //     v29 = *sub_4BFF90(&v45, 336);
    //     LOBYTE(v111) = 50;
    //     sub_499AB0(&v53, v29, v98);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v97) {
    //     sub_EA0560();
    //     v30 = *sub_4BFF90(&v45, 337);
    //     LOBYTE(v111) = 51;
    //     sub_499AB0(&v69, v30, v97);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v99 > 0) {
    //     sub_EA0560();
    //     v31 = *sub_4BFF90(&v45, 318);
    //     LOBYTE(v111) = 52;
    //     sub_499AB0(&v59, v31, v99);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v100 > 0) {
    //     sub_EA0560();
    //     v32 = *sub_4BFF90(&v45, 338);
    //     LOBYTE(v111) = 53;
    //     sub_499AB0(&v73, v32, v100);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v101 > 0) {
    //     sub_EA0560();
    //     v33 = *sub_4BFF90(&v45, 339);
    //     LOBYTE(v111) = 54;
    //     sub_499AB0(&v72, v33, v101);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v104 > 0) {
    //     sub_EA0560();
    //     v34 = *sub_4BFF90(&v45, 13467);
    //     LOBYTE(v111) = 55;
    //     sub_499AB0(&v75, v34, v104);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v105 > 0) {
    //     sub_EA0560();
    //     v35 = *sub_4BFF90(&v45, 344);
    //     LOBYTE(v111) = 58;
    //     sub_499AB0(&v55, v35, v105);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // if (v106 > 0) {
    //     sub_EA0560();
    //     v36 = *sub_4BFF90(&v45, 13363);
    //     LOBYTE(v111) = 59;
    //     sub_499AB0(&v55, v36, v106);
    //     LOBYTE(v111) = 25;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // v46 = 0;
    // LOBYTE(v111) = 60;
    // if (v107) {
    //     sub_EA0560();
    //     v37 = *sub_4BFF90(&v45, 10458);
    //     LOBYTE(v111) = 61;
    //     sub_499AB0(&v46, v37, v107);
    //     LOBYTE(v111) = 60;
    //     if (v45)
    //         sub_47DB30((v45 - 12));
    // }
    // v38 = 0;
    // v45 = 0;
    // LOBYTE(v111) = 62;
    // if (v108) {
    //     sub_499AB0(&v45, "Pvp Bonus EXP(+%d)", v108);
    //     v38 = v45;
    // }
    // v39 = 0;
    // v48 = 0;
    // LOBYTE(v111) = 63;
    // if (v109) {
    //     sub_EA0560();
    //     v40 = *sub_4BFF90(&v49, 12155);
    //     LOBYTE(v111) = 64;
    //     sub_499AB0(&v48, v40, v109);
    //     LOBYTE(v111) = 63;
    //     if (v49)
    //         sub_47DB30(v49 - 3);
    //     v39 = v48;
    // }
    // v41 = 0;
    // v49 = 0;
    // LOBYTE(v111) = 65;
    // if (v110) {
    //     sub_EA0560();
    //     v42 = *sub_4BFF90(&v76, 10650);
    //     LOBYTE(v111) = 66;
    //     sub_499AB0(&v49, v42, v110);
    //     LOBYTE(v111) = 65;
    //     if (v76)
    //         sub_47DB30((v76 - 12));
    //     v41 = v49;
    // }
    // sub_4C4B10(&lpMultiByteStr, 6, -1, -1, 0);
    // if (v52 && *v52)
    //     sub_4C4B10(&v52, 6, -1, -1, 0);
    // result = v50;
    // if (v50 && *v50)
    //     result = sub_4C4B10(&v50, 6, -1, -1, 0);
    // if (v41 && *v41)
    //     result = sub_4C4B10(&v49, 6, -1, -1, 0);
    // v44 = v46;
    // LOBYTE(v111) = 63;
    // if (v41)
    //     result = sub_47DB30(v41 - 3);
    // LOBYTE(v111) = 62;
    // if (v39)
    //     result = sub_47DB30((v39 - 12));
    // LOBYTE(v111) = 60;
    // if (v38)
    //     result = sub_47DB30((v38 - 12));
    // LOBYTE(v111) = 25;
    // if (v44)
    //     result = sub_47DB30(v44 - 3);
    // LOBYTE(v111) = 24;
    // if (v55)
    //     result = sub_47DB30(v55 - 3);
    // LOBYTE(v111) = 23;
    // if (v51)
    //     result = sub_47DB30(v51 - 3);
    // LOBYTE(v111) = 22;
    // if (v75)
    //     result = sub_47DB30(v75 - 3);
    // LOBYTE(v111) = 21;
    // if (v70)
    //     result = sub_47DB30(v70 - 3);
    // LOBYTE(v111) = 20;
    // if (v72)
    //     result = sub_47DB30(v72 - 3);
    // LOBYTE(v111) = 19;
    // if (v73)
    //     result = sub_47DB30(v73 - 3);
    // LOBYTE(v111) = 18;
    // if (v59)
    //     result = sub_47DB30(v59 - 3);
    // LOBYTE(v111) = 17;
    // if (v53)
    //     result = sub_47DB30(v53 - 3);
    // LOBYTE(v111) = 16;
    // if (v69)
    //     result = sub_47DB30(v69 - 3);
    // LOBYTE(v111) = 15;
    // if (v61)
    //     result = sub_47DB30(v61 - 3);
    // LOBYTE(v111) = 14;
    // if (v56)
    //     result = sub_47DB30(v56 - 3);
    // LOBYTE(v111) = 13;
    // if (v63)
    //     result = sub_47DB30(v63 - 3);
    // LOBYTE(v111) = 12;
    // if (v71)
    //     result = sub_47DB30(v71 - 3);
    // LOBYTE(v111) = 11;
    // if (v65)
    //     result = sub_47DB30(v65 - 3);
    // LOBYTE(v111) = 10;
    // if (v74)
    //     result = sub_47DB30(v74 - 3);
    // LOBYTE(v111) = 9;
    // if (v67)
    //     result = sub_47DB30(v67 - 3);
    // LOBYTE(v111) = 8;
    // if (v57)
    //     result = sub_47DB30(v57 - 3);
    // LOBYTE(v111) = 7;
    // if (v58)
    //     result = sub_47DB30(v58 - 3);
    // LOBYTE(v111) = 6;
    // if (v60)
    //     result = sub_47DB30(v60 - 3);
    // LOBYTE(v111) = 5;
    // if (v50)
    //     result = sub_47DB30(v50 - 3);
    // LOBYTE(v111) = 4;
    // if (v52)
    //     result = sub_47DB30(v52 - 3);
    // LOBYTE(v111) = 3;
    // if (v62)
    //     result = sub_47DB30(v62 - 3);
    // LOBYTE(v111) = 2;
    // if (v64)
    //     result = sub_47DB30(v64 - 3);
    // LOBYTE(v111) = 1;
    // if (v66)
    //     result = sub_47DB30(v66 - 3);
    // LOBYTE(v111) = 0;
    // if (v68)
    //     result = sub_47DB30(v68 - 3);
    // v111 = -1;
    // if (lpMultiByteStr)
    //     result = sub_47DB30(lpMultiByteStr - 3);
    // return result;
}
function IncNonCombatStatEXPMessage()//int a1
{
    var v1; // esi@1
    var v2; // ebx@1
    var v3; // edi@2
    var v4; // ebp@2
    var char_v5; // ecx@2
    var v6; // edx@2
    var v7; // eax@2
    var v8; // edi@7
    var v9; // ebp@7
    var char_v10; // ecx@7
    var v11; // edx@7
    var v12; // eax@7
    var v13; // edi@12
    var v14; // ebp@12
    var char_v15; // ecx@12
    var v16; // edx@12
    var v17; // eax@12
    var v18; // edi@17
    var v19; // ebp@17
    var char_v20; // ecx@17
    var v21; // edx@17
    var v22; // eax@17
    var v23; // edi@22
    var v24; // ebp@22
    var char_v25; // ecx@22
    var v26; // edx@22
    var v27; // eax@22
    var v28; // esi@28
    var v29; // edi@28
    var char_v30; // ecx@28
    var v31; // edx@28
    var v32; // eax@28
    var v33; // ebx@32
    var v34; // edi@32
    var v35; // esi@32
    var result; // eax@36
    var v37; // [sp-Ch] [bp-40h]@2
    var v38; // [sp-4h] [bp-38h]@2
    var v39; // [sp+14h] [bp-20h]@1
    var v40; // [sp+18h] [bp-1Ch]@2
    var v41; // [sp+1Ch] [bp-18h]@2
    var v42; // [sp+20h] [bp-14h]@1
    var v43; // [sp+30h] [bp-4h]@1

    v1 = a1;
    v42 = mplew.writeBuffer("v42", 8);
    // v39 = 0;
    // v43 = 0;
    // a1 = 0;
    // v2 = v42;
    // LOBYTE(v43) = 1;
    // if (v42 & 0x100000) {
    //     v3 = mplew .writeInt(v1);
    //     sub_EA0560();
    //     v4 = sub_4BFF90(&v41, 8029);
    //     LOBYTE(v43) = 2;
    //     sub_EA0560();
    //     v5 = *sub_4BFF90(&v40, 8035);
    //     v6 = *v4;
    //     LOBYTE(v43) = 3;
    //     v37 = v6;
    //     v38 = sub_499AB0(&v39, v5, v6, 2 * (v3 < 0) + 43, abs(v3));
    //     v7 = sub_571590(-1);
    //     sub_47E230(v7, v38);
    //     LOBYTE(v43) = 2;
    //     if (v40)
    //         sub_47DB30((v40 - 12));
    //     LOBYTE(v43) = 1;
    //     if (v41)
    //         sub_47DB30((v41 - 12));
    // }
    // if (v2 & 0x200000) {
    //     v8 = mplew .writeInt(v1);
    //     sub_EA0560();
    //     v9 = sub_4BFF90(&v40, 8030);
    //     LOBYTE(v43) = 4;
    //     sub_EA0560();
    //     v10 = *sub_4BFF90(&v41, 8035);
    //     v11 = *v9;
    //     LOBYTE(v43) = 5;
    //     v37 = v11;
    //     v38 = sub_499AB0(&v39, v10, v11, 2 * (v8 < 0) + 43, abs(v8));
    //     v12 = sub_571590(-1);
    //     sub_47E230(v12, v38);
    //     LOBYTE(v43) = 4;
    //     if (v41)
    //         sub_47DB30((v41 - 12));
    //     LOBYTE(v43) = 1;
    //     if (v40)
    //         sub_47DB30((v40 - 12));
    // }
    // if ( &_ImageBase & v2) {
    //     v13 = mplew .writeInt(v1);
    //     sub_EA0560();
    //     v14 = sub_4BFF90(&v40, 8031);
    //     LOBYTE(v43) = 6;
    //     sub_EA0560();
    //     v15 = *sub_4BFF90(&v41, 8035);
    //     v16 = *v14;
    //     LOBYTE(v43) = 7;
    //     v37 = v16;
    //     v38 = sub_499AB0(&v39, v15, v16, 2 * (v13 < 0) + 43, abs(v13));
    //     v17 = sub_571590(-1);
    //     sub_47E230(v17, v38);
    //     LOBYTE(v43) = 6;
    //     if (v41)
    //         sub_47DB30((v41 - 12));
    //     LOBYTE(v43) = 1;
    //     if (v40)
    //         sub_47DB30((v40 - 12));
    // }
    // if (v2 & 0x800000) {
    //     v18 = mplew .writeInt(v1);
    //     sub_EA0560();
    //     v19 = sub_4BFF90(&v40, 8032);
    //     LOBYTE(v43) = 8;
    //     sub_EA0560();
    //     v20 = *sub_4BFF90(&v41, 8035);
    //     v21 = *v19;
    //     LOBYTE(v43) = 9;
    //     v37 = v21;
    //     v38 = sub_499AB0(&v39, v20, v21, 2 * (v18 < 0) + 43, abs(v18));
    //     v22 = sub_571590(-1);
    //     sub_47E230(v22, v38);
    //     LOBYTE(v43) = 8;
    //     if (v41)
    //         sub_47DB30((v41 - 12));
    //     LOBYTE(v43) = 1;
    //     if (v40)
    //         sub_47DB30((v40 - 12));
    // }
    // if (v2 & 0x1000000) {
    //     v23 = mplew .writeInt(v1);
    //     sub_EA0560();
    //     v24 = sub_4BFF90(&v40, 8033);
    //     LOBYTE(v43) = 10;
    //     sub_EA0560();
    //     v25 = *sub_4BFF90(&v41, 8035);
    //     v26 = *v24;
    //     LOBYTE(v43) = 11;
    //     v37 = v26;
    //     v38 = sub_499AB0(&v39, v25, v26, 2 * (v23 < 0) + 43, abs(v23));
    //     v27 = sub_571590(-1);
    //     sub_47E230(v27, v38);
    //     LOBYTE(v43) = 10;
    //     if (v41)
    //         sub_47DB30((v41 - 12));
    //     LOBYTE(v43) = 1;
    //     if (v40)
    //         sub_47DB30((v40 - 12));
    //     v2 = v42;
    // }
    // if (dword_2000000 & v2) {
    //     v28 = mplew .writeInt(v1);
    //     sub_EA0560();
    //     v29 = sub_4BFF90(&v40, 8034);
    //     LOBYTE(v43) = 12;
    //     sub_EA0560();
    //     v30 = *sub_4BFF90(&v41, 8035);
    //     v31 = *v29;
    //     LOBYTE(v43) = 13;
    //     v37 = v31;
    //     v38 = sub_499AB0(&v39, v30, v31, 2 * (v28 < 0) + 43, abs(v28));
    //     v32 = sub_571590(-1);
    //     sub_47E230(v32, v38);
    //     LOBYTE(v43) = 12;
    //     if (v41)
    //         sub_47DB30((v41 - 12));
    //     LOBYTE(v43) = 1;
    //     if (v40)
    //         sub_47DB30((v40 - 12));
    // }
    // v33 = a1;
    // v34 = 0;
    // v35 = a1;
    // while (v33 && v34 < *(v33 - 4)) {
    //     sub_4C4A70(v35, 6);
    //     ++v34;
    //     v35 += 4;
    // }
    // LOBYTE(v43) = 0;
    // sub_573050(&a1);
    // result = v39;
    // v43 = -1;
    // if (v39)
    //     result = sub_47DB30((v39 - 12));
    // return result;
}
function LimitNonCombatStatEXPMessage()//int a1
{
    var v1; // ecx@1
    var v2; // esi@2
    var char_v3; // bl@2
    var char_v4; // eax@2
    var v5; // ST10_4@2
    var char_v6; // ST0C_4@2
    var v7; // esi@4
    var char_v8; // eax@4
    var v9; // esi@6
    var char_v10; // eax@6
    var v11; // ST10_4@6
    var char_v12; // ST0C_4@6
    var v13; // esi@10
    var char_v14; // eax@10
    var v15; // ST10_4@10
    var char_v16; // ST0C_4@10
    var result; // eax@18
    var lpMultiByteStr; // [sp+Ch] [bp-18h]@1
    var v19; // [sp+10h] [bp-14h]@1
    var v20; // [sp+20h] [bp-4h]@1

    lpMultiByteStr = 0;
    v20 = 0;
    v19 = mplew.writeBuffer("v19", 8);
    // v1 = v19;
    // if (!(v19 & 0x100000)) {
    //     if (v1 & 0x200000) {
    //         sub_EA0560();
    //         v7 = sub_4BFF90(&v19, 8030);
    //         v3 = 3;
    //         LOBYTE(v20) = 3;
    //         sub_EA0560();
    //         v8 = sub_4BFF90(&a1, 8036);
    //         LOBYTE(v20) = 4;
    //     }
    //     else {
    //         if ( &_ImageBase & v19) {
    //             sub_EA0560();
    //             v9 = sub_4BFF90(&v19, 8031);
    //             v3 = 5;
    //             LOBYTE(v20) = 5;
    //             sub_EA0560();
    //             v10 = sub_4BFF90(&a1, 8036);
    //             v11 = *v9;
    //             v12 = *v10;
    //             LOBYTE(v20) = 6;
    //             sub_499AB0(&lpMultiByteStr, v12, v11);
    //             continue LABEL_14;
    //         }
    //         if (v1 & 0x800000) {
    //             sub_EA0560();
    //             v7 = sub_4BFF90(&v19, 8032);
    //             v3 = 7;
    //             LOBYTE(v20) = 7;
    //             sub_EA0560();
    //             v8 = sub_4BFF90(&a1, 8036);
    //             LOBYTE(v20) = 8;
    //         }
    //         else {
    //             if (v19 & 0x1000000) {
    //                 sub_EA0560();
    //                 v13 = sub_4BFF90(&v19, 8033);
    //                 v3 = 9;
    //                 LOBYTE(v20) = 9;
    //                 sub_EA0560();
    //                 v14 = sub_4BFF90(&a1, 8036);
    //                 v15 = *v13;
    //                 v16 = *v14;
    //                 LOBYTE(v20) = 10;
    //                 sub_499AB0(&lpMultiByteStr, v16, v15);
    //                 continue LABEL_14;
    //             }
    //             if (!(dword_2000000 & v19))
    //                 continue LABEL_18;
    //             sub_EA0560();
    //             v7 = sub_4BFF90(&v19, 8034);
    //             v3 = 11;
    //             LOBYTE(v20) = 11;
    //             sub_EA0560();
    //             v8 = sub_4BFF90(&a1, 8036);
    //             LOBYTE(v20) = 12;
    //         }
    //     }
    //     sub_499AB0(&lpMultiByteStr, *v8, *v7);
    //     continue LABEL_14;
    // }
    // sub_EA0560();
    // v2 = sub_4BFF90(&v19, 8029);
    // v3 = 1;
    // LOBYTE(v20) = 1;
    // sub_EA0560();
    // v4 = sub_4BFF90(&a1, 8036);
    // v5 = *v2;
    // v6 = *v4;
    // LOBYTE(v20) = 2;
    // sub_499AB0(&lpMultiByteStr, v6, v5);
    // LABEL_14:
    // LOBYTE(v20) = v3;
    // if (a1)
    //     sub_47DB30((a1 - 12));
    // LOBYTE(v20) = 0;
    // if (v19)
    //     sub_47DB30((v19 - 12));
    // LABEL_18:
    // result = sub_4C4B10(&lpMultiByteStr, 6, -1, -1, 0);
    // v20 = -1;
    // if (lpMultiByteStr)
    //     result = sub_47DB30(lpMultiByteStr - 3);
    // return result;
}

function IncSPMessage()//volatile var long_this,var a2
{
    var v2; // esi@1
    var v3; // edi@1
    var v4; // esi@1
    var v5; // edi@2
    var char_v6; // ST08_4@2
    var char_v7; // ST0C_4@3
    var result; // eax@6
    var long_v9; // [sp+0h] [bp-10h]@1
    var v10; // [sp+Ch] [bp-4h]@1

    // v9 = this;
    // v2 = a2;
    v3 = mplew.writeShort(a2);
    v4 = mplew.write("v4");
    // a2 = 0;
    // v10 = 0;
    // if (sub_6AE8F0(v3)) {
    //     v5 = sub_6AEA50(v3);
    //     sub_EA0560();
    //     v6 = *sub_4BFF90(&v9, 320);
    //     LOBYTE(v10) = 1;
    //     sub_499AB0(&a2, v6, v5, v4);
    // }
    // else {
    //     sub_EA0560();
    //     v7 = *sub_4BFF90(&v9, 319);
    //     LOBYTE(v10) = 2;
    //     sub_499AB0(&a2, v7, v4);
    // }
    // LOBYTE(v10) = 0;
    // if (v9)
    //     sub_47DB30(v9 - 3);
    // sub_4C4B10(&a2, 6, -1, -1, 0);
    // result = a2;
    // v10 = -1;
    // if (a2)
    //     result = sub_47DB30((a2 - 12));
    // return result;
}
function IncPOPMessage()//int a1
{
    var v1; // esi@1
    var char_v2; // eax@2
    var char_v3; // bl@2
    var result; // eax@10
    var v5; // [sp+14h] [bp-14h]@3
    var v6; // [sp+18h] [bp-10h]@2
    var v7; // [sp+24h] [bp-4h]@1

    v1 = mplew.writeInt("v1");
    // a1 = 0;
    // v7 = 0;
    // if (v1 >= 0) {
    //     sub_EA0560();
    //     v2 = sub_4BFF90(&v5, 346);
    //     v3 = 2;
    //     v7 = 2;
    // }
    // else {
    //     sub_EA0560();
    //     v2 = sub_4BFF90(&v6, 347);
    //     LOBYTE(v7) = 1;
    //     v3 = 1;
    // }
    // sub_499AB0(&a1, *v2, v1);
    // v7 = 1;
    // if (v3 & 2) {
    //     v3 &= 0xFDu;
    //     if (v5)
    //         sub_47DB30((v5 - 12));
    // }
    // v7 = 0;
    // if (v3 & 1 && v6)
    //     sub_47DB30((v6 - 12));
    // sub_4C4B10(&a1, 6, -1, -1, 0);
    // result = a1;
    // v7 = -1;
    // if (a1)
    //     result = sub_47DB30((a1 - 12));
    // return result;
}
function IncMoneyMessage()//var  this,var a2
{
    var v2; // esi@1
    var v3; // edi@1
    var v4; // eax@1
    var char_v5; // ST08_4@3
    var v6; // eax@7
    var char_v7; // eax@9
    var char_v8; // bl@9
    var result; // eax@20
    var v10; // [sp+18h] [bp-28h]@3
    var v11; // [sp+1Ch] [bp-24h]@1
    var v12; // [sp+20h] [bp-20h]@3
    var v13; // [sp+24h] [bp-1Ch]@10
    var v14; // [sp+28h] [bp-18h]@9
    var char_v15; // [sp+2Ch] [bp-14h]@5
    var v16; // [sp+30h] [bp-10h]@5
    var v17; // [sp+3Ch] [bp-4h]@1

    v11 = this;
    v2 = a2;
    v3 = mplew.writeInt("v3");
    v4 = mplew.writeInt("v4");
    a2 = 0;
    v17 = 0;
    if (v4 != -1) {
        if (v4 != 24) {
            return;
        } // continue LABEL_18;
        v10 = mplew.writeMapleAsciiString("v10");
        //     LOBYTE(v17) = 3;
        //     sub_EA0560();
        //     v5 = *sub_4BFF90(&v12, 349);
        //     LOBYTE(v17) = 4;
        //     sub_499AB0(&a2, v5, v10, v3);
        //     LOBYTE(v17) = 3;
        //     if (v12)
        //         sub_47DB30((v12 - 12));
        //     sub_CCEB90(&v15, v11[2180]);
        //     if (v16) {
        //   *(v16 + 5036) += v3;
        //         sub_7CA380(0);
        //         v16 = 0;
        //     }
        //     v6 = v10;
        //     LOBYTE(v17) = 0;
        // continue LABEL_16;
    }
    // if (v3 <= 0) {
    //     sub_EA0560();
    //     v7 = sub_4BFF90(&v13, 353);
    //     v8 = 2;
    //     v17 = 2;
    // }
    // else {
    //     sub_EA0560();
    //     v7 = sub_4BFF90(&v14, 348);
    //     LOBYTE(v17) = 1;
    //     v8 = 1;
    // }
    // sub_499AB0(&a2, *v7, v3);
    // v17 = 1;
    // if (v8 & 2) {
    //     v8 &= 0xFDu;
    //     if (v13)
    //         sub_47DB30((v13 - 12));
    // }
    // v17 = 0;
    // if (v8 & 1) {
    //     v6 = v14;
    //     LABEL_16:
    //     if (v6)
    //         sub_47DB30((v6 - 12));
    // }
    // LABEL_18:
    // sub_4C4B10(&a2, 6, -1, -1, 0);
    // if (v3 > 0)
    //     sub_198A740(v3);
    // result = a2;
    // v17 = -1;
    // if (a2)
    //     result = sub_47DB30((a2 - 12));
    return result;
}
function IncPvPPointMessage()//int a1
{
    var v1; // edi@1
    var v2; // esi@1
    var v3; // edi@1
    var char_v4; // eax@3
    var char_v5; // bl@3
    var char_v6; // ST10_4@10
    var char_v7; // ST0C_4@14
    var result; // eax@19
    var v9; // [sp+18h] [bp-18h]@1
    var v10; // [sp+1Ch] [bp-14h]@4
    var v11; // [sp+20h] [bp-10h]@3
    var v12; // [sp+2Ch] [bp-4h]@1

    v1 = a1;
    v2 = mplew.writeInt("v2");
    v3 = mplew.writeInt("v3");
    // a1 = 0;
    // v12 = 0;
    // v9 = 0;
    // LOBYTE(v12) = 1;
    // if (!v2) {
    //     sub_EA0560();
    //     v6 = *sub_4BFF90(&v11, 5271);
    //     LOBYTE(v12) = 4;
    //     sub_499AB0(&a1, v6);
    //     LOBYTE(v12) = 1;
    //     LABEL_11:
    //     if (v11)
    //         sub_47DB30((v11 - 12));
    //     continue LABEL_13;
    // }
    // if (v2 <= 0) {
    //     sub_EA0560();
    //     v4 = sub_4BFF90(&v10, 5269);
    //     v12 = 3;
    //     v5 = 2;
    // }
    // else {
    //     sub_EA0560();
    //     v4 = sub_4BFF90(&v11, 5268);
    //     LOBYTE(v12) = 2;
    //     v5 = 1;
    // }
    // sub_499AB0(&a1, *v4, v2);
    // v12 = 2;
    // if (v5 & 2) {
    //     v5 &= 0xFDu;
    //     if (v10)
    //         sub_47DB30((v10 - 12));
    // }
    // v12 = 1;
    // if (v5 & 1)
    //     continue LABEL_11;
    // LABEL_13:
    // if (v3) {
    //     sub_EA0560();
    //     v7 = *sub_4BFF90(&v11, 5270);
    //     LOBYTE(v12) = 5;
    //     sub_499AB0(&v9, v7, v3);
    //     LOBYTE(v12) = 1;
    //     if (v11)
    //         sub_47DB30((v11 - 12));
    //     sub_4C4B10(&v9, 6, -1, -1, 0);
    // }
    // sub_4C4B10(&a1, 6, -1, -1, 0);
    // LOBYTE(v12) = 0;
    // if (v9)
    //     sub_47DB30((v9 - 12));
    // result = a1;
    // v12 = -1;
    // if (a1)
    //     result = sub_47DB30((a1 - 12));
    return result;
}
function PvPItemUseMessage()//volatile var long_this,var a2
{
    var v2; // esi@1
    var result; // eax@3
    var long_v4; // [sp+0h] [bp-10h]@1
    var v5; // [sp+Ch] [bp-4h]@1

    // v4 = this;
    // v2 = a2;
    v4 = mplew.writeMapleAsciiString("v4");
    v5 = 0;
    a2 = mplew.writeMapleAsciiString("a2");
    // LOBYTE(v5) = 1;
    // sub_4C4B10(&v4, 6, -1, -1, 0);
    // sub_4C4B10(&a2, 6, -1, -1, 0);
    // LOBYTE(v5) = 0;
    // if (a2)
    //     sub_47DB30((a2 - 12));
    // result = v4;
    // v5 = -1;
    // if (v4)
    //     result = sub_47DB30(v4 - 3);
    // return result;
}
function sub_19A4B90()//volatile var long_this,var a2
{
    var v2; // esi@1
    var char_v3; // ST0C_4@1
    var result; // eax@3
    var long_v5; // [sp+0h] [bp-10h]@1
    var v6; // [sp+Ch] [bp-4h]@1

    // v5 = this;
    v2 = mplew.writeInt("v2");
    // a2 = 0;
    // v6 = 0;
    // sub_EA0560();
    // v3 = *sub_4BFF90(&v5, 10377);
    // LOBYTE(v6) = 1;
    // sub_499AB0(&a2, v3, v2);
    // LOBYTE(v6) = 0;
    // if (v5)
    //     sub_47DB30(v5 - 3);
    // sub_4C4B10(&a2, 6, -1, -1, 0);
    // result = a2;
    // v6 = -1;
    // if (a2)
    //     result = sub_47DB30((a2 - 12));
    // return result;
}
function IncGPMessage()//int a1
{
    var v1; // esi@1
    var char_v2; // eax@2
    var char_v3; // bl@2
    var result; // eax@10
    var v5; // [sp+14h] [bp-14h]@3
    var v6; // [sp+18h] [bp-10h]@2
    var v7; // [sp+24h] [bp-4h]@1

    v1 = mplew.writeInt("v1");
    // a1 = 0;
    // v7 = 0;
    // if (v1 <= 0) {
    //     sub_EA0560();
    //     v2 = sub_4BFF90(&v5, 5264);
    //     v3 = 2;
    //     v7 = 2;
    // }
    // else {
    //     sub_EA0560();
    //     v2 = sub_4BFF90(&v6, 5263);
    //     LOBYTE(v7) = 1;
    //     v3 = 1;
    // }
    // sub_499AB0(&a1, *v2, v1);
    // v7 = 1;
    // if (v3 & 2) {
    //     v3 &= 0xFDu;
    //     if (v5)
    //         sub_47DB30((v5 - 12));
    // }
    // v7 = 0;
    // if (v3 & 1 && v6)
    //     sub_47DB30((v6 - 12));
    // sub_4C4B10(&a1, 6, -1, -1, 0);
    // result = a1;
    // v7 = -1;
    // if (a1)
    //     result = sub_47DB30((a1 - 12));
    // return result;
}
function IncCommitmentMessage()//int a1
{
    var v1; // esi@1
    var v2; // edi@1
    var v3; // eax@1
    var char_v4; // eax@3
    var char_v5; // bl@3
    var result; // eax@15
    var v7; // [sp+18h] [bp-18h]@5
    var v8; // [sp+1Ch] [bp-14h]@4
    var v9; // [sp+20h] [bp-10h]@3
    var v10; // [sp+2Ch] [bp-4h]@1

    v1 = a1;
    v2 = mplew.writeInt("v2");
    v3 = mplew.write("v3");
    // a1 = 0;
    // v10 = 0;
    // if (v2 <= 0) {
    //     sub_EA0560();
    //     v4 = sub_4BFF90(&v7, 5266);
    //     v10 = 3;
    //     v5 = 4;
    // }
    // else if (v3) {
    //     sub_EA0560();
    //     v4 = sub_4BFF90(&v9, 5267);
    //     LOBYTE(v10) = 1;
    //     v5 = 1;
    // }
    // else {
    //     sub_EA0560();
    //     v4 = sub_4BFF90(&v8, 5265);
    //     v5 = 2;
    //     v10 = 2;
    // }
    // sub_499AB0(&a1, *v4, v2);
    // v10 = 2;
    // if (v5 & 4) {
    //     v5 &= 0xFBu;
    //     if (v7)
    //         sub_47DB30((v7 - 12));
    // }
    // v10 = 1;
    // if (v5 & 2) {
    //     v5 &= 0xFDu;
    //     if (v8)
    //         sub_47DB30((v8 - 12));
    // }
    // v10 = 0;
    // if (v5 & 1 && v9)
    //     sub_47DB30((v9 - 12));
    // sub_4C4B10(&a1, 6, -1, -1, 0);
    // result = a1;
    // v10 = -1;
    // if (a1)
    //     result = sub_47DB30((a1 - 12));
    // return result;
}
function GiveBuffMessage()//int a1
{
    var v1; // eax@1
    var result; // eax@1

    v1 = mplew.writeInt("v1");
    // sub_A11CE0(&a1, v1);
    // sub_4C4B10(&a1, 6, -1, -1, 0);
    // result = a1;
    // if (a1)
    //     result = sub_47DB30((a1 - 12));
    // return result;
}
function ItemProtectExpireMessage()//int iPacketa
{
    var result; // eax@1
    var v2; // edi@1
    var v3; // eax@2
    var char_v4; // eax@4
    var v5; // esi@6
    var v6; // [sp-8h] [bp-38h]@4
    var v7; // [sp-4h] [bp-34h]@4
    var lpMultiByteStr; // [sp+10h] [bp-20h]@4
    var v9; // [sp+14h] [bp-1Ch]@2
    var v10; // [sp+18h] [bp-18h]@4
    var v11; // [sp+1Ch] [bp-14h]@1
    var v12; // [sp+2Ch] [bp-4h]@2

    result = mplew.write("result");
    v2 = 0;
    v11 = result;
    if (result > 0) {
        while (1) {
            v3 = mplew.writeInt("v3");
            // sub_A11A20(&v9, v3);
            // result = v9;
            // v12 = 0;

            // if (!v9 || !*v9)
            //     break;

            // lpMultiByteStr = 0;
            // v7 = 4555;
            // v6 = &v10;
            // LOBYTE(v12) = 1;
            // sub_EA0560();
            // v4 = *sub_4BFF90(v6, v7);
            // v7 = v9;
            // LOBYTE(v12) = 2;
            // sub_499AB0(&lpMultiByteStr, v4, v9);
            // LOBYTE(v12) = 1;
            // if (v10)
            //     sub_47DB30((v10 - 12));
            // v5 = lpMultiByteStr;
            // sub_4C4A70(&lpMultiByteStr, 11);
            // LOBYTE(v12) = 0;
            // if (v5)
            //     sub_47DB30(v5 - 3);
            // result = v9;
            // v12 = -1;
            // if (v9)
            //     result = sub_47DB30(v9 - 3);
            if (++v2 >= v11)
                return result;
        }
        // v12 = -1;
        // if (v9)
        //     result = sub_47DB30(v9 - 3);
    }
    return result;
}
function ItemExpireReplaceMessage()//LPCSTR lpMultiByteStr
{
    var v1; // edi@1
    var char_result; // eax@1
    var v3; // ebp@2
    var bool_v4; // zf@3
    var v5; // [sp+20h] [bp-4h]@3

    v1 = lpMultiByteStr;
    result = mplew.write("result");
    if (result > 0) {
        v3 = result;
        do {
            lpMultiByteStr = mplew.writeMapleAsciiString("lpMultiByteStr");
            // result = lpMultiByteStr;
            // v5 = 0;
            // v4 = lpMultiByteStr == 0;
            // if (lpMultiByteStr) {
            //     if ( *lpMultiByteStr) {
            //         sub_4C4A70(&lpMultiByteStr, 11);
            //         result = lpMultiByteStr;
            //     }
            //     v4 = result == 0;
            // }
            // v5 = -1;
            // if (!v4)
            //     result = sub_47DB30(result - 3);
            --v3;
        }
        while (v3);
    }
    return result;
}
function ItemAbilityTimeLimitedExpireMessage()//int iPacketa
{
    var result; // eax@1
    var v2; // edi@1
    var v3; // eax@2
    var char_v4; // eax@4
    var v5; // esi@6
    var v6; // [sp-8h] [bp-38h]@4
    var v7; // [sp-4h] [bp-34h]@4
    var lpMultiByteStr; // [sp+10h] [bp-20h]@4
    var v9; // [sp+14h] [bp-1Ch]@2
    var v10; // [sp+18h] [bp-18h]@4
    var v11; // [sp+1Ch] [bp-14h]@1
    var v12; // [sp+2Ch] [bp-4h]@2

    result = mplew.write("result");
    v2 = 0;
    v11 = result;
    if (result > 0) {
        while (1) {
            v3 = mplew.writeInt("v3");
            // sub_A11A20(&v9, v3);
            // result = v9;
            // v12 = 0;
            // if (!v9 || !*v9)
            //     break;
            // lpMultiByteStr = 0;
            // v7 = 4554;
            // v6 = &v10;
            // LOBYTE(v12) = 1;
            // sub_EA0560();
            // v4 = *sub_4BFF90(v6, v7);
            // v7 = v9;
            // LOBYTE(v12) = 2;
            // sub_499AB0(&lpMultiByteStr, v4, v9);
            // LOBYTE(v12) = 1;
            // if (v10)
            //     sub_47DB30((v10 - 12));
            // v5 = lpMultiByteStr;
            // sub_4C4A70(&lpMultiByteStr, 11);
            // LOBYTE(v12) = 0;
            // if (v5)
            //     sub_47DB30(v5 - 3);
            // result = v9;
            // v12 = -1;
            // if (v9)
            //     result = sub_47DB30(v9 - 3);
            if (++v2 >= v11)
                return result;
        }
        // v12 = -1;
        // if (v9)
        //     result = sub_47DB30(v9 - 3);
    }
    return result;
}

function SkillExpireMessage()//int iPacketa
{
    var iPacketa2; // edi@1
    var result; // eax@1
    var v3; // eax@3
    var v4; // esi@3
    var char_v5; // eax@6
    var v6; // ST10_4@6
    var char_v7; // ST0C_4@6
    var v8; // [sp+10h] [bp-14h]@2
    var v9; // [sp+14h] [bp-10h]@6
    var v10; // [sp+20h] [bp-4h]@6

    // iPacketa2 = iPacketa;
    result = mplew.write("result");
    if (result > 0) {
        v8 = result;
        do {
            v3 = mplew.writeInt("v3");
            // result = sub_E26430(v3);
            // v4 = result;
            // if (result) {
            //     result = *(result + 8);
            //     if (result) {
            //         if ( *result) {
            //             iPacketa = 0;
            //             v10 = 0;
            //             sub_EA0560();
            //             v5 = sub_4BFF90(&v9, 6704);
            //             v6 = *(v4 + 8);
            //             v7 = *v5;
            //             LOBYTE(v10) = 1;
            //             sub_499AB0(&iPacketa, v7, v6);
            //             LOBYTE(v10) = 0;
            //             if (v9)
            //                 sub_47DB30((v9 - 12));
            //             sub_4C4B10(&iPacketa, 11, -1, -1, 0);
            //             result = iPacketa;
            //             v10 = -1;
            //             if (iPacketa)
            //                 result = sub_47DB30((iPacketa - 12));
            //         }
            //     }
            // }
            --v8;
        }
        while (v8);
    }
    return result;
}
function AndroidMachineHeartAlsetMessage()//int iPacketa
{
    // var char_v1; // ST10_4@1
    // var result; // eax@3
    // var v3; // [sp+4h] [bp-14h]@1
    // var v4; // [sp+8h] [bp-10h]@1
    // var v5; // [sp+14h] [bp-4h]@1

    // v3 = 0;
    // v5 = 0;
    // sub_EA0560();
    // v1 = *sub_4BFF90(&v4, 6707);
    // LOBYTE(v5) = 1;
    // sub_499AB0(&v3, v1);
    // LOBYTE(v5) = 0;
    // if (v4)
    //     sub_47DB30((v4 - 12));
    // sub_4C4B10(&v3, 11, -1, -1, 0);
    // result = v3;
    // v5 = -1;
    // if (v3)
    //     result = sub_47DB30((v3 - 12));
    return result;
}
function IncFatigueByRestMessage()//int iPacketa
{
    // var char_v1; // ST10_4@1
    // var result; // eax@3
    // var v3; // [sp+4h] [bp-14h]@1
    // var v4; // [sp+8h] [bp-10h]@1
    // var v5; // [sp+14h] [bp-4h]@1

    // v3 = 0;
    // v5 = 0;
    // sub_EA0560();
    // v1 = *sub_4BFF90(&v4, 6708);
    // LOBYTE(v5) = 1;
    // sub_499AB0(&v3, v1);
    // LOBYTE(v5) = 0;
    // if (v4)
    //     sub_47DB30((v4 - 12));
    // sub_4C4B10(&v3, 11, -1, -1, 0);
    // result = v3;
    // v5 = -1;
    // if (v3)
    //     result = sub_47DB30((v3 - 12));
    // return result;
}
function WeddingPortalError()//int iPacketa
{
    var result; // eax@1
    var v2; // ecx@1
    var v3; // eax@2
    var v4; // [sp-24h] [bp-24h]@3
    var v5; // [sp-20h] [bp-20h]@2
    var v6; // [sp-1Ch] [bp-1Ch]@2
    var v7; // [sp-18h] [bp-18h]@2
    var v8; // [sp-14h] [bp-14h]@2
    var v9; // [sp-10h] [bp-10h]@2
    var v10; // [sp-Ch] [bp-Ch]@2
    var v11; // [sp-8h] [bp-8h]@2
    var v12; // [sp-4h] [bp-4h]@2

    result = mplew.write("result");
    // switch (result) {
    //     case 0:
    //         v12 = 0;
    //         v11 = 0;
    //         v10 = 0;
    //         v9 = 0;
    //         v8 = 0;
    //         v7 = 0;
    //         v6 = v2;
    //         v3 = &v6;
    //         v5 = 8433;
    //         continue LABEL_6;
    //     case 1:
    //         v12 = 0;
    //         v11 = 0;
    //         v10 = 0;
    //         v9 = 0;
    //         v8 = 0;
    //         v7 = 0;
    //         v6 = v2;
    //         v5 = 8434;
    //         v4 = &v6;
    //         continue LABEL_7;
    //     case 2:
    //         v12 = 0;
    //         v11 = 0;
    //         v10 = 0;
    //         v9 = 0;
    //         v8 = 0;
    //         v7 = 0;
    //         v6 = v2;
    //         v5 = 8431;
    //         v4 = &v6;
    //         continue LABEL_7;
    //     case 3:
    //         v12 = 0;
    //         v11 = 0;
    //         v10 = 0;
    //         v9 = 0;
    //         v8 = 0;
    //         v7 = 0;
    //         v6 = v2;
    //         v3 = &v6;
    //         v5 = 8430;
    //         LABEL_6:
    //         v4 = v3;
    //         LABEL_7:
    //         sub_EA0560();
    //         sub_4BFF90(v4, v5);
    //         result = sub_183FEC0(v6, v7, v8, v9, v10, v11, v12);
    //         break;
    //     default:
    //         return result;
    // }
    return result;
}

function IncHardCoreExpMessage()//int iPacketa
{
    var iPacketa2; // esi@1
    var v2; // edi@1
    var v3; // eax@1
    var char_v4; // esi@1
    var v5; // ebp@1
    var char_v6; // ST08_4@1
    var char_v7; // ST08_4@4
    var v8; // edi@7
    var result; // eax@7
    var lpMultiByteStr; // [sp+10h] [bp-14h]@1
    var v11; // [sp+14h] [bp-10h]@1
    var v12; // [sp+20h] [bp-4h]@1

    // iPacketa2 = iPacketa;
    v2 = mplew.writeInt("v2");
    v3 = mplew.writeInt("v3");
    // v4 = 0;
    // v5 = v3;
    // lpMultiByteStr = 0;
    // v12 = 0;
    // iPacketa = 0;
    // LOBYTE(v12) = 1;
    // sub_EA0560();
    // v6 = *sub_4BFF90(&v11, 317);
    // LOBYTE(v12) = 2;
    // sub_499AB0(&lpMultiByteStr, v6, v2);
    // LOBYTE(v12) = 1;
    // if (v11)
    //     sub_47DB30((v11 - 12));
    // if (v5) {
    //     sub_EA0560();
    //     v7 = *sub_4BFF90(&v11, 334);
    //     LOBYTE(v12) = 3;
    //     sub_499AB0(&iPacketa, v7, v5);
    //     LOBYTE(v12) = 1;
    //     if (v11)
    //         sub_47DB30((v11 - 12));
    //     v4 = iPacketa;
    // }
    // v8 = lpMultiByteStr;
    // result = sub_139A4C0(lpMultiByteStr, 106, 108, 5000);
    // if (v4 && *v4)
    //     result = sub_139A4C0(v4, 106, 108, 5000);
    // LOBYTE(v12) = 0;
    // if (v4)
    //     result = sub_47DB30(v4 - 3);
    // v12 = -1;
    // if (v8)
    //     result = sub_47DB30(v8 - 3);
    // return result;
}
function NoticeAutoLineChanged()//int * a1,var a2,var iPacketa
{
    var result; // eax@1
    var v4; // [sp-8h] [bp-18h]@1
    var v5; // [sp-4h] [bp-14h]@1
    var v6; // [sp+0h] [bp-10h]@1
    var v7; // [sp+Ch] [bp-4h]@1

    // v6 = a1;
    // v5 = &v6 ^ 0x561C8DD1;
    mplew.writeMapleAsciiString("iPacketa");
    // v6 = &v4;
    // v7 = 0;
    // v4 = 0;
    // sub_47E230(&v4, &iPacketa);
    // sub_5D8F30(v4);
    // result = iPacketa;
    // v7 = -1;
    // if (iPacketa)
    //     result = sub_47DB30((iPacketa - 12));
    // return result;
}
function EntryRecordMessage()//int * iPacketa
{
    var v1; // esi@1
    var result; // eax@1
    var v3; // ecx@1
    var char_v4; // di@2
    var char_v5; // bp@2
    var char_v6; // si@2
    var v7; // ebx@2
    var v8; // eax@3
    var char_v9; // eax@5
    var v10; // eax@5
    var v11; // edi@16
    var v12; // ebp@16
    var v13; // esi@16
    var char_v14; // eax@18
    var char_v15; // eax@18
    var v16; // eax@18
    var v17; // [sp-1Ch] [bp-5Ch]@12
    var v18; // [sp-18h] [bp-58h]@12
    var v19; // [sp-14h] [bp-54h]@12
    var v20; // [sp-10h] [bp-50h]@12
    var v21; // [sp-Ch] [bp-4Ch]@12
    var v22; // [sp-8h] [bp-48h]@12
    var v23; // [sp-4h] [bp-44h]@12
    var char_v24; // [sp+17h] [bp-29h]@1
    var v25; // [sp+18h] [bp-28h]@16
    var v26; // [sp+1Ch] [bp-24h]@5
    var v27; // [sp+20h] [bp-20h]@18
    var v28; // [sp+24h] [bp-1Ch]@5
    var v29; // [sp+28h] [bp-18h]@18
    var char_v30; // [sp+2Ch] [bp-14h]@2
    var v31; // [sp+3Ch] [bp-4h]@3

    v1 = iPacketa;
    v24 = 0;
    result = mplew.write("result");
    switch (result) {
        case 0:
            v4 = mplew.writeShort(v1);
            v5 = mplew.writeInt("v5");
            v6 = mplew.writeInt("v6");
            // v7 = *(sub_1910D40(&v30) + 4);
            // sub_4C3290(&v30);
            // result = sub_734BD0(v4, v5, v6);
            break;
        case 1:
            v8 = mplew.writeInt("v8");
            // sub_A11A20(&iPacketa, v8);
            // result = iPacketa;
            // v31 = 0;
            // if (iPacketa && *iPacketa) {
            //     sub_EA0560();
            //     v26 = 0;
            //     v9 = *sub_4BFF90(&v28, 8975);
            //     LOBYTE(v31) = 2;
            //     v10 = sub_499AB0(&v26, v9, iPacketa);
            //     sub_4C4B10(v10, 6, -1, -1, 0);
            //     LOBYTE(v31) = 1;
            //     if (v26)
            //         sub_47DB30((v26 - 12));
            //     LOBYTE(v31) = 0;
            //     if (v28)
            //         sub_47DB30((v28 - 12));
            //     result = iPacketa;
            // }
            // v31 = -1;
            // if (result)
            //     result = sub_47DB30(result - 3);
            break;
        case 3:
            // v23 = 0;
            // v22 = 0;
            // v21 = 0;
            // v20 = 0;
            // v19 = 0;
            // v18 = 0;
            // v17 = v3;
            // iPacketa = &v17;
            // sub_EA0560();
            // sub_4BFF90(&v17, 8968);
            // result = sub_183FEC0(v17, v18, v19, v20, v21, v22, v23);
            break;
        case 4:
            // v23 = 0;
            // v22 = 0;
            // v21 = 0;
            // v20 = 0;
            // v19 = 0;
            // v18 = 0;
            // v17 = v3;
            // iPacketa = &v17;
            // sub_EA0560();
            // sub_4BFF90(&v17, 8969);
            // result = sub_183FEC0(v17, v18, v19, v20, v21, v22, v23);
            break;
        case 5:
            // v23 = 0;
            // v22 = 0;
            // v21 = 0;
            // v20 = 0;
            // v19 = 0;
            // v18 = 0;
            // v17 = v3;
            // iPacketa = &v17;
            // sub_EA0560();
            // sub_4BFF90(&v17, 8970);
            // result = sub_183FEC0(v17, v18, v19, v20, v21, v22, v23);
            break;
        case 2:
            // v23 = 0;
            // v22 = 0;
            // v21 = 0;
            // v20 = 0;
            // v19 = 0;
            // v18 = 0;
            // v17 = v3;
            // iPacketa = &v17;
            // sub_EA0560();
            // sub_4BFF90(&v17, 8939);
            // sub_183FEC0(v17, v18, v19, v20, v21, v22, v23);
            // result = sub_1934640(87);
            break;
        case 6:
            v11 = mplew.writeInt("v11");
            v12 = mplew.writeInt("v12");
            v13 = mplew.writeInt("v13");
            // sub_A11A20(&v25, v11);
            // v31 = 3;
            // if (v25 && *v25) {
            //     sub_EA0560();
            //     v14 = sub_4BFF90(&v29, 8976);
            //     v27 = 0;
            //     v15 = *v14;
            //     LOBYTE(v31) = 5;
            //     v16 = sub_499AB0(&v27, v15, v25, v12, v13);
            //     sub_4C4B10(v16, 6, -1, -1, 0);
            //     LOBYTE(v31) = 4;
            //     if (v27)
            //         sub_47DB30((v27 - 12));
            //     LOBYTE(v31) = 3;
            //     if (v29)
            //         sub_47DB30((v29 - 12));
            // }
            // sub_194DE90(87, -1, 0, 0, 0);
            // result = v25;
            // v31 = -1;
            // if (v25)
            //     result = sub_47DB30(v25 - 3);
            break;
        default:
            return result;
    }
    return result;
}

function CoreInvenOperationMessage()//int iPacketa
{
    var iPacketa2; // esi@1
    var v2; // al@1
    var result; // eax@1
    var v4; // edi@2
    var v5; // esi@2
    var char_v6; // eax@3
    var char_v7; // ST08_4@3
    var v8; // eax@3
    var v9; // eax@5
    var char_v10; // eax@6
    var char_v11; // ST0C_4@6
    var v12; // eax@6
    var v13; // eax@11
    var v14; // eax@15
    var v15; // eax@15
    var v16; // eax@16
    var v17; // edi@17
    var v18; // esi@17
    var char_v19; // eax@18
    var char_v20; // ST08_4@18
    var v21; // eax@18
    var v22; // eax@20
    var char_v23; // eax@21
    var char_v24; // ST0C_4@21
    var v25; // eax@21
    var v26; // eax@27
    var v27; // eax@28
    var v28; // [sp+10h] [bp-48h]@2
    var v29; // [sp+14h] [bp-44h]@17
    var v30; // [sp+18h] [bp-40h]@3
    var v31; // [sp+1Ch] [bp-3Ch]@6
    var v32; // [sp+20h] [bp-38h]@18
    var v33; // [sp+24h] [bp-34h]@21
    var v34; // [sp+28h] [bp-30h]@3
    var v35; // [sp+2Ch] [bp-2Ch]@6
    var v36; // [sp+30h] [bp-28h]@11
    var v37; // [sp+34h] [bp-24h]@15
    var v38; // [sp+38h] [bp-20h]@16
    var v39; // [sp+3Ch] [bp-1Ch]@18
    var v40; // [sp+40h] [bp-18h]@21
    var v41; // [sp+44h] [bp-14h]@27
    var v42; // [sp+48h] [bp-10h]@28
    var v43; // [sp+54h] [bp-4h]@1

    // iPacketa2 = iPacketa;
    v2 = mplew.write("v2");
    // iPacketa = 0;
    result = v2 - 22;
    v43 = 0;
    switch (result) {
        case 0:
            v4 = mplew.writeInt("v4");
            v5 = mplew.writeInt("v5");
        // sub_A11A20(&v28, v4);
        // LOBYTE(v43) = 1;
        // if (v5 <= 1) {
        //     sub_EA0560();
        //     v10 = sub_4BFF90(&v35, 9102);
        //     v31 = 0;
        //     v11 = *v10;
        //     LOBYTE(v43) = 5;
        //     v12 = sub_499AB0(&v31, v11, v28);
        //     sub_47E230(&iPacketa, v12);
        //     LOBYTE(v43) = 4;
        //     if (v31)
        //         sub_47DB30((v31 - 12));
        //     v9 = v35;
        // }
        // else {
        //     sub_EA0560();
        //     v6 = sub_4BFF90(&v34, 9104);
        //     v30 = 0;
        //     v7 = *v6;
        //     LOBYTE(v43) = 3;
        //     v8 = sub_499AB0(&v30, v7, v28, v5);
        //     sub_47E230(&iPacketa, v8);
        //     LOBYTE(v43) = 2;
        //     if (v30)
        //         sub_47DB30((v30 - 12));
        //     v9 = v34;
        // }
        // LOBYTE(v43) = 1;
        // if (v9)
        //     sub_47DB30((v9 - 12));
        // sub_4C4B10(&iPacketa, 6, -1, -1, 0);
        // sub_EA0560();
        // v13 = sub_4BFF90(&v36, 9103);
        // LOBYTE(v43) = 6;
        // sub_4C4B10(v13, 6, -1, -1, 0);
        // LOBYTE(v43) = 1;
        // if (v36)
        //     sub_47DB30((v36 - 12));
        // LOBYTE(v43) = 0;
        // if (v28)
        //     sub_47DB30((v28 - 12));
        // continue LABEL_32;
        case 1:
        // sub_EA0560();
        // v14 = sub_4BFF90(&v37, 9101);
        // LOBYTE(v43) = 7;
        // sub_47E230(&iPacketa, v14);
        // v15 = v37;
        // continue LABEL_29;
        case 2:
        // sub_EA0560();
        // v16 = sub_4BFF90(&v38, 9098);
        // LOBYTE(v43) = 8;
        // sub_47E230(&iPacketa, v16);
        // v15 = v38;
        // continue LABEL_29;
        case 3:
            v17 = mplew.writeInt("v17");
            v18 = mplew.writeInt("v18");
        // sub_A11A20(&v29, v17);
        // LOBYTE(v43) = 9;
        // if (v18 <= 1) {
        //     sub_EA0560();
        //     v23 = sub_4BFF90(&v40, 9105);
        //     v33 = 0;
        //     v24 = *v23;
        //     LOBYTE(v43) = 13;
        //     v25 = sub_499AB0(&v33, v24, v29);
        //     sub_47E230(&iPacketa, v25);
        //     LOBYTE(v43) = 12;
        //     if (v33)
        //         sub_47DB30((v33 - 12));
        //     v22 = v40;
        // }
        // else {
        //     sub_EA0560();
        //     v19 = sub_4BFF90(&v39, 9106);
        //     v32 = 0;
        //     v20 = *v19;
        //     LOBYTE(v43) = 11;
        //     v21 = sub_499AB0(&v32, v20, v29, v18);
        //     sub_47E230(&iPacketa, v21);
        //     LOBYTE(v43) = 10;
        //     if (v32)
        //         sub_47DB30((v32 - 12));
        //     v22 = v39;
        // }
        // LOBYTE(v43) = 9;
        // if (v22)
        //     sub_47DB30((v22 - 12));
        // v15 = v29;
        // continue LABEL_29;
        case 4:
        // sub_EA0560();
        // v26 = sub_4BFF90(&v41, 9099);
        // LOBYTE(v43) = 14;
        // sub_47E230(&iPacketa, v26);
        // v15 = v41;
        // continue LABEL_29;
        case 5:
            // sub_EA0560();
            // v27 = sub_4BFF90(&v42, 9100);
            // LOBYTE(v43) = 15;
            // sub_47E230(&iPacketa, v27);
            // v15 = v42;
            // LABEL_29:
            // LOBYTE(v43) = 0;
            // if (v15)
            //     sub_47DB30((v15 - 12));
            // sub_4C4B10(&iPacketa, 6, -1, -1, 0);
            // LABEL_32:
            // result = iPacketa;
            // v43 = -1;
            // if (iPacketa)
            //     result = sub_47DB30((iPacketa - 12));
            break;
        default:
            return result;
    }
    return result;
}
function BlockedBehaviorMessage()//int iPacketa
{
    var v1; // eax@1
    var v2; // eax@2
    var result; // eax@3
    var char_v4; // ST10_4@4
    var v5; // eax@4
    var char_v6; // ST10_4@5
    var char_v7; // ST10_4@6
    var v8; // [sp+8h] [bp-18h]@4
    var v9; // [sp+Ch] [bp-14h]@5
    var v10; // [sp+10h] [bp-10h]@6
    var v11; // [sp+1Ch] [bp-4h]@1

    v1 = mplew.writeInt("v1");
    // iPacketa = 0;
    // v11 = 0;
    // if (v1) {
    //     v2 = v1 - 1;
    //     if (v2) {
    //         result = v2 - 1;
    //         if (result)
    //             return result;
    //         sub_EA0560();
    //         v4 = *sub_4BFF90(&v8, 11602);
    //         LOBYTE(v11) = 2;
    //         sub_499AB0(&iPacketa, v4);
    //         v5 = v8;
    //     }
    //     else {
    //         sub_EA0560();
    //         v6 = *sub_4BFF90(&v9, 11601);
    //         LOBYTE(v11) = 3;
    //         sub_499AB0(&iPacketa, v6);
    //         v5 = v9;
    //     }
    // }
    // else {
    //     sub_EA0560();
    //     v7 = *sub_4BFF90(&v10, 11600);
    //     LOBYTE(v11) = 1;
    //     sub_499AB0(&iPacketa, v7);
    //     v5 = v10;
    // }
    // LOBYTE(v11) = 0;
    // if (v5)
    //     sub_47DB30((v5 - 12));
    // sub_4C4B10(&iPacketa, 11, -1, -1, 0);
    // result = iPacketa;
    // v11 = -1;
    // if (iPacketa)
    //     result = sub_47DB30((iPacketa - 12));
    return result;
}
function IncWPMessage()//volatile var long_this,var lpMultiByteStr
{
    var v2; // esi@1
    var char_v3; // ST08_4@1
    var v4; // esi@3
    var result; // eax@3
    var long_v6; // [sp+0h] [bp-10h]@1
    var v7; // [sp+Ch] [bp-4h]@1

    v6 = this;
    v2 = mplew.writeInt("v2");
    // lpMultiByteStr = 0;
    // v7 = 0;
    // sub_EA0560();
    // v3 = *sub_4BFF90(&v6, 11746);
    // LOBYTE(v7) = 1;
    // sub_499AB0(&lpMultiByteStr, v3, v2);
    // LOBYTE(v7) = 0;
    // if (v6)
    //     sub_47DB30(v6 - 3);
    // v4 = lpMultiByteStr;
    // result = sub_139A4C0(lpMultiByteStr, 4, 2, 0);
    // v7 = -1;
    // if (v4)
    //     result = sub_47DB30(v4 - 3);
    return result;
}
function MaxWPMessage()//int iPacketa
{
    // var char_v1; // ST0C_4@1
    // var v2; // esi@3
    // var result; // eax@3
    // var lpMultiByteStr; // [sp+8h] [bp-14h]@1
    // var v5; // [sp+Ch] [bp-10h]@1
    // var v6; // [sp+18h] [bp-4h]@1

    // lpMultiByteStr = 0;
    // v6 = 0;
    // sub_EA0560();
    // v1 = *sub_4BFF90(&v5, 12073);
    // LOBYTE(v6) = 1;
    // sub_499AB0(&lpMultiByteStr, v1);
    // LOBYTE(v6) = 0;
    // if (v5)
    //     sub_47DB30((v5 - 12));
    // v2 = lpMultiByteStr;
    // result = sub_139A4C0(lpMultiByteStr, 4, 2, 0);
    // v6 = -1;
    // if (v2)
    //     result = sub_47DB30(v2 - 3);
    // return result;
}
function StylishKillMessage()//int iPacketa
{
    var v1; // eax@1
    var result; // eax@2
    var v3; // edi@3
    var v4; // eax@3
    var v5; // edi@4
    var v6; // edx@4
    var v7; // ebp@4
    var v8; // esi@4

    v1 = mplew.write("v1");
    if (v1) {
        result = v1 - 1;
        if (!result) {
            v3 = mplew.writeInt("v3");
            v4 = mplew.writeInt("v4");
            // sub_198FE00(v3, v4);
            // result = sub_197D800(v3);
        }
    }
    else {
        // v5 = sub_570BC0(iPacketa);
        // v7 = v6;
        v8 = mplew.writeInt("v8");
        // sub_198FBD0(v5, v7, v8);
        // result = sub_197D940(v8);
    }
    return result;
}
function ExpiredCashItemResultMessage()//int iPacketa
{
    var char_v1; // eax@1
    var v2; // eax@1
    var result; // eax@5
    var v4; // [sp-1Ch] [bp-3Ch]@5
    var v5; // [sp-18h] [bp-38h]@5
    var v6; // [sp-14h] [bp-34h]@5
    var v7; // [sp-10h] [bp-30h]@5
    var v8; // [sp-Ch] [bp-2Ch]@5
    var v9; // [sp-8h] [bp-28h]@5
    var char_v10; // [sp-4h] [bp-24h]@1
    var v11; // [sp+4h] [bp-1Ch]@1
    var v12; // [sp+8h] [bp-18h]@1
    var v13; // [sp+Ch] [bp-14h]@1
    var v14; // [sp+10h] [bp-10h]@5
    var v15; // [sp+1Ch] [bp-4h]@1

    // sub_EA0560();
    // v1 = sub_4BFF90(&v13, 13295);
    // v15 = 0;
    // v12 = 0;
    // v10 = *v1;
    // LOBYTE(v15) = 1;
    // v2 = sub_499AB0(&v12, v10);
    // v11 = 0;
    // sub_47E230(&v11, v2);
    // LOBYTE(v15) = 3;
    // if (v12)
    //     sub_47DB30((v12 - 12));
    // LOBYTE(v15) = 4;
    // if (v13)
    //     sub_47DB30((v13 - 12));
    // v10 = 0;
    // v9 = 0;
    // v8 = 0;
    // v7 = 0;
    // v6 = 0;
    // v5 = 0;
    // v14 = &v4;
    // v4 = 0;
    // sub_47E230(&v4, &v11);
    // sub_183FEC0(v4, v5, v6, v7, v8, v9, v10);
    // result = v11;
    // v15 = -1;
    // if (v11)
    //     result = sub_47DB30((v11 - 12));
    // return result;
}
function BarrierEffectIgnoreMessage()//var this,var iPacketa
{
    var v2; // ebp@1
    var v3; // esi@1
    var bool_v4; // bl@1
    var char_v5; // eax@1
    var char_v6; // eax@1
    var v7; // eax@1
    var v8; // eax@6
    var char_v9; // al@6
    var result; // eax@8
    var v11; // [sp-1Ch] [bp-58h]@5
    var v12; // [sp-18h] [bp-54h]@5
    var v13; // [sp-14h] [bp-50h]@5
    var v14; // [sp-10h] [bp-4Ch]@5
    var char_v15; // [sp-Ch] [bp-48h]@5
    var v16; // [sp-8h] [bp-44h]@5
    var v17; // [sp-4h] [bp-40h]@5
    var v18; // [sp+10h] [bp-2Ch]@1
    var v19; // [sp+14h] [bp-28h]@1
    var v20; // [sp+18h] [bp-24h]@5
    var char_v21; // [sp+1Ch] [bp-20h]@6
    var char_v22; // [sp+20h] [bp-1Ch]@6
    var v23; // [sp+38h] [bp-4h]@1

    v2 = this;
    v3 = iPacketa;
    v4 = mplew.write("v4") != 0;
    // sub_EA0560();
    // v5 = sub_4BFF90(&v19, 8393);
    // v23 = 0;
    // v18 = 0;
    // v6 = *v5;
    // LOBYTE(v23) = 1;
    // v7 = sub_499AB0(&v18, v6, v4 != 0 ? 7 : 12);
    // iPacketa = 0;
    // sub_47E230(&iPacketa, v7);
    // LOBYTE(v23) = 3;
    // if (v18)
    //     sub_47DB30((v18 - 12));
    // LOBYTE(v23) = 4;
    // if (v19)
    //     sub_47DB30((v19 - 12));
    // v17 = 0;
    // v16 = -1;
    // v15 = 0;
    // v14 = 1;
    // v13 = 0;
    // v12 = 0;
    // v20 = &v11;
    // v11 = 0;
    // sub_47E230(&v11, &iPacketa);
    if (sub_1840310(v11, v12, v13, v14, v15, v16, v17) == 6) {//为实现 
        // sub_CC1280(289);
        // LOBYTE(v23) = 5;
        v8 = sub_1817A70();
        // COutPacket::Encode4(&v21, v8);
        v17 = mplew.writeShort(v3);
        // COutPacket::Encode2(&v21);
        v17 = mplew.writeShort(v3);
        // COutPacket::Encode2(&v21);
        v9 = mplew.write("v9");
        // COutPacket::Encode1(&v21, v9);
        // COutPacket::Encode1(&v21, 1);
        // LOBYTE(v23) = 4;
        // sub_4C25B0(&v22);
    }
    else {
        // sub_18F0D40(v2, 0);
    }
    // result = iPacketa;
    // v23 = -1;
    // if (iPacketa)
    //     result = sub_47DB30((iPacketa - 12));
    return result;
}
function CollectionRecordMessage()//int iPacketa
{
    var result; // eax@1
    var char_v2; // di@2
    var v3; // eax@2
    var v4; // [sp+14h] [bp-30h]@2
    var char_v5; // [sp+18h] [bp-2Ch]@2
    var v6; // [sp+20h] [bp-24h]@2
    var v7; // [sp+24h] [bp-20h]@2
    var v8; // [sp+28h] [bp-1Ch]@2
    var v9; // [sp+2Ch] [bp-18h]@2
    var v10; // [sp+40h] [bp-4h]@2

    result = false;//sub_A83350(1);
    if (!result) {
        v2 = mplew.writeInt("v2");
        v4 = mplew.writeMapleAsciiString("v4");
        // v10 = 0;
        // v6 = &off_1EA90EC;
        // v7 = 0;
        // v8 = 31;
        // v9 = 0;
        // sub_7216C0(100);
        // LOBYTE(v10) = 1;
        // v3 = *(sub_1910D40(&v5) + 4);
        // LOBYTE(v10) = 2;
        // sub_7402F0(v2, &v4);
        // LOBYTE(v10) = 1;
        // sub_4C3290(&v5);
        // LOBYTE(v10) = 0;
        // v6 = &off_1EA90EC;
        // sub_726110(&v6);
        // result = v4;
        // v10 = -1;
        // if (v4)
        //     result = sub_47DB30((v4 - 12));
    }
    return result;
}
function RandomChanceMessage()//var this,var iPacketa
{
    var v2; // esi@1
    var result; // eax@1
    var v4; // ecx@1
    var v5; // eax@2
    var v6; // eax@2
    var v7; // eax@4
    var v8; // ecx@4
    var v9; // esi@13
    var v104//)(int); // ecx@1
    var v115//)(int); // ecx@1
    var v12; // eax@16
    var v13; // eax@18
    var v14; // edx@31
    var v154//)(int); // ecx@3
    var bool_v16; // bl@39
    var v17; // esi@44
    var v18; // eax@44
    var v19; // eax@46
    var v20; // eax@48
    var v21; // [sp-30h] [bp-A4h]@14
    var v22; // [sp-2Ch] [bp-A0h]@14
    var v23; // [sp-28h] [bp-9Ch]@14
    var v24; // [sp-24h] [bp-98h]@14
    var v25; // [sp-20h] [bp-94h]@14
    var v26; // [sp-1Ch] [bp-90h]@14
    var v27; // [sp-18h] [bp-8Ch]@14
    var v28; // [sp-14h] [bp-88h]@14
    var v29; // [sp-10h] [bp-84h]@14
    var char_v30; // [sp-Ch] [bp-80h]@14
    var v31; // [sp-8h] [bp-7Ch]@14
    var v32; // [sp-4h] [bp-78h]@14
    var v33; // [sp+0h] [bp-74h]@14
    var v34; // [sp+4h] [bp-70h]@14
    var v35; // [sp+8h] [bp-6Ch]@2
    var v36; // [sp+20h] [bp-54h]@2
    var v37; // [sp+24h] [bp-50h]@1
    var v38; // [sp+28h] [bp-4Ch]@2
    var v39; // [sp+2Ch] [bp-48h]@2
    var v40; // [sp+30h] [bp-44h]@1
    var char_v41; // [sp+34h] [bp-40h]@14
    var v42; // [sp+38h] [bp-3Ch]@14
    var v43; // [sp+48h] [bp-2Ch]@16
    var pvarg; // [sp+58h] [bp-1Ch]@2
    var v45; // [sp+70h] [bp-4h]@2

    v2 = this;
    v40 = this;
    v37 = 0;
    result = mplew.write("result");
    // if (!result) {
    //     LABEL_35:
    //     v16 = 0;
    //     if ( *(v2 + 8668) || *(v2 + 8672) || *(v2 + 8664)) {
    //         result = sub_1910D40(&v42);
    //         v37 = 1;
    //         if ( *(result + 4))
    //             v16 = 1;
    //     }
    //     if (v37 & 1)
    //         result = sub_4C3290(&v42);
    //     if (v16) {
    //         v17 = *(sub_1910D40(&v42) + 4);
    //         sub_4C3290(&v42);
    //         sub_73FAE0(&v36, 17);
    //         v45 = 12;
    //         iPacketa = 0;
    //         v35 = 0;
    //         v34 = -1;
    //         v33 = -1;
    //         v32 = 11;
    //         v31 = v36;
    //         LOBYTE(v45) = 13;
    //         v18 = sub_499AB0(&iPacketa, "Random Buy Chance DateAndProb : %s", v36);
    //         sub_4C4B10(v18, v32, v33, v34, v35);
    //         LOBYTE(v45) = 12;
    //         if (iPacketa)
    //             sub_47DB30(iPacketa - 3);
    //         v19 = sub_73FAE0(&iPacketa, 16);
    //         LOBYTE(v45) = 14;
    //         sub_47E230(&v36, v19);
    //         LOBYTE(v45) = 12;
    //         if (iPacketa)
    //             sub_47DB30(iPacketa - 3);
    //         v38 = 0;
    //         v35 = 0;
    //         v34 = -1;
    //         v33 = -1;
    //         v32 = 11;
    //         v31 = v36;
    //         LOBYTE(v45) = 15;
    //         v20 = sub_499AB0(&v38, "Random Buy Chance ChanceInfo : %s", v36);
    //         sub_4C4B10(v20, v32, v33, v34, v35);
    //         LOBYTE(v45) = 12;
    //         if (v38)
    //             sub_47DB30(v38 - 3);
    //         result = v36;
    //         v45 = -1;
    //         if (v36)
    //             result = sub_47DB30((v36 - 12));
    //     }
    //     return result;
    // }
    // v35 = v4;
    // iPacketa = &v35;
    // sub_47D9C0(&off_1FC36E0);
    // v5 = sub_18292B0(&pvarg, v35);
    // v45 = 0;
    // v6 = *sub_47EB10(&v39, v5);
    // LOBYTE(v45) = 1;
    // v36 = 0;
    // v38 = &v35;
    // v35 = v6;
    // if (v6)
    //     (*(*v6 + 4))(v6);
    // v7 = sub_47D590(v35);
    // if (v7 < 0 && v7 != -2147467262)
    //     sub_1A94500(v7);
    // LOBYTE(v45) = 3;
    // if (v39)
    //     (*(*v39 + 8))(v39);
    // LOBYTE(v45) = 4;
    // if (pvarg.vt == 8) {
    //     pvarg.vt = 0;
    //     result = pvarg.lVal;
    //     if (pvarg.lVal)
    //         result = v0(pvarg.lVal - 4);
    // }
    // else {
    //     result = VariantClear(&pvarg);
    // }
    // v9 = v36;
    // if (v36) {
    //     v35 = 0;
    //     v34 = 0;
    //     v33 = 0;
    //     v32 = 0;
    //     v38 = &v30;
    //     v31 = 0;
    //     v29 = 0;
    //     v28 = 255;
    //     v27 = 2147483646;
    //     v41 = &v26;
    //     v26 = 0;
    //     v25 = 127;
    //     v24 = 0;
    //     v23 = v8;
    // *&v42.vt = &v23;
    //     LOBYTE(v45) = 6;
    //     sub_500160(&v23, 1);
    //     v22 = 0;
    //     v21 = v9;
    //     v10 = *(*v9 + 4);
    // *&v42.vt = &v21;
    //     v10(v9);
    //     LOBYTE(v45) = 4;
    //     sub_54BC70(&iPacketa, v21);
    //     LOBYTE(v45) = 7;
    //     if (!iPacketa) {
    //         v11 = *(*v9 + 8);
    //         v45 = -1;
    //         return v11(v9);
    //     }
    //     VariantInit(&v43);
    //     v12 = sub_47C4D0(&v43, &pvargSrc);
    //     if (v12 < 0)
    //         sub_1A94500(v12);
    //     LOBYTE(v45) = 8;
    //     VariantInit(&v42);
    //     v13 = sub_47C4D0(&v42, &pvargSrc);
    //     if (v13 < 0)
    //         sub_1A94500(v13);
    //     LOBYTE(v45) = 9;
    //     if (!iPacketa)
    //         sub_1A94500(-2147467261);
    //     sub_4C7BB0(0, &v42, &v43);
    //     LOBYTE(v45) = 8;
    //     if (v42.vt == 8) {
    //         v42.vt = 0;
    //         if (v42.lVal)
    //             v0(v42.lVal - 4);
    //     }
    //     else {
    //         VariantClear(&v42);
    //     }
    //     LOBYTE(v45) = 7;
    //     if (v43.vt == 8) {
    //         v43.vt = 0;
    //         if (v43.lVal)
    //             v0(v43.lVal - 4);
    //     }
    //     else {
    //         VariantClear(&v43);
    //     }
    //     v35 = 0;
    //     v34 = 0;
    //     v33 = 0;
    // *&v42.vt = &v32;
    //     v32 = 0;
    //     sub_491EA0(MultiByteStr, -1);
    //     v41 = &v30;
    //     v31 = 0;
    //     v29 = 0;
    //     v28 = 1000;
    //     v27 = 0;
    //     v26 = 0;
    //     v25 = iPacketa;
    //     LOBYTE(v45) = 11;
    //     v38 = &v25;
    //     if (iPacketa) {
    //         v14 = *iPacketa;
    //         v24 = iPacketa;
    //         (*(v14 + 4))(iPacketa);
    //     }
    //     LOBYTE(v45) = 7;
    //     sub_524510(v25, v26, v27, v28, v29, v30, v31, v32, v33, v34, v35);
    //     LOBYTE(v45) = 4;
    //     if (iPacketa)
    //         (*(*iPacketa + 8))(iPacketa);
    //     v15 = *(*v9 + 8);
    //     v45 = -1;
    //     result = v15(v9);
    //     v2 = v40;
    //     continue LABEL_35;
    // }
    return result;
}
function sub_19A4B00()//var  iPacketa
{
    var result; // eax@1
    var bool_v2; // zf@1

    mplew.writeMapleAsciiString("iPacketa");
    // result = iPacketa;
    // v2 = iPacketa == 0;
    // if (iPacketa) {
    //     if ( *iPacketa) {
    //         sub_4C4B10(&iPacketa, 6, -1, -1, 0);
    //         result = iPacketa;
    //     }
    //     v2 = result == 0;
    // }
    // if (!v2)
    //     result = sub_47DB30((result - 12));
    // return result;
}

function sub_1990450()//volatile var long_iPacketa
{
    var iPacketa2; // esi@1
    var v2; // eax@1
    var v3; // edi@2
    var v4; // esi@2
    var char_v5; // eax@2
    var char_v6; // eax@5
    var v7; // edi@10
    var v8; // esi@10
    var v9; // ecx@10
    var long_v10; // eax@10
    var char_v11; // eax@13
    var char_v12; // eax@14
    var v13; // esi@21
    var char_v14; // eax@21
    var result; // eax@23
    var v16; // [sp-8h] [bp-30h]@12
    var v17; // [sp-4h] [bp-2Ch]@12
    var lpMultiByteStr; // [sp+14h] [bp-14h]@1
    var v19; // [sp+18h] [bp-10h]@12
    var v20; // [sp+24h] [bp-4h]@1

    lpMultiByteStr = 0;
    // iPacketa2 = iPacketa;
    v20 = 0;
    v2 = mplew.write("v2");
    if (v2 == 1) {
        v3 = mplew.writeInt("v3");
        v4 = mplew.writeShort(iPacketa2);
        // sub_EA0560();
        // v5 = *sub_4BFF90(&iPacketa, 10585);
        // LOBYTE(v20) = 1;
        // sub_499AB0(&lpMultiByteStr, v5, v3);
        // LOBYTE(v20) = 0;
        // if (iPacketa)
        //     sub_47DB30(iPacketa - 3);
        // if (v4 > 0) {
        //     sub_EA0560();
        //     v6 = *sub_4BFF90(&iPacketa, 350);
        //     LOBYTE(v20) = 2;
        //     sub_499AB0(&lpMultiByteStr, v6, v4);
        //     LOBYTE(v20) = 0;
        //     if (iPacketa)
        //         sub_47DB30(iPacketa - 3);
        // }
        // if (v3 > 0)
        //     sub_198A740(v3);
    }
    else if (v2) {
        if (v2 == 2) {
            v13 = mplew.writeInt("v13");
            // sub_EA0560();
            // v14 = *sub_4BFF90(&iPacketa, 10586);
            // LOBYTE(v20) = 6;
            // sub_499AB0(&lpMultiByteStr, v14, v13);
            // LOBYTE(v20) = 0;
            // if (iPacketa)
            //     sub_47DB30(iPacketa - 3);
        }
    }
    else {
        v7 = mplew.writeInt("v7");
        v8 = mplew.writeInt("v8");
        //     sub_A11A20(&iPacketa, v7);
        //     v10 = iPacketa;
        //     LOBYTE(v20) = 3;
        //     if (iPacketa && *iPacketa) {
        //         v17 = 120;
        //         v16 = v9;
        //         v19 = &v16;
        //         sub_181C210(&v16, 0);
        //         sub_182ED30(&iPacketa, v16, v17);
        //         if (v8 <= 1) {
        //             v17 = 10587;
        //             v16 = &v19;
        //             sub_EA0560();
        //             v12 = *sub_4BFF90(v16, v17);
        //             v17 = iPacketa;
        //             LOBYTE(v20) = 5;
        //             sub_499AB0(&lpMultiByteStr, v12, iPacketa);
        //         }
        //         else {
        //             v17 = 354;
        //             v16 = &v19;
        //             sub_EA0560();
        //             v11 = *sub_4BFF90(v16, v17);
        //             v17 = v8;
        //             v16 = iPacketa;
        //             LOBYTE(v20) = 4;
        //             sub_499AB0(&lpMultiByteStr, v11, iPacketa, v8);
        //         }
        //         LOBYTE(v20) = 3;
        //         if (v19)
        //             sub_47DB30(v19 - 3);
        //         v10 = iPacketa;
        //     }
        //     LOBYTE(v20) = 0;
        //     if (v10)
        //         sub_47DB30(v10 - 3);
        // }
        // result = lpMultiByteStr;
        // v20 = -1;
        // if (lpMultiByteStr)
        //     result = sub_47DB30(lpMultiByteStr - 3);
        // return result;
    }
}
SHOW_STATUS_INFO();