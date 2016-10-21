
function HashMap() {
  var size = 0;/** Map 大小 **/
  var entry = new Object();  /** 对象 **/
  /** 存 **/
  this.put = function (key, value) {
    if (!this.containsKey(key)) {
      size++;
    }
    entry[key] = value;
  }
  /** 取 **/
  this.get = function (key) {
    if (this.containsKey(key)) {
      return entry[key];
    }
    else {
      return null;
    }
  }
  /** 删除 **/
  this.remove = function (key) {
    if (delete entry[key]) {
      size--;
    }
  }
  /** 是否包含 Key **/
  this.containsKey = function (key) {
    return (key in entry);
  }
  /** 是否包含 Value **/
  this.containsValue = function (value) {
    for (var prop in entry) {
      if (entry[prop] == value) {
        return true;
      }
    }
    return false;
  }
  /** 所有 Value **/
  this.values = function () {
    var values = new Array(size);
    for (var prop in entry) {
      values.push(entry[prop]);
    }
    return values;
  }
  /** 所有 Key **/
  this.keys = function () {
    var keys = new Array(size);
    for (var prop in entry) {
      keys.push(prop);
    }
    return keys;
  }
  /** Map Size **/
  this.size = function () {
    return size;
  }
}
var map = new HashMap();
 map.put(0x22408f8 , 179);
 map.put(0x2240940 , 180);
 map.put(0x2240988 , 181);
 map.put(0x22409d0 , 182);
 map.put(0x2240a18 , 56);
 map.put(0x2240a60 , 57);
 map.put(0x2240aa8 , 58);
 map.put(0x2240af0 , 59);
 map.put(0x2240b38 , 60);
 map.put(0x2240b80 , 61);
 map.put(0x2240bc8 , 308);
 map.put(0x2240c10 , 62);
 map.put(0x2240c58 , 63);
 map.put(0x2240ca0 , 64);
 map.put(0x2240ce8 , 143);
 map.put(0x2240d30 , 144);
 map.put(0x2240d78 , 145);
 map.put(0x2240dc0 , 146);
 map.put(0x2240e08 , 147);
 map.put(0x2240e50 , 148);
 map.put(0x2240e98 , 65);
 map.put(0x2240ee0 , 66);
 map.put(0x2240f28 , 67);
 map.put(0x2240f70 , 68);
 map.put(0x2240fb8 , 149);
 map.put(0x2241000 , 69);
 map.put(0x2241048 , 70);
 map.put(0x2241090 , 71);
 map.put(0x22410d8 , 72);
 map.put(0x2241120 , 73);
 map.put(0x2241168 , 194);
 map.put(0x22411b0 , 74);
 map.put(0x22411f8 , 75);
 map.put(0x2241240 , 76);
 map.put(0x2241288 , 77);
 map.put(0x22412d0 , 78);
 map.put(0x2241318 , 330);
 map.put(0x2241360 , 79);
 map.put(0x22413a8 , 80);
 map.put(0x2240598 , 81);
 map.put(0x22413f0 , 82);
 map.put(0x2241438 , 83);
 map.put(0x2241480 , 84);
 map.put(0x22414c8 , 85);
 map.put(0x2241510 , 189);
 map.put(0x2241558 , 86);
 map.put(0x22415a0 , 87);
 map.put(0x22415e8 , 173);
 map.put(0x2241630 , 178);
 map.put(0x2241678 , 176);
 map.put(0x22416c0 , 174);
 map.put(0x2241708 , 175);
 map.put(0x2241750 , 88);
 map.put(0x2241798 , 104);
 map.put(0x22417e0 , 89);
 map.put(0x2241828 , 90);
 map.put(0x2241870 , 91);
 map.put(0x22418b8 , 92);
 map.put(0x2241900 , 93);
 map.put(0x2241948 , 94);
 map.put(0x2241990 , 244);
 map.put(0x22408b0 , 245);
 map.put(0x22419d8 , 95);
 map.put(0x2241a20 , 250);
 map.put(0x2241a68 , 265);
 map.put(0x2241ab0 , 96);
 map.put(0x2241af8 , 97);
 map.put(0x2241b40 , 98);
 map.put(0x2241b88 , 99);
 map.put(0x2241bd0 , 100);
 map.put(0x2241c18 , 101);
 map.put(0x2241c60 , 102);
 map.put(0x2241ca8 , 105);
 map.put(0x2241cf0 , 114);
 map.put(0x2241d38 , 106);
 map.put(0x2241d80 , 103);
 map.put(0x2241dc8 , 107);
 map.put(0x2241e10 , 108);
 map.put(0x2241e58 , 109);
 map.put(0x2241ea0 , 110);
 map.put(0x2241ee8 , 111);
 map.put(0x2241f30 , 112);
 map.put(0x2241f78 , 113);
 map.put(0x2241fc0 , 115);
 map.put(0x2242008 , 116);
 map.put(0x2242050 , 117);
 map.put(0x2242098 , 118);
 map.put(0x22420e0 , 119);
 map.put(0x2242128 , 120);
 map.put(0x2242170 , 121);
 map.put(0x22421b8 , 122);
 map.put(0x2242200 , 256);
 map.put(0x2242248 , 123);
 map.put(0x2242290 , 124);
 map.put(0x22422d8 , 125);
 map.put(0x2242320 , 126);
 map.put(0x2242368 , 127);
 map.put(0x22423b0 , 128);
 map.put(0x22423f8 , 130);
 map.put(0x2242440 , 131);
 map.put(0x2242488 , 132);
 map.put(0x22424d0 , 133);
 map.put(0x2242518 , 309);
 map.put(0x2240790 , 341);
 map.put(0x2242560 , 134);
 map.put(0x22425a8 , 190);
 map.put(0x22425f0 , 171);
 map.put(0x2242638 , 136);
 map.put(0x2242680 , 138);
 map.put(0x22426c8 , 139);
 map.put(0x2242710 , 140);
 map.put(0x2242758 , 141);
 map.put(0x22407d8 , 142);
 map.put(0x22427a0 , 151);
 map.put(0x22427e8 , 311);
 map.put(0x2242830 , 152);
 map.put(0x2242878 , 153);
 map.put(0x22428c0 , 154);
 map.put(0x2242908 , 155);
 map.put(0x2242950 , 156);
 map.put(0x2242998 , 157);
 map.put(0x22429e0 , 158);
 map.put(0x2242a28 , 159);
 map.put(0x2242a70 , 160);
 map.put(0x2242ab8 , 137);
 map.put(0x2242b00 , 161);
 map.put(0x2242b48 , 162);
 map.put(0x2242b90 , 163);
 map.put(0x2242bd8 , 247);
 map.put(0x2242c20 , 164);
 map.put(0x2242c68 , 165);
 map.put(0x2242cb0 , 166);
 map.put(0x2242cf8 , 167);
 map.put(0x2242d40 , 168);
 map.put(0x2242d88 , 183);
 map.put(0x2242dd0 , 169);
 map.put(0x2242e18 , 170);
 map.put(0x2242e60 , 172);
 map.put(0x2242ea8 , 177);
 map.put(0x2242ef0 , 184);
 map.put(0x2242f38 , 196);
 map.put(0x2242f80 , 197);
 map.put(0x2242fc8 , 185);
 map.put(0x2243010 , 191);
 map.put(0x2243058 , 186);
 map.put(0x22430a0 , 187);
 map.put(0x22430e8 , 188);
 map.put(0x2243130 , 193);
 map.put(0x2243178 , 198);
 map.put(0x22431c0 , 195);
 map.put(0x2243208 , 192);
 map.put(0x2243250 , 199);
 map.put(0x2243298 , 201);
 map.put(0x22432e0 , 202);
 map.put(0x2243328 , 208);
 map.put(0x2243370 , 203);
 map.put(0x22433b8 , 204);
 map.put(0x2243400 , 206);
 map.put(0x2243448 , 209);
 map.put(0x2240430 , 207);
 map.put(0x2243490 , 210);
 map.put(0x22434d8 , 211);
 map.put(0x2243520 , 212);
 map.put(0x2243568 , 213);
 map.put(0x22435b0 , 215);
 map.put(0x22435f8 , 216);
 map.put(0x2243640 , 217);
 map.put(0x2243688 , 218);
 map.put(0x22436d0 , 219);
 map.put(0x2243718 , 220);
 map.put(0x2243760 , 221);
 map.put(0x22437a8 , 222);
 map.put(0x22437f0 , 223);
 map.put(0x2243838 , 224);
 map.put(0x2243880 , 243);
 map.put(0x22438c8 , 225);
 map.put(0x2243910 , 226);
 map.put(0x2243958 , 246);
 map.put(0x22439a0 , 259);
 map.put(0x22439e8 , 227);
 map.put(0x2243a30 , 228);
 map.put(0x22403e8 , 229);
 map.put(0x2243a78 , 230);
 map.put(0x2243ac0 , 231);
 map.put(0x2243b08 , 232);
 map.put(0x2243b50 , 234);
 map.put(0x2243b98 , 235);
 map.put(0x2243be0 , 248);
 map.put(0x2243c28 , 312);
 map.put(0x2243c70 , 236);
 map.put(0x2243cb8 , 238);
 map.put(0x2243d00 , 237);
 map.put(0x2243d48 , 252);
 map.put(0x2243d90 , 239);
 map.put(0x2243dd8 , 240);
 map.put(0x2243e20 , 251);
 map.put(0x2243e68 , 253);
 map.put(0x2243eb0 , 241);
 map.put(0x2240478 , 242);
 map.put(0x2243ef8 , 254);
 map.put(0x2243f40 , 249);
 map.put(0x2243f88 , 255);
 map.put(0x2243fd0 , 257);
 map.put(0x2244018 , 258);
 map.put(0x2244060 , 200);
 map.put(0x22440a8 , 260);
 map.put(0x22404c0 , 261);
 map.put(0x22440f0 , 262);
 map.put(0x2240508 , 263);
 map.put(0x2244138 , 264);
 map.put(0x2244180 , 273);
 map.put(0x22441c8 , 129);
 map.put(0x2244210 , 267);
 map.put(0x2244258 , 268);
 map.put(0x22442a0 , 269);
 map.put(0x22442e8 , 270);
 map.put(0x2244330 , 271);
 map.put(0x2244378 , 272);
 map.put(0x22443c0 , 274);
 map.put(0x2244408 , 275);
 map.put(0x2244450 , 276);
 map.put(0x2244498 , 277);
 map.put(0x22444e0 , 278);
 map.put(0x2244528 , 335);
 map.put(0x2244570 , 279);
 map.put(0x22445b8 , 280);
 map.put(0x2244600 , 281);
 map.put(0x2244648 , 282);
 map.put(0x2244690 , 283);
 map.put(0x22446d8 , 284);
 map.put(0x2244720 , 285);
 map.put(0x2244768 , 286);
 map.put(0x22447b0 , 327);
 map.put(0x22447f8 , 328);
 map.put(0x2244840 , 329);
 map.put(0x2244888 , 287);
 map.put(0x22448d0 , 288);
 map.put(0x2244918 , 289);
 map.put(0x2244960 , 290);
 map.put(0x22449a8 , 291);
 map.put(0x22449f0 , 292);
 map.put(0x2240550 , 293);
 map.put(0x2244a38 , 297);
 map.put(0x2244a80 , 294);
 map.put(0x2244ac8 , 295);
 map.put(0x2244b10 , 296);
 map.put(0x2244b58 , 298);
 map.put(0x2244ba0 , 299);
 map.put(0x2244be8 , 300);
 map.put(0x2244c30 , 301);
 map.put(0x2244c78 , 205);
 map.put(0x2244cc0 , 302);
 map.put(0x2244d08 , 303);
 map.put(0x2244d50 , 304);
 map.put(0x2244d98 , 305);
 map.put(0x2244de0 , 306);
 map.put(0x22406b8 , 307);
 map.put(0x2244e28 , 310);
 map.put(0x2244e70 , 313);
 map.put(0x2244eb8 , 314);
 map.put(0x2244f00 , 315);
 map.put(0x2244f48 , 316);
 map.put(0x2244f90 , 317);
 map.put(0x2244fd8 , 318);
 map.put(0x2245020 , 319);
 map.put(0x2245068 , 320);
 map.put(0x22450b0 , 321);
 map.put(0x22450f8 , 322);
 map.put(0x2245140 , 323);
 map.put(0x2245188 , 324);
 map.put(0x22451d0 , 331);
 map.put(0x2245218 , 339);
 map.put(0x2245260 , 333);
 map.put(0x22452a8 , 325);
 map.put(0x22452f0 , 332);
 map.put(0x2245338 , 336);
 map.put(0x2245380 , 334);
 map.put(0x22453c8 , 337);
 map.put(0x2245410 , 338);
 map.put(0x2245458 , 340);
 map.put(0x2240700 , 342);
 map.put(0x22454a0 , 343);
 map.put(0x22454e8 , 344);
 map.put(0x2240748 , 345);
 map.put(0x2245530 , 346);
 map.put(0x2245578 , 347);
 map.put(0x22455c0 , 348);
 map.put(0x2245608 , 349);
 map.put(0x2245650 , 350);
 map.put(0x2245698 , 351);
 map.put(0x22456e0 , 352);
 map.put(0x2245728 , 353);
 map.put(0x2245770 , 354);
 map.put(0x22457b8 , 355);
 map.put(0x2245800 , 357);
 map.put(0x2245848 , 356);
 map.put(0x2245890 , 150);
 map.put(0x22458d8 , 358);
 map.put(0x2240868 , 359);
 map.put(0x2245920 , 360);
 map.put(0x2245968 , 361);
 map.put(0x2240820 , 362);
 map.put(0x22459b0 , 363);
 map.put(0x22459f8 , 364);
 map.put(0x2245a40 , 365);
 map.put(0x2245a88 , 366);
 map.put(0x2245ad0 , 367);
 map.put(0x2245b18 , 368);
 map.put(0x2245b60 , 369);
 map.put(0x2245ba8 , 370);
 map.put(0x2245bf0 , 371);
 map.put(0x2245c38 , 372);
 map.put(0x2245c80 , 373);
 map.put(0x2245cc8 , 374);
 map.put(0x2245d10 , 375);
 map.put(0x2245d58 , 376);
 map.put(0x2245da0 , 377);
 map.put(0x2245de8 , 378);
 map.put(0x2245e30 , 380);
 map.put(0x2245e78 , 381);
 map.put(0x2245ec0 , 382);
 map.put(0x2245f08 , 383);
 map.put(0x2245f50 , 384);
 map.put(0x2245f98 , 385);
 map.put(0x2245fe0 , 386);
 map.put(0x2246028 , 387);
 map.put(0x2246070 , 388);
 map.put(0x22460b8 , 389);
 map.put(0x2246100 , 390);
 map.put(0x2246148 , 391);
 map.put(0x2246190 , 392);
 map.put(0x22461d8 , 395);
 map.put(0x2246220 , 396);
 map.put(0x2246268 , 397);
 map.put(0x22462b0 , 398);
 map.put(0x22462f8 , 399);
 map.put(0x2246340 , 400);
 map.put(0x2246388 , 403);
 map.put(0x22463d0 , 404);
 map.put(0x2246418 , 405);
 map.put(0x2246460 , 406);
 map.put(0x22464a8 , 407);
 map.put(0x22464f0 , 408);
 map.put(0x2246538 , 412);
 map.put(0x2246580 , 393);
 map.put(0x22465c8 , 394);
 map.put(0x2246610 , 409);
 map.put(0x2246658 , 411);
 map.put(0x22466a0 , 413);
 map.put(0x22466e8 , 414);
 map.put(0x2246730 , 415);
 map.put(0x2246778 , 416);
 map.put(0x22467c0 , 417);
 map.put(0x2246808 , 418);
 map.put(0x2246850 , 419);
 map.put(0x2246898 , 420);
 map.put(0x22468e0 , 421);
 map.put(0x2246928 , 422);
 map.put(0x2246970 , 423);
 map.put(0x22469b8 , 424);
 map.put(0x2246a00 , 425);
 map.put(0x2246a48 , 426);
 map.put(0x2246a90 , 427);
 map.put(0x2246ad8 , 428);
 map.put(0x2246b20 , 429);
 map.put(0x2246b68 , 430);
 map.put(0x2246bb0 , 431);
 map.put(0x2246bf8 , 432);
 map.put(0x2246c40 , 433);
 map.put(0x2246c88 , 434);
 map.put(0x2246cd0 , 435);
 map.put(0x2246d18 , 436);
 map.put(0x2246d60 , 437);
 map.put(0x2246da8 , 401);
 map.put(0x2246df0 , 402);
 map.put(0x2246e38 , 438);
 map.put(0x2246e80 , 439);
 map.put(0x2246ec8 , 440);
 map.put(0x2246f10 , 441);
 map.put(0x2246f58 , 442);
 map.put(0x2246fa0 , 443);
 map.put(0x2246fe8 , 444);
 map.put(0x2247030 , 445);
 map.put(0x2247078 , 446);
 map.put(0x22470c0 , 447);
 map.put(0x2247108 , 448);
 map.put(0x2247150 , 449);
 map.put(0x2247198 , 450);
 map.put(0x22471e0 , 451);
 map.put(0x2247228 , 453);
 map.put(0x2247270 , 454);
 map.put(0x22472b8 , 472);
 map.put(0x2247300 , 474);
 map.put(0x2247348 , 475);
 map.put(0x2247390 , 476);
 map.put(0x22473d8 , 455);
 map.put(0x22405e0 , 266);
 map.put(0x2247420 , 456);
 map.put(0x2247468 , 457);
 map.put(0x2240628 , 478);
 map.put(0x2240670 , 479);
 map.put(0x22474b0 , 480);
 map.put(0x22474f8 , 481);
 map.put(0x2247540 , 458);
 map.put(0x2247588 , 465);
 map.put(0x22475d0 , 459);
 map.put(0x2247618 , 461);
 map.put(0x2247660 , 462);
 map.put(0x22476a8 , 463);
 map.put(0x22476f0 , 464);
 map.put(0x2247738 , 466);
 map.put(0x2247780 , 467);
 map.put(0x2246da8 , 401);
 map.put(0x2246df0 , 402);
 map.put(0x22477c8 , 468);
 map.put(0x2247810 , 469);
 map.put(0x2246c88 , 434);
 map.put(0x2247858 , 460);
 map.put(0x22478a0 , 470);
 map.put(0x22478e8 , 485);
 map.put(0x2247930 , 486);
 map.put(0x2247978 , 487);
 map.put(0x22479c0 , 488);
 map.put(0x22447b0 , 327);
 map.put(0x22447f8 , 328);
 map.put(0x2247540 , 458);
 map.put(0x2242b48 , 162);
 map.put(0x2247a08 , 233);
 map.put(0x2247a50 , 410);
 map.put(0x2243eb0 , 241);
 map.put(0x2241a20 , 250);
 map.put(0x2241a68 , 265);
 map.put(0x2241318 , 330);
 map.put(0x2243e68 , 253);
 map.put(0x2243d48 , 252);
 map.put(0x2243f40 , 249);
 map.put(0x2243c70 , 236);
 map.put(0x22440a8 , 260);
 map.put(0x2243f88 , 255);
 map.put(0x2244258 , 268);
 map.put(0x22415a0 , 87);
 map.put(0x2244570 , 279);
 map.put(0x2244528 , 335);
 map.put(0x2244ac8 , 295);
 map.put(0x2244b10 , 296);
 map.put(0x2244a80 , 294);
 map.put(0x22450b0 , 321);
 map.put(0x2242cf8 , 167);
 map.put(0x22452f0 , 332);
 map.put(0x2245380 , 334);
 map.put(0x2245458 , 340);
 map.put(0x2240700 , 342);
 map.put(0x2240748 , 345);
 map.put(0x2245578 , 347);
 map.put(0x22455c0 , 348);
 map.put(0x2245530 , 346);
 map.put(0x22418b8 , 92);
 map.put(0x2241af8 , 97);
 map.put(0x2240868 , 359);
 map.put(0x2245920 , 360);
 map.put(0x2247a98 , 379);
 map.put(0x2245fe0 , 386);
 map.put(0x2245f50 , 384);
 map.put(0x2246028 , 387);
 map.put(0x2246388 , 403);
 map.put(0x22464f0 , 408);
 map.put(0x2246808 , 418);
 map.put(0x2246898 , 420);
 map.put(0x2246ec8 , 440);
 map.put(0x2247030 , 445);
 map.put(0x22470c0 , 447);
 map.put(0x2246b20 , 429);
 map.put(0x2240ee0 , 66);
 map.put(0x2247270 , 454);
 map.put(0x2240ee0 , 66);
 map.put(0x2247ae0 , 452);
 map.put(0x2242518 , 309);
 map.put(0x2247b28 , 482);
 map.put(0x2247b70 , 483);
 map.put(0x2247bb8 , 484);
 map.put(0x22403e8 , 229);
 //sub_42CDC0
 map.put(0x2240430 , 207);
 map.put(0x2240478 , 242);
 map.put(0x22404c0 , 261);
 map.put(0x2240508 , 263);
 map.put(0x2240550 , 293);
 map.put(0x2240598 , 81);
 map.put(0x22405e0 , 266);
 map.put(0x2240628 , 478);
 map.put(0x2240670 , 479);
 map.put(0x22406b8 , 307);
 map.put(0x2240700 , 342);
 map.put(0x2240748 , 345);
 map.put(0x2240790 , 341);
 map.put(0x22407d8 , 142);
 map.put(0x2240820 , 362);
 map.put(0x2240868 , 359);
 map.put(0x22408b0 , 245);
 map.put(0x223ffc4 , 492);
 map.put(0x22400d4 , 496);
