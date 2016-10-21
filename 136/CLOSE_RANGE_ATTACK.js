   //近距离攻击
   parseDmgM();
    function parseDmgM() {
//public static AttackInfo parseDmgM(var lea, MapleCharacter chr) {
        var ret =  {/*  */};
        mplew.skip(1);
        ret.tbyte = mplew.write("ret.tbyte");
        ret.targets = (/*(byte)*/  (ret.tbyte >>> 4 & 0xF));
        ret.hits = (/*(byte)*/  (ret.tbyte & 0xF));
        ret.skill = mplew.writeInt("ret.skill");
//         if (MapleJob.is神之子(chr.getJob()) && ret.skill != 0) {
// //            mplew.skip(1); //zero has byte
//         }
        if (ret.skill == 2221012 || ret.skill == 36101008 || ret.skill == 36101001 || ret.skill == 36111009 || ret.skill == 42120003) {
            mplew.skip(1);
        }
        mplew.skip(GameConstants.isEnergyBuff(ret.skill) ? 1 : 2);
        mplew.writeInt(""); // nSkillCRC
//        mplew.writeShort("");
        switch (ret.skill) {//攻击伤害为负数,在这里加
            case 1311011:// La Mancha Spear
            case 2221012:
            case 4341002:
            case 4341003:
            case 4221052:
            case 5201002:
            case 5300007:
            case 5301001:
            case 5711021: // 飛龍在天
            case 5721061: // 龍襲亂舞
            case 11121052:// Styx Crossing
            case 11121055:// Styx Crossing charged
            case 14111006:
            case 2221052:// 闪电矛
            case 24121000:
            case 24121005://卡片风暴
            case 27101202:
            case 25111005:
            case 25121030:
            case 27111100:
            case 27120211:
            case 27121201:
            case 31001000:
            case 31101000:
            case 31111005:
            case 31211001:
            case 32121003:
            case 35121015:
            case 36121000:
            case 36101001:
            case 42120003: // Monkey Spirits
//            case 4341052://啊修罗
            case 41121001:
            case 61111100:
            case 61111111:
            case 61111113:
            case 65121003:
            case 65121052:// Supreme Supernova
            case 101110101:
            case 101110102:
            case 101110104:
            case 101120200:
            case 101120203:
            case 101120205:
            case 131001004:
            case 131001008:
            case 37121003:
//            case 36101008:
                ret.charge = mplew.writeInt("ret.charge");
                break;
            default:
                ret.charge = 0;
        }
        if ((MapleJob.is神之子(ret.parseInt(skill / 10000)))) {
//            ret.zeroUnk = mplew.write("ret.zeroUnk");
            mplew.write("");
        }
        ret.unk = mplew.write("ret.unk");
        ret.display = mplew.writeShort("ret.display");
//        ret.direction = mplew.write("ret.direction");
        mplew.write("");
        if (ret.skill == 2221012 || ret.skill == 36101001 || ret.skill == 36111009 || ret.skill == 42120003 || ret.skill == 36101008/* || ret.skill == 4341052*/) {
            mplew.skip(4);
        } else {
            mplew.skip(5);
        }

        if ((ret.skill == 5300007) || (ret.skill == 5101012) || (ret.skill == 5081001) || (ret.skill == 15101010)) {
            mplew.writeInt("");
        }
//        if (chr.getCygnusBless()) {//126-
//            mplew.skip(12); 
//        }
        ret.speed = mplew.write("ret.speed");
        ret.lastAttackTickCount = mplew.writeInt("ret.lastAttackTickCount");
//        if (GameConstants.isEnergyBuff(ret.skill)) {
//            mplew.skip(4);
//        } else {
//            mplew.skip(8);
//        }
        mplew.skip(3);
        if (!GameConstants.isEnergyBuff(ret.skill)) {
            var linkskill = mplew.writeInt("linkskill");
            mplew.skip(1);
        }
        switch (ret.skill) {
            case 14111022:
            case 14111023:
            case 14121004:
                mplew.skip(2);
                break;
            case 5711021:
            case 5721061:
                mplew.skip(4);
                break;
            case 14121052:
                mplew.skip(6);
                break;
        }

        ret.allDamage  = [] ;
        if (ret.skill == 4211006) {
            return //parseExplosionAttack(lea, ret, chr);
        }
        var damage, oid;
        var allDamageNumbers ;

        for (var i = 0; i < ret.targets; i++) {
            oid = mplew.writeInt("oid");
            var unktype = mplew.writeShort("unktype");
            mplew.skip(18);
            allDamageNumbers  = [] ;

            for (var j = 0; j < ret.hits; j++) {
                damage = mplew.writeInt("damage");
//                if ((damage > 9999999) || (damage < 0)) {
//                    FileoutputUtil.log(FileoutputUtil.Gongji_Error, "近距离攻击出错封包: 打怪数量: " + ret.targets + " 打怪次数: " + ret.hits + " 怪物ID " + oid + " 伤害: " + damage + " 技能ID: " + ret.skill + mplew.toString(""true));
//                }
                allDamageNumbers.push( [damage, false]);
                // if (chr.isShowErr()) {
                //     chr.dropMessage(-5, new StringBuilder().append("近距离攻击 - 打怪数量: ").append(ret.targets).append(" 打怪次数: ").append(ret.hits).append(" 怪物ID ").append(oid).append(" 伤害: ").append(damage).append(" 技能id:").append(ret.skill).toString());
                // }
            }
            mplew.skip(9);
            ret.allDamage.push( [oid, allDamageNumbers]);
        }
        ret.position = mplew.writePos("ret.position");
        return ret;
    }