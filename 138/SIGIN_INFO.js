mplew.write(0);
mplew.write("签到窗口.ordinal()", 1);
readdata()
mplew.writeInt(2);
readdata()
readdata()

function readdata() {
    mplew.StartNode("data ");
    mplew.writeLong("PacketHelper.getTime(-2)");
    mplew.writeLong("PacketHelper.getTime(-1)");
    getSiginRewards = mplew.writeInt("MapleSignin.getInstance().getSiginRewards().size()");
    mplew.writeInt(2);
    getSiginRewards = mplew.writeInt("MapleSignin.getInstance().getSiginRewards().size()");

    // List < MapleSignin.SiginRewardInfo > siginRewards = MapleSignin.getInstance().getSiginRewards();
    for (var i = 0; i < getSiginRewards; i++) {
        // MapleSignin.SiginRewardInfo rewardInfo = siginRewards.get(i);
        mplew.StartNode("getSiginRewards " + i);
        mplew.writeInt("rewardInfo.getRank()");
        mplew.writeInt("rewardInfo.getItemId()");
        mplew.writeInt("rewardInfo.getQuantity()");
        // if (rewardInfo.getExpiredate() > 0) {
        mplew.writeInt(1);
        mplew.writeInt("rewardInfo.getExpiredate()");
        // } else {
        //     mplew.writeLong(0);
        // }
        mplew.writeInt("rewardInfo.getIsCash()");
        mplew.write(0);
        mplew.EndNode(false);
    }

    mplew.writeInt("MapleSignin.MINLEVEL", 33);
    unksize = mplew.writeInt("MapleSignin.getInstance().getUnknownMap().size()");
    for (var i = 0; i < unksize; i++) {
        mplew.StartNode("unksize " + i);
        // for (Map.Entry < Integer, Integer > integerEntry : MapleSignin.getInstance().getUnknownMap().entrySet()) {
        mplew.writeInt("integerEntry.getKey()");
        mplew.writeInt("integerEntry.getValue()");
        mplew.EndNode(false);
        // }
    }
    mplew.writeInt(0);
    mplew.EndNode(false);
}