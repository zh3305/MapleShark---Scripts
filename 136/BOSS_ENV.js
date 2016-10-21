OnFieldEffect();
function OnFieldEffect()
//void __thiscall CField::OnFieldEffect(CField *this, CInPacket *iPacket)
{
  sKeyName = {};
  switch (mplew.write("")) {
    case 0:
      v4 = mplew.write("");
      v5 = mplew.writeInt("v5");
      v6 = mplew.writeInt("v6");
      return;
    case 2:
      mplew.writeMapleAsciiString("")
      return;
    case 3:
      sKeyName = {};
      mplew.writeMapleAsciiString("")
      mplew.write("") != 0;
      return;
    case 4:
      v10 = mplew.writeMapleAsciiString("v10");
      break;
    case 0xE:
      v12 = mplew.writeMapleAsciiString("v12")
      v147 = mplew.writeInt("");
      break;
    case 0xB:
      v13 = mplew.writeMapleAsciiString("v13");
      break;
    case 0xC:
      v15 = mplew.writeMapleAsciiString("v15");
      mplew.writeInt("");
      break;
    case 0xD:
      v16 = mplew.writeMapleAsciiString("v16")
      mplew.writeInt("");
      break;
    case 5:
      v17 = mplew.writeMapleAsciiString("v17")

      v18 = mplew.writeInt("v18");
      break;
    case 6:
      (mplew.writeInt(""));
      v19 = mplew.writeInt("v19");
      mplew.writeInt("");
      it = mplew.write("");
      mplew.write("");
      break;
    case 7:
      mplew.writeMapleAsciiString("");
      v25 = mplew.writeInt("v25");
      break;
    case 8:
      mplew.write("v3.baseclass_0.m_bBGMVolumeOnly") != 0;
      break;
    case 9:
      v29 = mplew.writeInt("v29");
      v30 = mplew.writeInt("v30");
      break;
    case 1:
      v31 = mplew.write("");
      v32 = mplew.writeInt("v32");
      break;
    case 0xA:
      v33 = mplew.writeInt("v33");
      v34 = mplew.writeInt("v34");
      v35 = mplew.writeInt("v35");
      break;
    case 0xF:
      v38 = mplew.writeMapleAsciiString("v38");
      v39 = mplew.write("");
      v40 = mplew.write("v40");
      break;
    case 0x10:
      v41 = mplew.write("");
      bBinary = mplew.writeShort("bBinary");
      usR = mplew.writeShort("usR");
      mplew.writeShort("aniInfo.bLoop");
      r.p = mplew.writeShort("r.p");
      mplew.writeInt("");
    case 0x11:
      v67 = mplew.writeShort("v67");
      v68 = mplew.write("");
      //   switch ( v67 )
      //   {
      //     case 1u:
      //       CMapLoadable::SetGrayBackGround(v3.baseclass_0, v68 != 0);
      //       break;
      //     case 2u:
      //       CField::SetGrayGen(v3, v68 != 0);
      //       break;
      //     case 3u:
      //       CField::SetGrayObject(v3, v68 != 0);
      //       break;
      //     case 4u:
      //       CNpcPool::SetGrayNpc(TSingleton<CNpcPool>::ms_pInstance, v68 != 0);
      //       break;
      //     case 5u:
      //       if ( TSingleton<CUserLocal>::ms_pInstance._m_pStr )
      //         CUserLocal::SetGray((CUserLocal *)TSingleton<CUserLocal>::ms_pInstance._m_pStr, v68 != 0);
      //       break;
      //     case 7u:
      //       if ( TSingleton<CPortalList>::ms_pInstance )
      //         CPortalList::SetGray(TSingleton<CPortalList>::ms_pInstance, v68 != 0);
      //       break;
      //     case 6u:
      //       if ( TSingleton<CMobPool>::ms_pInstance )
      //         CMobPool::SetGrayMob(TSingleton<CMobPool>::ms_pInstance, v68 != 0);
      //       break;
      //     case 8u:
      //       if ( TSingleton<CReactorPool>::ms_pInstance )
      //         CReactorPool::SetGray(TSingleton<CReactorPool>::ms_pInstance, v68 != 0);
      //       break;
      //     case 0u:
      //       CField::SetGrayField(v3, v68 != 0);
      //       break;
      //     default:
      //       return;
      //   }
      break;
    case 0x16:
      bBinary = mplew.writeShort("bBinary");
      sKeyName._m_pStr = mplew.writeShort("sKeyName._m_pStr");
      bPostRender = mplew.writeShort("bPostRender");
      sAniamtionName._m_pStr = mplew.writeShort("");
      v69 = mplew.writeInt("v69");
      if (mplew.writeInt("") == 1) {

      }
      break;
    case 0x12:
      v71 = mplew.write("");
      bBinary = mplew.writeInt("");
      mplew.writeMapleAsciiString("")
      //ProcessOnOffLayerPacket(v3, v71, (int)bBinary, (ZXString<char>)v146, (CInPacket *)v147);
      ProcessOnOffLayerPacket(v71, bBinary);
      break;
    case 0x13:
      v73 = mplew.writeInt("v73");
      break;
    case 0x14:
      v74 = mplew.writeInt("v74");
      v75 = mplew.writeInt("v75");
      bBinary = mplew.writeInt("");
      v76 = mplew.write("v76") != 0;
      break;
    case 0x15:
      v78 = mplew.writeInt("v78");
      break;
    case 0x17:
      it = mplew.writeInt("it");
      break;
    case 0x18:
      mplew.writeMapleAsciiString("");

      v105 = mplew.write("");
      break;
    case 0x19:
      bBinary = mplew.write("bBinary") != 0;
      v115 = mplew.write("v115") != 0;
      bPostRender = mplew.write("bPostRender") != 0;
      v116 = mplew.writeInt("v116");
      mplew.writeMapleAsciiString("");
      mplew.writeMapleAsciiString("");
      v117 = mplew.write("v117");
      if (v117) {
        v118 = mplew.writeMapleAsciiString("v118");
      }

      break;
    case 0x1A:
      mplew.writeMapleAsciiString("");
      v121 = mplew.writeInt("v121");
      if (v121) {
        v122 = v121 - 1;
        if (v122) {
          if (v122 == 1) {
            mplew.writeMapleAsciiString("");
          }
        }
        else {
          v128 = mplew.writeInt("v128");
        }
      }
      break;
    default:
      return;
  }
}
function ProcessOnOffLayerPacket(nType, tTerm)
//void __thiscall CField::ProcessOnOffLayerPacket(CField *this, unsigned var nType, var tTerm, ZXString<char> sKey, CInPacket *iPacket)
{
  v66 = 0;
  if (nType) {
    if (nType == 2) {

    }
    else if (nType == 1) {
      iPacket_1 = iPacket;
      v33 = mplew.writeInt("v33");
      v34 = mplew.writeInt("v34");
    }
    // LABEL_36:
    // LABEL_37:
    //v28=sKey._m_pStr == 0
    // if ( v28 )
    //   return;
    // continue LABEL_39;
    return;
  }
  v6 = mplew.writeInt("v6");
  nRY = mplew.writeInt("");
  nZ = mplew.writeInt("IWzVector2D");
  mplew.writeMapleAsciiString("nType");
  v7 = mplew.writeInt("v7");
  bPostRender = mplew.write("bPostRender");
}