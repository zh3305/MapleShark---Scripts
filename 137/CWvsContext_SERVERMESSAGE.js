CWvsContext_SERVERMESSAGE();
function CWvsContext_SERVERMESSAGE() {
    type = mplew.write("type");
    v111 = 1;
    if (type == 0xD || type == 0xE||type == 0x21) {
        v111 = 0;
    }
     if (type == 4) {
        v111 = mplew.write("v111");
    }
    if (v111) {
        mplew.writeMapleAsciiString("v6");
    }
    if (type == 3 || type == 0x17 || type == 0x1A || type == 0x1B || type == 0x1C || type == 0x28 || type == 0x32) {
         mplew.write("v119");
         mplew.write("v118");
        break;
    } else if (type == 8) {
         mplew.write("v119");
        mplew.write("v118");
        if (!mplew.write(""))
            break;
        v7 = sub_75DBD0(/* &v113, ipacket */);
        break;
    } else if (type == 9) {
        mplew.write("v119");
        break;
    } else if (type == 10) {
        v112 = mplew.write("v112");
        if (v112 > 1) {
            mplew.writeMapleAsciiString("v8");
        }
        if (v112 > 2) {
             mplew.writeMapleAsciiString("v9");
        }
        mplew.write("v119");
        mplew.write("v118");
        break;
    } else if (type == 12) {
        mplew.writeInt("v2");
        break;
    } else if (type == 24) {
        mplew.writeInt("v2");
        v5 = 1000 * mplew.writeInt("");
        if (mplew.write("")) {
            v114 = mplew.writeBuffer("v114", 0x78);
        }
        break;
    } else if (type == 29 || type == 30) {
        mplew.writeInt("v119");
        v11 = mplew.writeMapleAsciiString("v11");
        v12 = sub_75DBD0(/* &v113, ipacket */);
        break;
    } else if (type == 17) {
        if (!mplew.write(""))
            break;
        v7 = sub_75DBD0(/* &v113, ipacket */);
        break;
    } else if (type == 21) {
        v10 = sub_75DBD0(/* &v113, ipacket */);
    } else if (type == 22) {
        v10 = sub_75DBD0(/* &v113, ipacket */);
    }
    // if (!v116) {
    //     return;
    // }
    // LABEL_52:
    switch (type) {
        case 0:
        case 1:
        case 2:
        case 17:
        case 3:
        case 8:
        case 9:
        case 10:
        case 23:
        case 26:
        case 27:
        case 28:
        case 40:
        case 50:
        case 29:
        case 30:
            break;
        case 34:
            v72 = mplew.writeInt("v72");
            v111 = mplew.writeInt("v111");
            mplew.writeInt("");
            if (mplew.write("")) {
                v73 = sub_75DBD0(/* &v146, ipacket */);
            }
            break;
        case 4:
        case 5:
            break;
        case 11:
            mplew.writeInt("");
            break;
        case 6:
        case 18:
            mplew.writeInt("");
            break;
        case 7:
            v87 = mplew.writeInt("v87");
            break;
        case 12:
        case 24:
        case 13:
        case 14:
        case 15:
            break;
        case 16:
            v90 = mplew.writeInt("v90");
            break;
        case 20:
            v93 = mplew.writeInt("v93");
            v94 = mplew.writeInt("v94");
        case 31:
            break;
        case 33:
            mplew.writeMapleAsciiString("");
            mplew.writeInt("");
            break;
        case 21:
        case 22:
            break;
    }
}
function sub_75DBD0(/*  */) {
    mplew.write("v2");
    if (false) {
        //  (*(*v6 + 312))(v6, iPacket);
    }
}