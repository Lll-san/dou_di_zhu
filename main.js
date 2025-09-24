const huas = ['img/方块.jpg', 'img/梅花.jpg', 'img/红桃.jpg', 'img/黑桃.jpg']
const dians = ['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2', 'JOKER', 'JOKER*']
const dax = {0: '3', 1: '4', 2: '5', 3: '6', 4: '7', 5: '8', 6: '9', 7: '10', 8: 'J', 9: 'Q', 10: 'K', 11: 'A', 12: '2', 13: 'JOKER', 14: 'JOKER*'}
const hsdx = {0: 'img/方块.jpg', 1: 'img/梅花.jpg', 2: 'img/红桃.jpg', 3: 'img/黑桃.jpg'}
const mapa = 20;  // 最大牌量(设置手牌放置边界)

function paim(wz, lis){  // 设置牌面顺序
    if (kind == 0){
        if (wz != 'media3-cp-box'){
            lis.sort((a, b) => {
                // 先比较第一个元素
                if (a[0] !== b[0]) {
                    return b[0] - a[0]; // 第一个元素不同时，直接按第一个元素排序
                } else {
                    return b[1] - a[1]; // 第一个元素相同时，按第二个元素排序
                }
            });
        }else{
            lis.sort((a, b) => {
            // 第一步：优先比较子数组的第1个元素（a[0] 和 b[0]）
            if (a[0] !== b[0]) {
                return a[0] - b[0]; // 第1项不同时，按第1项升序（前项减后项）
            } else {
                // 第二步：第1项相同时，比较子数组的第2个元素（a[1] 和 b[1]）
                return a[1] - b[1]; // 按第2项升序（前项减后项）
            }
            });
        }

        Xianscdp(1, wz, lis);
        // Xianscdp(2, wz, lis);
        // Xianscdp(3, wz, lis);
    }
}

function Xianscdp(id, wz, lis){  // 显示层叠牌    位置，牌堆
    if (id == 1){
        if (wz == 'media1-box') {
            var zt = 'media11-box';
        }else{
            var zt = "media-cp" + id + "-box";
        }

        const caracterp1 = document.createElement('div');
        caracterp1.className = 'text-element1';
        caracterp1.textContent = WanJ(1).length; // 添加文本内容
        document.querySelector('body').appendChild(caracterp1); // 关键：选择media1-box作为父容器

        const caracterp2 = document.createElement('div');
        caracterp2.className = 'text-element2';
        caracterp2.textContent = WanJ(2).length; // 添加文本内容
        document.querySelector('body').appendChild(caracterp2); // 关键：选择media1-box作为父容器

        const caracterp3 = document.createElement('div');
        caracterp3.className = 'text-element3';
        caracterp3.textContent = WanJ(3).length; // 添加文本内容
        document.querySelector('body').appendChild(caracterp3); // 关键：选择media1-box作为父容器

        if(WanJ(1).length == 0){
            ZiT(1, '胜利');
            ZiT(id, 'None');
            ZiT(id, 'None');
            over = 1;
            console.log(WanJ(1))
        }else if(WanJ(2).length == 0){
            ZiT(1, '失败');
            ZiT(id, 'None');
            ZiT(id, 'None');
            over = 1;
            console.log(WanJ(2))
        }else if(WanJ(3).length == 0){
            ZiT(1, '失败');
            ZiT(id, 'None');
            ZiT(id, 'None');
            over = 1;
            console.log(WanJ(3))
        }

        if (wz == 'media2-cp-box'){
            zt = "media-cp2-box";
        }else if (wz == 'media3-cp-box'){
            zt = "media-cp3-box";
        }
        lis_zt = manm(0, lis);  // 手牌状态（是否选中
        // console.log(id)
        const cj = mapa - lis.length;  // 计算出剩余空间
        // console.log(lis);
        let media1 = document.createElement('div');
        media1.className = wz;
        document.body.appendChild(media1);

        for (let i = 0; i < lis.length; i++) {
            const box = document.createElement('div');

            box.className = zt;
            if (lis[i][0] < 13){
                // 创建并添加第一个图片
                const imgz = document.createElement('img');
                imgz.className = 'media-imagep';
                imgz.src = hsdx[lis[i][1]]; // 使用相对路径
                box.appendChild(imgz);

                // 创建并添加第二个图片
                const imgf = document.createElement('img');
                imgf.className = 'media-imagefp upside-down';
                imgf.src = hsdx[lis[i][1]]; // 使用相对路径
                box.appendChild(imgf);

                const wbz = document.createElement('div');
                wbz.className = 'caption';
                wbz.textContent = dax[lis[i][0]]; // 添加文本内容
                wbz.style.fontSize = '20px';
                wbz.style.fontWeight = 'bold'; // 设置文字加粗
                if (dax[lis[i][0]] == 10){
                    wbz.style.marginLeft = '-5px';
                }
                else if ((dax[lis[i][0]] == 'Q')){
                    wbz.style.marginTop = '-0px';
                    wbz.style.marginLeft = '-2px';
                    wbz.style.fontSize = '18px';
                }
                box.appendChild(wbz);

                const wbf = document.createElement('div');
                wbf.className = 'captionf text-upside-down';
                wbf.textContent = dax[lis[i][0]]; // 添加文本内容
                wbf.style.fontSize = '20px';
                wbf.style.fontWeight = 'bold'; // 设置文字加粗
                if (dax[lis[i][0]] == 10){
                    wbf.style.marginRight = '-5px';
                }
                else if ((dax[lis[i][0]] == 'Q')){
                    wbf.style.marginTop = '-0px';
                    wbf.style.marginRight = '-2px';
                    wbf.style.fontSize = '18px';
                }
                box.appendChild(wbf);
                
                if (wz != 'media2-cp-box' && wz != 'media3-cp-box') {
                        box.style.setProperty('--index', i + cj * 0.5); // 设置索引变量
                        box.style.zIndex = i;
                }else{
                    box.style.setProperty('--index', i); // 设置索引变量
                    if (wz == 'media3-cp-box') box.style.zIndex = -i;
                }

                document.querySelector('.' + wz).appendChild(box); // 关键：选择media1-box作为父容器
                box.style.setProperty('--id', i); // 设置索引变量
            }else{
                const box = document.createElement('div');

                box.className = zt;

                const wbz = document.createElement('div');
                wbz.className = 'caption';
                wbz.textContent = dax[lis[i][0]]; // 添加文本内容
                wbz.style.fontSize = '18px';
                wbz.style.fontWeight = 'bold'; // 设置文字加粗
                wbz.style.marginBottom = '5px';
                wbz.style.marginTop = '0';
                wbz.style.marginLeft = '-8px';
                wbz.style.marginRight = '0';
                wbz.style.writingMode = 'vertical-lr'; // 垂直排列，从右到左
                wbz.style.textOrientation = 'upright'; // 保持文字直立
                if (lis[i][0] == 14){
                    wbz.style.color = '#ff0000'; // 使用十六进制值
                }
                box.appendChild(wbz);

                const wbf = document.createElement('div');
                wbf.className = 'captionf text-upside-down';
                wbf.textContent = dax[lis[i][0]]; // 添加文本内容
                wbf.style.fontSize = '18px';
                wbf.style.fontWeight = 'bold'; // 设置文字加粗
                wbf.style.marginBottom = '5px';
                wbf.style.marginTop = '0';
                wbf.style.marginLeft = '0';
                wbf.style.marginRight = '-8px';
                wbf.style.writingMode = 'vertical-rl'; // 垂直排列，从右到左
                wbf.style.textOrientation = 'upright'; // 保持文字直立
                if (lis[i][0] == 14){
                    wbf.style.color = '#ff0000'; // 使用十六进制值
                }
                box.appendChild(wbf);

                if (wz != 'media2-cp-box' && wz != 'media3-cp-box') {
                        box.style.setProperty('--index', i + cj * 0.5); // 设置索引变量
                        box.style.zIndex = i;
                }else{
                    box.style.setProperty('--index', i); // 设置索引变量
                    if (wz == 'media3-cp-box') box.style.zIndex = -i;
                }

                box.style.setProperty('--id', i); // 设置索引变量
                document.querySelector('.' + wz).appendChild(box); // 关键：选择media1-box作为父容器
            }
        }
    }
    // else if(id == 2){
    //     const caracterp1 = document.createElement('div');
    //     caracterp1.className = 'text-element2';
    //     caracterp1.textContent = lis2.length; // 添加文本内容
    //     document.querySelector('body').appendChild(caracterp1); // 关键：选择media1-box作为父容器
    //     if (lis2.length == 0) sc_Class("media2-box");
    // }else if(id == 3){
    //     const caracterp1 = document.createElement('div');
    //     caracterp1.className = 'text-element3';
    //     caracterp1.textContent = lis3.length; // 添加文本内容
    //     document.querySelector('body').appendChild(caracterp1); // 关键：选择media1-box作为父容器
    //     if (lis3.length == 0) sc_Class("media3-box");
    // }


    if (wz == 'media1-box'){
        XuanP();
        // console.log(lis)
    }
}

