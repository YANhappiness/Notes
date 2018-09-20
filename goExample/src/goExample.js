// go.js  案例
require("../lib/js/go-debug.js");
var $go = go.GraphObject.make;
var myDiagram =
    $go(go.Diagram, "myDiagramDiv", { // 绑定DOM元素
        "undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
    });

// define a TreeLayout that flows from top to bottom
myDiagram.layout =
    $go(go.TreeLayout, {
        angle: 90, // 树形布局排列方式，从左到右，从上到下，从右到左，从下到上 分别为 0，90，180，270
        layerSpacing: 40 // 每层间距 px
    });

// define a simple Node template
myDiagram.nodeTemplate =
    $go(go.Node, "Horizontal", //定义node的放置方式 水平、垂直 Horizontal Vertical
        // the entire node will have a light-blue background
        {
            background: "#44CCFF"
        },
        $go(go.Picture, // 图片的节点
            // Pictures should normally have an explicit width and height.
            // This picture has a red background, only visible when there is no source set
            // or when the image is partially transparent.
            {
                margin: 10,
                width: 50,
                height: 50,
                background: "red"
            },
            // Picture.source is data bound to the "source" attribute of the model data
            new go.Binding("source")),
        // 绑定并数据  等同于 new go.Binding("source","picName")) 第一个参数是go.Picture图片节点的属性相当于(href,picAddr) , 如果该属性名和model.nodeDataArray中的属性名相同，则省略第二个参数 
        $go(go.TextBlock,
            "Default Text", // the initial value for TextBlock.text 
            // some room around the text, a larger font, and a white stroke:
            {
                margin: 12,
                stroke: "white",
                font: "bold 16px sans-serif"
            },
            // TextBlock.text is data bound to the "name" attribute of the model data
            new go.Binding("text", "name"))
    );

// define a Link template that routes orthogonally, with no arrowhead
myDiagram.linkTemplate =
    $go(go.Link,
        // default routing is go.Link.Normal
        // default corner is 0
        {
            routing: go.Link.Orthogonal, // 指定路线为直角类型
            corner: 5   // 圆角度为 5
        },
        $go(go.Shape, {
            strokeWidth: 3,  
            stroke: "#555"
        }), // the link shape

        // if we wanted an arrowhead we would also add another Shape with toArrow defined:
        $go(go.Shape, { toArrow: "Standard", stroke: "red" })  // 指定箭头样式  
    );

// var model = $go(go.GraphLinksModel);  // 支持链接关系，为每个链接使用单独的链路数据对象
var model = $go(go.TreeModel);  // 只支持形成树形结构图的链接关系
model.nodeDataArray = [ // note that each node data object holds whatever properties it needs;
    // for this app we add the "name" and "source" properties
    {
        key: "1",
        name: "Don Meow",
        source: "../src/image/cat1.png"
    },
    {
        key: "2",
        parent: "1",
        name: "Demeter",
        source: "../src/image/cat2.png"
    },
    {
        key: "3",
        parent: "1",
        name: "Copricat",
        source: "../src/image/cat3.png"
    },
    {
        key: "4",
        parent: "3",
        name: "Jellylorum",
        source: "../src/image/cat4.png"
    },
    {
        key: "5",
        parent: "3",
        name: "Alonzo",
        source: "../src/image/cat5.png"
    },
    {
        key: "6",
        parent: "2",
        name: "Munkustrap",
        source: "../src/image/cat6.png"
    }
];
myDiagram.model = model;