static findspecialcode(need_func)
 {
    auto func,addr,xref,source,filep,filename,flag;
    flag="a+";
    func=LocByName(need_func);
    if (func==BADADDR)
    {
        Warning("Sorry,%s not found in database",need_func);
        return;
    }
   else 
    {
        Message("%s is found in database\n",need_func);
    }
    for (addr=RfirstB(func);addr !=BADADDR;addr=RnextB(func,addr))
     {
        xref=XrefType();
        if (xref==fl_CN||xref==fl_CF)
        {
            source= GetFunctionName(addr);
            Message("%s called from 0x%x in %s +%d\n",need_func,addr,source,addr-LocByName(source));
            auto add2=FindText( addr, SEARCH_NEXT ,0,0,"push");
            Message(" 0x%x  %s  \n",add2,GetDisasm(add2));
        }
     }
 }
static main() {
    findspecialcode("COutPacket::COutPacket_1");
}
