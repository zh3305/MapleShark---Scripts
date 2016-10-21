            mplew.writeInt("life.getObjectId()");
            mplew.writeInt("life.getId()");
            mplew.writeShort("life.getPosition().x");
            mplew.writeShort("life.getCy()");
            mplew.write("",0);
            mplew.write("life.getF() == 1 ? 0 : 1",0,1);
            mplew.writeShort("life.getFh()");
            mplew.writeShort("life.getRx0()");
            mplew.writeShort("life.getRx1()");
            mplew.write("show",1,0);
            mplew.writeInt("",0);
            mplew.write("",0);
            mplew.writeInt("",0);
            mplew.writeInt("",-1);
            mplew.writeLong("",0);
            mplew.writeZeroBytes(3);//176+