//sub_E60680
map.put(0x225c9ec,496); 
map.put(0x225c590,64); //t
map.put(0x225c5e0,73); 
map.put(0x225c630,85); 
map.put(0x225c680,87); 
map.put(0x225c6d0,88); 
map.put(0x225c720,104); 
map.put(0x225c770,90); 
map.put(0x225c7c0,94); //t
map.put(0x225ccb0,490); 
map.put(0x225cc60,491); 
map.put(0x225cd50,133); 
map.put(0x225cda0,134); 
map.put(0x225cdf0,190); 
map.put(0x225ce40,226); 
map.put(0x225ce90,11); 
map.put(0x225cee0,10); 
map.put(0x225cf30,235); 
map.put(0x225cd00,489); 
map.put(0x225cf80,160); 
map.put(0x225cfd0,244); 
map.put(0x225d020,245); 
map.put(0x225d070,246); 
map.put(0x225d0c0,259); 
map.put(0x225d110,269); 
map.put(0x225d160,184);
map.put(0x225d1b0,309); 
map.put(0x225d200,341); 
map.put(0x225d250,344); 
map.put(0x225d2a0,142); 
map.put(0x225d2f0,368); 
map.put(0x225d340,478); 
map.put(0x225ca80,497); 
map.put(0x225d390,404); 
map.put(0x225d3e0,406); 
map.put(0x225d430,270); 
map.put(0x225d480,49); 
map.put(0x225d4d0,48);
function sub_E8C3D0(/*  */) {
  mplew.writeInt("v2");
  mplew.writeInt("");
  mplew.writeInt("");
  result = mplew.writeInt("result");
  if (result > 0) {
   // v5 = (v2 + 3);
    v10 = result;
    do {
      result = mplew.writeInt("result");
      v10 = (v10 - 1);
    }
    while (v10);
  }
  return result;
}
function sub_43E440() {
  v3 = mplew.writeInt("v3");
  v4 = mplew.writeInt("v4");
}
function sub_42CAD0() {
  v1 = 0;
  v11 = 0;
  v2 = 0;
  v3 = 5;
  while (1) {
    v4 = mplew.write("v4");
    if (v4 >= 0)
      break;
    if (--v3 <= 0) {
      //CxxThrowException(v7, 0x1FD9D68);
    }
    v1 += 7;
  }
  return;
}


