/*

PARAMETROS CONFIGURABLES

*/
// Ubicación de la versión web de la aplicación
var _url = 'http://aztemp.cloudapp.net/vivi/vivi/';
// Mensaje que aparece en la opcion compartir desde redes sociales
var _msg_share = 'Encontre este lugar en la aplicación Tu Bogotá';
// Web service empleado para cargar fotos por parte de los usuarios
var _url_photo = 'http://aztemp.cloudapp.net/vivi/upload_test.jsp';
// Web service empleado para realizar reporte de necesidades por parte de los usuarios
var _url_msg = 'http://aztemp.cloudapp.net/vivi/tmp.jsp?http://idecabogota.appspot.com/test.jsp';
var _proxy_url = 'http://aztemp.cloudapp.net/vivi/tmp.jsp';
var _geometry_url = 'http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer';
var _map_url = 'http://imagenes.catastrobogota.gov.co/arcgis/rest/services/CM/CommunityMap/MapServer';
// Variables a desplejar
var variables = [
    "Valor m2 del terreno",
    "Parques",
    "Turismo",
    "Entretenimiento",
    "Cultural",
    "Comercial",
    "Salud",
    "Educación",
    "Seguridad",
    "Servicios Sociales",
    "Movilidad",
    "Riesgo",
    "Oferta Inmobiliaria"
];
// Colores asociados a cada variable
var colores = [
    { r: 255, g: 0, b: 0, a: 0.45 },
    { r: 4, g: 130, b: 14, a: 0.45 },
    { r: 250, g: 123, b: 12, a: 0.45 },
    { r: 153, g: 11, b: 219, a: 0.45 },
    { r: 150, g: 3, b: 23, a: 0.45 },
    { r: 195, g: 212, b: 15, a: 0.45 },
    { r: 16, g: 141, b: 230, a: 0.45 },
    { r: 245, g: 120, b: 191, a: 0.45 },
    { r: 5, g: 74, b: 13, a: 0.45 },
    { r: 141, g: 145, b: 141, a: 0.45 },
    { r: 16, g: 8, b: 105, a: 0.45 },
    { r: 29, g: 65, b: 209, a: 0.45 },
    { r: 158, g: 90, b: 103, a: 0.45 }
];
// Colores asociados a cada variable (En formato HEX)
var coloresWeb = [
    "#FF0000",
    "#04820E",
    "#FA7B0C",
    "#990BDB",
    "#960317",
    "#C3D40F",
    "#108DE6",
    "#F578BF",
    "#054A0D",
    "#8D918D",
    "#100869",
    "#1D41D1",
    "#9E5A67"
];
// Ubicación de los mapas a consultar
var urls = [
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Valor_de_referencia_m2_terreno/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Parques/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Turismo/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Turismo/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Infraestructura_Educativa/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Turismo/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Turismo/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Salud/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Educacion/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Infraestructura_de_Seguridad/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Integracion_Social/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/SistemaMovilidad/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Riesgo/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/Corredores_Comerciales/MapServer",
    "http://mapas.catastrobogota.gov.co/arcgis/rest/services/Tematicas/OfertasInmobiliarias/MapServer"
];
// Capas a consultar (asociado con las direcciones de los mapas a consultar)
var layers = [
        [4],
        [0],
        [1, 8, 9, 10, 13, 14, 18],
        [6, 7, 15],
        [6],
        [2, 3, 11, 16],
        [17],
        [13, 1, 0],
        [0, 1, 2, 3, 4, 5],
        [0],
        [0, 1, 2, 3, 4, 5, 6],
        [0, 4, 5, 6, 7, 8, 10],
        [0, 1, 2, 3],
        [0],
        [0]
];
// Radio de búsqueda (por defecto)
var radius = 2;

var valoraciones = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
];


var map;
var loaded = false;
var gl;
var gsvc;
var capas = new Array();
var popup;
var headerGeom;
var bufferCache;
var mapLock = false;
var photoURLS = new Array();
var cacheRiesgo;
var cacheMovilidad;

var pLat = 4.598056;
var pLng = -74.075833;

var currentExtent;
var currentPoint;
var pressTimer;
var evtParams;