function ChuPQY(){  // 出牌区域
    const media_cp = document.createElement('div');
    media_cp.className = 'media1-cp-box';
    document.body.appendChild(media_cp);
    const media_cp2 = document.createElement('div');
    media_cp.className = 'media2-cp-box';
    document.body.appendChild(media_cp2);
    const media_cp3 = document.createElement('div');
    media_cp.className = 'media3-cp-box';
    document.body.appendChild(media_cp3);
}



function dizp(lis){  // 显示地主牌, 第一个元素为0时显示背面，否则显示正面
    const mapa = 20;  // 最大牌量(设置手牌放置边界)
    // var lis = [0, [1, 1], [2, 2], [3, 3]];
    const box4 = document.createElement('div');
    box4.className = 'media4-box';
    document.body.appendChild(box4); // 关键：选择media1-box作为父容器
    if (lis[0] == 0){
        for (let i = 0; i < 3; i++){
            const box = document.createElement('div');
            box.className = 'media44-box';
            const imgz = document.createElement('img');
            imgz.className = 'media-image';
            imgz.src = "img/背面.jpg"; // 使用相对路径
            box.style.setProperty('--index', i);
            box.appendChild(imgz);
            document.querySelector('.media4-box').appendChild(box); // 关键：选择media4-box作为父容器
        }
    }
    else{
        // console.log(lis);
        // const caracterp1 = document.createElement('div');
        // caracterp1.className = 'text-element1';
        // caracterp1.textContent = lis.length; // 添加文本内容
        // document.querySelector('body').appendChild(caracterp1); // 关键：选择media1-box作为父容器
        for (let i = 0; i < 3; i++) {
            const box = document.createElement('div');

            box.className = 'media44-box';
            if (lis[i][0] < 13){
                // 创建并添加第一个图片
                const imgz = document.createElement('img');
                imgz.className = 'media-imagep';
                imgz.src = hsdx[lis[i][1]]; // 使用相对路径
                box.appendChild(imgz);

                // 创建并添加第二个图片
                const imgf = document.createElement('img');
                imgf.className = 'media-imagefp upside-down';
                imgf.src = hsdx[lis[i][1]]; // 使用相对路径
                box.appendChild(imgf);

                const wbz = document.createElement('div');
                wbz.className = 'caption';
                wbz.textContent = dax[lis[i][0]]; // 添加文本内容
                wbz.style.fontSize = '20px';
                wbz.style.fontWeight = 'bold'; // 设置文字加粗
                if (dax[lis[i][0]] == 10){
                    wbz.style.marginLeft = '-5px';
                }
                else if ((dax[lis[i][0]] == 'Q')){
                    wbz.style.marginTop = '-0px';
                    wbz.style.marginLeft = '-2px';
                    wbz.style.fontSize = '18px';
                }
                box.appendChild(wbz);

                const wbf = document.createElement('div');
                wbf.className = 'captionf text-upside-down';
                wbf.textContent = dax[lis[i][0]]; // 添加文本内容
                wbf.style.fontSize = '20px';
                wbf.style.fontWeight = 'bold'; // 设置文字加粗
                if (dax[lis[i][0]] == 10){
                    wbf.style.marginRight = '-5px';
                }
                else if ((dax[lis[i][0]] == 'Q')){
                    wbf.style.marginTop = '-0px';
                    wbf.style.marginRight = '-2px';
                    wbf.style.fontSize = '18px';
                }
                box.appendChild(wbf);

                box.style.setProperty('--index', i); // 设置索引变量
                document.querySelector('.media4-box').appendChild(box); // 关键：选择media1-box作为父容器
            }
            else{
                const box = document.createElement('div');

                box.className = 'media44-box';

                const wbz = document.createElement('div');
                wbz.className = 'caption';
                wbz.textContent = dax[lis[i][0]]; // 添加文本内容
                wbz.style.fontSize = '18px';
                wbz.style.fontWeight = 'bold'; // 设置文字加粗
                wbz.style.marginBottom = '5px';
                wbz.style.marginTop = '0';
                wbz.style.marginLeft = '-8px';
                wbz.style.marginRight = '0';
                wbz.style.writingMode = 'vertical-lr'; // 垂直排列，从右到左
                wbz.style.textOrientation = 'upright'; // 保持文字直立
                if (lis[i][0] == 14){
                    wbz.style.color = '#ff0000'; // 使用十六进制值
                }
                box.appendChild(wbz);

                const wbf = document.createElement('div');
                wbf.className = 'captionf text-upside-down';
                wbf.textContent = dax[lis[i][0]]; // 添加文本内容
                wbf.style.fontSize = '18px';
                wbf.style.fontWeight = 'bold'; // 设置文字加粗
                wbf.style.marginBottom = '5px';
                wbf.style.marginTop = '0';
                wbf.style.marginLeft = '0';
                wbf.style.marginRight = '-8px';
                wbf.style.writingMode = 'vertical-rl'; // 垂直排列，从右到左
                wbf.style.textOrientation = 'upright'; // 保持文字直立
                if (lis[i][0] == 14){
                    wbf.style.color = '#ff0000'; // 使用十六进制值
                }
                box.appendChild(wbf);

                box.style.setProperty('--index', i); // 设置索引变量
                document.querySelector('.media4-box').appendChild(box); // 关键：选择media1-box作为父容器
            }
        }
    }
}



