  mplew.writeInt("this");
  mplew.writeInt("");
  mplew.writeInt("");
  mplew.writeShort("");
  mplew.writeBuffer("v2 + 14", 8);
  iPacket = mplew.writeInt("iPacket");
  if (iPacket) {
      v6 = mplew.writeInt("v6");
  }