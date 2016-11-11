isRemote = mplew.write("isRemote");
if (isRemote) {
    mplew.writeInt("chr.getId()");
}
mplew.writeInt(isRemote ? "oid.get(0)" : "chr.getId()");
type = mplew.writeInt("type"); //unk
// var monster = chr.getMap().getMonsterByOid(oid.get(0));
// if (MapleJob.is隐士(skillid / 10000) && oid.size() > 0) {
//     oid.remove(0); //防止攻击触发目标
// }
if (!(type == 0 || type == 9 || type == 14)) {
    mplew.write(1);
    if (isSpecialForce(type)) {
        size = mplew.writeInt("oid.size()"); // size
        for (var i = 0; i < size; i++) {
            mplew.writeInt("oid.get(" + i + ")");
        }
    } else {
        mplew.writeInt("oid.get(0)");
    }
    skillid = mplew.writeInt("skillid"); //skillid
}
mplew.StartNode("while ");
while (mplew.write("while")) {
    mplew.writeInt("count"); // count
    mplew.writeInt("color"); // color
    mplew.writeInt("x");
    mplew.writeInt("y");
    mplew.writeInt("z");
    mplew.writeInt("unk1"); // 0
    mplew.writeInt(0); // 0
    mplew.writeInt(0); // 0
    mplew.writeInt("unk2"); // 0
    mplew.writeInt(0); // 0
    mplew.writeInt(0); // 0
    mplew.AddComment("--------------------------------");
}
mplew.EndNode(false);


if (type == 11) {
    mplew.writeInt("monster.getPosition().getX() - 100");
    mplew.writeInt("monster.getPosition().getY() - 100");
    mplew.writeInt("monster.getPosition().getX() + 100");
    mplew.writeInt("monster.getPosition().getY() + 100");
    // var itt = chr.getInventory(MapleInventoryType.USE).getItem((short) 1);
    mplew.writeInt("itt.getItemId()");
}
if (type == 9 || type == 15) {
    mplew.writeInt("", 0x1E3);
    mplew.writeInt("", -106);
    mplew.writeInt("", 0x1F7);
    mplew.writeInt("", -86);
}
if (type == 16) {
    mplew.writeInt("", 543);
    mplew.writeInt("", -325);
}
if (type == 17) {
    mplew.writeInt("direction");
    mplew.writeInt("final");
    mplew.writeInt("未知", 500);//[300]
}
if (type == 18) {
    mplew.writeInt(0);
    mplew.writeInt(0);
}

function isSpecialForce(type) {
    //public static boolean isSpecialForce(int type) {
    switch (type) {
        case 2:
        case 3:
        case 6:
        case 7:
        case 11:
        case 12:
        case 13:
        case 16:
        case 17:
        case 19:
        case 20:
        case 21:
            return true;
        default:
            return false;
    }
}