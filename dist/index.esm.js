function t(t){if(null==t)return"0";t=t.toString();const[e,r]=t.split("."),s=e.startsWith("-");let n=(s?e.substring(1):e).split("").reverse().join(""),i=[];for(let t=0;t<n.length;t+=3)i.push(n.substring(t,t+3));let l=i.map((t=>t.split("").reverse().join(""))).reverse().join(".");return s&&(l="-"+l),r&&(l+=","+r),l}export{t as formatNumber};
//# sourceMappingURL=index.esm.js.map
