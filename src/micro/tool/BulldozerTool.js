import{BaseToolConnector}from"./BaseToolConnector.js";import{Micro}from"../Micro.js";import{Tile,ZoneUtils}from"../Tile.js";import{Messages}from"../Messages.js";import{math}from"../math/math.js";export class BulldozerTool extends BaseToolConnector{constructor(e){super(),this.init(10,e,!0)}putRubble(e,s,t){for(let i=e;i<e+t;i++)for(let e=s;e<s+t;e++)if(this._map.testBounds(i,e)){let s=this._worldEffects.getTile(i,e);s!==Tile.RADTILE&&s!==Tile.DIRT&&(Micro.haveMapAnimation?this._worldEffects.setTile(i,e,Tile.TINYEXP+math.getRandom(2),Tile.ANIMBIT|Tile.BULLBIT):this._map.setTo(i,e,ZoneUtils.randomRubble()))}}layDoze(e,s){let t=this._worldEffects.getTile(e,s);if(!t.isBulldozable())return this.TOOLRESULT_FAILED;switch(t=t.getValue(),t=ZoneUtils.normalizeRoad(t),t){case Tile.HBRIDGE:case Tile.VBRIDGE:case Tile.BRWV:case Tile.BRWH:case Tile.HBRDG0:case Tile.HBRDG1:case Tile.HBRDG2:case Tile.HBRDG3:case Tile.VBRDG0:case Tile.VBRDG1:case Tile.VBRDG2:case Tile.VBRDG3:case Tile.HPOWER:case Tile.VPOWER:case Tile.HRAIL:case Tile.VRAIL:this._worldEffects.setTile(e,s,Tile.RIVER);break;default:this._worldEffects.setTile(e,s,Tile.DIRT);break}return this.addCost(1),this.TOOLRESULT_OK}doTool(e,s,t,i){this._map.testBounds(e,s)||(this.result=this.TOOLRESULT_FAILED);let l,o,a,T=this._worldEffects.getTile(e,s),r=T.getValue(),c=0;if(T.isZone())c=ZoneUtils.checkZoneSize(r),l=0,o=0;else{let e=ZoneUtils.checkBigZone(r);c=e.zoneSize,l=e.deltaX,o=e.deltaY}if(c>0){this.addCost(this.bulldozerCost),this._map.powered({v:1,x:e,y:s});let t=e+l,i=s+o;switch(c){case 3:this.putRubble(t-1,i-1,3);break;case 4:this.putRubble(t-1,i-1,4);break;case 6:this.putRubble(t-1,i-1,6);break}this.result=this.TOOLRESULT_OK}r===Tile.RIVER||r===Tile.REDGE||r===Tile.CHANNEL?(a=this.layDoze(e,s),r!==this._worldEffects.getTileValue(e,s)&&this.addCost(5)):(a=this.layDoze(e,s),this.checkZoneConnections(e,s)),this.result=a}}