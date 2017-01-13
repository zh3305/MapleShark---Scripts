//   mplew.writeShort(SendPacketOpcode.MODIFY_INVENTORY_ITEM.getValue());
active = false;
mplew.write(0);
mplew.write(2);
mplew.write(0);
mplew.write(3);//mode
mplew.write(5);
mplew.writeShort("pet.getInventoryPosition()");
mplew.write(0);
mplew.write(5);
mplew.writeShort("pet.getInventoryPosition()");
mplew.write(3);
PetItemId = mplew.writeInt("pet.getPetItemId()");
mplew.write(1);
mplew.writeLong("pet.getUniqueId()");
mplew.StartNode("addPetItemInfo");
// if (item == null) {
mplew.writeLong("PacketHelper.getKoreanTimestamp((long)(System.currentTimeMillis() * 1.5))");
// } else {
//     addExpirationTime(mplew, item.getExpiration() <= System.currentTimeMillis() ? -1L : item.getExpiration());
// }
mplew.writeInt(-1);
mplew.writeAsciiString("pet.getName()", 13);
mplew.write("pet.getLevel()");
mplew.writeShort("pet.getCloseness()");
mplew.write("pet.getFullness()");
// if (item == null) {
mplew.writeLong("PacketHelper.getKoreanTimestamp((long)(System.currentTimeMillis() * 1.5))");
// } else {
//     addExpirationTime(mplew, item.getExpiration() <= System.currentTimeMillis() ? -1L : item.getExpiration());
// }
mplew.writeShort(0);
mplew.writeShort("pet.getFlags()");
mplew.writeInt("pet.getSecondsLeft");//((PetItemId == 5000054) && ("pet.getSecondsLeft"() > 0) ? "pet.getSecondsLeft"() : 0);
mplew.writeShort("pet.isCanPickup", 0, 2);
mplew.write("pet.getSummoned", 0);
mplew.writeInt(active ? "pet.getBuffSkill" : 0); //宠物自动加BUFF的技能ID
mplew.writeInt(-1);
mplew.writeShort(0x64);
mplew.writeShort("pet.getPetSkill()");//v109//active ? pet.getPetSkill():
mplew.writeShort(0);
mplew.writeShort(0);
mplew.writeInt(0);
mplew.writeShort(0);
mplew.EndNode(false);