function init() {
    headerGeom = dojo.position(dojo.byId("header"));
    dojo.byId("map").style.height = ($(document).height() - headerGeom.h) + "px";

    if (getUrlVars()["pos"] == null) {
        $('#popupGeneral').popup('open');
    };

    popup = new esri.dijit.InfoWindowLite(null, dojo.create("div"));
    popup.startup();

    $('#fopcion').change(function () {
        if ($('#fopcion')[0].value == "oferta") {
            $('#foferta').show();
            $("#reportar").popup("reposition", { positionTo: 'window' });
        } else {
            $('#foferta').hide();
            $("#reportar").popup("reposition", { positionTo: 'window' });
        };
    });

    if (isPhoneGap()) {

        map = new esri.Map("map", {
            zoom: 5,
            infoWindow: popup,
            autoResize: true
        });

        $("#fphoto").show();
        $("#fphotoweb").hide();

        dojo.connect(map, "onLoad", mapLoadHandler);
        dojo.connect(map, "onDblClick", mapClickHandler);
    } else {
        map = new esri.Map("map", {
            zoom: 5,
            nav: true,
            infoWindow: popup,
            autoResize: true
        });

        $("#fphoto").hide();
        $("#fphotoweb").show();

        dojo.connect(map, "onLoad", mapLoadHandler);
        dojo.connect(map, "onClick", mapClickHandler);
    };
    
    for (var i = 0; i < variables.length; i++) {
        var html = "<tr onclick='showLayer(" + i + ");'  style='background: url(\"images/BGTable.png\") repeat scroll 0 0 transparent;border-top:2px solid white;border-bottom:1px solid white;'>" +
                        "<td style='width:20px;'><div style='height:20px;width:20px;'><img src='images/cat" + i + ".png' /></div></td>" +
                        "<td>" + variables[i] + "</td>" +
                        "<td>" +
                            "<div id='Value" + i + "' style='text-align: right;'></div>" +
                        "</td>" + 
                    "</tr>";
        $("#table").append(html);
    };
    esri.config.defaults.io.proxyUrl = _proxy_url;
    var streetMapLayer = new esri.layers.ArcGISTiledMapServiceLayer(_map_url);
    gsvc = new esri.tasks.GeometryService(_geometry_url);
    map.addLayer(streetMapLayer);
    map.resize();
}

function initReporte() {
    photoURLS = new Array();
    $('#ffield').html('Foto: ' + photoURLS.length);
    $('#fdescripcion')[0].value = "";
    $('#fvalor')[0].value = "";
    $('#fdireccion')[0].value = "";
    $('#ftelefono')[0].value = "";
    $('#fcorreo')[0].value = "";
};

function displayLista() {
    $('#lista').toggle();
}

function updateRadius(val) {
    radius = val;
}

function cerrarPopup() {
    popup.hide();
};

function share(id) {
    switch (id){
        case 'facebook':
            window.open(encodeURI('http://www.facebook.com/sharer.php?t=' + _msg_share + '&u=' + _url + '?pos=' + currentPoint.x + 'A' + currentPoint.y), '_blank', '');
            break;
        case 'twitter':
            window.open(encodeURI('https://twitter.com/intent/tweet?text=' + _msg_share + '&url=' + _url + '?pos=' + currentPoint.x + 'A' + currentPoint.y), '_blank', '');
            break;
        case 'email':
            window.open('mailto:?subject=Encontre este lugar en Vivi&body=' + _url + '?pos=' + currentPoint.x + 'A' + currentPoint.y, '_system', '');
            break;
    }
}

function mapLoadHandler(map) {
    map.disableDoubleClickZoom();
    map.infoWindow.resize(150, 100);

    loaded = true;
    gl = new esri.layers.GraphicsLayer();
    var sr = new esri.renderer.SimpleRenderer(
             new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
                              new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color([255, 0, 0, 0.5]), 2),
                                                       new dojo.Color([255, 0, 0, 0.5])));
    gl.setRenderer(sr);
    map.addLayer(gl, 0);

    for (var i=0; i<variables.length;i++){		    			
        var glT = new esri.layers.GraphicsLayer();
        map.addLayer(glT, 1);
        glT.setVisibility(false);
        capas.push(glT);
    };

    if (getUrlVars()["pos"] != null) {
        currentPoint = new esri.geometry.Point(parseFloat(getUrlVars()["pos"].split("A")[0]), parseFloat(getUrlVars()["pos"].split("A")[1]), map.spatialReference);
    } else {
        currentPoint = new esri.geometry.Point(pLng, pLat, map.spatialReference);
    };
    map.centerAndZoom(currentPoint, 5);

    if (getUrlVars()["pos"] != null) {
        var obj = {};
        obj.mapPoint = currentPoint;
        mapClickHandler(obj);
    };

}

