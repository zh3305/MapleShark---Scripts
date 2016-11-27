BUDDYLIST();
function BUDDYLIST()
//void __thiscall BUDDYLIST(void *this, int ipacket)
{
    switch (mplew.write("type")) {
        case 0x17:
            // sub_1A2E470(/* *(v2 + 6848), ipacket */);
            v4 = mplew.writeInt("v4");
            if (v4 > 0) {
                mplew.writeBuffer("*v3", 0x13D * v4);
            }
            //end sub_1A2E470
            break;
        case 0x1A://向xxx发送了好友请求
            mplew.writeMapleAsciiString("");
            return;
        case 0x26:
            //sub_74F8C0(/* ipacket */);
            mplew.writeBuffer("this", 0x13D);
            //end sub_74F8C0
            break;
        case 0x28://拒绝好友
            v13 = mplew.write("linkaccount");
            v14 = mplew.writeInt("buddyid");
            break;
        case 0x2A://更新好友频道信息
            v16 = mplew.writeInt("chrId");
            v17 = mplew.writeInt(0);
            // v19 = sub_1A2E640(/* v16, v17 */);
            // if (v19 < 0)
            //     break;
            mplew.write("角色在商城和拍卖的时候为1");
            mplew.writeInt("channel");
            v88 = mplew.write("v88");
            mplew.write(1);
            if (v88) {
                mplew.writeMapleAsciiString("v21");
            }
            return;
        case 0x19://添加好友
            v89 = mplew.write(0);
            v90 = mplew.writeInt("chrIdFrom");
            v88 = mplew.writeInt(0);
            v36 = mplew.writeMapleAsciiString("nameFrom");
            v37 = mplew.writeInt("levelFrom");
            v38 = mplew.writeInt("jobFrom");
            v39 = mplew.writeInt(0);
            //sub_1A2E530(/* ipacket */);
            if (true) {
                //sub_74F8C0
                mplew.writeBuffer("this", 0x13D);
            }
            //
            return;
        case 0x30:
            v44 = mplew.writeInt("v44");
            v45 = mplew.writeMapleAsciiString("v45");
            return;;
        case 0x18:
            //sub_1A2F380(/* ipacket, 1 */);
            //int __thiscall sub_1A2F380 (/* _DWORD *this, var ipacket, int a3 */)
            //{
            v4 = mplew.writeInt("v4");
            v5 = mplew.writeInt("v5");
            if (true) {  // if (result >= 0) {             
                //result = sub_74F8C0(/* (*v3 + 317 * result), ipacket */);
                mplew.writeBuffer("this", 0x13D);
                //end sub_74F8C0
            }
            //}
            break;
        case 0x2C:
            mplew.write("");
            break;
        case 0x23://未知错误请求无法处理
        case 0x27://未知错误,你的请求无法处理
        case 0x29://未知错误,你的请求无法处理
        case 0x2D://未知错误,你的请求无法处理
        case 0x3E://未知错误,你的请求无法处理
        case 0x44://未知错误,你的请求无法处理
            break;;
        case 0x40://xxx未登录star planet 无法添加其为好友
            mplew.writeMapleAsciiString("");
            return;
        case 0x1B://好友目录已满
        case 0x38://好友目录已满
        case 0x39://黑名单已满
        case 0x1C://对方好友目录已满
        case 0x1D://已是好友
        case 0x3B://已是好友
        case 0x1F://正在等待加为好友的玩家
        case 0x20://不能吧自己加到好友
        case 0x3D://该角色尚未注册,或改注册用户未登录到Star Planet
        case 0x22://没登录的角色
        case 0x21://不能吧管理员加为好友
        case 0x3F://不能吧管理员加为好友
        case 0x24://我还在对方好友目录中
        case 0x1E://已发送账号好友申请
        case 0x3C://已发送好友申请
            break;
        case 0x2E://还没得到完整的力量,所以不能添加好友               
        case 0x2F: // 拒绝了好友申请
        case 0x31: // 拒绝知己申请
            mplew.writeMapleAsciiString("");
            return;;
        case 0x25:
            mplew.writeInt("");
            break;
        case 0x49:
            break;
        case 0x4A://当前为拒绝好友来访状态
        case 0x4B://未能找到好友
        case 0x4C://未知原因..寻找失败
            return;
        default:
            break;
    }
}