function Check_Buff(mask, Key) {
  return sub_B7C3F0(mask, map.get(Key))
}
// function sub_42CDC0(mask) {
//   var v1 = 0;
//   while (!mask[v1]) {
//     if (++v1 >= 14) {
//       if (!mask[14])
//         return 0;
//       return 1;
//     }
//   }
//   return 1;
// }
function writeMaskFromList(mask, len) {
  var MAX_MOBSTAT = parseInt(len / 4);
  for (var i = 0; i < MAX_MOBSTAT; i++) {
    mask[i] = mplew.writeInt("mask[(" + i + ")]");
  }
}
function sub_B7C3F0(uFlag, a2) {
  var result; // eax@2
  if (a2 < 0x220) {
    result = (uFlag[a2 >> 5] >> (31 - (a2 & 0x1F))) & 1;
  }
  else {
    result = 0;
  }
  return result;
}
// function sub_452720() {
mplew.StartNode("mask");
var mask = Array();
writeMaskFromList(mask, 0x44);
mplew.EndNode(false);
for (var index = 0; index < 0x220; index++) {
  if (sub_B7C3F0(mask, index)) {
   // str = str + " " + index + " ";
   mplew.AddComment("--- Buff " + index.toString(10) + "---");
    // console.log("-------" + index.toString(10) + "-------");
  }
}
mplew.StartNode("sub_452720");
if (Check_Buff(mask, 0x22408F8)) {
  mplew.StartNode("Mask - " + map.get(0x22408F8));
  if (sub_42CDC0(mask)) {
    v4 = mplew.writeInt("v4");
  }
  else {
    v5 = mplew.writeShort("v5");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240940)) {
  mplew.StartNode("Mask - " + map.get(0x2240940));
  if (sub_42CDC0(mask)) {
    v10 = mplew.writeInt("v10");
  }
  else {
    v11 = mplew.writeShort("v11");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240988)) {
  mplew.StartNode("Mask - " + map.get(0x2240988));
  if (sub_42CDC0(mask)) {
    v16 = mplew.writeInt("v16");
  }
  else {
    v17 = mplew.writeShort("v17");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22409D0)) {
  mplew.StartNode("Mask - " + map.get(0x22409D0));
  if (sub_42CDC0(mask)) {
    v22 = mplew.writeInt("v22");
  }
  else {
    v23 = mplew.writeShort("v23");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240A18)) {
  mplew.StartNode("Mask - " + map.get(0x2240A18));
  if (sub_42CDC0(mask)) {
    v28 = mplew.writeInt("v28");
  }
  else {
    v29 = mplew.writeShort("v29");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240A60)) {
  mplew.StartNode("Mask - " + map.get(0x2240A60));
  if (sub_42CDC0(mask)) {
    v34 = mplew.writeInt("v34");
  }
  else {
    v35 = mplew.writeShort("v35");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240AA8)) {
  mplew.StartNode("Mask - " + map.get(0x2240AA8));
  if (sub_42CDC0(mask)) {
    v40 = mplew.writeInt("v40");
  }
  else {
    v41 = mplew.writeShort("v41");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240AF0)) {
  mplew.StartNode("Mask - " + map.get(0x2240AF0));
  if (sub_42CDC0(mask)) {
    v46 = mplew.writeInt("v46");
  }
  else {
    v47 = mplew.writeShort("v47");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240B38)) {
  mplew.StartNode("Mask - " + map.get(0x2240B38));
  if (sub_42CDC0(mask)) {
    v52 = mplew.writeInt("v52");
  }
  else {
    v53 = mplew.writeShort("v53");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240B80)) {
  mplew.StartNode("Mask - " + map.get(0x2240B80));
  if (sub_42CDC0(mask)) {
    v58 = mplew.writeInt("v58");
  }
  else {
    v59 = mplew.writeShort("v59");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240BC8)) {
  mplew.StartNode("Mask - " + map.get(0x2240BC8));
  if (sub_42CDC0(mask)) {
    v64 = mplew.writeInt("v64");
  }
  else {
    v65 = mplew.writeShort("v65");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240C10)) {
  mplew.StartNode("Mask - " + map.get(0x2240C10));
  if (sub_42CDC0(mask)) {
    v70 = mplew.writeInt("v70");
  }
  else {
    v71 = mplew.writeShort("v71");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240C58)) {
  mplew.StartNode("Mask - " + map.get(0x2240C58));
  if (sub_42CDC0(mask)) {
    v76 = mplew.writeInt("v76");
  }
  else {
    v77 = mplew.writeShort("v77");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240CA0)) {
  mplew.StartNode("Mask - " + map.get(0x2240CA0));
  if (sub_42CDC0(mask)) {
    v82 = mplew.writeInt("v82");
  }
  else {
    v83 = mplew.writeShort("v83");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240CE8)) {
  mplew.StartNode("Mask - " + map.get(0x2240CE8));
  if (sub_42CDC0(mask)) {
    v88 = mplew.writeInt("v88");
  }
  else {
    v89 = mplew.writeShort("v89");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240D30)) {
  mplew.StartNode("Mask - " + map.get(0x2240D30));
  if (sub_42CDC0(mask)) {
    v94 = mplew.writeInt("v94");
  }
  else {
    v95 = mplew.writeShort("v95");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240D78)) {
  mplew.StartNode("Mask - " + map.get(0x2240D78));
  if (sub_42CDC0(mask)) {
    v100 = mplew.writeInt("v100");
  }
  else {
    v101 = mplew.writeShort("v101");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240DC0)) {
  mplew.StartNode("Mask - " + map.get(0x2240DC0));
  if (sub_42CDC0(mask)) {
    v106 = mplew.writeInt("v106");
  }
  else {
    v107 = mplew.writeShort("v107");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240E08)) {
  mplew.StartNode("Mask - " + map.get(0x2240E08));
  if (sub_42CDC0(mask)) {
    v112 = mplew.writeInt("v112");
  }
  else {
    v113 = mplew.writeShort("v113");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240E50)) {
  mplew.StartNode("Mask - " + map.get(0x2240E50));
  if (sub_42CDC0(mask)) {
    v118 = mplew.writeInt("v118");
  }
  else {
    v119 = mplew.writeShort("v119");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
// if (Check_Buff(mask, 160)) {
//   mplew.StartNode("Mask   " + map.get(160));
//   if (sub_42CDC0(mask)) {
//     v118 = mplew.writeInt("v118");
//   }
//   else {
//     v119 = mplew.writeShort("v119");
//   }
//   v4831 = mplew.writeInt("v4831");
//   v4832 = mplew.writeInt("v4832");
//   mplew.EndNode(false);
// }
if (Check_Buff(mask, 0x2240E98)) {
  mplew.StartNode("Mask - " + map.get(0x2240E98));
  if (sub_42CDC0(mask)) {
    v124 = mplew.writeInt("v124");
  }
  else {
    v125 = mplew.writeShort("v125");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240EE0)) {
  mplew.StartNode("Mask - " + map.get(0x2240EE0));
  if (sub_42CDC0(mask)) {
    v130 = mplew.writeInt("v130");
  }
  else {
    v131 = mplew.writeShort("v131");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240F28)) {
  mplew.StartNode("Mask - " + map.get(0x2240F28));
  if (sub_42CDC0(mask)) {
    v136 = mplew.writeInt("v136");
  }
  else {
    v137 = mplew.writeShort("v137");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240F70)) {
  mplew.StartNode("Mask - " + map.get(0x2240F70));
  if (sub_42CDC0(mask)) {
    v142 = mplew.writeInt("v142");
  }
  else {
    v143 = mplew.writeShort("v143");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240FB8)) {
  mplew.StartNode("Mask - " + map.get(0x2240FB8));
  if (sub_42CDC0(mask)) {
    v148 = mplew.writeInt("v148");
  }
  else {
    v149 = mplew.writeShort("v149");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241000)) {
  mplew.StartNode("Mask - " + map.get(0x2241000));
  if (sub_42CDC0(mask)) {
    v154 = mplew.writeInt("v154");
  }
  else {
    v155 = mplew.writeShort("v155");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241048)) {
  mplew.StartNode("Mask - " + map.get(0x2241048));
  if (sub_42CDC0(mask)) {
    v160 = mplew.writeInt("v160");
  }
  else {
    v161 = mplew.writeShort("v161");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241090)) {
  mplew.StartNode("Mask - " + map.get(0x2241090));
  if (sub_42CDC0(mask)) {
    v166 = mplew.writeInt("v166");
  }
  else {
    v167 = mplew.writeShort("v167");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22410D8)) {
  mplew.StartNode("Mask - " + map.get(0x22410D8));
  if (sub_42CDC0(mask)) {
    v172 = mplew.writeInt("v172");
  }
  else {
    v173 = mplew.writeShort("v173");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241120)) {
  mplew.StartNode("Mask - " + map.get(0x2241120));
  if (sub_42CDC0(mask)) {
    v178 = mplew.writeInt("v178");
  }
  else {
    v179 = mplew.writeShort("v179");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241168)) {
  mplew.StartNode("Mask - " + map.get(0x2241168));
  if (sub_42CDC0(mask)) {
    v184 = mplew.writeInt("v184");
  }
  else {
    v185 = mplew.writeShort("v185");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22411B0)) {
  mplew.StartNode("Mask - " + map.get(0x22411B0));
  if (sub_42CDC0(mask)) {
    v190 = mplew.writeInt("v190");
  }
  else {
    v191 = mplew.writeShort("v191");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22411F8)) {
  mplew.StartNode("Mask - " + map.get(0x22411F8));
  if (sub_42CDC0(mask)) {
    v196 = mplew.writeInt("v196");
  }
  else {
    v197 = mplew.writeShort("v197");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241240)) {
  mplew.StartNode("Mask - " + map.get(0x2241240));
  if (sub_42CDC0(mask)) {
    v202 = mplew.writeInt("v202");
  }
  else {
    v203 = mplew.writeShort("v203");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241288)) {
  mplew.StartNode("Mask - " + map.get(0x2241288));
  if (sub_42CDC0(mask)) {
    v208 = mplew.writeInt("v208");
  }
  else {
    v209 = mplew.writeShort("v209");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22412D0)) {
  mplew.StartNode("Mask - " + map.get(0x22412D0));
  if (sub_42CDC0(mask)) {
    v214 = mplew.writeInt("v214");
  }
  else {
    v215 = mplew.writeShort("v215");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241318)) {
  mplew.StartNode("Mask - " + map.get(0x2241318));
  if (sub_42CDC0(mask)) {
    v220 = mplew.writeInt("v220");
  }
  else {
    v221 = mplew.writeShort("v221");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241360)) {
  mplew.StartNode("Mask - " + map.get(0x2241360));
  if (sub_42CDC0(mask)) {
    v226 = mplew.writeInt("v226");
  }
  else {
    v227 = mplew.writeShort("v227");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22413A8)) {
  mplew.StartNode("Mask - " + map.get(0x22413A8));
  if (sub_42CDC0(mask)) {
    v232 = mplew.writeInt("v232");
  }
  else {
    v233 = mplew.writeShort("v233");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240598)) {
  mplew.StartNode("Mask - " + map.get(0x2240598));
  if (sub_42CDC0(mask)) {
    v238 = mplew.writeInt("v238");
  }
  else {
    v239 = mplew.writeShort("v239");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22413F0)) {
  mplew.StartNode("Mask - " + map.get(0x22413F0));
  if (sub_42CDC0(mask)) {
    v244 = mplew.writeInt("v244");
  }
  else {
    v245 = mplew.writeShort("v245");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241438)) {
  mplew.StartNode("Mask - " + map.get(0x2241438));
  if (sub_42CDC0(mask)) {
    v250 = mplew.writeInt("v250");
  }
  else {
    v251 = mplew.writeShort("v251");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241480)) {
  mplew.StartNode("Mask - " + map.get(0x2241480));
  if (sub_42CDC0(mask)) {
    v256 = mplew.writeInt("v256");
  }
  else {
    v257 = mplew.writeShort("v257");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22414C8)) {
  mplew.StartNode("Mask - " + map.get(0x22414C8));
  if (sub_42CDC0(mask)) {
    v262 = mplew.writeInt("v262");
  }
  else {
    v263 = mplew.writeShort("v263");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241510)) {
  mplew.StartNode("Mask - " + map.get(0x2241510));
  if (sub_42CDC0(mask)) {
    v268 = mplew.writeInt("v268");
  }
  else {
    v269 = mplew.writeShort("v269");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241558)) {
  mplew.StartNode("Mask - " + map.get(0x2241558));
  if (sub_42CDC0(mask)) {
    v274 = mplew.writeInt("v274");
  }
  else {
    v275 = mplew.writeShort("v275");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22415A0)) {
  mplew.StartNode("Mask - " + map.get(0x22415A0));
  if (sub_42CDC0(mask)) {
    v280 = mplew.writeInt("v280");
  }
  else {
    v281 = mplew.writeShort("v281");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22415E8)) {
  mplew.StartNode("Mask - " + map.get(0x22415E8));
  if (sub_42CDC0(mask)) {
    v286 = mplew.writeInt("v286");
  }
  else {
    v287 = mplew.writeShort("v287");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241630)) {
  mplew.StartNode("Mask - " + map.get(0x2241630));
  if (sub_42CDC0(mask)) {
    v292 = mplew.writeInt("v292");
  }
  else {
    v293 = mplew.writeShort("v293");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241678)) {
  mplew.StartNode("Mask - " + map.get(0x2241678));
  if (sub_42CDC0(mask)) {
    v298 = mplew.writeInt("v298");
  }
  else {
    v299 = mplew.writeShort("v299");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22416C0)) {
  mplew.StartNode("Mask - " + map.get(0x22416C0));
  if (sub_42CDC0(mask)) {
    v304 = mplew.writeInt("v304");
  }
  else {
    v305 = mplew.writeShort("v305");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241708)) {
  mplew.StartNode("Mask - " + map.get(0x2241708));
  if (sub_42CDC0(mask)) {
    v310 = mplew.writeInt("v310");
  }
  else {
    v311 = mplew.writeShort("v311");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241750)) {
  mplew.StartNode("Mask - " + map.get(0x2241750));
  if (sub_42CDC0(mask)) {
    v316 = mplew.writeInt("v316");
  }
  else {
    v317 = mplew.writeShort("v317");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241798)) {
  mplew.StartNode("Mask - " + map.get(0x2241798));
  if (sub_42CDC0(mask)) {
    v322 = mplew.writeInt("v322");
  }
  else {
    v323 = mplew.writeShort("v323");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22417E0)) {
  mplew.StartNode("Mask - " + map.get(0x22417E0));
  if (sub_42CDC0(mask)) {
    v328 = mplew.writeInt("v328");
  }
  else {
    v329 = mplew.writeShort("v329");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241828)) {
  mplew.StartNode("Mask - " + map.get(0x2241828));
  if (sub_42CDC0(mask)) {
    v334 = mplew.writeInt("v334");
  }
  else {
    v335 = mplew.writeShort("v335");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241870)) {
  mplew.StartNode("Mask - " + map.get(0x2241870));
  if (sub_42CDC0(mask)) {
    v340 = mplew.writeInt("v340");
  }
  else {
    v341 = mplew.writeShort("v341");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22418B8)) {
  mplew.StartNode("Mask - " + map.get(0x22418B8));
  if (sub_42CDC0(mask)) {
    v346 = mplew.writeInt("v346");
  }
  else {
    v347 = mplew.writeShort("v347");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241900)) {
  mplew.StartNode("Mask - " + map.get(0x2241900));
  if (sub_42CDC0(mask)) {
    v352 = mplew.writeInt("v352");
  }
  else {
    v353 = mplew.writeShort("v353");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241948)) {
  mplew.StartNode("Mask - " + map.get(0x2241948));
  if (sub_42CDC0(mask)) {
    v358 = mplew.writeInt("v358");
  }
  else {
    v359 = mplew.writeShort("v359");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241990)) {
  mplew.StartNode("Mask - " + map.get(0x2241990));
  if (sub_42CDC0(mask)) {
    v364 = mplew.writeInt("v364");
  }
  else {
    v365 = mplew.writeShort("v365");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22408B0)) {
  mplew.StartNode("Mask - " + map.get(0x22408B0));
  if (sub_42CDC0(mask)) {
    v370 = mplew.writeInt("v370");
  }
  else {
    v371 = mplew.writeShort("v371");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22419D8)) {
  mplew.StartNode("Mask - " + map.get(0x22419D8));
  if (sub_42CDC0(mask)) {
    v376 = mplew.writeInt("v376");
  }
  else {
    v377 = mplew.writeShort("v377");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241A20)) {
  mplew.StartNode("Mask - " + map.get(0x2241A20));
  if (sub_42CDC0(mask)) {
    v382 = mplew.writeInt("v382");
  }
  else {
    v383 = mplew.writeShort("v383");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241A68)) {
  mplew.StartNode("Mask - " + map.get(0x2241A68));
  if (sub_42CDC0(mask)) {
    v388 = mplew.writeInt("v388");
  }
  else {
    v389 = mplew.writeShort("v389");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241AB0)) {
  mplew.StartNode("Mask - " + map.get(0x2241AB0));
  if (sub_42CDC0(mask)) {
    v394 = mplew.writeInt("v394");
  }
  else {
    v395 = mplew.writeShort("v395");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241AF8)) {
  mplew.StartNode("Mask - " + map.get(0x2241AF8));
  if (sub_42CDC0(mask)) {
    v400 = mplew.writeInt("v400");
  }
  else {
    v401 = mplew.writeShort("v401");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241B40)) {
  mplew.StartNode("Mask - " + map.get(0x2241B40));
  if (sub_42CDC0(mask)) {
    v406 = mplew.writeInt("v406");
  }
  else {
    v407 = mplew.writeShort("v407");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241B88)) {
  mplew.StartNode("Mask - " + map.get(0x2241B88));
  if (sub_42CDC0(mask)) {
    v412 = mplew.writeInt("v412");
  }
  else {
    v413 = mplew.writeShort("v413");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241BD0)) {
  mplew.StartNode("Mask - " + map.get(0x2241BD0));
  if (sub_42CDC0(mask)) {
    v418 = mplew.writeInt("v418");
  }
  else {
    v419 = mplew.writeShort("v419");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241C18)) {
  mplew.StartNode("Mask - " + map.get(0x2241C18));
  if (sub_42CDC0(mask)) {
    v424 = mplew.writeInt("v424");
  }
  else {
    v425 = mplew.writeShort("v425");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241C60)) {
  mplew.StartNode("Mask - " + map.get(0x2241C60));
  if (sub_42CDC0(mask)) {
    v430 = mplew.writeInt("v430");
  }
  else {
    v431 = mplew.writeShort("v431");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241CA8)) {
  mplew.StartNode("Mask - " + map.get(0x2241CA8));
  if (sub_42CDC0(mask)) {
    v436 = mplew.writeInt("v436");
  }
  else {
    v437 = mplew.writeShort("v437");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241CF0)) {
  mplew.StartNode("Mask - " + map.get(0x2241CF0));
  if (sub_42CDC0(mask)) {
    v442 = mplew.writeInt("v442");
  }
  else {
    v443 = mplew.writeShort("v443");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241D38)) {
  mplew.StartNode("Mask - " + map.get(0x2241D38));
  if (sub_42CDC0(mask)) {
    v448 = mplew.writeInt("v448");
  }
  else {
    v449 = mplew.writeShort("v449");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241D80)) {
  mplew.StartNode("Mask - " + map.get(0x2241D80));
  if (sub_42CDC0(mask)) {
    v454 = mplew.writeInt("v454");
  }
  else {
    v455 = mplew.writeShort("v455");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241DC8)) {
  mplew.StartNode("Mask - " + map.get(0x2241DC8));
  if (sub_42CDC0(mask)) {
    v460 = mplew.writeInt("v460");
  }
  else {
    v461 = mplew.writeShort("v461");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241E10)) {
  mplew.StartNode("Mask - " + map.get(0x2241E10));
  if (sub_42CDC0(mask)) {
    v466 = mplew.writeInt("v466");
  }
  else {
    v467 = mplew.writeShort("v467");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241E58)) {
  mplew.StartNode("Mask - " + map.get(0x2241E58));
  if (sub_42CDC0(mask)) {
    v472 = mplew.writeInt("v472");
  }
  else {
    v473 = mplew.writeShort("v473");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241EA0)) {
  mplew.StartNode("Mask - " + map.get(0x2241EA0));
  if (sub_42CDC0(mask)) {
    v478 = mplew.writeInt("v478");
  }
  else {
    v479 = mplew.writeShort("v479");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241EE8)) {
  mplew.StartNode("Mask - " + map.get(0x2241EE8));
  if (sub_42CDC0(mask)) {
    v484 = mplew.writeInt("v484");
  }
  else {
    v485 = mplew.writeShort("v485");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241F30)) {
  mplew.StartNode("Mask - " + map.get(0x2241F30));
  if (sub_42CDC0(mask)) {
    v490 = mplew.writeInt("v490");
  }
  else {
    v491 = mplew.writeShort("v491");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241F78)) {
  mplew.StartNode("Mask - " + map.get(0x2241F78));
  if (sub_42CDC0(mask)) {
    v496 = mplew.writeInt("v496");
  }
  else {
    v497 = mplew.writeShort("v497");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241FC0)) {
  mplew.StartNode("Mask - " + map.get(0x2241FC0));
  if (sub_42CDC0(mask)) {
    v502 = mplew.writeInt("v502");
  }
  else {
    v503 = mplew.writeShort("v503");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242008)) {
  mplew.StartNode("Mask - " + map.get(0x2242008));
  if (sub_42CDC0(mask)) {
    v508 = mplew.writeInt("v508");
  }
  else {
    v509 = mplew.writeShort("v509");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242050)) {
  mplew.StartNode("Mask - " + map.get(0x2242050));
  if (sub_42CDC0(mask)) {
    v514 = mplew.writeInt("v514");
  }
  else {
    v515 = mplew.writeShort("v515");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242098)) {
  mplew.StartNode("Mask - " + map.get(0x2242098));
  if (sub_42CDC0(mask)) {
    v520 = mplew.writeInt("v520");
  }
  else {
    v521 = mplew.writeShort("v521");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22420E0)) {
  mplew.StartNode("Mask - " + map.get(0x22420E0));
  if (sub_42CDC0(mask)) {
    v526 = mplew.writeInt("v526");
  }
  else {
    v527 = mplew.writeShort("v527");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242128)) {
  mplew.StartNode("Mask - " + map.get(0x2242128));
  if (sub_42CDC0(mask)) {
    v532 = mplew.writeInt("v532");
  }
  else {
    v533 = mplew.writeShort("v533");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242170)) {
  mplew.StartNode("Mask - " + map.get(0x2242170));
  if (sub_42CDC0(mask)) {
    v538 = mplew.writeInt("v538");
  }
  else {
    v539 = mplew.writeShort("v539");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22421B8)) {
  mplew.StartNode("Mask - " + map.get(0x22421B8));
  if (sub_42CDC0(mask)) {
    v544 = mplew.writeInt("v544");
  }
  else {
    v545 = mplew.writeShort("v545");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242200)) {
  mplew.StartNode("Mask - " + map.get(0x2242200));
  if (sub_42CDC0(mask)) {
    v550 = mplew.writeInt("v550");
  }
  else {
    v551 = mplew.writeShort("v551");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242248)) {
  mplew.StartNode("Mask - " + map.get(0x2242248));
  if (sub_42CDC0(mask)) {
    v556 = mplew.writeInt("v556");
  }
  else {
    v557 = mplew.writeShort("v557");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242290)) {
  mplew.StartNode("Mask - " + map.get(0x2242290));
  if (sub_42CDC0(mask)) {
    v562 = mplew.writeInt("v562");
  }
  else {
    v563 = mplew.writeShort("v563");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22422D8)) {
  mplew.StartNode("Mask - " + map.get(0x22422D8));
  if (sub_42CDC0(mask)) {
    v568 = mplew.writeInt("v568");
  }
  else {
    v569 = mplew.writeShort("v569");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242320)) {
  mplew.StartNode("Mask - " + map.get(0x2242320));
  if (sub_42CDC0(mask)) {
    v574 = mplew.writeInt("v574");
  }
  else {
    v575 = mplew.writeShort("v575");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242368)) {
  mplew.StartNode("Mask - " + map.get(0x2242368));
  if (sub_42CDC0(mask)) {
    v580 = mplew.writeInt("v580");
  }
  else {
    v581 = mplew.writeShort("v581");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22423B0)) {
  mplew.StartNode("Mask - " + map.get(0x22423B0));
  if (sub_42CDC0(mask)) {
    v586 = mplew.writeInt("v586");
  }
  else {
    v587 = mplew.writeShort("v587");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22423F8)) {
  mplew.StartNode("Mask - " + map.get(0x22423F8));
  if (sub_42CDC0(mask)) {
    v592 = mplew.writeInt("v592");
  }
  else {
    v593 = mplew.writeShort("v593");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242440)) {
  mplew.StartNode("Mask - " + map.get(0x2242440));
  if (sub_42CDC0(mask)) {
    v598 = mplew.writeInt("v598");
  }
  else {
    v599 = mplew.writeShort("v599");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242488)) {
  mplew.StartNode("Mask - " + map.get(0x2242488));
  if (sub_42CDC0(mask)) {
    v604 = mplew.writeInt("v604");
  }
  else {
    v605 = mplew.writeShort("v605");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22424D0)) {
  mplew.StartNode("Mask - " + map.get(0x22424D0));
  if (sub_42CDC0(mask)) {
    v610 = mplew.writeInt("v610");
  }
  else {
    v611 = mplew.writeShort("v611");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242518)) {
  mplew.StartNode("Mask - " + map.get(0x2242518));
  if (sub_42CDC0(mask)) {
    v616 = mplew.writeInt("v616");
  }
  else {
    v617 = mplew.writeShort("v617");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240790)) {
  mplew.StartNode("Mask - " + map.get(0x2240790));
  if (sub_42CDC0(mask)) {
    v622 = mplew.writeInt("v622");
  }
  else {
    v623 = mplew.writeShort("v623");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242560)) {
  mplew.StartNode("Mask - " + map.get(0x2242560));
  if (sub_42CDC0(mask)) {
    v628 = mplew.writeInt("v628");
  }
  else {
    v629 = mplew.writeShort("v629");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22425A8)) {
  mplew.StartNode("Mask - " + map.get(0x22425A8));
  if (sub_42CDC0(mask)) {
    v634 = mplew.writeInt("v634");
  }
  else {
    v635 = mplew.writeShort("v635");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22425F0)) {
  mplew.StartNode("Mask - " + map.get(0x22425F0));
  if (sub_42CDC0(mask)) {
    v640 = mplew.writeInt("v640");
  }
  else {
    v641 = mplew.writeShort("v641");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242638)) {
  mplew.StartNode("Mask - " + map.get(0x2242638));
  if (sub_42CDC0(mask)) {
    v646 = mplew.writeInt("v646");
  }
  else {
    v647 = mplew.writeShort("v647");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242680)) {
  mplew.StartNode("Mask - " + map.get(0x2242680));
  if (sub_42CDC0(mask)) {
    v652 = mplew.writeInt("v652");
  }
  else {
    v653 = mplew.writeShort("v653");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22426C8)) {
  mplew.StartNode("Mask - " + map.get(0x22426C8));
  if (sub_42CDC0(mask)) {
    v658 = mplew.writeInt("v658");
  }
  else {
    v659 = mplew.writeShort("v659");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242710)) {
  mplew.StartNode("Mask - " + map.get(0x2242710));
  if (sub_42CDC0(mask)) {
    v664 = mplew.writeInt("v664");
  }
  else {
    v665 = mplew.writeShort("v665");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242758)) {
  mplew.StartNode("Mask - " + map.get(0x2242758));
  if (sub_42CDC0(mask)) {
    v670 = mplew.writeInt("v670");
  }
  else {
    v671 = mplew.writeShort("v671");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22407D8)) {
  mplew.StartNode("Mask - " + map.get(0x22407D8));
  if (sub_42CDC0(mask)) {
    v676 = mplew.writeInt("v676");
  }
  else {
    v677 = mplew.writeShort("v677");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22427A0)) {
  mplew.StartNode("Mask - " + map.get(0x22427A0));
  if (sub_42CDC0(mask)) {
    v682 = mplew.writeInt("v682");
  }
  else {
    v683 = mplew.writeShort("v683");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22427E8)) {
  mplew.StartNode("Mask - " + map.get(0x22427E8));
  if (sub_42CDC0(mask)) {
    v688 = mplew.writeInt("v688");
  }
  else {
    v689 = mplew.writeShort("v689");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242830)) {
  mplew.StartNode("Mask - " + map.get(0x2242830));
  if (sub_42CDC0(mask)) {
    v694 = mplew.writeInt("v694");
  }
  else {
    v695 = mplew.writeShort("v695");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242878)) {
  mplew.StartNode("Mask - " + map.get(0x2242878));
  if (sub_42CDC0(mask)) {
    v700 = mplew.writeInt("v700");
  }
  else {
    v701 = mplew.writeShort("v701");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22428C0)) {
  mplew.StartNode("Mask - " + map.get(0x22428C0));
  if (sub_42CDC0(mask)) {
    v706 = mplew.writeInt("v706");
  }
  else {
    v707 = mplew.writeShort("v707");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242908)) {
  mplew.StartNode("Mask - " + map.get(0x2242908));
  if (sub_42CDC0(mask)) {
    v712 = mplew.writeInt("v712");
  }
  else {
    v713 = mplew.writeShort("v713");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242950)) {
  mplew.StartNode("Mask - " + map.get(0x2242950));
  if (sub_42CDC0(mask)) {
    v718 = mplew.writeInt("v718");
  }
  else {
    v719 = mplew.writeShort("v719");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242998)) {
  mplew.StartNode("Mask - " + map.get(0x2242998));
  if (sub_42CDC0(mask)) {
    v724 = mplew.writeInt("v724");
  }
  else {
    v725 = mplew.writeShort("v725");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22429E0)) {
  mplew.StartNode("Mask - " + map.get(0x22429E0));
  if (sub_42CDC0(mask)) {
    v730 = mplew.writeInt("v730");
  }
  else {
    v731 = mplew.writeShort("v731");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242A28)) {
  mplew.StartNode("Mask - " + map.get(0x2242A28));
  if (sub_42CDC0(mask)) {
    v736 = mplew.writeInt("v736");
  }
  else {
    v737 = mplew.writeShort("v737");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242A70)) {
  mplew.StartNode("Mask - " + map.get(0x2242A70));
  if (sub_42CDC0(mask)) {
    v742 = mplew.writeInt("v742");
  }
  else {
    v743 = mplew.writeShort("v743");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242AB8)) {
  mplew.StartNode("Mask - " + map.get(0x2242AB8));
  if (sub_42CDC0(mask)) {
    v748 = mplew.writeInt("v748");
  }
  else {
    v749 = mplew.writeShort("v749");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242B00)) {
  mplew.StartNode("Mask - " + map.get(0x2242B00));
  if (sub_42CDC0(mask)) {
    v754 = mplew.writeInt("v754");
  }
  else {
    v755 = mplew.writeShort("v755");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242B48)) {
  mplew.StartNode("Mask - " + map.get(0x2242B48));
  if (sub_42CDC0(mask)) {
    v760 = mplew.writeInt("v760");
  }
  else {
    v761 = mplew.writeShort("v761");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242B90)) {
  mplew.StartNode("Mask - " + map.get(0x2242B90));
  if (sub_42CDC0(mask)) {
    v766 = mplew.writeInt("v766");
  }
  else {
    v767 = mplew.writeShort("v767");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242BD8)) {
  mplew.StartNode("Mask - " + map.get(0x2242BD8));
  if (sub_42CDC0(mask)) {
    v772 = mplew.writeInt("v772");
  }
  else {
    v773 = mplew.writeShort("v773");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242C20)) {
  mplew.StartNode("Mask - " + map.get(0x2242C20));
  if (sub_42CDC0(mask)) {
    v778 = mplew.writeInt("v778");
  }
  else {
    v779 = mplew.writeShort("v779");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242C68)) {
  mplew.StartNode("Mask - " + map.get(0x2242C68));
  if (sub_42CDC0(mask)) {
    v784 = mplew.writeInt("v784");
  }
  else {
    v785 = mplew.writeShort("v785");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242CB0)) {
  mplew.StartNode("Mask - " + map.get(0x2242CB0));
  if (sub_42CDC0(mask)) {
    v790 = mplew.writeInt("v790");
  }
  else {
    v791 = mplew.writeShort("v791");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242CF8)) {
  mplew.StartNode("Mask - " + map.get(0x2242CF8));
  if (sub_42CDC0(mask)) {
    v796 = mplew.writeInt("v796");
  }
  else {
    v797 = mplew.writeShort("v797");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242D40)) {
  mplew.StartNode("Mask - " + map.get(0x2242D40));
  if (sub_42CDC0(mask)) {
    v802 = mplew.writeInt("v802");
  }
  else {
    v803 = mplew.writeShort("v803");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242D88)) {
  mplew.StartNode("Mask - " + map.get(0x2242D88));
  if (sub_42CDC0(mask)) {
    v808 = mplew.writeInt("v808");
  }
  else {
    v809 = mplew.writeShort("v809");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242DD0)) {
  mplew.StartNode("Mask - " + map.get(0x2242DD0));
  if (sub_42CDC0(mask)) {
    v814 = mplew.writeInt("v814");
  }
  else {
    v815 = mplew.writeShort("v815");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242E18)) {
  mplew.StartNode("Mask - " + map.get(0x2242E18));
  if (sub_42CDC0(mask)) {
    v820 = mplew.writeInt("v820");
  }
  else {
    v821 = mplew.writeShort("v821");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242E60)) {
  mplew.StartNode("Mask - " + map.get(0x2242E60));
  if (sub_42CDC0(mask)) {
    v826 = mplew.writeInt("v826");
  }
  else {
    v827 = mplew.writeShort("v827");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242EA8)) {
  mplew.StartNode("Mask - " + map.get(0x2242EA8));
  if (sub_42CDC0(mask)) {
    v832 = mplew.writeInt("v832");
  }
  else {
    v833 = mplew.writeShort("v833");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242EF0)) {
  mplew.StartNode("Mask - " + map.get(0x2242EF0));
  if (sub_42CDC0(mask)) {
    v838 = mplew.writeInt("v838");
  }
  else {
    v839 = mplew.writeShort("v839");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242F38)) {
  mplew.StartNode("Mask - " + map.get(0x2242F38));
  if (sub_42CDC0(mask)) {
    v844 = mplew.writeInt("v844");
  }
  else {
    v845 = mplew.writeShort("v845");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242F80)) {
  mplew.StartNode("Mask - " + map.get(0x2242F80));
  if (sub_42CDC0(mask)) {
    v850 = mplew.writeInt("v850");
  }
  else {
    v851 = mplew.writeShort("v851");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242FC8)) {
  mplew.StartNode("Mask - " + map.get(0x2242FC8));
  if (sub_42CDC0(mask)) {
    v856 = mplew.writeInt("v856");
  }
  else {
    v857 = mplew.writeShort("v857");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243010)) {
  mplew.StartNode("Mask - " + map.get(0x2243010));
  if (sub_42CDC0(mask)) {
    v862 = mplew.writeInt("v862");
  }
  else {
    v863 = mplew.writeShort("v863");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243058)) {
  mplew.StartNode("Mask - " + map.get(0x2243058));
  if (sub_42CDC0(mask)) {
    v868 = mplew.writeInt("v868");
  }
  else {
    v869 = mplew.writeShort("v869");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22430A0)) {
  mplew.StartNode("Mask - " + map.get(0x22430A0));
  if (sub_42CDC0(mask)) {
    v874 = mplew.writeInt("v874");
  }
  else {
    v875 = mplew.writeShort("v875");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22430E8)) {
  mplew.StartNode("Mask - " + map.get(0x22430E8));
  if (sub_42CDC0(mask)) {
    v880 = mplew.writeInt("v880");
  }
  else {
    v881 = mplew.writeShort("v881");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243130)) {
  mplew.StartNode("Mask - " + map.get(0x2243130));
  if (sub_42CDC0(mask)) {
    v886 = mplew.writeInt("v886");
  }
  else {
    v887 = mplew.writeShort("v887");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243178)) {
  mplew.StartNode("Mask - " + map.get(0x2243178));
  if (sub_42CDC0(mask)) {
    v892 = mplew.writeInt("v892");
  }
  else {
    v893 = mplew.writeShort("v893");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22431C0)) {
  mplew.StartNode("Mask - " + map.get(0x22431C0));
  if (sub_42CDC0(mask)) {
    v898 = mplew.writeInt("v898");
  }
  else {
    v899 = mplew.writeShort("v899");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243208)) {
  mplew.StartNode("Mask - " + map.get(0x2243208));
  if (sub_42CDC0(mask)) {
    v904 = mplew.writeInt("v904");
  }
  else {
    v905 = mplew.writeShort("v905");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243250)) {
  mplew.StartNode("Mask - " + map.get(0x2243250));
  if (sub_42CDC0(mask)) {
    v910 = mplew.writeInt("v910");
  }
  else {
    v911 = mplew.writeShort("v911");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243298)) {
  mplew.StartNode("Mask - " + map.get(0x2243298));
  if (sub_42CDC0(mask)) {
    v916 = mplew.writeInt("v916");
  }
  else {
    v917 = mplew.writeShort("v917");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22432E0)) {
  mplew.StartNode("Mask - " + map.get(0x22432E0));
  if (sub_42CDC0(mask)) {
    v922 = mplew.writeInt("v922");
  }
  else {
    v923 = mplew.writeShort("v923");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243328)) {
  mplew.StartNode("Mask - " + map.get(0x2243328));
  if (sub_42CDC0(mask)) {
    v928 = mplew.writeInt("v928");
  }
  else {
    v929 = mplew.writeShort("v929");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243370)) {
  mplew.StartNode("Mask - " + map.get(0x2243370));
  if (sub_42CDC0(mask)) {
    v934 = mplew.writeInt("v934");
  }
  else {
    v935 = mplew.writeShort("v935");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22433B8)) {
  mplew.StartNode("Mask - " + map.get(0x22433B8));
  if (sub_42CDC0(mask)) {
    v940 = mplew.writeInt("v940");
  }
  else {
    v941 = mplew.writeShort("v941");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243400)) {
  mplew.StartNode("Mask - " + map.get(0x2243400));
  if (sub_42CDC0(mask)) {
    v946 = mplew.writeInt("v946");
  }
  else {
    v947 = mplew.writeShort("v947");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243448)) {
  mplew.StartNode("Mask - " + map.get(0x2243448));
  if (sub_42CDC0(mask)) {
    v952 = mplew.writeInt("v952");
  }
  else {
    v953 = mplew.writeShort("v953");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240430)) {
  mplew.StartNode("Mask - " + map.get(0x2240430));
  if (sub_42CDC0(mask)) {
    v958 = mplew.writeInt("v958");
  }
  else {
    v959 = mplew.writeShort("v959");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243490)) {
  mplew.StartNode("Mask - " + map.get(0x2243490));
  if (sub_42CDC0(mask)) {
    v964 = mplew.writeInt("v964");
  }
  else {
    v965 = mplew.writeShort("v965");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22434D8)) {
  mplew.StartNode("Mask - " + map.get(0x22434D8));
  if (sub_42CDC0(mask)) {
    v970 = mplew.writeInt("v970");
  }
  else {
    v971 = mplew.writeShort("v971");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243520)) {
  mplew.StartNode("Mask - " + map.get(0x2243520));
  if (sub_42CDC0(mask)) {
    v976 = mplew.writeInt("v976");
  }
  else {
    v977 = mplew.writeShort("v977");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243568)) {
  mplew.StartNode("Mask - " + map.get(0x2243568));
  if (sub_42CDC0(mask)) {
    v982 = mplew.writeInt("v982");
  }
  else {
    v983 = mplew.writeShort("v983");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22435B0)) {
  mplew.StartNode("Mask - " + map.get(0x22435B0));
  if (sub_42CDC0(mask)) {
    v988 = mplew.writeInt("v988");
  }
  else {
    v989 = mplew.writeShort("v989");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22435F8)) {
  mplew.StartNode("Mask - " + map.get(0x22435F8));
  if (sub_42CDC0(mask)) {
    v994 = mplew.writeInt("v994");
  }
  else {
    v995 = mplew.writeShort("v995");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243640)) {
  mplew.StartNode("Mask - " + map.get(0x2243640));
  if (sub_42CDC0(mask)) {
    v1000 = mplew.writeInt("v1000");
  }
  else {
    v1001 = mplew.writeShort("v1001");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243688)) {
  mplew.StartNode("Mask - " + map.get(0x2243688));
  if (sub_42CDC0(mask)) {
    v1006 = mplew.writeInt("v1006");
  }
  else {
    v1007 = mplew.writeShort("v1007");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22436D0)) {
  mplew.StartNode("Mask - " + map.get(0x22436D0));
  if (sub_42CDC0(mask)) {
    v1012 = mplew.writeInt("v1012");
  }
  else {
    v1013 = mplew.writeShort("v1013");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243718)) {
  mplew.StartNode("Mask - " + map.get(0x2243718));
  if (sub_42CDC0(mask)) {
    v1018 = mplew.writeInt("v1018");
  }
  else {
    v1019 = mplew.writeShort("v1019");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243760)) {
  mplew.StartNode("Mask - " + map.get(0x2243760));
  if (sub_42CDC0(mask)) {
    v1024 = mplew.writeInt("v1024");
  }
  else {
    v1025 = mplew.writeShort("v1025");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22437A8)) {
  mplew.StartNode("Mask - " + map.get(0x22437A8));
  if (sub_42CDC0(mask)) {
    v1030 = mplew.writeInt("v1030");
  }
  else {
    v1031 = mplew.writeShort("v1031");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22437F0)) {
  mplew.StartNode("Mask - " + map.get(0x22437F0));
  if (sub_42CDC0(mask)) {
    v1036 = mplew.writeInt("v1036");
  }
  else {
    v1037 = mplew.writeShort("v1037");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243838)) {
  mplew.StartNode("Mask - " + map.get(0x2243838));
  if (sub_42CDC0(mask)) {
    v1042 = mplew.writeInt("v1042");
  }
  else {
    v1043 = mplew.writeShort("v1043");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243880)) {
  mplew.StartNode("Mask - " + map.get(0x2243880));
  if (sub_42CDC0(mask)) {
    v1048 = mplew.writeInt("v1048");
  }
  else {
    v1049 = mplew.writeShort("v1049");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22438C8)) {
  mplew.StartNode("Mask - " + map.get(0x22438C8));
  if (sub_42CDC0(mask)) {
    v1054 = mplew.writeInt("v1054");
  }
  else {
    v1055 = mplew.writeShort("v1055");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243910)) {
  mplew.StartNode("Mask - " + map.get(0x2243910));
  if (sub_42CDC0(mask)) {
    v1060 = mplew.writeInt("v1060");
  }
  else {
    v1061 = mplew.writeShort("v1061");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243958)) {
  mplew.StartNode("Mask - " + map.get(0x2243958));
  if (sub_42CDC0(mask)) {
    v1066 = mplew.writeInt("v1066");
  }
  else {
    v1067 = mplew.writeShort("v1067");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22439A0)) {
  mplew.StartNode("Mask - " + map.get(0x22439A0));
  if (sub_42CDC0(mask)) {
    v1072 = mplew.writeInt("v1072");
  }
  else {
    v1073 = mplew.writeShort("v1073");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22439E8)) {
  mplew.StartNode("Mask - " + map.get(0x22439E8));
  if (sub_42CDC0(mask)) {
    v1078 = mplew.writeInt("v1078");
  }
  else {
    v1079 = mplew.writeShort("v1079");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243A30)) {
  mplew.StartNode("Mask - " + map.get(0x2243A30));
  if (sub_42CDC0(mask)) {
    v1084 = mplew.writeInt("v1084");
  }
  else {
    v1085 = mplew.writeShort("v1085");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22403E8)) {
  mplew.StartNode("Mask - " + map.get(0x22403E8));
  if (sub_42CDC0(mask)) {
    v1090 = mplew.writeInt("v1090");
  }
  else {
    v1091 = mplew.writeShort("v1091");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243A78)) {
  mplew.StartNode("Mask - " + map.get(0x2243A78));
  if (sub_42CDC0(mask)) {
    v1096 = mplew.writeInt("v1096");
  }
  else {
    v1097 = mplew.writeShort("v1097");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243AC0)) {
  mplew.StartNode("Mask - " + map.get(0x2243AC0));
  if (sub_42CDC0(mask)) {
    v1102 = mplew.writeInt("v1102");
  }
  else {
    v1103 = mplew.writeShort("v1103");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243B08)) {
  mplew.StartNode("Mask - " + map.get(0x2243B08));
  if (sub_42CDC0(mask)) {
    v1108 = mplew.writeInt("v1108");
  }
  else {
    v1109 = mplew.writeShort("v1109");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243B50)) {
  mplew.StartNode("Mask - " + map.get(0x2243B50));
  if (sub_42CDC0(mask)) {
    v1114 = mplew.writeInt("v1114");
  }
  else {
    v1115 = mplew.writeShort("v1115");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243B98)) {
  mplew.StartNode("Mask - " + map.get(0x2243B98));
  if (sub_42CDC0(mask)) {
    v1120 = mplew.writeInt("v1120");
  }
  else {
    v1121 = mplew.writeShort("v1121");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243BE0)) {
  mplew.StartNode("Mask - " + map.get(0x2243BE0));
  if (sub_42CDC0(mask)) {
    v1126 = mplew.writeInt("v1126");
  }
  else {
    v1127 = mplew.writeShort("v1127");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243C28)) {
  mplew.StartNode("Mask - " + map.get(0x2243C28));
  if (sub_42CDC0(mask)) {
    v1132 = mplew.writeInt("v1132");
  }
  else {
    v1133 = mplew.writeShort("v1133");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243C70)) {
  mplew.StartNode("Mask - " + map.get(0x2243C70));
  if (sub_42CDC0(mask)) {
    v1138 = mplew.writeInt("v1138");
  }
  else {
    v1139 = mplew.writeShort("v1139");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243CB8)) {
  mplew.StartNode("Mask - " + map.get(0x2243CB8));
  if (sub_42CDC0(mask)) {
    v1144 = mplew.writeInt("v1144");
  }
  else {
    v1145 = mplew.writeShort("v1145");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243D00)) {
  mplew.StartNode("Mask - " + map.get(0x2243D00));
  if (sub_42CDC0(mask)) {
    v1150 = mplew.writeInt("v1150");
  }
  else {
    v1151 = mplew.writeShort("v1151");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243D48)) {
  mplew.StartNode("Mask - " + map.get(0x2243D48));
  if (sub_42CDC0(mask)) {
    v1156 = mplew.writeInt("v1156");
  }
  else {
    v1157 = mplew.writeShort("v1157");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243D90)) {
  mplew.StartNode("Mask - " + map.get(0x2243D90));
  if (sub_42CDC0(mask)) {
    v1162 = mplew.writeInt("v1162");
  }
  else {
    v1163 = mplew.writeShort("v1163");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243DD8)) {
  mplew.StartNode("Mask - " + map.get(0x2243DD8));
  if (sub_42CDC0(mask)) {
    v1168 = mplew.writeInt("v1168");
  }
  else {
    v1169 = mplew.writeShort("v1169");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243E20)) {
  mplew.StartNode("Mask - " + map.get(0x2243E20));
  if (sub_42CDC0(mask)) {
    v1174 = mplew.writeInt("v1174");
  }
  else {
    v1175 = mplew.writeShort("v1175");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243E68)) {
  mplew.StartNode("Mask - " + map.get(0x2243E68));
  if (sub_42CDC0(mask)) {
    v1180 = mplew.writeInt("v1180");
  }
  else {
    v1181 = mplew.writeShort("v1181");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243EB0)) {
  mplew.StartNode("Mask - " + map.get(0x2243EB0));
  if (sub_42CDC0(mask)) {
    v1186 = mplew.writeInt("v1186");
  }
  else {
    v1187 = mplew.writeShort("v1187");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240478)) {
  mplew.StartNode("Mask - " + map.get(0x2240478));
  if (sub_42CDC0(mask)) {
    v1192 = mplew.writeInt("v1192");
  }
  else {
    v1193 = mplew.writeShort("v1193");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243EF8)) {
  mplew.StartNode("Mask - " + map.get(0x2243EF8));
  if (sub_42CDC0(mask)) {
    v1198 = mplew.writeInt("v1198");
  }
  else {
    v1199 = mplew.writeShort("v1199");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243F40)) {
  mplew.StartNode("Mask - " + map.get(0x2243F40));
  if (sub_42CDC0(mask)) {
    v1204 = mplew.writeInt("v1204");
  }
  else {
    v1205 = mplew.writeShort("v1205");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243F88)) {
  mplew.StartNode("Mask - " + map.get(0x2243F88));
  if (sub_42CDC0(mask)) {
    v1210 = mplew.writeInt("v1210");
  }
  else {
    v1211 = mplew.writeShort("v1211");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2243FD0)) {
  mplew.StartNode("Mask - " + map.get(0x2243FD0));
  if (sub_42CDC0(mask)) {
    v1216 = mplew.writeInt("v1216");
  }
  else {
    v1217 = mplew.writeShort("v1217");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244018)) {
  mplew.StartNode("Mask - " + map.get(0x2244018));
  if (sub_42CDC0(mask)) {
    v1222 = mplew.writeInt("v1222");
  }
  else {
    v1223 = mplew.writeShort("v1223");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244060)) {
  mplew.StartNode("Mask - " + map.get(0x2244060));
  if (sub_42CDC0(mask)) {
    v1228 = mplew.writeInt("v1228");
  }
  else {
    v1229 = mplew.writeShort("v1229");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22440A8)) {
  mplew.StartNode("Mask - " + map.get(0x22440A8));
  if (sub_42CDC0(mask)) {
    v1234 = mplew.writeInt("v1234");
  }
  else {
    v1235 = mplew.writeShort("v1235");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22404C0)) {
  mplew.StartNode("Mask - " + map.get(0x22404C0));
  if (sub_42CDC0(mask)) {
    v1240 = mplew.writeInt("v1240");
  }
  else {
    v1241 = mplew.writeShort("v1241");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22440F0)) {
  mplew.StartNode("Mask - " + map.get(0x22440F0));
  if (sub_42CDC0(mask)) {
    v1246 = mplew.writeInt("v1246");
  }
  else {
    v1247 = mplew.writeShort("v1247");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240508)) {
  mplew.StartNode("Mask - " + map.get(0x2240508));
  if (sub_42CDC0(mask)) {
    v1252 = mplew.writeInt("v1252");
  }
  else {
    v1253 = mplew.writeShort("v1253");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244138)) {
  mplew.StartNode("Mask - " + map.get(0x2244138));
  if (sub_42CDC0(mask)) {
    v1258 = mplew.writeInt("v1258");
  }
  else {
    v1259 = mplew.writeShort("v1259");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244180)) {
  mplew.StartNode("Mask - " + map.get(0x2244180));
  if (sub_42CDC0(mask)) {
    v1264 = mplew.writeInt("v1264");
  }
  else {
    v1265 = mplew.writeShort("v1265");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22441C8)) {
  mplew.StartNode("Mask - " + map.get(0x22441C8));
  if (sub_42CDC0(mask)) {
    v1270 = mplew.writeInt("v1270");
  }
  else {
    v1271 = mplew.writeShort("v1271");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244210)) {
  mplew.StartNode("Mask - " + map.get(0x2244210));
  if (sub_42CDC0(mask)) {
    v1276 = mplew.writeInt("v1276");
  }
  else {
    v1277 = mplew.writeShort("v1277");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244258)) {
  mplew.StartNode("Mask - " + map.get(0x2244258));
  if (sub_42CDC0(mask)) {
    v1282 = mplew.writeInt("v1282");
  }
  else {
    v1283 = mplew.writeShort("v1283");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22442A0)) {
  mplew.StartNode("Mask - " + map.get(0x22442A0));
  if (sub_42CDC0(mask)) {
    v1288 = mplew.writeInt("v1288");
  }
  else {
    v1289 = mplew.writeShort("v1289");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22442E8)) {
  mplew.StartNode("Mask - " + map.get(0x22442E8));
  if (sub_42CDC0(mask)) {
    v1294 = mplew.writeInt("v1294");
  }
  else {
    v1295 = mplew.writeShort("v1295");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244330)) {
  mplew.StartNode("Mask - " + map.get(0x2244330));
  if (sub_42CDC0(mask)) {
    v1300 = mplew.writeInt("v1300");
  }
  else {
    v1301 = mplew.writeShort("v1301");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244378)) {
  mplew.StartNode("Mask - " + map.get(0x2244378));
  if (sub_42CDC0(mask)) {
    v1306 = mplew.writeInt("v1306");
  }
  else {
    v1307 = mplew.writeShort("v1307");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22443C0)) {
  mplew.StartNode("Mask - " + map.get(0x22443C0));
  if (sub_42CDC0(mask)) {
    v1312 = mplew.writeInt("v1312");
  }
  else {
    v1313 = mplew.writeShort("v1313");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244408)) {
  mplew.StartNode("Mask - " + map.get(0x2244408));
  if (sub_42CDC0(mask)) {
    v1318 = mplew.writeInt("v1318");
  }
  else {
    v1319 = mplew.writeShort("v1319");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244450)) {
  mplew.StartNode("Mask - " + map.get(0x2244450));
  if (sub_42CDC0(mask)) {
    v1324 = mplew.writeInt("v1324");
  }
  else {
    v1325 = mplew.writeShort("v1325");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244498)) {
  mplew.StartNode("Mask - " + map.get(0x2244498));
  if (sub_42CDC0(mask)) {
    v1330 = mplew.writeInt("v1330");
  }
  else {
    v1331 = mplew.writeShort("v1331");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22444E0)) {
  mplew.StartNode("Mask - " + map.get(0x22444E0));
  if (sub_42CDC0(mask)) {
    v1336 = mplew.writeInt("v1336");
  }
  else {
    v1337 = mplew.writeShort("v1337");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244528)) {
  mplew.StartNode("Mask - " + map.get(0x2244528));
  if (sub_42CDC0(mask)) {
    v1342 = mplew.writeInt("v1342");
  }
  else {
    v1343 = mplew.writeShort("v1343");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244570)) {
  mplew.StartNode("Mask - " + map.get(0x2244570));
  if (sub_42CDC0(mask)) {
    v1348 = mplew.writeInt("v1348");
  }
  else {
    v1349 = mplew.writeShort("v1349");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22445B8)) {
  mplew.StartNode("Mask - " + map.get(0x22445B8));
  if (sub_42CDC0(mask)) {
    v1354 = mplew.writeInt("v1354");
  }
  else {
    v1355 = mplew.writeShort("v1355");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244600)) {
  mplew.StartNode("Mask - " + map.get(0x2244600));
  if (sub_42CDC0(mask)) {
    v1360 = mplew.writeInt("v1360");
  }
  else {
    v1361 = mplew.writeShort("v1361");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244648)) {
  mplew.StartNode("Mask - " + map.get(0x2244648));
  if (sub_42CDC0(mask)) {
    v1366 = mplew.writeInt("v1366");
  }
  else {
    v1367 = mplew.writeShort("v1367");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244690)) {
  mplew.StartNode("Mask - " + map.get(0x2244690));
  if (sub_42CDC0(mask)) {
    v1372 = mplew.writeInt("v1372");
  }
  else {
    v1373 = mplew.writeShort("v1373");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22446D8)) {
  mplew.StartNode("Mask - " + map.get(0x22446D8));
  if (sub_42CDC0(mask)) {
    v1378 = mplew.writeInt("v1378");
  }
  else {
    v1379 = mplew.writeShort("v1379");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244720)) {
  mplew.StartNode("Mask - " + map.get(0x2244720));
  if (sub_42CDC0(mask)) {
    v1384 = mplew.writeInt("v1384");
  }
  else {
    v1385 = mplew.writeShort("v1385");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244768)) {
  mplew.StartNode("Mask - " + map.get(0x2244768));
  if (sub_42CDC0(mask)) {
    v1390 = mplew.writeInt("v1390");
  }
  else {
    v1391 = mplew.writeShort("v1391");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22447B0)) {
  mplew.StartNode("Mask - " + map.get(0x22447B0));
  if (sub_42CDC0(mask)) {
    v1396 = mplew.writeInt("v1396");
  }
  else {
    v1397 = mplew.writeShort("v1397");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22447F8)) {
  mplew.StartNode("Mask - " + map.get(0x22447F8));
  if (sub_42CDC0(mask)) {
    v1402 = mplew.writeInt("v1402");
  }
  else {
    v1403 = mplew.writeShort("v1403");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244840)) {
  mplew.StartNode("Mask - " + map.get(0x2244840));
  if (sub_42CDC0(mask)) {
    v1408 = mplew.writeInt("v1408");
  }
  else {
    v1409 = mplew.writeShort("v1409");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244888)) {
  mplew.StartNode("Mask - " + map.get(0x2244888));
  if (sub_42CDC0(mask)) {
    v1414 = mplew.writeInt("v1414");
  }
  else {
    v1415 = mplew.writeShort("v1415");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22448D0)) {
  mplew.StartNode("Mask - " + map.get(0x22448D0));
  if (sub_42CDC0(mask)) {
    v1420 = mplew.writeInt("v1420");
  }
  else {
    v1421 = mplew.writeShort("v1421");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244918)) {
  mplew.StartNode("Mask - " + map.get(0x2244918));
  if (sub_42CDC0(mask)) {
    v1426 = mplew.writeInt("v1426");
  }
  else {
    v1427 = mplew.writeShort("v1427");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244960)) {
  mplew.StartNode("Mask - " + map.get(0x2244960));
  if (sub_42CDC0(mask)) {
    v1432 = mplew.writeInt("v1432");
  }
  else {
    v1433 = mplew.writeShort("v1433");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22449A8)) {
  mplew.StartNode("Mask - " + map.get(0x22449A8));
  if (sub_42CDC0(mask)) {
    v1438 = mplew.writeInt("v1438");
  }
  else {
    v1439 = mplew.writeShort("v1439");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22449F0)) {
  mplew.StartNode("Mask - " + map.get(0x22449F0));
  if (sub_42CDC0(mask)) {
    v1444 = mplew.writeInt("v1444");
  }
  else {
    v1445 = mplew.writeShort("v1445");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240550)) {
  mplew.StartNode("Mask - " + map.get(0x2240550));
  if (sub_42CDC0(mask)) {
    v1450 = mplew.writeInt("v1450");
  }
  else {
    v1451 = mplew.writeShort("v1451");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244A38)) {
  mplew.StartNode("Mask - " + map.get(0x2244A38));
  if (sub_42CDC0(mask)) {
    v1456 = mplew.writeInt("v1456");
  }
  else {
    v1457 = mplew.writeShort("v1457");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244A80)) {
  mplew.StartNode("Mask - " + map.get(0x2244A80));
  if (sub_42CDC0(mask)) {
    v1462 = mplew.writeInt("v1462");
  }
  else {
    v1463 = mplew.writeShort("v1463");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244AC8)) {
  mplew.StartNode("Mask - " + map.get(0x2244AC8));
  if (sub_42CDC0(mask)) {
    v1468 = mplew.writeInt("v1468");
  }
  else {
    v1469 = mplew.writeShort("v1469");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244B10)) {
  mplew.StartNode("Mask - " + map.get(0x2244B10));
  if (sub_42CDC0(mask)) {
    v1474 = mplew.writeInt("v1474");
  }
  else {
    v1475 = mplew.writeShort("v1475");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244B58)) {
  mplew.StartNode("Mask - " + map.get(0x2244B58));
  if (sub_42CDC0(mask)) {
    v1480 = mplew.writeInt("v1480");
  }
  else {
    v1481 = mplew.writeShort("v1481");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244BA0)) {
  mplew.StartNode("Mask - " + map.get(0x2244BA0));
  if (sub_42CDC0(mask)) {
    v1486 = mplew.writeInt("v1486");
  }
  else {
    v1487 = mplew.writeShort("v1487");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244BE8)) {
  mplew.StartNode("Mask - " + map.get(0x2244BE8));
  if (sub_42CDC0(mask)) {
    v1492 = mplew.writeInt("v1492");
  }
  else {
    v1493 = mplew.writeShort("v1493");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244C30)) {
  mplew.StartNode("Mask - " + map.get(0x2244C30));
  if (sub_42CDC0(mask)) {
    v1498 = mplew.writeInt("v1498");
  }
  else {
    v1499 = mplew.writeShort("v1499");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244C78)) {
  mplew.StartNode("Mask - " + map.get(0x2244C78));
  if (sub_42CDC0(mask)) {
    v1504 = mplew.writeInt("v1504");
  }
  else {
    v1505 = mplew.writeShort("v1505");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244CC0)) {
  mplew.StartNode("Mask - " + map.get(0x2244CC0));
  if (sub_42CDC0(mask)) {
    v1510 = mplew.writeInt("v1510");
  }
  else {
    v1511 = mplew.writeShort("v1511");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244D08)) {
  mplew.StartNode("Mask - " + map.get(0x2244D08));
  if (sub_42CDC0(mask)) {
    v1516 = mplew.writeInt("v1516");
  }
  else {
    v1517 = mplew.writeShort("v1517");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244D50)) {
  mplew.StartNode("Mask - " + map.get(0x2244D50));
  if (sub_42CDC0(mask)) {
    v1522 = mplew.writeInt("v1522");
  }
  else {
    v1523 = mplew.writeShort("v1523");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244D98)) {
  mplew.StartNode("Mask - " + map.get(0x2244D98));
  if (sub_42CDC0(mask)) {
    v1528 = mplew.writeInt("v1528");
  }
  else {
    v1529 = mplew.writeShort("v1529");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244DE0)) {
  mplew.StartNode("Mask - " + map.get(0x2244DE0));
  if (sub_42CDC0(mask)) {
    v1534 = mplew.writeInt("v1534");
  }
  else {
    v1535 = mplew.writeShort("v1535");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22406B8)) {
  mplew.StartNode("Mask - " + map.get(0x22406B8));
  if (sub_42CDC0(mask)) {
    v1540 = mplew.writeInt("v1540");
  }
  else {
    v1541 = mplew.writeShort("v1541");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244E28)) {
  mplew.StartNode("Mask - " + map.get(0x2244E28));
  if (sub_42CDC0(mask)) {
    v1546 = mplew.writeInt("v1546");
  }
  else {
    v1547 = mplew.writeShort("v1547");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244E70)) {
  mplew.StartNode("Mask - " + map.get(0x2244E70));
  if (sub_42CDC0(mask)) {
    v1552 = mplew.writeInt("v1552");
  }
  else {
    v1553 = mplew.writeShort("v1553");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244EB8)) {
  mplew.StartNode("Mask - " + map.get(0x2244EB8));
  if (sub_42CDC0(mask)) {
    v1558 = mplew.writeInt("v1558");
  }
  else {
    v1559 = mplew.writeShort("v1559");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244F00)) {
  mplew.StartNode("Mask - " + map.get(0x2244F00));
  if (sub_42CDC0(mask)) {
    v1564 = mplew.writeInt("v1564");
  }
  else {
    v1565 = mplew.writeShort("v1565");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244F48)) {
  mplew.StartNode("Mask - " + map.get(0x2244F48));
  if (sub_42CDC0(mask)) {
    v1570 = mplew.writeInt("v1570");
  }
  else {
    v1571 = mplew.writeShort("v1571");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244F90)) {
  mplew.StartNode("Mask - " + map.get(0x2244F90));
  if (sub_42CDC0(mask)) {
    v1576 = mplew.writeInt("v1576");
  }
  else {
    v1577 = mplew.writeShort("v1577");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2244FD8)) {
  mplew.StartNode("Mask - " + map.get(0x2244FD8));
  if (sub_42CDC0(mask)) {
    v1582 = mplew.writeInt("v1582");
  }
  else {
    v1583 = mplew.writeShort("v1583");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245020)) {
  mplew.StartNode("Mask - " + map.get(0x2245020));
  if (sub_42CDC0(mask)) {
    v1588 = mplew.writeInt("v1588");
  }
  else {
    v1589 = mplew.writeShort("v1589");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245068)) {
  mplew.StartNode("Mask - " + map.get(0x2245068));
  if (sub_42CDC0(mask)) {
    v1594 = mplew.writeInt("v1594");
  }
  else {
    v1595 = mplew.writeShort("v1595");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22450B0)) {
  mplew.StartNode("Mask - " + map.get(0x22450B0));
  if (sub_42CDC0(mask)) {
    v1600 = mplew.writeInt("v1600");
  }
  else {
    v1601 = mplew.writeShort("v1601");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22450F8)) {
  mplew.StartNode("Mask - " + map.get(0x22450F8));
  if (sub_42CDC0(mask)) {
    v1606 = mplew.writeInt("v1606");
  }
  else {
    v1607 = mplew.writeShort("v1607");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245140)) {
  mplew.StartNode("Mask - " + map.get(0x2245140));
  if (sub_42CDC0(mask)) {
    v1612 = mplew.writeInt("v1612");
  }
  else {
    v1613 = mplew.writeShort("v1613");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245188)) {
  mplew.StartNode("Mask - " + map.get(0x2245188));
  if (sub_42CDC0(mask)) {
    v1618 = mplew.writeInt("v1618");
  }
  else {
    v1619 = mplew.writeShort("v1619");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22451D0)) {
  mplew.StartNode("Mask - " + map.get(0x22451D0));
  if (sub_42CDC0(mask)) {
    v1624 = mplew.writeInt("v1624");
  }
  else {
    v1625 = mplew.writeShort("v1625");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245218)) {
  mplew.StartNode("Mask - " + map.get(0x2245218));
  if (sub_42CDC0(mask)) {
    v1630 = mplew.writeInt("v1630");
  }
  else {
    v1631 = mplew.writeShort("v1631");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245260)) {
  mplew.StartNode("Mask - " + map.get(0x2245260));
  if (sub_42CDC0(mask)) {
    v1636 = mplew.writeInt("v1636");
  }
  else {
    v1637 = mplew.writeShort("v1637");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22452A8)) {
  mplew.StartNode("Mask - " + map.get(0x22452A8));
  if (sub_42CDC0(mask)) {
    v1642 = mplew.writeInt("v1642");
  }
  else {
    v1643 = mplew.writeShort("v1643");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22452F0)) {
  mplew.StartNode("Mask - " + map.get(0x22452F0));
  if (sub_42CDC0(mask)) {
    v1648 = mplew.writeInt("v1648");
  }
  else {
    v1649 = mplew.writeShort("v1649");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245338)) {
  mplew.StartNode("Mask - " + map.get(0x2245338));
  if (sub_42CDC0(mask)) {
    v1654 = mplew.writeInt("v1654");
  }
  else {
    v1655 = mplew.writeShort("v1655");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245380)) {
  mplew.StartNode("Mask - " + map.get(0x2245380));
  if (sub_42CDC0(mask)) {
    v1660 = mplew.writeInt("v1660");
  }
  else {
    v1661 = mplew.writeShort("v1661");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22453C8)) {
  mplew.StartNode("Mask - " + map.get(0x22453C8));
  if (sub_42CDC0(mask)) {
    v1666 = mplew.writeInt("v1666");
  }
  else {
    v1667 = mplew.writeShort("v1667");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245410)) {
  mplew.StartNode("Mask - " + map.get(0x2245410));
  if (sub_42CDC0(mask)) {
    v1672 = mplew.writeInt("v1672");
  }
  else {
    v1673 = mplew.writeShort("v1673");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245458)) {
  mplew.StartNode("Mask - " + map.get(0x2245458));
  if (sub_42CDC0(mask)) {
    v1678 = mplew.writeInt("v1678");
  }
  else {
    v1679 = mplew.writeShort("v1679");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240700)) {
  mplew.StartNode("Mask - " + map.get(0x2240700));
  if (sub_42CDC0(mask)) {
    v1684 = mplew.writeInt("v1684");
  }
  else {
    v1685 = mplew.writeShort("v1685");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22454A0)) {
  mplew.StartNode("Mask - " + map.get(0x22454A0));
  if (sub_42CDC0(mask)) {
    v1690 = mplew.writeInt("v1690");
  }
  else {
    v1691 = mplew.writeShort("v1691");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22454E8)) {
  mplew.StartNode("Mask - " + map.get(0x22454E8));
  if (sub_42CDC0(mask)) {
    v1696 = mplew.writeInt("v1696");
  }
  else {
    v1697 = mplew.writeShort("v1697");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240748)) {
  mplew.StartNode("Mask - " + map.get(0x2240748));
  if (sub_42CDC0(mask)) {
    v1702 = mplew.writeInt("v1702");
  }
  else {
    v1703 = mplew.writeShort("v1703");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245530)) {
  mplew.StartNode("Mask - " + map.get(0x2245530));
  if (sub_42CDC0(mask)) {
    v1708 = mplew.writeInt("v1708");
  }
  else {
    v1709 = mplew.writeShort("v1709");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245578)) {
  mplew.StartNode("Mask - " + map.get(0x2245578));
  if (sub_42CDC0(mask)) {
    v1714 = mplew.writeInt("v1714");
  }
  else {
    v1715 = mplew.writeShort("v1715");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22455C0)) {
  mplew.StartNode("Mask - " + map.get(0x22455C0));
  if (sub_42CDC0(mask)) {
    v1720 = mplew.writeInt("v1720");
  }
  else {
    v1721 = mplew.writeShort("v1721");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245608)) {
  mplew.StartNode("Mask - " + map.get(0x2245608));
  if (sub_42CDC0(mask)) {
    v1726 = mplew.writeInt("v1726");
  }
  else {
    v1727 = mplew.writeShort("v1727");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245650)) {
  mplew.StartNode("Mask - " + map.get(0x2245650));
  if (sub_42CDC0(mask)) {
    v1732 = mplew.writeInt("v1732");
  }
  else {
    v1733 = mplew.writeShort("v1733");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245698)) {
  mplew.StartNode("Mask - " + map.get(0x2245698));
  if (sub_42CDC0(mask)) {
    v1738 = mplew.writeInt("v1738");
  }
  else {
    v1739 = mplew.writeShort("v1739");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22456E0)) {
  mplew.StartNode("Mask - " + map.get(0x22456E0));
  if (sub_42CDC0(mask)) {
    v1744 = mplew.writeInt("v1744");
  }
  else {
    v1745 = mplew.writeShort("v1745");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245728)) {
  mplew.StartNode("Mask - " + map.get(0x2245728));
  if (sub_42CDC0(mask)) {
    v1750 = mplew.writeInt("v1750");
  }
  else {
    v1751 = mplew.writeShort("v1751");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245770)) {
  mplew.StartNode("Mask - " + map.get(0x2245770));
  if (sub_42CDC0(mask)) {
    v1756 = mplew.writeInt("v1756");
  }
  else {
    v1757 = mplew.writeShort("v1757");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22457B8)) {
  mplew.StartNode("Mask - " + map.get(0x22457B8));
  if (sub_42CDC0(mask)) {
    v1762 = mplew.writeInt("v1762");
  }
  else {
    v1763 = mplew.writeShort("v1763");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245800)) {
  mplew.StartNode("Mask - " + map.get(0x2245800));
  if (sub_42CDC0(mask)) {
    v1768 = mplew.writeInt("v1768");
  }
  else {
    v1769 = mplew.writeShort("v1769");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245848)) {
  mplew.StartNode("Mask - " + map.get(0x2245848));
  if (sub_42CDC0(mask)) {
    v1774 = mplew.writeInt("v1774");
  }
  else {
    v1775 = mplew.writeShort("v1775");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245890)) {
  mplew.StartNode("Mask - " + map.get(0x2245890));
  if (sub_42CDC0(mask)) {
    v1780 = mplew.writeInt("v1780");
  }
  else {
    v1781 = mplew.writeShort("v1781");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22458D8)) {
  mplew.StartNode("Mask - " + map.get(0x22458D8));
  if (sub_42CDC0(mask)) {
    v1786 = mplew.writeInt("v1786");
  }
  else {
    v1787 = mplew.writeShort("v1787");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240868)) {
  mplew.StartNode("Mask - " + map.get(0x2240868));
  if (sub_42CDC0(mask)) {
    v1792 = mplew.writeInt("v1792");
  }
  else {
    v1793 = mplew.writeShort("v1793");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245920)) {
  mplew.StartNode("Mask - " + map.get(0x2245920));
  if (sub_42CDC0(mask)) {
    v1798 = mplew.writeInt("v1798");
  }
  else {
    v1799 = mplew.writeShort("v1799");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245968)) {
  mplew.StartNode("Mask - " + map.get(0x2245968));
  if (sub_42CDC0(mask)) {
    v1804 = mplew.writeInt("v1804");
  }
  else {
    v1805 = mplew.writeShort("v1805");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240820)) {
  mplew.StartNode("Mask - " + map.get(0x2240820));
  if (sub_42CDC0(mask)) {
    v1810 = mplew.writeInt("v1810");
  }
  else {
    v1811 = mplew.writeShort("v1811");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22459B0)) {
  mplew.StartNode("Mask - " + map.get(0x22459B0));
  if (sub_42CDC0(mask)) {
    v1816 = mplew.writeInt("v1816");
  }
  else {
    v1817 = mplew.writeShort("v1817");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22459F8)) {
  mplew.StartNode("Mask - " + map.get(0x22459F8));
  if (sub_42CDC0(mask)) {
    v1822 = mplew.writeInt("v1822");
  }
  else {
    v1823 = mplew.writeShort("v1823");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245A40)) {
  mplew.StartNode("Mask - " + map.get(0x2245A40));
  if (sub_42CDC0(mask)) {
    v1828 = mplew.writeInt("v1828");
  }
  else {
    v1829 = mplew.writeShort("v1829");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245A88)) {
  mplew.StartNode("Mask - " + map.get(0x2245A88));
  if (sub_42CDC0(mask)) {
    v1834 = mplew.writeInt("v1834");
  }
  else {
    v1835 = mplew.writeShort("v1835");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245AD0)) {
  mplew.StartNode("Mask - " + map.get(0x2245AD0));
  if (sub_42CDC0(mask)) {
    v1840 = mplew.writeInt("v1840");
  }
  else {
    v1841 = mplew.writeShort("v1841");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245B18)) {
  mplew.StartNode("Mask - " + map.get(0x2245B18));
  if (sub_42CDC0(mask)) {
    v1846 = mplew.writeInt("v1846");
  }
  else {
    v1847 = mplew.writeShort("v1847");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245B60)) {
  mplew.StartNode("Mask - " + map.get(0x2245B60));
  if (sub_42CDC0(mask)) {
    v1852 = mplew.writeInt("v1852");
  }
  else {
    v1853 = mplew.writeShort("v1853");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245BA8)) {
  mplew.StartNode("Mask - " + map.get(0x2245BA8));
  if (sub_42CDC0(mask)) {
    v1858 = mplew.writeInt("v1858");
  }
  else {
    v1859 = mplew.writeShort("v1859");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245BF0)) {
  mplew.StartNode("Mask - " + map.get(0x2245BF0));
  if (sub_42CDC0(mask)) {
    v1864 = mplew.writeInt("v1864");
  }
  else {
    v1865 = mplew.writeShort("v1865");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245C38)) {
  mplew.StartNode("Mask - " + map.get(0x2245C38));
  if (sub_42CDC0(mask)) {
    v1870 = mplew.writeInt("v1870");
  }
  else {
    v1871 = mplew.writeShort("v1871");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245C80)) {
  mplew.StartNode("Mask - " + map.get(0x2245C80));
  if (sub_42CDC0(mask)) {
    v1876 = mplew.writeInt("v1876");
  }
  else {
    v1877 = mplew.writeShort("v1877");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245CC8)) {
  mplew.StartNode("Mask - " + map.get(0x2245CC8));
  if (sub_42CDC0(mask)) {
    v1882 = mplew.writeInt("v1882");
  }
  else {
    v1883 = mplew.writeShort("v1883");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245D10)) {
  mplew.StartNode("Mask - " + map.get(0x2245D10));
  if (sub_42CDC0(mask)) {
    v1888 = mplew.writeInt("v1888");
  }
  else {
    v1889 = mplew.writeShort("v1889");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245D58)) {
  mplew.StartNode("Mask - " + map.get(0x2245D58));
  if (sub_42CDC0(mask)) {
    v1894 = mplew.writeInt("v1894");
  }
  else {
    v1895 = mplew.writeShort("v1895");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245DA0)) {
  mplew.StartNode("Mask - " + map.get(0x2245DA0));
  if (sub_42CDC0(mask)) {
    v1900 = mplew.writeInt("v1900");
  }
  else {
    v1901 = mplew.writeShort("v1901");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245DE8)) {
  mplew.StartNode("Mask - " + map.get(0x2245DE8));
  if (sub_42CDC0(mask)) {
    v1906 = mplew.writeInt("v1906");
  }
  else {
    v1907 = mplew.writeShort("v1907");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245E30)) {
  mplew.StartNode("Mask - " + map.get(0x2245E30));
  if (sub_42CDC0(mask)) {
    v1912 = mplew.writeInt("v1912");
  }
  else {
    v1913 = mplew.writeShort("v1913");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245E78)) {
  mplew.StartNode("Mask - " + map.get(0x2245E78));
  if (sub_42CDC0(mask)) {
    v1918 = mplew.writeInt("v1918");
  }
  else {
    v1919 = mplew.writeShort("v1919");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245EC0)) {
  mplew.StartNode("Mask - " + map.get(0x2245EC0));
  if (sub_42CDC0(mask)) {
    v1924 = mplew.writeInt("v1924");
  }
  else {
    v1925 = mplew.writeShort("v1925");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245F08)) {
  mplew.StartNode("Mask - " + map.get(0x2245F08));
  if (sub_42CDC0(mask)) {
    v1930 = mplew.writeInt("v1930");
  }
  else {
    v1931 = mplew.writeShort("v1931");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245F50)) {
  mplew.StartNode("Mask - " + map.get(0x2245F50));
  if (sub_42CDC0(mask)) {
    v1936 = mplew.writeInt("v1936");
  }
  else {
    v1937 = mplew.writeShort("v1937");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245F98)) {
  mplew.StartNode("Mask - " + map.get(0x2245F98));
  if (sub_42CDC0(mask)) {
    v1942 = mplew.writeInt("v1942");
  }
  else {
    v1943 = mplew.writeShort("v1943");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2245FE0)) {
  mplew.StartNode("Mask - " + map.get(0x2245FE0));
  if (sub_42CDC0(mask)) {
    v1948 = mplew.writeInt("v1948");
  }
  else {
    v1949 = mplew.writeShort("v1949");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246028)) {
  mplew.StartNode("Mask - " + map.get(0x2246028));
  if (sub_42CDC0(mask)) {
    v1954 = mplew.writeInt("v1954");
  }
  else {
    v1955 = mplew.writeShort("v1955");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246070)) {
  mplew.StartNode("Mask - " + map.get(0x2246070));
  if (sub_42CDC0(mask)) {
    v1960 = mplew.writeInt("v1960");
  }
  else {
    v1961 = mplew.writeShort("v1961");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22460B8)) {
  mplew.StartNode("Mask - " + map.get(0x22460B8));
  if (sub_42CDC0(mask)) {
    v1966 = mplew.writeInt("v1966");
  }
  else {
    v1967 = mplew.writeShort("v1967");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246100)) {
  mplew.StartNode("Mask - " + map.get(0x2246100));
  if (sub_42CDC0(mask)) {
    v1972 = mplew.writeInt("v1972");
  }
  else {
    v1973 = mplew.writeShort("v1973");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246148)) {
  mplew.StartNode("Mask - " + map.get(0x2246148));
  if (sub_42CDC0(mask)) {
    v1978 = mplew.writeInt("v1978");
  }
  else {
    v1979 = mplew.writeShort("v1979");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246190)) {
  mplew.StartNode("Mask - " + map.get(0x2246190));
  if (sub_42CDC0(mask)) {
    v1984 = mplew.writeInt("v1984");
  }
  else {
    v1985 = mplew.writeShort("v1985");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22461D8)) {
  mplew.StartNode("Mask - " + map.get(0x22461D8));
  if (sub_42CDC0(mask)) {
    v1990 = mplew.writeInt("v1990");
  }
  else {
    v1991 = mplew.writeShort("v1991");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246220)) {
  mplew.StartNode("Mask - " + map.get(0x2246220));
  if (sub_42CDC0(mask)) {
    v1996 = mplew.writeInt("v1996");
  }
  else {
    v1997 = mplew.writeShort("v1997");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246268)) {
  mplew.StartNode("Mask - " + map.get(0x2246268));
  if (sub_42CDC0(mask)) {
    v2002 = mplew.writeInt("v2002");
  }
  else {
    v2003 = mplew.writeShort("v2003");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22462B0)) {
  mplew.StartNode("Mask - " + map.get(0x22462B0));
  if (sub_42CDC0(mask)) {
    v2008 = mplew.writeInt("v2008");
  }
  else {
    v2009 = mplew.writeShort("v2009");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22462F8)) {
  mplew.StartNode("Mask - " + map.get(0x22462F8));
  if (sub_42CDC0(mask)) {
    v2014 = mplew.writeInt("v2014");
  }
  else {
    v2015 = mplew.writeShort("v2015");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246340)) {
  mplew.StartNode("Mask - " + map.get(0x2246340));
  if (sub_42CDC0(mask)) {
    v2020 = mplew.writeInt("v2020");
  }
  else {
    v2021 = mplew.writeShort("v2021");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246388)) {
  mplew.StartNode("Mask - " + map.get(0x2246388));
  if (sub_42CDC0(mask)) {
    v2026 = mplew.writeInt("v2026");
  }
  else {
    v2027 = mplew.writeShort("v2027");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22463D0)) {
  mplew.StartNode("Mask - " + map.get(0x22463D0));
  if (sub_42CDC0(mask)) {
    v2032 = mplew.writeInt("v2032");
  }
  else {
    v2033 = mplew.writeShort("v2033");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246418)) {
  mplew.StartNode("Mask - " + map.get(0x2246418));
  if (sub_42CDC0(mask)) {
    v2038 = mplew.writeInt("v2038");
  }
  else {
    v2039 = mplew.writeShort("v2039");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246460)) {
  mplew.StartNode("Mask - " + map.get(0x2246460));
  if (sub_42CDC0(mask)) {
    v2044 = mplew.writeInt("v2044");
  }
  else {
    v2045 = mplew.writeShort("v2045");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22464A8)) {
  mplew.StartNode("Mask - " + map.get(0x22464A8));
  if (sub_42CDC0(mask)) {
    v2050 = mplew.writeInt("v2050");
  }
  else {
    v2051 = mplew.writeShort("v2051");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22464F0)) {
  mplew.StartNode("Mask - " + map.get(0x22464F0));
  if (sub_42CDC0(mask)) {
    v2056 = mplew.writeInt("v2056");
  }
  else {
    v2057 = mplew.writeShort("v2057");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246538)) {
  mplew.StartNode("Mask - " + map.get(0x2246538));
  if (sub_42CDC0(mask)) {
    v2062 = mplew.writeInt("v2062");
  }
  else {
    v2063 = mplew.writeShort("v2063");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246580)) {
  mplew.StartNode("Mask - " + map.get(0x2246580));
  if (sub_42CDC0(mask)) {
    v2068 = mplew.writeInt("v2068");
  }
  else {
    v2069 = mplew.writeShort("v2069");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22465C8)) {
  mplew.StartNode("Mask - " + map.get(0x22465C8));
  if (sub_42CDC0(mask)) {
    v2074 = mplew.writeInt("v2074");
  }
  else {
    v2075 = mplew.writeShort("v2075");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246610)) {
  mplew.StartNode("Mask - " + map.get(0x2246610));
  if (sub_42CDC0(mask)) {
    v2080 = mplew.writeInt("v2080");
  }
  else {
    v2081 = mplew.writeShort("v2081");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246658)) {
  mplew.StartNode("Mask - " + map.get(0x2246658));
  if (sub_42CDC0(mask)) {
    v2086 = mplew.writeInt("v2086");
  }
  else {
    v2087 = mplew.writeShort("v2087");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22466A0)) {
  mplew.StartNode("Mask - " + map.get(0x22466A0));
  if (sub_42CDC0(mask)) {
    v2092 = mplew.writeInt("v2092");
  }
  else {
    v2093 = mplew.writeShort("v2093");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22466E8)) {
  mplew.StartNode("Mask - " + map.get(0x22466E8));
  if (sub_42CDC0(mask)) {
    v2098 = mplew.writeInt("v2098");
  }
  else {
    v2099 = mplew.writeShort("v2099");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246730)) {
  mplew.StartNode("Mask - " + map.get(0x2246730));
  if (sub_42CDC0(mask)) {
    v2104 = mplew.writeInt("v2104");
  }
  else {
    v2105 = mplew.writeShort("v2105");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246778)) {
  mplew.StartNode("Mask - " + map.get(0x2246778));
  if (sub_42CDC0(mask)) {
    v2110 = mplew.writeInt("v2110");
  }
  else {
    v2111 = mplew.writeShort("v2111");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22467C0)) {
  mplew.StartNode("Mask - " + map.get(0x22467C0));
  if (sub_42CDC0(mask)) {
    v2116 = mplew.writeInt("v2116");
  }
  else {
    v2117 = mplew.writeShort("v2117");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246808)) {
  mplew.StartNode("Mask - " + map.get(0x2246808));
  if (sub_42CDC0(mask)) {
    v2122 = mplew.writeInt("v2122");
  }
  else {
    v2123 = mplew.writeShort("v2123");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246850)) {
  mplew.StartNode("Mask - " + map.get(0x2246850));
  if (sub_42CDC0(mask)) {
    v2128 = mplew.writeInt("v2128");
  }
  else {
    v2129 = mplew.writeShort("v2129");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246898)) {
  mplew.StartNode("Mask - " + map.get(0x2246898));
  if (sub_42CDC0(mask)) {
    v2134 = mplew.writeInt("v2134");
  }
  else {
    v2135 = mplew.writeShort("v2135");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22468E0)) {
  mplew.StartNode("Mask - " + map.get(0x22468E0));
  if (sub_42CDC0(mask)) {
    v2140 = mplew.writeInt("v2140");
  }
  else {
    v2141 = mplew.writeShort("v2141");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246928)) {
  mplew.StartNode("Mask - " + map.get(0x2246928));
  if (sub_42CDC0(mask)) {
    v2146 = mplew.writeInt("v2146");
  }
  else {
    v2147 = mplew.writeShort("v2147");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246970)) {
  mplew.StartNode("Mask - " + map.get(0x2246970));
  if (sub_42CDC0(mask)) {
    v2152 = mplew.writeInt("v2152");
  }
  else {
    v2153 = mplew.writeShort("v2153");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22469B8)) {
  mplew.StartNode("Mask - " + map.get(0x22469B8));
  if (sub_42CDC0(mask)) {
    v2158 = mplew.writeInt("v2158");
  }
  else {
    v2159 = mplew.writeShort("v2159");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246A00)) {
  mplew.StartNode("Mask - " + map.get(0x2246A00));
  if (sub_42CDC0(mask)) {
    v2164 = mplew.writeInt("v2164");
  }
  else {
    v2165 = mplew.writeShort("v2165");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246A48)) {
  mplew.StartNode("Mask - " + map.get(0x2246A48));
  if (sub_42CDC0(mask)) {
    v2170 = mplew.writeInt("v2170");
  }
  else {
    v2171 = mplew.writeShort("v2171");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246A90)) {
  mplew.StartNode("Mask - " + map.get(0x2246A90));
  if (sub_42CDC0(mask)) {
    v2176 = mplew.writeInt("v2176");
  }
  else {
    v2177 = mplew.writeShort("v2177");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246AD8)) {
  mplew.StartNode("Mask - " + map.get(0x2246AD8));
  if (sub_42CDC0(mask)) {
    v2182 = mplew.writeInt("v2182");
  }
  else {
    v2183 = mplew.writeShort("v2183");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246B20)) {
  mplew.StartNode("Mask - " + map.get(0x2246B20));
  if (sub_42CDC0(mask)) {
    v2188 = mplew.writeInt("v2188");
  }
  else {
    v2189 = mplew.writeShort("v2189");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246B68)) {
  mplew.StartNode("Mask - " + map.get(0x2246B68));
  if (sub_42CDC0(mask)) {
    v2194 = mplew.writeInt("v2194");
  }
  else {
    v2195 = mplew.writeShort("v2195");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246BB0)) {
  mplew.StartNode("Mask - " + map.get(0x2246BB0));
  if (sub_42CDC0(mask)) {
    v2200 = mplew.writeInt("v2200");
  }
  else {
    v2201 = mplew.writeShort("v2201");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246BF8)) {
  mplew.StartNode("Mask - " + map.get(0x2246BF8));
  if (sub_42CDC0(mask)) {
    v2206 = mplew.writeInt("v2206");
  }
  else {
    v2207 = mplew.writeShort("v2207");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246C40)) {
  mplew.StartNode("Mask - " + map.get(0x2246C40));
  if (sub_42CDC0(mask)) {
    v2212 = mplew.writeInt("v2212");
  }
  else {
    v2213 = mplew.writeShort("v2213");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246C88)) {
  mplew.StartNode("Mask - " + map.get(0x2246C88));
  if (sub_42CDC0(mask)) {
    v2218 = mplew.writeInt("v2218");
  }
  else {
    v2219 = mplew.writeShort("v2219");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246CD0)) {
  mplew.StartNode("Mask - " + map.get(0x2246CD0));
  if (sub_42CDC0(mask)) {
    v2224 = mplew.writeInt("v2224");
  }
  else {
    v2225 = mplew.writeShort("v2225");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246D18)) {
  mplew.StartNode("Mask - " + map.get(0x2246D18));
  if (sub_42CDC0(mask)) {
    v2230 = mplew.writeInt("v2230");
  }
  else {
    v2231 = mplew.writeShort("v2231");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246D60)) {
  mplew.StartNode("Mask - " + map.get(0x2246D60));
  if (sub_42CDC0(mask)) {
    v2236 = mplew.writeInt("v2236");
  }
  else {
    v2237 = mplew.writeShort("v2237");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246DA8)) {
  mplew.StartNode("Mask - " + map.get(0x2246DA8));
  if (sub_42CDC0(mask)) {
    v2242 = mplew.writeInt("v2242");
  }
  else {
    v2243 = mplew.writeShort("v2243");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246DF0)) {
  mplew.StartNode("Mask - " + map.get(0x2246DF0));
  if (sub_42CDC0(mask)) {
    v2248 = mplew.writeInt("v2248");
  }
  else {
    v2249 = mplew.writeShort("v2249");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246E38)) {
  mplew.StartNode("Mask - " + map.get(0x2246E38));
  if (sub_42CDC0(mask)) {
    v2254 = mplew.writeInt("v2254");
  }
  else {
    v2255 = mplew.writeShort("v2255");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246E80)) {
  mplew.StartNode("Mask - " + map.get(0x2246E80));
  if (sub_42CDC0(mask)) {
    v2260 = mplew.writeInt("v2260");
  }
  else {
    v2261 = mplew.writeShort("v2261");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246EC8)) {
  mplew.StartNode("Mask - " + map.get(0x2246EC8));
  if (sub_42CDC0(mask)) {
    v2266 = mplew.writeInt("v2266");
  }
  else {
    v2267 = mplew.writeShort("v2267");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246F10)) {
  mplew.StartNode("Mask - " + map.get(0x2246F10));
  if (sub_42CDC0(mask)) {
    v2272 = mplew.writeInt("v2272");
  }
  else {
    v2273 = mplew.writeShort("v2273");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246F58)) {
  mplew.StartNode("Mask - " + map.get(0x2246F58));
  if (sub_42CDC0(mask)) {
    v2278 = mplew.writeInt("v2278");
  }
  else {
    v2279 = mplew.writeShort("v2279");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246FA0)) {
  mplew.StartNode("Mask - " + map.get(0x2246FA0));
  if (sub_42CDC0(mask)) {
    v2284 = mplew.writeInt("v2284");
  }
  else {
    v2285 = mplew.writeShort("v2285");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246FE8)) {
  mplew.StartNode("Mask - " + map.get(0x2246FE8));
  if (sub_42CDC0(mask)) {
    v2290 = mplew.writeInt("v2290");
  }
  else {
    v2291 = mplew.writeShort("v2291");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247030)) {
  mplew.StartNode("Mask - " + map.get(0x2247030) + " 爆破手子弹数");
  if (sub_42CDC0(mask)) {
    v2296 = mplew.writeInt("v2296");
  }
  else {
    v2297 = mplew.writeShort("v2297");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247078)) {
  mplew.StartNode("Mask - " + map.get(0x2247078));
  if (sub_42CDC0(mask)) {
    v2302 = mplew.writeInt("v2302");
  }
  else {
    v2303 = mplew.writeShort("v2303");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22470C0)) {
  mplew.StartNode("Mask - " + map.get(0x22470C0));
  if (sub_42CDC0(mask)) {
    v2308 = mplew.writeInt("v2308");
  }
  else {
    v2309 = mplew.writeShort("v2309");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247108)) {
  mplew.StartNode("Mask - " + map.get(0x2247108));
  if (sub_42CDC0(mask)) {
    v2314 = mplew.writeInt("v2314");
  }
  else {
    v2315 = mplew.writeShort("v2315");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247150)) {
  mplew.StartNode("Mask - " + map.get(0x2247150));
  if (sub_42CDC0(mask)) {
    v2320 = mplew.writeInt("v2320");
  }
  else {
    v2321 = mplew.writeShort("v2321");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247198)) {
  mplew.StartNode("Mask - " + map.get(0x2247198));
  if (sub_42CDC0(mask)) {
    v2326 = mplew.writeInt("v2326");
  }
  else {
    v2327 = mplew.writeShort("v2327");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22471E0)) {
  mplew.StartNode("Mask - " + map.get(0x22471E0));
  if (sub_42CDC0(mask)) {
    v2332 = mplew.writeInt("v2332");
  }
  else {
    v2333 = mplew.writeShort("v2333");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247228)) {
  mplew.StartNode("Mask - " + map.get(0x2247228));
  if (sub_42CDC0(mask)) {
    v2338 = mplew.writeInt("v2338");
  }
  else {
    v2339 = mplew.writeShort("v2339");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247270)) {
  mplew.StartNode("Mask - " + map.get(0x2247270));
  if (sub_42CDC0(mask)) {
    v2344 = mplew.writeInt("v2344");
  }
  else {
    v2345 = mplew.writeShort("v2345");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22472B8)) {
  mplew.StartNode("Mask - " + map.get(0x22472B8));
  if (sub_42CDC0(mask)) {
    v2350 = mplew.writeInt("v2350");
  }
  else {
    v2351 = mplew.writeShort("v2351");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247300)) {
  mplew.StartNode("Mask - " + map.get(0x2247300));
  if (sub_42CDC0(mask)) {
    v2356 = mplew.writeInt("v2356");
  }
  else {
    v2357 = mplew.writeShort("v2357");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247348)) {
  mplew.StartNode("Mask - " + map.get(0x2247348));
  if (sub_42CDC0(mask)) {
    v2362 = mplew.writeInt("v2362");
  }
  else {
    v2363 = mplew.writeShort("v2363");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247390)) {
  mplew.StartNode("Mask - " + map.get(0x2247390));
  if (sub_42CDC0(mask)) {
    v2368 = mplew.writeInt("v2368");
  }
  else {
    v2369 = mplew.writeShort("v2369");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22473D8)) {
  mplew.StartNode("Mask - " + map.get(0x22473D8));
  if (sub_42CDC0(mask)) {
    v2374 = mplew.writeInt("v2374");
  }
  else {
    v2375 = mplew.writeShort("v2375");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22405E0)) {
  mplew.StartNode("Mask - " + map.get(0x22405E0));
  if (sub_42CDC0(mask)) {
    v2380 = mplew.writeInt("v2380");
  }
  else {
    v2381 = mplew.writeShort("v2381");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247420)) {
  mplew.StartNode("Mask - " + map.get(0x2247420));
  if (sub_42CDC0(mask)) {
    v2386 = mplew.writeInt("v2386");
  }
  else {
    v2387 = mplew.writeShort("v2387");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247468)) {
  mplew.StartNode("Mask - " + map.get(0x2247468));
  if (sub_42CDC0(mask)) {
    v2392 = mplew.writeInt("v2392");
  }
  else {
    v2393 = mplew.writeShort("v2393");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240628)) {
  mplew.StartNode("Mask - " + map.get(0x2240628));
  if (sub_42CDC0(mask)) {
    v2398 = mplew.writeInt("v2398");
  }
  else {
    v2399 = mplew.writeShort("v2399");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2240670)) {
  mplew.StartNode("Mask - " + map.get(0x2240670));
  if (sub_42CDC0(mask)) {
    v2404 = mplew.writeInt("v2404");
  }
  else {
    v2405 = mplew.writeShort("v2405");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22474B0)) {
  mplew.StartNode("Mask - " + map.get(0x22474B0));
  if (sub_42CDC0(mask)) {
    v2410 = mplew.writeInt("v2410");
  }
  else {
    v2411 = mplew.writeShort("v2411");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22474F8)) {
  mplew.StartNode("Mask - " + map.get(0x22474F8));
  if (sub_42CDC0(mask)) {
    v2416 = mplew.writeInt("v2416");
  }
  else {
    v2417 = mplew.writeShort("v2417");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247540)) {
  mplew.StartNode("Mask - " + map.get(0x2247540));
  if (sub_42CDC0(mask)) {
    v2422 = mplew.writeInt("v2422");
  }
  else {
    v2423 = mplew.writeShort("v2423");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247588)) {
  mplew.StartNode("Mask - " + map.get(0x2247588));
  if (sub_42CDC0(mask)) {
    v2428 = mplew.writeInt("v2428");
  }
  else {
    v2429 = mplew.writeShort("v2429");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22475D0)) {
  mplew.StartNode("Mask - " + map.get(0x22475D0));
  if (sub_42CDC0(mask)) {
    v2434 = mplew.writeInt("v2434");
  }
  else {
    v2435 = mplew.writeShort("v2435");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247618)) {
  mplew.StartNode("Mask - " + map.get(0x2247618));
  if (sub_42CDC0(mask)) {
    v2440 = mplew.writeInt("v2440");
  }
  else {
    v2441 = mplew.writeShort("v2441");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247660)) {
  mplew.StartNode("Mask - " + map.get(0x2247660));
  if (sub_42CDC0(mask)) {
    v2446 = mplew.writeInt("v2446");
  }
  else {
    v2447 = mplew.writeShort("v2447");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22476A8)) {
  mplew.StartNode("Mask - " + map.get(0x22476A8));
  if (sub_42CDC0(mask)) {
    v2452 = mplew.writeInt("v2452");
  }
  else {
    v2453 = mplew.writeShort("v2453");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22476F0)) {
  mplew.StartNode("Mask - " + map.get(0x22476F0));
  if (sub_42CDC0(mask)) {
    v2458 = mplew.writeInt("v2458");
  }
  else {
    v2459 = mplew.writeShort("v2459");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247738)) {
  mplew.StartNode("Mask - " + map.get(0x2247738));
  if (sub_42CDC0(mask)) {
    v2464 = mplew.writeInt("v2464");
  }
  else {
    v2465 = mplew.writeShort("v2465");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247780)) {
  mplew.StartNode("Mask - " + map.get(0x2247780));
  if (sub_42CDC0(mask)) {
    v2470 = mplew.writeInt("v2470");
  }
  else {
    v2471 = mplew.writeShort("v2471");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246DA8)) {
  mplew.StartNode("Mask - " + map.get(0x2246DA8));
  if (sub_42CDC0(mask)) {
    v2476 = mplew.writeInt("v2476");
  }
  else {
    v2477 = mplew.writeShort("v2477");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246DF0)) {
  mplew.StartNode("Mask - " + map.get(0x2246DF0));
  if (sub_42CDC0(mask)) {
    v2482 = mplew.writeInt("v2482");
  }
  else {
    v2483 = mplew.writeShort("v2483");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22477C8)) {
  mplew.StartNode("Mask - " + map.get(0x22477C8));
  if (sub_42CDC0(mask)) {
    v2488 = mplew.writeInt("v2488");
  }
  else {
    v2489 = mplew.writeShort("v2489");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247810)) {
  mplew.StartNode("Mask - " + map.get(0x2247810));
  if (sub_42CDC0(mask)) {
    v2494 = mplew.writeInt("v2494");
  }
  else {
    v2495 = mplew.writeShort("v2495");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2246C88)) {
  mplew.StartNode("Mask - " + map.get(0x2246C88));
  if (sub_42CDC0(mask)) {
    v2500 = mplew.writeInt("v2500");
  }
  else {
    v2501 = mplew.writeShort("v2501");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247858)) {
  mplew.StartNode("Mask - " + map.get(0x2247858));
  if (sub_42CDC0(mask)) {
    v2506 = mplew.writeInt("v2506");
  }
  else {
    v2507 = mplew.writeShort("v2507");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22478A0)) {
  mplew.StartNode("Mask - " + map.get(0x22478A0));
  if (sub_42CDC0(mask)) {
    v2512 = mplew.writeInt("v2512");
  }
  else {
    v2513 = mplew.writeShort("v2513");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22478E8)) {
  mplew.StartNode("Mask - " + map.get(0x22478E8));
  if (sub_42CDC0(mask)) {
    v2518 = mplew.writeInt("v2518");
  }
  else {
    v2519 = mplew.writeShort("v2519");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247930)) {
  mplew.StartNode("Mask - " + map.get(0x2247930));
  if (sub_42CDC0(mask)) {
    v2524 = mplew.writeInt("v2524");
  }
  else {
    v2525 = mplew.writeShort("v2525");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247978)) {
  mplew.StartNode("Mask - " + map.get(0x2247978));
  if (sub_42CDC0(mask)) {
    v2530 = mplew.writeInt("v2530");
  }
  else {
    v2531 = mplew.writeShort("v2531");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22479C0)) {
  mplew.StartNode("Mask - " + map.get(0x22479C0));
  if (sub_42CDC0(mask)) {
    v2536 = mplew.writeInt("v2536");
  }
  else {
    v2537 = mplew.writeShort("v2537");
  }
  v4831 = mplew.writeInt("v4831");
  v4832 = mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22447B0)) {
  mplew.StartNode("Mask - " + map.get(0x22447B0));
  v2542 = mplew.writeInt("v2542");
  v2543 = mplew.writeInt("v2543");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x22447F8)) {
  mplew.StartNode("Mask - " + map.get(0x22447F8));
  v2544 = timeGetTime();
  v2545 = mplew.wri
  mplew.EndNode(false);
}
v4829 = mplew.writeShort("v4402",0);
for (i = 0; i < v4829; ++i) {
  v4402 = mplew.writeInt("v4402");
  v4400 = mplew.write("v4400");
}
// HAYATO
if (Check_Buff(mask, 0x2247540)) {
  mplew.StartNode("Mask - " + map.get(0x2247540));
  v2547 = mplew.writeInt("v2547");
  mplew.EndNode(false);
}
v2548 = mplew.write("");
v2549 = mplew.write("");
v2550 = mplew.write("v2550");
// DICE_ROLL
if (Check_Buff(mask, 0x2242B48)) {
  mplew.StartNode("Mask - " + map.get(0x2242B48));
  for (j = 0; j < 22; ++j)
    mplew.writeInt("");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247A08)) {
  mplew.StartNode("Mask - " + map.get(0x2247A08));
  v2551 = mplew.write("v2551");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247A50)) {
  mplew.StartNode("Mask - " + map.get(0x2247A50));
  v2552 = mplew.write("v2552");
  mplew.EndNode(false);
}
// JUDGMENT_DRAW
if (Check_Buff(mask, 0x2243EB0)) {
  mplew.StartNode("Mask - " + map.get(0x2243EB0));
  v2553 = mplew.writeInt("v2553");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241A20)) {
  mplew.StartNode("Mask - " + map.get(0x2241A20));
  v2554 = mplew.write("v2554");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2241A68)) {
  mplew.StartNode("Mask - " + map.get(0x2241A68));
  v2555 = mplew.write("v2555");
  mplew.EndNode(false);
}
// 330
if (Check_Buff(mask, 0x2241318)) {
  mplew.StartNode("Mask - " + map.get(0x2241318));
  v2556 = mplew.write("v2556");
  v2557 = mplew.writeShort("v2557");
  v2558 = mplew.write("v2558");
  v2559 = mplew.write("v2559");
  mplew.EndNode(false);
}
// LUNAR_TIDE
if (Check_Buff(mask, 0x2243E68)) {
  mplew.StartNode("Mask - " + map.get(0x2243E68));
  v2560 = mplew.writeInt("v2560");
  mplew.EndNode(false);
}
// ABNORMAL_BUFF_RESISTANCES
if (Check_Buff(mask, 0x2243D48)) {
  mplew.StartNode("Mask - " + map.get(0x2243D48));
  v2561 = mplew.write("") != 0;
  mplew.EndNode(false);
}
// LUMINOUS_GAUGE
if (Check_Buff(mask, 0x2243F40)) {
  mplew.StartNode("Mask - " + map.get(0x2243F40));
  for (k = 0; k < 2; ++k) {
    sub_43E440();
  }
  v2562 = mplew.writeInt("v2562");
  v2563 = mplew.writeInt("v2563");
  mplew.EndNode(false);
}
// IGNORE_DEF
if (Check_Buff(mask, 0x2243C70)) {
  mplew.StartNode("Mask - " + map.get(0x2243C70));
  v2564 = mplew.writeInt("v2564");
  mplew.EndNode(false);
}
// TEMPEST_BLADES
if (Check_Buff(mask, 0x22440A8)) {
  mplew.StartNode("Mask - " + map.get(0x22440A8));
  sub_E8C3D0();
  mplew.EndNode(false);
}
// KAISER_COMBO
if (Check_Buff(mask, 0x2243F88)) {
  mplew.StartNode("Mask - " + map.get(0x2243F88))
  v2565 = mplew.writeInt("v2565");
  mplew.EndNode(false);
}
// IDA_UNK_BUFF5
if (Check_Buff(mask, 0x2244258)) {
  mplew.StartNode("Mask - " + map.get(0x2244258));
  v4396 = 1;
  while (v4396) {
    v4395 = mplew.writeInt("v4395");
    if (v4395 <= 0) {
      break;
    }
  }
  mplew.EndNode(false);
}
// SLOW
if (Check_Buff(mask, 0x22415A0)) {
  mplew.StartNode("Mask - " + map.get(0x22415A0));
  v2566 = mplew.write("") != 0;
  mplew.EndNode(false);
}
// 279
if (Check_Buff(mask, 0x2244570)) {
  mplew.StartNode("Mask - " + map.get(0x2244570));
  v2567 = mplew.write("v2567");
  mplew.EndNode(false);
}
// PARASHOCK_GUARD
if (Check_Buff(mask, 0x2244528)) {
  mplew.StartNode("Mask - " + map.get(0x2244528));
  v2568 = mplew.write("v2568");
  mplew.EndNode(false);
}
// 295
if (Check_Buff(mask, 0x2244AC8)) {
  mplew.StartNode("Mask - " + map.get(0x2244AC8));
  v2569 = mplew.write("v2569");
  mplew.EndNode(false);
}
// 296
if (Check_Buff(mask, 0x2244B10)) {
  mplew.StartNode("Mask - " + map.get(0x2244B10));
  v2570 = mplew.write("v2570");
  mplew.EndNode(false);
}
// IDA_SPECIAL_BUFF_2
if (Check_Buff(mask, 0x2244A80)) {
  mplew.StartNode("Mask - " + map.get(0x2244A80));
  v2571 = mplew.writeInt("v2571");
  v2572 = mplew.write("v2572");
  mplew.EndNode(false);
}
// 321
if (Check_Buff(mask, 0x22450B0)) {
  mplew.StartNode("Mask - " + map.get(0x22450B0));
  v2573 = mplew.write("v2573");
  mplew.EndNode(false);
}
// 167
if (Check_Buff(mask, 0x2242CF8)) {
  mplew.StartNode("Mask - " + map.get(0x2242CF8));
  v2574 = mplew.writeInt("v2574");
  v2575 = mplew.writeInt("v2575");
  mplew.EndNode(false);
}
// 332 IDA_BUFF_331
if (Check_Buff(mask, 0x22452F0)) {
  mplew.StartNode("Mask - " + map.get(0x22452F0));
  v2576 = mplew.writeInt("v2576");
  mplew.EndNode(false);
}
// 334 CROSS_SURGE
if (Check_Buff(mask, 0x2245380)) {
  mplew.StartNode("Mask - " + map.get(0x2245380));
  v2577 = mplew.writeInt("v2577");
  mplew.EndNode(false);
}
// 340
if (Check_Buff(mask, 0x2245458)) {
  mplew.StartNode("Mask - " + map.get(0x2245458));
  v2578 = mplew.writeInt("v2578");
  v2579 = mplew.writeInt("v2579");
  mplew.EndNode(false);
}
// 342
if (Check_Buff(mask, 0x2240700)) {
  mplew.StartNode("Mask - " + map.get(0x2240700));
  v2580 = mplew.writeInt("v2580");
  mplew.EndNode(false);
}
// 345
if (Check_Buff(mask, 0x2240748)) {
  mplew.StartNode("Mask - " + map.get(0x2240748));
  v2581 = mplew.writeInt("v2581");
  mplew.EndNode(false);
}
// DIVINE_FORCE_AURA
if (Check_Buff(mask, 0x2245578)) {
  mplew.StartNode("Mask - " + map.get(0x2245578));
  v2582 = mplew.write("v2582");
  mplew.EndNode(false);
}
// DIVINE_SPEED_AURA
if (Check_Buff(mask, 0x22455C0)) {
  mplew.StartNode("Mask - " + map.get(0x22455C0));
  v2583 = mplew.write("v2583");
  mplew.EndNode(false);
}
// IDA_UNK_BUFF14
if (Check_Buff(mask, 0x2245530)) {
  mplew.StartNode("Mask - " + map.get(0x2245530));
  v2584 = mplew.writeInt("v2584");
  mplew.EndNode(false);
}
// SHARP_EYES
if (Check_Buff(mask, 0x22418B8)) {
  mplew.StartNode("Mask - " + map.get(0x22418B8));
  v2585 = mplew.writeInt("v2585");
  mplew.EndNode(false);
}
// INFINITY
if (Check_Buff(mask, 0x2241AF8)) {
  mplew.StartNode("Mask - " + map.get(0x2241AF8));
  v2586 = mplew.writeInt("v2586");
  mplew.EndNode(false);
}
// 359
if (Check_Buff(mask, 0x2240868)) {
  mplew.StartNode("Mask - " + map.get(0x2240868));
  v2587 = mplew.writeInt("v2587");
  mplew.EndNode(false);
}
// 360
if (Check_Buff(mask, 0x2245920)) {
  mplew.StartNode("Mask - " + map.get(0x2245920));
  v2588 = mplew.writeInt("v2588");
  mplew.EndNode(false);
}
// IDA_UNK_BUFF16
if (Check_Buff(mask, 0x2247A98)) {
  mplew.StartNode("Mask - " + map.get(0x2247A98));
  v2589 = mplew.writeInt("v2589");
  v2590 = mplew.writeInt("v2590");
  mplew.EndNode(false);
}
// MILITARY_MIGHT
if (Check_Buff(mask, 0x2245FE0)) {
  mplew.StartNode("Mask - " + map.get(0x2245FE0));
  v2591 = mplew.writeInt("v2591");
  mplew.EndNode(false);
}
// WILLOW_DODGE
if (Check_Buff(mask, 0x2245F50)) {
  mplew.StartNode("Mask - " + map.get(0x2245F50));
  v2592 = mplew.writeInt("v2592");
  mplew.EndNode(false);
}
// MILITARY_MIGHT1
if (Check_Buff(mask, 0x2246028)) {
  mplew.StartNode("Mask - " + map.get(0x2246028));
  v2593 = mplew.writeInt("v2593");
  v2594 = mplew.write("v2594");
  mplew.EndNode(false);
}
// IDA_BUFF_402
if (Check_Buff(mask, 0x2246388)) {
  mplew.StartNode("Mask - " + map.get(0x2246388));
  v2595 = mplew.writeInt("v2595");
  mplew.EndNode(false);
}
// PROP
if (Check_Buff(mask, 0x22464F0)) {
  mplew.StartNode("Mask - " + map.get(0x22464F0));
  v2596 = mplew.writeInt("v2596");
  mplew.EndNode(false);
}
// GRIM_CONTRACT
if (Check_Buff(mask, 0x2246808)) {
  mplew.StartNode("Mask - " + map.get(0x2246808));
  v2597 = mplew.writeInt("v2597");
  v2598 = mplew.writeInt("v2598");
  mplew.EndNode(false);
}
// IDA_BUFF_419
if (Check_Buff(mask, 0x2246898)) {
  mplew.StartNode("Mask - " + map.get(0x2246898));
  v2599 = mplew.writeInt("v2599");
  v2600 = mplew.write("v2600");
  v2601 = mplew.writeInt("v2601");
  v2602 = mplew.writeInt("v2602");
  mplew.EndNode(false);
}
// IDA_BUFF_439
if (Check_Buff(mask, 0x2246EC8)) {
  mplew.StartNode("Mask - " + map.get(0x2246EC8));
  v2603 = mplew.write("v2603");
  mplew.EndNode(false);
}
// 爆破手子弹数
if (Check_Buff(mask, 0x2247030)) {
  mplew.StartNode("Mask - " + map.get(0x2247030) + " 爆破手子弹数");
  v2604 = mplew.write("v2604");
  v2605 = mplew.writeShort("v2605");
  mplew.EndNode(false);
}
// IDA_BUFF_446
if (Check_Buff(mask, 0x22470C0)) {
  mplew.StartNode("Mask - " + map.get(0x22470C0));
  v2606 = mplew.writeShort("v2606");
  v2607 = mplew.write("v2607");
  mplew.EndNode(false);
}
v2608 = mplew.writeInt("v2608");
// 429
if (Check_Buff(mask, 0x2246B20)) {
  mplew.StartNode("Mask - " + map.get(0x2246B20));
  v2609 = mplew.writeInt("v2609");
  mplew.EndNode(false);
}
// 66
if (Check_Buff(mask, 0x2240EE0)) {
  mplew.StartNode("Mask - " + map.get(0x2240EE0));
  v2610 = mplew.writeInt("v2610");
  mplew.EndNode(false);
}
// 454
if (Check_Buff(mask, 0x2247270)) {
  mplew.StartNode("Mask - " + map.get(0x2247270));
  v2611 = mplew.writeInt("v2611");
  mplew.EndNode(false);
}
for (l = 0; l < 9; ++l) {
  if (sub_B7C3F0(mask, (489 + l))) {
    mplew.StartNode("Mas+-- 未处理 " + (489 + l));
    // ((*v4393 + 24))(v4393, iPacket);
    switch ((489 + l)) {
      case 492:
        // mplew.writeShort("");
       // mplew.writeZeroBytes(7);
       mplew.writeInt("Skill Value");
        mplew.writeInt("SkillID");
      //  mplew.writeInt("currentTime");
         mplew.writeZeroBytes(5);
        //mplew.writeZeroBytes(9);// 00 00 00 00 00 00 00 00 00
        break;
        default:
        break;
    }
    mplew.EndNode(false);
  }
}
sub_E86220(mask);//未处理 N 个INT
if (Check_Buff(mask, 0x2240EE0)) {//66
  mplew.StartNode("Mask - " + map.get(0x2240EE0));
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247AE0)) {//452
  mplew.StartNode("Mask - " + map.get(0x2247AE0));
  sub_409530(v3051);
  mplew.writeInt("v2617");
  mplew.writeInt("v4832");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2242518)) {//309
  mplew.StartNode("Mask - " + map.get(0x2242518));
  v2620 = mplew.writeInt("v2620");
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247B28)) {//482
  mplew.StartNode("Mask - " + map.get(0x2247B28));
  v2621 = sub_438930();
  v2622 = sub_438930();
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247B70)) {//483
  mplew.StartNode("Mask - " + map.get(0x2247B70));
  v2623 = mplew.write("v2623");
  v2624 = sub_438930();
  mplew.EndNode(false);
}
if (Check_Buff(mask, 0x2247BB8)) {//484
  mplew.StartNode("Mask - " + map.get(0x2247BB8));
  v3052 = sub_438930();
  // sub_403C50(v3052);
  mplew.EndNode(false);
}

