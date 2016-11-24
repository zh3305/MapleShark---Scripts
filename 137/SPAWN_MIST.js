mplew.writeInt("mist.getObjectId()");
mplew.writeInt("mist.isMobMist() ? 0 : mist.isPoisonMist()");
mplew.writeInt("mist.getOwnerId()");
// if (mist.getMobSkill() == null) {
mplew.writeInt("mist.getSourceSkill().getId()");
// } else {
//     mplew.writeInt(mist.getMobSkill().getSkillId());
// }
mplew.write("mist.getSkillLevel()");
mplew.writeShort("mist.getSkillDelay()");
mplew.writeRect("mist.getBox()");
mplew.writeInt("mist.isShelter() ? 1 : 0");
//mplew.writeInt(0);
mplew.writePos("mist.getPosition()");
mplew.writeInt(0);
mplew.writeInt(0);
mplew.write(0);
mplew.writeInt(0);
// if (GameConstants.isMistSkill(mist.getMobSkill() == null ? mist.getSourceSkill().getId() : mist.getMobSkill().getSkillId())) {
//     mplew.write(!mist.isFacingLeft());
// }
mplew.writeInt("mist.getDuration()");