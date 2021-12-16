var wms_layers = [];


        var lyr_GoogleSatlite_0 = new ol.layer.Tile({
            'title': 'Google Satélite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CartoDark_1 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });
var format_Aptituddeacuferos_2 = new ol.format.GeoJSON();
var features_Aptituddeacuferos_2 = format_Aptituddeacuferos_2.readFeatures(json_Aptituddeacuferos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aptituddeacuferos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aptituddeacuferos_2.addFeatures(features_Aptituddeacuferos_2);
var lyr_Aptituddeacuferos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aptituddeacuferos_2, 
                style: style_Aptituddeacuferos_2,
                interactive: false,
    title: 'Aptitud de acuíferos<br />\
    <img src="styles/legend/Aptituddeacuferos_2_0.png" /> High<br />\
    <img src="styles/legend/Aptituddeacuferos_2_1.png" /> Medium<br />\
    <img src="styles/legend/Aptituddeacuferos_2_2.png" /> Low<br />'
        });
var format_OTBN_2009_3 = new ol.format.GeoJSON();
var features_OTBN_2009_3 = format_OTBN_2009_3.readFeatures(json_OTBN_2009_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OTBN_2009_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTBN_2009_3.addFeatures(features_OTBN_2009_3);
var lyr_OTBN_2009_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OTBN_2009_3, 
                style: style_OTBN_2009_3,
                interactive: false,
    title: 'OTBN_2009<br />\
    <img src="styles/legend/OTBN_2009_3_0.png" /> Protección boscosa<br />\
    <img src="styles/legend/OTBN_2009_3_1.png" /> Mantenimiento de cobertura boscosa<br />\
    <img src="styles/legend/OTBN_2009_3_2.png" /> Uso potencial productivo<br />\
    <img src="styles/legend/OTBN_2009_3_3.png" /> Áreas transformadas<br />'
        });
var format_HuellaurbanaAo2010_4 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2010_4 = format_HuellaurbanaAo2010_4.readFeatures(json_HuellaurbanaAo2010_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2010_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2010_4.addFeatures(features_HuellaurbanaAo2010_4);
var lyr_HuellaurbanaAo2010_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2010_4, 
                style: style_HuellaurbanaAo2010_4,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2010_4.png" /> Huella urbana. Año 2010 '
            });
var format_HuellaurbanaAo2020_5 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2020_5 = format_HuellaurbanaAo2020_5.readFeatures(json_HuellaurbanaAo2020_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2020_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2020_5.addFeatures(features_HuellaurbanaAo2020_5);
var lyr_HuellaurbanaAo2020_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2020_5, 
                style: style_HuellaurbanaAo2020_5,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2020_5.png" /> Huella urbana. Año 2020 '
            });
var format_HuellaurbanaAo2030prediccin_6 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2030prediccin_6 = format_HuellaurbanaAo2030prediccin_6.readFeatures(json_HuellaurbanaAo2030prediccin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2030prediccin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2030prediccin_6.addFeatures(features_HuellaurbanaAo2030prediccin_6);
var lyr_HuellaurbanaAo2030prediccin_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2030prediccin_6, 
                style: style_HuellaurbanaAo2030prediccin_6,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2030prediccin_6.png" /> Huella urbana. Año 2030 (predicción)'
            });
var format_HuellaurbanaAo2040prediccin_7 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2040prediccin_7 = format_HuellaurbanaAo2040prediccin_7.readFeatures(json_HuellaurbanaAo2040prediccin_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2040prediccin_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2040prediccin_7.addFeatures(features_HuellaurbanaAo2040prediccin_7);
var lyr_HuellaurbanaAo2040prediccin_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2040prediccin_7, 
                style: style_HuellaurbanaAo2040prediccin_7,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2040prediccin_7.png" /> Huella urbana. Año 2040 (predicción)'
            });
var format_HuellaurbanaAo2050prediccin_8 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2050prediccin_8 = format_HuellaurbanaAo2050prediccin_8.readFeatures(json_HuellaurbanaAo2050prediccin_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2050prediccin_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2050prediccin_8.addFeatures(features_HuellaurbanaAo2050prediccin_8);
var lyr_HuellaurbanaAo2050prediccin_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2050prediccin_8, 
                style: style_HuellaurbanaAo2050prediccin_8,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2050prediccin_8.png" /> Huella urbana. Año 2050 (predicción)'
            });
var format_HuellaurbanaAo2060prediccin_9 = new ol.format.GeoJSON();
var features_HuellaurbanaAo2060prediccin_9 = format_HuellaurbanaAo2060prediccin_9.readFeatures(json_HuellaurbanaAo2060prediccin_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HuellaurbanaAo2060prediccin_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HuellaurbanaAo2060prediccin_9.addFeatures(features_HuellaurbanaAo2060prediccin_9);
var lyr_HuellaurbanaAo2060prediccin_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HuellaurbanaAo2060prediccin_9, 
                style: style_HuellaurbanaAo2060prediccin_9,
                interactive: false,
                title: '<img src="styles/legend/HuellaurbanaAo2060prediccin_9.png" /> Huella urbana. Año 2060 (predicción)'
            });
