import{Traffic}from"../Traffic.js";export class LanePosition{constructor(t,e,i){this.car=t,this.position=i,this.id=Traffic.uniqueId("laneposition"),this.free=!0,this._lane=e}get lane(){return this._lane}set lane(t){this.release(),this._lane=t}get relativePosition(){return this.position/this.lane.length}get nextCarDistance(){let t,e,i,s;return e=this.getNext(),e?(i=e.position-.5*e.car.length,t=this.position+.5*this.car.length,s={car:e.car,distance:i-t}):s={car:null,distance:1/0}}acquire(){let t;if(null!=(null!=(t=this.lane)?t.addCarPosition:void 0))return this.free=!1,this.lane.addCarPosition(this)}release(){let t;if(!this.free&&(null!=(t=this.lane)?t.removeCar:void 0))return this.free=!0,this.lane.removeCar(this)}getNext(){if(this.lane&&!this.free)return this.lane.getNext(this)}}