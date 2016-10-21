
function MoveMonster() {
    var monsterid = mplew.writeInt("MonsterByOid");

    mplew.write("未知");
    var moveid = mplew.writeShort("moveid");
    var useSkill = mplew.write("useSkill") > 0;
    var skill = mplew.write("skill");
    var skillID = mplew.write("skillID") & 0xFF;//skill_1
    var skillLv = mplew.write("skillLv") & 0xFF;//skill_2
    var option = mplew.writeShort("option");//skill_3,skill_4  
    var realskill = 0;
    var level = 0;

    if (useSkill) {
        // var size = monster.getNoSkills();
        // var used = false;

        if (size > 0) {
            // realskill = skillID;
            // level = skillLv;
            // MobSkill mobSkill = MobSkillFactory.getMobSkill(realskill, level);
            // mobSkill.setEffectDelay(option);
            // if ((mobSkill != null) && (!mobSkill.checkCurrentBuff(chr, monster))) {
            //     long now = System.currentTimeMillis();
            //     long ls = monster.getLastSkillUsed(realskill);

            //     if ((ls == 0L) || ((now - ls > mobSkill.getCoolTime()) && (!mobSkill.onlyOnce()))) {
            //         monster.setLastSkillUsed(realskill, now, mobSkill.getCoolTime());

            //         var reqHp = (int)((float) monster.getHp() / (float) monster.getMobMaxHp() * 100.0F);
            //         if (reqHp <= mobSkill.getHP()) {
            //             used = true;
            //             mobSkill.applyEffect(chr, monster, true);
            //         }
            //     }
            // }
        }
        // if (!used) {
        //     realskill = 0;
        //     level = 0;
        // }
    }
    var List_unk3 = new Array();
    var size1 = mplew.write("size1");
    for (var i = 0; i < size1; i++) {
        unk3.add(mplew.writeShort("Pair" + i), mplew.writeShort("writeShort" + i));
    }
    var List_unk2 = new Array();
    var size = mplew.write("size");
    for (var i = 0; i < size; i++) {
        unk2.add(mplew.writeShort("add"));
    }
    mplew.AddField("skip", 1);
    mplew.AddField("skip", 4); // sometimes 0, 1
    mplew.AddField("skip", 4); // CC DD FF 00  same for all mobs
    mplew.AddField("skip", 4); // CC DD FF 00  same for all mobs
    mplew.AddField("skip", 4); // 9D E1 87 48  same for all mobs
    mplew.AddField("skip", 1); // 1?
    mplew.AddField("skip", 4); // all 0
    mplew.AddField("skip", 4); // original pos
    mplew.AddField("skip", 4); // all 0
    //Povar startPos = monster.getPosition();
    var List_res = new Array();
    try {
        mplew.StartNode("parseMovement");
        res = parseMovement(2);
        mplew.EndNode(false);
    } catch (e) {
        System.err.println("怪物移动错误Move_life :  AIOBE Type2");
        mplew.AddComment("怪物移动错误Move_life :  AIOBE Type2")
        // if (chr.isShowErr()) {
        //     chr.showInfo("移动", true, "怪物移动错误Move_life : AIOBE Type2");
        // }
        // FileoutputUtil.log(FileoutputUtil.Movement_Log, "怪物移动错误 AIOBE Type2 : 怪物ID " + monster.getId() + "\r\n错误讯息:" + e + "\r\n封包:\r\n" + mplew.toString("""true));
        return;
    }

    // if (monster.getController() != c.getPlayer()) {
    //     if (monster.isAttackedBy(c.getPlayer())) {// aggro and controller change
    //         monster.switchController(c.getPlayer(), true);
    //     } else {
    //         return;
    //     }
    // } else if (skill == -1 && monster.isControllerKnowsAboutAggro() && !monster.isFirstAttack()) {
    //     monster.setControllerHasAggro(false);
    //     monster.setControllerKnowsAboutAggro(false);
    // }
    // var aggro = monster.isControllerHasAggro();
    // if (aggro) {
    //     monster.setControllerKnowsAboutAggro(true);
    // }

    // if ((MapleJob.is夜光(chr.getJob()))
    //     && (Randomizer.nextInt(100) < 20)) {
    //     chr.applyBlackBlessingBuff(1);
    // }

    // if ((res != null) && (chr != null) && (res.size() > 0)) {
    //     MapleMap map = chr.getMap();
    //     c.getSession().write(MobPacket.moveMonsterResponse(monster.getObjectId(), moveid, monster.getMp(), monster.isControllerHasAggro(), realskill, level));
    //     if (mplew.available("if") != 28L) {
    //         System.err.println("怪物移动错误Move_life : mplew .available "怪物移动错误Move_life"!= 28 剩余封包长度: " + mplew.available("""));
    //         if (chr.isShowErr()) {
    //             chr.showInfo("移动", true, "怪物移动错误Move_life : mplew .available != 28");
    //         }
    //         FileoutputUtil.log(FileoutputUtil.Movement_Log, "怪物移动错误: mplew .available != 28\r\n怪物ID: " + monster.getId() + "\r\n" + mplew.toString(true));
    //         return;
    //     }
    //     MovementParse.updatePosition(res, monster, -1);
    //     Povar endPos = monster.getTruePosition();
    //     map.moveMonster(monster, endPos);
    //     map.broadcastMessage(chr, MobPacket.moveMonster(useSkill, skill, skillID, skillLv, option, monster.getObjectId(), startPos, res, unk2, unk3), endPos);
    //     chr.getCheatTracker().checkMoveMonster(endPos);
}

