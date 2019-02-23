function HashMap() {
  var size = 0;
  var entry = new Object();
  this.put = function (key, value) {
    if (!this.containsKey(key)) {
      size++;
    }
    entry[key] = value;
  };
  this.get = function (key) {
    if (this.containsKey(key)) {
      return entry[key]
    } else {
      throw "找不到对应的Mask " + key.toString(16);
    }
  };
  this.remove = function (key) {
    if (delete entry[key]) {
      size--;
    }
  };
  this.containsKey = function (key) {
    return (key in entry);
  };
  this.containsValue = function (value) {
    for (var prop in entry) {
      if (entry[prop] == value) {
        return true;
      }
    }
    return false;
  };
  this.values = function () {
    var values = new Array(size);
    for (var prop in entry) {
      values.push(entry[prop]);
    }
    return values;
  };
  this.keys = function () {
    var keys = new Array(size);
    for (var prop in entry) {
      keys.push(prop)
    }
    return keys;
  };
  this.size = function () {
    return size;
  }
}

var map = new HashMap(); map.put(0x28baa38, 175);
map.put(0x28baa80, 176);
map.put(0x28baac8, 177);
map.put(0x28bab10, 178);
map.put(0x28bab58, 54);
map.put(0x28baba0, 55);
map.put(0x28babe8, 56);
map.put(0x28bac30, 57);
map.put(0x28bac78, 58);
map.put(0x28bacc0, 306);
map.put(0x28bad08, 59);
map.put(0x28bad50, 60);
map.put(0x28bad98, 61);
map.put(0x28bade0, 140);
map.put(0x28bae28, 141);
map.put(0x28bae70, 142);
map.put(0x28baeb8, 143);
map.put(0x28baf00, 144);
map.put(0x28baf48, 62);
map.put(0x28baf90, 63);
map.put(0x28bafd8, 64);
map.put(0x28bb020, 65);
map.put(0x28bb068, 145);
map.put(0x28bb0b0, 66);
map.put(0x28bb0f8, 67);
map.put(0x28bb140, 68);
map.put(0x28bb188, 69);
map.put(0x28bb1d0, 70);
map.put(0x28bb218, 190);
map.put(0x28bb260, 71);
map.put(0x28bb2a8, 72);
map.put(0x28bb2f0, 73);
map.put(0x28bb338, 74);
map.put(0x28bb380, 75);
map.put(0x28bb3c8, 328);
map.put(0x28bb410, 76);
map.put(0x28bb458, 77);
map.put(0x28ba528, 78);
map.put(0x28bb4a0, 79);
map.put(0x28bb4e8, 80);
map.put(0x28bb530, 81);
map.put(0x28bb578, 82);
map.put(0x28bb5c0, 185);
map.put(0x28bb608, 83);
map.put(0x28bb650, 84);
map.put(0x28bb698, 169);
map.put(0x28bb6e0, 174);
map.put(0x28bb728, 172);
map.put(0x28bb770, 170);
map.put(0x28bb7b8, 171);
map.put(0x28bb800, 85);
map.put(0x28bb848, 101);
map.put(0x28bb890, 86);
map.put(0x28bb8d8, 87);
map.put(0x28bb920, 88);
map.put(0x28bb968, 89);
map.put(0x28bb9b0, 90);
map.put(0x28bb9f8, 91);
map.put(0x28bba40, 238);
map.put(0x28ba8d0, 239);
map.put(0x28bba88, 240);
map.put(0x28bbad0, 241);
map.put(0x28bbb18, 92);
map.put(0x28bbb60, 246);
map.put(0x28bbba8, 261);
map.put(0x28bbbf0, 93);
map.put(0x28bbc38, 94);
map.put(0x28bbc80, 95);
map.put(0x28bbcc8, 96);
map.put(0x28bbd10, 97);
map.put(0x28bbd58, 98);
map.put(0x28bbda0, 99);
map.put(0x28bbde8, 102);
map.put(0x28bbe30, 111);
map.put(0x28bbe78, 103);
map.put(0x28bbec0, 100);
map.put(0x28bbf08, 104);
map.put(0x28bbf50, 105);
map.put(0x28bbf98, 106);
map.put(0x28bbfe0, 107);
map.put(0x28bc028, 108);
map.put(0x28bc070, 109);
map.put(0x28bc0b8, 110);
map.put(0x28bc100, 112);
map.put(0x28bc148, 113);
map.put(0x28bc190, 114);
map.put(0x28bc1d8, 115);
map.put(0x28bc220, 116);
map.put(0x28bc268, 117);
map.put(0x28bc2b0, 118);
map.put(0x28bc2f8, 119);
map.put(0x28bc340, 252);
map.put(0x28bc388, 120);
map.put(0x28bc3d0, 121);
map.put(0x28bc418, 122);
map.put(0x28bc460, 123);
map.put(0x28bc4a8, 124);
map.put(0x28bc4f0, 125);
map.put(0x28bc538, 127);
map.put(0x28bc580, 128);
map.put(0x28bc5c8, 129);
map.put(0x28bc610, 130);
map.put(0x28bc658, 307);
map.put(0x28ba690, 339);
map.put(0x28bc6a0, 131);
map.put(0x28bc6e8, 186);
map.put(0x28bc730, 167);
map.put(0x28bc778, 133);
map.put(0x28bc7c0, 135);
map.put(0x28bc808, 136);
map.put(0x28bc850, 137);
map.put(0x28bc898, 138);
map.put(0x28ba6d8, 139);
map.put(0x28bc8e0, 147);
map.put(0x28bc928, 309);
map.put(0x28bc970, 148);
map.put(0x28bc9b8, 149);
map.put(0x28bca00, 150);
map.put(0x28bca48, 151);
map.put(0x28bca90, 152);
map.put(0x28bcad8, 153);
map.put(0x28bcb20, 154);
map.put(0x28bcb68, 155);
map.put(0x28bcbb0, 156);
map.put(0x28bcbf8, 134);
map.put(0x28bcc40, 157);
map.put(0x28bcc88, 158);
map.put(0x28bccd0, 159);
map.put(0x28bcd18, 243);
map.put(0x28bcd60, 160);
map.put(0x28bcda8, 161);
map.put(0x28bcdf0, 162);
map.put(0x28bce38, 163);
map.put(0x28bce80, 164);
map.put(0x28bcec8, 179);
map.put(0x28bcf10, 165);
map.put(0x28bcf58, 166);
map.put(0x28bcfa0, 168);
map.put(0x28bcfe8, 173);
map.put(0x28bd030, 180);
map.put(0x28bd078, 192);
map.put(0x28bd0c0, 193);
map.put(0x28bd108, 181);
map.put(0x28bd150, 187);
map.put(0x28bd198, 182);
map.put(0x28bd1e0, 183);
map.put(0x28bd228, 184);
map.put(0x28bd270, 189);
map.put(0x28bd2b8, 194);
map.put(0x28bd300, 191);
map.put(0x28bd348, 188);
map.put(0x28bd390, 195);
map.put(0x28bd3d8, 197);
map.put(0x28bd420, 198);
map.put(0x28bd468, 204);
map.put(0x28bd4b0, 199);
map.put(0x28bd4f8, 200);
map.put(0x28bd540, 202);
map.put(0x28bd588, 205);
map.put(0x28ba3c0, 203);
map.put(0x28bd5d0, 206);
map.put(0x28bd618, 207);
map.put(0x28bd660, 208);
map.put(0x28bd6a8, 209);
map.put(0x28bd6f0, 211);
map.put(0x28bd738, 212);
map.put(0x28bd780, 213);
map.put(0x28bd7c8, 214);
map.put(0x28bd810, 215);
map.put(0x28bd858, 216);
map.put(0x28bd8a0, 217);
map.put(0x28bd8e8, 218);
map.put(0x28bd930, 237);
map.put(0x28bd978, 219);
map.put(0x28bd9c0, 220);
map.put(0x28ba9a8, 242);
map.put(0x28bda08, 255);
map.put(0x28bda50, 221);
map.put(0x28bda98, 222);
map.put(0x28ba378, 223);
map.put(0x28bdae0, 224);
map.put(0x28bdb28, 225);
map.put(0x28bdb70, 226);
map.put(0x28bdbb8, 228);
map.put(0x28bdc00, 229);
map.put(0x28bdc48, 244);
map.put(0x28bdc90, 310);
map.put(0x28bdcd8, 230);
map.put(0x28bdd20, 232);
map.put(0x28bdd68, 231);
map.put(0x28bddb0, 248);
map.put(0x28bddf8, 233);
map.put(0x28bde40, 234);
map.put(0x28bde88, 247);
map.put(0x28bded0, 249);
map.put(0x28bdf18, 235);
map.put(0x28ba408, 236);
map.put(0x28bdf60, 250);
map.put(0x28bdfa8, 245);
map.put(0x28bdff0, 251);
map.put(0x28be038, 253);
map.put(0x28be080, 254);
map.put(0x28be0c8, 196);
map.put(0x28be110, 256);
map.put(0x28ba450, 257);
map.put(0x28be158, 258);
map.put(0x28ba498, 259);
map.put(0x28be1a0, 260);
map.put(0x28be1e8, 269);
map.put(0x28be230, 126);
map.put(0x28be278, 263);
map.put(0x28be2c0, 264);
map.put(0x28be308, 265);
map.put(0x28be350, 266);
map.put(0x28be398, 267);
map.put(0x28be3e0, 268);
map.put(0x28be428, 270);
map.put(0x28be470, 271);
map.put(0x28be4b8, 272);
map.put(0x28be500, 273);
map.put(0x28be548, 274);
map.put(0x28be590, 275);
map.put(0x28be5d8, 333);
map.put(0x28be620, 276);
map.put(0x28be668, 277);
map.put(0x28be6b0, 278);
map.put(0x28be6f8, 279);
map.put(0x28be740, 280);
map.put(0x28be788, 281);
map.put(0x28be7d0, 282);
map.put(0x28be818, 283);
map.put(0x28be860, 325);
map.put(0x28be8a8, 326);
map.put(0x28be8f0, 327);
map.put(0x28be938, 284);
map.put(0x28be980, 285);
map.put(0x28be9c8, 286);
map.put(0x28ba960, 287);
map.put(0x28bea10, 288);
map.put(0x28bea58, 289);
map.put(0x28beaa0, 290);
map.put(0x28ba4e0, 291);
map.put(0x28beae8, 295);
map.put(0x28beb30, 292);
map.put(0x28beb78, 293);
map.put(0x28bebc0, 294);
map.put(0x28bec08, 296);
map.put(0x28bec50, 297);
map.put(0x28bec98, 298);
map.put(0x28bece0, 299);
map.put(0x28bed28, 201);
map.put(0x28bed70, 300);
map.put(0x28bedb8, 301);
map.put(0x28bee00, 302);
map.put(0x28bee48, 303);
map.put(0x28bee90, 304);
map.put(0x28ba5b8, 305);
map.put(0x28beed8, 308);
map.put(0x28bef20, 311);
map.put(0x28bef68, 312);
map.put(0x28befb0, 313);
map.put(0x28beff8, 314);
map.put(0x28bf040, 315);
map.put(0x28bf088, 316);
map.put(0x28bf0d0, 317);
map.put(0x28bf118, 318);
map.put(0x28bf160, 319);
map.put(0x28bf1a8, 320);
map.put(0x28bf1f0, 321);
map.put(0x28bf238, 322);
map.put(0x28bf280, 329);
map.put(0x28bf2c8, 337);
map.put(0x28bf310, 331);
map.put(0x28bf358, 323);
map.put(0x28bf3a0, 330);
map.put(0x28bf3e8, 334);
map.put(0x28bf430, 332);
map.put(0x28bf478, 335);
map.put(0x28bf4c0, 336);
map.put(0x28bf508, 338);
map.put(0x28ba600, 340);
map.put(0x28bf550, 341);
map.put(0x28bf598, 342);
map.put(0x28ba648, 343);
map.put(0x28bf5e0, 344);
map.put(0x28bf628, 345);
map.put(0x28bf670, 346);
map.put(0x28bf6b8, 347);
map.put(0x28bf700, 348);
map.put(0x28bf748, 349);
map.put(0x28bf790, 350);
map.put(0x28bf7d8, 351);
map.put(0x28bf820, 352);
map.put(0x28bf868, 353);
map.put(0x28bf8b0, 355);
map.put(0x28bf8f8, 354);
map.put(0x28bf940, 146);
map.put(0x28bf988, 356);
map.put(0x28ba768, 357);
map.put(0x28ba7b0, 358);
map.put(0x28bf9d0, 359);
map.put(0x28bfa18, 360);
map.put(0x28ba720, 361);
map.put(0x28bfa60, 362);
map.put(0x28bfaa8, 363);
map.put(0x28bfaf0, 364);
map.put(0x28bfb38, 365);
map.put(0x28bfb80, 366);
map.put(0x28bfbc8, 367);
map.put(0x28bfc10, 368);
map.put(0x28bfc58, 369);
map.put(0x28bfca0, 370);
map.put(0x28bfce8, 371);
map.put(0x28bfd30, 372);
map.put(0x28bfd78, 373);
map.put(0x28bfdc0, 374);
map.put(0x28bfe08, 375);
map.put(0x28bfe50, 376);
map.put(0x28bfe98, 377);
map.put(0x28bfee0, 379);
map.put(0x28bff28, 380);
map.put(0x28bff70, 381);
map.put(0x28bffb8, 382);
map.put(0x28c0000, 383);
map.put(0x28c0048, 384);
map.put(0x28c0090, 385);
map.put(0x28c00d8, 386);
map.put(0x28c0120, 387);
map.put(0x28c0168, 388);
map.put(0x28c01b0, 389);
map.put(0x28c01f8, 390);
map.put(0x28c0240, 391);
map.put(0x28c0288, 394);
map.put(0x28c02d0, 395);
map.put(0x28c0318, 396);
map.put(0x28c0360, 397);
map.put(0x28c03a8, 398);
map.put(0x28c03f0, 399);
map.put(0x28c0438, 403);
map.put(0x28c0480, 404);
map.put(0x28c04c8, 405);
map.put(0x28c0510, 406);
map.put(0x28c0558, 407);
map.put(0x28c05a0, 408);
map.put(0x28c05e8, 409);
map.put(0x28c0630, 410);
map.put(0x28c0678, 414);
map.put(0x28c06c0, 392);
map.put(0x28c0708, 393);
map.put(0x28c0750, 411);
map.put(0x28c0798, 413);
map.put(0x28c07e0, 476);
map.put(0x28c0828, 415);
map.put(0x28c0870, 416);
map.put(0x28c08b8, 417);
map.put(0x28c0900, 418);
map.put(0x28c0948, 419);
map.put(0x28c0990, 420);
map.put(0x28c09d8, 421);
map.put(0x28c0a20, 422);
map.put(0x28c0a68, 423);
map.put(0x28c0ab0, 424);
map.put(0x28c0af8, 425);
map.put(0x28c0b40, 426);
map.put(0x28c0b88, 427);
map.put(0x28c0bd0, 428);
map.put(0x28c0c18, 429);
map.put(0x28c0c60, 430);
map.put(0x28c0ca8, 431);
map.put(0x28c0cf0, 432);
map.put(0x28c0d38, 433);
map.put(0x28c0d80, 434);
map.put(0x28c0dc8, 435);
map.put(0x28c0e10, 436);
map.put(0x28c0e58, 437);
map.put(0x28c0ea0, 438);
map.put(0x28c0ee8, 439);
map.put(0x28c0f30, 400);
map.put(0x28c0f78, 401);
map.put(0x28c0fc0, 440);
map.put(0x28c1008, 441);
map.put(0x28c1050, 442);
map.put(0x28ba570, 443);
map.put(0x28c1098, 444);
map.put(0x28c10e0, 445);
map.put(0x28c1128, 446);
map.put(0x28c1170, 447);
map.put(0x28c11b8, 448);
map.put(0x28c1200, 449);
map.put(0x28c1248, 450);
map.put(0x28c1290, 451);
map.put(0x28c12d8, 452);
map.put(0x28c1320, 453);
map.put(0x28c1368, 455);
map.put(0x28c13b0, 456);
map.put(0x28c13f8, 457);
map.put(0x28c1440, 458);
map.put(0x28c1488, 459);
map.put(0x28c14d0, 460);
map.put(0x28c1518, 461);
map.put(0x28c1560, 462);
map.put(0x28c15a8, 463);
map.put(0x28c15f0, 464);
map.put(0x28c1638, 465);
map.put(0x28c1680, 466);
map.put(0x28c16c8, 467);
map.put(0x28c1710, 468);
map.put(0x28c1758, 469);
map.put(0x28c17a0, 470);
map.put(0x28ba918, 402);
map.put(0x28c17e8, 471);
map.put(0x28c1830, 472);
map.put(0x28c1878, 473);
map.put(0x28c18c0, 474);
map.put(0x28c1908, 475);
map.put(0x28c1950, 477);
map.put(0x28c1998, 478);
map.put(0x28c19e0, 479);
map.put(0x28c1a28, 480);
map.put(0x28c1a70, 481);
map.put(0x28c1ab8, 499);
map.put(0x28c1b00, 501);
map.put(0x28c1b48, 502);
map.put(0x28c1b90, 503);
map.put(0x28c1bd8, 482);
map.put(0x28ba7f8, 262);
map.put(0x28c1c20, 483);
map.put(0x28c1c68, 484);
map.put(0x28ba840, 505);
map.put(0x28ba888, 506);
map.put(0x28c1cb0, 507);
map.put(0x28c1cf8, 508);
map.put(0x28c1d40, 485);
map.put(0x28c1d88, 492);
map.put(0x28c1dd0, 486);
map.put(0x28c1e18, 488);
map.put(0x28c1e60, 489);
map.put(0x28c1ea8, 490);
map.put(0x28c1ef0, 491);
map.put(0x28c1f38, 493);
map.put(0x28c1f80, 494);
map.put(0x28c0f30, 400);
map.put(0x28c0f78, 401);
map.put(0x28c1fc8, 495);
map.put(0x28c2010, 496);
map.put(0x28c0e10, 436);
map.put(0x28c2058, 487);
map.put(0x28c20a0, 497);
map.put(0x28c20e8, 512);
map.put(0x28c2130, 513);
map.put(0x28c2178, 514);
map.put(0x28c21c0, 515);
map.put(0x28c2208, 516);
map.put(0x28c2250, 517);
map.put(0x28be860, 325);
map.put(0x28be8a8, 326);
map.put(0x28c1d40, 485);
map.put(0x28bcc88, 158);
map.put(0x28c2298, 227);
map.put(0x28c22e0, 412);
map.put(0x28bdf18, 235);
map.put(0x28bbb60, 246);
map.put(0x28bbba8, 261);
map.put(0x28bb3c8, 328);
map.put(0x28bded0, 249);
map.put(0x28bddb0, 248);
map.put(0x28bdfa8, 245);
map.put(0x28bdcd8, 230);
map.put(0x28be110, 256);
map.put(0x28bdff0, 251);
map.put(0x28be2c0, 264);
map.put(0x28bb650, 84);
map.put(0x28be620, 276);
map.put(0x28be5d8, 333);
map.put(0x28beb78, 293);
map.put(0x28bebc0, 294);
map.put(0x28beb30, 292);
map.put(0x28bf160, 319);
map.put(0x28bce38, 163);
map.put(0x28bf3a0, 330);
map.put(0x28bf430, 332);
map.put(0x28bf508, 338);
map.put(0x28ba600, 340);
map.put(0x28ba648, 343);
map.put(0x28bf628, 345);
map.put(0x28bf670, 346);
map.put(0x28bf5e0, 344);
map.put(0x28bb968, 89);
map.put(0x28bbc38, 94);
map.put(0x28ba768, 357);
map.put(0x28ba7b0, 358);
map.put(0x28bf9d0, 359);
map.put(0x28c2328, 378);
map.put(0x28c0090, 385);
map.put(0x28c0000, 383);
map.put(0x28c00d8, 386);
map.put(0x28c04c8, 405);
map.put(0x28c0630, 410);
map.put(0x28c0990, 420);
map.put(0x28c0a20, 422);
map.put(0x28c1050, 442);
map.put(0x28c1170, 447);
map.put(0x28c1200, 449);
map.put(0x28c0ca8, 431);
map.put(0x28baf90, 63);
map.put(0x28c13b0, 456);
map.put(0x28bbad0, 241);
map.put(0x28bf6b8, 347);
map.put(0x28bb4a0, 79);
map.put(0x28ba918, 402);
map.put(0x28c0438, 403);
map.put(0x28c0480, 404);
map.put(0x28c1878, 473);
map.put(0x28ba9a8, 242);
map.put(0x28baf90, 63);
map.put(0x28c2370, 454);
map.put(0x28bc658, 307);
map.put(0x28c23b8, 509);
map.put(0x28c2400, 510);
map.put(0x28c2448, 511);
map.put(0x28c2250, 517);
map.put(0x28f23f8, 71);
map.put(0x28f2440, 251);
map.put(0x28f2488, 227);
map.put(0x28f29c0, 102);
map.put(0x28f2810, 523);
map.put(0x28f2a08, 66);
map.put(0x28f2a50, 195);
map.put(0x28f2a98, 325);
map.put(0x28f2440, 251);
map.put(0x28f2128, 85);

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
// v5264 = mplew.writeBuffer("v5264", 0x44);
v4 = Check_Buff(mask, 0x28BAA38);//175
if (sub_42F5E0(v4)) {
  mplew.StartNode("Mask - " + map.get(0x28BAA38));//
  if (sub_42FF80(/* &v5264 */)) {
    v5 = mplew.writeInt("v5");
  }
  else {
    v6 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v10 = Check_Buff(mask, 0x28BAA80);//176
if (sub_42F5E0(v10)) {
  mplew.StartNode("Mask - " + map.get(0x28BAA80));//
  if (sub_42FF80(/* &v5264 */)) {
    v11 = mplew.writeInt("v11");
  }
  else {
    v12 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v16 = Check_Buff(mask, 0x28BAAC8);//177
if (sub_42F5E0(v16)) {
  mplew.StartNode("Mask - " + map.get(0x28BAAC8));//
  if (sub_42FF80(/* &v5264 */)) {
    v17 = mplew.writeInt("v17");
  }
  else {
    v18 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v22 = Check_Buff(mask, 0x28BAB10);//178
if (sub_42F5E0(v22)) {
  mplew.StartNode("Mask - " + map.get(0x28BAB10));//
  if (sub_42FF80(/* &v5264 */)) {
    v23 = mplew.writeInt("v23");
  }
  else {
    v24 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v28 = Check_Buff(mask, 0x28BAB58);//54
if (sub_42F5E0(v28)) {
  mplew.StartNode("Mask - " + map.get(0x28BAB58));//
  if (sub_42FF80(/* &v5264 */)) {
    v29 = mplew.writeInt("v29");
  }
  else {
    v30 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v34 = Check_Buff(mask, 0x28BABA0);//55
if (sub_42F5E0(v34)) {
  mplew.StartNode("Mask - " + map.get(0x28BABA0));//
  if (sub_42FF80(/* &v5264 */)) {
    v35 = mplew.writeInt("v35");
  }
  else {
    v36 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v40 = Check_Buff(mask, 0x28BABE8);//56
if (sub_42F5E0(v40)) {
  mplew.StartNode("Mask - " + map.get(0x28BABE8));//
  if (sub_42FF80(/* &v5264 */)) {
    v41 = mplew.writeInt("v41");
  }
  else {
    v42 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v46 = Check_Buff(mask, 0x28BAC30);//57
if (sub_42F5E0(v46)) {
  mplew.StartNode("Mask - " + map.get(0x28BAC30));//
  if (sub_42FF80(/* &v5264 */)) {
    v47 = mplew.writeInt("v47");
  }
  else {
    v48 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v52 = Check_Buff(mask, 0x28BAC78);//58
if (sub_42F5E0(v52)) {
  mplew.StartNode("Mask - " + map.get(0x28BAC78));//
  if (sub_42FF80(/* &v5264 */)) {
    v53 = mplew.writeInt("v53");
  }
  else {
    v54 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v58 = Check_Buff(mask, 0x28BACC0);//306
if (sub_42F5E0(v58)) {
  mplew.StartNode("Mask - " + map.get(0x28BACC0));//
  if (sub_42FF80(/* &v5264 */)) {
    v59 = mplew.writeInt("v59");
  }
  else {
    v60 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v64 = Check_Buff(mask, 0x28BAD08);//59
if (sub_42F5E0(v64)) {
  mplew.StartNode("Mask - " + map.get(0x28BAD08));//
  if (sub_42FF80(/* &v5264 */)) {
    v65 = mplew.writeInt("v65");
  }
  else {
    v66 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v70 = Check_Buff(mask, 0x28BAD50);//60
if (sub_42F5E0(v70)) {
  mplew.StartNode("Mask - " + map.get(0x28BAD50));//
  if (sub_42FF80(/* &v5264 */)) {
    v71 = mplew.writeInt("v71");
  }
  else {
    v72 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v76 = Check_Buff(mask, 0x28BAD98);//61
if (sub_42F5E0(v76)) {
  mplew.StartNode("Mask - " + map.get(0x28BAD98));//
  if (sub_42FF80(/* &v5264 */)) {
    v77 = mplew.writeInt("v77");
  }
  else {
    v78 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v82 = Check_Buff(mask, 0x28BADE0);//140
if (sub_42F5E0(v82)) {
  mplew.StartNode("Mask - " + map.get(0x28BADE0));//
  if (sub_42FF80(/* &v5264 */)) {
    v83 = mplew.writeInt("v83");
  }
  else {
    v84 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v88 = Check_Buff(mask, 0x28BAE28);//141
if (sub_42F5E0(v88)) {
  mplew.StartNode("Mask - " + map.get(0x28BAE28));//
  if (sub_42FF80(/* &v5264 */)) {
    v89 = mplew.writeInt("v89");
  }
  else {
    v90 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v94 = Check_Buff(mask, 0x28BAE70);//142
if (sub_42F5E0(v94)) {
  mplew.StartNode("Mask - " + map.get(0x28BAE70));//
  if (sub_42FF80(/* &v5264 */)) {
    v95 = mplew.writeInt("v95");
  }
  else {
    v96 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v100 = Check_Buff(mask, 0x28BAEB8);//143
if (sub_42F5E0(v100)) {
  mplew.StartNode("Mask - " + map.get(0x28BAEB8));//
  if (sub_42FF80(/* &v5264 */)) {
    v101 = mplew.writeInt("v101");
  }
  else {
    v102 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v106 = Check_Buff(mask, 0x28BAF00);//144
if (sub_42F5E0(v106)) {
  mplew.StartNode("Mask - " + map.get(0x28BAF00));//
  if (sub_42FF80(/* &v5264 */)) {
    v107 = mplew.writeInt("v107");
  }
  else {
    v108 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v112 = Check_Buff(mask, 0x28BAF48);//62
if (sub_42F5E0(v112)) {
  mplew.StartNode("Mask - " + map.get(0x28BAF48));//
  if (sub_42FF80(/* &v5264 */)) {
    v113 = mplew.writeInt("v113");
  }
  else {
    v114 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v118 = Check_Buff(mask, 0x28BAF90);//63
if (sub_42F5E0(v118)) {
  mplew.StartNode("Mask - " + map.get(0x28BAF90));//
  if (sub_42FF80(/* &v5264 */)) {
    v119 = mplew.writeInt("v119");
  }
  else {
    v120 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v124 = Check_Buff(mask, 0x28BAFD8);//64
if (sub_42F5E0(v124)) {
  mplew.StartNode("Mask - " + map.get(0x28BAFD8));//
  if (sub_42FF80(/* &v5264 */)) {
    v125 = mplew.writeInt("v125");
  }
  else {
    v126 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v130 = Check_Buff(mask, 0x28BB020);//65
if (sub_42F5E0(v130)) {
  mplew.StartNode("Mask - " + map.get(0x28BB020));//
  if (sub_42FF80(/* &v5264 */)) {
    v131 = mplew.writeInt("v131");
  }
  else {
    v132 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v136 = Check_Buff(mask, 0x28BB068);//145
if (sub_42F5E0(v136)) {
  mplew.StartNode("Mask - " + map.get(0x28BB068));//
  if (sub_42FF80(/* &v5264 */)) {
    v137 = mplew.writeInt("v137");
  }
  else {
    v138 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v142 = Check_Buff(mask, 0x28BB0B0);//66
if (sub_42F5E0(v142)) {
  mplew.StartNode("Mask - " + map.get(0x28BB0B0));//
  if (sub_42FF80(/* &v5264 */)) {
    v143 = mplew.writeInt("v143");
  }
  else {
    v144 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v148 = Check_Buff(mask, 0x28BB0F8);//67
if (sub_42F5E0(v148)) {
  mplew.StartNode("Mask - " + map.get(0x28BB0F8));//
  if (sub_42FF80(/* &v5264 */)) {
    v149 = mplew.writeInt("v149");
  }
  else {
    v150 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v154 = Check_Buff(mask, 0x28BB140);//68
if (sub_42F5E0(v154)) {
  mplew.StartNode("Mask - " + map.get(0x28BB140));//
  if (sub_42FF80(/* &v5264 */)) {
    v155 = mplew.writeInt("v155");
  }
  else {
    v156 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v160 = Check_Buff(mask, 0x28BB188);//69
if (sub_42F5E0(v160)) {
  mplew.StartNode("Mask - " + map.get(0x28BB188));//
  if (sub_42FF80(/* &v5264 */)) {
    v161 = mplew.writeInt("v161");
  }
  else {
    v162 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v166 = Check_Buff(mask, 0x28BB1D0);//70
if (sub_42F5E0(v166)) {
  mplew.StartNode("Mask - " + map.get(0x28BB1D0));//
  if (sub_42FF80(/* &v5264 */)) {
    v167 = mplew.writeInt("v167");
  }
  else {
    v168 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v172 = Check_Buff(mask, 0x28BB218);//190
if (sub_42F5E0(v172)) {
  mplew.StartNode("Mask - " + map.get(0x28BB218));//
  if (sub_42FF80(/* &v5264 */)) {
    v173 = mplew.writeInt("v173");
  }
  else {
    v174 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v178 = Check_Buff(mask, 0x28BB260);//71
if (sub_42F5E0(v178)) {
  mplew.StartNode("Mask - " + map.get(0x28BB260));//
  if (sub_42FF80(/* &v5264 */)) {
    v179 = mplew.writeInt("v179");
  }
  else {
    v180 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v184 = Check_Buff(mask, 0x28BB2A8);//72
if (sub_42F5E0(v184)) {
  mplew.StartNode("Mask - " + map.get(0x28BB2A8));//
  if (sub_42FF80(/* &v5264 */)) {
    v185 = mplew.writeInt("v185");
  }
  else {
    v186 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v190 = Check_Buff(mask, 0x28BB2F0);//73
if (sub_42F5E0(v190)) {
  mplew.StartNode("Mask - " + map.get(0x28BB2F0));//
  if (sub_42FF80(/* &v5264 */)) {
    v191 = mplew.writeInt("v191");
  }
  else {
    v192 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v196 = Check_Buff(mask, 0x28BB338);//74
if (sub_42F5E0(v196)) {
  mplew.StartNode("Mask - " + map.get(0x28BB338));//
  if (sub_42FF80(/* &v5264 */)) {
    v197 = mplew.writeInt("v197");
  }
  else {
    v198 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v202 = Check_Buff(mask, 0x28BB380);//75
if (sub_42F5E0(v202)) {
  mplew.StartNode("Mask - " + map.get(0x28BB380));//
  if (sub_42FF80(/* &v5264 */)) {
    v203 = mplew.writeInt("v203");
  }
  else {
    v204 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v208 = Check_Buff(mask, 0x28BB3C8);//328
if (sub_42F5E0(v208)) {
  mplew.StartNode("Mask - " + map.get(0x28BB3C8));//
  if (sub_42FF80(/* &v5264 */)) {
    v209 = mplew.writeInt("v209");
  }
  else {
    v210 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v214 = Check_Buff(mask, 0x28BB410);//76
if (sub_42F5E0(v214)) {
  mplew.StartNode("Mask - " + map.get(0x28BB410));//
  if (sub_42FF80(/* &v5264 */)) {
    v215 = mplew.writeInt("v215");
  }
  else {
    v216 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v220 = Check_Buff(mask, 0x28BB458);//77
if (sub_42F5E0(v220)) {
  mplew.StartNode("Mask - " + map.get(0x28BB458));//
  if (sub_42FF80(/* &v5264 */)) {
    v221 = mplew.writeInt("v221");
  }
  else {
    v222 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v226 = Check_Buff(mask, 0x28BA528);//78
if (sub_42F5E0(v226)) {
  mplew.StartNode("Mask - " + map.get(0x28BA528));//
  if (sub_42FF80(/* &v5264 */)) {
    v227 = mplew.writeInt("v227");
  }
  else {
    v228 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v232 = Check_Buff(mask, 0x28BB4A0);//79
if (sub_42F5E0(v232)) {
  mplew.StartNode("Mask - " + map.get(0x28BB4A0));//
  if (sub_42FF80(/* &v5264 */)) {
    v233 = mplew.writeInt("v233");
  }
  else {
    v234 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v238 = Check_Buff(mask, 0x28BB4E8);//80
if (sub_42F5E0(v238)) {
  mplew.StartNode("Mask - " + map.get(0x28BB4E8));//
  if (sub_42FF80(/* &v5264 */)) {
    v239 = mplew.writeInt("v239");
  }
  else {
    v240 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v244 = Check_Buff(mask, 0x28BB530);//81
if (sub_42F5E0(v244)) {
  mplew.StartNode("Mask - " + map.get(0x28BB530));//
  if (sub_42FF80(/* &v5264 */)) {
    v245 = mplew.writeInt("v245");
  }
  else {
    v246 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v250 = Check_Buff(mask, 0x28BB578);//82
if (sub_42F5E0(v250)) {
  mplew.StartNode("Mask - " + map.get(0x28BB578));//
  if (sub_42FF80(/* &v5264 */)) {
    v251 = mplew.writeInt("v251");
  }
  else {
    v252 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v256 = Check_Buff(mask, 0x28BB5C0);//185
if (sub_42F5E0(v256)) {
  mplew.StartNode("Mask - " + map.get(0x28BB5C0));//
  if (sub_42FF80(/* &v5264 */)) {
    v257 = mplew.writeInt("v257");
  }
  else {
    v258 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v262 = Check_Buff(mask, 0x28BB608);//83
if (sub_42F5E0(v262)) {
  mplew.StartNode("Mask - " + map.get(0x28BB608));//
  if (sub_42FF80(/* &v5264 */)) {
    v263 = mplew.writeInt("v263");
  }
  else {
    v264 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v268 = Check_Buff(mask, 0x28BB650);//84
if (sub_42F5E0(v268)) {
  mplew.StartNode("Mask - " + map.get(0x28BB650));//
  if (sub_42FF80(/* &v5264 */)) {
    v269 = mplew.writeInt("v269");
  }
  else {
    v270 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v274 = Check_Buff(mask, 0x28BB698);//169
if (sub_42F5E0(v274)) {
  mplew.StartNode("Mask - " + map.get(0x28BB698));//
  if (sub_42FF80(/* &v5264 */)) {
    v275 = mplew.writeInt("v275");
  }
  else {
    v276 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v280 = Check_Buff(mask, 0x28BB6E0);//174
if (sub_42F5E0(v280)) {
  mplew.StartNode("Mask - " + map.get(0x28BB6E0));//
  if (sub_42FF80(/* &v5264 */)) {
    v281 = mplew.writeInt("v281");
  }
  else {
    v282 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v286 = Check_Buff(mask, 0x28BB728);//172
if (sub_42F5E0(v286)) {
  mplew.StartNode("Mask - " + map.get(0x28BB728));//
  if (sub_42FF80(/* &v5264 */)) {
    v287 = mplew.writeInt("v287");
  }
  else {
    v288 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v292 = Check_Buff(mask, 0x28BB770);//170
if (sub_42F5E0(v292)) {
  mplew.StartNode("Mask - " + map.get(0x28BB770));//
  if (sub_42FF80(/* &v5264 */)) {
    v293 = mplew.writeInt("v293");
  }
  else {
    v294 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v298 = Check_Buff(mask, 0x28BB7B8);//171
if (sub_42F5E0(v298)) {
  mplew.StartNode("Mask - " + map.get(0x28BB7B8));//
  if (sub_42FF80(/* &v5264 */)) {
    v299 = mplew.writeInt("v299");
  }
  else {
    v300 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v304 = Check_Buff(mask, 0x28BB800);//85
if (sub_42F5E0(v304)) {
  mplew.StartNode("Mask - " + map.get(0x28BB800));//
  if (sub_42FF80(/* &v5264 */)) {
    v305 = mplew.writeInt("v305");
  }
  else {
    v306 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v310 = Check_Buff(mask, 0x28BB848);//101
if (sub_42F5E0(v310)) {
  mplew.StartNode("Mask - " + map.get(0x28BB848));//
  if (sub_42FF80(/* &v5264 */)) {
    v311 = mplew.writeInt("v311");
  }
  else {
    v312 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v316 = Check_Buff(mask, 0x28BB890);//86
if (sub_42F5E0(v316)) {
  mplew.StartNode("Mask - " + map.get(0x28BB890));//
  if (sub_42FF80(/* &v5264 */)) {
    v317 = mplew.writeInt("v317");
  }
  else {
    v318 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v322 = Check_Buff(mask, 0x28BB8D8);//87
if (sub_42F5E0(v322)) {
  mplew.StartNode("Mask - " + map.get(0x28BB8D8));//
  if (sub_42FF80(/* &v5264 */)) {
    v323 = mplew.writeInt("v323");
  }
  else {
    v324 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v328 = Check_Buff(mask, 0x28BB920);//88
if (sub_42F5E0(v328)) {
  mplew.StartNode("Mask - " + map.get(0x28BB920));//
  if (sub_42FF80(/* &v5264 */)) {
    v329 = mplew.writeInt("v329");
  }
  else {
    v330 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v334 = Check_Buff(mask, 0x28BB968);//89
if (sub_42F5E0(v334)) {
  mplew.StartNode("Mask - " + map.get(0x28BB968));//
  if (sub_42FF80(/* &v5264 */)) {
    v335 = mplew.writeInt("v335");
  }
  else {
    v336 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v340 = Check_Buff(mask, 0x28BB9B0);//90
if (sub_42F5E0(v340)) {
  mplew.StartNode("Mask - " + map.get(0x28BB9B0));//
  if (sub_42FF80(/* &v5264 */)) {
    v341 = mplew.writeInt("v341");
  }
  else {
    v342 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v346 = Check_Buff(mask, 0x28BB9F8);//91
if (sub_42F5E0(v346)) {
  mplew.StartNode("Mask - " + map.get(0x28BB9F8));//
  if (sub_42FF80(/* &v5264 */)) {
    v347 = mplew.writeInt("v347");
  }
  else {
    v348 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v352 = Check_Buff(mask, 0x28BBA40);//238
if (sub_42F5E0(v352)) {
  mplew.StartNode("Mask - " + map.get(0x28BBA40));//
  if (sub_42FF80(/* &v5264 */)) {
    v353 = mplew.writeInt("v353");
  }
  else {
    v354 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v358 = Check_Buff(mask, 0x28BA8D0);//239
if (sub_42F5E0(v358)) {
  mplew.StartNode("Mask - " + map.get(0x28BA8D0));//
  if (sub_42FF80(/* &v5264 */)) {
    v359 = mplew.writeInt("v359");
  }
  else {
    v360 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v364 = Check_Buff(mask, 0x28BBA88);//240
if (sub_42F5E0(v364)) {
  mplew.StartNode("Mask - " + map.get(0x28BBA88));//
  if (sub_42FF80(/* &v5264 */)) {
    v365 = mplew.writeInt("v365");
  }
  else {
    v366 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v370 = Check_Buff(mask, 0x28BBAD0);//241
if (sub_42F5E0(v370)) {
  mplew.StartNode("Mask - " + map.get(0x28BBAD0));//
  if (sub_42FF80(/* &v5264 */)) {
    v371 = mplew.writeInt("v371");
  }
  else {
    v372 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v376 = Check_Buff(mask, 0x28BBB18);//92
if (sub_42F5E0(v376)) {
  mplew.StartNode("Mask - " + map.get(0x28BBB18));//
  if (sub_42FF80(/* &v5264 */)) {
    v377 = mplew.writeInt("v377");
  }
  else {
    v378 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v382 = Check_Buff(mask, 0x28BBB60);//246
if (sub_42F5E0(v382)) {
  mplew.StartNode("Mask - " + map.get(0x28BBB60));//
  if (sub_42FF80(/* &v5264 */)) {
    v383 = mplew.writeInt("v383");
  }
  else {
    v384 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v388 = Check_Buff(mask, 0x28BBBA8);//261
if (sub_42F5E0(v388)) {
  mplew.StartNode("Mask - " + map.get(0x28BBBA8));//
  if (sub_42FF80(/* &v5264 */)) {
    v389 = mplew.writeInt("v389");
  }
  else {
    v390 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v394 = Check_Buff(mask, 0x28BBBF0);//93
if (sub_42F5E0(v394)) {
  mplew.StartNode("Mask - " + map.get(0x28BBBF0));//
  if (sub_42FF80(/* &v5264 */)) {
    v395 = mplew.writeInt("v395");
  }
  else {
    v396 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v400 = Check_Buff(mask, 0x28BBC38);//94
if (sub_42F5E0(v400)) {
  mplew.StartNode("Mask - " + map.get(0x28BBC38));//
  if (sub_42FF80(/* &v5264 */)) {
    v401 = mplew.writeInt("v401");
  }
  else {
    v402 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v406 = Check_Buff(mask, 0x28BBC80);//95
if (sub_42F5E0(v406)) {
  mplew.StartNode("Mask - " + map.get(0x28BBC80));//
  if (sub_42FF80(/* &v5264 */)) {
    v407 = mplew.writeInt("v407");
  }
  else {
    v408 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v412 = Check_Buff(mask, 0x28BBCC8);//96
if (sub_42F5E0(v412)) {
  mplew.StartNode("Mask - " + map.get(0x28BBCC8));//
  if (sub_42FF80(/* &v5264 */)) {
    v413 = mplew.writeInt("v413");
  }
  else {
    v414 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v418 = Check_Buff(mask, 0x28BBD10);//97
if (sub_42F5E0(v418)) {
  mplew.StartNode("Mask - " + map.get(0x28BBD10));//
  if (sub_42FF80(/* &v5264 */)) {
    v419 = mplew.writeInt("v419");
  }
  else {
    v420 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v424 = Check_Buff(mask, 0x28BBD58);//98
if (sub_42F5E0(v424)) {
  mplew.StartNode("Mask - " + map.get(0x28BBD58));//
  if (sub_42FF80(/* &v5264 */)) {
    v425 = mplew.writeInt("v425");
  }
  else {
    v426 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v430 = Check_Buff(mask, 0x28BBDA0);//99
if (sub_42F5E0(v430)) {
  mplew.StartNode("Mask - " + map.get(0x28BBDA0));//
  if (sub_42FF80(/* &v5264 */)) {
    v431 = mplew.writeInt("v431");
  }
  else {
    v432 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v436 = Check_Buff(mask, 0x28BBDE8);//102
if (sub_42F5E0(v436)) {
  mplew.StartNode("Mask - " + map.get(0x28BBDE8));//
  if (sub_42FF80(/* &v5264 */)) {
    v437 = mplew.writeInt("v437");
  }
  else {
    v438 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v442 = Check_Buff(mask, 0x28BBE30);//111
if (sub_42F5E0(v442)) {
  mplew.StartNode("Mask - " + map.get(0x28BBE30));//
  if (sub_42FF80(/* &v5264 */)) {
    v443 = mplew.writeInt("v443");
  }
  else {
    v444 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v448 = Check_Buff(mask, 0x28BBE78);//103
if (sub_42F5E0(v448)) {
  mplew.StartNode("Mask - " + map.get(0x28BBE78));//
  if (sub_42FF80(/* &v5264 */)) {
    v449 = mplew.writeInt("v449");
  }
  else {
    v450 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v454 = Check_Buff(mask, 0x28BBEC0);//100
if (sub_42F5E0(v454)) {
  mplew.StartNode("Mask - " + map.get(0x28BBEC0));//
  if (sub_42FF80(/* &v5264 */)) {
    v455 = mplew.writeInt("v455");
  }
  else {
    v456 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v460 = Check_Buff(mask, 0x28BBF08);//104
if (sub_42F5E0(v460)) {
  mplew.StartNode("Mask - " + map.get(0x28BBF08));//
  if (sub_42FF80(/* &v5264 */)) {
    v461 = mplew.writeInt("v461");
  }
  else {
    v462 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v466 = Check_Buff(mask, 0x28BBF50);//105
if (sub_42F5E0(v466)) {
  mplew.StartNode("Mask - " + map.get(0x28BBF50));//
  if (sub_42FF80(/* &v5264 */)) {
    v467 = mplew.writeInt("v467");
  }
  else {
    v468 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v472 = Check_Buff(mask, 0x28BBF98);//106
if (sub_42F5E0(v472)) {
  mplew.StartNode("Mask - " + map.get(0x28BBF98));//
  if (sub_42FF80(/* &v5264 */)) {
    v473 = mplew.writeInt("v473");
  }
  else {
    v474 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v478 = Check_Buff(mask, 0x28BBFE0);//107
if (sub_42F5E0(v478)) {
  mplew.StartNode("Mask - " + map.get(0x28BBFE0));//
  if (sub_42FF80(/* &v5264 */)) {
    v479 = mplew.writeInt("v479");
  }
  else {
    v480 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v484 = Check_Buff(mask, 0x28BC028);//108
if (sub_42F5E0(v484)) {
  mplew.StartNode("Mask - " + map.get(0x28BC028));//
  if (sub_42FF80(/* &v5264 */)) {
    v485 = mplew.writeInt("v485");
  }
  else {
    v486 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v490 = Check_Buff(mask, 0x28BC070);//109
if (sub_42F5E0(v490)) {
  mplew.StartNode("Mask - " + map.get(0x28BC070));//
  if (sub_42FF80(/* &v5264 */)) {
    v491 = mplew.writeInt("v491");
  }
  else {
    v492 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v496 = Check_Buff(mask, 0x28BC0B8);//110
if (sub_42F5E0(v496)) {
  mplew.StartNode("Mask - " + map.get(0x28BC0B8));//
  if (sub_42FF80(/* &v5264 */)) {
    v497 = mplew.writeInt("v497");
  }
  else {
    v498 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v502 = Check_Buff(mask, 0x28BC100);//112
if (sub_42F5E0(v502)) {
  mplew.StartNode("Mask - " + map.get(0x28BC100));//
  if (sub_42FF80(/* &v5264 */)) {
    v503 = mplew.writeInt("v503");
  }
  else {
    v504 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v508 = Check_Buff(mask, 0x28BC148);//113
if (sub_42F5E0(v508)) {
  mplew.StartNode("Mask - " + map.get(0x28BC148));//
  if (sub_42FF80(/* &v5264 */)) {
    v509 = mplew.writeInt("v509");
  }
  else {
    v510 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v514 = Check_Buff(mask, 0x28BC190);//114
if (sub_42F5E0(v514)) {
  mplew.StartNode("Mask - " + map.get(0x28BC190));//
  if (sub_42FF80(/* &v5264 */)) {
    v515 = mplew.writeInt("v515");
  }
  else {
    v516 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v520 = Check_Buff(mask, 0x28BC1D8);//115
if (sub_42F5E0(v520)) {
  mplew.StartNode("Mask - " + map.get(0x28BC1D8));//
  if (sub_42FF80(/* &v5264 */)) {
    v521 = mplew.writeInt("v521");
  }
  else {
    v522 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v526 = Check_Buff(mask, 0x28BC220);//116
if (sub_42F5E0(v526)) {
  mplew.StartNode("Mask - " + map.get(0x28BC220));//
  if (sub_42FF80(/* &v5264 */)) {
    v527 = mplew.writeInt("v527");
  }
  else {
    v528 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v532 = Check_Buff(mask, 0x28BC268);//117
if (sub_42F5E0(v532)) {
  mplew.StartNode("Mask - " + map.get(0x28BC268));//
  if (sub_42FF80(/* &v5264 */)) {
    v533 = mplew.writeInt("v533");
  }
  else {
    v534 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v538 = Check_Buff(mask, 0x28BC2B0);//118
if (sub_42F5E0(v538)) {
  mplew.StartNode("Mask - " + map.get(0x28BC2B0));//
  if (sub_42FF80(/* &v5264 */)) {
    v539 = mplew.writeInt("v539");
  }
  else {
    v540 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v544 = Check_Buff(mask, 0x28BC2F8);//119
if (sub_42F5E0(v544)) {
  mplew.StartNode("Mask - " + map.get(0x28BC2F8));//
  if (sub_42FF80(/* &v5264 */)) {
    v545 = mplew.writeInt("v545");
  }
  else {
    v546 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v550 = Check_Buff(mask, 0x28BC340);//252
if (sub_42F5E0(v550)) {
  mplew.StartNode("Mask - " + map.get(0x28BC340));//
  if (sub_42FF80(/* &v5264 */)) {
    v551 = mplew.writeInt("v551");
  }
  else {
    v552 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v556 = Check_Buff(mask, 0x28BC388);//120
if (sub_42F5E0(v556)) {
  mplew.StartNode("Mask - " + map.get(0x28BC388));//
  if (sub_42FF80(/* &v5264 */)) {
    v557 = mplew.writeInt("v557");
  }
  else {
    v558 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v562 = Check_Buff(mask, 0x28BC3D0);//121
if (sub_42F5E0(v562)) {
  mplew.StartNode("Mask - " + map.get(0x28BC3D0));//
  if (sub_42FF80(/* &v5264 */)) {
    v563 = mplew.writeInt("v563");
  }
  else {
    v564 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v568 = Check_Buff(mask, 0x28BC418);//122
if (sub_42F5E0(v568)) {
  mplew.StartNode("Mask - " + map.get(0x28BC418));//
  if (sub_42FF80(/* &v5264 */)) {
    v569 = mplew.writeInt("v569");
  }
  else {
    v570 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v574 = Check_Buff(mask, 0x28BC460);//123
if (sub_42F5E0(v574)) {
  mplew.StartNode("Mask - " + map.get(0x28BC460));//
  if (sub_42FF80(/* &v5264 */)) {
    v575 = mplew.writeInt("v575");
  }
  else {
    v576 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v580 = Check_Buff(mask, 0x28BC4A8);//124
if (sub_42F5E0(v580)) {
  mplew.StartNode("Mask - " + map.get(0x28BC4A8));//
  if (sub_42FF80(/* &v5264 */)) {
    v581 = mplew.writeInt("v581");
  }
  else {
    v582 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v586 = Check_Buff(mask, 0x28BC4F0);//125
if (sub_42F5E0(v586)) {
  mplew.StartNode("Mask - " + map.get(0x28BC4F0));//
  if (sub_42FF80(/* &v5264 */)) {
    v587 = mplew.writeInt("v587");
  }
  else {
    v588 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v592 = Check_Buff(mask, 0x28BC538);//127
if (sub_42F5E0(v592)) {
  mplew.StartNode("Mask - " + map.get(0x28BC538));//
  if (sub_42FF80(/* &v5264 */)) {
    v593 = mplew.writeInt("v593");
  }
  else {
    v594 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v598 = Check_Buff(mask, 0x28BC580);//128
if (sub_42F5E0(v598)) {
  mplew.StartNode("Mask - " + map.get(0x28BC580));//
  if (sub_42FF80(/* &v5264 */)) {
    v599 = mplew.writeInt("v599");
  }
  else {
    v600 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v604 = Check_Buff(mask, 0x28BC5C8);//129
if (sub_42F5E0(v604)) {
  mplew.StartNode("Mask - " + map.get(0x28BC5C8));//
  if (sub_42FF80(/* &v5264 */)) {
    v605 = mplew.writeInt("v605");
  }
  else {
    v606 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v610 = Check_Buff(mask, 0x28BC610);//130
if (sub_42F5E0(v610)) {
  mplew.StartNode("Mask - " + map.get(0x28BC610));//
  if (sub_42FF80(/* &v5264 */)) {
    v611 = mplew.writeInt("v611");
  }
  else {
    v612 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v616 = Check_Buff(mask, 0x28BC658);//307
if (sub_42F5E0(v616)) {
  mplew.StartNode("Mask - " + map.get(0x28BC658));//
  if (sub_42FF80(/* &v5264 */)) {
    v617 = mplew.writeInt("v617");
  }
  else {
    v618 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v622 = Check_Buff(mask, 0x28BA690);//339
if (sub_42F5E0(v622)) {
  mplew.StartNode("Mask - " + map.get(0x28BA690));//
  if (sub_42FF80(/* &v5264 */)) {
    v623 = mplew.writeInt("v623");
  }
  else {
    v624 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v628 = Check_Buff(mask, 0x28BC6A0);//131
if (sub_42F5E0(v628)) {
  mplew.StartNode("Mask - " + map.get(0x28BC6A0));//
  if (sub_42FF80(/* &v5264 */)) {
    v629 = mplew.writeInt("v629");
  }
  else {
    v630 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v634 = Check_Buff(mask, 0x28BC6E8);//186
if (sub_42F5E0(v634)) {
  mplew.StartNode("Mask - " + map.get(0x28BC6E8));//
  if (sub_42FF80(/* &v5264 */)) {
    v635 = mplew.writeInt("v635");
  }
  else {
    v636 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v640 = Check_Buff(mask, 0x28BC730);//167
if (sub_42F5E0(v640)) {
  mplew.StartNode("Mask - " + map.get(0x28BC730));//
  if (sub_42FF80(/* &v5264 */)) {
    v641 = mplew.writeInt("v641");
  }
  else {
    v642 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v646 = Check_Buff(mask, 0x28BC778);//133
if (sub_42F5E0(v646)) {
  mplew.StartNode("Mask - " + map.get(0x28BC778));//
  if (sub_42FF80(/* &v5264 */)) {
    v647 = mplew.writeInt("v647");
  }
  else {
    v648 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v652 = Check_Buff(mask, 0x28BC7C0);//135
if (sub_42F5E0(v652)) {
  mplew.StartNode("Mask - " + map.get(0x28BC7C0));//
  if (sub_42FF80(/* &v5264 */)) {
    v653 = mplew.writeInt("v653");
  }
  else {
    v654 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v658 = Check_Buff(mask, 0x28BC808);//136
if (sub_42F5E0(v658)) {
  mplew.StartNode("Mask - " + map.get(0x28BC808));//
  if (sub_42FF80(/* &v5264 */)) {
    v659 = mplew.writeInt("v659");
  }
  else {
    v660 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v664 = Check_Buff(mask, 0x28BC850);//137
if (sub_42F5E0(v664)) {
  mplew.StartNode("Mask - " + map.get(0x28BC850));//
  if (sub_42FF80(/* &v5264 */)) {
    v665 = mplew.writeInt("v665");
  }
  else {
    v666 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v670 = Check_Buff(mask, 0x28BC898);//138
if (sub_42F5E0(v670)) {
  mplew.StartNode("Mask - " + map.get(0x28BC898));//
  if (sub_42FF80(/* &v5264 */)) {
    v671 = mplew.writeInt("v671");
  }
  else {
    v672 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v676 = Check_Buff(mask, 0x28BA6D8);//139
if (sub_42F5E0(v676)) {
  mplew.StartNode("Mask - " + map.get(0x28BA6D8));//
  if (sub_42FF80(/* &v5264 */)) {
    v677 = mplew.writeInt("v677");
  }
  else {
    v678 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v682 = Check_Buff(mask, 0x28BC8E0);//147
if (sub_42F5E0(v682)) {
  mplew.StartNode("Mask - " + map.get(0x28BC8E0));//
  if (sub_42FF80(/* &v5264 */)) {
    v683 = mplew.writeInt("v683");
  }
  else {
    v684 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v688 = Check_Buff(mask, 0x28BC928);//309
if (sub_42F5E0(v688)) {
  mplew.StartNode("Mask - " + map.get(0x28BC928));//
  if (sub_42FF80(/* &v5264 */)) {
    v689 = mplew.writeInt("v689");
  }
  else {
    v690 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v694 = Check_Buff(mask, 0x28BC970);//148
if (sub_42F5E0(v694)) {
  mplew.StartNode("Mask - " + map.get(0x28BC970));//
  if (sub_42FF80(/* &v5264 */)) {
    v695 = mplew.writeInt("v695");
  }
  else {
    v696 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v700 = Check_Buff(mask, 0x28BC9B8);//149
if (sub_42F5E0(v700)) {
  mplew.StartNode("Mask - " + map.get(0x28BC9B8));//
  if (sub_42FF80(/* &v5264 */)) {
    v701 = mplew.writeInt("v701");
  }
  else {
    v702 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v706 = Check_Buff(mask, 0x28BCA00);//150
if (sub_42F5E0(v706)) {
  mplew.StartNode("Mask - " + map.get(0x28BCA00));//
  if (sub_42FF80(/* &v5264 */)) {
    v707 = mplew.writeInt("v707");
  }
  else {
    v708 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v712 = Check_Buff(mask, 0x28BCA48);//151
if (sub_42F5E0(v712)) {
  mplew.StartNode("Mask - " + map.get(0x28BCA48));//
  if (sub_42FF80(/* &v5264 */)) {
    v713 = mplew.writeInt("v713");
  }
  else {
    v714 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v718 = Check_Buff(mask, 0x28BCA90);//152
if (sub_42F5E0(v718)) {
  mplew.StartNode("Mask - " + map.get(0x28BCA90));//
  if (sub_42FF80(/* &v5264 */)) {
    v719 = mplew.writeInt("v719");
  }
  else {
    v720 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v724 = Check_Buff(mask, 0x28BCAD8);//153
if (sub_42F5E0(v724)) {
  mplew.StartNode("Mask - " + map.get(0x28BCAD8));//
  if (sub_42FF80(/* &v5264 */)) {
    v725 = mplew.writeInt("v725");
  }
  else {
    v726 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v730 = Check_Buff(mask, 0x28BCB20);//154
if (sub_42F5E0(v730)) {
  mplew.StartNode("Mask - " + map.get(0x28BCB20));//
  if (sub_42FF80(/* &v5264 */)) {
    v731 = mplew.writeInt("v731");
  }
  else {
    v732 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v736 = Check_Buff(mask, 0x28BCB68);//155
if (sub_42F5E0(v736)) {
  mplew.StartNode("Mask - " + map.get(0x28BCB68));//
  if (sub_42FF80(/* &v5264 */)) {
    v737 = mplew.writeInt("v737");
  }
  else {
    v738 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v742 = Check_Buff(mask, 0x28BCBB0);//156
if (sub_42F5E0(v742)) {
  mplew.StartNode("Mask - " + map.get(0x28BCBB0));//
  if (sub_42FF80(/* &v5264 */)) {
    v743 = mplew.writeInt("v743");
  }
  else {
    v744 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v748 = Check_Buff(mask, 0x28BCBF8);//134
if (sub_42F5E0(v748)) {
  mplew.StartNode("Mask - " + map.get(0x28BCBF8));//
  if (sub_42FF80(/* &v5264 */)) {
    v749 = mplew.writeInt("v749");
  }
  else {
    v750 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v754 = Check_Buff(mask, 0x28BCC40);//157
if (sub_42F5E0(v754)) {
  mplew.StartNode("Mask - " + map.get(0x28BCC40));//
  if (sub_42FF80(/* &v5264 */)) {
    v755 = mplew.writeInt("v755");
  }
  else {
    v756 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v760 = Check_Buff(mask, 0x28BCC88);//158
if (sub_42F5E0(v760)) {
  mplew.StartNode("Mask - " + map.get(0x28BCC88));//
  if (sub_42FF80(/* &v5264 */)) {
    v761 = mplew.writeInt("v761");
  }
  else {
    v762 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v766 = Check_Buff(mask, 0x28BCCD0);//159
if (sub_42F5E0(v766)) {
  mplew.StartNode("Mask - " + map.get(0x28BCCD0));//
  if (sub_42FF80(/* &v5264 */)) {
    v767 = mplew.writeInt("v767");
  }
  else {
    v768 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v772 = Check_Buff(mask, 0x28BCD18);//243
if (sub_42F5E0(v772)) {
  mplew.StartNode("Mask - " + map.get(0x28BCD18));//
  if (sub_42FF80(/* &v5264 */)) {
    v773 = mplew.writeInt("v773");
  }
  else {
    v774 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v778 = Check_Buff(mask, 0x28BCD60);//160
if (sub_42F5E0(v778)) {
  mplew.StartNode("Mask - " + map.get(0x28BCD60));//
  if (sub_42FF80(/* &v5264 */)) {
    v779 = mplew.writeInt("v779");
  }
  else {
    v780 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v784 = Check_Buff(mask, 0x28BCDA8);//161
if (sub_42F5E0(v784)) {
  mplew.StartNode("Mask - " + map.get(0x28BCDA8));//
  if (sub_42FF80(/* &v5264 */)) {
    v785 = mplew.writeInt("v785");
  }
  else {
    v786 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v790 = Check_Buff(mask, 0x28BCDF0);//162
if (sub_42F5E0(v790)) {
  mplew.StartNode("Mask - " + map.get(0x28BCDF0));//
  if (sub_42FF80(/* &v5264 */)) {
    v791 = mplew.writeInt("v791");
  }
  else {
    v792 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v796 = Check_Buff(mask, 0x28BCE38);//163
if (sub_42F5E0(v796)) {
  mplew.StartNode("Mask - " + map.get(0x28BCE38));//
  if (sub_42FF80(/* &v5264 */)) {
    v797 = mplew.writeInt("v797");
  }
  else {
    v798 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v802 = Check_Buff(mask, 0x28BCE80);//164
if (sub_42F5E0(v802)) {
  mplew.StartNode("Mask - " + map.get(0x28BCE80));//
  if (sub_42FF80(/* &v5264 */)) {
    v803 = mplew.writeInt("v803");
  }
  else {
    v804 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v808 = Check_Buff(mask, 0x28BCEC8);//179
if (sub_42F5E0(v808)) {
  mplew.StartNode("Mask - " + map.get(0x28BCEC8));//
  if (sub_42FF80(/* &v5264 */)) {
    v809 = mplew.writeInt("v809");
  }
  else {
    v810 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v814 = Check_Buff(mask, 0x28BCF10);//165
if (sub_42F5E0(v814)) {
  mplew.StartNode("Mask - " + map.get(0x28BCF10));//
  if (sub_42FF80(/* &v5264 */)) {
    v815 = mplew.writeInt("v815");
  }
  else {
    v816 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v820 = Check_Buff(mask, 0x28BCF58);//166
if (sub_42F5E0(v820)) {
  mplew.StartNode("Mask - " + map.get(0x28BCF58));//
  if (sub_42FF80(/* &v5264 */)) {
    v821 = mplew.writeInt("v821");
  }
  else {
    v822 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v826 = Check_Buff(mask, 0x28BCFA0);//168
if (sub_42F5E0(v826)) {
  mplew.StartNode("Mask - " + map.get(0x28BCFA0));//
  if (sub_42FF80(/* &v5264 */)) {
    v827 = mplew.writeInt("v827");
  }
  else {
    v828 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v832 = Check_Buff(mask, 0x28BCFE8);//173
if (sub_42F5E0(v832)) {
  mplew.StartNode("Mask - " + map.get(0x28BCFE8));//
  if (sub_42FF80(/* &v5264 */)) {
    v833 = mplew.writeInt("v833");
  }
  else {
    v834 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v838 = Check_Buff(mask, 0x28BD030);//180
if (sub_42F5E0(v838)) {
  mplew.StartNode("Mask - " + map.get(0x28BD030));//
  if (sub_42FF80(/* &v5264 */)) {
    v839 = mplew.writeInt("v839");
  }
  else {
    v840 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v844 = Check_Buff(mask, 0x28BD078);//192
if (sub_42F5E0(v844)) {
  mplew.StartNode("Mask - " + map.get(0x28BD078));//
  if (sub_42FF80(/* &v5264 */)) {
    v845 = mplew.writeInt("v845");
  }
  else {
    v846 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v850 = Check_Buff(mask, 0x28BD0C0);//193
if (sub_42F5E0(v850)) {
  mplew.StartNode("Mask - " + map.get(0x28BD0C0));//
  if (sub_42FF80(/* &v5264 */)) {
    v851 = mplew.writeInt("v851");
  }
  else {
    v852 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v856 = Check_Buff(mask, 0x28BD108);//181
if (sub_42F5E0(v856)) {
  mplew.StartNode("Mask - " + map.get(0x28BD108));//
  if (sub_42FF80(/* &v5264 */)) {
    v857 = mplew.writeInt("v857");
  }
  else {
    v858 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v862 = Check_Buff(mask, 0x28BD150);//187
if (sub_42F5E0(v862)) {
  mplew.StartNode("Mask - " + map.get(0x28BD150));//
  if (sub_42FF80(/* &v5264 */)) {
    v863 = mplew.writeInt("v863");
  }
  else {
    v864 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v868 = Check_Buff(mask, 0x28BD198);//182
if (sub_42F5E0(v868)) {
  mplew.StartNode("Mask - " + map.get(0x28BD198));//
  if (sub_42FF80(/* &v5264 */)) {
    v869 = mplew.writeInt("v869");
  }
  else {
    v870 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v874 = Check_Buff(mask, 0x28BD1E0);//183
if (sub_42F5E0(v874)) {
  mplew.StartNode("Mask - " + map.get(0x28BD1E0));//
  if (sub_42FF80(/* &v5264 */)) {
    v875 = mplew.writeInt("v875");
  }
  else {
    v876 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v880 = Check_Buff(mask, 0x28BD228);//184
if (sub_42F5E0(v880)) {
  mplew.StartNode("Mask - " + map.get(0x28BD228));//
  if (sub_42FF80(/* &v5264 */)) {
    v881 = mplew.writeInt("v881");
  }
  else {
    v882 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v886 = Check_Buff(mask, 0x28BD270);//189
if (sub_42F5E0(v886)) {
  mplew.StartNode("Mask - " + map.get(0x28BD270));//
  if (sub_42FF80(/* &v5264 */)) {
    v887 = mplew.writeInt("v887");
  }
  else {
    v888 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v892 = Check_Buff(mask, 0x28BD2B8);//194
if (sub_42F5E0(v892)) {
  mplew.StartNode("Mask - " + map.get(0x28BD2B8));//
  if (sub_42FF80(/* &v5264 */)) {
    v893 = mplew.writeInt("v893");
  }
  else {
    v894 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v898 = Check_Buff(mask, 0x28BD300);//191
if (sub_42F5E0(v898)) {
  mplew.StartNode("Mask - " + map.get(0x28BD300));//
  if (sub_42FF80(/* &v5264 */)) {
    v899 = mplew.writeInt("v899");
  }
  else {
    v900 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v904 = Check_Buff(mask, 0x28BD348);//188
if (sub_42F5E0(v904)) {
  mplew.StartNode("Mask - " + map.get(0x28BD348));//
  if (sub_42FF80(/* &v5264 */)) {
    v905 = mplew.writeInt("v905");
  }
  else {
    v906 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v910 = Check_Buff(mask, 0x28BD390);//195
if (sub_42F5E0(v910)) {
  mplew.StartNode("Mask - " + map.get(0x28BD390));//
  if (sub_42FF80(/* &v5264 */)) {
    v911 = mplew.writeInt("v911");
  }
  else {
    v912 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v916 = Check_Buff(mask, 0x28BD3D8);//197
if (sub_42F5E0(v916)) {
  mplew.StartNode("Mask - " + map.get(0x28BD3D8));//
  if (sub_42FF80(/* &v5264 */)) {
    v917 = mplew.writeInt("v917");
  }
  else {
    v918 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v922 = Check_Buff(mask, 0x28BD420);//198
if (sub_42F5E0(v922)) {
  mplew.StartNode("Mask - " + map.get(0x28BD420));//
  if (sub_42FF80(/* &v5264 */)) {
    v923 = mplew.writeInt("v923");
  }
  else {
    v924 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v928 = Check_Buff(mask, 0x28BD468);//204
if (sub_42F5E0(v928)) {
  mplew.StartNode("Mask - " + map.get(0x28BD468));//
  if (sub_42FF80(/* &v5264 */)) {
    v929 = mplew.writeInt("v929");
  }
  else {
    v930 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v934 = Check_Buff(mask, 0x28BD4B0);//199
if (sub_42F5E0(v934)) {
  mplew.StartNode("Mask - " + map.get(0x28BD4B0));//
  if (sub_42FF80(/* &v5264 */)) {
    v935 = mplew.writeInt("v935");
  }
  else {
    v936 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v940 = Check_Buff(mask, 0x28BD4F8);//200
if (sub_42F5E0(v940)) {
  mplew.StartNode("Mask - " + map.get(0x28BD4F8));//
  if (sub_42FF80(/* &v5264 */)) {
    v941 = mplew.writeInt("v941");
  }
  else {
    v942 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v946 = Check_Buff(mask, 0x28BD540);//202
if (sub_42F5E0(v946)) {
  mplew.StartNode("Mask - " + map.get(0x28BD540));//
  if (sub_42FF80(/* &v5264 */)) {
    v947 = mplew.writeInt("v947");
  }
  else {
    v948 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v952 = Check_Buff(mask, 0x28BD588);//205
if (sub_42F5E0(v952)) {
  mplew.StartNode("Mask - " + map.get(0x28BD588));//
  if (sub_42FF80(/* &v5264 */)) {
    v953 = mplew.writeInt("v953");
  }
  else {
    v954 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v958 = Check_Buff(mask, 0x28BA3C0);//203
if (sub_42F5E0(v958)) {
  mplew.StartNode("Mask - " + map.get(0x28BA3C0));//
  if (sub_42FF80(/* &v5264 */)) {
    v959 = mplew.writeInt("v959");
  }
  else {
    v960 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v964 = Check_Buff(mask, 0x28BD5D0);//206
if (sub_42F5E0(v964)) {
  mplew.StartNode("Mask - " + map.get(0x28BD5D0));//
  if (sub_42FF80(/* &v5264 */)) {
    v965 = mplew.writeInt("v965");
  }
  else {
    v966 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v970 = Check_Buff(mask, 0x28BD618);//207
if (sub_42F5E0(v970)) {
  mplew.StartNode("Mask - " + map.get(0x28BD618));//
  if (sub_42FF80(/* &v5264 */)) {
    v971 = mplew.writeInt("v971");
  }
  else {
    v972 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v976 = Check_Buff(mask, 0x28BD660);//208
if (sub_42F5E0(v976)) {
  mplew.StartNode("Mask - " + map.get(0x28BD660));//
  if (sub_42FF80(/* &v5264 */)) {
    v977 = mplew.writeInt("v977");
  }
  else {
    v978 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v982 = Check_Buff(mask, 0x28BD6A8);//209
if (sub_42F5E0(v982)) {
  mplew.StartNode("Mask - " + map.get(0x28BD6A8));//
  if (sub_42FF80(/* &v5264 */)) {
    v983 = mplew.writeInt("v983");
  }
  else {
    v984 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v988 = Check_Buff(mask, 0x28BD6F0);//211
if (sub_42F5E0(v988)) {
  mplew.StartNode("Mask - " + map.get(0x28BD6F0));//
  if (sub_42FF80(/* &v5264 */)) {
    v989 = mplew.writeInt("v989");
  }
  else {
    v990 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v994 = Check_Buff(mask, 0x28BD738);//212
if (sub_42F5E0(v994)) {
  mplew.StartNode("Mask - " + map.get(0x28BD738));//
  if (sub_42FF80(/* &v5264 */)) {
    v995 = mplew.writeInt("v995");
  }
  else {
    v996 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1000 = Check_Buff(mask, 0x28BD780);//213
if (sub_42F5E0(v1000)) {
  mplew.StartNode("Mask - " + map.get(0x28BD780));//
  if (sub_42FF80(/* &v5264 */)) {
    v1001 = mplew.writeInt("v1001");
  }
  else {
    v1002 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1006 = Check_Buff(mask, 0x28BD7C8);//214
if (sub_42F5E0(v1006)) {
  mplew.StartNode("Mask - " + map.get(0x28BD7C8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1007 = mplew.writeInt("v1007");
  }
  else {
    v1008 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1012 = Check_Buff(mask, 0x28BD810);//215
if (sub_42F5E0(v1012)) {
  mplew.StartNode("Mask - " + map.get(0x28BD810));//
  if (sub_42FF80(/* &v5264 */)) {
    v1013 = mplew.writeInt("v1013");
  }
  else {
    v1014 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1018 = Check_Buff(mask, 0x28BD858);//216
if (sub_42F5E0(v1018)) {
  mplew.StartNode("Mask - " + map.get(0x28BD858));//
  if (sub_42FF80(/* &v5264 */)) {
    v1019 = mplew.writeInt("v1019");
  }
  else {
    v1020 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1024 = Check_Buff(mask, 0x28BD8A0);//217
if (sub_42F5E0(v1024)) {
  mplew.StartNode("Mask - " + map.get(0x28BD8A0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1025 = mplew.writeInt("v1025");
  }
  else {
    v1026 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1030 = Check_Buff(mask, 0x28BD8E8);//218
if (sub_42F5E0(v1030)) {
  mplew.StartNode("Mask - " + map.get(0x28BD8E8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1031 = mplew.writeInt("v1031");
  }
  else {
    v1032 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1036 = Check_Buff(mask, 0x28BD930);//237
if (sub_42F5E0(v1036)) {
  mplew.StartNode("Mask - " + map.get(0x28BD930));//
  if (sub_42FF80(/* &v5264 */)) {
    v1037 = mplew.writeInt("v1037");
  }
  else {
    v1038 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1042 = Check_Buff(mask, 0x28BD978);//219
if (sub_42F5E0(v1042)) {
  mplew.StartNode("Mask - " + map.get(0x28BD978));//
  if (sub_42FF80(/* &v5264 */)) {
    v1043 = mplew.writeInt("v1043");
  }
  else {
    v1044 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1048 = Check_Buff(mask, 0x28BD9C0);//220
if (sub_42F5E0(v1048)) {
  mplew.StartNode("Mask - " + map.get(0x28BD9C0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1049 = mplew.writeInt("v1049");
  }
  else {
    v1050 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1054 = Check_Buff(mask, 0x28BA9A8);//242
if (sub_42F5E0(v1054)) {
  mplew.StartNode("Mask - " + map.get(0x28BA9A8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1055 = mplew.writeInt("v1055");
  }
  else {
    v1056 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1060 = Check_Buff(mask, 0x28BDA08);//255
if (sub_42F5E0(v1060)) {
  mplew.StartNode("Mask - " + map.get(0x28BDA08));//
  if (sub_42FF80(/* &v5264 */)) {
    v1061 = mplew.writeInt("v1061");
  }
  else {
    v1062 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1066 = Check_Buff(mask, 0x28BDA50);//221
if (sub_42F5E0(v1066)) {
  mplew.StartNode("Mask - " + map.get(0x28BDA50));//
  if (sub_42FF80(/* &v5264 */)) {
    v1067 = mplew.writeInt("v1067");
  }
  else {
    v1068 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1072 = Check_Buff(mask, 0x28BDA98);//222
if (sub_42F5E0(v1072)) {
  mplew.StartNode("Mask - " + map.get(0x28BDA98));//
  if (sub_42FF80(/* &v5264 */)) {
    v1073 = mplew.writeInt("v1073");
  }
  else {
    v1074 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1078 = Check_Buff(mask, 0x28BA378);//223
if (sub_42F5E0(v1078)) {
  mplew.StartNode("Mask - " + map.get(0x28BA378));//
  if (sub_42FF80(/* &v5264 */)) {
    v1079 = mplew.writeInt("v1079");
  }
  else {
    v1080 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1084 = Check_Buff(mask, 0x28BDAE0);//224
if (sub_42F5E0(v1084)) {
  mplew.StartNode("Mask - " + map.get(0x28BDAE0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1085 = mplew.writeInt("v1085");
  }
  else {
    v1086 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1090 = Check_Buff(mask, 0x28BDB28);//225
if (sub_42F5E0(v1090)) {
  mplew.StartNode("Mask - " + map.get(0x28BDB28));//
  if (sub_42FF80(/* &v5264 */)) {
    v1091 = mplew.writeInt("v1091");
  }
  else {
    v1092 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1096 = Check_Buff(mask, 0x28BDB70);//226
if (sub_42F5E0(v1096)) {
  mplew.StartNode("Mask - " + map.get(0x28BDB70));//
  if (sub_42FF80(/* &v5264 */)) {
    v1097 = mplew.writeInt("v1097");
  }
  else {
    v1098 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1102 = Check_Buff(mask, 0x28BDBB8);//228
if (sub_42F5E0(v1102)) {
  mplew.StartNode("Mask - " + map.get(0x28BDBB8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1103 = mplew.writeInt("v1103");
  }
  else {
    v1104 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1108 = Check_Buff(mask, 0x28BDC00);//229
if (sub_42F5E0(v1108)) {
  mplew.StartNode("Mask - " + map.get(0x28BDC00));//
  if (sub_42FF80(/* &v5264 */)) {
    v1109 = mplew.writeInt("v1109");
  }
  else {
    v1110 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1114 = Check_Buff(mask, 0x28BDC48);//244
if (sub_42F5E0(v1114)) {
  mplew.StartNode("Mask - " + map.get(0x28BDC48));//
  if (sub_42FF80(/* &v5264 */)) {
    v1115 = mplew.writeInt("v1115");
  }
  else {
    v1116 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1120 = Check_Buff(mask, 0x28BDC90);//310
if (sub_42F5E0(v1120)) {
  mplew.StartNode("Mask - " + map.get(0x28BDC90));//
  if (sub_42FF80(/* &v5264 */)) {
    v1121 = mplew.writeInt("v1121");
  }
  else {
    v1122 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1126 = Check_Buff(mask, 0x28BDCD8);//230
if (sub_42F5E0(v1126)) {
  mplew.StartNode("Mask - " + map.get(0x28BDCD8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1127 = mplew.writeInt("v1127");
  }
  else {
    v1128 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1132 = Check_Buff(mask, 0x28BDD20);//232
if (sub_42F5E0(v1132)) {
  mplew.StartNode("Mask - " + map.get(0x28BDD20));//
  if (sub_42FF80(/* &v5264 */)) {
    v1133 = mplew.writeInt("v1133");
  }
  else {
    v1134 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1138 = Check_Buff(mask, 0x28BDD68);//231
if (sub_42F5E0(v1138)) {
  mplew.StartNode("Mask - " + map.get(0x28BDD68));//
  if (sub_42FF80(/* &v5264 */)) {
    v1139 = mplew.writeInt("v1139");
  }
  else {
    v1140 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1144 = Check_Buff(mask, 0x28BDDB0);//248
if (sub_42F5E0(v1144)) {
  mplew.StartNode("Mask - " + map.get(0x28BDDB0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1145 = mplew.writeInt("v1145");
  }
  else {
    v1146 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1150 = Check_Buff(mask, 0x28BDDF8);//233
if (sub_42F5E0(v1150)) {
  mplew.StartNode("Mask - " + map.get(0x28BDDF8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1151 = mplew.writeInt("v1151");
  }
  else {
    v1152 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1156 = Check_Buff(mask, 0x28BDE40);//234
if (sub_42F5E0(v1156)) {
  mplew.StartNode("Mask - " + map.get(0x28BDE40));//
  if (sub_42FF80(/* &v5264 */)) {
    v1157 = mplew.writeInt("v1157");
  }
  else {
    v1158 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1162 = Check_Buff(mask, 0x28BDE88);//247
if (sub_42F5E0(v1162)) {
  mplew.StartNode("Mask - " + map.get(0x28BDE88));//
  if (sub_42FF80(/* &v5264 */)) {
    v1163 = mplew.writeInt("v1163");
  }
  else {
    v1164 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1168 = Check_Buff(mask, 0x28BDED0);//249
if (sub_42F5E0(v1168)) {
  mplew.StartNode("Mask - " + map.get(0x28BDED0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1169 = mplew.writeInt("v1169");
  }
  else {
    v1170 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1174 = Check_Buff(mask, 0x28BDF18);//235
if (sub_42F5E0(v1174)) {
  mplew.StartNode("Mask - " + map.get(0x28BDF18));//
  if (sub_42FF80(/* &v5264 */)) {
    v1175 = mplew.writeInt("v1175");
  }
  else {
    v1176 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1180 = Check_Buff(mask, 0x28BA408);//236
if (sub_42F5E0(v1180)) {
  mplew.StartNode("Mask - " + map.get(0x28BA408));//
  if (sub_42FF80(/* &v5264 */)) {
    v1181 = mplew.writeInt("v1181");
  }
  else {
    v1182 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1186 = Check_Buff(mask, 0x28BDF60);//250
if (sub_42F5E0(v1186)) {
  mplew.StartNode("Mask - " + map.get(0x28BDF60));//
  if (sub_42FF80(/* &v5264 */)) {
    v1187 = mplew.writeInt("v1187");
  }
  else {
    v1188 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1192 = Check_Buff(mask, 0x28BDFA8);//245
if (sub_42F5E0(v1192)) {
  mplew.StartNode("Mask - " + map.get(0x28BDFA8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1193 = mplew.writeInt("v1193");
  }
  else {
    v1194 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1198 = Check_Buff(mask, 0x28BDFF0);//251
if (sub_42F5E0(v1198)) {
  mplew.StartNode("Mask - " + map.get(0x28BDFF0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1199 = mplew.writeInt("v1199");
  }
  else {
    v1200 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1204 = Check_Buff(mask, 0x28BE038);//253
if (sub_42F5E0(v1204)) {
  mplew.StartNode("Mask - " + map.get(0x28BE038));//
  if (sub_42FF80(/* &v5264 */)) {
    v1205 = mplew.writeInt("v1205");
  }
  else {
    v1206 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1210 = Check_Buff(mask, 0x28BE080);//254
if (sub_42F5E0(v1210)) {
  mplew.StartNode("Mask - " + map.get(0x28BE080));//
  if (sub_42FF80(/* &v5264 */)) {
    v1211 = mplew.writeInt("v1211");
  }
  else {
    v1212 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1216 = Check_Buff(mask, 0x28BE0C8);//196
if (sub_42F5E0(v1216)) {
  mplew.StartNode("Mask - " + map.get(0x28BE0C8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1217 = mplew.writeInt("v1217");
  }
  else {
    v1218 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1222 = Check_Buff(mask, 0x28BE110);//256
if (sub_42F5E0(v1222)) {
  mplew.StartNode("Mask - " + map.get(0x28BE110));//
  if (sub_42FF80(/* &v5264 */)) {
    v1223 = mplew.writeInt("v1223");
  }
  else {
    v1224 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1228 = Check_Buff(mask, 0x28BA450);//257
if (sub_42F5E0(v1228)) {
  mplew.StartNode("Mask - " + map.get(0x28BA450));//
  if (sub_42FF80(/* &v5264 */)) {
    v1229 = mplew.writeInt("v1229");
  }
  else {
    v1230 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1234 = Check_Buff(mask, 0x28BE158);//258
if (sub_42F5E0(v1234)) {
  mplew.StartNode("Mask - " + map.get(0x28BE158));//
  if (sub_42FF80(/* &v5264 */)) {
    v1235 = mplew.writeInt("v1235");
  }
  else {
    v1236 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1240 = Check_Buff(mask, 0x28BA498);//259
if (sub_42F5E0(v1240)) {
  mplew.StartNode("Mask - " + map.get(0x28BA498));//
  if (sub_42FF80(/* &v5264 */)) {
    v1241 = mplew.writeInt("v1241");
  }
  else {
    v1242 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1246 = Check_Buff(mask, 0x28BE1A0);//260
if (sub_42F5E0(v1246)) {
  mplew.StartNode("Mask - " + map.get(0x28BE1A0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1247 = mplew.writeInt("v1247");
  }
  else {
    v1248 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1252 = Check_Buff(mask, 0x28BE1E8);//269
if (sub_42F5E0(v1252)) {
  mplew.StartNode("Mask - " + map.get(0x28BE1E8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1253 = mplew.writeInt("v1253");
  }
  else {
    v1254 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1258 = Check_Buff(mask, 0x28BE230);//126
if (sub_42F5E0(v1258)) {
  mplew.StartNode("Mask - " + map.get(0x28BE230));//
  if (sub_42FF80(/* &v5264 */)) {
    v1259 = mplew.writeInt("v1259");
  }
  else {
    v1260 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1264 = Check_Buff(mask, 0x28BE278);//263
if (sub_42F5E0(v1264)) {
  mplew.StartNode("Mask - " + map.get(0x28BE278));//
  if (sub_42FF80(/* &v5264 */)) {
    v1265 = mplew.writeInt("v1265");
  }
  else {
    v1266 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1270 = Check_Buff(mask, 0x28BE2C0);//264
if (sub_42F5E0(v1270)) {
  mplew.StartNode("Mask - " + map.get(0x28BE2C0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1271 = mplew.writeInt("v1271");
  }
  else {
    v1272 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1276 = Check_Buff(mask, 0x28BE308);//265
if (sub_42F5E0(v1276)) {
  mplew.StartNode("Mask - " + map.get(0x28BE308));//
  if (sub_42FF80(/* &v5264 */)) {
    v1277 = mplew.writeInt("v1277");
  }
  else {
    v1278 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1282 = Check_Buff(mask, 0x28BE350);//266
if (sub_42F5E0(v1282)) {
  mplew.StartNode("Mask - " + map.get(0x28BE350));//
  if (sub_42FF80(/* &v5264 */)) {
    v1283 = mplew.writeInt("v1283");
  }
  else {
    v1284 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1288 = Check_Buff(mask, 0x28BE398);//267
if (sub_42F5E0(v1288)) {
  mplew.StartNode("Mask - " + map.get(0x28BE398));//
  if (sub_42FF80(/* &v5264 */)) {
    v1289 = mplew.writeInt("v1289");
  }
  else {
    v1290 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1294 = Check_Buff(mask, 0x28BE3E0);//268
if (sub_42F5E0(v1294)) {
  mplew.StartNode("Mask - " + map.get(0x28BE3E0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1295 = mplew.writeInt("v1295");
  }
  else {
    v1296 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1300 = Check_Buff(mask, 0x28BE428);//270
if (sub_42F5E0(v1300)) {
  mplew.StartNode("Mask - " + map.get(0x28BE428));//
  if (sub_42FF80(/* &v5264 */)) {
    v1301 = mplew.writeInt("v1301");
  }
  else {
    v1302 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1306 = Check_Buff(mask, 0x28BE470);//271
if (sub_42F5E0(v1306)) {
  mplew.StartNode("Mask - " + map.get(0x28BE470));//
  if (sub_42FF80(/* &v5264 */)) {
    v1307 = mplew.writeInt("v1307");
  }
  else {
    v1308 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1312 = Check_Buff(mask, 0x28BE4B8);//272
if (sub_42F5E0(v1312)) {
  mplew.StartNode("Mask - " + map.get(0x28BE4B8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1313 = mplew.writeInt("v1313");
  }
  else {
    v1314 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1318 = Check_Buff(mask, 0x28BE500);//273
if (sub_42F5E0(v1318)) {
  mplew.StartNode("Mask - " + map.get(0x28BE500));//
  if (sub_42FF80(/* &v5264 */)) {
    v1319 = mplew.writeInt("v1319");
  }
  else {
    v1320 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1324 = Check_Buff(mask, 0x28BE548);//274
if (sub_42F5E0(v1324)) {
  mplew.StartNode("Mask - " + map.get(0x28BE548));//
  if (sub_42FF80(/* &v5264 */)) {
    v1325 = mplew.writeInt("v1325");
  }
  else {
    v1326 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1330 = Check_Buff(mask, 0x28BE590);//275
if (sub_42F5E0(v1330)) {
  mplew.StartNode("Mask - " + map.get(0x28BE590));//
  if (sub_42FF80(/* &v5264 */)) {
    v1331 = mplew.writeInt("v1331");
  }
  else {
    v1332 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1336 = Check_Buff(mask, 0x28BE5D8);//333
if (sub_42F5E0(v1336)) {
  mplew.StartNode("Mask - " + map.get(0x28BE5D8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1337 = mplew.writeInt("v1337");
  }
  else {
    v1338 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1342 = Check_Buff(mask, 0x28BE620);//276
if (sub_42F5E0(v1342)) {
  mplew.StartNode("Mask - " + map.get(0x28BE620));//
  if (sub_42FF80(/* &v5264 */)) {
    v1343 = mplew.writeInt("v1343");
  }
  else {
    v1344 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1348 = Check_Buff(mask, 0x28BE668);//277
if (sub_42F5E0(v1348)) {
  mplew.StartNode("Mask - " + map.get(0x28BE668));//
  if (sub_42FF80(/* &v5264 */)) {
    v1349 = mplew.writeInt("v1349");
  }
  else {
    v1350 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1354 = Check_Buff(mask, 0x28BE6B0);//278
if (sub_42F5E0(v1354)) {
  mplew.StartNode("Mask - " + map.get(0x28BE6B0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1355 = mplew.writeInt("v1355");
  }
  else {
    v1356 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1360 = Check_Buff(mask, 0x28BE6F8);//279
if (sub_42F5E0(v1360)) {
  mplew.StartNode("Mask - " + map.get(0x28BE6F8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1361 = mplew.writeInt("v1361");
  }
  else {
    v1362 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1366 = Check_Buff(mask, 0x28BE740);//280
if (sub_42F5E0(v1366)) {
  mplew.StartNode("Mask - " + map.get(0x28BE740));//
  if (sub_42FF80(/* &v5264 */)) {
    v1367 = mplew.writeInt("v1367");
  }
  else {
    v1368 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1372 = Check_Buff(mask, 0x28BE788);//281
if (sub_42F5E0(v1372)) {
  mplew.StartNode("Mask - " + map.get(0x28BE788));//
  if (sub_42FF80(/* &v5264 */)) {
    v1373 = mplew.writeInt("v1373");
  }
  else {
    v1374 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1378 = Check_Buff(mask, 0x28BE7D0);//282
if (sub_42F5E0(v1378)) {
  mplew.StartNode("Mask - " + map.get(0x28BE7D0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1379 = mplew.writeInt("v1379");
  }
  else {
    v1380 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1384 = Check_Buff(mask, 0x28BE818);//283
if (sub_42F5E0(v1384)) {
  mplew.StartNode("Mask - " + map.get(0x28BE818));//
  if (sub_42FF80(/* &v5264 */)) {
    v1385 = mplew.writeInt("v1385");
  }
  else {
    v1386 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1390 = Check_Buff(mask, 0x28BE860);//325
if (sub_42F5E0(v1390)) {
  mplew.StartNode("Mask - " + map.get(0x28BE860));//
  if (sub_42FF80(/* &v5264 */)) {
    v1391 = mplew.writeInt("v1391");
  }
  else {
    v1392 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1396 = Check_Buff(mask, 0x28BE8A8);//326
if (sub_42F5E0(v1396)) {
  mplew.StartNode("Mask - " + map.get(0x28BE8A8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1397 = mplew.writeInt("v1397");
  }
  else {
    v1398 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1402 = Check_Buff(mask, 0x28BE8F0);//327
if (sub_42F5E0(v1402)) {
  mplew.StartNode("Mask - " + map.get(0x28BE8F0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1403 = mplew.writeInt("v1403");
  }
  else {
    v1404 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1408 = Check_Buff(mask, 0x28BE938);//284
if (sub_42F5E0(v1408)) {
  mplew.StartNode("Mask - " + map.get(0x28BE938));//
  if (sub_42FF80(/* &v5264 */)) {
    v1409 = mplew.writeInt("v1409");
  }
  else {
    v1410 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1414 = Check_Buff(mask, 0x28BE980);//285
if (sub_42F5E0(v1414)) {
  mplew.StartNode("Mask - " + map.get(0x28BE980));//
  if (sub_42FF80(/* &v5264 */)) {
    v1415 = mplew.writeInt("v1415");
  }
  else {
    v1416 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1420 = Check_Buff(mask, 0x28BE9C8);//286
if (sub_42F5E0(v1420)) {
  mplew.StartNode("Mask - " + map.get(0x28BE9C8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1421 = mplew.writeInt("v1421");
  }
  else {
    v1422 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1426 = Check_Buff(mask, 0x28BA960);//287
if (sub_42F5E0(v1426)) {
  mplew.StartNode("Mask - " + map.get(0x28BA960));//
  if (sub_42FF80(/* &v5264 */)) {
    v1427 = mplew.writeInt("v1427");
  }
  else {
    v1428 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1432 = Check_Buff(mask, 0x28BEA10);//288
if (sub_42F5E0(v1432)) {
  mplew.StartNode("Mask - " + map.get(0x28BEA10));//
  if (sub_42FF80(/* &v5264 */)) {
    v1433 = mplew.writeInt("v1433");
  }
  else {
    v1434 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1438 = Check_Buff(mask, 0x28BEA58);//289
if (sub_42F5E0(v1438)) {
  mplew.StartNode("Mask - " + map.get(0x28BEA58));//
  if (sub_42FF80(/* &v5264 */)) {
    v1439 = mplew.writeInt("v1439");
  }
  else {
    v1440 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1444 = Check_Buff(mask, 0x28BEAA0);//290
if (sub_42F5E0(v1444)) {
  mplew.StartNode("Mask - " + map.get(0x28BEAA0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1445 = mplew.writeInt("v1445");
  }
  else {
    v1446 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1450 = Check_Buff(mask, 0x28BA4E0);//291
if (sub_42F5E0(v1450)) {
  mplew.StartNode("Mask - " + map.get(0x28BA4E0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1451 = mplew.writeInt("v1451");
  }
  else {
    v1452 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1456 = Check_Buff(mask, 0x28BEAE8);//295
if (sub_42F5E0(v1456)) {
  mplew.StartNode("Mask - " + map.get(0x28BEAE8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1457 = mplew.writeInt("v1457");
  }
  else {
    v1458 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1462 = Check_Buff(mask, 0x28BEB30);//292
if (sub_42F5E0(v1462)) {
  mplew.StartNode("Mask - " + map.get(0x28BEB30));//
  if (sub_42FF80(/* &v5264 */)) {
    v1463 = mplew.writeInt("v1463");
  }
  else {
    v1464 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1468 = Check_Buff(mask, 0x28BEB78);//293
if (sub_42F5E0(v1468)) {
  mplew.StartNode("Mask - " + map.get(0x28BEB78));//
  if (sub_42FF80(/* &v5264 */)) {
    v1469 = mplew.writeInt("v1469");
  }
  else {
    v1470 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1474 = Check_Buff(mask, 0x28BEBC0);//294
if (sub_42F5E0(v1474)) {
  mplew.StartNode("Mask - " + map.get(0x28BEBC0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1475 = mplew.writeInt("v1475");
  }
  else {
    v1476 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1480 = Check_Buff(mask, 0x28BEC08);//296
if (sub_42F5E0(v1480)) {
  mplew.StartNode("Mask - " + map.get(0x28BEC08));//
  if (sub_42FF80(/* &v5264 */)) {
    v1481 = mplew.writeInt("v1481");
  }
  else {
    v1482 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1486 = Check_Buff(mask, 0x28BEC50);//297
if (sub_42F5E0(v1486)) {
  mplew.StartNode("Mask - " + map.get(0x28BEC50));//
  if (sub_42FF80(/* &v5264 */)) {
    v1487 = mplew.writeInt("v1487");
  }
  else {
    v1488 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1492 = Check_Buff(mask, 0x28BEC98);//298
if (sub_42F5E0(v1492)) {
  mplew.StartNode("Mask - " + map.get(0x28BEC98));//
  if (sub_42FF80(/* &v5264 */)) {
    v1493 = mplew.writeInt("v1493");
  }
  else {
    v1494 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1498 = Check_Buff(mask, 0x28BECE0);//299
if (sub_42F5E0(v1498)) {
  mplew.StartNode("Mask - " + map.get(0x28BECE0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1499 = mplew.writeInt("v1499");
  }
  else {
    v1500 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1504 = Check_Buff(mask, 0x28BED28);//201
if (sub_42F5E0(v1504)) {
  mplew.StartNode("Mask - " + map.get(0x28BED28));//
  if (sub_42FF80(/* &v5264 */)) {
    v1505 = mplew.writeInt("v1505");
  }
  else {
    v1506 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1510 = Check_Buff(mask, 0x28BED70);//300
if (sub_42F5E0(v1510)) {
  mplew.StartNode("Mask - " + map.get(0x28BED70));//
  if (sub_42FF80(/* &v5264 */)) {
    v1511 = mplew.writeInt("v1511");
  }
  else {
    v1512 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1516 = Check_Buff(mask, 0x28BEDB8);//301
if (sub_42F5E0(v1516)) {
  mplew.StartNode("Mask - " + map.get(0x28BEDB8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1517 = mplew.writeInt("v1517");
  }
  else {
    v1518 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1522 = Check_Buff(mask, 0x28BEE00);//302
if (sub_42F5E0(v1522)) {
  mplew.StartNode("Mask - " + map.get(0x28BEE00));//
  if (sub_42FF80(/* &v5264 */)) {
    v1523 = mplew.writeInt("v1523");
  }
  else {
    v1524 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1528 = Check_Buff(mask, 0x28BEE48);//303
if (sub_42F5E0(v1528)) {
  mplew.StartNode("Mask - " + map.get(0x28BEE48));//
  if (sub_42FF80(/* &v5264 */)) {
    v1529 = mplew.writeInt("v1529");
  }
  else {
    v1530 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1534 = Check_Buff(mask, 0x28BEE90);//304
if (sub_42F5E0(v1534)) {
  mplew.StartNode("Mask - " + map.get(0x28BEE90));//
  if (sub_42FF80(/* &v5264 */)) {
    v1535 = mplew.writeInt("v1535");
  }
  else {
    v1536 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1540 = Check_Buff(mask, 0x28BA5B8);//305
if (sub_42F5E0(v1540)) {
  mplew.StartNode("Mask - " + map.get(0x28BA5B8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1541 = mplew.writeInt("v1541");
  }
  else {
    v1542 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1546 = Check_Buff(mask, 0x28BEED8);//308
if (sub_42F5E0(v1546)) {
  mplew.StartNode("Mask - " + map.get(0x28BEED8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1547 = mplew.writeInt("v1547");
  }
  else {
    v1548 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1552 = Check_Buff(mask, 0x28BEF20);//311
if (sub_42F5E0(v1552)) {
  mplew.StartNode("Mask - " + map.get(0x28BEF20));//
  if (sub_42FF80(/* &v5264 */)) {
    v1553 = mplew.writeInt("v1553");
  }
  else {
    v1554 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1558 = Check_Buff(mask, 0x28BEF68);//312
if (sub_42F5E0(v1558)) {
  mplew.StartNode("Mask - " + map.get(0x28BEF68));//
  if (sub_42FF80(/* &v5264 */)) {
    v1559 = mplew.writeInt("v1559");
  }
  else {
    v1560 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1564 = Check_Buff(mask, 0x28BEFB0);//313
if (sub_42F5E0(v1564)) {
  mplew.StartNode("Mask - " + map.get(0x28BEFB0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1565 = mplew.writeInt("v1565");
  }
  else {
    v1566 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1570 = Check_Buff(mask, 0x28BEFF8);//314
if (sub_42F5E0(v1570)) {
  mplew.StartNode("Mask - " + map.get(0x28BEFF8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1571 = mplew.writeInt("v1571");
  }
  else {
    v1572 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1576 = Check_Buff(mask, 0x28BF040);//315
if (sub_42F5E0(v1576)) {
  mplew.StartNode("Mask - " + map.get(0x28BF040));//
  if (sub_42FF80(/* &v5264 */)) {
    v1577 = mplew.writeInt("v1577");
  }
  else {
    v1578 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1582 = Check_Buff(mask, 0x28BF088);//316
if (sub_42F5E0(v1582)) {
  mplew.StartNode("Mask - " + map.get(0x28BF088));//
  if (sub_42FF80(/* &v5264 */)) {
    v1583 = mplew.writeInt("v1583");
  }
  else {
    v1584 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1588 = Check_Buff(mask, 0x28BF0D0);//317
if (sub_42F5E0(v1588)) {
  mplew.StartNode("Mask - " + map.get(0x28BF0D0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1589 = mplew.writeInt("v1589");
  }
  else {
    v1590 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1594 = Check_Buff(mask, 0x28BF118);//318
if (sub_42F5E0(v1594)) {
  mplew.StartNode("Mask - " + map.get(0x28BF118));//
  if (sub_42FF80(/* &v5264 */)) {
    v1595 = mplew.writeInt("v1595");
  }
  else {
    v1596 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1600 = Check_Buff(mask, 0x28BF160);//319
if (sub_42F5E0(v1600)) {
  mplew.StartNode("Mask - " + map.get(0x28BF160));//
  if (sub_42FF80(/* &v5264 */)) {
    v1601 = mplew.writeInt("v1601");
  }
  else {
    v1602 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1606 = Check_Buff(mask, 0x28BF1A8);//320
if (sub_42F5E0(v1606)) {
  mplew.StartNode("Mask - " + map.get(0x28BF1A8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1607 = mplew.writeInt("v1607");
  }
  else {
    v1608 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1612 = Check_Buff(mask, 0x28BF1F0);//321
if (sub_42F5E0(v1612)) {
  mplew.StartNode("Mask - " + map.get(0x28BF1F0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1613 = mplew.writeInt("v1613");
  }
  else {
    v1614 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1618 = Check_Buff(mask, 0x28BF238);//322
if (sub_42F5E0(v1618)) {
  mplew.StartNode("Mask - " + map.get(0x28BF238));//
  if (sub_42FF80(/* &v5264 */)) {
    v1619 = mplew.writeInt("v1619");
  }
  else {
    v1620 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1624 = Check_Buff(mask, 0x28BF280);//329
if (sub_42F5E0(v1624)) {
  mplew.StartNode("Mask - " + map.get(0x28BF280));//
  if (sub_42FF80(/* &v5264 */)) {
    v1625 = mplew.writeInt("v1625");
  }
  else {
    v1626 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1630 = Check_Buff(mask, 0x28BF2C8);//337
if (sub_42F5E0(v1630)) {
  mplew.StartNode("Mask - " + map.get(0x28BF2C8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1631 = mplew.writeInt("v1631");
  }
  else {
    v1632 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1636 = Check_Buff(mask, 0x28BF310);//331
if (sub_42F5E0(v1636)) {
  mplew.StartNode("Mask - " + map.get(0x28BF310));//
  if (sub_42FF80(/* &v5264 */)) {
    v1637 = mplew.writeInt("v1637");
  }
  else {
    v1638 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1642 = Check_Buff(mask, 0x28BF358);//323
if (sub_42F5E0(v1642)) {
  mplew.StartNode("Mask - " + map.get(0x28BF358));//
  if (sub_42FF80(/* &v5264 */)) {
    v1643 = mplew.writeInt("v1643");
  }
  else {
    v1644 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1648 = Check_Buff(mask, 0x28BF3A0);//330
if (sub_42F5E0(v1648)) {
  mplew.StartNode("Mask - " + map.get(0x28BF3A0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1649 = mplew.writeInt("v1649");
  }
  else {
    v1650 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1654 = Check_Buff(mask, 0x28BF3E8);//334
if (sub_42F5E0(v1654)) {
  mplew.StartNode("Mask - " + map.get(0x28BF3E8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1655 = mplew.writeInt("v1655");
  }
  else {
    v1656 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1660 = Check_Buff(mask, 0x28BF430);//332
if (sub_42F5E0(v1660)) {
  mplew.StartNode("Mask - " + map.get(0x28BF430));//
  if (sub_42FF80(/* &v5264 */)) {
    v1661 = mplew.writeInt("v1661");
  }
  else {
    v1662 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1666 = Check_Buff(mask, 0x28BF478);//335
if (sub_42F5E0(v1666)) {
  mplew.StartNode("Mask - " + map.get(0x28BF478));//
  if (sub_42FF80(/* &v5264 */)) {
    v1667 = mplew.writeInt("v1667");
  }
  else {
    v1668 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1672 = Check_Buff(mask, 0x28BF4C0);//336
if (sub_42F5E0(v1672)) {
  mplew.StartNode("Mask - " + map.get(0x28BF4C0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1673 = mplew.writeInt("v1673");
  }
  else {
    v1674 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1678 = Check_Buff(mask, 0x28BF508);//338
if (sub_42F5E0(v1678)) {
  mplew.StartNode("Mask - " + map.get(0x28BF508));//
  if (sub_42FF80(/* &v5264 */)) {
    v1679 = mplew.writeInt("v1679");
  }
  else {
    v1680 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1684 = Check_Buff(mask, 0x28BA600);//340
if (sub_42F5E0(v1684)) {
  mplew.StartNode("Mask - " + map.get(0x28BA600));//
  if (sub_42FF80(/* &v5264 */)) {
    v1685 = mplew.writeInt("v1685");
  }
  else {
    v1686 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1690 = Check_Buff(mask, 0x28BF550);//341
if (sub_42F5E0(v1690)) {
  mplew.StartNode("Mask - " + map.get(0x28BF550));//
  if (sub_42FF80(/* &v5264 */)) {
    v1691 = mplew.writeInt("v1691");
  }
  else {
    v1692 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1696 = Check_Buff(mask, 0x28BF598);//342
if (sub_42F5E0(v1696)) {
  mplew.StartNode("Mask - " + map.get(0x28BF598));//
  if (sub_42FF80(/* &v5264 */)) {
    v1697 = mplew.writeInt("v1697");
  }
  else {
    v1698 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1702 = Check_Buff(mask, 0x28BA648);//343
if (sub_42F5E0(v1702)) {
  mplew.StartNode("Mask - " + map.get(0x28BA648));//
  if (sub_42FF80(/* &v5264 */)) {
    v1703 = mplew.writeInt("v1703");
  }
  else {
    v1704 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1708 = Check_Buff(mask, 0x28BF5E0);//344
if (sub_42F5E0(v1708)) {
  mplew.StartNode("Mask - " + map.get(0x28BF5E0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1709 = mplew.writeInt("v1709");
  }
  else {
    v1710 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1714 = Check_Buff(mask, 0x28BF628);//345
if (sub_42F5E0(v1714)) {
  mplew.StartNode("Mask - " + map.get(0x28BF628));//
  if (sub_42FF80(/* &v5264 */)) {
    v1715 = mplew.writeInt("v1715");
  }
  else {
    v1716 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1720 = Check_Buff(mask, 0x28BF670);//346
if (sub_42F5E0(v1720)) {
  mplew.StartNode("Mask - " + map.get(0x28BF670));//
  if (sub_42FF80(/* &v5264 */)) {
    v1721 = mplew.writeInt("v1721");
  }
  else {
    v1722 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1726 = Check_Buff(mask, 0x28BF6B8);//347
if (sub_42F5E0(v1726)) {
  mplew.StartNode("Mask - " + map.get(0x28BF6B8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1727 = mplew.writeInt("v1727");
  }
  else {
    v1728 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1732 = Check_Buff(mask, 0x28BF700);//348
if (sub_42F5E0(v1732)) {
  mplew.StartNode("Mask - " + map.get(0x28BF700));//
  if (sub_42FF80(/* &v5264 */)) {
    v1733 = mplew.writeInt("v1733");
  }
  else {
    v1734 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1738 = Check_Buff(mask, 0x28BF748);//349
if (sub_42F5E0(v1738)) {
  mplew.StartNode("Mask - " + map.get(0x28BF748));//
  if (sub_42FF80(/* &v5264 */)) {
    v1739 = mplew.writeInt("v1739");
  }
  else {
    v1740 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1744 = Check_Buff(mask, 0x28BF790);//350
if (sub_42F5E0(v1744)) {
  mplew.StartNode("Mask - " + map.get(0x28BF790));//
  if (sub_42FF80(/* &v5264 */)) {
    v1745 = mplew.writeInt("v1745");
  }
  else {
    v1746 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1750 = Check_Buff(mask, 0x28BF7D8);//351
if (sub_42F5E0(v1750)) {
  mplew.StartNode("Mask - " + map.get(0x28BF7D8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1751 = mplew.writeInt("v1751");
  }
  else {
    v1752 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1756 = Check_Buff(mask, 0x28BF820);//352
if (sub_42F5E0(v1756)) {
  mplew.StartNode("Mask - " + map.get(0x28BF820));//
  if (sub_42FF80(/* &v5264 */)) {
    v1757 = mplew.writeInt("v1757");
  }
  else {
    v1758 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1762 = Check_Buff(mask, 0x28BF868);//353
if (sub_42F5E0(v1762)) {
  mplew.StartNode("Mask - " + map.get(0x28BF868));//
  if (sub_42FF80(/* &v5264 */)) {
    v1763 = mplew.writeInt("v1763");
  }
  else {
    v1764 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1768 = Check_Buff(mask, 0x28BF8B0);//355
if (sub_42F5E0(v1768)) {
  mplew.StartNode("Mask - " + map.get(0x28BF8B0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1769 = mplew.writeInt("v1769");
  }
  else {
    v1770 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1774 = Check_Buff(mask, 0x28BF8F8);//354
if (sub_42F5E0(v1774)) {
  mplew.StartNode("Mask - " + map.get(0x28BF8F8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1775 = mplew.writeInt("v1775");
  }
  else {
    v1776 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1780 = Check_Buff(mask, 0x28BF940);//146
if (sub_42F5E0(v1780)) {
  mplew.StartNode("Mask - " + map.get(0x28BF940));//
  if (sub_42FF80(/* &v5264 */)) {
    v1781 = mplew.writeInt("v1781");
  }
  else {
    v1782 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1786 = Check_Buff(mask, 0x28BF988);//356
if (sub_42F5E0(v1786)) {
  mplew.StartNode("Mask - " + map.get(0x28BF988));//
  if (sub_42FF80(/* &v5264 */)) {
    v1787 = mplew.writeInt("v1787");
  }
  else {
    v1788 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1792 = Check_Buff(mask, 0x28BA768);//357
if (sub_42F5E0(v1792)) {
  mplew.StartNode("Mask - " + map.get(0x28BA768));//
  if (sub_42FF80(/* &v5264 */)) {
    v1793 = mplew.writeInt("v1793");
  }
  else {
    v1794 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1798 = Check_Buff(mask, 0x28BA7B0);//358
if (sub_42F5E0(v1798)) {
  mplew.StartNode("Mask - " + map.get(0x28BA7B0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1799 = mplew.writeInt("v1799");
  }
  else {
    v1800 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1804 = Check_Buff(mask, 0x28BF9D0);//359
if (sub_42F5E0(v1804)) {
  mplew.StartNode("Mask - " + map.get(0x28BF9D0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1805 = mplew.writeInt("v1805");
  }
  else {
    v1806 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1810 = Check_Buff(mask, 0x28BFA18);//360
if (sub_42F5E0(v1810)) {
  mplew.StartNode("Mask - " + map.get(0x28BFA18));//
  if (sub_42FF80(/* &v5264 */)) {
    v1811 = mplew.writeInt("v1811");
  }
  else {
    v1812 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1816 = Check_Buff(mask, 0x28BA720);//361
if (sub_42F5E0(v1816)) {
  mplew.StartNode("Mask - " + map.get(0x28BA720));//
  if (sub_42FF80(/* &v5264 */)) {
    v1817 = mplew.writeInt("v1817");
  }
  else {
    v1818 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1822 = Check_Buff(mask, 0x28BFA60);//362
if (sub_42F5E0(v1822)) {
  mplew.StartNode("Mask - " + map.get(0x28BFA60));//
  if (sub_42FF80(/* &v5264 */)) {
    v1823 = mplew.writeInt("v1823");
  }
  else {
    v1824 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1828 = Check_Buff(mask, 0x28BFAA8);//363
if (sub_42F5E0(v1828)) {
  mplew.StartNode("Mask - " + map.get(0x28BFAA8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1829 = mplew.writeInt("v1829");
  }
  else {
    v1830 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1834 = Check_Buff(mask, 0x28BFAF0);//364
if (sub_42F5E0(v1834)) {
  mplew.StartNode("Mask - " + map.get(0x28BFAF0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1835 = mplew.writeInt("v1835");
  }
  else {
    v1836 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1840 = Check_Buff(mask, 0x28BFB38);//365
if (sub_42F5E0(v1840)) {
  mplew.StartNode("Mask - " + map.get(0x28BFB38));//
  if (sub_42FF80(/* &v5264 */)) {
    v1841 = mplew.writeInt("v1841");
  }
  else {
    v1842 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1846 = Check_Buff(mask, 0x28BFB80);//366
if (sub_42F5E0(v1846)) {
  mplew.StartNode("Mask - " + map.get(0x28BFB80));//
  if (sub_42FF80(/* &v5264 */)) {
    v1847 = mplew.writeInt("v1847");
  }
  else {
    v1848 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1852 = Check_Buff(mask, 0x28BFBC8);//367
if (sub_42F5E0(v1852)) {
  mplew.StartNode("Mask - " + map.get(0x28BFBC8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1853 = mplew.writeInt("v1853");
  }
  else {
    v1854 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1858 = Check_Buff(mask, 0x28BFC10);//368
if (sub_42F5E0(v1858)) {
  mplew.StartNode("Mask - " + map.get(0x28BFC10));//
  if (sub_42FF80(/* &v5264 */)) {
    v1859 = mplew.writeInt("v1859");
  }
  else {
    v1860 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1864 = Check_Buff(mask, 0x28BFC58);//369
if (sub_42F5E0(v1864)) {
  mplew.StartNode("Mask - " + map.get(0x28BFC58));//
  if (sub_42FF80(/* &v5264 */)) {
    v1865 = mplew.writeInt("v1865");
  }
  else {
    v1866 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1870 = Check_Buff(mask, 0x28BFCA0);//370
if (sub_42F5E0(v1870)) {
  mplew.StartNode("Mask - " + map.get(0x28BFCA0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1871 = mplew.writeInt("v1871");
  }
  else {
    v1872 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1876 = Check_Buff(mask, 0x28BFCE8);//371
if (sub_42F5E0(v1876)) {
  mplew.StartNode("Mask - " + map.get(0x28BFCE8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1877 = mplew.writeInt("v1877");
  }
  else {
    v1878 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1882 = Check_Buff(mask, 0x28BFD30);//372
if (sub_42F5E0(v1882)) {
  mplew.StartNode("Mask - " + map.get(0x28BFD30));//
  if (sub_42FF80(/* &v5264 */)) {
    v1883 = mplew.writeInt("v1883");
  }
  else {
    v1884 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1888 = Check_Buff(mask, 0x28BFD78);//373
if (sub_42F5E0(v1888)) {
  mplew.StartNode("Mask - " + map.get(0x28BFD78));//
  if (sub_42FF80(/* &v5264 */)) {
    v1889 = mplew.writeInt("v1889");
  }
  else {
    v1890 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1894 = Check_Buff(mask, 0x28BFDC0);//374
if (sub_42F5E0(v1894)) {
  mplew.StartNode("Mask - " + map.get(0x28BFDC0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1895 = mplew.writeInt("v1895");
  }
  else {
    v1896 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1900 = Check_Buff(mask, 0x28BFE08);//375
if (sub_42F5E0(v1900)) {
  mplew.StartNode("Mask - " + map.get(0x28BFE08));//
  if (sub_42FF80(/* &v5264 */)) {
    v1901 = mplew.writeInt("v1901");
  }
  else {
    v1902 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1906 = Check_Buff(mask, 0x28BFE50);//376
if (sub_42F5E0(v1906)) {
  mplew.StartNode("Mask - " + map.get(0x28BFE50));//
  if (sub_42FF80(/* &v5264 */)) {
    v1907 = mplew.writeInt("v1907");
  }
  else {
    v1908 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1912 = Check_Buff(mask, 0x28BFE98);//377
if (sub_42F5E0(v1912)) {
  mplew.StartNode("Mask - " + map.get(0x28BFE98));//
  if (sub_42FF80(/* &v5264 */)) {
    v1913 = mplew.writeInt("v1913");
  }
  else {
    v1914 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1918 = Check_Buff(mask, 0x28BFEE0);//379
if (sub_42F5E0(v1918)) {
  mplew.StartNode("Mask - " + map.get(0x28BFEE0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1919 = mplew.writeInt("v1919");
  }
  else {
    v1920 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1924 = Check_Buff(mask, 0x28BFF28);//380
if (sub_42F5E0(v1924)) {
  mplew.StartNode("Mask - " + map.get(0x28BFF28));//
  if (sub_42FF80(/* &v5264 */)) {
    v1925 = mplew.writeInt("v1925");
  }
  else {
    v1926 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1930 = Check_Buff(mask, 0x28BFF70);//381
if (sub_42F5E0(v1930)) {
  mplew.StartNode("Mask - " + map.get(0x28BFF70));//
  if (sub_42FF80(/* &v5264 */)) {
    v1931 = mplew.writeInt("v1931");
  }
  else {
    v1932 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1936 = Check_Buff(mask, 0x28BFFB8);//382
if (sub_42F5E0(v1936)) {
  mplew.StartNode("Mask - " + map.get(0x28BFFB8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1937 = mplew.writeInt("v1937");
  }
  else {
    v1938 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1942 = Check_Buff(mask, 0x28C0000);//383
if (sub_42F5E0(v1942)) {
  mplew.StartNode("Mask - " + map.get(0x28C0000));//
  if (sub_42FF80(/* &v5264 */)) {
    v1943 = mplew.writeInt("v1943");
  }
  else {
    v1944 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1948 = Check_Buff(mask, 0x28C0048);//384
if (sub_42F5E0(v1948)) {
  mplew.StartNode("Mask - " + map.get(0x28C0048));//
  if (sub_42FF80(/* &v5264 */)) {
    v1949 = mplew.writeInt("v1949");
  }
  else {
    v1950 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1954 = Check_Buff(mask, 0x28C0090);//385
if (sub_42F5E0(v1954)) {
  mplew.StartNode("Mask - " + map.get(0x28C0090));//
  if (sub_42FF80(/* &v5264 */)) {
    v1955 = mplew.writeInt("v1955");
  }
  else {
    v1956 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1960 = Check_Buff(mask, 0x28C00D8);//386
if (sub_42F5E0(v1960)) {
  mplew.StartNode("Mask - " + map.get(0x28C00D8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1961 = mplew.writeInt("v1961");
  }
  else {
    v1962 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1966 = Check_Buff(mask, 0x28C0120);//387
if (sub_42F5E0(v1966)) {
  mplew.StartNode("Mask - " + map.get(0x28C0120));//
  if (sub_42FF80(/* &v5264 */)) {
    v1967 = mplew.writeInt("v1967");
  }
  else {
    v1968 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1972 = Check_Buff(mask, 0x28C0168);//388
if (sub_42F5E0(v1972)) {
  mplew.StartNode("Mask - " + map.get(0x28C0168));//
  if (sub_42FF80(/* &v5264 */)) {
    v1973 = mplew.writeInt("v1973");
  }
  else {
    v1974 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1978 = Check_Buff(mask, 0x28C01B0);//389
if (sub_42F5E0(v1978)) {
  mplew.StartNode("Mask - " + map.get(0x28C01B0));//
  if (sub_42FF80(/* &v5264 */)) {
    v1979 = mplew.writeInt("v1979");
  }
  else {
    v1980 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1984 = Check_Buff(mask, 0x28C01F8);//390
if (sub_42F5E0(v1984)) {
  mplew.StartNode("Mask - " + map.get(0x28C01F8));//
  if (sub_42FF80(/* &v5264 */)) {
    v1985 = mplew.writeInt("v1985");
  }
  else {
    v1986 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1990 = Check_Buff(mask, 0x28C0240);//391
if (sub_42F5E0(v1990)) {
  mplew.StartNode("Mask - " + map.get(0x28C0240));//
  if (sub_42FF80(/* &v5264 */)) {
    v1991 = mplew.writeInt("v1991");
  }
  else {
    v1992 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v1996 = Check_Buff(mask, 0x28C0288);//394
if (sub_42F5E0(v1996)) {
  mplew.StartNode("Mask - " + map.get(0x28C0288));//
  if (sub_42FF80(/* &v5264 */)) {
    v1997 = mplew.writeInt("v1997");
  }
  else {
    v1998 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2002 = Check_Buff(mask, 0x28C02D0);//395
if (sub_42F5E0(v2002)) {
  mplew.StartNode("Mask - " + map.get(0x28C02D0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2003 = mplew.writeInt("v2003");
  }
  else {
    v2004 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2008 = Check_Buff(mask, 0x28C0318);//396
if (sub_42F5E0(v2008)) {
  mplew.StartNode("Mask - " + map.get(0x28C0318));//
  if (sub_42FF80(/* &v5264 */)) {
    v2009 = mplew.writeInt("v2009");
  }
  else {
    v2010 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2014 = Check_Buff(mask, 0x28C0360);//397
if (sub_42F5E0(v2014)) {
  mplew.StartNode("Mask - " + map.get(0x28C0360));//
  if (sub_42FF80(/* &v5264 */)) {
    v2015 = mplew.writeInt("v2015");
  }
  else {
    v2016 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2020 = Check_Buff(mask, 0x28C03A8);//398
if (sub_42F5E0(v2020)) {
  mplew.StartNode("Mask - " + map.get(0x28C03A8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2021 = mplew.writeInt("v2021");
  }
  else {
    v2022 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2026 = Check_Buff(mask, 0x28C03F0);//399
if (sub_42F5E0(v2026)) {
  mplew.StartNode("Mask - " + map.get(0x28C03F0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2027 = mplew.writeInt("v2027");
  }
  else {
    v2028 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2032 = Check_Buff(mask, 0x28C0438);//403
if (sub_42F5E0(v2032)) {
  mplew.StartNode("Mask - " + map.get(0x28C0438));//
  if (sub_42FF80(/* &v5264 */)) {
    v2033 = mplew.writeInt("v2033");
  }
  else {
    v2034 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2038 = Check_Buff(mask, 0x28C0480);//404
if (sub_42F5E0(v2038)) {
  mplew.StartNode("Mask - " + map.get(0x28C0480));//
  if (sub_42FF80(/* &v5264 */)) {
    v2039 = mplew.writeInt("v2039");
  }
  else {
    v2040 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2044 = Check_Buff(mask, 0x28C04C8);//405
if (sub_42F5E0(v2044)) {
  mplew.StartNode("Mask - " + map.get(0x28C04C8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2045 = mplew.writeInt("v2045");
  }
  else {
    v2046 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2050 = Check_Buff(mask, 0x28C0510);//406
if (sub_42F5E0(v2050)) {
  mplew.StartNode("Mask - " + map.get(0x28C0510));//
  if (sub_42FF80(/* &v5264 */)) {
    v2051 = mplew.writeInt("v2051");
  }
  else {
    v2052 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2056 = Check_Buff(mask, 0x28C0558);//407
if (sub_42F5E0(v2056)) {
  mplew.StartNode("Mask - " + map.get(0x28C0558));//
  if (sub_42FF80(/* &v5264 */)) {
    v2057 = mplew.writeInt("v2057");
  }
  else {
    v2058 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2062 = Check_Buff(mask, 0x28C05A0);//408
if (sub_42F5E0(v2062)) {
  mplew.StartNode("Mask - " + map.get(0x28C05A0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2063 = mplew.writeInt("v2063");
  }
  else {
    v2064 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2068 = Check_Buff(mask, 0x28C05E8);//409
if (sub_42F5E0(v2068)) {
  mplew.StartNode("Mask - " + map.get(0x28C05E8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2069 = mplew.writeInt("v2069");
  }
  else {
    v2070 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2074 = Check_Buff(mask, 0x28C0630);//410
if (sub_42F5E0(v2074)) {
  mplew.StartNode("Mask - " + map.get(0x28C0630));//
  if (sub_42FF80(/* &v5264 */)) {
    v2075 = mplew.writeInt("v2075");
  }
  else {
    v2076 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2080 = Check_Buff(mask, 0x28C0678);//414
if (sub_42F5E0(v2080)) {
  mplew.StartNode("Mask - " + map.get(0x28C0678));//
  if (sub_42FF80(/* &v5264 */)) {
    v2081 = mplew.writeInt("v2081");
  }
  else {
    v2082 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2086 = Check_Buff(mask, 0x28C06C0);//392
if (sub_42F5E0(v2086)) {
  mplew.StartNode("Mask - " + map.get(0x28C06C0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2087 = mplew.writeInt("v2087");
  }
  else {
    v2088 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2092 = Check_Buff(mask, 0x28C0708);//393
if (sub_42F5E0(v2092)) {
  mplew.StartNode("Mask - " + map.get(0x28C0708));//
  if (sub_42FF80(/* &v5264 */)) {
    v2093 = mplew.writeInt("v2093");
  }
  else {
    v2094 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2098 = Check_Buff(mask, 0x28C0750);//411
if (sub_42F5E0(v2098)) {
  mplew.StartNode("Mask - " + map.get(0x28C0750));//
  if (sub_42FF80(/* &v5264 */)) {
    v2099 = mplew.writeInt("v2099");
  }
  else {
    v2100 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2104 = Check_Buff(mask, 0x28C0798);//413
if (sub_42F5E0(v2104)) {
  mplew.StartNode("Mask - " + map.get(0x28C0798));//
  if (sub_42FF80(/* &v5264 */)) {
    v2105 = mplew.writeInt("v2105");
  }
  else {
    v2106 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2110 = Check_Buff(mask, 0x28C07E0);//476
if (sub_42F5E0(v2110)) {
  mplew.StartNode("Mask - " + map.get(0x28C07E0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2111 = mplew.writeInt("v2111");
  }
  else {
    v2112 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2116 = Check_Buff(mask, 0x28C0828);//415
if (sub_42F5E0(v2116)) {
  mplew.StartNode("Mask - " + map.get(0x28C0828));//
  if (sub_42FF80(/* &v5264 */)) {
    v2117 = mplew.writeInt("v2117");
  }
  else {
    v2118 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2122 = Check_Buff(mask, 0x28C0870);//416
if (sub_42F5E0(v2122)) {
  mplew.StartNode("Mask - " + map.get(0x28C0870));//
  if (sub_42FF80(/* &v5264 */)) {
    v2123 = mplew.writeInt("v2123");
  }
  else {
    v2124 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2128 = Check_Buff(mask, 0x28C08B8);//417
if (sub_42F5E0(v2128)) {
  mplew.StartNode("Mask - " + map.get(0x28C08B8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2129 = mplew.writeInt("v2129");
  }
  else {
    v2130 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2134 = Check_Buff(mask, 0x28C0900);//418
if (sub_42F5E0(v2134)) {
  mplew.StartNode("Mask - " + map.get(0x28C0900));//
  if (sub_42FF80(/* &v5264 */)) {
    v2135 = mplew.writeInt("v2135");
  }
  else {
    v2136 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2140 = Check_Buff(mask, 0x28C0948);//419
if (sub_42F5E0(v2140)) {
  mplew.StartNode("Mask - " + map.get(0x28C0948));//
  if (sub_42FF80(/* &v5264 */)) {
    v2141 = mplew.writeInt("v2141");
  }
  else {
    v2142 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2146 = Check_Buff(mask, 0x28C0990);//420
if (sub_42F5E0(v2146)) {
  mplew.StartNode("Mask - " + map.get(0x28C0990));//
  if (sub_42FF80(/* &v5264 */)) {
    v2147 = mplew.writeInt("v2147");
  }
  else {
    v2148 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2152 = Check_Buff(mask, 0x28C09D8);//421
if (sub_42F5E0(v2152)) {
  mplew.StartNode("Mask - " + map.get(0x28C09D8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2153 = mplew.writeInt("v2153");
  }
  else {
    v2154 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2158 = Check_Buff(mask, 0x28C0A20);//422
if (sub_42F5E0(v2158)) {
  mplew.StartNode("Mask - " + map.get(0x28C0A20));//
  if (sub_42FF80(/* &v5264 */)) {
    v2159 = mplew.writeInt("v2159");
  }
  else {
    v2160 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2164 = Check_Buff(mask, 0x28C0A68);//423
if (sub_42F5E0(v2164)) {
  mplew.StartNode("Mask - " + map.get(0x28C0A68));//
  if (sub_42FF80(/* &v5264 */)) {
    v2165 = mplew.writeInt("v2165");
  }
  else {
    v2166 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2170 = Check_Buff(mask, 0x28C0AB0);//424
if (sub_42F5E0(v2170)) {
  mplew.StartNode("Mask - " + map.get(0x28C0AB0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2171 = mplew.writeInt("v2171");
  }
  else {
    v2172 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2176 = Check_Buff(mask, 0x28C0AF8);//425
if (sub_42F5E0(v2176)) {
  mplew.StartNode("Mask - " + map.get(0x28C0AF8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2177 = mplew.writeInt("v2177");
  }
  else {
    v2178 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2182 = Check_Buff(mask, 0x28C0B40);//426
if (sub_42F5E0(v2182)) {
  mplew.StartNode("Mask - " + map.get(0x28C0B40));//
  if (sub_42FF80(/* &v5264 */)) {
    v2183 = mplew.writeInt("v2183");
  }
  else {
    v2184 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2188 = Check_Buff(mask, 0x28C0B88);//427
if (sub_42F5E0(v2188)) {
  mplew.StartNode("Mask - " + map.get(0x28C0B88));//
  if (sub_42FF80(/* &v5264 */)) {
    v2189 = mplew.writeInt("v2189");
  }
  else {
    v2190 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2194 = Check_Buff(mask, 0x28C0BD0);//428
if (sub_42F5E0(v2194)) {
  mplew.StartNode("Mask - " + map.get(0x28C0BD0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2195 = mplew.writeInt("v2195");
  }
  else {
    v2196 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2200 = Check_Buff(mask, 0x28C0C18);//429
if (sub_42F5E0(v2200)) {
  mplew.StartNode("Mask - " + map.get(0x28C0C18));//
  if (sub_42FF80(/* &v5264 */)) {
    v2201 = mplew.writeInt("v2201");
  }
  else {
    v2202 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2206 = Check_Buff(mask, 0x28C0C60);//430
if (sub_42F5E0(v2206)) {
  mplew.StartNode("Mask - " + map.get(0x28C0C60));//
  if (sub_42FF80(/* &v5264 */)) {
    v2207 = mplew.writeInt("v2207");
  }
  else {
    v2208 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2212 = Check_Buff(mask, 0x28C0CA8);//431
if (sub_42F5E0(v2212)) {
  mplew.StartNode("Mask - " + map.get(0x28C0CA8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2213 = mplew.writeInt("v2213");
  }
  else {
    v2214 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2218 = Check_Buff(mask, 0x28C0CF0);//432
if (sub_42F5E0(v2218)) {
  mplew.StartNode("Mask - " + map.get(0x28C0CF0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2219 = mplew.writeInt("v2219");
  }
  else {
    v2220 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2224 = Check_Buff(mask, 0x28C0D38);//433
if (sub_42F5E0(v2224)) {
  mplew.StartNode("Mask - " + map.get(0x28C0D38));//
  if (sub_42FF80(/* &v5264 */)) {
    v2225 = mplew.writeInt("v2225");
  }
  else {
    v2226 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2230 = Check_Buff(mask, 0x28C0D80);//434
if (sub_42F5E0(v2230)) {
  mplew.StartNode("Mask - " + map.get(0x28C0D80));//
  if (sub_42FF80(/* &v5264 */)) {
    v2231 = mplew.writeInt("v2231");
  }
  else {
    v2232 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2236 = Check_Buff(mask, 0x28C0DC8);//435
if (sub_42F5E0(v2236)) {
  mplew.StartNode("Mask - " + map.get(0x28C0DC8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2237 = mplew.writeInt("v2237");
  }
  else {
    v2238 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2242 = Check_Buff(mask, 0x28C0E10);//436
if (sub_42F5E0(v2242)) {
  mplew.StartNode("Mask - " + map.get(0x28C0E10));//
  if (sub_42FF80(/* &v5264 */)) {
    v2243 = mplew.writeInt("v2243");
  }
  else {
    v2244 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2248 = Check_Buff(mask, 0x28C0E58);//437
if (sub_42F5E0(v2248)) {
  mplew.StartNode("Mask - " + map.get(0x28C0E58));//
  if (sub_42FF80(/* &v5264 */)) {
    v2249 = mplew.writeInt("v2249");
  }
  else {
    v2250 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2254 = Check_Buff(mask, 0x28C0EA0);//438
if (sub_42F5E0(v2254)) {
  mplew.StartNode("Mask - " + map.get(0x28C0EA0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2255 = mplew.writeInt("v2255");
  }
  else {
    v2256 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2260 = Check_Buff(mask, 0x28C0EE8);//439
if (sub_42F5E0(v2260)) {
  mplew.StartNode("Mask - " + map.get(0x28C0EE8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2261 = mplew.writeInt("v2261");
  }
  else {
    v2262 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2266 = Check_Buff(mask, 0x28C0F30);//400
if (sub_42F5E0(v2266)) {
  mplew.StartNode("Mask - " + map.get(0x28C0F30));//
  if (sub_42FF80(/* &v5264 */)) {
    v2267 = mplew.writeInt("v2267");
  }
  else {
    v2268 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2272 = Check_Buff(mask, 0x28C0F78);//401
if (sub_42F5E0(v2272)) {
  mplew.StartNode("Mask - " + map.get(0x28C0F78));//
  if (sub_42FF80(/* &v5264 */)) {
    v2273 = mplew.writeInt("v2273");
  }
  else {
    v2274 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2278 = Check_Buff(mask, 0x28C0FC0);//440
if (sub_42F5E0(v2278)) {
  mplew.StartNode("Mask - " + map.get(0x28C0FC0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2279 = mplew.writeInt("v2279");
  }
  else {
    v2280 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2284 = Check_Buff(mask, 0x28C1008);//441
if (sub_42F5E0(v2284)) {
  mplew.StartNode("Mask - " + map.get(0x28C1008));//
  if (sub_42FF80(/* &v5264 */)) {
    v2285 = mplew.writeInt("v2285");
  }
  else {
    v2286 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2290 = Check_Buff(mask, 0x28C1050);//442
if (sub_42F5E0(v2290)) {
  mplew.StartNode("Mask - " + map.get(0x28C1050));//
  if (sub_42FF80(/* &v5264 */)) {
    v2291 = mplew.writeInt("v2291");
  }
  else {
    v2292 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2296 = Check_Buff(mask, 0x28BA570);//443
if (sub_42F5E0(v2296)) {
  mplew.StartNode("Mask - " + map.get(0x28BA570));//
  if (sub_42FF80(/* &v5264 */)) {
    v2297 = mplew.writeInt("v2297");
  }
  else {
    v2298 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2302 = Check_Buff(mask, 0x28C1098);//444
if (sub_42F5E0(v2302)) {
  mplew.StartNode("Mask - " + map.get(0x28C1098));//
  if (sub_42FF80(/* &v5264 */)) {
    v2303 = mplew.writeInt("v2303");
  }
  else {
    v2304 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2308 = Check_Buff(mask, 0x28C10E0);//445
if (sub_42F5E0(v2308)) {
  mplew.StartNode("Mask - " + map.get(0x28C10E0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2309 = mplew.writeInt("v2309");
  }
  else {
    v2310 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2314 = Check_Buff(mask, 0x28C1128);//446
if (sub_42F5E0(v2314)) {
  mplew.StartNode("Mask - " + map.get(0x28C1128));//
  if (sub_42FF80(/* &v5264 */)) {
    v2315 = mplew.writeInt("v2315");
  }
  else {
    v2316 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2320 = Check_Buff(mask, 0x28C1170);//447
if (sub_42F5E0(v2320)) {
  mplew.StartNode("Mask - " + map.get(0x28C1170));//
  if (sub_42FF80(/* &v5264 */)) {
    v2321 = mplew.writeInt("v2321");
  }
  else {
    v2322 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2326 = Check_Buff(mask, 0x28C11B8);//448
if (sub_42F5E0(v2326)) {
  mplew.StartNode("Mask - " + map.get(0x28C11B8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2327 = mplew.writeInt("v2327");
  }
  else {
    v2328 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2332 = Check_Buff(mask, 0x28C1200);//449
if (sub_42F5E0(v2332)) {
  mplew.StartNode("Mask - " + map.get(0x28C1200));//
  if (sub_42FF80(/* &v5264 */)) {
    v2333 = mplew.writeInt("v2333");
  }
  else {
    v2334 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2338 = Check_Buff(mask, 0x28C1248);//450
if (sub_42F5E0(v2338)) {
  mplew.StartNode("Mask - " + map.get(0x28C1248));//
  if (sub_42FF80(/* &v5264 */)) {
    v2339 = mplew.writeInt("v2339");
  }
  else {
    v2340 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2344 = Check_Buff(mask, 0x28C1290);//451
if (sub_42F5E0(v2344)) {
  mplew.StartNode("Mask - " + map.get(0x28C1290));//
  if (sub_42FF80(/* &v5264 */)) {
    v2345 = mplew.writeInt("v2345");
  }
  else {
    v2346 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2350 = Check_Buff(mask, 0x28C12D8);//452
if (sub_42F5E0(v2350)) {
  mplew.StartNode("Mask - " + map.get(0x28C12D8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2351 = mplew.writeInt("v2351");
  }
  else {
    v2352 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2356 = Check_Buff(mask, 0x28C1320);//453
if (sub_42F5E0(v2356)) {
  mplew.StartNode("Mask - " + map.get(0x28C1320));//
  if (sub_42FF80(/* &v5264 */)) {
    v2357 = mplew.writeInt("v2357");
  }
  else {
    v2358 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2362 = Check_Buff(mask, 0x28C1368);//455
if (sub_42F5E0(v2362)) {
  mplew.StartNode("Mask - " + map.get(0x28C1368));//
  if (sub_42FF80(/* &v5264 */)) {
    v2363 = mplew.writeInt("v2363");
  }
  else {
    v2364 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2368 = Check_Buff(mask, 0x28C13B0);//456
if (sub_42F5E0(v2368)) {
  mplew.StartNode("Mask - " + map.get(0x28C13B0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2369 = mplew.writeInt("v2369");
  }
  else {
    v2370 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2374 = Check_Buff(mask, 0x28C13F8);//457
if (sub_42F5E0(v2374)) {
  mplew.StartNode("Mask - " + map.get(0x28C13F8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2375 = mplew.writeInt("v2375");
  }
  else {
    v2376 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2380 = Check_Buff(mask, 0x28C1440);//458
if (sub_42F5E0(v2380)) {
  mplew.StartNode("Mask - " + map.get(0x28C1440));//
  if (sub_42FF80(/* &v5264 */)) {
    v2381 = mplew.writeInt("v2381");
  }
  else {
    v2382 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2386 = Check_Buff(mask, 0x28C1488);//459
if (sub_42F5E0(v2386)) {
  mplew.StartNode("Mask - " + map.get(0x28C1488));//
  if (sub_42FF80(/* &v5264 */)) {
    v2387 = mplew.writeInt("v2387");
  }
  else {
    v2388 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2392 = Check_Buff(mask, 0x28C14D0);//460
if (sub_42F5E0(v2392)) {
  mplew.StartNode("Mask - " + map.get(0x28C14D0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2393 = mplew.writeInt("v2393");
  }
  else {
    v2394 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2398 = Check_Buff(mask, 0x28C1518);//461
if (sub_42F5E0(v2398)) {
  mplew.StartNode("Mask - " + map.get(0x28C1518));//
  if (sub_42FF80(/* &v5264 */)) {
    v2399 = mplew.writeInt("v2399");
  }
  else {
    v2400 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2404 = Check_Buff(mask, 0x28C1560);//462
if (sub_42F5E0(v2404)) {
  mplew.StartNode("Mask - " + map.get(0x28C1560));//
  if (sub_42FF80(/* &v5264 */)) {
    v2405 = mplew.writeInt("v2405");
  }
  else {
    v2406 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2410 = Check_Buff(mask, 0x28C15A8);//463
if (sub_42F5E0(v2410)) {
  mplew.StartNode("Mask - " + map.get(0x28C15A8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2411 = mplew.writeInt("v2411");
  }
  else {
    v2412 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2416 = Check_Buff(mask, 0x28C15F0);//464
if (sub_42F5E0(v2416)) {
  mplew.StartNode("Mask - " + map.get(0x28C15F0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2417 = mplew.writeInt("v2417");
  }
  else {
    v2418 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2422 = Check_Buff(mask, 0x28C1638);//465
if (sub_42F5E0(v2422)) {
  mplew.StartNode("Mask - " + map.get(0x28C1638));//
  if (sub_42FF80(/* &v5264 */)) {
    v2423 = mplew.writeInt("v2423");
  }
  else {
    v2424 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2428 = Check_Buff(mask, 0x28C1680);//466
if (sub_42F5E0(v2428)) {
  mplew.StartNode("Mask - " + map.get(0x28C1680));//
  if (sub_42FF80(/* &v5264 */)) {
    v2429 = mplew.writeInt("v2429");
  }
  else {
    v2430 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2434 = Check_Buff(mask, 0x28C16C8);//467
if (sub_42F5E0(v2434)) {
  mplew.StartNode("Mask - " + map.get(0x28C16C8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2435 = mplew.writeInt("v2435");
  }
  else {
    v2436 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2440 = Check_Buff(mask, 0x28C1710);//468
if (sub_42F5E0(v2440)) {
  mplew.StartNode("Mask - " + map.get(0x28C1710));//
  if (sub_42FF80(/* &v5264 */)) {
    v2441 = mplew.writeInt("v2441");
  }
  else {
    v2442 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2446 = Check_Buff(mask, 0x28C1758);//469
if (sub_42F5E0(v2446)) {
  mplew.StartNode("Mask - " + map.get(0x28C1758));//
  if (sub_42FF80(/* &v5264 */)) {
    v2447 = mplew.writeInt("v2447");
  }
  else {
    v2448 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2452 = Check_Buff(mask, 0x28C17A0);//470
if (sub_42F5E0(v2452)) {
  mplew.StartNode("Mask - " + map.get(0x28C17A0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2453 = mplew.writeInt("v2453");
  }
  else {
    v2454 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2458 = Check_Buff(mask, 0x28BA918);//402
if (sub_42F5E0(v2458)) {
  mplew.StartNode("Mask - " + map.get(0x28BA918));//
  if (sub_42FF80(/* &v5264 */)) {
    v2459 = mplew.writeInt("v2459");
  }
  else {
    v2460 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2464 = Check_Buff(mask, 0x28C17E8);//471
if (sub_42F5E0(v2464)) {
  mplew.StartNode("Mask - " + map.get(0x28C17E8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2465 = mplew.writeInt("v2465");
  }
  else {
    v2466 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2470 = Check_Buff(mask, 0x28C1830);//472
if (sub_42F5E0(v2470)) {
  mplew.StartNode("Mask - " + map.get(0x28C1830));//
  if (sub_42FF80(/* &v5264 */)) {
    v2471 = mplew.writeInt("v2471");
  }
  else {
    v2472 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2476 = Check_Buff(mask, 0x28C1878);//473
if (sub_42F5E0(v2476)) {
  mplew.StartNode("Mask - " + map.get(0x28C1878));//
  if (sub_42FF80(/* &v5264 */)) {
    v2477 = mplew.writeInt("v2477");
  }
  else {
    v2478 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2482 = Check_Buff(mask, 0x28C18C0);//474
if (sub_42F5E0(v2482)) {
  mplew.StartNode("Mask - " + map.get(0x28C18C0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2483 = mplew.writeInt("v2483");
  }
  else {
    v2484 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2488 = Check_Buff(mask, 0x28C1908);//475
if (sub_42F5E0(v2488)) {
  mplew.StartNode("Mask - " + map.get(0x28C1908));//
  if (sub_42FF80(/* &v5264 */)) {
    v2489 = mplew.writeInt("v2489");
  }
  else {
    v2490 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2494 = Check_Buff(mask, 0x28C1950);//477
if (sub_42F5E0(v2494)) {
  mplew.StartNode("Mask - " + map.get(0x28C1950));//
  if (sub_42FF80(/* &v5264 */)) {
    v2495 = mplew.writeInt("v2495");
  }
  else {
    v2496 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2500 = Check_Buff(mask, 0x28C1998);//478
if (sub_42F5E0(v2500)) {
  mplew.StartNode("Mask - " + map.get(0x28C1998));//
  if (sub_42FF80(/* &v5264 */)) {
    v2501 = mplew.writeInt("v2501");
  }
  else {
    v2502 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2506 = Check_Buff(mask, 0x28C19E0);//479
if (sub_42F5E0(v2506)) {
  mplew.StartNode("Mask - " + map.get(0x28C19E0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2507 = mplew.writeInt("v2507");
  }
  else {
    v2508 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2512 = Check_Buff(mask, 0x28C1A28);//480
if (sub_42F5E0(v2512)) {
  mplew.StartNode("Mask - " + map.get(0x28C1A28));//
  if (sub_42FF80(/* &v5264 */)) {
    v2513 = mplew.writeInt("v2513");
  }
  else {
    v2514 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2518 = Check_Buff(mask, 0x28C1A70);//481
if (sub_42F5E0(v2518)) {
  mplew.StartNode("Mask - " + map.get(0x28C1A70));//
  if (sub_42FF80(/* &v5264 */)) {
    v2519 = mplew.writeInt("v2519");
  }
  else {
    v2520 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2524 = Check_Buff(mask, 0x28C1AB8);//499
if (sub_42F5E0(v2524)) {
  mplew.StartNode("Mask - " + map.get(0x28C1AB8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2525 = mplew.writeInt("v2525");
  }
  else {
    v2526 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2530 = Check_Buff(mask, 0x28C1B00);//501
if (sub_42F5E0(v2530)) {
  mplew.StartNode("Mask - " + map.get(0x28C1B00));//
  if (sub_42FF80(/* &v5264 */)) {
    v2531 = mplew.writeInt("v2531");
  }
  else {
    v2532 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2536 = Check_Buff(mask, 0x28C1B48);//502
if (sub_42F5E0(v2536)) {
  mplew.StartNode("Mask - " + map.get(0x28C1B48));//
  if (sub_42FF80(/* &v5264 */)) {
    v2537 = mplew.writeInt("v2537");
  }
  else {
    v2538 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2542 = Check_Buff(mask, 0x28C1B90);//503
if (sub_42F5E0(v2542)) {
  mplew.StartNode("Mask - " + map.get(0x28C1B90));//
  if (sub_42FF80(/* &v5264 */)) {
    v2543 = mplew.writeInt("v2543");
  }
  else {
    v2544 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2548 = Check_Buff(mask, 0x28C1BD8);//482
if (sub_42F5E0(v2548)) {
  mplew.StartNode("Mask - " + map.get(0x28C1BD8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2549 = mplew.writeInt("v2549");
  }
  else {
    v2550 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2554 = Check_Buff(mask, 0x28BA7F8);//262
if (sub_42F5E0(v2554)) {
  mplew.StartNode("Mask - " + map.get(0x28BA7F8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2555 = mplew.writeInt("v2555");
  }
  else {
    v2556 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2560 = Check_Buff(mask, 0x28C1C20);//483
if (sub_42F5E0(v2560)) {
  mplew.StartNode("Mask - " + map.get(0x28C1C20));//
  if (sub_42FF80(/* &v5264 */)) {
    v2561 = mplew.writeInt("v2561");
  }
  else {
    v2562 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2566 = Check_Buff(mask, 0x28C1C68);//484
if (sub_42F5E0(v2566)) {
  mplew.StartNode("Mask - " + map.get(0x28C1C68));//
  if (sub_42FF80(/* &v5264 */)) {
    v2567 = mplew.writeInt("v2567");
  }
  else {
    v2568 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2572 = Check_Buff(mask, 0x28BA840);//505
if (sub_42F5E0(v2572)) {
  mplew.StartNode("Mask - " + map.get(0x28BA840));//
  if (sub_42FF80(/* &v5264 */)) {
    v2573 = mplew.writeInt("v2573");
  }
  else {
    v2574 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2578 = Check_Buff(mask, 0x28BA888);//506
if (sub_42F5E0(v2578)) {
  mplew.StartNode("Mask - " + map.get(0x28BA888));//
  if (sub_42FF80(/* &v5264 */)) {
    v2579 = mplew.writeInt("v2579");
  }
  else {
    v2580 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2584 = Check_Buff(mask, 0x28C1CB0);//507
if (sub_42F5E0(v2584)) {
  mplew.StartNode("Mask - " + map.get(0x28C1CB0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2585 = mplew.writeInt("v2585");
  }
  else {
    v2586 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2590 = Check_Buff(mask, 0x28C1CF8);//508
if (sub_42F5E0(v2590)) {
  mplew.StartNode("Mask - " + map.get(0x28C1CF8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2591 = mplew.writeInt("v2591");
  }
  else {
    v2592 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2596 = Check_Buff(mask, 0x28C1D40);//485
if (sub_42F5E0(v2596)) {
  mplew.StartNode("Mask - " + map.get(0x28C1D40));//
  if (sub_42FF80(/* &v5264 */)) {
    v2597 = mplew.writeInt("v2597");
  }
  else {
    v2598 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2602 = Check_Buff(mask, 0x28C1D88);//492
if (sub_42F5E0(v2602)) {
  mplew.StartNode("Mask - " + map.get(0x28C1D88));//
  if (sub_42FF80(/* &v5264 */)) {
    v2603 = mplew.writeInt("v2603");
  }
  else {
    v2604 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2608 = Check_Buff(mask, 0x28C1DD0);//486
if (sub_42F5E0(v2608)) {
  mplew.StartNode("Mask - " + map.get(0x28C1DD0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2609 = mplew.writeInt("v2609");
  }
  else {
    v2610 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2614 = Check_Buff(mask, 0x28C1E18);//488
if (sub_42F5E0(v2614)) {
  mplew.StartNode("Mask - " + map.get(0x28C1E18));//
  if (sub_42FF80(/* &v5264 */)) {
    v2615 = mplew.writeInt("v2615");
  }
  else {
    v2616 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2620 = Check_Buff(mask, 0x28C1E60);//489
if (sub_42F5E0(v2620)) {
  mplew.StartNode("Mask - " + map.get(0x28C1E60));//
  if (sub_42FF80(/* &v5264 */)) {
    v2621 = mplew.writeInt("v2621");
  }
  else {
    v2622 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2626 = Check_Buff(mask, 0x28C1EA8);//490
if (sub_42F5E0(v2626)) {
  mplew.StartNode("Mask - " + map.get(0x28C1EA8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2627 = mplew.writeInt("v2627");
  }
  else {
    v2628 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2632 = Check_Buff(mask, 0x28C1EF0);//491
if (sub_42F5E0(v2632)) {
  mplew.StartNode("Mask - " + map.get(0x28C1EF0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2633 = mplew.writeInt("v2633");
  }
  else {
    v2634 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2638 = Check_Buff(mask, 0x28C1F38);//493
if (sub_42F5E0(v2638)) {
  mplew.StartNode("Mask - " + map.get(0x28C1F38));//
  if (sub_42FF80(/* &v5264 */)) {
    v2639 = mplew.writeInt("v2639");
  }
  else {
    v2640 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2644 = Check_Buff(mask, 0x28C1F80);//494
if (sub_42F5E0(v2644)) {
  mplew.StartNode("Mask - " + map.get(0x28C1F80));//
  if (sub_42FF80(/* &v5264 */)) {
    v2645 = mplew.writeInt("v2645");
  }
  else {
    v2646 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2650 = Check_Buff(mask, 0x28C0F30);//400
if (sub_42F5E0(v2650)) {
  mplew.StartNode("Mask - " + map.get(0x28C0F30));//
  if (sub_42FF80(/* &v5264 */)) {
    v2651 = mplew.writeInt("v2651");
  }
  else {
    v2652 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2656 = Check_Buff(mask, 0x28C0F78);//401
if (sub_42F5E0(v2656)) {
  mplew.StartNode("Mask - " + map.get(0x28C0F78));//
  if (sub_42FF80(/* &v5264 */)) {
    v2657 = mplew.writeInt("v2657");
  }
  else {
    v2658 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2662 = Check_Buff(mask, 0x28C1FC8);//495
if (sub_42F5E0(v2662)) {
  mplew.StartNode("Mask - " + map.get(0x28C1FC8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2663 = mplew.writeInt("v2663");
  }
  else {
    v2664 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2668 = Check_Buff(mask, 0x28C2010);//496
if (sub_42F5E0(v2668)) {
  mplew.StartNode("Mask - " + map.get(0x28C2010));//
  if (sub_42FF80(/* &v5264 */)) {
    v2669 = mplew.writeInt("v2669");
  }
  else {
    v2670 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2674 = Check_Buff(mask, 0x28C0E10);//436
if (sub_42F5E0(v2674)) {
  mplew.StartNode("Mask - " + map.get(0x28C0E10));//
  if (sub_42FF80(/* &v5264 */)) {
    v2675 = mplew.writeInt("v2675");
  }
  else {
    v2676 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2680 = Check_Buff(mask, 0x28C2058);//487
if (sub_42F5E0(v2680)) {
  mplew.StartNode("Mask - " + map.get(0x28C2058));//
  if (sub_42FF80(/* &v5264 */)) {
    v2681 = mplew.writeInt("v2681");
  }
  else {
    v2682 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2686 = Check_Buff(mask, 0x28C20A0);//497
if (sub_42F5E0(v2686)) {
  mplew.StartNode("Mask - " + map.get(0x28C20A0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2687 = mplew.writeInt("v2687");
  }
  else {
    v2688 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2692 = Check_Buff(mask, 0x28C20E8);//512
if (sub_42F5E0(v2692)) {
  mplew.StartNode("Mask - " + map.get(0x28C20E8));//
  if (sub_42FF80(/* &v5264 */)) {
    v2693 = mplew.writeInt("v2693");
  }
  else {
    v2694 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2698 = Check_Buff(mask, 0x28C2130);//513
if (sub_42F5E0(v2698)) {
  mplew.StartNode("Mask - " + map.get(0x28C2130));//
  if (sub_42FF80(/* &v5264 */)) {
    v2699 = mplew.writeInt("v2699");
  }
  else {
    v2700 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2704 = Check_Buff(mask, 0x28C2178);//514
if (sub_42F5E0(v2704)) {
  mplew.StartNode("Mask - " + map.get(0x28C2178));//
  if (sub_42FF80(/* &v5264 */)) {
    v2705 = mplew.writeInt("v2705");
  }
  else {
    v2706 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2710 = Check_Buff(mask, 0x28C21C0);//515
if (sub_42F5E0(v2710)) {
  mplew.StartNode("Mask - " + map.get(0x28C21C0));//
  if (sub_42FF80(/* &v5264 */)) {
    v2711 = mplew.writeInt("v2711");
  }
  else {
    v2712 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2716 = Check_Buff(mask, 0x28C2208);//516
if (sub_42F5E0(v2716)) {
  mplew.StartNode("Mask - " + map.get(0x28C2208));//
  if (sub_42FF80(/* &v5264 */)) {
    v2717 = mplew.writeInt("v2717");
  }
  else {
    v2718 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2722 = Check_Buff(mask, 0x28C2250);//517
if (sub_42F5E0(v2722)) {
  mplew.StartNode("Mask - " + map.get(0x28C2250));//
  if (sub_42FF80(/* &v5264 */)) {
    v2723 = mplew.writeInt("v2723");
  }
  else {
    v2724 = mplew.writeShort("");
  }
  v5265 = mplew.writeInt("v5265");
  v5266 = mplew.writeInt("v5266");
  mplew.EndNode(false);
}
v2728 = Check_Buff(mask, 0x28BE860);//325
if (sub_42F5E0(v2728)) {
  mplew.StartNode("Mask - " + map.get(0x28BE860));//
  v2729 = mplew.writeInt("v2729");
  v2730 = mplew.writeInt("v2730");
  mplew.EndNode(false);
}
v2731 = Check_Buff(mask, 0x28BE8A8);//326
if (sub_42F5E0(v2731)) {
  mplew.StartNode("Mask - " + map.get(0x28BE8A8));//
  // v2732 = timeGetTime();
  v2733 = mplew.writeInt("v2733");
  mplew.EndNode(false);
}
v2734 = mplew.writeShort("");
v5263 = v2734;
for (i = 0; i < v5263; ++i) {
  v4805 = mplew.writeInt("v4805");
  v4803 = mplew.write("v4803");
}
v2736 = Check_Buff(mask, 0x28C1D40);//485
if (sub_42F5E0(v2736)) {
  v2737 = mplew.writeInt("v2737");
  // sub_445AC0(v3351, v2737);
}
// sub_446410(/* &v4805, &v4803 */);
v2738 = mplew.write("v2738");
v2739 = mplew.write("v2739");
v2740 = mplew.write("v2740");
v2741 = Check_Buff(mask, 0x28BCC88);//158
if (sub_42F5E0(v2741)) {
  mplew.StartNode("Mask - " + map.get(0x28BCC88));//
  for (j = 0; j < 22; ++j) {
    mplew.writeInt("");
  }
  mplew.EndNode(false);
}
v2742 = Check_Buff(mask, 0x28C2298);//227
if (sub_42F5E0(v2742)) {
  mplew.StartNode("Mask - " + map.get(0x28C2298));//
  v2743 = mplew.write("v2743");
  mplew.EndNode(false);
}
v2744 = Check_Buff(mask, 0x28C22E0);//412
if (sub_42F5E0(v2744)) {
  mplew.StartNode("Mask - " + map.get(0x28C22E0));//
  v2745 = mplew.write("v2745");
  mplew.EndNode(false);
}
v2746 = Check_Buff(mask, 0x28BDF18);//235
if (sub_42F5E0(v2746)) {
  mplew.StartNode("Mask - " + map.get(0x28BDF18));//
  v2747 = mplew.writeInt("v2747");
  mplew.EndNode(false);
}
v2748 = Check_Buff(mask, 0x28BBB60);//246
if (sub_42F5E0(v2748)) {
  mplew.StartNode("Mask - " + map.get(0x28BBB60));//
  v2749 = mplew.write("v2749");
  mplew.EndNode(false);
}
v2750 = Check_Buff(mask, 0x28BBBA8);//261
if (sub_42F5E0(v2750)) {
  mplew.StartNode("Mask - " + map.get(0x28BBBA8));//
  v2751 = mplew.write("v2751");
  mplew.EndNode(false);
}
v2752 = Check_Buff(mask, 0x28BB3C8);//328
if (sub_42F5E0(v2752)) {
  mplew.StartNode("Mask - " + map.get(0x28BB3C8));//
  v2753 = mplew.write("v2753");
  v2754 = mplew.writeShort("");
  v2755 = mplew.write("v2755");
  v2756 = mplew.write("v2756");
  mplew.EndNode(false);
}
v2757 = Check_Buff(mask, 0x28BDED0);//249
if (sub_42F5E0(v2757)) {
  mplew.StartNode("Mask - " + map.get(0x28BDED0));//
  v2758 = mplew.writeInt("v2758");
  mplew.EndNode(false);
}
v2759 = Check_Buff(mask, 0x28BDDB0);//248
if (sub_42F5E0(v2759)) {
  mplew.StartNode("Mask - " + map.get(0x28BDDB0));//
  v2760 = mplew.write("") != 0;
  mplew.EndNode(false);
}
v2761 = Check_Buff(mask, 0x28BDFA8);//245
if (sub_42F5E0(v2761)) {
  mplew.StartNode("Mask - " + map.get(0x28BDFA8));//
  for (k = 0; k < 2; ++k) {
    sub_4408E0(/* ipacket */);
    // if (sub_409880(/* &v4800 */) > 0)
    //   sub_456C70(/* &v4800 */);
  }
  v2762 = mplew.writeInt("v2762");
  v2763 = mplew.writeInt("v2763");
  v2764 = mplew.writeInt("v2764");
  mplew.EndNode(false);
}
v2765 = Check_Buff(mask, 0x28BDCD8);//230
if (sub_42F5E0(v2765)) {
  mplew.StartNode("Mask - " + map.get(0x28BDCD8));//
  v2766 = mplew.writeInt("v2766");
  mplew.EndNode(false);
}
v2767 = Check_Buff(mask, 0x28BE110);//256
if (sub_42F5E0(v2767)) {
  mplew.StartNode("Mask - " + map.get(0x28BE110));//
  sub_F09E70(/* ipacket */);
  mplew.EndNode(false);
}
v2768 = Check_Buff(mask, 0x28BDFF0);//251
if (sub_42F5E0(v2768)) {
  mplew.StartNode("Mask - " + map.get(0x28BDFF0));//
  v2769 = mplew.writeInt("v2769");
  mplew.EndNode(false);
}
v2770 = Check_Buff(mask, 0x28BE2C0);//264
if (sub_42F5E0(v2770)) {
  mplew.StartNode("Mask - " + map.get(0x28BE2C0));//
  v4799 = 1;
  while (v4799) {
    v4798 = mplew.writeInt("v4798");
    if (v4798 <= 0) {
      v4799 = 0;
      break;
    }
    // v3412 = v4798;
    // sub_44AD60(/* &v3411, &v3412 */);
  }
  mplew.EndNode(false);
}
v2771 = Check_Buff(mask, 0x28BB650);//84
if (sub_42F5E0(v2771)) {
  mplew.StartNode("Mask - " + map.get(0x28BB650));//
  v2772 = mplew.write("") != 0;
  mplew.EndNode(false);
}
v2773 = Check_Buff(mask, 0x28BE620);//276
if (sub_42F5E0(v2773)) {
  mplew.StartNode("Mask - " + map.get(0x28BE620));//
  v2774 = mplew.write("v2774");
  mplew.EndNode(false);
}
v2775 = Check_Buff(mask, 0x28BE5D8);//333
if (sub_42F5E0(v2775)) {
  mplew.StartNode("Mask - " + map.get(0x28BE5D8));//
  v2776 = mplew.write("v2776");
  mplew.EndNode(false);
}
v2777 = Check_Buff(mask, 0x28BEB78);//293
if (sub_42F5E0(v2777)) {
  mplew.StartNode("Mask - " + map.get(0x28BEB78));//
  v2778 = mplew.write("v2778");
  mplew.EndNode(false);
}
v2779 = Check_Buff(mask, 0x28BEBC0);//294
if (sub_42F5E0(v2779)) {
  mplew.StartNode("Mask - " + map.get(0x28BEBC0));//
  v2780 = mplew.write("v2780");
  mplew.EndNode(false);
}
v2781 = Check_Buff(mask, 0x28BEB30);//292
if (sub_42F5E0(v2781)) {
  mplew.StartNode("Mask - " + map.get(0x28BEB30));//
  v2782 = mplew.writeInt("v2782");
  v2783 = mplew.write("v2783");
  mplew.EndNode(false);
}
v2784 = Check_Buff(mask, 0x28BF160);//319
if (sub_42F5E0(v2784)) {
  mplew.StartNode("Mask - " + map.get(0x28BF160));//
  v2785 = mplew.write("v2785");
  mplew.EndNode(false);
}
v2786 = Check_Buff(mask, 0x28BCE38);//163
if (sub_42F5E0(v2786)) {
  mplew.StartNode("Mask - " + map.get(0x28BCE38));//
  v2787 = mplew.writeInt("v2787");
  v2788 = mplew.writeInt("v2788");
  mplew.EndNode(false);
}
v2789 = Check_Buff(mask, 0x28BF3A0);//330
if (sub_42F5E0(v2789)) {
  mplew.StartNode("Mask - " + map.get(0x28BF3A0));//
  v2790 = mplew.writeInt("v2790");
  mplew.EndNode(false);
}
v2791 = Check_Buff(mask, 0x28BF430);//332
if (sub_42F5E0(v2791)) {
  mplew.StartNode("Mask - " + map.get(0x28BF430));//
  v2792 = mplew.writeInt("v2792");
  mplew.EndNode(false);
}
v2793 = Check_Buff(mask, 0x28BF508);//338
if (sub_42F5E0(v2793)) {
  mplew.StartNode("Mask - " + map.get(0x28BF508));//
  v2794 = mplew.writeInt("v2794");
  v2795 = mplew.writeInt("v2795");
  mplew.EndNode(false);
}
v2796 = Check_Buff(mask, 0x28BA600);//340
if (sub_42F5E0(v2796)) {
  mplew.StartNode("Mask - " + map.get(0x28BA600));//
  v2797 = mplew.writeInt("v2797");
  mplew.EndNode(false);
}
v2798 = Check_Buff(mask, 0x28BA648);//343
if (sub_42F5E0(v2798)) {
  mplew.StartNode("Mask - " + map.get(0x28BA648));//
  v2799 = mplew.writeInt("v2799");
  mplew.EndNode(false);
}
v2800 = Check_Buff(mask, 0x28BF628);//345
if (sub_42F5E0(v2800)) {
  mplew.StartNode("Mask - " + map.get(0x28BF628));//
  v2801 = mplew.write("v2801");
  mplew.EndNode(false);
}
v2802 = Check_Buff(mask, 0x28BF670);//346
if (sub_42F5E0(v2802)) {
  mplew.StartNode("Mask - " + map.get(0x28BF670));//
  v2803 = mplew.write("v2803");
  mplew.EndNode(false);
}
v2804 = Check_Buff(mask, 0x28BF5E0);//344
if (sub_42F5E0(v2804)) {
  mplew.StartNode("Mask - " + map.get(0x28BF5E0));//
  v2805 = mplew.writeInt("v2805");
  mplew.EndNode(false);
}
v2806 = Check_Buff(mask, 0x28BB968);//89
if (sub_42F5E0(v2806)) {
  mplew.StartNode("Mask - " + map.get(0x28BB968));//
  v2807 = mplew.writeInt("v2807");
  mplew.EndNode(false);
}
v2808 = Check_Buff(mask, 0x28BBC38);//94
if (sub_42F5E0(v2808)) {
  mplew.StartNode("Mask - " + map.get(0x28BBC38));//
  v2809 = mplew.writeInt("v2809");
  mplew.EndNode(false);
}
v2810 = Check_Buff(mask, 0x28BA768);//357
if (sub_42F5E0(v2810)) {
  mplew.StartNode("Mask - " + map.get(0x28BA768));//
  v2811 = mplew.writeInt("v2811");
  mplew.EndNode(false);
}
v2812 = Check_Buff(mask, 0x28BA7B0);//358
if (sub_42F5E0(v2812)) {
  mplew.StartNode("Mask - " + map.get(0x28BA7B0));//
  v2813 = mplew.writeInt("v2813");
  mplew.EndNode(false);
}
v2814 = Check_Buff(mask, 0x28BF9D0);//359
if (sub_42F5E0(v2814)) {
  mplew.StartNode("Mask - " + map.get(0x28BF9D0));//
  v2815 = mplew.writeInt("v2815");
  mplew.EndNode(false);
}
v2816 = Check_Buff(mask, 0x28C2328);//378
if (sub_42F5E0(v2816)) {
  mplew.StartNode("Mask - " + map.get(0x28C2328));//
  v2817 = mplew.writeInt("v2817");
  v2818 = mplew.writeInt("v2818");
  mplew.EndNode(false);
}
v2819 = Check_Buff(mask, 0x28C0090);//385
if (sub_42F5E0(v2819)) {
  mplew.StartNode("Mask - " + map.get(0x28C0090));//
  v2820 = mplew.writeInt("v2820");
  mplew.EndNode(false);
}
v2821 = Check_Buff(mask, 0x28C0000);//383
if (sub_42F5E0(v2821)) {
  mplew.StartNode("Mask - " + map.get(0x28C0000));//
  v2822 = mplew.writeInt("v2822");
  mplew.EndNode(false);
}
v2823 = Check_Buff(mask, 0x28C00D8);//386
if (sub_42F5E0(v2823)) {
  mplew.StartNode("Mask - " + map.get(0x28C00D8));//
  v2824 = mplew.writeInt("v2824");
  v2825 = mplew.write("v2825");
  mplew.EndNode(false);
}
v2826 = Check_Buff(mask, 0x28C04C8);//405
if (sub_42F5E0(v2826)) {
  mplew.StartNode("Mask - " + map.get(0x28C04C8));//
  v2827 = mplew.writeInt("v2827");
  mplew.EndNode(false);
}
v2828 = Check_Buff(mask, 0x28C0630);//410
if (sub_42F5E0(v2828)) {
  mplew.StartNode("Mask - " + map.get(0x28C0630));//
  v2829 = mplew.writeInt("v2829");
  mplew.EndNode(false);
}
v2830 = Check_Buff(mask, 0x28C0990);//420
if (sub_42F5E0(v2830)) {
  mplew.StartNode("Mask - " + map.get(0x28C0990));//
  v2831 = mplew.writeInt("v2831");
  v2832 = mplew.writeInt("v2832");
  mplew.EndNode(false);
}
v2833 = Check_Buff(mask, 0x28C0A20);//422
if (sub_42F5E0(v2833)) {
  mplew.StartNode("Mask - " + map.get(0x28C0A20));//
  v2834 = mplew.writeInt("v2834");
  v2835 = mplew.write("v2835");
  v2836 = mplew.writeInt("v2836");
  v2837 = mplew.writeInt("v2837");
  mplew.EndNode(false);
}
v2838 = Check_Buff(mask, 0x28C1050);//442
if (sub_42F5E0(v2838)) {
  mplew.StartNode("Mask - " + map.get(0x28C1050));//
  v2839 = mplew.write("v2839");
  mplew.EndNode(false);
}
v2840 = Check_Buff(mask, 0x28C1170);//447
if (sub_42F5E0(v2840)) {
  mplew.StartNode("Mask - " + map.get(0x28C1170));//
  v2841 = mplew.write("v2841");
  v2842 = mplew.writeShort("");
  mplew.EndNode(false);
}
v2843 = Check_Buff(mask, 0x28C1200);//449
if (sub_42F5E0(v2843)) {
  mplew.StartNode("Mask - " + map.get(0x28C1200));//
  v2844 = mplew.writeShort("");
  v2845 = mplew.write("v2845");
  mplew.EndNode(false);
}
v2846 = mplew.writeInt("v2846")
v2847 = Check_Buff(mask, 0x28C0CA8);//431
if (sub_42F5E0(v2847)) {
  mplew.StartNode("Mask - " + map.get(0x28C0CA8));//
  v2848 = mplew.writeInt("v2848");
  mplew.EndNode(false);
}
v2849 = Check_Buff(mask, 0x28BAF90);//63
if (sub_42F5E0(v2849)) {
  mplew.StartNode("Mask - " + map.get(0x28BAF90));//
  v2850 = mplew.writeInt("v2850");
  mplew.EndNode(false);
}
v2851 = Check_Buff(mask, 0x28C13B0);//456
if (sub_42F5E0(v2851)) {
  mplew.StartNode("Mask - " + map.get(0x28C13B0));//
  v2852 = mplew.writeInt("v2852");
  mplew.EndNode(false);
}
v2853 = Check_Buff(mask, 0x28BBAD0);//241
if (sub_42F5E0(v2853)) {
  mplew.StartNode("Mask - " + map.get(0x28BBAD0));//
  v2854 = mplew.writeInt("v2854");
  mplew.EndNode(false);
}
v2855 = Check_Buff(mask, 0x28BF6B8);//347
if (sub_42F5E0(v2855)) {
  mplew.StartNode("Mask - " + map.get(0x28BF6B8));//
  v2856 = mplew.writeInt("v2856");
  mplew.EndNode(false);
}
v2857 = Check_Buff(mask, 0x28BB4A0);//79
if (sub_42F5E0(v2857)) {
  mplew.StartNode("Mask - " + map.get(0x28BB4A0));//
  v2858 = mplew.writeInt("v2858");
  mplew.EndNode(false);
}
v2859 = Check_Buff(mask, 0x28BA918);//402
if (sub_42F5E0(v2859)) {
  mplew.StartNode("Mask - " + map.get(0x28BA918));//
  v2860 = mplew.writeShort("");
  mplew.EndNode(false);
}
v2861 = Check_Buff(mask, 0x28C0438);//403
if (sub_42F5E0(v2861)) {
  mplew.StartNode("Mask - " + map.get(0x28C0438));//
  v2862 = mplew.writeShort("");
  mplew.EndNode(false);
}
v2863 = Check_Buff(mask, 0x28C0480);//404
if (sub_42F5E0(v2863)) {
  mplew.StartNode("Mask - " + map.get(0x28C0480));//
  v2864 = mplew.writeShort("");
  mplew.EndNode(false);
}
v2865 = Check_Buff(mask, 0x28C1878);//473
if (sub_42F5E0(v2865)) {
  mplew.StartNode("Mask - " + map.get(0x28C1878));//
  v2866 = mplew.writeInt("v2866");
  v2867 = mplew.writeInt("v2867");
  v2868 = mplew.writeInt("v2868");
  v2869 = mplew.writeInt("v2869");
  mplew.EndNode(false);
}
v2870 = Check_Buff(mask, 0x28BA9A8);//242
if (sub_42F5E0(v2870)) {
  mplew.StartNode("Mask - " + map.get(0x28BA9A8));//
  v2871 = mplew.writeInt("v2871");
  mplew.EndNode(false);
}
map.put(0x28b9e88, 518);
for (l = 0; l < 9; ++l) {
  var key = map.get(0x28B9E88) + l;//518//
  if (sub_B7C3F0(mask, (key))) {
    mplew.StartNode("Mas+-- 未处理 " + (key));
    // ((*v4393 + 24))(v4393, iPacket);
    switch (key) {
      case map.get(0x28b0d28) + 9://
        // mplew.writeShort("");
        // mplew.writeZeroBytes(7);
        mplew.writeInt("Skill Value");
        mplew.writeInt("SkillID");
        //  mplew.writeInt("currentTime");
        mplew.writeZeroBytes(5);
        //mplew.writeZeroBytes(9);// 00 00 00 00 00 00 00 00 00
        break;
      default:
        mplew.writeInt("Skill Value");
        mplew.writeInt("SkillID");
        mplew.writeZeroBytes(5);
        mplew.AddComment("--- 未处理 buff " + index.toString(10) + "---");
        break;
    }
    mplew.EndNode(false);
  }
}
// for (l = 0; l < 9; ++l) {
//   v2872 = sub_420FE0(/* &v3367, l */);
//   v2873 = Check_Buff(mask, v2872);
//   if (sub_42F5E0( v2873 )) {
// mplew.StartNode("Mask - " + map.get(v2872));
// mplew.EndNode(false);
//     (*(*v4796 + 24))(v4796, ipacket);
//     v5265 = *sub_40EB10(/* v4796 */);
//   }
sub_F09920(mask/* &v5264, ipacket */);
v2876 = Check_Buff(mask, 0x28BAF90);//63
if (sub_42F5E0(v2876)) {
  mplew.StartNode("Mask - " + map.get(0x28BAF90));//
  {
  }
  mplew.EndNode(false);
}
v2878 = Check_Buff(mask, 0x28C2370);//454
if (sub_42F5E0(v2878)) {
  mplew.StartNode("Mask - " + map.get(0x28C2370));//
  v2879 = mplew.writeInt("v2879");
  v5266 = mplew.writeInt("v5266");
  //     sub_4037E0(/* &v4794 */);
  //     v5267 = 456;
  //     v3359 = sub_40F060(/* 92 */);
  //     if (v3359)
  //       v2895 = sub_42FB40(/* v3359 */);
  //     var v2895 = 0;
  //     v3360 = v2895;
  //     sub_44A4E0(/* v2895 */);
  //     {
  //   *(sub_4037F0(/* &v4794 */) + 84) = 0x7FFFFFFF;
  //       {
  //         v2880 = sub_4037F0( &v4794 );
  //         v5266;
  //       }
  //       sub_4037F0(/* &v4794 */);
  //       sub_42F540(/* 0x28C2370 */);
  //       sub_44A720(/* &v3358, &v4794 */);
  //     }
  // else if (v4793) {
  //   *(sub_4037F0(/* &v4794 */) + 88) = 0;
  //       sub_44A720(/* &v4793, &v4794 */);
  //     }
  //     v5267 = -1;
  //     sub_44A490(/* &v4794 */);
  mplew.EndNode(false);
}
v2881 = Check_Buff(mask, 0x28BC658);//307
if (sub_42F5E0(v2881)) {
  mplew.StartNode("Mask - " + map.get(0x28BC658));//
  v2882 = mplew.writeInt("v2882");
  mplew.EndNode(false);
}
v2883 = Check_Buff(mask, 0x28C23B8);//509
if (sub_42F5E0(v2883)) {
  mplew.StartNode("Mask - " + map.get(0x28C23B8));//
  v2884 = sub_43ACB0(/* ipacket */);
  v2885 = sub_43ACB0(/* ipacket */);
  mplew.EndNode(false);
}
v2886 = Check_Buff(mask, 0x28C2400);//510
if (sub_42F5E0(v2886)) {
  mplew.StartNode("Mask - " + map.get(0x28C2400));//
  v2887 = mplew.write("v2887");
  v2888 = sub_43ACB0(/* ipacket */);
  mplew.EndNode(false);
}
v2889 = Check_Buff(mask, 0x28C2448);//511
if (sub_42F5E0(v2889)) {
  mplew.StartNode("Mask - " + map.get(0x28C2448));//
  v3353 = sub_43ACB0(/* ipacket */);
  mplew.EndNode(false);
}
v2890 = Check_Buff(mask, 0x28C2250);//517
if (sub_42F5E0(v2890)) {
  mplew.StartNode("Mask - " + map.get(0x28C2250));//
  v2891 = mplew.writeInt("v2891");
  v2892 = mplew.writeInt("v2892");
  v2893 = mplew.writeInt("v2893");
  mplew.EndNode(false);
}
// sub_40ED00(/* &v5264, 544 */)

mplew.EndNode(false);
//SecondaryStat::DecodeForLocal
v206 = mplew.writeShort("v206");
v216 = mplew.write("ComboAbilityBuff");
v217 = mplew.write("bFirstSet");
v214 = mplew.write("IsTemporaryOnShow");

if (Check_Buff(mask, 0x28F23F8)) {//71
}

if (Check_Buff(mask, 0x28F2440)) {//251
}
if (Check_Buff(mask, 0x28F2488)) {//227
}
map.put(0x28ba064, 525);
if (sub_E60680(mask)) {
  mplew.write("isMovementAffectingStat", 0)
}
if (Check_Buff(mask, 0x28F29C0)) {//102
}
if (Check_Buff(mask, 0x28F2810)) {//523
}
if (Check_Buff(mask, 0x28F2A08)) {//66
}
if (Check_Buff(mask, 0x28F2A50)) {//195
}
if (Check_Buff(mask, 0x28F2A98)) {//325
}
if (Check_Buff(mask, 0x28F2440)) {//251
}
if (Check_Buff(mask, 0x28F2128)) {//85
}
mplew.writeInt("unk");
function sub_E60680(mask) {
  if (
    sub_B7C3F0(mask, 10) ||
    sub_B7C3F0(mask, 9) ||
    sub_B7C3F0(mask, 61) ||
    sub_B7C3F0(mask, 60) ||
    sub_B7C3F0(mask, 44) ||
    sub_B7C3F0(mask, 43) ||
    sub_B7C3F0(mask, 91) ||
    sub_B7C3F0(mask, 87) ||
    sub_B7C3F0(mask, 85) ||
    sub_B7C3F0(mask, 84) ||
    sub_B7C3F0(mask, 82) ||
    sub_B7C3F0(mask, 70) ||
    sub_B7C3F0(mask, 101) ||
    sub_B7C3F0(mask, 156) ||
    sub_B7C3F0(mask, 139) ||
    sub_B7C3F0(mask, 131) ||
    sub_B7C3F0(mask, 130) ||
    sub_B7C3F0(mask, 186) ||
    sub_B7C3F0(mask, 180) ||
    sub_B7C3F0(mask, 220) ||
    sub_B7C3F0(mask, 255) ||
    sub_B7C3F0(mask, 242) ||
    sub_B7C3F0(mask, 239) ||
    sub_B7C3F0(mask, 238) ||
    sub_B7C3F0(mask, 229) ||
    sub_B7C3F0(mask, 266) ||
    sub_B7C3F0(mask, 265) ||
    sub_B7C3F0(mask, 307) ||
    sub_B7C3F0(mask, 342) ||
    sub_B7C3F0(mask, 339) ||
    sub_B7C3F0(mask, 367) ||
    sub_B7C3F0(mask, 408) ||
    sub_B7C3F0(mask, 406) ||
    sub_B7C3F0(mask, 505) ||
    sub_B7C3F0(mask, 526) ||
    sub_B7C3F0(mask, 525) ||
    sub_B7C3F0(mask, 521) ||
    sub_B7C3F0(mask, 520) ||
    sub_B7C3F0(mask, 519) ||
    sub_B7C3F0(mask, 518)
  ) {
    return true;
  }
  return false;
}
function sub_42F5E0(bool) {
  return bool;
}

function sub_42FF80(mask) {
  //dword_22B820C = 1;
  if (
    sub_B7C3F0(mask, 78) ||
    sub_B7C3F0(mask, 139) ||
    sub_B7C3F0(mask, 203) ||
    sub_B7C3F0(mask, 223) ||
    sub_B7C3F0(mask, 236) ||
    sub_B7C3F0(mask, 239) ||
    sub_B7C3F0(mask, 242) ||
    sub_B7C3F0(mask, 257) ||
    sub_B7C3F0(mask, 259) ||
    sub_B7C3F0(mask, 262) ||
    sub_B7C3F0(mask, 287) ||
    sub_B7C3F0(mask, 291) ||
    sub_B7C3F0(mask, 305) ||
    sub_B7C3F0(mask, 339) ||
    sub_B7C3F0(mask, 340) ||
    sub_B7C3F0(mask, 343) ||
    sub_B7C3F0(mask, 357) ||
    sub_B7C3F0(mask, 358) ||
    sub_B7C3F0(mask, 361) ||
    sub_B7C3F0(mask, 402) ||
    sub_B7C3F0(mask, 443) ||
    sub_B7C3F0(mask, 505) ||
    sub_B7C3F0(mask, 506) ||
    sub_B7C3F0(mask, 521) ||
    sub_B7C3F0(mask, 525)
  ) {
    return true;
  }
  return false;
}
function sub_F09920(mask) {
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

function maskbufftest(buff, mask) {
  var result = 0;
  // eax@2
  if (mask < 0x220) {
    result = (buff[mask >> 5] >> (31 - (mask & 0x1F))) & 1;
  }
  // var result = 0;
  return result;
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

function writeMaskFromList(mask, len) {
  var MAX_MOBSTAT = parseInt(len / 4);
  for (var i = 0; i < MAX_MOBSTAT; i++) {
    mask[i] = mplew.writeInt("mask[(" + i + ")]");
  }
}

function Check_Buff(mask, Key) {
  return sub_B7C3F0(mask, map.get(Key))
}

function sub_B7C3F0(uFlag, a2) {
  var result;
  // eax@2
  if (a2 < 0x220) {
    result = (uFlag[a2 >> 5] >> (31 - (a2 & 0x1F))) & 1;
  } else {
    result = 0;
  }
  return result;
}
function sub_F16EE0( /*  */) {
  mplew.writeInt("v2");
  mplew.writeInt("");
  mplew.writeInt("");
  result = mplew.writeInt("result");
  if (result > 0) {
    v10 = result;
    do {
      result = mplew.writeInt("result");
      // v6 = *(v5 + 4);
      // v9 = result;
      // if ( v6 )
      //   v7 = (*(v5 + 12) - v6) >> 2;
      // var v7 = 0;
      // v8 = *(v5 + 8);
      // if ( (*(v5 + 8) - v6) >> 2 >= v7 )
      // {
      //   result = sub_53E8E0 (/* v8, 1, &v9 */);
      // }
      // else
      // {
      //   *v8 = result;
      //    v8 + 1;
      // }
      v10 = (v10 - 1);
    }
    while (v10);
  }
  return result;
}

function sub_F09E70(/*  */) {
  mplew.writeInt("v2");
  mplew.writeInt("");
  mplew.writeInt("");
  result = mplew.writeInt("result");
  if (result > 0) {
    v5 = (v2 + 3);
    v10 = result;
    do {
      result = mplew.writeInt("result");
      --v10;
    }
    while (v10);
  }
  return result;
}