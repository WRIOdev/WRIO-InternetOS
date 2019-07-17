export default {
    "version": 8,
    "name": "Mapbox Streets",
    "metadata": {
      "mapbox:autocomposite": true,
      "mapbox:groups": {
        "1444934828655.3389": {
          "name": "Aeroways",
          "collapsed": true
        },
        "1444933322393.2852": {
          "name": "POI labels  (scalerank 1)",
          "collapsed": true
        },
        "1444855898284.2651": {
          "name": "Aeroways",
          "collapsed": true
        },
        "1444862578782.6787": {
          "name": "Road labels",
          "collapsed": true
        },
        "1444934749452.0452": {
          "name": "Wetlands",
          "collapsed": true
        },
        "1444862074717.8372": {
          "name": "Waterways",
          "collapsed": true
        },
        "1444855868004.2437": {
          "name": "Landuse",
          "collapsed": false
        },
        "1444855786460.0557": {
          "name": "Roads",
          "collapsed": true
        },
        "1444856968392.4368": {
          "name": "Contour lines",
          "collapsed": true
        },
        "1444856071629.7817": {
          "name": "Place labels",
          "collapsed": true
        },
        "1444933575858.6992": {
          "name": "Highway shields",
          "collapsed": true
        },
        "1444934295202.7542": {
          "name": "Admin boundaries",
          "collapsed": true
        },
        "1444856904773.373": {
          "name": "Land barriers",
          "collapsed": true
        },
        "1444856931506.5164": {
          "name": "Barriers",
          "collapsed": true
        },
        "1444856151690.9143": {
          "name": "State labels",
          "collapsed": true
        },
        "1444933721429.3076": {
          "name": "Road labels",
          "collapsed": true
        },
        "1444933358918.2366": {
          "name": "POI labels (scalerank 2)",
          "collapsed": true
        },
        "1444933808272.805": {
          "name": "Water labels",
          "collapsed": true
        },
        "1444855815295.714": {
          "name": "Hillshading",
          "collapsed": true
        },
        "1444855831248.8289": {
          "name": "Landcover",
          "collapsed": true
        },
        "1444933372896.5967": {
          "name": "POI labels (scalerank 3)",
          "collapsed": true
        },
        "1444855799204.86": {
          "name": "Bridges",
          "collapsed": true
        },
        "1444856087950.3635": {
          "name": "Marine labels",
          "collapsed": true
        },
        "1444856869758.2375": {
          "name": "Wetlands",
          "collapsed": true
        },
        "1444862510685.128": {
          "name": "City labels",
          "collapsed": true
        },
        "1444856954425.4016": {
          "name": "Buildings",
          "collapsed": true
        },
        "1444855769305.6016": {
          "name": "Tunnels",
          "collapsed": true
        },
        "1444856144497.7825": {
          "name": "Country labels",
          "collapsed": true
        },
        "1444856712129.5933": {
          "name": "Waterways",
          "collapsed": true
        },
        "1444856677484.5256": {
          "name": "High zoom level labels",
          "collapsed": true
        },
        "1444933456003.5437": {
          "name": "POI labels (scalerank 4)",
          "collapsed": true
        },
        "1444933837268.9458": {
          "name": "Contour lines",
          "collapsed": true
        }
      }
    },
    "sources": {
      "composite": {
        "url": "mapbox://mapbox.mapbox-terrain-v2,mapbox.mapbox-streets-v7",
        "type": "vector"
      },
      "route": {
        "type": "geojson",
        "data": {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [-122.48369693756104, 37.83381888486939],
                    [-122.48348236083984, 37.83317489144141],
                    [-122.48339653015138, 37.83270036637107],
                    [-122.48356819152832, 37.832056363179625],
                    [-122.48404026031496, 37.83114119107971],
                    [-122.48404026031496, 37.83049717427869],
                    [-122.48348236083984, 37.829920943955045],
                    [-122.48356819152832, 37.82954808664175],
                    [-122.48507022857666, 37.82944639795659],
                    [-122.48610019683838, 37.82880236636284],
                    [-122.48695850372314, 37.82931081282506],
                    [-122.48700141906738, 37.83080223556934],
                    [-122.48751640319824, 37.83168351665737],
                    [-122.48803138732912, 37.832158048267786],
                    [-122.48888969421387, 37.83297152392784],
                    [-122.48987674713133, 37.83263257682617],
                    [-122.49043464660643, 37.832937629287755],
                    [-122.49125003814696, 37.832429207817725],
                    [-122.49163627624512, 37.832564787218985],
                    [-122.49223709106445, 37.83337825839438],
                    [-122.49378204345702, 37.83368330777276]
                ]
            }
        }
      }
    },
    "sprite": "mapbox://sprites/mapbox/streets-v8",
    "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
    "layers": [
      {
        "id": "background",
        "type": "background",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "background-color": "#ede9d9"
        },
        "interactive": true
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444855831248.8289"
        },
        "maxzoom": 14,
        "filter": [
          "==",
          "class",
          "crop"
        ],
        "type": "fill",
        "source": "composite",
        "id": "landcover_crop",
        "paint": {
          "fill-color": "#ddecb1",
          "fill-opacity": {
            "base": 1.5,
            "stops": [
              [
                2,
                0.3
              ],
              [
                14,
                0
              ]
            ]
          },
          "fill-antialias": false
        },
        "source-layer": "landcover"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444855831248.8289"
        },
        "maxzoom": 14,
        "filter": [
          "==",
          "class",
          "grass"
        ],
        "type": "fill",
        "source": "composite",
        "id": "landcover_grass",
        "paint": {
          "fill-color": "#ddecb1",
          "fill-opacity": {
            "base": 1.5,
            "stops": [
              [
                2,
                0.3
              ],
              [
                14,
                0
              ]
            ]
          },
          "fill-antialias": false
        },
        "source-layer": "landcover"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444855831248.8289"
        },
        "maxzoom": 14,
        "filter": [
          "==",
          "class",
          "scrub"
        ],
        "type": "fill",
        "source": "composite",
        "id": "landcover_scrub",
        "paint": {
          "fill-color": "#ddecb1",
          "fill-opacity": {
            "base": 1.5,
            "stops": [
              [
                2,
                0.3
              ],
              [
                14,
                0
              ]
            ]
          },
          "fill-antialias": false
        },
        "source-layer": "landcover"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444855831248.8289"
        },
        "maxzoom": 14,
        "filter": [
          "==",
          "class",
          "wood"
        ],
        "type": "fill",
        "source": "composite",
        "id": "landcover_wood",
        "paint": {
          "fill-color": "#ddecb1",
          "fill-opacity": {
            "base": 1.5,
            "stops": [
              [
                2,
                0.3
              ],
              [
                14,
                0
              ]
            ]
          },
          "fill-antialias": false
        },
        "source-layer": "landcover"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444855831248.8289"
        },
        "filter": [
          "==",
          "class",
          "snow"
        ],
        "type": "fill",
        "source": "composite",
        "id": "landcover_snow",
        "paint": {
          "fill-color": "#fff",
          "fill-opacity": 0.2,
          "fill-antialias": false
        },
        "source-layer": "landcover"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "national_park"
        ],
        "type": "fill",
        "source": "composite",
        "id": "national_park",
        "paint": {
          "fill-color": "#cde8a2",
          "fill-opacity": {
            "base": 1,
            "stops": [
              [
                5,
                0
              ],
              [
                6,
                0.5
              ]
            ]
          }
        },
        "source-layer": "landuse_overlay"
      },
      {
        "interactive": true,
        "minzoom": 9,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "scrub"
        ],
        "type": "fill",
        "source": "composite",
        "id": "scrub",
        "paint": {
          "fill-color": "#ddecb1",
          "fill-opacity": {
            "base": 1,
            "stops": [
              [
                9,
                0
              ],
              [
                16,
                0.2
              ]
            ]
          }
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "minzoom": 9,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "grass"
        ],
        "type": "fill",
        "source": "composite",
        "id": "grass",
        "paint": {
          "fill-color": "#ddecb1",
          "fill-opacity": {
            "base": 1,
            "stops": [
              [
                9,
                0
              ],
              [
                16,
                0.4
              ]
            ]
          }
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "minzoom": 6,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "wood"
        ],
        "type": "fill",
        "source": "composite",
        "id": "wood",
        "paint": {
          "fill-color": "#ddecb1",
          "fill-opacity": {
            "base": 1,
            "stops": [
              [
                6,
                0
              ],
              [
                16,
                0.5
              ]
            ]
          }
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "hospital"
        ],
        "type": "fill",
        "source": "composite",
        "id": "hospital",
        "paint": {
          "fill-color": "#f4dcdc"
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "school"
        ],
        "type": "fill",
        "source": "composite",
        "id": "school",
        "paint": {
          "fill-color": "#f3ebb4"
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "park"
        ],
        "type": "fill",
        "source": "composite",
        "id": "parks",
        "paint": {
          "fill-color": "#cde8a2",
          "fill-opacity": {
            "base": 1,
            "stops": [
              [
                5,
                0
              ],
              [
                6,
                1
              ]
            ]
          }
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "minzoom": 9,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "glacier"
        ],
        "type": "fill",
        "source": "composite",
        "id": "glaciers",
        "paint": {
          "fill-color": "#dcedf9",
          "fill-opacity": {
            "base": 1,
            "stops": [
              [
                9,
                0
              ],
              [
                10,
                0.25
              ]
            ]
          }
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "pitch"
        ],
        "type": "fill",
        "source": "composite",
        "id": "pitch",
        "paint": {
          "fill-color": "#c3e194"
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "line-join": "miter"
        },
        "filter": [
          "==",
          "class",
          "pitch"
        ],
        "type": "line",
        "source": "composite",
        "id": "pitch-line",
        "paint": {
          "line-color": "#e1f2c6"
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "cemetery"
        ],
        "type": "fill",
        "source": "composite",
        "id": "cemetery",
        "paint": {
          "fill-color": "#dde6c2"
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "industrial"
        ],
        "type": "fill",
        "source": "composite",
        "id": "industrial",
        "paint": {
          "fill-color": "#e0dae0"
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "class",
          "sand"
        ],
        "type": "fill",
        "source": "composite",
        "id": "sand",
        "paint": {
          "fill-color": "#ededcf"
        },
        "source-layer": "landuse"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444855815295.714"
        },
        "maxzoom": 18,
        "filter": [
          "==",
          "level",
          94
        ],
        "type": "fill",
        "source": "composite",
        "id": "hillshade_highlight_bright",
        "paint": {
          "fill-color": "#fff",
          "fill-opacity": {
            "stops": [
              [
                15,
                0.12
              ],
              [
                18,
                0
              ]
            ]
          },
          "fill-antialias": false
        },
        "source-layer": "hillshade"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444855815295.714"
        },
        "filter": [
          "==",
          "level",
          90
        ],
        "type": "fill",
        "source": "composite",
        "id": "hillshade_highlight_med",
        "paint": {
          "fill-color": "#fff",
          "fill-opacity": {
            "stops": [
              [
                15,
                0.12
              ],
              [
                18,
                0
              ]
            ]
          },
          "fill-antialias": false
        },
        "source-layer": "hillshade"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444855815295.714"
        },
        "maxzoom": 17,
        "filter": [
          "==",
          "level",
          89
        ],
        "type": "fill",
        "source": "composite",
        "id": "hillshade_shadow_faint",
        "paint": {
          "fill-color": "#5a5517",
          "fill-opacity": {
            "stops": [
              [
                15,
                0.05
              ],
              [
                17,
                0
              ]
            ]
          },
          "fill-antialias": false
        },
        "source-layer": "hillshade"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444855815295.714"
        },
        "filter": [
          "==",
          "level",
          78
        ],
        "type": "fill",
        "source": "composite",
        "id": "hillshade_shadow_med",
        "paint": {
          "fill-color": "#5a5517",
          "fill-opacity": {
            "stops": [
              [
                15,
                0.05
              ],
              [
                17,
                0
              ]
            ]
          },
          "fill-antialias": false
        },
        "source-layer": "hillshade"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444855815295.714"
        },
        "filter": [
          "==",
          "level",
          67
        ],
        "type": "fill",
        "source": "composite",
        "id": "hillshade_shadow_dark",
        "paint": {
          "fill-color": "#5a5517",
          "fill-opacity": {
            "stops": [
              [
                15,
                0.06
              ],
              [
                17,
                0
              ]
            ]
          },
          "fill-antialias": false
        },
        "source-layer": "hillshade"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444855815295.714"
        },
        "maxzoom": 17,
        "filter": [
          "==",
          "level",
          56
        ],
        "type": "fill",
        "source": "composite",
        "id": "hillshade_shadow_extreme",
        "paint": {
          "fill-color": "#5a5517",
          "fill-opacity": {
            "stops": [
              [
                15,
                0.06
              ],
              [
                17,
                0
              ]
            ]
          },
          "fill-antialias": false
        },
        "source-layer": "hillshade"
      },
      {
        "interactive": true,
        "minzoom": 8,
        "layout": {
          "visibility": "visible",
          "line-cap": {
            "base": 1,
            "stops": [
              [
                0,
                "butt"
              ],
              [
                11,
                "round"
              ]
            ]
          },
          "line-join": "round"
        },
        "filter": [
          "any",
          [
            "==",
            "class",
            "river"
          ],
          [
            "==",
            "class",
            "canal"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "waterway-river-canal",
        "paint": {
          "line-color": "#8ccbf7",
          "line-width": {
            "base": 1.3,
            "stops": [
              [
                8.5,
                0.1
              ],
              [
                20,
                8
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                8,
                0
              ],
              [
                8.5,
                1
              ]
            ]
          }
        },
        "source-layer": "waterway"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-join": "round",
          "line-cap": "round"
        },
        "filter": [
          "all",
          [
            "!=",
            "class",
            "river"
          ],
          [
            "!=",
            "class",
            "canal"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "waterway-small",
        "paint": {
          "line-color": "#8ccbf7",
          "line-width": {
            "base": 1.35,
            "stops": [
              [
                13.5,
                0.1
              ],
              [
                20,
                3
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13,
                0
              ],
              [
                13.5,
                1
              ]
            ]
          }
        },
        "source-layer": "waterway"
      },
      {
        "id": "water",
        "type": "fill",
        "source": "composite",
        "source-layer": "water",
        "layout": {
          "visibility": "visible"
        },
        "paint": {
          "fill-color": "#8ccbf7"
        },
        "interactive": true
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444934749452.0452"
        },
        "filter": [
          "in",
          "class",
          "wetland_noveg",
          "wetland"
        ],
        "type": "fill",
        "source": "composite",
        "id": "wetlands",
        "paint": {
          "fill-color": "#9DD3D8",
          "fill-opacity": {
            "base": 1,
            "stops": [
              [
                10,
                0.25
              ],
              [
                10.5,
                0.15
              ]
            ]
          }
        },
        "source-layer": "landuse_overlay"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444934749452.0452"
        },
        "id": "wetlands-pattern",
        "paint": {
          "fill-color": "#9DD3D8",
          "fill-opacity": {
            "base": 1,
            "stops": [
              [
                10,
                0
              ],
              [
                10.5,
                1
              ]
            ]
          },
          "fill-pattern": "marsh-16",
          "fill-translate-anchor": "viewport"
        },
        "ref": "wetlands"
      },
      {
        "interactive": true,
        "layout": {},
        "filter": [
          "all",
          [
            "==",
            "$type",
            "Polygon"
          ],
          [
            "==",
            "class",
            "land"
          ]
        ],
        "type": "fill",
        "source": "composite",
        "id": "barrier_line-land-polygon",
        "paint": {
          "fill-color": "#ede9d9"
        },
        "source-layer": "barrier_line"
      },
      {
        "interactive": true,
        "layout": {
          "line-cap": "round"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "==",
            "class",
            "land"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "barrier_line-land-line",
        "paint": {
          "line-width": {
            "base": 1.99,
            "stops": [
              [
                14,
                0.75
              ],
              [
                20,
                40
              ]
            ]
          },
          "line-color": "#ede9d9"
        },
        "source-layer": "barrier_line"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "underground",
          "false"
        ],
        "type": "line",
        "source": "composite",
        "id": "building-line",
        "paint": {
          "line-color": "#d0cbbb",
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                15,
                0.75
              ],
              [
                20,
                3
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                15.5,
                0
              ],
              [
                16,
                1
              ]
            ]
          }
        },
        "source-layer": "building"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "visibility": "visible"
        },
        "filter": [
          "==",
          "underground",
          "false"
        ],
        "type": "fill",
        "source": "composite",
        "id": "building",
        "paint": {
          "fill-color": {
            "base": 1,
            "stops": [
              [
                15,
                "#ede9d9"
              ],
              [
                16,
                "#e8e0cc"
              ]
            ]
          },
          "fill-opacity": {
            "base": 1,
            "stops": [
              [
                15.5,
                0
              ],
              [
                16,
                1
              ]
            ]
          },
          "fill-outline-color": "#d0cbbb"
        },
        "source-layer": "building"
      },
      {
        "interactive": true,
        "minzoom": 11,
        "layout": {},
        "metadata": {
          "mapbox:group": "1444934828655.3389"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "Polygon"
          ],
          [
            "!=",
            "type",
            "apron"
          ]
        ],
        "type": "fill",
        "source": "composite",
        "id": "aeroway-polygon",
        "paint": {
          "fill-color": "#dbcedb",
          "fill-opacity": {
            "base": 1,
            "stops": [
              [
                11,
                0
              ],
              [
                11.5,
                1
              ]
            ]
          }
        },
        "source-layer": "aeroway"
      },
      {
        "interactive": true,
        "minzoom": 9,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt"
        },
        "metadata": {
          "mapbox:group": "1444934828655.3389"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "==",
            "type",
            "runway"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "aeroway-runway",
        "paint": {
          "line-color": "#dbcedb",
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                9,
                1
              ],
              [
                18,
                80
              ]
            ]
          }
        },
        "source-layer": "aeroway"
      },
      {
        "interactive": true,
        "minzoom": 9,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt"
        },
        "metadata": {
          "mapbox:group": "1444934828655.3389"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "==",
            "type",
            "taxiway"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "aeroway-taxiway",
        "paint": {
          "line-color": "#dbcedb",
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                10,
                0.5
              ],
              [
                18,
                20
              ]
            ]
          }
        },
        "source-layer": "aeroway"
      },
      {
        "interactive": true,
        "minzoom": 11,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "class",
            "street"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-street-low",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": {
            "stops": [
              [
                11.5,
                0
              ],
              [
                12,
                1
              ],
              [
                14,
                1
              ],
              [
                14.01,
                0
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 11,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "class",
            "street_limited"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-street_limited-low",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": {
            "stops": [
              [
                11.5,
                0
              ],
              [
                12,
                1
              ],
              [
                14,
                1
              ],
              [
                14.01,
                0
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 14,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "in",
            "class",
            "service",
            "link",
            "track"
          ],
          [
            "!=",
            "type",
            "trunk_link"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-service-link-track-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#c4beb7",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                18,
                12
              ]
            ]
          },
          "line-dasharray": [
            3,
            3
          ]
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "id": "tunnel-street_limited-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#c4beb7",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                13,
                0
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-dasharray": [
            3,
            3
          ],
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "ref": "tunnel-street_limited-low"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "id": "tunnel-street-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#c4beb7",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                13,
                0
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-dasharray": [
            3,
            3
          ],
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "ref": "tunnel-street-low"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "in",
            "class",
            "secondary",
            "tertiary"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-secondary-tertiary-case",
        "paint": {
          "line-width": {
            "base": 1.2,
            "stops": [
              [
                10,
                0.75
              ],
              [
                18,
                2
              ]
            ]
          },
          "line-dasharray": [
            3,
            3
          ],
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                8.5,
                0.5
              ],
              [
                10,
                0.75
              ],
              [
                18,
                26
              ]
            ]
          },
          "line-color": "#c4beb7"
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "class",
            "primary"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-primary-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                16,
                2
              ]
            ]
          },
          "line-dasharray": [
            3,
            3
          ],
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-color": "#c4beb7"
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "type",
            "trunk_link"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-trunk_link-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-dasharray": [
            3,
            3
          ]
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "class",
            "motorway"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-motorway_link-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-dasharray": [
            3,
            3
          ]
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "type",
            "trunk"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-trunk-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                16,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-opacity": 1,
          "line-dasharray": [
            3,
            3
          ]
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "class",
            "motorway"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-motorway-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                16,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-opacity": 1,
          "line-dasharray": [
            3,
            3
          ]
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 14,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "miter"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "class",
            "street_limited"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-construction",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          },
          "line-dasharray": {
            "base": 1,
            "stops": [
              [
                14,
                [
                  0.4,
                  0.8
                ]
              ],
              [
                15,
                [
                  0.3,
                  0.6
                ]
              ],
              [
                16,
                [
                  0.2,
                  0.3
                ]
              ],
              [
                17,
                [
                  0.2,
                  0.25
                ]
              ],
              [
                18,
                [
                  0.15,
                  0.15
                ]
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "class",
            "path"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-path",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                15,
                1
              ],
              [
                18,
                4
              ]
            ]
          },
          "line-dasharray": {
            "base": 1,
            "stops": [
              [
                14,
                [
                  1,
                  0
                ]
              ],
              [
                15,
                [
                  1.75,
                  1
                ]
              ],
              [
                16,
                [
                  1,
                  0.75
                ]
              ],
              [
                17,
                [
                  1,
                  0.5
                ]
              ]
            ]
          },
          "line-color": "#f5f2ee",
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                14,
                0
              ],
              [
                14.25,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "id": "tunnel-trunk_link",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#f2de9e",
          "line-opacity": 1,
          "line-dasharray": [
            1,
            0
          ]
        },
        "ref": "tunnel-trunk_link-case"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "id": "tunnel-motorway_link",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#ffbe8c",
          "line-opacity": 1,
          "line-dasharray": [
            1,
            0
          ]
        },
        "ref": "tunnel-motorway_link-case"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "==",
              "class",
              "pedestrian"
            ],
            [
              "==",
              "structure",
              "tunnel"
            ]
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-pedestrian",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                18,
                12
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": 1,
          "line-dasharray": {
            "base": 1,
            "stops": [
              [
                14,
                [
                  1,
                  0
                ]
              ],
              [
                15,
                [
                  1.5,
                  0.4
                ]
              ],
              [
                16,
                [
                  1,
                  0.2
                ]
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "id": "tunnel-service-link-track",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                18,
                12
              ]
            ]
          },
          "line-color": "#fff",
          "line-dasharray": [
            1,
            0
          ]
        },
        "ref": "tunnel-service-link-track-case"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "id": "tunnel-street_limited",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#EFEDEB",
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "ref": "tunnel-street_limited-low"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "id": "tunnel-street",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "ref": "tunnel-street-low"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "id": "tunnel-secondary-tertiary",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                8.5,
                0.5
              ],
              [
                10,
                0.75
              ],
              [
                18,
                26
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": 1,
          "line-dasharray": [
            1,
            0
          ],
          "line-blur": 0
        },
        "ref": "tunnel-secondary-tertiary-case"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "id": "tunnel-primary",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": 1,
          "line-dasharray": [
            1,
            0
          ],
          "line-blur": 0
        },
        "ref": "tunnel-primary-case"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "symbol-placement": "line",
          "icon-image": {
            "base": 1,
            "stops": [
              [
                16,
                "oneway-spaced-small"
              ],
              [
                17,
                "oneway-spaced-large"
              ]
            ]
          },
          "icon-ignore-placement": false,
          "symbol-spacing": 250,
          "icon-allow-overlap": false,
          "icon-padding": 2
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "class",
            "street_limited"
          ],
          [
            "==",
            "oneway",
            "true"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "tunnel-oneway-arrows-other",
        "paint": {},
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "class",
            "trunk"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-trunk",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-color": "#f2de9e"
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "symbol-placement": "line",
          "icon-image": {
            "base": 1,
            "stops": [
              [
                16,
                "oneway-spaced-white-small"
              ],
              [
                17,
                "oneway-spaced-white-large"
              ]
            ]
          },
          "icon-ignore-placement": false,
          "symbol-spacing": 250,
          "icon-allow-overlap": false,
          "icon-padding": 2
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "type",
            "trunk"
          ],
          [
            "==",
            "oneway",
            "true"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "tunnel-oneway-arrows-trunk",
        "paint": {},
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "id": "tunnel-motorway",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-dasharray": [
            1,
            0
          ],
          "line-opacity": 1,
          "line-color": "#ffbe8c",
          "line-blur": 0
        },
        "ref": "tunnel-motorway-case"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "in",
            "class",
            "major_rail",
            "minor_rail"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "tunnel-rail",
        "paint": {
          "line-color": {
            "stops": [
              [
                13,
                "#d8d5c8"
              ],
              [
                16,
                "#c0beb2"
              ]
            ]
          },
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                20,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "id": "tunnel-rail-tracks",
        "paint": {
          "line-color": {
            "stops": [
              [
                13,
                "#d8d5c8"
              ],
              [
                16,
                "#c0beb2"
              ]
            ]
          },
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                4
              ],
              [
                20,
                8
              ]
            ]
          },
          "line-dasharray": [
            0.1,
            15
          ],
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.75,
                0
              ],
              [
                20,
                1
              ]
            ]
          }
        },
        "ref": "tunnel-rail"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "symbol-placement": "line",
          "icon-image": {
            "base": 1,
            "stops": [
              [
                16,
                "oneway-spaced-white-small"
              ],
              [
                17,
                "oneway-spaced-white-large"
              ]
            ]
          },
          "icon-ignore-placement": false,
          "symbol-spacing": 250,
          "icon-allow-overlap": false,
          "icon-padding": 2
        },
        "metadata": {
          "mapbox:group": "1444855769305.6016"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "tunnel"
          ],
          [
            "==",
            "class",
            "motorway"
          ],
          [
            "==",
            "oneway",
            "true"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "tunnel-oneway-arrows-motorway",
        "paint": {},
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "==",
          "class",
          "ferry"
        ],
        "type": "line",
        "source": "composite",
        "id": "ferry",
        "paint": {
          "line-color": "#5eace5",
          "line-opacity": 1,
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                20,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "class",
            "path"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-path-bg",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                15,
                2
              ],
              [
                18,
                7
              ]
            ]
          },
          "line-dasharray": [
            1,
            0
          ],
          "line-color": "#d9d3c9",
          "line-blur": 0,
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                14,
                0
              ],
              [
                14.25,
                0.5
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 12,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "==",
              "class",
              "pedestrian"
            ],
            [
              "==",
              "structure",
              "none"
            ]
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-pedestrian-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                2
              ],
              [
                18,
                14.5
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-gap-width": 0,
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 11,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "==",
              "class",
              "street"
            ],
            [
              "==",
              "structure",
              "none"
            ]
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-street-low",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": {
            "stops": [
              [
                11,
                0
              ],
              [
                11.25,
                1
              ],
              [
                14,
                1
              ],
              [
                14.01,
                0
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 11,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "==",
              "class",
              "street_limited"
            ],
            [
              "==",
              "structure",
              "none"
            ]
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-street_limited-low",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": {
            "stops": [
              [
                11,
                0
              ],
              [
                11.25,
                1
              ],
              [
                14,
                1
              ],
              [
                14.01,
                0
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 14,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "in",
            "class",
            "service",
            "link",
            "track"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ],
          [
            "!=",
            "type",
            "trunk_link"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-service-link-track-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                18,
                12
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-street_limited-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                13,
                0
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "ref": "road-street_limited-low"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-street-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                13,
                0
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "ref": "road-street-low"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "in",
            "class",
            "secondary",
            "tertiary"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-main-case",
        "paint": {
          "line-width": {
            "base": 1.2,
            "stops": [
              [
                10,
                0.75
              ],
              [
                18,
                2
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                8.5,
                0.5
              ],
              [
                10,
                0.75
              ],
              [
                18,
                26
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                9.99,
                0
              ],
              [
                10,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "class",
            "primary"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-primary-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                16,
                2
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                9.99,
                0
              ],
              [
                10,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 10,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "class",
            "motorway_link"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-motorway_link-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                10.99,
                0
              ],
              [
                11,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 11,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ],
          [
            "==",
            "type",
            "trunk_link"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-trunk_link-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                10.99,
                0
              ],
              [
                11,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 5,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "class",
            "trunk"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-trunk-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                16,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                5.9,
                0
              ],
              [
                6,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "class",
            "motorway"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-motorway-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                16,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-opacity": {
            "base": 1.2,
            "stops": [
              [
                5.9,
                0
              ],
              [
                6,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 14,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "miter"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "==",
              "class",
              "construction"
            ],
            [
              "==",
              "structure",
              "none"
            ]
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-construction",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          },
          "line-dasharray": {
            "base": 1,
            "stops": [
              [
                14,
                [
                  0.4,
                  0.8
                ]
              ],
              [
                15,
                [
                  0.3,
                  0.6
                ]
              ],
              [
                16,
                [
                  0.2,
                  0.3
                ]
              ],
              [
                17,
                [
                  0.2,
                  0.25
                ]
              ],
              [
                18,
                [
                  0.15,
                  0.15
                ]
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "class",
            "path"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-path",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                15,
                1
              ],
              [
                18,
                4
              ]
            ]
          },
          "line-color": "#fff",
          "line-dasharray": {
            "base": 1,
            "stops": [
              [
                14,
                [
                  1,
                  0
                ]
              ],
              [
                15,
                [
                  1.75,
                  1
                ]
              ],
              [
                16,
                [
                  1,
                  0.75
                ]
              ],
              [
                17,
                [
                  1,
                  0.5
                ]
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                14,
                0
              ],
              [
                14.25,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-trunk_link",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#f2cf60",
          "line-opacity": 1
        },
        "ref": "road-trunk_link-case"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-motorway_link",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#ffa159",
          "line-opacity": 1
        },
        "ref": "road-motorway_link-case"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-pedestrian",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                18,
                12
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": 1,
          "line-dasharray": {
            "base": 1,
            "stops": [
              [
                14,
                [
                  1,
                  0
                ]
              ],
              [
                15,
                [
                  1.5,
                  0.4
                ]
              ],
              [
                16,
                [
                  1,
                  0.2
                ]
              ]
            ]
          }
        },
        "ref": "road-pedestrian-case"
      },
      {
        "interactive": true,
        "minzoom": 14,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "in",
            "class",
            "service",
            "link",
            "track"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ],
          [
            "!=",
            "type",
            "trunk_link"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-service-link-track",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                18,
                12
              ]
            ]
          },
          "line-color": "#fff"
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-street_limited",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#EFEDEB",
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "ref": "road-street_limited-low"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-street",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "ref": "road-street-low"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-secondary-tertiary",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                8.5,
                0.5
              ],
              [
                10,
                0.75
              ],
              [
                18,
                26
              ]
            ]
          },
          "line-color": {
            "base": 1,
            "stops": [
              [
                5,
                "#ede9d9"
              ],
              [
                8,
                "#fff"
              ]
            ]
          },
          "line-opacity": {
            "base": 1.2,
            "stops": [
              [
                5,
                0
              ],
              [
                5.5,
                1
              ]
            ]
          }
        },
        "ref": "road-main-case"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-primary",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-color": {
            "base": 1,
            "stops": [
              [
                5,
                "#ede9d9"
              ],
              [
                8,
                "#fff"
              ]
            ]
          },
          "line-opacity": {
            "base": 1.2,
            "stops": [
              [
                5,
                0
              ],
              [
                5.5,
                1
              ]
            ]
          }
        },
        "ref": "road-primary-case"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "symbol-placement": "line",
          "icon-image": {
            "base": 1,
            "stops": [
              [
                16,
                "oneway-spaced-small"
              ],
              [
                17,
                "oneway-spaced-large"
              ]
            ]
          },
          "icon-ignore-placement": false,
          "icon-rotation-alignment": "map",
          "icon-padding": 2,
          "symbol-spacing": 250,
          "icon-allow-overlap": false
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "oneway",
            "true"
          ],
          [
            "in",
            "class",
            "primary",
            "secondary",
            "tertiary",
            "street",
            "street_limited"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "road-oneway-arrows-other",
        "paint": {},
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-trunk",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-color": {
            "base": 1,
            "stops": [
              [
                5.9,
                "#fff"
              ],
              [
                6,
                "#f2cf60"
              ]
            ]
          },
          "line-opacity": {
            "base": 1.2,
            "stops": [
              [
                5,
                0
              ],
              [
                5.5,
                1
              ]
            ]
          }
        },
        "ref": "road-trunk-case"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "symbol-placement": "line",
          "icon-image": {
            "base": 1,
            "stops": [
              [
                16,
                "oneway-spaced-white-small"
              ],
              [
                17,
                "oneway-spaced-white-large"
              ]
            ]
          },
          "icon-ignore-placement": false,
          "icon-padding": 2,
          "symbol-spacing": 250,
          "icon-allow-overlap": false
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "oneway",
            "true"
          ],
          [
            "==",
            "class",
            "trunk"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "road-oneway-arrows-trunk",
        "paint": {},
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-motorway",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-color": {
            "base": 1,
            "stops": [
              [
                5.9,
                "#fff"
              ],
              [
                6,
                "#ffa159"
              ]
            ]
          },
          "line-opacity": {
            "base": 1.2,
            "stops": [
              [
                5,
                0
              ],
              [
                5.5,
                1
              ]
            ]
          }
        },
        "ref": "road-motorway-case"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "in",
            "class",
            "major_rail",
            "minor_rail"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "road-rail",
        "paint": {
          "line-color": {
            "stops": [
              [
                13,
                "#d8d5c8"
              ],
              [
                16,
                "#b3b1a6"
              ]
            ]
          },
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                20,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "id": "road-rail-tracks",
        "paint": {
          "line-color": {
            "stops": [
              [
                13,
                "#d8d5c8"
              ],
              [
                16,
                "#b3b1a6"
              ]
            ]
          },
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                4
              ],
              [
                20,
                8
              ]
            ]
          },
          "line-dasharray": [
            0.1,
            15
          ],
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.75,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "ref": "road-rail"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "symbol-placement": "line",
          "icon-image": {
            "base": 1,
            "stops": [
              [
                16,
                "oneway-spaced-white-small"
              ],
              [
                17,
                "oneway-spaced-white-large"
              ]
            ]
          },
          "icon-ignore-placement": false,
          "icon-padding": 2,
          "symbol-spacing": 250,
          "icon-allow-overlap": false
        },
        "metadata": {
          "mapbox:group": "1444855786460.0557"
        },
        "filter": [
          "all",
          [
            "==",
            "oneway",
            "true"
          ],
          [
            "in",
            "class",
            "motorway",
            "motorway_link",
            "trunk"
          ],
          [
            "!in",
            "structure",
            "bridge",
            "tunnel"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "road-oneway-arrows-motorway",
        "paint": {},
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "path"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-path-bg",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                15,
                2
              ],
              [
                18,
                7
              ]
            ]
          },
          "line-dasharray": [
            1,
            0
          ],
          "line-color": "#d9d3c9",
          "line-blur": 0,
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                15,
                0
              ],
              [
                15.25,
                0.75
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "all",
            [
              "==",
              "class",
              "pedestrian"
            ],
            [
              "==",
              "structure",
              "bridge"
            ]
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-pedestrian-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                2
              ],
              [
                18,
                14.5
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-gap-width": 0,
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 11,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "street"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-street-low",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": {
            "stops": [
              [
                11.5,
                0
              ],
              [
                12,
                1
              ],
              [
                14,
                1
              ],
              [
                14.01,
                0
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 11,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "street_limited"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-street_limited-low",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": {
            "stops": [
              [
                11.5,
                0
              ],
              [
                12,
                1
              ],
              [
                14,
                1
              ],
              [
                14.01,
                0
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 14,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "in",
            "class",
            "service",
            "link",
            "track"
          ],
          [
            "!=",
            "type",
            "trunk_link"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-service-link-track-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                18,
                12
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 11,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "street_limited"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-street_limited-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                13,
                0
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 11,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "street"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-street-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          },
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                13,
                0
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "in",
            "class",
            "secondary",
            "tertiary"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-secondary-tertiary-case",
        "paint": {
          "line-width": {
            "base": 1.2,
            "stops": [
              [
                10,
                0.75
              ],
              [
                18,
                2
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                8.5,
                0.5
              ],
              [
                10,
                0.75
              ],
              [
                18,
                26
              ]
            ]
          },
          "line-translate": [
            0,
            0
          ]
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "primary"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-primary-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                16,
                2
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-translate": [
            0,
            0
          ]
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "symbol-placement": "line",
          "icon-image": {
            "base": 1,
            "stops": [
              [
                16,
                "oneway-spaced-small"
              ],
              [
                17,
                "oneway-spaced-large"
              ]
            ]
          },
          "icon-ignore-placement": false,
          "symbol-spacing": 250,
          "icon-allow-overlap": false,
          "icon-rotation-alignment": "map",
          "icon-padding": 2
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "in",
            "class",
            "street",
            "street_limited",
            "service",
            "path",
            "pedestrian",
            "track",
            "link"
          ],
          [
            "==",
            "oneway",
            "true"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "bridge-oneway-arrows-other",
        "paint": {},
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "type",
            "trunk_link"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-trunk_link-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                10.99,
                0
              ],
              [
                11,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "motorway_link"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-motorway_link-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.75
              ],
              [
                20,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-opacity": 1
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "trunk"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-trunk-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                16,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "motorway"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-motorway-case",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                16,
                2
              ]
            ]
          },
          "line-color": "#fff",
          "line-gap-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 14,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "miter"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "in",
            "class",
            "street",
            "street_limited",
            "service",
            "path",
            "pedestrian",
            "track",
            "link"
          ],
          [
            "==",
            "class",
            "construction"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-construction",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#d9d3c9",
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          },
          "line-dasharray": {
            "base": 1,
            "stops": [
              [
                14,
                [
                  0.4,
                  0.8
                ]
              ],
              [
                15,
                [
                  0.3,
                  0.6
                ]
              ],
              [
                16,
                [
                  0.2,
                  0.3
                ]
              ],
              [
                17,
                [
                  0.2,
                  0.25
                ]
              ],
              [
                18,
                [
                  0.15,
                  0.15
                ]
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "path"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-path",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                15,
                1
              ],
              [
                18,
                4
              ]
            ]
          },
          "line-color": "#fff",
          "line-dasharray": {
            "base": 1,
            "stops": [
              [
                14,
                [
                  1,
                  0
                ]
              ],
              [
                15,
                [
                  1.75,
                  1
                ]
              ],
              [
                16,
                [
                  1,
                  0.75
                ]
              ],
              [
                17,
                [
                  1,
                  0.5
                ]
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                14,
                0
              ],
              [
                14.25,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "id": "bridge-trunk_link",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#f2cf60"
        },
        "ref": "bridge-trunk_link-case"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "motorway_link"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-motorway_link",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#ffa159"
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "id": "bridge-pedestrian",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                18,
                12
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": 1,
          "line-dasharray": {
            "base": 1,
            "stops": [
              [
                14,
                [
                  1,
                  0
                ]
              ],
              [
                15,
                [
                  1.5,
                  0.4
                ]
              ],
              [
                16,
                [
                  1,
                  0.2
                ]
              ]
            ]
          }
        },
        "ref": "bridge-pedestrian-case"
      },
      {
        "interactive": true,
        "minzoom": 14,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "in",
            "class",
            "service",
            "link",
            "track"
          ],
          [
            "!=",
            "type",
            "trunk_link"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-service-link-track",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                18,
                12
              ]
            ]
          },
          "line-color": "#fff"
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "id": "bridge-street_limited",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#EFEDEB",
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "ref": "bridge-street_limited-low"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "id": "bridge-street",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                12.5,
                0.5
              ],
              [
                14,
                2
              ],
              [
                18,
                18
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "ref": "bridge-street-low"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "in",
            "type",
            "secondary",
            "tertiary"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-secondary-tertiary",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                8.5,
                0.5
              ],
              [
                10,
                0.75
              ],
              [
                18,
                26
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": {
            "base": 1.2,
            "stops": [
              [
                5,
                0
              ],
              [
                5.5,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "type",
            "primary"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-primary",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-color": "#fff",
          "line-opacity": {
            "base": 1.2,
            "stops": [
              [
                5,
                0
              ],
              [
                5.5,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "trunk"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-trunk",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-color": "#f2cf60"
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "symbol-placement": "line",
          "icon-image": {
            "base": 1,
            "stops": [
              [
                16,
                "oneway-spaced-white-small"
              ],
              [
                17,
                "oneway-spaced-white-large"
              ]
            ]
          },
          "icon-ignore-placement": false,
          "symbol-spacing": 250,
          "icon-allow-overlap": false,
          "icon-padding": 2
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "type",
            "trunk"
          ],
          [
            "==",
            "oneway",
            "true"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "bridge-oneway-arrows-trunk",
        "paint": {},
        "source-layer": "road"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "motorway"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-motorway",
        "paint": {
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                5,
                0.75
              ],
              [
                18,
                32
              ]
            ]
          },
          "line-color": "#ffa159"
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "in",
            "class",
            "major_rail",
            "minor_rail"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-rail",
        "paint": {
          "line-color": {
            "stops": [
              [
                13,
                "#d8d5c8"
              ],
              [
                16,
                "#b3b1a6"
              ]
            ]
          },
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                20,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "id": "bridge-rail-tracks",
        "paint": {
          "line-color": {
            "stops": [
              [
                13,
                "#d8d5c8"
              ],
              [
                16,
                "#b3b1a6"
              ]
            ]
          },
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                4
              ],
              [
                20,
                8
              ]
            ]
          },
          "line-dasharray": [
            0.1,
            15
          ],
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                13.75,
                0
              ],
              [
                20,
                1
              ]
            ]
          }
        },
        "ref": "bridge-rail"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "==",
            "class",
            "aerialway"
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "bridge-aerialway",
        "paint": {
          "line-color": "#b3ada6",
          "line-width": {
            "base": 1.5,
            "stops": [
              [
                14,
                0.5
              ],
              [
                20,
                1
              ]
            ]
          }
        },
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "symbol-placement": "line",
          "icon-image": {
            "base": 1,
            "stops": [
              [
                16,
                "oneway-spaced-white-small"
              ],
              [
                17,
                "oneway-spaced-white-large"
              ]
            ]
          },
          "icon-ignore-placement": false,
          "symbol-spacing": 250,
          "icon-allow-overlap": false,
          "icon-padding": 2
        },
        "metadata": {
          "mapbox:group": "1444855799204.86"
        },
        "filter": [
          "all",
          [
            "==",
            "structure",
            "bridge"
          ],
          [
            "in",
            "class",
            "motorway",
            "trunk"
          ],
          [
            "==",
            "oneway",
            "true"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "bridge-oneway-arrows-motorway",
        "paint": {},
        "source-layer": "road"
      },
      {
        "interactive": true,
        "minzoom": 16,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "filter": [
          "==",
          "class",
          "hedge"
        ],
        "type": "line",
        "source": "composite",
        "id": "hedges",
        "paint": {
          "line-color": "#e2f4c2",
          "line-width": {
            "base": 1,
            "stops": [
              [
                16,
                1
              ],
              [
                20,
                3
              ]
            ]
          },
          "line-opacity": 1,
          "line-dasharray": [
            1,
            2,
            5,
            2,
            1,
            2
          ]
        },
        "source-layer": "barrier_line"
      },
      {
        "interactive": true,
        "minzoom": 16,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "filter": [
          "==",
          "class",
          "fence"
        ],
        "type": "line",
        "source": "composite",
        "id": "fences",
        "paint": {
          "line-color": "#cbc6b7",
          "line-width": {
            "base": 1,
            "stops": [
              [
                16,
                1
              ],
              [
                20,
                3
              ]
            ]
          },
          "line-opacity": 1,
          "line-dasharray": [
            1,
            2,
            5,
            2,
            1,
            2
          ]
        },
        "source-layer": "barrier_line"
      },
      {
        "interactive": true,
        "minzoom": 17,
        "layout": {
          "visibility": "visible",
          "line-cap": "round",
          "line-join": "round"
        },
        "filter": [
          "==",
          "class",
          "gate"
        ],
        "type": "line",
        "source": "composite",
        "id": "gates",
        "paint": {
          "line-color": "#cbc6b7",
          "line-width": {
            "base": 1,
            "stops": [
              [
                16,
                1
              ],
              [
                20,
                3
              ]
            ]
          },
          "line-opacity": 0.5,
          "line-dasharray": [
            1,
            2,
            5,
            2,
            1,
            2
          ]
        },
        "source-layer": "barrier_line"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-join": "bevel"
        },
        "metadata": {
          "mapbox:group": "1444934295202.7542"
        },
        "filter": [
          "all",
          [
            ">=",
            "admin_level",
            3
          ],
          [
            "==",
            "maritime",
            0
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "admin-3-4-boundaries-bg",
        "paint": {
          "line-color": {
            "base": 1,
            "stops": [
              [
                8,
                "#ede9d9"
              ],
              [
                16,
                "#f6e8e1"
              ]
            ]
          },
          "line-width": {
            "base": 1,
            "stops": [
              [
                3,
                3.5
              ],
              [
                10,
                8
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                7,
                0
              ],
              [
                8,
                0.75
              ]
            ]
          },
          "line-dasharray": [
            1,
            0
          ],
          "line-translate": [
            0,
            0
          ],
          "line-blur": {
            "base": 1,
            "stops": [
              [
                3,
                0
              ],
              [
                8,
                3
              ]
            ]
          }
        },
        "source-layer": "admin"
      },
      {
        "interactive": true,
        "minzoom": 1,
        "layout": {
          "visibility": "visible",
          "line-join": "miter",
          "line-cap": "butt"
        },
        "metadata": {
          "mapbox:group": "1444934295202.7542"
        },
        "filter": [
          "all",
          [
            "==",
            "admin_level",
            2
          ],
          [
            "==",
            "maritime",
            0
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "admin-2-boundaries-bg",
        "paint": {
          "line-width": {
            "base": 1,
            "stops": [
              [
                3,
                3.5
              ],
              [
                10,
                10
              ]
            ]
          },
          "line-color": {
            "base": 1,
            "stops": [
              [
                6,
                "#ede9d9"
              ],
              [
                8,
                "#f6e8e1"
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                3,
                0
              ],
              [
                4,
                0.5
              ]
            ]
          },
          "line-translate": [
            0,
            0
          ],
          "line-blur": {
            "base": 1,
            "stops": [
              [
                3,
                0
              ],
              [
                10,
                2
              ]
            ]
          }
        },
        "source-layer": "admin"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "line-join": "round",
          "line-cap": "round"
        },
        "metadata": {
          "mapbox:group": "1444934295202.7542"
        },
        "filter": [
          "all",
          [
            ">=",
            "admin_level",
            3
          ],
          [
            "==",
            "maritime",
            0
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "admin-3-4-boundaries",
        "paint": {
          "line-dasharray": {
            "base": 1,
            "stops": [
              [
                6,
                [
                  2,
                  0
                ]
              ],
              [
                7,
                [
                  2,
                  2,
                  6,
                  2
                ]
              ]
            ]
          },
          "line-width": {
            "base": 1,
            "stops": [
              [
                7,
                0.75
              ],
              [
                12,
                1.5
              ]
            ]
          },
          "line-opacity": {
            "base": 1,
            "stops": [
              [
                2,
                0
              ],
              [
                3,
                1
              ]
            ]
          },
          "line-color": {
            "base": 1,
            "stops": [
              [
                3,
                "#c3bfcc"
              ],
              [
                7,
                "#aba8b3"
              ]
            ]
          }
        },
        "source-layer": "admin"
      },
      {
        "interactive": true,
        "minzoom": 1,
        "layout": {
          "visibility": "visible",
          "line-join": "round",
          "line-cap": "round"
        },
        "metadata": {
          "mapbox:group": "1444934295202.7542"
        },
        "filter": [
          "all",
          [
            "==",
            "admin_level",
            2
          ],
          [
            "==",
            "maritime",
            0
          ],
          [
            "==",
            "disputed",
            0
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "admin-2-boundaries",
        "paint": {
          "line-color": "#787680",
          "line-width": {
            "base": 1,
            "stops": [
              [
                3,
                0.5
              ],
              [
                10,
                2
              ]
            ]
          }
        },
        "source-layer": "admin"
      },
      {
        "interactive": true,
        "minzoom": 1,
        "layout": {
          "visibility": "visible",
          "line-cap": "butt",
          "line-join": "round"
        },
        "metadata": {
          "mapbox:group": "1444934295202.7542"
        },
        "filter": [
          "all",
          [
            "==",
            "admin_level",
            2
          ],
          [
            "==",
            "maritime",
            0
          ],
          [
            "==",
            "disputed",
            1
          ]
        ],
        "type": "line",
        "source": "composite",
        "id": "admin-2-boundaries-dispute",
        "paint": {
          "line-dasharray": [
            1.5,
            1.5
          ],
          "line-color": "#787680",
          "line-width": {
            "base": 1,
            "stops": [
              [
                3,
                0.5
              ],
              [
                10,
                2
              ]
            ]
          }
        },
        "source-layer": "admin"
      },
      {
        "interactive": true,
        "minzoom": 14,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444933837268.9458"
        },
        "filter": [
          "!in",
          "index",
          5,
          10
        ],
        "type": "line",
        "source": "composite",
        "id": "contour",
        "paint": {
          "line-opacity": 0.07,
          "line-color": "#66601a"
        },
        "source-layer": "contour"
      },
      {
        "interactive": true,
        "minzoom": 14,
        "layout": {
          "visibility": "visible"
        },
        "metadata": {
          "mapbox:group": "1444933837268.9458"
        },
        "filter": [
          "in",
          "index",
          5,
          10
        ],
        "type": "line",
        "source": "composite",
        "id": "contour-index",
        "paint": {
          "line-opacity": 0.12,
          "line-color": "#66601a"
        },
        "source-layer": "contour"
      },
      {
        "id": "housenum-label",
        "type": "symbol",
        "source": "composite",
        "source-layer": "housenum_label",
        "minzoom": 17,
        "layout": {
          "visibility": "visible",
          "text-field": "{house_num}",
          "text-font": [
            "DIN Offc Pro Italic",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 4,
          "text-max-width": 7,
          "text-size": 9.5
        },
        "paint": {
          "text-color": "#b2aca5",
          "text-halo-color": "#e8e0cc",
          "text-halo-width": 1.5,
          "text-halo-blur": 0
        },
        "interactive": true
      },
      {
        "interactive": true,
        "minzoom": 14,
        "layout": {
          "text-field": "{ele} m",
          "symbol-placement": "line",
          "text-max-angle": 25,
          "visibility": "visible",
          "text-padding": 5,
          "text-font": [
            "DIN Offc Pro Regular",
            "Arial Unicode MS Regular"
          ],
          "text-size": 9.5
        },
        "filter": [
          "in",
          "index",
          5,
          10
        ],
        "type": "symbol",
        "source": "composite",
        "id": "contour-index-label",
        "paint": {
          "text-color": "#a7a696",
          "text-halo-width": 1,
          "text-halo-blur": 1,
          "text-halo-color": "rgba(237,233,217, 0.25)"
        },
        "source-layer": "contour"
      },
      {
        "interactive": true,
        "minzoom": 12,
        "layout": {
          "text-field": "{name_en}",
          "visibility": "visible",
          "text-font": [
            "DIN Offc Pro Italic",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "line",
          "text-max-angle": 30,
          "text-size": {
            "base": 1,
            "stops": [
              [
                13,
                12
              ],
              [
                18,
                16
              ]
            ]
          }
        },
        "filter": [
          "==",
          "class",
          "river"
        ],
        "type": "symbol",
        "source": "composite",
        "id": "waterway-label",
        "paint": {
          "text-halo-width": 0.5,
          "text-halo-color": "#ffffff",
          "text-color": "#004087",
          "text-halo-blur": 0.5
        },
        "source-layer": "waterway_label"
      },
      {
        "interactive": true,
        "minzoom": 17,
        "layout": {
          "text-line-height": 1.2,
          "text-size": {
            "base": 1,
            "stops": [
              [
                16,
                11
              ],
              [
                20,
                13
              ]
            ]
          },
          "text-allow-overlap": false,
          "icon-image": "{maki}-11",
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 2,
          "visibility": "visible",
          "text-offset": [
            0,
            1
          ],
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "top",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.02,
          "text-max-width": 8
        },
        "metadata": {
          "mapbox:group": "1444933456003.5437"
        },
        "filter": [
          "all",
          [
            "!in",
            "maki",
            "park",
            "golf",
            "cemetery",
            "zoo",
            "campsite",
            "swimming",
            "dog-park"
          ],
          [
            "==",
            "scalerank",
            4
          ],
          [
            ">=",
            "localrank",
            15
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "poi-scalerank4-l15",
        "paint": {
          "text-color": "#65513d",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "poi_label"
      },
      {
        "interactive": true,
        "minzoom": 16,
        "layout": {
          "text-line-height": 1.2,
          "text-size": {
            "base": 1,
            "stops": [
              [
                16,
                11
              ],
              [
                20,
                13
              ]
            ]
          },
          "text-allow-overlap": false,
          "icon-image": "{maki}-11",
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 1,
          "visibility": "visible",
          "text-offset": [
            0,
            1
          ],
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "top",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.02,
          "text-max-width": 8
        },
        "metadata": {
          "mapbox:group": "1444933456003.5437"
        },
        "filter": [
          "all",
          [
            "!in",
            "maki",
            "park",
            "golf",
            "cemetery",
            "zoo",
            "campsite",
            "swimming",
            "dog-park"
          ],
          [
            "==",
            "scalerank",
            4
          ],
          [
            "<=",
            "localrank",
            14
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "poi-scalerank4-l1",
        "paint": {
          "text-color": "#65513d",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "poi_label"
      },
      {
        "interactive": true,
        "minzoom": 16,
        "layout": {
          "text-line-height": 1.2,
          "text-size": {
            "base": 1,
            "stops": [
              [
                16,
                11
              ],
              [
                20,
                13
              ]
            ]
          },
          "text-allow-overlap": false,
          "icon-image": "{maki}-11",
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 1,
          "visibility": "visible",
          "text-offset": [
            0,
            1
          ],
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "top",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.02,
          "text-max-width": 8
        },
        "metadata": {
          "mapbox:group": "1444933456003.5437"
        },
        "filter": [
          "all",
          [
            "in",
            "maki",
            "park",
            "cemetery",
            "golf",
            "zoo",
            "playground"
          ],
          [
            "==",
            "scalerank",
            4
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "poi-parks_scalerank4",
        "paint": {
          "text-color": "#4c661f",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "poi_label"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "text-line-height": 1.2,
          "text-size": {
            "base": 1,
            "stops": [
              [
                16,
                11
              ],
              [
                20,
                13
              ]
            ]
          },
          "text-allow-overlap": false,
          "icon-image": "{maki}-11",
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 1,
          "visibility": "visible",
          "text-offset": [
            0,
            1
          ],
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "top",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.02,
          "text-max-width": 8
        },
        "metadata": {
          "mapbox:group": "1444933372896.5967"
        },
        "filter": [
          "all",
          [
            "!in",
            "maki",
            "park",
            "golf",
            "cemetery",
            "zoo",
            "campsite",
            "swimming",
            "dog-park"
          ],
          [
            "==",
            "scalerank",
            3
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "poi-scalerank3",
        "paint": {
          "text-color": "#65513d",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "poi_label"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "text-line-height": 1.2,
          "text-size": {
            "base": 1,
            "stops": [
              [
                16,
                11
              ],
              [
                20,
                13
              ]
            ]
          },
          "text-allow-overlap": false,
          "icon-image": "{maki}-11",
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 2,
          "visibility": "visible",
          "text-offset": [
            0,
            1
          ],
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "top",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.02,
          "text-max-width": 8
        },
        "metadata": {
          "mapbox:group": "1444933372896.5967"
        },
        "filter": [
          "all",
          [
            "in",
            "maki",
            "park",
            "cemetery",
            "golf",
            "zoo"
          ],
          [
            "==",
            "scalerank",
            3
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "poi-parks-scalerank3",
        "paint": {
          "text-color": "#4c661f",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "poi_label"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "text-size": {
            "base": 1,
            "stops": [
              [
                15,
                10
              ],
              [
                20,
                13
              ]
            ]
          },
          "text-ignore-placement": false,
          "text-max-angle": 30,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Regular",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "line",
          "text-padding": 1,
          "visibility": "visible",
          "text-rotation-alignment": "map",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.01
        },
        "metadata": {
          "mapbox:group": "1444933721429.3076"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "!in",
            "class",
            "motorway",
            "street_limited",
            "street",
            "trunk",
            "primary",
            "secondary",
            "tertiary",
            "link",
            "pedestrian"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "road-label-small",
        "paint": {
          "text-color": "#3a3836",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.25,
          "text-halo-blur": 1
        },
        "source-layer": "road_label"
      },
      {
        "interactive": true,
        "minzoom": 11,
        "layout": {
          "text-size": {
            "base": 1,
            "stops": [
              [
                11,
                10
              ],
              [
                20,
                14
              ]
            ]
          },
          "text-max-angle": 30,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Regular",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "line",
          "text-padding": 1,
          "visibility": "visible",
          "text-rotation-alignment": "map",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.01
        },
        "metadata": {
          "mapbox:group": "1444933721429.3076"
        },
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "in",
            "class",
            "street",
            "street_limited",
            "link",
            "pedestrian"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "road-label-medium",
        "paint": {
          "text-color": "#3a3836",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "road_label"
      },
      {
        "interactive": true,
        "layout": {
          "text-size": {
            "base": 1,
            "stops": [
              [
                9,
                10
              ],
              [
                20,
                16
              ]
            ]
          },
          "text-allow-overlap": false,
          "text-ignore-placement": false,
          "text-max-angle": 30,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Regular",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "line",
          "text-padding": 1,
          "visibility": "visible",
          "text-rotation-alignment": "map",
          "text-keep-upright": true,
          "text-field": "{name_en}",
          "text-letter-spacing": 0.01
        },
        "metadata": {
          "mapbox:group": "1444933721429.3076"
        },
        "filter": [
          "in",
          "class",
          "motorway",
          "trunk",
          "primary",
          "secondary",
          "tertiary"
        ],
        "type": "symbol",
        "source": "composite",
        "id": "road-label-large",
        "paint": {
          "text-color": "#3a3836",
          "text-halo-color": "rgba(255,255,255, 0.75)",
          "text-halo-width": 1,
          "text-halo-blur": 1
        },
        "source-layer": "road_label"
      },
      {
        "interactive": true,
        "layout": {
          "text-size": 9,
          "text-allow-overlap": false,
          "icon-image": "{shield}-{reflen}",
          "icon-rotation-alignment": "viewport",
          "symbol-avoid-edges": false,
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": {
            "base": 1,
            "stops": [
              [
                11,
                150
              ],
              [
                14,
                200
              ]
            ]
          },
          "text-font": [
            "DIN Offc Pro Bold",
            "Arial Unicode MS Bold"
          ],
          "symbol-placement": {
            "base": 1,
            "stops": [
              [
                10,
                "point"
              ],
              [
                11,
                "line"
              ]
            ]
          },
          "text-padding": 2,
          "visibility": "visible",
          "text-rotation-alignment": "viewport",
          "text-field": "{ref}",
          "text-letter-spacing": 0.05,
          "icon-padding": 2
        },
        "metadata": {
          "mapbox:group": "1444933575858.6992"
        },
        "filter": [
          "all",
          [
            "!in",
            "shield",
            "us-interstate",
            "us-interstate-business",
            "us-interstate-duplex",
            "se-main",
            "at-expressway",
            "at-motorway",
            "at-state-b",
            "de-motorway",
            "ch-motorway",
            "ch-main",
            "e-road",
            "hu-main",
            "hu-motorway",
            "gr-motorway",
            "gr-national",
            "bg-motorway",
            "bg-national",
            "hr-motorway",
            "hr-state",
            "cz-motorway",
            "cz-expressway",
            "cz-road",
            "fi-main",
            "nz-state",
            "pl-motorway",
            "pl-expressway",
            "pl-national",
            "ro-motorway",
            "ro-national",
            "ro-county",
            "sk-highway",
            "sk-road",
            "si-motorway",
            "si-expressway",
            "za-metropolitan",
            "za-national",
            "za-provincial",
            "za-regional",
            "rs-motorway",
            "rs-state-1b"
          ],
          [
            "<=",
            "reflen",
            6
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "road-shields-black",
        "paint": {
          "text-color": "#3a3836",
          "icon-halo-color": "rgba(0, 0, 0, 1)",
          "icon-halo-width": 1,
          "text-opacity": 1,
          "icon-color": "white",
          "text-halo-color": "#ffffff",
          "text-halo-width": 0
        },
        "source-layer": "road_label"
      },
      {
        "interactive": true,
        "layout": {
          "text-size": 9,
          "text-allow-overlap": false,
          "icon-image": "{shield}-{reflen}",
          "icon-rotation-alignment": "viewport",
          "symbol-avoid-edges": false,
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": {
            "base": 1,
            "stops": [
              [
                11,
                150
              ],
              [
                14,
                200
              ]
            ]
          },
          "text-font": [
            "DIN Offc Pro Bold",
            "Arial Unicode MS Bold"
          ],
          "symbol-placement": {
            "base": 1,
            "stops": [
              [
                10,
                "point"
              ],
              [
                11,
                "line"
              ]
            ]
          },
          "text-padding": 2,
          "visibility": "visible",
          "text-rotation-alignment": "viewport",
          "text-field": "{ref}",
          "text-letter-spacing": 0.05,
          "icon-padding": 2
        },
        "metadata": {
          "mapbox:group": "1444933575858.6992"
        },
        "filter": [
          "all",
          [
            "in",
            "shield",
            "us-interstate",
            "us-interstate-business",
            "us-interstate-duplex",
            "se-main",
            "at-expressway",
            "at-motorway",
            "at-state-b",
            "de-motorway",
            "ch-motorway",
            "ch-main",
            "e-road",
            "hu-main",
            "hu-motorway",
            "gr-motorway",
            "gr-national",
            "bg-motorway",
            "bg-national",
            "hr-motorway",
            "hr-state",
            "cz-motorway",
            "cz-expressway",
            "cz-road",
            "fi-main",
            "nz-state",
            "pl-motorway",
            "pl-expressway",
            "pl-national",
            "ro-motorway",
            "ro-national",
            "ro-county",
            "sk-highway",
            "sk-road",
            "si-motorway",
            "si-expressway",
            "za-metropolitan",
            "za-national",
            "za-provincial",
            "za-regional",
            "rs-motorway",
            "rs-state-1b"
          ],
          [
            "<=",
            "reflen",
            6
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "road-shields-white",
        "paint": {
          "text-color": "#fff",
          "icon-halo-color": "rgba(0, 0, 0, 1)",
          "icon-halo-width": 1,
          "text-opacity": 1,
          "icon-color": "white",
          "text-halo-color": "#ffffff",
          "text-halo-width": 0
        },
        "source-layer": "road_label"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "text-line-height": 1.2,
          "text-size": {
            "base": 1,
            "stops": [
              [
                14,
                11
              ],
              [
                20,
                14
              ]
            ]
          },
          "text-allow-overlap": false,
          "icon-image": {
            "stops": [
              [
                14,
                "{maki}-11"
              ],
              [
                15,
                "{maki}-15"
              ]
            ]
          },
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 2,
          "visibility": "visible",
          "text-offset": [
            0,
            1.25
          ],
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "top",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.02,
          "text-max-width": 8
        },
        "metadata": {
          "mapbox:group": "1444933358918.2366"
        },
        "filter": [
          "all",
          [
            "!in",
            "maki",
            "park",
            "golf",
            "cemetery",
            "zoo",
            "campsite",
            "swimming",
            "dog-park"
          ],
          [
            "==",
            "scalerank",
            2
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "poi-scalerank2",
        "paint": {
          "text-color": "#65513d",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.25
        },
        "source-layer": "poi_label"
      },
      {
        "interactive": true,
        "minzoom": 13,
        "layout": {
          "text-line-height": 1.2,
          "text-size": {
            "base": 1,
            "stops": [
              [
                14,
                11
              ],
              [
                20,
                14
              ]
            ]
          },
          "text-allow-overlap": false,
          "icon-image": {
            "stops": [
              [
                14,
                "{maki}-11"
              ],
              [
                15,
                "{maki}-15"
              ]
            ]
          },
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 2,
          "visibility": "visible",
          "text-offset": [
            0,
            1.25
          ],
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "top",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.02,
          "text-max-width": 8
        },
        "metadata": {
          "mapbox:group": "1444933358918.2366"
        },
        "filter": [
          "all",
          [
            "in",
            "maki",
            "park",
            "golf",
            "cemetery",
            "zoo",
            "campsite",
            "swimming",
            "dog-park"
          ],
          [
            "==",
            "scalerank",
            2
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "poi-parks-scalerank2",
        "paint": {
          "text-color": "#4c661f",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.25
        },
        "source-layer": "poi_label"
      },
      {
        "interactive": true,
        "minzoom": 12,
        "layout": {
          "text-size": {
            "base": 1,
            "stops": [
              [
                16,
                11
              ],
              [
                20,
                13
              ]
            ]
          },
          "icon-image": "{network}",
          "symbol-avoid-edges": true,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "icon-allow-overlap": false,
          "symbol-placement": "point",
          "text-justify": "center",
          "visibility": "visible",
          "text-offset": [
            0,
            1
          ],
          "text-rotation-alignment": "viewport",
          "text-anchor": "top",
          "text-field": {
            "base": 1,
            "stops": [
              [
                0,
                ""
              ],
              [
                13,
                "{name_en}"
              ]
            ]
          },
          "text-letter-spacing": 0.02,
          "icon-padding": 0,
          "text-max-width": 7
        },
        "type": "symbol",
        "source": "composite",
        "id": "rail-label",
        "paint": {
          "text-color": "#65513d",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.5,
          "icon-halo-width": 4,
          "icon-halo-color": "#fff",
          "text-opacity": {
            "base": 1,
            "stops": [
              [
                13.99,
                0
              ],
              [
                14,
                1
              ]
            ]
          }
        },
        "source-layer": "rail_station_label"
      },
      {
        "interactive": true,
        "minzoom": 15,
        "layout": {
          "text-field": "{name_en}",
          "visibility": "visible",
          "text-font": [
            "DIN Offc Pro Italic",
            "Arial Unicode MS Regular"
          ],
          "text-max-width": 7,
          "text-size": {
            "base": 1,
            "stops": [
              [
                16,
                13
              ],
              [
                20,
                16
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444933808272.805"
        },
        "filter": [
          "<=",
          "area",
          10000
        ],
        "type": "symbol",
        "source": "composite",
        "id": "water-label-sm",
        "paint": {
          "text-halo-width": 0,
          "text-halo-color": "#ffffff",
          "text-color": "#004087",
          "text-halo-blur": 1.5
        },
        "source-layer": "water_label"
      },
      {
        "interactive": true,
        "minzoom": 5,
        "layout": {
          "text-field": "{name_en}",
          "visibility": "visible",
          "text-font": [
            "DIN Offc Pro Italic",
            "Arial Unicode MS Regular"
          ],
          "text-max-width": 7,
          "text-size": {
            "base": 1,
            "stops": [
              [
                13,
                13
              ],
              [
                18,
                18
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444933808272.805"
        },
        "filter": [
          ">",
          "area",
          10000
        ],
        "type": "symbol",
        "source": "composite",
        "id": "water-label",
        "paint": {
          "text-halo-width": 0,
          "text-halo-color": "#ffffff",
          "text-color": "#004087",
          "text-halo-blur": 1.5
        },
        "source-layer": "water_label"
      },
      {
        "interactive": true,
        "layout": {
          "text-line-height": 1.2,
          "text-size": {
            "base": 1,
            "stops": [
              [
                10,
                11
              ],
              [
                18,
                14
              ]
            ]
          },
          "text-allow-overlap": false,
          "icon-image": {
            "stops": [
              [
                13,
                "{maki}-11"
              ],
              [
                14,
                "{maki}-15"
              ]
            ]
          },
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 2,
          "visibility": "visible",
          "text-offset": [
            0,
            1
          ],
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "top",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.02,
          "text-max-width": 8
        },
        "metadata": {
          "mapbox:group": "1444933322393.2852"
        },
        "filter": [
          "all",
          [
            "in",
            "maki",
            "park",
            "golf",
            "cemetery",
            "zoo",
            "campsite",
            "swimming",
            "dog-park"
          ],
          [
            "<=",
            "scalerank",
            1
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "poi-parks-scalerank1",
        "paint": {
          "text-color": "#4c661f",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
          "text-halo-blur": 0
        },
        "source-layer": "poi_label"
      },
      {
        "interactive": true,
        "layout": {
          "text-line-height": 1.2,
          "text-size": {
            "base": 1,
            "stops": [
              [
                10,
                11
              ],
              [
                18,
                14
              ]
            ]
          },
          "text-allow-overlap": false,
          "icon-image": {
            "stops": [
              [
                13,
                "{maki}-11"
              ],
              [
                14,
                "{maki}-15"
              ]
            ]
          },
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 2,
          "visibility": "visible",
          "text-offset": [
            0,
            1
          ],
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "top",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.02,
          "text-max-width": 8
        },
        "metadata": {
          "mapbox:group": "1444933322393.2852"
        },
        "filter": [
          "all",
          [
            "!in",
            "maki",
            "park",
            "golf",
            "cemetery",
            "zoo",
            "campsite",
            "swimming",
            "dog-park"
          ],
          [
            "<=",
            "scalerank",
            1
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "poi-scalerank1",
        "paint": {
          "text-color": "#65513d",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "poi_label"
      },
      {
        "interactive": true,
        "minzoom": 9,
        "layout": {
          "text-size": {
            "base": 1,
            "stops": [
              [
                10,
                12
              ],
              [
                18,
                18
              ]
            ]
          },
          "text-allow-overlap": false,
          "icon-image": {
            "stops": [
              [
                12,
                "{maki}-11"
              ],
              [
                13,
                "{maki}-15"
              ]
            ]
          },
          "text-ignore-placement": false,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Regular",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 2,
          "visibility": "visible",
          "text-offset": {
            "base": 1,
            "stops": [
              [
                12,
                [
                  0,
                  1
                ]
              ],
              [
                13,
                [
                  0,
                  1.25
                ]
              ]
            ]
          },
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "top",
          "text-field": {
            "stops": [
              [
                12,
                "{ref}"
              ],
              [
                13,
                "{name_en}"
              ]
            ]
          },
          "text-letter-spacing": 0.02,
          "text-max-width": 9
        },
        "filter": [
          "<=",
          "scalerank",
          2
        ],
        "type": "symbol",
        "source": "composite",
        "id": "airport-label",
        "paint": {
          "text-color": "#000000",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.25
        },
        "source-layer": "airport_label"
      },
      {
        "interactive": true,
        "layout": {
          "text-line-height": 1.2,
          "text-size": {
            "base": 1,
            "stops": [
              [
                10,
                11
              ],
              [
                14,
                16
              ]
            ]
          },
          "text-allow-overlap": false,
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Regular",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 2,
          "visibility": "visible",
          "text-offset": [
            0,
            0
          ],
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "center",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.02,
          "text-max-width": 8
        },
        "filter": [
          "==",
          "type",
          "islet"
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-islets",
        "paint": {
          "text-color": "#65513d",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "minzoom": 10,
        "layout": {
          "visibility": "visible",
          "text-field": "{name_en}",
          "text-transform": "uppercase",
          "text-letter-spacing": 0.1,
          "text-max-width": 7,
          "text-font": [
            "DIN Offc Pro Regular",
            "Arial Unicode MS Regular"
          ],
          "text-padding": 3,
          "text-size": {
            "base": 1,
            "stops": [
              [
                12,
                11
              ],
              [
                16,
                16
              ]
            ]
          }
        },
        "maxzoom": 16,
        "filter": [
          "==",
          "type",
          "neighbourhood"
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-neighbourhood",
        "paint": {
          "text-halo-color": "rgba(255,255,255, 0.5)",
          "text-halo-width": 1.75,
          "text-color": "#805540",
          "text-halo-blur": 0
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "minzoom": 10,
        "layout": {
          "visibility": "visible",
          "text-field": "{name_en}",
          "text-transform": "uppercase",
          "text-font": [
            "DIN Offc Pro Regular",
            "Arial Unicode MS Regular"
          ],
          "text-letter-spacing": 0.15,
          "text-max-width": 7,
          "text-padding": 3,
          "text-size": {
            "base": 1,
            "stops": [
              [
                11,
                11
              ],
              [
                15,
                18
              ]
            ]
          }
        },
        "maxzoom": 16,
        "filter": [
          "==",
          "type",
          "suburb"
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-suburb",
        "paint": {
          "text-halo-color": "rgba(255,255,255, 0.5)",
          "text-halo-width": 1.75,
          "text-color": "#805540"
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "minzoom": 10,
        "layout": {
          "visibility": "visible",
          "text-field": "{name_en}",
          "text-font": [
            "DIN Offc Pro Regular",
            "Arial Unicode MS Regular"
          ],
          "text-size": {
            "base": 1,
            "stops": [
              [
                12,
                11.5
              ],
              [
                15,
                16
              ]
            ]
          }
        },
        "maxzoom": 16,
        "filter": [
          "==",
          "type",
          "hamlet"
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-hamlet",
        "paint": {
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.25,
          "text-color": "#000000"
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "minzoom": 8,
        "layout": {
          "visibility": "visible",
          "text-field": "{name_en}",
          "text-font": [
            "DIN Offc Pro Regular",
            "Arial Unicode MS Regular"
          ],
          "text-max-width": 7,
          "text-size": {
            "base": 1,
            "stops": [
              [
                10,
                11.5
              ],
              [
                16,
                18
              ]
            ]
          }
        },
        "maxzoom": 15,
        "filter": [
          "==",
          "type",
          "village"
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-village",
        "paint": {
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.25,
          "text-color": "#000000"
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "minzoom": 6,
        "layout": {
          "icon-image": "dot-9",
          "text-font": {
            "base": 1,
            "stops": [
              [
                11,
                [
                  "DIN Offc Pro Regular",
                  "Arial Unicode MS Regular"
                ]
              ],
              [
                12,
                [
                  "DIN Offc Pro Medium",
                  "Arial Unicode MS Regular"
                ]
              ]
            ]
          },
          "visibility": "visible",
          "text-offset": {
            "base": 1,
            "stops": [
              [
                7,
                [
                  0,
                  -0.15
                ]
              ],
              [
                8,
                [
                  0,
                  0
                ]
              ]
            ]
          },
          "text-anchor": {
            "base": 1,
            "stops": [
              [
                7,
                "bottom"
              ],
              [
                8,
                "center"
              ]
            ]
          },
          "text-field": "{name_en}",
          "text-max-width": 7,
          "text-size": {
            "base": 1,
            "stops": [
              [
                7,
                11.5
              ],
              [
                15,
                20
              ]
            ]
          }
        },
        "maxzoom": 15,
        "filter": [
          "==",
          "type",
          "town"
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-town",
        "paint": {
          "text-color": "#000000",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.25,
          "icon-opacity": {
            "base": 1,
            "stops": [
              [
                7.99,
                1
              ],
              [
                8,
                0
              ]
            ]
          }
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "layout": {
          "text-line-height": 1.2,
          "text-size": {
            "base": 1,
            "stops": [
              [
                10,
                11
              ],
              [
                18,
                16
              ]
            ]
          },
          "text-allow-overlap": false,
          "text-ignore-placement": false,
          "text-max-angle": 38,
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Regular",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "point",
          "text-padding": 2,
          "visibility": "visible",
          "text-offset": [
            0,
            0
          ],
          "icon-optional": false,
          "text-rotation-alignment": "viewport",
          "text-anchor": "center",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.02,
          "text-max-width": 7
        },
        "filter": [
          "==",
          "type",
          "island"
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-islands",
        "paint": {
          "text-color": "#65513d",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "layout": {
          "text-size": {
            "base": 1,
            "stops": [
              [
                6,
                12
              ],
              [
                14,
                22
              ]
            ]
          },
          "icon-image": "dot-9",
          "text-transform": "none",
          "text-font": {
            "base": 1,
            "stops": [
              [
                7,
                [
                  "DIN Offc Pro Regular",
                  "Arial Unicode MS Regular"
                ]
              ],
              [
                8,
                [
                  "DIN Offc Pro Medium",
                  "Arial Unicode MS Regular"
                ]
              ]
            ]
          },
          "visibility": "visible",
          "text-offset": {
            "base": 1,
            "stops": [
              [
                7.99,
                [
                  0,
                  -0.2
                ]
              ],
              [
                8,
                [
                  0,
                  0
                ]
              ]
            ]
          },
          "text-anchor": {
            "base": 1,
            "stops": [
              [
                7,
                "bottom"
              ],
              [
                8,
                "center"
              ]
            ]
          },
          "text-field": "{name_en}",
          "text-max-width": 7
        },
        "metadata": {
          "mapbox:group": "1444862510685.128"
        },
        "maxzoom": 14,
        "filter": [
          "all",
          [
            "!in",
            "scalerank",
            0,
            1,
            2,
            3,
            4,
            5
          ],
          [
            "==",
            "type",
            "city"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-city-sm",
        "paint": {
          "text-color": "#000000",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1.25,
          "icon-opacity": {
            "base": 1,
            "stops": [
              [
                7.99,
                1
              ],
              [
                8,
                0
              ]
            ]
          }
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "layout": {
          "visibility": "visible",
          "text-field": "{name_en}",
          "icon-image": "dot-10",
          "text-anchor": {
            "base": 1,
            "stops": [
              [
                7,
                "top"
              ],
              [
                8,
                "center"
              ]
            ]
          },
          "text-offset": {
            "base": 1,
            "stops": [
              [
                7.99,
                [
                  0,
                  0.1
                ]
              ],
              [
                8,
                [
                  0,
                  0
                ]
              ]
            ]
          },
          "text-font": {
            "base": 1,
            "stops": [
              [
                7,
                [
                  "DIN Offc Pro Regular",
                  "Arial Unicode MS Regular"
                ]
              ],
              [
                8,
                [
                  "DIN Offc Pro Medium",
                  "Arial Unicode MS Regular"
                ]
              ]
            ]
          },
          "text-size": {
            "base": 0.9,
            "stops": [
              [
                5,
                12
              ],
              [
                12,
                22
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444862510685.128"
        },
        "maxzoom": 14,
        "filter": [
          "all",
          [
            "in",
            "scalerank",
            3,
            4,
            5
          ],
          [
            "==",
            "type",
            "city"
          ],
          [
            "in",
            "ldir",
            "S",
            "SE",
            "SW",
            "E"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-city-md-s",
        "paint": {
          "text-halo-width": 1,
          "text-halo-color": "#ffffff",
          "text-color": "#000000",
          "text-halo-blur": 1,
          "icon-opacity": {
            "base": 1,
            "stops": [
              [
                7.99,
                1
              ],
              [
                8,
                0
              ]
            ]
          }
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "layout": {
          "icon-image": "dot-10",
          "text-font": {
            "base": 1,
            "stops": [
              [
                7,
                [
                  "DIN Offc Pro Regular",
                  "Arial Unicode MS Regular"
                ]
              ],
              [
                8,
                [
                  "DIN Offc Pro Medium",
                  "Arial Unicode MS Regular"
                ]
              ]
            ]
          },
          "visibility": "visible",
          "text-offset": {
            "base": 1,
            "stops": [
              [
                7.99,
                [
                  0,
                  -0.25
                ]
              ],
              [
                8,
                [
                  0,
                  0
                ]
              ]
            ]
          },
          "text-anchor": {
            "base": 1,
            "stops": [
              [
                7,
                "bottom"
              ],
              [
                8,
                "center"
              ]
            ]
          },
          "text-field": "{name_en}",
          "text-max-width": 7,
          "text-size": {
            "base": 0.9,
            "stops": [
              [
                5,
                12
              ],
              [
                12,
                22
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444862510685.128"
        },
        "maxzoom": 14,
        "filter": [
          "all",
          [
            "in",
            "scalerank",
            3,
            4,
            5
          ],
          [
            "==",
            "type",
            "city"
          ],
          [
            "in",
            "ldir",
            "N",
            "NE",
            "NW",
            "W"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-city-md-n",
        "paint": {
          "text-color": "#000000",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
          "icon-opacity": {
            "base": 1,
            "stops": [
              [
                7.99,
                1
              ],
              [
                8,
                0
              ]
            ]
          },
          "text-halo-blur": 1
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "minzoom": 1,
        "layout": {
          "icon-image": "dot-11",
          "text-font": {
            "base": 1,
            "stops": [
              [
                7,
                [
                  "DIN Offc Pro Regular",
                  "Arial Unicode MS Regular"
                ]
              ],
              [
                8,
                [
                  "DIN Offc Pro Medium",
                  "Arial Unicode MS Regular"
                ]
              ]
            ]
          },
          "visibility": "visible",
          "text-offset": {
            "base": 1,
            "stops": [
              [
                7.99,
                [
                  0,
                  0.15
                ]
              ],
              [
                8,
                [
                  0,
                  0
                ]
              ]
            ]
          },
          "text-anchor": {
            "base": 1,
            "stops": [
              [
                7,
                "top"
              ],
              [
                8,
                "center"
              ]
            ]
          },
          "text-field": "{name_en}",
          "text-max-width": 7,
          "text-size": {
            "base": 0.9,
            "stops": [
              [
                4,
                12
              ],
              [
                10,
                22
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444862510685.128"
        },
        "maxzoom": 14,
        "filter": [
          "all",
          [
            "<=",
            "scalerank",
            2
          ],
          [
            "==",
            "type",
            "city"
          ],
          [
            "in",
            "ldir",
            "S",
            "SE",
            "SW",
            "E"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-city-lg-s",
        "paint": {
          "text-color": "#000000",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
          "icon-opacity": {
            "base": 1,
            "stops": [
              [
                7.99,
                1
              ],
              [
                8,
                0
              ]
            ]
          },
          "text-halo-blur": 1
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "minzoom": 1,
        "layout": {
          "icon-image": "dot-11",
          "text-font": {
            "base": 1,
            "stops": [
              [
                7,
                [
                  "DIN Offc Pro Regular",
                  "Arial Unicode MS Regular"
                ]
              ],
              [
                8,
                [
                  "DIN Offc Pro Medium",
                  "Arial Unicode MS Regular"
                ]
              ]
            ]
          },
          "visibility": "visible",
          "text-offset": {
            "base": 1,
            "stops": [
              [
                7.99,
                [
                  0,
                  -0.25
                ]
              ],
              [
                8,
                [
                  0,
                  0
                ]
              ]
            ]
          },
          "text-anchor": {
            "base": 1,
            "stops": [
              [
                7,
                "bottom"
              ],
              [
                8,
                "center"
              ]
            ]
          },
          "text-field": "{name_en}",
          "text-max-width": 7,
          "text-size": {
            "base": 0.9,
            "stops": [
              [
                4,
                12
              ],
              [
                10,
                22
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444862510685.128"
        },
        "maxzoom": 14,
        "filter": [
          "all",
          [
            "<=",
            "scalerank",
            2
          ],
          [
            "==",
            "type",
            "city"
          ],
          [
            "in",
            "ldir",
            "N",
            "NE",
            "NW",
            "W"
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "place-city-lg-n",
        "paint": {
          "text-color": "#000000",
          "text-opacity": 1,
          "text-halo-color": "#ffffff",
          "text-halo-width": 1,
          "icon-opacity": {
            "base": 1,
            "stops": [
              [
                7.99,
                1
              ],
              [
                8,
                0
              ]
            ]
          },
          "text-halo-blur": 1
        },
        "source-layer": "place_label"
      },
      {
        "interactive": true,
        "minzoom": 3,
        "layout": {
          "text-line-height": 1.1,
          "text-size": {
            "base": 1,
            "stops": [
              [
                3,
                12
              ],
              [
                6,
                16
              ]
            ]
          },
          "symbol-spacing": {
            "base": 1,
            "stops": [
              [
                4,
                100
              ],
              [
                6,
                400
              ]
            ]
          },
          "text-font": [
            "DIN Offc Pro Italic",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "line",
          "visibility": "visible",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.1,
          "text-max-width": 5
        },
        "metadata": {
          "mapbox:group": "1444856087950.3635"
        },
        "maxzoom": 10,
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            ">=",
            "labelrank",
            4
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "marine-label-sm-ln",
        "paint": {
          "text-color": "#c8e5f9"
        },
        "source-layer": "marine_label"
      },
      {
        "interactive": true,
        "minzoom": 3,
        "layout": {
          "visibility": "visible",
          "text-field": "{name_en}",
          "text-max-width": 5,
          "text-letter-spacing": 0.1,
          "text-line-height": 1.5,
          "symbol-placement": "point",
          "text-font": [
            "DIN Offc Pro Italic",
            "Arial Unicode MS Regular"
          ],
          "text-size": {
            "base": 1,
            "stops": [
              [
                3,
                12
              ],
              [
                6,
                16
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444856087950.3635"
        },
        "maxzoom": 10,
        "filter": [
          "all",
          [
            "==",
            "$type",
            "Point"
          ],
          [
            ">=",
            "labelrank",
            4
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "marine-label-sm-pt",
        "paint": {
          "text-color": "#c8e5f9"
        },
        "source-layer": "marine_label"
      },
      {
        "interactive": true,
        "minzoom": 2,
        "layout": {
          "text-line-height": 1.1,
          "text-size": {
            "base": 1.1,
            "stops": [
              [
                2,
                12
              ],
              [
                5,
                20
              ]
            ]
          },
          "symbol-spacing": 250,
          "text-font": [
            "DIN Offc Pro Italic",
            "Arial Unicode MS Regular"
          ],
          "symbol-placement": "line",
          "visibility": "visible",
          "text-field": "{name_en}",
          "text-letter-spacing": 0.15,
          "text-max-width": 5
        },
        "metadata": {
          "mapbox:group": "1444856087950.3635"
        },
        "maxzoom": 8,
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "in",
            "labelrank",
            2,
            3
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "marine-label-md-ln",
        "paint": {
          "text-color": "#c8e5f9"
        },
        "source-layer": "marine_label"
      },
      {
        "interactive": true,
        "minzoom": 2,
        "layout": {
          "visibility": "visible",
          "text-field": "{name_en}",
          "text-max-width": 5,
          "text-letter-spacing": 0.15,
          "text-line-height": 1.5,
          "text-font": [
            "DIN Offc Pro Italic",
            "Arial Unicode MS Regular"
          ],
          "text-size": {
            "base": 1.1,
            "stops": [
              [
                2,
                14
              ],
              [
                5,
                20
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444856087950.3635"
        },
        "maxzoom": 8,
        "filter": [
          "all",
          [
            "==",
            "$type",
            "Point"
          ],
          [
            "in",
            "labelrank",
            2,
            3
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "marine-label-md-pt",
        "paint": {
          "text-color": "#c8e5f9"
        },
        "source-layer": "marine_label"
      },
      {
        "interactive": true,
        "minzoom": 1,
        "layout": {
          "visibility": "visible",
          "text-field": "{name_en}",
          "text-max-width": 4,
          "text-letter-spacing": 0.25,
          "text-line-height": 1.1,
          "symbol-placement": "line",
          "text-font": [
            "DIN Offc Pro Italic",
            "Arial Unicode MS Regular"
          ],
          "text-size": {
            "base": 1,
            "stops": [
              [
                1,
                14
              ],
              [
                4,
                30
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444856087950.3635"
        },
        "maxzoom": 4,
        "filter": [
          "all",
          [
            "==",
            "$type",
            "LineString"
          ],
          [
            "==",
            "labelrank",
            1
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "marine-label-lg-ln",
        "paint": {
          "text-color": "#c8e5f9"
        },
        "source-layer": "marine_label"
      },
      {
        "interactive": true,
        "minzoom": 1,
        "layout": {
          "visibility": "visible",
          "text-field": "{name_en}",
          "text-max-width": 4,
          "text-letter-spacing": 0.25,
          "text-line-height": 1.5,
          "text-font": [
            "DIN Offc Pro Italic",
            "Arial Unicode MS Regular"
          ],
          "text-size": {
            "base": 1,
            "stops": [
              [
                1,
                14
              ],
              [
                4,
                30
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444856087950.3635"
        },
        "maxzoom": 4,
        "filter": [
          "all",
          [
            "==",
            "$type",
            "Point"
          ],
          [
            "==",
            "labelrank",
            1
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "marine-label-lg-pt",
        "paint": {
          "text-color": "#c8e5f9"
        },
        "source-layer": "marine_label"
      },
      {
        "interactive": true,
        "minzoom": 3,
        "layout": {
          "text-size": {
            "base": 1,
            "stops": [
              [
                6,
                10
              ],
              [
                9,
                14
              ]
            ]
          },
          "text-allow-overlap": false,
          "text-ignore-placement": false,
          "text-transform": "uppercase",
          "text-font": [
            "DIN Offc Pro Bold",
            "Arial Unicode MS Bold"
          ],
          "visibility": "visible",
          "text-field": {
            "base": 1,
            "stops": [
              [
                0,
                "{abbr}"
              ],
              [
                6,
                "{name_en}"
              ]
            ]
          },
          "text-letter-spacing": 0.15,
          "text-max-width": 5
        },
        "metadata": {
          "mapbox:group": "1444856151690.9143"
        },
        "maxzoom": 9,
        "filter": [
          "<",
          "area",
          20000
        ],
        "type": "symbol",
        "source": "composite",
        "id": "state-label-sm",
        "paint": {
          "text-opacity": 1,
          "text-color": "#242424",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "state_label"
      },
      {
        "interactive": true,
        "minzoom": 3,
        "layout": {
          "text-size": {
            "base": 1,
            "stops": [
              [
                5,
                10
              ],
              [
                8,
                16
              ]
            ]
          },
          "text-allow-overlap": false,
          "text-ignore-placement": false,
          "text-transform": "uppercase",
          "text-font": [
            "DIN Offc Pro Bold",
            "Arial Unicode MS Bold"
          ],
          "visibility": "visible",
          "text-field": {
            "base": 1,
            "stops": [
              [
                0,
                "{abbr}"
              ],
              [
                5,
                "{name_en}"
              ]
            ]
          },
          "text-letter-spacing": 0.15,
          "text-max-width": 6
        },
        "metadata": {
          "mapbox:group": "1444856151690.9143"
        },
        "maxzoom": 8,
        "filter": [
          "all",
          [
            "<",
            "area",
            80000
          ],
          [
            ">=",
            "area",
            20000
          ]
        ],
        "type": "symbol",
        "source": "composite",
        "id": "state-label-md",
        "paint": {
          "text-opacity": 1,
          "text-color": "#242424",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "state_label"
      },
      {
        "interactive": true,
        "minzoom": 3,
        "layout": {
          "text-size": {
            "base": 1,
            "stops": [
              [
                4,
                10
              ],
              [
                7,
                18
              ]
            ]
          },
          "text-allow-overlap": false,
          "text-ignore-placement": false,
          "text-transform": "uppercase",
          "text-font": [
            "DIN Offc Pro Bold",
            "Arial Unicode MS Bold"
          ],
          "text-padding": 1,
          "visibility": "visible",
          "text-field": {
            "base": 1,
            "stops": [
              [
                0,
                "{abbr}"
              ],
              [
                4,
                "{name_en}"
              ]
            ]
          },
          "text-letter-spacing": 0.15,
          "text-max-width": 6
        },
        "metadata": {
          "mapbox:group": "1444856151690.9143"
        },
        "maxzoom": 7,
        "filter": [
          ">=",
          "area",
          80000
        ],
        "type": "symbol",
        "source": "composite",
        "id": "state-label-lg",
        "paint": {
          "text-opacity": 1,
          "text-color": "#242424",
          "text-halo-color": "#ffffff",
          "text-halo-width": 1
        },
        "source-layer": "state_label"
      },
      {
        "interactive": true,
        "minzoom": 1,
        "layout": {
          "text-field": "{name_en}",
          "visibility": "visible",
          "text-max-width": 6,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "text-size": {
            "base": 0.9,
            "stops": [
              [
                5,
                14
              ],
              [
                9,
                22
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444856144497.7825"
        },
        "maxzoom": 10,
        "filter": [
          ">=",
          "scalerank",
          5
        ],
        "type": "symbol",
        "source": "composite",
        "id": "country-label-sm",
        "paint": {
          "text-color": "#000000",
          "text-halo-color": {
            "base": 1,
            "stops": [
              [
                2,
                "rgba(255,255,255,0.75)"
              ],
              [
                3,
                "#ffffff"
              ]
            ]
          },
          "text-halo-width": 1.25
        },
        "source-layer": "country_label"
      },
      {
        "interactive": true,
        "minzoom": 1,
        "layout": {
          "text-field": {
            "base": 1,
            "stops": [
              [
                0,
                "{code}"
              ],
              [
                2,
                "{name_en}"
              ]
            ]
          },
          "visibility": "visible",
          "text-max-width": 6,
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "text-size": {
            "base": 1,
            "stops": [
              [
                3,
                10
              ],
              [
                8,
                24
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444856144497.7825"
        },
        "maxzoom": 8,
        "filter": [
          "in",
          "scalerank",
          3,
          4
        ],
        "type": "symbol",
        "source": "composite",
        "id": "country-label-md",
        "paint": {
          "text-color": "#000000",
          "text-halo-color": {
            "base": 1,
            "stops": [
              [
                2,
                "rgba(255,255,255,0.75)"
              ],
              [
                3,
                "#ffffff"
              ]
            ]
          },
          "text-halo-width": 1.25
        },
        "source-layer": "country_label"
      },
      {
        "interactive": true,
        "minzoom": 1,
        "layout": {
          "text-field": "{name_en}",
          "visibility": "visible",
          "text-max-width": {
            "base": 1,
            "stops": [
              [
                0,
                5
              ],
              [
                3,
                6
              ]
            ]
          },
          "text-font": [
            "DIN Offc Pro Medium",
            "Arial Unicode MS Regular"
          ],
          "text-size": {
            "base": 1,
            "stops": [
              [
                1,
                10
              ],
              [
                6,
                24
              ]
            ]
          }
        },
        "metadata": {
          "mapbox:group": "1444856144497.7825"
        },
        "maxzoom": 7,
        "filter": [
          "in",
          "scalerank",
          1,
          2
        ],
        "type": "symbol",
        "source": "composite",
        "id": "country-label-lg",
        "paint": {
          "text-color": "#000000",
          "text-halo-color": {
            "base": 1,
            "stops": [
              [
                2,
                "rgba(255,255,255,0.75)"
              ],
              [
                3,
                "#ffffff"
              ]
            ]
          },
          "text-halo-width": 1.25
        },
        "source-layer": "country_label"
      }
    ],
    "created": 0,
    "modified": 0,
    "owner": "mapbox",
    "id": "streets-v8",
    "draft": false
  }