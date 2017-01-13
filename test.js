function GetMapleBuff(buffstat) {
    return buffstat = 1 << (31 - (buffstat % 32))
} // GetNulllBuff(null)[Math.floor(buffstat / 32)] = 
function GetNulllBuff(retdata) {
    if (retdata == null) {
        retdata = [];
    }
    for (i = 0; i < 17; i++) {
        retdata[i] = 0;
    }
    return retdata;
}

console.log(GetMapleBuff(1));