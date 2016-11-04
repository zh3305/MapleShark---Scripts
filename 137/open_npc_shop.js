mplew.write(0); // Boolean [true => + [Int]]
mplew.writeInt(0);
mplew.writeInt("sid");
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
    mplew.write(0);
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
    getPet = mplew.write("item.getPet() != null ? 3 : item.getType()");
    getItemId = mplew.writeInt("item.getItemId()");
    //hasUniqueId = item.getUniqueId() > 0 && !ItemConstants.类型.结婚戒指(item.getItemId()) && item.getItemId() / 10000 != 166;

    hasUniqueId = mplew.write("hasUniqueId ? 1 : 0");
    if (hasUniqueId) {
        mplew.writeLong("item.getUniqueId()");
    }
    if (getPet = 3) { // Pet
        // addPetItemInfo(mplew, item, item.getPet(), true);
    } else {
        //  addExpirationTime(mplew, item.getExpiration());
        mplew.writeLong("addExpirationTime");
        mplew.writeInt("chr == null ? -1 : chr.getExtendedSlots().indexOf(item.getItemId())");
        if (getPet == 1) {
            //mplew.write(0);
            addEquipStats(mplew, equip);
            addEquipBonusStats(mplew, equip, hasUniqueId);
        } else {
            mplew.writeShort("item.getQuantity()");
            mplew.writeMapleAsciiString("item.getOwner()");
            mplew.writeInt("item.getFlag()");
            //mplew.writeShort(0);
            if (可充值道具(getItemId) || getItemId / 10000 == 287 || getItemId / 10000 == 302) {
                mplew.writeLong("(item.getInventoryId() <= 0 ? -1 : item.getInventoryId())");
            }
            if (getItemId / 10000 == 287) {
                mplew.writeZeroBytes(17);//133+
            } else {
                mplew.writeZeroBytes(17);//133+
            }
        }
    }
}