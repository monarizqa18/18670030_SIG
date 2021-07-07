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
        });var format_data_penduduk_2 = new ol.format.GeoJSON();
var features_data_penduduk_2 = format_data_penduduk_2.readFeatures(json_data_penduduk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data_penduduk_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_data_penduduk_2.addFeatures(features_data_penduduk_2);var lyr_data_penduduk_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_data_penduduk_2, 
                style: style_data_penduduk_2,
    title: 'data_penduduk<br />\
    <img src="styles/legend/data_penduduk_2_0.png" /> Sangat Kurang<br />\
    <img src="styles/legend/data_penduduk_2_1.png" /> Kurang<br />\
    <img src="styles/legend/data_penduduk_2_2.png" /> Sedang<br />\
    <img src="styles/legend/data_penduduk_2_3.png" /> Cukup Banyak<br />\
    <img src="styles/legend/data_penduduk_2_4.png" /> Banyak<br />\
    <img src="styles/legend/data_penduduk_2_5.png" /> Sangat Banyak<br />'
        });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_data_penduduk_2.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleRoad_1,lyr_data_penduduk_2];
lyr_data_penduduk_2.set('fieldAliases', {'ID': 'ID', 'Kabupaten_': 'Kota/Kab', 'jml_pdk': 'Jumlah Penduduk', });
lyr_data_penduduk_2.set('fieldImages', {'ID': 'TextEdit', 'Kabupaten_': 'TextEdit', 'jml_pdk': 'TextEdit', });
lyr_data_penduduk_2.set('fieldLabels', {'ID': 'no label', 'Kabupaten_': 'header label', 'jml_pdk': 'header label', });
lyr_data_penduduk_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});