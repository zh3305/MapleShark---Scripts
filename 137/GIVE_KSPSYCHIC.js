mplew.writeInt("playerId");
mplew.write(1);
mplew.writeInt("unk1");
mplew.writeInt("unk2");//unk2
for (var fi = 0; fi < 4; fi++) {
    // PlayerHandler.心魂之手Data _xhsj = xhdt.get(fi);
    mplew.write(1);
    mplew.write(1);
    mplew.writeInt("_xhsj.Unk1");
    mplew.writeInt(fi + 1);
    var MobId = mplew.writeInt("_xhsj.MobId");
    mplew.writeShort("_xhsj.Unk3");
    if (MobId) {
        mplew.writeInt(34000);
        mplew.writeInt(34000);
        mplew.write(1);
    } else {
        mplew.writeInt(100);
        mplew.writeInt(100);
        mplew.write(0);
    }
    mplew.writeShort("");
    mplew.writeShort("");
    mplew.writeShort("");
    mplew.writeShort("");
}
mplew.write(0);