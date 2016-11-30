Object.prototype.getKeyByValue = function( value ) {
    for( var prop in this ) {
        if( this.hasOwnProperty( prop ) ) {
             if( this[ prop ] === value )
                 return prop;
        }
    }
}
var MapleJob = {
    isSeparatedSp: function (job) {
        return !MapleJob.is管理员(job) && !MapleJob.is林芝林(job) && !MapleJob.is皮卡啾(job);
    },
	is冒险家: function (job) {
        return parseInt(job / 1000) == 0;
    }, is英雄: function (job) {
        return parseInt(job / 10) == 11;
    }, is圣骑士: function (job) {
        return parseInt(job / 10) == 12;
    }, is黑骑士: function (job) {
        return parseInt(job / 10) == 13;
    }, is大魔导士_火毒: function (job) {
        return parseInt(job / 10) == 21;
    }, is大魔导士_冰雷: function (job) {
        return parseInt(job / 10) == 22;
    }, IsFaShi: function (job) {
        return job == 200 || job == 210 || job == 211 || job == 212 || job == 220 || job == 221 || job == 222 || job == 230 || job == 231 || job == 232;
    }, is主教: function (job) {
        return parseInt(job / 10) == 23;
    }, is神射手: function (job) {
        return parseInt(job / 10) == 31;
    }, is弩箭神: function (job) {
        return parseInt(job / 10) == 32;
    }, IsGongJianShou: function (Job) {
        return Job == 300 || Job == 310 || Job == 311 || Job == 312 || Job == 320 || Job == 321 || Job == 322;
    }, is隐士: function (job) {
        return parseInt(job / 10) == 41;
    }, is侠盗: function (job) {
        return parseInt(job / 10) == 42;
    }, is暗影双刀: function (job) {
        return parseInt(job / 10) == 43; // sub == 1 && job == 400
    }, is拳霸: function (job) {
        return parseInt(job / 10) == 51;
    }, is枪神: function (job) {
        return parseInt(job / 10) == 52;
    }, IsHuoPaoShou: function (job) {
        return parseInt(job / 10) == 53 || job == 501;
    }, IsHaiDaoHuoPaoShou: function (a1) {
		return (a1 == 500 || a1 == 510 || a1 == 511 || a1 == 512 || a1 == 520 || a1 == 521 || a1 == 522 || (IsHuoPaoShou(a1)))
    }, IsZhanShi: function (job) {
        return job == 100 || job == 110 || job == 111 || job == 112 || job == 120 || job == 121 || job == 122 || job == 130 || job == 131 || job == 132;
    }, is火炮手: function (job) {
        return parseInt(job / 10) == 53 || job == 501 || job == 1;
    }, is龙的传人: function (job) {
        return parseInt(job / 10) == 57 || job == 508;
    }, is管理员: function (job) {
        return job == 800 || job == 900 || job == 910;
    }, is皇家骑士团: function (job) {
        return parseInt(job / 1000) == 1;
    }, is圣魂剑士: function (job) {
        return parseInt(job / 100) == 11;
    }, is烈焰巫师: function (job) {
        return parseInt(job / 100) == 12;
    }, is破风使者: function (job) {
        return parseInt(job / 100) == 13;
    }, is暗夜行者: function (job) {
        return parseInt(job / 100) == 14;
    }, is闪雷悍将: function (job) {
        return parseInt(job / 100) == 15;
    }, is英雄团: function (job) {
        return parseInt(job / 1000) == 2;
    }, is狂狼勇士: function (job) {
        return parseInt(job / 100) == 21 || job == 2000;
    }, is龙魔导士: function (job) {
        return parseInt(job / 100) == 22 || job == 2001;
    }, is双弩精灵: function (job) {
        return parseInt(job / 100) == 23 || job == 2002;
    }, is幻影侠盗: function (job) {
        return parseInt(job / 100) == 24 || job == 2003;
    }, is夜光: function (job) {
        return parseInt(job / 100) == 27 || job == 2004;
    }, is隐月: function (job) {
        return parseInt(job / 100) == 25 || job == 2005;
    }, is末日反抗军: function (job) {
        return parseInt(job / 1000) == 3;
    }, is恶魔: function (job) {
        return is恶魔杀手(job) || is恶魔复仇者(job) || job == 3001;
    }, is恶魔杀手: function (job) {
        return parseInt(job / 10) == 311 || job == 3100;
    }, is恶魔复仇者: function (job) {
        return parseInt(job / 10) == 312 || job == 3101;
    }, is炼狱巫师: function (job) {
        return parseInt(job / 100) == 32;
    }, is狂豹猎人: function (job) {
        return parseInt(job / 100) == 33;
    }, is机械师: function (job) {
        return parseInt(job / 100) == 35;
    }, is尖兵: function (job) {
        return parseInt(job / 100) == 36 || job == 3002;
    }, is晓の阵: function (job) {
        return parseInt(job / 1000) == 4;
    }, is剑豪: function (job) {
        return parseInt(job / 100) == 41 || job == 4001;
    }, is阴阳师: function (job) {
        return parseInt(job / 100) == 42 || job == 4002;
    }, is米哈尔: function (job) {
        return parseInt(job / 1000) == 5;
    }, is飞侠: function (job) {
        return job == 400 || job == 420 || job == 421 || job == 422 || job == 410 || job == 411 || job == 412 || parseInt(job / 10) == 43;
    }, is诺巴: function (job) {
        return parseInt(job / 1000) == 6;
	},
	is皮卡啾: function (job) {
        return parseInt(job / 100) == 131 || job == 13000;
    },
    is林芝林: function (job) {
        return parseInt(job / 100) == 112 || job == 11000;
    }, is狂龙战士: function (job) {
        return parseInt(job / 100) == 61 || job == 6000;
    }, is萌天使: function (job) {
        return parseInt(job / 100) == 65 || job == 6001;
    }, is神之子: function (job) {
        return job == 10000 || job == 10100 || job == 10110 || job == 10111 || job == 10112;
    }, is林之灵: function (job) {
        return parseInt(job / 100) == 112 || job == 11000;
    }, is品克缤: function (job) {
        return parseInt(job / 100) == 131 || job == 13000;
    }, is超能力者: function (job) {
        return job == 14000 || job == 14200 || job == 14210 || job == 14211 || job == 14212;
    }, is剑士: function (job) {
        return getTrueJobGrade(job) == 1;
    }, is法师: function (job) {
        return getTrueJobGrade(job) == 2;
    }, is弓箭手: function (job) {
        return getTrueJobGrade(job) == 3;
    }, is盗贼: function (job) {
        return getTrueJobGrade(job) == 4 || getTrueJobGrade(job) == 6;
    }, is海盗: function (job) {
        return getTrueJobGrade(job) == 5 || getTrueJobGrade(job) == 6;
    }

};
function is_extendsp_job(job) {
	return (job == 0 || MapleJob.IsZhanShi(job) || MapleJob.IsFaShi(job) || MapleJob.IsGongJianShou(job)
		|| MapleJob.is飞侠(job) || MapleJob.is火炮手(job) || MapleJob.is晓の阵(job) || MapleJob.is龙的传人(job)
		|| MapleJob.is皇家骑士团(job) || MapleJob.is末日反抗军(job) || MapleJob.is龙魔导士(job) || MapleJob.is双弩精灵(job)
		|| MapleJob.is幻影侠盗(job) || MapleJob.is米哈尔(job) || MapleJob.is夜光(job) || MapleJob.is诺巴(job) || MapleJob.is神之子(job)
		|| MapleJob.is隐月(job) || MapleJob.is狂狼勇士(job) || MapleJob.is超能力者(job));

}
// console.log(parseInt(parseInt(3001/1000)));
var GameConstants = {
	isEnergyBuff: function (skill) { //body pressure, tele mastery, twister spin. etc
        switch (skill) {
            case 1095:
            case 2111007:
            case 2211007:
            case 2311007:
            case 5100015:
            case 4341052://啊修罗
            case 32111010:
            case 35121003:
            case 32121003:
            case 21101003:
            case 22161005:
            case 12111007:
            case 131000016:
                return true;
        }
        return false;
    }
}



