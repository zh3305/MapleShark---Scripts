mplew.write(0);
mod = mplew.write("mod");
mplew.writeInt("drop.getObjectId()");
getMeso = mplew.write("drop.getMeso() > 0 ? 1 : 0");
mplew.writeInt(0);
mplew.writeInt("Randomizer.nextInt(255)");// 这两个是飘下来的角度还是速度。反正这两个就影响速度和漂浮速度的~
mplew.writeInt("Randomizer.nextInt(255)");// 这两个是飘下来的角度还是速度。反正这两个就影响速度和漂浮速度的~
mplew.writeInt("drop.getItemId()");
mplew.writeInt("drop.getOwner()");
mplew.write("drop.getDropType()");
mplew.writePos("dropto");
mplew.writeInt(0);
mplew.writeInt(0);//130+
if (mod != 2) {
    mplew.writePos("dropfrom");
    mplew.writeInt(0);
}
mplew.write(0);
if (getMeso == 0) {
    PacketHelper.addExpirationTime(mplew, drop.getItem().getExpiration());
}
mplew.writeShort("drop.isPlayerDrop() ? 0 : 1");
mplew.writeInt(0);
mplew.writeInt(0);
mplew.writeShort(0);//New 133
mplew.write("drop.getState()");//潜能等级特效
