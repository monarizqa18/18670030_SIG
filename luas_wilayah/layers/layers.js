var wms_layers = [];

        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'GoogleRoad_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'GoogleRoad_1',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_luas_wilayah_2 = new ol.format.GeoJSON();
var features_luas_wilayah_2 = format_luas_wilayah_2.readFeatures(json_luas_wilayah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_luas_wilayah_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_luas_wilayah_2.addFeatures(features_luas_wilayah_2);var lyr_luas_wilayah_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_luas_wilayah_2, 
                style: style_luas_wilayah_2,
    title: 'luas_wilayah<br />\
    <img src="styles/legend/luas_wilayah_2_0.png" /> Sangat Kecil<br />\
    <img src="styles/legend/luas_wilayah_2_1.png" /> Kecil<br />\
    <img src="styles/legend/luas_wilayah_2_2.png" /> Sedang<br />\
    <img src="styles/legend/luas_wilayah_2_3.png" /> Cukup Luas<br />\
    <img src="styles/legend/luas_wilayah_2_4.png" /> Luas<br />\
    <img src="styles/legend/luas_wilayah_2_5.png" /> Sangat Luas<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_luas_wilayah_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleRoad_1,lyr_luas_wilayah_2];
lyr_luas_wilayah_2.set('fieldAliases', {'ID': 'ID', 'Kabupaten_': 'Kabupaten_', 'jml_wly': 'jumlah wilayah (km2)', });
lyr_luas_wilayah_2.set('fieldImages', {'ID': 'TextEdit', 'Kabupaten_': 'TextEdit', 'jml_wly': 'TextEdit', });
lyr_luas_wilayah_2.set('fieldLabels', {'ID': 'no label', 'Kabupaten_': 'header label', 'jml_wly': 'header label', });
lyr_luas_wilayah_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});