function DecodeCharacter() {
	/* using (ScriptAPI) { */
	DecodeCharacterStatistics();
	DecodeCharacterAppearance();

	mplew.AddBool("View All Characters");

	ranking = mplew.AddBool("Ranked");

	if (ranking) {
		mplew.AddInt("Ranking 1");
		mplew.AddInt("Ranking 2");
		mplew.AddInt("Ranking 3");
		mplew.AddInt("Ranking 4");
	}
	/*} */
}

function DecodeFarmInformation() {
	/* using (ScriptAPI) { */
	mplew.StartNode("Farm");

	mplew.AddString("Name");
	mplew.AddInt("Waru");
	mplew.AddInt("Level");
	mplew.AddInt("Experience");
	mplew.AddInt("Aesthetic Points");
	mplew.AddInt("Gems");

	mplew.AddByte("Unknown");
	mplew.AddInt("");
	mplew.AddInt("");
	mplew.AddInt("");

	mplew.EndNode(false);
	/*} */
}

function DecodeCharacterData() {
	/* using (ScriptAPI) { */

	mplew.StartNode("Character Data");

	mplew.AddLong("Mask");
	mplew.AddByte("");

	for (i = 0; i < 3; i++)
		mplew.AddInt("");

	mplew.AddByte("");
	mplew.AddByte("");
	mplew.AddInt("");
	mplew.AddByte("");
	DecodeCharacterStatistics();
	mplew.AddLong("");
	mplew.AddByte("Buddylist Size");

	mplew.StartNode("Blessings");

	fairy = mplew.AddBool("Blessing Fairy");
	if (fairy)
		mplew.AddString("Blesser");

	empress = mplew.AddBool("Blessing Empress");
	if (empress)
		mplew.AddString("Blesser");

	ultimate = mplew.AddBool("Ultimate Explorer");
	if (ultimate)
		mplew.AddString("Blesser");

	mplew.EndNode(false);

	mplew.AddLong("Meso");
	DecodeCharacterItems();
	DecodeCharacterSkills();
	DecodeCharacterQuests();

	cnt = mplew.AddShort("Match Records");
	for (i = 0; i < cnt; i++) {
		mplew.StartNode("Match " + i);

		mplew.AddInt("2");
		mplew.AddInt("2");
		mplew.AddInt("2");
		mplew.AddInt("2");
		mplew.AddInt("2");

		mplew.EndNode(false);
	}

	cnt = mplew.AddShort("Couple Records");
	for (i = 0; i < cnt; i++) {
		mplew.AddField("Unk", 33);
	}
	cnt = mplew.AddShort("Friend Records");
	for (i = 0; i < cnt; i++) {
		mplew.AddField("Unk", 37);
	}
	cnt = mplew.AddShort("Marriage Records");
	for (i = 0; i < cnt; i++) {
		mplew.AddField("Unk", 48);
	}

	mplew.StartNode("Teleport Rocks");

	for (i = 0; i < 5 + 10 + 13 + 13; i++) {
		mplew.StartNode("Teleport Rock " + (i + 1));

		mplew.AddInt("Map ID");

		mplew.EndNode(false);
	}

	mplew.EndNode(false);

	mplew.AddInt("");
	DecodeCharacterMonsterBook();
	mplew.AddShort("");
	mplew.AddShort("");

	DecodeCharacterQuestsData();

	// TODO: Zero & Jaguar Information.

	mplew.AddShort("");
	mplew.AddShort("");
	mplew.AddShort("");

	DecodeCharacterStolenSkills();

	mplew.EndNode(false);
	/*} */
}

