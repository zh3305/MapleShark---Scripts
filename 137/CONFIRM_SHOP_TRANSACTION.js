     mplew.write("code");
    mplew.writeInt(0);
    mplew.writeInt("shop.getNpcId()");
    mplew.writeInt(0);
mplew.writeInt(0);



mplew.writeInt("GameConstants.getCurrentDate()");//日期
getRanks = mplew.write("getRanks");
if (getRanks > 0) {
    getRanksize = mplew.write("getRanks");
    for (var i = 0; i < getRanksize; i++) {
        mplew.writeInt("s.left");
        mplew.writeMapleAsciiString("s.right");
    }
}
getItemssize = mplew.writeShort("getItemssize");
for (var i = 0; i < getItemssize; i++) {
        mplew.StartNode("item  part "+i);
    ItemId = mplew.writeInt("item.getItemId()");
    mplew.writeInt("item.getPrice()");
    mplew.writeInt("item.getReqItem()");//货币道具
    mplew.writeInt("item.getReqItemQ()");//消耗货币数量
    mplew.writeInt(0);//点数道具
    mplew.writeInt(0);//消耗点数数量
    mplew.writeInt(0);
    mplew.writeInt(0);
    mplew.writeInt(0);
    mplew.writeInt(0);
    mplew.write(0);
    mplew.write(0);

    mplew.writeInt(0);
    mplew.writeInt(0);
    mplew.writeInt("使用时限");//使用时限(单位分钟)
    mplew.writeInt("购买等级限制");//购买等级限制
    mplew.writeShort(0);
    mplew.writeShort(0);
    mplew.write(0);//未知
    mplew.writeLong("getTime(-2L)");
    mplew.writeLong("getTime(-1L)");
    //        mplew.writeInt(item.getCategory());
    //        mplew.write(0);
    mplew.writeMapleAsciiString("1900010100");
    mplew.writeMapleAsciiString("2079010100");
    //        if (ItemConstants.类型.装备(item.getItemId())) {
    //            mplew.write(item.hasPotential() ? 1 : 0);
    //        } else {
    //            mplew.write(0);
    //        }
    mplew.writeInt("item.getExpiration() > 0 ? 1 : 0");
    mplew.writeInt(0);//new 144
    mplew.writeMapleAsciiString("");
    mplew.writeInt(0);//new 144
    if (!可充值道具(ItemId)) {
        mplew.writeShort("quantity"); //购买数量
        // mplew.writeShort("可购买数量"); //可购买数量
        //  mplew.writeShort(quantity > 1 ? 1 : item.getBuyable() == 0 ? slotMax : item.getBuyable()); //可购买数量
    } else {
        mplew.writeAsciiString("333333");
        mplew.writeShort("BitTools.doubleToShortBits(ii.getPrice(item.getItemId()))");
        //  mplew.writeShort(ii.getSlotMax(item.getItemId()));
    }
    mplew.writeShort("slotMax");


    if (getRanks > 0) {
        mplew.write("item.getRank() >= 0 ? 1 : 0");
        if (getRanks >= 0) {
            mplew.write("item.getRank()");
        }
    }

    for (var j = 0; j < 4; j++) {
        mplew.writeInt(0); //red leaf high price probably
    }
    // idarr[] = [9410165, 9410166, 9410167, 9410168, 9410198];
    for (var k = 0; k < 5; k++) {
        mplew.writeInt("idarr[k]", 9410165, 9410166, 9410167, 9410168, 9410198);
        mplew.writeInt("chr.getFriendShipPoints()[k]");
    }
 if(   mplew.write(0))
 {
     addItemInfo() 
 }
        mplew.EndNode(true);

}

function 飞镖(itemid) {
    return parseInt( itemid / 10000) == 207;
}
function 可充值道具(itemid) {
    return (飞镖(itemid)) || (子弹(itemid));
}
function 子弹(itemid) {
    return parseInt(itemid / 10000) == 233;
}

function addItemInfo() {
    DecodeItem() ;
    // getPet = mplew.write("item.getPet() != null ? 3 : item.getType()");
    // getItemId = mplew.writeInt("item.getItemId()");
    // //hasUniqueId = item.getUniqueId() > 0 && !ItemConstants.类型.结婚戒指(item.getItemId()) && item.getItemId() / 10000 != 166;

    // hasUniqueId = mplew.write("hasUniqueId ? 1 : 0");
    // if (hasUniqueId) {
    //     mplew.writeLong("item.getUniqueId()");
    // }
    // if (getPet == 3) { // Pet
    //     // addPetItemInfo(mplew, item, item.getPet(), true);
    // } else {
    //     //  addExpirationTime(mplew, item.getExpiration());
    //     mplew.writeLong("addExpirationTime");
    //     mplew.writeInt("chr == null ? -1 : chr.getExtendedSlots().indexOf(item.getItemId())");
    //     if (getPet == 1) {
    //         //mplew.write(0);
    //         addEquipStats();
    //         addEquipBonusStats(hasUniqueId);
    //     } else {
    //         mplew.writeShort("item.getQuantity()");
    //         mplew.writeMapleAsciiString("item.getOwner()");
    //         mplew.writeInt("item.getFlag()");
    //         //mplew.writeShort(0);
    //         if (可充值道具(getItemId) || getItemId / 10000 == 287 || getItemId / 10000 == 302) {
    //             mplew.writeLong("(item.getInventoryId() <= 0 ? -1 : item.getInventoryId())");
    //         }
    //         if (getItemId / 10000 == 287) {
    //             mplew.writeZeroBytes(17);//133+
    //         } else {
    //             mplew.writeZeroBytes(17);//133+
    //         }
    //     }
    // }
}


function DecodeItem() {
    type = mplew.write("Type");
    item = mplew.writeInt("Item ID");
    hasUniqueId = mplew.write("HasCashid");
    if (hasUniqueId == 0x01) {
        mplew.AddLong("CashID");
    }
    if (type == 0x01) {
        mplew.AddLong("Expiration Time");
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
            mplew.AddLong("?x8"); // Unique ID?
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
        mplew.AddLong("Expiration Time");
        mplew.writeInt("-1 ?");
        mplew.AddShort("数量");
        mplew.AddString("Name");
        mplew.AddShort("Flags");
        item = parseInt(item / 10000);
        if (item == 233 || item == 207 || item == 287) //203 子弹 207 飞镖
            mplew.AddLong("?");
        mplew.AddField("133 未知 0(19)  ", 19);
    } else if (type == 0x03) { //宠物
        mplew.AddLong("Expiration Time");
        mplew.writeInt("-1 ?");
        mplew.AddPaddedString("Petname", 13);
        mplew.write("Level");
        mplew.AddShort("Closeness");
        mplew.write("Fullness");
        mplew.AddLong("Time");
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