var format_Red_cloacal_10 = new ol.format.GeoJSON();
var features_Red_cloacal_10 = format_Red_cloacal_10.readFeatures(json_Red_cloacal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_cloacal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_cloacal_10.addFeatures(features_Red_cloacal_10);
var lyr_Red_cloacal_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Red_cloacal_10, 
                style: style_Red_cloacal_10,
                interactive: false,
                title: '<img src="styles/legend/Red_cloacal_10.png" /> Red_cloacal'
            });
var format_Red_Agua_Potable_11 = new ol.format.GeoJSON();
var features_Red_Agua_Potable_11 = format_Red_Agua_Potable_11.readFeatures(json_Red_Agua_Potable_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_Agua_Potable_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_Agua_Potable_11.addFeatures(features_Red_Agua_Potable_11);
var lyr_Red_Agua_Potable_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Red_Agua_Potable_11, 
                style: style_Red_Agua_Potable_11,
                interactive: false,
                title: '<img src="styles/legend/Red_Agua_Potable_11.png" /> Red_Agua_Potable'
            });

lyr_GoogleSatlite_0.setVisible(true);lyr_CartoDark_1.setVisible(false);lyr_Aptituddeacuferos_2.setVisible(true);lyr_OTBN_2009_3.setVisible(false);lyr_HuellaurbanaAo2010_4.setVisible(true);lyr_HuellaurbanaAo2020_5.setVisible(false);lyr_HuellaurbanaAo2030prediccin_6.setVisible(false);lyr_HuellaurbanaAo2040prediccin_7.setVisible(false);lyr_HuellaurbanaAo2050prediccin_8.setVisible(false);lyr_HuellaurbanaAo2060prediccin_9.setVisible(false);lyr_Red_cloacal_10.setVisible(false);lyr_Red_Agua_Potable_11.setVisible(false);
var layersList = [lyr_GoogleSatlite_0,lyr_CartoDark_1,lyr_Aptituddeacuferos_2,lyr_OTBN_2009_3,lyr_HuellaurbanaAo2010_4,lyr_HuellaurbanaAo2020_5,lyr_HuellaurbanaAo2030prediccin_6,lyr_HuellaurbanaAo2040prediccin_7,lyr_HuellaurbanaAo2050prediccin_8,lyr_HuellaurbanaAo2060prediccin_9,lyr_Red_cloacal_10,lyr_Red_Agua_Potable_11];
lyr_Aptituddeacuferos_2.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'Aptitude': 'Aptitude', });
lyr_OTBN_2009_3.set('fieldAliases', {'id': 'id', 'FID': 'FID', 'CAT_GRAL': 'CAT_GRAL', 'COLOR_GRAL': 'COLOR_GRAL', 'has': 'has', });
lyr_HuellaurbanaAo2010_4.set('fieldAliases', {'id': 'id', 'dn': 'dn', });
lyr_HuellaurbanaAo2020_5.set('fieldAliases', {'id': 'id', 'dn': 'dn', });
lyr_HuellaurbanaAo2030prediccin_6.set('fieldAliases', {'id': 'id', 'dn': 'dn', });
lyr_HuellaurbanaAo2040prediccin_7.set('fieldAliases', {'id': 'id', 'dn': 'dn', });
lyr_HuellaurbanaAo2050prediccin_8.set('fieldAliases', {'id': 'id', 'dn': 'dn', });
lyr_HuellaurbanaAo2060prediccin_9.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'dn': 'dn', });
lyr_Red_cloacal_10.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'FECHA_ALTA': 'FECHA_ALTA', 'ID_CATEGOR': 'ID_CATEGOR', 'DESC_CATEG': 'DESC_CATEG', 'ID_ESTADO': 'ID_ESTADO', 'DESC_ESTAD': 'DESC_ESTAD', 'ID_LOC': 'ID_LOC', 'ID_TIPO_SE': 'ID_TIPO_SE', 'MATERIAL': 'MATERIAL', 'DESC_MATER': 'DESC_MATER', 'DIAM_NOMIN': 'DIAM_NOMIN', 'NUM_SISTEM': 'NUM_SISTEM', 'OS_REFEREN': 'OS_REFEREN', 'ID_BAR': 'ID_BAR', 'DESC_BAR': 'DESC_BAR', 'LNG_TRAMO': 'LNG_TRAMO', });
lyr_Red_Agua_Potable_11.set('fieldAliases', {'id': 'id', 'fnode_': 'fnode_', 'tnode_': 'tnode_', 'lpoly_': 'lpoly_', 'rpoly_': 'rpoly_', 'length': 'length', 'e1402_': 'e1402_', 'e1402_id': 'e1402_id', 'codigo': 'codigo', 'ancho': 'ancho', 'anchomed': 'anchomed', 'nombre': 'nombre', 'nom_nor': 'nom_nor', 'ladoi': 'ladoi', 'ladod': 'ladod', 'desdei': 'desdei', 'desded': 'desded', 'hastai': 'hastai', 'hastad': 'hastad', 'cod_calle': 'cod_calle', 'nombre_dgi': 'nombre_dgi', 'mzai': 'mzai', 'mzad': 'mzad', 'conteoi': 'conteoi', 'conteod': 'conteod', 'codinomb': 'codinomb', 'cod_eje': 'cod_eje', 'alumbrado': 'alumbrado', 'agua': 'agua', 'cloacas': 'cloacas', 'tv_clabe': 'tv_clabe', 'gas': 'gas', 'telefono': 'telefono', 'electrico': 'electrico', 'recoleccio': 'recoleccio', 'barrido': 'barrido', 'valor_unit': 'valor_unit', 'desde_par': 'desde_par', 'hasta_par': 'hasta_par', 'desde_impa': 'desde_impa', 'hasta_impa': 'hasta_impa', 'pre_dir': 'pre_dir', 'pre_tipo': 'pre_tipo', 'nro_depart': 'nro_depart', 'cod_locali': 'cod_locali', 'shape_len': 'shape_len', 'vialidad': 'vialidad', 'trat_vial': 'trat_vial', 'vial': 'vial', 'e6433_': 'e6433_', 'e6433_id': 'e6433_id', 'listadoi': 'listadoi', 'listadod': 'listadod', 'colecti': 'colecti', 'colectd': 'colectd', 'constri': 'constri', 'constrd': 'constrd', 'obseri': 'obseri', 'obserd': 'obserd', });
lyr_Aptituddeacuferos_2.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'Aptitude': 'TextEdit', });
lyr_OTBN_2009_3.set('fieldImages', {'id': 'TextEdit', 'FID': 'TextEdit', 'CAT_GRAL': 'TextEdit', 'COLOR_GRAL': 'TextEdit', 'has': 'TextEdit', });
lyr_HuellaurbanaAo2010_4.set('fieldImages', {'id': 'TextEdit', 'dn': 'Range', });
lyr_HuellaurbanaAo2020_5.set('fieldImages', {'id': 'TextEdit', 'dn': 'Range', });
lyr_HuellaurbanaAo2030prediccin_6.set('fieldImages', {'id': 'TextEdit', 'dn': 'Range', });
lyr_HuellaurbanaAo2040prediccin_7.set('fieldImages', {'id': 'TextEdit', 'dn': 'Range', });
lyr_HuellaurbanaAo2050prediccin_8.set('fieldImages', {'id': 'TextEdit', 'dn': 'Range', });
lyr_HuellaurbanaAo2060prediccin_9.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'dn': 'TextEdit', });
lyr_Red_cloacal_10.set('fieldImages', {'id': 'Range', 'fid': 'TextEdit', 'FECHA_ALTA': 'DateTime', 'ID_CATEGOR': 'Range', 'DESC_CATEG': 'TextEdit', 'ID_ESTADO': 'Range', 'DESC_ESTAD': 'TextEdit', 'ID_LOC': 'Range', 'ID_TIPO_SE': 'Range', 'MATERIAL': 'TextEdit', 'DESC_MATER': 'TextEdit', 'DIAM_NOMIN': 'Range', 'NUM_SISTEM': 'TextEdit', 'OS_REFEREN': 'TextEdit', 'ID_BAR': 'TextEdit', 'DESC_BAR': 'TextEdit', 'LNG_TRAMO': 'TextEdit', });
lyr_Red_Agua_Potable_11.set('fieldImages', {'id': 'TextEdit', 'fnode_': 'TextEdit', 'tnode_': 'TextEdit', 'lpoly_': 'TextEdit', 'rpoly_': 'TextEdit', 'length': 'TextEdit', 'e1402_': 'TextEdit', 'e1402_id': 'TextEdit', 'codigo': 'Range', 'ancho': 'Range', 'anchomed': 'TextEdit', 'nombre': 'TextEdit', 'nom_nor': 'TextEdit', 'ladoi': 'TextEdit', 'ladod': 'TextEdit', 'desdei': 'TextEdit', 'desded': 'TextEdit', 'hastai': 'TextEdit', 'hastad': 'TextEdit', 'cod_calle': 'TextEdit', 'nombre_dgi': 'TextEdit', 'mzai': 'TextEdit', 'mzad': 'TextEdit', 'conteoi': 'TextEdit', 'conteod': 'TextEdit', 'codinomb': 'TextEdit', 'cod_eje': 'TextEdit', 'alumbrado': 'Range', 'agua': 'Range', 'cloacas': 'Range', 'tv_clabe': 'Range', 'gas': 'Range', 'telefono': 'Range', 'electrico': 'Range', 'recoleccio': 'Range', 'barrido': 'Range', 'valor_unit': 'TextEdit', 'desde_par': 'TextEdit', 'hasta_par': 'TextEdit', 'desde_impa': 'TextEdit', 'hasta_impa': 'TextEdit', 'pre_dir': 'Range', 'pre_tipo': 'Range', 'nro_depart': 'Range', 'cod_locali': 'TextEdit', 'shape_len': 'TextEdit', 'vialidad': 'Range', 'trat_vial': 'TextEdit', 'vial': 'TextEdit', 'e6433_': 'TextEdit', 'e6433_id': 'TextEdit', 'listadoi': 'Range', 'listadod': 'Range', 'colecti': 'Range', 'colectd': 'Range', 'constri': 'Range', 'constrd': 'Range', 'obseri': 'TextEdit', 'obserd': 'TextEdit', });
lyr_Aptituddeacuferos_2.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'Aptitude': 'no label', });
lyr_OTBN_2009_3.set('fieldLabels', {'id': 'no label', 'FID': 'no label', 'CAT_GRAL': 'no label', 'COLOR_GRAL': 'no label', 'has': 'no label', });
lyr_HuellaurbanaAo2010_4.set('fieldLabels', {'id': 'no label', 'dn': 'no label', });
lyr_HuellaurbanaAo2020_5.set('fieldLabels', {'id': 'no label', 'dn': 'no label', });
lyr_HuellaurbanaAo2030prediccin_6.set('fieldLabels', {'id': 'no label', 'dn': 'no label', });
lyr_HuellaurbanaAo2040prediccin_7.set('fieldLabels', {'id': 'no label', 'dn': 'no label', });
lyr_HuellaurbanaAo2050prediccin_8.set('fieldLabels', {'id': 'no label', 'dn': 'no label', });
lyr_HuellaurbanaAo2060prediccin_9.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'dn': 'no label', });
lyr_Red_cloacal_10.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'FECHA_ALTA': 'no label', 'ID_CATEGOR': 'no label', 'DESC_CATEG': 'no label', 'ID_ESTADO': 'no label', 'DESC_ESTAD': 'no label', 'ID_LOC': 'no label', 'ID_TIPO_SE': 'no label', 'MATERIAL': 'no label', 'DESC_MATER': 'no label', 'DIAM_NOMIN': 'no label', 'NUM_SISTEM': 'no label', 'OS_REFEREN': 'no label', 'ID_BAR': 'no label', 'DESC_BAR': 'no label', 'LNG_TRAMO': 'no label', });
lyr_Red_Agua_Potable_11.set('fieldLabels', {'id': 'no label', 'fnode_': 'no label', 'tnode_': 'no label', 'lpoly_': 'no label', 'rpoly_': 'no label', 'length': 'no label', 'e1402_': 'no label', 'e1402_id': 'no label', 'codigo': 'no label', 'ancho': 'no label', 'anchomed': 'no label', 'nombre': 'no label', 'nom_nor': 'no label', 'ladoi': 'no label', 'ladod': 'no label', 'desdei': 'no label', 'desded': 'no label', 'hastai': 'no label', 'hastad': 'no label', 'cod_calle': 'no label', 'nombre_dgi': 'no label', 'mzai': 'no label', 'mzad': 'no label', 'conteoi': 'no label', 'conteod': 'no label', 'codinomb': 'no label', 'cod_eje': 'no label', 'alumbrado': 'no label', 'agua': 'no label', 'cloacas': 'no label', 'tv_clabe': 'no label', 'gas': 'no label', 'telefono': 'no label', 'electrico': 'no label', 'recoleccio': 'no label', 'barrido': 'no label', 'valor_unit': 'no label', 'desde_par': 'no label', 'hasta_par': 'no label', 'desde_impa': 'no label', 'hasta_impa': 'no label', 'pre_dir': 'no label', 'pre_tipo': 'no label', 'nro_depart': 'no label', 'cod_locali': 'no label', 'shape_len': 'no label', 'vialidad': 'no label', 'trat_vial': 'no label', 'vial': 'no label', 'e6433_': 'no label', 'e6433_id': 'no label', 'listadoi': 'no label', 'listadod': 'no label', 'colecti': 'no label', 'colectd': 'no label', 'constri': 'no label', 'constrd': 'no label', 'obseri': 'no label', 'obserd': 'no label', });
lyr_Red_Agua_Potable_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});