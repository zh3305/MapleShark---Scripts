sub_898420()
function sub_898420(/*  */) {
    v88 = mplew.writeInt("unk");
    v91 = mplew.writeInt("Count");
    type = mplew.write("type");
    type_1 = type;
    if (type == 1) {
        v3 = mplew.writeInt("v3");
        v4 = mplew.write("v4");
        v5 = v4 != 0;
        v109 = v4 != 0;
        v110 = (mplew.writeInt(""));
        i = mplew.writeInt("i");
        v112 = (mplew.writeInt(""));
        v6 = (mplew.writeInt(""));

    } else if (type == 4) {
        v20 = mplew.writeInt("v20");
        v21 = mplew.writeInt("v21");
        starty = mplew.writeInt("starty");
        v112 = (mplew.writeInt(""));
        i = mplew.writeInt("i");
    }
    // mplew.StartNode("for ");
    for (i = 0; i < v91; i++) {
        mplew.StartNode("for :" + i);
        if (mplew.write("IsShow", 1)) {
            v111 = mplew.writeInt("掉了物品id");//蘑菇2d-2F 
            Objectid = mplew.writeInt("Objectid");
            startX = mplew.writeInt("startX");
            starty = mplew.writeInt("starty");
            endx = mplew.writeInt("endx");
            endy = mplew.writeInt("endy");
            v77 = mplew.writeInt("unk1",0xA,0xF);
            v80 = mplew.writeInt("伤害百分比");
            v78 = mplew.writeInt(0);
            v110 = mplew.writeInt("unk");
            v94 = mplew.writeInt(0);
            v79 = mplew.writeInt("v79");
            v76 = mplew.writeInt("速度");
            v75 = mplew.writeInt("掉落距离");
            v95 = mplew.writeInt(0);
            if (type_1 == 5) {
                mplew.StartNode("type_1==5");
                v32 = mplew.writeInt("v32");
                v33 = mplew.writeInt("v33");
                v103 = mplew.writeInt("v103");
                v112 = (mplew.writeInt(""));
                v100 = mplew.writeInt("v100");
                mplew.EndNode(false);
            }
        }
        mplew.EndNode(false);
    }
    // mplew.EndNode(false);
}