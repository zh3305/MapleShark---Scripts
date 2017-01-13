  type = mplew.write("type");
  if (type == 4) {
      mplew.write(1);
  }
  if ((type != 0xD) && (type != 0xE) && (type != 0x21)) {
      mplew.writeMapleAsciiString("message");
  }
  switch (type) {
      case 0x21:
          break;
      case 3:
      case 0x17:
      case 0x1A:
      case 0x1B:
      case 0x1C:
      case 0x28:
      case 0x32:
          mplew.write(channel - 1); // channel
          mplew.write(megaEar ? 1 : 0);
          //                mplew.write("v119");
          //                mplew.write("v118");
          break;
      case 8:
          mplew.write(channel - 1); // channel
          mplew.write(megaEar ? 1 : 0);
          if (!mplew.writeBoolean(true)) {
              break;
          }
          //   sub_75DBD0(/* &v113, ipacket */);
          mplew.write(0);
          break;
      case 9:
          mplew.write(channel - 1); // channel
          break;
      case 0x0A:
          var v112 = 0;
          mplew.write(v112);
          if (v112 > 1) {
              mplew.writeMapleAsciiString("v8");
          }
          if (v112 > 2) {
              mplew.writeMapleAsciiString("v9");
          }
          mplew.write(channel - 1); // channel
          mplew.write(megaEar ? 1 : 0);
          break;
      case 0x0C:
          mplew.writeInt(0);
          break;
      case 0x18:
          mplew.writeInt(0);
          mplew.writeInt(1); //显示时间
          if (mplew.writeBoolean(false)) {
              // mplew.writeBuffer("v114", 0x78);
          }
          break;
      case 0x1D:
      case 0x1E:
          mplew.write(channel - 1); // channel
          mplew.writeMapleAsciiString("v11");
          //                sub_75DBD0(/* &v113, ipacket */);
          mplew.write(0);
          break;
      case 0x11:
          if (!mplew.writeBoolean(true))
              break;
          //                sub_75DBD0(/* &v113, ipacket */);
          mplew.write(0);
          break;
      case 0x15:
          //   sub_75DBD0(/* &v113, ipacket */);
          mplew.write(0);
          break;
      case 0x16:
          //   sub_75DBD0(/* &v113, ipacket */);
          mplew.write(0);
          break;
  }
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
          mplew.writeInt(0);
          mplew.writeInt(0);
          mplew.writeInt(0);
          if (mplew.writeBoolean(false)) {
              // sub_75DBD0(/* &v146, ipacket */);
          }
          break;
      case 4:
      case 5:
          break;
      case 11:
          mplew.writeInt(0);
          break;
      case 6:
      case 18:
          mplew.writeInt(channel >= 1000000 && channel < 6000000 ? channel : 0); //cash itemID, displayed in yellow by the {name}
          break;
      case 7:
          mplew.writeInt(0);
          break;
      case 12:
      case 24:
      case 13:
      case 14:
      case 15:
          break;
      case 16:
          mplew.writeInt(channel - 1);
          break;
      case 20:
          mplew.writeInt(0);
          mplew.writeInt(0);
      case 31:
          break;
      case 33:
          mplew.writeMapleAsciiString("");
          mplew.writeInt(0);
          break;
      case 21:
      case 22:
          break;
  }
  //        mplew.writeMapleAsciiString(message);
  //        switch (type) {
  //            case 0x03: //高品质喇叭
  //            case 0x09: //道具喇叭
  //            case 0x28: //蛋糕高级喇叭 +0x10
  //            case 0x32: //馅饼高级喇叭 +0x19
  //            case 0x1A: //心脏高级喇叭
  //            case 0x1B: //白骨高级喇叭
  //                mplew.write(channel - 1); // channel
  //                mplew.write(megaEar ? 1 : 0);
  //                break;
  //            case 0x10:
  //                mplew.writeInt(channel - 1);
  //                break;
  //            case 0x06:
  //                mplew.writeInt(channel >= 1000000 && channel < 6000000 ? channel : 0); //cash itemID, displayed in yellow by the {name}
  //                break;
  //        }