function zoomToLocation(position) {
    pLat = position.coords.latitude;
    pLng = position.coords.longitude;

    try {
        currentPoint = new esri.geometry.Point(position.coords.longitude, position.coords.latitude, map.spatialReference);
        map.centerAndZoom(currentPoint, 5);
    } catch (ex) {
       
    }
};


function showLayer(pos) {
    map.infoWindow.hide();
    for (var i = 0; i < variables.length; i++) {
        if (i == pos) {
            capas[i].setVisibility(true);
        } else {
            capas[i].setVisibility(false);
        };
    };
}

function mapClickHandler(evt) {
    if (mapLock) {
        return;
    };
    mapLock = true;
    gl.clear();
    map.infoWindow.hide();
    $('#lista').show();
    for (var i = 0; i < variables.length; i++) {
        capas[i].clear();
        capas[i].setVisibility(false);        
    };

    var mapPoint;
    mapPoint = evt.mapPoint;
    currentPoint = evt.mapPoint;
    var polygon;
    gl.add(new esri.Graphic(evt.mapPoint,
                               new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 15,
                               new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color("#000000"), 2),
                               new dojo.Color("#000000")),
                               null, null));

    var params = new esri.tasks.BufferParameters();
    params.geometries = [evt.mapPoint];
    params.distances = [radius];
    params.unit = esri.tasks.GeometryService.UNIT_KILOMETER;
    params.outSpatialReference = map.spatialReference;

    gsvc.buffer(params, showBuffer);
 
    var params1 = new esri.tasks.BufferParameters();
    params1.geometries = [evt.mapPoint];
    params1.distances = [Math.sqrt(radius*radius + radius*radius)/2];
    params1.unit = esri.tasks.GeometryService.UNIT_KILOMETER;
    params1.outSpatialReference = map.spatialReference;

    gsvc.buffer(params1, showBuffer2);
    setTimeout(function () { mapLock = false; }, 4000);
};

function showBuffer(geometries) {
    bufferCache = geometries[0];
    var symbol = new esri.symbol.SimpleFillSymbol(
            esri.symbol.SimpleFillSymbol.STYLE_SOLID,
            new esri.symbol.SimpleLineSymbol(
              esri.symbol.SimpleLineSymbol.STYLE_SOLID,
              new dojo.Color([0, 0, 255, 0.25]), 2
            ),
            new dojo.Color([0, 0, 255, 0.25])
          );
    dojo.forEach(geometries, function (geometry) {
        var graphic = new esri.Graphic(geometry, symbol);
        gl.add(graphic);
    });
};

