import{Micro}from"../Micro.js";import{Tiles,Tile,ZoneUtils}from"../Tile.js";export class SpriteUtils{static pixToWorld(e){return ZoneUtils.pixToWorld(e)}static worldToPix(e){return ZoneUtils.worldToPix(e)}static turnTo(e,t){return e===t||(e<t?t-e<4?e++:e--:e-t<4?e--:e++,e>8&&(e=1),e<1&&(e=8)),e}static absoluteValue(e){return Math.abs(e)}static getTileValue(e,t,i){let l=ZoneUtils.pixToWorld(t),s=ZoneUtils.pixToWorld(i);return l<0||l>=e.width||s<0||s>=e.height?-1:e.getTileValue(l,s)}static getDir(e,t,i,l){let s,r=i-e,o=l-t;return s=r<0?o<0?11:8:o<0?2:5,r=Math.abs(r),o=Math.abs(o),2*r<o?s++:2*o<r&&s--,(s<0||s>12)&&(s=0),Micro.directionTable[s]}static absoluteDistance(e,t,i,l){let s=i-e,r=l-t;return Math.abs(s)+Math.abs(r)}static checkWet(e){return e===Tile.HPOWER||e===Tile.VPOWER||e===Tile.HRAIL||e===Tile.VRAIL||e===Tile.BRWH||e===Tile.BRWV}static destroyMapTile(e,t,i,l,s){let r=ZoneUtils.pixToWorld(l),o=ZoneUtils.pixToWorld(s);if(!t.testBounds(r,o))return;let a=t.getTile(r,o),T=a.getValue();T<Tile.TREEBASE||(a.isCombustible()?(a.isZone()&&(ZoneUtils.fireZone(t,r,o,i),T>Tile.RZB&&e.makeExplosionAt(l,s)),SpriteUtils.checkWet(T)?t.setTile(r,o,Tile.RIVER,0):t.setTile(r,o,Tile.TINYEXP,Tile.BULLBIT|Tile.ANIMBIT)):T>=Tile.ROADBASE&&T<=Tile.LASTROAD&&t.setTile(r,o,Tile.RIVER,0))}static getDistance(e,t,i,l){return Math.abs(e-i)+Math.abs(t-l)}static checkSpriteCollision(e,t){return 0!==e.frame&&0!==t.frame&&SpriteUtils.getDistance(e.x,e.y,t.x,t.y)<30}}