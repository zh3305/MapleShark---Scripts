UPDATE_STATS();
function UPDATE_STATS()
//int __thiscall UPDATE_STATS(_BYTE *CWvsContext1, int iPacket)
{
  mplew.write("")

  var v4 = 1 == 0;//未处理
  if (!v4) {
    sub_736DF0();
    sub_726C50();
    if (mplew.write(""))
      v200 = mplew.write("");
    if (mplew.write("")) {
      v36 = mplew.writeInt("v36");
      v37 = mplew.writeInt("v37");
    }
  }
  // return result;
}
function sub_736DF0()
//int __thiscall sub_736DF0(var this, var iPacket, int a3)
{
  uFlagBuff = mplew.writeLong("uFlagBuff", 8);
  v4 = uFlagBuff;
  v3 = {};
  if (uFlagBuff & 1)
    v3.nSkin = mplew.write("v3.nSkin");
  if (v4 & 2)
    v3.nFace = mplew.writeInt("v3.nFace");
  if (v4 & 4)
    v3.nHair = mplew.writeInt("v3.nHair");
  if (v4 & 0x10) {
    v5 = mplew.write("_ZtlSecureTear_nLevel");
  }
  if (v4 & 0x20) {
    v6 = mplew.writeShort("_ZtlSecureTear_nJob");
    v3.nSubJob = mplew.writeShort("v3.nSubJob");
  }
  if (v4 & 0x40) {
    v7 = mplew.writeShort("_ZtlSecureTear_nSTR");
  }
  if (v4 & 0x80) {
    v8 = mplew.writeShort("_ZtlSecureTear_nDEX");
  }
  if (v4 & 0x100) {
    v9 = mplew.writeShort("_ZtlSecureTear_nINT");
  }
  if (v4 & 0x200) {
    v10 = mplew.writeShort("_ZtlSecureTear_nLUK");
  }
  if (v4 & 0x400) {
    v11 = mplew.writeInt("_ZtlSecureTear_nHP");
  }
  if (v4 & 0x800) {
    v12 = mplew.writeInt("_ZtlSecureTear_nMHP");
  }
  if (v4 & 0x1000) {
    // if (a3)
    //   continue LABEL_83;
    v13 = v3.nSubJob
    if (v13 == 10000 || v13 == 10100 || v13 == 10110 || v13 == 10111 || v13 == 10112) {
      mplew.writeInt("");
      // continue LABEL_34;
    } else if (!IsYingYangShi(v13)) {
      // LABEL_83:
      v15 = mplew.writeInt("_ZtlSecureTear_nMP");
    }
    else {
      mplew.writeInt("");
    }
  }
  // LABEL_34:
  if (v4 & 0x2000) {
    v16 = mplew.writeInt("_ZtlSecureTear_nMMP");
  }
  if (v4 & 0x4000) {
    v17 = mplew.writeShort("_ZtlSecureTear_nAP");
  }
  if (v4 & 0x8000) {
    if (is_extendsp_job(v3.nSubJob)) {
      //ExtendSP::Decode
      //Decode();
      count = ScriptAPI.AddByte("Count");
      for (i = 1; i <= count; i++) {
        ScriptAPI.StartNode("Advancement " + i);
        ScriptAPI.AddByte("Advancement");
        ScriptAPI.AddInt("ExtendSP::Decode int");
        ScriptAPI.EndNode(false);
      }
    } else {
      ScriptAPI.AddShort("Value");
    }
  }
  if (v4 & 0x10000) {
    v20 = mplew.writeLong("_ZtlSecureTear_nEXP64_CS");
  }
  if (v4 & 0x20000) {
    v21 = mplew.writeInt("_ZtlSecureTear_nPOP");
  }
  if (v4 & 0x40000) {
    v22 = mplew.writeLong("_ZtlSecureTear_nMoney_CS");
  }
  if (v4 & 0x80000)
    v3.nFatigue = mplew.write("v3.nFatigue");
  if (v4 & 0x100000) {
    v23 = mplew.writeInt("_ZtlSecureTear_nCharismaEXP_CS");
  }
  if (v4 & 0x200000) {
    v24 = mplew.writeInt("_ZtlSecureTear_nInsightEXP");
  }
  if (0x400000 & v4) {
    v25 = mplew.writeInt("_ZtlSecureTear_nWillEXP_CS");
  }
  if ((0x7FFFFC + 4) & v4) {
    v26 = mplew.writeInt("_ZtlSecureTear_nCraftEXP");
  }
  if ((0xFFFFFF + 1) & v4) {
    v27 = mplew.writeInt("_ZtlSecureTear_nSenseEXP");
  }
  if (0x2000000 & v4) {
    v28 = mplew.writeInt("_ZtlSecureTear_nCharmEXP");
  }
  if (v4 & 0x4000000)
    v3.DayLimit = mplew.writeBuffer("v3.DayLimit", 0x15);
  if (v4 & 0x8000000) {
    v29 = mplew.write("v29");
    // sub_6173D0(v29, v3.ftAlbaStartTime.dwLowDateTime + 1);
    mplew.writeInt("");
    mplew.writeInt("");
    v30 = mplew.writeInt("v30");
    // DuQuShuJu(v30, v3._ZtlSecureTear_nAlbaDuration[1] + 3);
    v31 = mplew.write("v31");
    // sub_42CA30(v31 != 0, v3._ZtlSecureTear_bAlbaSpecialReward[1] + 3);
  }
  if (v4 & 0x10000000) {
    ScriptAPI.StartNode("connectData cards");
    for (i = 0; i < (9 - 0); i++) { //
      ScriptAPI.StartNode("cards " + i);
      ScriptAPI.AddInt("Unknown"); //
      ScriptAPI.AddByte("Unknown"); //
      ScriptAPI.AddInt("Unknown"); //
      ScriptAPI.EndNode(true);
    }
    ScriptAPI.EndNode(true);
  }
  if (v4 & 0x20000000) {
    v32 = mplew.writeInt("v32");
    // DuQuShuJu(v32, v3._ZtlSecureTear_nPvPExp[1] + 3);
    v33 = mplew.write("v33");
    // sub_6173D0(v33, v3._ZtlSecureTear_nPvPPoint[0] + 1);
    v34 = mplew.writeInt("v34");
    // DuQuShuJu(v34, v3._ZtlSecureTear_nPvPPoint[1] + 3);
  }
  if (v4 & 0x40000000) {
    v35 = mplew.write("v35");
    // sub_6173D0(v35, v3._ZtlSecureTear_nPvPModeType[1]);
    v36 = mplew.write("v36");
    // sub_6173D0(v36, v3._ZtlSecureTear_nEventPoint[0] + 1);
  }
  if (v4 & 0x80000000) {
    v37 = mplew.writeInt("v37");
    // DuQuShuJu(v37, v3._ZtlSecureTear_nEventPoint[1] + 3);
  }
  //////////////////////////////////////////////////////////////////////////
  // v38 = v43;
  if (v4 & 1) {
    v39 = mplew.writeLong("v39");
    // sub_703C50(v39, HIDWORD(v39));
  }
  if (v4 & 2)
    v3.nGender = mplew.writeInt("v3.nGender");
  if (v4 & 4) {
    v40 = mplew.writeInt("v40");
    // DuQuShuJu(v40, &v3[1]._ZtlSecureTear_nMP[1] + 3);
  }
  return v4;
}
function IsYingYangShi(a1)
//BOOL __cdecl IsYingYangShi(signed int a1)
{
  return parseInt(a1 / 100) == 42 || a1 == 4002;
}
function Decode()
//int __thiscall ExtendSP::Decode(_DWORD *this, int iPacket)
{

  var result = mplew.write("result");
  if (result <= 0) {
  }
  else {
    iPacketa = result;
    do {
      v5 = mplew.write("v5");
      v6 = mplew.writeInt("v6");
      v8 = iPacketa-- == 1;
    }
    while (!v8);
    v2[5] = v11;
  }
  return result;
}
function sub_726C50(/*  */)
//char __thiscall sub_726C50 (/* int this, int a2 */)
{
  mplew.write("");
  mplew.write("");
  result = mplew.write("result");
}