function showBuffer2(geometries) {
    
    dojo.forEach(geometries, function (geometry) {
        currentExtent = geometry;
        for (var i = 0; i < variables.length; i++) {
            $("#Value" + i).html("<img src='images/ajax-loader2.gif' />");
            valoraciones[i] = 0;
        };

        for (var i = 0; i < urls.length; i++) {
            var identifyTask = new esri.tasks.IdentifyTask(urls[i]);
            var identifyParams = new esri.tasks.IdentifyParameters();
            identifyParams.spatialReference = map.spatialReference;
            identifyParams.mapExtent = currentExtent.getExtent();
            if (i == 0) {
                identifyParams.geometry = currentPoint;
            } else {
                identifyParams.geometry = currentExtent.getExtent();
            }
            identifyParams.layerOption = esri.tasks.IdentifyParameters.LAYER_OPTION_ALL;
            identifyParams.tolerance = 20;
            identifyParams.maxAllowableOffset = 0.0001;
            identifyParams.returnGeometry = true;
            identifyParams.layerIds = layers[i];
            identifyParams.width = 16000;
            identifyParams.height = 16000;
            identifyParams.dpi = 96;
            switch (i){
                case 0:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 0);
                    });
                    break;
                case 1:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 1);
                    });
                    break;
                case 2:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 2);
                    });
                    break;
                case 3:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 3);
                    });
                    break;
                case 4:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 4);
                    });
                    break;
                case 5:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 4);
                    });
                    break;
                case 6:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 5);
                    });
                    break;
                case 7:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 6);
                    });
                    break;
                case 8:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 7);
                    });
                    break;
                case 9:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 8);
                    });
                    break;
                case 10:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 9);
                    });
                    break;
                case 11:
                    identifyTask.execute(identifyParams, function (results) {
                        cacheMovilidad = results;
                        var geomTEST = [];
                        for (var i = 0; i < results.length; i++) {
                            if ((results[i].feature.geometry.type == 'polygon') || (results[i].feature.geometry.type == 'polyline')) {
                                geomTEST.push(results[i].feature.geometry);
                            };
                        }
                        gsvc.intersect(geomTEST, bufferCache,
                        function (geometries) {
                            var posN = 0;
                            for (var i = 0; i < cacheMovilidad.length; i++) {
                                if ((cacheMovilidad[i].feature.geometry.type == 'polygon') || (cacheMovilidad[i].feature.geometry.type == 'polyline')) {
                                    cacheMovilidad[i].feature.geometry = geometries[posN];
                                    posN++;
                                };
                            };
                            showResults(cacheMovilidad, 10);
                        },
                        function (error) {
                            showResults(cacheMovilidad, 10);
                        });
                    });
                    break;
                case 12:
                    identifyTask.execute(identifyParams, function (results) {
                        cacheRiesgo = results;
                        var geomTEST = [];
                        for (var i = 0; i < results.length; i++) {
                            if ((results[i].feature.geometry.type == 'polygon') || (results[i].feature.geometry.type == 'polyline')) {
                                geomTEST.push(results[i].feature.geometry);
                            };
                        }                        
                        gsvc.intersect(geomTEST, bufferCache,
                        function (geometries) {
                            var posN = 0;
                            for (var i = 0; i < cacheRiesgo.length; i++) {
                                if ((cacheRiesgo[i].feature.geometry.type == 'polygon') || (cacheRiesgo[i].feature.geometry.type == 'polyline')) {
                                    cacheRiesgo[i].feature.geometry = geometries[posN];
                                    posN++;
                                };
                            };
                            showResults(cacheRiesgo, 11);
                        },
                        function (error) {
                            showResults(cacheRiesgo, 11);
                        });
                        
                    });
                    break;
                case 13:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 5);
                    });
                    break;
                case 14:
                    identifyTask.execute(identifyParams, function (results) {
                        showResults(results, 12);
                    });
                    break;
            }
        };


    });
}

function orientationChanged() {
    if (map) {
        map.reposition();
        map.resize();
    }
}