mplew.EndNode(false); //sub_452720
// }
// sub_452720();

v206 = mplew.writeShort("v206");
v216 = mplew.write("ComboAbilityBuff");
v217 = mplew.write("bFirstSet");
v214 = mplew.write("IsTemporaryOnShow");
if(sub_E60680(mask))
{
  mplew.write("isMovementAffectingStat",0)
}
 mplew.writeInt("未知",0);

function sub_42CAD0(/*  */) {
  v1 = 0;
  v11 = 0;
  v2 = 0;
  v3 = 5;
  while (1) {
    v4 = mplew.write("v4");
    v2 |= (v4 & 0x7F) << v1;
    if (v4 >= 0)
      break;
    v1 += 7;
  }
}
function sub_E86220(mask/*  */) {
  // unsigned var v3; // esi@1
  // var v4; // edi@1
  // var i; // ebx@1
  // var result; // eax@2

  v3 = 0;
  // v4 = Data;
  for ( i = 0; ; i += 40 )
  {
  //   result = *(v4 + 17184);
    // if ( !result || v3 >= *(result - 4) )
    result=true;
    if ( !result || v3 >=50 )
      break;
      
  // while (mplew.Remaining() > 12)//不知道怎么判断Stack buff
    if (maskbufftest(mask, v3))
    {
  //     sub_E84E80((i + *(v4 + 17184)), iPacket, v4, v3);
  mplew.StartNode(" Stack buff  "+v3  );
      sub_E84E80();
  mplew.EndNode(false);
    }
   // mplew.LogAppend("sub_E86220 - "+v3);
    ++v3;
  }
  // return result;
}
function sub_E84E80(/*  */) {
  v5 = mplew.writeInt("buffs.size()");
  v6 = v5;
  if (v6 > 0) {
    v47 = v6;
    do {
      mplew.StartNode("Stack buff " + v47);
      v49 = mplew.writeInt("getSkillId");
      v50 = mplew.writeInt("getBuffStatValueHolder().value");
      v59 = mplew.writeInt("currentTime");
      v9 = mplew.writeInt("ctime");
      v75 = mplew.writeInt("getBuffStatValueHolder().localDuration");
      v11 = mplew.writeInt("nuk Size");
      if (v11 > 0) {
        do {
          mplew.StartNode("nuk data " + v47);
          v73 = mplew.writeInt("v73");
          v76 = mplew.writeInt("v76");
          --v11;
          mplew.EndNode(false);
        }
        while (v11);
      }
      mplew.EndNode(false);
      --v47;
    }
    while (v47);
  }
  return
}
function sub_42CDC0(mask) {
 if (
   Check_Buff(mask, 0x22403E8)
   ||Check_Buff(mask, 0x2240430)
   ||Check_Buff(mask, 0x2240478)
   ||Check_Buff(mask, 0x22404C0)
   ||Check_Buff(mask, 0x2240508)
   ||Check_Buff(mask, 0x2240550)
   ||Check_Buff(mask, 0x2240598)
   ||Check_Buff(mask, 0x22405E0)
   ||Check_Buff(mask, 0x2240628)
   ||Check_Buff(mask, 0x2240670)
   ||Check_Buff(mask, 0x22406B8)
   ||Check_Buff(mask, 0x2240700) 
   ||Check_Buff(mask, 0x2240748)
   ||Check_Buff(mask, 0x2240790)
   ||Check_Buff(mask, 0x22407D8)
   ||Check_Buff(mask, 0x2240820)
   ||Check_Buff(mask, 0x2240868)
   ||Check_Buff(mask, 0x22408B0)
   ||Check_Buff(mask, 0x223FFC4)
   ||Check_Buff(mask, 0x22400D4)
 )
 {
   return true;
  }
  return false;
  // 0x223FEEC = 1;
  // v1 = sub_419030(v41/* &v41 */);
  // v2 = sub_40DF50(v1, v2, GetMapleBuff(map.get(0x22403E8)));
  // v3 = sub_40DF50(v2, v3, GetMapleBuff(map.get(0x2240430)));
  // v4 = sub_40DF50(v3, v4, GetMapleBuff(map.get(0x2240478)));//√
  // v5 = sub_40DF50(v4, v5, GetMapleBuff(map.get(0x22404C0)));//√
  // v6 = sub_40DF50(v5, v6, GetMapleBuff(map.get(0x2240508)));//√ 263
  // v7 = sub_40DF50(v6, v7, GetMapleBuff(map.get(0x2240550)));//√ 293
  // v8 = sub_40DF50(v7, v8, GetMapleBuff(map.get(0x2240598)));//√ 81
  // v9 = sub_40DF50(v8, v9, GetMapleBuff(map.get(0x22405E0)));//266
  // v10 = sub_40DF50(v9, v10, GetMapleBuff(map.get(0x2240628)));//478
  // v11 = sub_40DF50(v10, v11, GetMapleBuff(map.get(0x2240670)));//479
  // v12 = sub_40DF50(v11, v12, GetMapleBuff(map.get(0x22406B8)));//307
  // v13 = sub_40DF50(v12, v13, GetMapleBuff(map.get(0x2240700)));//√ 
  // v14 = sub_40DF50(v13, v14, GetMapleBuff(map.get(0x2240748)));//√
  // v15 = sub_40DF50(v14, v15, GetMapleBuff(map.get(0x2240790)));//√
  // v16 = sub_40DF50(v15, v16, GetMapleBuff(map.get(0x22407D8)));//√
  // v17 = sub_40DF50(v16, v17, GetMapleBuff(map.get(0x2240820)));//√
  // v18 = sub_40DF50(v17, v18, GetMapleBuff(map.get(0x2240868)));//√
  // v19 = sub_40DF50(v18, v19, GetMapleBuff(map.get(0x22408B0)));
  // var D_0x223FEA8 = [];
  // D_0x223FEA8 = sub_40DE90(D_0x223FEA8, v19, 0x220/* 0x223FEA8, v19, 0x220u */);
  // v20 = Check_Buff_Hex(mask, v20/*  &v22*/, D_0x223FEA8);
  // return sub_403900(v20/* v20 */) == 0;
   //return true;
}
// write access to const memory has var detected, the output may be wrong!
var acc=0;
function sub_E60680 (mask/*  */)
//BOOL __cdecl sub_E60680 (/* char a1 */)
{
  var value1=false;
  if ( !(acc & 1) )
  {
    acc = 1;
  value1=(Check_Buff(mask,0x225C9EC )
  ||Check_Buff(mask, 0x225C590)
  ||Check_Buff(mask, 0x225C5E0)
  ||Check_Buff(mask, 0x225C630)
  ||Check_Buff(mask, 0x225C680)
  ||Check_Buff(mask, 0x225C6D0)
  ||Check_Buff(mask, 0x225C720)
  ||Check_Buff(mask, 0x225C770)
  ||Check_Buff(mask, 0x225C7C0)
  ||Check_Buff(mask, 0x225CCB0)
  ||Check_Buff(mask, 0x225CC60)
  ||Check_Buff(mask, 0x225CD50)
  ||Check_Buff(mask, 0x225CDA0)
  ||Check_Buff(mask, 0x225CDF0)
  ||Check_Buff(mask, 0x225CE40)
  ||Check_Buff(mask, 0x225CE90)
  ||Check_Buff(mask, 0x225CEE0)
  ||Check_Buff(mask, 0x225CF30)
  ||Check_Buff(mask, 0x225CD00)
  ||Check_Buff(mask, 0x225CF80)
  ||Check_Buff(mask, 0x225CFD0)
  ||Check_Buff(mask, 0x225D020)
  ||Check_Buff(mask, 0x225D070)
  ||Check_Buff(mask, 0x225D0C0)
  ||Check_Buff(mask, 0x225D110)
  ||Check_Buff(mask, 0x225D160)
  ||Check_Buff(mask, 0x225D1B0)
  ||Check_Buff(mask, 0x225D200)
  ||Check_Buff(mask, 0x225D250)
  ||Check_Buff(mask, 0x225D2A0)
  ||Check_Buff(mask, 0x225D2F0)
  ||Check_Buff(mask, 0x225D340)
  ||Check_Buff(mask, 0x225CA80)
  ||Check_Buff(mask, 0x225D390)
  ||Check_Buff(mask, 0x225D3E0)
  ||Check_Buff(mask, 0x225D430)
  ||Check_Buff(mask, 0x225D480)
  ||Check_Buff(mask, 0x225D4D0))
    // v1 = Check_Buff_0(0x225C8DC, &v62, 0x225C9EC);
    // add_buff(&v43, v1, 0x220u);
    // v2 = Check_Buff_0(&0x225C540, &v42, 0x225C590);
    // v3 = Check_Buff_0(v2, &v79, 0x225C5E0);
    // v4 = Check_Buff_0(v3, &v77, 0x225C630);
    // v5 = Check_Buff_0(v4, &v75, 0x225C680);
    // v6 = Check_Buff_0(v5, &v73, 0x225C6D0);
    // v7 = Check_Buff_0(v6, &v71, 0x225C720);
    // v8 = Check_Buff_0(v7, &v69, 0x225C770);
    // v9 = Check_Buff_0(v8, &v67, 0x225C7C0);
    // v10 = Check_Buff_0(v9, &v65, &v43);
    // v11 = Check_Buff_0(v10, &v63, 0x225CCB0);
    // v12 = Check_Buff_0(v11, &v61, 0x225CC60);
    // v13 = Check_Buff_0(v12, &v59, 0x225CD50);
    // v14 = Check_Buff_0(v13, &v57, 0x225CDA0);
    // v15 = Check_Buff_0(v14, &v55, 0x225CDF0);
    // v16 = Check_Buff_0(v15, &v53, 0x225CE40);
    // v17 = Check_Buff_0(v16, &v51, 0x225CE90);
    // v18 = Check_Buff_0(v17, &v49, 0x225CEE0);
    // v19 = Check_Buff_0(v18, &v47, 0x225CF30);
    // v20 = Check_Buff_0(v19, &v45, 0x225CD00);
    // v21 = Check_Buff_0(v20, &v72, 0x225CF80);
    // v22 = Check_Buff_0(v21, &v44, 0x225CFD0);
    // v23 = Check_Buff_0(v22, &v76, 0x225D020);
    // v24 = Check_Buff_0(v23, &v60, 0x225D070);
    // v25 = Check_Buff_0(v24, &v70, 0x225D0C0);
    // v26 = Check_Buff_0(v25, &v58, 0x225D110);
    // v27 = Check_Buff_0(v26, &v78, 0x225D160);
    // v28 = Check_Buff_0(v27, &v56, 0x225D1B0);
    // v29 = Check_Buff_0(v28, &v68, 0x225D200);
    // v30 = Check_Buff_0(v29, &v54, 0x225D250);
    // v31 = Check_Buff_0(v30, &v74, 0x225D2A0);
    // v32 = Check_Buff_0(v31, &v52, 0x225D2F0);
    // v33 = Check_Buff_0(v32, &v66, 0x225D340);
    // v34 = Check_Buff_0(v33, &v50, 0x225CA80);
    // v35 = Check_Buff_0(v34, &v80, 0x225D390);
    // v36 = Check_Buff_0(v35, &v48, 0x225D3E0);
    // v37 = Check_Buff_0(v36, &v64, 0x225D430);
    // v38 = Check_Buff_0(v37, &v46, &0x225D480);
    // v39 = Check_Buff_0(v38, &v81, &0x225D4D0);
    // add_buff(0x2263050, v39, 0x220u);
  }
  // v40 = Check_Buff(&a1, &v42, 0x2263050);
  // return sub_403900 (/* v40 */) == 0;
  return value1;
}
function sub_403900(data/*  */)
//char __thiscall sub_403900 (/* _DWORD *data */)
{
  // signed var v1; // eax@1
  v1 = 16;
  while (!data[v1]) {
    if (--v1 < 0)
      return 1;
  }
  return 0;
}
function GetMapleBuff(buffstat) {
  return GetNulllBuff(null)[Math.floor(buffstat / 32)] = buffstat = 1 << (31 - (buffstat % 32))
}
function sub_419030(a1) {
  var v1;
  var v3;
  v1 = sub_40DF50(GetMapleBuff(map.get(0x223FFC4)), v3, GetMapleBuff(map.get(0x22400D4))/* 0x223FFC4, &v3, 0x22400D4 */);
  a1 = sub_40DE90(a1, v1, 0x220/* a1, v1, 0x220u */);
  return a1;
}
function GetNulllBuff(retdata) {
  if (retdata == null) {
    retdata = [];
  }
  for (i = 0; i < 17; i++) {
    retdata[i] = 0;
  }
  return retdata;
}
function Check_Buff_Hex(buff_1, outBuff, Buff2) {
  v3 = buff_1;
  var v7;
  v7 = GetNulllBuff(v7);
  v4 = 16;
  // v5 = v3 + 16;
  do {
    --v4;
    v7[v4] = buff_1[v4] & Buff2[v4]
    // --v5;
  }
  while (v4 >= 0);
  outBuff = sub_40DE90(outBuff, v7, 0x220);
  return outBuff;
}
function sub_40DF50(buff_1, outBuff, Buff2) {
  v3 = buff_1;
  var v7;
  v7 = GetNulllBuff(v7);
  v4 = 16;
  // v5 = v3 + 16;
  do {
    --v4;
    v7[v4] = buff_1[v4] | Buff2[v4]
    // --v5;
  }
  while (v4 >= 0);
  outBuff = sub_40DE90(outBuff, v7, 0x220);
  return outBuff;
}

