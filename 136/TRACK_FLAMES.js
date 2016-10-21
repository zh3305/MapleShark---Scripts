var linkskill = mplew.writeInt("linkskill");
// var skillLevel = chr.getTotalSkillLevel(linkskill);
// var skill = SkillFactory.getSkill(linkskill);
// var effect = skill.getEffect(skillLevel);
// if (effect == null) {
//     FileoutputUtil.log("SpecialMove.log", "炎术士魔法攻击效果为空 玩家[" + chr.getName() + " 职业: " + chr.getJob() + "] 使用技能: " + skill.getId() + " - " + skill.getName() + " 技能等级: " + skillLevel);
//     return;
// }
// chr.getSpecialStat().gainTrackFlmes();
// effect.applyTo(chr);
// linkskill = GameConstants.getLinkedAttackSkill(linkskill);
// var mobid = [];
// mobid.push(0);
var forceinfo = [] ;
//forceinfo.push(new Pair<>(chr.getSpecialStat().getTrackFlmes(), 4));
// var forceinfo  = chr.getList(false, 1, linkskill, chr.getSpecialStat().getTrackFlmes());
mplew.skip(1);
forceinfo.push("direction", mplew.writeShort("direction"));
forceinfo.push("final", 500);