function parseMovement(kind) {
    var numCommands = mplew.AddByte("numCommands");

    for (var i = 0; i < numCommands; i++) {
        mplew.StartNode("command"+i)
        var command = mplew.AddByte("command"+i);
        switch (command) {
            case 0:
            case 8:
            case 0xF:
            case 0x10:
            case 0x12:
            case 0x40:
            case 0x41:
            case 0x42: {
                var xpos = mplew.AddShort("xpos");
                var ypos = mplew.AddShort("ypos");
                var xwobble = mplew.AddShort("xwobble");
                var ywobble = mplew.AddShort("ywobble");
                var newfh = mplew.AddShort("newfh");
                var xoffset = mplew.AddShort("xoffset");
                var yoffset = mplew.AddShort("yoffset");
                var unk = 0;
                if (command == 0xF || command == 10) {
                    unk = mplew.AddShort("unk");
                }
                //goto LABEL_14;
                var newstate = mplew.AddByte("newstate");
                var duration = mplew.AddShort("duration");
                var newunk = mplew.AddByte("newunk");
                break;
            }
            case 0x36:
            case 0x3F:
            case 0x52: {
                var xpos = mplew.AddShort("xpos");
                var ypos = mplew.AddShort("ypos");
                var xwobble = mplew.AddShort("xwobble");
                var ywobble = mplew.AddShort("ywobble");
                var newfh = mplew.AddShort("newfh");
                //goto LABEL_14;
                var newstate = mplew.AddByte("newstate");
                var duration = mplew.AddShort("duration");
                var newunk = mplew.AddByte("newunk");
                break;
            }
            case 0x01:
            case 0x02:
            case 0x11:
            case 0x14:
            case 0x15:
            case 0x17:
            case 0x3B:
            case 0x3C:
            case 0x3D:
            case 0x3E: {
                var xmod = mplew.AddShort("xmod");
                var ymod = mplew.AddShort("ymod");
                var newfh = 0;
                if (command == 0x14 || command == 0x15) {
                    //goto LABEL_11;
                    newfh = mplew.AddShort("newfh");////v27 = CInPacket::Decode2(v3);
                }
                //goto LABEL_14;
                var newstate = mplew.AddByte("newstate");
                var duration = mplew.AddShort("duration");
                var newunk = mplew.AddByte("newunk");
                break;
            }
            case 0x1B:
            case 0x1C:
            case 0x1D:
            case 0x1E:
            case 0x1F:
            case 0x20:
            case 0x21:
            case 0x22:
            case 0x23:
            case 0x24:
            case 0x25:
            case 0x26:
            case 0x27:
            case 0x28:
            case 0x29:
            case 0x2A:
            case 0x2B:
            case 0x2C:
            case 0x2D:
            case 0x2E:
            case 0x2F:
            case 0x30:
            case 0x31:
            case 0x37:
            case 0x38:
            case 0x39:
            case 0x3A:
            case 0x43:
            case 0x44:
            case 0x45:
            case 0x47:
            case 0x4C:
            case 0x4E: {
                //goto LABEL_13;
                //*(_DWORD *)(v7 + 20) = sub_689460(v29, v30);
                //goto LABEL_14;
                var newstate = mplew.AddByte("newstate");
                var duration = mplew.AddShort("duration");
                var newunk = mplew.AddByte("newunk");
                break;
            }
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 9:
            case 0xA:
            case 0xB:
            case 0xD:
            case 0x19:
            case 0x1A:
            case 0x32:
            case 0x33:
            case 0x34:
            case 0x49:
            case 0x4A:
            case 0x4B:
            case 0x4D:
            case 0x50: {
                var xpos = mplew.AddShort("xpos");
                var ypos = mplew.AddShort("ypos");
                var newfh = mplew.AddShort("newfh");
                //goto LABEL_14
                var newstate = mplew.AddByte("newstate");
                var duration = mplew.AddShort("duration");
                var newunk = mplew.AddByte("newunk");
                break;
            }
            case 0x0E: {
                var xpos = mplew.AddShort("xpos");
                var ypos = mplew.AddShort("ypos");
                //LABEL_11:
                var newfh = mplew.AddShort("newfh");
                //goto LABEL_14;
                var newstate = mplew.AddByte("newstate");
                var duration = mplew.AddShort("duration");
                var newunk = mplew.AddByte("newunk");

                break;
            }
            case 0x16: {
                var xpos = mplew.AddShort("xpos");
                var ypos = mplew.AddShort("ypos");
                var xwobble = mplew.AddShort("xwobble");
                var ywobble = mplew.AddShort("ywobble");
                var newstate = mplew.AddByte("newstate");
                var duration = mplew.AddShort("duration");
                var newunk = mplew.AddByte("newunk");
                break;
            }
            case 0x0C: {
                var newstate = 0;
                var duration = 0;
                break;
            }
            default: {
                //LABEL_14:
                var newstate = mplew.AddByte("newstate");
                var duration = mplew.AddShort("duration");
                var newunk = mplew.AddByte("newunk");
                AddComment("未知的移动类型: 0x" + (command) + " - ( " + command + " )");
                // if (chr.isShowErr()) {
                //     chr.showInfo("移动", true, "未知的移动类型: 0x" + (command) + " - ( " + command + " )");
                // }
                // var moveMsg = "";
                // if (kind == 1) {
                //     moveMsg = "玩家";
                // } else if (kind == 2) {
                //     moveMsg = "怪物";
                // } else if (kind == 3) {
                //     moveMsg = "宠物";
                // } else if (kind == 4) {
                //     moveMsg = "召唤兽";
                // } else if (kind == 5) {
                //     moveMsg = "龙";
                // } else if (kind == 6) {
                //     moveMsg = "小白";
                // } else if (kind == 7) {
                //     moveMsg = "攻击怪物";
                // }
                // FileoutputUtil.log(FileoutputUtil.Movement_Log, moveMsg + "(" + chr.getName() + ") 职业：" + MapleJob.getName(MapleJob.getById(chr.getJob())) + "(" + chr.getJob() + ")  未知移动封包 剩余次数: " + (numCommands - res.size()) + " 移动类型: 0x" + (command) + ", 封包: " + mplew.toString(true));
                break;
                // return null;
            }
            // if (chr.isGM()) {
            //chr.showInfo("Movement", false, "Failed to read movement type " + command);
            //}
            //                    AddComment("Kind movement: " + kind + ", Remaining : " + (numCommands - res.size()) + " New type of movement ID : " + command + ", packet : " + mplew.toString(true));
            //FileoutputUtil.log(FileoutputUtil.Movement_Log, "Kind movement: " + kind + ", Remaining : " + (numCommands - res.size()) + " New type of movement ID : " + command + ", packet : " + mplew.toString(true) + "\r\n");
            //return null;
        }
        // if (kind == 7) {
        //     if (chr.isShowErr()) {
        //         chr.showInfo("移动", true, "攻击怪物" + "(" + chr.getName() + ") 职业：" + MapleJob.getName(MapleJob.getById(chr.getJob())) + "移动类型: 0x" + (command));
        //     }
        //     FileoutputUtil.log(FileoutputUtil.Movement_Log, "攻击怪物" + "(" + chr.getName() + ") 职业：" + MapleJob.getName(MapleJob.getById(chr.getJob())) + "移动类型: 0x" + (command) + ", 封包: " + mplew.toString(true));
        // }
        mplew.EndNode(false);
    }
    var skip = mplew.AddByte("skip");
    skip = Math.ceil(parseInt(skip / 2.0));
    mplew.AddField("skipskip", skip);
    // if (numCommands != res.size()) {
    //     AddComment("循环次数[" + numCommands + "]和实际上获取的循环次数[" + res.size() + "]不符");
    //     if (chr.isShowErr()) {
    //         chr.showInfo("移动", true, "循环次数[" + numCommands + "]和实际上获取的循环次数[" + res.size() + "]不符");
    //     }
    //     FileoutputUtil.log(FileoutputUtil.Movement_Log, "循环次数[" + numCommands + "]和实际上获取的循环次数[" + res.size() + "]不符 " + "(" + chr.getName() + ") 职业：" + MapleJob.getName(MapleJob.getById(chr.getJob())) + "(" + chr.getJob() + "移动封包 剩余次数: " + (numCommands - res.size()) + "  封包: " + mplew.toString(true));
    //     return null; // Probably hack
    // }
    // return res;
}
MoveMonster();
mplew .AddField("未知跳过固定长度29",29)