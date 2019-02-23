UPDATE_SKILLS();
function UPDATE_SKILLS() {
    v3 = 0;
    if (mplew.write(1)) {
        // CWvsContext::SetExclRequestSent(v2, 0);
    }
    v53 = mplew.write(0);
    v51 = mplew.write(0) != 0;
    // v44 = *(CWvsContext::GetCharacterData(v2, &v54) + 4);
    // if (v55) {
    //     v4 = (v55 - 20);
    //     v5 = (v55 - 20 + 4);
    //     if (!InterlockedDecrement(v5)) {
    //         if (v55)
    //             1;
    //         InterlockedIncrement(v5);
    //         if (v4)
    //             (**v4)(v4, 1);
    //     }
    //     v55 = 0;
    // }
    v48 = 0;
    v6 = 0;
    v57 = 0;
    v45 = 0;
    v57 = 1;
    v7 = mplew.writeShort("update.size()");
    mplew.StartNode("SkillEntry")
    v50 = v7;
    if (v7 > 0) {
        // v52 = v44 + 1829;
        while (1) {
            v8 = mplew.writeInt("skillID");
            v9 = v8;
            v43 = v8;
            v10 = mplew.writeInt("skillevel");
            // v11 = v10;
            // v46 = v10;
            // if (v10 >= 0) {
            //     LABEL_21:
            //     if (sub_58F000(/* &v43, 0 */))
            //         sub_785A40(/* &v43 */);
            //     sub_654440(/* &v43, &v46 */);
            //     sub_654440(/* &v43, &v46 */);
            //     v11 = v46;
            //     continue LABEL_24;
            // }
            // if (!sub_E3F510(/* v9 */)) {
            //     if (!sub_E3F2A0(/* v9 */))
            //         continue LABEL_17;
            //     if (!sub_E3F2A0(/* v9 */))
            //         continue LABEL_21;
            // }
            // if (!v51)
            //     continue LABEL_21;
            // LABEL_17:
            // if (sub_785A40(/* &v43 */)) {
            //     if (sub_58F000(/* &v43, 0 */))
            //         sub_785A40(/* &v43 */);
            //     sub_654440(/* &v43, 0 */);
            // }
            // LABEL_24:
            v12 = mplew.writeInt("masterlevel");
            // v49 = v12;
            // if (sub_64F3A0(/* v9 */)) {
            //     if (sub_58F000(/* &v43, 0 */))
            //         sub_785A40(/* &v43 */);
            //     sub_654440(/* &v43, &v49 */);
            //     sub_654440(/* &v43, &v49 */);
            //     v11 = v46;
            // }
            v56 = mplew.writeBuffer("addExpirationTime", 8);
            //         if (sub_768580(/* &v43, 0 */))
            //             sub_767510(/* &v43 */);
            //         sub_76D4F0(/* &v43, &v56 */);
            //         sub_76D4F0(/* &v43, &v56 */);
            //         if (sub_64F180(/* v9 */))
            //             sub_1AB5170(/* v9, v11 */);
            //   *sub_446180(/* -1 */) = v9;
            if (--v50 <= 0) {
                // v3 = v48;
                // v6 = v45;
                break;
            }
        }
    }
    mplew.EndNode(true);
    v13 = 0;
    v52 = mplew.write(3);
    // if (v53) {
    //     v42 = 8538;
    //     v41 = &v53;
    //     sub_F15240(/*  */);
    //     v14 = sub_485500(/* v41, v42 */);
    //     v57 = 2;
    //     sub_1AAD830(/* &v48, v14 */);
    //     v57 = 1;
    //     if (v53)
    //         sub_484D80(/* v53 - 3 */);
    //     v42 = 8539;
    //     v41 = &v53;
    //     sub_F15240(/*  */);
    //     v15 = sub_485500(/* v41, v42 */);
    //     v57 = 3;
    //     sub_1AAD830(/* &v45, v15 */);
    //     v57 = 1;
    //     if (v53)
    //         sub_484D80(/* v53 - 3 */);
    // }
    // while (v3 && v13 < *(v3 - 4)) {
    //     if (sub_E4BE50(/* *(v3 + 4 * v13) */) || (*(v3 + 4 * v13) - 80000048) <= 1) {
    //         v42 = 0;
    //         v41 = 0;
    //         v40 = 0;
    //         v39 = 0;
    //         v53 = &v21;
    //         v38 = 0;
    //         v16 = v47[6964];
    //         v17 = sub_40ED90(/* 0 */);
    //         sub_40ED00(/* v17, 544 */);
    //         sub_F6F6A0(/* 
    //     5,
    //     *(v3 + 4 * v13),
    //     0x7FFFFFFF,
    //     v21,
    //     v22,
    //     v23,
    //     v24,
    //     v25,
    //     v26,
    //     v27,
    //     v28,
    //     v29,
    //     v30,
    //     v31,
    //     v32,
    //     v33,
    //     v34,
    //     v35,
    //     v36,
    //     v37,
    //     v38,
    //     v39,
    //     v40,
    //     v41,
    //     v42 */);
    //         v6 = v45;
    //     }
    //     ++v13;
    // }
    // for (i = 0; v6 && i < *(v6 - 4); ++i) {
    //     if (sub_E4BE50(/* *(v6 + 4 * i) */) || (*(v6 + 4 * i) - 80000048) <= 1) {
    //         v19 = v47[6964];
    //         v42 = *(v6 + 4 * i);
    //         sub_F66490(/* v42 */);
    //     }
    // }
    // sub_1A52320(/* 0, 0, 0 */);
    // v57 = 0;
    // sub_42FBD0(/* &v45 */);
    // v57 = -1;
    // return sub_42FBD0(/* &v48 */);
}