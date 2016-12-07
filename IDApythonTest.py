from idaapi import *  
from idc import *  
import math


def gethexind(buffstat, firstStr):
    Y = (math.log(buffstat) / math.log(2));
    return (31 - Y) + (firstStr * 32)

def ShowFlags(Flag):
    if (GetFlags(Flag)!= 0 ):
        iii=0;
        val=0;
        while (iii<17):
            val=Dword(Flag+iii*4);
            if(val!=0):
                #print ("pos=%d; hex = %#x  st=%d; \n"%(iii, val,gethexind(val,iii)));
                print(" map.put(%#x,%d); "%(Flag, gethexind(val,iii)));
            iii=iii+1;
    else:
        print("无数据");
# for i in range(0, 9):
#     ShowFlags(68 * i + 0x22B8218)
ShowFlags(0x22D2F58);
