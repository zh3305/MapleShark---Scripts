//function addAttackInfo()
//char __thiscall addAttackInfo(_BYTE *this, var a2, int ipacket)
// {

mplew.write("") != 0;
v4 = mplew.write("v4");
v5 = v4;
v264 = (v4 >> 4);
v249 = v4 & 0xF;
v3[69768] = mplew.write("");
v6 = mplew.write("v6");
v7 = v6;
if (!v6) {
    v9 = 0;
} else
{
v8 = mplew.writeInt("技能ID");
v9 = v8;
  }
if (!v8) {

}
// v10 = CSkillInfo::GetSkill(0, v8);
// v230 = v10;
// if (v10) {
//     if (v7 <= 1)
//         v7 = 1;
//     v11 = sub_487920(/* v10 */);
//     if (v7 >= v11) {
//         v7 = v11;
//         v233 = v11;
//     }
//     else {
//         v233 = v7;
//     }
// }
 v12 = is_zero_skill(v9);
if (v12) {
    v12 = mplew.write("") != 0;
    if (v12) {
        v272 = mplew.writeShort("v272");
        v12 = mplew.writeShort("v12");
        if ( *(v227 + 68372))
            v12 = sub_1864560(/* a2, v5, *(v227 + 69768), v9, v7, v272, v12, ipacket */);
        return v12;
    }
}
if (v9 == 101110104)
    return v12;
v13 = 0;
v14 = 0;
v247 = 0;
if (a2 == 647 && (sub_DDFE60(/* v9 */) || sub_DDFE90(/* v9 */))) {
    v15 = mplew.write("v15");
    v13 = v15;
    v247 = v15;
    if (v15)
        v14 = mplew.writeInt("v14");
    var v14 = 0;
}
if (v9 == 80001850 || v9 == 0x280E264 + 4 || v9 > 42001004 && v9 <= sub_280E26E) {
    v16 = mplew.write(/* "v16" */);
    v13 = v16;
    v247 = v16;
    if (!v16) {
        LABEL_40:
        v266 = 0;
        continue LABEL_34;
    }
    v14 = mplew.writeInt("v14");
}
if (!v14)
    continue LABEL_40;
v17 = CSkillInfo::GetSkill(0, v14);
v266 = v17;
if (v17) {
    if (v13 <= 1)
        v13 = 1;
    v18 = sub_487920(/* v17 */);
    v247 = v13;
    if (v13 >= v18)
        v247 = v18;
}
LABEL_34:
v19 = mplew.write("v19");
v260 = v19 & 0x20;
v20 = v19 & 4;
v277 = v19 & 4;
v279 = v19 & 8;
v21 = mplew.write("v21");
v278 = mplew.writeInt("v278");
v265 = mplew.writeInt("v265");
v275 = 0;
v276 = 0;
v274 = v21 & 2;
if (v21 & 2) {
    v275 = mplew.writeInt("v275");
    v276 = mplew.writeInt("v276");
}
v268 = 0;
if (v21 & 8)
    v268 = mplew.write("v268");
v267 = (v21 >> 2) & 1;
v22 = v227;
v23 = v9 == *(v227 + 87360);
-1;
v269 = v23;
if (v230)
    v24 = = 3;
