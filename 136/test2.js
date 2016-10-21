function sub_42CDC0()
//BOOL __stdcall sub_42CDC0 (/* int a1 */)
{
    // 0x223FEEC = 1;
    var v41;
    v1 = sub_419030(v41/* &v41 */);
    v2 = sub_40DF50(v1, v2, 0x22403E8);
    v3 = sub_40DF50(v2, v3, 0x2240430);
    v4 = sub_40DF50(v3, v4, 0x2240478);
    v5 = sub_40DF50(v4, v5, 0x22404C0);
    v6 = sub_40DF50(v5, v6, 0x2240508);
    v7 = sub_40DF50(v6, v7, 0x2240550);
    v8 = sub_40DF50(v7, v8, 0x2240598);
    v9 = sub_40DF50(v8, v9, 0x22405E0);
    v10 = sub_40DF50(v9, v10, 0x2240628);
    v11 = sub_40DF50(v10, v11, 0x2240670);
    v12 = sub_40DF50(v11, v12, 0x22406B8);
    v13 = sub_40DF50(v12, v13, 0x2240700);
    v14 = sub_40DF50(v13, v14, 0x2240748);
    v15 = sub_40DF50(v14, v15, 0x2240790);
    v16 = sub_40DF50(v15, v16, 0x22407D8);
    v17 = sub_40DF50(v16, v17, 0x2240820);
    v18 = sub_40DF50(v17, v18, 0x2240868);
    v19 = sub_40DF50(v18, v19, 0x22408B0);
    var D_0x223FEA8 = [];
    D_0x223FEA8 = sub_40DE90(D_0x223FEA8, v19, 0x220/* 0x223FEA8, v19, 0x220u */);
    v20 = Check_Buff(a1, v20/*  &v22*/, D_0x223FEA8);
    return sub_403900(v20/* v20 */) == 0;
}
function sub_403900(data/*  */)
//char __thiscall sub_403900 (/* _DWORD *data */)
{
    // signed var v1; // eax@1
    v1 = 16;
    while (!data[v1]) {
        if (--v1 < 0)
            return 1;
    }
    return 0;
}
function GetMapleBuff(buffstat) {
    // var retdata = [];
    // for (i = 0; i < 17; i++) {
    //     retdata[i] = 0;
    // }
    return GetNulllBuff(null)[Math.floor(buffstat / 32)] = buffstat = 1 << (31 - (buffstat % 32))
}
function sub_419030(a1)
//_DWORD *__cdecl sub_419030 (/* _DWORD *a1 */)
{
    var v1; // eax@1
    var v3; // [sp+4h] [bp-44h]@1

    v1 = sub_40DF50(0x223FFC4, v3, 0x22400D4/* 0x223FFC4, &v3, 0x22400D4 */);
    a1 = sub_40DE90(a1, v1, 0x220/* a1, v1, 0x220u */);
    return a1;
}
function GetNulllBuff(retdata) {
    if (retdata == null) {
        retdata = [];
    }
    for (i = 0; i < 17; i++) {
        retdata[i] = 0;
    }
    return retdata;
}
function sub_40DF50(buff_1, outBuff, Buff2)
//_DWORD *__thiscall sub_40DF50 (/* int *buff_1, var outBuff, int Buff2 */)
{
    //   var v3; // edi@1
    //   signed var v4; // ecx@1
    //   var v5; // eax@1
    //   int v7[17]; // [sp+8h] [bp-44h]@1
    v3 = buff_1;
    v7 = GetNulllBuff(v7);
    v4 = 16;
    // v5 = v3 + 16;
    do {
        --v4;
        v7[v4] = buff_1[v4] | Buff2[v4] // *v5 | *(v5 + Buff2 - v3); //;
        // --v5;
    }
    while (v4 >= 0);
    outBuff = sub_40DE90(outBuff, v7, 0x220/* outBuff, v7, 0x220u */);
    return outBuff;
}

function sub_40DE90(outBuff, makebuff, int_0x220u)
//_DWORD *__thiscall sub_40DE90 (/* _DWORD *outBuff, var makebuff, unsigned int int_0x220u */)
{
    //   var v3; // ebp@1
    //   var outBuff2; // edi@1
    //   var v5; // eax@2
    //   var v6; // ecx@2
    //   unsigned var v7; // edx@2
    //   unsigned var i; // esi@5
    //   var v9; // eax@6
    //   unsigned var j; // esi@7
    //   var v11; // eax@8

    v3 = makebuff;
    outBuff2 = outBuff;
    if (int_0x220u >> 5)             // 0x220 >> 5==17
    {
        // v5 = outBuff;
        //v6 = makebuff - outBuff;
        v7 = int_0x220u >> 5;
        i = 0;
        do {
            outBuff2[i] = makebuff[i];
            i++;
            //   ++v5;
            --v7;
        }
        while (v7);
        v3 = makebuff;
    }
    for (i = 32 * (int_0x220u >> 5); i < int_0x220u; ++i) {
        v9 = maskbufftest(v3, i);
        outBuff2 = sub_403B20(outBuff2, i, v9);
    }
    for (j = int_0x220u; j < 0x220; ++j) {
        v11 = sub_1A9506A() % 2;
        outBuff2 = sub_403B20(outBuff2, j, v11);
    }
    return outBuff2;
}
function maskbufftest(buff, mask)
//int __thiscall maskbufftest(_DWORD *buff, unsigned int mask)
{
    var result; // eax@2
    if (mask < 0x220)
        result = (buff[mask >> 5] >> (31 - (mask & 0x1F))) & 1;
    var result = 0;
    return result;
}
function sub_403B20(buff, a2, boolMakBuff)
//_DWORD *__thiscall sub_403B20 (/* _DWORD *buff, unsigned var a2, int boolMakBuff */)
{
    //   var result; // eax@1
    //   signed var v4; // esi@1
    //   unsigned var v5; // edx@1
    //   var v6; // ecx@1
    result = buff;
    v4 = 1 << (31 - (a2 & 0x1F));
    v5 = a2 >> 5;
    result[v5] |= v4;
    v6 = buff[a2 >> 5];
    if (!boolMakBuff)
        result[v5] = v4 ^ v6;
    return result;
}
function sub_1A9506A(/*  */) {
    //   var v0; // eax@1
    //   unsigned var v1; // ecx@1
    //   v0 = sub_1AA2B16 (/*  */);
    //   v1 = 214013 * *(v0 + 20) + 2531011;
    //    v1;  
    // return (v1 >> 16) & 0x7FFF;//未处理,不能读取数据  
    return 2;//单True/双False
}