function DecodeCharacterStolenSkills(job) {
	/* using (ScriptAPI) { */
	mplew.StartNode("Character Stolen Skills");

	for (i = 1; i <= 4; i++) {
		DecodeStolenSkill(i);
	}

	DecodeCharacterChosenSkills();

	mplew.EndNode(false);
	/*} */
}

function DecodeStolenSkill(i) {
	/* using (ScriptAPI) { */
	mplew.StartNode("Stolen Skill " + (i + 1));

	count = 0;

	for (j = 0; j != 0; j++) {
		val = mplew.AddInt("");

		if (val == 0)
			break;

		count++;
	}

	numSteal = 0;
	if (count == 1 || count == 2)
		numSteal = 4;
	else if (count == 3)
		numSteal = 3;
	else if (count == 4)
		numSteal = 2;

	while (count < numSteal)
		mplew.AddInt("");

	mplew.EndNode(false);
	/*} */
}

function DecodeCharacterChosenSkills() {
	/* using (ScriptAPI) { */
	mplew.StartNode("Character Chosen Skills");



	mplew.EndNode(false);
	/*} */
}

function DecodeCharacterQuestsData() {
	/* using (ScriptAPI) { */
	mplew.StartNode("Character Quests Data");

	questsDataCount = mplew.AddShort("Quests Data Count");

	for (i = 0; i < questsDataCount; i++) {
		mplew.StartNode("Quest " + (i + 1) + "'s Data");

		mplew.AddShort("ID");
		mplew.AddString("Data");

		mplew.EndNode(false);
	}

	mplew.EndNode(false);
	/*} */
}

function DecodeCharacterMonsterBook() {
	/* using (ScriptAPI) { */
	mplew.StartNode("Character Monster Book");

	finished = mplew.AddBool("Finished");

	mplew.StartNode("Card Items");

	cardItemsCount = mplew.AddShort("Card Items Count");

	for (i = 0; i < cardItemsCount; i++) {
		mplew.StartNode("Card " + (i + 1));

		mplew.AddShort("Card Item ID");
		mplew.AddBool("Obtained");

		mplew.EndNode(false);
	}

	mplew.EndNode(false);

	mplew.AddInt("Set ID");

	mplew.EndNode(false);
	/*} */
}

function DecodeCharacterItems() {
	/* using (ScriptAPI) { */
	mplew.StartNode("Character Items");

	mplew.StartNode("Potion Pot");

	mplew.AddInt("");
	mplew.AddInt("");
	mplew.AddInt("");

	mplew.EndNode(false);

	mplew.AddInt("Character ID");
	mplew.AddField("", 31);
	mplew.AddByte("Equipment Slots");
	mplew.AddByte("Useable Slots");
	mplew.AddByte("Setup Slots");
	mplew.AddByte("Etcetera Slots");
	mplew.AddByte("Cash Slots");
	mplew.AddLong("Default Expiration Time");

	mplew.StartNode("Regular Equipped Items");


	for (i = 1; i != 0; i++) {
		pos = mplew.AddUShort("Position");

		if (pos == 0)
			break;

		mplew.StartNode("Position " + pos + "'s Equip");

		DecodeItem();

		mplew.EndNode(false);
	}

	mplew.EndNode(false);

	mplew.StartNode("Cash Equipped Items");

	for (i = 1; i != 0; i++) {
		pos = mplew.AddUShort("Position");

		if (pos == 0)
			break;

		mplew.StartNode("Position " + pos + "'s Equip");

		DecodeItem();

		mplew.EndNode(false);
	}

	mplew.EndNode(false);

	mplew.StartNode("Equip Items");

	for (i = 1; i != 0; i++) {
		pos = mplew.AddUShort("Position");

		if (pos == 0)
			break;

		mplew.StartNode("Position " + pos + "'s Equip");

		DecodeItem();

		mplew.EndNode(false);
	}

	mplew.EndNode(false);

	mplew.AddShort("Unknown Items");
	mplew.AddShort("Dragon Items");
	mplew.AddShort("Mechanic Items");
	mplew.AddShort("Android Items");

	for (i = 0; i < 8; i++)
		mplew.AddShort("Unknown Items");

	mplew.StartNode("Useable Items");

	for (i = 1; i != 0; i++) {
		pos = mplew.AddByte("Position");

		if (pos == 0)
			break;

		mplew.StartNode("Position " + pos + "'s Item");

		DecodeItem();

		mplew.EndNode(false);
	}

	mplew.EndNode(false);

	mplew.StartNode("Setup Items");

	for (i = 1; i != 0; i++) {
		pos = mplew.AddByte("Position");

		if (pos == 0)
			break;

		mplew.StartNode("Position " + pos + "'s Item");

		DecodeItem();

		mplew.EndNode(false);
	}

	mplew.EndNode(false);

	mplew.StartNode("Etcetera Items");

	for (i = 1; i != 0; i++) {
		pos = mplew.AddByte("Position");

		if (pos == 0)
			break;

		mplew.StartNode("Position " + pos + "'s Item");

		DecodeItem();

		mplew.EndNode(false);
	}

	mplew.EndNode(false);

	mplew.StartNode("Cash Items");

	for (i = 1; i != 0; i++) {
		pos = mplew.AddByte("Position");

		if (pos == 0)
			break;

		mplew.StartNode("Position " + pos + "'s Item");

		DecodeItem();

		mplew.EndNode(false);
	}

	mplew.EndNode(false);

	mplew.AddField("Extended Slots", 17);

	mplew.EndNode(false);
	/*} */
}

