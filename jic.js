// python化js



function append(lis, a){
   lis.push(a);
   return lis;
}

function pop(lis, num) {
   return lis.splice(num, 1)[0];
}

function lis_mm(x, y){  // 用y个x填满列表
   let lis = []
   for (let i = 0; i < y; i++){
      lis.push(x);
   }
   return lis
}

function lis_lmm(y){  // 用y个x填满列表
   let lis = []
   for (let i = 0; i < y; i++){
      lis.push([]);
   }
   return lis
}