var packadd= mplew.write("增长长度");
var skip=0;
var Type=mplew.DAddByte();
switch (Type) {
    case 0x04:
        mplew.write("04(总长度=1028+增长长度)",04,03);
        skip=1028;
        break;
    case 0x03:
        mplew.write("03(总长度=772+增长长度)",04,03);
        skip=772;
        break;
    default:
     mplew.write("未知长度类型",04,03);
        break;
}
var pack2= mplew.writeBuffer("未知数据","00 00 8B 44 24 04 60 9C 50 E8 09 00 00 00 89 44 24 20 9D 61 C2 04 00 90 E8 00 00 00 00 60");
mplew.skip(skip+packadd-32-53);
mplew.writeZeroBytes(53);