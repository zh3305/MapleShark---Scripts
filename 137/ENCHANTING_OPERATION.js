
var Type = mplew.write("Type");
switch (Type) {
    case 0x32:
        mplew.write("feverTime", 1, 0);
        var size = mplew.write("scrolls.size()");
        for (var i = 0; i < size; i++) {
            mplew.StartNode("scrolls " + i);
            mplew.writeInt("scroll.getViewType()");
            mplew.writeMapleAsciiString("scroll.getName()");
            mplew.writeLong("137 new");
            var getMask = mplew.writeInt("scroll.getMask()");
            if (getMask > 0) {
                mplew.StartNode("Flags Mask");
                var flag = getMask;
                // inputflag = flag;
                flag = ReadIfFlaggedInt(flag, 0x01, "WATK");
                flag = ReadIfFlaggedInt(flag, 0x02, "MATK");
                flag = ReadIfFlaggedInt(flag, 0x04, "Str 力量");
                flag = ReadIfFlaggedInt(flag, 0x08, "Dex 敏捷");
                flag = ReadIfFlaggedInt(flag, 0x10, "Int");
                flag = ReadIfFlaggedInt(flag, 0x20, "Luk");
                flag = ReadIfFlaggedInt(flag, 0x40, "WDEF");
                flag = ReadIfFlaggedInt(flag, 0x80, "MDEF");
                flag = ReadIfFlaggedInt(flag, 0x100, "MHP");
                flag = ReadIfFlaggedInt(flag, 0x200, "MMP");
                flag = ReadIfFlaggedInt(flag, 0x400, "ACC");
                flag = ReadIfFlaggedInt(flag, 0x800, "AVOID");
                flag = ReadIfFlaggedInt(flag, 0x1000, "JUMP");
                flag = ReadIfFlaggedInt(flag, 0x2000, "SPEED");
                // for (int i : scroll.getValues()) {
                //     mplew.writeInt(i);
                // }
                if (flag != 0) {
                    mplew.AddComment("FLAG NOT EMTPY: " + flag);
                }
                mplew.EndNode(true);
            }
            mplew.writeInt("scroll.getCost()");
            mplew.write(0);//结束符
            mplew.EndNode(true);
        }
    case 0x64:
        sub_10B8C60(/* this, iPacket */);
        break;
    case 0x65:
        sub_10B8110(/* iPacket */);
        break;
    case 0x66:
        sub_10B8360(/* iPacket */);
        break;
    case 0x67:
        sub_10B84C0(/* iPacket */);
        break;
    case 0x68:
        sub_10B5B80(/* iPacket */);
        break;
    case 0x69:
        break;
    case 0x6A:
        sub_10B87C0(/* iPacket */);
        break;
    default:
        break;
}
function sub_10B8C60(/*  */) {
    v4 = mplew.write("v4") != 0;
    v18 = mplew.writeInt("v18");
    mplew.writeMapleAsciiString("");
    v7 = (sub_75DBD0(/* &v23, iPacket */) + 4);
    v9 = (sub_75DBD0(/* &v19, iPacket */) + 4);
}
function ReadIfFlaggedInt(value, flag, text) {
    if ((value & flag) == flag) {
        mplew.writeInt(text + " - " + flag);
        return value - flag;
    }
    return value;
}