SHOW_SPECIAL_EFFECT();
function SHOW_SPECIAL_EFFECT()
//float *__thiscall SHOW_SPECIAL_EFFECT(void *this, CInPacket *ipacket)
{
  effect = mplew.write("effect");
  v856 = 255;
  effect_1 = effect;
  switch (effect) {
    case 0x18:
      v857 = mplew.write("") != 0;
      v849 = mplew.writeInt("v849");
      v853 = mplew.writeInt("v853");
      mplew.writeMapleAsciiString("");
      return;// continue LABEL_112;
    case 0x35:
      mplew.writeMapleAsciiString("");
      if (mplew.write("")) {
        if (mplew.write("")) {
          v852 = mplew.write("v852");
          v853 = mplew.writeInt("v853");
          v857 = mplew.writeInt("v857");
        }

      }
      else {
        v853 = mplew.writeInt("v853");
        v857 = mplew.writeInt("v857");
        v13 = mplew.writeInt("v13");
      }
      return;// continue LABEL_112;
    case 0x1B:
      mplew.writeMapleAsciiString("");

      return;// continue LABEL_112;
    case 0x1C:
      if (mplew.write("")) {
        mplew.writeMapleAsciiString("");
        v858 = (mplew.writeInt(""));
        v857 = mplew.writeInt("v857");
      }
      return;// continue LABEL_112;
    case 0x1D:
      mplew.writeMapleAsciiString("");
      v858 = (mplew.writeInt(""));
      v857 = mplew.writeInt("v857");

      return;// continue LABEL_112;
    case 0x1F:
      mplew.writeMapleAsciiString("");
      return;// continue LABEL_112;
    case 0x20:
      mplew.writeMapleAsciiString("");
      v858 = (mplew.writeInt(""));
      return;// continue LABEL_112;
    case 0x2A:
      v849 = mplew.writeInt("v849");
      v853 = mplew.writeInt("v853");
      v857 = mplew.writeInt("v857");
      v561 = mplew.write("v561");
      return;// continue LABEL_112;
    case 0x2D:
      v857 = mplew.write("") != 0;
      return;// continue LABEL_112;
    case 0x3A:
      v852 = mplew.write("v852") != 0;
      v849 = mplew.writeInt("v849");
      v853 = mplew.writeInt("v853");
      mplew.writeMapleAsciiString("");
      v850 = mplew.writeInt("v850");
      v828 = mplew.writeInt("v828");
      v840 = mplew.writeInt("v840");
      v22 = mplew.writeInt("v22");
      v829 = mplew.writeInt("v829");
      v830 = mplew.writeInt("v830");
      // if (!sub_47EBB0(/* &v841 */)) {
      //   v857 = mplew.writeInt("v857");
      // }
      return;// continue LABEL_112;
    case 0x3D:
      v850 = mplew.writeInt("v850");
      v840 = mplew.writeInt("v840");
      v843 = mplew.writeInt("v843");
      v849 = mplew.writeInt("v849");
      v853 = mplew.writeInt("v853");
      v857 = mplew.writeInt("v857");
      return;// continue LABEL_112;
    case 0x3B:
      mplew.writeMapleAsciiString("");
      v853 = mplew.writeInt("v853");
      v857 = mplew.writeInt("v857");
      v655 = mplew.writeInt("v655");
      v653 = mplew.writeInt("v653");
      v654 = mplew.writeInt("v654");
      v656 = mplew.writeInt("v656");
      v652 = mplew.writeInt("v652");
      v651 = mplew.writeInt("v651");
      v657 = mplew.writeInt("v657");
      v658 = mplew.writeInt("v658");
      return;// continue LABEL_112;
    case 0x3E:
      return;
    //       result = effect_1;
    //       switch (effect_1) {
    //         case 41:
    //           return;// result;
    //         case 0:
    //           return;// result;
    //         case 1:
    //         case 2:
    //           if (effect == 2)
    //             v859 = (mplew.writeInt(""));
    //           v131 = mplew.writeInt("v131");

    //           v136 = mplew.write("v136");
    //           v854 = mplew.write("v854");
    //           if (skillid == 0x15249DA) {
    //             v150 = mplew.write("v150");

    //           }
    //           else if (skillid == 1320016) {
    //             (mplew.write(""))
    //           }
    //           else if (skillid == 0x4215FE) {
    //             effect_1 = mplew.write("effect_1");
    //             v152 = mplew.writeInt("v152");
    //           }
    //           else {
    //             if (skillid == 3211010 || skillid == 3111010 || skillid == 1100012) {
    //               v860 = mplew.write("v860");
    //               v855 = mplew.writeInt("v855");
    //               v857 = mplew.writeInt("v857");
    //               v228 = mplew.writeInt("v228");
    //               continue LABEL_278;
    //             }
    //             if (skillid == nullsub_49) {
    //               continue LABEL_278;
    //             }
    //             if (skillid == 1.112325e-35
    //               || skillid == 1.1123251e-35
    //               || skillid == 1.1123248e-35
    //               || skillid == 1.1123249e-35) {
    //               continue LABEL_278;
    //             }
    //             if (skillid == 0x1F93BDF) {
    //               continue LABEL_278;
    //             }
    //             if (skillid == (0x1C9C7A4 + 2)) {
    //               effect_1 = mplew.write("effect_1");
    //               v805 = mplew.writeShort("v805");
    //               v806 = mplew.writeShort("v806");
    //               continue LABEL_278;
    //             }
    //             if (skillid == (0x1C9C7A4 + 1)) {
    //               v183 = mplew.write("v183");

    //               continue LABEL_278;
    //             }
    //             if (skillid == 8.6719703e-37 || skillid == 8.6809386e-37) {
    //               v860 = mplew.writeInt("v860");
    //               mplew.writeInt("");
    //               mplew.writeInt("");
    //               continue LABEL_278;
    //             }
    //             if (skillid == (0x131CE04 + 2)
    //               || skillid == 0xE4E5BD
    //               || skillid == (0x131F553 + 1)
    //               || skillid == byte_404148
    //               || skillid == byte_4D87BD) {
    //               mplew.writeInt("");
    //               mplew.writeInt("");
    //               mplew.writeInt("");
    //               mplew.writeInt("");
    //               continue LABEL_278;
    //             }
    //           }
    //           if (sub_DE6E40(/* skillid */)) {
    //             v859 = (mplew.writeInt(""));
    //             v858 = (mplew.writeInt(""));
    //             continue LABEL_278;
    //           }
    //           if (skillid == 4.6251323e-36) {
    //             continue LABEL_278;
    //           }
    //           if (skillid == 0xB71F03 || skillid == 0xB71F04) {
    //             continue LABEL_278;
    //           }
    //           if (skillid == 7.4808681e-34) {
    //             continue LABEL_278;
    //           }
    //           if (sub_DE8F30(/* skillid */)) {
    //             v204 = mplew.writeInt("v204");
    //             continue LABEL_278;
    //             if (skillid == 4.6248743e-36) {
    //               v207 = mplew.write("v207");
    //               continue LABEL_278;
    //             }
    //             LABEL_251:
    //             continue LABEL_278;
    //           }
    //           if (skillid != 4.6284814e-36 && skillid != 4.6284817e-36) {
    //             if (sub_DEA3B0(/* skillid */)) {
    //               v216 = mplew.write("v216");
    //               continue LABEL_278;
    //             }

    //             return;// result;
    //         case 3:
    //           v859 = (mplew.writeInt(""));
    //           skillid = mplew.write("skillid");
    //           result = v859;
    //           if (v859 == (0x1DAB758 + 3)) {
    //             v245 = mplew.writeInt("v245");
    //           }
    //           else {
    //             if (v859 == 2.3124151e-35 || v859 == 0x17F2AA6) {
    //             }
    //             if (result == (0x17F50ED + 1)) {
    //               mplew.writeInt("");
    //             }
    //           }
    //           return;// result;
    //         case 4:
    //           v856 = mplew.writeInt("v856");
    //           v860 = mplew.write("v860");
    //           effect_1 = mplew.writeInt("effect_1");
    //           v246 = mplew.writeInt("v246");
    //           return;// result;
    //         case 76:
    //           v856 = mplew.writeInt("v856");
    //           effect_1 = mplew.writeInt("effect_1");
    //           v247 = mplew.write("v247");
    //           return;// result;
    //         case 6:
    //           effect_1 = mplew.writeInt("effect_1");
    //           v248 = mplew.write("v248");
    //           return;// result;
    //         case 5:
    //           v855 = mplew.writeInt("v855");
    //           v860 = mplew.writeInt("v860");
    //           effect_1 = mplew.writeInt("effect_1");
    //           v851 = mplew.write("v851");
    //           v249 = mplew.write("v249");
    //           return;// result;
    //         case 9:
    //           v250 = mplew.writeInt("v250");
    //           if (result) {
    //             if (sub_DEA460(/* v858 */)) {
    //             }
    //             else if (sub_1680050(/* v858 */)) {
    //               v860 = mplew.writeInt("v860");
    //               effect_1 = mplew.writeInt("effect_1");
    //               v251 = mplew.writeInt("v251");
    //             }
    //             else if (v858 == 0x1E9F9A8) {
    //               mplew.write("");
    //               mplew.write("");
    //               mplew.writeInt("");
    //               mplew.writeInt("");
    //               mplew.writeInt("");
    //               result = mplew.writeInt("result");
    //             }

    //           }
    //           return;// result;
    //         case 60:
    //           v252 = mplew.writeInt("v252");
    //           effect_1 = mplew.writeInt("effect_1");

    //           return;// result;
    //         case 10:
    //           return;// result;
    //         case 7:
    //           v273 = mplew.write("v273");
    //           if (v273 <= 0) {
    //             v281 = mplew.writeMapleAsciiString("");
    //             v283 = mplew.writeInt("v283");
    //             return;// sub_47FBC0(/* &skillid */);
    //           }
    //           break;
    //         case 51:
    //           v860 = mplew.write("v860");
    //           mplew.write("");
    //           v856 = mplew.writeInt("v856");
    //           v284 = mplew.writeInt("v284");

    //           return;// sub_47FBC0(/* &skillid */);
    //         case 8:
    //           effect_1 = mplew.write("effect_1");
    //           v292 = mplew.writeInt("v292");
    //           return;// result;
    //         case 11:
    //           v293 = mplew.writeInt("v293");
    //           mplew.write("");
    //           mplew.write("");
    //           switch (v293) {
    //             case 1:
    //               break;
    //             case 2:
    //               break;
    //             case 4:
    //               break;
    //             default:
    //               v298 = mplew.writeInt("v298");
    //               break;
    //           }
    //           return;// sub_47FBC0(/* &v859 */);
    //         case 69:
    //           v301 = mplew.writeInt("v301");
    //           return;// sub_47FBC0(/* &v858 */);
    //         case 71:
    //           v304 = mplew.writeInt("v304");
    //           effect_1 = mplew.writeInt("effect_1");
    //           v305 = mplew.write("v305");
    //           return;// sub_16CCA40(/* v304, effect_1, v305 */);
    //         case 12:
    //           return;// sub_489F90(/* &v660 */);
    //         case 73:
    //           return;// sub_489F90(/* &v859 */);
    //         case 13:

    //           return;// sub_489F90(/* &v706 */);
    //         case 14:
    //           return;// sub_489F90(/* &v704 */);
    //         case 56:
    //           result = sub_AB2D50(/* 1 */);
    //           if (!result)
    //             result = mplew.writeInt("result");
    //           return;// result;
    //         case 15:
    //           v347 = mplew.write("v347");
    //           return;// sub_16909F0(/* v347, 0, 0, 0, 0 */);
    //         case 34:
    //           effect_1 = mplew.writeInt("effect_1");
    //           v348 = mplew.write("v348");
    //           return;// sub_16909F0(/* effect_1, 0, v348, 0, 0 */);
    //         case 63:
    //           v349 = mplew.writeInt("v349");
    //           mplew.writeMapleAsciiString("");
    //           return;// sub_47FBC0(/* &v822 */);
    //         case 35:
    //           effect_1 = mplew.writeInt("effect_1");
    //           return;// sub_16909F0(/* effect_1, v368, 0, 0, 0 */);
    //         case 16:
    //           v369 = mplew.writeInt("v369");
    //           return;// sub_489F90(/* &v858 */);
    //         case 70:
    //           v372 = mplew.writeInt("v372");
    //           return;// sub_489F90(/* &v859 */);
    //         case 17:
    //           v378 = mplew.writeMapleAsciiString("");
    //           return;// sub_489F90(/* &v856 */);
    //         case 19:
    //           v388 = mplew.writeInt("v388");
    //           result = mplew.write("result");
    //           if (result) {
    //             mplew.writeMapleAsciiString("");
    //           }
    //           return;// result;
    //         case 18:
    //           return;// sub_1895670(/* &off_203F23C, 100 */);
    //         case 20:
    //           return;// sub_489F90(/* &v725 */);
    //         case 21:
    //           v402 = mplew.writeInt("v402");
    //           return;// result;
    //         case 23:
    //           effect_1 = mplew.writeInt("effect_1");
    //           return;// sub_53E410(/* v416, v415, v556, v557, LODWORD(v558), v559, v560 */);
    //         case 22:
    //           return;// result;
    //         case 33:
    //           return;// sub_47FBC0(/* &v715 */);
    //         case 25:
    //           v420 = mplew.write("v420");
    //           return;// sub_47FBC0(/* &v858 */);
    //         case 26:
    //           result = sub_4C9BF0(/*v563 */);
    //           if (result) {
    //             result = sub_4C9BF0(/*v563 */);
    //             if (result = 19) {
    //               mplew.writeMapleAsciiString("");
    //             }
    //           }
    //           return;// result;
    //         case 30:
    //           v426 = mplew.writeInt("v426");
    //           mplew.writeMapleAsciiString("");
    //           return;// sub_47FBC0(/* &v813 */);
    //         case 36:
    //           mplew.writeMapleAsciiString("");
    //           effect_1 = mplew.write("effect_1");
    //           v855 = mplew.writeInt("v855");
    //           v860 = mplew.writeInt("v860");
    //           if (skillid != 0.0) {
    //             switch (v860) {
    //               case 1:
    //                 break;
    //               case 2:
    //                 v443 = mplew.writeInt("v443");
    //                 break;
    //               case 3:
    //                 break;
    //               case 4:
    //                 break;
    //               default:
    //                 break;
    //             }
    //             return;// sub_47FBC0(/* &v826 */);
    //         case 37:
    //           v451 = mplew.writeInt("v451");
    //           return;// sub_1694B30(/* v2 */);
    //         case 38:
    //           v452 = mplew.writeInt("v452");
    //           return;// sub_1694DA0(/* v2 */);
    //         case 39:
    //           return;// sub_489F90(/* &v774 */);
    //         case 40:
    //           return;// sub_4D11F0(/* -96 */);
    //         case 43:
    //           v458 = mplew.writeInt("v458");
    //           v459 = mplew.writeInt("v459");
    //           return;// sub_16A69E0(/* v458, v459 */);
    //         case 44:
    //           v852 = mplew.write("v852") != 0;
    //           return;// sub_1896120(/* &off_203F218, 100 */);
    //         case 46:
    //           v465 = mplew.writeInt("v465");
    //           v466 = mplew.writeInt("v466");
    //           return;// sub_16C6520(/* v561, v562 */);
    //         case 47:
    //           return;// result;
    //         case 48:
    //           v469 = mplew.write("v469");
    //           v856 = v469;
    //           result = (*(*v2 + 36))(v2);
    //           if (result) {
    //             switch (v856) {
    //               case 5:
    //                 return;// sub_47FBC0(/* &v766 */);
    //               case 0:
    //               case 2:
    //               case 3:
    //                 v475 = mplew.writeInt("v475");
    //                 continue LABEL_521;
    //               case 1:
    //               case 4:
    //                 v484 = mplew.writeInt("v484");
    //                 break;
    //               default:
    //                 break;
    //             }
    //             result = 0;
    //           }
    //           return;// result;
    //         case 49:
    //           v491 = mplew.writeInt("v491");
    //           return;// sub_489F90(/* &v823 */);
    //         case 50:
    //           return;// sub_489F90(/* &v754 */);
    //         case 52:
    //           v496 = mplew.writeInt("v496");
    //           return;// sub_16A1F50(/* v496 */);
    //         case 54:
    //           if (mplew.write("")) {
    //             // result = sub_1695DA0(/* v2 */);
    //           }
    //           else {
    //             v497 = mplew.writeInt("v497");
    //             v498 = mplew.write("v498");
    //           }
    //           return;//;
    //         case 55:
    //           v499 = mplew.writeInt("v499");
    //           effect_1 = mplew.writeInt("effect_1");
    //           v500 = mplew.writeInt("v500");
    //           return;// sub_16B15D0(/* v501, effect_1, v500 */);
    //         case 57:
    //           effect_1 = mplew.writeInt("effect_1");
    //           v502 = mplew.writeInt("v502");
    //           return;// sub_5311B0(*v860, *(v508 + 4) - 100, v557, LODWORD(v558), v559, v560);
    //         case 66:
    //           v509 = mplew.writeInt("v509");
    //           v510 = mplew.writeInt("v510");
    //           return;// sub_167FE40(/* v509, v510 */);
    //         case 68:
    //           v511 = mplew.writeShort("v511");
    //           v851 = mplew.writeInt("v851");
    //           v855 = mplew.write("") != 0;
    //           v860 = mplew.write("v860");
    //           effect_1 = mplew.write("") != 0;
    //           return;// sub_16D9350(/* v511, v851, v855, v860, effect_1 */);
    //         case 67:
    //           v512 = mplew.write("v512") != 0;
    //           if (v512)
    //             v513 = mplew.writeInt("v513");
    //           return;// v514(v2);
    //         case 74:
    //         case 75:
    //           v515 = mplew.writeInt("v515");
    //           v516 = mplew.writeInt("v516");
    //           return;// sub_636710(/* &v847 */);
    //         case 77:
    //           result = sub_4C9BF0(/*v563 */);
    //           if (!result)
    //             return;// result;
    //           result = 0;
    //           if (v6C30 || v6C34 || v526 == -1)
    //             return;// result;
    //           v527 = mplew.writeInt("v527");
    //           v528 = mplew.writeInt("v528");

    //           LABEL_563:
    //         case 72:
    //         default:
    //           return;// result;
    //       }
    //       while (1) {
    //         v274 = mplew.writeInt("v274");
    //         v275 = mplew.writeInt("v275");
    //         if (!sub_47EBB0(/* &v844 */)) {
    //           if (v275 > 1) {
    //             continue LABEL_369;
    //           }
    //           if (v275 == 1) {

    //             continue LABEL_366;
    //           }

    //           continue LABEL_366;
    //         }
    //         if (v275 < -1) {

    //           continue LABEL_366;
    //         }
    //       }
    //       LABEL_369:

    //       }
    //     case 0x40:
    //   // sub_49F350(/* "Effect/OnUserEff.img/urus/catch", -1 */);
    //   continue LABEL_111;
    //     case 0x41:
    //   // sub_49F350(/* "Effect/ItemEff.img/2270002/fail", -1 */);
    // continue LABEL_112;
    //     default:
    //  continue LABEL_112;
    // }
  }
}