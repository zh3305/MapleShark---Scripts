size = mplew.write("partylist.size()");
for (var i = 0; i < size; i++) {
    mplew.StartNode("party " + i);
    mplew.writeInt("party.getId()");
    mplew.writeMapleAsciiString("party.getLeader().getName()");
    mplew.write("party.getLeader().getLevel()");
    mplew.write("party.getLeader().isOnline() ? 1 : 0");
    mplew.writeMapleAsciiString("party.getName()");
    getMemberss = mplew.write("party.getMembers().size()");
    for (var j = 0; j < getMemberss; j++) {
        mplew.StartNode("getMembers " + i);
        // for (MaplePartyCharacter ch : party.getMembers()) {
        mplew.writeInt("ch.getId()");
        mplew.writeMapleAsciiString("ch.getName()");
        mplew.writeShort("ch.getJobId()");
        mplew.writeShort("137 new",0);
        mplew.write("ch.getLevel()");
        mplew.write("ch.isOnline() ? 1 : 0");
        mplew.write(-1);
        mplew.EndNode(false);
    }
    mplew.EndNode(false);
}