function DecodeCharacterSkills() {
	/* using (ScriptAPI) { */
	mplew.StartNode("Character Skills");

	mplew.AddBool("New Skills Format");
	skillCount = mplew.AddShort("Skills Count");

	for (i = 0; i < skillCount; i++) {
		mplew.StartNode("Skill " + (i + 1));

		mplew.AddInt("ID");
		mplew.AddInt("Current Level");
		mplew.AddLong("Default Expiration Time");

		mplew.EndNode(false);
	}

	cooldownSkillsCount = mplew.AddShort("Cooldown Skills Count");

	for (i = 0; i < cooldownSkillsCount; i++) {
		mplew.StartNode("Cooldown Skill " + (i + 1));

		mplew.AddInt("ID");
		mplew.AddShort("Remaining Seconds");

		mplew.EndNode(false);
	}

	if (cooldownSkillsCount == 0)
		mplew.AddShort("No cooldowns");


	mplew.EndNode(false);
	/*} */
}

function DecodeCharacterQuests() {
	/* using (ScriptAPI) { */
	mplew.StartNode("Character Quests");

	mplew.AddBool("New Quests Format");

	mplew.StartNode("Started Quests");

	startedQuestsCount = mplew.AddShort("Started Quests Count");

	for (i = 0; i < startedQuestsCount; i++) {
		mplew.StartNode("Started Quest " + (i + 1));

		mplew.AddShort("ID");
		mplew.AddString("Mob Kills");

		mplew.EndNode(false);
	}

	mplew.EndNode(false);

	mplew.StartNode("Unknown Quests");

	rlhCount = mplew.AddShort("Count");
	for (i = 1; i <= rlhCount; i++) {
		mplew.AddString("Quest " + i);
		mplew.AddString("value?");
	}

	mplew.EndNode(false);

	mplew.StartNode("Completed Quests");

	mplew.AddBool("New Quests Format");

	completedQuestsCount = mplew.AddShort("Comleted Quests Count");

	for (i = 0; i < completedQuestsCount; i++) {
		mplew.StartNode("Completed Quest " + (i + 1));

		mplew.AddShort("ID");
		mplew.AddInt("Completion Timestamp");

		mplew.EndNode(false);
	}

	mplew.EndNode(false);
	mplew.EndNode(false);
	/*} */
}

function DecodeCharacterStatistics() {
	/* using (ScriptAPI) { */
	mplew.StartNode("Character Information");

	mplew.AddInt("ID");
	mplew.AddPaddedString("Name", 13);
	mplew.AddByte("Gender");
	mplew.AddByte("Skin ID");
	mplew.AddInt("Face ID");
	mplew.AddInt("Hair ID");

	mplew.AddLong("Pet 1's Unique ID");
	mplew.AddLong("Pet 2's Unique ID");
	mplew.AddLong("Pet 3's Unique ID");

	mplew.AddByte("Level");
	job = mplew.AddShort("Job ID");
	mplew.AddShort("Strength");
	mplew.AddShort("Dexterity");
	mplew.AddShort("Intelligence");
	mplew.AddShort("Luck");
	mplew.AddInt("Current HP");
	mplew.AddInt("Max HP");
	mplew.AddInt("Current MP");
	mplew.AddInt("Max MP");
	mplew.AddShort("Available AP");
	mplew.AddByte("SP");
	mplew.AddLong("Experience");
	mplew.AddInt("Fame");
	mplew.AddInt("Gachapon Experience");
	mplew.AddInt("Migration Data");
	mplew.AddInt("Map ID");
	mplew.AddByte("Initial Spawn Point");
	mplew.AddInt("");
	mplew.AddShort("Job Category");

	if (IsDemonSlayer(job) || IsXenon(job) || IsDemonAvenger(job))
		mplew.AddInt("Face Marking ID");

	mplew.AddByte("Fatigue");
	mplew.AddInt("Current Date");

	for (i = 0; i < 6; i++)
		mplew.AddInt("Trait " + (i + 1) + "'s Value");

	for (i = 0; i < 6; i++)
		mplew.AddShort("Trait " + (i + 1) + "'s Today's Value");

	mplew.AddByte("");
	mplew.AddLong("");
	mplew.AddInt("Battle Experience");
	mplew.AddByte("Battle Rank");
	mplew.AddInt("Battle Points");

	mplew.AddByte("");
	mplew.AddByte("");
	mplew.AddInt("");

	mplew.AddByte("Job ID");
	mplew.AddLong("");
	mplew.AddInt("Reward ID");
	mplew.AddBool("Reward Existing");

	for (i = 0; i < 9; i++) {
		mplew.AddInt("Part Time Job");
		mplew.AddByte("Part Time Job");
		mplew.AddInt("Part Time Job");
	}

	mplew.EndNode(false);
	/*} */
}

