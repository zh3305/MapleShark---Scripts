sub_9C8330()
function sub_9C8330(/*  */)
//void __thiscall sub_9C8330 (/* _DWORD *this, CInPacket *ipacket */)
{
    mode = mplew.write("mode");
    switch (mode) {
        case 0:
            v4 = mplew.writeInt("v4");
            if (v4 <= 0x5F1) {
                v6 = mplew.writeInt("v6");
            }
            return;
        case 1:
            v9 = mplew.writeInt("v9");
            return;
        case 5:
            v111 = mplew.write("v111") != 0;
            v10 = mplew.writeInt("v10");
            v11 = v10;
            if (v10 < 0 || v2[1]) {
            }
            else {
                if (v111) {
                }
                else {
                    v115 = mplew.writeInt("v115");
                    v14 = mplew.writeInt("v14");
                }
            }
            return;
        case 7:
            v16 = mplew.writeInt("v16");
            v110 = mplew.writeInt("v110");
            v114 = mplew.writeInt("v114");
            v115 = mplew.writeInt("v115");
            v17 = mplew.writeInt("v17");
            return;
        case 6:
            mplew.writeInt("");
            return;
        case 2:
            mplew.writeMapleAsciiString("");
            v114 = mplew.writeInt("v114");
            v110 = mplew.writeInt("v110");
            v104 = mplew.writeInt("v104");
            v20 = mplew.write("v20");
            if (v20)
                v117 = mplew.writeInt("v117");
            v21 = mplew.write("v21");
            if (!v21)
                return;// continue LABEL_32;
            v23 = mplew.writeInt("v23");
            // v24 = sub_8FFA00(/* v23 */);
            v113 = mplew.write("v113");
            v26 = mplew.write("v26");
            // LABEL_32:
            return;// continue LABEL_127;
        case 3:
            mode9 = mplew.writeInt("mode9");
            return;
        case 15:
            v40 = mplew.writeInt("v40");
            v41 = mplew.writeInt("v41");
            return;
        case 16:
             mplew.writeInt("");
            return;
        case 4:
            mplew.writeMapleAsciiString("");
            v44 = mplew.writeInt("v44");
            v116 = mplew.writeInt("v116");
            v45 = mplew.writeInt("v45");
            return;// continue LABEL_126;
        case 9:
            v116 = mplew.write("") != 0;
            return;
        case 10:
            v47 = mplew.writeInt("v47");
            return;
        case 11:
            mplew.writeMapleAsciiString("");
            v49 = mplew.write("v49");
            return;// continue LABEL_126;
        case 12:
            mplew.writeMapleAsciiString("");
            v110 = mplew.write("v110");
            v116 = mplew.writeShort("v116");
            v114 = mplew.writeInt("v114");
            v58 = mplew.writeInt("v58");
            return;// continue LABEL_126;
        case 13:
            v67 = mplew.write("v67");
            break;
        case 8:
            return;
        case 14:
            return;
        case 17:
        case 19:
            v80 = mplew.write("v80");
            return;
        case 18:
            mplew.writeMapleAsciiString("");
            v81 = mplew.write("v81");
            v116 = mplew.write("v116");
            // LABEL_126:
            // LABEL_127:
            return;
        default:
            return;
    }
    while (1) {
        v69 = mplew.writeInt("v69");
        if (!v69)
            break;
    }
    // LABEL_102:
    // LABEL_129:
}