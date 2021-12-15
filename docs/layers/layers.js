var wms_layers = [];

var format_Cloacas_0 = new ol.format.GeoJSON();
var features_Cloacas_0 = format_Cloacas_0.readFeatures(json_Cloacas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cloacas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cloacas_0.addFeatures(features_Cloacas_0);
var lyr_Cloacas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cloacas_0, 
                style: style_Cloacas_0,
                interactive: true,
                title: '<img src="styles/legend/Cloacas_0.png" /> Cloacas'
            });
var format_Red_Agua_1 = new ol.format.GeoJSON();
var features_Red_Agua_1 = format_Red_Agua_1.readFeatures(json_Red_Agua_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Red_Agua_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Red_Agua_1.addFeatures(features_Red_Agua_1);
var lyr_Red_Agua_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Red_Agua_1, 
                style: style_Red_Agua_1,
                interactive: true,
                title: '<img src="styles/legend/Red_Agua_1.png" /> Red_Agua'
            });
var format_Aptitud_area_de_estudio_2 = new ol.format.GeoJSON();
var features_Aptitud_area_de_estudio_2 = format_Aptitud_area_de_estudio_2.readFeatures(json_Aptitud_area_de_estudio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aptitud_area_de_estudio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aptitud_area_de_estudio_2.addFeatures(features_Aptitud_area_de_estudio_2);
var lyr_Aptitud_area_de_estudio_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aptitud_area_de_estudio_2, 
                style: style_Aptitud_area_de_estudio_2,
                interactive: true,
    title: 'Aptitud_area_de_estudio<br />\
    <img src="styles/legend/Aptitud_area_de_estudio_2_0.png" /> Alta<br />\
    <img src="styles/legend/Aptitud_area_de_estudio_2_1.png" /> Media<br />\
    <img src="styles/legend/Aptitud_area_de_estudio_2_2.png" /> Baja<br />'
        });