function DecodeCharacterAppearance() {
	/* using (ScriptAPI) { */
	mplew.StartNode("Character Appearance");

	mplew.AddByte("Gender");
	mplew.AddByte("Skin ID");
	mplew.AddInt("Face ID");
	job = mplew.AddInt("Job ID");
	mplew.AddBool("Slot 1");
	mplew.AddInt("Hair ID");

	mplew.StartNode("Visible Equips Layer");

	for (i = 1; i != 0xFF; i++) {
		val = mplew.AddByte("Slot " + i);

		if (val == 0xFF)
			break;

		mplew.AddInt("Item " + i + "'s ID");
	}

	mplew.EndNode(false);

	mplew.StartNode("Hidden Equips Layer");

	for (i = 1; i != 0xFF; i++) {
		val = mplew.AddByte("Slot " + i);

		if (val == 0xFF)
			break;

		mplew.AddInt("Item " + i + "'s ID");
	}

	mplew.EndNode(false);

	mplew.StartNode("Totems Equips Layer");

	for (i = 1; i != 0xFF; i++) {
		val = mplew.AddByte("Slot " + i);

		if (val == 0xFF)
			break;

		mplew.AddInt("Item " + i + "'s ID");
	}

	mplew.EndNode(false);

	mplew.AddInt("Cash Weapon ID");
	mplew.AddInt("Weapon ID");
	mplew.AddInt("Shield ID");
	mplew.AddBool("Mercedes");

	for (i = 0; i < 3; i++)
		mplew.AddInt("Pet " + i + "'s ID");

	if (IsDemonSlayer(job) || IsDemonAvenger(job) || IsXenon(job))
		mplew.AddInt("Face Marking ID");

	if (IsZero(job))
		mplew.AddBool("Beta");

	mplew.EndNode(false);
	/*} */
}

function DecodeItem() {
	/* using (ScriptAPI) { */
	type = mplew.AddByte("Type");
	item = mplew.AddInt("Item ID");
	iscash = mplew.AddByte("HasCashid");
	if (iscash == 0x01) {
		mplew.AddLong("CashID");
	}

	mplew.AddLong("Expiration Time");
	mplew.AddInt("-1 ?");
	if (type == 0x01) {
		mplew.StartNode("Flags part 1");
		flag = mplew.AddInt("Status Flags v.132");
		inputflag = flag;
		flag = ReadIfFlaggedByte(flag, 0x01, "Slots");
		flag = ReadIfFlaggedByte(flag, 0x02, "Scrolls");

		flag = ReadIfFlaggedShort(flag, 0x04, "Str");
		flag = ReadIfFlaggedShort(flag, 0x08, "Dex");
		flag = ReadIfFlaggedShort(flag, 0x10, "Int");
		flag = ReadIfFlaggedShort(flag, 0x20, "Luk");
		flag = ReadIfFlaggedShort(flag, 0x40, "HP");
		flag = ReadIfFlaggedShort(flag, 0x80, "MP");
		flag = ReadIfFlaggedShort(flag, 0x100, "WATK");
		flag = ReadIfFlaggedShort(flag, 0x200, "MATK");
		flag = ReadIfFlaggedShort(flag, 0x400, "WDEF");
		flag = ReadIfFlaggedShort(flag, 0x800, "MDEF");
		flag = ReadIfFlaggedShort(flag, 0x1000, "ACC");
		flag = ReadIfFlaggedShort(flag, 0x2000, "Avo");
		flag = ReadIfFlaggedShort(flag, 0x4000, "Hands");
		flag = ReadIfFlaggedShort(flag, 0x8000, "Speed");
		flag = ReadIfFlaggedShort(flag, 0x10000, "Jump");
		flag = ReadIfFlaggedShort(flag, 0x20000, "Flags");

		flag = ReadIfFlaggedByte(flag, 0x40000, "Increased Skill");

		flag = ReadIfFlaggedByte(flag, 0x80000, "Item Level");
		flag = ReadIfFlaggedLong(flag, 0x100000, "Item EXP");

		flag = ReadIfFlaggedInt(flag, 0x200000, "unk1112");

		flag = ReadIfFlaggedInt(flag, 0x400000, "Hammertiem");

		flag = ReadIfFlaggedShort(flag, 0x800000, "PVP Damage");
		flag = ReadIfFlaggedByte(flag, 0x1000000, "unk118");
		flag = ReadIfFlaggedShort(flag, 0x2000000, "unk119");
		flag = ReadIfFlaggedInt(flag, 0x4000000, "unk1176");

		flag = ReadIfFlaggedByte(flag, 0x8000000, "unk115");
		flag = ReadIfFlaggedByte(flag, 0x10000000, "unk114");
		flag = ReadIfFlaggedByte(flag, 0x20000000, "unk113");
		flag = ReadIfFlaggedByte(flag, 0x40000000, "unk11");
		flag = ReadIfFlaggedByte(flag, 0x80000000, "unk12");
		if (flag != 0) {
			mplew.AddComment("FLAG NOT EMTPY: " + flag);
		}
		mplew.EndNode(true);

		mplew.StartNode("Flags part 2");
		flag = mplew.AddInt("Status Flags v.132");
		flag = ReadIfFlaggedByte(flag, 0x01, "??? 1");
		flag = ReadIfFlaggedByte(flag, 0x02, "??? 2");
		flag = ReadIfFlaggedByte(flag, 0x04, "??? 3");
		flag = ReadIfFlaggedLong(flag, 0x08, "??? 4");
		flag = ReadIfFlaggedInt(flag, 0x10, "??? 5");
		if (flag != 0) {
			mplew.AddComment("FLAG NOT EMTPY: " + flag);
		}
		mplew.EndNode(true);

		mplew.AddString("Name tag");

		mplew.AddByte("Status Flag");
		mplew.AddByte("Amount of stars");

		mplew.AddShort("Potential1");
		mplew.AddShort("Potential2");
		mplew.AddShort("Potential3");
		mplew.AddShort("Bonus Potential4");
		mplew.AddShort("Bonus Potential5");
		mplew.AddShort("Bonus Potential6");

		mplew.AddShort("Anvilled item ID + (itemid - (itemid % 10000))");

		mplew.AddShort("Socket state?");

		mplew.AddShort("Nebulite item ID + 3060000");

		mplew.AddShort("Neb 2?");
		mplew.AddShort("Neb 3?");

		if (iscash == 0x00)
			mplew.AddLong("?x8"); // Unique ID?
		mplew.AddLong("v126");

		mplew.AddInt("?x4");
		mplew.AddLong("v142");
		mplew.AddLong("v142");

		mplew.AddInt("v142 1");

		mplew.AddInt("v142 2 1");
		mplew.AddInt("v142 2 2");
		mplew.AddInt("v142 2 3");
	}
	else if (type == 0x02) {
		mplew.AddShort("Amount");
		mplew.AddString("Name");
		mplew.AddShort("Flags");
		item = parseInt(item / 10000);
		if (item == 233 || item == 207 || item == 287)
			mplew.AddLong("?");

	}
	else if (type == 0x03) {
		mplew.AddPaddedString("Petname", 13);
		mplew.AddByte("Level");
		mplew.AddShort("Closeness");
		mplew.AddByte("Fullness");
		mplew.AddLong("Time");
		mplew.AddShort("New!?");
		mplew.AddShort("New!?");
		mplew.AddInt("New!?");
		mplew.AddShort("New!?");
		mplew.AddByte("-.-");
		mplew.AddInt("New!?!?!?!");
		mplew.AddInt("New!?!?!!?");
		mplew.AddShort("Moar new wtf man");
	}
	/*} */
}

