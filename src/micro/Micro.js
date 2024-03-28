export const Micro={haveMapAnimation:!0,localStorage:null,GameMapProps:["cityCentreX","cityCentreY","pollutionMaxX","pollutionMaxY","width","height"],savePropsVar:["cityTime"],CensusProps:["resPop","comPop","indPop","crimeRamp","pollutionRamp","landValueAverage","pollutionAverage","crimeAverage","totalPop","resHist10","resHist120","comHist10","comHist120","indHist10","indHist120","crimeHist10","crimeHist120","moneyHist10","moneyHist120","pollutionHist10","pollutionHist120"],BudgetProps:["autoBudget","totalFunds","policePercent","roadPercent","firePercent","roadSpend","policeSpend","fireSpend","roadMaintenanceBudget","policeMaintenanceBudget","fireMaintenanceBudget","cityTax","roadEffect","policeEffect","fireEffect"],PROBLEMS:["CVP_CRIME","CVP_POLLUTION","CVP_HOUSING","CVP_TAXES","CVP_TRAFFIC","CVP_UNEMPLOYMENT","CVP_FIRE"],NUMPROBLEMS:7,NUM_COMPLAINTS:4,problemData:[],EvalProps:["cityClass","cityScore"],speedPowerScan:[2,4,5,6],speedPollutionTerrainLandValueScan:[2,7,17,30],speedCrimeScan:[1,8,18,32],speedPopulationDensityScan:[1,9,19,38],speedFireAnalysis:[1,10,20,40],CENSUS_FREQUENCY_10:4,CENSUS_FREQUENCY_120:40,TAX_FREQUENCY:48,MAP_WIDTH:128,MAP_HEIGHT:128,MAP_DEFAULT_WIDTH:384,MAP_DEFAULT_HEIGHT:384,MAP_BIG_DEFAULT_WIDTH:2048,MAP_BIG_DEFAULT_HEIGHT:2048,MAP_BIG_DEFAULT_ID:"bigMap",MAP_PARENT_ID:"splashContainer",MAP_DEFAULT_ID:"SplashCanvas",DEFAULT_WIDTH:400,DEFAULT_HEIGHT:400,DEFAULT_ID:"MicropolisCanvas",RCI_DEFAULT_ID:"RCICanvas",LEVEL_EASY:0,LEVEL_MED:1,LEVEL_HARD:2,SPEED_PAUSED:0,SPEED_SLOW:1,SPEED_MED:2,SPEED_FAST:3,SPEED_ULTRA:4,ROUTE_FOUND:1,NO_ROUTE_FOUND:0,NO_ROAD_FOUND:-1,MAX_TRAFFIC_DISTANCE:30,perimX:[-1,0,1,2,2,2,1,0,-1,-2,-2,-2],perimY:[-2,-2,-2,-1,0,1,2,2,2,1,0,-1],SPRITE_TRAIN:1,SPRITE_HELICOPTER:2,SPRITE_AIRPLANE:3,SPRITE_SHIP:4,SPRITE_MONSTER:5,SPRITE_TORNADO:6,SPRITE_EXPLOSION:7,CC_VILLAGE:"VILLAGE",CC_TOWN:"TOWN",CC_CITY:"CITY",CC_CAPITAL:"CAPITAL",CC_METROPOLIS:"METROPOLIS",CC_MEGALOPOLIS:"MEGALOPOLIS",CRIME:0,POLLUTION:1,HOUSING:2,TAXES:3,TRAFFIC:4,UNEMPLOYMENT:5,FIRE:6,RES_VALVE_RANGE:2e3,COM_VALVE_RANGE:1500,IND_VALVE_RANGE:1500,taxTable:[200,150,120,100,80,50,30,0,-10,-40,-100,-150,-200,-250,-300,-350,-400,-450,-500,-550,-600],extMarketParamTable:[1.2,1.1,.98],RLevels:[.7,.9,1.2],FLevels:[1.4,1.2,.8],MAX_ROAD_EFFECT:32,MAX_POLICESTATION_EFFECT:1e3,MAX_FIRESTATION_EFFECT:1e3,policeMaintenanceCost:100,fireMaintenanceCost:100,roadMaintenanceCost:1,railMaintenanceCost:2,COAL_POWER_STRENGTH:700,NUCLEAR_POWER_STRENGTH:2e3,DISASTER_NONE:"None",DISASTER_MONSTER:"Monster",DISASTER_FIRE:"Fire",DISASTER_FLOOD:"Flood",DISASTER_CRASH:"Crash",DISASTER_MELTDOWN:"Meltdown",DISASTER_TORNADO:"Tornado",CURRENT_VERSION:3,KEY:"micropolisJSGame",DisChance:[479,239,59],TERRAIN_CREATE_ISLAND:0,TERRAIN_TREE_LEVEL:-1,TERRAIN_LAKE_LEVEL:-1,TERRAIN_CURVE_LEVEL:-1,ISLAND_RADIUS:18,M_ARRAY_TYPE:"undefined"!=typeof Float32Array?Float32Array:Array,arrs:["res","com","ind","crime","money","pollution"],directionTable:[0,3,2,1,3,4,5,7,6,5,7,8,1],SMOOTH_NEIGHBOURS_THEN_BLOCK:0,SMOOTH_ALL_THEN_CLAMP:1,simData:null,messageManager:null};export class EventEmitter{static emitEvent(e,E){Micro.messageManager.sendMessage(e,E)}}export class MiscUtils{static mcd(e){return{configurable:!1,enumerable:!1,writeable:!1,value:e}}static rotate10Arrays(){for(var e=0;e<Micro.arrs.length;e++){var E=Micro.arrs[e]+"Hist10";this[E].pop(),this[E].unshift(0)}}static rotate120Arrays(){for(var e=0;e<Micro.arrs.length;e++){var E=Micro.arrs[e]+"Hist120";this[E].pop(),this[E].unshift(0)}}static isCallable(e){return"function"==typeof e}static copyFrom(e,E,a){for(var t=function(e){return a(e)},r=E.data.length;r--;)e[r]=E.data[r].map(t)}static makeArrayOf(e,E){for(var a=new Array(e),t=e;t--;)a[t]=E;return a}}