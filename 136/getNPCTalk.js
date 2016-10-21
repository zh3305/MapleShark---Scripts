// mplew.write("",4);
// mplew.writeInt("npc");
// mplew.write("",0); // Boolean
// mplew.write("msgType");
// var type= mplew.write("type");
// var type2=mplew.write("type2");
// if ((type & 0x4) != 0) {
//     mplew.writeInt("diffNPC");
// }
// mplew.writeMapleAsciiString("talk");
// mplew.write("HexTool.getByteArrayFromHexString(endBytes)");
// mplew.writeInt("",0); // 178+

//var int___thiscall NPC_TALK(int this, CInPacket *CInPacket1)
function NPC_TALK()
{
 var int_v2; // edi@1
//   void *v3; // eax@2
 var int_v4; // edx@2
//   CInPacket *CInPacket2; // esi@3
 var int_Int_4; // ebp@3
 var int_Int_npcID; // ebx@3
 var int_Byt_msgType; // ST30_4@5
 var int_type2; // eax@5
 var int_v10; // [sp+18h] [bp-1Ch]@2
 var int_v11; // [sp+1Ch] [bp-18h]@2
 var char_v12; // [sp+20h] [bp-14h]@2
 var int_v13; // [sp+30h] [bp-4h]@2

//   v2 = this;
// //   if ( *(this + 4) )
//   {
//     v3 = sub_7AE200(&v12, 553648131);
//     v10 = *v3;
//     // v4 = *(v3 + 1);
//     v13 = 0;
//     v11 = v4;
//     sub_1A9483A(&v10, &dword_1FE37E4);
//   }
//   CInPacket2 = CInPacket1;
//   *(v2 + 4) = 1;
  Int_4 = Packet_ReadByte(CInPacket1);          // /mplew.write(4);
  Int_npcID = Packet_ReadInt(CInPacket1);       //  mplew.writeInt(npc);
  if ( Packet_ReadByte(CInPacket1) )
    Packet_ReadInt(CInPacket1);
  Byt_msgType = Packet_ReadByte(CInPacket1);    // msgType
  LOBYTE(CInPacket1) = Packet_ReadByte(CInPacket1);// type
  type2 = Packet_ReadByte(CInPacket2);          // type2
  switch ( Byt_msgType )
  {
    case 0:
      type2 = sub_D68F80(v2, Int_4, Int_npcID, CInPacket2, CInPacket1, type2);
      break;
    case 1:
      type2 = sub_D691F0(v2, Int_4, Int_npcID, &CInPacket2->m_bLoopback, CInPacket1);
      break;
    case 2:
      type2 = sub_D697C0(v2, Int_4, Int_npcID, CInPacket2, CInPacket1, 0, 0, type2);
      break;
    case 15:
      type2 = sub_D697C0(v2, Int_4, Int_npcID, CInPacket2, CInPacket1, 0, 1, type2);
      break;
    case 3:
      type2 = sub_D69A10(Int_4, Int_npcID, CInPacket2, CInPacket1, type2);
      break;
    case 16:
      type2 = sub_D69CA0(Int_4, Int_npcID, CInPacket2, CInPacket1, type2);
      break;
    case 34:
      type2 = sub_D69F30(Int_4, Int_npcID, CInPacket2, CInPacket1);
      break;
    case 4:
      type2 = sub_D6A2F0(Int_4, Int_npcID, CInPacket2, CInPacket1);
      break;
    case 5:
      type2 = sub_D6A560(Int_4, Int_npcID, CInPacket2, CInPacket1, type2);
      break;
    case 9:
      type2 = sub_D6E730(Int_4, Int_npcID, CInPacket2);
      break;
    case 31:
      type2 = sub_D6A7B0(Int_4, Int_npcID, CInPacket2);
      break;
    case 37:
      type2 = sub_D6B050(Int_4, Int_npcID, CInPacket2);
      break;
    case 38:
      type2 = sub_D6B4C0(Int_4, Int_npcID, CInPacket2);
      break;
    case 39:
      type2 = sub_D6FCF0(Int_4, Int_npcID, CInPacket2);
      break;
    case 40:
      type2 = sub_D70710(Int_4, Int_npcID, CInPacket2);
      break;
    case 41:
      type2 = sub_D6F160(Int_4, Int_npcID, CInPacket2);
      break;
    case 42:
      type2 = sub_D6F760(Int_4, Int_npcID, CInPacket2);
      break;
    case 10:
      type2 = sub_D6B910(Int_4, Int_npcID, CInPacket2);
      break;
    case 11:
      type2 = sub_D6C050(Int_4, Int_npcID, CInPacket2);
      break;
    case 12:
      type2 = sub_D6C4F0(Int_4, Int_npcID, CInPacket2);
      break;
    case 13:
      type2 = sub_D6C9B0(Int_4, Int_npcID, CInPacket2);
      break;
    case 6:
      type2 = sub_D67860(Int_4, Int_npcID, CInPacket2);
      break;
    case 7:
      type2 = sub_D67880(Int_4, Int_npcID, CInPacket2);
      break;
    case 8:
      type2 = sub_D678A0(Int_4, Int_npcID, CInPacket2);
      break;
    case 17:
      type2 = sub_D71280(CInPacket2);
      break;
    case 21:
      type2 = sub_D682E0(CInPacket2, CInPacket1);
      break;
    case 22:
      type2 = sub_D68470(CInPacket2);
      break;
    case 23:
      type2 = sub_D694F0(Int_4, Int_npcID, CInPacket2, CInPacket1, 0);
      break;
    case 24:
      type2 = sub_D694F0(Int_4, Int_npcID, CInPacket2, CInPacket1, 1);
      break;
    case 25:
      type2 = sub_D6CE20(Int_4, Int_npcID, CInPacket2, CInPacket1, 0, 0, 0);
      break;
    case 26:
      type2 = sub_D6CE20(Int_4, Int_npcID, CInPacket2, CInPacket1, 0, 1, 0);
      break;
    case 27:
      type2 = sub_D6D0F0(Int_4, Int_npcID, CInPacket2, CInPacket1, 0);
      break;
    case 28:
      type2 = sub_D6CE20(Int_4, Int_npcID, CInPacket2, CInPacket1, 0, 0, 1);
      break;
    case 29:
      type2 = sub_D6CE20(Int_4, Int_npcID, CInPacket2, CInPacket1, 0, 1, 1);
      break;
    case 30:
      type2 = sub_D6D0F0(Int_4, Int_npcID, CInPacket2, CInPacket1, 1);
      break;
    case 33:
      type2 = sub_D6D3A0(Int_4, Int_npcID, CInPacket2, CInPacket1);
      break;
    case 35:
      type2 = sub_D6D6D0(Int_4, Int_npcID, CInPacket2, CInPacket1);
      break;
    case 44:
      type2 = sub_D6D9C0(Int_npcID, CInPacket2);
      break;
    case 46:
      type2 = sub_D6DC20(CInPacket2);
      break;
    case 47:
      type2 = sub_D6E590(CInPacket2);
      break;
    case 48:
      type2 = sub_D68610(CInPacket2);
      break;
    case 53:
      type2 = sub_D678C0(Int_4, Int_npcID, CInPacket2);
      break;
    case 54:
      type2 = sub_D686B0(Int_4, Int_npcID, CInPacket2);
      break;
    case 55:
      type2 = sub_D68B20(Int_4, Int_npcID, CInPacket2);
      break;
    case 56:
      type2 = sub_D6DD40(Int_4, Int_npcID, CInPacket2, CInPacket1, 0);
      break;
    case 57:
      type2 = sub_D6DD40(Int_4, Int_npcID, CInPacket2, CInPacket1, 1);
      break;
    case 58:
      type2 = sub_D6E010(Int_4, Int_npcID, CInPacket2, CInPacket1, 0, 0, 0);
      break;
    case 59:
      type2 = sub_D6E010(Int_4, Int_npcID, CInPacket2, CInPacket1, 0, 1, 0);
      break;
    case 60:
      type2 = sub_D6E2E0(Int_4, Int_npcID, CInPacket2, CInPacket1, 0);
      break;
    case 61:
      type2 = sub_D6E010(Int_4, Int_npcID, CInPacket2, CInPacket1, 0, 0, 1);
      break;
    case 62:
      type2 = sub_D6E010(Int_4, Int_npcID, CInPacket2, CInPacket1, 0, 1, 1);
      break;
    case 63:
      type2 = sub_D6E2E0(Int_4, Int_npcID, CInPacket2, CInPacket1, 1);
      break;
    default:
      break;
  }
//   *(v2 + 4) = 0;
  return type2;
}