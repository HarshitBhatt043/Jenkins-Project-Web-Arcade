import{Micro,MiscUtils}from"../Micro.js";import{Tiles,Tile,ZoneUtils}from"../Tile.js";import{Direction}from"../math/Direction.js";import{Position}from"../math/Position.js";import{math}from"../math/math.js";export class Traffic{constructor(t,i){this._map=t,this._stack=[],this._spriteManager=i}makeTraffic(t,i,e,r){this._stack=[];let o=new Position(t,i);return this.findPerimeterRoad(o)?this.tryDrive(o,r)?(this.addToTrafficDensityMap(e),Micro.ROUTE_FOUND):Micro.NO_ROUTE_FOUND:Micro.NO_ROAD_FOUND}addToTrafficDensityMap(t){let i=t.trafficDensityMap;for(;this._stack.length>0;){let t=this._stack.pop();if(!this._map.testBounds(t.x,t.y))continue;let e=this._map.getTileValue(t.x,t.y);if(e>=Tile.ROADBASE&&e<Tile.POWERBASE){let e=i.worldGet(t.x,t.y);if(e+=50,e=Math.min(e,240),i.worldSet(t.x,t.y,e),e>=240&&0===math.getRandom(5)){let i=this._spriteManager.getSprite(Micro.SPRITE_HELICOPTER);null!==i&&(i.destX=ZoneUtils.worldToPix(t.x),i.destY=ZoneUtils.worldToPix(t.y))}}}}findPerimeterRoad(t){for(let i=0;i<12;i++){let e=t.x+Micro.perimX[i],r=t.y+Micro.perimY[i];if(this._map.testBounds(e,r)&&ZoneUtils.isDriveable(this._map.getTileValue(e,r)))return t.x=e,t.y=r,!0}return!1}tryDrive(t,i){let e=Direction.INVALID,r=new Position(t);for(let t=0;t<Micro.MAX_TRAFFIC_DISTANCE;t++){let o=this.tryGo(r,e);if(o!=Direction.INVALID){if(r.move(o),e=Direction.rotate180(o),1&t&&this._stack.push(new Position(r)),this.driveDone(r,i))return!0}else{if(!(this._stack.length>0))return!1;this._stack.pop(),t+=3}}return!1}tryGo(t,i){let e,r=[],o=Direction.NORTH,s=0;for(e=0;e<4;e++)o!=i&&ZoneUtils.isDriveable(this._map.getTileFromMapOrDefault(t,o,Tile.DIRT))?(r[e]=o,s++):r[e]=Direction.INVALID,o=Direction.rotate90(o);if(0===s)return Direction.INVALID;if(1===s)for(e=0;e<4;e++)if(r[e]!=Direction.INVALID)return r[e];for(e=3&math.getRandom16();r[e]===Direction.INVALID;)e=e+1&3;return r[e]}driveDone(t,i){return!!(t.y>0&&i(this._map.getTileValue(t.x,t.y-1)))||(!!(t.x<this._map.width-1&&i(this._map.getTileValue(t.x+1,t.y)))||(!!(t.y<this._map.height-1&&i(this._map.getTileValue(t.x,t.y+1)))||!!(t.x>0&&i(this._map.getTileValue(t.x-1,t.y)))))}}