import{Direction}from"./Direction.js";function PositionMaker(t,i){if(arguments.length<2)throw new Error("PositionMaker called with too few arguments "+[].toString.apply(arguments));if("number"!=typeof t||"number"!=typeof i)throw new Error("PositionMaker called with invalid width or height "+[].toString.apply(arguments));if(t<0||i<0)throw new Error("PositionMaker called with out-of-bounds width or height "+[].toString.apply(arguments));function r(t){return"number"==typeof t}var o=[Direction.NORTH,Direction.NORTHEAST,Direction.EAST,Direction.SOUTHEAST,Direction.SOUTH,Direction.SOUTHWEST,Direction.WEST,Direction.NORTHWEST,Direction.INVALID];function n(t){return r(t)&&-1!==o.indexOf(t)}var e=function(o,s,h){if(0===arguments.length)return this.x=0,this.y=0,this;if(1===arguments.length&&!(o instanceof e))throw new Error("Position constructor called with invalid pos "+o);if(3===arguments.length&&!(o instanceof e))throw new Error("Position constructor called with invalid pos "+o);if(!(3!==arguments.length||r(s)&&r(h)))throw new Error("Position constructor called with invalid deltas "+s+" "+h);if(2===arguments.length&&r(o)&&!r(s))throw new Error("Position constructor called with invalid y coordinate "+o+" "+s);if(2===arguments.length&&o instanceof e&&(!r(s)||!n(s)))throw new Error("Position constructor called with invalid direction "+o+" "+s);if(!(2!==arguments.length||r(o)||o instanceof e))throw new Error("Position constructor called with bad existing position "+o+" "+s);var c=!0;if(r(o)?(this.x=o,this.y=s):(this._assignFrom(o),2===arguments.length?c=this.move(s):3===arguments.length&&(this.x+=s,this.y+=h)),this.x<0||this.x>=t||this.y<0||this.y>=i)throw new Error("Position constructed with bad bounds "+this+" "+s+" "+h);if(!c)throw new Error("Position did not move correctly "+this+" "+s+" "+h)};return e.prototype._assignFrom=function(t){this.x=t.x,this.y=t.y},e.prototype.toString=function(){return"Position ("+this.x+", "+this.y+")"},e.prototype.toInt=function(){return this.y*t+this.x},e.prototype.move=function(r){switch(r){case Direction.INVALID:return!0;case Direction.NORTH:if(this.y>0)return this.y--,!0;break;case Direction.NORTHEAST:if(this.y>0&&this.x<t-1)return this.y--,this.x++,!0;break;case Direction.EAST:if(this.x<t-1)return this.x++,!0;break;case Direction.SOUTHEAST:if(this.y<i-1&&this.x<t-1)return this.x++,this.y++,!0;break;case Direction.SOUTH:if(this.y<i-1)return this.y++,!0;break;case Direction.SOUTHWEST:if(this.y<i-1&&this.x>0)return this.y++,this.x--,!0;break;case Direction.WEST:if(this.x>0)return this.x--,!0;break;case Direction.NORTHWEST:if(this.y>0&&this.x>0)return this.y--,this.x--,!0;break}return!1},e}export{PositionMaker};