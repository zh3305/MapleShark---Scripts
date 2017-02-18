MODIFY_INVENTORY_ITEM();

function MODIFY_INVENTORY_ITEM()
//int __thiscall MODIFY_INVENTORY_ITEM(_DWORD *this, CInPacket *ipacket)
{

    if (mplew.write("UNK bool")) {
        // CWvsContext::SetExclRequestSent(v2, v3, 0);
    }
    v15 = mplew.write("unk");
    v16 = v15;
    v197 = v15;
    v209 = mplew.write("v209");
    v190 = 0;
    l = v16;
    if (v16 > 0) {
        // while (2) {
        v17 = mplew.write("type");
        v18 = mplew.write("v18");
        v19 = v18;
        v183 = v18;
        v20 = mplew.writeShort("");
        v176 = v20;
        switch (v17) {
            case 0:
                GW_ItemSlotBase_Decode();
                break;
            case 1:
                v44 = mplew.writeShort("");
                break;
            case 2:
                v51 = mplew.writeShort("");
                // v57 = v181;
                break; //  continue LABEL_104;
            case 3:

                break;
            case 4:
                v76 = mplew.Decode8("");
                break;
            case 5:
                v180 = mplew.writeInt("v180");
                break;
            case 6:
                v177 = v19 - 2;
                if (v19 - 2 <= 2 && v176 >= 10101) {
                    if (v19 == 2) {
                        v83 = 10220;
                    } else if (v19 == 3) {
                        v83 = 10420;
                    } else {
                        v83 = (v19 - 3) == 1 ? 10720 : 10100;
                    }
                    if (v176 <= v83) {
                        v84 = mplew.writeShort("");
                    }
                }
                break;
            case 7:

                break;
            case 8:
                v111 = mplew.writeShort("");
                break;
            case 9:
                GW_ItemSlotBase_Decode();
                break;
            case 10:
                break;
            default:
                break;
        }
        // }
    }

    if (mplew.write("139 newFuntion")) {
        mplew.StartNode("sub_A4D310");
        sub_A4D310( /* &v240, ipacket */ );
        mplew.EndNode(false);
    }
}

function sub_A4D310( /*  */ ) //139 new
//char __thiscall sub_A4D310 (/* unsigned var this, CInPacket *a2 */)
{
    mplew.writeInt("this");
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.Decode8("");
    mplew.Decode8("");
    v7 = mplew.writeShort("");
    v8 = mplew.writeShort("");
    v9 = mplew.writeShort("");
    v10 = mplew.writeShort("");
    v11 = mplew.writeShort("");
    v12 = mplew.writeShort("");
    v13 = mplew.writeShort("");
    v14 = mplew.writeShort("");
    v15 = mplew.writeShort("");
    v16 = mplew.writeShort("");
    v17 = mplew.writeShort("");
    v18 = mplew.writeShort("");
    return v18;
}

function GW_ItemSlotBase_Decode() {
    //DecodeEquipmentInventory("GW_ItemSlotBase_Decode");

    DecodeItem();
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
        mplew.writeLong("Expiration Time", "150842304000000000");
        mplew.writeInt("-1 ?", -1);
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
        mplew.writeLong("getTime(-2)", "94354848000000000")
        mplew.writeInt("-1", -1);
        mplew.writeLong("", 0);
        mplew.writeLong("getTime(-2)", "94354848000000000")
        mplew.writeLong("", 0);
        mplew.writeLong("", 0);
        // mplew.AddField("", 6);
        mplew.AddShort("魂武器类型");
        mplew.AddShort("魂武器");
        mplew.AddShort("魂武器 炽热结晶数量");
        mplew.writeInt("突破伤害上限 LimitBreak");
        mplew.AddUShort("139 new");
        mplew.AddUShort("139 new");
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