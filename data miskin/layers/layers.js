var wms_layers = [];

        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'GoogleRoad_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'})],
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_kabupaten_1 = new ol.format.GeoJSON();
var features_kabupaten_1 = format_kabupaten_1.readFeatures(json_kabupaten_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kabupaten_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_kabupaten_1.addFeatures(features_kabupaten_1);var lyr_kabupaten_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kabupaten_1, 
                style: style_kabupaten_1,
    title: 'kabupaten<br />\
    <img src="styles/legend/kabupaten_1_0.png" /> Sangat Kurang<br />\
    <img src="styles/legend/kabupaten_1_1.png" /> Kurang<br />\
    <img src="styles/legend/kabupaten_1_2.png" /> Sedang<br />\
    <img src="styles/legend/kabupaten_1_3.png" /> Banyak<br />\
    <img src="styles/legend/kabupaten_1_4.png" /> Cukup Banyak<br />\
    <img src="styles/legend/kabupaten_1_5.png" /> Sangat Banyak<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_kabupaten_1.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_kabupaten_1];
lyr_kabupaten_1.set('fieldAliases', {'ID': 'ID', 'Kabupaten_': 'Kota/Kab', 'jml_miskin': 'Jumlah Penduduk Miskin', });
lyr_kabupaten_1.set('fieldImages', {'ID': 'TextEdit', 'Kabupaten_': 'TextEdit', 'jml_miskin': 'TextEdit', });
lyr_kabupaten_1.set('fieldLabels', {'ID': 'no label', 'Kabupaten_': 'header label', 'jml_miskin': 'header label', });
lyr_kabupaten_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});