function IsSeperatedSP(job) {
	if (IsKOC(job))
		return false;
	else if (IsAran(job))
		return false;
	else if (job == 900 || job == 910 || job == 800)
		return false;
	else
		return true;
}

function IsKOC(job) {
	return job >= 1000 && job < 2000;
}

function IsAran(job) {
	return job >= 2000 && job <= 2112 && job != 2001 && job != 2002 && job != 2003 && job != 2004;
}

function IsDemonSlayer(job) {
	return job == 30001 || (job >= 3100 && job <= 3112 && job != 3101);
}

function IsXenon(job) {
	return job == 3002 || (job >= 3600 && job <= 3612);
}

function IsDemonAvenger(job) {
	return job == 3001 || job == 3101 || (job >= 3120 && job <= 3122);
}

function IsZero(job) {
	return job == 10000 || (job >= 10100 && job <= 10112);
}


function ReadIfFlaggedByte(value, flag, text) {
	if ((value & flag) == flag) {
		mplew.AddByte(text + " - " + flag);
		mplew.AddComment("Left over flags: " + (value - flag));
		return value - flag;
	}
    return value;
}

function ReadIfFlaggedShort(value, flag, text) {
	if ((value & flag) == flag) {
		mplew.AddShort(text + " - " + flag);
		mplew.AddComment("Left over flags: " + (value - flag));
		return value - flag;
	}
    return value;
}

function ReadIfFlaggedInt(value, flag, text) {
	if ((value & flag) == flag) {
		mplew.AddInt(text + " - " + flag);
		mplew.AddComment("Left over flags: " + (value - flag));
		return value - flag;
	}
    return value;
}

function ReadIfFlaggedLong(value, flag, text) {
	if ((value & flag) == flag) {
		mplew.AddLong(text + " - " + flag);
		mplew.AddComment("Left over flags: " + (value - flag));
		return value - flag;
	}
    return value;
}


function DecodeAvatar() {
	/* using (ScriptAPI) { */
	mplew.AddByte("Gender");
	mplew.AddByte("Skin");
	mplew.AddInt("Face");
	a1 = mplew.AddInt("Job ID");

	mplew.AddByte("SLOT 1 LOL");
	mplew.AddInt("Hair");
	mplew.StartNode("Equips Hidden");
	for (j = 1; j != 0xFF; j++) {
		val = mplew.AddByte("SLOT " + j);
		if (val == 0xFF) break;
		mplew.AddInt("Item ID " + j);
	}
	mplew.EndNode(false);

	mplew.StartNode("Equips Shown");
	for (j = 1; j != 0xFF; j++) {
		val = mplew.AddByte("SLOT " + j);
		if (val == 0xFF) break;
		mplew.AddInt("Item ID " + j);
	}
	mplew.EndNode(false);

	mplew.StartNode("Equips DERP");
	for (j = 1; j != 0xFF; j++) {
		val = mplew.AddByte("SLOT " + j);
		if (val == 0xFF) break;
		mplew.AddInt("Item ID " + j);
	}
	mplew.EndNode(false);

	mplew.AddInt("Cash Equip");
	mplew.AddInt("Cash Equip?");
	mplew.AddInt("Cash Equip?2");
	mplew.AddByte("0?");
	mplew.AddInt("Pet1");
	mplew.AddInt("Pet2");
	mplew.AddInt("Pet3");
	if (parseInt(a1 / 100) == 31 || a1 == 3001) {
		mplew.AddInt("Demonslayer thingy");
	}
	/*} */



}




function IsBeginnerJob(pJobID) {
    return (pJobID % 1000) == 0
        || pJobID == 2001
        || pJobID == 2002
        || pJobID == 3001
        || pJobID == 2003
        || pJobID == 5000
        || pJobID == 2004
        || pJobID == 6000
        || pJobID == 6001;
}

