"use client";

import { useEffect, useRef, useState } from "react";
import { Map as OlMap } from "ol";
import { View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { Heatmap } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Point } from "ol/geom";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import useMapFilters from "../../hooks/useFilters";
import { findFilteredHomicidios } from "@/features/homicidios/hooks/useFindFilteredHomicidios";
import { Homicidio } from "@/features/homicidios/homicidio";

function HeatmapMap() {
  const [someHomicidios, setSomeHomicidios] = useState<Homicidio[]>([]);
  const [points, setPoints] = useState<Array<[number, number]>>([]);
  const { filters } = useMapFilters();

  const ready = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await findFilteredHomicidios(filters);
      setSomeHomicidios(result.data);
    };

    fetchData();
  }, [filters]);

  useEffect(() => {
    const somePoints: Array<[number, number]> = [];
    for (const homicidio of someHomicidios) {
      somePoints.push([homicidio.longitud_radio, homicidio.latitud_radio]);
    }
    setPoints(somePoints);
    ready.current = true;
  }, [someHomicidios]);

  useEffect(() => {
    if (!ready.current) return;
    // Crea la capa base del mapa (OSM)
    const osmLayer = new TileLayer({
      source: new OSM(),
    });

    // Fuente de datos para los puntos del heatmap
    const heatmapSource = new VectorSource();

    // Crear algunos puntos para el heatmap (en este caso, datos ficticios)

    // Añadir puntos a la fuente de datos del heatmap
    points.forEach(([lon, lat]) => {
      const point = new Feature(new Point(fromLonLat([lon, lat])));
      heatmapSource.addFeature(point);
    });

    // Crea la capa de Heatmap
    const heatmapLayer = new Heatmap({
      source: heatmapSource,
      blur: 25,
      radius: 8,
      weight: () => 1,
    });

    // Crea el mapa
    const map = new OlMap({
      target: "heatmap-container",
      layers: [osmLayer, heatmapLayer],
      view: new View({
        center: fromLonLat([-52.9044758, -38.4863576]),
        zoom: 5,
      }),
    });

    return () => map.setTarget(null!);
  }, [points]);

  return <div className="h-screen w-screen" id="heatmap-container" />;
}

export default HeatmapMap;