function showResults(results, pos) {
    valoraciones[pos] = valoraciones[pos] + results.length;
    var n = Math.round((valoraciones[pos] / (radius * radius)));
    n = Math.min(n, 5);
    var str = "";
    for (var i = 0; i < 5; i++) {
        if (i < n) {
            str = str + "<img src='images/star_on.png' />";
        } else {
            str = str + "<img src='images/star_off.png' />";
        }

    }

    var m2 = 0;
    var nm2 = 0;

    for (var i = 0, il = results.length; i < il; i++) {
        var value = "N/A";
        var content = pos;

        try {
            switch (pos) {
                case 0:
                    value = results[i].feature.attributes["Valor metro cuadrado"];
                    content = "&nbsp;"
                    break;
                case 1:
                    value = results[i].feature.attributes["Nombre"];
                    content = "&nbsp;"
                    break;
                case 2:
                    if (results[i].layerId != 18) {
                        value = results[i].feature.attributes["Nombre"];
                        content = results[i].feature.attributes["Tipologia"];
                    } else {
                        value = results[i].feature.attributes["Nombre"];
                        content = "Teléfono: " + results[i].feature.attributes["Telefono"];
                    }
                    break;
                case 3:
                    value = results[i].feature.attributes["Nombre"];
                    content = results[i].feature.attributes["Tipologia"];
                    break;
                case 4:
                    if (results[i].layerId != 6) {
                        value = results[i].feature.attributes["Nombre"];
                        content = results[i].feature.attributes["Tipologia"];
                    } else {
                        value = results[i].feature.attributes["Nombre de la biblioteca"];
                        content = "&nbsp;";
                    }
                    break;
                case 5:
                    if (results[i].feature.attributes["Nombre"] != null) {
                        value = results[i].feature.attributes["Nombre"];
                        content = results[i].feature.attributes["Tipologia"];
                    }
                    if (results[i].feature.attributes["Nombre del Establecimiento"] != null) {
                        value = results[i].feature.attributes["Nombre del Establecimiento"];
                        content = "&nbsp;";
                    }
                    if (value == "N/A") {
                        value = "Corredor Comercial";
                        content = "&nbsp;";
                    };
                    break;
                case 6:
                    if (results[i].layerId == 0) {
                        value = results[i].feature.attributes["Nombre"];
                        content = "&nbsp;";
                    }
                    if (results[i].layerId == 1) {
                        value = results[i].feature.attributes["Razón Social"];
                        content = "&nbsp;";
                    }
                    if (results[i].layerId == 13) {
                        value = results[i].feature.attributes["Nombre de la Sede"];
                        content = "&nbsp;";
                    }
                    break;
                case 7:
                    if (results[i].layerId != 5) {
                        value = results[i].feature.attributes["Nombre del establecimiento educativo"];
                        content = "&nbsp;";
                    } else {
                        value = results[i].feature.attributes["Institucion"];
                        content = results[i].feature.attributes["Caracter"];
                    }
                    break;
                case 8:
                    value = results[i].feature.attributes["Nombre"];
                    content = "Teléfono: " + results[i].feature.attributes["Teléfono"];
                    break;
                case 9:
                    value = results[i].feature.attributes["Nombre Unidad Operativa"];
                    content = results[i].feature.attributes["Categoria"];
                    break;
                case 10:
                    value = "";
                    content = "";
                    break;
                case 11:
                    if (results[i].layerId == 0) {
                        value = "Riesgo de Inundación";
                        content = "&nbsp;";
                    }
                    if (results[i].layerId == 1) {
                        value = "Riesgo Tecnológico";
                        content = results[i].feature.attributes["Razón social"];
                    }
                    if (results[i].layerId == 2) {
                        value = "Riesgo de Remoción";
                        content = "&nbsp;";
                    }
                    if (results[i].layerId == 3) {
                        value = "Riesgo de Incedio forestal";
                        content = "&nbsp;";
                    }

                    break;
                case 12:
                    value = results[i].feature.attributes["Tipo de oferta"];
                    content = results[i].feature.attributes["Valor en pesos"] + "<br />" +
                              "Teléfono: " + results[i].feature.attributes["Teléfono"];
                    break;
            }
        } catch (e) {
            
        };
        content = content + "<br /><a href='#' onclick='cerrarPopup();' style=''>Cerrar</a>";
        var popcontent;
        if (value.length > 40) {
            value = value.substr(0, 40) + "...";
        }
        if (value == "N/A"){
            popcontent = null;
        } else {
            popcontent = new esri.InfoTemplate(value, content)
        };
        switch (results[i].feature.geometry.type) {
            case "point":
                capas[pos].add(new esri.Graphic(results[i].feature.geometry,
                                                new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 13,
                                                                               new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color(colores[pos]), 2),
                                                                               new dojo.Color(colores[pos])),
                                                results[i].feature.attributes,
                                                popcontent
                                ));
                break;
            case "multipoint":
                capas[pos].add(new esri.Graphic(results[i].feature.geometry,
                                                new esri.symbol.SimpleMarkerSymbol(esri.symbol.SimpleMarkerSymbol.STYLE_CIRCLE, 10,
                                                                               new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color(colores[pos]), 2),
                                                                               new dojo.Color(colores[pos])),
                                                results[i].feature.attributes,
                                                popcontent
                                ));
                break;
            case "polyline":
                capas[pos].add(new esri.Graphic(results[i].feature.geometry,
                                                new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color(colores[pos]), 2),
                                                results[i].feature.attributes,
                                                popcontent
                                ));
                break;
            case "polygon":
                capas[pos].add(new esri.Graphic(results[i].feature.geometry,
                                                new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
                                                                              new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color(colores[pos]), 2),
                                                                               new dojo.Color(colores[pos])),
                                                results[i].feature.attributes,
                                                popcontent
                                ));
                break;
            case "extent":
                capas[pos].add(new esri.Graphic(results[i].feature.geometry,
                                                new esri.symbol.SimpleFillSymbol(esri.symbol.SimpleFillSymbol.STYLE_SOLID,
                                                                              new esri.symbol.SimpleLineSymbol(esri.symbol.SimpleLineSymbol.STYLE_SOLID, new dojo.Color(colores[pos]), 2),
                                                                               new dojo.Color(colores[pos])),
                                                results[i].feature.attributes,
                                                popcontent
                                ));
                break;
        }


        if (pos == 0) {
            if (nm2 == 0) {
                m2 = m2 + parseInt(results[0].feature.attributes["Valor metro cuadrado"].replace("$", "").replace(".", "").replace(",", "").replace(".", ""));
                nm2++;
            }            
        }
    }

    if (pos == 0) {
        if (nm2 == 0){
            str = "ND";
        } else {
            str = "$ " + parseInt(m2 / nm2);
        }
    }
    $("#Value" + pos).html(str);
}

