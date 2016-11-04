EVENT_LIST();
function EVENT_LIST()
//int __thiscall EVENT_LIST(void *this, int iPacket)
{
  mplew.writeInt("0x22E6938");
  if (!mplew.write("") || (result = sub_19804E0(/* iPacket */)) != 0)
    result = sub_19B22F0(/* v2, iPacket */);
  return result;
}
function sub_19804E0(/*  */) {
  mplew.writeMapleAsciiString("");
  if (mplew.write("")) {
    v7 = mplew.writeInt("v7");
  }
  v11 = mplew.writeInt("v11");
  if (v11 > 0) {
    v90 = 0;
    v224 = 11;
    v91 = 0;
    if (v11 > 0) {
      while (1) {
        v12 = mplew.write("v12");
        mplew.writeMapleAsciiString("");
        if (++v91 >= v11)
          break;
      }
    }
  }
  v101 = mplew.writeInt("v101");
  for (i = 0; i < v101; ++i) {
    v17 = mplew.writeInt("v17");
    mplew.writeMapleAsciiString("");
    mplew.writeMapleAsciiString("");
    v33 = mplew.writeInt("v33");
    v34 = mplew.writeInt("v34");
    v35 = mplew.writeInt("v35");
    v36 = mplew.writeInt("v36");
    v37 = mplew.writeInt("v37");
    v38 = mplew.writeInt("v38");
    v39 = mplew.write("v39");
    v40 = mplew.write("v40");
    v41 = mplew.write("v41");

    v42 = mplew.write("v42");

    v43 = mplew.write("v43");

    v44 = mplew.writeInt("v44");
    if (v44 > 0) {
      v90 = 0;
      v45 = 0;
      if (v44 > 0) {
        while (1) {
          v47 = mplew.writeInt("v47");
          if (!v90)
            break;
          v45 = (v45 + 1);
          if (v45 >= v44)
            break;
        }
      }
    }
  }
  v50 = mplew.writeInt("v50");
  if (v50 > 0) {
    v51 = 0;
    if (v50 > 0) {
      do {
        v53 = mplew.writeInt("v53");
        v51 = (v51 + 1);
      }
      while (v51 < v50);
    }
  }
  if (mplew.write("")) {
    v58 = 0;
    v92 = mplew.writeInt("v92");
    if (v92 > 0) {
      do {
        mplew.writeMapleAsciiString("");
        v58 = (v58 + 1);
      }
      while (v58 < v92);
    }
    mplew.writeMapleAsciiString("");
    mplew.writeMapleAsciiString("");
    v92 = mplew.writeInt("v92");
    v93 = mplew.write("v93");
  }
  if (mplew.write("")) {
    v80 = mplew.writeInt("v80");
    v81 = mplew.writeInt("v81");
    v82 = mplew.writeInt("v82");
  }
}

function sub_EC10C0(/*  */) {
  v4 = mplew.writeMapleAsciiString("v4");
  mplew.writeInt("");
  mplew.writeInt("");
  mplew.writeInt("");
  mplew.writeInt("");
  mplew.writeInt("");
  mplew.writeInt("");
  mplew.writeInt("");
  mplew.writeInt("");
  mplew.writeInt("");
  mplew.write("") != 0;
  mplew.writeInt("");
  for (i = mplew.writeInt("i"); i > 0; --i) {
    v9 = mplew.writeInt("v9");
    a2 = mplew.writeInt("a2");
  }
  mplew.writeInt("");
  for (j = mplew.writeInt("j"); j > 0; --j) {
    v9 = mplew.writeInt("v9");
    a2 = mplew.writeInt("a2");
  }
  v7 = mplew.writeMapleAsciiString("v7");
  v8 = mplew.writeMapleAsciiString("v8");
}
function sub_19B22F0(/*  */) {
  v3 = mplew.writeInt("v3");
  if (v3 <= 0) {
  }
  else {
    v22 = v3;
    do {

      sub_EC10C0(/* (v11 + 20), iPacket */);
      --v22;
    }
    while (v22);
  }


  return result;
}