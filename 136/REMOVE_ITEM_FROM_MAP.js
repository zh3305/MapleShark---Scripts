var animation = mplew.write("animation");
oid = mplew.writeInt("oid");
if (animation >= 2) {
    cid = mplew.writeInt("cid");
    if (animation == 5) {
        mplew.writeInt("slot");
    }
}