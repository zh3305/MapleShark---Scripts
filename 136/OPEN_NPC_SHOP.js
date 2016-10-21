
            mplew.writeShort(SendPacketOpcode.OPEN_NPC_SHOP.getValue());
            mplew.write(0); // Boolean [true => + [Int]]
            mplew.writeInt(0);
            mplew.writeInt(sid);
            mplew.writeInt(0);
            PacketHelper.addShopInfo(mplew, shop, c);
    function addShopInfo() {
//public static void addShopInfo(var mplew, var shop, MapleClient c) {
        var ii = MapleItemInformationProvider.getInstance();
        mplew.writeInt(GameConstants.getCurrentDate());
        mplew.write(shop.getRanks().size() > 0 ? 1 : 0);
        if (shop.getRanks().size() > 0) {
            mplew.write(shop.getRanks().size());
            for (Pair s : shop.getRanks()) {
                mplew.writeInt(((Integer) s.left));
                mplew.writeMapleAsciiString((String) s.right);
            }
        }
         mplew.writeShort(0);
        mplew.writeShort(shop.getItems().size() + c.getPlayer().getRebuy().size());
        for (MapleShopItem item : shop.getItems()) {
            addShopItemInfo(mplew, item, shop, ii, null, c.getPlayer());
        }
        for (Item i : c.getPlayer().getRebuy()) {
            addShopItemInfo(mplew, new MapleShopItem(i.getItemId(), (int) ii.getPrice(i.getItemId()), i.getQuantity(), i.getPosition()), shop, ii, i, c.getPlayer());
        }
    }
 function addShopItemInfo() {
//public static void addShopItemInfo(var mplew, var item, var shop, var ii, var i, MapleCharacter chr) {
        mplew.writeInt(item.getItemId());
        mplew.writeInt(item.getPrice());
        //mplew.write(ServerConstants.SHOP_DISCOUNT);//打折
        mplew.writeInt(item.getReqItem());//货币道具
        mplew.writeInt(item.getReqItemQ());//消耗货币数量
        mplew.writeInt(0);//点数道具
        mplew.writeInt(0);//消耗点数数量
        mplew.writeZeroBytes(22);
        mplew.writeInt(item.getExpiration());//使用时限(单位分钟)
        mplew.writeInt(item.getMinLevel());//购买等级限制
        mplew.writeShort(0);
        mplew.writeShort(0);
        mplew.writeInt(0);//未知
        mplew.writeLong(getTime(-2L));
        mplew.writeLong(getTime(-1L));
        mplew.writeInt(item.getCategory());
        mplew.write(0);
        mplew.writeMapleAsciiString("1900010100");
        mplew.writeMapleAsciiString("2079010100");
        if (ItemConstants.类型.装备(item.getItemId())) {
            mplew.write(item.hasPotential() ? 1 : 0);
        } else {
            mplew.write(0);
        }
        mplew.writeInt(item.getExpiration() > 0 ? 1 : 0);
        mplew.writeInt(0);//new 144
        if (!ItemConstants.类型.可充值道具(item.getItemId())) {
            var slotMax = MapleItemInformationProvider.getInstance().getSlotMax(item.getItemId());
            var quantity = item.getQuantity() == 0 ? slotMax : item.getQuantity();
            mplew.writeShort(quantity); //购买数量
            mplew.writeShort(quantity > 1 ? 1 : item.getBuyable() == 0 ? slotMax : item.getBuyable()); //可购买数量
        } else {
            mplew.writeAsciiString("333333");
            mplew.writeShort(BitTools.doubleToShortBits(ii.getPrice(item.getItemId())));
            mplew.writeShort(ii.getSlotMax(item.getItemId()));
        }
        mplew.write(i == null ? 0 : 1);
        if (i != null) {
            addItemInfo(mplew, i);
        }
        if (shop.getRanks().size() > 0) {
            mplew.write(item.getRank() >= 0 ? 1 : 0);
            if (item.getRank() >= 0) {
                mplew.write(item.getRank());
            }
        }
        for (var j = 0; j < 4; j++) {
            mplew.writeInt(0); //red leaf high price probably
        }
        int idarr[] =  {/* var k = 0; k < 5; k++ */} {
            mplew.writeInt(idarr[k]);
            mplew.writeInt(chr.getFriendShipPoints()[k]);
        }
    }