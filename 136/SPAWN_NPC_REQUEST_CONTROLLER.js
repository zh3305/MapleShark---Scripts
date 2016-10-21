function spawnNPCRequestController() {
    //public static byte[] spawnNPCRequestController(int npc) {
    //var mplew =  {/*  */};

    //mplew.writeShort("SendPacketOpcode.SPAWN_NPC_REQUEST_CONTROLLER.getValue()");
    // mplew.write("",0);
    mplew.writeInt("npc");

    // return mplew.getPacket("");
}

function spawnNPCRequestControllerlife() {
    //public static byte[] spawnNPCRequestController(var life, boolean MiniMap) {
    //var mplew =  {/*  */};

    //mplew.writeShort("SendPacketOpcode.SPAWN_NPC_REQUEST_CONTROLLER.getValue()");
    // mplew.write("",1);
    mplew.writeInt("life.getObjectId()");
    mplew.writeInt("life.getId()");
    mplew.writeShort("life.getPosition().x");
    mplew.writeShort("life.getCy()");
    mplew.write("life.getF() == 1 ? 0 : 1",1,0);
    mplew.writeShort("life.getFh()");
    mplew.write("", 0);
    mplew.writeShort("life.getRx0()");
    mplew.writeShort("life.getRx1()");
    mplew.write("MiniMap ? 1 : 0",1,0);
    mplew.writeInt("", 0);//new 143
    mplew.write("", 0);
    mplew.writeInt("", 0);//new 143
    mplew.writeInt("", -1);
    mplew.writeLong("", 0);
    mplew.write("", 0);
    mplew.write("", 0);
    mplew.write("", 0);


    // return mplew.getPacket("");
}
if (mplew.write("Islife", 0, 1)) {
    spawnNPCRequestControllerlife();
}
else {
    spawnNPCRequestController()
}