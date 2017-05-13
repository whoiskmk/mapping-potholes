/**
 * Leaflet.FeatureGroup.SubGroup creates a Feature Group that adds its child
 * layers into a parent group when added to a map (e.g. through L.Control.Layers).
 * (c) 2015-2016 Boris Seang
 * BSD 2-Clause "Simplified" License
 */
!function(e,r){"function"==typeof define&&define.amd?define(["leaflet"],r):r("object"==typeof module&&module.exports?require("leaflet"):e.L)}(this,function(e){e.FeatureGroup.SubGroup=e.FeatureGroup.extend({statics:{version:"0.1.2"},initialize:function(r,t){e.FeatureGroup.prototype.initialize.call(this,t),this.setParentGroup(r)},setParentGroup:function(r){var t=r instanceof e.LayerGroupreturn this._parentGroup=r,this.onAdd=t?"function"==typeof r.addLayers?this._onAddToGroupBatch:this._onAddToGroup:this._onAddToMap,this.onRemove=t?"function"==typeof r.removeLayers?this._onRemoveFromGroupBatch:this._onRemoveFromGroup:this._onRemoveFromMap,this.addLayer=t?this._addLayerToGroup:this._addLayerToMap,this.removeLayer=t?this._removeLayerFromGroup:this._removeLayerFromMap,this},setParentGroupSafe:function(e){var r=this._mapreturn r&&r.removeLayer(this),this.setParentGroup(e),r&&r.addLayer(this),this},getParentGroup:function(){return this._parentGroup},_onAddToGroupBatch:function(e){var r=this.getLayers()this._map=e,this._parentGroup.addLayers(r)},_onRemoveFromGroupBatch:function(){var e=this.getLayers()this._parentGroup.removeLayers(e),this._map=null},_onAddToGroup:function(e){var r=this._parentGroupthis._map=e,this.eachLayer(r.addLayer,r)},_onRemoveFromGroup:function(){var e=this._parentGroupthis.eachLayer(e.removeLayer,e),this._map=null},_onAddToMap:e.FeatureGroup.prototype.onAdd,_onRemoveFromMap:e.FeatureGroup.prototype.onRemove,_addLayerToGroup:function(r){if(this.hasLayer(r))return thisr.on&&r.on(e.FeatureGroup.EVENTS,this._propagateEvent,this)var t=this.getLayerId(r)return this._layers[t]=r,this._map&&this._parentGroup.addLayer(r),this._popupContent&&r.bindPopup&&r.bindPopup(this._popupContent,this._popupOptions),this.fire("layeradd",{layer:r})},_removeLayerFromGroup:function(r){if(!this.hasLayer(r))return thisr in this._layers&&(r=this._layers[r]),r.off&&r.off(e.FeatureGroup.EVENTS,this._propagateEvent,this)var t=r in this._layers?r:this.getLayerId(r)return this._map&&this._layers[t]&&this._parentGroup.removeLayer(t),delete this._layers[t],this._popupContent&&this.invoke("unbindPopup"),this.fire("layerremove",{layer:r})},_addLayerToMap:e.FeatureGroup.prototype.addLayer,_removeLayerFromMap:e.FeatureGroup.prototype.removeLayer}),e.featureGroup.subGroup=function(r,t){return new e.FeatureGroup.SubGroup(r,t)}})