lyr_Cloacas_0.setVisible(true);lyr_Red_Agua_1.setVisible(true);lyr_Aptitud_area_de_estudio_2.setVisible(true);
var layersList = [lyr_Cloacas_0,lyr_Red_Agua_1,lyr_Aptitud_area_de_estudio_2];
lyr_Cloacas_0.set('fieldAliases', {'fid': 'fid', 'FECHA_ALTA': 'FECHA_ALTA', 'ID_CATEGOR': 'ID_CATEGOR', 'DESC_CATEG': 'DESC_CATEG', 'ID_ESTADO': 'ID_ESTADO', 'DESC_ESTAD': 'DESC_ESTAD', 'ID_LOC': 'ID_LOC', 'ID_TIPO_SE': 'ID_TIPO_SE', 'MATERIAL': 'MATERIAL', 'DESC_MATER': 'DESC_MATER', 'DIAM_NOMIN': 'DIAM_NOMIN', 'NUM_SISTEM': 'NUM_SISTEM', 'OS_REFEREN': 'OS_REFEREN', 'ID_BAR': 'ID_BAR', 'DESC_BAR': 'DESC_BAR', 'LNG_TRAMO': 'LNG_TRAMO', });
lyr_Red_Agua_1.set('fieldAliases', {'fid': 'fid', 'fnode_': 'fnode_', 'tnode_': 'tnode_', 'lpoly_': 'lpoly_', 'rpoly_': 'rpoly_', 'length': 'length', 'e1402_': 'e1402_', 'e1402_id': 'e1402_id', 'codigo': 'codigo', 'ancho': 'ancho', 'anchomed': 'anchomed', 'nombre': 'nombre', 'nom_nor': 'nom_nor', 'ladoi': 'ladoi', 'ladod': 'ladod', 'desdei': 'desdei', 'desded': 'desded', 'hastai': 'hastai', 'hastad': 'hastad', 'cod_calle': 'cod_calle', 'nombre_dgi': 'nombre_dgi', 'mzai': 'mzai', 'mzad': 'mzad', 'conteoi': 'conteoi', 'conteod': 'conteod', 'codinomb': 'codinomb', 'cod_eje': 'cod_eje', 'alumbrado': 'alumbrado', 'agua': 'agua', 'cloacas': 'cloacas', 'tv_clabe': 'tv_clabe', 'gas': 'gas', 'telefono': 'telefono', 'electrico': 'electrico', 'recoleccio': 'recoleccio', 'barrido': 'barrido', 'valor_unit': 'valor_unit', 'desde_par': 'desde_par', 'hasta_par': 'hasta_par', 'desde_impa': 'desde_impa', 'hasta_impa': 'hasta_impa', 'pre_dir': 'pre_dir', 'pre_tipo': 'pre_tipo', 'nro_depart': 'nro_depart', 'cod_locali': 'cod_locali', 'shape_len': 'shape_len', 'vialidad': 'vialidad', 'trat_vial': 'trat_vial', 'vial': 'vial', 'e6433_': 'e6433_', 'e6433_id': 'e6433_id', 'listadoi': 'listadoi', 'listadod': 'listadod', 'colecti': 'colecti', 'colectd': 'colectd', 'constri': 'constri', 'constrd': 'constrd', 'obseri': 'obseri', 'obserd': 'obserd', });
lyr_Aptitud_area_de_estudio_2.set('fieldAliases', {'fid': 'fid', 'Aptitude': 'Aptitude', });
lyr_Cloacas_0.set('fieldImages', {'fid': 'TextEdit', 'FECHA_ALTA': 'DateTime', 'ID_CATEGOR': 'Range', 'DESC_CATEG': 'TextEdit', 'ID_ESTADO': 'Range', 'DESC_ESTAD': 'TextEdit', 'ID_LOC': 'Range', 'ID_TIPO_SE': 'Range', 'MATERIAL': 'TextEdit', 'DESC_MATER': 'TextEdit', 'DIAM_NOMIN': 'Range', 'NUM_SISTEM': 'TextEdit', 'OS_REFEREN': 'TextEdit', 'ID_BAR': 'TextEdit', 'DESC_BAR': 'TextEdit', 'LNG_TRAMO': 'TextEdit', });
lyr_Red_Agua_1.set('fieldImages', {'fid': 'TextEdit', 'fnode_': 'TextEdit', 'tnode_': 'TextEdit', 'lpoly_': 'TextEdit', 'rpoly_': 'TextEdit', 'length': 'TextEdit', 'e1402_': 'TextEdit', 'e1402_id': 'TextEdit', 'codigo': 'Range', 'ancho': 'Range', 'anchomed': 'TextEdit', 'nombre': 'TextEdit', 'nom_nor': 'TextEdit', 'ladoi': 'TextEdit', 'ladod': 'TextEdit', 'desdei': 'TextEdit', 'desded': 'TextEdit', 'hastai': 'TextEdit', 'hastad': 'TextEdit', 'cod_calle': 'TextEdit', 'nombre_dgi': 'TextEdit', 'mzai': 'TextEdit', 'mzad': 'TextEdit', 'conteoi': 'TextEdit', 'conteod': 'TextEdit', 'codinomb': 'TextEdit', 'cod_eje': 'TextEdit', 'alumbrado': 'Range', 'agua': 'Range', 'cloacas': 'Range', 'tv_clabe': 'Range', 'gas': 'Range', 'telefono': 'Range', 'electrico': 'Range', 'recoleccio': 'Range', 'barrido': 'Range', 'valor_unit': 'TextEdit', 'desde_par': 'TextEdit', 'hasta_par': 'TextEdit', 'desde_impa': 'TextEdit', 'hasta_impa': 'TextEdit', 'pre_dir': 'Range', 'pre_tipo': 'Range', 'nro_depart': 'Range', 'cod_locali': 'TextEdit', 'shape_len': 'TextEdit', 'vialidad': 'Range', 'trat_vial': 'TextEdit', 'vial': 'TextEdit', 'e6433_': 'TextEdit', 'e6433_id': 'TextEdit', 'listadoi': 'Range', 'listadod': 'Range', 'colecti': 'Range', 'colectd': 'Range', 'constri': 'Range', 'constrd': 'Range', 'obseri': 'TextEdit', 'obserd': 'TextEdit', });
lyr_Aptitud_area_de_estudio_2.set('fieldImages', {'fid': 'TextEdit', 'Aptitude': 'TextEdit', });
lyr_Cloacas_0.set('fieldLabels', {'fid': 'no label', 'FECHA_ALTA': 'no label', 'ID_CATEGOR': 'no label', 'DESC_CATEG': 'no label', 'ID_ESTADO': 'no label', 'DESC_ESTAD': 'no label', 'ID_LOC': 'no label', 'ID_TIPO_SE': 'no label', 'MATERIAL': 'no label', 'DESC_MATER': 'no label', 'DIAM_NOMIN': 'no label', 'NUM_SISTEM': 'no label', 'OS_REFEREN': 'no label', 'ID_BAR': 'no label', 'DESC_BAR': 'no label', 'LNG_TRAMO': 'no label', });
lyr_Red_Agua_1.set('fieldLabels', {'fid': 'no label', 'fnode_': 'no label', 'tnode_': 'no label', 'lpoly_': 'no label', 'rpoly_': 'no label', 'length': 'no label', 'e1402_': 'no label', 'e1402_id': 'no label', 'codigo': 'no label', 'ancho': 'no label', 'anchomed': 'no label', 'nombre': 'no label', 'nom_nor': 'no label', 'ladoi': 'no label', 'ladod': 'no label', 'desdei': 'no label', 'desded': 'no label', 'hastai': 'no label', 'hastad': 'no label', 'cod_calle': 'no label', 'nombre_dgi': 'no label', 'mzai': 'no label', 'mzad': 'no label', 'conteoi': 'no label', 'conteod': 'no label', 'codinomb': 'no label', 'cod_eje': 'no label', 'alumbrado': 'no label', 'agua': 'no label', 'cloacas': 'no label', 'tv_clabe': 'no label', 'gas': 'no label', 'telefono': 'no label', 'electrico': 'no label', 'recoleccio': 'no label', 'barrido': 'no label', 'valor_unit': 'no label', 'desde_par': 'no label', 'hasta_par': 'no label', 'desde_impa': 'no label', 'hasta_impa': 'no label', 'pre_dir': 'no label', 'pre_tipo': 'no label', 'nro_depart': 'no label', 'cod_locali': 'no label', 'shape_len': 'no label', 'vialidad': 'no label', 'trat_vial': 'no label', 'vial': 'no label', 'e6433_': 'no label', 'e6433_id': 'no label', 'listadoi': 'no label', 'listadod': 'no label', 'colecti': 'no label', 'colectd': 'no label', 'constri': 'no label', 'constrd': 'no label', 'obseri': 'no label', 'obserd': 'no label', });
lyr_Aptitud_area_de_estudio_2.set('fieldLabels', {'fid': 'no label', 'Aptitude': 'no label', });
lyr_Aptitud_area_de_estudio_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});