function sub_40DE90(outBuff, makebuff, int_0x220u)
//_DWORD *__thiscall sub_40DE90 (/* _DWORD *outBuff, var makebuff, unsigned int int_0x220u */)
{
  //   var v3; // ebp@1
  //   var outBuff2; // edi@1
  //   var v5; // eax@2
  //   var v6; // ecx@2
  //   unsigned var v7; // edx@2
  //   unsigned var i; // esi@5
  //   var v9; // eax@6
  //   unsigned var j; // esi@7
  //   var v11; // eax@8
  if (outBuff == null)
    outBuff = [];
  v3 = makebuff;
  outBuff2 = outBuff;
  if (int_0x220u >> 5)             // 0x220 >> 5==17
  {
    v7 = int_0x220u >> 5;
    i = 0;
    do {
      outBuff2[i] = makebuff[i];
      i++;
      --v7;
    }
    while (v7);
  }
  for (i = 32 * (int_0x220u >> 5); i < int_0x220u; ++i) {
    v9 = maskbufftest(v3, i);
    outBuff2 = sub_403B20(outBuff2, i, v9);
  }
  for (j = int_0x220u; j < 0x220; ++j) {
    v11 = sub_1A9506A() % 2;
    outBuff2 = sub_403B20(outBuff2, j, v11);
  }
  return outBuff2;
}
function maskbufftest(buff, mask)
//int __thiscall maskbufftest(_DWORD *buff, unsigned int mask)
{
  var result = 0; // eax@2
  if (mask < 0x220)
    result = (buff[mask >> 5] >> (31 - (mask & 0x1F))) & 1;
 // var result = 0;
  return result;
}
function sub_403B20(buff, a2, boolMakBuff)
//_DWORD *__thiscall sub_403B20 (/* _DWORD *buff, unsigned var a2, int boolMakBuff */)
{
  //   var result; // eax@1
  //   signed var v4; // esi@1
  //   unsigned var v5; // edx@1
  //   var v6; // ecx@1
  result = buff;
  v4 = 1 << (31 - (a2 & 0x1F));
  v5 = a2 >> 5;
  result[v5] |= v4;
  v6 = buff[a2 >> 5];
  if (!boolMakBuff)
    result[v5] = v4 ^ v6;
  return result;
}

function gethexind(buffstat, firstStr) {
  // if (buffstat > 2147483648) {
  //   return 0;
  // }
  // var value = 0;
  // while (buffstat > 1) {
  //   buffstat /= 2;
  //   value++;
  // }
  // value = 31 - value;
  // first = firstStr;
  // value += first * 32;
  // return value;
  var Y = (Math.log(buffstat) / Math.log(2));
  return (31 - Y) + (firstStr * 32)
}
function sub_1A9506A(/*  */) {
  //   var v0; // eax@1
  //   unsigned var v1; // ecx@1
  //   v0 = sub_1AA2B16 (/*  */);
  //   v1 = 214013 * *(v0 + 20) + 2531011;
  //    v1;  
  // return (v1 >> 16) & 0x7FFF;//未处理,不能读取数据  
  return 2;//单True/双False
}