var v24 = 0;
BYTE2(v235) = v24 != 0;
if ((sub_613FF0(/* v9 */) || sub_6167E0(/* v9 */)) && ((v25 = (*(*v22 + 108))(v22), v25 / 100 == 24) || v25 == 2003)) {
    v26 = sub_166C070(/* v9 */);
    sub_5ABF20(/* (v22 + 184), v26 */);
}
else if (sub_59A460(/* v22 + 184 */)) {
    sub_5AF830(/* v22 + 184 */);
}
v255 = 255;
if (!v269
    && !v20
    && !sub_DE5AE0(/* v9 */)
    && !sub_613A70(/* v9 */)
    && v9 != 0x423D3B + 1
    && v9 != &byte_217C05B
    && v9 != &word_1E9F9A2
    && sub_4C8510(/* v9 */) != 1095
    && !BYTE2(v235)
    && !sub_DE5D10(/* v9 */)
    && !sub_612EE0(/* v9 */)
    && v9 != &byte_2826527
    && v9 != 0x4FA6B5 + 2
    && v9 != &byte_B8EFCB
    && v9 != 0x1E9F9A8
    && v9 != &byte_1F78A64
    && v9 != &byte_217E77B
    && v9 != 142120030
    && v9 != 131000016
    && v9 != 142100010
    && v9 != &byte_141F5EF
    && v9 != 0x1424414 + 1
    && v9 != 0x1421D0A + 1
    && v9 != 0x1424414 + 4
    && v9 != 0x142441B
    && !sub_DE1D00(/* v9 */)
    && !sub_DE1E80(/* v9 */)) {
    v27 = v22 + 184;
    if (sub_59D850(/* v22 + 184 */)) {
        if ( *(v22 + 68388) && v230 && *(v230 + 3828) != -1)
            sub_1674870(/* v22 */);
        (*(*v27 + 48))(v22 + 184);
        (*(*v27 + 52))(v22 + 184, 6, 120, 0, 0);
    }
    sub_518E40(/* *(v22 + 39268) */);
    sub_1683430(/* v22 */);
    0;
    0;
}
v28 = mplew.writeShort("v28");
v29 = v28 >> 15;
v12 = v28 & 0x7FFF;
v236 = v29 & 1;
v251 = v12;
if (v12 <= 0x5F1) {
    v30 = mplew.write("v30");
    v31 = mplew.writeShort("v31");
    v32 = mplew.writeShort("v32");
    LODWORD(v248) = mplew.write("");
    BYTE3(v235) = mplew.write("") != 0;
    v33 = mplew.write("v33");
    v34 = *(v227 + 57168);
    v243 = v33;
    if (v34) {
        if (v30 != 255 && v30 != 7 && v30 != 10 && !BYTE3(v235)) {
            v35 = sub_78A270(/* v222, v223, v224, v225 */);
            v36 = *(v227 + 57168);
            sub_78D650(/* v35 ^ (v236 ^ v35) & 1, 0 */);
            v37 = *(v227 + 57168);
            sub_78D580(/* v30, v31, v32 */);
            if (sub_DE1A50(/* LODWORD(v229) */)) {
                if (v248 != 0.0) {
                    v263 = &v220;
                    sub_16E18F0(/* v230, v233, 6, 0, 0x7FFFFFFF, 0, 0, 0, 0, 0, 0, 0, 0, 0 */);
                }
            }
        }
    }
    v262 = mplew.write("v262");
    v38 = mplew.writeInt("v38");
    v39 = v264;
    v263 = v38;
    v231 = 0;
    sub_ECE820(/* &v231, v264, &v235 + 3 */);
    v280 = 0;
    if (v39 > 0) {
        v40 = (v231 + 40);
        v226 = v39;
        while (1) {
            v41 = mplew.writeInt("v41");
            v41;
            if (v41)
                break;
            LABEL_123:
            v40 += 180;
            v226 = (v226 - 1);
            if (!v226)
                continue LABEL_124;
        }
        mplew.write("");
      *v40 = mplew.write("v40") != 0;
        mplew.write("") != 0;
        mplew.writeShort("");
        if (LODWORD(v229) != &byte_282901A && LODWORD(v229) != 80011050) {
            if (v249 > 0) {
                v42 = v249;
                v43 = v40 - 132;
                do {
                    v44 = mplew.writeInt("v44");
                    v44 >> 31;
            *v43 = v44 & 0x7FFFFFFF;
                    v43 += 4;
                    --v42;
                }
                while (v42);
            }
            continue LABEL_119;
        }
        v45 = mplew.write("v45");
        v45;
        v250 = 0;
        if (v45 <= 0) {
            LABEL_119:
            v53 = LODWORD(v229);
            if (sub_DE12A0(/* LODWORD(v229) */))
                mplew.writeInt("");
            if (v53 == sub_23644DD)
                mplew.write(/* "" */) != 0;
            continue LABEL_123;
        }
        v46 = (v40 - 132);
        while (1) {
        *v46 = mplew.writeInt("v46");
            v47 = *(v40 - 160);
            v248 = 0.0;
            if (v47 && (v48 = CMobPool::GetMob(0, v47), (v49 = v48) != 0) )
            {
                v228 = *(v48 + 560);
                if ( *&v228 != 0.0) {
                    v232 = sub_78A040(/* v48 */);
                    if (v232 > 0 && *v46 > 0)
                        LODWORD(v248) = 1;
                    if (!sub_C0E340(/* LODWORD(v229) */) || v49 != -576 && *(v49 + 1828) > 0 && LODWORD(v229) != 80001896) {
                        v50 = 0;
                        LABEL_117:
              *v46 = v50;
                        continue LABEL_118;
                    }
                    if (v248 != 0.0) {
                        v50 = v232;
                        continue LABEL_117;
                    }
                }
            }
        else
            {
                sub_B95DF0(/* *(v40 - 160) */);
            }
            LABEL_118:
            ++v46;
            v52 = __OFSUB__(/* v250 + 1, *(v40 - 136) */);
            v51 = v250++ + 1 - *(v40 - 136) < 0;
            if (!(v51 ^ v52))
                continue LABEL_119;
        }
    }
    LABEL_124:
    v54 = LODWORD(v229);
    v250 = 0;
    v256 = 0;
    v257 = 0;
    if (LODWORD(v229) == 2321001
        || LODWORD(v229) == 2221052
        || LODWORD(v229) == 0xA9B19C
        || LODWORD(v229) == 12121054) {
        v250 = mplew.writeInt("v250");
    }
    else if (sub_DDFB60(/* SLODWORD(v229) */) || sub_DDFB80(/* v54 */) || v54 == 101000202 || v54 == 101000102 || v54 == 80001762) {
        v256 = mplew.writeInt("v256");
        v257 = mplew.writeInt("v257");
    }
    v55 = v227;
    v56 = *(v227 + 68160);
    v272 = *(v227 + 68156);
    v273 = v56;
    if (sub_DDE640(/* v54 */)) {
        mplew.writeShort("");
        mplew.writeShort("");
    }
    v248 = 0.0;
    if (v54 == 51121009) {
        LODWORD(v248) = mplew.write("");
    }
    else if (v54 == 112110003) {
        v57 = mplew.writeInt("v57");
        v233 |= v57 << 16;
    }
    else if (v54 == &byte_2826527) {
        v58 = mplew.writeShort("v58");
        v226 = 0;
        v280 = 1;
        v59 = mplew.write("v59");
        if (v59 > 0) {
            do {
                v60 = sub_5128F0(/* -1 */);
          *v60 = mplew.writeShort("v60");
                --v59;
                mplew.writeShort("");
            }
            while (v59);
            v54 = LODWORD(v229);
        }
        sub_1691DD0(/* &v226, v230, v233, v58 */);
        v280 = 0;
        sub_5084A0(/* &v226 */);
        v55 = v227;
    }
    v270 = 0;
    v271 = 0;
    if (v54 == 0x1424413 || v54 == 0x2366C17 + 5) {
        v270 = mplew.writeInt("v270");
        v271 = mplew.writeInt("v271");
    }
    if (v54 == 0x1424413) {
        v61 = v55 + 4;
        v62 = (*(*(v55 + 4) + 20))(v55 + 4, &v234);
        v63 = *(*(v55 + 4) + 20);
        v228 = (*v62 - v270);
        v234 = v228;
        v64 = v63(v55 + 4, &v245);
        v228 = (*(v64 + 4) - v271);
        v65 = v228;
        sub_1AF522A(/* v65 */);
        v234 = v65 * 180.0 / 3.141592653589793;
        if (0.0 == v234 && !sub_59AF50(/* v55 + 184 */))
            v234 = 180.0;
        v226 = 0;
        LODWORD(v221) = 1614;
        v220 = &v228;
        v280 = 2;
        v66 = sub_EB87E0(/*  */);
        v67 = *sub_489BC0(/* v66, v220, SLODWORD(v221) */);
        v280 = 3;
        sub_4DCFD0(/* v67, &v226, 0 */);
        v280 = 2;
        if ( *&v228 != 0.0)
            sub_4895A0(/* v228 - 3 */);
        v769C2910(&v240);
        v68 = sub_47E440(/* &v240, &0x22B6690 */);
        if (v68 < 0)
            sub_1AF3320(/* v68 */);
        v280 = 4;
        v769C2910(&v237);
        v69 = sub_47E440(/* &v237, &0x22B6690 */);
        if (v69 < 0)
            sub_1AF3320(/* v69 */);
        v280 = 5;
        v769C2910(&v252);
        v70 = sub_47E440(/* &v252, &0x22B6690 */);
        if (v70 < 0)
            sub_1AF3320(/* v70 */);
        v280 = 6;
        if (!v226)
            sub_1AF3320(/* -2147467261 */);
        v71 = (*(*v61 + 20))(v55 + 4, &v245, v222);
        v222 = &v241;
        v72 = *v61;
        v221 = COERCE_FLOAT(&v238);
        v220 = &v253;
        v73 = (*(v72 + 20))(v61);
        sub_48CAD0(*v71, *(v73 + 4), &v259, v220, LODWORD(v221));
        v280 = 5;
        if (v252 == 8) {
            v252 = 0;
            if (v254)
                ZtlTaskMemFreeImp(v254 - 4);
        }
        else {
            v769CB980(&v252);
        }
        v280 = 4;
        if (v237 == 8) {
            LOWORD(v237) = 0;
            if (v239)
                ZtlTaskMemFreeImp(v239 - 4);
        }
        else {
            v769CB980(&v237);
        }
        v280 = 2;
        if (v240 == 8) {
            LOWORD(v240) = 0;
            if (v242)
                ZtlTaskMemFreeImp(v242 - 4);
        }
        else {
            v769CB980(&v240);
        }
        CSkillInfo::GetSkill(0, 0x1424419 + 1);
        sub_4A26D0(/* &v228, 0 */);
        v221 = 0.0;
        v220 = 0;
        v219 = 0;
        v258 = (&v217 + 4);
        v218 = 0;
        LODWORD(v217) = 0;
        v216 = v255;
        v215 = -1073343324;
        v213 = -20;
        v214 = 0;
        v212 = 0;
        v211 = v226;
        v280 = 8;
        v245 = &v211;
        if (v226)
            (*(*v226 + 4))(v226);
        if ( *&v228 == 0.0)
            v74 = 0;
        var v74 = *v228;
        v280 = 7;
        sub_5632A0(
        &v232,
            v74,
            0,
            v211,
            v212,
            v213,
            v214,
            v215,
            v216,
            LODWORD(v217),
            SBYTE4(v217),
            v218,
            v219,
            v220,
            LODWORD(v221));
        v75 = v232;
        v280 = 9;
        if (v232) {
            v76 = *v232;
            LODWORD(v221) = 1;
            v77 = v232;
            v220 = v232;
            v78 = (*(v76 + 304))(v232, 1);
            if (v78 < 0)
                sub_1AF3340(/* v78, v77, 0x1EFFEF8 */);
            v79 = v232;
            if (!v232)
                sub_1AF3320(/* -2147467261 */);
            v80 = *v232;
            sub_1AF4CE0(/* v234 */);
            v82 = (*(v80 + 320))(v79, 4, v81);
            if (v82 < 0)
                sub_1AF3340(/* v82, v79, 0x1EFFEF8 */);
            v769C2910(&v237);
            v83 = sub_47E440(/* &v237, &0x22B6690 */);
            if (v83 < 0)
                sub_1AF3320(/* v83 */);
            v280 = 10;
            v769C2910(&v240);
            v84 = sub_47E440(/* &v240, &0x22B6690 */);
            if (v84 < 0)
                sub_1AF3320(/* v84 */);
            v280 = 11;
            if (!v232)
                sub_1AF3320(/* -2147467261 */);
            sub_4CFC40(/* 0, &v240, &v237 */);
            v280 = 10;
            if (v240 == 8) {
                LOWORD(v240) = 0;
                if (v242)
                    ZtlTaskMemFreeImp(v242 - 4);
            }
            else {
                v769CB980(&v240);
            }
            v280 = 9;
            if (v237 == 8) {
                LOWORD(v237) = 0;
                if (v239)
                    ZtlTaskMemFreeImp(v239 - 4);
            }
            else {
                v769CB980(&v237);
            }
            v221 = 0.0;
            v220 = 0;
            v219 = 0;
            v218 = 0;
            v245 = &v217;
            v217 = 0.0;
            sub_49A9C0(/* &0x1EFF884, -1 */);
            v258 = &v215;
            v216 = 0;
            v214 = 0;
            v213 = 1000;
            v212 = 0;
            v211 = 0;
            v210 = v232;
            v280 = 13;
            LODWORD(v234) = &v210;
            if (v232)
                (*(*v232 + 4))(v232);
            v280 = 9;
            sub_52C440(
                v210,
                v211,
                v212,
                v213,
                v214,
                v215,
                v216,
                LODWORD(v217),
                HIDWORD(v217),
                v218,
                v219,
                v220,
                LODWORD(v221));
            v75 = v232;
        }
        v280 = 7;
        if (v75)
            (*(*v75 + 8))(v75);
        if ( *&v228 != 0.0)
            sub_47FBA0(/* v228 */);
        v280 = 0;
        if (v226)
            (*(*v226 + 8))(v226);
    }
    if (sub_DE1C50(/* LODWORD(v229) */)) {
        v85 = LODWORD(v229);
        sub_16C6B00(/* LODWORD(v229) */);
        if (v85 == &word_23619E2 || v85 == (sub_23640F1 + 3) || v85 == sub_23640F1) {
            v232 = 0;
            LODWORD(/* v221 */) = 1614;
            v220 = &v228;
            v280 = 14;
            v86 = sub_EB87E0(/*  */);
            v87 = *sub_489BC0(/* v86, v220, SLODWORD(v221) */);
            v280 = 15;
            sub_4DCFD0(/* v87, &v232, 0 */);
            v280 = 14;
            if ( *&v228 != 0.0)
                sub_4895A0(/* v228 - 3 */);
            v769C2910(&v252);
            v88 = sub_47E440(/* &v252, &0x22B6690 */);
            if (v88 < 0)
                sub_1AF3320(/* v88 */);
            v280 = 16;
            v769C2910(&v237);
            v89 = sub_47E440(/* &v237, &0x22B6690 */);
            if (v89 < 0)
                sub_1AF3320(/* v89 */);
            v280 = 17;
            v769C2910(&v240);
            v90 = sub_47E440(/* &v240, &0x22B6690 */);
            if (v90 < 0)
                sub_1AF3320(/* v90 */);
            v280 = 18;
            if (!v232)
                sub_1AF3320(/* -2147467261 */);
            v91 = v227;
            v92 = (v227 + 4);
            v93 = (*(*(v227 + 4) + 20))(v227 + 4, &v234, v222);
            v222 = &v253;
            v94 = *v92;
            v221 = COERCE_FLOAT(&v238);
            v220 = &v241;
            v95 = *(v94 + 20);
            v219 = &v246;
            v96 = v95(v92);
            sub_48CAD0(*v93, *(v96 + 4), v219, v220, LODWORD(v221));
            v280 = 17;
            if (v240 == 8) {
                LOWORD(v240) = 0;
                if (v242)
                    ZtlTaskMemFreeImp(v242 - 4);
            }
            else {
                v769CB980(&v240);
            }
            v280 = 16;
            if (v237 == 8) {
                LOWORD(v237) = 0;
                if (v239)
                    ZtlTaskMemFreeImp(v239 - 4);
            }
            else {
                v769CB980(&v237);
            }
            v280 = 14;
            if (v252 == 8) {
                v252 = 0;
                if (v254)
                    ZtlTaskMemFreeImp(v254 - 4);
            }
            else {
                v769CB980(&v252);
            }
            sub_4A26D0(/* &v228, 0 */);
            v97 = v228;
            if ( *&v228 != 0.0) {
                if ( *v228 && *(*v228 - 4) >> 1) {
                    v221 = 0.0;
                    v220 = 0;
                    v219 = 0;
                    LODWORD(v234) = &v217 + 4;
                    v218 = 0;
                    LODWORD(v217) = 0;
                    v216 = v255;
                    v98 = *(v91 + 38908);
                    v215 = 0;
                    v280 = 20;
                    v245 = &v214;
                    v214 = v98;
                    if (v98)
                        (*(*v98 + 4))(v98);
                    v213 = 0;
                    v212 = 0;
                    v211 = v232;
                    v280 = 21;
                    v258 = &v211;
                    if (v232) {
                        v99 = *v232;
                        v210 = v232;
                        (*(v99 + 4))(v232);
                    }
                    v100 = *v97;
                    v280 = 22;
                    v210 = sub_59AF50(/* v91 + 184 */) == 0;
                    v280 = 19;
                    sub_5632A0(
              &v226,
                        v100,
                        v210,
                        v211,
                        v212,
                        v213,
                        v214,
                        v215,
                        v216,
                        LODWORD(v217),
                        SBYTE4(v217),
                        v218,
                        v219,
                        v220,
                        LODWORD(v221));
                    v101 = v226;
                    v280 = 23;
                    if (v226) {
                        v769C2910(&v237);
                        v102 = sub_47E440(/* &v237, &0x22B6690 */);
                        if (v102 < 0)
                            sub_1AF3320(/* v102 */);
                        v280 = 24;
                        v769C2910(&v240);
                        v103 = sub_47E440(/* &v240, &0x22B6690 */);
                        if (v103 < 0)
                            sub_1AF3320(/* v103 */);
                        v280 = 25;
                        if (!v226)
                            sub_1AF3320(/* -2147467261 */);
                        sub_4CFC40(/* 0, &v240, &v237 */);
                        v280 = 24;
                        if (v240 == 8) {
                            LOWORD(v240) = 0;
                            if (v242)
                                ZtlTaskMemFreeImp(v242 - 4);
                        }
                        else {
                            v769CB980(&v240);
                        }
                        v280 = 23;
                        if (v237 == 8) {
                            LOWORD(v237) = 0;
                            if (v239)
                                ZtlTaskMemFreeImp(v239 - 4);
                        }
                        else {
                            v769CB980(&v237);
                        }
                        v221 = 0.0;
                        v220 = 0;
                        v219 = 0;
                        v218 = 0;
              *&v217 = v104;
                        LODWORD(v234) = &v217;
                        LODWORD(v217) = 0;
                        sub_49A9C0(/* &0x1EFF884, -1 */);
                        v245 = &v215;
                        v216 = 0;
                        v214 = 0;
                        v213 = 1000;
                        v212 = 0;
                        v211 = 0;
                        v210 = v226;
                        v280 = 27;
                        v258 = &v210;
                        if (v226)
                            (*(*v226 + 4))(v226);
                        v280 = 23;
                        sub_52C440(
                            v210,
                            v211,
                            v212,
                            v213,
                            v214,
                            v215,
                            v216,
                            LODWORD(v217),
                            HIDWORD(v217),
                            v218,
                            v219,
                            v220,
                            LODWORD(v221));
                        v101 = v226;
                    }
                    v280 = 19;
                    if (v101)
                        (*(*v101 + 8))(v101);
                }
                sub_47FBA0(/* v97 */);
            }
            v280 = 0;
            if (v232)
                (*(*v232 + 8))(v232);
        }
    }
    v105 = v231;
    v106 = HIDWORD(v234);
    v107 = 0;
    v108 = v231;
    while (v105 && v107 < *(v105 - 1)) {
        if ( *v108) {
            v228 = *v108;
            if (sub_4DAEA0(/* 4, &v228, &v226 */)) {
                v109 = v226;
            }
            else {
                v106 = 0;
                v244 |= 4u;
                HIDWORD(v234) = 0;
                v109 = &v234;
            }
            v110 = *(v109 + 1);
            if (v244 & 4) {
                v244 &= 0xFFFFFFFB;
                if (v106) {
                    sub_4DCC40(/* 0 */);
                    v106 = 0;
                    HIDWORD(v234) = 0;
                }
            }
            v111 = v110;
            v23 = v110 == 0;
            v105 = v231;
            if (!v23)
                continue LABEL_575;
        }
        v111 = sub_B95DF0(/* *v108 */);
        if (v111) {
            LABEL_575:
            v108[1] = v111;
            ++v107;
            v108 += 45;
        }
        else {
            v112 = sub_EC4870(/* v107 */);
            sub_ECB730(/* v112 */);
        }
    }
    if (LODWORD(v229) == 80001838 && v105 && *(v105 - 1)) {
        if (!*v105 || (v113 = CMobPool::GetMob(0, *v105)) == 0 )
        v113 = sub_B95DF0(/* *v231 */);
        v114 = v227;
        v115 = COERCE_FLOAT((*(*v227 + 108))(v227));
        v116 = *v114;
        v221 = v115;
        v117 = (*(v116 + 28))(v114);
        sub_4E3110(/* &v232, v117, LODWORD(v221) */);
        v226 = 0;
        LODWORD(v221) = 1614;
        v220 = &v228;
        v280 = 29;
        v118 = sub_EB87E0(/*  */);
        v119 = *sub_489BC0(/* v118, v220, SLODWORD(v221) */);
        v280 = 30;
        sub_4DCFD0(/* v119, &v226, 0 */);
        v280 = 29;
        if ( *&v228 != 0.0)
            sub_4895A0(/* v228 - 3 */);
        v120 = (*(*(v113 + 4) + 20))(v113 + 4, &v234);
        v121 = *v120;
        v122 = *(v120 + 4);
        v769C2910(&v252);
        v123 = sub_47E440(/* &v252, &0x22B6690 */);
        if (v123 < 0)
            sub_1AF3320(/* v123 */);
        v280 = 31;
        v769C2910(&v237);
        v124 = sub_47E440(/* &v237, &0x22B6690 */);
        if (v124 < 0)
            sub_1AF3320(/* v124 */);
        v280 = 32;
        v769C2910(&v240);
        v125 = sub_47E440(/* &v240, &0x22B6690 */);
        if (v125 < 0)
            sub_1AF3320(/* v125 */);
        v280 = 33;
        if (!v226)
            sub_1AF3320(/* -2147467261 */);
        sub_48CAD0(/* v121, v122, &v240, &v237, &v252 */);
        v280 = 32;
        if (v240 == 8) {
            LOWORD(v240) = 0;
            if (v242)
                ZtlTaskMemFreeImp(v242 - 4);
        }
        else {
            v769CB980(&v240);
        }
        v280 = 31;
        if (v237 == 8) {
            LOWORD(v237) = 0;
            if (v239)
                ZtlTaskMemFreeImp(v239 - 4);
        }
        else {
            v769CB980(&v237);
        }
        v280 = 29;
        if (v252 == 8) {
            v252 = 0;
            if (v254)
                ZtlTaskMemFreeImp(v254 - 4);
        }
        else {
            v769CB980(&v252);
        }
        v221 = 0.0;
        v220 = 0;
        v219 = 0;
        LODWORD(v234) = &v217 + 4;
        v218 = 0;
        LODWORD(v217) = 0;
        v216 = 255;
        v215 = 0;
        v214 = 0;
        v213 = 0;
        v212 = 0;
        v211 = 3;
        v210 = -1;
        v209 = 1000;
        v245 = &v208;
        v208 = 0;
        v207 = v226;
        v280 = 35;
        v258 = &v207;
        if (v226)
            (*(*v226 + 4))(v226);
        v126 = v232;
        v280 = 36;
        if (v232)
            v127 = *v232;
        var v127 = 0;
        v128 = sub_59AF50(/* v227 + 184 */);
        v280 = 29;
        sub_574320(
            v127,
            v128 == 0,
            v207,
            v208,
            v209,
            v210,
            v211,
            v212,
            v213,
            v214,
            v215,
            v216,
            S v217 ,
            SHIDWORD(v217),
            v218,
            v219,
            v220,
            v221);
        sub_50A4A0(/* 30.0, 0, 1110, 0, 0 */);
        v280 = 28;
        if (v226)
            (*(*v226 + 8))(v226);
        v280 = 0;
        if (v126 && !v770A61E0(v126 + 8)) {
            if ( *v126)
                ZtlTaskMemFreeImp(*v126 - 4);
            if ( *(v126 + 4)) {
                v221 = *(v126 + 4);
                sub_40E0C0(/* 0x22E6488, LODWORD(v221) */);
            }
            sub_40E0C0(/* 0x22E6488, v126 */);
        }
    }
    v129 = *(v227 + 68400);
    v130 = *(v227 + 68396);
    v261 = 0;
    if (v130 != v129) {
        v228 = 0;
        v221 = *&v228;
        v220 = LODWORD(v234);
        v219 = LODWORD(v234);
        v131 = sub_50FDA0(/* v129, v129, v130 */);
        v132 = v227;
        v133 = *(v227 + 68400);
        v134 = v131;
        for (i = v131; i != v133; ++i) {
            if ( *i) {
                v136 = *(**i + 8);
                v221 = *i;
                v136(LODWORD(v221));
            }
        }
        v134;
    }
    if ((LODWORD(v229) == (0x282B729 + 1) || LODWORD(v229) == 80011053) && v231 && *(v231 - 1)) {
        v137 = v231;
        if (!*v231 || (v138 = CMobPool::GetMob(0, *v231)) == 0 )
        v138 = sub_B95DF0(/* *v137 */);
        v139 = v227;
        v140 = COERCE_FLOAT((*(*v227 + 108))(v227));
        v141 = *v139;
        v221 = v140;
        v142 = (*(v141 + 28))(v139);
        v143 = v230;
        sub_4E3110(/* &v232, v142, LODWORD(v221) */);
        v221 = *(v143 + 4);
        v280 = 37;
        if (sub_1671F90(/* LODWORD(v221) */)) {
            v144 = COERCE_FLOAT((*(*v139 + 108))(v139));
            v145 = *v139;
            v221 = v144;
            v146 = (*(v145 + 28))(v139);
            v147 = sub_4E3110(/* &v228, v146, LODWORD(v221) */);
            if ( &v232 != v147) {
                if (v232)
                    sub_47FBA0(/* v232 */);
                v148 = *v147;
                v232 = v148;
                if (v148)
                    v770A61C0(v148 + 8);
            }
            if ( *&v228 != 0.0)
                sub_47FBA0(/* v228 */);
        }
        v226 = 0;
        LODWORD(v221) = 1614;
        v220 = &v228;
        v280 = 38;
        v149 = sub_EB87E0(/*  */);
        v150 = *sub_489BC0(/* v149, v220, SLODWORD(v221) */);
        v280 = 39;
        sub_4DCFD0(/* v150, &v226, 0 */);
        v280 = 38;
        if ( *&v228 != 0.0)
            sub_4895A0(/* v228 - 3 */);
        v151 = sub_4DAD80(*(v138 + 560) + 188, *(*(v138 + 560) + 196));
        v221 = COERCE_FLOAT((*(*(v138 + 4) + 20))(v138 + 4, &v234));
        v220 = v151;
        v219 = &v245;
        sub_171D110(/*  */);
        v152 = sub_C0A220(/* v219, v220, LODWORD(v221) */);
        v153 = *v152;
        v154 = *(v152 + 4);
        v769C2910(&v252);
        v155 = sub_47E440(/* &v252, &0x22B6690 */);
        if (v155 < 0)
            sub_1AF3320(/* v155 */);
        v280 = 40;
        v769C2910(&v237);
        v156 = sub_47E440(/* &v237, &0x22B6690 */);
        if (v156 < 0)
            sub_1AF3320(/* v156 */);
        v280 = 41;
        v769C2910(&v240);
        v157 = sub_47E440(/* &v240, &0x22B6690 */);
        if (v157 < 0)
            sub_1AF3320(/* v157 */);
        v280 = 42;
        if (!v226)
            sub_1AF3320(/* -2147467261 */);
        sub_48CAD0(/* v153, v154, &v240, &v237, &v252 */);
        v280 = 41;
        if (v240 == 8) {
            LOWORD(v240) = 0;
            if (v242)
                ZtlTaskMemFreeImp(v242 - 4);
        }
        else {
            v769CB980(&v240);
        }
        v280 = 40;
        if (v237 == 8) {
            LOWORD(v237) = 0;
            if (v239)
                ZtlTaskMemFreeImp(v239 - 4);
        }
        else {
            v769CB980(&v237);
        }
        v280 = 38;
        if (v252 == 8) {
            v252 = 0;
            if (v254)
                ZtlTaskMemFreeImp(v254 - 4);
        }
        else {
            v769CB980(&v252);
        }
        v221 = 0.0;
        v220 = 0;
        v219 = 0;
        LODWORD(v234) = &v217 + 4;
        v218 = 0;
        LODWORD(v217) = 0;
        v216 = 255;
        v215 = 0;
        v214 = 0;
        v213 = 0;
        v212 = 0;
        v211 = 3;
        v210 = -1;
        v209 = 1000;
        v245 = &v208;
        v208 = 0;
        v207 = v226;
        v280 = 44;
        v258 = &v207;
        if (v226)
            (*(*v226 + 4))(v226);
        v158 = v232;
        v280 = 45;
        if (v232)
            v159 = *v232;
        var v159 = 0;
        v160 = sub_59AF50(/* v227 + 184 */);
        v280 = 38;
        sub_574320(
            v159,
            v160 == 0,
            v207,
            v208,
            v209,
            v210,
            v211,
            v212,
            v213,
            v214,
            v215,
            v216,
            S v217 ,
            SHIDWORD(v217),
            v218,
            v219,
            v220,
            v221);
        sub_50A4A0(/* 30.0, 0, 1110, 0, 0 */);
        v280 = 37;
        if (v226)
            (*(*v226 + 8))(v226);
        v280 = 0;
        if (v158 && !v770A61E0(v158 + 8)) {
            if ( *v158)
                ZtlTaskMemFreeImp(*v158 - 4);
            if ( *(v158 + 4)) {
                v221 = *(v158 + 4);
                sub_40E0C0(/* 0x22E6488, LODWORD(v221) */);
            }
            sub_40E0C0(/* 0x22E6488, v158 */);
        }
    }
    v161 = LODWORD(v229);
    if (a2 == 649 || LODWORD(v229) == 131001104 || sub_DE1A50(/* LODWORD(v229) */)) {
        LABEL_491:
        v228 = (v227 + 184);
        v179 = sub_59CCB0(/* v227 + 184 */);
        if (!sub_EC4A70(/* v161, v179 */)) {
            LABEL_530:
            v189 = LODWORD(v229);
            switch (a2) {
                case 646:
                    v190 = sub_DE5D10(/* LODWORD(v229) */);
                    v191 = v227;
                    if (v190)
                        sub_184A880(/* v249, v230, v233, v236, &v231 */);
                    if (v189 == 112110005)
                        sub_184C0A0(/* v249, v230, v233, v236, &v231 */);
                    else
                        sub_1852140(/* 
                v249,
                v279,
                v230,
                v233,
                v251,
                v243,
                v236,
                v262,
                &v231,
                v250,
                &v274,
                v256,
                v257,
                v261,
                v268,
                v265 */);
                    break;
                case 647:
                    v191 = v227;
                    sub_1840F80(/* 
              v249,
              v230,
              v233,
              v251,
              v243,
              v236,
              v262,
              v263,
              &v231,
              v269,
              v266,
              v247,
              &v274,
              &v256,
              v268,
              v278 */);
                    break;
                case 648:
                    v191 = v227;
                    sub_1846F40(/* v249, v230, v233, v251, v236, v262, &v231, v250, v267 */);
                    break;
                case 649:
                    v191 = v227;
                    sub_184A250(/* v249, v230, v233, v251, v236, v262, &v231 */);
                    break;
                default:
                    v191 = v227;
                    break;
            }
            v192 = (*(*v191 + 108))(v191);
            if ((v192 / 10 == 53 || v192 == 501) && *(v191 + 67980)) {
                LODWORD(v234) = &v221;
                sub_16C2780(/* 6, 0 */);
            }
            if (sub_DDFB60(/* v189 */)) {
                v193 = v233;
                v189;
                v193;
                v194 = get_update_time();
                v23 = = 0;
                v194;
                if (v23 && !*(v191 + 68296)) {
                    v221 = 0.0;
                    v220 = 0;
                    v219 = 0;
                    LODWORD(v234) = &v217 + 4;
                    v218 = 0;
                    LODWORD(v217) = 0;
                    v216 = v255;
                    v215 = 0;
                    v245 = &v214;
                    v214 = 0;
                    v213 = 0;
                    v212 = 0;
                    v258 = &v211;
                    v211 = 0;
                    v280 = 51;
                    v195 = *sub_4E3110(/* &v263, 1, 0 */);
                    v280 = 52;
                    if (v195)
                        v196 = *v195;
                    var v196 = 0;
                    v280 = 53;
                    v197 = *sub_5632A0(
                      &v267,
                        v196,
                        0,
                        v211,
                        v212,
                        v213,
                        v214,
                        v215,
                        v216,
                        LODWORD(v217),
                        SBYTE4(v217),
                        v218,
                        v219,
                        v220,
                        LODWORD(v221));
                    v280 = 54;
                    LODWORD(v234) = &v221;
                    v221 = *&v197;
                    if ( *&v197 != 0.0) {
                        v198 = *v197;
                        v220 = v197;
                        (*(v198 + 4))(v197);
                    }
                    sub_51DFA0(/* LODWORD(v221) */);
                    v280 = 53;
                    if (v267)
                        (*(*v267 + 8))(v267);
                    v280 = 0;
                    if (v263)
                        sub_47FBA0(/* v263 */);
                    v199 = sub_E3BB20(/* v233 */);
                    v221 = 0.0;
                    v220 = 0;
                    v219 = 0;
                    v218 = 180 * v255 / 255;
                    LODWORD(v234) = &v217;
            *&v217 = 12884901888i64;
                    v216 = v257;
                    v215 = v256;
                    v245 = &v214;
                    v214 = 0;
                    v200 = sub_4E31E0(/* &v228 */);
                    v213 = *(v199 + 512);
                    v280 = 57;
                    v201 = sub_403AE0(/* v199 + 504, v213 */);
                    if ( *v200)
                        v202 = **v200;
                    var v202 = 0;
                    v280 = 58;
                    v203 = sub_56C300(
                        v202,
                        1000 * v201,
                        0,
                        v214,
                        v215,
                        v216,
                        LODWORD(v217),
                        HIDWORD(v217),
                        v218,
                        v219,
                        v220,
                        LODWORD(v221));
                    v204 = v228;
                    v203;
                    v280 = 0;
                    if (v204) {
                        sub_47FBA0(/* v204 */);
              *&v228 = 0.0;
                    }
                    v205 = v257;
                    v189 = LODWORD(v229);
                    v256;
                    v205;
                }
            }
            if ( = v189 && sub_DDE640(/* v189 */))
                sub_183CDC0(/* &v272 */);
            if (v189 == 0xD7782C)
                sub_168F370(/* v191 */);
            if (v230 && *(v230 + 3828) != -1)
                v230;
            var 0;
            continue LABEL_571;
        }
        if (!v265) {
            v188 = v236;
            sub_5A6210(/* v236 == 0 */);
            v184 = LODWORD(v229);
            LABEL_519:
            if ((v184 == &off_19DAEBC || v184 == (0x131CE08 + 2) || v184 >= 80001389 && v184 <= 80001392)
                && sub_59AF50(/* v228 */) != v188) {
                sub_183F2D0(/* v227 */);
            }
            if ((v184 == 80011381 || v184 == 80011382 || v184 == 80011387) && sub_59AF50(/* v228 */) != v188)
                sub_183F2D0(/* v227 */);
            continue LABEL_530;
        }
        sub_167FD60(/* &v234, v265 */);
        if (HIDWORD(v234)) {
            v180 = sub_EC8B90(/* &v258 */);
            v181 = v244 | 1;
            if ( *(v180 + 4)) {
                v182 = *(sub_EC8B90(/* &v245 */) + 4);
                v181 |= 2u;
                v280 = 48;
                v244 = v181;
                v183 = sub_59CCB0(/* v182 */);
                v184 = LODWORD(v229);
                if (sub_EC4A70(/* LODWORD(v229), v183 */)) {
                    BYTE7(v229) = 1;
                    continue LABEL_499;
                }
            }
        }
        else {
            v181 = v244;
        }
        v184 = LODWORD(v229);
        BYTE7(v229) = 0;
        LABEL_499:
        v280 = 47;
        if (v181 & 2) {
            v181 &= 0xFFFFFFFD;
            v244 = v181;
            if (v246) {
                v185 = (v246 - 24);
                v186 = v246 - 24 + 4;
                if (!v770A61E0(v186)) {
                    if (v246)
                        1;
                    v770A61C0(v186);
                    if (v185)
                        (**v185)(v185, 1);
                }
                v246 = 0;
            }
        }
        v280 = 46;
        if (v181 & 1) {
            if (v259) {
                v187 = (v259 - 24);
                if (!v770A61E0(v259 - 24 + 4)) {
                    if (v259)
                        1;
                    v770A61C0(v187 + 1);
                    if (v187)
                        (**v187)(v187, 1);
                }
            }
        }
        v188 = v236;
        if (BYTE7(v229)) {
            LODWORD(v221) = v236 == 0;
            sub_EC4F50(/* LODWORD(v221) */);
        }
        v280 = 0;
        if (HIDWORD(v234))
            sub_B91870(/* 0 */);
        continue LABEL_519;
    }
    v162 = v227;
    *(v162 + 1612) ^= (v236 ^ *(v227 + 1612)) & 1;
    if (v269 || v277)
        continue LABEL_464;
    v163 = v230;
    if ((!v230
        || v161 != 0x510A19 + 2
        && v161 != 2301002
        && v161 != byte_226DB91
        && *(v230 + 4) != 112110005
        && v161 != 65101006
        && v161 != byte_226FEB5
        && v161 != byte_C835F1
        && v161 != 0xA9B172 + 3
        && v161 != &byte_217C05B
        && v161 != sub_B8EFCC
        && v161 != 0xB8A1B9 + 4
        && v161 != &byte_B8EFCB
        && v161 != 142120030
        && v161 != 0x1E9F9A8
        && !sub_183CAA0(/* v161 */)
        && v161 != 80001829
        && v161 != 80001857
        && v161 != 80001832
        && v161 != sub_27326CC
        && v161 != &byte_2826527
        && v161 != 0x280E264 + 6
        && v161 != 80011046
        && v161 != 80011069
        && v161 != 80011080
        && !sub_DE5AE0(/* v161 */)
        && !sub_613A70(/* v161 */)
        && !BYTE2(v235)
        && !sub_DE5D10(/* v161 */)
        && (!sub_607A00(/* v161 */) || !BYTE7(v229))
        && v161 != 95001003
        && !sub_183CCB0(/* v161 */)
        && v161 != 80001762
        && v161 != &byte_141F5EF
        && v161 != 0x1424414 + 1
        && v161 != 0x1421D0A + 1
        && v161 != 0x1424414 + 4
        && v161 != 0x142441B
        && !sub_DE1D00(/* v161 */)
        && !sub_DF2160(/* v161 */))
        && !sub_183CAA0(/* v161 */)
        && v161 != 142100010
        && v161 != 142121008
        && !sub_DE1350(/* v161 */)
        && !v265
        && !sub_16D0DE0(/* v163, &v261, v251, v243, v233 */)) {
        LABEL_571:
        v280 = -1;
        v12 = sub_ECB6E0(/* v222 */);
        return v12;
    }
    if (!v163
        || sub_DDF5B0(/* v161 */)
        || sub_613A70(/* v161 */)
        || sub_DE5AE0(/* v161 */)
        || sub_607A00(/* v161 */) && BYTE7(v229)
        || v161 == 95001003
        || BYTE2(v235) && v161 != 101000102 && v161 != 0x17F25EE + 5 && v161 != 0x17EFEE0 + 2
        || sub_DE5D10(/* v161 */)
        || sub_183CAA0(/* v161 */)
        || v161 == 80001857
        || v161 == 65101006
        || v161 == byte_226FEB5
        || v161 == byte_C835F1
        || v161 == 0xA9B172 + 3
        || v161 == &byte_2826527
        || v161 == 80011080
        || v161 == 0x1E9F9A8
        || = 4 && v260 && v161 != 0x4215FC + 2 )
    {
        continue LABEL_464;
    }
    if (v161 == 0xA9B19C) {
        if (v250 == 2000) {
            v164 = CSkillInfo::GetSkill(0, 11121055);
            v165 = v233;
            continue LABEL_458;
        }
    }
    else if (v161 == 80001850) {
        v172 = v266;
        if (v266) {
            v165 = v247;
            v164 = v266;
            continue LABEL_458;
        }
        LABEL_470:
        if (sub_1719230(/* v161 */) && v172) {
            v165 = v247;
            v164 = v172;
        }
        else {
            v165 = v233;
            v164 = v163;
        }
        if (v161 == 101000102) {
            LODWORD(v234) = &v220;
            sub_16E18F0(/* v164, v165, v243, 0, 0x7FFFFFFF, 0, &v256, 0, 0, 0, 0, 0, 0, 0 */);
            continue LABEL_464;
        }
        if (v161 == 100001283) {
            v221 = 0.0;
            v220 = 0;
            v219 = 0;
            continue LABEL_463;
        }
        if (v161 != 142100010 && v161 != 142121008) {
            if (v161 == 80001838) {
                if (v264 > 0)
                    continue LABEL_464;
            }
            else if (v161 == 0x2366C17 + 5) {
                v221 = v248;
                v220 = v264;
                v166 = &v270;
                LABEL_462:
                v219 = v166;
                LABEL_463:
                sub_1702810(/* v164, v261, v243, v165, v219, v220, LODWORD(v221) */);
                continue LABEL_464;
            }
            LABEL_458:
            if ((v161 == 0x282B729 + 1 || v161 == 80011053) && v264 > 0)
                continue LABEL_464;
            v221 = v248;
            v220 = v265;
            v166 = &v256;
            continue LABEL_462;
        }
        LABEL_464:
        v167 = sub_183CAA0(/* v161 */);
        if (v167) {
            v168 = sub_183FB20(/* v162 + 87720 */);
            v169 = v233;
            v170 = v251;
            v171 = v243;
        *v168 = v161;
            v169;
            v170;
            v171;
        }
        else {
            v170 = v251;
        }
        if (v167) {
            v173 = sub_183FB20(/* v162 + 87720 */);
            v174 = v233;
            v175 = v243;
        *v173 = v161;
            v174;
            v170;
            v175;
        }
        v176 = &0x22C6D58[8 * v170];
        v177 = v176[3];
        if (!v177)
            v177 = 1;
        v178 = v176[4] * *(sub_59E600(/* v227 + 184 */) + 8) / v177;
        continue LABEL_491;
    }
    v172 = v266;
    continue LABEL_470;
}
return v12;
}