 function HashMap() {
     var size = 0;
     var entry = new Object();
     this.put = function(key, value) {
         if (!this.containsKey(key)) {
             size++
         }
         entry[key] = value
     };
     this.get = function(key) {
         if (this.containsKey(key)) {
             return entry[key]
         } else {
             throw "找不到对应的Mask " + key.toString(16);
         }
     };
     this.remove = function(key) {
         if (delete entry[key]) {
             size--
         }
     };
     this.containsKey = function(key) {
         return (key in entry)
     };
     this.containsValue = function(value) {
         for (var prop in entry) {
             if (entry[prop] == value) {
                 return true
             }
         }
         return false
     };
     this.values = function() {
         var values = new Array(size);
         for (var prop in entry) {
             values.push(entry[prop])
         }
         return values
     };
     this.keys = function() {
         var keys = new Array(size);
         for (var prop in entry) {
             keys.push(prop)
         }
         return keys
     };
     this.size = function() {
         return size
     }
 }

 var map = new HashMap();

 map.put(0x28b18d8, 175);
 map.put(0x28b1920, 176);
 map.put(0x28b1968, 177);
 map.put(0x28b19b0, 178);
 map.put(0x28b19f8, 54);
 map.put(0x28b1a40, 55);
 map.put(0x28b1a88, 56);
 map.put(0x28b1ad0, 57);
 map.put(0x28b1b18, 58);
 map.put(0x28b1b60, 306);
 map.put(0x28b1ba8, 59);
 map.put(0x28b1bf0, 60);
 map.put(0x28b1c38, 61);
 map.put(0x28b1c80, 140);
 map.put(0x28b1cc8, 141);
 map.put(0x28b1d10, 142);
 map.put(0x28b1d58, 143);
 map.put(0x28b1da0, 144);
 map.put(0x28b1de8, 62);
 map.put(0x28b1e30, 63);
 map.put(0x28b1e78, 64);
 map.put(0x28b1ec0, 65);
 map.put(0x28b1f08, 145);
 map.put(0x28b1f50, 66);
 map.put(0x28b1f98, 67);
 map.put(0x28b1fe0, 68);
 map.put(0x28b2028, 69);
 map.put(0x28b2070, 70);
 map.put(0x28b20b8, 190);
 map.put(0x28b2100, 71);
 map.put(0x28b2148, 72);
 map.put(0x28b2190, 73);
 map.put(0x28b21d8, 74);
 map.put(0x28b2220, 75);
 map.put(0x28b2268, 328);
 map.put(0x28b22b0, 76);
 map.put(0x28b22f8, 77);
 map.put(0x28b13c8, 78);
 map.put(0x28b2340, 79);
 map.put(0x28b2388, 80);
 map.put(0x28b23d0, 81);
 map.put(0x28b2418, 82);
 map.put(0x28b2460, 185);
 map.put(0x28b24a8, 83);
 map.put(0x28b24f0, 84);
 map.put(0x28b2538, 169);
 map.put(0x28b2580, 174);
 map.put(0x28b25c8, 172);
 map.put(0x28b2610, 170);
 map.put(0x28b2658, 171);
 map.put(0x28b26a0, 85);
 map.put(0x28b26e8, 101);
 map.put(0x28b2730, 86);
 map.put(0x28b2778, 87);
 map.put(0x28b27c0, 88);
 map.put(0x28b2808, 89);
 map.put(0x28b2850, 90);
 map.put(0x28b2898, 91);
 map.put(0x28b28e0, 238);
 map.put(0x28b1770, 239);
 map.put(0x28b2928, 240);
 map.put(0x28b2970, 241);
 map.put(0x28b29b8, 92);
 map.put(0x28b2a00, 246);
 map.put(0x28b2a48, 261);
 map.put(0x28b2a90, 93);
 map.put(0x28b2ad8, 94);
 map.put(0x28b2b20, 95);
 map.put(0x28b2b68, 96);
 map.put(0x28b2bb0, 97);
 map.put(0x28b2bf8, 98);
 map.put(0x28b2c40, 99);
 map.put(0x28b2c88, 102);
 map.put(0x28b2cd0, 111);
 map.put(0x28b2d18, 103);
 map.put(0x28b2d60, 100);
 map.put(0x28b2da8, 104);
 map.put(0x28b2df0, 105);
 map.put(0x28b2e38, 106);
 map.put(0x28b2e80, 107);
 map.put(0x28b2ec8, 108);
 map.put(0x28b2f10, 109);
 map.put(0x28b2f58, 110);
 map.put(0x28b2fa0, 112);
 map.put(0x28b2fe8, 113);
 map.put(0x28b3030, 114);
 map.put(0x28b3078, 115);
 map.put(0x28b30c0, 116);
 map.put(0x28b3108, 117);
 map.put(0x28b3150, 118);
 map.put(0x28b3198, 119);
 map.put(0x28b31e0, 252);
 map.put(0x28b3228, 120);
 map.put(0x28b3270, 121);
 map.put(0x28b32b8, 122);
 map.put(0x28b3300, 123);
 map.put(0x28b3348, 124);
 map.put(0x28b3390, 125);
 map.put(0x28b33d8, 127);
 map.put(0x28b3420, 128);
 map.put(0x28b3468, 129);
 map.put(0x28b34b0, 130);
 map.put(0x28b34f8, 307);
 map.put(0x28b1530, 339);
 map.put(0x28b3540, 131);
 map.put(0x28b3588, 186);
 map.put(0x28b35d0, 167);
 map.put(0x28b3618, 133);
 map.put(0x28b3660, 135);
 map.put(0x28b36a8, 136);
 map.put(0x28b36f0, 137);
 map.put(0x28b3738, 138);
 map.put(0x28b1578, 139);
 map.put(0x28b3780, 147);
 map.put(0x28b37c8, 309);
 map.put(0x28b3810, 148);
 map.put(0x28b3858, 149);
 map.put(0x28b38a0, 150);
 map.put(0x28b38e8, 151);
 map.put(0x28b3930, 152);
 map.put(0x28b3978, 153);
 map.put(0x28b39c0, 154);
 map.put(0x28b3a08, 155);
 map.put(0x28b3a50, 156);
 map.put(0x28b3a98, 134);
 map.put(0x28b3ae0, 157);
 map.put(0x28b3b28, 158);
 map.put(0x28b3b70, 159);
 map.put(0x28b3bb8, 243);
 map.put(0x28b3c00, 160);
 map.put(0x28b3c48, 161);
 map.put(0x28b3c90, 162);
 map.put(0x28b3cd8, 163);
 map.put(0x28b3d20, 164);
 map.put(0x28b3d68, 179);
 map.put(0x28b3db0, 165);
 map.put(0x28b3df8, 166);
 map.put(0x28b3e40, 168);
 map.put(0x28b3e88, 173);
 map.put(0x28b3ed0, 180);
 map.put(0x28b3f18, 192);
 map.put(0x28b3f60, 193);
 map.put(0x28b3fa8, 181);
 map.put(0x28b3ff0, 187);
 map.put(0x28b4038, 182);
 map.put(0x28b4080, 183);
 map.put(0x28b40c8, 184);
 map.put(0x28b4110, 189);
 map.put(0x28b4158, 194);
 map.put(0x28b41a0, 191);
 map.put(0x28b41e8, 188);
 map.put(0x28b4230, 195);
 map.put(0x28b4278, 197);
 map.put(0x28b42c0, 198);
 map.put(0x28b4308, 204);
 map.put(0x28b4350, 199);
 map.put(0x28b4398, 200);
 map.put(0x28b43e0, 202);
 map.put(0x28b4428, 205);
 map.put(0x28b1260, 203);
 map.put(0x28b4470, 206);
 map.put(0x28b44b8, 207);
 map.put(0x28b4500, 208);
 map.put(0x28b4548, 209);
 map.put(0x28b4590, 211);
 map.put(0x28b45d8, 212);
 map.put(0x28b4620, 213);
 map.put(0x28b4668, 214);
 map.put(0x28b46b0, 215);
 map.put(0x28b46f8, 216);
 map.put(0x28b4740, 217);
 map.put(0x28b4788, 218);
 map.put(0x28b47d0, 237);
 map.put(0x28b4818, 219);
 map.put(0x28b4860, 220);
 map.put(0x28b1848, 242);
 map.put(0x28b48a8, 255);
 map.put(0x28b48f0, 221);
 map.put(0x28b4938, 222);
 map.put(0x28b1218, 223);
 map.put(0x28b4980, 224);
 map.put(0x28b49c8, 225);
 map.put(0x28b4a10, 226);
 map.put(0x28b4a58, 228);
 map.put(0x28b4aa0, 229);
 map.put(0x28b4ae8, 244);
 map.put(0x28b4b30, 310);
 map.put(0x28b4b78, 230);
 map.put(0x28b4bc0, 232);
 map.put(0x28b4c08, 231);
 map.put(0x28b4c50, 248);
 map.put(0x28b4c98, 233);
 map.put(0x28b4ce0, 234);
 map.put(0x28b4d28, 247);
 map.put(0x28b4d70, 249);
 map.put(0x28b4db8, 235);
 map.put(0x28b12a8, 236);
 map.put(0x28b4e00, 250);
 map.put(0x28b4e48, 245);
 map.put(0x28b4e90, 251);
 map.put(0x28b4ed8, 253);
 map.put(0x28b4f20, 254);
 map.put(0x28b4f68, 196);
 map.put(0x28b4fb0, 256);
 map.put(0x28b12f0, 257);
 map.put(0x28b4ff8, 258);
 map.put(0x28b1338, 259);
 map.put(0x28b5040, 260);
 map.put(0x28b5088, 269);
 map.put(0x28b50d0, 126);
 map.put(0x28b5118, 263);
 map.put(0x28b5160, 264);
 map.put(0x28b51a8, 265);
 map.put(0x28b51f0, 266);
 map.put(0x28b5238, 267);
 map.put(0x28b5280, 268);
 map.put(0x28b52c8, 270);
 map.put(0x28b5310, 271);
 map.put(0x28b5358, 272);
 map.put(0x28b53a0, 273);
 map.put(0x28b53e8, 274);
 map.put(0x28b5430, 275);
 map.put(0x28b5478, 333);
 map.put(0x28b54c0, 276);
 map.put(0x28b5508, 277);
 map.put(0x28b5550, 278);
 map.put(0x28b5598, 279);
 map.put(0x28b55e0, 280);
 map.put(0x28b5628, 281);
 map.put(0x28b5670, 282);
 map.put(0x28b56b8, 283);
 map.put(0x28b5700, 325);
 map.put(0x28b5748, 326);
 map.put(0x28b5790, 327);
 map.put(0x28b57d8, 284);
 map.put(0x28b5820, 285);
 map.put(0x28b5868, 286);
 map.put(0x28b1800, 287);
 map.put(0x28b58b0, 288);
 map.put(0x28b58f8, 289);
 map.put(0x28b5940, 290);
 map.put(0x28b1380, 291);
 map.put(0x28b5988, 295);
 map.put(0x28b59d0, 292);
 map.put(0x28b5a18, 293);
 map.put(0x28b5a60, 294);
 map.put(0x28b5aa8, 296);
 map.put(0x28b5af0, 297);
 map.put(0x28b5b38, 298);
 map.put(0x28b5b80, 299);
 map.put(0x28b5bc8, 201);
 map.put(0x28b5c10, 300);
 map.put(0x28b5c58, 301);
 map.put(0x28b5ca0, 302);
 map.put(0x28b5ce8, 303);
 map.put(0x28b5d30, 304);
 map.put(0x28b1458, 305);
 map.put(0x28b5d78, 308);
 map.put(0x28b5dc0, 311);
 map.put(0x28b5e08, 312);
 map.put(0x28b5e50, 313);
 map.put(0x28b5e98, 314);
 map.put(0x28b5ee0, 315);
 map.put(0x28b5f28, 316);
 map.put(0x28b5f70, 317);
 map.put(0x28b5fb8, 318);
 map.put(0x28b6000, 319);
 map.put(0x28b6048, 320);
 map.put(0x28b6090, 321);
 map.put(0x28b60d8, 322);
 map.put(0x28b6120, 329);
 map.put(0x28b6168, 337);
 map.put(0x28b61b0, 331);
 map.put(0x28b61f8, 323);
 map.put(0x28b6240, 330);
 map.put(0x28b6288, 334);
 map.put(0x28b62d0, 332);
 map.put(0x28b6318, 335);
 map.put(0x28b6360, 336);
 map.put(0x28b63a8, 338);
 map.put(0x28b14a0, 340);
 map.put(0x28b63f0, 341);
 map.put(0x28b6438, 342);
 map.put(0x28b14e8, 343);
 map.put(0x28b6480, 344);
 map.put(0x28b64c8, 345);
 map.put(0x28b6510, 346);
 map.put(0x28b6558, 347);
 map.put(0x28b65a0, 348);
 map.put(0x28b65e8, 349);
 map.put(0x28b6630, 350);
 map.put(0x28b6678, 351);
 map.put(0x28b66c0, 352);
 map.put(0x28b6708, 353);
 map.put(0x28b6750, 355);
 map.put(0x28b6798, 354);
 map.put(0x28b67e0, 146);
 map.put(0x28b6828, 356);
 map.put(0x28b1608, 357);
 map.put(0x28b1650, 358);
 map.put(0x28b6870, 359);
 map.put(0x28b68b8, 360);
 map.put(0x28b15c0, 361);
 map.put(0x28b6900, 362);
 map.put(0x28b6948, 363);
 map.put(0x28b6990, 364);
 map.put(0x28b69d8, 365);
 map.put(0x28b6a20, 366);
 map.put(0x28b6a68, 367);
 map.put(0x28b6ab0, 368);
 map.put(0x28b6af8, 369);
 map.put(0x28b6b40, 370);
 map.put(0x28b6b88, 371);
 map.put(0x28b6bd0, 372);
 map.put(0x28b6c18, 373);
 map.put(0x28b6c60, 374);
 map.put(0x28b6ca8, 375);
 map.put(0x28b6cf0, 376);
 map.put(0x28b6d38, 377);
 map.put(0x28b6d80, 379);
 map.put(0x28b6dc8, 380);
 map.put(0x28b6e10, 381);
 map.put(0x28b6e58, 382);
 map.put(0x28b6ea0, 383);
 map.put(0x28b6ee8, 384);
 map.put(0x28b6f30, 385);
 map.put(0x28b6f78, 386);
 map.put(0x28b6fc0, 387);
 map.put(0x28b7008, 388);
 map.put(0x28b7050, 389);
 map.put(0x28b7098, 390);
 map.put(0x28b70e0, 391);
 map.put(0x28b7128, 394);
 map.put(0x28b7170, 395);
 map.put(0x28b71b8, 396);
 map.put(0x28b7200, 397);
 map.put(0x28b7248, 398);
 map.put(0x28b7290, 399);
 map.put(0x28b72d8, 403);
 map.put(0x28b7320, 404);
 map.put(0x28b7368, 405);
 map.put(0x28b73b0, 406);
 map.put(0x28b73f8, 407);
 map.put(0x28b7440, 408);
 map.put(0x28b7488, 409);
 map.put(0x28b74d0, 410);
 map.put(0x28b7518, 414);
 map.put(0x28b7560, 392);
 map.put(0x28b75a8, 393);
 map.put(0x28b75f0, 411);
 map.put(0x28b7638, 413);
 map.put(0x28b7680, 476);
 map.put(0x28b76c8, 415);
 map.put(0x28b7710, 416);
 map.put(0x28b7758, 417);
 map.put(0x28b77a0, 418);
 map.put(0x28b77e8, 419);
 map.put(0x28b7830, 420);
 map.put(0x28b7878, 421);
 map.put(0x28b78c0, 422);
 map.put(0x28b7908, 423);
 map.put(0x28b7950, 424);
 map.put(0x28b7998, 425);
 map.put(0x28b79e0, 426);
 map.put(0x28b7a28, 427);
 map.put(0x28b7a70, 428);
 map.put(0x28b7ab8, 429);
 map.put(0x28b7b00, 430);
 map.put(0x28b7b48, 431);
 map.put(0x28b7b90, 432);
 map.put(0x28b7bd8, 433);
 map.put(0x28b7c20, 434);
 map.put(0x28b7c68, 435);
 map.put(0x28b7cb0, 436);
 map.put(0x28b7cf8, 437);
 map.put(0x28b7d40, 438);
 map.put(0x28b7d88, 439);
 map.put(0x28b7dd0, 400);
 map.put(0x28b7e18, 401);
 map.put(0x28b7e60, 440);
 map.put(0x28b7ea8, 441);
 map.put(0x28b7ef0, 442);
 map.put(0x28b1410, 443);
 map.put(0x28b7f38, 444);
 map.put(0x28b7f80, 445);
 map.put(0x28b7fc8, 446);
 map.put(0x28b8010, 447);
 map.put(0x28b8058, 448);
 map.put(0x28b80a0, 449);
 map.put(0x28b80e8, 450);
 map.put(0x28b8130, 451);
 map.put(0x28b8178, 452);
 map.put(0x28b81c0, 453);
 map.put(0x28b8208, 455);
 map.put(0x28b8250, 456);
 map.put(0x28b8298, 457);
 map.put(0x28b82e0, 458);
 map.put(0x28b8328, 459);
 map.put(0x28b8370, 460);
 map.put(0x28b83b8, 461);
 map.put(0x28b8400, 462);
 map.put(0x28b8448, 463);
 map.put(0x28b8490, 464);
 map.put(0x28b84d8, 465);
 map.put(0x28b8520, 466);
 map.put(0x28b8568, 467);
 map.put(0x28b85b0, 468);
 map.put(0x28b85f8, 469);
 map.put(0x28b8640, 470);
 map.put(0x28b17b8, 402);
 map.put(0x28b8688, 471);
 map.put(0x28b86d0, 472);
 map.put(0x28b8718, 473);
 map.put(0x28b8760, 474);
 map.put(0x28b87a8, 475);
 map.put(0x28b87f0, 477);
 map.put(0x28b8838, 478);
 map.put(0x28b8880, 479);
 map.put(0x28b88c8, 480);
 map.put(0x28b8910, 481);
 map.put(0x28b8958, 499);
 map.put(0x28b89a0, 501);
 map.put(0x28b89e8, 502);
 map.put(0x28b8a30, 503);
 map.put(0x28b8a78, 482);
 map.put(0x28b1698, 262);
 map.put(0x28b8ac0, 483);
 map.put(0x28b8b08, 484);
 map.put(0x28b16e0, 505);
 map.put(0x28b1728, 506);
 map.put(0x28b8b50, 507);
 map.put(0x28b8b98, 508);
 map.put(0x28b8be0, 485);
 map.put(0x28b8c28, 492);
 map.put(0x28b8c70, 486);
 map.put(0x28b8cb8, 488);
 map.put(0x28b8d00, 489);
 map.put(0x28b8d48, 490);
 map.put(0x28b8d90, 491);
 map.put(0x28b8dd8, 493);
 map.put(0x28b8e20, 494);
 map.put(0x28b7dd0, 400);
 map.put(0x28b7e18, 401);
 map.put(0x28b8e68, 495);
 map.put(0x28b8eb0, 496);
 map.put(0x28b7cb0, 436);
 map.put(0x28b8ef8, 487);
 map.put(0x28b8f40, 497);
 map.put(0x28b8f88, 512);
 map.put(0x28b8fd0, 513);
 map.put(0x28b9018, 514);
 map.put(0x28b9060, 515);
 map.put(0x28b90a8, 516);
 map.put(0x28b90f0, 517);
 map.put(0x28b5700, 325);
 map.put(0x28b5748, 326);
 map.put(0x28b8be0, 485);
 map.put(0x28b3b28, 158);
 map.put(0x28b9138, 227);
 map.put(0x28b9180, 412);
 map.put(0x28b4db8, 235);
 map.put(0x28b2a00, 246);
 map.put(0x28b2a48, 261);
 map.put(0x28b2268, 328);
 map.put(0x28b4d70, 249);
 map.put(0x28b4c50, 248);
 map.put(0x28b4e48, 245);
 map.put(0x28b4b78, 230);
 map.put(0x28b4fb0, 256);
 map.put(0x28b4e90, 251);
 map.put(0x28b5160, 264);
 map.put(0x28b24f0, 84);
 map.put(0x28b54c0, 276);
 map.put(0x28b5478, 333);
 map.put(0x28b5a18, 293);
 map.put(0x28b5a60, 294);
 map.put(0x28b59d0, 292);
 map.put(0x28b6000, 319);
 map.put(0x28b3cd8, 163);
 map.put(0x28b6240, 330);
 map.put(0x28b62d0, 332);
 map.put(0x28b63a8, 338);
 map.put(0x28b14a0, 340);
 map.put(0x28b14e8, 343);
 map.put(0x28b64c8, 345);
 map.put(0x28b6510, 346);
 map.put(0x28b6480, 344);
 map.put(0x28b2808, 89);
 map.put(0x28b2ad8, 94);
 map.put(0x28b1608, 357);
 map.put(0x28b1650, 358);
 map.put(0x28b6870, 359);
 map.put(0x28b91c8, 378);
 map.put(0x28b6f30, 385);
 map.put(0x28b6ea0, 383);
 map.put(0x28b6f78, 386);
 map.put(0x28b7368, 405);
 map.put(0x28b74d0, 410);
 map.put(0x28b7830, 420);
 map.put(0x28b78c0, 422);
 map.put(0x28b7ef0, 442);
 map.put(0x28b8010, 447);
 map.put(0x28b80a0, 449);
 map.put(0x28b7b48, 431);
 map.put(0x28b1e30, 63);
 map.put(0x28b8250, 456);
 map.put(0x28b2970, 241);
 map.put(0x28b6558, 347);
 map.put(0x28b2340, 79);
 map.put(0x28b17b8, 402);
 map.put(0x28b72d8, 403);
 map.put(0x28b7320, 404);
 map.put(0x28b8718, 473);
 map.put(0x28b1848, 242);
 map.put(0x28b1e30, 63);
 map.put(0x28b9210, 454);
 map.put(0x28b34f8, 307);
 map.put(0x28b9258, 509);
 map.put(0x28b92a0, 510);
 map.put(0x28b92e8, 511);
 map.put(0x28b90f0, 517);
 //for < 9
 map.put(0x28b0d28, 518);

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
 // function DecodeForLocal()
 //int __thiscall SecondaryStat::DecodeForLocal(char *this, var a2, var ipacket, int a4)
 // {
 // v5264= mplew.writeBuffer("v5264",0x44);
 v4 = Check_Buff(mask, 0x28B18D8); //175
 if (sub_42F5E0(v4)) {
     mplew.StartNode("Mask - " + map.get(0x28B18D8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v5 = mplew.writeInt("v5");
     } else {
         v6 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v10 = Check_Buff(mask, 0x28B1920); //176
 if (sub_42F5E0(v10)) {
     mplew.StartNode("Mask - " + map.get(0x28B1920));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v11 = mplew.writeInt("v11");
     } else {
         v12 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v16 = Check_Buff(mask, 0x28B1968); //177
 if (sub_42F5E0(v16)) {
     mplew.StartNode("Mask - " + map.get(0x28B1968));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v17 = mplew.writeInt("v17");
     } else {
         v18 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v22 = Check_Buff(mask, 0x28B19B0); //178
 if (sub_42F5E0(v22)) {
     mplew.StartNode("Mask - " + map.get(0x28B19B0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v23 = mplew.writeInt("v23");
     } else {
         v24 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v28 = Check_Buff(mask, 0x28B19F8); //54
 if (sub_42F5E0(v28)) {
     mplew.StartNode("Mask - " + map.get(0x28B19F8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v29 = mplew.writeInt("v29");
     } else {
         v30 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v34 = Check_Buff(mask, 0x28B1A40); //55
 if (sub_42F5E0(v34)) {
     mplew.StartNode("Mask - " + map.get(0x28B1A40));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v35 = mplew.writeInt("v35");
     } else {
         v36 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v40 = Check_Buff(mask, 0x28B1A88); //56
 if (sub_42F5E0(v40)) {
     mplew.StartNode("Mask - " + map.get(0x28B1A88));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v41 = mplew.writeInt("v41");
     } else {
         v42 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v46 = Check_Buff(mask, 0x28B1AD0); //57
 if (sub_42F5E0(v46)) {
     mplew.StartNode("Mask - " + map.get(0x28B1AD0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v47 = mplew.writeInt("v47");
     } else {
         v48 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v52 = Check_Buff(mask, 0x28B1B18); //58
 if (sub_42F5E0(v52)) {
     mplew.StartNode("Mask - " + map.get(0x28B1B18));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v53 = mplew.writeInt("v53");
     } else {
         v54 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v58 = Check_Buff(mask, 0x28B1B60); //306
 if (sub_42F5E0(v58)) {
     mplew.StartNode("Mask - " + map.get(0x28B1B60));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v59 = mplew.writeInt("v59");
     } else {
         v60 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v64 = Check_Buff(mask, 0x28B1BA8); //59
 if (sub_42F5E0(v64)) {
     mplew.StartNode("Mask - " + map.get(0x28B1BA8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v65 = mplew.writeInt("v65");
     } else {
         v66 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v70 = Check_Buff(mask, 0x28B1BF0); //60
 if (sub_42F5E0(v70)) {
     mplew.StartNode("Mask - " + map.get(0x28B1BF0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v71 = mplew.writeInt("v71");
     } else {
         v72 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v76 = Check_Buff(mask, 0x28B1C38); //61
 if (sub_42F5E0(v76)) {
     mplew.StartNode("Mask - " + map.get(0x28B1C38));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v77 = mplew.writeInt("v77");
     } else {
         v78 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v82 = Check_Buff(mask, 0x28B1C80); //140
 if (sub_42F5E0(v82)) {
     mplew.StartNode("Mask - " + map.get(0x28B1C80));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v83 = mplew.writeInt("v83");
     } else {
         v84 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v88 = Check_Buff(mask, 0x28B1CC8); //141
 if (sub_42F5E0(v88)) {
     mplew.StartNode("Mask - " + map.get(0x28B1CC8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v89 = mplew.writeInt("v89");
     } else {
         v90 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v94 = Check_Buff(mask, 0x28B1D10); //142
 if (sub_42F5E0(v94)) {
     mplew.StartNode("Mask - " + map.get(0x28B1D10));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v95 = mplew.writeInt("v95");
     } else {
         v96 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v100 = Check_Buff(mask, 0x28B1D58); //143
 if (sub_42F5E0(v100)) {
     mplew.StartNode("Mask - " + map.get(0x28B1D58));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v101 = mplew.writeInt("v101");
     } else {
         v102 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v106 = Check_Buff(mask, 0x28B1DA0); //144
 if (sub_42F5E0(v106)) {
     mplew.StartNode("Mask - " + map.get(0x28B1DA0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v107 = mplew.writeInt("v107");
     } else {
         v108 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v112 = Check_Buff(mask, 0x28B1DE8); //62
 if (sub_42F5E0(v112)) {
     mplew.StartNode("Mask - " + map.get(0x28B1DE8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v113 = mplew.writeInt("v113");
     } else {
         v114 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v118 = Check_Buff(mask, 0x28B1E30); //63
 if (sub_42F5E0(v118)) {
     mplew.StartNode("Mask - " + map.get(0x28B1E30));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v119 = mplew.writeInt("v119");
     } else {
         v120 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v124 = Check_Buff(mask, 0x28B1E78); //64
 if (sub_42F5E0(v124)) {
     mplew.StartNode("Mask - " + map.get(0x28B1E78));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v125 = mplew.writeInt("v125");
     } else {
         v126 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v130 = Check_Buff(mask, 0x28B1EC0); //65
 if (sub_42F5E0(v130)) {
     mplew.StartNode("Mask - " + map.get(0x28B1EC0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v131 = mplew.writeInt("v131");
     } else {
         v132 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v136 = Check_Buff(mask, 0x28B1F08); //145
 if (sub_42F5E0(v136)) {
     mplew.StartNode("Mask - " + map.get(0x28B1F08));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v137 = mplew.writeInt("v137");
     } else {
         v138 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v142 = Check_Buff(mask, 0x28B1F50); //66
 if (sub_42F5E0(v142)) {
     mplew.StartNode("Mask - " + map.get(0x28B1F50));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v143 = mplew.writeInt("v143");
     } else {
         v144 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v148 = Check_Buff(mask, 0x28B1F98); //67
 if (sub_42F5E0(v148)) {
     mplew.StartNode("Mask - " + map.get(0x28B1F98));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v149 = mplew.writeInt("v149");
     } else {
         v150 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v154 = Check_Buff(mask, 0x28B1FE0); //68
 if (sub_42F5E0(v154)) {
     mplew.StartNode("Mask - " + map.get(0x28B1FE0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v155 = mplew.writeInt("v155");
     } else {
         v156 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v160 = Check_Buff(mask, 0x28B2028); //69
 if (sub_42F5E0(v160)) {
     mplew.StartNode("Mask - " + map.get(0x28B2028));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v161 = mplew.writeInt("v161");
     } else {
         v162 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v166 = Check_Buff(mask, 0x28B2070); //70
 if (sub_42F5E0(v166)) {
     mplew.StartNode("Mask - " + map.get(0x28B2070));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v167 = mplew.writeInt("v167");
     } else {
         v168 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v172 = Check_Buff(mask, 0x28B20B8); //190
 if (sub_42F5E0(v172)) {
     mplew.StartNode("Mask - " + map.get(0x28B20B8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v173 = mplew.writeInt("v173");
     } else {
         v174 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v178 = Check_Buff(mask, 0x28B2100); //71
 if (sub_42F5E0(v178)) {
     mplew.StartNode("Mask - " + map.get(0x28B2100));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v179 = mplew.writeInt("v179");
     } else {
         v180 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v184 = Check_Buff(mask, 0x28B2148); //72
 if (sub_42F5E0(v184)) {
     mplew.StartNode("Mask - " + map.get(0x28B2148));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v185 = mplew.writeInt("v185");
     } else {
         v186 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v190 = Check_Buff(mask, 0x28B2190); //73
 if (sub_42F5E0(v190)) {
     mplew.StartNode("Mask - " + map.get(0x28B2190));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v191 = mplew.writeInt("v191");
     } else {
         v192 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v196 = Check_Buff(mask, 0x28B21D8); //74
 if (sub_42F5E0(v196)) {
     mplew.StartNode("Mask - " + map.get(0x28B21D8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v197 = mplew.writeInt("v197");
     } else {
         v198 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v202 = Check_Buff(mask, 0x28B2220); //75
 if (sub_42F5E0(v202)) {
     mplew.StartNode("Mask - " + map.get(0x28B2220));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v203 = mplew.writeInt("v203");
     } else {
         v204 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v208 = Check_Buff(mask, 0x28B2268); //328
 if (sub_42F5E0(v208)) {
     mplew.StartNode("Mask - " + map.get(0x28B2268));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v209 = mplew.writeInt("v209");
     } else {
         v210 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v214 = Check_Buff(mask, 0x28B22B0); //76
 if (sub_42F5E0(v214)) {
     mplew.StartNode("Mask - " + map.get(0x28B22B0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v215 = mplew.writeInt("v215");
     } else {
         v216 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v220 = Check_Buff(mask, 0x28B22F8); //77
 if (sub_42F5E0(v220)) {
     mplew.StartNode("Mask - " + map.get(0x28B22F8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v221 = mplew.writeInt("v221");
     } else {
         v222 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v226 = Check_Buff(mask, 0x28B13C8); //78
 if (sub_42F5E0(v226)) {
     mplew.StartNode("Mask - " + map.get(0x28B13C8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v227 = mplew.writeInt("v227");
     } else {
         v228 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v232 = Check_Buff(mask, 0x28B2340); //79
 if (sub_42F5E0(v232)) {
     mplew.StartNode("Mask - " + map.get(0x28B2340));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v233 = mplew.writeInt("v233");
     } else {
         v234 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v238 = Check_Buff(mask, 0x28B2388); //80
 if (sub_42F5E0(v238)) {
     mplew.StartNode("Mask - " + map.get(0x28B2388));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v239 = mplew.writeInt("v239");
     } else {
         v240 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v244 = Check_Buff(mask, 0x28B23D0); //81
 if (sub_42F5E0(v244)) {
     mplew.StartNode("Mask - " + map.get(0x28B23D0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v245 = mplew.writeInt("v245");
     } else {
         v246 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v250 = Check_Buff(mask, 0x28B2418); //82
 if (sub_42F5E0(v250)) {
     mplew.StartNode("Mask - " + map.get(0x28B2418));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v251 = mplew.writeInt("v251");
     } else {
         v252 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v256 = Check_Buff(mask, 0x28B2460); //185
 if (sub_42F5E0(v256)) {
     mplew.StartNode("Mask - " + map.get(0x28B2460));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v257 = mplew.writeInt("v257");
     } else {
         v258 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v262 = Check_Buff(mask, 0x28B24A8); //83
 if (sub_42F5E0(v262)) {
     mplew.StartNode("Mask - " + map.get(0x28B24A8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v263 = mplew.writeInt("v263");
     } else {
         v264 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v268 = Check_Buff(mask, 0x28B24F0); //84
 if (sub_42F5E0(v268)) {
     mplew.StartNode("Mask - " + map.get(0x28B24F0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v269 = mplew.writeInt("v269");
     } else {
         v270 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v274 = Check_Buff(mask, 0x28B2538); //169
 if (sub_42F5E0(v274)) {
     mplew.StartNode("Mask - " + map.get(0x28B2538));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v275 = mplew.writeInt("v275");
     } else {
         v276 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v280 = Check_Buff(mask, 0x28B2580); //174
 if (sub_42F5E0(v280)) {
     mplew.StartNode("Mask - " + map.get(0x28B2580));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v281 = mplew.writeInt("v281");
     } else {
         v282 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v286 = Check_Buff(mask, 0x28B25C8); //172
 if (sub_42F5E0(v286)) {
     mplew.StartNode("Mask - " + map.get(0x28B25C8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v287 = mplew.writeInt("v287");
     } else {
         v288 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v292 = Check_Buff(mask, 0x28B2610); //170
 if (sub_42F5E0(v292)) {
     mplew.StartNode("Mask - " + map.get(0x28B2610));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v293 = mplew.writeInt("v293");
     } else {
         v294 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v298 = Check_Buff(mask, 0x28B2658); //171
 if (sub_42F5E0(v298)) {
     mplew.StartNode("Mask - " + map.get(0x28B2658));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v299 = mplew.writeInt("v299");
     } else {
         v300 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v304 = Check_Buff(mask, 0x28B26A0); //85
 if (sub_42F5E0(v304)) {
     mplew.StartNode("Mask - " + map.get(0x28B26A0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v305 = mplew.writeInt("v305");
     } else {
         v306 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v310 = Check_Buff(mask, 0x28B26E8); //101
 if (sub_42F5E0(v310)) {
     mplew.StartNode("Mask - " + map.get(0x28B26E8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v311 = mplew.writeInt("v311");
     } else {
         v312 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v316 = Check_Buff(mask, 0x28B2730); //86
 if (sub_42F5E0(v316)) {
     mplew.StartNode("Mask - " + map.get(0x28B2730));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v317 = mplew.writeInt("v317");
     } else {
         v318 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v322 = Check_Buff(mask, 0x28B2778); //87
 if (sub_42F5E0(v322)) {
     mplew.StartNode("Mask - " + map.get(0x28B2778));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v323 = mplew.writeInt("v323");
     } else {
         v324 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v328 = Check_Buff(mask, 0x28B27C0); //88
 if (sub_42F5E0(v328)) {
     mplew.StartNode("Mask - " + map.get(0x28B27C0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v329 = mplew.writeInt("v329");
     } else {
         v330 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v334 = Check_Buff(mask, 0x28B2808); //89
 if (sub_42F5E0(v334)) {
     mplew.StartNode("Mask - " + map.get(0x28B2808));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v335 = mplew.writeInt("v335");
     } else {
         v336 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v340 = Check_Buff(mask, 0x28B2850); //90
 if (sub_42F5E0(v340)) {
     mplew.StartNode("Mask - " + map.get(0x28B2850));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v341 = mplew.writeInt("v341");
     } else {
         v342 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v346 = Check_Buff(mask, 0x28B2898); //91
 if (sub_42F5E0(v346)) {
     mplew.StartNode("Mask - " + map.get(0x28B2898));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v347 = mplew.writeInt("v347");
     } else {
         v348 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v352 = Check_Buff(mask, 0x28B28E0); //238
 if (sub_42F5E0(v352)) {
     mplew.StartNode("Mask - " + map.get(0x28B28E0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v353 = mplew.writeInt("v353");
     } else {
         v354 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v358 = Check_Buff(mask, 0x28B1770); //239
 if (sub_42F5E0(v358)) {
     mplew.StartNode("Mask - " + map.get(0x28B1770));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v359 = mplew.writeInt("v359");
     } else {
         v360 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v364 = Check_Buff(mask, 0x28B2928); //240
 if (sub_42F5E0(v364)) {
     mplew.StartNode("Mask - " + map.get(0x28B2928));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v365 = mplew.writeInt("v365");
     } else {
         v366 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v370 = Check_Buff(mask, 0x28B2970); //241
 if (sub_42F5E0(v370)) {
     mplew.StartNode("Mask - " + map.get(0x28B2970));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v371 = mplew.writeInt("v371");
     } else {
         v372 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v376 = Check_Buff(mask, 0x28B29B8); //92
 if (sub_42F5E0(v376)) {
     mplew.StartNode("Mask - " + map.get(0x28B29B8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v377 = mplew.writeInt("v377");
     } else {
         v378 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v382 = Check_Buff(mask, 0x28B2A00); //246
 if (sub_42F5E0(v382)) {
     mplew.StartNode("Mask - " + map.get(0x28B2A00));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v383 = mplew.writeInt("v383");
     } else {
         v384 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v388 = Check_Buff(mask, 0x28B2A48); //261
 if (sub_42F5E0(v388)) {
     mplew.StartNode("Mask - " + map.get(0x28B2A48));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v389 = mplew.writeInt("v389");
     } else {
         v390 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v394 = Check_Buff(mask, 0x28B2A90); //93
 if (sub_42F5E0(v394)) {
     mplew.StartNode("Mask - " + map.get(0x28B2A90));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v395 = mplew.writeInt("v395");
     } else {
         v396 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v400 = Check_Buff(mask, 0x28B2AD8); //94
 if (sub_42F5E0(v400)) {
     mplew.StartNode("Mask - " + map.get(0x28B2AD8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v401 = mplew.writeInt("v401");
     } else {
         v402 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v406 = Check_Buff(mask, 0x28B2B20); //95
 if (sub_42F5E0(v406)) {
     mplew.StartNode("Mask - " + map.get(0x28B2B20));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v407 = mplew.writeInt("v407");
     } else {
         v408 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v412 = Check_Buff(mask, 0x28B2B68); //96
 if (sub_42F5E0(v412)) {
     mplew.StartNode("Mask - " + map.get(0x28B2B68));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v413 = mplew.writeInt("v413");
     } else {
         v414 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v418 = Check_Buff(mask, 0x28B2BB0); //97
 if (sub_42F5E0(v418)) {
     mplew.StartNode("Mask - " + map.get(0x28B2BB0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v419 = mplew.writeInt("v419");
     } else {
         v420 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v424 = Check_Buff(mask, 0x28B2BF8); //98
 if (sub_42F5E0(v424)) {
     mplew.StartNode("Mask - " + map.get(0x28B2BF8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v425 = mplew.writeInt("v425");
     } else {
         v426 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v430 = Check_Buff(mask, 0x28B2C40); //99
 if (sub_42F5E0(v430)) {
     mplew.StartNode("Mask - " + map.get(0x28B2C40));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v431 = mplew.writeInt("v431");
     } else {
         v432 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v436 = Check_Buff(mask, 0x28B2C88); //102
 if (sub_42F5E0(v436)) {
     mplew.StartNode("Mask - " + map.get(0x28B2C88));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v437 = mplew.writeInt("v437");
     } else {
         v438 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v442 = Check_Buff(mask, 0x28B2CD0); //111
 if (sub_42F5E0(v442)) {
     mplew.StartNode("Mask - " + map.get(0x28B2CD0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v443 = mplew.writeInt("v443");
     } else {
         v444 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v448 = Check_Buff(mask, 0x28B2D18); //103
 if (sub_42F5E0(v448)) {
     mplew.StartNode("Mask - " + map.get(0x28B2D18));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v449 = mplew.writeInt("v449");
     } else {
         v450 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v454 = Check_Buff(mask, 0x28B2D60); //100
 if (sub_42F5E0(v454)) {
     mplew.StartNode("Mask - " + map.get(0x28B2D60));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v455 = mplew.writeInt("v455");
     } else {
         v456 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v460 = Check_Buff(mask, 0x28B2DA8); //104
 if (sub_42F5E0(v460)) {
     mplew.StartNode("Mask - " + map.get(0x28B2DA8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v461 = mplew.writeInt("v461");
     } else {
         v462 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v466 = Check_Buff(mask, 0x28B2DF0); //105
 if (sub_42F5E0(v466)) {
     mplew.StartNode("Mask - " + map.get(0x28B2DF0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v467 = mplew.writeInt("v467");
     } else {
         v468 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v472 = Check_Buff(mask, 0x28B2E38); //106
 if (sub_42F5E0(v472)) {
     mplew.StartNode("Mask - " + map.get(0x28B2E38));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v473 = mplew.writeInt("v473");
     } else {
         v474 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v478 = Check_Buff(mask, 0x28B2E80); //107
 if (sub_42F5E0(v478)) {
     mplew.StartNode("Mask - " + map.get(0x28B2E80));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v479 = mplew.writeInt("v479");
     } else {
         v480 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v484 = Check_Buff(mask, 0x28B2EC8); //108
 if (sub_42F5E0(v484)) {
     mplew.StartNode("Mask - " + map.get(0x28B2EC8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v485 = mplew.writeInt("v485");
     } else {
         v486 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v490 = Check_Buff(mask, 0x28B2F10); //109
 if (sub_42F5E0(v490)) {
     mplew.StartNode("Mask - " + map.get(0x28B2F10));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v491 = mplew.writeInt("v491");
     } else {
         v492 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v496 = Check_Buff(mask, 0x28B2F58); //110
 if (sub_42F5E0(v496)) {
     mplew.StartNode("Mask - " + map.get(0x28B2F58));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v497 = mplew.writeInt("v497");
     } else {
         v498 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v502 = Check_Buff(mask, 0x28B2FA0); //112
 if (sub_42F5E0(v502)) {
     mplew.StartNode("Mask - " + map.get(0x28B2FA0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v503 = mplew.writeInt("v503");
     } else {
         v504 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v508 = Check_Buff(mask, 0x28B2FE8); //113
 if (sub_42F5E0(v508)) {
     mplew.StartNode("Mask - " + map.get(0x28B2FE8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v509 = mplew.writeInt("v509");
     } else {
         v510 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v514 = Check_Buff(mask, 0x28B3030); //114
 if (sub_42F5E0(v514)) {
     mplew.StartNode("Mask - " + map.get(0x28B3030));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v515 = mplew.writeInt("v515");
     } else {
         v516 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v520 = Check_Buff(mask, 0x28B3078); //115
 if (sub_42F5E0(v520)) {
     mplew.StartNode("Mask - " + map.get(0x28B3078));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v521 = mplew.writeInt("v521");
     } else {
         v522 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v526 = Check_Buff(mask, 0x28B30C0); //116
 if (sub_42F5E0(v526)) {
     mplew.StartNode("Mask - " + map.get(0x28B30C0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v527 = mplew.writeInt("v527");
     } else {
         v528 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v532 = Check_Buff(mask, 0x28B3108); //117
 if (sub_42F5E0(v532)) {
     mplew.StartNode("Mask - " + map.get(0x28B3108));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v533 = mplew.writeInt("v533");
     } else {
         v534 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v538 = Check_Buff(mask, 0x28B3150); //118
 if (sub_42F5E0(v538)) {
     mplew.StartNode("Mask - " + map.get(0x28B3150));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v539 = mplew.writeInt("v539");
     } else {
         v540 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v544 = Check_Buff(mask, 0x28B3198); //119
 if (sub_42F5E0(v544)) {
     mplew.StartNode("Mask - " + map.get(0x28B3198));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v545 = mplew.writeInt("v545");
     } else {
         v546 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v550 = Check_Buff(mask, 0x28B31E0); //252
 if (sub_42F5E0(v550)) {
     mplew.StartNode("Mask - " + map.get(0x28B31E0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v551 = mplew.writeInt("v551");
     } else {
         v552 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v556 = Check_Buff(mask, 0x28B3228); //120
 if (sub_42F5E0(v556)) {
     mplew.StartNode("Mask - " + map.get(0x28B3228));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v557 = mplew.writeInt("v557");
     } else {
         v558 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v562 = Check_Buff(mask, 0x28B3270); //121
 if (sub_42F5E0(v562)) {
     mplew.StartNode("Mask - " + map.get(0x28B3270));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v563 = mplew.writeInt("v563");
     } else {
         v564 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v568 = Check_Buff(mask, 0x28B32B8); //122
 if (sub_42F5E0(v568)) {
     mplew.StartNode("Mask - " + map.get(0x28B32B8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v569 = mplew.writeInt("v569");
     } else {
         v570 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v574 = Check_Buff(mask, 0x28B3300); //123
 if (sub_42F5E0(v574)) {
     mplew.StartNode("Mask - " + map.get(0x28B3300));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v575 = mplew.writeInt("v575");
     } else {
         v576 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v580 = Check_Buff(mask, 0x28B3348); //124
 if (sub_42F5E0(v580)) {
     mplew.StartNode("Mask - " + map.get(0x28B3348));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v581 = mplew.writeInt("v581");
     } else {
         v582 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v586 = Check_Buff(mask, 0x28B3390); //125
 if (sub_42F5E0(v586)) {
     mplew.StartNode("Mask - " + map.get(0x28B3390));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v587 = mplew.writeInt("v587");
     } else {
         v588 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v592 = Check_Buff(mask, 0x28B33D8); //127
 if (sub_42F5E0(v592)) {
     mplew.StartNode("Mask - " + map.get(0x28B33D8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v593 = mplew.writeInt("v593");
     } else {
         v594 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v598 = Check_Buff(mask, 0x28B3420); //128
 if (sub_42F5E0(v598)) {
     mplew.StartNode("Mask - " + map.get(0x28B3420));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v599 = mplew.writeInt("v599");
     } else {
         v600 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v604 = Check_Buff(mask, 0x28B3468); //129
 if (sub_42F5E0(v604)) {
     mplew.StartNode("Mask - " + map.get(0x28B3468));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v605 = mplew.writeInt("v605");
     } else {
         v606 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v610 = Check_Buff(mask, 0x28B34B0); //130
 if (sub_42F5E0(v610)) {
     mplew.StartNode("Mask - " + map.get(0x28B34B0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v611 = mplew.writeInt("v611");
     } else {
         v612 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v616 = Check_Buff(mask, 0x28B34F8); //307
 if (sub_42F5E0(v616)) {
     mplew.StartNode("Mask - " + map.get(0x28B34F8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v617 = mplew.writeInt("v617");
     } else {
         v618 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v622 = Check_Buff(mask, 0x28B1530); //339
 if (sub_42F5E0(v622)) {
     mplew.StartNode("Mask - " + map.get(0x28B1530));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v623 = mplew.writeInt("v623");
     } else {
         v624 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v628 = Check_Buff(mask, 0x28B3540); //131
 if (sub_42F5E0(v628)) {
     mplew.StartNode("Mask - " + map.get(0x28B3540));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v629 = mplew.writeInt("v629");
     } else {
         v630 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v634 = Check_Buff(mask, 0x28B3588); //186
 if (sub_42F5E0(v634)) {
     mplew.StartNode("Mask - " + map.get(0x28B3588));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v635 = mplew.writeInt("v635");
     } else {
         v636 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v640 = Check_Buff(mask, 0x28B35D0); //167
 if (sub_42F5E0(v640)) {
     mplew.StartNode("Mask - " + map.get(0x28B35D0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v641 = mplew.writeInt("v641");
     } else {
         v642 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v646 = Check_Buff(mask, 0x28B3618); //133
 if (sub_42F5E0(v646)) {
     mplew.StartNode("Mask - " + map.get(0x28B3618));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v647 = mplew.writeInt("v647");
     } else {
         v648 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v652 = Check_Buff(mask, 0x28B3660); //135
 if (sub_42F5E0(v652)) {
     mplew.StartNode("Mask - " + map.get(0x28B3660));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v653 = mplew.writeInt("v653");
     } else {
         v654 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v658 = Check_Buff(mask, 0x28B36A8); //136
 if (sub_42F5E0(v658)) {
     mplew.StartNode("Mask - " + map.get(0x28B36A8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v659 = mplew.writeInt("v659");
     } else {
         v660 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v664 = Check_Buff(mask, 0x28B36F0); //137
 if (sub_42F5E0(v664)) {
     mplew.StartNode("Mask - " + map.get(0x28B36F0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v665 = mplew.writeInt("v665");
     } else {
         v666 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v670 = Check_Buff(mask, 0x28B3738); //138
 if (sub_42F5E0(v670)) {
     mplew.StartNode("Mask - " + map.get(0x28B3738));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v671 = mplew.writeInt("v671");
     } else {
         v672 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v676 = Check_Buff(mask, 0x28B1578); //139
 if (sub_42F5E0(v676)) {
     mplew.StartNode("Mask - " + map.get(0x28B1578));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v677 = mplew.writeInt("v677");
     } else {
         v678 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v682 = Check_Buff(mask, 0x28B3780); //147
 if (sub_42F5E0(v682)) {
     mplew.StartNode("Mask - " + map.get(0x28B3780));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v683 = mplew.writeInt("v683");
     } else {
         v684 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v688 = Check_Buff(mask, 0x28B37C8); //309
 if (sub_42F5E0(v688)) {
     mplew.StartNode("Mask - " + map.get(0x28B37C8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v689 = mplew.writeInt("v689");
     } else {
         v690 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v694 = Check_Buff(mask, 0x28B3810); //148
 if (sub_42F5E0(v694)) {
     mplew.StartNode("Mask - " + map.get(0x28B3810));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v695 = mplew.writeInt("v695");
     } else {
         v696 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v700 = Check_Buff(mask, 0x28B3858); //149
 if (sub_42F5E0(v700)) {
     mplew.StartNode("Mask - " + map.get(0x28B3858));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v701 = mplew.writeInt("v701");
     } else {
         v702 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v706 = Check_Buff(mask, 0x28B38A0); //150
 if (sub_42F5E0(v706)) {
     mplew.StartNode("Mask - " + map.get(0x28B38A0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v707 = mplew.writeInt("v707");
     } else {
         v708 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v712 = Check_Buff(mask, 0x28B38E8); //151
 if (sub_42F5E0(v712)) {
     mplew.StartNode("Mask - " + map.get(0x28B38E8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v713 = mplew.writeInt("v713");
     } else {
         v714 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v718 = Check_Buff(mask, 0x28B3930); //152
 if (sub_42F5E0(v718)) {
     mplew.StartNode("Mask - " + map.get(0x28B3930));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v719 = mplew.writeInt("v719");
     } else {
         v720 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v724 = Check_Buff(mask, 0x28B3978); //153
 if (sub_42F5E0(v724)) {
     mplew.StartNode("Mask - " + map.get(0x28B3978));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v725 = mplew.writeInt("v725");
     } else {
         v726 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v730 = Check_Buff(mask, 0x28B39C0); //154
 if (sub_42F5E0(v730)) {
     mplew.StartNode("Mask - " + map.get(0x28B39C0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v731 = mplew.writeInt("v731");
     } else {
         v732 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v736 = Check_Buff(mask, 0x28B3A08); //155
 if (sub_42F5E0(v736)) {
     mplew.StartNode("Mask - " + map.get(0x28B3A08));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v737 = mplew.writeInt("v737");
     } else {
         v738 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v742 = Check_Buff(mask, 0x28B3A50); //156
 if (sub_42F5E0(v742)) {
     mplew.StartNode("Mask - " + map.get(0x28B3A50));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v743 = mplew.writeInt("v743");
     } else {
         v744 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v748 = Check_Buff(mask, 0x28B3A98); //134
 if (sub_42F5E0(v748)) {
     mplew.StartNode("Mask - " + map.get(0x28B3A98));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v749 = mplew.writeInt("v749");
     } else {
         v750 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v754 = Check_Buff(mask, 0x28B3AE0); //157
 if (sub_42F5E0(v754)) {
     mplew.StartNode("Mask - " + map.get(0x28B3AE0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v755 = mplew.writeInt("v755");
     } else {
         v756 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v760 = Check_Buff(mask, 0x28B3B28); //158
 if (sub_42F5E0(v760)) {
     mplew.StartNode("Mask - " + map.get(0x28B3B28));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v761 = mplew.writeInt("v761");
     } else {
         v762 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v766 = Check_Buff(mask, 0x28B3B70); //159
 if (sub_42F5E0(v766)) {
     mplew.StartNode("Mask - " + map.get(0x28B3B70));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v767 = mplew.writeInt("v767");
     } else {
         v768 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v772 = Check_Buff(mask, 0x28B3BB8); //243
 if (sub_42F5E0(v772)) {
     mplew.StartNode("Mask - " + map.get(0x28B3BB8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v773 = mplew.writeInt("v773");
     } else {
         v774 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v778 = Check_Buff(mask, 0x28B3C00); //160
 if (sub_42F5E0(v778)) {
     mplew.StartNode("Mask - " + map.get(0x28B3C00));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v779 = mplew.writeInt("v779");
     } else {
         v780 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v784 = Check_Buff(mask, 0x28B3C48); //161
 if (sub_42F5E0(v784)) {
     mplew.StartNode("Mask - " + map.get(0x28B3C48));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v785 = mplew.writeInt("v785");
     } else {
         v786 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v790 = Check_Buff(mask, 0x28B3C90); //162
 if (sub_42F5E0(v790)) {
     mplew.StartNode("Mask - " + map.get(0x28B3C90));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v791 = mplew.writeInt("v791");
     } else {
         v792 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v796 = Check_Buff(mask, 0x28B3CD8); //163
 if (sub_42F5E0(v796)) {
     mplew.StartNode("Mask - " + map.get(0x28B3CD8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v797 = mplew.writeInt("v797");
     } else {
         v798 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v802 = Check_Buff(mask, 0x28B3D20); //164
 if (sub_42F5E0(v802)) {
     mplew.StartNode("Mask - " + map.get(0x28B3D20));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v803 = mplew.writeInt("v803");
     } else {
         v804 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v808 = Check_Buff(mask, 0x28B3D68); //179
 if (sub_42F5E0(v808)) {
     mplew.StartNode("Mask - " + map.get(0x28B3D68));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v809 = mplew.writeInt("v809");
     } else {
         v810 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v814 = Check_Buff(mask, 0x28B3DB0); //165
 if (sub_42F5E0(v814)) {
     mplew.StartNode("Mask - " + map.get(0x28B3DB0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v815 = mplew.writeInt("v815");
     } else {
         v816 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v820 = Check_Buff(mask, 0x28B3DF8); //166
 if (sub_42F5E0(v820)) {
     mplew.StartNode("Mask - " + map.get(0x28B3DF8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v821 = mplew.writeInt("v821");
     } else {
         v822 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v826 = Check_Buff(mask, 0x28B3E40); //168
 if (sub_42F5E0(v826)) {
     mplew.StartNode("Mask - " + map.get(0x28B3E40));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v827 = mplew.writeInt("v827");
     } else {
         v828 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v832 = Check_Buff(mask, 0x28B3E88); //173
 if (sub_42F5E0(v832)) {
     mplew.StartNode("Mask - " + map.get(0x28B3E88));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v833 = mplew.writeInt("v833");
     } else {
         v834 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v838 = Check_Buff(mask, 0x28B3ED0); //180
 if (sub_42F5E0(v838)) {
     mplew.StartNode("Mask - " + map.get(0x28B3ED0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v839 = mplew.writeInt("v839");
     } else {
         v840 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v844 = Check_Buff(mask, 0x28B3F18); //192
 if (sub_42F5E0(v844)) {
     mplew.StartNode("Mask - " + map.get(0x28B3F18));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v845 = mplew.writeInt("v845");
     } else {
         v846 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v850 = Check_Buff(mask, 0x28B3F60); //193
 if (sub_42F5E0(v850)) {
     mplew.StartNode("Mask - " + map.get(0x28B3F60));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v851 = mplew.writeInt("v851");
     } else {
         v852 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v856 = Check_Buff(mask, 0x28B3FA8); //181
 if (sub_42F5E0(v856)) {
     mplew.StartNode("Mask - " + map.get(0x28B3FA8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v857 = mplew.writeInt("v857");
     } else {
         v858 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v862 = Check_Buff(mask, 0x28B3FF0); //187
 if (sub_42F5E0(v862)) {
     mplew.StartNode("Mask - " + map.get(0x28B3FF0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v863 = mplew.writeInt("v863");
     } else {
         v864 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v868 = Check_Buff(mask, 0x28B4038); //182
 if (sub_42F5E0(v868)) {
     mplew.StartNode("Mask - " + map.get(0x28B4038));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v869 = mplew.writeInt("v869");
     } else {
         v870 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v874 = Check_Buff(mask, 0x28B4080); //183
 if (sub_42F5E0(v874)) {
     mplew.StartNode("Mask - " + map.get(0x28B4080));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v875 = mplew.writeInt("v875");
     } else {
         v876 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v880 = Check_Buff(mask, 0x28B40C8); //184
 if (sub_42F5E0(v880)) {
     mplew.StartNode("Mask - " + map.get(0x28B40C8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v881 = mplew.writeInt("v881");
     } else {
         v882 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v886 = Check_Buff(mask, 0x28B4110); //189
 if (sub_42F5E0(v886)) {
     mplew.StartNode("Mask - " + map.get(0x28B4110));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v887 = mplew.writeInt("v887");
     } else {
         v888 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v892 = Check_Buff(mask, 0x28B4158); //194
 if (sub_42F5E0(v892)) {
     mplew.StartNode("Mask - " + map.get(0x28B4158));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v893 = mplew.writeInt("v893");
     } else {
         v894 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v898 = Check_Buff(mask, 0x28B41A0); //191
 if (sub_42F5E0(v898)) {
     mplew.StartNode("Mask - " + map.get(0x28B41A0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v899 = mplew.writeInt("v899");
     } else {
         v900 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v904 = Check_Buff(mask, 0x28B41E8); //188
 if (sub_42F5E0(v904)) {
     mplew.StartNode("Mask - " + map.get(0x28B41E8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v905 = mplew.writeInt("v905");
     } else {
         v906 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v910 = Check_Buff(mask, 0x28B4230); //195
 if (sub_42F5E0(v910)) {
     mplew.StartNode("Mask - " + map.get(0x28B4230));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v911 = mplew.writeInt("v911");
     } else {
         v912 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v916 = Check_Buff(mask, 0x28B4278); //197
 if (sub_42F5E0(v916)) {
     mplew.StartNode("Mask - " + map.get(0x28B4278));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v917 = mplew.writeInt("v917");
     } else {
         v918 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v922 = Check_Buff(mask, 0x28B42C0); //198
 if (sub_42F5E0(v922)) {
     mplew.StartNode("Mask - " + map.get(0x28B42C0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v923 = mplew.writeInt("v923");
     } else {
         v924 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v928 = Check_Buff(mask, 0x28B4308); //204
 if (sub_42F5E0(v928)) {
     mplew.StartNode("Mask - " + map.get(0x28B4308));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v929 = mplew.writeInt("v929");
     } else {
         v930 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v934 = Check_Buff(mask, 0x28B4350); //199
 if (sub_42F5E0(v934)) {
     mplew.StartNode("Mask - " + map.get(0x28B4350));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v935 = mplew.writeInt("v935");
     } else {
         v936 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v940 = Check_Buff(mask, 0x28B4398); //200
 if (sub_42F5E0(v940)) {
     mplew.StartNode("Mask - " + map.get(0x28B4398));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v941 = mplew.writeInt("v941");
     } else {
         v942 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v946 = Check_Buff(mask, 0x28B43E0); //202
 if (sub_42F5E0(v946)) {
     mplew.StartNode("Mask - " + map.get(0x28B43E0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v947 = mplew.writeInt("v947");
     } else {
         v948 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v952 = Check_Buff(mask, 0x28B4428); //205
 if (sub_42F5E0(v952)) {
     mplew.StartNode("Mask - " + map.get(0x28B4428));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v953 = mplew.writeInt("v953");
     } else {
         v954 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v958 = Check_Buff(mask, 0x28B1260); //203
 if (sub_42F5E0(v958)) {
     mplew.StartNode("Mask - " + map.get(0x28B1260));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v959 = mplew.writeInt("v959");
     } else {
         v960 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v964 = Check_Buff(mask, 0x28B4470); //206
 if (sub_42F5E0(v964)) {
     mplew.StartNode("Mask - " + map.get(0x28B4470));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v965 = mplew.writeInt("v965");
     } else {
         v966 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v970 = Check_Buff(mask, 0x28B44B8); //207
 if (sub_42F5E0(v970)) {
     mplew.StartNode("Mask - " + map.get(0x28B44B8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v971 = mplew.writeInt("v971");
     } else {
         v972 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v976 = Check_Buff(mask, 0x28B4500); //208
 if (sub_42F5E0(v976)) {
     mplew.StartNode("Mask - " + map.get(0x28B4500));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v977 = mplew.writeInt("v977");
     } else {
         v978 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v982 = Check_Buff(mask, 0x28B4548); //209
 if (sub_42F5E0(v982)) {
     mplew.StartNode("Mask - " + map.get(0x28B4548));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v983 = mplew.writeInt("v983");
     } else {
         v984 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v988 = Check_Buff(mask, 0x28B4590); //211
 if (sub_42F5E0(v988)) {
     mplew.StartNode("Mask - " + map.get(0x28B4590));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v989 = mplew.writeInt("v989");
     } else {
         v990 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v994 = Check_Buff(mask, 0x28B45D8); //212
 if (sub_42F5E0(v994)) {
     mplew.StartNode("Mask - " + map.get(0x28B45D8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v995 = mplew.writeInt("v995");
     } else {
         v996 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1000 = Check_Buff(mask, 0x28B4620); //213
 if (sub_42F5E0(v1000)) {
     mplew.StartNode("Mask - " + map.get(0x28B4620));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1001 = mplew.writeInt("v1001");
     } else {
         v1002 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1006 = Check_Buff(mask, 0x28B4668); //214
 if (sub_42F5E0(v1006)) {
     mplew.StartNode("Mask - " + map.get(0x28B4668));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1007 = mplew.writeInt("v1007");
     } else {
         v1008 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1012 = Check_Buff(mask, 0x28B46B0); //215
 if (sub_42F5E0(v1012)) {
     mplew.StartNode("Mask - " + map.get(0x28B46B0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1013 = mplew.writeInt("v1013");
     } else {
         v1014 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1018 = Check_Buff(mask, 0x28B46F8); //216
 if (sub_42F5E0(v1018)) {
     mplew.StartNode("Mask - " + map.get(0x28B46F8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1019 = mplew.writeInt("v1019");
     } else {
         v1020 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1024 = Check_Buff(mask, 0x28B4740); //217
 if (sub_42F5E0(v1024)) {
     mplew.StartNode("Mask - " + map.get(0x28B4740));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1025 = mplew.writeInt("v1025");
     } else {
         v1026 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1030 = Check_Buff(mask, 0x28B4788); //218
 if (sub_42F5E0(v1030)) {
     mplew.StartNode("Mask - " + map.get(0x28B4788));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1031 = mplew.writeInt("v1031");
     } else {
         v1032 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1036 = Check_Buff(mask, 0x28B47D0); //237
 if (sub_42F5E0(v1036)) {
     mplew.StartNode("Mask - " + map.get(0x28B47D0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1037 = mplew.writeInt("v1037");
     } else {
         v1038 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1042 = Check_Buff(mask, 0x28B4818); //219
 if (sub_42F5E0(v1042)) {
     mplew.StartNode("Mask - " + map.get(0x28B4818));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1043 = mplew.writeInt("v1043");
     } else {
         v1044 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1048 = Check_Buff(mask, 0x28B4860); //220
 if (sub_42F5E0(v1048)) {
     mplew.StartNode("Mask - " + map.get(0x28B4860));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1049 = mplew.writeInt("v1049");
     } else {
         v1050 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1054 = Check_Buff(mask, 0x28B1848); //242
 if (sub_42F5E0(v1054)) {
     mplew.StartNode("Mask - " + map.get(0x28B1848));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1055 = mplew.writeInt("v1055");
     } else {
         v1056 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1060 = Check_Buff(mask, 0x28B48A8); //255
 if (sub_42F5E0(v1060)) {
     mplew.StartNode("Mask - " + map.get(0x28B48A8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1061 = mplew.writeInt("v1061");
     } else {
         v1062 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1066 = Check_Buff(mask, 0x28B48F0); //221
 if (sub_42F5E0(v1066)) {
     mplew.StartNode("Mask - " + map.get(0x28B48F0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1067 = mplew.writeInt("v1067");
     } else {
         v1068 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1072 = Check_Buff(mask, 0x28B4938); //222
 if (sub_42F5E0(v1072)) {
     mplew.StartNode("Mask - " + map.get(0x28B4938));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1073 = mplew.writeInt("v1073");
     } else {
         v1074 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1078 = Check_Buff(mask, 0x28B1218); //223
 if (sub_42F5E0(v1078)) {
     mplew.StartNode("Mask - " + map.get(0x28B1218));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1079 = mplew.writeInt("v1079");
     } else {
         v1080 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1084 = Check_Buff(mask, 0x28B4980); //224
 if (sub_42F5E0(v1084)) {
     mplew.StartNode("Mask - " + map.get(0x28B4980));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1085 = mplew.writeInt("v1085");
     } else {
         v1086 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1090 = Check_Buff(mask, 0x28B49C8); //225
 if (sub_42F5E0(v1090)) {
     mplew.StartNode("Mask - " + map.get(0x28B49C8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1091 = mplew.writeInt("v1091");
     } else {
         v1092 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1096 = Check_Buff(mask, 0x28B4A10); //226
 if (sub_42F5E0(v1096)) {
     mplew.StartNode("Mask - " + map.get(0x28B4A10));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1097 = mplew.writeInt("v1097");
     } else {
         v1098 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1102 = Check_Buff(mask, 0x28B4A58); //228
 if (sub_42F5E0(v1102)) {
     mplew.StartNode("Mask - " + map.get(0x28B4A58));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1103 = mplew.writeInt("v1103");
     } else {
         v1104 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1108 = Check_Buff(mask, 0x28B4AA0); //229
 if (sub_42F5E0(v1108)) {
     mplew.StartNode("Mask - " + map.get(0x28B4AA0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1109 = mplew.writeInt("v1109");
     } else {
         v1110 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1114 = Check_Buff(mask, 0x28B4AE8); //244
 if (sub_42F5E0(v1114)) {
     mplew.StartNode("Mask - " + map.get(0x28B4AE8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1115 = mplew.writeInt("v1115");
     } else {
         v1116 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1120 = Check_Buff(mask, 0x28B4B30); //310
 if (sub_42F5E0(v1120)) {
     mplew.StartNode("Mask - " + map.get(0x28B4B30));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1121 = mplew.writeInt("v1121");
     } else {
         v1122 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1126 = Check_Buff(mask, 0x28B4B78); //230
 if (sub_42F5E0(v1126)) {
     mplew.StartNode("Mask - " + map.get(0x28B4B78));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1127 = mplew.writeInt("v1127");
     } else {
         v1128 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1132 = Check_Buff(mask, 0x28B4BC0); //232
 if (sub_42F5E0(v1132)) {
     mplew.StartNode("Mask - " + map.get(0x28B4BC0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1133 = mplew.writeInt("v1133");
     } else {
         v1134 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1138 = Check_Buff(mask, 0x28B4C08); //231
 if (sub_42F5E0(v1138)) {
     mplew.StartNode("Mask - " + map.get(0x28B4C08));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1139 = mplew.writeInt("v1139");
     } else {
         v1140 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1144 = Check_Buff(mask, 0x28B4C50); //248
 if (sub_42F5E0(v1144)) {
     mplew.StartNode("Mask - " + map.get(0x28B4C50));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1145 = mplew.writeInt("v1145");
     } else {
         v1146 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1150 = Check_Buff(mask, 0x28B4C98); //233
 if (sub_42F5E0(v1150)) {
     mplew.StartNode("Mask - " + map.get(0x28B4C98));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1151 = mplew.writeInt("v1151");
     } else {
         v1152 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1156 = Check_Buff(mask, 0x28B4CE0); //234
 if (sub_42F5E0(v1156)) {
     mplew.StartNode("Mask - " + map.get(0x28B4CE0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1157 = mplew.writeInt("v1157");
     } else {
         v1158 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1162 = Check_Buff(mask, 0x28B4D28); //247
 if (sub_42F5E0(v1162)) {
     mplew.StartNode("Mask - " + map.get(0x28B4D28));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1163 = mplew.writeInt("v1163");
     } else {
         v1164 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1168 = Check_Buff(mask, 0x28B4D70); //249
 if (sub_42F5E0(v1168)) {
     mplew.StartNode("Mask - " + map.get(0x28B4D70));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1169 = mplew.writeInt("v1169");
     } else {
         v1170 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1174 = Check_Buff(mask, 0x28B4DB8); //235
 if (sub_42F5E0(v1174)) {
     mplew.StartNode("Mask - " + map.get(0x28B4DB8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1175 = mplew.writeInt("v1175");
     } else {
         v1176 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1180 = Check_Buff(mask, 0x28B12A8); //236
 if (sub_42F5E0(v1180)) {
     mplew.StartNode("Mask - " + map.get(0x28B12A8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1181 = mplew.writeInt("v1181");
     } else {
         v1182 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1186 = Check_Buff(mask, 0x28B4E00); //250
 if (sub_42F5E0(v1186)) {
     mplew.StartNode("Mask - " + map.get(0x28B4E00));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1187 = mplew.writeInt("v1187");
     } else {
         v1188 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1192 = Check_Buff(mask, 0x28B4E48); //245
 if (sub_42F5E0(v1192)) {
     mplew.StartNode("Mask - " + map.get(0x28B4E48));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1193 = mplew.writeInt("v1193");
     } else {
         v1194 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1198 = Check_Buff(mask, 0x28B4E90); //251
 if (sub_42F5E0(v1198)) {
     mplew.StartNode("Mask - " + map.get(0x28B4E90));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1199 = mplew.writeInt("v1199");
     } else {
         v1200 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1204 = Check_Buff(mask, 0x28B4ED8); //253
 if (sub_42F5E0(v1204)) {
     mplew.StartNode("Mask - " + map.get(0x28B4ED8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1205 = mplew.writeInt("v1205");
     } else {
         v1206 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1210 = Check_Buff(mask, 0x28B4F20); //254
 if (sub_42F5E0(v1210)) {
     mplew.StartNode("Mask - " + map.get(0x28B4F20));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1211 = mplew.writeInt("v1211");
     } else {
         v1212 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1216 = Check_Buff(mask, 0x28B4F68); //196
 if (sub_42F5E0(v1216)) {
     mplew.StartNode("Mask - " + map.get(0x28B4F68));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1217 = mplew.writeInt("v1217");
     } else {
         v1218 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1222 = Check_Buff(mask, 0x28B4FB0); //256
 if (sub_42F5E0(v1222)) {
     mplew.StartNode("Mask - " + map.get(0x28B4FB0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1223 = mplew.writeInt("v1223");
     } else {
         v1224 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1228 = Check_Buff(mask, 0x28B12F0); //257
 if (sub_42F5E0(v1228)) {
     mplew.StartNode("Mask - " + map.get(0x28B12F0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1229 = mplew.writeInt("v1229");
     } else {
         v1230 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1234 = Check_Buff(mask, 0x28B4FF8); //258
 if (sub_42F5E0(v1234)) {
     mplew.StartNode("Mask - " + map.get(0x28B4FF8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1235 = mplew.writeInt("v1235");
     } else {
         v1236 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1240 = Check_Buff(mask, 0x28B1338); //259
 if (sub_42F5E0(v1240)) {
     mplew.StartNode("Mask - " + map.get(0x28B1338));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1241 = mplew.writeInt("v1241");
     } else {
         v1242 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1246 = Check_Buff(mask, 0x28B5040); //260
 if (sub_42F5E0(v1246)) {
     mplew.StartNode("Mask - " + map.get(0x28B5040));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1247 = mplew.writeInt("v1247");
     } else {
         v1248 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1252 = Check_Buff(mask, 0x28B5088); //269
 if (sub_42F5E0(v1252)) {
     mplew.StartNode("Mask - " + map.get(0x28B5088));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1253 = mplew.writeInt("v1253");
     } else {
         v1254 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1258 = Check_Buff(mask, 0x28B50D0); //126
 if (sub_42F5E0(v1258)) {
     mplew.StartNode("Mask - " + map.get(0x28B50D0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1259 = mplew.writeInt("v1259");
     } else {
         v1260 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1264 = Check_Buff(mask, 0x28B5118); //263
 if (sub_42F5E0(v1264)) {
     mplew.StartNode("Mask - " + map.get(0x28B5118));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1265 = mplew.writeInt("v1265");
     } else {
         v1266 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1270 = Check_Buff(mask, 0x28B5160); //264
 if (sub_42F5E0(v1270)) {
     mplew.StartNode("Mask - " + map.get(0x28B5160));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1271 = mplew.writeInt("v1271");
     } else {
         v1272 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1276 = Check_Buff(mask, 0x28B51A8); //265
 if (sub_42F5E0(v1276)) {
     mplew.StartNode("Mask - " + map.get(0x28B51A8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1277 = mplew.writeInt("v1277");
     } else {
         v1278 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1282 = Check_Buff(mask, 0x28B51F0); //266
 if (sub_42F5E0(v1282)) {
     mplew.StartNode("Mask - " + map.get(0x28B51F0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1283 = mplew.writeInt("v1283");
     } else {
         v1284 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1288 = Check_Buff(mask, 0x28B5238); //267
 if (sub_42F5E0(v1288)) {
     mplew.StartNode("Mask - " + map.get(0x28B5238));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1289 = mplew.writeInt("v1289");
     } else {
         v1290 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1294 = Check_Buff(mask, 0x28B5280); //268
 if (sub_42F5E0(v1294)) {
     mplew.StartNode("Mask - " + map.get(0x28B5280));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1295 = mplew.writeInt("v1295");
     } else {
         v1296 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1300 = Check_Buff(mask, 0x28B52C8); //270
 if (sub_42F5E0(v1300)) {
     mplew.StartNode("Mask - " + map.get(0x28B52C8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1301 = mplew.writeInt("v1301");
     } else {
         v1302 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1306 = Check_Buff(mask, 0x28B5310); //271
 if (sub_42F5E0(v1306)) {
     mplew.StartNode("Mask - " + map.get(0x28B5310));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1307 = mplew.writeInt("v1307");
     } else {
         v1308 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1312 = Check_Buff(mask, 0x28B5358); //272
 if (sub_42F5E0(v1312)) {
     mplew.StartNode("Mask - " + map.get(0x28B5358));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1313 = mplew.writeInt("v1313");
     } else {
         v1314 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1318 = Check_Buff(mask, 0x28B53A0); //273
 if (sub_42F5E0(v1318)) {
     mplew.StartNode("Mask - " + map.get(0x28B53A0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1319 = mplew.writeInt("v1319");
     } else {
         v1320 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1324 = Check_Buff(mask, 0x28B53E8); //274
 if (sub_42F5E0(v1324)) {
     mplew.StartNode("Mask - " + map.get(0x28B53E8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1325 = mplew.writeInt("v1325");
     } else {
         v1326 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1330 = Check_Buff(mask, 0x28B5430); //275
 if (sub_42F5E0(v1330)) {
     mplew.StartNode("Mask - " + map.get(0x28B5430));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1331 = mplew.writeInt("v1331");
     } else {
         v1332 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1336 = Check_Buff(mask, 0x28B5478); //333
 if (sub_42F5E0(v1336)) {
     mplew.StartNode("Mask - " + map.get(0x28B5478));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1337 = mplew.writeInt("v1337");
     } else {
         v1338 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1342 = Check_Buff(mask, 0x28B54C0); //276
 if (sub_42F5E0(v1342)) {
     mplew.StartNode("Mask - " + map.get(0x28B54C0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1343 = mplew.writeInt("v1343");
     } else {
         v1344 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1348 = Check_Buff(mask, 0x28B5508); //277
 if (sub_42F5E0(v1348)) {
     mplew.StartNode("Mask - " + map.get(0x28B5508));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1349 = mplew.writeInt("v1349");
     } else {
         v1350 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1354 = Check_Buff(mask, 0x28B5550); //278
 if (sub_42F5E0(v1354)) {
     mplew.StartNode("Mask - " + map.get(0x28B5550));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1355 = mplew.writeInt("v1355");
     } else {
         v1356 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1360 = Check_Buff(mask, 0x28B5598); //279
 if (sub_42F5E0(v1360)) {
     mplew.StartNode("Mask - " + map.get(0x28B5598));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1361 = mplew.writeInt("v1361");
     } else {
         v1362 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1366 = Check_Buff(mask, 0x28B55E0); //280
 if (sub_42F5E0(v1366)) {
     mplew.StartNode("Mask - " + map.get(0x28B55E0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1367 = mplew.writeInt("v1367");
     } else {
         v1368 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1372 = Check_Buff(mask, 0x28B5628); //281
 if (sub_42F5E0(v1372)) {
     mplew.StartNode("Mask - " + map.get(0x28B5628));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1373 = mplew.writeInt("v1373");
     } else {
         v1374 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1378 = Check_Buff(mask, 0x28B5670); //282
 if (sub_42F5E0(v1378)) {
     mplew.StartNode("Mask - " + map.get(0x28B5670));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1379 = mplew.writeInt("v1379");
     } else {
         v1380 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1384 = Check_Buff(mask, 0x28B56B8); //283
 if (sub_42F5E0(v1384)) {
     mplew.StartNode("Mask - " + map.get(0x28B56B8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1385 = mplew.writeInt("v1385");
     } else {
         v1386 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1390 = Check_Buff(mask, 0x28B5700); //325
 if (sub_42F5E0(v1390)) {
     mplew.StartNode("Mask - " + map.get(0x28B5700));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1391 = mplew.writeInt("v1391");
     } else {
         v1392 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1396 = Check_Buff(mask, 0x28B5748); //326
 if (sub_42F5E0(v1396)) {
     mplew.StartNode("Mask - " + map.get(0x28B5748));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1397 = mplew.writeInt("v1397");
     } else {
         v1398 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1402 = Check_Buff(mask, 0x28B5790); //327
 if (sub_42F5E0(v1402)) {
     mplew.StartNode("Mask - " + map.get(0x28B5790));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1403 = mplew.writeInt("v1403");
     } else {
         v1404 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1408 = Check_Buff(mask, 0x28B57D8); //284
 if (sub_42F5E0(v1408)) {
     mplew.StartNode("Mask - " + map.get(0x28B57D8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1409 = mplew.writeInt("v1409");
     } else {
         v1410 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1414 = Check_Buff(mask, 0x28B5820); //285
 if (sub_42F5E0(v1414)) {
     mplew.StartNode("Mask - " + map.get(0x28B5820));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1415 = mplew.writeInt("v1415");
     } else {
         v1416 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1420 = Check_Buff(mask, 0x28B5868); //286
 if (sub_42F5E0(v1420)) {
     mplew.StartNode("Mask - " + map.get(0x28B5868));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1421 = mplew.writeInt("v1421");
     } else {
         v1422 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1426 = Check_Buff(mask, 0x28B1800); //287
 if (sub_42F5E0(v1426)) {
     mplew.StartNode("Mask - " + map.get(0x28B1800));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1427 = mplew.writeInt("v1427");
     } else {
         v1428 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1432 = Check_Buff(mask, 0x28B58B0); //288
 if (sub_42F5E0(v1432)) {
     mplew.StartNode("Mask - " + map.get(0x28B58B0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1433 = mplew.writeInt("v1433");
     } else {
         v1434 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1438 = Check_Buff(mask, 0x28B58F8); //289
 if (sub_42F5E0(v1438)) {
     mplew.StartNode("Mask - " + map.get(0x28B58F8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1439 = mplew.writeInt("v1439");
     } else {
         v1440 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1444 = Check_Buff(mask, 0x28B5940); //290
 if (sub_42F5E0(v1444)) {
     mplew.StartNode("Mask - " + map.get(0x28B5940));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1445 = mplew.writeInt("v1445");
     } else {
         v1446 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1450 = Check_Buff(mask, 0x28B1380); //291
 if (sub_42F5E0(v1450)) {
     mplew.StartNode("Mask - " + map.get(0x28B1380));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1451 = mplew.writeInt("v1451");
     } else {
         v1452 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1456 = Check_Buff(mask, 0x28B5988); //295
 if (sub_42F5E0(v1456)) {
     mplew.StartNode("Mask - " + map.get(0x28B5988));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1457 = mplew.writeInt("v1457");
     } else {
         v1458 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1462 = Check_Buff(mask, 0x28B59D0); //292
 if (sub_42F5E0(v1462)) {
     mplew.StartNode("Mask - " + map.get(0x28B59D0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1463 = mplew.writeInt("v1463");
     } else {
         v1464 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1468 = Check_Buff(mask, 0x28B5A18); //293
 if (sub_42F5E0(v1468)) {
     mplew.StartNode("Mask - " + map.get(0x28B5A18));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1469 = mplew.writeInt("v1469");
     } else {
         v1470 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1474 = Check_Buff(mask, 0x28B5A60); //294
 if (sub_42F5E0(v1474)) {
     mplew.StartNode("Mask - " + map.get(0x28B5A60));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1475 = mplew.writeInt("v1475");
     } else {
         v1476 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1480 = Check_Buff(mask, 0x28B5AA8); //296
 if (sub_42F5E0(v1480)) {
     mplew.StartNode("Mask - " + map.get(0x28B5AA8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1481 = mplew.writeInt("v1481");
     } else {
         v1482 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1486 = Check_Buff(mask, 0x28B5AF0); //297
 if (sub_42F5E0(v1486)) {
     mplew.StartNode("Mask - " + map.get(0x28B5AF0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1487 = mplew.writeInt("v1487");
     } else {
         v1488 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1492 = Check_Buff(mask, 0x28B5B38); //298
 if (sub_42F5E0(v1492)) {
     mplew.StartNode("Mask - " + map.get(0x28B5B38));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1493 = mplew.writeInt("v1493");
     } else {
         v1494 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1498 = Check_Buff(mask, 0x28B5B80); //299
 if (sub_42F5E0(v1498)) {
     mplew.StartNode("Mask - " + map.get(0x28B5B80));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1499 = mplew.writeInt("v1499");
     } else {
         v1500 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1504 = Check_Buff(mask, 0x28B5BC8); //201
 if (sub_42F5E0(v1504)) {
     mplew.StartNode("Mask - " + map.get(0x28B5BC8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1505 = mplew.writeInt("v1505");
     } else {
         v1506 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1510 = Check_Buff(mask, 0x28B5C10); //300
 if (sub_42F5E0(v1510)) {
     mplew.StartNode("Mask - " + map.get(0x28B5C10));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1511 = mplew.writeInt("v1511");
     } else {
         v1512 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1516 = Check_Buff(mask, 0x28B5C58); //301
 if (sub_42F5E0(v1516)) {
     mplew.StartNode("Mask - " + map.get(0x28B5C58));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1517 = mplew.writeInt("v1517");
     } else {
         v1518 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1522 = Check_Buff(mask, 0x28B5CA0); //302
 if (sub_42F5E0(v1522)) {
     mplew.StartNode("Mask - " + map.get(0x28B5CA0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1523 = mplew.writeInt("v1523");
     } else {
         v1524 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1528 = Check_Buff(mask, 0x28B5CE8); //303
 if (sub_42F5E0(v1528)) {
     mplew.StartNode("Mask - " + map.get(0x28B5CE8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1529 = mplew.writeInt("v1529");
     } else {
         v1530 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1534 = Check_Buff(mask, 0x28B5D30); //304
 if (sub_42F5E0(v1534)) {
     mplew.StartNode("Mask - " + map.get(0x28B5D30));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1535 = mplew.writeInt("v1535");
     } else {
         v1536 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1540 = Check_Buff(mask, 0x28B1458); //305
 if (sub_42F5E0(v1540)) {
     mplew.StartNode("Mask - " + map.get(0x28B1458));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1541 = mplew.writeInt("v1541");
     } else {
         v1542 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1546 = Check_Buff(mask, 0x28B5D78); //308
 if (sub_42F5E0(v1546)) {
     mplew.StartNode("Mask - " + map.get(0x28B5D78));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1547 = mplew.writeInt("v1547");
     } else {
         v1548 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1552 = Check_Buff(mask, 0x28B5DC0); //311
 if (sub_42F5E0(v1552)) {
     mplew.StartNode("Mask - " + map.get(0x28B5DC0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1553 = mplew.writeInt("v1553");
     } else {
         v1554 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1558 = Check_Buff(mask, 0x28B5E08); //312
 if (sub_42F5E0(v1558)) {
     mplew.StartNode("Mask - " + map.get(0x28B5E08));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1559 = mplew.writeInt("v1559");
     } else {
         v1560 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1564 = Check_Buff(mask, 0x28B5E50); //313
 if (sub_42F5E0(v1564)) {
     mplew.StartNode("Mask - " + map.get(0x28B5E50));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1565 = mplew.writeInt("v1565");
     } else {
         v1566 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1570 = Check_Buff(mask, 0x28B5E98); //314
 if (sub_42F5E0(v1570)) {
     mplew.StartNode("Mask - " + map.get(0x28B5E98));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1571 = mplew.writeInt("v1571");
     } else {
         v1572 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1576 = Check_Buff(mask, 0x28B5EE0); //315
 if (sub_42F5E0(v1576)) {
     mplew.StartNode("Mask - " + map.get(0x28B5EE0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1577 = mplew.writeInt("v1577");
     } else {
         v1578 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1582 = Check_Buff(mask, 0x28B5F28); //316
 if (sub_42F5E0(v1582)) {
     mplew.StartNode("Mask - " + map.get(0x28B5F28));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1583 = mplew.writeInt("v1583");
     } else {
         v1584 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1588 = Check_Buff(mask, 0x28B5F70); //317
 if (sub_42F5E0(v1588)) {
     mplew.StartNode("Mask - " + map.get(0x28B5F70));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1589 = mplew.writeInt("v1589");
     } else {
         v1590 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1594 = Check_Buff(mask, 0x28B5FB8); //318
 if (sub_42F5E0(v1594)) {
     mplew.StartNode("Mask - " + map.get(0x28B5FB8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1595 = mplew.writeInt("v1595");
     } else {
         v1596 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1600 = Check_Buff(mask, 0x28B6000); //319
 if (sub_42F5E0(v1600)) {
     mplew.StartNode("Mask - " + map.get(0x28B6000));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1601 = mplew.writeInt("v1601");
     } else {
         v1602 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1606 = Check_Buff(mask, 0x28B6048); //320
 if (sub_42F5E0(v1606)) {
     mplew.StartNode("Mask - " + map.get(0x28B6048));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1607 = mplew.writeInt("v1607");
     } else {
         v1608 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1612 = Check_Buff(mask, 0x28B6090); //321
 if (sub_42F5E0(v1612)) {
     mplew.StartNode("Mask - " + map.get(0x28B6090));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1613 = mplew.writeInt("v1613");
     } else {
         v1614 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1618 = Check_Buff(mask, 0x28B60D8); //322
 if (sub_42F5E0(v1618)) {
     mplew.StartNode("Mask - " + map.get(0x28B60D8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1619 = mplew.writeInt("v1619");
     } else {
         v1620 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1624 = Check_Buff(mask, 0x28B6120); //329
 if (sub_42F5E0(v1624)) {
     mplew.StartNode("Mask - " + map.get(0x28B6120));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1625 = mplew.writeInt("v1625");
     } else {
         v1626 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1630 = Check_Buff(mask, 0x28B6168); //337
 if (sub_42F5E0(v1630)) {
     mplew.StartNode("Mask - " + map.get(0x28B6168));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1631 = mplew.writeInt("v1631");
     } else {
         v1632 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1636 = Check_Buff(mask, 0x28B61B0); //331
 if (sub_42F5E0(v1636)) {
     mplew.StartNode("Mask - " + map.get(0x28B61B0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1637 = mplew.writeInt("v1637");
     } else {
         v1638 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1642 = Check_Buff(mask, 0x28B61F8); //323
 if (sub_42F5E0(v1642)) {
     mplew.StartNode("Mask - " + map.get(0x28B61F8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1643 = mplew.writeInt("v1643");
     } else {
         v1644 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1648 = Check_Buff(mask, 0x28B6240); //330
 if (sub_42F5E0(v1648)) {
     mplew.StartNode("Mask - " + map.get(0x28B6240));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1649 = mplew.writeInt("v1649");
     } else {
         v1650 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1654 = Check_Buff(mask, 0x28B6288); //334
 if (sub_42F5E0(v1654)) {
     mplew.StartNode("Mask - " + map.get(0x28B6288));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1655 = mplew.writeInt("v1655");
     } else {
         v1656 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1660 = Check_Buff(mask, 0x28B62D0); //332
 if (sub_42F5E0(v1660)) {
     mplew.StartNode("Mask - " + map.get(0x28B62D0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1661 = mplew.writeInt("v1661");
     } else {
         v1662 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1666 = Check_Buff(mask, 0x28B6318); //335
 if (sub_42F5E0(v1666)) {
     mplew.StartNode("Mask - " + map.get(0x28B6318));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1667 = mplew.writeInt("v1667");
     } else {
         v1668 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1672 = Check_Buff(mask, 0x28B6360); //336
 if (sub_42F5E0(v1672)) {
     mplew.StartNode("Mask - " + map.get(0x28B6360));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1673 = mplew.writeInt("v1673");
     } else {
         v1674 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1678 = Check_Buff(mask, 0x28B63A8); //338
 if (sub_42F5E0(v1678)) {
     mplew.StartNode("Mask - " + map.get(0x28B63A8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1679 = mplew.writeInt("v1679");
     } else {
         v1680 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1684 = Check_Buff(mask, 0x28B14A0); //340
 if (sub_42F5E0(v1684)) {
     mplew.StartNode("Mask - " + map.get(0x28B14A0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1685 = mplew.writeInt("v1685");
     } else {
         v1686 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1690 = Check_Buff(mask, 0x28B63F0); //341
 if (sub_42F5E0(v1690)) {
     mplew.StartNode("Mask - " + map.get(0x28B63F0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1691 = mplew.writeInt("v1691");
     } else {
         v1692 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1696 = Check_Buff(mask, 0x28B6438); //342
 if (sub_42F5E0(v1696)) {
     mplew.StartNode("Mask - " + map.get(0x28B6438));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1697 = mplew.writeInt("v1697");
     } else {
         v1698 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1702 = Check_Buff(mask, 0x28B14E8); //343
 if (sub_42F5E0(v1702)) {
     mplew.StartNode("Mask - " + map.get(0x28B14E8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1703 = mplew.writeInt("v1703");
     } else {
         v1704 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1708 = Check_Buff(mask, 0x28B6480); //344
 if (sub_42F5E0(v1708)) {
     mplew.StartNode("Mask - " + map.get(0x28B6480));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1709 = mplew.writeInt("v1709");
     } else {
         v1710 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1714 = Check_Buff(mask, 0x28B64C8); //345
 if (sub_42F5E0(v1714)) {
     mplew.StartNode("Mask - " + map.get(0x28B64C8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1715 = mplew.writeInt("v1715");
     } else {
         v1716 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1720 = Check_Buff(mask, 0x28B6510); //346
 if (sub_42F5E0(v1720)) {
     mplew.StartNode("Mask - " + map.get(0x28B6510));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1721 = mplew.writeInt("v1721");
     } else {
         v1722 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1726 = Check_Buff(mask, 0x28B6558); //347
 if (sub_42F5E0(v1726)) {
     mplew.StartNode("Mask - " + map.get(0x28B6558));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1727 = mplew.writeInt("v1727");
     } else {
         v1728 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1732 = Check_Buff(mask, 0x28B65A0); //348
 if (sub_42F5E0(v1732)) {
     mplew.StartNode("Mask - " + map.get(0x28B65A0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1733 = mplew.writeInt("v1733");
     } else {
         v1734 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1738 = Check_Buff(mask, 0x28B65E8); //349
 if (sub_42F5E0(v1738)) {
     mplew.StartNode("Mask - " + map.get(0x28B65E8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1739 = mplew.writeInt("v1739");
     } else {
         v1740 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1744 = Check_Buff(mask, 0x28B6630); //350
 if (sub_42F5E0(v1744)) {
     mplew.StartNode("Mask - " + map.get(0x28B6630));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1745 = mplew.writeInt("v1745");
     } else {
         v1746 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1750 = Check_Buff(mask, 0x28B6678); //351
 if (sub_42F5E0(v1750)) {
     mplew.StartNode("Mask - " + map.get(0x28B6678));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1751 = mplew.writeInt("v1751");
     } else {
         v1752 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1756 = Check_Buff(mask, 0x28B66C0); //352
 if (sub_42F5E0(v1756)) {
     mplew.StartNode("Mask - " + map.get(0x28B66C0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1757 = mplew.writeInt("v1757");
     } else {
         v1758 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1762 = Check_Buff(mask, 0x28B6708); //353
 if (sub_42F5E0(v1762)) {
     mplew.StartNode("Mask - " + map.get(0x28B6708));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1763 = mplew.writeInt("v1763");
     } else {
         v1764 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1768 = Check_Buff(mask, 0x28B6750); //355
 if (sub_42F5E0(v1768)) {
     mplew.StartNode("Mask - " + map.get(0x28B6750));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1769 = mplew.writeInt("v1769");
     } else {
         v1770 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1774 = Check_Buff(mask, 0x28B6798); //354
 if (sub_42F5E0(v1774)) {
     mplew.StartNode("Mask - " + map.get(0x28B6798));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1775 = mplew.writeInt("v1775");
     } else {
         v1776 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1780 = Check_Buff(mask, 0x28B67E0); //146
 if (sub_42F5E0(v1780)) {
     mplew.StartNode("Mask - " + map.get(0x28B67E0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1781 = mplew.writeInt("v1781");
     } else {
         v1782 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1786 = Check_Buff(mask, 0x28B6828); //356
 if (sub_42F5E0(v1786)) {
     mplew.StartNode("Mask - " + map.get(0x28B6828));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1787 = mplew.writeInt("v1787");
     } else {
         v1788 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1792 = Check_Buff(mask, 0x28B1608); //357
 if (sub_42F5E0(v1792)) {
     mplew.StartNode("Mask - " + map.get(0x28B1608));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1793 = mplew.writeInt("v1793");
     } else {
         v1794 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1798 = Check_Buff(mask, 0x28B1650); //358
 if (sub_42F5E0(v1798)) {
     mplew.StartNode("Mask - " + map.get(0x28B1650));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1799 = mplew.writeInt("v1799");
     } else {
         v1800 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1804 = Check_Buff(mask, 0x28B6870); //359
 if (sub_42F5E0(v1804)) {
     mplew.StartNode("Mask - " + map.get(0x28B6870));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1805 = mplew.writeInt("v1805");
     } else {
         v1806 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1810 = Check_Buff(mask, 0x28B68B8); //360
 if (sub_42F5E0(v1810)) {
     mplew.StartNode("Mask - " + map.get(0x28B68B8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1811 = mplew.writeInt("v1811");
     } else {
         v1812 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1816 = Check_Buff(mask, 0x28B15C0); //361
 if (sub_42F5E0(v1816)) {
     mplew.StartNode("Mask - " + map.get(0x28B15C0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1817 = mplew.writeInt("v1817");
     } else {
         v1818 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1822 = Check_Buff(mask, 0x28B6900); //362
 if (sub_42F5E0(v1822)) {
     mplew.StartNode("Mask - " + map.get(0x28B6900));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1823 = mplew.writeInt("v1823");
     } else {
         v1824 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1828 = Check_Buff(mask, 0x28B6948); //363
 if (sub_42F5E0(v1828)) {
     mplew.StartNode("Mask - " + map.get(0x28B6948));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1829 = mplew.writeInt("v1829");
     } else {
         v1830 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1834 = Check_Buff(mask, 0x28B6990); //364
 if (sub_42F5E0(v1834)) {
     mplew.StartNode("Mask - " + map.get(0x28B6990));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1835 = mplew.writeInt("v1835");
     } else {
         v1836 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1840 = Check_Buff(mask, 0x28B69D8); //365
 if (sub_42F5E0(v1840)) {
     mplew.StartNode("Mask - " + map.get(0x28B69D8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1841 = mplew.writeInt("v1841");
     } else {
         v1842 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1846 = Check_Buff(mask, 0x28B6A20); //366
 if (sub_42F5E0(v1846)) {
     mplew.StartNode("Mask - " + map.get(0x28B6A20));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1847 = mplew.writeInt("v1847");
     } else {
         v1848 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1852 = Check_Buff(mask, 0x28B6A68); //367
 if (sub_42F5E0(v1852)) {
     mplew.StartNode("Mask - " + map.get(0x28B6A68));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1853 = mplew.writeInt("v1853");
     } else {
         v1854 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1858 = Check_Buff(mask, 0x28B6AB0); //368
 if (sub_42F5E0(v1858)) {
     mplew.StartNode("Mask - " + map.get(0x28B6AB0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1859 = mplew.writeInt("v1859");
     } else {
         v1860 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1864 = Check_Buff(mask, 0x28B6AF8); //369
 if (sub_42F5E0(v1864)) {
     mplew.StartNode("Mask - " + map.get(0x28B6AF8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1865 = mplew.writeInt("v1865");
     } else {
         v1866 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1870 = Check_Buff(mask, 0x28B6B40); //370
 if (sub_42F5E0(v1870)) {
     mplew.StartNode("Mask - " + map.get(0x28B6B40));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1871 = mplew.writeInt("v1871");
     } else {
         v1872 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1876 = Check_Buff(mask, 0x28B6B88); //371
 if (sub_42F5E0(v1876)) {
     mplew.StartNode("Mask - " + map.get(0x28B6B88));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1877 = mplew.writeInt("v1877");
     } else {
         v1878 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1882 = Check_Buff(mask, 0x28B6BD0); //372
 if (sub_42F5E0(v1882)) {
     mplew.StartNode("Mask - " + map.get(0x28B6BD0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1883 = mplew.writeInt("v1883");
     } else {
         v1884 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1888 = Check_Buff(mask, 0x28B6C18); //373
 if (sub_42F5E0(v1888)) {
     mplew.StartNode("Mask - " + map.get(0x28B6C18));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1889 = mplew.writeInt("v1889");
     } else {
         v1890 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1894 = Check_Buff(mask, 0x28B6C60); //374
 if (sub_42F5E0(v1894)) {
     mplew.StartNode("Mask - " + map.get(0x28B6C60));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1895 = mplew.writeInt("v1895");
     } else {
         v1896 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1900 = Check_Buff(mask, 0x28B6CA8); //375
 if (sub_42F5E0(v1900)) {
     mplew.StartNode("Mask - " + map.get(0x28B6CA8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1901 = mplew.writeInt("v1901");
     } else {
         v1902 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1906 = Check_Buff(mask, 0x28B6CF0); //376
 if (sub_42F5E0(v1906)) {
     mplew.StartNode("Mask - " + map.get(0x28B6CF0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1907 = mplew.writeInt("v1907");
     } else {
         v1908 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1912 = Check_Buff(mask, 0x28B6D38); //377
 if (sub_42F5E0(v1912)) {
     mplew.StartNode("Mask - " + map.get(0x28B6D38));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1913 = mplew.writeInt("v1913");
     } else {
         v1914 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1918 = Check_Buff(mask, 0x28B6D80); //379
 if (sub_42F5E0(v1918)) {
     mplew.StartNode("Mask - " + map.get(0x28B6D80));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1919 = mplew.writeInt("v1919");
     } else {
         v1920 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1924 = Check_Buff(mask, 0x28B6DC8); //380
 if (sub_42F5E0(v1924)) {
     mplew.StartNode("Mask - " + map.get(0x28B6DC8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1925 = mplew.writeInt("v1925");
     } else {
         v1926 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1930 = Check_Buff(mask, 0x28B6E10); //381
 if (sub_42F5E0(v1930)) {
     mplew.StartNode("Mask - " + map.get(0x28B6E10));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1931 = mplew.writeInt("v1931");
     } else {
         v1932 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1936 = Check_Buff(mask, 0x28B6E58); //382
 if (sub_42F5E0(v1936)) {
     mplew.StartNode("Mask - " + map.get(0x28B6E58));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1937 = mplew.writeInt("v1937");
     } else {
         v1938 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1942 = Check_Buff(mask, 0x28B6EA0); //383
 if (sub_42F5E0(v1942)) {
     mplew.StartNode("Mask - " + map.get(0x28B6EA0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1943 = mplew.writeInt("v1943");
     } else {
         v1944 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1948 = Check_Buff(mask, 0x28B6EE8); //384
 if (sub_42F5E0(v1948)) {
     mplew.StartNode("Mask - " + map.get(0x28B6EE8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1949 = mplew.writeInt("v1949");
     } else {
         v1950 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1954 = Check_Buff(mask, 0x28B6F30); //385
 if (sub_42F5E0(v1954)) {
     mplew.StartNode("Mask - " + map.get(0x28B6F30));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1955 = mplew.writeInt("v1955");
     } else {
         v1956 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1960 = Check_Buff(mask, 0x28B6F78); //386
 if (sub_42F5E0(v1960)) {
     mplew.StartNode("Mask - " + map.get(0x28B6F78));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1961 = mplew.writeInt("v1961");
     } else {
         v1962 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1966 = Check_Buff(mask, 0x28B6FC0); //387
 if (sub_42F5E0(v1966)) {
     mplew.StartNode("Mask - " + map.get(0x28B6FC0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1967 = mplew.writeInt("v1967");
     } else {
         v1968 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1972 = Check_Buff(mask, 0x28B7008); //388
 if (sub_42F5E0(v1972)) {
     mplew.StartNode("Mask - " + map.get(0x28B7008));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1973 = mplew.writeInt("v1973");
     } else {
         v1974 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1978 = Check_Buff(mask, 0x28B7050); //389
 if (sub_42F5E0(v1978)) {
     mplew.StartNode("Mask - " + map.get(0x28B7050));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1979 = mplew.writeInt("v1979");
     } else {
         v1980 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1984 = Check_Buff(mask, 0x28B7098); //390
 if (sub_42F5E0(v1984)) {
     mplew.StartNode("Mask - " + map.get(0x28B7098));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1985 = mplew.writeInt("v1985");
     } else {
         v1986 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1990 = Check_Buff(mask, 0x28B70E0); //391
 if (sub_42F5E0(v1990)) {
     mplew.StartNode("Mask - " + map.get(0x28B70E0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1991 = mplew.writeInt("v1991");
     } else {
         v1992 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v1996 = Check_Buff(mask, 0x28B7128); //394
 if (sub_42F5E0(v1996)) {
     mplew.StartNode("Mask - " + map.get(0x28B7128));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v1997 = mplew.writeInt("v1997");
     } else {
         v1998 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2002 = Check_Buff(mask, 0x28B7170); //395
 if (sub_42F5E0(v2002)) {
     mplew.StartNode("Mask - " + map.get(0x28B7170));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2003 = mplew.writeInt("v2003");
     } else {
         v2004 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2008 = Check_Buff(mask, 0x28B71B8); //396
 if (sub_42F5E0(v2008)) {
     mplew.StartNode("Mask - " + map.get(0x28B71B8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2009 = mplew.writeInt("v2009");
     } else {
         v2010 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2014 = Check_Buff(mask, 0x28B7200); //397
 if (sub_42F5E0(v2014)) {
     mplew.StartNode("Mask - " + map.get(0x28B7200));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2015 = mplew.writeInt("v2015");
     } else {
         v2016 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2020 = Check_Buff(mask, 0x28B7248); //398
 if (sub_42F5E0(v2020)) {
     mplew.StartNode("Mask - " + map.get(0x28B7248));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2021 = mplew.writeInt("v2021");
     } else {
         v2022 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2026 = Check_Buff(mask, 0x28B7290); //399
 if (sub_42F5E0(v2026)) {
     mplew.StartNode("Mask - " + map.get(0x28B7290));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2027 = mplew.writeInt("v2027");
     } else {
         v2028 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2032 = Check_Buff(mask, 0x28B72D8); //403
 if (sub_42F5E0(v2032)) {
     mplew.StartNode("Mask - " + map.get(0x28B72D8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2033 = mplew.writeInt("v2033");
     } else {
         v2034 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2038 = Check_Buff(mask, 0x28B7320); //404
 if (sub_42F5E0(v2038)) {
     mplew.StartNode("Mask - " + map.get(0x28B7320));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2039 = mplew.writeInt("v2039");
     } else {
         v2040 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2044 = Check_Buff(mask, 0x28B7368); //405
 if (sub_42F5E0(v2044)) {
     mplew.StartNode("Mask - " + map.get(0x28B7368));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2045 = mplew.writeInt("v2045");
     } else {
         v2046 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2050 = Check_Buff(mask, 0x28B73B0); //406
 if (sub_42F5E0(v2050)) {
     mplew.StartNode("Mask - " + map.get(0x28B73B0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2051 = mplew.writeInt("v2051");
     } else {
         v2052 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2056 = Check_Buff(mask, 0x28B73F8); //407
 if (sub_42F5E0(v2056)) {
     mplew.StartNode("Mask - " + map.get(0x28B73F8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2057 = mplew.writeInt("v2057");
     } else {
         v2058 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2062 = Check_Buff(mask, 0x28B7440); //408
 if (sub_42F5E0(v2062)) {
     mplew.StartNode("Mask - " + map.get(0x28B7440));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2063 = mplew.writeInt("v2063");
     } else {
         v2064 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2068 = Check_Buff(mask, 0x28B7488); //409
 if (sub_42F5E0(v2068)) {
     mplew.StartNode("Mask - " + map.get(0x28B7488));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2069 = mplew.writeInt("v2069");
     } else {
         v2070 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2074 = Check_Buff(mask, 0x28B74D0); //410
 if (sub_42F5E0(v2074)) {
     mplew.StartNode("Mask - " + map.get(0x28B74D0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2075 = mplew.writeInt("v2075");
     } else {
         v2076 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2080 = Check_Buff(mask, 0x28B7518); //414
 if (sub_42F5E0(v2080)) {
     mplew.StartNode("Mask - " + map.get(0x28B7518));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2081 = mplew.writeInt("v2081");
     } else {
         v2082 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2086 = Check_Buff(mask, 0x28B7560); //392
 if (sub_42F5E0(v2086)) {
     mplew.StartNode("Mask - " + map.get(0x28B7560));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2087 = mplew.writeInt("v2087");
     } else {
         v2088 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2092 = Check_Buff(mask, 0x28B75A8); //393
 if (sub_42F5E0(v2092)) {
     mplew.StartNode("Mask - " + map.get(0x28B75A8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2093 = mplew.writeInt("v2093");
     } else {
         v2094 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2098 = Check_Buff(mask, 0x28B75F0); //411
 if (sub_42F5E0(v2098)) {
     mplew.StartNode("Mask - " + map.get(0x28B75F0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2099 = mplew.writeInt("v2099");
     } else {
         v2100 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2104 = Check_Buff(mask, 0x28B7638); //413
 if (sub_42F5E0(v2104)) {
     mplew.StartNode("Mask - " + map.get(0x28B7638));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2105 = mplew.writeInt("v2105");
     } else {
         v2106 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2110 = Check_Buff(mask, 0x28B7680); //476
 if (sub_42F5E0(v2110)) {
     mplew.StartNode("Mask - " + map.get(0x28B7680));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2111 = mplew.writeInt("v2111");
     } else {
         v2112 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2116 = Check_Buff(mask, 0x28B76C8); //415
 if (sub_42F5E0(v2116)) {
     mplew.StartNode("Mask - " + map.get(0x28B76C8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2117 = mplew.writeInt("v2117");
     } else {
         v2118 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2122 = Check_Buff(mask, 0x28B7710); //416
 if (sub_42F5E0(v2122)) {
     mplew.StartNode("Mask - " + map.get(0x28B7710));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2123 = mplew.writeInt("v2123");
     } else {
         v2124 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2128 = Check_Buff(mask, 0x28B7758); //417
 if (sub_42F5E0(v2128)) {
     mplew.StartNode("Mask - " + map.get(0x28B7758));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2129 = mplew.writeInt("v2129");
     } else {
         v2130 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2134 = Check_Buff(mask, 0x28B77A0); //418
 if (sub_42F5E0(v2134)) {
     mplew.StartNode("Mask - " + map.get(0x28B77A0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2135 = mplew.writeInt("v2135");
     } else {
         v2136 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2140 = Check_Buff(mask, 0x28B77E8); //419
 if (sub_42F5E0(v2140)) {
     mplew.StartNode("Mask - " + map.get(0x28B77E8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2141 = mplew.writeInt("v2141");
     } else {
         v2142 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2146 = Check_Buff(mask, 0x28B7830); //420
 if (sub_42F5E0(v2146)) {
     mplew.StartNode("Mask - " + map.get(0x28B7830));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2147 = mplew.writeInt("v2147");
     } else {
         v2148 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2152 = Check_Buff(mask, 0x28B7878); //421
 if (sub_42F5E0(v2152)) {
     mplew.StartNode("Mask - " + map.get(0x28B7878));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2153 = mplew.writeInt("v2153");
     } else {
         v2154 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2158 = Check_Buff(mask, 0x28B78C0); //422
 if (sub_42F5E0(v2158)) {
     mplew.StartNode("Mask - " + map.get(0x28B78C0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2159 = mplew.writeInt("v2159");
     } else {
         v2160 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2164 = Check_Buff(mask, 0x28B7908); //423
 if (sub_42F5E0(v2164)) {
     mplew.StartNode("Mask - " + map.get(0x28B7908));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2165 = mplew.writeInt("v2165");
     } else {
         v2166 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2170 = Check_Buff(mask, 0x28B7950); //424
 if (sub_42F5E0(v2170)) {
     mplew.StartNode("Mask - " + map.get(0x28B7950));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2171 = mplew.writeInt("v2171");
     } else {
         v2172 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2176 = Check_Buff(mask, 0x28B7998); //425
 if (sub_42F5E0(v2176)) {
     mplew.StartNode("Mask - " + map.get(0x28B7998));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2177 = mplew.writeInt("v2177");
     } else {
         v2178 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2182 = Check_Buff(mask, 0x28B79E0); //426
 if (sub_42F5E0(v2182)) {
     mplew.StartNode("Mask - " + map.get(0x28B79E0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2183 = mplew.writeInt("v2183");
     } else {
         v2184 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2188 = Check_Buff(mask, 0x28B7A28); //427
 if (sub_42F5E0(v2188)) {
     mplew.StartNode("Mask - " + map.get(0x28B7A28));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2189 = mplew.writeInt("v2189");
     } else {
         v2190 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2194 = Check_Buff(mask, 0x28B7A70); //428
 if (sub_42F5E0(v2194)) {
     mplew.StartNode("Mask - " + map.get(0x28B7A70));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2195 = mplew.writeInt("v2195");
     } else {
         v2196 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2200 = Check_Buff(mask, 0x28B7AB8); //429
 if (sub_42F5E0(v2200)) {
     mplew.StartNode("Mask - " + map.get(0x28B7AB8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2201 = mplew.writeInt("v2201");
     } else {
         v2202 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2206 = Check_Buff(mask, 0x28B7B00); //430
 if (sub_42F5E0(v2206)) {
     mplew.StartNode("Mask - " + map.get(0x28B7B00));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2207 = mplew.writeInt("v2207");
     } else {
         v2208 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2212 = Check_Buff(mask, 0x28B7B48); //431
 if (sub_42F5E0(v2212)) {
     mplew.StartNode("Mask - " + map.get(0x28B7B48));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2213 = mplew.writeInt("v2213");
     } else {
         v2214 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2218 = Check_Buff(mask, 0x28B7B90); //432
 if (sub_42F5E0(v2218)) {
     mplew.StartNode("Mask - " + map.get(0x28B7B90));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2219 = mplew.writeInt("v2219");
     } else {
         v2220 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2224 = Check_Buff(mask, 0x28B7BD8); //433
 if (sub_42F5E0(v2224)) {
     mplew.StartNode("Mask - " + map.get(0x28B7BD8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2225 = mplew.writeInt("v2225");
     } else {
         v2226 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2230 = Check_Buff(mask, 0x28B7C20); //434
 if (sub_42F5E0(v2230)) {
     mplew.StartNode("Mask - " + map.get(0x28B7C20));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2231 = mplew.writeInt("v2231");
     } else {
         v2232 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2236 = Check_Buff(mask, 0x28B7C68); //435
 if (sub_42F5E0(v2236)) {
     mplew.StartNode("Mask - " + map.get(0x28B7C68));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2237 = mplew.writeInt("v2237");
     } else {
         v2238 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2242 = Check_Buff(mask, 0x28B7CB0); //436
 if (sub_42F5E0(v2242)) {
     mplew.StartNode("Mask - " + map.get(0x28B7CB0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2243 = mplew.writeInt("v2243");
     } else {
         v2244 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2248 = Check_Buff(mask, 0x28B7CF8); //437
 if (sub_42F5E0(v2248)) {
     mplew.StartNode("Mask - " + map.get(0x28B7CF8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2249 = mplew.writeInt("v2249");
     } else {
         v2250 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2254 = Check_Buff(mask, 0x28B7D40); //438
 if (sub_42F5E0(v2254)) {
     mplew.StartNode("Mask - " + map.get(0x28B7D40));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2255 = mplew.writeInt("v2255");
     } else {
         v2256 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2260 = Check_Buff(mask, 0x28B7D88); //439
 if (sub_42F5E0(v2260)) {
     mplew.StartNode("Mask - " + map.get(0x28B7D88));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2261 = mplew.writeInt("v2261");
     } else {
         v2262 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2266 = Check_Buff(mask, 0x28B7DD0); //400
 if (sub_42F5E0(v2266)) {
     mplew.StartNode("Mask - " + map.get(0x28B7DD0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2267 = mplew.writeInt("v2267");
     } else {
         v2268 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2272 = Check_Buff(mask, 0x28B7E18); //401
 if (sub_42F5E0(v2272)) {
     mplew.StartNode("Mask - " + map.get(0x28B7E18));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2273 = mplew.writeInt("v2273");
     } else {
         v2274 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2278 = Check_Buff(mask, 0x28B7E60); //440
 if (sub_42F5E0(v2278)) {
     mplew.StartNode("Mask - " + map.get(0x28B7E60));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2279 = mplew.writeInt("v2279");
     } else {
         v2280 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2284 = Check_Buff(mask, 0x28B7EA8); //441
 if (sub_42F5E0(v2284)) {
     mplew.StartNode("Mask - " + map.get(0x28B7EA8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2285 = mplew.writeInt("v2285");
     } else {
         v2286 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2290 = Check_Buff(mask, 0x28B7EF0); //442
 if (sub_42F5E0(v2290)) {
     mplew.StartNode("Mask - " + map.get(0x28B7EF0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2291 = mplew.writeInt("v2291");
     } else {
         v2292 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2296 = Check_Buff(mask, 0x28B1410); //443
 if (sub_42F5E0(v2296)) {
     mplew.StartNode("Mask - " + map.get(0x28B1410));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2297 = mplew.writeInt("v2297");
     } else {
         v2298 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2302 = Check_Buff(mask, 0x28B7F38); //444
 if (sub_42F5E0(v2302)) {
     mplew.StartNode("Mask - " + map.get(0x28B7F38));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2303 = mplew.writeInt("v2303");
     } else {
         v2304 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2308 = Check_Buff(mask, 0x28B7F80); //445
 if (sub_42F5E0(v2308)) {
     mplew.StartNode("Mask - " + map.get(0x28B7F80));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2309 = mplew.writeInt("v2309");
     } else {
         v2310 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2314 = Check_Buff(mask, 0x28B7FC8); //446
 if (sub_42F5E0(v2314)) {
     mplew.StartNode("Mask - " + map.get(0x28B7FC8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2315 = mplew.writeInt("v2315");
     } else {
         v2316 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2320 = Check_Buff(mask, 0x28B8010); //447
 if (sub_42F5E0(v2320)) {
     mplew.StartNode("Mask - " + map.get(0x28B8010));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2321 = mplew.writeInt("v2321");
     } else {
         v2322 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2326 = Check_Buff(mask, 0x28B8058); //448
 if (sub_42F5E0(v2326)) {
     mplew.StartNode("Mask - " + map.get(0x28B8058));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2327 = mplew.writeInt("v2327");
     } else {
         v2328 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2332 = Check_Buff(mask, 0x28B80A0); //449
 if (sub_42F5E0(v2332)) {
     mplew.StartNode("Mask - " + map.get(0x28B80A0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2333 = mplew.writeInt("v2333");
     } else {
         v2334 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2338 = Check_Buff(mask, 0x28B80E8); //450
 if (sub_42F5E0(v2338)) {
     mplew.StartNode("Mask - " + map.get(0x28B80E8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2339 = mplew.writeInt("v2339");
     } else {
         v2340 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2344 = Check_Buff(mask, 0x28B8130); //451
 if (sub_42F5E0(v2344)) {
     mplew.StartNode("Mask - " + map.get(0x28B8130));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2345 = mplew.writeInt("v2345");
     } else {
         v2346 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2350 = Check_Buff(mask, 0x28B8178); //452
 if (sub_42F5E0(v2350)) {
     mplew.StartNode("Mask - " + map.get(0x28B8178));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2351 = mplew.writeInt("v2351");
     } else {
         v2352 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2356 = Check_Buff(mask, 0x28B81C0); //453
 if (sub_42F5E0(v2356)) {
     mplew.StartNode("Mask - " + map.get(0x28B81C0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2357 = mplew.writeInt("v2357");
     } else {
         v2358 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2362 = Check_Buff(mask, 0x28B8208); //455
 if (sub_42F5E0(v2362)) {
     mplew.StartNode("Mask - " + map.get(0x28B8208));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2363 = mplew.writeInt("v2363");
     } else {
         v2364 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2368 = Check_Buff(mask, 0x28B8250); //456
 if (sub_42F5E0(v2368)) {
     mplew.StartNode("Mask - " + map.get(0x28B8250));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2369 = mplew.writeInt("v2369");
     } else {
         v2370 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2374 = Check_Buff(mask, 0x28B8298); //457
 if (sub_42F5E0(v2374)) {
     mplew.StartNode("Mask - " + map.get(0x28B8298));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2375 = mplew.writeInt("v2375");
     } else {
         v2376 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2380 = Check_Buff(mask, 0x28B82E0); //458
 if (sub_42F5E0(v2380)) {
     mplew.StartNode("Mask - " + map.get(0x28B82E0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2381 = mplew.writeInt("v2381");
     } else {
         v2382 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2386 = Check_Buff(mask, 0x28B8328); //459
 if (sub_42F5E0(v2386)) {
     mplew.StartNode("Mask - " + map.get(0x28B8328));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2387 = mplew.writeInt("v2387");
     } else {
         v2388 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2392 = Check_Buff(mask, 0x28B8370); //460
 if (sub_42F5E0(v2392)) {
     mplew.StartNode("Mask - " + map.get(0x28B8370));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2393 = mplew.writeInt("v2393");
     } else {
         v2394 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2398 = Check_Buff(mask, 0x28B83B8); //461
 if (sub_42F5E0(v2398)) {
     mplew.StartNode("Mask - " + map.get(0x28B83B8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2399 = mplew.writeInt("v2399");
     } else {
         v2400 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2404 = Check_Buff(mask, 0x28B8400); //462
 if (sub_42F5E0(v2404)) {
     mplew.StartNode("Mask - " + map.get(0x28B8400));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2405 = mplew.writeInt("v2405");
     } else {
         v2406 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2410 = Check_Buff(mask, 0x28B8448); //463
 if (sub_42F5E0(v2410)) {
     mplew.StartNode("Mask - " + map.get(0x28B8448));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2411 = mplew.writeInt("v2411");
     } else {
         v2412 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2416 = Check_Buff(mask, 0x28B8490); //464
 if (sub_42F5E0(v2416)) {
     mplew.StartNode("Mask - " + map.get(0x28B8490));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2417 = mplew.writeInt("v2417");
     } else {
         v2418 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2422 = Check_Buff(mask, 0x28B84D8); //465
 if (sub_42F5E0(v2422)) {
     mplew.StartNode("Mask - " + map.get(0x28B84D8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2423 = mplew.writeInt("v2423");
     } else {
         v2424 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2428 = Check_Buff(mask, 0x28B8520); //466
 if (sub_42F5E0(v2428)) {
     mplew.StartNode("Mask - " + map.get(0x28B8520));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2429 = mplew.writeInt("v2429");
     } else {
         v2430 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2434 = Check_Buff(mask, 0x28B8568); //467
 if (sub_42F5E0(v2434)) {
     mplew.StartNode("Mask - " + map.get(0x28B8568));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2435 = mplew.writeInt("v2435");
     } else {
         v2436 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2440 = Check_Buff(mask, 0x28B85B0); //468
 if (sub_42F5E0(v2440)) {
     mplew.StartNode("Mask - " + map.get(0x28B85B0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2441 = mplew.writeInt("v2441");
     } else {
         v2442 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2446 = Check_Buff(mask, 0x28B85F8); //469
 if (sub_42F5E0(v2446)) {
     mplew.StartNode("Mask - " + map.get(0x28B85F8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2447 = mplew.writeInt("v2447");
     } else {
         v2448 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2452 = Check_Buff(mask, 0x28B8640); //470
 if (sub_42F5E0(v2452)) {
     mplew.StartNode("Mask - " + map.get(0x28B8640));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2453 = mplew.writeInt("v2453");
     } else {
         v2454 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2458 = Check_Buff(mask, 0x28B17B8); //402
 if (sub_42F5E0(v2458)) {
     mplew.StartNode("Mask - " + map.get(0x28B17B8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2459 = mplew.writeInt("v2459");
     } else {
         v2460 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2464 = Check_Buff(mask, 0x28B8688); //471
 if (sub_42F5E0(v2464)) {
     mplew.StartNode("Mask - " + map.get(0x28B8688));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2465 = mplew.writeInt("v2465");
     } else {
         v2466 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2470 = Check_Buff(mask, 0x28B86D0); //472
 if (sub_42F5E0(v2470)) {
     mplew.StartNode("Mask - " + map.get(0x28B86D0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2471 = mplew.writeInt("v2471");
     } else {
         v2472 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2476 = Check_Buff(mask, 0x28B8718); //473
 if (sub_42F5E0(v2476)) {
     mplew.StartNode("Mask - " + map.get(0x28B8718));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2477 = mplew.writeInt("v2477");
     } else {
         v2478 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2482 = Check_Buff(mask, 0x28B8760); //474
 if (sub_42F5E0(v2482)) {
     mplew.StartNode("Mask - " + map.get(0x28B8760));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2483 = mplew.writeInt("v2483");
     } else {
         v2484 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2488 = Check_Buff(mask, 0x28B87A8); //475
 if (sub_42F5E0(v2488)) {
     mplew.StartNode("Mask - " + map.get(0x28B87A8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2489 = mplew.writeInt("v2489");
     } else {
         v2490 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2494 = Check_Buff(mask, 0x28B87F0); //477
 if (sub_42F5E0(v2494)) {
     mplew.StartNode("Mask - " + map.get(0x28B87F0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2495 = mplew.writeInt("v2495");
     } else {
         v2496 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2500 = Check_Buff(mask, 0x28B8838); //478
 if (sub_42F5E0(v2500)) {
     mplew.StartNode("Mask - " + map.get(0x28B8838));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2501 = mplew.writeInt("v2501");
     } else {
         v2502 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2506 = Check_Buff(mask, 0x28B8880); //479
 if (sub_42F5E0(v2506)) {
     mplew.StartNode("Mask - " + map.get(0x28B8880));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2507 = mplew.writeInt("v2507");
     } else {
         v2508 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2512 = Check_Buff(mask, 0x28B88C8); //480
 if (sub_42F5E0(v2512)) {
     mplew.StartNode("Mask - " + map.get(0x28B88C8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2513 = mplew.writeInt("v2513");
     } else {
         v2514 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2518 = Check_Buff(mask, 0x28B8910); //481
 if (sub_42F5E0(v2518)) {
     mplew.StartNode("Mask - " + map.get(0x28B8910));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2519 = mplew.writeInt("v2519");
     } else {
         v2520 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2524 = Check_Buff(mask, 0x28B8958); //499
 if (sub_42F5E0(v2524)) {
     mplew.StartNode("Mask - " + map.get(0x28B8958));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2525 = mplew.writeInt("v2525");
     } else {
         v2526 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2530 = Check_Buff(mask, 0x28B89A0); //501
 if (sub_42F5E0(v2530)) {
     mplew.StartNode("Mask - " + map.get(0x28B89A0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2531 = mplew.writeInt("v2531");
     } else {
         v2532 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2536 = Check_Buff(mask, 0x28B89E8); //502
 if (sub_42F5E0(v2536)) {
     mplew.StartNode("Mask - " + map.get(0x28B89E8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2537 = mplew.writeInt("v2537");
     } else {
         v2538 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2542 = Check_Buff(mask, 0x28B8A30); //503
 if (sub_42F5E0(v2542)) {
     mplew.StartNode("Mask - " + map.get(0x28B8A30));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2543 = mplew.writeInt("v2543");
     } else {
         v2544 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2548 = Check_Buff(mask, 0x28B8A78); //482
 if (sub_42F5E0(v2548)) {
     mplew.StartNode("Mask - " + map.get(0x28B8A78));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2549 = mplew.writeInt("v2549");
     } else {
         v2550 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2554 = Check_Buff(mask, 0x28B1698); //262
 if (sub_42F5E0(v2554)) {
     mplew.StartNode("Mask - " + map.get(0x28B1698));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2555 = mplew.writeInt("v2555");
     } else {
         v2556 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2560 = Check_Buff(mask, 0x28B8AC0); //483
 if (sub_42F5E0(v2560)) {
     mplew.StartNode("Mask - " + map.get(0x28B8AC0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2561 = mplew.writeInt("v2561");
     } else {
         v2562 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2566 = Check_Buff(mask, 0x28B8B08); //484
 if (sub_42F5E0(v2566)) {
     mplew.StartNode("Mask - " + map.get(0x28B8B08));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2567 = mplew.writeInt("v2567");
     } else {
         v2568 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2572 = Check_Buff(mask, 0x28B16E0); //505
 if (sub_42F5E0(v2572)) {
     mplew.StartNode("Mask - " + map.get(0x28B16E0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2573 = mplew.writeInt("v2573");
     } else {
         v2574 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2578 = Check_Buff(mask, 0x28B1728); //506
 if (sub_42F5E0(v2578)) {
     mplew.StartNode("Mask - " + map.get(0x28B1728));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2579 = mplew.writeInt("v2579");
     } else {
         v2580 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2584 = Check_Buff(mask, 0x28B8B50); //507
 if (sub_42F5E0(v2584)) {
     mplew.StartNode("Mask - " + map.get(0x28B8B50));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2585 = mplew.writeInt("v2585");
     } else {
         v2586 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2590 = Check_Buff(mask, 0x28B8B98); //508
 if (sub_42F5E0(v2590)) {
     mplew.StartNode("Mask - " + map.get(0x28B8B98));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2591 = mplew.writeInt("v2591");
     } else {
         v2592 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2596 = Check_Buff(mask, 0x28B8BE0); //485
 if (sub_42F5E0(v2596)) {
     mplew.StartNode("Mask - " + map.get(0x28B8BE0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2597 = mplew.writeInt("v2597");
     } else {
         v2598 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2602 = Check_Buff(mask, 0x28B8C28); //492
 if (sub_42F5E0(v2602)) {
     mplew.StartNode("Mask - " + map.get(0x28B8C28));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2603 = mplew.writeInt("v2603");
     } else {
         v2604 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2608 = Check_Buff(mask, 0x28B8C70); //486
 if (sub_42F5E0(v2608)) {
     mplew.StartNode("Mask - " + map.get(0x28B8C70));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2609 = mplew.writeInt("v2609");
     } else {
         v2610 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2614 = Check_Buff(mask, 0x28B8CB8); //488
 if (sub_42F5E0(v2614)) {
     mplew.StartNode("Mask - " + map.get(0x28B8CB8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2615 = mplew.writeInt("v2615");
     } else {
         v2616 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2620 = Check_Buff(mask, 0x28B8D00); //489
 if (sub_42F5E0(v2620)) {
     mplew.StartNode("Mask - " + map.get(0x28B8D00));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2621 = mplew.writeInt("v2621");
     } else {
         v2622 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2626 = Check_Buff(mask, 0x28B8D48); //490
 if (sub_42F5E0(v2626)) {
     mplew.StartNode("Mask - " + map.get(0x28B8D48));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2627 = mplew.writeInt("v2627");
     } else {
         v2628 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2632 = Check_Buff(mask, 0x28B8D90); //491
 if (sub_42F5E0(v2632)) {
     mplew.StartNode("Mask - " + map.get(0x28B8D90));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2633 = mplew.writeInt("v2633");
     } else {
         v2634 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2638 = Check_Buff(mask, 0x28B8DD8); //493
 if (sub_42F5E0(v2638)) {
     mplew.StartNode("Mask - " + map.get(0x28B8DD8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2639 = mplew.writeInt("v2639");
     } else {
         v2640 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2644 = Check_Buff(mask, 0x28B8E20); //494
 if (sub_42F5E0(v2644)) {
     mplew.StartNode("Mask - " + map.get(0x28B8E20));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2645 = mplew.writeInt("v2645");
     } else {
         v2646 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2650 = Check_Buff(mask, 0x28B7DD0); //400
 if (sub_42F5E0(v2650)) {
     mplew.StartNode("Mask - " + map.get(0x28B7DD0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2651 = mplew.writeInt("v2651");
     } else {
         v2652 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2656 = Check_Buff(mask, 0x28B7E18); //401
 if (sub_42F5E0(v2656)) {
     mplew.StartNode("Mask - " + map.get(0x28B7E18));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2657 = mplew.writeInt("v2657");
     } else {
         v2658 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2662 = Check_Buff(mask, 0x28B8E68); //495
 if (sub_42F5E0(v2662)) {
     mplew.StartNode("Mask - " + map.get(0x28B8E68));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2663 = mplew.writeInt("v2663");
     } else {
         v2664 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2668 = Check_Buff(mask, 0x28B8EB0); //496
 if (sub_42F5E0(v2668)) {
     mplew.StartNode("Mask - " + map.get(0x28B8EB0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2669 = mplew.writeInt("v2669");
     } else {
         v2670 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2674 = Check_Buff(mask, 0x28B7CB0); //436
 if (sub_42F5E0(v2674)) {
     mplew.StartNode("Mask - " + map.get(0x28B7CB0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2675 = mplew.writeInt("v2675");
     } else {
         v2676 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2680 = Check_Buff(mask, 0x28B8EF8); //487
 if (sub_42F5E0(v2680)) {
     mplew.StartNode("Mask - " + map.get(0x28B8EF8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2681 = mplew.writeInt("v2681");
     } else {
         v2682 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2686 = Check_Buff(mask, 0x28B8F40); //497
 if (sub_42F5E0(v2686)) {
     mplew.StartNode("Mask - " + map.get(0x28B8F40));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2687 = mplew.writeInt("v2687");
     } else {
         v2688 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2692 = Check_Buff(mask, 0x28B8F88); //512
 if (sub_42F5E0(v2692)) {
     mplew.StartNode("Mask - " + map.get(0x28B8F88));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2693 = mplew.writeInt("v2693");
     } else {
         v2694 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2698 = Check_Buff(mask, 0x28B8FD0); //513
 if (sub_42F5E0(v2698)) {
     mplew.StartNode("Mask - " + map.get(0x28B8FD0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2699 = mplew.writeInt("v2699");
     } else {
         v2700 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2704 = Check_Buff(mask, 0x28B9018); //514
 if (sub_42F5E0(v2704)) {
     mplew.StartNode("Mask - " + map.get(0x28B9018));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2705 = mplew.writeInt("v2705");
     } else {
         v2706 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2710 = Check_Buff(mask, 0x28B9060); //515
 if (sub_42F5E0(v2710)) {
     mplew.StartNode("Mask - " + map.get(0x28B9060));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2711 = mplew.writeInt("v2711");
     } else {
         v2712 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2716 = Check_Buff(mask, 0x28B90A8); //516
 if (sub_42F5E0(v2716)) {
     mplew.StartNode("Mask - " + map.get(0x28B90A8));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2717 = mplew.writeInt("v2717");
     } else {
         v2718 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2722 = Check_Buff(mask, 0x28B90F0); //517
 if (sub_42F5E0(v2722)) {
     mplew.StartNode("Mask - " + map.get(0x28B90F0));
     if (sub_42FF80(mask /* &v5264 */ )) {
         v2723 = mplew.writeInt("v2723");
     } else {
         v2724 = mplew.writeShort("");
     }
     v5265 = mplew.writeInt("v5265");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }

 //139 new
 v2728 = Check_Buff(mask, 0x28B5700); //325
 if (sub_42F5E0(v2728)) {
     mplew.StartNode("Mask - " + map.get(0x28B5700));
     v2729 = mplew.writeInt("v2729");
     v2730 = mplew.writeInt("v2730");
     mplew.EndNode(false);
 }
 //139 new
 v2731 = Check_Buff(mask, 0x28B5748); //326
 if (sub_42F5E0(v2731)) {
     mplew.StartNode("Mask - " + map.get(0x28B5748));
     // v2732 = v72584360();
     v2733 = mplew.writeInt("v2733");
     // v4807 = sub_40AF10( /* v3351 */ );
     mplew.EndNode(false);
 }
 // sub_42FC20( /* v3351 + 18448 */ );
 v2734 = mplew.writeShort("");
 v5263 = v2734;
 for (i = 0; i < v5263; ++i) {
     v4805 = mplew.writeInt("v4805");
     v4803 = mplew.write("v4803");
     // sub_446410( /* &v4805, &v4803 */ );
     // sub_4037E0( /* &v4804 */ );
     // v5267 = 454;
     // v3428 = -v4805;
     // if (sub_44A530( /* &v3428, &v4804 */ )) {
     //     v2735 = sub_4037F0( /* &v4804 */ );
     //     v4803;
     // }
     // v5267 = -1;
     // sub_44A490( /* &v4804 */ );
 }
 v2736 = Check_Buff(mask, 0x28B8BE0); //485
 if (sub_42F5E0(v2736)) {
     mplew.StartNode("Mask - " + map.get(0x28B8BE0));
     v2737 = mplew.writeInt("v2737");
     mplew.EndNode(false);
 }
 v2738 = mplew.write("v2738");
 v2739 = mplew.write("v2739");
 v2740 = mplew.write("v2740");
 v2741 = Check_Buff(mask, 0x28B3B28); //158
 if (sub_42F5E0(v2741)) {
     mplew.StartNode("Mask - " + map.get(0x28B3B28));
     for (j = 0; j < 22; ++j)
         mplew.writeInt("");
     mplew.EndNode(false);
 }
 v2742 = Check_Buff(mask, 0x28B9138); //227
 if (sub_42F5E0(v2742)) {
     mplew.StartNode("Mask - " + map.get(0x28B9138));
     v2743 = mplew.write("v2743");
     mplew.EndNode(false);
 }
 v2744 = Check_Buff(mask, 0x28B9180); //412
 if (sub_42F5E0(v2744)) {
     mplew.StartNode("Mask - " + map.get(0x28B9180));
     v2745 = mplew.write("v2745");
     mplew.EndNode(false);
 }
 v2746 = Check_Buff(mask, 0x28B4DB8); //235
 if (sub_42F5E0(v2746)) {
     mplew.StartNode("Mask - " + map.get(0x28B4DB8));
     v2747 = mplew.writeInt("v2747");
     mplew.EndNode(false);
 }
 v2748 = Check_Buff(mask, 0x28B2A00); //246
 if (sub_42F5E0(v2748)) {
     mplew.StartNode("Mask - " + map.get(0x28B2A00));
     v2749 = mplew.write("v2749");
     mplew.EndNode(false);
 }
 v2750 = Check_Buff(mask, 0x28B2A48); //261
 if (sub_42F5E0(v2750)) {
     mplew.StartNode("Mask - " + map.get(0x28B2A48));
     v2751 = mplew.write("v2751");
     mplew.EndNode(false);
 }
 v2752 = Check_Buff(mask, 0x28B2268); //328
 if (sub_42F5E0(v2752)) {
     mplew.StartNode("Mask - " + map.get(0x28B2268));
     v2753 = mplew.write("v2753");
     v2754 = mplew.writeShort("");
     v2755 = mplew.write("v2755");
     v2756 = mplew.write("v2756");
     mplew.EndNode(false);
 }
 v2757 = Check_Buff(mask, 0x28B4D70); //249
 if (sub_42F5E0(v2757)) {
     mplew.StartNode("Mask - " + map.get(0x28B4D70));
     v2758 = mplew.writeInt("v2758");
     mplew.EndNode(false);
 }
 v2759 = Check_Buff(mask, 0x28B4C50); //248
 if (sub_42F5E0(v2759)) {
     mplew.StartNode("Mask - " + map.get(0x28B4C50));
     v2760 = mplew.write("") != 0;
     mplew.EndNode(false);
 }
 v2761 = Check_Buff(mask, 0x28B4E48); //245
 if (sub_42F5E0(v2761)) {
     mplew.StartNode("Mask - " + map.get(0x28B4E48));
     while (!sub_403EE0( /* v3351 + 9528 */ ))
         sub_43AC00( /* v3351 + 9528 */ );
     for (k = 0; k < 2; ++k) {
         sub_4408E0( /* ipacket */ );
         if (sub_409880( /* &v4800 */ ) > 0)
             sub_456C70( /* &v4800 */ );
     }
     v2762 = mplew.writeInt("v2762");
     v2763 = mplew.writeInt("v2763");
     v2764 = mplew.writeInt("v2764");
     mplew.EndNode(false);
 }
 v2765 = Check_Buff(mask, 0x28B4B78); //230
 if (sub_42F5E0(v2765)) {
     mplew.StartNode("Mask - " + map.get(0x28B4B78));
     v2766 = mplew.writeInt("v2766");
     mplew.EndNode(false);
 }
 v2767 = Check_Buff(mask, 0x28B4FB0); //256
 if (sub_42F5E0(v2767)) {
     mplew.StartNode("Mask - " + map.get(0x28B4FB0));
     sub_F16EE0( /* ipacket */ );
     mplew.EndNode(false);
 }
 v2768 = Check_Buff(mask, 0x28B4E90); //251
 if (sub_42F5E0(v2768)) {
     mplew.StartNode("Mask - " + map.get(0x28B4E90));
     v2769 = mplew.writeInt("v2769");
     mplew.EndNode(false);
 }
 v2770 = Check_Buff(mask, 0x28B5160); //264
 if (sub_42F5E0(v2770)) {
     mplew.StartNode("Mask - " + map.get(0x28B5160));
     sub_4462B0( /* v3351 + 9660 */ );
     v4799 = 1;
     while (v4799) {
         v4798 = mplew.writeInt("v4798");
         if (v4798 <= 0) {
             v4799 = 0;
             break;
         }
         v3412 = v4798;
         sub_44AD60( /* &v3411, &v3412 */ );
     }
     mplew.EndNode(false);
 }
 v2771 = Check_Buff(mask, 0x28B24F0); //84
 if (sub_42F5E0(v2771)) {
     mplew.StartNode("Mask - " + map.get(0x28B24F0));
     v2772 = mplew.write("") != 0;
     mplew.EndNode(false);
 }
 v2773 = Check_Buff(mask, 0x28B54C0); //276
 if (sub_42F5E0(v2773)) {
     mplew.StartNode("Mask - " + map.get(0x28B54C0));
     v2774 = mplew.write("v2774");
     mplew.EndNode(false);
 }
 v2775 = Check_Buff(mask, 0x28B5478); //333
 if (sub_42F5E0(v2775)) {
     mplew.StartNode("Mask - " + map.get(0x28B5478));
     v2776 = mplew.write("v2776");
     mplew.EndNode(false);
 }
 v2777 = Check_Buff(mask, 0x28B5A18); //293
 if (sub_42F5E0(v2777)) {
     mplew.StartNode("Mask - " + map.get(0x28B5A18));
     v2778 = mplew.write("v2778");
     mplew.EndNode(false);
 }
 v2779 = Check_Buff(mask, 0x28B5A60); //294
 if (sub_42F5E0(v2779)) {
     mplew.StartNode("Mask - " + map.get(0x28B5A60));
     v2780 = mplew.write("v2780");
     mplew.EndNode(false);
 }
 v2781 = Check_Buff(mask, 0x28B59D0); //292
 if (sub_42F5E0(v2781)) {
     mplew.StartNode("Mask - " + map.get(0x28B59D0));
     v2782 = mplew.writeInt("v2782");
     v2783 = mplew.write("v2783");
     mplew.EndNode(false);
 }
 v2784 = Check_Buff(mask, 0x28B6000); //319
 if (sub_42F5E0(v2784)) {
     mplew.StartNode("Mask - " + map.get(0x28B6000));
     v2785 = mplew.write("v2785");
     mplew.EndNode(false);
 }
 v2786 = Check_Buff(mask, 0x28B3CD8); //163
 if (sub_42F5E0(v2786)) {
     mplew.StartNode("Mask - " + map.get(0x28B3CD8));
     v2787 = mplew.writeInt("v2787");
     v2788 = mplew.writeInt("v2788");
     mplew.EndNode(false);
 }
 v2789 = Check_Buff(mask, 0x28B6240); //330
 if (sub_42F5E0(v2789)) {
     mplew.StartNode("Mask - " + map.get(0x28B6240));
     v2790 = mplew.writeInt("v2790");
     mplew.EndNode(false);
 }
 v2791 = Check_Buff(mask, 0x28B62D0); //332
 if (sub_42F5E0(v2791)) {
     mplew.StartNode("Mask - " + map.get(0x28B62D0));
     v2792 = mplew.writeInt("v2792");
     mplew.EndNode(false);
 }
 v2793 = Check_Buff(mask, 0x28B63A8); //338
 if (sub_42F5E0(v2793)) {
     mplew.StartNode("Mask - " + map.get(0x28B63A8));
     v2794 = mplew.writeInt("v2794");
     v2795 = mplew.writeInt("v2795");
     mplew.EndNode(false);
 }
 v2796 = Check_Buff(mask, 0x28B14A0); //340
 if (sub_42F5E0(v2796)) {
     mplew.StartNode("Mask - " + map.get(0x28B14A0));
     v2797 = mplew.writeInt("v2797");
     mplew.EndNode(false);
 }
 v2798 = Check_Buff(mask, 0x28B14E8); //343
 if (sub_42F5E0(v2798)) {
     mplew.StartNode("Mask - " + map.get(0x28B14E8));
     v2799 = mplew.writeInt("v2799");
     mplew.EndNode(false);
 }
 v2800 = Check_Buff(mask, 0x28B64C8); //345
 if (sub_42F5E0(v2800)) {
     mplew.StartNode("Mask - " + map.get(0x28B64C8));
     v2801 = mplew.write("v2801");
     mplew.EndNode(false);
 }
 v2802 = Check_Buff(mask, 0x28B6510); //346
 if (sub_42F5E0(v2802)) {
     mplew.StartNode("Mask - " + map.get(0x28B6510));
     v2803 = mplew.write("v2803");
     mplew.EndNode(false);
 }
 v2804 = Check_Buff(mask, 0x28B6480); //344
 if (sub_42F5E0(v2804)) {
     mplew.StartNode("Mask - " + map.get(0x28B6480));
     v2805 = mplew.writeInt("v2805");
     mplew.EndNode(false);
 }
 v2806 = Check_Buff(mask, 0x28B2808); //89
 if (sub_42F5E0(v2806)) {
     mplew.StartNode("Mask - " + map.get(0x28B2808));
     v2807 = mplew.writeInt("v2807");
     mplew.EndNode(false);
 }
 v2808 = Check_Buff(mask, 0x28B2AD8); //94
 if (sub_42F5E0(v2808)) {
     mplew.StartNode("Mask - " + map.get(0x28B2AD8));
     v2809 = mplew.writeInt("v2809");
     mplew.EndNode(false);
 }
 v2810 = Check_Buff(mask, 0x28B1608); //357
 if (sub_42F5E0(v2810)) {
     mplew.StartNode("Mask - " + map.get(0x28B1608));
     v2811 = mplew.writeInt("v2811");
     mplew.EndNode(false);
 }
 v2812 = Check_Buff(mask, 0x28B1650); //358
 if (sub_42F5E0(v2812)) {
     mplew.StartNode("Mask - " + map.get(0x28B1650));
     v2813 = mplew.writeInt("v2813");
     mplew.EndNode(false);
 }
 v2814 = Check_Buff(mask, 0x28B6870); //359
 if (sub_42F5E0(v2814)) {
     mplew.StartNode("Mask - " + map.get(0x28B6870));
     v2815 = mplew.writeInt("v2815");
     mplew.EndNode(false);
 }
 v2816 = Check_Buff(mask, 0x28B91C8); //378
 if (sub_42F5E0(v2816)) {
     mplew.StartNode("Mask - " + map.get(0x28B91C8));
     v2817 = mplew.writeInt("v2817");
     v2818 = mplew.writeInt("v2818");
     mplew.EndNode(false);
 }
 v2819 = Check_Buff(mask, 0x28B6F30); //385
 if (sub_42F5E0(v2819)) {
     mplew.StartNode("Mask - " + map.get(0x28B6F30));
     v2820 = mplew.writeInt("v2820");
     mplew.EndNode(false);
 }
 v2821 = Check_Buff(mask, 0x28B6EA0); //383
 if (sub_42F5E0(v2821)) {
     mplew.StartNode("Mask - " + map.get(0x28B6EA0));
     v2822 = mplew.writeInt("v2822");
     mplew.EndNode(false);
 }
 v2823 = Check_Buff(mask, 0x28B6F78); //386
 if (sub_42F5E0(v2823)) {
     mplew.StartNode("Mask - " + map.get(0x28B6F78));
     v2824 = mplew.writeInt("v2824");
     v2825 = mplew.write("v2825");
     mplew.EndNode(false);
 }
 v2826 = Check_Buff(mask, 0x28B7368); //405
 if (sub_42F5E0(v2826)) {
     mplew.StartNode("Mask - " + map.get(0x28B7368));
     v2827 = mplew.writeInt("v2827");
     mplew.EndNode(false);
 }
 v2828 = Check_Buff(mask, 0x28B74D0); //410
 if (sub_42F5E0(v2828)) {
     mplew.StartNode("Mask - " + map.get(0x28B74D0));
     v2829 = mplew.writeInt("v2829");
     mplew.EndNode(false);
 }
 v2830 = Check_Buff(mask, 0x28B7830); //420
 if (sub_42F5E0(v2830)) {
     mplew.StartNode("Mask - " + map.get(0x28B7830));
     v2831 = mplew.writeInt("v2831");
     v2832 = mplew.writeInt("v2832");
     mplew.EndNode(false);
 }
 v2833 = Check_Buff(mask, 0x28B78C0); //422
 if (sub_42F5E0(v2833)) {
     mplew.StartNode("Mask - " + map.get(0x28B78C0));
     v2834 = mplew.writeInt("v2834");
     v2835 = mplew.write("v2835");
     v2836 = mplew.writeInt("v2836");
     v2837 = mplew.writeInt("v2837");
     mplew.EndNode(false);
 }
 v2838 = Check_Buff(mask, 0x28B7EF0); //442
 if (sub_42F5E0(v2838)) {
     mplew.StartNode("Mask - " + map.get(0x28B7EF0));
     v2839 = mplew.write("v2839");
     mplew.EndNode(false);
 }
 v2840 = Check_Buff(mask, 0x28B8010); //447
 if (sub_42F5E0(v2840)) {
     mplew.StartNode("Mask - " + map.get(0x28B8010));
     v2841 = mplew.write("v2841");
     v2842 = mplew.writeShort("");
     mplew.EndNode(false);
 }
 v2843 = Check_Buff(mask, 0x28B80A0); //449
 if (sub_42F5E0(v2843)) {
     mplew.StartNode("Mask - " + map.get(0x28B80A0));
     v2844 = mplew.writeShort("");
     v2845 = mplew.write("v2845");
     mplew.EndNode(false);
 }
 v2846 = mplew.writeInt("v2846");
 v2847 = Check_Buff(mask, 0x28B7B48); //431
 if (sub_42F5E0(v2847)) {
     mplew.StartNode("Mask - " + map.get(0x28B7B48));
     v2848 = mplew.writeInt("v2848");
     mplew.EndNode(false);
 }
 v2849 = Check_Buff(mask, 0x28B1E30); //63
 if (sub_42F5E0(v2849)) {
     mplew.StartNode("Mask - " + map.get(0x28B1E30));
     v2850 = mplew.writeInt("v2850");
     mplew.EndNode(false);
 }
 v2851 = Check_Buff(mask, 0x28B8250); //456
 if (sub_42F5E0(v2851)) {
     mplew.StartNode("Mask - " + map.get(0x28B8250));
     v2852 = mplew.writeInt("v2852");
     mplew.EndNode(false);
 }
 v2853 = Check_Buff(mask, 0x28B2970); //241
 if (sub_42F5E0(v2853)) {
     mplew.StartNode("Mask - " + map.get(0x28B2970));
     v2854 = mplew.writeInt("v2854");
     mplew.EndNode(false);
 }
 v2855 = Check_Buff(mask, 0x28B6558); //347
 if (sub_42F5E0(v2855)) {
     mplew.StartNode("Mask - " + map.get(0x28B6558));
     v2856 = mplew.writeInt("v2856");
     mplew.EndNode(false);
 }
 v2857 = Check_Buff(mask, 0x28B2340); //79
 if (sub_42F5E0(v2857)) {
     mplew.StartNode("Mask - " + map.get(0x28B2340));
     v2858 = mplew.writeInt("v2858");
     mplew.EndNode(false);
 }
 v2859 = Check_Buff(mask, 0x28B17B8); //402
 if (sub_42F5E0(v2859)) {
     mplew.StartNode("Mask - " + map.get(0x28B17B8));
     v2860 = mplew.writeShort("");
     mplew.EndNode(false);
 }
 v2861 = Check_Buff(mask, 0x28B72D8); //403
 if (sub_42F5E0(v2861)) {
     mplew.StartNode("Mask - " + map.get(0x28B72D8));
     v2862 = mplew.writeShort("");
     mplew.EndNode(false);
 }
 v2863 = Check_Buff(mask, 0x28B7320); //404
 if (sub_42F5E0(v2863)) {
     mplew.StartNode("Mask - " + map.get(0x28B7320));
     v2864 = mplew.writeShort("");
     mplew.EndNode(false);
 }
 v2865 = Check_Buff(mask, 0x28B8718); //473
 if (sub_42F5E0(v2865)) {
     mplew.StartNode("Mask - " + map.get(0x28B8718));
     v2866 = mplew.writeInt("v2866");
     v2867 = mplew.writeInt("v2867");
     v2868 = mplew.writeInt("v2868");
     v2869 = mplew.writeInt("v2869");
     mplew.EndNode(false);
 }
 v2870 = Check_Buff(mask, 0x28B1848); //242
 if (sub_42F5E0(v2870)) {
     mplew.StartNode("Mask - " + map.get(0x28B1848));
     v2871 = mplew.writeInt("v2871");
     mplew.EndNode(false);
 }
 for (l = 0; l < 9; ++l) {
     var key = map.get(0x28b0d28) + l;
     if (sub_B7C3F0(mask, (key))) {
         mplew.StartNode("Mas+-- 未处理 " + (key));
         // ((*v4393 + 24))(v4393, iPacket);
         switch (key) {
             case map.get(0x28b0d28) + 9:
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
     // v4796 = sub_403CB0( /* &v3351[8 * l + 18360] */ );
     // v2872 = sub_420FE0( /* &v3367, l */ );
     // v2873 = Check_Buff(mask, v2872);
     // if (sub_42F5E0(v2873)) {
     //     ( * ( * v4796 + 24))(v4796, ipacket);
     //     v5265 = * sub_40EB10( /* v4796 */ );
     //     v5266 = ( * ( * v4796 + 16))(v4796);
     //     sub_4037E0( /* &v4795 */ );
     //     v5267 = 455;
     //     if (!sub_44A530( /* &v5265, &v4795 */ )) {
     //         v3364 = sub_40F060( /* 92 */ );
     //         if (v3364)
     //             v2896 = sub_42FB40( /* v3364 */ );
     //         var v2896 = 0;
     //         v3365 = v2896;
     //         sub_44A4E0( /* v2896 */ );
     //         sub_44A720( /* &v5265, &v4795 */ );
     //     }
     //     v2874 = sub_4037F0( /* &v4795 */ );
     //     v5266;
     //     v2875 = sub_420FE0( /* &v3363, l */ );
     //     sub_4037F0( /* &v4795 */ );
     //     sub_42F540( /* v2875 */ );
     //     v5267 = -1;
     //     sub_44A490( /* &v4795 */ );
     // }
 }
 sub_F16990( /* &v5264, ipacket */ );
 v2876 = Check_Buff(mask, 0x28B1E30); //63
 if (sub_42F5E0(v2876)) {}
 mplew.EndNode(false);

 mplew.StartNode("Mask - " + map.get(0x28B1E30));
 v2878 = Check_Buff(mask, 0x28B9210); //454
 if (sub_42F5E0(v2878)) {
     mplew.StartNode("Mask - " + map.get(0x28B9210));
     v5266 = mplew.writeInt("v2879");
     v5266 = mplew.writeInt("v5266");
     mplew.EndNode(false);
 }
 v2881 = Check_Buff(mask, 0x28B34F8); //307
 if (sub_42F5E0(v2881)) {
     mplew.StartNode("Mask - " + map.get(0x28B34F8));
     v2882 = mplew.writeInt("v2882");
     mplew.EndNode(false);
 }
 v2883 = Check_Buff(mask, 0x28B9258); //509
 if (sub_42F5E0(v2883)) {
     mplew.StartNode("Mask - " + map.get(0x28B9258));
     v2884 = sub_43ACB0( /* ipacket */ );
     v2885 = sub_43ACB0( /* ipacket */ );
     mplew.EndNode(false);
 }
 v2886 = Check_Buff(mask, 0x28B92A0); //510
 if (sub_42F5E0(v2886)) {
     mplew.StartNode("Mask - " + map.get(0x28B92A0));
     v2887 = mplew.write("v2887");
     v2888 = sub_43ACB0( /* ipacket */ );
     mplew.EndNode(false);
 }
 v2889 = Check_Buff(mask, 0x28B92E8); //511
 if (sub_42F5E0(v2889)) {
     mplew.StartNode("Mask - " + map.get(0x28B92E8));
     v3353 = sub_43ACB0( /* ipacket */ );
     // sub_403F00( /* &v3353 */ );
     mplew.EndNode(false);
 }
 v2890 = Check_Buff(mask, 0x28B90F0); //517
 if (sub_42F5E0(v2890)) {
     mplew.StartNode("Mask - " + map.get(0x28B90F0));
     v2891 = mplew.writeInt("v2891");
     v2892 = mplew.writeInt("v2892");
     v2893 = mplew.writeInt("v2893");
     mplew.EndNode(false);
 }
mplew.EndNode(false);
 // sub_40ED00( /* &v5264, 0x220 */ );
 // }

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
 function sub_43ACB0() {
     mplew.StartNode("sub_439640");
     v1 = 0;
     v2 = 0;
     v3 = 5;
     while (1) {
         v4 = mplew.write(0);
         v2 |= (v4 & 0x7F) << v1;
         if (v4 >= 0)
             break;
         if (--v3 <= 0) {
             v7 = -2147467259;
             CxxThrowException(v7, 0x204B878);
         }
         v1 += 7;
     }
     mplew.EndNode(false);
     mplew.AddComment("sub_42D560 return:" + ((v2 & 1) + (v2 >> 1)) * (1 - 2 * (v2 & 1)))
 }

 function sub_F16990(mask) {
     // unsigned var v3; // esi@1
     // var v4; // edi@1
     // var i; // ebx@1
     // var result; // eax@2
     v3 = 0;
     // v4 = Data;
     for (i = 0;; i += 40) {
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

 function sub_42F5E0(bool) {
     return bool;
 }

 function writeMaskFromList(mask, len) {
     var MAX_MOBSTAT = parseInt(len / 4);
     for (var i = 0; i < MAX_MOBSTAT; i++) {
         mask[i] = mplew.writeInt("mask[(" + i + ")]");
     }
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

 function sub_F16EE0( /*  */ )
 //CInPacket *__thiscall sub_F16EE0 (/* unsigned var this, CInPacket *ipacket */)
 {
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
