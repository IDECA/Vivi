/*
 COPYRIGHT 2009 ESRI

 TRADE SECRETS: ESRI PROPRIETARY AND CONFIDENTIAL
 Unpublished material - all rights reserved under the
 Copyright Laws of the United States and applicable international
 laws, treaties, and conventions.

 For additional information, contact:
 Environmental Systems Research Institute, Inc.
 Attn: Contracts and Legal Services Department
 380 New York Street
 Redlands, California, 92373
 USA

 email: contracts@esri.com
 */
//>>built
require({cache:{"url:dojox/form/resources/HorizontalRangeSlider.html":"<table class=\"dijit dijitReset dijitSlider dijitSliderH dojoxRangeSlider\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\" rules=\"none\" dojoAttachEvent=\"onkeypress:_onKeyPress,onkeyup:_onKeyUp\" role=\"presentation\"\n\t><tr class=\"dijitReset\"\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\n\t\t><td dojoAttachPoint=\"topDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationT dijitSliderDecorationH\"></td\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\n\t></tr\n\t><tr class=\"dijitReset\"\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH\"\n\t\t\t><div class=\"dijitSliderDecrementIconH\" tabIndex=\"-1\" style=\"display:none\" dojoAttachPoint=\"decrementButton\"><span class=\"dijitSliderButtonInner\">-</span></div\n\t\t></td\n\t\t><td class=\"dijitReset\"\n\t\t\t><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderLeftBumper\" dojoAttachEvent=\"onmousedown:_onClkDecBumper\"></div\n\t\t></td\n\t\t><td class=\"dijitReset\"\n\t\t\t><input dojoAttachPoint=\"valueNode\" type=\"hidden\" ${!nameAttrSetting}\n\t\t\t/><div role=\"presentation\" class=\"dojoxRangeSliderBarContainer\" dojoAttachPoint=\"sliderBarContainer\"\n\t\t\t\t><div dojoAttachPoint=\"sliderHandle\" tabIndex=\"${tabIndex}\" class=\"dijitSliderMoveable dijitSliderMoveableH\" dojoAttachEvent=\"onmousedown:_onHandleClick\" role=\"slider\"\n\t\t\t\t\t><div class=\"dijitSliderImageHandle dijitSliderImageHandleH\"></div\n\t\t\t\t></div\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"progressBar,focusNode\" class=\"dijitSliderBar dijitSliderBarH dijitSliderProgressBar dijitSliderProgressBarH\" dojoAttachEvent=\"onmousedown:_onBarClick\"></div\n\t\t\t\t><div dojoAttachPoint=\"sliderHandleMax\" tabIndex=\"${tabIndex}\" class=\"dijitSliderMoveable dijitSliderMoveableH\" dojoAttachEvent=\"onmousedown:_onHandleClickMax\" role=\"slider\"\n\t\t\t\t\t><div class=\"dijitSliderImageHandle dijitSliderImageHandleH\"></div\n\t\t\t\t></div\n\t\t\t\t><div role=\"presentation\" dojoAttachPoint=\"remainingBar\" class=\"dijitSliderBar dijitSliderBarH dijitSliderRemainingBar dijitSliderRemainingBarH\" dojoAttachEvent=\"onmousedown:_onRemainingBarClick\"></div\n\t\t\t></div\n\t\t></td\n\t\t><td class=\"dijitReset\"\n\t\t\t><div class=\"dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderRightBumper\" dojoAttachEvent=\"onmousedown:_onClkIncBumper\"></div\n\t\t></td\n\t\t><td class=\"dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH\"\n\t\t\t><div class=\"dijitSliderIncrementIconH\" tabIndex=\"-1\" style=\"display:none\" dojoAttachPoint=\"incrementButton\"><span class=\"dijitSliderButtonInner\">+</span></div\n\t\t></td\n\t></tr\n\t><tr class=\"dijitReset\"\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\n\t\t><td dojoAttachPoint=\"containerNode,bottomDecoration\" class=\"dijitReset dijitSliderDecoration dijitSliderDecorationB dijitSliderDecorationH\"></td\n\t\t><td class=\"dijitReset\" colspan=\"2\"></td\n\t></tr\n></table>\n","url:esri/dijit/templates/TimeSlider.html":"   <div class=\"esriTimeSlider\">\r\n   <table width=\"100%\" cellspacing=\"0\" cellpadding=\"0\" border=\"0\">\r\n   <tr>\r\n   <td align=\"right\" valign=\"middle\"><button dojoType=\"dijit.form.Button\" showLabel=\"false\" iconClass=\"tsButton tsPlayButton\" dojoAttachEvent=\"onClick:_onPlay\" dojoAttachPoint=\"playPauseBtn\" type=\"button\">${NLS_play}</button></td>\r\n   <td align=\"center\" valign=\"middle\" width=\"80%\" class=\"tsTmp\"></td>\r\n   <td align=\"left\" valign=\"middle\" width=\"30\"><button dojoType=\"dijit.form.Button\" showLabel=\"false\" iconClass=\"tsButton tsPrevButton\" dojoAttachEvent=\"onClick:_onPrev\" dojoAttachPoint=\"previousBtn\" type=\"button\">${NLS_previous}</button></td>\r\n   <td align=\"left\" valign=\"middle\"><button dojoType=\"dijit.form.Button\" showLabel=\"false\" iconClass=\"tsButton tsNextButton\" dojoAttachEvent=\"onClick:_onNext\" dojoAttachPoint=\"nextBtn\" type=\"button\">${NLS_next}</button></td>\r\n   </tr>    \r\n   </table>\r\n   </div>"}});define("esri/dijit/TimeSlider",["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/kernel","dojo/has","dojo/query","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dijit/_Widget","dijit/_Templated","dijit/form/HorizontalSlider","dijit/form/HorizontalRule","dijit/form/HorizontalRuleLabels","dojox/timing/_base","dojox/form/RangeSlider","dojo/text!dojox/form/resources/HorizontalRangeSlider.html","esri/kernel","esri/lang","esri/TimeExtent","esri/dijit/_EventedWidget","dojo/text!esri/dijit/templates/TimeSlider.html","dojo/i18n!esri/nls/jsapi"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18){var TS=_2([_16,_b,_c],{declaredClass:"esri.dijit.TimeSlider",widgetsInTemplate:true,templateString:_17,basePath:_1.toUrl("esri/dijit")+"/",_slideDuration:1000,_defaultCount:10,_eventMap:{"time-extent-change":true,"play":true,"pause":true,"next":true,"previous":true},constructor:function(_19,_1a){_3.mixin(this,_18.widgets.timeSlider);this._iconClass="tsButton tsPlayButton";this.playing=false;this.loop=false;this.thumbCount=1;this.thumbMovingRate=1000;this._createTimeInstants=false;this._options=_3.mixin({excludeDataAtTrailingThumb:false,excludeDataAtLeadingThumb:false},_19.options||{});},startup:function(){this.inherited(arguments);this._timer=new _10.Timer();this._timer.setInterval(this.thumbMovingRate);this._timer.onTick=_3.hitch(this,"_bumpSlider",1);this._createSlider();},destroy:function(){this._timer.stop();this._timer=null;this.timeStops=null;this._slider.destroy();this._slider=null;if(this._hTicks){this._hTicks.destroyRecursive();this._hTicks=null;}if(this._hLabels){this._hLabels.destroyRecursive();this._hLabels=null;}this.inherited(arguments);},onTimeExtentChange:function(){},onPlay:function(){},onPause:function(){},onNext:function(){},onPrevious:function(){},_onHorizontalChange:function(){var _1b=this._sliderToTimeExtent();this.onTimeExtentChange(_1b);},_onPlay:function(){this.playing=!this.playing;this._updateUI();if(this.playing){this._timer.start();this.onPlay(this._sliderToTimeExtent());}else{this._timer.stop();this.onPause(this._sliderToTimeExtent());}var val=this._getSliderValue();this._offset=_3.isArray(val)?(val[1]-val[0]):0;},_onNext:function(){if(!this.playing){this._bumpSlider(1);this.onNext(this._sliderToTimeExtent());}},_onPrev:function(){if(!this.playing){this._bumpSlider(-1);this.onPrevious(this._sliderToTimeExtent());}},createTimeStopsByCount:function(_1c,_1d){if(!_1c||!_1c.startTime||!_1c.endTime){console.log(this.NLS_invalidTimeExtent);return;}_1d=_1d||this._defaultCount;var _1e=Math.ceil((_1c.endTime-_1c.startTime)/(_1d-1));this.createTimeStopsByTimeInterval(_1c,_1e,"esriTimeUnitsMilliseconds");},createTimeStopsByTimeInterval:function(_1f,_20,_21,_22){if(!_1f||!_1f.startTime||!_1f.endTime){console.log(this.NLS_invalidTimeExtent);return;}this.fullTimeExtent=new _15(_1f.startTime,_1f.endTime);if(_22&&_22.resetStartTime===true){this._resetStartTime(this.fullTimeExtent,_21);}this._timeIntervalUnits=_21;var te=this.fullTimeExtent.startTime;var _23=[];while(te<=_1f.endTime){_23.push(te);te=_1f._getOffsettedDate(te,_20,_21);}if(_23.length>0&&_23[_23.length-1]<_1f.endTime){_23.push(te);}this.setTimeStops(_23);},getCurrentTimeExtent:function(){return this._sliderToTimeExtent();},setTimeStops:function(_24){this.timeStops=_24||[];this._numStops=this.timeStops.length;this._numTicks=this._numStops;if(_14.isDefined(this.fullTimeExtent)===false){this.fullTimeExtent=new _15(_24[0],_24[_24.length-1]);}},setLoop:function(_25){this.loop=_25;},setThumbCount:function(_26){this.thumbCount=_26;this.singleThumbAsTimeInstant(this._createTimeInstants);if(this._slider){this._createSlider();}},setThumbIndexes:function(_27){this.thumbIndexes=_3.clone(_27)||[0,1];this._initializeThumbs();},setThumbMovingRate:function(_28){this.thumbMovingRate=_28;if(this._timer){this._timer.setInterval(this.thumbMovingRate);}},setLabels:function(_29){this.labels=_29;if(this._slider){this._createSlider();}},setTickCount:function(_2a){this._numTicks=_2a;if(this._slider){this._createSlider();}},singleThumbAsTimeInstant:function(_2b){this._createTimeInstants=(_2b&&this.thumbCount===1);},next:function(){this._onNext();},pause:function(){this.playing=false;this._updateUI();this._timer.stop();},play:function(){if(this.playing===true){return;}this.playing=false;this._onPlay();},previous:function(){this._onPrev();},_updateUI:function(){_8.remove(this.playPauseBtn.iconNode,this._iconClass);this._iconClass=this.playing?"tsButton tsPauseButton":"tsButton tsPlayButton";_8.add(this.playPauseBtn.iconNode,this._iconClass);this.previousBtn.set("disabled",this.playing);this.nextBtn.set("disabled",this.playing);},_createSlider:function(){if(this._slider){this._slider.destroy();this._slider=null;}var _2c=this.domNode;while(_2c.parentNode&&!_2c.dir){_2c=_2c.parentNode;}var _2d={onChange:_3.hitch(this,"_onHorizontalChange"),showButtons:false,discreteValues:this._numStops,slideDuration:this._slideDuration,"class":"ts",dir:_2c.dir};this._ts=_9.create("div",{},_5.query(".tsTmp",this.domNode)[0],"first");this._timeSliderTicks=_9.create("div",{},this._ts,"first");this._timeSliderLabels=_9.create("div",{},this._ts);if(this.thumbCount===2){this._createRangeSlider(_2d);}else{this._createSingleSlider(_2d);}this.thumbIndexes=this.thumbIndexes||[0,1];this._createHorizRule();this._createLabels();if(this._createTimeInstants===true){_5.query(".dijitSliderProgressBarH, .dijitSliderLeftBumper, .dijitSliderRightBumper").forEach(function(_2e){_a.set(_2e,{background:"none"});});}this._initializeThumbs();_4.disconnect(this._onChangeConnect);this._onChangeConnect=_4.connect(this._slider,"onChange",_3.hitch(this,"_updateThumbIndexes"));},_createRangeSlider:function(_2f){this._isRangeSlider=true;var _30=_2([_d,_11],{templateString:_12});this._slider=new _30(_2f,this._ts);},_createSingleSlider:function(_31){this._isRangeSlider=false;this._slider=new _d(_31,this._ts);},_createHorizRule:function(){if(this._hTicks){this._hTicks.destroyRecursive();this._hTicks=null;}if(this._numTicks<2){return;}this._hTicks=new _e({container:"topDecoration",ruleStyle:"","class":"tsTicks",count:this._numTicks},this._timeSliderTicks);},_createLabels:function(){if(this._hLabels){this._hLabels.destroyRecursive();this._hLabels=null;}if(this.labels&&this.labels.length>0){this._hLabels=new _f({labels:this.labels,labelStyle:"","class":"tsLabels"},this._timeSliderLabels);}},_initializeThumbs:function(){if(!this._slider){return;}this._offset=this._toSliderValue(this.thumbIndexes[1])||0;var t1=this._toSliderValue(this.thumbIndexes[0]);t1=(t1>this._slider.maximum||t1<this._slider.minimum)?this._slider.minimum:t1;if(this._isRangeSlider===true){var t2=this._toSliderValue(this.thumbIndexes[1]);t2=(t2>this._slider.maximum||t2<this._slider.minimum)?this._slider.maximum:t2;t2=t2<t1?t1:t2;this._setSliderValue([t1,t2]);}else{this._setSliderValue(t1);}this._onHorizontalChange();},_bumpSlider:function(dir){var val=this._getSliderValue();var max=val,min=max;var _32=dir;if(_3.isArray(val)){min=val[0];max=val[1];_32=[{"change":dir,"useMaxValue":true},{"change":dir,"useMaxValue":false}];}if((Math.abs(min-this._slider.minimum)<1e-10&&dir<0)||(Math.abs(max-this._slider.maximum)<1e-10&&dir>0)){if(this._timer.isRunning){if(this.loop){this._timer.stop();this._setSliderValue(this._getSliderMinValue());var _33=this._sliderToTimeExtent();this.onTimeExtentChange(_33);this._timer.start();this.playing=true;}else{this.pause();}}}else{this._slider._bumpValue(_32);}},_updateThumbIndexes:function(){var val=this._getSliderValue();if(_3.isArray(val)){this.thumbIndexes[0]=this._toSliderIndex(val[0]);this.thumbIndexes[1]=this._toSliderIndex(val[1]);}else{this.thumbIndexes[0]=this._toSliderIndex(val);}},_sliderToTimeExtent:function(){if(!this.timeStops||this.timeStops.length===0){return;}var _34=new _15();var val=this._getSliderValue();if(_3.isArray(val)){_34.startTime=new Date(this.timeStops[this._toSliderIndex(val[0])]);_34.endTime=new Date(this.timeStops[this._toSliderIndex(val[1])]);this._adjustTimeExtent(_34);}else{_34.startTime=(this._createTimeInstants===true)?new Date(this.timeStops[this._toSliderIndex(val)]):new Date(this.fullTimeExtent.startTime);_34.endTime=(this._createTimeInstants===true)?_34.startTime:new Date(this.timeStops[this._toSliderIndex(val)]);}return _34;},_adjustTimeExtent:function(_35){if(this._options.excludeDataAtTrailingThumb===false&&this._options.excludeDataAtLeadingThumb===false){return;}if(_35.startTime.getTime()===_35.endTime.getTime()){return;}if(this._options.excludeDataAtTrailingThumb){var _36=_35.startTime;_36.setUTCSeconds(_36.getUTCSeconds()+1);}if(this._options.excludeDataAtLeadingThumb){var _37=_35.endTime;_37.setUTCSeconds(_37.getUTCSeconds()-1);}},_resetStartTime:function(_38,_39){switch(_39){case "esriTimeUnitsSeconds":_38.startTime.setUTCMilliseconds(0);break;case "esriTimeUnitsMinutes":_38.startTime.setUTCSeconds(0,0,0);break;case "esriTimeUnitsHours":_38.startTime.setUTCMinutes(0,0,0);break;case "esriTimeUnitsDays":_38.startTime.setUTCHours(0,0,0,0);break;case "esriTimeUnitsWeeks":_38.startTime.setUTCDate(_38.startTime.getUTCDate()-_38.startTime.getUTCDay());break;case "esriTimeUnitsMonths":_38.startTime.setUTCDate(1);_38.startTime.setUTCHours(0,0,0,0);break;case "esriTimeUnitsDecades":_38.startTime.setUTCFullYear(_38.startTime.getUTCFullYear()-(_38.startTime.getUTCFullYear()%10));break;case "esriTimeUnitsCenturies":_38.startTime.setUTCFullYear(_38.startTime.getUTCFullYear()-(_38.startTime.getUTCFullYear()%100));break;}},_getSliderMinValue:function(){if(this._isRangeSlider){return [this._slider.minimum,this._slider.minimum+this._offset];}else{return this._slider.minimum;}},_toSliderIndex:function(val){var idx=Math.floor((val-this._slider.minimum)*this._numStops/(this._slider.maximum-this._slider.minimum));if(idx<0){idx=0;}if(idx>=this._numStops){idx=this._numStops-1;}return idx;},_toSliderValue:function(val){return val*(this._slider.maximum-this._slider.minimum)/(this._numStops-1)+this._slider.minimum;},_getSliderValue:function(){return this._slider.get("value");},_setSliderValue:function(val){this._slider._setValueAttr(val,false,false);}});if(_6("extend-esri")){_3.setObject("dijit.TimeSlider",TS,_13);}return TS;});