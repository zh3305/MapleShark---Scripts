townId = mplew.writeInt("townId");
targetId = mplew.writeInt("targetId");
if ((townId != 999999999) && (targetId != 999999999)) {
    mplew.writeInt("skillId");
    mplew.writePos("pos");
}