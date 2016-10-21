
//读取Hex值
static ShowFlags(Flag){
if((GetFlags(Flag)!= 0 ) ){
    auto iii=0;
    auto val=0;
    for(iii;iii<17;iii++)
    {
     val=Dword(Flag+iii*4);
       if(val!=0)
        {
    //    Message("pos=%d; hex = %#x  st=%d; \n",iii, val,gethexind(val,iii));
       Message(" map.put(%#x , %d); \n",Flag, gethexind(val,iii));
       }
    }
}else
{
Message("无数据");
}
  return 0;
}
static main() {
 ShowFlags(ffff);
 }

 
static gethexind(buffstat,firstStr)
{
       auto value = 0;
        while (buffstat > 1) {
            buffstat =buffstat / 2;
            value++;
        };
        value = 31 - value;
        value =value+ (firstStr * 32);
        return value;
}