function XuanP(){  // 选牌

    document.querySelectorAll(css_11).forEach(card => {
        // 为每张卡片添加点击事件监听器
        card.addEventListener('click', function() {
            // 1. 添加点击动画效果
            // 给当前卡片添加 'clicked' 类，触发点击动画
            this.classList.add('clicked');
            
            // 2. 改变卡牌状态
            let a = card.style.getPropertyValue('--id'); // 比如 index=0 → 第1个，index=1 → 第2个
            for (let i = 0; i < lis.length; i++){
                if (lis_zt[a] != 0 && lis_zt[a] != 1) lis_zt[a] = 0;
            }
            lis_zt[a] = (lis_zt[a] + 1) % 2;      // 记录卡牌状态
            // console.log(a)
            // console.log(lis_zt)

            if (lis_zt[a]) {
                this.classList.add('selected');
            }else{
                this.classList.remove('selected');
            }
        });
    });
};


function AnJ(wb, wz, wj = 1){ // 按键   文本内容，位置
    // 步骤1：创建按钮元素（生成 <button></button> 标签）
    const dynamicBtn = document.createElement('button');

    // 步骤2：设置按钮的基础样式（相当于 CSS 的 .custom-btn）
    dynamicBtn.style.backgroundColor = '#409eff'; // 背景色
    dynamicBtn.style.color = '#fff'; // 文字色
    dynamicBtn.style.border = 'none'; // 无边框
    dynamicBtn.style.borderRadius = '4px'; // 圆角
    dynamicBtn.style.cursor = 'pointer'; // 鼠标指针
    dynamicBtn.style.width = '80px'; // 初始宽度
    dynamicBtn.style.height = '40px'; // 初始高度
    dynamicBtn.style.fontSize = '16px'; // 初始文字大小
    dynamicBtn.style.position = 'absolute'; // 绝对定位（方便后续调整位置）
    dynamicBtn.style.bottom = '235px'; // 初始位置：距离顶部 50px
    dynamicBtn.style.left = 'calc(50% + '+ wz + 'px)'; // 初始位置：距离左侧 50px

    // 步骤3：设置按钮的文字内容
    dynamicBtn.textContent = wb;

    // 步骤4：将按钮插入到页面中（比如插入到 <body> 里，也可插入到其他容器）
    document.body.appendChild(dynamicBtn);

    // 按键事件
    dynamicBtn.addEventListener('click', function() {
        if (wb == '出牌'){
            lis_spzt, num = PaiX(0)
            anv = PanDPX(lis_spzt, num);
            console.log(anv);
            console.log(cp_lx);
            // console.log(lis_spzt);
            // console.log(cp_jl[cp_jl.length - 1]);
            // console.log(cp_jl[cp_jl.length - 2]);
            if (anv[0] != -1){
                ZiT(1, 'None');
                if (PaiQ()){
                    ChuP(1);
                }else{
                    // console.log(cp_lx);
                    // console.log(anv);
                    if ((anv[0] != -1 && cp_lx[0] == anv[0] && cp_lx[1] == anv[1] && anv[2] > cp_lx[2]) || (anv[0] == 5) || (cp_lx[0] == 4 && anv[0] == 4 && anv[2] > cp_lx[2])){
                        ChuP(1);
                    }else{
                        if (anv[0] !=  cp_lx[0]) console.log('类型错误');
                        if (cp_lx[1] != anv[1]) console.log('长度错误');
                        if (cp_lx[2] >= anv[2]) console.log('大不起');
                        // console.log(cp_lx);
                        // console.log(anv);
                    }
                }
                PanDCP_ChuP(proxy.HuiH % 3 + 1);  // 人机自动出牌
                PanDCP_ChuP(proxy.HuiH % 3 + 1);
            }else{
                console.log('错误出牌');
            }
        }else if (wb == '不要'){
            YaoBQ(1)
            PanDCP_ChuP(proxy.HuiH % 3 + 1);  // 人机自动出牌
            PanDCP_ChuP(proxy.HuiH % 3 + 1);
        }else if (wb == '抢地主'){
            console.log(WanJ(wj));
            ZiT(1, '抢地主');
            for (let i = 0; i < 3; i++){
                append(WanJ(wj), DeZP[i]);
            }
            sc_Class('media1-box');
            sc_Class("text-element1");
            paim('media1-box', lis);
            proxy.dz = wj - 1;
            proxy.HuiH = proxy.dz;
        }else if(wb == '不抢'){
            let d2 = 0;
            let d3 = 0;
            let dz = -1;
            for (let i = 0; i < 17; i++){
                d2 += WanJ(2)[i][0];
                d3 += WanJ(3)[i][0];
            }
            if (d2 >= d3) dz = 2;
            else dz = 3;
            proxy.HuiH = dz - 1;
            console.log(WanJ(dz));
            ZiT(dz, '抢地主');
            for (let i = 0; i < 3; i++){
                append(WanJ(dz), DeZP[i]);
            }
            // sc_Class("text-element" + dz);
            // paim('media1-box', WanJ[dz]);


            const caracterp1 = document.createElement('div');
            caracterp1.className = 'text-element1';
            caracterp1.textContent = WanJ(1).length; // 添加文本内容
            document.querySelector('body').appendChild(caracterp1); // 关键：选择media1-box作为父容器

            const caracterp2 = document.createElement('div');
            caracterp2.className = 'text-element2';
            caracterp2.textContent = WanJ(2).length; // 添加文本内容
            document.querySelector('body').appendChild(caracterp2); // 关键：选择media1-box作为父容器

            const caracterp3 = document.createElement('div');
            caracterp3.className = 'text-element3';
            caracterp3.textContent = WanJ(3).length; // 添加文本内容
            document.querySelector('body').appendChild(caracterp3); // 关键：选择media1-box作为父容器


            proxy.dz = dz - 1;
            proxy.HuiH = proxy.dz;
            if (dz == 2){
                PanDCP_ChuP(proxy.HuiH % 3 + 1);
                PanDCP_ChuP(proxy.HuiH % 3 + 1);
            }else{
                PanDCP_ChuP(proxy.HuiH % 3 + 1);
            }
        }else if (wb == '下一个'){
            PanDCP_ChuP(proxy.HuiH % 3 + 1);
        }else if (wb == '自动出牌'){
            PanDCP_ChuP(1);
            PanDCP_ChuP(proxy.HuiH % 3 + 1);  // 人机自动出牌
            PanDCP_ChuP(proxy.HuiH % 3 + 1);
        }else if (wb == '再来一局'){
            location.reload(); 
        }
    });
}

