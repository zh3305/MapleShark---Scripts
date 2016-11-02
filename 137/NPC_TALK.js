NPC_TALK();
function NPC_TALK()
{
  Int_4 = mplew.write("Int_4");          // /mplew.write(4);
  Int_npcID = mplew.writeInt("Int_npcID");       //  mplew.writeInt(npc);
  if (mplew.write(""))
    mplew.writeInt("");
  Byt_msgType = mplew.write("Byt_msgType");    // msgType
  type = mplew.write("type");// 
  var type2 = mplew.write("type2");          // type2
  switch (Byt_msgType) {
    case 0:
      mplew.StartNode("sub_D68F80");
      type2 = sub_D68F80(type/* v2, Int_4, Int_npcID, CInPacket2, type, type2 */);
      mplew.EndNode(false);
      break;
    case 1:
      mplew.StartNode("sub_D691F0");
      type2 = sub_D691F0(/* v2, Int_4, Int_npcID, CInPacket2.m_bLoopback, type */);
      mplew.EndNode(false);
      break;
    case 2:
      mplew.StartNode("sub_D697C0");
      type2 = sub_DA2300(type, 0, 0, type2 /* v2, Int_4, Int_npcID, CInPacket2, type, 0, 0, type2 */);
      mplew.EndNode(false);
      break;
    case 15:
      mplew.StartNode("sub_D697C0");
      type2 = sub_DA2300(type, 0, 1, type2/* v2, Int_4, Int_npcID, CInPacket2, type, 0, 1, type2 */);
      mplew.EndNode(false);
      break;
    case 3:
      mplew.StartNode("sub_D69A10");
      type2 = sub_D69A10(type/* Int_4, Int_npcID, CInPacket2, type, type2 */);
      mplew.EndNode(false);
      break;
    case 16:
      mplew.StartNode("sub_D69CA0");
      type2 = sub_D69CA0(/* Int_4, Int_npcID, CInPacket2, type, type2 */);
      mplew.EndNode(false);
      break;
    case 34:
      mplew.StartNode("sub_D69F30");
      type2 = sub_D69F30(/* Int_4, Int_npcID, CInPacket2, type */);
      mplew.EndNode(false);
      break;
    case 4:
      mplew.StartNode("sub_D6A2F0");
      type2 = sub_D6A2F0(/* Int_4, Int_npcID, CInPacket2, type */);
      mplew.EndNode(false);
      break;
    case 5:
      mplew.StartNode("sub_D6A560");
      type2 = sub_D6A560(type/* Int_4, Int_npcID, CInPacket2, type, type2 */);
      mplew.EndNode(false);
      break;
    case 9:
      mplew.StartNode("sub_D6E730");
      type2 = sub_D6E730(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 31:
      mplew.StartNode("sub_D6A7B0");
      type2 = sub_D6A7B0(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 37:
      mplew.StartNode("sub_D6B050");
      type2 = sub_D6B050(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 38:
      mplew.StartNode("sub_D6B4C0");
      type2 = sub_D6B4C0(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 39:
      mplew.StartNode("sub_D6FCF0");
      type2 = sub_D6FCF0(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 40:
      mplew.StartNode("sub_D70710");
      type2 = sub_D70710(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 41:
      mplew.StartNode("sub_D6F160");
      type2 = sub_D6F160(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 42:
      mplew.StartNode("sub_D6F760");
      type2 = sub_D6F760(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 10:
      mplew.StartNode("sub_D6B910");
      type2 = sub_D6B910(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 11:
      mplew.StartNode("sub_D6C050");
      type2 = sub_D6C050(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 12:
      mplew.StartNode("sub_D6C4F0");
      type2 = sub_D6C4F0(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 13:
      mplew.StartNode("sub_D6C9B0");
      type2 = sub_D6C9B0(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 6:
      mplew.StartNode("sub_D67860");
      type2 = sub_D67860(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 7:
      mplew.StartNode("sub_D67880");
      type2 = sub_D67880(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 8:
      mplew.StartNode("sub_D678A0");
      type2 = sub_D678A0(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 17:
      mplew.StartNode("sub_D71280");
      type2 = sub_D71280(/* CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 21:
      mplew.StartNode("sub_D682E0");
      type2 = sub_D682E0(/* CInPacket2, type */);
      mplew.EndNode(false);
      break;
    case 22:
      mplew.StartNode("sub_D68470");
      type2 = sub_D68470(/* CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 23:
      mplew.StartNode("sub_D694F0");
      type2 = sub_D694F0(type, 0);/* Int_4, Int_npcID, CInPacket2, type, 0 */
      mplew.EndNode(false);
      break;
    case 24:
      mplew.StartNode("sub_D694F0");
      type2 = sub_D694F0(type, 1/* Int_4, Int_npcID, CInPacket2, type, 1 */);
      mplew.EndNode(false);
      break;
    case 25:
      mplew.StartNode("sub_D6CE20");
      type2 = sub_D6CE20(type, 0, 0, 0 /* Int_4, Int_npcID, CInPacket2, type, 0, 0, 0 */);
      mplew.EndNode(false);
      break;
    case 26:
      mplew.StartNode("sub_D6CE20");
      type2 = sub_D6CE20(type, 0, 1, 0 /* Int_4, Int_npcID, CInPacket2, type, 0, 1, 0 */);
      mplew.EndNode(false);
      break;
    case 27:
      mplew.StartNode("sub_D6D0F0");
      type2 = sub_D6D0F0(type, 0 /* Int_4, Int_npcID, CInPacket2, type, 0 */);
      mplew.EndNode(false);
      break;
    case 28:
      mplew.StartNode("sub_D6CE20");
      type2 = sub_D6CE20(type, 0, 0, 1 /* Int_4, Int_npcID, CInPacket2, type, 0, 0, 1 */);
      mplew.EndNode(false);
      break;
    case 29:
      mplew.StartNode("sub_D6CE20");
      type2 = sub_D6CE20(type, 0, 1, 1 /* Int_4, Int_npcID, CInPacket2, type, 0, 1, 1 */);
      mplew.EndNode(false);
      break;
    case 30:
      mplew.StartNode("sub_D6D0F0");
      type2 = sub_D6D0F0(type, 1 /* Int_4, Int_npcID, CInPacket2, type, 1 */);
      mplew.EndNode(false);
      break;
    case 33:
      mplew.StartNode("sub_D6D3A0");
      type2 = sub_D6D3A0(/* Int_4, Int_npcID, CInPacket2, type */);
      mplew.EndNode(false);
      break;
    case 35:
      mplew.StartNode("sub_D6D6D0");
      type2 = sub_D6D6D0(/* Int_4, Int_npcID, CInPacket2, type */);
      mplew.EndNode(false);
      break;
    case 44:
      mplew.StartNode("sub_D6D9C0");
      type2 = sub_D6D9C0(/* Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 46:
      mplew.StartNode("sub_D6DC20");
      type2 = sub_D6DC20(/* CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 47:
      mplew.StartNode("sub_D6E590");
      type2 = sub_D6E590(/* CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 48:
      mplew.StartNode("sub_D68610");
      type2 = sub_D68610(/* CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 53:
      mplew.StartNode("sub_D678C0");
      type2 = sub_D678C0(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 54:
      mplew.StartNode("sub_D686B0");
      type2 = sub_D686B0(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 55:
      mplew.StartNode("sub_D68B20");
      type2 = sub_D68B20(/* Int_4, Int_npcID, CInPacket2 */);
      mplew.EndNode(false);
      break;
    case 56:
      mplew.StartNode("sub_D6DD40");
      type2 = sub_D6DD40(type, 0/* Int_4, Int_npcID, CInPacket2, type, 0 */);
      mplew.EndNode(false);
      break;
    case 57:
      mplew.StartNode("sub_D6DD40");
      type2 = sub_D6DD40(type, 1/* Int_4, Int_npcID, CInPacket2, type, 1 */);
      mplew.EndNode(false);
      break;
    case 58:
      mplew.StartNode("sub_D6E010");
      type2 = sub_D6E010(type, 0, 0, 0/* Int_4, Int_npcID, CInPacket2, type, 0, 0, 0 */);
      mplew.EndNode(false);
      break;
    case 59:
      mplew.StartNode("sub_D6E010");
      type2 = sub_D6E010(type, 0, 1, 0/* Int_4, Int_npcID, CInPacket2, type, 0, 1, 0 */);
      mplew.EndNode(false);
      break;
    case 60:
      mplew.StartNode("sub_D6E2E0");
      type2 = sub_D6E2E0(type, 0/* Int_4, Int_npcID, CInPacket2, type, 0 */);
      mplew.EndNode(false);
      break;
    case 61:
      mplew.StartNode("sub_D6E010");
      type2 = sub_D6E010(type, 0, 0, 1/* Int_4, Int_npcID, CInPacket2, type, 0, 0, 1 */);
      mplew.EndNode(false);
      break;
    case 62:
      mplew.StartNode("sub_D6E010");
      type2 = sub_D6E010(type, 0, 1, 1/* Int_4, Int_npcID, CInPacket2, type, 0, 1, 1 */);
      mplew.EndNode(false);
      break;
    case 63:
      mplew.StartNode("sub_D6E2E0");
      type2 = sub_D6E2E0(type, 1/* Int_4, Int_npcID, CInPacket2, type, 1 */);
      mplew.EndNode(false);
      break;
    default:
      break;
  }
  var regR = /\r/g;
var regN = /\n/g;
talk = talk.replace(regR,"\\r").replace(regN,"\\n");
  // return type2;
  switch (Byt_msgType) {
    case 5:
      "sendSimpleSNew"
  mplew.  LogAppend(  "cm.sendSimple(\"" +talk+"\")");
      break;
    case 2:
      "sendYesNoSNew"
  mplew.  LogAppend(  "cm.sendYesNo(\"" +talk+"\")");
      break;
    case 0:
      switch (zeroPad(typea,2) + zeroPad(typea2,2) ) {
        case "0100":
          "sendPrevSNew"
  mplew.  LogAppend(  "cm.sendPrev(\"" +talk+"\")");
          break;
        case "0101":
          "sendNextPrevSNew"
  mplew.  LogAppend(  "cm.sendNextPrev(\"" +talk+"\")");
          break;
        case "0001":
          "sendNextSNew"
  mplew.  LogAppend(  "cm.sendNext(\"" +talk+"\")");
          break;
        case "0000":
  mplew.  LogAppend(  "cm.sendOk(\"" +talk+"\")");
          "sendOkSNew"
          break;
      }
      break;

  }
}
function zeroPad (nub, digits) {
  var loop = digits;
  var zeros = "";
  while (loop) {
    zeros += "0";
    loop--;
  }
  return (nub.toString().length > digits) ?
    nub.toString() : (zeros + nub).slice(-digits);
}
var typea;//对话框形式
var typea2;
var talk;//對話
function sub_D68F80(int_type/*  */)
//int __thiscall sub_D68F80 (/* var CNpcPool, var Int_4, var Int_npcID, var CInPacket2, var int_type, char *type2 */)
{
  // CInPacket23 = CInPacket2;
  if (int_type & 4)
    Int_npcID = mplew.writeInt("Int_npcID");
talk=  mplew.writeMapleAsciiString("");
  typea = mplew.write("typea");
  typea2 = mplew.write("typea2");
  mplew.writeInt("New 未知",0);
}
function sub_D691F0(/*  */)
//int __thiscall sub_D691F0 (/* var this, var a2, var a3, volatile var a4, unsigned __int8 a5 */)
{
  v16 = mplew.write("v16");
  v17 = v16;
  if (v16 > 0) {
    v7 = v16;
    do {
      mplew.writeMapleAsciiString("");
      --v7;
    }
    while (v7);
  }
  return sub_4C9390(/* v7 */);
}

function sub_DA2300(a2, a6, a7, type2)
{
   v91  = mplew.write("v91") != 0;
   v90  = mplew.write("v91") != 0;
  mplew.writeMapleAsciiString("v91");
  for ( i = mplew.write("i"); i > 0;  )
  {
    v7 = mplew.writeInt("v7");
    --i;
  }
}

function sub_D69A10(a5/*  */)
//LONG __thiscall sub_D69A10 (/* var this, var a2, var a3, var iPacket2, var a5, char *a6 */)
{
  if (a5 & 4)
    a3 = mplew.writeInt("a3");
  mplew.writeMapleAsciiString("");
  mplew.writeMapleAsciiString("");
  v27 = mplew.writeShort("v27");
  v26 = mplew.writeShort("v26");
  return result;
}


function sub_D69F30(/*  */)
//LONG __thiscall sub_D69F30 (/* var this, var Int_4, var Int_npcID, const var a4, _DWORD *type */)
{
  v7 = mplew.writeShort("v7");
  mplew.writeMapleAsciiString("");
  mplew.writeMapleAsciiString("");
  v8 = mplew.writeShort("v8");
  v36 = mplew.writeShort("v36");
  v35 = mplew.writeShort("v35");
  a4 = mplew.writeShort("a4");
  return result;
}
function sub_D6A2F0(/*  */)
//LONG __thiscall sub_D6A2F0 (/* var this, var a2, var a3, var a4, _DWORD *a5 */)
{
  a4 = mplew.writeMapleAsciiString("");
  v29 = mplew.writeInt("v29");
  v28 = mplew.writeInt("v28");
  v7 = mplew.writeInt("v7");
}
function sub_D6A560(a5/*  */)
//LONG __thiscall sub_D6A560 (/* var this, var a2, var a3, var a4, unsigned var a5, const CHAR **a6 */)
{
  if (a5 & 4)
    a3 = mplew.writeInt("a3");
  talk= mplew.writeMapleAsciiString("");
}

function sub_D6E730(/*  */)
//LONG __thiscall sub_D6E730 (/* var this, var a2, int **a3, int *iPacket2 */)
{
  v88 = mplew.write("") != 0;
  v87 = mplew.write("") != 0;
  mplew.writeMapleAsciiString("");
  for (i = mplew.write("i"); i > 0;) {
    v7 = mplew.writeInt("v7");
    --i;
  }
  // 不知道怎么计算 iPacket2 = mplew.writeInt("iPacket2");
}
function sub_D6A7B0(/*  */)
//LONG __thiscall sub_D6A7B0 (/* const var this, var a2, var a3, _DWORD *a4 */)
{
  mplew.writeMapleAsciiString("");
  v80 = mplew.writeInt("v80");
  for (i = mplew.write("i"); i > 0;) {
    v7 = mplew.writeInt("v7");
    --i;
  }
  v79 = mplew.writeInt("v79");
  for (j = mplew.write("j"); j > 0;) {
    v9 = mplew.writeInt("v9");
    --j;
  }
  a4 = mplew.writeInt("a4");
  return result;
}

function sub_D6B050(/*  */)
//LONG __thiscall sub_D6B050 (/* var this, var a2, var a3, int a4 */)
{
  v46 = mplew.write("") != 0;
  v45 = mplew.write("") != 0;
  mplew.write("");
  mplew.writeMapleAsciiString("");
  v5 = mplew.write("v5");
  if (v5 > 0) {
    do {
      v8 = mplew.writeInt("v8");
      --v7;
    }
    while (v7 > 0);
  }
  mplew.writeInt("");
}

function sub_D6B4C0(/*  */)
//LONG __thiscall sub_D6B4C0 (/* var this, var a2, var a3, int a4 */)
{

  mplew.write("");
  mplew.writeMapleAsciiString("");
  v5 = mplew.write("v5");
  if (v5 > 0) {
    do {
      v8 = mplew.writeInt("v8");
      --v7;
    }
    while (v7 > 0);
  }
  mplew.writeInt("")
  mplew.writeInt("")
  return result;
}

function sub_D6FCF0(/*  */)
//LONG __thiscall sub_D6FCF0 (/* var this, var a2, var a3, int a4 */)
{
  v85 = mplew.write("") != 0;
  v5 = mplew.writeInt("v5");
  v84 = mplew.writeInt("v84");
  mplew.writeMapleAsciiString("");
}
function sub_D70710(/*  */)
//LONG __thiscall sub_D70710 (/* var this, var a2, var a3, int a4 */)
{
  v85 = mplew.write("") != 0;
  v5 = mplew.writeInt("v5");
  v84 = mplew.writeInt("v84");
  mplew.writeMapleAsciiString("");
}
function sub_D6F160(/*  */)
//LONG __thiscall sub_D6F160 (/* const var this, var a2, var a3, int a4 */)
{
  v63 = mplew.write("") != 0;
  v58 = mplew.write("") != 0;
  mplew.write("");
  mplew.writeMapleAsciiString("");
  v70 = 0;
  v67 = 0;
  sub_9DE4B0(/* &v66 */);
  v70 = 1;
  v5 = mplew.write("v5");
  if (v5 > 0) {
    // v7 = v5;
    // do
    // {
    //   --v7;
    //   *sub_4430C0 (/* -1 */) = 0;
    // }
    // while ( v7 );
  }
  if (v5 == 3) {
    v8 = mplew.writeInt("v8");
    v9 = mplew.writeInt("v9");
    v10 = mplew.writeInt("v10");
  }
  else {
    v12 = mplew.writeInt("v12");
    v13 = mplew.writeInt("v13");
    v64 = mplew.writeInt("v64");
    v61 = mplew.writeInt("v61");
    v62 = mplew.writeInt("v62");
    v14 = mplew.writeInt("v14");

  }
}
function sub_D6F760(/*  */)
//LONG __thiscall sub_D6F760 (/* var this, var a2, var a3, int a4 */)
{
  mplew.write("");
  mplew.writeMapleAsciiString("");
  //   v6 = 6;
  //   do
  //   {
  //     --v6;
  //     *sub_4430C0 (/* -1 */) = 0;
  //   }
  //   while ( v6 );
  mplew.write("");
  v7 = mplew.writeInt("v7");
  v8 = mplew.writeInt("v8");
  v56 = mplew.writeInt("v56");
  v57 = mplew.writeInt("v57");
  v58 = mplew.writeInt("v58");
  v9 = mplew.writeInt("v9");
  mplew.writeInt("");
  mplew.writeInt("");

}

function sub_D6B910(/*  */)
{
  mplew.write(0);
  mplew.write(0);
  mplew.writeMapleAsciiString("");
  for (var i = mplew.write("i"); i > 0;) {
    mplew.writeInt("v6");
    --i;
  }
  v60 = mplew.writeInt("v60");
}


function sub_D6C050(/*  */)
//_BYTE *__thiscall sub_D6C050 (/* var this, var a2, var a3, int a4 */)
{
  mplew.writeMapleAsciiString("");
  v36 = mplew.write("v36");
  if (v36 > 0) {
    v35 = v36;
    do {
      v42 = mplew.writeBuffer("v42", 8);
      mplew.write("");
      --v35;
    }
    while (v35);
  }
  return result;
}

function sub_D6C4F0(/*  */)
//_BYTE *__thiscall sub_D6C4F0 (/* var this, var a2, var a3, int a4 */)
{
  mplew.writeMapleAsciiString("");
  v37 = mplew.write("v37");
  v39 = mplew.write("v39");
  if (v37 > 0) {
    v36 = v37;
    do {
      v44 = mplew.writeBuffer("v44", 8);
      mplew.write("");
      v36 = (v36 - 1);
    }
    while (v36);
  }
}

function sub_D6C9B0(/*  */) {
  v32 = mplew.writeMapleAsciiString("");
  //   v48 = 0;
  //   v4 = !v32 || !*v32;
  //   v5 = 12 - (v4 != 0);
  v5 = 11;
  if (v5 == 11) {
    v7 = mplew.write("v7");
    if (v7 <= 0) {
    }
    if (v7 > 0) {
      v34 = v7;
      do {
        v41 = mplew.writeBuffer("v41", 8);
        mplew.write("");
        --v34;
      }
      while (v34);
    }
  }
}

function sub_D67860(/*  */)
//LONG __stdcall sub_D67860 (/* var a1, var a2, int a3 */)
{
  return sub_1981990(/* 0, a3 */);
}

function sub_1981990()//LONG __thiscall sub_1981990 (/* var this, int a2 */)
{
  v4 = mplew.write("v4");
  if (v4) {
  }
  else {
    mplew.writeMapleAsciiString("");
    mplew.writeMapleAsciiString("");
    mplew.writeMapleAsciiString("");
    v6 = mplew.writeInt("v6");
    v7 = mplew.writeInt("v7");
    mplew.writeInt("");
  }
  return result;
}
function sub_D67880(/*  */)
//int __stdcall sub_D67880 (/* var a1, var a2, int a3 */)
{
  return sub_19707B0(/* 0, a3 */);
}
function sub_19707B0(/*  */)
//int __thiscall sub_19707B0 (/* var this, int a2 */)
{
  v4 = mplew.write("v4");
  if (v4) {

  }
  else {
    v6 = mplew.writeInt("v6");
    v7 = mplew.writeInt("v7");
    lpMultiByteStr = mplew.writeInt("lpMultiByteStr");
    v9 = mplew.writeInt("v9");
    mplew.writeInt("");
  }
  return result;
}

function sub_D678A0(/*  */)
//LONG __stdcall sub_D678A0 (/* var a1, var a2, int a3 */)
{
  return sub_1981B70(/* 0, a3 */);
}

function sub_1981B70(/*  */)
//LONG __thiscall sub_1981B70 (/* volatile var this, int a2 */)
{
  v4 = mplew.write("v4");
  if (v4) {
  }
  else {
    mplew.writeMapleAsciiString("");
    mplew.writeMapleAsciiString("");
    mplew.writeInt("");
  }
  return result;
}
function sub_D71280(/*  */)
//void *__thiscall sub_D71280 (/* var this, int a2 */)
{
  v2 = mplew.writeInt("v2");

  //   v8 = sub_40DCD0 (/* 0x226D658, 0x1504u */);
  if (true)//  if ( v8 )
  {
    //v9 = sub_E44F60 (/* v8, a2, v2, 2 * (v2 == 4) + 8 */);
    mplew.writeInt("");
    mplew.writeMapleAsciiString("");
  }
}
function sub_D682E0(/*  */)
//int __thiscall sub_D682E0 (/* var this, var a2, int a3 */)
{
  v4 = mplew.writeInt("v4");
  mplew.writeZeroBytes(8);
}
function sub_D68470()
{ }

function sub_D694F0(a5, a6/*  */)
//LONG __thiscall sub_D694F0 (/* var this, var a2, var a3, var a4, unsigned var a5, int a6 */)
{
  if (a5 & 4)
    a3 = mplew.writeInt("a3");
  mplew.writeMapleAsciiString("");
  v32 = mplew.write("v32");
  v31 = mplew.write("v31");
  v30 = mplew.writeInt("v30");
  v29 = mplew.writeInt("v29");
  if (a6) {
    v34 = mplew.writeInt("v34");
    v33 = mplew.writeInt("v33");
  }
  else {
    v34 = mplew.write("v34");
  }
}

function sub_D694F0(a5, a6/*  */)
//LONG __thiscall sub_D694F0 (/* var this, var a2, var a3, var a4, unsigned var a5, int a6 */)
{
  if (a5 & 4)
    a3 = mplew.writeInt("a3");
  mplew.writeMapleAsciiString("");
  v32 = mplew.write("v32");
  v31 = mplew.write("v31");
  v30 = mplew.writeInt("v30");
  v29 = mplew.writeInt("v29");
  if (a6) {
    v34 = mplew.writeInt("v34");
    v33 = mplew.writeInt("v33");
  }
  else {
    v34 = mplew.write("v34");
  }
}

function sub_D6CE20(a5, a6, a7, a8 /*  */)
//LONG __thiscall sub_D6CE20 (/* var this, var a2, var a3, var a4, unsigned var a5, var a6, var a7, int a8 */)
{

  iPacket = a4;
  if (a5 & 4)
    v10 = mplew.writeInt("v10");
  var v10 = a3;
  mplew.writeMapleAsciiString("");
  v42 = 0;
  v34 = mplew.writeInt("v34");
  v33 = mplew.writeInt("v33");
  if (a8) {
    v36 = mplew.writeInt("v36");
    v35 = mplew.writeInt("v35");
  }
  else {
    v36 = mplew.write("v36");
  }
}

function sub_D6D0F0(/*  */)
//LONG __thiscall sub_D6D0F0 (/* var this, var a2, var a3, var a4, var a5, int a6 */)
{
  mplew.writeMapleAsciiString("");

  v28 = mplew.writeInt("v28");
  v27 = mplew.writeInt("v27");
  if (a6) {
    v30 = mplew.writeInt("v30");
    v29 = mplew.writeInt("v29");
  }
  else {
    v30 = mplew.write("v30");
  }
}

function sub_D6D3A0(/*  */)
//LONG __thiscall sub_D6D3A0 (/* var this, var a2, var a3, var a4, char *a5 */)
{
  mplew.writeMapleAsciiString("");
  v7 = 0;
  v47 = 0;
  v39 = mplew.writeInt("v39");
  v8 = mplew.writeInt("v8");
  a4 = 0;
  v47 = 1;
  if (v8 > 0) {
    v7 = v8;
    do {
      v9 = mplew.writeInt("v9");
      --v7;
    }
    while (v7);
  }
}

function sub_D6D6D0(/*  */)
//LONG __thiscall sub_D6D6D0 (/* var this, var a2, var a3, const char **a4, int a5 */)
{
  v7 = mplew.writeInt("v7");
  a4 = mplew.write("a4");
  mplew.writeMapleAsciiString("");
}

function sub_D6D9C0(/*  */)
//int __thiscall sub_D6D9C0 (/* var this, var a2, int a3 */)
{
}
function sub_D6DC20(/*  */)
//int __stdcall sub_D6DC20 (/* int a1 */)
{
  v1 = mplew.writeInt("v1");
}

function sub_D6E590(/*  */)
//int __stdcall sub_D6E590 (/* int a1 */)
{
  v1 = mplew.writeInt("v1");
  if (v1) {
    if (v1 == 1) {
      mplew.writeInt("");
      mplew.writeMapleAsciiString("");
      v9 = -1;
    }
  }
  else {
    mplew.writeInt("");
    v3 = mplew.writeInt("v3");

  }
}
function sub_D68610(/* int a1 */) {

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
function sub_D678C0(/* int a1, var a2, int a3 */) {
  return sub_1988030(/* 0, a3 */);
}
function sub_1988030(/* _DWORD *this, int a2 */) {

  if (v4) {
  }
  else {
    mplew.writeMapleAsciiString("");
    v17 = 0;
    v6 = mplew.writeInt("v6");
    v7 = mplew.writeInt("v7");
    v15 = mplew.writeInt("v15");
    v14 = mplew.writeInt("v14");
    mplew.writeInt("");
  }
  return result;
}

function sub_D686B0(/*  */)
//int __stdcall sub_D686B0 (/* int a1, var a2, _DWORD *iPacket */)
{
  for (i = mplew.write("i"); i > 0;) {
    v5 = mplew.writeInt("v5");
    --i;
  }
}
function sub_D68B20(/*  */) { }


function sub_D6DD40(a5, a6 /*  */)
//LONG __thiscall sub_D6DD40 (/* void *this, var a2, var a3, var a4, unsigned var a5, int a6 */)
{

  if (a5 & 4)
    a3 = mplew.writeInt("a3");
  mplew.writeMapleAsciiString("");
  v41 = 0;
  v32 = mplew.write("v32");
  v31 = mplew.write("v31");
  v30 = mplew.writeInt("v30");
  v29 = mplew.writeInt("v29");
  if (a6) {
    v34 = mplew.writeInt("v34");
    v33 = mplew.writeInt("v33");
  }
  else {
    v34 = mplew.write("v34");
  }
}

function sub_D6E010(a5, a6, a7, a8/*  */)
//LONG __thiscall sub_D6E010 (/* void *this, var a2, var a3, var a4, unsigned var a5, var a6, var a7, int a8 */)
{
  v8 = this;
  v9 = a4;
  if (a5 & 4)
    v10 = mplew.writeInt("v10");
  var v10 = a3;
  mplew.writeMapleAsciiString("");
  v42 = 0;
  v34 = mplew.writeInt("v34");
  v33 = mplew.writeInt("v33");
  if (a8) {
    v36 = mplew.writeInt("v36");
    v35 = mplew.writeInt("v35");
  }
  else {
    v36 = mplew.write("v36");
  }
}

function sub_D6E2E0(a5, a6 /*  */)
//LONG __thiscall sub_D6E2E0 (/* void *this, var a2, var a3, var a4, var a5, int a6 */)
{
  mplew.writeMapleAsciiString("");
  v28 = mplew.writeInt("v28");
  v27 = mplew.writeInt("v27");
  if (a6) {
    v30 = mplew.writeInt("v30");
    v29 = mplew.writeInt("v29");
  }
  else {
    v30 = mplew.write("v30");
  }
}