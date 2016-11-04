OnPacket();
function OnPacket()
//void __cdecl CUIMessenger::OnPacket(int iPacket)
{
    switch (mplew.write("type")) {
        case 0x14:
            sub_BA0530(/* iPacket, v1 */);
            break;
        case 0x15:
            sub_B9FCE0(/* iPacket */);
            break;
        case 0x1E:
            sub_B9E550(/* iPacket */);
            break;
        case 0x12:
            sub_B9FAE0(/* iPacket */);
            break;
        case 0x16:
            (sub_BA1670)(/* iPacket, v1 */);
            break;
        default:
            return;
    }
}
function sub_BA0530(/*  */)
//void __cdecl sub_BA0530 (/* int *iPacket_1, int *data */)
{
    v2 = mplew.write("v2");
    v3 = v2;
    if (v2) {
        sub_B9FF40(/* v82, iPacket */);
    }
    else {
        v4 = mplew.write("sub_BA0530 else");
    }
}
function sub_B9FF40(/*  */)
//int __thiscall sub_B9FF40 (/* int this, int iPacket */)
{
    var unktest=false;
    mplew.write("");
    mplew.write("");
    for (i = mplew.write("i"); i >= 0; i = mplew.AddSByte("i")) {
        //if ( !(*(*v2 + 136))(v2) || i )
        mplew.LogAppend("i=" + i)
        if (unktest) {
            unktest = false;
        }
        else {
            unktest = true;
            v7 = mplew.writeInt("itemid");
        }
        v8 = mplew.writeMapleAsciiString("name");
        if (!unktest)
            mplew.writeShort("");
    }
}