function ChuP(id){  // 出牌
    cp_lx = anv;
    console.log(anv);
    append(cp_jl, 1);
    let lis_cp = [];  // 出的牌
    for (let i = lis.length - 1; i >= 0; i--){
        if (lis_zt[i] == 1){
            append(lis_cp, pop(lis, i));
        }
    }
    lis_zt = lis_mm(0, lis.length);

    if (id == 1){
        sc_Class('media1-box');
        paim('media1-box', lis);
    }

    sc_Class("media" + id + "-cp-box");
    sc_Class("text-element" + id);
    paim("media" + id + "-cp-box", lis_cp);
    proxy.HuiH++;
}


function ChuP_zd(id, lis_zz){  // 出牌
    console.log(cp_lx);
    cp_lx = anv;
    append(cp_jl, 1);
    let lis_cp = [];  // 出的牌
    lis_zz = lis_zz.sort((a, b) => b - a);
    for (let i = 0; i < lis_zz.length; i++) append(lis_cp, pop(WanJ(id), lis_zz[i]));
    if (id == 1){
        lis_zt = lis_mm(0, WanJ(id).length);
        sc_Class('media1-box');
        paim('media1-box', WanJ(id));
    }
    sc_Class("media" + id + "-cp-box");
    sc_Class("text-element" + id);
    paim("media" + id + "-cp-box", lis_cp);
    proxy.HuiH++;
}


function YaoBQ(id){  // 出牌
    console.log(id + ' ' + '要不起');
    append(cp_jl, 0);
    proxy.HuiH++;

    sc_Class("media" + id + "-cp-box");
    paim("media" + id + "-cp-box", []);
    ZiT(id, '要不起')
}


function ZiT(id, text){  // 显示文字
    const titleElement = document.querySelector('.text-label' + id);
    if (titleElement){
        titleElement.remove();
    }
    if (text != 'None'){
        const titleElement = document.createElement('div');
        titleElement.className = 'text-label' + id;
        titleElement.textContent = text;
        document.body.appendChild(titleElement);
    }
}



function PaiQ(){  // 是否有牌权
    return cp_jl[cp_jl.length - 1] == 0 && cp_jl[cp_jl.length - 2] == 0
}


function AnJ_PaiB(lis_aj){  // 按键排布    [1，2，3]
    // 删除之前的按钮
    document.querySelectorAll('button').forEach(element => {
        element.remove();
    });

    // 排布
    let lis_wz = manm(0, lis_aj);
    le = lis_aj.length;
    if (le % 2){
        for (let i = 0; i <= Math.floor(lis_aj.length / 2); i++){
            // console.log(i);
            if (i != Math.floor(lis_aj.length / 2)){
                lis_wz[i] = [lis_aj[i], - (Math.floor(le / 2) - i) * 120];
                lis_wz[le - i - 1] = [lis_aj[le - i - 1], (Math.floor(le / 2) - i) * 120];
                // console.log(lis_wz[le - i - 1]);
            } else{
                lis_wz[i] = [lis_aj[i], 0];
            }
            
        }
    }
    else{
        let jj = 60  // 间距
        for (let i = 0; i < Math.floor(lis_aj.length / 2); i++){
            if (i != Math.floor(lis_aj.length / 2)){
                lis_wz[i] = [lis_aj[i], - ((Math.floor(le / 2) - i) * 120 - jj)];
                lis_wz[le - i - 1] = [lis_aj[le - i - 1], ((Math.floor(le / 2) - i) * 120 - jj)];
            }
        }
    }

    // 显示按键
    // console.log(lis_wz);
    for (let i = 0; i < le; i++){
        AnJ(lis_wz[i][0], lis_wz[i][1]);
        // console.log(lis_wz[i]);
    }
}


function PanDPX(lis_aj, num){  // 判断出牌的牌型
    // 单 顺子 对 连对 三 三带一 三带对 无翅飞机 有翅飞机单 有翅飞机对 四 四带单 四带对 王炸
    // 类型，长度，大小(最小的那个)
    
    // 1.单
    if (num == 1){
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 1) return [1, 1, i];
        }
    }

    // 2.对
    if (num == 2){
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 2) return [2, 1, i];
        }
    }

    // 3.三个
    if (num == 3){
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 3) return [3, 1, i];
        }
    }

    // 4.四
    if (num == 4){
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 4) return [4, 1, i];
        }
    }

    // 5.王炸
    if (num == 2 && lis_aj[13] == 1 && lis_aj[14] == 1) return [5, 1, 13];

    // 6.三带一
    if (num == 4){
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 3) return [6, 1, i];
        }
    }

    // 7.三带对
    if (num == 5){
        let qqg = 0;
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 2) qqg = 1;
        }

        if (qqg == 1){
            for (let i = 0; i < 15; i++){
                if (lis_aj[i].length == 3) return [7, 1, i];
            }
        }
    }

    // 8.四代单
    if (num == 6){
        let qqg = 0;
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 1) qqg++;
        }

        if (qqg == 2){
            for (let i = 0; i < 15; i++){
                if (lis_aj[i].length == 4) return [8, 1, i];
            }
        }
    }

    // 9.四带对
    if (num == 8){
        let qqg = 0;
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 2) qqg++;
        }

        if (qqg == 2){
            for (let i = 0; i < 15; i++){
                if (lis_aj[i].length == 4) return [9, 1, i];
            }
        }
    }

    // 10.顺子
    if (num >= 5){
        let qqg = 0;
        let dx = -1;
        let qqd = 1;
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 1 && i >= 12){
                qqd = 0;
            }
            if (lis_aj[i].length == 1){
                if (dx == -1){
                    dx = i;
                    qqg++;
                }else{
                    qqg++;
                }
            }else if (lis_aj[i].length == 0 && dx != -1 && qqg != num) qqd = 0;
            else if (lis_aj[i].length != 0) qqd = 0;
        }
        if (qqd == 1){
            if(dx != -1 && qqg == num){
            return [10, qqg, dx];
            }
        }
    }

    // 11.连对
    if (num >= 6 & num % 2 == 0){
        let qqg = 0;
        let dx = -1;
        let qqd = 1;
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 2 && i >= 12){
                qqd = 0;
            }
            if (lis_aj[i].length == 2){
                if (dx == -1){
                    dx = i;
                    qqg++;
                }else{
                    qqg++;
                }
            }else if (lis_aj[i].length == 0 && dx != -1 && qqg != num / 2) qqd = 0;
            else if (lis_aj[i].length != 0) qqd = 0;
        }
        if (qqd = 1) if(dx != -1 && qqg == num / 2) return [11, qqg, dx];
    }

    // 12.无翅飞机
    if (num >= 6 & num % 3 == 0){
        let qqg = 0;
        let dx = -1;
        let qqd = 1;
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 3 && i >= 12){
                qqd = 0;
            }
            if (lis_aj[i].length == 3){
                if (dx == -1){
                    dx = i;
                    qqg++;
                }else{
                    qqg++;
                }
            }else if (lis_aj[i].length == 0 && dx != -1 && qqg != num / 3) qqd = 0;
            else if (lis_aj[i].length != 0) qqd = 0;
        }
        if (qqd = 1) if(dx != -1 && qqg == num / 3) return [12, qqg, dx];
    }
    // 13.有翅飞机单
    if (num >= 8){
        let qqdd = 0;
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 1) qqdd++;
        }

        if (qqdd == 2){
            let qqg = 0;
            let dx = -1;
            let qqd = 1;
            for (let i = 0; i < 15; i++){
                if (lis_aj[i].length == 3 && i >= 12){
                    qqd = 0;
                }
                if (lis_aj[i].length == 3){
                    if (dx == -1){
                        dx = i;
                        qqg++;
                    }else{
                        qqg++;
                    }
                }else if (lis_aj[i].length == 0 && dx != -1 && qqg != num / 4) qqd = 0;
                else if (lis_aj[i].length != 0 || lis_aj[i].length != 1) qqd = 0;
            }
            if (qqd = 1) if(dx != -1 && qqg == num / 4) return [13, qqg, dx];
        }
    }
    
    // 14.有翅飞机对
    if (num >= 10){
        let qqdd = 0;
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 2) qqdd++;
        }

        if (qqdd == 2){
            let qqg = 0;
            let dx = -1;
            let qqd = 1;
            for (let i = 0; i < 15; i++){
                if (lis_aj[i].length == 3 && i >= 12){
                    qqd = 0;
                }
                if (lis_aj[i].length == 3){
                    if (dx == -1){
                        dx = i;
                        qqg++;
                    }else{
                        qqg++;
                    }
                }else if (lis_aj[i].length == 0 && dx != -1 && qqg != num / 5) qqd = 0;
                else if (lis_aj[i].length != 0 || lis_aj[i].length != 2) qqd = 0;
            }
            if (qqd = 1) if(dx != -1 && qqg == num / 5) return [14, qqg, dx];
        }
    }
    return [-1, -1, -1]
}