function is_ignore_master_level_for_common(pSkillID) {
    v1 = false;
    if (pSkillID > 5220014) {
        if (pSkillID > 22181004) {
            if (pSkillID <= 33121005) {
                if (pSkillID == 33121005 || pSkillID == 23120011 || pSkillID == 23121008)
                    return true;
                return pSkillID == 33120010;
            }
            if (pSkillID != 35120014) {
                return pSkillID == 51120000;
            }
        }
        else {
            if (pSkillID != 22181004) {
                if (pSkillID > 5720005) {
                    if (pSkillID == 5720008 || pSkillID == 5720012)
                        return true;
                    return pSkillID == 21120011;
                }
                if (pSkillID != 5720005) {
                    if (pSkillID > 5321004) {
                        return pSkillID == 5321006;
                    }
                    if (pSkillID < 5321003) {
                        return pSkillID == 5320007;
                    }
                }
            }
        }
        return true;
    }
    if (pSkillID == 5220014)
        return true;
    if (pSkillID > 3220010) {
        if (pSkillID <= 4340010) {
            if (pSkillID == 4340010 || pSkillID == 3220012 || pSkillID == 4110012)
                return true;
            return pSkillID == 4210012;
        }
        if (pSkillID > 5120012) {
			5201008
            return pSkillID == 5220012;
        }
        if (pSkillID < 5120011) {
            return pSkillID == 4340012;
        }
        return true;
    }
    if (pSkillID >= 3220009)
        return true;
    if (pSkillID > 2121009) {
        if (pSkillID > 2321010) {
            if (pSkillID < 3120010 || pSkillID > 3120012)
                return false;
        }
        else {
            if (pSkillID != 2321010) {
                return pSkillID == 2221009;
            }
        }
        return true;
    }
    if (pSkillID == 2121009 || pSkillID == 1120012 || pSkillID == 1220013)
        return true;
    return pSkillID == 1320011;
}

// function is_skill_need_master_level(pSkillID)
// {
// 	if(pSkillID==5120018||5121015==pSkillID==5120014)
// 	return true;
//     if (is_ignore_master_level_for_common(pSkillID)) return false;
//     if (parseInt(pSkillID / 1000000) == 92 && pSkillID % 10000 == 0) return false;

//     tmp = 10000 * parseInt(pSkillID / 10000);

//     if ((parseInt(pSkillID / 1000000) != 92 || pSkillID % 10000 >= 1) &&
//         (parseInt(tmp / 1000000) == 92) && tmp % 10000 == 0) return false;

//     tmp = parseInt(pSkillID / 10000);
//     if (tmp == 8000) return false;

//     if (IsBeginnerJob(tmp)) return false;

//     jobtype = GetJobType(tmp);
//     if (IsEvanJob(tmp))
//     {
//         if (jobtype != 9 && jobtype != 10 && pSkillID != 22111001 && pSkillID != 22141002 && pSkillID != 22140000)
//             return false;
//     }
//     else
//     {
//         if (pSkillID != 4311003 && pSkillID != 4331002 && pSkillID != 4321006 && pSkillID != 4330009)
//             return jobtype == 4;
//     }

//     return true;
// }

function IsEvanJob(pJobID) {
    return (parseInt(pJobID / 100) == 22 || pJobID == 2001);
}

function GetJobType(pJobID) {
    if (IsBeginnerJob(pJobID) || (pJobID % 100) == 0 || pJobID == 501 || pJobID == 508) {
        return 1;
    }
    else {
        tmp = 0;
        if (parseInt(pJobID / 10) == 43)
            tmp = (pJobID - 430) / 2;
        else
            tmp = pJobID % 10;
        tmp += 2;
        if (tmp >= 2 && (tmp <= 4 || tmp <= 10 && IsEvanJob(pJobID)))
            return tmp;
        else
            return 0;
    }

}

function is_skill_need_master_level(nSkillID) {
	var result; // eax@2
	var v2; // eax@9
	var v3; // edi@9

	if (is_ignore_master_level(nSkillID)
		|| parseInt(nSkillID / 1000000) == 92 && !(nSkillID % 10000)
		|| is_making_skill_recipe(nSkillID)
		|| is_common_skill(nSkillID)
		|| is_novice_skill(nSkillID)
		|| is_field_attack_obj_skill(nSkillID)) {
		result = 0;
	}
	else {
		v2 = get_skill_root_from_skill(nSkillID);
		v3 = v2;
		result = nSkillID != 0x282B358
			&& !sub_5917B0(v2)
			&& (is_added_sp_dual_and_zero_skill(nSkillID) || get_job_level(v3) == 4 && !IsShengZhiZi(v3));
	}
	return result;
}

