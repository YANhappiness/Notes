// // go.js  案例
require("../lib/js/go-debug.js");
// var $go = go.GraphObject.make;
// var myDiagram =
//     $go(go.Diagram, "myDiagramDiv", { // 绑定DOM元素
//         "undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
//     });

// // define a TreeLayout that flows from top to bottom
// myDiagram.layout =
//     $go(go.TreeLayout, {
//         angle: 90, // 树形布局排列方式，从左到右，从上到下，从右到左，从下到上 分别为 0，90，180，270
//         layerSpacing: 40 // 每层间距 px
//     });

// // define a simple Node template
// myDiagram.nodeTemplate =
//     $go(go.Node, "Horizontal", //定义node的放置方式 水平、垂直 Horizontal Vertical
//         // the entire node will have a light-blue background
//         {
//             background: "#44CCFF"
//         },
//         $go(go.Picture, // 图片的节点
//             // Pictures should normally have an explicit width and height.
//             // This picture has a red background, only visible when there is no source set
//             // or when the image is partially transparent.
//             {
//                 margin: 10,
//                 width: 50,
//                 height: 50,
//                 background: "red"
//             },
//             // Picture.source is data bound to the "source" attribute of the model data
//             new go.Binding("source")),
//         // 绑定并数据  等同于 new go.Binding("source","picName")) 第一个参数是go.Picture图片节点的属性相当于(href,picAddr) , 如果该属性名和model.nodeDataArray中的属性名相同，则省略第二个参数 
//         $go(go.TextBlock,
//             "Default Text", // the initial value for TextBlock.text 
//             // some room around the text, a larger font, and a white stroke:
//             {
//                 margin: 12,
//                 stroke: "white",
//                 font: "bold 16px sans-serif"
//             },
//             // TextBlock.text is data bound to the "name" attribute of the model data
//             new go.Binding("text", "name"))
//     );

// // define a Link template that routes orthogonally, with no arrowhead
// myDiagram.linkTemplate =
//     $go(go.Link,
//         // default routing is go.Link.Normal
//         // default corner is 0
//         {
//             routing: go.Link.Orthogonal, // 指定路线为直角类型
//             corner: 5   // 圆角度为 5
//         },
//         $go(go.Shape, {
//             strokeWidth: 3,  
//             stroke: "#555"
//         }), // the link shape

//         // if we wanted an arrowhead we would also add another Shape with toArrow defined:
//         $go(go.Shape, { toArrow: "Standard", stroke: "red" })  // 指定箭头样式  
//     );

// // var model = $go(go.GraphLinksModel);  // 支持链接关系，为每个链接使用单独的链路数据对象
// var model = $go(go.TreeModel);  // 只支持形成树形结构图的链接关系
// model.nodeDataArray = [ // note that each node data object holds whatever properties it needs;
//     // for this app we add the "name" and "source" properties
//     {
//         key: "1",
//         name: "Don Meow",
//         source: "../src/image/cat1.png"
//     },
//     {
//         key: "2",
//         parent: "1",
//         name: "Demeter",
//         source: "../src/image/cat2.png"
//     },
//     {
//         key: "3",
//         parent: "1",
//         name: "Copricat",
//         source: "../src/image/cat3.png"
//     },
//     {
//         key: "4",
//         parent: "3",
//         name: "Jellylorum",
//         source: "../src/image/cat4.png"
//     },
//     {
//         key: "5",
//         parent: "3",
//         name: "Alonzo",
//         source: "../src/image/cat5.png"
//     },
//     {
//         key: "6",
//         parent: "2",
//         name: "Munkustrap",
//         source: "../src/image/cat6.png"
//     }
// ];
// myDiagram.model = model;


