import{BaseTool}from"./BaseTool.js";import{Tile}from"../Tile.js";import{Messages}from"../Messages.js";import{TXT}from"../Text.js";var debug=!0;export class QueryTool extends BaseTool{constructor(i){super(),this.init(0,i,!1,!1),this.txt=""}classifyPopulationDensity(i,e,t){var s=t.populationDensityMap.worldGet(i,e);s>>=6,s&=3,this.txt+="Density: "+TXT.densityStrings[s]+"<br>"}classifyLandValue(i,e,t){var s=t.landValueMap.worldGet(i,e),l=0;s>=150?l=3:s>=80?l=2:s>=30&&(l=1),this.txt+="Value: "+TXT.landValueStrings[l]+"<br>"}classifyCrime(i,e,t){var s=t.crimeRateMap.worldGet(i,e);s>>=6,s&=3,this.txt+="Crime: "+TXT.crimeStrings[s]+"<br>"}classifyPollution(i,e,t){var s=t.pollutionDensityMap.worldGet(i,e);s>>=6,s&=3,this.txt+="Pollution: "+TXT.pollutionStrings[s]+"<br>"}classifyRateOfGrowth(i,e,t){var s=t.rateOfGrowthMap.worldGet(i,e);s>>=6,s&=3,this.txt+="Growth: "+TXT.rateStrings[s]}classifyDebug(i,e,t){}classifyZone(i,e){var t=[Tile.DIRT,Tile.RIVER,Tile.TREEBASE,Tile.RUBBLE,Tile.FLOOD,Tile.RADTILE,Tile.FIRE,Tile.ROADBASE,Tile.POWERBASE,Tile.RAILBASE,Tile.RESBASE,Tile.COMBASE,Tile.INDBASE,Tile.PORTBASE,Tile.AIRPORTBASE,Tile.COALBASE,Tile.FIRESTBASE,Tile.POLICESTBASE,Tile.STADIUMBASE,Tile.NUCLEARBASE,Tile.HBRDG0,Tile.RADAR0,Tile.FOUNTAIN,Tile.INDBASE2,Tile.FOOTBALLGAME1,Tile.VBRDG0,952],s=this._map.getTileValue(i,e);s>=Tile.COALSMOKE1&&s<Tile.FOOTBALLGAME1&&(s=Tile.COALBASE);var l,T=0;for(T=0,l=t.length-1;T<l&&!(s<t[T+1]);T++);this.txt="Zone: "+TXT.zoneTypes[T]+"<br>"}getInfo(){return this.txt}doTool(i,e,t,s){if(" TileValue: "+this._map.getTileValue(i,e),debug)this._map.getTile(i,e);this.classifyZone(i,e),this.classifyPopulationDensity(i,e,t),this.classifyLandValue(i,e,t),this.classifyCrime(i,e,t),this.classifyPollution(i,e,t),this.classifyRateOfGrowth(i,e,t),this.classifyDebug(i,e,t),s.sendMessage(Messages.QUERY_WINDOW_NEEDED),this.result=this.TOOLRESULT_OK}}