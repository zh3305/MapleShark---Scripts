function HashMap() { var size = 0; var entry = new Object(); this.put = function (key, value) { if (!this.containsKey(key)) { size++ } entry[key] = value }; this.get = function (key) { if (this.containsKey(key)) { return entry[key] } else { return null } }; this.remove = function (key) { if (delete entry[key]) { size-- } }; this.containsKey = function (key) { return (key in entry) }; this.containsValue = function (value) { for (var prop in entry) { if (entry[prop] == value) { return true } } return false }; this.values = function () { var values = new Array(size); for (var prop in entry) { values.push(entry[prop]) } return values }; this.keys = function () { var keys = new Array(size); for (var prop in entry) { keys.push(prop) } return keys }; this.size = function () { return size } }

var map = new HashMap();
map.put(0x22b8c60, 181);
map.put(0x22b8ca8, 182);
map.put(0x22b8cf0, 183);
map.put(0x22b8ee8, 310);
map.put(0x22b8f78, 64);
map.put(0x22b8fc0, 65);
map.put(0x22b9008, 144);
map.put(0x22b9050, 145);
map.put(0x22b9098, 146);
map.put(0x22b90e0, 147);
map.put(0x22b9128, 148);
map.put(0x22b9170, 149);
map.put(0x22b91b8, 66);
map.put(0x22b9200, 67);
map.put(0x22b9248, 68);
map.put(0x22b9290, 69);
map.put(0x22b92d8, 150);
map.put(0x22b9320, 70);
map.put(0x22b9368, 71);
map.put(0x22b93b0, 72);
map.put(0x22b93f8, 73);
map.put(0x22b9440, 74);
map.put(0x22b9488, 195);
map.put(0x22b94d0, 75);
map.put(0x22b9518, 76);
map.put(0x22b9560, 77);
map.put(0x22b95a8, 78);
map.put(0x22b95f0, 79);
map.put(0x22b9638, 332);
map.put(0x22b9680, 80);
map.put(0x22b96c8, 81);
map.put(0x22b88b8, 82);
map.put(0x22b9710, 83);
map.put(0x22b9758, 84);
map.put(0x22b97a0, 85);
map.put(0x22b97e8, 86);
map.put(0x22b9830, 190);
map.put(0x22b9878, 87);
map.put(0x22b98c0, 88);
map.put(0x22b9908, 174);
map.put(0x22b9950, 179);
map.put(0x22b9998, 177);
map.put(0x22b99e0, 175);
map.put(0x22b9a28, 176);
map.put(0x22b9a70, 89);
map.put(0x22b9ab8, 105);
map.put(0x22b9b00, 90);
map.put(0x22b9b48, 91);
map.put(0x22b9b90, 92);
map.put(0x22b9bd8, 93);
map.put(0x22b9c20, 94);
map.put(0x22b9c68, 95);
map.put(0x22b9cb0, 245);
map.put(0x22b8bd0, 246);
map.put(0x22b9cf8, 96);
map.put(0x22b9d40, 251);
map.put(0x22b9d88, 266);
map.put(0x22b9dd0, 97);
map.put(0x22b9e18, 98);
map.put(0x22b9e60, 99);
map.put(0x22b9ea8, 100);
map.put(0x22b9ef0, 101);
map.put(0x22b9f38, 102);
map.put(0x22b9f80, 103);
map.put(0x22b9fc8, 106);
map.put(0x22ba010, 115);
map.put(0x22ba058, 107);
map.put(0x22ba0a0, 104);
map.put(0x22ba0e8, 108);
map.put(0x22ba130, 109);
map.put(0x22ba178, 110);
map.put(0x22ba1c0, 111);
map.put(0x22ba208, 112);
map.put(0x22ba250, 113);
map.put(0x22ba298, 114);
map.put(0x22ba2e0, 116);
map.put(0x22ba328, 117);
map.put(0x22ba370, 118);
map.put(0x22ba3b8, 119);
map.put(0x22ba400, 120);
map.put(0x22ba448, 121);
map.put(0x22ba490, 122);
map.put(0x22ba4d8, 123);
map.put(0x22ba520, 257);
map.put(0x22ba568, 124);
map.put(0x22ba5b0, 125);
map.put(0x22ba5f8, 126);
map.put(0x22ba640, 127);
map.put(0x22ba688, 128);
map.put(0x22ba6d0, 129);
map.put(0x22ba718, 131);
map.put(0x22ba760, 132);
map.put(0x22ba7a8, 133);
map.put(0x22ba7f0, 134);
map.put(0x22ba838, 311);
map.put(0x22b8ab0, 343);
map.put(0x22ba880, 135);
map.put(0x22ba8c8, 191);
map.put(0x22ba910, 172);
map.put(0x22ba958, 137);
map.put(0x22ba9a0, 139);
map.put(0x22ba9e8, 140);
map.put(0x22baa30, 141);
map.put(0x22baa78, 142);
map.put(0x22b8af8, 143);
map.put(0x22baac0, 152);
map.put(0x22bab08, 313);
map.put(0x22bab50, 153);
map.put(0x22bab98, 154);
map.put(0x22babe0, 155);
map.put(0x22bac28, 156);
map.put(0x22bac70, 157);
map.put(0x22bacb8, 158);
map.put(0x22bad00, 159);
map.put(0x22bad48, 160);
map.put(0x22bad90, 161);
map.put(0x22badd8, 138);
map.put(0x22bae20, 162);
map.put(0x22bae68, 163);
map.put(0x22baeb0, 164);
map.put(0x22baef8, 248);
map.put(0x22baf40, 165);
map.put(0x22bafd0, 167);
map.put(0x22bb018, 168);
map.put(0x22bb060, 169);
map.put(0x22bb0a8, 184);
map.put(0x22bb0f0, 170);
map.put(0x22bb138, 171);
map.put(0x22bb180, 173);
map.put(0x22bb1c8, 178);
map.put(0x22bb210, 185);
map.put(0x22bb258, 197);
map.put(0x22bb2a0, 198);
map.put(0x22bb2e8, 186);
map.put(0x22bb330, 192);
map.put(0x22bb378, 187);
map.put(0x22bb3c0, 188);
map.put(0x22bb408, 189);
map.put(0x22bb450, 194);
map.put(0x22bb498, 199);
map.put(0x22bb4e0, 196);
map.put(0x22bb528, 193);
map.put(0x22bb570, 200);
map.put(0x22bb5b8, 202);
map.put(0x22bb600, 203);
map.put(0x22bb648, 209);
map.put(0x22bb690, 204);
map.put(0x22bb6d8, 205);
map.put(0x22bb720, 207);
map.put(0x22bb768, 210);
map.put(0x22b8750, 208);
map.put(0x22bb7b0, 211);
map.put(0x22bb7f8, 212);
map.put(0x22bb840, 213);
map.put(0x22bb888, 214);
map.put(0x22bb8d0, 216);
map.put(0x22bb918, 217);
map.put(0x22bb960, 218);
map.put(0x22bb9a8, 219);
map.put(0x22bb9f0, 220);
map.put(0x22bba38, 221);
map.put(0x22bba80, 222);
map.put(0x22bbac8, 223);
map.put(0x22bbb10, 224);
map.put(0x22bbb58, 225);
map.put(0x22bbba0, 244);
map.put(0x22bbbe8, 226);
map.put(0x22bbc30, 227);
map.put(0x22bbc78, 247);
map.put(0x22bbcc0, 260);
map.put(0x22bbd08, 228);
map.put(0x22bbd50, 229);
map.put(0x22b8708, 230);
map.put(0x22bbd98, 231);
map.put(0x22bbde0, 232);
map.put(0x22bbe28, 233);
map.put(0x22bbe70, 235);
map.put(0x22bbeb8, 236);
map.put(0x22bbf00, 249);
map.put(0x22bbf48, 314);
map.put(0x22bbf90, 237);
map.put(0x22bbfd8, 239);
map.put(0x22bc020, 238);
map.put(0x22bc068, 253);
map.put(0x22bc0b0, 240);
map.put(0x22bc0f8, 241);
map.put(0x22bc140, 252);
map.put(0x22bc188, 254);
map.put(0x22bc1d0, 242);
map.put(0x22b8798, 243);
map.put(0x22bc218, 255);
map.put(0x22bc260, 250);
map.put(0x22bc2a8, 256);
map.put(0x22bc2f0, 258);
map.put(0x22bc338, 259);
map.put(0x22bc380, 201);
map.put(0x22bc3c8, 261);
map.put(0x22b87e0, 262);
map.put(0x22bc410, 263);
map.put(0x22b8828, 264);
map.put(0x22bc458, 265);
map.put(0x22bc4a0, 274);
map.put(0x22bc4e8, 130);
map.put(0x22bc530, 268);
map.put(0x22bc578, 269);
map.put(0x22bc5c0, 270);
map.put(0x22bc608, 271);
map.put(0x22bc650, 272);
map.put(0x22bc698, 273);
map.put(0x22bc6e0, 275);
map.put(0x22bc728, 276);
map.put(0x22bc770, 277);
map.put(0x22bc7b8, 278);
map.put(0x22bc800, 279);
map.put(0x22bc848, 280);
map.put(0x22bc890, 337);
map.put(0x22bc8d8, 281);
map.put(0x22bc920, 282);
map.put(0x22bc968, 283);
map.put(0x22bc9b0, 284);
map.put(0x22bc9f8, 285);
map.put(0x22bca40, 286);
map.put(0x22bca88, 287);
map.put(0x22bcad0, 288);
map.put(0x22bcb18, 329);
map.put(0x22bcb60, 330);
map.put(0x22bcba8, 331);
map.put(0x22bcbf0, 289);
map.put(0x22bcc38, 290);
map.put(0x22bcc80, 291);
map.put(0x22bccc8, 292);
map.put(0x22bcd10, 293);
map.put(0x22bcd58, 294);
map.put(0x22b8870, 295);
map.put(0x22bcda0, 299);
map.put(0x22bcde8, 296);
map.put(0x22bce30, 297);
map.put(0x22bce78, 298);
map.put(0x22bcec0, 300);
map.put(0x22bcf08, 301);
map.put(0x22bcf50, 302);
map.put(0x22bcf98, 303);
map.put(0x22bcfe0, 206);
map.put(0x22bd028, 304);
map.put(0x22bd070, 305);
map.put(0x22bd0b8, 306);
map.put(0x22bd100, 307);
map.put(0x22bd148, 308);
map.put(0x22b89d8, 309);
map.put(0x22bd190, 312);
map.put(0x22bd1d8, 315);
map.put(0x22bd220, 316);
map.put(0x22bd268, 317);
map.put(0x22bd2b0, 318);
map.put(0x22bd2f8, 319);
map.put(0x22bd340, 320);
map.put(0x22bd388, 321);
map.put(0x22bd3d0, 322);
map.put(0x22bd418, 323);
map.put(0x22bd460, 324);
map.put(0x22bd4a8, 325);
map.put(0x22bd4f0, 326);
map.put(0x22bd538, 333);
map.put(0x22bd580, 341);
map.put(0x22bd5c8, 335);
map.put(0x22bd610, 327);
map.put(0x22bd658, 334);
map.put(0x22bd6a0, 338);
map.put(0x22bd6e8, 336);
map.put(0x22bd730, 339);
map.put(0x22bd778, 340);
map.put(0x22bd7c0, 342);
map.put(0x22b8a20, 344);
map.put(0x22bd808, 345);
map.put(0x22bd850, 346);
map.put(0x22b8a68, 347);
map.put(0x22bd898, 348);
map.put(0x22bd8e0, 349);
map.put(0x22bd928, 350);
map.put(0x22bd970, 351);
map.put(0x22bd9b8, 352);
map.put(0x22bda00, 353);
map.put(0x22bda48, 354);
map.put(0x22bda90, 355);
map.put(0x22bdad8, 356);
map.put(0x22bdb20, 357);
map.put(0x22bdb68, 359);
map.put(0x22bdbb0, 358);
map.put(0x22bdbf8, 151);
map.put(0x22bdc40, 360);
map.put(0x22b8b88, 361);
map.put(0x22bdc88, 362);
map.put(0x22bdcd0, 363);
map.put(0x22b8b40, 364);
map.put(0x22bdd18, 365);
map.put(0x22bdd60, 366);
map.put(0x22bdda8, 367);
map.put(0x22bddf0, 368);
map.put(0x22bde38, 369);
map.put(0x22bde80, 370);
map.put(0x22bdec8, 371);
map.put(0x22bdf10, 372);
map.put(0x22bdf58, 373);
map.put(0x22bdfa0, 374);
map.put(0x22bdfe8, 375);
map.put(0x22be030, 376);
map.put(0x22be078, 377);
map.put(0x22be0c0, 378);
map.put(0x22be108, 379);
map.put(0x22be150, 380);
map.put(0x22be198, 382);
map.put(0x22be1e0, 383);
map.put(0x22be228, 384);
map.put(0x22be270, 385);
map.put(0x22be2b8, 386);
map.put(0x22be300, 387);
map.put(0x22be348, 388);
map.put(0x22be390, 389);
map.put(0x22be3d8, 390);
map.put(0x22be420, 391);
map.put(0x22be468, 392);
map.put(0x22be4b0, 393);
map.put(0x22be4f8, 394);
map.put(0x22be540, 397);
map.put(0x22be588, 398);
map.put(0x22be5d0, 399);
map.put(0x22be618, 400);
map.put(0x22be660, 401);
map.put(0x22be6a8, 402);
map.put(0x22be6f0, 405);
map.put(0x22be738, 406);
map.put(0x22be780, 407);
map.put(0x22be7c8, 408);
map.put(0x22be810, 409);
map.put(0x22be858, 410);
map.put(0x22be8a0, 414);
map.put(0x22be8e8, 395);
map.put(0x22be930, 396);
map.put(0x22be978, 411);
map.put(0x22be9c0, 413);
map.put(0x22bea08, 415);
map.put(0x22bea50, 416);
map.put(0x22bea98, 417);
map.put(0x22beae0, 418);
map.put(0x22beb28, 419);
map.put(0x22beb70, 420);
map.put(0x22bebb8, 421);
map.put(0x22bec00, 422);
map.put(0x22bec48, 423);
map.put(0x22bec90, 424);
map.put(0x22becd8, 425);
map.put(0x22bed20, 426);
map.put(0x22bed68, 427);
map.put(0x22bedb0, 428);
map.put(0x22bedf8, 429);
map.put(0x22bee40, 430);
map.put(0x22bee88, 431);
map.put(0x22beed0, 432);
map.put(0x22bef18, 433);
map.put(0x22bef60, 434);
map.put(0x22befa8, 435);
map.put(0x22beff0, 436);
map.put(0x22bf038, 437);
map.put(0x22bf080, 438);
map.put(0x22bf0c8, 439);
map.put(0x22bf110, 403);
map.put(0x22bf158, 404);
map.put(0x22bf1a0, 440);
map.put(0x22bf1e8, 441);
map.put(0x22bf230, 442);
map.put(0x22bf278, 443);
map.put(0x22bf2c0, 444);
map.put(0x22bf308, 445);
map.put(0x22bf350, 446);
map.put(0x22bf398, 447);
map.put(0x22bf3e0, 448);
map.put(0x22bf428, 449);
map.put(0x22bf470, 450);
map.put(0x22bf4b8, 451);
map.put(0x22bf500, 452);
map.put(0x22bf548, 453);
map.put(0x22bf590, 455);
map.put(0x22bf5d8, 456);
map.put(0x22bf620, 457);
map.put(0x22bf668, 458);
map.put(0x22bf6b0, 459);
map.put(0x22bf6f8, 460);
map.put(0x22bf740, 461);
map.put(0x22bf788, 462);
map.put(0x22bf7d0, 480);
map.put(0x22bf818, 482);
map.put(0x22bf860, 483);
map.put(0x22bf8a8, 484);
map.put(0x22bf8f0, 463);
map.put(0x22b8900, 267);
map.put(0x22bf938, 464);
map.put(0x22bf980, 465);
map.put(0x22b8948, 486);
map.put(0x22b8990, 487);
map.put(0x22bf9c8, 488);
map.put(0x22bfa10, 489);
map.put(0x22bfa58, 466);
map.put(0x22bfaa0, 473);
map.put(0x22bfae8, 467);
map.put(0x22bfb30, 469);
map.put(0x22bfb78, 470);
map.put(0x22bfbc0, 471);
map.put(0x22bfc08, 472);
map.put(0x22bfc50, 474);
map.put(0x22bfc98, 475);
map.put(0x22bf110, 403);
map.put(0x22bf158, 404);
map.put(0x22bfce0, 476);
map.put(0x22bfd28, 477);
map.put(0x22beff0, 436);
map.put(0x22bfd70, 468);
map.put(0x22bfdb8, 478);
map.put(0x22bfe00, 493);
map.put(0x22bfe48, 494);
map.put(0x22bfe90, 495);
map.put(0x22bfed8, 496);
map.put(0x22bcb18, 329);
map.put(0x22bcb60, 330);
map.put(0x22bfa58, 466);
map.put(0x22bae68, 163);
map.put(0x22bff20, 234);
map.put(0x22bff68, 412);
map.put(0x22bc1d0, 242);
map.put(0x22b9d40, 251);
map.put(0x22b9d88, 266);
map.put(0x22b9638, 332);
map.put(0x22bc188, 254);
map.put(0x22bc068, 253);
map.put(0x22bc260, 250);
map.put(0x22bbf90, 237);
map.put(0x22bc3c8, 261);
map.put(0x22bc2a8, 256);
map.put(0x22bc578, 269);
map.put(0x22b98c0, 88);
map.put(0x22bc8d8, 281);
map.put(0x22bc890, 337);
map.put(0x22bce30, 297);
map.put(0x22bce78, 298);
map.put(0x22bcde8, 296);
map.put(0x22bd418, 323);
map.put(0x22bb018, 168);
map.put(0x22bd658, 334);
map.put(0x22bd6e8, 336);
map.put(0x22bd7c0, 342);
map.put(0x22b8a20, 344);
map.put(0x22b8a68, 347);
map.put(0x22bd8e0, 349);
map.put(0x22bd928, 350);
map.put(0x22bd898, 348);
map.put(0x22b9bd8, 93);
map.put(0x22b9e18, 98);
map.put(0x22b8b88, 361);
map.put(0x22bdc88, 362);
map.put(0x22bffb0, 381);
map.put(0x22be348, 388);
map.put(0x22be2b8, 386);
map.put(0x22be390, 389);
map.put(0x22be6f0, 405);
map.put(0x22be858, 410);
map.put(0x22beb70, 420);
map.put(0x22bec00, 422);
map.put(0x22bf230, 442);
map.put(0x22bf398, 447);
map.put(0x22bf428, 449);
map.put(0x22bee88, 431);
map.put(0x22b9200, 67);
map.put(0x22bf5d8, 456);
map.put(0x22bd970, 351);
map.put(0x22b9710, 83);
map.put(0x22b9200, 67);
map.put(0x22bfff8, 454);
map.put(0x22ba838, 311);
map.put(0x22c0040, 490);
map.put(0x22c0088, 491);
map.put(0x22c00d0, 492);
//sub_42D850
map.put(0x22b83f4, 504);
map.put(0x22b82e4, 500);
map.put(0x22b8708, 230);
map.put(0x22b8750, 208);
map.put(0x22b8798, 243);
map.put(0x22b87e0, 262);
map.put(0x22b8828, 264);
map.put(0x22b8870, 295);
map.put(0x22b88b8, 82);
map.put(0x22b8900, 267);
map.put(0x22b8948, 486);
map.put(0x22b8990, 487);
map.put(0x22b89d8, 309);
map.put(0x22b8a20, 344);
map.put(0x22b8a68, 347);
map.put(0x22b8ab0, 343);
map.put(0x22b8af8, 143);
map.put(0x22b8b40, 364);
map.put(0x22b8b88, 361);
map.put(0x22b8bd0, 246);
//for (l = 0; l < 9; ++l) {
map.put(0x22b8218, 497);
map.put(0x22b825c, 498);
map.put(0x22b82a0, 499);
map.put(0x22b82e4, 500);
map.put(0x22b8328, 501);
map.put(0x22b836c, 502);
map.put(0x22b83b0, 503);
map.put(0x22b83f4, 504);
map.put(0x22b8438, 505);
//sub_E60680
map.put(0x22d4ff4, 500);
map.put(0x22d5104, 504);
map.put(0x22d4c58, 64);
map.put(0x22d4ca8, 65);
map.put(0x22d4cf8, 74);
map.put(0x22d4d48, 86);
map.put(0x22d4d98, 88);
map.put(0x22d4de8, 89);
map.put(0x22d4e38, 105);
map.put(0x22d4e88, 91);
map.put(0x22d4ed8, 95);
map.put(0x22d53c8, 498);
map.put(0x22d5378, 499);
map.put(0x22d5468, 134);
map.put(0x22d54b8, 135);
map.put(0x22d5508, 191);
map.put(0x22d5558, 227);
map.put(0x22d55a8, 11);
map.put(0x22d55f8, 10);
map.put(0x22d5648, 236);
map.put(0x22d5418, 497);
map.put(0x22d5698, 161);
map.put(0x22d56e8, 245);
map.put(0x22d5738, 246);
map.put(0x22d5788, 247);
map.put(0x22d57d8, 260);
map.put(0x22d5828, 270);
map.put(0x22d5878, 185);
map.put(0x22d58c8, 311);
map.put(0x22d5918, 343);
map.put(0x22d5968, 346);
map.put(0x22d59b8, 143);
map.put(0x22d5a08, 370);
map.put(0x22d5a58, 486);
map.put(0x22d5198, 505);
map.put(0x22d5aa8, 406);
map.put(0x22d5af8, 408);
map.put(0x22d5b48, 271);
map.put(0x22d5b98, 49);
map.put(0x22d5be8, 48);
function sub_E8C3D0() {
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
        if (v4 >= 0) {
            break;
        }
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
// function sub_42D850(mask) {
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
    var result;
    // eax@2
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
mplew.StartNode("SecondaryStat::DecodeForLocal");
v4 = Check_Buff(mask, 0x22B8C18);//180
if (sub_42CEB0(v4)) {
    mplew.StartNode("Mask - " + map.get(0x22B8C18));
    if (sub_42D850(mask)) {
        v5 = mplew.writeInt("v5");
    }
    else {
        v6 = mplew.writeShort("v6");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v10 = Check_Buff(mask, 0x22B8C60);//181
if (sub_42CEB0(v10)) {
    mplew.StartNode("Mask - " + map.get(0x22B8C60));
    if (sub_42D850(mask)) {
        v11 = mplew.writeInt("v11");
    }
    else {
        v12 = mplew.writeShort("v12");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v16 = Check_Buff(mask, 0x22B8CA8);//182
if (sub_42CEB0(v16)) {
    mplew.StartNode("Mask - " + map.get(0x22B8CA8));
    if (sub_42D850(mask)) {
        v17 = mplew.writeInt("v17");
    }
    else {
        v18 = mplew.writeShort("v18");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v22 = Check_Buff(mask, 0x22B8CF0);//183
if (sub_42CEB0(v22)) {
    mplew.StartNode("Mask - " + map.get(0x22B8CF0));
    if (sub_42D850(mask)) {
        v23 = mplew.writeInt("v23");
    }
    else {
        v24 = mplew.writeShort("v24");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v28 = Check_Buff(mask, 0x22B8D38);//57
if (sub_42CEB0(v28)) {
    mplew.StartNode("Mask - " + map.get(0x22B8D38));
    if (sub_42D850(mask)) {
        v29 = mplew.writeInt("v29");
    }
    else {
        v30 = mplew.writeShort("v30");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v34 = Check_Buff(mask, 0x22B8D80);//58
if (sub_42CEB0(v34)) {
    mplew.StartNode("Mask - " + map.get(0x22B8D80));
    if (sub_42D850(mask)) {
        v35 = mplew.writeInt("v35");
    }
    else {
        v36 = mplew.writeShort("v36");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v40 = Check_Buff(mask, 0x22B8DC8);//59
if (sub_42CEB0(v40)) {
    mplew.StartNode("Mask - " + map.get(0x22B8DC8));
    if (sub_42D850(mask)) {
        v41 = mplew.writeInt("v41");
    }
    else {
        v42 = mplew.writeShort("v42");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v46 = Check_Buff(mask, 0x22B8E10);//60
if (sub_42CEB0(v46)) {
    mplew.StartNode("Mask - " + map.get(0x22B8E10));
    if (sub_42D850(mask)) {
        v47 = mplew.writeInt("v47");
    }
    else {
        v48 = mplew.writeShort("v48");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v52 = Check_Buff(mask, 0x22B8E58);//61
if (sub_42CEB0(v52)) {
    mplew.StartNode("Mask - " + map.get(0x22B8E58));
    if (sub_42D850(mask)) {
        v53 = mplew.writeInt("v53");
    }
    else {
        v54 = mplew.writeShort("v54");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v58 = Check_Buff(mask, 0x22B8EA0);//62
if (sub_42CEB0(v58)) {
    mplew.StartNode("Mask - " + map.get(0x22B8EA0));
    if (sub_42D850(mask)) {
        v59 = mplew.writeInt("v59");
    }
    else {
        v60 = mplew.writeShort("v60");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v64 = Check_Buff(mask, 0x22B8EE8);//310
if (sub_42CEB0(v64)) {
    mplew.StartNode("Mask - " + map.get(0x22B8EE8));
    if (sub_42D850(mask)) {
        v65 = mplew.writeInt("v65");
    }
    else {
        v66 = mplew.writeShort("v66");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v70 = Check_Buff(mask, 0x22B8F30);//63
if (sub_42CEB0(v70)) {
    mplew.StartNode("Mask - " + map.get(0x22B8F30));
    if (sub_42D850(mask)) {
        v71 = mplew.writeInt("v71");
    }
    else {
        v72 = mplew.writeShort("v72");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v76 = Check_Buff(mask, 0x22B8F78);//64
if (sub_42CEB0(v76)) {
    mplew.StartNode("Mask - " + map.get(0x22B8F78));
    if (sub_42D850(mask)) {
        v77 = mplew.writeInt("v77");
    }
    else {
        v78 = mplew.writeShort("v78");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v82 = Check_Buff(mask, 0x22B8FC0);//65
if (sub_42CEB0(v82)) {
    mplew.StartNode("Mask - " + map.get(0x22B8FC0));
    if (sub_42D850(mask)) {
        v83 = mplew.writeInt("v83");
    }
    else {
        v84 = mplew.writeShort("v84");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v88 = Check_Buff(mask, 0x22B9008);//144
if (sub_42CEB0(v88)) {
    mplew.StartNode("Mask - " + map.get(0x22B9008));
    if (sub_42D850(mask)) {
        v89 = mplew.writeInt("v89");
    }
    else {
        v90 = mplew.writeShort("v90");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v94 = Check_Buff(mask, 0x22B9050);//145
if (sub_42CEB0(v94)) {
    mplew.StartNode("Mask - " + map.get(0x22B9050));
    if (sub_42D850(mask)) {
        v95 = mplew.writeInt("v95");
    }
    else {
        v96 = mplew.writeShort("v96");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v100 = Check_Buff(mask, 0x22B9098);//146
if (sub_42CEB0(v100)) {
    mplew.StartNode("Mask - " + map.get(0x22B9098));
    if (sub_42D850(mask)) {
        v101 = mplew.writeInt("v101");
    }
    else {
        v102 = mplew.writeShort("v102");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v106 = Check_Buff(mask, 0x22B90E0);//147
if (sub_42CEB0(v106)) {
    mplew.StartNode("Mask - " + map.get(0x22B90E0));
    if (sub_42D850(mask)) {
        v107 = mplew.writeInt("v107");
    }
    else {
        v108 = mplew.writeShort("v108");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v112 = Check_Buff(mask, 0x22B9128);//148
if (sub_42CEB0(v112)) {
    mplew.StartNode("Mask - " + map.get(0x22B9128));
    if (sub_42D850(mask)) {
        v113 = mplew.writeInt("v113");
    }
    else {
        v114 = mplew.writeShort("v114");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v118 = Check_Buff(mask, 0x22B9170);//149
if (sub_42CEB0(v118)) {
    mplew.StartNode("Mask - " + map.get(0x22B9170));
    if (sub_42D850(mask)) {
        v119 = mplew.writeInt("v119");
    }
    else {
        v120 = mplew.writeShort("v120");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v124 = Check_Buff(mask, 0x22B91B8);//66
if (sub_42CEB0(v124)) {
    mplew.StartNode("Mask - " + map.get(0x22B91B8));
    if (sub_42D850(mask)) {
        v125 = mplew.writeInt("v125");
    }
    else {
        v126 = mplew.writeShort("v126");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v130 = Check_Buff(mask, 0x22B9200);//67
if (sub_42CEB0(v130)) {
    mplew.StartNode("Mask - " + map.get(0x22B9200));
    if (sub_42D850(mask)) {
        v131 = mplew.writeInt("v131");
    }
    else {
        v132 = mplew.writeShort("v132");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v136 = Check_Buff(mask, 0x22B9248);//68
if (sub_42CEB0(v136)) {
    mplew.StartNode("Mask - " + map.get(0x22B9248));
    if (sub_42D850(mask)) {
        v137 = mplew.writeInt("v137");
    }
    else {
        v138 = mplew.writeShort("v138");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v142 = Check_Buff(mask, 0x22B9290);//69
if (sub_42CEB0(v142)) {
    mplew.StartNode("Mask - " + map.get(0x22B9290));
    if (sub_42D850(mask)) {
        v143 = mplew.writeInt("v143");
    }
    else {
        v144 = mplew.writeShort("v144");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v148 = Check_Buff(mask, 0x22B92D8);//150
if (sub_42CEB0(v148)) {
    mplew.StartNode("Mask - " + map.get(0x22B92D8));
    if (sub_42D850(mask)) {
        v149 = mplew.writeInt("v149");
    }
    else {
        v150 = mplew.writeShort("v150");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v154 = Check_Buff(mask, 0x22B9320);//70
if (sub_42CEB0(v154)) {
    mplew.StartNode("Mask - " + map.get(0x22B9320));
    if (sub_42D850(mask)) {
        v155 = mplew.writeInt("v155");
    }
    else {
        v156 = mplew.writeShort("v156");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v160 = Check_Buff(mask, 0x22B9368);//71
if (sub_42CEB0(v160)) {
    mplew.StartNode("Mask - " + map.get(0x22B9368));
    if (sub_42D850(mask)) {
        v161 = mplew.writeInt("v161");
    }
    else {
        v162 = mplew.writeShort("v162");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v166 = Check_Buff(mask, 0x22B93B0);//72
if (sub_42CEB0(v166)) {
    mplew.StartNode("Mask - " + map.get(0x22B93B0));
    if (sub_42D850(mask)) {
        v167 = mplew.writeInt("v167");
    }
    else {
        v168 = mplew.writeShort("v168");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v172 = Check_Buff(mask, 0x22B93F8);//73
if (sub_42CEB0(v172)) {
    mplew.StartNode("Mask - " + map.get(0x22B93F8));
    if (sub_42D850(mask)) {
        v173 = mplew.writeInt("v173");
    }
    else {
        v174 = mplew.writeShort("v174");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v178 = Check_Buff(mask, 0x22B9440);//74
if (sub_42CEB0(v178)) {
    mplew.StartNode("Mask - " + map.get(0x22B9440));
    if (sub_42D850(mask)) {
        v179 = mplew.writeInt("v179");
    }
    else {
        v180 = mplew.writeShort("v180");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v184 = Check_Buff(mask, 0x22B9488);//195
if (sub_42CEB0(v184)) {
    mplew.StartNode("Mask - " + map.get(0x22B9488));
    if (sub_42D850(mask)) {
        v185 = mplew.writeInt("v185");
    }
    else {
        v186 = mplew.writeShort("v186");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v190 = Check_Buff(mask, 0x22B94D0);//75
if (sub_42CEB0(v190)) {
    mplew.StartNode("Mask - " + map.get(0x22B94D0));
    if (sub_42D850(mask)) {
        v191 = mplew.writeInt("v191");
    }
    else {
        v192 = mplew.writeShort("v192");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v196 = Check_Buff(mask, 0x22B9518);//76
if (sub_42CEB0(v196)) {
    mplew.StartNode("Mask - " + map.get(0x22B9518));
    if (sub_42D850(mask)) {
        v197 = mplew.writeInt("v197");
    }
    else {
        v198 = mplew.writeShort("v198");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v202 = Check_Buff(mask, 0x22B9560);//77
if (sub_42CEB0(v202)) {
    mplew.StartNode("Mask - " + map.get(0x22B9560));
    if (sub_42D850(mask)) {
        v203 = mplew.writeInt("v203");
    }
    else {
        v204 = mplew.writeShort("v204");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v208 = Check_Buff(mask, 0x22B95A8);//78
if (sub_42CEB0(v208)) {
    mplew.StartNode("Mask - " + map.get(0x22B95A8));
    if (sub_42D850(mask)) {
        v209 = mplew.writeInt("v209");
    }
    else {
        v210 = mplew.writeShort("v210");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v214 = Check_Buff(mask, 0x22B95F0);//79
if (sub_42CEB0(v214)) {
    mplew.StartNode("Mask - " + map.get(0x22B95F0));
    if (sub_42D850(mask)) {
        v215 = mplew.writeInt("v215");
    }
    else {
        v216 = mplew.writeShort("v216");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v220 = Check_Buff(mask, 0x22B9638);//332
if (sub_42CEB0(v220)) {
    mplew.StartNode("Mask - " + map.get(0x22B9638));
    if (sub_42D850(mask)) {
        v221 = mplew.writeInt("v221");
    }
    else {
        v222 = mplew.writeShort("v222");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v226 = Check_Buff(mask, 0x22B9680);//80
if (sub_42CEB0(v226)) {
    mplew.StartNode("Mask - " + map.get(0x22B9680));
    if (sub_42D850(mask)) {
        v227 = mplew.writeInt("v227");
    }
    else {
        v228 = mplew.writeShort("v228");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v232 = Check_Buff(mask, 0x22B96C8);//81
if (sub_42CEB0(v232)) {
    mplew.StartNode("Mask - " + map.get(0x22B96C8));
    if (sub_42D850(mask)) {
        v233 = mplew.writeInt("v233");
    }
    else {
        v234 = mplew.writeShort("v234");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v238 = Check_Buff(mask, 0x22B88B8);//82
if (sub_42CEB0(v238)) {
    mplew.StartNode("Mask - " + map.get(0x22B88B8));
    if (sub_42D850(mask)) {
        v239 = mplew.writeInt("v239");
    }
    else {
        v240 = mplew.writeShort("v240");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v244 = Check_Buff(mask, 0x22B9710);//83
if (sub_42CEB0(v244)) {
    mplew.StartNode("Mask - " + map.get(0x22B9710));
    if (sub_42D850(mask)) {
        v245 = mplew.writeInt("v245");
    }
    else {
        v246 = mplew.writeShort("v246");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v250 = Check_Buff(mask, 0x22B9758);//84
if (sub_42CEB0(v250)) {
    mplew.StartNode("Mask - " + map.get(0x22B9758));
    if (sub_42D850(mask)) {
        v251 = mplew.writeInt("v251");
    }
    else {
        v252 = mplew.writeShort("v252");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v256 = Check_Buff(mask, 0x22B97A0);//85
if (sub_42CEB0(v256)) {
    mplew.StartNode("Mask - " + map.get(0x22B97A0));
    if (sub_42D850(mask)) {
        v257 = mplew.writeInt("v257");
    }
    else {
        v258 = mplew.writeShort("v258");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v262 = Check_Buff(mask, 0x22B97E8);//86
if (sub_42CEB0(v262)) {
    mplew.StartNode("Mask - " + map.get(0x22B97E8));
    if (sub_42D850(mask)) {
        v263 = mplew.writeInt("v263");
    }
    else {
        v264 = mplew.writeShort("v264");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v268 = Check_Buff(mask, 0x22B9830);//190
if (sub_42CEB0(v268)) {
    mplew.StartNode("Mask - " + map.get(0x22B9830));
    if (sub_42D850(mask)) {
        v269 = mplew.writeInt("v269");
    }
    else {
        v270 = mplew.writeShort("v270");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v274 = Check_Buff(mask, 0x22B9878);//87
if (sub_42CEB0(v274)) {
    mplew.StartNode("Mask - " + map.get(0x22B9878));
    if (sub_42D850(mask)) {
        v275 = mplew.writeInt("v275");
    }
    else {
        v276 = mplew.writeShort("v276");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v280 = Check_Buff(mask, 0x22B98C0);//88
if (sub_42CEB0(v280)) {
    mplew.StartNode("Mask - " + map.get(0x22B98C0));
    if (sub_42D850(mask)) {
        v281 = mplew.writeInt("v281");
    }
    else {
        v282 = mplew.writeShort("v282");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v286 = Check_Buff(mask, 0x22B9908);//174
if (sub_42CEB0(v286)) {
    mplew.StartNode("Mask - " + map.get(0x22B9908));
    if (sub_42D850(mask)) {
        v287 = mplew.writeInt("v287");
    }
    else {
        v288 = mplew.writeShort("v288");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v292 = Check_Buff(mask, 0x22B9950);//179
if (sub_42CEB0(v292)) {
    mplew.StartNode("Mask - " + map.get(0x22B9950));
    if (sub_42D850(mask)) {
        v293 = mplew.writeInt("v293");
    }
    else {
        v294 = mplew.writeShort("v294");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v298 = Check_Buff(mask, 0x22B9998);//177
if (sub_42CEB0(v298)) {
    mplew.StartNode("Mask - " + map.get(0x22B9998));
    if (sub_42D850(mask)) {
        v299 = mplew.writeInt("v299");
    }
    else {
        v300 = mplew.writeShort("v300");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v304 = Check_Buff(mask, 0x22B99E0);//175
if (sub_42CEB0(v304)) {
    mplew.StartNode("Mask - " + map.get(0x22B99E0));
    if (sub_42D850(mask)) {
        v305 = mplew.writeInt("v305");
    }
    else {
        v306 = mplew.writeShort("v306");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v310 = Check_Buff(mask, 0x22B9A28);//176
if (sub_42CEB0(v310)) {
    mplew.StartNode("Mask - " + map.get(0x22B9A28));
    if (sub_42D850(mask)) {
        v311 = mplew.writeInt("v311");
    }
    else {
        v312 = mplew.writeShort("v312");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v316 = Check_Buff(mask, 0x22B9A70);//89
if (sub_42CEB0(v316)) {
    mplew.StartNode("Mask - " + map.get(0x22B9A70));
    if (sub_42D850(mask)) {
        v317 = mplew.writeInt("v317");
    }
    else {
        v318 = mplew.writeShort("v318");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v322 = Check_Buff(mask, 0x22B9AB8);//105
if (sub_42CEB0(v322)) {
    mplew.StartNode("Mask - " + map.get(0x22B9AB8));
    if (sub_42D850(mask)) {
        v323 = mplew.writeInt("v323");
    }
    else {
        v324 = mplew.writeShort("v324");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v328 = Check_Buff(mask, 0x22B9B00);//90
if (sub_42CEB0(v328)) {
    mplew.StartNode("Mask - " + map.get(0x22B9B00));
    if (sub_42D850(mask)) {
        v329 = mplew.writeInt("v329");
    }
    else {
        v330 = mplew.writeShort("v330");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v334 = Check_Buff(mask, 0x22B9B48);//91
if (sub_42CEB0(v334)) {
    mplew.StartNode("Mask - " + map.get(0x22B9B48));
    if (sub_42D850(mask)) {
        v335 = mplew.writeInt("v335");
    }
    else {
        v336 = mplew.writeShort("v336");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v340 = Check_Buff(mask, 0x22B9B90);//92
if (sub_42CEB0(v340)) {
    mplew.StartNode("Mask - " + map.get(0x22B9B90));
    if (sub_42D850(mask)) {
        v341 = mplew.writeInt("v341");
    }
    else {
        v342 = mplew.writeShort("v342");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v346 = Check_Buff(mask, 0x22B9BD8);//93
if (sub_42CEB0(v346)) {
    mplew.StartNode("Mask - " + map.get(0x22B9BD8));
    if (sub_42D850(mask)) {
        v347 = mplew.writeInt("v347");
    }
    else {
        v348 = mplew.writeShort("v348");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v352 = Check_Buff(mask, 0x22B9C20);//94
if (sub_42CEB0(v352)) {
    mplew.StartNode("Mask - " + map.get(0x22B9C20));
    if (sub_42D850(mask)) {
        v353 = mplew.writeInt("v353");
    }
    else {
        v354 = mplew.writeShort("v354");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v358 = Check_Buff(mask, 0x22B9C68);//95
if (sub_42CEB0(v358)) {
    mplew.StartNode("Mask - " + map.get(0x22B9C68));
    if (sub_42D850(mask)) {
        v359 = mplew.writeInt("v359");
    }
    else {
        v360 = mplew.writeShort("v360");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v364 = Check_Buff(mask, 0x22B9CB0);//245
if (sub_42CEB0(v364)) {
    mplew.StartNode("Mask - " + map.get(0x22B9CB0));
    if (sub_42D850(mask)) {
        v365 = mplew.writeInt("v365");
    }
    else {
        v366 = mplew.writeShort("v366");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v370 = Check_Buff(mask, 0x22B8BD0);//246
if (sub_42CEB0(v370)) {
    mplew.StartNode("Mask - " + map.get(0x22B8BD0));
    if (sub_42D850(mask)) {
        v371 = mplew.writeInt("v371");
    }
    else {
        v372 = mplew.writeShort("v372");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v376 = Check_Buff(mask, 0x22B9CF8);//96
if (sub_42CEB0(v376)) {
    mplew.StartNode("Mask - " + map.get(0x22B9CF8));
    if (sub_42D850(mask)) {
        v377 = mplew.writeInt("v377");
    }
    else {
        v378 = mplew.writeShort("v378");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v382 = Check_Buff(mask, 0x22B9D40);//251
if (sub_42CEB0(v382)) {
    mplew.StartNode("Mask - " + map.get(0x22B9D40));
    if (sub_42D850(mask)) {
        v383 = mplew.writeInt("v383");
    }
    else {
        v384 = mplew.writeShort("v384");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v388 = Check_Buff(mask, 0x22B9D88);//266
if (sub_42CEB0(v388)) {
    mplew.StartNode("Mask - " + map.get(0x22B9D88));
    if (sub_42D850(mask)) {
        v389 = mplew.writeInt("v389");
    }
    else {
        v390 = mplew.writeShort("v390");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v394 = Check_Buff(mask, 0x22B9DD0);//97
if (sub_42CEB0(v394)) {
    mplew.StartNode("Mask - " + map.get(0x22B9DD0));
    if (sub_42D850(mask)) {
        v395 = mplew.writeInt("v395");
    }
    else {
        v396 = mplew.writeShort("v396");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v400 = Check_Buff(mask, 0x22B9E18);//98
if (sub_42CEB0(v400)) {
    mplew.StartNode("Mask - " + map.get(0x22B9E18));
    if (sub_42D850(mask)) {
        v401 = mplew.writeInt("v401");
    }
    else {
        v402 = mplew.writeShort("v402");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v406 = Check_Buff(mask, 0x22B9E60);//99
if (sub_42CEB0(v406)) {
    mplew.StartNode("Mask - " + map.get(0x22B9E60));
    if (sub_42D850(mask)) {
        v407 = mplew.writeInt("v407");
    }
    else {
        v408 = mplew.writeShort("v408");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v412 = Check_Buff(mask, 0x22B9EA8);//100
if (sub_42CEB0(v412)) {
    mplew.StartNode("Mask - " + map.get(0x22B9EA8));
    if (sub_42D850(mask)) {
        v413 = mplew.writeInt("v413");
    }
    else {
        v414 = mplew.writeShort("v414");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v418 = Check_Buff(mask, 0x22B9EF0);//101
if (sub_42CEB0(v418)) {
    mplew.StartNode("Mask - " + map.get(0x22B9EF0));
    if (sub_42D850(mask)) {
        v419 = mplew.writeInt("v419");
    }
    else {
        v420 = mplew.writeShort("v420");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v424 = Check_Buff(mask, 0x22B9F38);//102
if (sub_42CEB0(v424)) {
    mplew.StartNode("Mask - " + map.get(0x22B9F38));
    if (sub_42D850(mask)) {
        v425 = mplew.writeInt("v425");
    }
    else {
        v426 = mplew.writeShort("v426");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v430 = Check_Buff(mask, 0x22B9F80);//103
if (sub_42CEB0(v430)) {
    mplew.StartNode("Mask - " + map.get(0x22B9F80));
    if (sub_42D850(mask)) {
        v431 = mplew.writeInt("v431");
    }
    else {
        v432 = mplew.writeShort("v432");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v436 = Check_Buff(mask, 0x22B9FC8);//106
if (sub_42CEB0(v436)) {
    mplew.StartNode("Mask - " + map.get(0x22B9FC8));
    if (sub_42D850(mask)) {
        v437 = mplew.writeInt("v437");
    }
    else {
        v438 = mplew.writeShort("v438");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v442 = Check_Buff(mask, 0x22BA010);//115
if (sub_42CEB0(v442)) {
    mplew.StartNode("Mask - " + map.get(0x22BA010));
    if (sub_42D850(mask)) {
        v443 = mplew.writeInt("v443");
    }
    else {
        v444 = mplew.writeShort("v444");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v448 = Check_Buff(mask, 0x22BA058);//107
if (sub_42CEB0(v448)) {
    mplew.StartNode("Mask - " + map.get(0x22BA058));
    if (sub_42D850(mask)) {
        v449 = mplew.writeInt("v449");
    }
    else {
        v450 = mplew.writeShort("v450");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v454 = Check_Buff(mask, 0x22BA0A0);//104
if (sub_42CEB0(v454)) {
    mplew.StartNode("Mask - " + map.get(0x22BA0A0));
    if (sub_42D850(mask)) {
        v455 = mplew.writeInt("v455");
    }
    else {
        v456 = mplew.writeShort("v456");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v460 = Check_Buff(mask, 0x22BA0E8);//108
if (sub_42CEB0(v460)) {
    mplew.StartNode("Mask - " + map.get(0x22BA0E8));
    if (sub_42D850(mask)) {
        v461 = mplew.writeInt("v461");
    }
    else {
        v462 = mplew.writeShort("v462");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v466 = Check_Buff(mask, 0x22BA130);//109
if (sub_42CEB0(v466)) {
    mplew.StartNode("Mask - " + map.get(0x22BA130));
    if (sub_42D850(mask)) {
        v467 = mplew.writeInt("v467");
    }
    else {
        v468 = mplew.writeShort("v468");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v472 = Check_Buff(mask, 0x22BA178);//110
if (sub_42CEB0(v472)) {
    mplew.StartNode("Mask - " + map.get(0x22BA178));
    if (sub_42D850(mask)) {
        v473 = mplew.writeInt("v473");
    }
    else {
        v474 = mplew.writeShort("v474");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v478 = Check_Buff(mask, 0x22BA1C0);//111
if (sub_42CEB0(v478)) {
    mplew.StartNode("Mask - " + map.get(0x22BA1C0));
    if (sub_42D850(mask)) {
        v479 = mplew.writeInt("v479");
    }
    else {
        v480 = mplew.writeShort("v480");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v484 = Check_Buff(mask, 0x22BA208);//112
if (sub_42CEB0(v484)) {
    mplew.StartNode("Mask - " + map.get(0x22BA208));
    if (sub_42D850(mask)) {
        v485 = mplew.writeInt("v485");
    }
    else {
        v486 = mplew.writeShort("v486");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v490 = Check_Buff(mask, 0x22BA250);//113
if (sub_42CEB0(v490)) {
    mplew.StartNode("Mask - " + map.get(0x22BA250));
    if (sub_42D850(mask)) {
        v491 = mplew.writeInt("v491");
    }
    else {
        v492 = mplew.writeShort("v492");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v496 = Check_Buff(mask, 0x22BA298);//114
if (sub_42CEB0(v496)) {
    mplew.StartNode("Mask - " + map.get(0x22BA298));
    if (sub_42D850(mask)) {
        v497 = mplew.writeInt("v497");
    }
    else {
        v498 = mplew.writeShort("v498");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v502 = Check_Buff(mask, 0x22BA2E0);//116
if (sub_42CEB0(v502)) {
    mplew.StartNode("Mask - " + map.get(0x22BA2E0));
    if (sub_42D850(mask)) {
        v503 = mplew.writeInt("v503");
    }
    else {
        v504 = mplew.writeShort("v504");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v508 = Check_Buff(mask, 0x22BA328);//117
if (sub_42CEB0(v508)) {
    mplew.StartNode("Mask - " + map.get(0x22BA328));
    if (sub_42D850(mask)) {
        v509 = mplew.writeInt("v509");
    }
    else {
        v510 = mplew.writeShort("v510");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v514 = Check_Buff(mask, 0x22BA370);//118
if (sub_42CEB0(v514)) {
    mplew.StartNode("Mask - " + map.get(0x22BA370));
    if (sub_42D850(mask)) {
        v515 = mplew.writeInt("v515");
    }
    else {
        v516 = mplew.writeShort("v516");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v520 = Check_Buff(mask, 0x22BA3B8);//119
if (sub_42CEB0(v520)) {
    mplew.StartNode("Mask - " + map.get(0x22BA3B8));
    if (sub_42D850(mask)) {
        v521 = mplew.writeInt("v521");
    }
    else {
        v522 = mplew.writeShort("v522");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v526 = Check_Buff(mask, 0x22BA400);//120
if (sub_42CEB0(v526)) {
    mplew.StartNode("Mask - " + map.get(0x22BA400));
    if (sub_42D850(mask)) {
        v527 = mplew.writeInt("v527");
    }
    else {
        v528 = mplew.writeShort("v528");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v532 = Check_Buff(mask, 0x22BA448);//121
if (sub_42CEB0(v532)) {
    mplew.StartNode("Mask - " + map.get(0x22BA448));
    if (sub_42D850(mask)) {
        v533 = mplew.writeInt("v533");
    }
    else {
        v534 = mplew.writeShort("v534");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v538 = Check_Buff(mask, 0x22BA490);//122
if (sub_42CEB0(v538)) {
    mplew.StartNode("Mask - " + map.get(0x22BA490));
    if (sub_42D850(mask)) {
        v539 = mplew.writeInt("v539");
    }
    else {
        v540 = mplew.writeShort("v540");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v544 = Check_Buff(mask, 0x22BA4D8);//123
if (sub_42CEB0(v544)) {
    mplew.StartNode("Mask - " + map.get(0x22BA4D8));
    if (sub_42D850(mask)) {
        v545 = mplew.writeInt("v545");
    }
    else {
        v546 = mplew.writeShort("v546");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v550 = Check_Buff(mask, 0x22BA520);//257
if (sub_42CEB0(v550)) {
    mplew.StartNode("Mask - " + map.get(0x22BA520));
    if (sub_42D850(mask)) {
        v551 = mplew.writeInt("v551");
    }
    else {
        v552 = mplew.writeShort("v552");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v556 = Check_Buff(mask, 0x22BA568);//124
if (sub_42CEB0(v556)) {
    mplew.StartNode("Mask - " + map.get(0x22BA568));
    if (sub_42D850(mask)) {
        v557 = mplew.writeInt("v557");
    }
    else {
        v558 = mplew.writeShort("v558");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v562 = Check_Buff(mask, 0x22BA5B0);//125
if (sub_42CEB0(v562)) {
    mplew.StartNode("Mask - " + map.get(0x22BA5B0));
    if (sub_42D850(mask)) {
        v563 = mplew.writeInt("v563");
    }
    else {
        v564 = mplew.writeShort("v564");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v568 = Check_Buff(mask, 0x22BA5F8);//126
if (sub_42CEB0(v568)) {
    mplew.StartNode("Mask - " + map.get(0x22BA5F8));
    if (sub_42D850(mask)) {
        v569 = mplew.writeInt("v569");
    }
    else {
        v570 = mplew.writeShort("v570");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v574 = Check_Buff(mask, 0x22BA640);//127
if (sub_42CEB0(v574)) {
    mplew.StartNode("Mask - " + map.get(0x22BA640));
    if (sub_42D850(mask)) {
        v575 = mplew.writeInt("v575");
    }
    else {
        v576 = mplew.writeShort("v576");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v580 = Check_Buff(mask, 0x22BA688);//128
if (sub_42CEB0(v580)) {
    mplew.StartNode("Mask - " + map.get(0x22BA688));
    if (sub_42D850(mask)) {
        v581 = mplew.writeInt("v581");
    }
    else {
        v582 = mplew.writeShort("v582");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v586 = Check_Buff(mask, 0x22BA6D0);//129
if (sub_42CEB0(v586)) {
    mplew.StartNode("Mask - " + map.get(0x22BA6D0));
    if (sub_42D850(mask)) {
        v587 = mplew.writeInt("v587");
    }
    else {
        v588 = mplew.writeShort("v588");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v592 = Check_Buff(mask, 0x22BA718);//131
if (sub_42CEB0(v592)) {
    mplew.StartNode("Mask - " + map.get(0x22BA718));
    if (sub_42D850(mask)) {
        v593 = mplew.writeInt("v593");
    }
    else {
        v594 = mplew.writeShort("v594");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v598 = Check_Buff(mask, 0x22BA760);//132
if (sub_42CEB0(v598)) {
    mplew.StartNode("Mask - " + map.get(0x22BA760));
    if (sub_42D850(mask)) {
        v599 = mplew.writeInt("v599");
    }
    else {
        v600 = mplew.writeShort("v600");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v604 = Check_Buff(mask, 0x22BA7A8);//133
if (sub_42CEB0(v604)) {
    mplew.StartNode("Mask - " + map.get(0x22BA7A8));
    if (sub_42D850(mask)) {
        v605 = mplew.writeInt("v605");
    }
    else {
        v606 = mplew.writeShort("v606");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v610 = Check_Buff(mask, 0x22BA7F0);//134
if (sub_42CEB0(v610)) {
    mplew.StartNode("Mask - " + map.get(0x22BA7F0));
    if (sub_42D850(mask)) {
        v611 = mplew.writeInt("v611");
    }
    else {
        v612 = mplew.writeShort("v612");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v616 = Check_Buff(mask, 0x22BA838);//311
if (sub_42CEB0(v616)) {
    mplew.StartNode("Mask - " + map.get(0x22BA838));
    if (sub_42D850(mask)) {
        v617 = mplew.writeInt("v617");
    }
    else {
        v618 = mplew.writeShort("v618");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v622 = Check_Buff(mask, 0x22B8AB0);//343
if (sub_42CEB0(v622)) {
    mplew.StartNode("Mask - " + map.get(0x22B8AB0));
    if (sub_42D850(mask)) {
        v623 = mplew.writeInt("v623");
    }
    else {
        v624 = mplew.writeShort("v624");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v628 = Check_Buff(mask, 0x22BA880);//135
if (sub_42CEB0(v628)) {
    mplew.StartNode("Mask - " + map.get(0x22BA880));
    if (sub_42D850(mask)) {
        v629 = mplew.writeInt("v629");
    }
    else {
        v630 = mplew.writeShort("v630");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v634 = Check_Buff(mask, 0x22BA8C8);//191
if (sub_42CEB0(v634)) {
    mplew.StartNode("Mask - " + map.get(0x22BA8C8));
    if (sub_42D850(mask)) {
        v635 = mplew.writeInt("v635");
    }
    else {
        v636 = mplew.writeShort("v636");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v640 = Check_Buff(mask, 0x22BA910);//172
if (sub_42CEB0(v640)) {
    mplew.StartNode("Mask - " + map.get(0x22BA910));
    if (sub_42D850(mask)) {
        v641 = mplew.writeInt("v641");
    }
    else {
        v642 = mplew.writeShort("v642");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v646 = Check_Buff(mask, 0x22BA958);//137
if (sub_42CEB0(v646)) {
    mplew.StartNode("Mask - " + map.get(0x22BA958));
    if (sub_42D850(mask)) {
        v647 = mplew.writeInt("v647");
    }
    else {
        v648 = mplew.writeShort("v648");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v652 = Check_Buff(mask, 0x22BA9A0);//139
if (sub_42CEB0(v652)) {
    mplew.StartNode("Mask - " + map.get(0x22BA9A0));
    if (sub_42D850(mask)) {
        v653 = mplew.writeInt("v653");
    }
    else {
        v654 = mplew.writeShort("v654");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v658 = Check_Buff(mask, 0x22BA9E8);//140
if (sub_42CEB0(v658)) {
    mplew.StartNode("Mask - " + map.get(0x22BA9E8));
    if (sub_42D850(mask)) {
        v659 = mplew.writeInt("v659");
    }
    else {
        v660 = mplew.writeShort("v660");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v664 = Check_Buff(mask, 0x22BAA30);//141
if (sub_42CEB0(v664)) {
    mplew.StartNode("Mask - " + map.get(0x22BAA30));
    if (sub_42D850(mask)) {
        v665 = mplew.writeInt("v665");
    }
    else {
        v666 = mplew.writeShort("v666");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v670 = Check_Buff(mask, 0x22BAA78);//142
if (sub_42CEB0(v670)) {
    mplew.StartNode("Mask - " + map.get(0x22BAA78));
    if (sub_42D850(mask)) {
        v671 = mplew.writeInt("v671");
    }
    else {
        v672 = mplew.writeShort("v672");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v676 = Check_Buff(mask, 0x22B8AF8);//143
if (sub_42CEB0(v676)) {
    mplew.StartNode("Mask - " + map.get(0x22B8AF8));
    if (sub_42D850(mask)) {
        v677 = mplew.writeInt("v677");
    }
    else {
        v678 = mplew.writeShort("v678");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v682 = Check_Buff(mask, 0x22BAAC0);//152
if (sub_42CEB0(v682)) {
    mplew.StartNode("Mask - " + map.get(0x22BAAC0));
    if (sub_42D850(mask)) {
        v683 = mplew.writeInt("v683");
    }
    else {
        v684 = mplew.writeShort("v684");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v688 = Check_Buff(mask, 0x22BAB08);//313
if (sub_42CEB0(v688)) {
    mplew.StartNode("Mask - " + map.get(0x22BAB08));
    if (sub_42D850(mask)) {
        v689 = mplew.writeInt("v689");
    }
    else {
        v690 = mplew.writeShort("v690");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v694 = Check_Buff(mask, 0x22BAB50);//153
if (sub_42CEB0(v694)) {
    mplew.StartNode("Mask - " + map.get(0x22BAB50));
    if (sub_42D850(mask)) {
        v695 = mplew.writeInt("v695");
    }
    else {
        v696 = mplew.writeShort("v696");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v700 = Check_Buff(mask, 0x22BAB98);//154
if (sub_42CEB0(v700)) {
    mplew.StartNode("Mask - " + map.get(0x22BAB98));
    if (sub_42D850(mask)) {
        v701 = mplew.writeInt("v701");
    }
    else {
        v702 = mplew.writeShort("v702");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v706 = Check_Buff(mask, 0x22BABE0);//155
if (sub_42CEB0(v706)) {
    mplew.StartNode("Mask - " + map.get(0x22BABE0));
    if (sub_42D850(mask)) {
        v707 = mplew.writeInt("v707");
    }
    else {
        v708 = mplew.writeShort("v708");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v712 = Check_Buff(mask, 0x22BAC28);//156
if (sub_42CEB0(v712)) {
    mplew.StartNode("Mask - " + map.get(0x22BAC28));
    if (sub_42D850(mask)) {
        v713 = mplew.writeInt("v713");
    }
    else {
        v714 = mplew.writeShort("v714");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v718 = Check_Buff(mask, 0x22BAC70);//157
if (sub_42CEB0(v718)) {
    mplew.StartNode("Mask - " + map.get(0x22BAC70));
    if (sub_42D850(mask)) {
        v719 = mplew.writeInt("v719");
    }
    else {
        v720 = mplew.writeShort("v720");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v724 = Check_Buff(mask, 0x22BACB8);//158
if (sub_42CEB0(v724)) {
    mplew.StartNode("Mask - " + map.get(0x22BACB8));
    if (sub_42D850(mask)) {
        v725 = mplew.writeInt("v725");
    }
    else {
        v726 = mplew.writeShort("v726");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v730 = Check_Buff(mask, 0x22BAD00);//159
if (sub_42CEB0(v730)) {
    mplew.StartNode("Mask - " + map.get(0x22BAD00));
    if (sub_42D850(mask)) {
        v731 = mplew.writeInt("v731");
    }
    else {
        v732 = mplew.writeShort("v732");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v736 = Check_Buff(mask, 0x22BAD48);//160
if (sub_42CEB0(v736)) {
    mplew.StartNode("Mask - " + map.get(0x22BAD48));
    if (sub_42D850(mask)) {
        v737 = mplew.writeInt("v737");
    }
    else {
        v738 = mplew.writeShort("v738");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v742 = Check_Buff(mask, 0x22BAD90);//161
if (sub_42CEB0(v742)) {
    mplew.StartNode("Mask - " + map.get(0x22BAD90));
    if (sub_42D850(mask)) {
        v743 = mplew.writeInt("v743");
    }
    else {
        v744 = mplew.writeShort("v744");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v748 = Check_Buff(mask, 0x22BADD8);//138
if (sub_42CEB0(v748)) {
    mplew.StartNode("Mask - " + map.get(0x22BADD8));
    if (sub_42D850(mask)) {
        v749 = mplew.writeInt("v749");
    }
    else {
        v750 = mplew.writeShort("v750");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v754 = Check_Buff(mask, 0x22BAE20);//162
if (sub_42CEB0(v754)) {
    mplew.StartNode("Mask - " + map.get(0x22BAE20));
    if (sub_42D850(mask)) {
        v755 = mplew.writeInt("v755");
    }
    else {
        v756 = mplew.writeShort("v756");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v760 = Check_Buff(mask, 0x22BAE68);//163
if (sub_42CEB0(v760)) {
    mplew.StartNode("Mask - " + map.get(0x22BAE68));
    if (sub_42D850(mask)) {
        v761 = mplew.writeInt("v761");
    }
    else {
        v762 = mplew.writeShort("v762");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v766 = Check_Buff(mask, 0x22BAEB0);//164
if (sub_42CEB0(v766)) {
    mplew.StartNode("Mask - " + map.get(0x22BAEB0));
    if (sub_42D850(mask)) {
        v767 = mplew.writeInt("v767");
    }
    else {
        v768 = mplew.writeShort("v768");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v772 = Check_Buff(mask, 0x22BAEF8);//248
if (sub_42CEB0(v772)) {
    mplew.StartNode("Mask - " + map.get(0x22BAEF8));
    if (sub_42D850(mask)) {
        v773 = mplew.writeInt("v773");
    }
    else {
        v774 = mplew.writeShort("v774");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v778 = Check_Buff(mask, 0x22BAF40);//165
if (sub_42CEB0(v778)) {
    mplew.StartNode("Mask - " + map.get(0x22BAF40));
    if (sub_42D850(mask)) {
        v779 = mplew.writeInt("v779");
    }
    else {
        v780 = mplew.writeShort("v780");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v784 = Check_Buff(mask, 0x22BAF88);//166
if (sub_42CEB0(v784)) {
    mplew.StartNode("Mask - " + map.get(0x22BAF88));
    if (sub_42D850(mask)) {
        v785 = mplew.writeInt("v785");
    }
    else {
        v786 = mplew.writeShort("v786");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v790 = Check_Buff(mask, 0x22BAFD0);//167
if (sub_42CEB0(v790)) {
    mplew.StartNode("Mask - " + map.get(0x22BAFD0));
    if (sub_42D850(mask)) {
        v791 = mplew.writeInt("v791");
    }
    else {
        v792 = mplew.writeShort("v792");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v796 = Check_Buff(mask, 0x22BB018);//168
if (sub_42CEB0(v796)) {
    mplew.StartNode("Mask - " + map.get(0x22BB018));
    if (sub_42D850(mask)) {
        v797 = mplew.writeInt("v797");
    }
    else {
        v798 = mplew.writeShort("v798");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v802 = Check_Buff(mask, 0x22BB060);//169
if (sub_42CEB0(v802)) {
    mplew.StartNode("Mask - " + map.get(0x22BB060));
    if (sub_42D850(mask)) {
        v803 = mplew.writeInt("v803");
    }
    else {
        v804 = mplew.writeShort("v804");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v808 = Check_Buff(mask, 0x22BB0A8);//184
if (sub_42CEB0(v808)) {
    mplew.StartNode("Mask - " + map.get(0x22BB0A8));
    if (sub_42D850(mask)) {
        v809 = mplew.writeInt("v809");
    }
    else {
        v810 = mplew.writeShort("v810");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v814 = Check_Buff(mask, 0x22BB0F0);//170
if (sub_42CEB0(v814)) {
    mplew.StartNode("Mask - " + map.get(0x22BB0F0));
    if (sub_42D850(mask)) {
        v815 = mplew.writeInt("v815");
    }
    else {
        v816 = mplew.writeShort("v816");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v820 = Check_Buff(mask, 0x22BB138);//171
if (sub_42CEB0(v820)) {
    mplew.StartNode("Mask - " + map.get(0x22BB138));
    if (sub_42D850(mask)) {
        v821 = mplew.writeInt("v821");
    }
    else {
        v822 = mplew.writeShort("v822");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v826 = Check_Buff(mask, 0x22BB180);//173
if (sub_42CEB0(v826)) {
    mplew.StartNode("Mask - " + map.get(0x22BB180));
    if (sub_42D850(mask)) {
        v827 = mplew.writeInt("v827");
    }
    else {
        v828 = mplew.writeShort("v828");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v832 = Check_Buff(mask, 0x22BB1C8);//178
if (sub_42CEB0(v832)) {
    mplew.StartNode("Mask - " + map.get(0x22BB1C8));
    if (sub_42D850(mask)) {
        v833 = mplew.writeInt("v833");
    }
    else {
        v834 = mplew.writeShort("v834");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v838 = Check_Buff(mask, 0x22BB210);//185
if (sub_42CEB0(v838)) {
    mplew.StartNode("Mask - " + map.get(0x22BB210));
    if (sub_42D850(mask)) {
        v839 = mplew.writeInt("v839");
    }
    else {
        v840 = mplew.writeShort("v840");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v844 = Check_Buff(mask, 0x22BB258);//197
if (sub_42CEB0(v844)) {
    mplew.StartNode("Mask - " + map.get(0x22BB258));
    if (sub_42D850(mask)) {
        v845 = mplew.writeInt("v845");
    }
    else {
        v846 = mplew.writeShort("v846");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v850 = Check_Buff(mask, 0x22BB2A0);//198
if (sub_42CEB0(v850)) {
    mplew.StartNode("Mask - " + map.get(0x22BB2A0));
    if (sub_42D850(mask)) {
        v851 = mplew.writeInt("v851");
    }
    else {
        v852 = mplew.writeShort("v852");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v856 = Check_Buff(mask, 0x22BB2E8);//186
if (sub_42CEB0(v856)) {
    mplew.StartNode("Mask - " + map.get(0x22BB2E8));
    if (sub_42D850(mask)) {
        v857 = mplew.writeInt("v857");
    }
    else {
        v858 = mplew.writeShort("v858");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v862 = Check_Buff(mask, 0x22BB330);//192
if (sub_42CEB0(v862)) {
    mplew.StartNode("Mask - " + map.get(0x22BB330));
    if (sub_42D850(mask)) {
        v863 = mplew.writeInt("v863");
    }
    else {
        v864 = mplew.writeShort("v864");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v868 = Check_Buff(mask, 0x22BB378);//187
if (sub_42CEB0(v868)) {
    mplew.StartNode("Mask - " + map.get(0x22BB378));
    if (sub_42D850(mask)) {
        v869 = mplew.writeInt("v869");
    }
    else {
        v870 = mplew.writeShort("v870");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v874 = Check_Buff(mask, 0x22BB3C0);//188
if (sub_42CEB0(v874)) {
    mplew.StartNode("Mask - " + map.get(0x22BB3C0));
    if (sub_42D850(mask)) {
        v875 = mplew.writeInt("v875");
    }
    else {
        v876 = mplew.writeShort("v876");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v880 = Check_Buff(mask, 0x22BB408);//189
if (sub_42CEB0(v880)) {
    mplew.StartNode("Mask - " + map.get(0x22BB408));
    if (sub_42D850(mask)) {
        v881 = mplew.writeInt("v881");
    }
    else {
        v882 = mplew.writeShort("v882");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v886 = Check_Buff(mask, 0x22BB450);//194
if (sub_42CEB0(v886)) {
    mplew.StartNode("Mask - " + map.get(0x22BB450));
    if (sub_42D850(mask)) {
        v887 = mplew.writeInt("v887");
    }
    else {
        v888 = mplew.writeShort("v888");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v892 = Check_Buff(mask, 0x22BB498);//199
if (sub_42CEB0(v892)) {
    mplew.StartNode("Mask - " + map.get(0x22BB498));
    if (sub_42D850(mask)) {
        v893 = mplew.writeInt("v893");
    }
    else {
        v894 = mplew.writeShort("v894");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v898 = Check_Buff(mask, 0x22BB4E0);//196
if (sub_42CEB0(v898)) {
    mplew.StartNode("Mask - " + map.get(0x22BB4E0));
    if (sub_42D850(mask)) {
        v899 = mplew.writeInt("v899");
    }
    else {
        v900 = mplew.writeShort("v900");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v904 = Check_Buff(mask, 0x22BB528);//193
if (sub_42CEB0(v904)) {
    mplew.StartNode("Mask - " + map.get(0x22BB528));
    if (sub_42D850(mask)) {
        v905 = mplew.writeInt("v905");
    }
    else {
        v906 = mplew.writeShort("v906");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v910 = Check_Buff(mask, 0x22BB570);//200
if (sub_42CEB0(v910)) {
    mplew.StartNode("Mask - " + map.get(0x22BB570));
    if (sub_42D850(mask)) {
        v911 = mplew.writeInt("v911");
    }
    else {
        v912 = mplew.writeShort("v912");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v916 = Check_Buff(mask, 0x22BB5B8);//202
if (sub_42CEB0(v916)) {
    mplew.StartNode("Mask - " + map.get(0x22BB5B8));
    if (sub_42D850(mask)) {
        v917 = mplew.writeInt("v917");
    }
    else {
        v918 = mplew.writeShort("v918");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v922 = Check_Buff(mask, 0x22BB600);//203
if (sub_42CEB0(v922)) {
    mplew.StartNode("Mask - " + map.get(0x22BB600));
    if (sub_42D850(mask)) {
        v923 = mplew.writeInt("v923");
    }
    else {
        v924 = mplew.writeShort("v924");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v928 = Check_Buff(mask, 0x22BB648);//209
if (sub_42CEB0(v928)) {
    mplew.StartNode("Mask - " + map.get(0x22BB648));
    if (sub_42D850(mask)) {
        v929 = mplew.writeInt("v929");
    }
    else {
        v930 = mplew.writeShort("v930");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v934 = Check_Buff(mask, 0x22BB690);//204
if (sub_42CEB0(v934)) {
    mplew.StartNode("Mask - " + map.get(0x22BB690));
    if (sub_42D850(mask)) {
        v935 = mplew.writeInt("v935");
    }
    else {
        v936 = mplew.writeShort("v936");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v940 = Check_Buff(mask, 0x22BB6D8);//205
if (sub_42CEB0(v940)) {
    mplew.StartNode("Mask - " + map.get(0x22BB6D8));
    if (sub_42D850(mask)) {
        v941 = mplew.writeInt("v941");
    }
    else {
        v942 = mplew.writeShort("v942");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v946 = Check_Buff(mask, 0x22BB720);//207
if (sub_42CEB0(v946)) {
    mplew.StartNode("Mask - " + map.get(0x22BB720));
    if (sub_42D850(mask)) {
        v947 = mplew.writeInt("v947");
    }
    else {
        v948 = mplew.writeShort("v948");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v952 = Check_Buff(mask, 0x22BB768);//210
if (sub_42CEB0(v952)) {
    mplew.StartNode("Mask - " + map.get(0x22BB768));
    if (sub_42D850(mask)) {
        v953 = mplew.writeInt("v953");
    }
    else {
        v954 = mplew.writeShort("v954");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v958 = Check_Buff(mask, 0x22B8750);//208
if (sub_42CEB0(v958)) {
    mplew.StartNode("Mask - " + map.get(0x22B8750));
    if (sub_42D850(mask)) {
        v959 = mplew.writeInt("v959");
    }
    else {
        v960 = mplew.writeShort("v960");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v964 = Check_Buff(mask, 0x22BB7B0);//211
if (sub_42CEB0(v964)) {
    mplew.StartNode("Mask - " + map.get(0x22BB7B0));
    if (sub_42D850(mask)) {
        v965 = mplew.writeInt("v965");
    }
    else {
        v966 = mplew.writeShort("v966");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v970 = Check_Buff(mask, 0x22BB7F8);//212
if (sub_42CEB0(v970)) {
    mplew.StartNode("Mask - " + map.get(0x22BB7F8));
    if (sub_42D850(mask)) {
        v971 = mplew.writeInt("v971");
    }
    else {
        v972 = mplew.writeShort("v972");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v976 = Check_Buff(mask, 0x22BB840);//213
if (sub_42CEB0(v976)) {
    mplew.StartNode("Mask - " + map.get(0x22BB840));
    if (sub_42D850(mask)) {
        v977 = mplew.writeInt("v977");
    }
    else {
        v978 = mplew.writeShort("v978");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v982 = Check_Buff(mask, 0x22BB888);//214
if (sub_42CEB0(v982)) {
    mplew.StartNode("Mask - " + map.get(0x22BB888));
    if (sub_42D850(mask)) {
        v983 = mplew.writeInt("v983");
    }
    else {
        v984 = mplew.writeShort("v984");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v988 = Check_Buff(mask, 0x22BB8D0);//216
if (sub_42CEB0(v988)) {
    mplew.StartNode("Mask - " + map.get(0x22BB8D0));
    if (sub_42D850(mask)) {
        v989 = mplew.writeInt("v989");
    }
    else {
        v990 = mplew.writeShort("v990");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v994 = Check_Buff(mask, 0x22BB918);//217
if (sub_42CEB0(v994)) {
    mplew.StartNode("Mask - " + map.get(0x22BB918));
    if (sub_42D850(mask)) {
        v995 = mplew.writeInt("v995");
    }
    else {
        v996 = mplew.writeShort("v996");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1000 = Check_Buff(mask, 0x22BB960);//218
if (sub_42CEB0(v1000)) {
    mplew.StartNode("Mask - " + map.get(0x22BB960));
    if (sub_42D850(mask)) {
        v1001 = mplew.writeInt("v1001");
    }
    else {
        v1002 = mplew.writeShort("v1002");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1006 = Check_Buff(mask, 0x22BB9A8);//219
if (sub_42CEB0(v1006)) {
    mplew.StartNode("Mask - " + map.get(0x22BB9A8));
    if (sub_42D850(mask)) {
        v1007 = mplew.writeInt("v1007");
    }
    else {
        v1008 = mplew.writeShort("v1008");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1012 = Check_Buff(mask, 0x22BB9F0);//220
if (sub_42CEB0(v1012)) {
    mplew.StartNode("Mask - " + map.get(0x22BB9F0));
    if (sub_42D850(mask)) {
        v1013 = mplew.writeInt("v1013");
    }
    else {
        v1014 = mplew.writeShort("v1014");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1018 = Check_Buff(mask, 0x22BBA38);//221
if (sub_42CEB0(v1018)) {
    mplew.StartNode("Mask - " + map.get(0x22BBA38));
    if (sub_42D850(mask)) {
        v1019 = mplew.writeInt("v1019");
    }
    else {
        v1020 = mplew.writeShort("v1020");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1024 = Check_Buff(mask, 0x22BBA80);//222
if (sub_42CEB0(v1024)) {
    mplew.StartNode("Mask - " + map.get(0x22BBA80));
    if (sub_42D850(mask)) {
        v1025 = mplew.writeInt("v1025");
    }
    else {
        v1026 = mplew.writeShort("v1026");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1030 = Check_Buff(mask, 0x22BBAC8);//223
if (sub_42CEB0(v1030)) {
    mplew.StartNode("Mask - " + map.get(0x22BBAC8));
    if (sub_42D850(mask)) {
        v1031 = mplew.writeInt("v1031");
    }
    else {
        v1032 = mplew.writeShort("v1032");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1036 = Check_Buff(mask, 0x22BBB10);//224
if (sub_42CEB0(v1036)) {
    mplew.StartNode("Mask - " + map.get(0x22BBB10));
    if (sub_42D850(mask)) {
        v1037 = mplew.writeInt("v1037");
    }
    else {
        v1038 = mplew.writeShort("v1038");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1042 = Check_Buff(mask, 0x22BBB58);//225
if (sub_42CEB0(v1042)) {
    mplew.StartNode("Mask - " + map.get(0x22BBB58));
    if (sub_42D850(mask)) {
        v1043 = mplew.writeInt("v1043");
    }
    else {
        v1044 = mplew.writeShort("v1044");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1048 = Check_Buff(mask, 0x22BBBA0);//244
if (sub_42CEB0(v1048)) {
    mplew.StartNode("Mask - " + map.get(0x22BBBA0));
    if (sub_42D850(mask)) {
        v1049 = mplew.writeInt("v1049");
    }
    else {
        v1050 = mplew.writeShort("v1050");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1054 = Check_Buff(mask, 0x22BBBE8);//226
if (sub_42CEB0(v1054)) {
    mplew.StartNode("Mask - " + map.get(0x22BBBE8));
    if (sub_42D850(mask)) {
        v1055 = mplew.writeInt("v1055");
    }
    else {
        v1056 = mplew.writeShort("v1056");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1060 = Check_Buff(mask, 0x22BBC30);//227
if (sub_42CEB0(v1060)) {
    mplew.StartNode("Mask - " + map.get(0x22BBC30));
    if (sub_42D850(mask)) {
        v1061 = mplew.writeInt("v1061");
    }
    else {
        v1062 = mplew.writeShort("v1062");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1066 = Check_Buff(mask, 0x22BBC78);//247
if (sub_42CEB0(v1066)) {
    mplew.StartNode("Mask - " + map.get(0x22BBC78));
    if (sub_42D850(mask)) {
        v1067 = mplew.writeInt("v1067");
    }
    else {
        v1068 = mplew.writeShort("v1068");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1072 = Check_Buff(mask, 0x22BBCC0);//260
if (sub_42CEB0(v1072)) {
    mplew.StartNode("Mask - " + map.get(0x22BBCC0));
    if (sub_42D850(mask)) {
        v1073 = mplew.writeInt("v1073");
    }
    else {
        v1074 = mplew.writeShort("v1074");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1078 = Check_Buff(mask, 0x22BBD08);//228
if (sub_42CEB0(v1078)) {
    mplew.StartNode("Mask - " + map.get(0x22BBD08));
    if (sub_42D850(mask)) {
        v1079 = mplew.writeInt("v1079");
    }
    else {
        v1080 = mplew.writeShort("v1080");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1084 = Check_Buff(mask, 0x22BBD50);//229
if (sub_42CEB0(v1084)) {
    mplew.StartNode("Mask - " + map.get(0x22BBD50));
    if (sub_42D850(mask)) {
        v1085 = mplew.writeInt("v1085");
    }
    else {
        v1086 = mplew.writeShort("v1086");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1090 = Check_Buff(mask, 0x22B8708);//230
if (sub_42CEB0(v1090)) {
    mplew.StartNode("Mask - " + map.get(0x22B8708));
    if (sub_42D850(mask)) {
        v1091 = mplew.writeInt("v1091");
    }
    else {
        v1092 = mplew.writeShort("v1092");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1096 = Check_Buff(mask, 0x22BBD98);//231
if (sub_42CEB0(v1096)) {
    mplew.StartNode("Mask - " + map.get(0x22BBD98));
    if (sub_42D850(mask)) {
        v1097 = mplew.writeInt("v1097");
    }
    else {
        v1098 = mplew.writeShort("v1098");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1102 = Check_Buff(mask, 0x22BBDE0);//232
if (sub_42CEB0(v1102)) {
    mplew.StartNode("Mask - " + map.get(0x22BBDE0));
    if (sub_42D850(mask)) {
        v1103 = mplew.writeInt("v1103");
    }
    else {
        v1104 = mplew.writeShort("v1104");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1108 = Check_Buff(mask, 0x22BBE28);//233
if (sub_42CEB0(v1108)) {
    mplew.StartNode("Mask - " + map.get(0x22BBE28));
    if (sub_42D850(mask)) {
        v1109 = mplew.writeInt("v1109");
    }
    else {
        v1110 = mplew.writeShort("v1110");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1114 = Check_Buff(mask, 0x22BBE70);//235
if (sub_42CEB0(v1114)) {
    mplew.StartNode("Mask - " + map.get(0x22BBE70));
    if (sub_42D850(mask)) {
        v1115 = mplew.writeInt("v1115");
    }
    else {
        v1116 = mplew.writeShort("v1116");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1120 = Check_Buff(mask, 0x22BBEB8);//236
if (sub_42CEB0(v1120)) {
    mplew.StartNode("Mask - " + map.get(0x22BBEB8));
    if (sub_42D850(mask)) {
        v1121 = mplew.writeInt("v1121");
    }
    else {
        v1122 = mplew.writeShort("v1122");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1126 = Check_Buff(mask, 0x22BBF00);//249
if (sub_42CEB0(v1126)) {
    mplew.StartNode("Mask - " + map.get(0x22BBF00));
    if (sub_42D850(mask)) {
        v1127 = mplew.writeInt("v1127");
    }
    else {
        v1128 = mplew.writeShort("v1128");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1132 = Check_Buff(mask, 0x22BBF48);//314
if (sub_42CEB0(v1132)) {
    mplew.StartNode("Mask - " + map.get(0x22BBF48));
    if (sub_42D850(mask)) {
        v1133 = mplew.writeInt("v1133");
    }
    else {
        v1134 = mplew.writeShort("v1134");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1138 = Check_Buff(mask, 0x22BBF90);//237
if (sub_42CEB0(v1138)) {
    mplew.StartNode("Mask - " + map.get(0x22BBF90));
    if (sub_42D850(mask)) {
        v1139 = mplew.writeInt("v1139");
    }
    else {
        v1140 = mplew.writeShort("v1140");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1144 = Check_Buff(mask, 0x22BBFD8);//239
if (sub_42CEB0(v1144)) {
    mplew.StartNode("Mask - " + map.get(0x22BBFD8));
    if (sub_42D850(mask)) {
        v1145 = mplew.writeInt("v1145");
    }
    else {
        v1146 = mplew.writeShort("v1146");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1150 = Check_Buff(mask, 0x22BC020);//238
if (sub_42CEB0(v1150)) {
    mplew.StartNode("Mask - " + map.get(0x22BC020));
    if (sub_42D850(mask)) {
        v1151 = mplew.writeInt("v1151");
    }
    else {
        v1152 = mplew.writeShort("v1152");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1156 = Check_Buff(mask, 0x22BC068);//253
if (sub_42CEB0(v1156)) {
    mplew.StartNode("Mask - " + map.get(0x22BC068));
    if (sub_42D850(mask)) {
        v1157 = mplew.writeInt("v1157");
    }
    else {
        v1158 = mplew.writeShort("v1158");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1162 = Check_Buff(mask, 0x22BC0B0);//240
if (sub_42CEB0(v1162)) {
    mplew.StartNode("Mask - " + map.get(0x22BC0B0));
    if (sub_42D850(mask)) {
        v1163 = mplew.writeInt("v1163");
    }
    else {
        v1164 = mplew.writeShort("v1164");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1168 = Check_Buff(mask, 0x22BC0F8);//241
if (sub_42CEB0(v1168)) {
    mplew.StartNode("Mask - " + map.get(0x22BC0F8));
    if (sub_42D850(mask)) {
        v1169 = mplew.writeInt("v1169");
    }
    else {
        v1170 = mplew.writeShort("v1170");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1174 = Check_Buff(mask, 0x22BC140);//252
if (sub_42CEB0(v1174)) {
    mplew.StartNode("Mask - " + map.get(0x22BC140));
    if (sub_42D850(mask)) {
        v1175 = mplew.writeInt("v1175");
    }
    else {
        v1176 = mplew.writeShort("v1176");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1180 = Check_Buff(mask, 0x22BC188);//254
if (sub_42CEB0(v1180)) {
    mplew.StartNode("Mask - " + map.get(0x22BC188));
    if (sub_42D850(mask)) {
        v1181 = mplew.writeInt("v1181");
    }
    else {
        v1182 = mplew.writeShort("v1182");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1186 = Check_Buff(mask, 0x22BC1D0);//242
if (sub_42CEB0(v1186)) {
    mplew.StartNode("Mask - " + map.get(0x22BC1D0));
    if (sub_42D850(mask)) {
        v1187 = mplew.writeInt("v1187");
    }
    else {
        v1188 = mplew.writeShort("v1188");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1192 = Check_Buff(mask, 0x22B8798);//243
if (sub_42CEB0(v1192)) {
    mplew.StartNode("Mask - " + map.get(0x22B8798));
    if (sub_42D850(mask)) {
        v1193 = mplew.writeInt("v1193");
    }
    else {
        v1194 = mplew.writeShort("v1194");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1198 = Check_Buff(mask, 0x22BC218);//255
if (sub_42CEB0(v1198)) {
    mplew.StartNode("Mask - " + map.get(0x22BC218));
    if (sub_42D850(mask)) {
        v1199 = mplew.writeInt("v1199");
    }
    else {
        v1200 = mplew.writeShort("v1200");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1204 = Check_Buff(mask, 0x22BC260);//250
if (sub_42CEB0(v1204)) {
    mplew.StartNode("Mask - " + map.get(0x22BC260));
    if (sub_42D850(mask)) {
        v1205 = mplew.writeInt("v1205");
    }
    else {
        v1206 = mplew.writeShort("v1206");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1210 = Check_Buff(mask, 0x22BC2A8);//256
if (sub_42CEB0(v1210)) {
    mplew.StartNode("Mask - " + map.get(0x22BC2A8));
    if (sub_42D850(mask)) {
        v1211 = mplew.writeInt("v1211");
    }
    else {
        v1212 = mplew.writeShort("v1212");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1216 = Check_Buff(mask, 0x22BC2F0);//258
if (sub_42CEB0(v1216)) {
    mplew.StartNode("Mask - " + map.get(0x22BC2F0));
    if (sub_42D850(mask)) {
        v1217 = mplew.writeInt("v1217");
    }
    else {
        v1218 = mplew.writeShort("v1218");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1222 = Check_Buff(mask, 0x22BC338);//259
if (sub_42CEB0(v1222)) {
    mplew.StartNode("Mask - " + map.get(0x22BC338));
    if (sub_42D850(mask)) {
        v1223 = mplew.writeInt("v1223");
    }
    else {
        v1224 = mplew.writeShort("v1224");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1228 = Check_Buff(mask, 0x22BC380);//201
if (sub_42CEB0(v1228)) {
    mplew.StartNode("Mask - " + map.get(0x22BC380));
    if (sub_42D850(mask)) {
        v1229 = mplew.writeInt("v1229");
    }
    else {
        v1230 = mplew.writeShort("v1230");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1234 = Check_Buff(mask, 0x22BC3C8);//261
if (sub_42CEB0(v1234)) {
    mplew.StartNode("Mask - " + map.get(0x22BC3C8));
    if (sub_42D850(mask)) {
        v1235 = mplew.writeInt("v1235");
    }
    else {
        v1236 = mplew.writeShort("v1236");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1240 = Check_Buff(mask, 0x22B87E0);//262
if (sub_42CEB0(v1240)) {
    mplew.StartNode("Mask - " + map.get(0x22B87E0));
    if (sub_42D850(mask)) {
        v1241 = mplew.writeInt("v1241");
    }
    else {
        v1242 = mplew.writeShort("v1242");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1246 = Check_Buff(mask, 0x22BC410);//263
if (sub_42CEB0(v1246)) {
    mplew.StartNode("Mask - " + map.get(0x22BC410));
    if (sub_42D850(mask)) {
        v1247 = mplew.writeInt("v1247");
    }
    else {
        v1248 = mplew.writeShort("v1248");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1252 = Check_Buff(mask, 0x22B8828);//264
if (sub_42CEB0(v1252)) {
    mplew.StartNode("Mask - " + map.get(0x22B8828));
    if (sub_42D850(mask)) {
        v1253 = mplew.writeInt("v1253");
    }
    else {
        v1254 = mplew.writeShort("v1254");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1258 = Check_Buff(mask, 0x22BC458);//265
if (sub_42CEB0(v1258)) {
    mplew.StartNode("Mask - " + map.get(0x22BC458));
    if (sub_42D850(mask)) {
        v1259 = mplew.writeInt("v1259");
    }
    else {
        v1260 = mplew.writeShort("v1260");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1264 = Check_Buff(mask, 0x22BC4A0);//274
if (sub_42CEB0(v1264)) {
    mplew.StartNode("Mask - " + map.get(0x22BC4A0));
    if (sub_42D850(mask)) {
        v1265 = mplew.writeInt("v1265");
    }
    else {
        v1266 = mplew.writeShort("v1266");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1270 = Check_Buff(mask, 0x22BC4E8);//130
if (sub_42CEB0(v1270)) {
    mplew.StartNode("Mask - " + map.get(0x22BC4E8));
    if (sub_42D850(mask)) {
        v1271 = mplew.writeInt("v1271");
    }
    else {
        v1272 = mplew.writeShort("v1272");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1276 = Check_Buff(mask, 0x22BC530);//268
if (sub_42CEB0(v1276)) {
    mplew.StartNode("Mask - " + map.get(0x22BC530));
    if (sub_42D850(mask)) {
        v1277 = mplew.writeInt("v1277");
    }
    else {
        v1278 = mplew.writeShort("v1278");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1282 = Check_Buff(mask, 0x22BC578);//269
if (sub_42CEB0(v1282)) {
    mplew.StartNode("Mask - " + map.get(0x22BC578));
    if (sub_42D850(mask)) {
        v1283 = mplew.writeInt("v1283");
    }
    else {
        v1284 = mplew.writeShort("v1284");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1288 = Check_Buff(mask, 0x22BC5C0);//270
if (sub_42CEB0(v1288)) {
    mplew.StartNode("Mask - " + map.get(0x22BC5C0));
    if (sub_42D850(mask)) {
        v1289 = mplew.writeInt("v1289");
    }
    else {
        v1290 = mplew.writeShort("v1290");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1294 = Check_Buff(mask, 0x22BC608);//271
if (sub_42CEB0(v1294)) {
    mplew.StartNode("Mask - " + map.get(0x22BC608));
    if (sub_42D850(mask)) {
        v1295 = mplew.writeInt("v1295");
    }
    else {
        v1296 = mplew.writeShort("v1296");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1300 = Check_Buff(mask, 0x22BC650);//272
if (sub_42CEB0(v1300)) {
    mplew.StartNode("Mask - " + map.get(0x22BC650));
    if (sub_42D850(mask)) {
        v1301 = mplew.writeInt("v1301");
    }
    else {
        v1302 = mplew.writeShort("v1302");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1306 = Check_Buff(mask, 0x22BC698);//273
if (sub_42CEB0(v1306)) {
    mplew.StartNode("Mask - " + map.get(0x22BC698));
    if (sub_42D850(mask)) {
        v1307 = mplew.writeInt("v1307");
    }
    else {
        v1308 = mplew.writeShort("v1308");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1312 = Check_Buff(mask, 0x22BC6E0);//275
if (sub_42CEB0(v1312)) {
    mplew.StartNode("Mask - " + map.get(0x22BC6E0));
    if (sub_42D850(mask)) {
        v1313 = mplew.writeInt("v1313");
    }
    else {
        v1314 = mplew.writeShort("v1314");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1318 = Check_Buff(mask, 0x22BC728);//276
if (sub_42CEB0(v1318)) {
    mplew.StartNode("Mask - " + map.get(0x22BC728));
    if (sub_42D850(mask)) {
        v1319 = mplew.writeInt("v1319");
    }
    else {
        v1320 = mplew.writeShort("v1320");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1324 = Check_Buff(mask, 0x22BC770);//277
if (sub_42CEB0(v1324)) {
    mplew.StartNode("Mask - " + map.get(0x22BC770));
    if (sub_42D850(mask)) {
        v1325 = mplew.writeInt("v1325");
    }
    else {
        v1326 = mplew.writeShort("v1326");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1330 = Check_Buff(mask, 0x22BC7B8);//278
if (sub_42CEB0(v1330)) {
    mplew.StartNode("Mask - " + map.get(0x22BC7B8));
    if (sub_42D850(mask)) {
        v1331 = mplew.writeInt("v1331");
    }
    else {
        v1332 = mplew.writeShort("v1332");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1336 = Check_Buff(mask, 0x22BC800);//279
if (sub_42CEB0(v1336)) {
    mplew.StartNode("Mask - " + map.get(0x22BC800));
    if (sub_42D850(mask)) {
        v1337 = mplew.writeInt("v1337");
    }
    else {
        v1338 = mplew.writeShort("v1338");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1342 = Check_Buff(mask, 0x22BC848);//280
if (sub_42CEB0(v1342)) {
    mplew.StartNode("Mask - " + map.get(0x22BC848));
    if (sub_42D850(mask)) {
        v1343 = mplew.writeInt("v1343");
    }
    else {
        v1344 = mplew.writeShort("v1344");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1348 = Check_Buff(mask, 0x22BC890);//337
if (sub_42CEB0(v1348)) {
    mplew.StartNode("Mask - " + map.get(0x22BC890));
    if (sub_42D850(mask)) {
        v1349 = mplew.writeInt("v1349");
    }
    else {
        v1350 = mplew.writeShort("v1350");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1354 = Check_Buff(mask, 0x22BC8D8);//281
if (sub_42CEB0(v1354)) {
    mplew.StartNode("Mask - " + map.get(0x22BC8D8));
    if (sub_42D850(mask)) {
        v1355 = mplew.writeInt("v1355");
    }
    else {
        v1356 = mplew.writeShort("v1356");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1360 = Check_Buff(mask, 0x22BC920);//282
if (sub_42CEB0(v1360)) {
    mplew.StartNode("Mask - " + map.get(0x22BC920));
    if (sub_42D850(mask)) {
        v1361 = mplew.writeInt("v1361");
    }
    else {
        v1362 = mplew.writeShort("v1362");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1366 = Check_Buff(mask, 0x22BC968);//283
if (sub_42CEB0(v1366)) {
    mplew.StartNode("Mask - " + map.get(0x22BC968));
    if (sub_42D850(mask)) {
        v1367 = mplew.writeInt("v1367");
    }
    else {
        v1368 = mplew.writeShort("v1368");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1372 = Check_Buff(mask, 0x22BC9B0);//284
if (sub_42CEB0(v1372)) {
    mplew.StartNode("Mask - " + map.get(0x22BC9B0));
    if (sub_42D850(mask)) {
        v1373 = mplew.writeInt("v1373");
    }
    else {
        v1374 = mplew.writeShort("v1374");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1378 = Check_Buff(mask, 0x22BC9F8);//285
if (sub_42CEB0(v1378)) {
    mplew.StartNode("Mask - " + map.get(0x22BC9F8));
    if (sub_42D850(mask)) {
        v1379 = mplew.writeInt("v1379");
    }
    else {
        v1380 = mplew.writeShort("v1380");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1384 = Check_Buff(mask, 0x22BCA40);//286
if (sub_42CEB0(v1384)) {
    mplew.StartNode("Mask - " + map.get(0x22BCA40));
    if (sub_42D850(mask)) {
        v1385 = mplew.writeInt("v1385");
    }
    else {
        v1386 = mplew.writeShort("v1386");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1390 = Check_Buff(mask, 0x22BCA88);//287
if (sub_42CEB0(v1390)) {
    mplew.StartNode("Mask - " + map.get(0x22BCA88));
    if (sub_42D850(mask)) {
        v1391 = mplew.writeInt("v1391");
    }
    else {
        v1392 = mplew.writeShort("v1392");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1396 = Check_Buff(mask, 0x22BCAD0);//288
if (sub_42CEB0(v1396)) {
    mplew.StartNode("Mask - " + map.get(0x22BCAD0));
    if (sub_42D850(mask)) {
        v1397 = mplew.writeInt("v1397");
    }
    else {
        v1398 = mplew.writeShort("v1398");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1402 = Check_Buff(mask, 0x22BCB18);//329
if (sub_42CEB0(v1402)) {
    mplew.StartNode("Mask - " + map.get(0x22BCB18));
    if (sub_42D850(mask)) {
        v1403 = mplew.writeInt("v1403");
    }
    else {
        v1404 = mplew.writeShort("v1404");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1408 = Check_Buff(mask, 0x22BCB60);//330
if (sub_42CEB0(v1408)) {
    mplew.StartNode("Mask - " + map.get(0x22BCB60));
    if (sub_42D850(mask)) {
        v1409 = mplew.writeInt("v1409");
    }
    else {
        v1410 = mplew.writeShort("v1410");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1414 = Check_Buff(mask, 0x22BCBA8);//331
if (sub_42CEB0(v1414)) {
    mplew.StartNode("Mask - " + map.get(0x22BCBA8));
    if (sub_42D850(mask)) {
        v1415 = mplew.writeInt("v1415");
    }
    else {
        v1416 = mplew.writeShort("v1416");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1420 = Check_Buff(mask, 0x22BCBF0);//289
if (sub_42CEB0(v1420)) {
    mplew.StartNode("Mask - " + map.get(0x22BCBF0));
    if (sub_42D850(mask)) {
        v1421 = mplew.writeInt("v1421");
    }
    else {
        v1422 = mplew.writeShort("v1422");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1426 = Check_Buff(mask, 0x22BCC38);//290
if (sub_42CEB0(v1426)) {
    mplew.StartNode("Mask - " + map.get(0x22BCC38));
    if (sub_42D850(mask)) {
        v1427 = mplew.writeInt("v1427");
    }
    else {
        v1428 = mplew.writeShort("v1428");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1432 = Check_Buff(mask, 0x22BCC80);//291
if (sub_42CEB0(v1432)) {
    mplew.StartNode("Mask - " + map.get(0x22BCC80));
    if (sub_42D850(mask)) {
        v1433 = mplew.writeInt("v1433");
    }
    else {
        v1434 = mplew.writeShort("v1434");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1438 = Check_Buff(mask, 0x22BCCC8);//292
if (sub_42CEB0(v1438)) {
    mplew.StartNode("Mask - " + map.get(0x22BCCC8));
    if (sub_42D850(mask)) {
        v1439 = mplew.writeInt("v1439");
    }
    else {
        v1440 = mplew.writeShort("v1440");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1444 = Check_Buff(mask, 0x22BCD10);//293
if (sub_42CEB0(v1444)) {
    mplew.StartNode("Mask - " + map.get(0x22BCD10));
    if (sub_42D850(mask)) {
        v1445 = mplew.writeInt("v1445");
    }
    else {
        v1446 = mplew.writeShort("v1446");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1450 = Check_Buff(mask, 0x22BCD58);//294
if (sub_42CEB0(v1450)) {
    mplew.StartNode("Mask - " + map.get(0x22BCD58));
    if (sub_42D850(mask)) {
        v1451 = mplew.writeInt("v1451");
    }
    else {
        v1452 = mplew.writeShort("v1452");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1456 = Check_Buff(mask, 0x22B8870);//295
if (sub_42CEB0(v1456)) {
    mplew.StartNode("Mask - " + map.get(0x22B8870));
    if (sub_42D850(mask)) {
        v1457 = mplew.writeInt("v1457");
    }
    else {
        v1458 = mplew.writeShort("v1458");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1462 = Check_Buff(mask, 0x22BCDA0);//299
if (sub_42CEB0(v1462)) {
    mplew.StartNode("Mask - " + map.get(0x22BCDA0));
    if (sub_42D850(mask)) {
        v1463 = mplew.writeInt("v1463");
    }
    else {
        v1464 = mplew.writeShort("v1464");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1468 = Check_Buff(mask, 0x22BCDE8);//296
if (sub_42CEB0(v1468)) {
    mplew.StartNode("Mask - " + map.get(0x22BCDE8));
    if (sub_42D850(mask)) {
        v1469 = mplew.writeInt("v1469");
    }
    else {
        v1470 = mplew.writeShort("v1470");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1474 = Check_Buff(mask, 0x22BCE30);//297
if (sub_42CEB0(v1474)) {
    mplew.StartNode("Mask - " + map.get(0x22BCE30));
    if (sub_42D850(mask)) {
        v1475 = mplew.writeInt("v1475");
    }
    else {
        v1476 = mplew.writeShort("v1476");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1480 = Check_Buff(mask, 0x22BCE78);//298
if (sub_42CEB0(v1480)) {
    mplew.StartNode("Mask - " + map.get(0x22BCE78));
    if (sub_42D850(mask)) {
        v1481 = mplew.writeInt("v1481");
    }
    else {
        v1482 = mplew.writeShort("v1482");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1486 = Check_Buff(mask, 0x22BCEC0);//300
if (sub_42CEB0(v1486)) {
    mplew.StartNode("Mask - " + map.get(0x22BCEC0));
    if (sub_42D850(mask)) {
        v1487 = mplew.writeInt("v1487");
    }
    else {
        v1488 = mplew.writeShort("v1488");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1492 = Check_Buff(mask, 0x22BCF08);//301
if (sub_42CEB0(v1492)) {
    mplew.StartNode("Mask - " + map.get(0x22BCF08));
    if (sub_42D850(mask)) {
        v1493 = mplew.writeInt("v1493");
    }
    else {
        v1494 = mplew.writeShort("v1494");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1498 = Check_Buff(mask, 0x22BCF50);//302
if (sub_42CEB0(v1498)) {
    mplew.StartNode("Mask - " + map.get(0x22BCF50));
    if (sub_42D850(mask)) {
        v1499 = mplew.writeInt("v1499");
    }
    else {
        v1500 = mplew.writeShort("v1500");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1504 = Check_Buff(mask, 0x22BCF98);//303
if (sub_42CEB0(v1504)) {
    mplew.StartNode("Mask - " + map.get(0x22BCF98));
    if (sub_42D850(mask)) {
        v1505 = mplew.writeInt("v1505");
    }
    else {
        v1506 = mplew.writeShort("v1506");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1510 = Check_Buff(mask, 0x22BCFE0);//206
if (sub_42CEB0(v1510)) {
    mplew.StartNode("Mask - " + map.get(0x22BCFE0));
    if (sub_42D850(mask)) {
        v1511 = mplew.writeInt("v1511");
    }
    else {
        v1512 = mplew.writeShort("v1512");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1516 = Check_Buff(mask, 0x22BD028);//304
if (sub_42CEB0(v1516)) {
    mplew.StartNode("Mask - " + map.get(0x22BD028));
    if (sub_42D850(mask)) {
        v1517 = mplew.writeInt("v1517");
    }
    else {
        v1518 = mplew.writeShort("v1518");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1522 = Check_Buff(mask, 0x22BD070);//305
if (sub_42CEB0(v1522)) {
    mplew.StartNode("Mask - " + map.get(0x22BD070));
    if (sub_42D850(mask)) {
        v1523 = mplew.writeInt("v1523");
    }
    else {
        v1524 = mplew.writeShort("v1524");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1528 = Check_Buff(mask, 0x22BD0B8);//306
if (sub_42CEB0(v1528)) {
    mplew.StartNode("Mask - " + map.get(0x22BD0B8));
    if (sub_42D850(mask)) {
        v1529 = mplew.writeInt("v1529");
    }
    else {
        v1530 = mplew.writeShort("v1530");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1534 = Check_Buff(mask, 0x22BD100);//307
if (sub_42CEB0(v1534)) {
    mplew.StartNode("Mask - " + map.get(0x22BD100));
    if (sub_42D850(mask)) {
        v1535 = mplew.writeInt("v1535");
    }
    else {
        v1536 = mplew.writeShort("v1536");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1540 = Check_Buff(mask, 0x22BD148);//308
if (sub_42CEB0(v1540)) {
    mplew.StartNode("Mask - " + map.get(0x22BD148));
    if (sub_42D850(mask)) {
        v1541 = mplew.writeInt("v1541");
    }
    else {
        v1542 = mplew.writeShort("v1542");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1546 = Check_Buff(mask, 0x22B89D8);//309
if (sub_42CEB0(v1546)) {
    mplew.StartNode("Mask - " + map.get(0x22B89D8));
    if (sub_42D850(mask)) {
        v1547 = mplew.writeInt("v1547");
    }
    else {
        v1548 = mplew.writeShort("v1548");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1552 = Check_Buff(mask, 0x22BD190);//312
if (sub_42CEB0(v1552)) {
    mplew.StartNode("Mask - " + map.get(0x22BD190));
    if (sub_42D850(mask)) {
        v1553 = mplew.writeInt("v1553");
    }
    else {
        v1554 = mplew.writeShort("v1554");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1558 = Check_Buff(mask, 0x22BD1D8);//315
if (sub_42CEB0(v1558)) {
    mplew.StartNode("Mask - " + map.get(0x22BD1D8));
    if (sub_42D850(mask)) {
        v1559 = mplew.writeInt("v1559");
    }
    else {
        v1560 = mplew.writeShort("v1560");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1564 = Check_Buff(mask, 0x22BD220);//316
if (sub_42CEB0(v1564)) {
    mplew.StartNode("Mask - " + map.get(0x22BD220));
    if (sub_42D850(mask)) {
        v1565 = mplew.writeInt("v1565");
    }
    else {
        v1566 = mplew.writeShort("v1566");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1570 = Check_Buff(mask, 0x22BD268);//317
if (sub_42CEB0(v1570)) {
    mplew.StartNode("Mask - " + map.get(0x22BD268));
    if (sub_42D850(mask)) {
        v1571 = mplew.writeInt("v1571");
    }
    else {
        v1572 = mplew.writeShort("v1572");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1576 = Check_Buff(mask, 0x22BD2B0);//318
if (sub_42CEB0(v1576)) {
    mplew.StartNode("Mask - " + map.get(0x22BD2B0));
    if (sub_42D850(mask)) {
        v1577 = mplew.writeInt("v1577");
    }
    else {
        v1578 = mplew.writeShort("v1578");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1582 = Check_Buff(mask, 0x22BD2F8);//319
if (sub_42CEB0(v1582)) {
    mplew.StartNode("Mask - " + map.get(0x22BD2F8));
    if (sub_42D850(mask)) {
        v1583 = mplew.writeInt("v1583");
    }
    else {
        v1584 = mplew.writeShort("v1584");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1588 = Check_Buff(mask, 0x22BD340);//320
if (sub_42CEB0(v1588)) {
    mplew.StartNode("Mask - " + map.get(0x22BD340));
    if (sub_42D850(mask)) {
        v1589 = mplew.writeInt("v1589");
    }
    else {
        v1590 = mplew.writeShort("v1590");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1594 = Check_Buff(mask, 0x22BD388);//321
if (sub_42CEB0(v1594)) {
    mplew.StartNode("Mask - " + map.get(0x22BD388));
    if (sub_42D850(mask)) {
        v1595 = mplew.writeInt("v1595");
    }
    else {
        v1596 = mplew.writeShort("v1596");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1600 = Check_Buff(mask, 0x22BD3D0);//322
if (sub_42CEB0(v1600)) {
    mplew.StartNode("Mask - " + map.get(0x22BD3D0));
    if (sub_42D850(mask)) {
        v1601 = mplew.writeInt("v1601");
    }
    else {
        v1602 = mplew.writeShort("v1602");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1606 = Check_Buff(mask, 0x22BD418);//323
if (sub_42CEB0(v1606)) {
    mplew.StartNode("Mask - " + map.get(0x22BD418));
    if (sub_42D850(mask)) {
        v1607 = mplew.writeInt("v1607");
    }
    else {
        v1608 = mplew.writeShort("v1608");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1612 = Check_Buff(mask, 0x22BD460);//324
if (sub_42CEB0(v1612)) {
    mplew.StartNode("Mask - " + map.get(0x22BD460));
    if (sub_42D850(mask)) {
        v1613 = mplew.writeInt("v1613");
    }
    else {
        v1614 = mplew.writeShort("v1614");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1618 = Check_Buff(mask, 0x22BD4A8);//325
if (sub_42CEB0(v1618)) {
    mplew.StartNode("Mask - " + map.get(0x22BD4A8));
    if (sub_42D850(mask)) {
        v1619 = mplew.writeInt("v1619");
    }
    else {
        v1620 = mplew.writeShort("v1620");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1624 = Check_Buff(mask, 0x22BD4F0);//326
if (sub_42CEB0(v1624)) {
    mplew.StartNode("Mask - " + map.get(0x22BD4F0));
    if (sub_42D850(mask)) {
        v1625 = mplew.writeInt("v1625");
    }
    else {
        v1626 = mplew.writeShort("v1626");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1630 = Check_Buff(mask, 0x22BD538);//333
if (sub_42CEB0(v1630)) {
    mplew.StartNode("Mask - " + map.get(0x22BD538));
    if (sub_42D850(mask)) {
        v1631 = mplew.writeInt("v1631");
    }
    else {
        v1632 = mplew.writeShort("v1632");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1636 = Check_Buff(mask, 0x22BD580);//341
if (sub_42CEB0(v1636)) {
    mplew.StartNode("Mask - " + map.get(0x22BD580));
    if (sub_42D850(mask)) {
        v1637 = mplew.writeInt("v1637");
    }
    else {
        v1638 = mplew.writeShort("v1638");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1642 = Check_Buff(mask, 0x22BD5C8);//335
if (sub_42CEB0(v1642)) {
    mplew.StartNode("Mask - " + map.get(0x22BD5C8));
    if (sub_42D850(mask)) {
        v1643 = mplew.writeInt("v1643");
    }
    else {
        v1644 = mplew.writeShort("v1644");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1648 = Check_Buff(mask, 0x22BD610);//327
if (sub_42CEB0(v1648)) {
    mplew.StartNode("Mask - " + map.get(0x22BD610));
    if (sub_42D850(mask)) {
        v1649 = mplew.writeInt("v1649");
    }
    else {
        v1650 = mplew.writeShort("v1650");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1654 = Check_Buff(mask, 0x22BD658);//334
if (sub_42CEB0(v1654)) {
    mplew.StartNode("Mask - " + map.get(0x22BD658));
    if (sub_42D850(mask)) {
        v1655 = mplew.writeInt("v1655");
    }
    else {
        v1656 = mplew.writeShort("v1656");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1660 = Check_Buff(mask, 0x22BD6A0);//338
if (sub_42CEB0(v1660)) {
    mplew.StartNode("Mask - " + map.get(0x22BD6A0));
    if (sub_42D850(mask)) {
        v1661 = mplew.writeInt("v1661");
    }
    else {
        v1662 = mplew.writeShort("v1662");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1666 = Check_Buff(mask, 0x22BD6E8);//336
if (sub_42CEB0(v1666)) {
    mplew.StartNode("Mask - " + map.get(0x22BD6E8));
    if (sub_42D850(mask)) {
        v1667 = mplew.writeInt("v1667");
    }
    else {
        v1668 = mplew.writeShort("v1668");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1672 = Check_Buff(mask, 0x22BD730);//339
if (sub_42CEB0(v1672)) {
    mplew.StartNode("Mask - " + map.get(0x22BD730));
    if (sub_42D850(mask)) {
        v1673 = mplew.writeInt("v1673");
    }
    else {
        v1674 = mplew.writeShort("v1674");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1678 = Check_Buff(mask, 0x22BD778);//340
if (sub_42CEB0(v1678)) {
    mplew.StartNode("Mask - " + map.get(0x22BD778));
    if (sub_42D850(mask)) {
        v1679 = mplew.writeInt("v1679");
    }
    else {
        v1680 = mplew.writeShort("v1680");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1684 = Check_Buff(mask, 0x22BD7C0);//342
if (sub_42CEB0(v1684)) {
    mplew.StartNode("Mask - " + map.get(0x22BD7C0));
    if (sub_42D850(mask)) {
        v1685 = mplew.writeInt("v1685");
    }
    else {
        v1686 = mplew.writeShort("v1686");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1690 = Check_Buff(mask, 0x22B8A20);//344
if (sub_42CEB0(v1690)) {
    mplew.StartNode("Mask - " + map.get(0x22B8A20));
    if (sub_42D850(mask)) {
        v1691 = mplew.writeInt("v1691");
    }
    else {
        v1692 = mplew.writeShort("v1692");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1696 = Check_Buff(mask, 0x22BD808);//345
if (sub_42CEB0(v1696)) {
    mplew.StartNode("Mask - " + map.get(0x22BD808));
    if (sub_42D850(mask)) {
        v1697 = mplew.writeInt("v1697");
    }
    else {
        v1698 = mplew.writeShort("v1698");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1702 = Check_Buff(mask, 0x22BD850);//346
if (sub_42CEB0(v1702)) {
    mplew.StartNode("Mask - " + map.get(0x22BD850));
    if (sub_42D850(mask)) {
        v1703 = mplew.writeInt("v1703");
    }
    else {
        v1704 = mplew.writeShort("v1704");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1708 = Check_Buff(mask, 0x22B8A68);//347
if (sub_42CEB0(v1708)) {
    mplew.StartNode("Mask - " + map.get(0x22B8A68));
    if (sub_42D850(mask)) {
        v1709 = mplew.writeInt("v1709");
    }
    else {
        v1710 = mplew.writeShort("v1710");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1714 = Check_Buff(mask, 0x22BD898);//348
if (sub_42CEB0(v1714)) {
    mplew.StartNode("Mask - " + map.get(0x22BD898));
    if (sub_42D850(mask)) {
        v1715 = mplew.writeInt("v1715");
    }
    else {
        v1716 = mplew.writeShort("v1716");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1720 = Check_Buff(mask, 0x22BD8E0);//349
if (sub_42CEB0(v1720)) {
    mplew.StartNode("Mask - " + map.get(0x22BD8E0));
    if (sub_42D850(mask)) {
        v1721 = mplew.writeInt("v1721");
    }
    else {
        v1722 = mplew.writeShort("v1722");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1726 = Check_Buff(mask, 0x22BD928);//350
if (sub_42CEB0(v1726)) {
    mplew.StartNode("Mask - " + map.get(0x22BD928));
    if (sub_42D850(mask)) {
        v1727 = mplew.writeInt("v1727");
    }
    else {
        v1728 = mplew.writeShort("v1728");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1732 = Check_Buff(mask, 0x22BD970);//351
if (sub_42CEB0(v1732)) {
    mplew.StartNode("Mask - " + map.get(0x22BD970));
    if (sub_42D850(mask)) {
        v1733 = mplew.writeInt("v1733");
    }
    else {
        v1734 = mplew.writeShort("v1734");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1738 = Check_Buff(mask, 0x22BD9B8);//352
if (sub_42CEB0(v1738)) {
    mplew.StartNode("Mask - " + map.get(0x22BD9B8));
    if (sub_42D850(mask)) {
        v1739 = mplew.writeInt("v1739");
    }
    else {
        v1740 = mplew.writeShort("v1740");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1744 = Check_Buff(mask, 0x22BDA00);//353
if (sub_42CEB0(v1744)) {
    mplew.StartNode("Mask - " + map.get(0x22BDA00));
    if (sub_42D850(mask)) {
        v1745 = mplew.writeInt("v1745");
    }
    else {
        v1746 = mplew.writeShort("v1746");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1750 = Check_Buff(mask, 0x22BDA48);//354
if (sub_42CEB0(v1750)) {
    mplew.StartNode("Mask - " + map.get(0x22BDA48));
    if (sub_42D850(mask)) {
        v1751 = mplew.writeInt("v1751");
    }
    else {
        v1752 = mplew.writeShort("v1752");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1756 = Check_Buff(mask, 0x22BDA90);//355
if (sub_42CEB0(v1756)) {
    mplew.StartNode("Mask - " + map.get(0x22BDA90));
    if (sub_42D850(mask)) {
        v1757 = mplew.writeInt("v1757");
    }
    else {
        v1758 = mplew.writeShort("v1758");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1762 = Check_Buff(mask, 0x22BDAD8);//356
if (sub_42CEB0(v1762)) {
    mplew.StartNode("Mask - " + map.get(0x22BDAD8));
    if (sub_42D850(mask)) {
        v1763 = mplew.writeInt("v1763");
    }
    else {
        v1764 = mplew.writeShort("v1764");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1768 = Check_Buff(mask, 0x22BDB20);//357
if (sub_42CEB0(v1768)) {
    mplew.StartNode("Mask - " + map.get(0x22BDB20));
    if (sub_42D850(mask)) {
        v1769 = mplew.writeInt("v1769");
    }
    else {
        v1770 = mplew.writeShort("v1770");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1774 = Check_Buff(mask, 0x22BDB68);//359
if (sub_42CEB0(v1774)) {
    mplew.StartNode("Mask - " + map.get(0x22BDB68));
    if (sub_42D850(mask)) {
        v1775 = mplew.writeInt("v1775");
    }
    else {
        v1776 = mplew.writeShort("v1776");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1780 = Check_Buff(mask, 0x22BDBB0);//358
if (sub_42CEB0(v1780)) {
    mplew.StartNode("Mask - " + map.get(0x22BDBB0));
    if (sub_42D850(mask)) {
        v1781 = mplew.writeInt("v1781");
    }
    else {
        v1782 = mplew.writeShort("v1782");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1786 = Check_Buff(mask, 0x22BDBF8);//151
if (sub_42CEB0(v1786)) {
    mplew.StartNode("Mask - " + map.get(0x22BDBF8));
    if (sub_42D850(mask)) {
        v1787 = mplew.writeInt("v1787");
    }
    else {
        v1788 = mplew.writeShort("v1788");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1792 = Check_Buff(mask, 0x22BDC40);//360
if (sub_42CEB0(v1792)) {
    mplew.StartNode("Mask - " + map.get(0x22BDC40));
    if (sub_42D850(mask)) {
        v1793 = mplew.writeInt("v1793");
    }
    else {
        v1794 = mplew.writeShort("v1794");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1798 = Check_Buff(mask, 0x22B8B88);//361
if (sub_42CEB0(v1798)) {
    mplew.StartNode("Mask - " + map.get(0x22B8B88));
    if (sub_42D850(mask)) {
        v1799 = mplew.writeInt("v1799");
    }
    else {
        v1800 = mplew.writeShort("v1800");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1804 = Check_Buff(mask, 0x22BDC88);//362
if (sub_42CEB0(v1804)) {
    mplew.StartNode("Mask - " + map.get(0x22BDC88));
    if (sub_42D850(mask)) {
        v1805 = mplew.writeInt("v1805");
    }
    else {
        v1806 = mplew.writeShort("v1806");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1810 = Check_Buff(mask, 0x22BDCD0);//363
if (sub_42CEB0(v1810)) {
    mplew.StartNode("Mask - " + map.get(0x22BDCD0));
    if (sub_42D850(mask)) {
        v1811 = mplew.writeInt("v1811");
    }
    else {
        v1812 = mplew.writeShort("v1812");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1816 = Check_Buff(mask, 0x22B8B40);//364
if (sub_42CEB0(v1816)) {
    mplew.StartNode("Mask - " + map.get(0x22B8B40));
    if (sub_42D850(mask)) {
        v1817 = mplew.writeInt("v1817");
    }
    else {
        v1818 = mplew.writeShort("v1818");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1822 = Check_Buff(mask, 0x22BDD18);//365
if (sub_42CEB0(v1822)) {
    mplew.StartNode("Mask - " + map.get(0x22BDD18));
    if (sub_42D850(mask)) {
        v1823 = mplew.writeInt("v1823");
    }
    else {
        v1824 = mplew.writeShort("v1824");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1828 = Check_Buff(mask, 0x22BDD60);//366
if (sub_42CEB0(v1828)) {
    mplew.StartNode("Mask - " + map.get(0x22BDD60));
    if (sub_42D850(mask)) {
        v1829 = mplew.writeInt("v1829");
    }
    else {
        v1830 = mplew.writeShort("v1830");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1834 = Check_Buff(mask, 0x22BDDA8);//367
if (sub_42CEB0(v1834)) {
    mplew.StartNode("Mask - " + map.get(0x22BDDA8));
    if (sub_42D850(mask)) {
        v1835 = mplew.writeInt("v1835");
    }
    else {
        v1836 = mplew.writeShort("v1836");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1840 = Check_Buff(mask, 0x22BDDF0);//368
if (sub_42CEB0(v1840)) {
    mplew.StartNode("Mask - " + map.get(0x22BDDF0));
    if (sub_42D850(mask)) {
        v1841 = mplew.writeInt("v1841");
    }
    else {
        v1842 = mplew.writeShort("v1842");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1846 = Check_Buff(mask, 0x22BDE38);//369
if (sub_42CEB0(v1846)) {
    mplew.StartNode("Mask - " + map.get(0x22BDE38));
    if (sub_42D850(mask)) {
        v1847 = mplew.writeInt("v1847");
    }
    else {
        v1848 = mplew.writeShort("v1848");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1852 = Check_Buff(mask, 0x22BDE80);//370
if (sub_42CEB0(v1852)) {
    mplew.StartNode("Mask - " + map.get(0x22BDE80));
    if (sub_42D850(mask)) {
        v1853 = mplew.writeInt("v1853");
    }
    else {
        v1854 = mplew.writeShort("v1854");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1858 = Check_Buff(mask, 0x22BDEC8);//371
if (sub_42CEB0(v1858)) {
    mplew.StartNode("Mask - " + map.get(0x22BDEC8));
    if (sub_42D850(mask)) {
        v1859 = mplew.writeInt("v1859");
    }
    else {
        v1860 = mplew.writeShort("v1860");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1864 = Check_Buff(mask, 0x22BDF10);//372
if (sub_42CEB0(v1864)) {
    mplew.StartNode("Mask - " + map.get(0x22BDF10));
    if (sub_42D850(mask)) {
        v1865 = mplew.writeInt("v1865");
    }
    else {
        v1866 = mplew.writeShort("v1866");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1870 = Check_Buff(mask, 0x22BDF58);//373
if (sub_42CEB0(v1870)) {
    mplew.StartNode("Mask - " + map.get(0x22BDF58));
    if (sub_42D850(mask)) {
        v1871 = mplew.writeInt("v1871");
    }
    else {
        v1872 = mplew.writeShort("v1872");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1876 = Check_Buff(mask, 0x22BDFA0);//374
if (sub_42CEB0(v1876)) {
    mplew.StartNode("Mask - " + map.get(0x22BDFA0));
    if (sub_42D850(mask)) {
        v1877 = mplew.writeInt("v1877");
    }
    else {
        v1878 = mplew.writeShort("v1878");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1882 = Check_Buff(mask, 0x22BDFE8);//375
if (sub_42CEB0(v1882)) {
    mplew.StartNode("Mask - " + map.get(0x22BDFE8));
    if (sub_42D850(mask)) {
        v1883 = mplew.writeInt("v1883");
    }
    else {
        v1884 = mplew.writeShort("v1884");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1888 = Check_Buff(mask, 0x22BE030);//376
if (sub_42CEB0(v1888)) {
    mplew.StartNode("Mask - " + map.get(0x22BE030));
    if (sub_42D850(mask)) {
        v1889 = mplew.writeInt("v1889");
    }
    else {
        v1890 = mplew.writeShort("v1890");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1894 = Check_Buff(mask, 0x22BE078);//377
if (sub_42CEB0(v1894)) {
    mplew.StartNode("Mask - " + map.get(0x22BE078));
    if (sub_42D850(mask)) {
        v1895 = mplew.writeInt("v1895");
    }
    else {
        v1896 = mplew.writeShort("v1896");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1900 = Check_Buff(mask, 0x22BE0C0);//378
if (sub_42CEB0(v1900)) {
    mplew.StartNode("Mask - " + map.get(0x22BE0C0));
    if (sub_42D850(mask)) {
        v1901 = mplew.writeInt("v1901");
    }
    else {
        v1902 = mplew.writeShort("v1902");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1906 = Check_Buff(mask, 0x22BE108);//379
if (sub_42CEB0(v1906)) {
    mplew.StartNode("Mask - " + map.get(0x22BE108));
    if (sub_42D850(mask)) {
        v1907 = mplew.writeInt("v1907");
    }
    else {
        v1908 = mplew.writeShort("v1908");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1912 = Check_Buff(mask, 0x22BE150);//380
if (sub_42CEB0(v1912)) {
    mplew.StartNode("Mask - " + map.get(0x22BE150));
    if (sub_42D850(mask)) {
        v1913 = mplew.writeInt("v1913");
    }
    else {
        v1914 = mplew.writeShort("v1914");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1918 = Check_Buff(mask, 0x22BE198);//382
if (sub_42CEB0(v1918)) {
    mplew.StartNode("Mask - " + map.get(0x22BE198));
    if (sub_42D850(mask)) {
        v1919 = mplew.writeInt("v1919");
    }
    else {
        v1920 = mplew.writeShort("v1920");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1924 = Check_Buff(mask, 0x22BE1E0);//383
if (sub_42CEB0(v1924)) {
    mplew.StartNode("Mask - " + map.get(0x22BE1E0));
    if (sub_42D850(mask)) {
        v1925 = mplew.writeInt("v1925");
    }
    else {
        v1926 = mplew.writeShort("v1926");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1930 = Check_Buff(mask, 0x22BE228);//384
if (sub_42CEB0(v1930)) {
    mplew.StartNode("Mask - " + map.get(0x22BE228));
    if (sub_42D850(mask)) {
        v1931 = mplew.writeInt("v1931");
    }
    else {
        v1932 = mplew.writeShort("v1932");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1936 = Check_Buff(mask, 0x22BE270);//385
if (sub_42CEB0(v1936)) {
    mplew.StartNode("Mask - " + map.get(0x22BE270));
    if (sub_42D850(mask)) {
        v1937 = mplew.writeInt("v1937");
    }
    else {
        v1938 = mplew.writeShort("v1938");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1942 = Check_Buff(mask, 0x22BE2B8);//386
if (sub_42CEB0(v1942)) {
    mplew.StartNode("Mask - " + map.get(0x22BE2B8));
    if (sub_42D850(mask)) {
        v1943 = mplew.writeInt("v1943");
    }
    else {
        v1944 = mplew.writeShort("v1944");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1948 = Check_Buff(mask, 0x22BE300);//387
if (sub_42CEB0(v1948)) {
    mplew.StartNode("Mask - " + map.get(0x22BE300));
    if (sub_42D850(mask)) {
        v1949 = mplew.writeInt("v1949");
    }
    else {
        v1950 = mplew.writeShort("v1950");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1954 = Check_Buff(mask, 0x22BE348);//388
if (sub_42CEB0(v1954)) {
    mplew.StartNode("Mask - " + map.get(0x22BE348));
    if (sub_42D850(mask)) {
        v1955 = mplew.writeInt("v1955");
    }
    else {
        v1956 = mplew.writeShort("v1956");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1960 = Check_Buff(mask, 0x22BE390);//389
if (sub_42CEB0(v1960)) {
    mplew.StartNode("Mask - " + map.get(0x22BE390));
    if (sub_42D850(mask)) {
        v1961 = mplew.writeInt("v1961");
    }
    else {
        v1962 = mplew.writeShort("v1962");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1966 = Check_Buff(mask, 0x22BE3D8);//390
if (sub_42CEB0(v1966)) {
    mplew.StartNode("Mask - " + map.get(0x22BE3D8));
    if (sub_42D850(mask)) {
        v1967 = mplew.writeInt("v1967");
    }
    else {
        v1968 = mplew.writeShort("v1968");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1972 = Check_Buff(mask, 0x22BE420);//391
if (sub_42CEB0(v1972)) {
    mplew.StartNode("Mask - " + map.get(0x22BE420));
    if (sub_42D850(mask)) {
        v1973 = mplew.writeInt("v1973");
    }
    else {
        v1974 = mplew.writeShort("v1974");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1978 = Check_Buff(mask, 0x22BE468);//392
if (sub_42CEB0(v1978)) {
    mplew.StartNode("Mask - " + map.get(0x22BE468));
    if (sub_42D850(mask)) {
        v1979 = mplew.writeInt("v1979");
    }
    else {
        v1980 = mplew.writeShort("v1980");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1984 = Check_Buff(mask, 0x22BE4B0);//393
if (sub_42CEB0(v1984)) {
    mplew.StartNode("Mask - " + map.get(0x22BE4B0));
    if (sub_42D850(mask)) {
        v1985 = mplew.writeInt("v1985");
    }
    else {
        v1986 = mplew.writeShort("v1986");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1990 = Check_Buff(mask, 0x22BE4F8);//394
if (sub_42CEB0(v1990)) {
    mplew.StartNode("Mask - " + map.get(0x22BE4F8));
    if (sub_42D850(mask)) {
        v1991 = mplew.writeInt("v1991");
    }
    else {
        v1992 = mplew.writeShort("v1992");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v1996 = Check_Buff(mask, 0x22BE540);//397
if (sub_42CEB0(v1996)) {
    mplew.StartNode("Mask - " + map.get(0x22BE540));
    if (sub_42D850(mask)) {
        v1997 = mplew.writeInt("v1997");
    }
    else {
        v1998 = mplew.writeShort("v1998");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2002 = Check_Buff(mask, 0x22BE588);//398
if (sub_42CEB0(v2002)) {
    mplew.StartNode("Mask - " + map.get(0x22BE588));
    if (sub_42D850(mask)) {
        v2003 = mplew.writeInt("v2003");
    }
    else {
        v2004 = mplew.writeShort("v2004");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2008 = Check_Buff(mask, 0x22BE5D0);//399
if (sub_42CEB0(v2008)) {
    mplew.StartNode("Mask - " + map.get(0x22BE5D0));
    if (sub_42D850(mask)) {
        v2009 = mplew.writeInt("v2009");
    }
    else {
        v2010 = mplew.writeShort("v2010");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2014 = Check_Buff(mask, 0x22BE618);//400
if (sub_42CEB0(v2014)) {
    mplew.StartNode("Mask - " + map.get(0x22BE618));
    if (sub_42D850(mask)) {
        v2015 = mplew.writeInt("v2015");
    }
    else {
        v2016 = mplew.writeShort("v2016");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2020 = Check_Buff(mask, 0x22BE660);//401
if (sub_42CEB0(v2020)) {
    mplew.StartNode("Mask - " + map.get(0x22BE660));
    if (sub_42D850(mask)) {
        v2021 = mplew.writeInt("v2021");
    }
    else {
        v2022 = mplew.writeShort("v2022");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2026 = Check_Buff(mask, 0x22BE6A8);//402
if (sub_42CEB0(v2026)) {
    mplew.StartNode("Mask - " + map.get(0x22BE6A8));
    if (sub_42D850(mask)) {
        v2027 = mplew.writeInt("v2027");
    }
    else {
        v2028 = mplew.writeShort("v2028");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2032 = Check_Buff(mask, 0x22BE6F0);//405
if (sub_42CEB0(v2032)) {
    mplew.StartNode("Mask - " + map.get(0x22BE6F0));
    if (sub_42D850(mask)) {
        v2033 = mplew.writeInt("v2033");
    }
    else {
        v2034 = mplew.writeShort("v2034");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2038 = Check_Buff(mask, 0x22BE738);//406
if (sub_42CEB0(v2038)) {
    mplew.StartNode("Mask - " + map.get(0x22BE738));
    if (sub_42D850(mask)) {
        v2039 = mplew.writeInt("v2039");
    }
    else {
        v2040 = mplew.writeShort("v2040");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2044 = Check_Buff(mask, 0x22BE780);//407
if (sub_42CEB0(v2044)) {
    mplew.StartNode("Mask - " + map.get(0x22BE780));
    if (sub_42D850(mask)) {
        v2045 = mplew.writeInt("v2045");
    }
    else {
        v2046 = mplew.writeShort("v2046");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2050 = Check_Buff(mask, 0x22BE7C8);//408
if (sub_42CEB0(v2050)) {
    mplew.StartNode("Mask - " + map.get(0x22BE7C8));
    if (sub_42D850(mask)) {
        v2051 = mplew.writeInt("v2051");
    }
    else {
        v2052 = mplew.writeShort("v2052");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2056 = Check_Buff(mask, 0x22BE810);//409
if (sub_42CEB0(v2056)) {
    mplew.StartNode("Mask - " + map.get(0x22BE810));
    if (sub_42D850(mask)) {
        v2057 = mplew.writeInt("v2057");
    }
    else {
        v2058 = mplew.writeShort("v2058");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2062 = Check_Buff(mask, 0x22BE858);//410
if (sub_42CEB0(v2062)) {
    mplew.StartNode("Mask - " + map.get(0x22BE858));
    if (sub_42D850(mask)) {
        v2063 = mplew.writeInt("v2063");
    }
    else {
        v2064 = mplew.writeShort("v2064");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2068 = Check_Buff(mask, 0x22BE8A0);//414
if (sub_42CEB0(v2068)) {
    mplew.StartNode("Mask - " + map.get(0x22BE8A0));
    if (sub_42D850(mask)) {
        v2069 = mplew.writeInt("v2069");
    }
    else {
        v2070 = mplew.writeShort("v2070");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2074 = Check_Buff(mask, 0x22BE8E8);//395
if (sub_42CEB0(v2074)) {
    mplew.StartNode("Mask - " + map.get(0x22BE8E8));
    if (sub_42D850(mask)) {
        v2075 = mplew.writeInt("v2075");
    }
    else {
        v2076 = mplew.writeShort("v2076");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2080 = Check_Buff(mask, 0x22BE930);//396
if (sub_42CEB0(v2080)) {
    mplew.StartNode("Mask - " + map.get(0x22BE930));
    if (sub_42D850(mask)) {
        v2081 = mplew.writeInt("v2081");
    }
    else {
        v2082 = mplew.writeShort("v2082");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2086 = Check_Buff(mask, 0x22BE978);//411
if (sub_42CEB0(v2086)) {
    mplew.StartNode("Mask - " + map.get(0x22BE978));
    if (sub_42D850(mask)) {
        v2087 = mplew.writeInt("v2087");
    }
    else {
        v2088 = mplew.writeShort("v2088");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2092 = Check_Buff(mask, 0x22BE9C0);//413
if (sub_42CEB0(v2092)) {
    mplew.StartNode("Mask - " + map.get(0x22BE9C0));
    if (sub_42D850(mask)) {
        v2093 = mplew.writeInt("v2093");
    }
    else {
        v2094 = mplew.writeShort("v2094");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2098 = Check_Buff(mask, 0x22BEA08);//415
if (sub_42CEB0(v2098)) {
    mplew.StartNode("Mask - " + map.get(0x22BEA08));
    if (sub_42D850(mask)) {
        v2099 = mplew.writeInt("v2099");
    }
    else {
        v2100 = mplew.writeShort("v2100");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2104 = Check_Buff(mask, 0x22BEA50);//416
if (sub_42CEB0(v2104)) {
    mplew.StartNode("Mask - " + map.get(0x22BEA50));
    if (sub_42D850(mask)) {
        v2105 = mplew.writeInt("v2105");
    }
    else {
        v2106 = mplew.writeShort("v2106");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2110 = Check_Buff(mask, 0x22BEA98);//417
if (sub_42CEB0(v2110)) {
    mplew.StartNode("Mask - " + map.get(0x22BEA98));
    if (sub_42D850(mask)) {
        v2111 = mplew.writeInt("v2111");
    }
    else {
        v2112 = mplew.writeShort("v2112");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2116 = Check_Buff(mask, 0x22BEAE0);//418
if (sub_42CEB0(v2116)) {
    mplew.StartNode("Mask - " + map.get(0x22BEAE0));
    if (sub_42D850(mask)) {
        v2117 = mplew.writeInt("v2117");
    }
    else {
        v2118 = mplew.writeShort("v2118");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2122 = Check_Buff(mask, 0x22BEB28);//419
if (sub_42CEB0(v2122)) {
    mplew.StartNode("Mask - " + map.get(0x22BEB28));
    if (sub_42D850(mask)) {
        v2123 = mplew.writeInt("v2123");
    }
    else {
        v2124 = mplew.writeShort("v2124");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2128 = Check_Buff(mask, 0x22BEB70);//420
if (sub_42CEB0(v2128)) {
    mplew.StartNode("Mask - " + map.get(0x22BEB70));
    if (sub_42D850(mask)) {
        v2129 = mplew.writeInt("v2129");
    }
    else {
        v2130 = mplew.writeShort("v2130");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2134 = Check_Buff(mask, 0x22BEBB8);//421
if (sub_42CEB0(v2134)) {
    mplew.StartNode("Mask - " + map.get(0x22BEBB8));
    if (sub_42D850(mask)) {
        v2135 = mplew.writeInt("v2135");
    }
    else {
        v2136 = mplew.writeShort("v2136");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2140 = Check_Buff(mask, 0x22BEC00);//422
if (sub_42CEB0(v2140)) {
    mplew.StartNode("Mask - " + map.get(0x22BEC00));
    if (sub_42D850(mask)) {
        v2141 = mplew.writeInt("v2141");
    }
    else {
        v2142 = mplew.writeShort("v2142");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2146 = Check_Buff(mask, 0x22BEC48);//423
if (sub_42CEB0(v2146)) {
    mplew.StartNode("Mask - " + map.get(0x22BEC48));
    if (sub_42D850(mask)) {
        v2147 = mplew.writeInt("v2147");
    }
    else {
        v2148 = mplew.writeShort("v2148");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2152 = Check_Buff(mask, 0x22BEC90);//424
if (sub_42CEB0(v2152)) {
    mplew.StartNode("Mask - " + map.get(0x22BEC90));
    if (sub_42D850(mask)) {
        v2153 = mplew.writeInt("v2153");
    }
    else {
        v2154 = mplew.writeShort("v2154");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2158 = Check_Buff(mask, 0x22BECD8);//425
if (sub_42CEB0(v2158)) {
    mplew.StartNode("Mask - " + map.get(0x22BECD8));
    if (sub_42D850(mask)) {
        v2159 = mplew.writeInt("v2159");
    }
    else {
        v2160 = mplew.writeShort("v2160");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2164 = Check_Buff(mask, 0x22BED20);//426
if (sub_42CEB0(v2164)) {
    mplew.StartNode("Mask - " + map.get(0x22BED20));
    if (sub_42D850(mask)) {
        v2165 = mplew.writeInt("v2165");
    }
    else {
        v2166 = mplew.writeShort("v2166");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2170 = Check_Buff(mask, 0x22BED68);//427
if (sub_42CEB0(v2170)) {
    mplew.StartNode("Mask - " + map.get(0x22BED68));
    if (sub_42D850(mask)) {
        v2171 = mplew.writeInt("v2171");
    }
    else {
        v2172 = mplew.writeShort("v2172");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2176 = Check_Buff(mask, 0x22BEDB0);//428
if (sub_42CEB0(v2176)) {
    mplew.StartNode("Mask - " + map.get(0x22BEDB0));
    if (sub_42D850(mask)) {
        v2177 = mplew.writeInt("v2177");
    }
    else {
        v2178 = mplew.writeShort("v2178");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2182 = Check_Buff(mask, 0x22BEDF8);//429
if (sub_42CEB0(v2182)) {
    mplew.StartNode("Mask - " + map.get(0x22BEDF8));
    if (sub_42D850(mask)) {
        v2183 = mplew.writeInt("v2183");
    }
    else {
        v2184 = mplew.writeShort("v2184");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2188 = Check_Buff(mask, 0x22BEE40);//430
if (sub_42CEB0(v2188)) {
    mplew.StartNode("Mask - " + map.get(0x22BEE40));
    if (sub_42D850(mask)) {
        v2189 = mplew.writeInt("v2189");
    }
    else {
        v2190 = mplew.writeShort("v2190");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2194 = Check_Buff(mask, 0x22BEE88);//431
if (sub_42CEB0(v2194)) {
    mplew.StartNode("Mask - " + map.get(0x22BEE88));
    if (sub_42D850(mask)) {
        v2195 = mplew.writeInt("v2195");
    }
    else {
        v2196 = mplew.writeShort("v2196");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2200 = Check_Buff(mask, 0x22BEED0);//432
if (sub_42CEB0(v2200)) {
    mplew.StartNode("Mask - " + map.get(0x22BEED0));
    if (sub_42D850(mask)) {
        v2201 = mplew.writeInt("v2201");
    }
    else {
        v2202 = mplew.writeShort("v2202");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2206 = Check_Buff(mask, 0x22BEF18);//433
if (sub_42CEB0(v2206)) {
    mplew.StartNode("Mask - " + map.get(0x22BEF18));
    if (sub_42D850(mask)) {
        v2207 = mplew.writeInt("v2207");
    }
    else {
        v2208 = mplew.writeShort("v2208");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2212 = Check_Buff(mask, 0x22BEF60);//434
if (sub_42CEB0(v2212)) {
    mplew.StartNode("Mask - " + map.get(0x22BEF60));
    if (sub_42D850(mask)) {
        v2213 = mplew.writeInt("v2213");
    }
    else {
        v2214 = mplew.writeShort("v2214");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2218 = Check_Buff(mask, 0x22BEFA8);//435
if (sub_42CEB0(v2218)) {
    mplew.StartNode("Mask - " + map.get(0x22BEFA8));
    if (sub_42D850(mask)) {
        v2219 = mplew.writeInt("v2219");
    }
    else {
        v2220 = mplew.writeShort("v2220");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2224 = Check_Buff(mask, 0x22BEFF0);//436
if (sub_42CEB0(v2224)) {
    mplew.StartNode("Mask - " + map.get(0x22BEFF0));
    if (sub_42D850(mask)) {
        v2225 = mplew.writeInt("v2225");
    }
    else {
        v2226 = mplew.writeShort("v2226");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2230 = Check_Buff(mask, 0x22BF038);//437
if (sub_42CEB0(v2230)) {
    mplew.StartNode("Mask - " + map.get(0x22BF038));
    if (sub_42D850(mask)) {
        v2231 = mplew.writeInt("v2231");
    }
    else {
        v2232 = mplew.writeShort("v2232");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2236 = Check_Buff(mask, 0x22BF080);//438
if (sub_42CEB0(v2236)) {
    mplew.StartNode("Mask - " + map.get(0x22BF080));
    if (sub_42D850(mask)) {
        v2237 = mplew.writeInt("v2237");
    }
    else {
        v2238 = mplew.writeShort("v2238");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2242 = Check_Buff(mask, 0x22BF0C8);//439
if (sub_42CEB0(v2242)) {
    mplew.StartNode("Mask - " + map.get(0x22BF0C8));
    if (sub_42D850(mask)) {
        v2243 = mplew.writeInt("v2243");
    }
    else {
        v2244 = mplew.writeShort("v2244");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2248 = Check_Buff(mask, 0x22BF110);//403
if (sub_42CEB0(v2248)) {
    mplew.StartNode("Mask - " + map.get(0x22BF110));
    if (sub_42D850(mask)) {
        v2249 = mplew.writeInt("v2249");
    }
    else {
        v2250 = mplew.writeShort("v2250");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2254 = Check_Buff(mask, 0x22BF158);//404
if (sub_42CEB0(v2254)) {
    mplew.StartNode("Mask - " + map.get(0x22BF158));
    if (sub_42D850(mask)) {
        v2255 = mplew.writeInt("v2255");
    }
    else {
        v2256 = mplew.writeShort("v2256");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2260 = Check_Buff(mask, 0x22BF1A0);//440
if (sub_42CEB0(v2260)) {
    mplew.StartNode("Mask - " + map.get(0x22BF1A0));
    if (sub_42D850(mask)) {
        v2261 = mplew.writeInt("v2261");
    }
    else {
        v2262 = mplew.writeShort("v2262");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2266 = Check_Buff(mask, 0x22BF1E8);//441
if (sub_42CEB0(v2266)) {
    mplew.StartNode("Mask - " + map.get(0x22BF1E8));
    if (sub_42D850(mask)) {
        v2267 = mplew.writeInt("v2267");
    }
    else {
        v2268 = mplew.writeShort("v2268");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2272 = Check_Buff(mask, 0x22BF230);//442
if (sub_42CEB0(v2272)) {
    mplew.StartNode("Mask - " + map.get(0x22BF230));
    if (sub_42D850(mask)) {
        v2273 = mplew.writeInt("v2273");
    }
    else {
        v2274 = mplew.writeShort("v2274");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2278 = Check_Buff(mask, 0x22BF278);//443
if (sub_42CEB0(v2278)) {
    mplew.StartNode("Mask - " + map.get(0x22BF278));
    if (sub_42D850(mask)) {
        v2279 = mplew.writeInt("v2279");
    }
    else {
        v2280 = mplew.writeShort("v2280");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2284 = Check_Buff(mask, 0x22BF2C0);//444
if (sub_42CEB0(v2284)) {
    mplew.StartNode("Mask - " + map.get(0x22BF2C0));
    if (sub_42D850(mask)) {
        v2285 = mplew.writeInt("v2285");
    }
    else {
        v2286 = mplew.writeShort("v2286");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2290 = Check_Buff(mask, 0x22BF308);//445
if (sub_42CEB0(v2290)) {
    mplew.StartNode("Mask - " + map.get(0x22BF308));
    if (sub_42D850(mask)) {
        v2291 = mplew.writeInt("v2291");
    }
    else {
        v2292 = mplew.writeShort("v2292");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2296 = Check_Buff(mask, 0x22BF350);//446
if (sub_42CEB0(v2296)) {
    mplew.StartNode("Mask - " + map.get(0x22BF350));
    if (sub_42D850(mask)) {
        v2297 = mplew.writeInt("v2297");
    }
    else {
        v2298 = mplew.writeShort("v2298");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2302 = Check_Buff(mask, 0x22BF398);//447
if (sub_42CEB0(v2302)) {
    mplew.StartNode("Mask - " + map.get(0x22BF398));
    if (sub_42D850(mask)) {
        v2303 = mplew.writeInt("v2303");
    }
    else {
        v2304 = mplew.writeShort("v2304");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2308 = Check_Buff(mask, 0x22BF3E0);//448
if (sub_42CEB0(v2308)) {
    mplew.StartNode("Mask - " + map.get(0x22BF3E0));
    if (sub_42D850(mask)) {
        v2309 = mplew.writeInt("v2309");
    }
    else {
        v2310 = mplew.writeShort("v2310");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2314 = Check_Buff(mask, 0x22BF428);//449
if (sub_42CEB0(v2314)) {
    mplew.StartNode("Mask - " + map.get(0x22BF428));
    if (sub_42D850(mask)) {
        v2315 = mplew.writeInt("v2315");
    }
    else {
        v2316 = mplew.writeShort("v2316");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2320 = Check_Buff(mask, 0x22BF470);//450
if (sub_42CEB0(v2320)) {
    mplew.StartNode("Mask - " + map.get(0x22BF470));
    if (sub_42D850(mask)) {
        v2321 = mplew.writeInt("v2321");
    }
    else {
        v2322 = mplew.writeShort("v2322");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2326 = Check_Buff(mask, 0x22BF4B8);//451
if (sub_42CEB0(v2326)) {
    mplew.StartNode("Mask - " + map.get(0x22BF4B8));
    if (sub_42D850(mask)) {
        v2327 = mplew.writeInt("v2327");
    }
    else {
        v2328 = mplew.writeShort("v2328");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2332 = Check_Buff(mask, 0x22BF500);//452
if (sub_42CEB0(v2332)) {
    mplew.StartNode("Mask - " + map.get(0x22BF500));
    if (sub_42D850(mask)) {
        v2333 = mplew.writeInt("v2333");
    }
    else {
        v2334 = mplew.writeShort("v2334");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2338 = Check_Buff(mask, 0x22BF548);//453
if (sub_42CEB0(v2338)) {
    mplew.StartNode("Mask - " + map.get(0x22BF548));
    if (sub_42D850(mask)) {
        v2339 = mplew.writeInt("v2339");
    }
    else {
        v2340 = mplew.writeShort("v2340");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2344 = Check_Buff(mask, 0x22BF590);//455
if (sub_42CEB0(v2344)) {
    mplew.StartNode("Mask - " + map.get(0x22BF590));
    if (sub_42D850(mask)) {
        v2345 = mplew.writeInt("v2345");
    }
    else {
        v2346 = mplew.writeShort("v2346");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2350 = Check_Buff(mask, 0x22BF5D8);//456
if (sub_42CEB0(v2350)) {
    mplew.StartNode("Mask - " + map.get(0x22BF5D8));
    if (sub_42D850(mask)) {
        v2351 = mplew.writeInt("v2351");
    }
    else {
        v2352 = mplew.writeShort("v2352");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2356 = Check_Buff(mask, 0x22BF620);//457
if (sub_42CEB0(v2356)) {
    mplew.StartNode("Mask - " + map.get(0x22BF620));
    if (sub_42D850(mask)) {
        v2357 = mplew.writeInt("v2357");
    }
    else {
        v2358 = mplew.writeShort("v2358");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2362 = Check_Buff(mask, 0x22BF668);//458
if (sub_42CEB0(v2362)) {
    mplew.StartNode("Mask - " + map.get(0x22BF668));
    if (sub_42D850(mask)) {
        v2363 = mplew.writeInt("v2363");
    }
    else {
        v2364 = mplew.writeShort("v2364");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2368 = Check_Buff(mask, 0x22BF6B0);//459
if (sub_42CEB0(v2368)) {
    mplew.StartNode("Mask - " + map.get(0x22BF6B0));
    if (sub_42D850(mask)) {
        v2369 = mplew.writeInt("v2369");
    }
    else {
        v2370 = mplew.writeShort("v2370");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2374 = Check_Buff(mask, 0x22BF6F8);//460
if (sub_42CEB0(v2374)) {
    mplew.StartNode("Mask - " + map.get(0x22BF6F8));
    if (sub_42D850(mask)) {
        v2375 = mplew.writeInt("v2375");
    }
    else {
        v2376 = mplew.writeShort("v2376");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2380 = Check_Buff(mask, 0x22BF740);//461
if (sub_42CEB0(v2380)) {
    mplew.StartNode("Mask - " + map.get(0x22BF740));
    if (sub_42D850(mask)) {
        v2381 = mplew.writeInt("v2381");
    }
    else {
        v2382 = mplew.writeShort("v2382");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2386 = Check_Buff(mask, 0x22BF788);//462
if (sub_42CEB0(v2386)) {
    mplew.StartNode("Mask - " + map.get(0x22BF788));
    if (sub_42D850(mask)) {
        v2387 = mplew.writeInt("v2387");
    }
    else {
        v2388 = mplew.writeShort("v2388");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2392 = Check_Buff(mask, 0x22BF7D0);//480
if (sub_42CEB0(v2392)) {
    mplew.StartNode("Mask - " + map.get(0x22BF7D0));
    if (sub_42D850(mask)) {
        v2393 = mplew.writeInt("v2393");
    }
    else {
        v2394 = mplew.writeShort("v2394");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2398 = Check_Buff(mask, 0x22BF818);//482
if (sub_42CEB0(v2398)) {
    mplew.StartNode("Mask - " + map.get(0x22BF818));
    if (sub_42D850(mask)) {
        v2399 = mplew.writeInt("v2399");
    }
    else {
        v2400 = mplew.writeShort("v2400");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2404 = Check_Buff(mask, 0x22BF860);//483
if (sub_42CEB0(v2404)) {
    mplew.StartNode("Mask - " + map.get(0x22BF860));
    if (sub_42D850(mask)) {
        v2405 = mplew.writeInt("v2405");
    }
    else {
        v2406 = mplew.writeShort("v2406");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2410 = Check_Buff(mask, 0x22BF8A8);//484
if (sub_42CEB0(v2410)) {
    mplew.StartNode("Mask - " + map.get(0x22BF8A8));
    if (sub_42D850(mask)) {
        v2411 = mplew.writeInt("v2411");
    }
    else {
        v2412 = mplew.writeShort("v2412");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2416 = Check_Buff(mask, 0x22BF8F0);//463
if (sub_42CEB0(v2416)) {
    mplew.StartNode("Mask - " + map.get(0x22BF8F0));
    if (sub_42D850(mask)) {
        v2417 = mplew.writeInt("v2417");
    }
    else {
        v2418 = mplew.writeShort("v2418");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2422 = Check_Buff(mask, 0x22B8900);//267
if (sub_42CEB0(v2422)) {
    mplew.StartNode("Mask - " + map.get(0x22B8900));
    if (sub_42D850(mask)) {
        v2423 = mplew.writeInt("v2423");
    }
    else {
        v2424 = mplew.writeShort("v2424");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2428 = Check_Buff(mask, 0x22BF938);//464
if (sub_42CEB0(v2428)) {
    mplew.StartNode("Mask - " + map.get(0x22BF938));
    if (sub_42D850(mask)) {
        v2429 = mplew.writeInt("v2429");
    }
    else {
        v2430 = mplew.writeShort("v2430");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2434 = Check_Buff(mask, 0x22BF980);//465
if (sub_42CEB0(v2434)) {
    mplew.StartNode("Mask - " + map.get(0x22BF980));
    if (sub_42D850(mask)) {
        v2435 = mplew.writeInt("v2435");
    }
    else {
        v2436 = mplew.writeShort("v2436");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2440 = Check_Buff(mask, 0x22B8948);//486
if (sub_42CEB0(v2440)) {
    mplew.StartNode("Mask - " + map.get(0x22B8948));
    if (sub_42D850(mask)) {
        v2441 = mplew.writeInt("v2441");
    }
    else {
        v2442 = mplew.writeShort("v2442");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2446 = Check_Buff(mask, 0x22B8990);//487
if (sub_42CEB0(v2446)) {
    mplew.StartNode("Mask - " + map.get(0x22B8990));
    if (sub_42D850(mask)) {
        v2447 = mplew.writeInt("v2447");
    }
    else {
        v2448 = mplew.writeShort("v2448");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2452 = Check_Buff(mask, 0x22BF9C8);//488
if (sub_42CEB0(v2452)) {
    mplew.StartNode("Mask - " + map.get(0x22BF9C8));
    if (sub_42D850(mask)) {
        v2453 = mplew.writeInt("v2453");
    }
    else {
        v2454 = mplew.writeShort("v2454");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2458 = Check_Buff(mask, 0x22BFA10);//489
if (sub_42CEB0(v2458)) {
    mplew.StartNode("Mask - " + map.get(0x22BFA10));
    if (sub_42D850(mask)) {
        v2459 = mplew.writeInt("v2459");
    }
    else {
        v2460 = mplew.writeShort("v2460");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2464 = Check_Buff(mask, 0x22BFA58);//466
if (sub_42CEB0(v2464)) {
    mplew.StartNode("Mask - " + map.get(0x22BFA58));
    if (sub_42D850(mask)) {
        v2465 = mplew.writeInt("v2465");
    }
    else {
        v2466 = mplew.writeShort("v2466");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2470 = Check_Buff(mask, 0x22BFAA0);//473
if (sub_42CEB0(v2470)) {
    mplew.StartNode("Mask - " + map.get(0x22BFAA0));
    if (sub_42D850(mask)) {
        v2471 = mplew.writeInt("v2471");
    }
    else {
        v2472 = mplew.writeShort("v2472");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2476 = Check_Buff(mask, 0x22BFAE8);//467
if (sub_42CEB0(v2476)) {
    mplew.StartNode("Mask - " + map.get(0x22BFAE8));
    if (sub_42D850(mask)) {
        v2477 = mplew.writeInt("v2477");
    }
    else {
        v2478 = mplew.writeShort("v2478");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2482 = Check_Buff(mask, 0x22BFB30);//469
if (sub_42CEB0(v2482)) {
    mplew.StartNode("Mask - " + map.get(0x22BFB30));
    if (sub_42D850(mask)) {
        v2483 = mplew.writeInt("v2483");
    }
    else {
        v2484 = mplew.writeShort("v2484");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2488 = Check_Buff(mask, 0x22BFB78);//470
if (sub_42CEB0(v2488)) {
    mplew.StartNode("Mask - " + map.get(0x22BFB78));
    if (sub_42D850(mask)) {
        v2489 = mplew.writeInt("v2489");
    }
    else {
        v2490 = mplew.writeShort("v2490");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2494 = Check_Buff(mask, 0x22BFBC0);//471
if (sub_42CEB0(v2494)) {
    mplew.StartNode("Mask - " + map.get(0x22BFBC0));
    if (sub_42D850(mask)) {
        v2495 = mplew.writeInt("v2495");
    }
    else {
        v2496 = mplew.writeShort("v2496");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2500 = Check_Buff(mask, 0x22BFC08);//472
if (sub_42CEB0(v2500)) {
    mplew.StartNode("Mask - " + map.get(0x22BFC08));
    if (sub_42D850(mask)) {
        v2501 = mplew.writeInt("v2501");
    }
    else {
        v2502 = mplew.writeShort("v2502");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2506 = Check_Buff(mask, 0x22BFC50);//474
if (sub_42CEB0(v2506)) {
    mplew.StartNode("Mask - " + map.get(0x22BFC50));
    if (sub_42D850(mask)) {
        v2507 = mplew.writeInt("v2507");
    }
    else {
        v2508 = mplew.writeShort("v2508");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2512 = Check_Buff(mask, 0x22BFC98);//475
if (sub_42CEB0(v2512)) {
    mplew.StartNode("Mask - " + map.get(0x22BFC98));
    if (sub_42D850(mask)) {
        v2513 = mplew.writeInt("v2513");
    }
    else {
        v2514 = mplew.writeShort("v2514");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2518 = Check_Buff(mask, 0x22BF110);//403
if (sub_42CEB0(v2518)) {
    mplew.StartNode("Mask - " + map.get(0x22BF110));
    if (sub_42D850(mask)) {
        v2519 = mplew.writeInt("v2519");
    }
    else {
        v2520 = mplew.writeShort("v2520");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2524 = Check_Buff(mask, 0x22BF158);//404
if (sub_42CEB0(v2524)) {
    mplew.StartNode("Mask - " + map.get(0x22BF158));
    if (sub_42D850(mask)) {
        v2525 = mplew.writeInt("v2525");
    }
    else {
        v2526 = mplew.writeShort("v2526");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2530 = Check_Buff(mask, 0x22BFCE0);//476
if (sub_42CEB0(v2530)) {
    mplew.StartNode("Mask - " + map.get(0x22BFCE0));
    if (sub_42D850(mask)) {
        v2531 = mplew.writeInt("v2531");
    }
    else {
        v2532 = mplew.writeShort("v2532");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2536 = Check_Buff(mask, 0x22BFD28);//477
if (sub_42CEB0(v2536)) {
    mplew.StartNode("Mask - " + map.get(0x22BFD28));
    if (sub_42D850(mask)) {
        v2537 = mplew.writeInt("v2537");
    }
    else {
        v2538 = mplew.writeShort("v2538");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2542 = Check_Buff(mask, 0x22BEFF0);//436
if (sub_42CEB0(v2542)) {
    mplew.StartNode("Mask - " + map.get(0x22BEFF0));
    if (sub_42D850(mask)) {
        v2543 = mplew.writeInt("v2543");
    }
    else {
        v2544 = mplew.writeShort("v2544");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2548 = Check_Buff(mask, 0x22BFD70);//468
if (sub_42CEB0(v2548)) {
    mplew.StartNode("Mask - " + map.get(0x22BFD70));
    if (sub_42D850(mask)) {
        v2549 = mplew.writeInt("v2549");
    }
    else {
        v2550 = mplew.writeShort("v2550");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2554 = Check_Buff(mask, 0x22BFDB8);//478
if (sub_42CEB0(v2554)) {
    mplew.StartNode("Mask - " + map.get(0x22BFDB8));
    if (sub_42D850(mask)) {
        v2555 = mplew.writeInt("v2555");
    }
    else {
        v2556 = mplew.writeShort("v2556");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2560 = Check_Buff(mask, 0x22BFE00);//493
if (sub_42CEB0(v2560)) {
    mplew.StartNode("Mask - " + map.get(0x22BFE00));
    if (sub_42D850(mask)) {
        v2561 = mplew.writeInt("v2561");
    }
    else {
        v2562 = mplew.writeShort("v2562");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2566 = Check_Buff(mask, 0x22BFE48);//494
if (sub_42CEB0(v2566)) {
    mplew.StartNode("Mask - " + map.get(0x22BFE48));
    if (sub_42D850(mask)) {
        v2567 = mplew.writeInt("v2567");
    }
    else {
        v2568 = mplew.writeShort("v2568");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2572 = Check_Buff(mask, 0x22BFE90);//495
if (sub_42CEB0(v2572)) {
    mplew.StartNode("Mask - " + map.get(0x22BFE90));
    if (sub_42D850(mask)) {
        v2573 = mplew.writeInt("v2573");
    }
    else {
        v2574 = mplew.writeShort("v2574");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2578 = Check_Buff(mask, 0x22BFED8);//496
if (sub_42CEB0(v2578)) {
    mplew.StartNode("Mask - " + map.get(0x22BFED8));
    if (sub_42D850(mask)) {
        v2579 = mplew.writeInt("v2579");
    }
    else {
        v2580 = mplew.writeShort("v2580");
    }
    v4970 = mplew.writeInt("v4970");
    v4971 = mplew.writeInt("v4971");
    mplew.EndNode(false);
}
v2584 = Check_Buff(mask, 0x22BCB18);//329
if (sub_42CEB0(v2584)) {
    mplew.StartNode("Mask - " + map.get(0x22BCB18));
    v2585 = mplew.writeInt("v2585");
    v2586 = mplew.writeInt("v2586");
    mplew.EndNode(false);
}
v2587 = Check_Buff(mask, 0x22BCB60);//330
if (sub_42CEB0(v2587)) {
    mplew.StartNode("Mask - " + map.get(0x22BCB60));
    //v2588 = v73974360();
    mplew.EndNode(false);
}
v2591 = Check_Buff(mask, 0x22BFA58);//466
if (sub_42CEB0(v2591)) {
    mplew.StartNode("Mask - " + map.get(0x22BFA58));
    v2592 = mplew.writeInt("v2592");
    mplew.EndNode(false);
}
v2593 = mplew.write("")
v2594 = mplew.write("")
v2595 = mplew.write("v2595")
v2596 = Check_Buff(mask, 0x22BAE68);//163
if (sub_42CEB0(v2596)) {
    mplew.StartNode("Mask - " + map.get(0x22BAE68));
    for (j = 0; j < 22; ++j) {
        mplew.writeInt("");
    }
    mplew.EndNode(false);
}
v2597 = Check_Buff(mask, 0x22BFF20);//234
if (sub_42CEB0(v2597)) {
    mplew.StartNode("Mask - " + map.get(0x22BFF20));
    v2598 = mplew.write("v2598");
    mplew.EndNode(false);
}
v2599 = Check_Buff(mask, 0x22BFF68);//412
if (sub_42CEB0(v2599)) {
    mplew.StartNode("Mask - " + map.get(0x22BFF68));
    v2600 = mplew.write("v2600");
    mplew.EndNode(false);
}
v2601 = Check_Buff(mask, 0x22BC1D0);//242
if (sub_42CEB0(v2601)) {
    mplew.StartNode("Mask - " + map.get(0x22BC1D0));
    v2602 = mplew.writeInt("v2602");
    mplew.EndNode(false);
}
v2603 = Check_Buff(mask, 0x22B9D40);//251
if (sub_42CEB0(v2603)) {
    mplew.StartNode("Mask - " + map.get(0x22B9D40));
    v2604 = mplew.write("v2604");
    mplew.EndNode(false);
}
v2605 = Check_Buff(mask, 0x22B9D88);//266
if (sub_42CEB0(v2605)) {
    mplew.StartNode("Mask - " + map.get(0x22B9D88));
    v2606 = mplew.write("v2606");
    mplew.EndNode(false);
}
v2607 = Check_Buff(mask, 0x22B9638);//332
if (sub_42CEB0(v2607)) {
    mplew.StartNode("Mask - " + map.get(0x22B9638));
    v2608 = mplew.write("v2608");
    v2609 = mplew.writeShort("v2609");
    v2610 = mplew.write("v2610");
    v2611 = mplew.write("v2611");
    mplew.EndNode(false);
}
v2612 = Check_Buff(mask, 0x22BC188);//254
if (sub_42CEB0(v2612)) {
    mplew.StartNode("Mask - " + map.get(0x22BC188));
    v2613 = mplew.writeInt("v2613");
    mplew.EndNode(false);
}
v2614 = Check_Buff(mask, 0x22BC068);//253
if (sub_42CEB0(v2614)) {
    mplew.StartNode("Mask - " + map.get(0x22BC068));
    v2615 = mplew.write("") != 0;
    mplew.EndNode(false);
}
v2616 = Check_Buff(mask, 0x22BC260);//250
if (sub_42CEB0(v2616)) {
    mplew.StartNode("Mask - " + map.get(0x22BC260));
    // while ( !sub_403C50 (/* Data + 9504 */) )
    //   sub_439590 (/* Data + 9504 */);
    for (k = 0; k < 2; ++k) {
        // sub_43F1D0( /* iPacket */  );
        mplew.writeInt(0);
        mplew.writeInt(0);
        //sub_43F1D0 end
        // if (sub_4095F0( /* &v4529 */ ) > 0) 
        // sub_453A70( /* &v4529 */ );
    }
    v2617 = mplew.writeInt("v2617");
    v2618 = mplew.writeInt("v2618");
    mplew.EndNode(false);
}
v2619 = Check_Buff(mask, 0x22BBF90);//237
if (sub_42CEB0(v2619)) {
    mplew.StartNode("Mask - " + map.get(0x22BBF90));
    v2620 = mplew.writeInt("v2620");
    mplew.EndNode(false);
}
v2621 = Check_Buff(mask, 0x22BC3C8);//261
if (sub_42CEB0(v2621)) {
    mplew.StartNode("Mask - " + map.get(0x22BC3C8));
    sub_EAD600( /* iPacket */
    );
    mplew.EndNode(false);
}
v2622 = Check_Buff(mask, 0x22BC2A8);//256
if (sub_42CEB0(v2622)) {
    mplew.StartNode("Mask - " + map.get(0x22BC2A8));
    v2623 = mplew.writeInt("v2623");
    mplew.EndNode(false);
}
v2624 = Check_Buff(mask, 0x22BC578);//269
if (sub_42CEB0(v2624)) {
    mplew.StartNode("Mask - " + map.get(0x22BC578));
    // sub_4441E0 (/* Data + 9636 */);
    v4528 = 1;
    while (v4528) {
        v4527 = mplew.writeInt("未知数据");
        if (v4527 <= 0) {
            v4528 = 0;
            break;
        }
        // v3213 = v4527;
        // sub_448640( /* &v3212, &v3213 */  );
    }
    mplew.EndNode(false);
}
v2625 = Check_Buff(mask, 0x22B98C0);//88
if (sub_42CEB0(v2625)) {
    mplew.StartNode("Mask - " + map.get(0x22B98C0));
    v2626 = mplew.write("") != 0;
    mplew.EndNode(false);
}
v2627 = Check_Buff(mask, 0x22BC8D8);//281
if (sub_42CEB0(v2627)) {
    mplew.StartNode("Mask - " + map.get(0x22BC8D8));
    v2628 = mplew.write("v2628");
    mplew.EndNode(false);
}
v2629 = Check_Buff(mask, 0x22BC890);//337
if (sub_42CEB0(v2629)) {
    mplew.StartNode("Mask - " + map.get(0x22BC890));
    v2630 = mplew.write("v2630");
    mplew.EndNode(false);
}
v2631 = Check_Buff(mask, 0x22BCE30);//297
if (sub_42CEB0(v2631)) {
    mplew.StartNode("Mask - " + map.get(0x22BCE30));
    v2632 = mplew.write("v2632");
    mplew.EndNode(false);
}
v2633 = Check_Buff(mask, 0x22BCE78);//298
if (sub_42CEB0(v2633)) {
    mplew.StartNode("Mask - " + map.get(0x22BCE78));
    v2634 = mplew.write("v2634");
    mplew.EndNode(false);
}
v2635 = Check_Buff(mask, 0x22BCDE8);//296
if (sub_42CEB0(v2635)) {
    mplew.StartNode("Mask - " + map.get(0x22BCDE8));
    v2636 = mplew.writeInt("v2636");
    v2637 = mplew.write("v2637");
    mplew.EndNode(false);
}
v2638 = Check_Buff(mask, 0x22BD418);//323
if (sub_42CEB0(v2638)) {
    mplew.StartNode("Mask - " + map.get(0x22BD418));
    v2639 = mplew.write("v2639");
    mplew.EndNode(false);
}
v2640 = Check_Buff(mask, 0x22BB018);//168
if (sub_42CEB0(v2640)) {
    mplew.StartNode("Mask - " + map.get(0x22BB018));
    v2641 = mplew.writeInt("v2641");
    v2642 = mplew.writeInt("v2642");
    mplew.EndNode(false);
}
v2643 = Check_Buff(mask, 0x22BD658);//334
if (sub_42CEB0(v2643)) {
    mplew.StartNode("Mask - " + map.get(0x22BD658));
    v2644 = mplew.writeInt("v2644");
    mplew.EndNode(false);
}
v2645 = Check_Buff(mask, 0x22BD6E8);//336
if (sub_42CEB0(v2645)) {
    mplew.StartNode("Mask - " + map.get(0x22BD6E8));
    v2646 = mplew.writeInt("v2646");
    mplew.EndNode(false);
}
v2647 = Check_Buff(mask, 0x22BD7C0);//342
if (sub_42CEB0(v2647)) {
    mplew.StartNode("Mask - " + map.get(0x22BD7C0));
    v2648 = mplew.writeInt("v2648");
    v2649 = mplew.writeInt("v2649");
    mplew.EndNode(false);
}
v2650 = Check_Buff(mask, 0x22B8A20);//344
if (sub_42CEB0(v2650)) {
    mplew.StartNode("Mask - " + map.get(0x22B8A20));
    v2651 = mplew.writeInt("v2651");
    mplew.EndNode(false);
}
v2652 = Check_Buff(mask, 0x22B8A68);//347
if (sub_42CEB0(v2652)) {
    mplew.StartNode("Mask - " + map.get(0x22B8A68));
    v2653 = mplew.writeInt("v2653");
    mplew.EndNode(false);
}
v2654 = Check_Buff(mask, 0x22BD8E0);//349
if (sub_42CEB0(v2654)) {
    mplew.StartNode("Mask - " + map.get(0x22BD8E0));
    v2655 = mplew.write("v2655");
    mplew.EndNode(false);
}
v2656 = Check_Buff(mask, 0x22BD928);//350
if (sub_42CEB0(v2656)) {
    mplew.StartNode("Mask - " + map.get(0x22BD928));
    v2657 = mplew.write("v2657");
    mplew.EndNode(false);
}
v2658 = Check_Buff(mask, 0x22BD898);//348
if (sub_42CEB0(v2658)) {
    mplew.StartNode("Mask - " + map.get(0x22BD898));
    v2659 = mplew.writeInt("v2659");
    mplew.EndNode(false);
}
v2660 = Check_Buff(mask, 0x22B9BD8);//93
if (sub_42CEB0(v2660)) {
    mplew.StartNode("Mask - " + map.get(0x22B9BD8));
    v2661 = mplew.writeInt("v2661");
    mplew.EndNode(false);
}
v2662 = Check_Buff(mask, 0x22B9E18);//98
if (sub_42CEB0(v2662)) {
    mplew.StartNode("Mask - " + map.get(0x22B9E18));
    v2663 = mplew.writeInt("v2663");
    mplew.EndNode(false);
}
v2664 = Check_Buff(mask, 0x22B8B88);//361
if (sub_42CEB0(v2664)) {
    mplew.StartNode("Mask - " + map.get(0x22B8B88));
    v2665 = mplew.writeInt("v2665");
    mplew.EndNode(false);
}
v2666 = Check_Buff(mask, 0x22BDC88);//362
if (sub_42CEB0(v2666)) {
    mplew.StartNode("Mask - " + map.get(0x22BDC88));
    v2667 = mplew.writeInt("v2667");
    mplew.EndNode(false);
}
v2668 = Check_Buff(mask, 0x22BFFB0);//381
if (sub_42CEB0(v2668)) {
    mplew.StartNode("Mask - " + map.get(0x22BFFB0));
    v2669 = mplew.writeInt("v2669");
    v2670 = mplew.writeInt("v2670");
    mplew.EndNode(false);
}
v2671 = Check_Buff(mask, 0x22BE348);//388
if (sub_42CEB0(v2671)) {
    mplew.StartNode("Mask - " + map.get(0x22BE348));
    v2672 = mplew.writeInt("v2672");
    mplew.EndNode(false);
}
v2673 = Check_Buff(mask, 0x22BE2B8);//386
if (sub_42CEB0(v2673)) {
    mplew.StartNode("Mask - " + map.get(0x22BE2B8));
    v2674 = mplew.writeInt("v2674");
    mplew.EndNode(false);
}
v2675 = Check_Buff(mask, 0x22BE390);//389
if (sub_42CEB0(v2675)) {
    mplew.StartNode("Mask - " + map.get(0x22BE390));
    v2676 = mplew.writeInt("v2676");
    v2677 = mplew.write("v2677");
    mplew.EndNode(false);
}
v2678 = Check_Buff(mask, 0x22BE6F0);//405
if (sub_42CEB0(v2678)) {
    mplew.StartNode("Mask - " + map.get(0x22BE6F0));
    v2679 = mplew.writeInt("v2679");
    mplew.EndNode(false);
}
v2680 = Check_Buff(mask, 0x22BE858);//410
if (sub_42CEB0(v2680)) {
    mplew.StartNode("Mask - " + map.get(0x22BE858));
    v2681 = mplew.writeInt("v2681");
    mplew.EndNode(false);
}
v2682 = Check_Buff(mask, 0x22BEB70);//420
if (sub_42CEB0(v2682)) {
    mplew.StartNode("Mask - " + map.get(0x22BEB70));
    v2683 = mplew.writeInt("v2683");
    v2684 = mplew.writeInt("v2684");
    mplew.EndNode(false);
}
v2685 = Check_Buff(mask, 0x22BEC00);//422
if (sub_42CEB0(v2685)) {
    mplew.StartNode("Mask - " + map.get(0x22BEC00));
    v2686 = mplew.writeInt("v2686");
    v2687 = mplew.write("v2687");
    v2688 = mplew.writeInt("v2688");
    v2689 = mplew.writeInt("v2689");
    mplew.EndNode(false);
}
v2690 = Check_Buff(mask, 0x22BF230);//442
if (sub_42CEB0(v2690)) {
    mplew.StartNode("Mask - " + map.get(0x22BF230));
    v2691 = mplew.write("v2691");
    mplew.EndNode(false);
}
v2692 = Check_Buff(mask, 0x22BF398);//447
if (sub_42CEB0(v2692)) {
    mplew.StartNode("Mask - " + map.get(0x22BF398));
    v2693 = mplew.write("v2693");
    v2694 = mplew.writeShort("v2694");
    mplew.EndNode(false);
}
v2695 = Check_Buff(mask, 0x22BF428);//449
if (sub_42CEB0(v2695)) {
    mplew.StartNode("Mask - " + map.get(0x22BF428));
    v2696 = mplew.writeShort("v2696");
    v2697 = mplew.write("v2697");
    mplew.EndNode(false);
}
v2698 = mplew.writeInt("v2698")
v2699 = Check_Buff(mask, 0x22BEE88);//431
if (sub_42CEB0(v2699)) {
    mplew.StartNode("Mask - " + map.get(0x22BEE88));
    v2700 = mplew.writeInt("v2700");
    mplew.EndNode(false);
}
v2701 = Check_Buff(mask, 0x22B9200);//67
if (sub_42CEB0(v2701)) {
    mplew.StartNode("Mask - " + map.get(0x22B9200));
    v2702 = mplew.writeInt("v2702");
    mplew.EndNode(false);
}
v2703 = Check_Buff(mask, 0x22BF5D8);//456
if (sub_42CEB0(v2703)) {
    mplew.StartNode("Mask - " + map.get(0x22BF5D8));
    v2704 = mplew.writeInt("v2704");
    mplew.EndNode(false);
}
v2705 = Check_Buff(mask, 0x22BD970);//351
if (sub_42CEB0(v2705)) {
    mplew.StartNode("Mask - " + map.get(0x22BD970));
    v2706 = mplew.writeInt("v2706");
    mplew.EndNode(false);
}
v2707 = Check_Buff(mask, 0x22B9710);//83
if (sub_42CEB0(v2707)) {
    mplew.StartNode("Mask - " + map.get(0x22B9710));
    v2708 = mplew.writeInt("v2708");
    mplew.EndNode(false);
}
for (l = 0; l < 9; ++l) {
    // v4525 = sub_403AC0 (/* &Data[8 * l + 17388] */);
    // v2709 = sub_419590 (/* &v3175, l */);
    // sub_419590(int a1, int a2)
    // {
    // add_buff(a1,68 * a2 + 0x22B8218, 0x220);
    // return a1;
    // }
    if (sub_B7C3F0(mask, (497 + l))) {
        mplew.StartNode("Mas+-- 未处理 " + (497 + l));
        // ((*v4393 + 24))(v4393, iPacket);
        switch ((497 + l)) {
            case 497 + 9:
                // mplew.writeShort("");
                // mplew.writeZeroBytes(7);
                mplew.writeInt("Skill Value");
                mplew.writeInt("SkillID");
                //  mplew.writeInt("currentTime");
                mplew.writeZeroBytes(5);
                //mplew.writeZeroBytes(9);// 00 00 00 00 00 00 00 00 00
                break;
            default:
                mplew.AddComment("--- 未处理 buff " + index.toString(10) + "---");
                break;
        }
        mplew.EndNode(false);
    }
}
sub_EAD0B0(mask);
//未处理 N 个INT
v2713 = Check_Buff(mask, 0x22B9200);//67
if (sub_42CEB0(v2713)) {
    mplew.StartNode("Mask - " + map.get(0x22B9200));
    mplew.EndNode(false);
}
v2715 = Check_Buff(mask, 0x22BFFF8);//454
if (sub_42CEB0(v2715)) {
    mplew.StartNode("Mask - " + map.get(0x22BFFF8));
    // v4522 = sub_4095B0 (/* Data */);
    v2716 = mplew.writeInt("v2716");
    v4971 = mplew.writeInt("v4971");
    //v3168 = v2728;
    mplew.EndNode(false);
}
v2718 = Check_Buff(mask, 0x22BA838);//311
if (sub_42CEB0(v2718)) {
    mplew.StartNode("Mask - " + map.get(0x22BA838));
    v2719 = mplew.writeInt("v2719");
    mplew.EndNode(false);
}
v2720 = Check_Buff(mask, 0x22C0040);//490
if (sub_42CEB0(v2720)) {
    mplew.StartNode("Mask - " + map.get(0x22C0040));
    mplew.AddComment("未处理buff ")
    v2721 = sub_439640( /* iPacket */);
    v2722 = sub_439640( /* iPacket */);
    mplew.EndNode(false);
}
v2723 = Check_Buff(mask, 0x22C0088);//491
if (sub_42CEB0(v2723)) {
    mplew.StartNode("Mask - " + map.get(0x22C0088));
    v2724 = mplew.write("v2724");
    mplew.AddComment("未处理buff ")
    v2725 = sub_439640( /* iPacket */);
    mplew.EndNode(false);
}
v2726 = Check_Buff(mask, 0x22C00D0);//492
if (sub_42CEB0(v2726)) {
    mplew.StartNode("Mask - " + map.get(0x22C00D0));
    mplew.AddComment("未处理buff ")
    v3161 = sub_439640( /* iPacket */);
    mplew.EndNode(false);
}
mplew.EndNode(false);
//SecondaryStat::DecodeForLocal
// }
// SecondaryStat::DecodeForLocal();
v206 = mplew.writeShort("v206");
v216 = mplew.write("ComboAbilityBuff");
v217 = mplew.write("bFirstSet");
v214 = mplew.write("IsTemporaryOnShow");
if (sub_E60680(mask)) {
    mplew.write("isMovementAffectingStat", 0)
}
mplew.writeInt("未知", 0);
function sub_42CAD0() {
    v1 = 0;
    v11 = 0;
    v2 = 0;
    v3 = 5;
    while (1) {
        v4 = mplew.write("v4");
        v2 |= (v4 & 0x7F) << v1;
        if (v4 >= 0) {
            break;
        }
        v1 += 7;
    }
}
function sub_439640()
{ 
     mplew.StartNode("sub_439640");
    v1 = 0;
    v2 = 0;
    v3 = 5;
    while ( 1 )
    {
        v4 = mplew.write(0);
        v2 |= (v4 & 0x7F) << v1;
        if ( v4 >= 0 )
        break;
        if ( --v3 <= 0 )
        {
            v7 = -2147467259;
            CxxThrowException(v7, 0x204B878);
        }
        v1 += 7;
    }
    mplew.EndNode(false);
    mplew.AddComment("sub_42D560 return:"+ ((v2 & 1) + (v2 >> 1)) * (1 - 2 * (v2 & 1)))
}
function sub_EAD0B0(mask) {
    // unsigned var v3; // esi@1
    // var v4; // edi@1
    // var i; // ebx@1
    // var result; // eax@2
    v3 = 0;
    // v4 = Data;
    for (i = 0; ; i += 40) {
        //   result = *(v4 + 17184);
        // if ( !result || v3 >= *(result - 4) )
        result = true;
        if (!result || v3 >= 50) {
            break;
        }
        // while (mplew.Remaining() > 12)//不知道怎么判断Stack buff
        if (maskbufftest(mask, v3)) {
            //  sub_E84E80((i + *(v4 + 17184)), iPacket, v4, v3);
            mplew.StartNode(" Stack buff  " + v3);
            sub_E84E80();
            mplew.EndNode(false);
        }
        // mplew.LogAppend("sub_EAD0B0 - "+v3);
        ++v3;
    }
    // return result;
}
function sub_E84E80() {
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
function sub_42CEB0(bool) {
    return bool;
}
function sub_42D850(mask) {
    //dword_22B820C = 1;
    if (
        Check_Buff(mask, 0x22B83F4) ||
        Check_Buff(mask, 0x22B82E4) ||
        Check_Buff(mask, 0x22B8708) ||
        Check_Buff(mask, 0x22B8750) ||
        Check_Buff(mask, 0x22B8798) ||
        Check_Buff(mask, 0x22B87E0) ||
        Check_Buff(mask, 0x22B8828) ||
        Check_Buff(mask, 0x22B8870) ||
        Check_Buff(mask, 0x22B88B8) ||
        Check_Buff(mask, 0x22B8900) ||
        Check_Buff(mask, 0x22B8948) ||
        Check_Buff(mask, 0x22B8990) ||
        Check_Buff(mask, 0x22B89D8) ||
        Check_Buff(mask, 0x22B8A20) ||
        Check_Buff(mask, 0x22B8A68) ||
        Check_Buff(mask, 0x22B8AB0) ||
        Check_Buff(mask, 0x22B8AF8) ||
        Check_Buff(mask, 0x22B8B40) ||
        Check_Buff(mask, 0x22B8B88) ||
        Check_Buff(mask, 0x22B8BD0) ||
        Check_Buff(mask, 0x22B81C8)) {
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
var dword_22D4C4C = 0;
function sub_E60680(mask)//BOOL __cdecl sub_E60680 (/* char a1 */)

{
    var value1 = false;
    if (!(dword_22D4C4C & 1)) {
        dword_22D4C4C = 1;
        value1 = (
            Check_Buff(mask, 0x22D4FF4) ||
            Check_Buff(mask, 0x22D5104) ||
            Check_Buff(mask, 0x22D4C58) ||
            Check_Buff(mask, 0x22D4CA8) ||
            Check_Buff(mask, 0x22D4CF8) ||
            Check_Buff(mask, 0x22D4D48) ||
            Check_Buff(mask, 0x22D4D98) ||
            Check_Buff(mask, 0x22D4DE8) ||
            Check_Buff(mask, 0x22D4E38) ||
            Check_Buff(mask, 0x22D4E88) ||
            Check_Buff(mask, 0x22D4ED8) ||
            Check_Buff(mask, 0x22D53C8) ||
            Check_Buff(mask, 0x22D5378) ||
            Check_Buff(mask, 0x22D5468) ||
            Check_Buff(mask, 0x22D54B8) ||
            Check_Buff(mask, 0x22D5508) ||
            Check_Buff(mask, 0x22D5558) ||
            Check_Buff(mask, 0x22D55A8) ||
            Check_Buff(mask, 0x22D55F8) ||
            Check_Buff(mask, 0x22D5648) ||
            Check_Buff(mask, 0x22D5418) ||
            Check_Buff(mask, 0x22D5698) ||
            Check_Buff(mask, 0x22D56E8) ||
            Check_Buff(mask, 0x22D5738) ||
            Check_Buff(mask, 0x22D5788) ||
            Check_Buff(mask, 0x22D57D8) ||
            Check_Buff(mask, 0x22D5828) ||
            Check_Buff(mask, 0x22D5878) ||
            Check_Buff(mask, 0x22D58C8) ||
            Check_Buff(mask, 0x22D5918) ||
            Check_Buff(mask, 0x22D5968) ||
            Check_Buff(mask, 0x22D59B8) ||
            Check_Buff(mask, 0x22D5A08) ||
            Check_Buff(mask, 0x22D5A58) ||
            Check_Buff(mask, 0x22D5198) ||
            Check_Buff(mask, 0x22D5AA8) ||
            Check_Buff(mask, 0x22D5AF8) ||
            Check_Buff(mask, 0x22D5B48) ||
            Check_Buff(mask, 0x22D5B98) ||
            Check_Buff(mask, 0x22D5BE8))
    }
    return value1;
}
function sub_403900(data) {
    v1 = 16;
    while (!data[v1]) {
        if (--v1 < 0) {
            return 1;
        }
    }
    return 0;
}
function GetMapleBuff(buffstat) {
    return GetNulllBuff(null)[Math.floor(buffstat / 32)] = buffstat = 1 << (31 - (buffstat % 32))
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
        v7[v4] = buff_1[v4] & Buff2[v4] // --v5;
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
        v7[v4] = buff_1[v4] | Buff2[v4] // --v5;
    }
    while (v4 >= 0);
    outBuff = sub_40DE90(outBuff, v7, 0x220);
    return outBuff;
}
function sub_40DE90(outBuff, makebuff, int_0x220u) {
    if (outBuff == null) {
        outBuff = [];
    }
    v3 = makebuff;
    outBuff2 = outBuff;
    if (int_0x220u >> 5) {
        // 0x220 >> 5==17
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
}
function maskbufftest(buff, mask) {
    var result = 0;
    // eax@2
    if (mask < 0x220) {
        result = (buff[mask >> 5] >> (31 - (mask & 0x1F))) & 1;
    }
    // var result = 0;
    return result;
}
function sub_403B20(buff, a2, boolMakBuff) {
    result = buff;
    v4 = 1 << (31 - (a2 & 0x1F));
    v5 = a2 >> 5;
    result[v5] |= v4;
    v6 = buff[a2 >> 5];
    if (!boolMakBuff) {
        result[v5] = v4 ^ v6;
    }
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
function sub_1A9506A() {
    //   var v0; // eax@1
    //   unsigned var v1; // ecx@1
    //   v0 = sub_1AA2B16 ();
    //   v1 = 214013 * *(v0 + 20) + 2531011;
    //    v1;
    // return (v1 >> 16) & 0x7FFF;//未处理,不能读取数据
    return 2;
    //单True/双False
}