function PanDCP_ChuP(id){
    if (over == 1) return;
    ZiT(id, 'None')
    // 单 顺子 对 连对 三 三带一 三带对 无翅飞机 有翅飞机单 有翅飞机对 四 四带单 四带对 王炸
    // 有翅飞机单 有翅飞机对 无翅飞机 连对 顺子 三带一 三带对 三 对 单 四 王炸    出牌顺序
    lis_aj = PaiX(id);
    if (PaiQ()){
        // 1.有翅飞机单
        var qqdd = 0;
        var lis_dd = [];
        lis_zz = [];
        lis_ls = [];
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 1){
                append(lis_dd, lis_aj[i][0]);
                }
            }
        if (lis_dd.length >= 2){
            var qqg = 0;
            var dx = -1;
            for (let i = 0;i < 15; i++){
                if (lis_aj[i].length == 3){
                    if (dx == -1){
                        lis_ls = [lis_aj[i]];  // 临时记录
                        dx = i;
                        qqg++;
                    }else{
                        qqg++;
                        append(lis_ls, lis_aj[i]);
                    }
                }else if (qqg < 2 || lis_dd.length < 2){
                    qqg = 0;
                    dx = -1;
                    lis_ls = [];
                    lis_zz = [];
                }
                else{
                    if (qqg <= lis_dd.length){
                        var mi = qqg;
                    }else{
                        var mi = lis_dd.length;
                    }
                    if (mi > 1){
                        for (let i = 0; i < mi; i++){
                            append(lis_zz, lis_dd[i]);
                            for (let j = 0; j < 3; j++){
                                append(lis_zz, lis_ls[i][j]);
                            }
                        }
                        anv = [13, mi, dx];
                        ChuP_zd(id, lis_zz);
                        return 1;
                    }
                }
            }
        }

        // 2.有翅飞机对
        var qqdd = 0;
        var lis_dd = [];
        lis_zz = [];
        lis_ls = [];
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 2){
                append(lis_dd, lis_aj[i]);
                }
            }
        if (lis_dd.length >= 2){
            var qqg = 0;
            var dx = -1;
            for (let i = 0;i < 13; i++){
                if (lis_aj[i].length == 3){
                    if (dx == -1){
                        lis_ls = [lis_aj[i][0], lis_aj[i][1], lis_aj[i][2]];  // 临时记录
                        dx = i;
                        qqg++;
                    }else{
                        qqg++;
                        append(lis_ls, lis_aj[i]);
                        // if (qqg == cp_lx[1]){
                        //     for (let i; i < lis_dd.length; i++){
                        //         append(lis_ls, lis_dd[i]);
                        //     }
                        //     return [13, cp_lx[1], dx];
                        // }
                    }
                }else if (qqg < 2 || lis_dd.length < 2){
                    qqg = 0;
                    dx = -1;
                    lis_ls = [];
                    lis_zz = [];
                }
                else{
                    if (qqg <= lis_dd.length){
                        var mi = qqg;
                    }else{
                        var mi = lis_dd.length;
                    }
                    for (let i = 0; i < mi; i++){
                        for (let j = 0; j < 2; j++){
                            append(lis_zz, lis_dd[i][j]);
                        }
                        for (let j = 0; j < 3; j++){
                            append(lis_zz, lis_ls[i][j]);
                        }
                    }
                    anv = [14, mi, dx];
                    ChuP_zd(id, lis_zz);
                    return 1;
                }
            }
        }

       // 3.无翅飞机
        var qqdd = 0;

        var qqg = 0;
        var dx = -1;
        lis_ls = [];
        lis_zz = [];
        for (let i = 0;i < 15; i++){
            if (lis_aj[i].length == 3){
                if (dx == -1){
                    lis_ls = [lis_aj[i]];  // 临时记录
                    dx = i;
                    qqg++;
                }else{
                    qqg++;
                    append(lis_ls, lis_aj[i]);
                    // if (qqg == cp_lx[1]){
                    //     for (let i; i < lis_dd.length; i++){
                    //         append(lis_ls, lis_dd[i]);
                    //     }
                    //     return [13, cp_lx[1], dx];
                    // }
                }
            }else if (qqg < 2 || lis_dd.length < 2){
                qqg = 0;
                dx = -1;
                lis_ls = [];
                lis_zz = [];
            }
            else{
                var mi = qqg;
                for (let i = 0; i < mi; i++){
                    for (let j = 0; j < 3; j++){
                        append(lis_zz, lis_ls[i][j]);
                    }
                }
                anv = [12, mi, dx];
                ChuP_zd(id, lis_zz);
                return 1;
            }
        }
    
        // 4.连对
        var qqg = 0;
        var dx = -1;
        lis_zz = [];
        lis_ls = [];
        for (let i = 0; i < 13; i++){
            if (lis_aj[i].length >= 2 && i != 12){
                if (dx == -1){
                    lis_ls = [lis_aj[i]];
                    dx = i;
                    qqg++;
                }else{
                    qqg++;
                    append(lis_ls, lis_aj[i]);
                }
            }else if (qqg < 3){
                qqg = 0;
                dx = -1;
                lis_ls = [];
            }
            else{
                var mi = qqg;
                for (let i = 0; i < mi; i++){
                    for (let j = 0; j < 2; j++){
                        append(lis_zz, lis_ls[i][j]);
                    }
                }
                anv = [11, mi, dx];
                ChuP_zd(id, lis_zz);
                return 1;
            }
        }

        // 5.顺子
        var qqg = 0;
        var dx = -1;
        lis_zz = [];
        lis_ls = [];
        for (let i = 0; i < 13; i++){
            if (lis_aj[i].length >= 1 && i != 12){
                if (dx == -1){
                    dx = i;
                    qqg++;
                    lis_ls = [lis_aj[i]];
                }else{
                    qqg++;
                    append(lis_ls, lis_aj[i]);
                }
            }else if (qqg < 5){
                qqg = 0;
                dx = -1;
                lis_ls = [];
            }
            else{
                var mi = qqg;
                for (let i = 0; i < mi; i++){
                    for (let j = 0; j < 1; j++){
                        append(lis_zz, lis_ls[i][j]);
                    }
                }
                anv = [10, mi, dx];
                ChuP_zd(id, lis_zz);
                return 1;
            }
        }


        // 6.三带一
        var qqdd = 0;
        var lis_dd = [];
        lis_zz = [];
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 1){
                append(lis_dd, lis_aj[i][0]);
                break;
                }
            }
        if (lis_dd.length >= 1){
            var qqg = 0;
            var dx = -1;
            var lis_zz = [];  // 最终出牌
            for (let i = 0;i < 15; i++){
                if (lis_aj[i].length == 3){
                    lis_ls = [lis_aj[i]];  // 临时记录
                    dx = i;
                    qqg++;
                    var mi = 1;
                    append(lis_zz, lis_dd[0]);
                    append(lis_zz, lis_ls[0][0]);
                    append(lis_zz, lis_ls[0][1]);
                    append(lis_zz, lis_ls[0][2]);
                    anv = [6, mi, dx];
                    ChuP_zd(id, lis_zz);
                    return 1;
                }
            }
        }


        // 7.三带对
        var qqdd = 0;
        var lis_dd = [];
        lis_zz = [];
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 2){
                append(lis_dd, [lis_aj[i][0], lis_aj[i][1]]);
                break;
                }
            }

        var qqg = 0;
        var dx = -1;
        lis_ls = [];
        for (let i = 0;i < 15; i++){
            if (lis_aj[i].length == 3){
                lis_ls = [lis_aj[i]];  // 临时记录
                dx = i;
                qqg++;
                var mi = 1;
                append(lis_zz, lis_dd[0][0]);
                append(lis_zz, lis_dd[0][1]);
                append(lis_zz, lis_ls[0][0]);
                append(lis_zz, lis_ls[0][1]);
                append(lis_zz, lis_ls[0][2]);
                anv = [7, mi, dx];
                ChuP_zd(id, lis_zz);
                return 1;
            }
        }

       // 8.三个
        var lis_dd = [];
        var qqg = 0;
        var dx = -1;
        lis_zz = [];
        lis_ls = [];
        for (let i = 0;i < 15; i++){
            if (lis_aj[i].length == 3){
                lis_ls = [lis_aj[i]];  // 临时记录
                dx = i;
                qqg++;
                var mi = 1;
                append(lis_zz, lis_ls[0][0]);
                append(lis_zz, lis_ls[0][1]);
                append(lis_zz, lis_ls[0][2]);
                anv = [3, mi, dx];
                ChuP_zd(id, lis_zz);
                return 1;
            }
        }


        // 9.对
        lis_zz = []
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 2){
                append(lis_zz, lis_aj[i][0]);
                append(lis_zz, lis_aj[i][1]);
                anv = [2, 1, i];
                ChuP_zd(id, lis_zz);
                return 1;
            }
        }


        // 10.单
        lis_zz = []
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 1){
                append(lis_zz, lis_aj[i][0]);
                anv = [1, 1, i];
                ChuP_zd(id, lis_zz);
                return 1;
            }

        }


        // 11.四
        lis_zz = []
        for (let i = 0; i < 15; i++){
            if (lis_aj[i].length == 4){
                append(lis_zz, lis_aj[i][0]);
                append(lis_zz, lis_aj[i][1]);
                append(lis_zz, lis_aj[i][2]);
                append(lis_zz, lis_aj[i][3]);
                anv = [4, 1, i];
                ChuP_zd(id, lis_zz);
                return 1;
            }
        }

        // 12.王炸
        lis_zz = []
        if (lis_aj[13].length == 1 && lis_aj[14].length == 1){
            append(lis_zz, lis_aj[13][0]);
            append(lis_zz, lis_aj[14][0]);
            anv = [5, 1, i];
            ChuP_zd(id, lis_zz);
            return 1;
        }
        YaoBQ(id)
    }else{
        // 1.有翅飞机单
        if (cp_lx[0] == 13){
            var qqdd = 0;
            var lis_dd = [];
            lis_zz = [];
            lis_ls = [];
            for (let i = cp_lx[2] + 1; i < 15; i++){
                if (lis_aj[i].length == 1){
                    append(lis_dd, lis_aj[i][0]);
                    }
                }
            if (lis_dd.length >= 2){
                var qqg = 0;
                var dx = -1;
                for (let i = 0;i < 15; i++){
                    if (lis_aj[i].length == 3){
                        if (dx == -1){
                            lis_ls = [lis_aj[i]];  // 临时记录
                            dx = i;
                            qqg++;
                        }else{
                            qqg++;
                            append(lis_ls, lis_aj[i]);
                        }
                    }else if (qqg < cp_lx[1] || lis_dd.length < cp_lx[1]){
                        qqg = 0;
                        dx = -1;
                    }
                    else{
                        var mi = cp_lx[1]
                        if (mi > 1){
                            for (let i = 0; i < mi; i++){
                                append(lis_zz, lis_dd[i]);
                                for (let j = 0; j < 3; j++){
                                    append(lis_zz, lis_ls[i][j]);
                                }
                            }
                            anv = [13, mi, dx];
                            ChuP_zd(id, lis_zz);
                            return 1;
                        }
                    }
                }
            }
        }


        // 2.有翅飞机对
        if (cp_lx[0] == 14){
            var qqdd = 0;
            var lis_dd = [];
            lis_zz = [];
            lis_ls = [];
            for (let i = 0; i < 15; i++){
                if (lis_aj[i].length == 2){
                    append(lis_dd, lis_aj[i]);
                    }
                }
            if (lis_dd.length >= 2){
                var qqg = 0;
                var dx = -1;
                for (let i = cp_lx[2] + 1;i < 15; i++){
                    if (lis_aj[i].length == 3){
                        if (dx == -1){
                            lis_ls = [lis_aj[i][0], lis_aj[i][1], lis_aj[i][2]];  // 临时记录
                            dx = i;
                            qqg++;
                        }else{
                            qqg++;
                            append(lis_ls, lis_aj[i]);
                            // if (qqg == cp_lx[1]){
                            //     for (let i; i < lis_dd.length; i++){
                            //         append(lis_ls, lis_dd[i]);
                            //     }
                            //     return [13, cp_lx[1], dx];
                            // }
                        }
                    }else if (qqg < cp_lx[1] || lis_dd.length < cp_lx[1]){
                        qqg = 0;
                        dx = -1;
                    }
                    else{
                        var mi = cp_lx[1]
                        for (let i = 0; i < mi; i++){
                            for (let j = 0; j < 2; j++){
                                append(lis_zz, lis_dd[i][j]);
                            }
                            for (let j = 0; j < 3; j++){
                                append(lis_zz, lis_ls[i][j]);
                            }
                        }
                        anv = [14, mi, dx];
                        ChuP_zd(id, lis_zz);
                        return 1;
                    }
                }
            }
        }

        // 3.无翅飞机
        if (cp_lx[0] == 12){
            var qqdd = 0;

            var qqg = 0;
            var dx = -1;
            lis_ls = [];
            lis_zz = [];
            for (let i = cp_lx[2] + 1;i < 15; i++){
                if (lis_aj[i].length == 3){
                    if (dx == -1){
                        lis_ls = [lis_aj[i]];  // 临时记录
                        dx = i;
                        qqg++;
                    }else{
                        qqg++;
                        append(lis_ls, lis_aj[i]);
                        // if (qqg == cp_lx[1]){
                        //     for (let i; i < lis_dd.length; i++){
                        //         append(lis_ls, lis_dd[i]);
                        //     }
                        //     return [13, cp_lx[1], dx];
                        // }
                    }
                }else if (qqg < cp_lx[1] || lis_dd.length < cp_lx[1]){
                    qqg = 0;
                    dx = -1;
                }
                else{
                    var mi = cp_lx[1]
                    for (let i = 0; i < mi; i++){
                        for (let j = 0; j < 3; j++){
                            append(lis_zz, lis_ls[i][j]);
                        }
                    }
                    anv = [12, mi, dx];
                    ChuP_zd(id, lis_zz);
                    return 1;
                }
            }
        }

        // 4.连对
        if (cp_lx[0] == 11){
            var qqg = 0;
            var dx = -1;
            lis_zz = [];
            lis_ls = [];
            for (let i = cp_lx[2] + 1; i < 13; i++){
                if (lis_aj[i].length >= 2 && i != 12){
                    if (dx == -1){
                        lis_ls = [lis_aj[i]];
                        dx = i;
                        qqg++;
                    }else{
                        qqg++;
                        append(lis_ls, lis_aj[i]);
                    }
                }else if (qqg < cp_lx[1] || lis_ls.length < cp_lx[1]){
                    qqg = 0;
                    dx = -1;
                    lis_ls = [];
                }
                else{
                    var mi = cp_lx[1]
                    for (let i = 0; i < mi; i++){
                        for (let j = 0; j < 2; j++){
                            append(lis_zz, lis_ls[i][j]);
                        }
                    }
                    anv = [11, mi, dx];
                    ChuP_zd(id, lis_zz);
                    return 1;
                }
            }
        }

        // 5.顺子
        if (cp_lx[0] == 10){
            var qqg = 0;
            var dx = -1;
            lis_zz = [];
            lis_ls = [];
            for (let i = cp_lx[2] + 1; i < 13; i++){
                if (lis_aj[i].length >= 1 && i != 12){
                    if (dx == -1){
                        dx = i;
                        qqg++;
                        lis_ls = [lis_aj[i]];
                    }else{
                        qqg++;
                        append(lis_ls, lis_aj[i]);
                    }
                }else if (qqg < cp_lx[1] || lis_ls.length < cp_lx[1]){
                    qqg = 0;
                    dx = -1;
                    lis_ls = [];
                }
                else{
                    var mi = cp_lx[1]
                    for (let i = 0; i < mi; i++){
                        for (let j = 0; j < 1; j++){
                            append(lis_zz, lis_ls[i][j]);
                        }
                    }
                    anv = [10, mi, dx];
                    ChuP_zd(id, lis_zz);
                    return 1;
                }
            }
        }


        // 6.三带一
        if (cp_lx[0] == 6){
            var qqdd = 0;
            var lis_dd = [];
            lis_zz = [];
            for (let i = 0; i < 15; i++){
                if (lis_aj[i].length == 1){
                    append(lis_dd, lis_aj[i][0]);
                    break;
                    }
                }
                
            if (lis_dd.length >= 1){
                var qqg = 0;
                var dx = -1;
                var lis_zz = [];  // 最终出牌
                for (let i = cp_lx[2] + 1;i < 15; i++){
                    if (lis_aj[i].length == 3){
                        lis_ls = [lis_aj[i]];  // 临时记录
                        dx = i;
                        qqg++;
                        append(lis_zz, lis_dd[0]);
                        append(lis_zz, lis_ls[0][0]);
                        append(lis_zz, lis_ls[0][1]);
                        append(lis_zz, lis_ls[0][2]);
                        anv = [6, 1, dx];
                        ChuP_zd(id, lis_zz);
                        return 1;
                    }
                }
            }
        }


        // 7.三带对
        if (cp_lx[0] == 7){
            var qqdd = 0;
            var lis_dd = [];
            lis_zz = [];
            for (let i = 0; i < 15; i++){
                if (lis_aj[i].length == 2){
                    append(lis_dd, [lis_aj[i][0], lis_aj[i][1]]);
                    break;
                    }
                }

            var qqg = 0;
            var dx = -1;
            lis_ls = [];
            if (lis_dd.length >= 2){
                for (let i = cp_lx[2] + 1;i < 15; i++){
                    if (lis_aj[i].length == 3){
                        lis_ls = [lis_aj[i]];  // 临时记录
                        dx = i;
                        qqg++;
                        append(lis_zz, lis_dd[0][0]);
                        append(lis_zz, lis_dd[0][1]);
                        append(lis_zz, lis_ls[0][0]);
                        append(lis_zz, lis_ls[0][1]);
                        append(lis_zz, lis_ls[0][2]);
                        anv = [7, 1, dx];
                        ChuP_zd(id, lis_zz);
                        return 1;
                    }
                }
            }
        }

        // 8.三个
        if (cp_lx[0] == 3){
            var lis_dd = [];
            var qqg = 0;
            var dx = -1;
            lis_zz = [];
            lis_ls = [];
            for (let i = cp_lx[2] + 1;i < 15; i++){
                if (lis_aj[i].length == 3){
                    lis_ls = [lis_aj[i]];  // 临时记录
                    dx = i;
                    qqg++;
                    append(lis_zz, lis_ls[0][0]);
                    append(lis_zz, lis_ls[0][1]);
                    append(lis_zz, lis_ls[0][2]);
                    anv = [3, 1, dx];
                    ChuP_zd(id, lis_zz);
                    return 1;
                }
            }
        }


        // 9.对
        if (cp_lx[0] == 2){
            lis_zz = []
            for (let i = cp_lx[2] + 1; i < 15; i++){
                if (lis_aj[i].length == 2){
                    append(lis_zz, lis_aj[i][0]);
                    append(lis_zz, lis_aj[i][1]);
                    anv = [2, 1, i];
                    ChuP_zd(id, lis_zz);
                    return 1;
                }
            }
        }


        // 10.单
        if (cp_lx[0] == 1){
            lis_zz = []
            for (let i = cp_lx[2] + 1; i < 15; i++){
                if (lis_aj[i].length == 1){
                    append(lis_zz, lis_aj[i][0]);
                    anv = [1, 1, i];
                    ChuP_zd(id, lis_zz);
                    return 1;
                }

            }
        }


        // 11.四
        lis_zz = []
        if (cp_lx[0] == 4 && cp_lx[0] != 5){
            for (let i = cp_lx[2] + 1; i < 15; i++){
                if (lis_aj[i].length == 4){
                    append(lis_zz, lis_aj[i][0]);
                    append(lis_zz, lis_aj[i][1]);
                    append(lis_zz, lis_aj[i][2]);
                    append(lis_zz, lis_aj[i][3]);
                    anv = [4, 1, i];
                    ChuP_zd(id, lis_zz);
                    return 1;
                }
            }
        }else if (cp_lx[0] == 4 && cp_lx[0] != 5){
            for (let i = 0; i < 15; i++){
                if (lis_aj[i].length == 4){
                    append(lis_zz, lis_aj[i][0]);
                    append(lis_zz, lis_aj[i][1]);
                    append(lis_zz, lis_aj[i][2]);
                    append(lis_zz, lis_aj[i][3]);
                    anv = [4, 1, i];
                    ChuP_zd(id, lis_zz);
                    return 1;
                }
            }
        }
        

        // 12.王炸
        lis_zz = []
        if (lis_aj[13].length == 1 && lis_aj[14].length == 1){
            append(lis_zz, lis_aj[13][0]);
            append(lis_zz, lis_aj[14][0]);
            anv = [5, 1, 13];
            ChuP_zd(id, lis_zz);
            return 1;
        }
        YaoBQ(id)
    }
}

