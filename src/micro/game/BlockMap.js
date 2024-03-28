import{MiscUtils}from"../Micro.js";export class BlockMap{constructor(t,i,h){if(void 0===t||void 0===i||void 0===h)throw new Error("Invalid dimensions for block map");this.isBlockMap=!0,this.blockSize=h,this.gameMapWidth=t,this.gameMapHeight=i,this.width=Math.floor((t+h-1)/h),this.height=Math.floor((i+h-1)/h),this.data=[],this.clear()}clear(){let t,i=this.height;for(;i--;)for(t=this.width;t--;)this.data[this.width*i+t]=0}copyFrom(t,i){t.width!==this.width||t.height!==this.height||(t.blockSize,this.blockSize);let h,o,s=t.height,r=t.width;for(o=0;o<s;o++)for(h=0;h<r;h++)this.data[r*o+h]=i(t.data[r*o+h])}get(t,i){return this.data[this.width*i+t]}set(t,i,h){this.data[this.width*i+t]=h}toBlock(t){return Math.floor(t/this.blockSize)}worldGet(t,i){return this.get(this.toBlock(t),this.toBlock(i))}worldSet(t,i,h){this.set(this.toBlock(t),this.toBlock(i),h)}}