function getCircle(center, radius) {
    var points = getPoints(center, radius);
    var polygon = esri.geometry.Polygon(map.spatialReference);
    polygon.addRing(points);
    return polygon;
}

function getPoints(center, radius) {
    var points = [];
    var sin;
    var cos;
    var x;
    var y;
    for (var i = 0; i < 50; i++) {
        sin = Math.sin(Math.PI * 2 * i / 50);
        cos = Math.cos(Math.PI * 2 * i / 50);
        x = center.x + radius * sin;
        y = center.y + radius * cos;
        points.push(new esri.geometry.Point(x, y));
    }
    return points;
}


function isTouchDevice() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}

function getUrlVars() {
    var vars = [], hash;
    var hashes;

    if ($.mobile.activePage.data('url').indexOf("?") != -1) {
        hashes = $.mobile.activePage.data('url').slice($.mobile.activePage.data('url').indexOf('?') + 1).split('&');
    } else {
        hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    }

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');

        if (hash[0] == "pos") {
            hash[1] = hash[1].replace("#", "");
        }

        if (hash.length > 1 && hash[1].indexOf("#") == -1) {
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
    }

    return vars;
}

function capture(sourceType) {
    navigator.camera.getPicture(captureSuccess, captureFail, {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: sourceType,
        correctOrientation: true
    });
};

function captureSuccess(imageURI) {
    $('#reportar').popup('close');
    $('#msgTXT2').html('Cargando foto, por favor, espere.');
    $('#msg2').popup('open');

    var fail, ft, options, params, win;    
    options = new FileUploadOptions();
    options.fileKey = "nva_imagen";
    options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
    ft = new FileTransfer();
    ft.upload(imageURI, _url_photo, uploadSuccess, uploadFail, options);
};

function cargarFoto() {
    $('#reportar').popup('close');
    $('#msgTXT2').html('Cargando foto... Por favor, espere.');
    $('#msg2').popup('open');

    var formData = new FormData($('#photoweb')[0]);

    $.ajax({
        url: _url_photo,
        type: 'POST',
        data: formData,
        async: false,
        success: uploadSuccess,
        error: uploadFail,
        contentType: false,
        cache: false,
        processData: false
    });
};

function captureFail(message) {
    $('#msgTXT2').html('No se pudo capturar la foto, por favor, intente más tarde.');
    $('#msg2').popup('open');
};

