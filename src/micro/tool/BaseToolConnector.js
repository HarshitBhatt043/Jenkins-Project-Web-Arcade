import{BaseTool}from"./BaseTool.js";import{Tile,ZoneUtils,RoadTable,RailTable,WireTable}from"../Tile.js";export class BaseToolConnector extends BaseTool{constructor(){super()}fixSingle(e,i){let l=0,R=this._worldEffects.getTile(e,i);return R=ZoneUtils.normalizeRoad(R),R>=Tile.ROADS&&R<=Tile.INTERSECTION?(i>0&&(R=this._worldEffects.getTile(e,i-1),R=ZoneUtils.normalizeRoad(R),(R===Tile.HRAILROAD||R>=Tile.ROADBASE&&R<=Tile.VROADPOWER)&&R!==Tile.HROADPOWER&&R!==Tile.VRAILROAD&&R!==Tile.ROADBASE&&(l|=1)),e<this._map.width-1&&(R=this._worldEffects.getTile(e+1,i),R=ZoneUtils.normalizeRoad(R),(R===Tile.VRAILROAD||R>=Tile.ROADBASE&&R<=Tile.VROADPOWER)&&R!==Tile.VROADPOWER&&R!==Tile.HRAILROAD&&R!==Tile.VBRIDGE&&(l|=2)),i<this._map.height-1&&(R=this._worldEffects.getTile(e,i+1),R=ZoneUtils.normalizeRoad(R),(R===Tile.HRAILROAD||R>=Tile.ROADBASE&&R<=Tile.VROADPOWER)&&R!==Tile.HROADPOWER&&R!==Tile.VRAILROAD&&R!==Tile.ROADBASE&&(l|=4)),e>0&&(R=this._worldEffects.getTile(e-1,i),R=ZoneUtils.normalizeRoad(R),(R===Tile.VRAILROAD||R>=Tile.ROADBASE&&R<=Tile.VROADPOWER)&&R!==Tile.VROADPOWER&&R!==Tile.HRAILROAD&&R!==Tile.VBRIDGE&&(l|=8)),void this._worldEffects.setTile(e,i,RoadTable[l]|Tile.BULLBIT|Tile.BURNBIT)):R>=Tile.LHRAIL&&R<=Tile.LVRAIL10?(i>0&&(R=this._worldEffects.getTile(e,i-1),R=ZoneUtils.normalizeRoad(R),R>=Tile.RAILHPOWERV&&R<=Tile.VRAILROAD&&R!==Tile.RAILHPOWERV&&R!==Tile.HRAILROAD&&R!==Tile.HRAIL&&(l|=1)),e<this._map.width-1&&(R=this._worldEffects.getTile(e+1,i),R=ZoneUtils.normalizeRoad(R),R>=Tile.RAILHPOWERV&&R<=Tile.VRAILROAD&&R!==Tile.RAILVPOWERH&&R!==Tile.VRAILROAD&&R!==Tile.VRAIL&&(l|=2)),i<this._map.height-1&&(R=this._worldEffects.getTile(e,i+1),R=ZoneUtils.normalizeRoad(R),R>=Tile.RAILHPOWERV&&R<=Tile.VRAILROAD&&R!==Tile.RAILHPOWERV&&R!==Tile.HRAILROAD&&R!==Tile.HRAIL&&(l|=4)),e>0&&(R=this._worldEffects.getTile(e-1,i),R=ZoneUtils.normalizeRoad(R),R>=Tile.RAILHPOWERV&&R<=Tile.VRAILROAD&&R!==Tile.RAILVPOWERH&&R!==Tile.VRAILROAD&&R!==Tile.VRAIL&&(l|=8)),void this._worldEffects.setTile(e,i,RailTable[l]|Tile.BULLBIT|Tile.BURNBIT)):R>=Tile.LHPOWER&&R<=Tile.LVPOWER10?(i>0&&(R=this._worldEffects.getTile(e,i-1),R.isConductive()&&(R=R.getValue(),R=ZoneUtils.normalizeRoad(R),R!==Tile.VPOWER&&R!==Tile.VROADPOWER&&R!==Tile.RAILVPOWERH&&(l|=1))),e<this._map.width-1&&(R=this._worldEffects.getTile(e+1,i),R.isConductive()&&(R=R.getValue(),R=ZoneUtils.normalizeRoad(R),R!==Tile.HPOWER&&R!==Tile.HROADPOWER&&R!==Tile.RAILHPOWERV&&(l|=2))),i<this._map.height-1&&(R=this._worldEffects.getTile(e,i+1),R.isConductive()&&(R=R.getValue(),R=ZoneUtils.normalizeRoad(R),R!==Tile.VPOWER&&R!==Tile.VROADPOWER&&R!==Tile.RAILVPOWERH&&(l|=4))),e>0&&(R=this._worldEffects.getTile(e-1,i),R.isConductive()&&(R=R.getValue(),R=ZoneUtils.normalizeRoad(R),R!==Tile.HPOWER&&R!==Tile.HROADPOWER&&R!==Tile.RAILHPOWERV&&(l|=8))),void this._worldEffects.setTile(e,i,WireTable[l]|Tile.BLBNCNBIT)):void 0}checkZoneConnections(e,i){this.fixSingle(e,i),i>0&&this.fixSingle(e,i-1),e<this._map.width-1&&this.fixSingle(e+1,i),i<this._map.height-1&&this.fixSingle(e,i+1),e>0&&this.fixSingle(e-1,i)}checkBorder(e,i,l){let R;for(e-=1,i-=1,R=0;R<l;R++)this.fixZone(e+R,i-1);for(R=0;R<l;R++)this.fixZone(e-1,i+R);for(R=0;R<l;R++)this.fixZone(e+R,i+l);for(R=0;R<l;R++)this.fixZone(e+l,i+R)}}