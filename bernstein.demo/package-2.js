!function(){var e={dependsOn:{"qx.Class":{usage:"dynamic",require:!0},"bernstein.demo.pages.AbstractPage":{construct:!0,require:!0},"qx.ui.container.Composite":{construct:!0},"qx.ui.layout.Grid":{construct:!0},"qx.ui.basic.Label":{},"qx.ui.tooltip.ToolTip":{},"qx.ui.tree.Tree":{},"qx.ui.tree.TreeFolder":{},"qx.ui.tree.TreeFile":{},"qx.ui.tree.VirtualTree":{},"qx.data.store.Json":{},"qx.ui.treevirtual.TreeVirtual":{}}};qx.Bootstrap.executePendingDefers(e);qx.Class.define("bernstein.demo.pages.Tree",{extend:bernstein.demo.pages.AbstractPage,construct:function(){bernstein.demo.pages.AbstractPage.constructor.call(this);this.__P_181_0=new qx.ui.container.Composite(new qx.ui.layout.Grid(10));this.add(this.__P_181_0);this._initWidgets()},members:{__P_181_0:null,_initWidgets:function(){var e,r=this._widgets;e=new qx.ui.basic.Label("Tree");this.__P_181_0.add(e,{row:0,column:0});var t=this._getTree();this.__P_181_0.add(t,{row:1,column:0});r.push(t);(e=new qx.ui.basic.Label("VirtualTree")).setToolTip(new qx.ui.tooltip.ToolTip("Virtual implementation of Tree. Shares appearance."));this.__P_181_0.add(e,{row:0,column:1});var i=this._getVirtualTree();this.__P_181_0.add(i,{row:1,column:1});r.push(i);(e=new qx.ui.basic.Label("TreeVirtual (Legacy)")).setToolTip(new qx.ui.tooltip.ToolTip("Inherits from qx.ui.table.Table. Suited for multi-column trees."));this.__P_181_0.add(e,{row:0,column:2});var a=this._getTreeVirtual();this.__P_181_0.add(a,{row:1,column:2});r.push(a)},_getTree:function(){var e=(new qx.ui.tree.Tree).set({width:200,height:400}),r=new qx.ui.tree.TreeFolder("root");r.setOpen(!0);e.setRoot(r);var t=new qx.ui.tree.TreeFolder("Desktop");t.setOpen(!0);r.add(t);var i=new qx.ui.tree.TreeFolder("Files"),a=new qx.ui.tree.TreeFolder("Workspace"),n=new qx.ui.tree.TreeFolder("Network"),o=new qx.ui.tree.TreeFolder("Trash");t.add(i,a,n,o);var s=new qx.ui.tree.TreeFile("Windows (C:)"),d=new qx.ui.tree.TreeFile("Documents (D:)");a.add(s,d);for(var u=new qx.ui.tree.TreeFolder("Inbox"),l=new qx.ui.tree.TreeFolder("Presets"),c=new qx.ui.tree.TreeFolder("Sent"),T=new qx.ui.tree.TreeFolder("Trash"),x=0;x<30;x++)T.add(new qx.ui.tree.TreeFile("Junk #"+x));var _=new qx.ui.tree.TreeFolder("Data"),q=new qx.ui.tree.TreeFolder("Edit");u.add(l,c,T,_,q);r.add(u);return e},_getVirtualTree:function(){var e=new qx.ui.tree.VirtualTree(null,"name","children").set({width:200,height:400}),r=new qx.data.store.Json("bernstein/demo/tree.json");r.bind("model",e,"model");r.addListener("loaded",(function(){e.openNode(e.getModel().getChildren().getItem(0))}),this);return e},_getTreeVirtual:function(){for(var e=new qx.ui.treevirtual.TreeVirtual("TreeVirtual").set({width:200,rowHeight:19}),r=e.getDataModel(),t=r.addBranch(null,"Inbox",!0,!1),i=r.addBranch(t,"Spam",!1),a=1;a<3e3;a++)r.addLeaf(i,"Spam Message #"+a);r.addBranch(t,"Sent",!1);r.addBranch(t,"Trash",!1);r.addBranch(t,"Data",!1);r.addBranch(t,"Edit",!1);r.setData();return e}}});bernstein.demo.pages.Tree.$$dbClassInfo=e}();qx.$$packageData[2]={locales:{},resources:{},translations:{}};
//# sourceMappingURL=package-2.js.map