function uploadSuccess(response) {
    var objResponse;
    objResponse = response;
    $('#reportar').popup('close');
    if (objResponse.message == null) {
        $('#msgTXT2').html('Foto cargada exitosamente.');
        photoURLS.push(objResponse.url);
        $('#ffield').html('Foto: ' + photoURLS.length);
    } else {
        $('#msgTXT2').html('No se pudo cargar la foto. Razón: ' + objResponse.message);
    }
    $('#msg2').popup('open');
};

function uploadFail(error) {
    $('#reportar').popup('close');
    $('#msgTXT2').html('No se pudo cargar la foto, por favor, intente más tarde.');
    $('#msg2').popup('open');
};

function enviar_msg() {
    if ($('#fopcion')[0].value == "oferta") {

        $.validity.start();
        $("#fcorreo").require();
        $("#fvalor").require();
        $("#ftelefono").require();
        $("#fdireccion").require();
        if ($.validity.end().errors > 0) {
            $('#reportar').popup('close');
            $('#msgTXT2').html('Debe completar todos los campos para enviar un reporte.');
            $('#msg2').popup('open');
            return;
        };

        $.validity.start();
        $("#fcorreo").match("email");
        if ($.validity.end().errors > 0) {
            $('#reportar').popup('close');
            $('#msgTXT2').html('Debe ingresar un correo electrónico valido.');
            $('#msg2').popup('open');
            return;
        };
        $.validity.start();
        $("#fvalor").match("integer");
        if ($.validity.end().errors > 0) {
            $('#reportar').popup('close');
            $('#msgTXT2').html('Debe ingresar un valor valido, sin incluir signos ni puntos.');
            $('#msg2').popup('open');
            return;
        };


    } else {

        $.validity.start();
        $("#fdescripcion").require();
        $("#fcorreo").require();
        if ($.validity.end().errors > 0) {
            $('#reportar').popup('close');
            $('#msgTXT2').html('Debe completar todos los campos para enviar un reporte.');
            $('#msg2').popup('open');
            return;
        };
        $.validity.start();
        $("#fcorreo").match("email");
        if ($.validity.end().errors > 0) {
            $('#reportar').popup('close');
            $('#msgTXT2').html('Debe ingresar un correo electrónico valido.');
            $('#msg2').popup('open');
            return;
        };


    }

    var photoMSG = '';
    if (photoURLS.length > 0) {
        for (var i = 0; i < photoURLS.length; i++) {
            photoMSG = photoMSG + '&Foto=' + photoURLS[i];
        }
    };

    var msgURL;
    if ($('#fopcion')[0].value == "oferta") {
        msgURL = _url_msg + '?categoria=' + $('#fopcion')[0].value + '&Descripcion=' + $('#fdescripcion')[0].value
                      + '&Latitud=' + currentPoint.x + '&Longitud=' + currentPoint.y + photoMSG
                      + '&Tipo=' + $('#ftipo')[0].value + '&Valor=' + $('#fvalor')[0].value
                      + '&Telefono=' + $('#ftelefono')[0].value + '&Direccion=' + $('#fdireccion')[0].value
                      + '&Correo=' + $('#fcorreo')[0].value;
    } else {
        msgURL = _url_msg + '?categoria=' + $('#fopcion')[0].value + '&Descripcion=' + $('#fdescripcion')[0].value
                      + '&Latitud=' + currentPoint.x + '&Longitud=' + currentPoint.y + photoMSG
                      + '&Correo=' + $('#fcorreo')[0].value;
    };

    $('#reportar').popup('close');
    $('#msgTXT').html('Enviando reporte... Por favor, espere.');
    $('#msg').popup('open');

    $.ajax({
        url: msgURL,
        type: 'GET',
        success: function () {
            $('#msgTXT').html('Reporte enviado exitosamente.');
            $('#msg').popup('open');
        },
        error: function () {
            $('#msgTXT2').html('No se pudo enviar el reporte, por favor, intente más tarde.');
            $('#msg2').popup('open');
        }
    });
};

function isPhoneGapExclusive() {
    try {
        return (cordova || PhoneGap || phonegap);
    } catch (err) {
        return false;
    }
}

function isPhoneGap() {
    try {
        return (cordova || PhoneGap || phonegap)
        && /^file:\/{3}[^\/]/i.test(window.location.href)
        && /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
    } catch (err) {
        return false;
    }
}