function is_ignore_master_level(nSkillID) {
	var v1; // zf@9

	if (nSkillID > (0x51312A + 2)) {
		if (nSkillID > 0x160C88B) {
			if (nSkillID <= 0x217E38E) {
				if (nSkillID == 0x217E38E || nSkillID == 0x160C88D || nSkillID == 0x160CC70)
					return 1;
				v1 = nSkillID == 0x1F95F0A;
				// continue  LABEL_39;
				 if ( v1 )
					return 1;
				return 0;
			}
			if (nSkillID != 51120000) {
				v1 = nSkillID == 80001913;
				// continue  LABEL_39;
				 if ( v1 )
					return 1;
				return 0;
			}
		}
		else if (nSkillID != 0x160C88B) {
			if (nSkillID <= 0x1424412 + 3) {
				if (nSkillID >= 0x1424412 + 2 || nSkillID == 0x51312E || (nSkillID - 0x51312E) == 0xF112DD)
					return 1;
				v1 = nSkillID - 0x51312E - 0xF112DD == 3;
				// continue  LABEL_39;
				
				 if ( v1 )
					return 1;
				return 0;
			}
			if (nSkillID != 0x14247F0) {
				v1 = nSkillID == 0x1524DBA + 3;
				// continue  LABEL_39;
				
				 if ( v1 )
					return 1;
				return 0;
			}
		}
		return 1;
	}
	if (nSkillID == (0x51312A + 2))
		return 1;
	if (nSkillID > 4210012) {
		if (nSkillID > 0x4FA6AC) {
			if (nSkillID != (0x4FA6AC + 2)) {
				v1 = nSkillID == 0x512D47;
				 if ( v1 )
					return 1;
				return 0;
			}
		}
		else if (nSkillID != 0x4FA6AC) {
			if (nSkillID > 4340012) {
				if (nSkillID < 0x4E200B || nSkillID > 0x4E200C)
					return 0;
			}
			else if (nSkillID != 4340012) {
				v1 = nSkillID == 4340010;
			}
		}
		return 1;
	}
	if (nSkillID == 4210012)
		return 1;
	if (nSkillID > 2221009) {
		if (nSkillID == 2321010 || nSkillID == 3210015)
			return 1;
		v1 = nSkillID == 4110012;
	}
	else {
		if (nSkillID == 2221009 || nSkillID == 1120012 || nSkillID == 1320011)
			return 1;
		v1 = nSkillID == 2121009;
	}
	//return v1;

  if ( v1 )
    return 1;
  return 0;
}
function is_making_skill_recipe(a1) {
	var v1; // ecx@3
	var result; // eax@5

	result = 0;
	if (parseInt(a1 / 1000000) != 92 || a1 % 10000) {
		v1 = 10000 * (parseInt(a1 / 10000));
		if (parseInt(v1 / 1000000) == 92 && !(v1 % 10000))
			result = 1;
	}
	return result;
}

function is_common_skill(a1) {
	var v1; // eax@1
	var result; // eax@5

	v1 = parseInt(a1 / 10000);
	if (parseInt(a1 / 10000) == 8000)
		v1 = parseInt(a1 / 100);
	if (v1 < 800000 || v1 > 800099)
		result = v1 == 8001;
	else
		result = 1;
	return result;
}
function is_novice_skill(a1) {
	var v1; // eax@1

	v1 = parseInt(a1 / 10000);
	if (parseInt(a1 / 10000) == 8000)
		v1 = parseInt(a1 / 100);
	return is_beginner_job(v1);
}
function is_beginner_job(a1) {
	var v2; // zf@10

	if (a1 > 6001) {
		if (a1 == 8001 || a1 == 13000)
			return 1;
		v2 = a1 == 14000;
		if (!v2) {
			if (!(a1 % 1000))
				return 1;
			return parseInt(a1 / 100) == 8000;
		}
		return 1;
	}
	if (a1 >= 6000)
		return 1;
	if (a1 > 4002) {
		v2 = a1 == 5000;
		if (!v2) {
			if (!(a1 % 1000))
				return 1;
			return parseInt(a1 / 100) == 8000;
		}
		return 1;
	}
	if (a1 >= 4001 || a1 <= 3002 && (a1 >= 3001 || a1 >= 2001 && a1 <= 2005))
		return 1;

	if (!(a1 % 1000))
		return 1;
	return parseInt(a1 / 100) == 8000;
}

function is_field_attack_obj_skill(a1) {
	var v1; // eax@3
	var result; // al@5

	if (a1 && a1 >= 0) {
		v1 = parseInt(a1 / 10000);
		if (parseInt(a1 / 10000) == 8000)
			v1 = parseInt(a1 / 100);
		result = v1 == 9500;
	}
	else {
		result = 0;
	}
	return result;
}

function get_skill_root_from_skill(a1) {
	var result; // eax@1

	result = parseInt(a1 / 10000);
	if (parseInt(a1 / 10000) == 8000)
		result = parseInt(a1 / 100);
	return result;
}
function sub_5917B0(a1) {
	return parseInt(a1 / 100) == 112 || a1 == 11000;
}
function is_added_sp_dual_and_zero_skill(nSkillID) {
	var v1; // zf@7

	if (nSkillID > 101100101) {
		if (nSkillID > 101110203) {
			if (nSkillID == 101120104)
				return 1;
			v1 = nSkillID == 101120204;
		}
		else {
			if (nSkillID == 101110203 || nSkillID == 101100201 || nSkillID == 101110102)
				return 1;
			v1 = nSkillID == 101110200;
		}
	}
	else {
		if (nSkillID == 101100101)
			return 1;
		if (nSkillID > 4331002) {
			if (nSkillID == 4340007 || nSkillID == 4341004)
				return 1;
			v1 = nSkillID == 101000101;
		}
		else {
			if (nSkillID == 4331002 || nSkillID == 4311003 || nSkillID == 4321006)
				return 1;
			v1 = nSkillID == 0x421219;
		}
	}
	if (!v1)
		return 0;
	return 1;
}

function get_job_level(nJob) {
	var result; // eax@7
	var v2; // esi@9

	if (is_beginner_job(nJob) || !(nJob % 100) || nJob == 501 || nJob == 3101 || nJob == 508) {
		result = 1;
	}
	else if (IsLongMoDao(nJob)) {
		result = get_evan_job_level(nJob);
	}
	else {
		if (is_dual_job(nJob))
			v2 = nJob % parseInt(10 / 2);
		else
			v2 = nJob % 10;
		result = v2 <= 2 ? v2 + 2 : 0;
	}
	return result;
}
function IsShengZhiZi(a1) {
	return a1 == 10000 || a1 == 10100 || a1 == 10110 || a1 == 10111 || a1 == 10112;
}

function IsLongMoDao( a1)
{
  return parseInt(a1 / 100) == 22 || a1 == 2001;
}
function is_dual_job( a1)
{
  return parseInt(a1 / 10) == 43;
}