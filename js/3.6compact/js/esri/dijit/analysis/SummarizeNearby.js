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
require({cache:{"url:esri/dijit/analysis/templates/SummarizeNearby.html":"<div class=\"esriAnalysis\">\r\n    <div data-dojo-type=\"dijit/layout/ContentPane\" style=\"margin-top:0.5em; margin-bottom: 0.5em;\">\r\n      <div data-dojo-attach-point=\"_aggregateToolContentTitle\" class=\"analysisTitle\">\r\n        <table class=\"esriFormTable\" > \r\n          <tr>\r\n            <td class=\"esriToolIconTd\"><div class=\"sumNearbyIcon\"></div></td>\r\n            <td class=\"esriAlignLeading\">${i18n.summarizeNearby}</td>\r\n            <td>\r\n              <div class=\"esriFloatTrailing\" style=\"padding:0;\">\r\n                  <a href=\"#\" class='esriFloatLeading helpIcon' esriHelpTopic=\"toolDescription\"></a>\r\n                  <a href=\"#\" data-dojo-attach-point=\"_closeBtn\" title=\"${i18n.close}\" class=\"closeIcon\">              \r\n                  <img data-dojo-attach-point=\"_closeImg\" border=\"0\"/></a>            \r\n              </div>                \r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n      <div style=\"clear:both; border-bottom: #333 thin solid; height:1px;width:100%;\"></div>\r\n    </div>\r\n    <div data-dojo-type=\"dijit/form/Form\" data-dojo-attach-point=\"_form\" readOnly=\"true\">\r\n       <table class=\"esriFormTable\"  data-dojo-attach-point=\"_aggregateTable\"  style=\"border-collapse:collapse;border-spacing:5px;\" cellpadding=\"5px\" cellspacing=\"5px\"> \r\n         <tbody>\r\n          <tr>\r\n            <td  colspan=\"3\" class=\"sectionHeader\" data-dojo-attach-point=\"_aggregateToolDescription\" >${i18n.summarizeDefine}</td>\r\n          </tr>      \r\n          <tr>\r\n            <td colspan=\"3\">\r\n              <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.oneLabel}</label>\r\n              <label class=\"\">${i18n.chooseSummarizeLabel}</label>\r\n              <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"Summarize\"></a>\r\n              <select class=\"longInput esriLeadingMargin1\"  style=\"margin-top:1.0em;\" data-dojo-type=\"dijit/form/Select\" data-dojo-attach-point=\"_layersSelect\" data-dojo-attach-event=\"onChange:_handleLayerChange\"></select>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n          <tr>\r\n            <td colspan=\"3\" class=\"clear\"></td>\r\n          </tr>\r\n            \r\n          <tr>\r\n            <td colspan=\"2\">\r\n              <label data-dojo-attach-point=\"_labelOne\" class=\"esriFloatLeading esriTrailingMargin025 \">${i18n.twoLabel}</label>\r\n              <label data-dojo-attach-point=\"_measurelabel\" class=\"\">${i18n.findNearLabel}</label>\r\n            </td>\r\n            <td class=\"shortTextInput\">\r\n              <a href=\"#\" class='esriFloatTrailing helpIcon' data-dojo-attach-point=\"_analysisFieldHelpLink\" esriHelpTopic=\"BufferOption\"></a>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"padding:0.25em;width:34%\">\r\n              <div class=\"esriLeadingMargin1 bufferSelector selected\" data-dojo-attach-point=\"_straightLine\" >\r\n                <div class=\"bufferIcon esriStraightLineDistanceIcon\"></div>\r\n                <div><label class=\"esriFloatLeading esriTrailingMargin1 esriSelectLabel\">${i18n.straightLineDistance}</label></div>\r\n              </div>\r\n            </td>\r\n            <td style=\"padding:0.25em;width:33%\">\r\n              <div class=\"bufferSelector\" data-dojo-attach-point=\"_drivingDistance\">\r\n                <div class=\"bufferIcon esriDrivingDistanceIcon\"></div>\r\n                <div><label data-dojo-attach-point=\"_drivingDistanceLabel\" class=\"esriFloatLeading esriTrailingMargin1 esriSelectLabel\">${i18n.drivingDistance}</label></div>\r\n              </div>\r\n            </td>\r\n            <td style=\"esriTrailingMargin2 padding:0.25em;width:33%\">\r\n              <div class=\"bufferSelector\" data-dojo-attach-point=\"_drivingTime\" >\r\n                <div class=\"bufferIcon esriDrivingTimeIcon\"></div>\r\n                <div><label data-dojo-attach-point=\"_drivingTimeLabel\" class=\"esriFloatLeading esriSelectLabel\">${i18n.drivingTime}</label></div>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"padding-right:0;padding-bottom:0;width:20%;\">\r\n              <input type=\"text\" data-dojo-type=\"dijit/form/ValidationTextBox\" data-dojo-attach-event=\"onChange:_handleDistUnitsChange\" data-dojo-props=\"intermediateChanges:true,value:'5',required:true,missingMessage:'${i18n.distanceMsg}'\" data-dojo-attach-point=\"_breakValuesInput\" class=\"esriLeadingMargin1\"  style=\"width:75%;\">\r\n            </td>\r\n            <td colspan=\"2\" style=\"padding-left:0.25em;padding-bottom:0;width:60%;\">\r\n              <select class=\"mediumInput esriAnalysisSelect\" data-dojo-type=\"dijit/form/Select\" data-dojo-attach-event=\"onChange:_handleDistUnitsChange\" data-dojo-attach-point=\"_distanceUnitsSelect\" style=\"width:85%;table-layout:fixed;\">\r\n                <option value=\"Seconds\">${i18n.seconds}</option>\r\n                <option value=\"Minutes\" selected=\"selected\">${i18n.minutes}</option>\r\n                <option value=\"Hours\">${i18n.hours}</option>\r\n              </select>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"padding:0\" colspan=\"3\">\r\n              <div class=\"esriLeadingMargin1\">\r\n                <label class=\"esriSmallLabel\">${i18n.measureHelp}</label>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr data-dojo-attach-point=\"_useTrafficRow\">\r\n            <td style=\"padding:0\" colspan=\"3\">\r\n              <div style=\"width:100%;\" data-dojo-type=\"esri/dijit/analysis/TrafficTime\" data-dojo-attach-point=\"_trafficTimeWidget\"></div>\r\n            </td>\r\n          </tr>          \r\n          <tr>\r\n            <td colspan=\"3\" class=\"clear\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"3\">\r\n              <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.threeLabel}</label>\r\n              <label class=\"longTextInput\" data-dojo-attach-point=\"_addStatsLabel\"></label>\r\n              <a href=\"#\" class='esriFloatTrailing helpIcon' data-dojo-attach-point=\"_addStatsHelpLink\" esriHelpTopic=\"AddStatisticsFrom\"></a>\r\n            </td>\r\n          </tr>\r\n         <tr>\r\n           <td colspan=\"3\">\r\n              <label class=\"esriLeadingMargin1\">\r\n                <div class=\"esriLeadingMargin1\" data-dojo-type=\"dijit/form/CheckBox\"  data-dojo-attach-point=\"_sumMetricCheck\" data-dojo-props=\"checked:'true', disabled:'true'\"></div>\r\n                <label data-dojo-attach-point=\"_sumMetricLabel\"></label>\r\n              </label>\r\n           </td>\r\n         </tr>\r\n         <tr>\r\n           <td colspan=\"3\" style=\"padding-top: 0\">\r\n              <select class=\"longInput esriLongLabel esriLeadingMargin1\" data-dojo-type=\"dijit.form.Select\"  data-dojo-props=\"style:{width:'85%', tableLayout: 'fixed', overflowX:'hidden'}\" data-dojo-attach-point=\"_shapeUnitsSelect\"></select>\r\n           </td>\r\n         </tr>         \r\n         <!--<tr>\r\n           <td colspan=\"3\">\r\n              <label class=\"longTextInput\">\r\n                <div data-dojo-type=\"dijit/form/CheckBox\" data-dojo-attach-point=\"_addStatesCheck\" data-dojo-attach-event=\"onChange:_handleStatsCheckChange\" data-dojo-props=\"checked:'true'\"></div>\r\n                ${i18n.addStatsLabel}                \r\n              </label>\r\n              <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"KeepBoundaryNoPoints\"></a>\r\n           </td>           \r\n          </tr>-->           \r\n          <tr data-dojo-attach-point=\"_afterStatsRow\">\r\n            <td colspan=\"3\" class=\"clear\"></td>\r\n          </tr>\r\n          \r\n          <tr>\r\n            <td colspan=\"2\">\r\n              <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.fourLabel}</label>\r\n              <label class=\"longTextInput\"  data-dojo-attach-point=\"_groupByLabel\">${i18n.groupByLabel}</label>\r\n            </td>\r\n            <td class=\"shortTextInput\">\r\n              <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"GroupBy\"></a> \r\n            </td>             \r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"3\">\r\n              <select class=\"longInput\" data-dojo-type=\"dijit.form.Select\"  data-dojo-attach-point=\"_groupBySelect\"></select>\r\n            </td>                \r\n          </tr>         \r\n          <tr>\r\n            <td colspan=\"3\" class=\"clear\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"2\">\r\n              <label class=\"esriFloatLeading esriTrailingMargin025\">${i18n.fiveLabel}</label>\r\n              <label class=\"longTextInput\">${i18n.outputLayerLabel}</label>\r\n            </td>\r\n            <td class=\"shortTextInput\">\r\n              <a href=\"#\" class='esriFloatTrailing helpIcon' esriHelpTopic=\"OutputName\"></a> \r\n            </td>             \r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"3\">\r\n              <input type=\"text\" data-dojo-type=\"dijit/form/ValidationTextBox\" class=\"esriLeadingMargin1 esriOutputText\"  data-dojo-props=\"required:true\" data-dojo-attach-point=\"_outputLayerInput\" value=\"\"></input>\r\n            </td>                \r\n          </tr> \r\n          <tr>\r\n            <td colspan=\"3\">\r\n               <div class=\"esriLeadingMargin1\" data-dojo-attach-point=\"_chooseFolderRow\">\r\n                 <label style=\"width:9px;font-size:smaller;\">${i18n.saveResultIn}</label>\r\n                 <input class=\"longInput esriFolderSelect\" dojoAttachPoint=\"_webMapFolderSelect\" dojotype=\"dijit/form/ComboBox\" trim=\"true\"></input>\r\n               </div>              \r\n            </td>\r\n          </tr>                                      \r\n        </tbody>         \r\n       </table>\r\n     </div>\r\n    <div data-dojo-attach-point=\"_aggregateToolContentButtons\" style=\"padding:5px;margin-top:5px;border-top:solid 1px #BBB;\">\r\n      <div style=\"width:100%;padding:0.5em 0 0.5em 0\">\r\n        <a class=\"esriFloatTrailing esriSmallFont\"  href=\"#\" data-dojo-attach-point=\"_showCreditsLink\" data-dojo-attach-event=\"onclick:_handleShowCreditsClick\">${i18n.showCredits}</a>\r\n       <label data-dojo-attach-point=\"_chooseExtentDiv\"class=\"esriSelectLabel\" style=\"font-size:smaller;\">\r\n         <input type=\"radio\" data-dojo-attach-point=\"_useExtentCheck\" data-dojo-type=\"dijit/form/CheckBox\" data-dojo-props=\"checked:true\" name=\"extent\" value=\"true\"/>\r\n           ${i18n.useMapExtent}\r\n       </label>\r\n      </div>\r\n      <button data-dojo-type=\"dijit/form/Button\" type=\"submit\" data-dojo-attach-point=\"_saveBtn\" class=\"esriLeadingMargin4\" data-dojo-attach-event=\"onClick:_handleSaveBtnClick\">\r\n          ${i18n.runAnalysis}\r\n      </button>\r\n    </div>\r\n    <div data-dojo-type=\"dijit/Dialog\" title=\"${i18n.creditTitle}\" data-dojo-attach-point=\"_usageDialog\" style=\"width:40em;\">\r\n      <div data-dojo-type=\"esri/dijit/analysis/CreditEstimator\"  data-dojo-attach-point=\"_usageForm\"></div>\r\n    </div>    \r\n\r\n</div>\r\n"}});define("esri/dijit/analysis/SummarizeNearby",["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/i18n","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/ComboBox","esri/kernel","esri/lang","esri/dijit/analysis/AnalysisBase","esri/dijit/analysis/CreditEstimator","esri/dijit/analysis/utils","esri/dijit/analysis/TrafficTime","dojo/text!esri/dijit/analysis/templates/SummarizeNearby.html"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b,_c,_d,_e,_f,_10,_11,_12,_13,_14,_15,_16,_17,_18,_19,_1a,_1b,_1c,_1d,_1e,_1f,_20,_21,_22,_23,_24,_25){var _26=_2([_11,_12,_13,_14,_15,_21],{declaredClass:"esri.dijit.analysis.SummarizeNearby",templateString:_25,basePath:_1.toUrl("esri/dijit/analysis"),widgetsInTemplate:true,sumNearbyLayer:null,summaryLayers:null,summaryFields:null,outputLayerName:null,summarizeMetric:true,summaryLayer:null,groupByField:null,breakValues:null,showSelectFolder:false,showChooseExtent:true,_isDrivingSelectionEnabled:true,showHelp:true,showCredits:true,i18n:null,toolName:"SummarizeNearby",helpFileName:"SummarizeNearby",resultParameter:"resultLayer",constructor:function(_27){this.inherited(arguments);this._pbConnects=[];this._statsRows=[];if(_27.containerNode){this.container=_27.containerNode;}},destroy:function(){this.inherited(arguments);_4.forEach(this._pbConnects,_5.disconnect);delete this._pbConnects;},postMixInProperties:function(){this.inherited(arguments);_3.mixin(this.i18n,_8.getLocalization("esri","jsapi").bufferTool);_3.mixin(this.i18n,_8.getLocalization("esri","jsapi").driveTimes);_3.mixin(this.i18n,_8.getLocalization("esri","jsapi").summarizeNearbyTool);},postCreate:function(){this.inherited(arguments);_f.add(this._form.domNode,"esriSimpleForm");_c.set(this._closeImg,"src",this.basePath+"/images/close.gif");this._breakValuesInput.set("validator",_3.hitch(this,this.validateDistance));this._outputLayerInput.set("validator",_3.hitch(this,this.validateServiceName));this.breakValues=[];this.breakValues.push(this._breakValuesInput.get("value"));this._buildUI();},startup:function(){},_onClose:function(_28){if(_28){this._save();this.onSave();}this.onClose();},_handleShowCreditsClick:function(e){e.preventDefault();if(!this._form.validate()){return;}var _29={},_2a={},_2b;_2b=this.summaryLayers[this._layersSelect.get("value")];_29.summaryLayer=_6.toJson(_23.constructAnalysisInputLyrObj(_2b));_29.nearType=this.get("nearType");_29.sumNearbyLayer=_6.toJson(_23.constructAnalysisInputLyrObj(this.sumNearbyLayer));_29.summaryFields=_6.toJson(this.get("aggregateFields"));_29.distances=_6.toJson(this.get("breakValues"));_29.units=this._distanceUnitsSelect.get("value");if(this._trafficTimeWidget.get("checked")){_29.TimeOfDay=this._trafficTimeWidget.get("timeOfDay");}_29.OutputName=_6.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}});_29.sumShape=this._sumMetricCheck.get("checked");if(_2b.geometryType!=="esriGeometryPoint"){_29.shapeUnits=this._shapeUnitsSelect.get("value");}if(this._groupBySelect.get("value")!=="0"){_29.groupByField=this._groupBySelect.get("value");}if(this.showChooseExtent){if(this._useExtentCheck.get("checked")){_29.context=_6.toJson({extent:this.map.extent});}}this.getCreditsEstimate(this.toolName,_29).then(_3.hitch(this,function(_2c){this._usageForm.set("content",_2c);this._usageDialog.show();}));},_handleSaveBtnClick:function(){if(!this._form.validate()){return;}this._saveBtn.set("disabled",true);var _2d={},_2e={},_2f;_2f=this.summaryLayers[this._layersSelect.get("value")];_2d.summaryLayer=_6.toJson(_23.constructAnalysisInputLyrObj(_2f));_2d.nearType=this.get("nearType");_2d.sumNearbyLayer=_6.toJson(_23.constructAnalysisInputLyrObj(this.sumNearbyLayer));_2d.summaryFields=_6.toJson(this.get("aggregateFields"));_2d.distances=this.get("breakValues");_2d.units=this._distanceUnitsSelect.get("value");if(this._trafficTimeWidget.get("checked")){_2d.TimeOfDay=this._trafficTimeWidget.get("timeOfDay");}_2d.OutputName=_6.toJson({serviceProperties:{name:this._outputLayerInput.get("value")}});_2d.sumShape=this._sumMetricCheck.get("checked");if(_2f.geometryType!=="esriGeometryPoint"){_2d.shapeUnits=this._shapeUnitsSelect.get("value");}if(this._groupBySelect.get("value")!=="0"){_2d.groupByField=this._groupBySelect.get("value");}if(this.showChooseExtent){if(this._useExtentCheck.get("checked")){_2d.context=_6.toJson({extent:this.map.extent});}}_2e.jobParams=_2d;this._saveBtn.set("disabled",false);_2e.itemParams={"description":_a.substitute(this.i18n.itemDescription,{sumNearbyLayerName:this.sumNearbyLayer.name,summaryLayerName:_2f.name}),"tags":_a.substitute(this.i18n.itemTags,{sumNearbyLayerName:this.sumNearbyLayer.name,summaryLayerName:_2f.name}),"snippet":this.i18n.itemSnippet};if(this.showSelectFolder){_2e.itemParams.folder=this._webMapFolderSelect.item?this.folderStore.getValue(this._webMapFolderSelect.item,"id"):"";}console.log(_2e);this.execute(_2e);},_initializeShapeUnits:function(_30){if(this._prevGeometryType&&this._prevGeometryType===_30){return;}this._shapeUnitsSelect.removeOption(this._shapeUnitsSelect.getOptions());_b.set(this._shapeUnitsSelect.domNode,"display",(_30==="esriGeometryPoint"?"none":""));if(_30==="esriGeometryPolygon"){this._shapeUnitsSelect.addOption([{value:"SquareMiles",label:this.i18n.sqMiles},{value:"SquareKilometers",label:this.i18n.sqKm},{value:"SquareMeters",label:this.i18n.sqMeters},{value:"Hectares",label:this.i18n.hectares},{value:"Acres",label:this.i18n.acres}]);}else{if(_30==="esriGeometryPolyline"){_b.set(this._shapeUnitsSelect.domNode,"width","39%");this._shapeUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters},{value:"Yards",label:this.i18n.yards}]);}}this._prevGeometryType=_30;},_handleLayerChange:function(_31){var _32=this.summaryLayers[_31];this.outputLayerName=_a.substitute(this.i18n.outputLayerName,{summaryLayerName:_32.name,sumNearbyLayerName:this.sumNearbyLayer.name});this._outputLayerInput.set("value",this.outputLayerName);_c.set(this._addStatsLabel,"innerHTML",_a.substitute(this.i18n.addStats,{summaryLayerName:_32.name}));this._initializeShapeUnits(_32.geometryType);if(_32.geometryType==="esriGeometryPolygon"){_c.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoly);_c.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPolygon");}if(_32.geometryType==="esriGeometryPoint"){_c.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoint);_c.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPoint");}if(_32.geometryType==="esriGeometryPolyline"){_c.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricLine);_c.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsLine");}this.set("groupBySelect",this.groupByField);this._removeStatsRows();this._createStatsRow();},_handleAttrSelectChange:function(_33){var _34,_35,obj;if(_33!=="0"){_34=this.get("statisticSelect");if(_34.get("value")!=="0"){if(!_34.get("isnewRowAdded")){_35=_34.get("removeTd");_b.set(_35,"display","block");obj=_34.get("referenceWidget");_3.hitch(obj,obj._createStatsRow());obj._sumMetricCheck.set("disabled",false);_34.set("isnewRowAdded",true);}}}},_handleStatsValueUpdate:function(_36,_37,_38){var _39,_3a,obj;if(!this.get("attributeSelect")){return;}_39=this.get("attributeSelect");if(_39.get("value")!=="0"&&_38!=="0"){if(!this.get("isnewRowAdded")){_3a=this.get("removeTd");_b.set(_3a,"display","block");obj=this.get("referenceWidget");_3.hitch(obj,obj._createStatsRow());obj._sumMetricCheck.set("disabled",false);this.set("isnewRowAdded",true);}}},_handleDistUnitsChange:function(_3b){this.set("outputLayerName");},_handleDistanceTypeChange:function(_3c){this.set("nearType",_3c);_f.remove(this._straightLine,"selected");_f.remove(this._drivingTime,"selected");_f.remove(this._drivingDistance,"selected");if(_3c){_f.add((_3c==="time")?this._drivingTime:((_3c==="distance")?this._drivingDistance:this._straightLine),"selected");_b.set(this._useTrafficRow,"display",_3c==="time"?"":"none");this._trafficTimeWidget.set("disabled",_3c!=="time");this._trafficTimeWidget.set("reset",_3c!=="time");}if(_3c==="time"){this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions());this._distanceUnitsSelect.addOption([{value:"Seconds",label:this.i18n.seconds},{value:"Minutes",label:this.i18n.minutes,selected:"selected"},{value:"Hours",label:this.i18n.hours}]);}else{this._distanceUnitsSelect.removeOption(this._distanceUnitsSelect.getOptions());this._distanceUnitsSelect.addOption([{value:"Miles",label:this.i18n.miles},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]);}this.set("outputLayerName");},_save:function(){},_buildUI:function(){_23.initHelpLinks(this.domNode,this.showHelp);if(this.sumNearbyLayer){console.log(this.sumNearbyLayer.name);_c.set(this._aggregateToolDescription,"innerHTML",_a.substitute(this.i18n.summarizeDefine,{sumNearbyLayerName:this.sumNearbyLayer.name}));if(this.sumNearbyLayer.geometryType!=="esriGeometryPoint"){this._isDrivingSelectionEnabled=false;_f.add(this._drivingTime,"disabled");_f.add(this._drivingDistance,"disabled");_f.remove(this._drivingDistanceLabel,"esriSelectLabel");_f.remove(this._drivingTimeLabel,"esriSelectLabel");}}this._loadConnections();this._handleDistanceTypeChange("line");if(this.summaryLayers){_4.forEach(this.summaryLayers,function(_3d,_3e){if(_3d!==this.sumNearbyLayer){this._layersSelect.addOption({value:_3e,label:_3d.name});if(!this.outputLayerName){this.outputLayerName=_a.substitute(this.i18n.outputLayerName,{summaryLayerName:_3d.name,sumNearbyLayerName:this.sumNearbyLayer.name});_c.set(this._addStatsLabel,"innerHTML",_a.substitute(this.i18n.addStats,{summaryLayerName:_3d.name}));this._initializeShapeUnits(_3d.geometryType);if(_3d.geometryType==="esriGeometryPolygon"){_c.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoly);_c.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPolygon");}if(_3d.geometryType==="esriGeometryPoint"){_c.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricPoint);_c.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsPoint");}if(_3d.geometryType==="esriGeometryPolyline"){_c.set(this._sumMetricLabel,"innerHTML",this.i18n.summarizeMetricLine);_c.set(this._addStatsHelpLink,"esriHelpTopic","StatisticsLine");}}}},this);}if(this.outputLayerName){this._outputLayerInput.set("value",this.outputLayerName);}this._sumMetricCheck.set("checked",this.summarizeMetric);if(this.summaryLayer){this._layersSelect.set();}this._createStatsRow();_4.forEach(this.aggregateFields,function(_3f){var _40=_3f.split(" ");this._currentAttrSelect.set("value",_40[0]);_3.hitch(this._currentAttrSelect,this._handleAttrSelectChange,_40[0])();this._currentStatsSelect.set("value",_40[1]);_3.hitch(this._currentStatsSelect,this._handleStatsValueUpdat,"value","",_40[1])();},this);_b.set(this._chooseFolderRow,"display",this.showSelectFolder===true?"block":"none");if(this.showSelectFolder){this.getFolderStore().then(_3.hitch(this,function(_41){this.folderStore=_41;this._webMapFolderSelect.set("store",_41);this._webMapFolderSelect.set("value",this.portalUser.username);}));}_b.set(this._chooseExtentDiv,"display",this.showChooseExtent===true?"block":"none");this.set("groupBySelect",this.groupByField);},validateDistance:function(){var _42=this,val,_43=[],_44;_44=_f.contains(this._drivingTime,"selected")?"time":"distance";this.set("breakValues");val=_3.trim(this._breakValuesInput.get("value")).split(" ");if(val.length===0){return false;}_4.forEach(val,function(v){v=_10.parse(v);if(isNaN(v)){_43.push(0);return false;}var _45=_10.format(v,{locale:"en-us"}),_46=_3.trim(_45).match(/\D/g);if(_46){_4.forEach(_46,function(m){if(m==="."||m===","){_43.push(1);}else{if(m==="-"&&_42.inputType==="polygon"){_43.push(1);}else{_43.push(0);}}});}});if(_4.indexOf(_43,0)!==-1){return false;}return true;},_loadConnections:function(){this._connect(this,"onExecute",_3.hitch(this,"_onClose",false));this._connect(this._closeBtn,"onclick",_3.hitch(this,"_onClose",false));if(this._isDrivingSelectionEnabled){_5.connect(this._drivingDistance,"onclick",_3.hitch(this,"_handleDistanceTypeChange","distance"));_5.connect(this._drivingTime,"onclick",_3.hitch(this,"_handleDistanceTypeChange","time"));_5.connect(this._straightLine,"onclick",_3.hitch(this,"_handleDistanceTypeChange","line"));}},_createStatsRow:function(){var _47,_48,_49,_4a,_4b,_4c,_4d,_4e;_4e=this.summaryLayers[this._layersSelect.get("value")];_47=_d.create("tr",null,this._afterStatsRow,"before");_49=_d.create("td",{style:{width:"45%",maxWidth:"100px"}},_47);_48=_d.create("td",{style:{width:"55%",maxWidth:"104px"}},_47);_4a=new _1a({maxHeight:200,"class":"esriLeadingMargin1 mediumInput esriTrailingMargin05 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},_d.create("select",null,_49));this.set("attributes",{selectWidget:_4a,summaryLayer:_4e});_4b=new _1a({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},_d.create("select",null,_48));this.set("statistics",{selectWidget:_4b});_4a.set("statisticSelect",_4b);_5.connect(_4a,"onChange",this._handleAttrSelectChange);_4d=_d.create("td",{"class":"shortTextInput removeTd",style:{"display":"none",maxWidth:"12px"}},_47);_4c=_d.create("a",{"title":this.i18n.removeAttrStats,"class":"closeIcon statsRemove","innerHTML":"<img src='"+this.basePath+"/images/close.gif"+"' border='0''/>"},_4d);_5.connect(_4c,"onclick",_3.hitch(this,this._handleRemoveStatsBtnClick,_47));this._statsRows.push(_47);_4b.set("attributeSelect",_4a);_4b.set("removeTd",_4d);_4b.set("isnewRowAdded",false);_4b.set("referenceWidget",this);_4b.watch("value",this._handleStatsValueUpdate);this._currentStatsSelect=_4b;this._currentAttrSelect=_4a;return true;},_handleRemoveStatsBtnClick:function(row){this._removeStatsRow(row);if(this.get("aggregateFields").length===0){this._sumMetricCheck.set("disabled",true);this._sumMetricCheck.set("checked",true);}},_removeStatsRows:function(){_4.forEach(this._statsRows,this._removeStatsRow,this);this._statsRows=[];},_removeStatsRow:function(row){_4.forEach(_16.findWidgets(row),function(w){w.destroyRecursive();});_d.destroy(row);},_setAnalysisGpServerAttr:function(url){this.analysisGpServer=url;this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName);},_setSumNearbyLayerAttr:function(_4f){this.sumNearbyLayer=_4f;},_setSummaryLayersAttr:function(_50){console.log("inside polygn",_50);this.summaryLayers=_50;},_setLayersAttr:function(_51){console.log("maplayers ",_51);this.summaryLayers=[];},_setAttributesAttr:function(_52){if(!_52.summaryLayer){return;}var _53,_54,_55;_53=_52.summaryLayer;_54=_52.selectWidget;_55=_53.fields;_54.addOption({value:"0",label:this.i18n.attribute});_4.forEach(_55,function(_56){if(_4.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],_56.type)!==-1){_54.addOption({value:_56.name,label:_20.isDefined(_56.alias)&&_56.alias!==""?_56.alias:_56.name});}},this);},_setStatisticsAttr:function(_57){var _58=_57.selectWidget;_58.addOption({value:"0",label:this.i18n.statistic});_58.addOption({value:"SUM",label:this.i18n.sum});_58.addOption({value:"MIN",label:this.i18n.minimum});_58.addOption({value:"MAX",label:this.i18n.maximum});_58.addOption({value:"MEAN",label:this.i18n.average});_58.addOption({value:"STDDEV",label:this.i18n.standardDev});},_setAggregateFieldsAttr:function(_59){this.aggregateFields=_59;},_getAggregateFieldsAttr:function(){var _5a="",_5b=[];_e(".statsSelect",this.domNode).forEach(function(_5c){var _5d,_5e;_5d=_16.byNode(_5c);_5e=_5d.get("attributeSelect");if(_5e.get("value")!=="0"&&_5d.get("value")!=="0"){_5a+=_5e.get("value")+" "+_5d.get("value")+";";_5b.push(_5e.get("value")+" "+_5d.get("value"));}});return _5b;},_setGroupBySelectAttr:function(_5f){var _60=this.summaryLayers[this._layersSelect.get("value")],_61=_60.fields;if(this._groupBySelect.getOptions().length>0){this._groupBySelect.removeOption(this._groupBySelect.getOptions());}this._groupBySelect.addOption({value:"0",label:this.i18n.attribute});_4.forEach(_61,function(_62,_63){if(_4.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate"],_62.type)!==-1){if(_62.name!==_60.objectIdField){this._groupBySelect.addOption({value:_62.name,label:_20.isDefined(_62.alias)&&_62.alias!==""?_62.alias:_62.name});}}},this);if(_5f){this._groupBySelect.set("value",_5f);}},_setDisableRunAnalysisAttr:function(_64){this._saveBtn.set("disabled",_64);},_setShowSelectFolderAttr:function(_65){this.showSelectFolder=_65;},_getShowSelectFolderAttr:function(){return this.showSelectFolder;},_setShowChooseExtentAttr:function(_66){this.showChooseExtent=_66;},_getShowChooseExtentAttr:function(){return this.showChooseExtent;},_setMapAttr:function(map){this.map=map;},_getMapAttr:function(){return this.map;},_setShowHelpAttr:function(_67){this.showHelp=_67;},_getShowHelpAttr:function(){return this.showHelp;},_setNearTypeAttr:function(_68){if(_68==="line"){this.nearType="StraightLine";}else{if(_68==="distance"){this.nearType="DrivingDistance";}else{if(_68==="time"){this.nearType="DrivingTime";}}}},_getNearTypeAttr:function(){return this.nearType;},_setBreakValuesAttr:function(_69){if(_69){this.breakValues=_69;}var val=_3.trim(this._breakValuesInput.get("value")).split(" "),_6a=[];_4.forEach(val,function(v){_6a.push(_10.parse(v));});this.breakValues=_6a;},_getBreakValuesAttr:function(){return this.breakValues;},_setShowCreditsAttr:function(_6b){this.showCredits=_6b;},_getShowCreditsAttr:function(){return this.showCredits;},validateServiceName:function(_6c){var _6d=/(:|&|<|>|%|#|\?|\\|\"|\/|\+)/.test(_6c);if(_6c.length===0||((_a.trim(_6c)).length===0)){this._outputLayerInput.set("invalidMessage",this.i18n.requiredValue);return false;}if(_6d){this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceName);return false;}if(_6c.length>98){this._outputLayerInput.set("invalidMessage",this.i18n.invalidServiceNameLength);return false;}return true;},_connect:function(_6e,evt,_6f){this._pbConnects.push(_5.connect(_6e,evt,_6f));},onSave:function(){},onClose:function(){}});if(_7("extend-esri")){_3.setObject("dijit.analysis.SummarizeNearby",_26,_1f);}return _26;});