function PaiX(id){  // 显示牌型   id = 0时为选牌出
    lis_spzt = lis_lmm(15);  // 手牌状态（是否选中
    num = 0;
    if (id == 0){
        for (let i = 0; i < lis.length; i++){
            if (lis_zt[i] == 1){
                append(lis_spzt[lis[i][0]], i);
                num ++;
            }
        }
        return lis_spzt, num;
    }else{
        // console.log(WanJ(id))
        // console.log(id)
        for (let i = 0; i < WanJ(id).length; i++) append(lis_spzt[WanJ(id)[i][0]], i);
    }
    return lis_spzt;
}

function sc_Class(className) {  // 按class删除
    document.querySelectorAll(`.${className}`).forEach(element => {
        element.remove();
    });
}

function FaP(){   // 发牌
    lis_PD = []  // 牌堆
    for (let i = 0; i < 13; i++){
        for (let j = 0; j < 4; j++){
            append(lis_PD, [i, j]);
        }
    }
    append(lis_PD, [13, 0]);
    append(lis_PD, [14, 0]);
    lis_PD = shuffleArray(lis_PD);
    // console.log(lis_PD)
    let lls_z = []  // 地主牌堆 
    let lls1 = []  // 玩家1
    let lls2 = []
    let lls3 = []
    for (let i = 0; i < 18; i++){
        if (i == 0){
            lls_z = [lis_PD[0], lis_PD[1], lis_PD[2]]
        }else{
            append(lls1, lis_PD[i * 3])
            append(lls2, lis_PD[i * 3 + 1])
            append(lls3, lis_PD[i * 3 + 2])
        }
    }
    // console.log(lls_z)
    // console.log(lls1)
    // console.log(lls2)
    // console.log(lls3)
    return [lls_z, lls1, lls2, lls3]
}


