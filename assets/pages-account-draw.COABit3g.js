import{b as e,c as a,n as t,A as l}from"./index.DRE4Ui8P.js";import{d as s,W as r,r as n,Q as o,h as c,j as d,k as p,l as x,q as i,J as f,t as u,v as m,n as b,p as _,F as g,S as h,T as w,A as y,_ as v,L as F,C as k}from"./index-Cq9VOZ8T.js";import{L as z}from"./lucky-wheel.BWx-3B6G.js";import{u as j}from"./paginate.DgF5CfMz.js";import{i as C}from"./index.DMLUgklw.js";import{u as L}from"./account.G0aekY3X.js";const O=k(s({__name:"draw",setup(s){const k=r(),O=n(!1),S=n(),A=n({blocks:[{padding:"28rpx",imgs:[{src:"/static/earn/wheel.png",width:"100%",height:"100%"}]}],prizes:[],buttons:[{radius:"25%",imgs:[{src:"/static/earn/luckey_btn.png",width:"100%",top:"-130%"}]}]}),I=n([]),T=n([]),{paginate:D,resetPaginate:E}=j(q,P);function q(){h(),D(((e,t)=>a.openingLogs({page:e,limit:t}))).then((e=>{T.value.push(...e||[])})).finally(w)}function P(){T.value=[],E(),q()}const R=n({chest:0,diamond:0,gold:0});function G(){S.value.play(),a.openingOpen().then((e=>{const{prize:a,assets:t}=e,l=I.value.findIndex((e=>e.id===(null==a?void 0:a.id)));setTimeout((()=>{(null==t?void 0:t.game)&&t.game.length&&(null==t||t.game.forEach((e=>{e.symbol in R.value&&(R.value[e.symbol]=e.balance)}))),P()}),2e3),~l?S.value.stop(l):(S.value.stop(0),k.error("Prize matching error"))}))}return function(){const{getUserAssets:e}=L();e([l.GOLD,l.DIAMOND,l.CHEST]).then((e=>{var a;for(const t in e)R.value[t]=null==(a=e[t])?void 0:a.balance}))}(),O.value=!1,a.getOpeningItems().then((e=>{const a=e||[],l=[];a.forEach(((e,a)=>{l.push({background:a%2==0?"#867dff":"#6423e7",fonts:[{text:t(e.amount).format("0a"),top:"10%",fontSize:"30rpx",fontColor:"#FFF"},{text:e.name,top:"30%",fontSize:"24rpx",fontColor:"#FFF"}],imgs:[{src:C(e.icon),width:"45rpx",height:"45rpx",top:"50%"}]})})),I.value=a,A.value.prizes=l})).finally((()=>{O.value=!0})),P(),(a,t)=>{const l=y,s=v,r=F,n=o("layout-default-uni");return c(),d(n,null,{default:p((()=>[x(l,{class:"pb-30rpx"},{default:p((()=>[x(l,{class:"flex-center flex-col px pb-24rpx pt-40rpx"},{default:p((()=>[i(O)?(c(),d(l,{key:0},{default:p((()=>[x(i(z),{ref_key:"myLucky",ref:S,width:"576rpx",height:"576rpx",blocks:i(A).blocks,prizes:i(A).prizes,buttons:i(A).buttons,onStart:G},null,8,["blocks","prizes","buttons"])])),_:1})):f("",!0),x(l,{class:"mt-36rpx w-full flex-y-center flex-wrap"},{default:p((()=>[x(l,{class:"mb-16rpx mr-8rpx box-border flex-x-between flex-1 rounded-5 bg-cell px-16rpx py-12rpx"},{default:p((()=>[x(s,{name:"/static/icons/chest.png",size:"36rpx"}),x(r,{class:"text-md color-white"},{default:p((()=>[u(m(("balanceFormat"in a?a.balanceFormat:i(e))(i(R).chest)),1)])),_:1})])),_:1}),x(l,{class:"mb-16rpx mr-8rpx box-border flex-x-between flex-1 rounded-5 bg-cell px-16rpx py-12rpx"},{default:p((()=>[x(s,{name:"/static/icons/diamond.png",size:"36rpx"}),x(r,{class:"text-md color-white"},{default:p((()=>[u(m(("balanceFormat"in a?a.balanceFormat:i(e))(i(R).diamond)),1)])),_:1})])),_:1}),x(l,{class:"box-border flex-x-between flex-1 rounded-5 bg-cell px-16rpx py-12rpx"},{default:p((()=>[x(s,{name:"/static/icons/gold.png",size:"36rpx"}),x(r,{class:"text-md color-white"},{default:p((()=>[u(m(("balanceFormat"in a?a.balanceFormat:i(e))(i(R).gold)),1)])),_:1})])),_:1})])),_:1}),x(l,{class:"mt-36rpx w-full flex-center"},{default:p((()=>[x(l,{class:"custom-draw-btn w-full flex-center pb-30rpx pt-25rpx",onClick:G},{default:p((()=>[x(s,{name:"/static/icons/chest.png",size:"36rpx"}),x(r,{class:"px-16rpx text-md color-white"},{default:p((()=>[u(" 1 ")])),_:1}),x(r,{class:"text-md color-white"},{default:p((()=>[u(" Open ")])),_:1})])),_:1})])),_:1})])),_:1}),x(l,{class:"px"},{default:p((()=>[x(l,{class:"flex-x-between"},{default:p((()=>[x(l,{class:"flex-y-center"},{default:p((()=>[x(r,{class:"text-lg color-white"},{default:p((()=>[u(" Records ")])),_:1})])),_:1}),x(s,{name:"/static/icon/refresh.png",size:"40rpx",onClick:P})])),_:1}),x(l,{class:"mt-26rpx w-full"},{default:p((()=>[x(l,{class:"box-border flex-y-center flex-y-center rounded-5 bg-cell px-32rpx py-16rpx"},{default:p((()=>[x(l,{class:"w-40% flex-y-center"},{default:p((()=>[x(r,{class:"text-md color-desc"},{default:p((()=>[u(" Time ")])),_:1})])),_:1}),x(l,{class:"w-60% flex-x-end"},{default:p((()=>[x(r,{class:"text-md color-desc"},{default:p((()=>[u(" Reward ")])),_:1})])),_:1})])),_:1}),x(l,{class:"flex-col"},{default:p((()=>[(c(!0),b(g,null,_(i(T),((t,s)=>(c(),d(l,{key:s,class:"mt-26rpx box-border"},{default:p((()=>[x(l,{class:"m-y-14rpx flex-y-center"},{default:p((()=>[x(l,{class:"w-40% flex-y-center flex-wrap"},{default:p((()=>[x(r,{class:"text-sm color-white"},{default:p((()=>[u(m(t.time),1)])),_:2},1024)])),_:2},1024),x(l,{class:"w-60% flex-x-end flex-wrap"},{default:p((()=>[x(r,{class:"text-sm color-white"},{default:p((()=>[u(m(("balanceFormat"in a?a.balanceFormat:i(e))(t.reward.amount))+" "+m(t.reward.symbol_name),1)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-36a93c8f"]]);export{O as default};
