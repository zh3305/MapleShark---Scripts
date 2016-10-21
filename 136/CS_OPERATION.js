CS_OPERATION();

function CS_OPERATION()
//int __unkcall CS_OPERATION(void *unk, int a2)
{
    OPERATION = mplew.write("OPERATION");
    switch (OPERATION) {
        case 2:
            mplew.StartNode("Mask- " + 2);
            OPERATION = sub_6492E0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 4:
            mplew.StartNode("Mask- " + 4);
            OPERATION = sub_64A8B0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 5:
            mplew.StartNode("Mask- " + 5);
            OPERATION = sub_64F110(/* a2 */);
            mplew.EndNode(false);
            break;
        case 6:
            mplew.StartNode("Mask- " + 6);
            OPERATION = sub_64F540(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x82:
            mplew.StartNode("Mask- " + 0x82);
            OPERATION = sub_64A100(/* a2 */);
            mplew.EndNode(false);
            break;
        case 7:
            mplew.StartNode("Mask- " + 7);
            OPERATION = sub_652F20(/* a2 */);
            mplew.EndNode(false);
            break;
        case 8:
            mplew.StartNode("Mask- " + 8);
            OPERATION = sub_64F8C0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 9:
            mplew.StartNode("Mask- " + 9);
            OPERATION = sub_652F50(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0xA:
            mplew.StartNode("Mask- " + 0xA);
            OPERATION = sub_6495E0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0xB:
            mplew.StartNode("Mask- " + 0xB);
            OPERATION = sub_652F80(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0xC:
            mplew.StartNode("Mask- " + 0xC);
            OPERATION = sub_6496D0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0xD:
            mplew.StartNode("Mask- " + 0xD);
            OPERATION = sub_64FD20(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0xE:
            mplew.StartNode("Mask- " + 0xE);
            OPERATION = sub_64AF30(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0xF:
            mplew.StartNode("Mask- " + 0xF);
            OPERATION = sub_652FB0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x4A:
            mplew.StartNode("Mask- " + 0x4A);
            OPERATION = sub_64FD50(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x4B:
            mplew.StartNode("Mask- " + 0x4B);
            OPERATION = sub_6533E0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x6C:
            mplew.StartNode("Mask- " + 0x6C);
            OPERATION = sub_64B170(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x6D:
            mplew.StartNode("Mask- " + 0x6D);
            OPERATION = sub_64FFD0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x4C:
            mplew.StartNode("Mask- " + 0x4C);
            OPERATION = (loc_650000)(v2, a2);
            mplew.EndNode(false);
            break;
        case 0x4D:
            mplew.StartNode("Mask- " + 0x4D);
            OPERATION = sub_653670(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x10:
            mplew.StartNode("Mask- " + 0x10);
            OPERATION = sub_6501D0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x11:
            mplew.StartNode("Mask- " + 0x11);
            OPERATION = sub_650960(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x14:
            mplew.StartNode("Mask- " + 0x14);
            OPERATION = sub_650CC0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x15:
            mplew.StartNode("Mask- " + 0x15);
            OPERATION = sub_651220(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x12:
            mplew.StartNode("Mask- " + 0x12);
            OPERATION = sub_653750(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x17:
            mplew.StartNode("Mask- " + 0x17);
            OPERATION = sub_651250(/* v2, a2 */);
            mplew.EndNode(false);
            break;
        case 0x18:
            mplew.StartNode("Mask- " + 0x18);
            OPERATION = sub_6537D0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x19:
            mplew.StartNode("Mask- " + 0x19);
            OPERATION = (sub_651430)(/* v2, a2 */);
            mplew.EndNode(false);
            break;
        case 0x1A:
            mplew.StartNode("Mask- " + 0x1A);
            OPERATION = sub_6538D0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x1B:
            mplew.StartNode("Mask- " + 0x1B);
            OPERATION = (sub_651660)(/* v2, a2 */);
            mplew.EndNode(false);
            break;
        case 0x1C:
            mplew.StartNode("Mask- " + 0x1C);
            OPERATION = sub_653910(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x1D:
            mplew.StartNode("Mask- " + 0x1D);
            OPERATION = (sub_651810)(/* v2, a2 */);
            mplew.EndNode(false);
            break;
        case 0x1E:
            mplew.StartNode("Mask- " + 0x1E);
            OPERATION = sub_653950(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x1F:
            mplew.StartNode("Mask- " + 0x1F);
            OPERATION = sub_6497D0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x20:
            mplew.StartNode("Mask- " + 0x20);
            OPERATION = sub_653990(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x85:
            mplew.StartNode("Mask- " + 0x85);
            OPERATION = sub_64A190(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x86:
            mplew.StartNode("Mask- " + 0x86);
            OPERATION = sub_6528C0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x21:
            mplew.StartNode("Mask- " + 0x21);
            OPERATION = sub_6519B0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x22:
            mplew.StartNode("Mask- " + 0x22);
            OPERATION = sub_6539D0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x23:
            mplew.StartNode("Mask- " + 0x23);
            OPERATION = sub_64B3C0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x24:
            mplew.StartNode("Mask- " + 0x24);
            OPERATION = sub_651C70(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x25:
            mplew.StartNode("Mask- " + 0x25);
            OPERATION = sub_651CA0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x26:
            mplew.StartNode("Mask- " + 0x26);
            OPERATION = sub_651EA0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x27:
            mplew.StartNode("Mask- " + 0x27);
            OPERATION = sub_649830(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x28:
            mplew.StartNode("Mask- " + 0x28);
            OPERATION = sub_651ED0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x46:
            mplew.StartNode("Mask- " + 0x46);
            OPERATION = sub_64BA00(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x47:
            mplew.StartNode("Mask- " + 0x47);
            OPERATION = sub_651F00(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x48:
            mplew.StartNode("Mask- " + 0x48);
            OPERATION = sub_651F30(/* v2, a2 */);
            mplew.EndNode(false);
            break;
        case 0x49:
            mplew.StartNode("Mask- " + 0x49);
            OPERATION = sub_653AE0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x52:
            mplew.StartNode("Mask- " + 0x52);
            OPERATION = sub_6520F0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x53:
            mplew.StartNode("Mask- " + 0x53);
            OPERATION = sub_653BD0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x29:
            mplew.StartNode("Mask- " + 0x29);
            OPERATION = sub_64B840(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x4E:
            mplew.StartNode("Mask- " + 0x4E);
            OPERATION = sub_64BC70(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x4F:
            mplew.StartNode("Mask- " + 0x4F);
            OPERATION = sub_653A10(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x50:
            mplew.StartNode("Mask- " + 0x50);
            OPERATION = sub_6498F0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x51:
            mplew.StartNode("Mask- " + 0x51);
            OPERATION = sub_653CC0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x5F:
            mplew.StartNode("Mask- " + 0x5F);
            OPERATION = sub_649930(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x60:
            mplew.StartNode("Mask- " + 0x60);
            OPERATION = sub_648690(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x61:
            mplew.StartNode("Mask- " + 0x61);
            OPERATION = sub_649A90(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x62:
            mplew.StartNode("Mask- " + 0x62);
            OPERATION = sub_649BE0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x64:
            mplew.StartNode("Mask- " + 0x64);
            OPERATION = sub_64BE50(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x65:
            mplew.StartNode("Mask- " + 0x65);
            OPERATION = sub_6522B0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x66:
            mplew.StartNode("Mask- " + 0x66);
            OPERATION = sub_64C0E0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x67:
            mplew.StartNode("Mask- " + 0x67);
            OPERATION = sub_6523E0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x6A:
            mplew.StartNode("Mask- " + 0x6A);
            OPERATION = sub_64C7D0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x6B:
            mplew.StartNode("Mask- " + 0x6B);
            OPERATION = sub_652410(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x6E:
            mplew.StartNode("Mask- " + 0x6E);
            OPERATION = sub_652440(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x6F:
            mplew.StartNode("Mask- " + 0x6F);
            OPERATION = sub_653D00(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x70:
            mplew.StartNode("Mask- " + 0x70);
            OPERATION = sub_624320(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x7D:
            mplew.StartNode("Mask- " + 0x7D);
            OPERATION = sub_64E060(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x7E:
            mplew.StartNode("Mask- " + 0x7E);
            OPERATION = sub_64E230(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x89:
            mplew.StartNode("Mask- " + 0x89);
            OPERATION = sub_64A2B0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x8A:
            mplew.StartNode("Mask- " + 0x8A);
            OPERATION = sub_652900(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x8F:
            mplew.StartNode("Mask- " + 0x8F);
            OPERATION = sub_64A490(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x99:
            mplew.StartNode("Mask- " + 0x99);
            OPERATION = sub_64ECB0(/* a2 */);
            mplew.EndNode(false);
            break;
        case 0x9A:
            mplew.StartNode("Mask- " + 0x9A);
            OPERATION = sub_652D80(/* a2 */);
            mplew.EndNode(false);
            break;
        default:
            return OPERATION;
    }
    return OPERATION;
}
function sub_6492E0(/*  */) {
    v23 = mplew.writeInt("v23");
    iPacketa = mplew.writeInt("iPacketa");
    v22 = mplew.writeInt("v22");
}
function sub_64A8B0(/*  */) {
    v3 = mplew.write("v3");
}

function sub_64F110(/*  */) {
    v42 = mplew.write("v42");
    result = mplew.writeInt("result");
    if (result) {
        v37 = result;
        while (1) {
            sub_654A50(/* v4, iPacket_1 */);
            v28 = v37-- == 1;
            if (v28)
                break;
        }
    }
}
function sub_654A50(/*  */) {
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.write("");
    mplew.writeBuffer("v2 + 32", 0x65);
    mplew.writeInt("");
    mplew.writeBuffer("v2 + 140", 0xD);
}

function sub_64F540(/*  */)
//int __unkcall sub_64F540 (/* char *unk, int iPacket */)
{
    v3 = mplew.write("v3");
    if (v3)
        v20 = mplew.writeInt("v20");
    v4 = mplew.writeShort("v4");
    sub_61A140(/* v2 + 1216 */);
    if (v4 <= 0)
    { } else {
        do {
            sub_7276F0(/* iPacket */);
            --v4;
            v35 = -1;
        }
        while (v4);
    }
    v5 = mplew.writeInt("v5");
    if (v5 <= 0) {
    }
    else {
        v18 = v5;
        do {
            sub_7347B0(/* &v16, iPacket */);
            --v18;
        }
        while (v18);
    }
    mplew.writeShort("");
    mplew.writeShort("");
    mplew.writeShort("");
    mplew.writeShort("");
}

function sub_7347B0(/*  */) {
    mplew.StartNode("sub_7347B0- 未处理好 ");
    v2 = mplew.write("v2");
    //   if ( v6 )
    //   {
    // (*(*v6 + 304))(v6, iPacket);
    //   }
    mplew.EndNode(false);
}
function sub_7276F0(/*  */) {
    mplew.StartNode("sub_7276F0 ");
    unk = mplew.writeBuffer("unk", 8);
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.writeShort("");
    mplew.writeBuffer("v2 + 26", 0xD);
    mplew.writeBuffer("v2 + 39", 8);
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.writeInt("");
    mplew.write("");
    mplew.write("");
    mplew.write("");
    sub_726C80()
    mplew.EndNode(false);
}
function sub_726C80(/*  */) {
    mplew.StartNode("sub_726C80");
    v7 = mplew.writeBuffer("v7", 8);
    v7 = mplew.writeBuffer("v7", 8);
    mplew.writeInt("");
    v5 = 3;
    do {
        result = mplew.writeInt("result");
        --v5;
    }
    while (v5);
    mplew.EndNode(false);
}
function sub_64A100(/*  */) {
    v4 = mplew.writeShort("v4");
    if (v4 > 0) {
        if (v4 > 0) {
            v7 = 118 * v6;
            do {
                sub_7276F0(/* (v7 + *v3), iPacket_1 */);
                v7 += 118;
                --v4;
            }
            while (v4);
        }
    }
    return result;
}
function sub_652F20(/*  */) {
    mplew.write("v3");
}

function sub_64F8C0(/*  */) {
    v3 = mplew.writeShort("v3");
    if (v3 > 0)
        v40 = mplew.writeBuffer("v40", 98 * v3);
}
function sub_652F50(/*  */) {
    v3 = mplew.write("v3");
}

function sub_6495E0(/*  */) {
    mplew.writeBuffer("unk + 1264", 0x30);
}
function sub_652F80(/*  */) {
    v3 = mplew.write("v3");
}

function sub_6496D0(/*  */) {
    mplew.writeBuffer("unk + 1264", v7);
}
function sub_64FD20(/*  */) {
    v2 = mplew.write("v2");
}

function sub_64AF30(/*  */) {
    sub_7276F0(/* v4, iPacket_1 */);
    if (mplew.writeInt(""))
        v24 = mplew.writeBuffer("v24", 8);
    if (mplew.write("")) {
        sub_7276F0(/* v6, iPacket */);
    }
    v8 = mplew.writeInt("v8");
}
function sub_652FB0(/*  */) {
    v33 = 0;
    v5 = mplew.write("v5");
    v6 = v5;
    if (v5 == 10) {
    }
    if (v5 == 29 || v5 == 28) {
        v10 = mplew.writeInt("v10");
    }
    if (v6 == 62) {
        return;
    }
    if (!v6 || v6 == 2 || v6 == 1) {
        return;
    }
    if (v6 != 50) {
        if (v6 == 66) {
            v17 = mplew.writeInt("v17");
            v39 = mplew.writeBuffer("v39", 8);
        }
        return;
    }
    v12 = mplew.write("v12");
}

function sub_64FD50(/*  */) {
    v4 = mplew.write("v4");
    sub_648EB0(/* v4, &iPacket */);
    v28 = 0;
    if (v4 > 0) {
        sub_7277B0(v4/* iPacket_1, &v23, v4 */);
    }
    v9 = mplew.writeShort("v9");
    v10 = mplew.writeInt("v10");
    if (v10) {
        v26 = mplew.writeBuffer("v26", 8);
    }
    if (mplew.write("")) {
        sub_7276F0(/* v11, iPacket_1 */);
    }
}

function sub_7277B0(a3/*  */) {
    v3 = a3;
    if (a3 > 0) {
        do {
            result = sub_7276F0(/* (v4 + *a2), a1 */);
            --v3;
        }
        while (v3);
    }
}
function sub_6533E0(/*  */) {
    v5 = mplew.write("v5");
    v6 = v5;
    if (v5 == 10) {
    } else {
        if (v5 == 29 || v5 == 28) {
            v7 = mplew.writeInt("v7");
        }
        if (v6 == 62) {
            return;
        }
        if (v6 == 110 || v6 == 111 || v6 == 112)
        { }
    }
    if (!v6 || v6 == 2 || v6 == 1) {
        return;
    }
    if (v6 != 66) {
        return;
    }
    v9 = mplew.writeInt("v9");
    v25 = mplew.writeBuffer("v25", 8);
}
function sub_64B170(/*  */) {
    sub_7276F0(/* v4, iPacket */);
}
function sub_64FFD0(/*  */) {
    mplew.write("v2");
}
function sub_650000(/*  */) {
    mplew.writeMapleAsciiString("");
    v2 = mplew.writeInt("v2");
    v3 = mplew.writeShort("v3");
    v4 = mplew.writeShort("v4");
}
function sub_653670(/*  */) {
    v3 = mplew.write("v3");
    v4 = v3;
    if (v3 == 29 || v3 == 28) {
        v5 = mplew.writeInt("v5");
    }
}

function sub_6501D0(/*  */) {
    v4 = mplew.write("v4");
    if (v4 > 0) {
        sub_7277B0(/* iPacket_1, &v49, v4 */);
    }
    v60 = mplew.writeInt("v60");
    v13 = mplew.writeInt("v13");
    if (v13 > 0) {
        v53 = mplew.writeBuffer("v53", 8 * v13);
    }
    v25 = mplew.writeInt("v25");
}
function sub_650960(/*  */) {
    v26 = mplew.writeBuffer("v26", 8);
}
function sub_650CC0(/*  */) {
    mplew.writeMapleAsciiString("");
    v2 = mplew.write("v2");
    if (v2 > 0) {
        sub_7277B0(/* iPacket_1, &v29, v2 */);
    }
    v12 = mplew.writeInt("v12");
}
function sub_650CC0(/*  */)
//void __stdcall sub_650CC0 (/* int iPacket */)
{
    mplew.writeMapleAsciiString("");
    v41 = 0;
    v2 = mplew.write("v2");
    v41 = 9;
    if (v2 > 0) {
        sub_7277B0(/* iPacket_1, &v29, v2 */);

    }
    v12 = mplew.writeInt("v12");
}
function sub_651220(/*  */) {
    mplew.write("v2");
}
function sub_651220(/*  */) {
    mplew.write("v2");
}
function sub_651250(/*  */) {
    mplew.writeMapleAsciiString("");
    v4 = mplew.writeInt("v4");
    v5 = mplew.writeShort("v5");
}
function sub_6537D0(/*  */) {
    v3 = mplew.write("v3");
    if (v3 == 29 || v3 == 28) {
        v5 = mplew.writeInt("v5");
    }
}
function sub_651430(/*  */) {
    v4 = mplew.write("v4");
    v5 = mplew.writeShort("v5");
    v6 = mplew.writeInt("v6");
}
function sub_6538D0(/*  */) {
    mplew.write("v2");
}
function sub_651660(/*  */) {
    mplew.writeShort("");
    v4 = mplew.writeInt("v4");
}
function sub_653910(/*  */) {
    mplew.write("v2");
}
function sub_651810(/*  */) {
    mplew.writeShort("");
    v4 = mplew.writeInt("v4");
}
function sub_653950(/*  */) {
    mplew.write("v2");
}
function sub_6497D0(/*  */) {
    mplew.writeShort("");
    v2 = mplew.writeInt("v2");
}
function sub_653990(/*  */) {
    mplew.write("v2");
}
function sub_64A190(/*  */) {
    mplew.writeShort("");
    v19 = mplew.writeBuffer("v19", 8);
}
function sub_6528C0(/*  */) {
    mplew.write("v2");
}
function sub_6519B0(/*  */) {
    v3 = mplew.writeShort("v3");
    v4 = mplew.writeShort("v4");
    v5 = mplew.writeInt("v5");
}
function sub_6539D0(/*  */) {
    mplew.write("v2");
}
function sub_64B3C0(/*  */) {
    if (mplew.write(""))
    { }
    v48 = mplew.writeShort("v48");
    sub_7347B0(/* &v38, iPacket */);
    v10 = mplew.writeInt("v10");
    v11 = v10;
    if (v10) {
        if (v11 > 0) {
            do {
                v43 = mplew.writeBuffer("v43", 8);
                --v11;
            }
            while (v11);
        }
    }
    v21 = mplew.write("v21");
    if (v21) {
        sub_7276F0(/* &v52, iPacket_1 */);
    }
}
function sub_651C70(/*  */) {
    mplew.write("v2");
}
function sub_651CA0(/*  */) {
    sub_7276F0();
}
function sub_651EA0(/*  */) {
    mplew.write("v2");
}
function sub_649830(/*  */) {
    v13 = 8;
    v12 = mplew.writeBuffer("v12", v13);
}
function sub_651ED0(/*  */) {
    mplew.write("v2");
}
function sub_64BA00(/*  */) {
    v27 = mplew.writeBuffer("v27", 8);
    v26 = mplew.writeInt("v26");
    v6 = mplew.writeInt("v6");
    v7 = v6;
    if (v6) {
        if (v7 > 0) {
            do {
                v27 = mplew.writeBuffer("v27", 8);
                --v7;
            }
            while (v7);
        }
    }
}
function sub_651ED0(/*  */) {
    mplew.writeShort("v2");
}
function sub_653AE0(/*  */) {
    v3 = mplew.write("v3");
    if (v3 == 26) {
    }
    else if (v3 == 29 || v3 == 28) {
        v5 = mplew.writeInt("v5");
    }
}
function sub_6520F0(/*  */) {
    sub_7276F0(/* v3, iPacket_1 */);
    mplew.writeMapleAsciiString("");
    v5 = mplew.writeInt("v5");
    v6 = mplew.writeShort("v6");
    v7 = mplew.writeInt("v7");
}
function sub_653BD0(/*  */) {
    v3 = mplew.write("v3");
    if (v3 == 27) {
    }
    else if (v3 == 29 || v3 == 28) {
        v5 = mplew.writeInt("v5");
    }
    if (!v4 || v4 == 2 || v4 == 1)
    { }
}
function sub_653BD0(/*  */) {
    mplew.writeBuffer("v16", 8);
}
function sub_64BC70(/*  */) {
    v5 = mplew.writeInt("v5");
    if (v5 > 0) {
        a2 = mplew.writeBuffer("a2", 8 * v5);
    }
}
function sub_6498F0()
{ }
function sub_653CC0(/*  */) {
    mplew.write("v2");
}
function sub_649930() {
    mplew.writeInt("v5");
    mplew.writeInt("v5");
}
function sub_648690(/*  */) {
    mplew.write("v2");
}
function sub_649A90() {
    mplew.writeInt("v5");
    mplew.writeInt("v5");
}
function sub_649BE0() {
    mplew.write("v2");
    mplew.writeInt("v5");
}
function sub_64BE50(/*  */) {
    v5 = mplew.writeInt("v5");
    if (v5 > 0) {
        a2 = mplew.writeBuffer("a2", 8 * v5);
    }
}
function sub_6522B0(/*  */) {
    mplew.write("v2");
    v5 = mplew.writeInt("v5");
    if (v5 > 0) {
        a2 = mplew.writeBuffer("a2", 8 * v5);
    }
}
function sub_64C0E0(/*  */) {
    v61 = mplew.writeBuffer("v61", 8);
    v52 = mplew.writeInt("v52");
    sub_7347B0(/* &v53, CInPacket */);
    v11 = mplew.writeShort("v11");
    if (v11) {
        v17 = mplew.writeInt("v17");
        v18 = v17;
        if (v17) {
            if (v18 > 0) {
                do {
                    uFlagBuff = mplew.writeBuffer("uFlagBuff", 8);
                    --v18;
                }
                while (v18);
            }
        }
        v28 = mplew.write("v28");
        if (v28) {
            sub_7276F0(/* &v64, CInPacket */);
        }
    }
}
function sub_6523E0(/*  */) {
    mplew.write("v2");
}
function sub_64C7D0(/*  */) {
    mplew.writeBuffer("v37", 8);
}
function sub_652410(/*  */) {
    mplew.write("v2");
}
function sub_652440(/*  */) {
}
function sub_653D00(/*  */) {
    mplew.write("v2");
}
function sub_624320(/*  */) {
    mplew.writeInt("v52");
    mplew.writeInt("v52");
}
function sub_64E060(/*  */) {
    j = mplew.writeBuffer("j", v26);
    v11 = mplew.writeInt("v11");
    v12 = v11;
    if (v11) {
        if (v12 > 0) {
            do {
                j = mplew.writeBuffer("j", 8);
                --v12;
            }
            while (v12);
        }
    }
}
function sub_64E230(/*  */) {
    mplew.write("v2");
}
function sub_64A2B0(/*  */) {
}
function sub_652900(/*  */) {
    v3 = mplew.write("v3");
    if (v3 == 29 || v3 == 28) {
        v5 = mplew.writeInt("v5");
    }
    if (v4 && v4 != 2 && v4 != 1) {
    }
    else {
    }
}
function sub_64A490(/*  */) {
    sub_7276F0();
}
function sub_64ECB0(/*  */) {
    mplew.writeInt("v52");
    mplew.writeInt("v52");
}
function sub_652D80(/*  */) {
    mplew.write("v2");
}