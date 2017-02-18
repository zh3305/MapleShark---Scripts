mplew.writeInt("playerId");
mplew.write(1);
mplew.writeInt("skillid");
mplew.writeShort("skillLevel"); //unk2
mplew.writeInt("UNkint 1");
mplew.writeInt("UNkint 2");
var fi = 0;
while (mplew.write(1)) {
    mplew.StartNode("while " + fi);
    // PlayerHandler.心魂之手Data _xhsj = xhdt.get(fi);
    mplew.write(1);
    mplew.writeInt("_xhsj.Unk1", -(fi + 1))
    mplew.writeInt(fi + 1);
    var MobId = mplew.writeInt("_xhsj.MobId");
    mplew.writeShort("_xhsj.Unk3");
    if (MobId) {
        mplew.writeLong(34000);
        mplew.writeLong(34000);
        mplew.write(1);
    } else {
        mplew.writeLong(100);
        mplew.writeLong(100);
        mplew.write(1);
    }
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.writeInt("");
    fi++;
    mplew.EndNode(false);
}