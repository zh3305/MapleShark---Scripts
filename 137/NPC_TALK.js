NPC_TALK();
function NPC_TALK() {
  Int_4 = mplew.write("Int_4");          // /mplew.write(4);
  Int_npcID = mplew.writeInt("Int_npcID");       //  mplew.writeInt(npc);
  if (mplew.write("unk", 0)) {
    mplew.writeInt("unk", 0);
  }
  Byt_msgType = mplew.write("Byt_msgType");    // msgType
  type = mplew.write("type");// 
  var type2 = mplew.write("type2");          // type2
  switch (Byt_msgType) {
    case 0:
      mplew.StartNode("msgType :" + 0);
      sub_D9C230(type/* v2, Int_4, Int_npcID, iPacket, type, type2 */);// 136 var break;
      mplew.EndNode(false);
      break;
    case 1:
      mplew.StartNode("msgType :" + 1);
      sub_D9C4A0(/* v2, Int_4, Int_npcID, iPacket, type, type2 */);
      mplew.EndNode(false);
      break;
    case 2:
      mplew.StartNode("msgType :" + 2);
      sub_D9C720(/* v2, Int_4, Int_npcID, iPacket, type */);// 136 var break;
      mplew.EndNode(false);
      break;
    case 3:
      mplew.StartNode("msgType :" + 3);
      sub_D9CCF0(type/* v2, Int_4, Int_npcID, iPacket, type, 0, 0, type2 */);// 136 var break;
      mplew.EndNode(false);
      break;
    case 0x10:
      mplew.StartNode("msgType :" + 0x10);
      sub_D9CCF0(type/* v2, Int_4, Int_npcID, iPacket, type, 0, 1, type2 */);// 163 var break;
      mplew.EndNode(false);
      break;
    case 0x11:
      mplew.StartNode("msgType :" + 0x11);                                  // 16+1
      sub_D9CF40(/* v2, Int_4, Int_npcID, iPacket, type, 0, 1, type2 */);
      mplew.EndNode(false);
      break;
    case 4:
      mplew.StartNode("msgType :" + 4);                                     // 3+1
      sub_D9D190(type/* v2, Int_4, Int_npcID, iPacket, type, type2 */);
      mplew.EndNode(false);
      break;
    case 0x12:
      mplew.StartNode("msgType :" + 0x12);                                  // 137 new
      sub_D9D440(type/* v2, Int_4, Int_npcID, iPacket, type, type2 */);
      mplew.EndNode(false);
      break;
    case 0x25:
      mplew.StartNode("msgType :" + 0x25);                                  // 34+3
      sub_D9D6D0(/* v2, Int_4, Int_npcID, iPacket, type */);// 136 var break;
      mplew.EndNode(false);
      break;
    case 5:
      mplew.StartNode("msgType :" + 5);
      sub_D9DA90(/* v2, Int_4, Int_npcID, iPacket, type */);
      mplew.EndNode(false);
      break;
    case 6:
      mplew.StartNode("msgType :" + 6);
      sub_D9DD00(type/* Int_4, Int_npcID, iPacket, type, type2 */);
      mplew.EndNode(false);
      break;
    case 0xA:
      mplew.StartNode("msgType :" + 0xA);
      sub_DA2300(/* v2, Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x22:
      mplew.StartNode("msgType :" + 0x22);
      sub_D9DF50(/* v2, Int_4, Int_npcID, iPacket */);// 136 var break;
      mplew.EndNode(false);
    case 0x28:
      mplew.StartNode("msgType :" + 0x28);
      sub_D9E7F0(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x29:
      mplew.StartNode("msgType :" + 0x29);
      sub_D9EC60(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x2A:
      mplew.StartNode("msgType :" + 0x2A);
      sub_DA38C0(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x2B:
      mplew.StartNode("msgType :" + 0x2B);
      sub_DA4340(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x2C:
      mplew.StartNode("msgType :" + 0x2C);
      sub_DA2D30(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x2D:
      mplew.StartNode("msgType :" + 0x2D);
      sub_DA3330(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0xB:
      mplew.StartNode("msgType :" + 0xB);
      sub_D9F0B0(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0xC:
      mplew.StartNode("msgType :" + 0xC);
      sub_D9F7F0(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0xD:
      mplew.StartNode("msgType :" + 0xD);
      sub_D9FC90(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0xE:
      mplew.StartNode("msgType :" + 0xE);                                   // 13+1
      sub_DA0150(/* v2, Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 7:
      mplew.StartNode("msgType :" + 7);                                     // 6+1
      sub_D9A9F0(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 8:
      mplew.StartNode("msgType :" + 8);
      sub_D9AA10(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 9:
      mplew.StartNode("msgType :" + 9);                                     // 8+1
      sub_D9AA30(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x13:
      mplew.StartNode("msgType :" + 0x13);
      sub_DA4F10(/* v2, iPacket */);                  // 17+2
      mplew.EndNode(false);
      break;
    case 0x18:
      mplew.StartNode("msgType :" + 0x18);                                  // 21+3
      sub_D9B590(/* v2, iPacket, type */);
      mplew.EndNode(false);
      break;
    case 0x19:
      mplew.StartNode("msgType :" + 0x19);                                  // 22+3
      sub_D9B720(/* v2, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x1A:
      mplew.StartNode("msgType :" + 0x1A);                                  // 23+3
      sub_D9CA20(type, 0/* Int_4, Int_npcID, iPacket, type, 0 */);
      mplew.EndNode(false);
      break;
    case 0x1B:
      mplew.StartNode("msgType :" + 0x1B);
      sub_D9CA20(type, 1/* Int_4, Int_npcID, iPacket, type, 1 */);
      mplew.EndNode(false);
      break;
    case 0x1C:
      mplew.StartNode("msgType :" + 0x1C);
      sub_DA05C0(type, 0/* Int_4, Int_npcID, iPacket, type, 0, 0, 0 */);
      mplew.EndNode(false);
      break;
    case 0x1D:
      mplew.StartNode("msgType :" + 0x1D);
      sub_DA05C0(type, 0/* Int_4, Int_npcID, iPacket, type, 0, 1, 0 */);
      mplew.EndNode(false);
      break;
    case 0x1E:
      mplew.StartNode("msgType :" + 0x1E);                                  // 27+3
      sub_DA0890(type, 0/* v2, Int_4, Int_npcID, iPacket, type, 0 */);
      mplew.EndNode(false);
      break;
    case 0x1F:
      mplew.StartNode("msgType :" + 0x1F);
      sub_DA05C0(type, 1/* Int_4, Int_npcID, iPacket, type, 0, 0, 1 */);
      mplew.EndNode(false);
      break;
    case 0x20:
      mplew.StartNode("msgType :" + 0x20);
      sub_DA05C0(type, 1/* Int_4, Int_npcID, iPacket, type, 0, 1, 1 */);
      mplew.EndNode(false);
      break;
    case 0x21:
      mplew.StartNode("msgType :" + 0x21);                                  // 30+3
      sub_DA0890(type, 1/* v2, Int_4, Int_npcID, iPacket, type, 1 */);
      mplew.EndNode(false);
      break;
    case 0x24:
      mplew.StartNode("msgType :" + 0x24);                                  // 33+3
      sub_DA0B40(/* Int_4, Int_npcID, iPacket, type */);
      mplew.EndNode(false);
      break;
    case 0x26:
      mplew.StartNode("msgType :" + 0x26);                                  // 35+3
      sub_DA0E70(/* v2, Int_4, Int_npcID, iPacket, type */);
      mplew.EndNode(false);
      break;
    case 0x2F:
      mplew.StartNode("msgType :" + 0x2F);                                  // 44+3
      sub_DA1160(/* v2, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x32:
      mplew.StartNode("msgType :" + 0x32);                                  // 46+4
      sub_DA13C0(/* iPacket */);
      mplew.EndNode(false);
      break;
    case 0x33:
      mplew.StartNode("msgType :" + 0x33);                                  // 47+4
      sub_DA14E0(/* iPacket */);
      mplew.EndNode(false);
      break;
    case 0x34:
      mplew.StartNode("msgType :" + 0x34);                                  // 48+4
      sub_D9B8C0(/* iPacket */);
      mplew.EndNode(false);
      break;
    case 0x39:
      mplew.StartNode("msgType :" + 0x39);
      sub_D9AA50(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x3A:
      mplew.StartNode("msgType :" + 0x3A);
      sub_D9B960(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x3B:
      mplew.StartNode("msgType :" + 0x3B);                                  // 55+4
      sub_D9BDD0(/* Int_4, Int_npcID, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x3C:
      mplew.StartNode("msgType :" + 0x3C);
      sub_DA1680(type, 0/* v2, Int_4, Int_npcID, iPacket, type, 0 */);// 57+3
      mplew.EndNode(false);
      break;
    case 0x3D:
      mplew.StartNode("msgType :" + 0x3D);                                  // 137 new
      sub_DA1680(type, 1/* v2, Int_4, Int_npcID, iPacket, type, 1 */);
      mplew.EndNode(false);
      break;
    case 0x3E:
      mplew.StartNode("msgType :" + 0x3E);                                  // 58+4
      sub_DA1950(type, 0/* v2, Int_4, Int_npcID, iPacket, type, 0, 0, 0 */);
      mplew.EndNode(false);
      break;
    case 0x3F:
      mplew.StartNode("msgType :" + 0x3F);
      sub_DA1950(type, 0/* v2, Int_4, Int_npcID, iPacket, type, 0, 1, 0 */);
      mplew.EndNode(false);
      break;
    case 0x40:
      mplew.StartNode("msgType :" + 0x40);                                  // 60+4
      sub_DA1C20(0/* v2, Int_4, Int_npcID, iPacket, type, 0 */);
      mplew.EndNode(false);
      break;
    case 0x41:
      mplew.StartNode("msgType :" + 0x41);
      sub_DA1950(type, 1/* v2, Int_4, Int_npcID, iPacket, type, 0, 0, 1 */);
      mplew.EndNode(false);
      break;
    case 0x42:
      mplew.StartNode("msgType :" + 0x42);
      sub_DA1950(type, 1/* v2, Int_4, Int_npcID, iPacket, type, 0, 1, 1 */);
      mplew.EndNode(false);
      break;
    case 0x43:
      mplew.StartNode("msgType :" + 0x43);
      sub_DA1C20(1/* v2, Int_4, Int_npcID, iPacket, type, 1 */);// 63+4
      mplew.EndNode(false);
      break;
    case 0x44:
      mplew.StartNode("msgType :" + 0x44);
      sub_DA1ED0(/* v2, iPacket */);
      mplew.EndNode(false);
      break;
    case 0x45:
      mplew.StartNode("msgType :" + 0x45);
      sub_DA20C0(/* v2, iPacket */);
      mplew.EndNode(false);
      break;
    default:
      break;
  }
  var regR = /\r/g;
  var regN = /\n/g;
  talk = talk.replace(regR, "\\r").replace(regN, "\\n");
  // return type2;
  switch (Byt_msgType) {
    case 0x1D:
      //旧对话框 带 大 NPC 图片 9130021 1 0 //接收 拒绝
      mplew.LogAppend("cm.sendAcceptDecline(\"" + talk + "\")");
    case 0x1A:
      //旧对话框 带 大 NPC 图片 0 0 9130021 1 0 //带下一步 停止
      // 1 1 9130021 1 0  /上一步 下一步 停止
      mplew.LogAppend("cm.sendSimple(\"" + talk + "\")");
      break;
    case 0x44:
      //unk1==1 type==0 tye2==0
      mplew.LogAppend("cm.限时选择(\"" + talk + "\"," + Timeout + ")");
      break;
    case 6:
      //新选择框 type2==1 type==0x38
      mplew.LogAppend("cm.sendNewSimple(\"" + talk + "\")");
      break;
    case 5:
      "sendSimpleSNew"
      mplew.LogAppend("cm.sendSimple(\"" + talk + "\")");
      break;
    case 3:
      if (type2 == 1) {
        // //新选择框 type2==1 type==0x24 是否 终止对话
        mplew.LogAppend("cm.sendYesNoSNew(\"" + talk + "\")");
      } else {
        "sendYesNoSNew"
        mplew.LogAppend("cm.sendYesNo(\"" + talk + "\")");
      }
      break;
    case 0:
      switch (zeroPad(typea, 2) + zeroPad(typea2, 2)) {
        case "0100":
          "sendPrevSNew"
          mplew.LogAppend("cm.sendPrev(\"" + talk + "\")");
          break;
        case "0101":
          if (type == 0x8) {
            //接受 拒绝 sendAcceptDecline
            mplew.LogAppend("cm.sendAcceptDecline(\"" + talk + "\")");
          }
          else if (type == 0x38) {
            //新对话框 下一步 带终止对话   tye2==1  unk1==0    玩家头像
            mplew.LogAppend("cm.sendNewNext(\"" + talk + "\")");
          }
          else if (type == 0x24) {
            //新对话框 下一步 带终止对话   tye2==1  unk1==0   
            mplew.LogAppend("cm.sendNewNext(\"" + talk + "\")");
          }
          else if (type == 0x25) {
            //新对话框 下一步   tye2==1  unk1==1   #face2# 新头像 ("#face2#哇! 就是这个人吗? \r\n传说中的勇士? ")
            mplew.LogAppend("cm.sendNewNext(\"" + talk + "\")");
          }
          else if (type == 39) {
            //新对话框 下一步   tye2==1  unk1==1   玩家头像
            mplew.LogAppend("cm.sendNewNext(\"" + talk + "\")");
          } else {
            "sendNextPrevSNew"
            mplew.LogAppend("cm.sendNextPrev(\"" + talk + "\")");
          }
          break;
        case "0001":
          "sendNextSNew"
          mplew.LogAppend("cm.sendNext(\"" + talk + "\")");
          break;
        case "0000":
          mplew.LogAppend("cm.sendOk(\"" + talk + "\")");
          "sendOkSNew"
          break;
      }
      break;

  }
}
function zeroPad(nub, digits) {
  var loop = digits;
  var zeros = "";
  while (loop) {
    zeros += "0";
    loop--;
  }
  return (nub.toString().length > digits) ?
    nub.toString() : (zeros + nub).slice(-digits);
}
var Timeout;//时间
var typea;//对话框形式
var typea2;
var talk;//對話
function sub_D9C230(/*  */type)
//void __thiscall sub_D9C230 (/* int *this, var a2, var Int_npcID, var CInPacket2, var type, int type2 */)
{
  if (type & 4)
    Int_npcID = mplew.writeInt("Int_npcID");
  talk = mplew.writeMapleAsciiString("");
  typea = mplew.write("typea");
  typea2 = mplew.write("typea2");
  mplew.writeInt("New 未知", 0);
}
function sub_D9C4A0(/*  */)
//void __thiscall sub_D9C4A0 (/* char *this, var a2, var a3, var a4, var a5, int *a6 */)
{
  talk = mplew.writeMapleAsciiString("");
  typea = mplew.write("typea");
  typea2 = mplew.write("typea2");
  v8 = mplew.writeInt("137 new");
}
function sub_D9C720(/*  */)
//int __thiscall sub_D9C720 (/* char *this, var a2, var a3, var iPacket, unsigned __int8 a5 */)
{
  v16 = mplew.write("v16");
  v17 = v16;
  if (v16 > 0) {
    v7 = v16;
    do {
      talk = mplew.writeMapleAsciiString("");
      --v7;
    }
    while (v7);
  }
}
function sub_D9CCF0(type/*  */)
//void __thiscall sub_D9CCF0 (/* void *this, var a2, var a3, var iPacket, var type, var a6, var a7, int *a8 */)
{
  if (type & 4)
    a3 = mplew.writeInt("a3");
  talk = mplew.writeMapleAsciiString("");
}
function sub_D9CF40(/*  */)
//void __thiscall sub_D9CF40 (/* char *this, var a2, var a3, var iPacket, var a5, var a6, var a7, int *a8 */)
{
  v28 = mplew.writeInt("v28");
  talk = mplew.writeMapleAsciiString("");
}
function sub_D9D190(type/*  */)
//void __thiscall sub_D9D190 (/* char *this, var a2, var a3, var iPacket, var a5, int a6 */)
{
  if (type & 4)
    a3 = mplew.writeInt("a3");
  talk = mplew.writeMapleAsciiString("");
  talk = mplew.writeMapleAsciiString("");
  v27 = mplew.writeShort("v27");
  v26 = mplew.writeShort("v26");
} function sub_D9D440(type/*  */)
//void __thiscall sub_D9D440 (/* char *this, var a2, var a3, var iPacket_1, var type, char *a6 */)
{
  if (type & 4)
    a3 = mplew.writeInt("a3");
  talk = mplew.writeMapleAsciiString("");
  talk = mplew.writeMapleAsciiString("");
  v26 = mplew.writeShort("v26");
  v25 = mplew.writeShort("v25");
}
function sub_D9D6D0(/*  */) {
  v7 = mplew.writeShort("v7");
  talk = mplew.writeMapleAsciiString("");
  talk = mplew.writeMapleAsciiString("");
  v8 = mplew.writeShort("v8");
  v35 = mplew.writeShort("v35");
  v34 = mplew.writeShort("v34");
  a4 = mplew.writeShort("a4");
}
function sub_D9DA90(/*  */) {
  talk = mplew.writeMapleAsciiString("");
  v28 = mplew.writeInt("v28");
  v27 = mplew.writeInt("v27");
  v7 = mplew.writeInt("v7");
}
function sub_D9DD00(type/*  */) {
  if (type & 4)
    a3 = mplew.writeInt("a3");
  talk = mplew.writeMapleAsciiString("");
}
function sub_DA2300(/*  */)
//void __thiscall sub_DA2300 (/* _DWORD *this, var a2, char **a3, int *iPacket */)
{
  v91 = mplew.write("") != 0;
  v90 = mplew.write("") != 0;
  talk = mplew.writeMapleAsciiString("");
  for (i = mplew.write("i"); i > 0; --i) {
    v7 = mplew.writeInt("v7");
  }
  if (false) {
  }
  else {
    iPacket = mplew.writeInt("iPacket");
  }
}
function sub_D9DF50(/*  */) {
  talk = mplew.writeMapleAsciiString("");
  v81 = mplew.writeInt("v81");
  for (i = mplew.write("i"); i > 0; --i) {
    v7 = mplew.writeInt("v7");
  }
  v80 = mplew.writeInt("v80");
  for (j = mplew.write("j"); j > 0; --j) {
    v9 = mplew.writeInt("v9");
  }
  v81 = 1; //sub_772D70 (/* v19, v19 */);
  if (v81 == 3) {
  }
  else {
    a4 = mplew.writeInt("a4");
  }
}
function sub_D9E7F0(/*  */)
//void __thiscall sub_D9E7F0 (/* void *this, var a2, var a3, int iPacket */)
{
  v46 = mplew.write("") != 0;
  v45 = mplew.write("") != 0;
  mplew.write("");
  talk = mplew.writeMapleAsciiString("");
  v5 = mplew.write("v5");
  v7 = v5;
  if (v5 > 0) {
    do {
      v8 = mplew.writeInt("v8");
      --v7;
    }
    while (v7 > 0);
  }
  if (true) {
    v12 = 10 * (mplew.writeInt("") / 0xA);
  }
}
function sub_D9EC60(/*  */)
//void __thiscall sub_D9EC60 (/* _DWORD *this, var a2, var a3, int iPacket */)
{
  mplew.write("");
  talk = mplew.writeMapleAsciiString("");
  v5 = mplew.write("v5");
  v7 = v5;
  if (v5 > 0) {
    do {
      v8 = mplew.writeInt("v8");
      --v7;
    }
    while (v7 > 0);
  }
  v10 = (mplew.writeInt("") / 0xA);
  v12 = (mplew.writeInt("") / 0xA);
}
function sub_DA38C0(/*  */)
//void __thiscall sub_DA38C0 (/* void *this, var a2, var a3, int a4 */)
{
  v89 = mplew.writeInt("v89");
  v86 = mplew.write("") != 0;
  v5 = mplew.writeInt("v5");
  v85 = mplew.writeInt("v85");
  talk = mplew.writeMapleAsciiString("");
}
function sub_DA4340(/*  */)
//void __thiscall sub_DA4340 (/* void *this, var a2, var a3, int a4 */)
{
  v89 = mplew.writeInt("v89");
  v86 = mplew.write("") != 0;
  v5 = mplew.writeInt("v5");
  v85 = mplew.writeInt("v85");
  talk = mplew.writeMapleAsciiString("");
}
function sub_DA2D30(/*  */) {
  v62 = mplew.write("") != 0;
  v57 = mplew.write("") != 0;
  mplew.write("");
  talk = mplew.writeMapleAsciiString("");
  v5 = mplew.write("v5");
  if (v5 == 3) {
    v8 = mplew.writeInt("v8");
    v9 = mplew.writeInt("v9");
    v10 = mplew.writeInt("v10");
  } else {
    if (v5 != 6) {
      return;
    }
    v12 = mplew.writeInt("v12");
    v13 = mplew.writeInt("v13");
    v63 = mplew.writeInt("v63");
    v60 = mplew.writeInt("v60");
    v61 = mplew.writeInt("v61");
    v14 = mplew.writeInt("v14");
  }
}

function sub_DA3330(/*  */) {
  mplew.write("");
  talk = mplew.writeMapleAsciiString("");
  mplew.write("");
  v7 = mplew.writeInt("v7");
  v8 = mplew.writeInt("v8");
  v55 = mplew.writeInt("v55");
  v56 = mplew.writeInt("v56");
  v57 = mplew.writeInt("v57");
  v9 = mplew.writeInt("v9");
  mplew.writeInt("");
  mplew.writeInt("");
}
function sub_D9F0B0(/*  */) {
  talk = mplew.writeMapleAsciiString("");
  for (i = mplew.write("i"); i > 0; --i) {
    v6 = mplew.writeInt("v6");
  }
  v62 = mplew.writeInt("v62");
}
function sub_D9F7F0(/*  */) {
  talk = mplew.writeMapleAsciiString("");
  v39 = mplew.write("v39");
  if (v39 <= 0)
    return;
  v38 = v39;
  do {
    v45 = mplew.writeBuffer("v45", 8);
    mplew.write("");
    --v38;
  }
  while (v38);
}
function sub_D9FC90(/*  */) {
  talk = mplew.writeMapleAsciiString("");
  v40 = mplew.write("v40");
  v42 = mplew.write("v42");
  if (v40 > 0) {
    v39 = v40;
    do {
      v47 = mplew.writeBuffer("v47", 8);
      mplew.write("");
      --v39;
    }
    while (v39);
  }
}
function sub_DA0150(/*  */) {
  talk = v4 = mplew.writeMapleAsciiString("");
  v5 = 12 - (v4 != 0);
  if (v5 == 11) {
    v7 = mplew.write("v7");
    if (v7 <= 0) {
      return;
    }
    if (v7 > 0) {
      v33 = v7;
      do {
        v40 = mplew.writeBuffer("v40", 8);
        mplew.write("");
        --v33;
      }
      while (v33);
    }
  }
}
function sub_D9A9F0(/*  */) {
  sub_19DE160(/* 0, a3 */);
}
function sub_19DE160(/*  */) {
  v4 = mplew.write("v4");
  if (v4) {
    // if (v4 == 1)
    // v2[7704] = 0;
  }
  else {
    talk = mplew.writeMapleAsciiString("");
    talk = mplew.writeMapleAsciiString("");
    talk = mplew.writeMapleAsciiString("");
    v5 = mplew.writeInt("v5");
    v6 = mplew.writeInt("v6");
    mplew.writeInt("");
  }
}
function sub_19CB570(/*  */) {
  v4 = mplew.write("v4");
  if (v4) {
    // result = v4 - 1;
    // if (!result)
    //   v3[7704] = 0;
  }
  else {
    v6 = mplew.writeInt("v6");
    v7 = mplew.writeInt("v7");
    v8 = mplew.writeInt("v8");
    v9 = mplew.writeInt("v9");
    mplew.writeInt("");
  }
}
function sub_D9AA10(/*  */) {
  return sub_19CB570(/* 0, a3 */);
}
function sub_D9AA30(/*  */) {
  return sub_19DE340(/* a3 */);
}
function sub_19DE340(/*  */) {
  v4 = mplew.write("v4");
  if (v4) {
    // if ( v4 == 1 )
    //   v2[7704] = 0;
  }
  else {
    talk = mplew.writeMapleAsciiString("");
    talk = mplew.writeMapleAsciiString("");
    mplew.writeInt("");
  }
} function sub_DA4F10(/*  */) {
  v2 = mplew.writeInt("v2");
  if (v2 && v2 != 2 && v2 != 3 && v2 != 4 && v2 != 5 && v2 != 6) {
    if (v2 == 1) {
      // v5 = sub_40DF90 (/* 0x22E6488, 0x114u */);
      v5 = true;
      if (v5) {
        // v6 = sub_E70300(/* v5, iPacket */);
        mplew.writeInt("");
        talk = mplew.writeMapleAsciiString("");
      }
    }
    return;
  }
  v9 = true;// sub_40DF90 (/* 0x22E6488, 0x1528u */);
  if (v9) {
    // v10 = sub_E74750(/* v9, iPacket, v2, 2 * (v2 == 4) + 8 */);
    mplew.writeInt("");
    talk = mplew.writeMapleAsciiString("");
  }
}
function sub_D9B590(/* _DWORD *this@<ecx>, signed __int32 ebx0@<ebx>, var iPacket, int a3 */) {
  v5 = mplew.writeInt("v5");
  v6 = v5;
  if (v5 && v5 != 1) {
  }
  else {
    v7 = true;//sub_40DF90(/* 0x22E6488, 0x15C0u */);
    if (v7)
      v8 = sub_DA6110(/* v7, iPacket, v6 */);
  }
}
function sub_DA6110(/*  */) {
  mplew.writeInt("");
  v5 = mplew.writeInt("v5");
  if (v5 > 0) {
    a3 = v5;
    do {
      talk = v7 = mplew.writeMapleAsciiString("v7");
      --a3;
    }
    while (a3);
  }
}
function sub_D9B720()
{ }
function sub_D9CA20(type, a6/*  */)
//void __thiscall sub_D9CA20 (/* void *this, var a2, var a3, var iPacket, unsigned var type, int a6 */)
{
  if (type & 4)
    a3 = mplew.writeInt("a3");
  talk = mplew.writeMapleAsciiString("");
  v31 = mplew.write("v31");
  v30 = mplew.write("v30");
  v29 = mplew.writeInt("v29");
  v28 = mplew.writeInt("v28");
  if (a6) {
    v33 = mplew.writeInt("v33");
    v32 = mplew.writeInt("v32");
  }
  else {
    v33 = mplew.write("v33");
  }
}
function sub_DA05C0(type, set/*  */)
//void __thiscall sub_DA05C0 (/* void *this, var a2, var a3, var iPacket, unsigned var type, var a6, var a7, int set */)
{
  if (type & 4)
    v10 = mplew.writeInt("v10");
  talk = mplew.writeMapleAsciiString("");
  v33 = mplew.writeInt("v33");
  v32 = mplew.writeInt("v32");
  if (set) {
    v35 = mplew.writeInt("v35");
    v34 = mplew.writeInt("v34");
  }
  else {
    v35 = mplew.write("v35");
  }
}
function sub_DA0890(/*  */)
//void __thiscall sub_DA0890 (/* void *this, var a2, var a3, var a4, var a5, int set */)
{
  talk = mplew.writeMapleAsciiString("");
  v27 = mplew.writeInt("v27");
  v26 = mplew.writeInt("v26");
  if (set) {
    v29 = mplew.writeInt("v29");
    v28 = mplew.writeInt("v28");
  }
  else {
    v29 = mplew.write("v29");
  }
}
function sub_DA0B40(/*  */) {
  talk = mplew.writeMapleAsciiString("");
  v42 = mplew.writeInt("v42");
  v8 = mplew.writeInt("v8");
  if (v8 > 0) {
    v7 = v8;
    do {
      v9 = mplew.writeInt("v9");
      --v7;
    }
    while (v7);
  }
}
function sub_DA0E70(/*  */) {
  v7 = mplew.writeInt("v7");
  a4 = mplew.write("a4");
  talk = mplew.writeMapleAsciiString("");
}
function sub_DA1160() {
}
function sub_DA13C0() {
  v7 = mplew.writeInt("v7");
}
function sub_DA14E0(/*  */) {
  v1 = mplew.writeInt("v1");
  if (v1) {
    if (v1 == 1) {
      mplew.writeInt("");
      talk = mplew.writeMapleAsciiString("");
    }
  }
  else {
    mplew.writeInt("");
    v2 = mplew.writeInt("v2");
  }
}
function sub_D9B8C0(/*  */) {
  v2 = mplew.writeInt("v2");
  if (v2 > 0) {
    v3 = v2;
    do {
      v4 = mplew.writeInt("v4");
      v5 = mplew.writeInt("v5");
      v8 = mplew.writeInt("v8");
      --v3;
    }
    while (v3);
  }
}
function sub_19E5700(/*  */) {
  v4 = mplew.write("v4");
  if (v4) {
    // if ( v4 == 1 )
    //   v2[7704] = 0;
  }
  else {
    talk = mplew.writeMapleAsciiString("");
    v16 = 0;
    v5 = mplew.writeInt("v5");
    v6 = mplew.writeInt("v6");
    v14 = mplew.writeInt("v14");
    v13 = mplew.writeInt("v13");
    mplew.writeInt("");
  }
}
function sub_D9AA50(/*  */) {
  sub_19E5700(/* 0, a3 */);
}
function sub_D9B960(/*  */) {
  for (i = mplew.write("i"); i > 0;) {
    v5 = mplew.writeInt("v5");
    --i;
  }
}
function sub_D9BDD0(/*  */) {
}

function sub_DA1680(type, set/*  */)
//void __thiscall sub_DA1680 (/* void *this, var a2, var a3, var iPacket, unsigned var type, int set */)
{
  if (type & 4)
    a3 = mplew.writeInt("a3");
  talk = mplew.writeMapleAsciiString("");
  v31 = mplew.write("v31");
  v30 = mplew.write("v30");
  v29 = mplew.writeInt("v29");
  v28 = mplew.writeInt("v28");
  if (set) {
    v33 = mplew.writeInt("v33");
    v32 = mplew.writeInt("v32");
  }
  else {
    v33 = mplew.write("v33");
  }
}
function sub_DA1950(type, set/*  */) {
  if (type & 4)
    v10 = mplew.writeInt("v10");
  talk = mplew.writeMapleAsciiString("");
  v33 = mplew.writeInt("v33");
  v32 = mplew.writeInt("v32");
  if (set) {
    v35 = mplew.writeInt("v35");
    v34 = mplew.writeInt("v34");
  }
  else {
    v35 = mplew.write("v35");
  }
}
function sub_DA1C20(set/*  */)
//void __thiscall sub_DA1C20 (/* void *this, var a2, var a3, var a4, var a5, int set */)
{
  talk = mplew.writeMapleAsciiString("");
  v27 = mplew.writeInt("v27");
  v26 = mplew.writeInt("v26");
  if (set) {
    v29 = mplew.writeInt("v29");
    v28 = mplew.writeInt("v28");
  }
  else {
    v29 = mplew.write("v29");
  }
}

function sub_DA1ED0(/*  */) {
  talk = mplew.writeMapleAsciiString("");
  Timeout = mplew.writeInt("限时选择时间");
}
function sub_DA20C0(/*  */) {
  talk = mplew.writeMapleAsciiString("");
  v3 = mplew.write("v3");
  v4 = mplew.write("v4");
  v5 = mplew.write("v5");
  v31 = mplew.write("v31");
  v23 = mplew.writeInt("v23");
}