import{Traffic}from"../Traffic.js";import{Lane}from"./Lane.js";export class Road{constructor(t,e){this.source=t,this.target=e,this.id=Traffic.uniqueId("road"),this.lanes=[],this.lanesNumber=null,this.update()}get length(){return this.targetSide.target.subtract(this.sourceSide.source).length}get leftmostLane(){return this.lanes[this.lanesNumber-1]}get rightmostLane(){return this.lanes[0]}copy(t){let e;return e=Object.create(Road.prototype),Traffic.extend.extend(e,t),null==e.lanes&&(e.lanes=[]),e}toJSON(){return{id:this.id,source:this.source.id,target:this.target.id}}getTurnDirection(t){let e,s,i;if(this.target!==t.source)throw Error("invalid roads");return e=this.targetSideId,s=t.sourceSideId,i=(s-e-1+8)%4}update(){let t,e,s,i,r,a,n,h,l;if(!this.source||!this.target)throw Error("incomplete road");if(this.sourceSideId=this.source.rect.getSectorId(this.target.rect.center()),this.sourceSide=this.source.rect.getSide(this.sourceSideId).subsegment(.5,1),this.targetSideId=this.target.rect.getSectorId(this.source.rect.center()),this.targetSide=this.target.rect.getSide(this.targetSideId).subsegment(0,.5),this.lanesNumber=0|Traffic.min(this.sourceSide.length,this.targetSide.length),this.lanesNumber=Traffic.max(2,this.lanesNumber/Traffic.settings.gridSize|0),e=this.sourceSide.split(this.lanesNumber,!0),s=this.targetSide.split(this.lanesNumber),null==this.lanes||this.lanes.length<this.lanesNumber)for(null==this.lanes&&(this.lanes=[]),t=r=0,n=this.lanesNumber-1;0<=n?r<=n:r>=n;t=0<=n?++r:--r)null==(i=this.lanes)[t]&&(i[t]=new Lane(e[t],s[t],this));for(l=[],t=a=0,h=this.lanesNumber-1;0<=h?a<=h:a>=h;t=0<=h?++a:--a)this.lanes[t].sourceSegment=e[t],this.lanes[t].targetSegment=s[t],this.lanes[t].leftAdjacent=this.lanes[t+1],this.lanes[t].rightAdjacent=this.lanes[t-1],this.lanes[t].leftmostAdjacent=this.lanes[this.lanesNumber-1],this.lanes[t].rightmostAdjacent=this.lanes[0],l.push(this.lanes[t].update())}}