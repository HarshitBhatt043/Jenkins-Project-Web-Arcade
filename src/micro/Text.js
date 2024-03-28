import{Micro}from"./Micro.js";import{Messages}from"./Messages.js";const Text=function(){var e={};e[""+Micro.LEVEL_EASY]="Easy",e[""+Micro.LEVEL_MED]="Medium",e[""+Micro.LEVEL_HARD]="Hard";var s={};s[Micro.CC_VILLAGE]="VILLAGE",s[Micro.CC_TOWN]="TOWN",s[Micro.CC_CITY]="CITY",s[Micro.CC_CAPITAL]="CAPITAL",s[Micro.CC_METROPOLIS]="METROPOLIS",s[Micro.CC_MEGALOPOLIS]="MEGALOPOLIS";var a={};a[Micro.CRIME]="Crime",a[Micro.POLLUTION]="Pollution",a[Micro.HOUSING]="Housing",a[Micro.TAXES]="Taxes",a[Micro.TRAFFIC]="Traffic",a[Micro.UNEMPLOYMENT]="Unemployment",a[Micro.FIRE]="Fire";var r={};r[Messages.FIRE_STATION_NEEDS_FUNDING]="Fire departments need funding",r[Messages.NEED_AIRPORT]="Commerce requires an Airport",r[Messages.NEED_FIRE_STATION]="Citizens demand a Fire Department",r[Messages.NEED_ELECTRICITY]="Build a Power Plant",r[Messages.NEED_MORE_INDUSTRIAL]="More industrial zones needed",r[Messages.NEED_MORE_COMMERCIAL]="More commercial zones needed",r[Messages.NEED_MORE_RESIDENTIAL]="More residential zones needed",r[Messages.NEED_MORE_RAILS]="Inadequate rail system",r[Messages.NEED_MORE_ROADS]="More roads required",r[Messages.NEED_POLICE_STATION]="Citizens demand a Police Department",r[Messages.NEED_SEAPORT]="Industry requires a Sea Port",r[Messages.NEED_STADIUM]="Residents demand a Stadium",r[Messages.ROAD_NEEDS_FUNDING]="Roads deteriorating, due to lack of funds",r[Messages.POLICE_NEEDS_FUNDING]="Police departments need funding",r[Messages.WELCOME]="Welcome to 3D City",r[Messages.WELCOMEBACK]="Welcome to 3D City";var o={};o[Messages.BLACKOUTS_REPORTED]="Brownouts, build another Power Plant",o[Messages.COPTER_CRASHED]="A helicopter crashed ",o[Messages.EARTHQUAKE]="Major earthquake reported !!",o[Messages.EXPLOSION_REPORTED]="Explosion detected ",o[Messages.FLOODING_REPORTED]="Flooding reported !",o[Messages.FIRE_REPORTED]="Fire reported ",o[Messages.HEAVY_TRAFFIC]="Heavy Traffic reported",o[Messages.HIGH_CRIME]="Crime very high",o[Messages.HIGH_POLLUTION]="Pollution very high",o[Messages.MONSTER_SIGHTED]="A Monster has been sighted !",o[Messages.NO_MONEY]="YOUR CITY HAS GONE BROKE",o[Messages.NOT_ENOUGH_POWER]="Blackouts reported. insufficient power capacity",o[Messages.NUCLEAR_MELTDOWN]="A Nuclear Meltdown has occurred !!",o[Messages.PLANE_CRASHED]="A plane has crashed ",o[Messages.SHIP_CRASHED]="Shipwreck reported ",o[Messages.TAX_TOO_HIGH]="Citizens upset. The tax rate is too high",o[Messages.TORNADO_SIGHTED]="Tornado reported !",o[Messages.TRAFFIC_JAMS]="Frequent traffic jams reported",o[Messages.TRAIN_CRASHED]="A train crashed ";var i={};return i[Messages.REACHED_CAPITAL]="Population has reached 50,000",i[Messages.REACHED_CITY]="Population has reached 10,000",i[Messages.REACHED_MEGALOPOLIS]="Population has reached 500,000",i[Messages.REACHED_METROPOLIS]="Population has reached 100,000",i[Messages.REACHED_TOWN]="Population has reached 2,000",{badMessages:o,cityClass:s,crimeStrings:["Safe","Light","Moderate","Dangerous"],densityStrings:["Low","Medium","High","Very High"],gameLevel:e,goodMessages:i,landValueStrings:["Slum","Lower Class","Middle Class","High"],months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],neutralMessages:r,problems:a,pollutionStrings:["None","Moderate","Heavy","Very Heavy"],rateStrings:["Declining","Stable","Slow Growth","Fast Growth"],toolMessages:{noMoney:"Insufficient funds to build that",needsDoze:"Area must be bulldozed first"},zoneTypes:["Clear","Water","Trees","Rubble","Flood","Radioactive Waste","Fire","Road","Power","Rail","Residential","Commercial","Industrial","Seaport","Airport","Coal Power","Fire Department","Police Department","Stadium","Nuclear Power","Draw Bridge","Radar Dish","Fountain","Industrial","Steelers 38  Bears 3","Draw Bridge","Ur 238"]}};export const TXT=new Text;