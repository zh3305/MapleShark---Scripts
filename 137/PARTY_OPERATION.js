PARTY_OPERATION()
function PARTY_OPERATION() {
    v4 = mplew.write("v4");
    v202 = 0;
    v200 = 0;
    v198 = 0;
    v201 = 0;
    v253 = 2;
    switch (v4) {
        case 4:
            v5 = mplew.writeInt("v5");
            mplew.writeMapleAsciiString("");
            v253 = 3;
            v196 = mplew.writeInt("v196");
            v199 = mplew.writeInt("v199");
            v195 = mplew.writeInt("v195");
            v198 = mplew.write("v198");
            v6 = -1;
            if (mplew.write(""))
                v6 = mplew.write("v6");
            return;
        case 0x1D:
            return;
        case 5:
            v16 = mplew.writeInt("v16");
            mplew.writeMapleAsciiString("");
            v253 = 8;
            v195 = mplew.writeInt("v195");
            v201 = mplew.writeInt("v201");
            v198 = mplew.writeInt("v198");
            return;
        case 0x22:
        case 0x28:
            mplew.writeMapleAsciiString("");
            return;
        case 8:
            v28 = mplew.writeInt("v28");
            mplew.writeMapleAsciiString("");
            v253 = 14;
            v29 = mplew.writeInt("v29");
            v201 = mplew.writeInt("v201");
            v30 = mplew.writeInt("v30");
            return;
        case 0x46:
            mplew.writeMapleAsciiString("");

            return;
        case 0x10:
            mplew.writeInt("");
            sub_7653B0(/* iPacket */);
            return;
        case 0x11:
            mplew.writeInt("");
            v43 = mplew.writeInt("v43");
            v44 = mplew.writeInt("v44");
            v195 = mplew.writeInt("v195");
            v210 = mplew.writeShort("v210");
            v211 = mplew.writeShort("v211");
            v196 = mplew.write("v196");
            v197 = mplew.write("v197");
            mplew.writeMapleAsciiString("");
            return;
        case 0x16:
            mplew.writeInt("");
            v56 = mplew.writeInt("v56");
            v199 = v56;
            if (mplew.write("")) {
                v57 = mplew.write("v57");
                v58 = mplew.writeMapleAsciiString("v58");
                sub_7653B0(/* iPacket */);
            }
            return;
        case 0x19:
            mplew.writeInt("");
            v74 = mplew.writeMapleAsciiString("v74");
            v197 = mplew.write("v197");
            v195 = mplew.writeInt("v195");
            sub_7653B0(/* iPacket */);
            return;
        case 0x1A:
            v86 = mplew.write("v86");
            v87 = mplew.writeInt("v87");
            return;
        case 0x3B:
            mplew.writeInt("");
            sub_7653B0(/* iPacket */);
            return;
        case 0x3C:
            v95 = mplew.writeInt("v95");
            v96 = mplew.writeInt("v96");
            v97 = mplew.writeInt("v97");
            if (v98 == -1)
                return;
            return;
        case 0x55:
            v99 = mplew.write("v99");
            v100 = mplew.writeInt("v100");
            v198 = mplew.writeInt("v198");
            v197 = mplew.writeInt("v197");
            v210 = mplew.writeShort("v210");
            v101 = mplew.writeShort("v101");
            return;
        case 0x32:
            v104 = mplew.writeInt("v104");
            v105 = mplew.write("v105");
            return;
        case 0x3D:
            v112 = mplew.writeInt("v112");
            v113 = mplew.write("v113");
            return;
        case 0x3E:
            v115 = mplew.writeInt("v115");
            v116 = mplew.write("v116");
            return;
        case 0x3F:
            v118 = mplew.write("v118");
            return;
        case 0x40:
            return;
        case 0x4E:
        case 0x4F:
            mplew.writeMapleAsciiString("");
            if (true) {
                if (true) {
                    // if (sub_19CA2B0(/* 34 */) + v125 < 3) {
                    v195 = mplew.writeInt("v195");
                    v196 = mplew.writeInt("v196");
                    v199 = mplew.writeInt("v199");
                    if (v4 == 0x4E) {
                    }
                    else {
                        v192 = mplew.writeInt("v192");

                    }
                    // }
                }
            }
            return;
        case 0x53:
            if (mplew.writeInt(""))
                sub_7653B0(/* iPacket */);
            return;
        case 0x76:
        case 0x77:
        case 0x78:
        case 0x7A:
        case 0x7B:
        case 0x42:
        case 0x43:
        case 0x44:
            return;
        case 0x79:
            v128 = mplew.writeInt("v128");
            mplew.writeMapleAsciiString("");
            v129 = mplew.writeInt("v129");
            v199 = mplew.writeInt("v199");
            v130 = mplew.writeInt("v130");
            return;
        case 0x41:
            v137 = mplew.writeInt("v137");
            mplew.writeMapleAsciiString("");
            mplew.write("");
            return;
        case 0x50:
            v139 = mplew.write("v139") != 0;
            mplew.writeMapleAsciiString("");

            return;
        case 0x51:
            v146 = mplew.writeInt("v146");
            if (v146 > 0) {
                v147 = v146;
                do {
                    v195 = mplew.writeInt("v195");
                    v197 = mplew.writeInt("v197");
                    --v147;
                }
                while (v147);
            }
            return;
        case 0x52:
            if (mplew.writeInt(""))//!= *(v2 + 26984) || *(v2 + 44) > 0xAu
                v148 = mplew.writeInt("v148");
            if (v148 > 0) {
                v149 = v148;
                do {
                    v195 = mplew.writeInt("v195");
                    v197 = mplew.writeInt("v197");
                    --v149;
                }
                while (v149);
            }
            return;
        case 0x54:
            v150 = mplew.write("v150");
            return;
        case 0x33:
            return;
        case 0x34:
            return;
        case 0x35:
            return;
        case 0x12:
            return;
        case 0x13:
            return;
        case 0x17:
            return;
        case 0x1B:
            return;
        case 0x1C:
            return;
        case 0x37:
            return;
        case 0x2F:
            return;
        case 0x45:
            return;
        case 0x39:
            return;
        case 0x3A:
            return;
        case 0x31:
            return;
        default:
            return;
    }
}
function sub_7653B0(/*  */)
//void __thiscall sub_7653B0 (/* void *this, int iPacket */)
{
    sub_74F820(/* iPacket */);
    mplew.writeBuffer("v2 + 250", 0x18);
    mplew.writeBuffer("v2 + 274", 0x78);
    mplew.write("") != 0;
    mplew.write("") != 0;
    v4 = mplew.writeMapleAsciiString("v4");
}
function sub_74F820(/*  */)
//unsigned int __thiscall sub_74F820 (/* void *this, int a2 */)
{
    // return mplew.writeBuffer("this", 0xFA);
    for (var i = 0; i < 6; i++) {
        mplew.writeInt("partychar.getId()");
    }
    for (var i = 0; i < 6; i++) {
        mplew.writeAsciiString("partychar.getName()", 13);
    }
    for (var i = 0; i < 6; i++) {
        mplew.writeInt("partychar.getJobId()");
    }
    for (var i = 0; i < 6; i++) {
        mplew.writeInt(0);
    }
    for (var i = 0; i < 6; i++) {
        mplew.writeInt("partychar.getLevel()");
    }
    for (var i = 0; i < 6; i++) {
        mplew.writeInt("partychar.isOnline() ? partychar.getChannel()", 1, -2);
    }
}