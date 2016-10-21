function CHAR_INFO()
//int __thiscall CHAR_INFO(_DWORD *this, int iPacket)
{
  v3 = mplew.writeInt("v3");
  if (mplew.write(""))//0
  {
    v4 = mplew.write("v4");
    v5 = v4 != 0;
    v19 = mplew.write("") != 0;
    mplew.writeMapleAsciiString("");
    if (!v5) {
      sub_15E01D0(/* 0, iPacket */);
    }
  }
  else {
    v27 = mplew.write("");
    v30 = mplew.writeShort("v30");
    v29 = mplew.writeShort("v29");
    v32 = mplew.write("");
    v31 = mplew.writeInt("v31");
    if (mplew.write(""))
      sub_726ED0(/* &v33, iPacket */);
    v10 = mplew.write("v10");
    if (v10 > 0) {
      v23 = v10;
      do {
        v11 = mplew.writeShort("v11");
        v13 = v23-- == 1;
      }
      while (!v13);
    }
    mplew.writeMapleAsciiString("");
    mplew.writeMapleAsciiString("");
    v20 = mplew.write("v20");
    v28 = mplew.write("v28");
    v23 = mplew.write("v23");
    SetPetInfo();
    v31 = mplew.write("v31");
    v32 = v31;
    if (v31 > 0) {
      mplew.writeBuffer("aWishItem.a", 4 * v32);
    }
    Decode();
    DamageSkinSaveInfoDecode();

    mplew.write("nCharisma");
    mplew.write("nInsight");
    mplew.write("nWill");
    mplew.write("nCraft");
    mplew.write("nSense");
    mplew.write("nCharm");

    mplew.writeInt("");
    mplew.writeInt("");

    v33 = mplew.writeInt("");
    if (v33 > 0) {
      mplew.writeBuffer("aWishItem.a", 4 * v33);
    }
    
    v34 = mplew.writeInt("");
    if (v34 > 0) {
      mplew.writeBuffer("aWishItem.a", 4 * v34);
    }
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.writeInt("");
  }
}
function sub_726ED0(/*  */) {
  return mplew.writeBuffer("this", 0x30);
}
function sub_15E01D0(/*  */) {
  v3 = mplew.writeInt("v3");
  v7 = 1;
  v38 = 1;
  do {
    if ((v7 - 1) > 8 || v7 != 9) {
      v8 = mplew.writeInt("v8");
      v7 = v38;
    }
    v38 = ++v7;
  }
  while (v7 < 10);
  mplew.write("");
  v12 = mplew.writeInt("v12");
  var v13 = true;
  if (v13) {
  }
  else {
    v45 = mplew.writeBuffer("v45", 0x18);
    v46 = mplew.writeBuffer("v46", 2);
    v19 = mplew.writeInt("v19");
    sub_596250(/* *(v2 + 1456), iPacket, v19 */);
  }
}
function sub_596250(/*  */) {
  mplew.writeInt("");
  mplew.writeInt("");
  mplew.writeInt("");
  result = mplew.writeInt("result");
}

function SetPetInfo()
//char __thiscall CUIUserInfo_SetPetInfo(void *this, var a2, unsigned int a3)
{
  result = mplew.write("result");
  if (result) {
    do {
      v5 = mplew.writeInt("v5");
      v6 = mplew.writeInt("v6");
      v9 = mplew.writeMapleAsciiString("v9");
      mplew.write("");
      mplew.writeShort("");
      mplew.write("");
      mplew.writeShort("");
      mplew.writeInt("");
      mplew.writeInt("");
      v20 = 0;
    }
    while (mplew.write(""));
  }
  return result;
}
CHAR_INFO();
function Decode() {

  mplew.writeInt("");
  v4 = mplew.writeShort("v4");
  if (v4 > 0) {
    v18 = v4;
    while (1) {
      v7 = mplew.writeInt("v7");
      v24 = mplew.writeBuffer("v24", 8);
      v15 = v18-- == 1;
      if (v15) {
        return;
      }
    }
  }
}

function DamageSkinSaveInfoDecode() {
  v4 = mplew.write("");
  if (v4) {
    DAMAGESKINSAVEDATA_Decode();             // ActiveDamageSkin
    DAMAGESKINSAVEDATA_Decode();             // PremiumDamageSkin
    mplew.writeShort("");
    mplew.writeShort("v4");
    if (v4 > 0) {
      do {
        DAMAGESKINSAVEDATA_Decode(v3);
        --v12;
      }
      while (v12);
    }
  }
  return v4;
}
function DAMAGESKINSAVEDATA_Decode() {
  mplew.writeInt("this");
  mplew.writeInt("");
  mplew.write("");
  v4 = mplew.writeMapleAsciiString("v4");
}