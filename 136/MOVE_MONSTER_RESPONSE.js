function MOVE_MONSTER_RESPONSE()//sub_BD7520(int Packet, const CHAR *lpMultiByteStr)
{
    mplew.writeInt("Mob_id");
    mplew.writeShort("moveid");
    mplew.write("bool_useSkills");    // useSkills ? 1 : 0
    mplew.writeInt("int_unk currentMp skillId skillLevel");            // ??未知
    //   v2[143] = sub_42C9E0(int_unk, (v2 + 141));
    mplew.writeInt("int_unk2",0);           // 未知??
    mplew.write("byt_unk3",0);
    mplew.writeInt("iPacketa",0);
}
 MOVE_MONSTER_RESPONSE();