function shuffleArray(arr) {  // 打乱列表
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]]; // 交换元素
  }
  return result;
}


function ZunBJD(){  // 准备阶段
    paim('media1-box', b);
    dizp(a);

    // 抢地主
    AnJ_PaiB(['抢地主', '不抢']);
}

function ChuPJD(){  // 出牌阶段
    if (kind == 0)
        if (over == 0){
            if ((3 - (proxy.HuiH % 3)) % 3 == 0){
                if (PaiQ()){
                    AnJ_PaiB(['出牌', '自动出牌']);
                }else{
                    AnJ_PaiB(['出牌', '自动出牌', '不要']);
                }
            }else{
                console.log(66666 + '   ' + proxy.HuiH)
                AnJ_PaiB(['下一个']);
            }
        }else{
            AnJ_PaiB(['再来一局']);
        }
}


function WanJ(num){  // 玩家
    if (num == 1){
        return lis;
    }else if (num == 2) return lis2;
    else if (num == 3) return lis3;
}

function LiuC(){  // 流程
    if (kind == 0){
        ZunBJD();  // 抢地主
    }
}


const user = {dz: -1, HuiH: 0};

var proxy = new Proxy(user, {  // 监听变量
  get(target, prop) {
    // console.log(`读取 ${prop}`);
    return target[prop];
  },
  set(target, prop, value) {
    // console.log(`设置 ${prop} = ${value}`);
    target[prop] = value;
    if (prop == 'dz' || prop == 'HuiH'){
        ChuPJD();
    }
    return true; // 表示设置成功
  }
});








css_11 = '.media1-box .media11-box';
css_cp1 = '.media1-cp-box .media11-box';
css_cp2 = '.media2-cp-box .media11-box';
css_cp3 = '.media3-cp-box .media11-box';
cp1 = 'media1-cp-box';
cp2 = 'media2-cp-box';
cp3 = 'media3-cp-box';
var lis = [];
var lis_zt = manm(0, lis);  // 手牌状态（是否选中
const cardClickHandlers = new Map();
var cp_jl = [0, 0]  // 最后面两个人没出牌则当前人有牌权 0 不出 1 出
var cp_lx = [-1, -1, -1]  // 最后出牌人的出牌类型
var lis_ls = []  // 自动选牌
var lis_zz = []  // 自动选好的牌
var lis_spzt = []  // 手牌状态（每种大小的牌有几张）
var anv = []  // 出牌类型大小长度
var over = 0;  // 游戏是否结束
var kind = 0  // 0 打人机， 1 联网


let lgg = FaP();
let a = lgg[0];
let b = lgg[1];
let c = lgg[2];
let d = lgg[3];
var DeZP = a;  // 地主牌
var lis = b;
var lis2 = c;
var lis3 = d;

LiuC()  // 流程