var myDiagram;
var myPalette;
function init() {
    if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this
    var $go = go.GraphObject.make; // for conciseness in defining templates

    myDiagram =
        $go(go.Diagram, "myDiagramDiv", // must name or refer to the DIV HTML element
            {
                initialContentAlignment: go.Spot.Center,  
                allowDrop: true, // must be true to accept drops from the Palette
                "LinkDrawn": showLinkLabel, // this DiagramEvent listener is defined below
                "LinkRelinked": showLinkLabel,
                scrollsPageOnFocus: false,
                "undoManager.isEnabled": true // enable undo & redo
            });

    // when the document is modified, add a "*" to the title and enable the "Save" button
    // myDiagram.addDiagramListener("Modified", function (e) {
    //     var button = document.getElementById("SaveButton");
    //     if (button) button.disabled = !myDiagram.isModified;
    //     var idx = document.title.indexOf("*");
    //     if (myDiagram.isModified) {
    //         if (idx < 0) document.title += "*";
    //     } else {
    //         if (idx >= 0) document.title = document.title.substr(0, idx);
    //     }
    // });

    // helper definitions for node templates
    function nodeStyle() {
        return [
            // The Node.location comes from the "loc" property of the node data,
            // converted by the Point.parse static method.
            // If the Node.location is changed, it updates the "loc" property of the node data,
            // converting back using the Point.stringify static method.
            new go.Binding("location", "loc", go.Point.parse).makeTwoWay(go.Point.stringify),
            {
                // the Node.location is at the center of each node
                locationSpot: go.Spot.Center
            }
        ];
    }

    // Define a function for creating a "port" that is normally transparent.
    // The "name" is used as the GraphObject.portId,
    // the "align" is used to determine where to position the port relative to the body of the node,
    // the "spot" is used to control how links connect with the port and whether the port
    // stretches along the side of the node,
    // and the boolean "output" and "input" arguments control whether the user can draw links from or to the port.
    function makePort(name, align, spot, output, input) {
        var horizontal = align.equals(go.Spot.Top) || align.equals(go.Spot.Bottom);
        // the port is basically just a transparent rectangle that stretches along the side of the node,
        // and becomes colored when the mouse passes over it
        return $go(go.Shape, {
            fill: "transparent", // changed to a color in the mouseEnter event handler
            strokeWidth: 0, // no stroke
            width: horizontal ? NaN : 8, // if not stretching horizontally, just 8 wide
            height: !horizontal ? NaN : 8, // if not stretching vertically, just 8 tall
            alignment: align, // align the port on the main Shape
            stretch: (horizontal ? go.GraphObject.Horizontal : go.GraphObject.Vertical),
            portId: name, // declare this object to be a "port"
            fromSpot: spot, // declare where links may connect at this port
            fromLinkable: output, // declare whether the user may draw links from here   是否可以在此处获取链接
            toSpot: spot, // declare where links may connect at this port
            toLinkable: input, // declare whether the user may draw links to here  是否可以链接到此处
            cursor: "pointer", // show a different cursor to indicate potential link point
            mouseEnter: function (e, port) { // the PORT argument will be this Shape
                if (!e.diagram.isReadOnly) port.fill = "rgba(255,0,255,0.5)";
            },
            mouseLeave: function (e, port) {
                port.fill = "transparent";
            }
        });
    }

    function textStyle() {
        return {
            font: "bold 11pt Helvetica, Arial, sans-serif",
            stroke: "whitesmoke"
        }
    }

    // define the Node templates for regular nodes

    myDiagram.nodeTemplateMap.add("", // the default category
        $go(go.Node, "Table", nodeStyle(),
            // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
            $go(go.Panel, "Auto",
                $go(go.Shape, "Rectangle", { // 长方形
                        fill: "#00A9C9",
                        strokeWidth: 0
                    },
                    new go.Binding("figure", "figure")),
                $go(go.TextBlock, textStyle(), {
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        // editable: true   // 图表可编辑
                    },
                    new go.Binding("text").makeTwoWay())
            ),
            // four named ports, one on each side:
            // makePort(name, align, spot, output, input)
            makePort("T", go.Spot.Top, go.Spot.TopSide, false, true), // 可以从此端点出（top），但是从此端点出去的链接不可以连top端点
            makePort("L", go.Spot.Left, go.Spot.LeftSide, true, true),
            makePort("R", go.Spot.Right, go.Spot.RightSide, true, true),
            makePort("B", go.Spot.Bottom, go.Spot.BottomSide, true, false)  // 不可从此端点进
        ));

    myDiagram.nodeTemplateMap.add("Conditional",  // 条件/判断
        $go(go.Node, "Table", nodeStyle(),
            // the main object is a Panel that surrounds a TextBlock with a rectangular Shape
            $go(go.Panel, "Auto",
                $go(go.Shape, "Diamond", { // 菱形
                        fill: "#00A9C9",
                        strokeWidth: 0
                    },
                    new go.Binding("figure", "figure")),
                $go(go.TextBlock, textStyle(), {
                        margin: 8,
                        maxSize: new go.Size(160, NaN),
                        wrap: go.TextBlock.WrapFit,
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            ),
            // four named ports, one on each side:
            makePort("T", go.Spot.Top, go.Spot.Top, false, true),
            makePort("L", go.Spot.Left, go.Spot.Left, true, true),
            makePort("R", go.Spot.Right, go.Spot.Right, true, true),
            makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
        ));

    myDiagram.nodeTemplateMap.add("Start",
        $go(go.Node, "Table", nodeStyle(),
            $go(go.Panel, "Auto",
                $go(go.Shape, "Circle", {
                    minSize: new go.Size(40, 40),
                    fill: "#79C900",
                    strokeWidth: 0
                }),
                $go(go.TextBlock, "Start", textStyle(),
                    new go.Binding("text"))
            ),
            // three named ports, one on each side except the top, all output only:
            makePort("L", go.Spot.Left, go.Spot.Left, true, false),
            makePort("R", go.Spot.Right, go.Spot.Right, true, false),
            makePort("B", go.Spot.Bottom, go.Spot.Bottom, true, false)
        ));

    myDiagram.nodeTemplateMap.add("End",
        $go(go.Node, "Table", nodeStyle(),
            $go(go.Panel, "Auto",
                $go(go.Shape, "Circle", {
                    minSize: new go.Size(40, 40),
                    fill: "#DC3C00",
                    strokeWidth: 0
                }),
                $go(go.TextBlock, "End", textStyle(),
                    new go.Binding("text"))
            ),
            // three named ports, one on each side except the bottom, all input only:
            // output/input  箭头类型，表示是否可以链接/被链接
            makePort("T", go.Spot.Top, go.Spot.Top, false, true),
            makePort("L", go.Spot.Left, go.Spot.Left, false, true),
            makePort("R", go.Spot.Right, go.Spot.Right, false, true)
        ));

    myDiagram.nodeTemplateMap.add("Comment",   // 注释
        $go(go.Node, "Auto", nodeStyle(),
            $go(go.Shape, "File", {   // 模型： 文件
                fill: "#EFFAB4",
                strokeWidth: 0
            }),
            $go(go.TextBlock, textStyle(), {
                    margin: 5,
                    maxSize: new go.Size(200, NaN),
                    wrap: go.TextBlock.WrapFit,
                    textAlign: "center",
                    editable: true,
                    font: "bold 12pt Helvetica, Arial, sans-serif",
                    stroke: '#454545'
                },
                new go.Binding("text").makeTwoWay())
            // no ports, because no links are allowed to connect with a comment
        ));


    // replace the default Link template in the linkTemplateMap
    myDiagram.linkTemplate =
        $go(go.Link, // the whole link panel
            {
                routing: go.Link.AvoidsNodes,
                curve: go.Link.JumpOver,
                corner: 5,
                toShortLength: 4,
                relinkableFrom: true,
                relinkableTo: true,
                reshapable: true,
                resegmentable: true,
                // mouse-overs subtly highlight links:
                mouseEnter: function (e, link) {
                    link.findObject("HIGHLIGHT").stroke = "rgba(30,144,255,0.2)";
                },
                mouseLeave: function (e, link) {
                    link.findObject("HIGHLIGHT").stroke = "transparent";
                }
            },
            new go.Binding("points").makeTwoWay(),
            $go(go.Shape, // the highlight shape, normally transparent   高亮
                {
                    isPanelMain: true,
                    strokeWidth: 8,
                    stroke: "transparent",
                    name: "HIGHLIGHT"
                }),
            $go(go.Shape, // the link path shape
                {
                    isPanelMain: true,
                    stroke: "gray",
                    strokeWidth: 2
                }),
            $go(go.Shape, // the arrowhead  箭头
                {
                    toArrow: "standard",
                    strokeWidth: 0,
                    fill: "gray"
                }),
            $go(go.Panel, "Auto", // the link label, normally not visible
                {
                    visible: false,
                    name: "LABEL",
                    segmentIndex: 2,
                    segmentFraction: 0.5
                },
                new go.Binding("visible", "visible").makeTwoWay(),
                $go(go.Shape, "RoundedRectangle", // the label shape
                    {
                        fill: "#F8F8F8",
                        strokeWidth: 0
                    }),
                $go(go.TextBlock, "Yes", // the label
                    {
                        textAlign: "center",
                        font: "10pt helvetica, arial, sans-serif",
                        stroke: "#333333",
                        editable: true
                    },
                    new go.Binding("text").makeTwoWay())
            )
        );

    // Make link labels visible if coming out of a "conditional" node.
    // This listener is called by the "LinkDrawn" and "LinkRelinked" DiagramEvents.
    function showLinkLabel(e) {
        var label = e.subject.findObject("LABEL");
        if (label !== null) label.visible = (e.subject.fromNode.data.figure === "Diamond");
    }

    // temporary links used by LinkingTool and RelinkingTool are also orthogonal:
    myDiagram.toolManager.linkingTool.temporaryLink.routing = go.Link.Orthogonal;
    myDiagram.toolManager.relinkingTool.temporaryLink.routing = go.Link.Orthogonal;

    load(); // load an initial diagram from some JSON text

    // initialize the Palette that is on the left side of the page 侧边栏
    myPalette =
        $go(go.Palette, "myPaletteDiv", // must name or refer to the DIV HTML element
            {
                scrollsPageOnFocus: false,
                nodeTemplateMap: myDiagram.nodeTemplateMap, // share the templates used by myDiagram
                model: new go.GraphLinksModel([ // specify the contents of the Palette
                    {
                        category: "Start",
                        text: "Start"
                    },
                    {
                        text: "Step"
                    },
                    {
                        category: "Conditional",
                        text: "???"
                    },
                    {
                        category: "End",
                        text: "End"
                    },
                    {
                        category: "Comment",
                        text: "Comment"
                    }
                ])
            });
} // end init

init();
// Show the diagram's model in JSON format that the user may edit
function save() {
    document.getElementById("mySavedModel").value = myDiagram.model.toJson();
    myDiagram.isModified = false;
}

function load() {
    myDiagram.model = go.Model.fromJson({
        "class": "go.GraphLinksModel",
        "linkFromPortIdProperty": "fromPort",
        "linkToPortIdProperty": "toPort",
         "nodeDataArray": [
        //{
        //         "category": "Comment",
        //         "loc": "360 -10",
        //         "text": "Kookie Brittle",
        //         "key": -13
        //     },
        //     {
        //         "key": -1,
        //         "category": "Start",
        //         "loc": "175 0",
        //         "text": "Start"
        //     },
        //     {
        //         "key": 0,
        //         "loc": "-5 75",
        //         "text": "Preheat oven to 375 F"
        //     },
        //     {
        //         "key": 1,
        //         "loc": "175 100",
        //         "text": "In a bowl, blend: 1 cup margarine, 1.5 teaspoon vanilla, 1 teaspoon salt"
        //     },
        //     {
        //         "key": 2,
        //         "loc": "175 200",
        //         "text": "Gradually beat in 1 cup sugar and 2 cups sifted flour"
        //     },
        //     {
        //         "key": 3,
        //         "loc": "175 290",
        //         "text": "Mix in 6 oz (1 cup) Nestle's Semi-Sweet Chocolate Morsels"
        //     },
        //     {
        //         "key": 4,
        //         "loc": "175 380",
        //         "text": "Press evenly into ungreased 15x10x1 pan"
        //     },
        //     {
        //         "key": 5,
        //         "loc": "355 85",
        //         "text": "Finely chop 1/2 cup of your choice of nuts"
        //     },
        //     {
        //         "key": 6,
        //         "loc": "175 450",
        //         "text": "Sprinkle nuts on top"
        //     },
        //     {
        //         "key": 7,
        //         "loc": "175 515",
        //         "text": "Bake for 25 minutes and let cool"
        //     },
        //     {
        //         "key": 8,
        //         "loc": "175 585",
        //         "text": "Cut into rectangular grid"
        //     },
        //     {
        //         "key": -2,
        //         "category": "End",
        //         "loc": "175 660",
        //         "text": "Enjoy!"
        //     }
        ],
        "linkDataArray": [
            // {
            //     "from": 1,
            //     "to": 2,
            //     "fromPort": "B",
            //     "toPort": "T"
            // },
            // {
            //     "from": 2,
            //     "to": 3,
            //     "fromPort": "B",
            //     "toPort": "T"
            // },
            // {
            //     "from": 3,
            //     "to": 4,
            //     "fromPort": "B",
            //     "toPort": "T"
            // },
            // {
            //     "from": 4,
            //     "to": 6,
            //     "fromPort": "B",
            //     "toPort": "T"
            // },
            // {
            //     "from": 6,
            //     "to": 7,
            //     "fromPort": "B",
            //     "toPort": "T"
            // },
            // {
            //     "from": 7,
            //     "to": 8,
            //     "fromPort": "B",
            //     "toPort": "T"
            // },
            // {
            //     "from": 8,
            //     "to": -2,
            //     "fromPort": "B",
            //     "toPort": "T"
            // },
            // {
            //     "from": -1,
            //     "to": 0,
            //     "fromPort": "B",
            //     "toPort": "T"
            // },
            // {
            //     "from": -1,
            //     "to": 1,
            //     "fromPort": "B",
            //     "toPort": "T"
            // },
            // {
            //     "from": -1,
            //     "to": 5,
            //     "fromPort": "B",
            //     "toPort": "T"
            // },
            // {
            //     "from": 5,
            //     "to": 4,
            //     "fromPort": "B",
            //     "toPort": "T"
            // },
            // {
            //     "from": 0,
            //     "to": 4,
            //     "fromPort": "B",
            //     "toPort": "T"
            // }
        ]
    });

    // console.log(document.getElementById("mySavedModel").value);
}

// print the diagram by opening a new window holding SVG images of the diagram contents for each page
// function printDiagram() {
//     var svgWindow = window.open();
//     if (!svgWindow) return; // failure to open a new Window
//     var printSize = new go.Size(700, 960);
//     var bnds = myDiagram.documentBounds;
//     var x = bnds.x;
//     var y = bnds.y;
//     while (y < bnds.bottom) {
//         while (x < bnds.right) {
//             var svg = myDiagram.makeSVG({
//                 scale: 1.0,
//                 position: new go.Point(x, y),
//                 size: printSize
//             });
//             svgWindow.document.body.appendChild(svg);
//             x += printSize.width;
//         }
//         x = bnds.x;
//         y += printSize.height;
//     }
//     setTimeout(function () {
//         svgWindow.print();
//     }, 1);
// }