/* ************************************************************************

   Copyright:
     2015-2021 Norbert Schröder

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

qx.Theme.define("bernstein.theme.Decoration",
{
  aliases: {
    decoration: "bernstein/decoration"
  },

  decorations :
  {
    /*
    ---------------------------------------------------------------------------
      APPLICATION
    ---------------------------------------------------------------------------
    */

    "app-header":
    {
      style: {
        startColor: "app-header-start",
        endColor: "app-header-end",
        startColorPosition: 20,
        endColorPosition: 80,
        backgroundImage: "decoration/application/app-header.jpg"
      }
    },
    
    "app-logo":
    {
      include: "button",
      
      style: {
        radius: 45,
        shadowLength: 0,
        shadowBlurRadius: 10,
        shadowColor: "shadow"
      }
    },
    
    "app-background":
    {
      style: {
        backgroundImage: "decoration/application/app-background.png"
      }
        
    },
    
    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */
    
    "button":
    {
      style: {
        shadowColor: "shadow",
        shadowBlurRadius: 4,
        shadowLength: 0,
        radius: 1,
        width: 1,
        color: "border-button",
        innerWidth: 1,
        innerColorTop: "border-button-inner",
        startColor: "button-start",
        endColor: "button-end",
        startColorPosition: 10,
        endColorPosition: 90
      }
    },
    
    "button-disabled":
    {
      include: "button",
      
      style: {
        color: "border-button-disabled",
        innerColorTop: "transparent",
        shadowBlurRadius: 0
      }
    },

    "button-hovered":
    {
      include: "button",
      
      style: {
        innerColorTop: "border-button-inner-hovered",
        startColor: "button-hovered-start",
        endColor: "button-hovered-end"
      }
    },

    "button-pressed":
    {
      include: "button",
      
      style: {
        shadowColor: "shadow",
        shadowBlurRadius: 4,
        shadowLength: 0,
        radius: 1,
        width: 1,
        color: "border-button",
        innerWidth: 1,
        innerColorTop: "border-button-inner",
        startColor: "button-start",
        endColor: "button-end",
        startColorPosition: 10,
        endColorPosition: 90,
        backgroundColor: "button-end"
      }
    },
    
    "button-focused": 
    {
      include: "button",
      
      style: {}
    },
    
    "button-checked":
    {
      include: "button-pressed",
      
      style: {
        radius: 3,
        shadowColor: "shadow",
        color: "border-input",
        startColor: "transparent",
        endColor: "button-end-checked"
      }
    },
    
    "button-checked-hovered":
    {
      include: "button-checked",
      
      style: {
        endColor: "button-end-checked-hovered"
      }
    },
    
    "button-checked-focused": 
    {
      include: "button-checked"
    },
    
    "button-checked-disabled": 
    {
      include: "button-checked",
      
      style: {
        endColor: "button-start",
        shadowBlurRadius: 0
      }
    },

    "button-invalid": 
    {
      include: "button",
      
      style: {
        color: "border-invalid"
      }
    },

    "button-disabled-invalid":
    {
      include: "button-disabled",
      
      style: {
        color: "border-invalid"
      }
    },

    "button-hovered-invalid":
    {
      include: "button-hovered",
      
      style: {
        color: "border-invalid"
      }
    },

    "button-checked-invalid":
    {
      include: "button-checked",
      
      style: {
        shadowColor: "border-invalid"
      }
    },

    "button-pressed-invalid":
    {
      include: "button-pressed",
      
      style: {
        color: "border-invalid"
      }
    },

    "button-focused-invalid": 
    {
      include: "button-focused",
      
      style: {
        color: "border-invalid"
      }
    },

    "button-checked-focused-invalid": 
    {
      include: "button-checked-focused",
      
      style: {
        color: "border-invalid"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      BUTTON-CIRCLE
    ---------------------------------------------------------------------------
    */
    
    "button-circle":
    {
      include: "button",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-disabled":
    {
      include: "button-disabled",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-hovered":
    {
      include: "button-hovered",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-pressed":
    {
      include: "button-checked",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-focused":
    {
      include: "button-focused",
      
      style: {
        radius: 90
      }
    },
    
    "button-circle-checked":
    {
      include: "button-checked",
      
      style: {
        radius: 90,
        backgroundColor: "button-end"
      }
    },
    
    "button-circle-checked-disabled":
    {
      include: "button-checked-disabled",
      
      style: {
        radius: 90,
        backgroundColor: "button-end"
      }
    },
    
    "button-circle-checked-hovered":
    {
      include: "button-circle-pressed"
    },

    "button-circle-checked-focused": 
    {
      include: "button-circle-checked"
    },
    
    /*
    ---------------------------------------------------------------------------
      CHECK BOX
    ---------------------------------------------------------------------------
    */
    
    "checkbox": 
    {
      include: "button"
    },

    "checkbox-checked":
    {
      include: "checkbox",

      style: {
        backgroundImage: "decoration/checkbox/checked.png"
      }
    },
    
    "checkbox-hovered":
    {
      include: "button-hovered"
    },
    
    "checkbox-checked-hovered":
    {
      include: "checkbox",

      style: {
        backgroundImage: "decoration/checkbox/checked-focused.png"
      }
    },
      
    "checkbox-focused": 
    {
      include: "checkbox"
    },
    
    "checkbox-checked-focused":
    {
      include: "checkbox",

      style: {
        backgroundImage: "decoration/checkbox/checked-focused.png"
      }
    },

    "checkbox-disabled": 
    {
      include: "checkbox",
      
      style: {
        color: "border-button-disabled",
        shadowBlurRadius: 0
      }
    },
    
    "checkbox-checked-disabled":
    {
      include: "checkbox",
      style: {
        backgroundImage: "decoration/checkbox/checked-disabled.png"
      }
    },

    "checkbox-invalid": 
    {
      include: "checkbox",
      
      style: {
        color: "border-invalid",
        shadowColor: "border-invalid"
      }
    },
    
    "checkbox-checked-invalid":
    {
      include: "checkbox-checked",
      
      style: {
        shadowColor: "border-invalid",
        endColor: "border-invalid"
      }
    },

    "checkbox-hovered-invalid": 
    {
      include: "checkbox-hovered",
      
      style: {
        color: "invalid",
        innerColor: "checkbox-hovered-inner-invalid",
        backgroundColor: "checkbox-hovered-invalid"
      }
    },

    "checkbox-focused-invalid": 
    {
      include: "checkbox-focused",
      
      style: {
        color: "invalid",
        shadowColor: "invalid"
      }
    },

    "checkbox-undetermined":
    {
      include: "checkbox",

      style: {
        backgroundImage: "decoration/checkbox/undetermined.png"
      }
    },

    "checkbox-undetermined-disabled":
    {
      include: "checkbox",

      style: {
        backgroundImage: "decoration/checkbox/undetermined-disabled.png"
      }
    },

    "checkbox-undetermined-hovered":
    {
      include: "checkbox",

      style: {
        backgroundImage: "decoration/checkbox/undetermined.png"
      }
    },

    "checkbox-undetermined-invalid":
    {
      include: "checkbox-invalid",

      style: {
        backgroundImage: "decoration/checkbox/undetermined.png"
      }
    },

    "checkbox-undetermined-focused":
    {
      include: "checkbox-focused",

      style: {
        backgroundImage: "decoration/checkbox/undetermined.png"
      }
    },

    /*
    ---------------------------------------------------------------------------
      COMBOBOX
    ---------------------------------------------------------------------------
    */
    
    "combobox-button":
    {
      include: "button",
      
      style: {
        radius: 1
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    "border-invalid": 
    {
      include: "input",
      
      style: {
        color: "border-invalid"
      }
    },
    
    "dragover":
    {
      style: {
        bottom: [2, "solid", "border-dragover"]
      }
    },

    "group":
    {
      style: {
        widthTop: 1,
        color: "border-group",
        innerWidthTop: 1,
        innerColor: "border-group-inner"
      }
    },

    "keyboard-focus":
    {
      style: {
        width: 1,
        color: "keyboard-focus",
        style: "dotted"
      }
    },
    
    "main":
    {
      style: {
        radius: 3,
        width: 1,
        color: "border-window"
      }
    },
    
    "pane": 
    {
      include: "input"
    },

    "selected":
    {
      style: {
        backgroundColor: "background-selected",
        shadowLength: 0,
        shadowBlurRadius: 2,
        shadowColor: "shadow"
      }
    },

    /*
    ---------------------------------------------------------------------------
      IFRAME
    ---------------------------------------------------------------------------
    */

    "iframe":
    {
      include: "input",

      style: {
        endColor: "background-htmlarea"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */

    "menu":
    {
      style: {
        radius: 3,
        width: 1,
        color: "border-menu",
        shadowColor: "shadow-menu",
        shadowBlurRadius: 8,
        shadowLength: 0,
        backgroundImage: "decoration/menu/menu-background.jpg"
      }
    },

    "menu-separator":
    {
      style: {
        widthTop: 1,
        colorTop: "menu-separator-top",

        widthBottom: 1,
        colorBottom: "menu-separator-bottom"
      }
    },

    /*
    ---------------------------------------------------------------------------
      MENU BAR
    ---------------------------------------------------------------------------
    */

    "menubar":
    {
      style: {
        width: 1,
        colorBottom: "border-menu-bar",
        shadowColor: "shadow",
        shadowBlurRadius: 5,
        shadowLength: 0,
        backgroundImage: "decoration/menu/bar-background.png",
        backgroundRepeat: "repeat"
      }
    },
    
    "menubar-button-hovered":
    {
      style: {
        radius: 2,
        startColor: "menu-bar-button-hovered-start",
        endColor: "menu-bar-button-hovered-end"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      POPUP
    ---------------------------------------------------------------------------
    */

    "popup":
    {
      style: {
        radius: 3,
        width: 1,
        color: "border-popup",
        shadowColor: "shadow-popup",
        shadowBlurRadius: 10,
        shadowLength: 0,
        backgroundImage: "decoration/popup/popup-background.jpg"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */

    "progressbar":
    {
      style: {
        radius: 10,
        width: 1, 
        color: "border-progressbar",
        startColor: "progressbar-start",
        endColor: "progressbar-end",
        startColorPosition: 1,
        endColorPosition: 90
      }
    },
    
    "progressbar-progress-disabled":
    {
      include: "scrollbar-slider-horizontal-disabled",
      
      style: {
        radius: 10
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      PROGRESSIVE
    ---------------------------------------------------------------------------
    */

    "progressive-table-header":
    {
       style: {
         width: 1,
         color: "border-main",
         style: "solid"
       }
    },

    "progressive-table-header-cell":
    {
      style: {
        gradientStart: ["table-header-start", 10],
        gradientEnd: ["table-header-end", 90],

        widthRight: 1,
        colorRight: "progressive-table-header-border-right"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      RADIO BUTTON
    ---------------------------------------------------------------------------
    */
    
    "radiobutton":
    {
      include: "button",
      
      style: {
        radius: 15,
        shadowBlurRadius: 2
      }
    },
    
    "radiobutton-hovered": 
    {
      include: "button-hovered",
      
      style: {
        radius: 15,
        shadowBlurRadius: 2
      }
    },

    "radiobutton-checked": 
    {
      include: "radiobutton",
      
      style: {
        backgroundImage: "decoration/radiobutton/checked.png"
      }
    },
    
    "radiobutton-checked-hovered": 
    {
      include: "radiobutton",
      
      style: {
        backgroundImage: "decoration/radiobutton/checked-focused.png"
      }
    },

    "radiobutton-checked-focused": 
    {
      include: "radiobutton",
      
      style: {
        backgroundImage: "decoration/radiobutton/checked-focused.png"
      }
    },

    "radiobutton-focused": 
    {
      include: "radiobutton",
      
      style: {
        shadowBlurRadius: 4
      }
    },

    "radiobutton-disabled": 
    {
      include: "button-disabled",
      
      style: {
        radius: 15
      }
    },

    "radiobutton-checked-disabled": 
    {
      include: "radiobutton",
      
      style: {
        backgroundImage: "decoration/radiobutton/checked-disabled.png"
      }
    },

    "radiobutton-invalid": 
    {
      include: "button-invalid",
      
      style: {
        radius: 15,
        shadowBlurRadius: 2
      }
    },

    "radiobutton-checked-invalid": 
    {
      include: "radiobutton-checked",
      
      style: {
        shadowColor: "border-invalid",
        endColor: "border-invalid"
      }
    },

    "radiobutton-checked-focused-invalid": 
    {
      include: "radiobutton-checked-focused",
      
      style: {
        color: "invalid",
        shadowColor: "invalid"
      }
    },

    "radiobutton-checked-hovered-invalid": 
    {
      include: "radiobutton-checked-hovered",
      
      style: {
        color: "invalid",
        innerColor: "radiobutton-hovered-invalid"
      }
    },

    "radiobutton-focused-invalid": 
    {
      include: "radiobutton-focused",
      
      style: {
        color: "invalid",
        shadowColor: "invalid"
      }
    },

    "radiobutton-hovered-invalid": 
    {
      include: "radiobutton-hovered",
      
      style: {
        color: "invalid",
        innerColor: "radiobutton-hovered-invalid",
        backgroundColor: "radiobutton-hovered-invalid"
      }
    },

    /*
    ---------------------------------------------------------------------------
      SCROLLBAR
    ---------------------------------------------------------------------------
    */
    
    "scrollbar-horizontal":
    {
      style: {
        gradientStart: ["scrollbar-end", 0],
        gradientEnd: ["scrollbar-start", 100]
      }
    },

    "scrollbar-vertical": 
    {
      include: "scrollbar-horizontal",
      
      style: {
        orientation: "horizontal"
      }
    },

    "scrollbar-slider-horizontal":
    {
      include: "button",
      
      style: {
        radius: 10
      }
    },

    "scrollbar-slider-vertical":
    {
      include: "scrollbar-slider-horizontal",
      
      style: {
        orientation: "horizontal"
      }
    },
    
    "scrollbar-slider-horizontal-pressed":
    {
      include: "button-checked-hovered",
      
      style: {
        radius: 10,
        innerColorTop: "transparent"
      }
    },
    
    "scrollbar-slider-vertical-pressed":
    {
      include: "scrollbar-slider-horizontal-pressed",
      
      style: {
        orientation: "horizontal"
      }
    },
    
    "scrollbar-slider-horizontal-hovered":
    {
      include: "tabview-page-button-inactive",
          
      style: {
        radius: 10
      }
    },
    
    "scrollbar-slider-vertical-hovered":
    {
      include: "scrollbar-slider-horizontal-hovered",
      
      style: {
        orientation: "horizontal"
      }
    },

    "scrollbar-slider-horizontal-disabled":
    {
      include: "button-checked-disabled",
      
      style: {
        radius: 10
      }
    },

    "scrollbar-slider-vertical-disabled":
    {
      include: "scrollbar-slider-horizontal-disabled",
      
      style: {
        orientation: "horizontal"
      }
    },

    /*
    ---------------------------------------------------------------------------
      SEPARATOR
    ---------------------------------------------------------------------------
    */

    "separator-horizontal":
    {
      style: {
        widthLeft: 1,
        colorLeft: "border-separator"
      }
    },

    "separator-vertical":
    {
      style: {
        widthTop: 1,
        colorTop: "border-separator"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SLIDEBAR
    ---------------------------------------------------------------------------
    */
    
    "slidebar-button":
    {
      include: "tabview-page-button-inactive"
    },
    
    "slidebar-button-hovered":
    {
      include: "tabview-page-button-hovered"
    },
    
    "slidebar-button-pressed":
    {
      include: "button-checked"
    },
    
    /*
    ---------------------------------------------------------------------------
      SLIDER
    ---------------------------------------------------------------------------
    */

    "slider-horizontal":
    {
      style: {
        backgroundImage: "decoration/slider/slider-horizontal.png",
        backgroundRepeat: "repeat-x",
        colorTop: "transparent",
        widthTop: 5
      }
    },
    
    "slider-vertical":
    {
      style: {
        backgroundImage: "decoration/slider/slider-vertical.png",
        backgroundRepeat: "repeat-y"
      }
    },
    
    "slider-knob":
    {
      include: "button-checked",
      
      style: {
        radius: 15
      }
    },
    
    "slider-knob-hovered":
    {
      include: "slider-knob",
      
      style: {
        endColor: "text-selected"
      }
    },
    
    "slider-knob-disabled":
    {
      include: "button-checked-disabled",
      
      style: {
        radius: 15
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SPINNER
    ---------------------------------------------------------------------------
    */
    
    "spinner-button": 
    {
      style: {
        shadowColor: "shadow",
        shadowBlurRadius: 4,
        shadowLength: 0,
        radius: 0,
        width: 1,
        color: "border-button",
        innerWidth: 1,
        innerColorTop: "border-button-inner",
        startColor: "button-start",
        endColor: "button-end",
        startColorPosition: 10,
        endColorPosition: 90
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SPLITPANE
    ---------------------------------------------------------------------------
    */

    "splitpane":
    {
      include: "input",
      
      style: {
        endColor: "transparent"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      SPLITTER
    ---------------------------------------------------------------------------
    */
    
    "splitter-knob-horizontal":
    {
      include: "scrollbar-slider-horizontal-pressed",
      
      style: {
        shadowBlurRadius: 0
      }
    },
    
    "splitter-knob-vertical":
    {
      include: "scrollbar-slider-vertical-pressed",
      
      style: {
        shadowBlurRadius: 0
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */

    "table":
    {
      style: {
        width: 1,
        color: "border-table",
        style: "solid",
        shadowColor: "shadow-table",
        shadowBlurRadius: 3,
        shadowLength: 0,
        radius: 2
      }
    },

    "table-statusbar":
    {
      style: {
        width: 1,
        color: "border-table-statusbar",
        shadowBlurRadius: 0,
        startColor: "table-statusbar-start",
        endColor: "table-statusbar-end",
        startColorPosition: 0,
        endColorPosition: 100
      }
    },

    "table-scroller-header":
    {
      style: {
        widthBottom: 1,
        colorBottom: "border-button",
        startColor: "button-start",
        endColor: "button-end",
        startColorPosition: 5,
        endColorPosition: 95
      }
    },
    
    "table-scroller-header-hovered":
    {
      include: "table-scroller-heade",
      
      style: {
        colorBottom: "border-button-disabled",
        startColor: "button-disabled-start",
        endColor: "button-disabled-end"
      }
    },

    "table-header-cell":
    {
      style: {
        widthRight: 1,
        colorRight: "border-header-cell",
        shadowLength: 0,
        shadowColor: "shadow",
        shadowBlurRadius: 5
      }
    },


    "table-header-cell-hovered":
    {
      include: "table-header-cell",
      
      style: {
        startColor: "header-cell-hovered-start",
        endColor: "header-cell-hovered-end",
        startColorPosition: 10,
        endColorPosition: 90
      }
    },

    "table-scroller-focus-indicator":
    {
      style: {
        width: 2,
        color: "table-focus-indicator",
        style: "solid"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      TABVIEW
    ---------------------------------------------------------------------------
    */

    "tabview-pane":
    {
      include: "input",
      
      style: {
        radius: 1,
        color: "border-tabview-pane",
        startColor: "tabview-pane-start",
        endColor: "tabview-pane-end",
        shadowBlurRadius: 5
      }
    },

    "tabview-page-button-active": 
    {
      include: "button-checked"
    },
    
    "tabview-page-button-disabled": 
    {
      include: "button-checked-disabled"
    },

    "tabview-page-button-inactive":
    {
      include: "button",
      
      style: {
        radius: 1,
        innerColorTop: "border-tabview-button-inactive",
        startColor: "tabview-button-inactive-start",
        endColor: "tabview-button-inactive-end"
      }
    },
    
    "tabview-page-button-hovered": 
    {
      include: "button"
    },
    
    /*
    ---------------------------------------------------------------------------
      TEXT FIELD
    ---------------------------------------------------------------------------
    */

    "input":
    {
      style: {
        color: "border-input",
        width: 1,
        radius: 2,
        startColor: "input-start",
        endColor: "input-end",
        startColorPosition: 0,
        endColorPosition: 2,
        colorPositionUnit: "px",
        shadowLength: 0,
        shadowBlurRadius: 3,
        shadowColor: "shadow-input"
      }
    },
    
    "input-hovered":
    {
      include: "input",
      
      style: {
        startColor: "input-hovered-start",
        endColor: "input-hovered-end"
      }
    },

    "input-focused": 
    {
      include: "input",
      
      style: {
        endColor: "input-hovered-end",
        radius: 3
      }
    },
    
    "input-invalid": 
    {
      include: "input",
      
      style: {
        color: "border-invalid",
        shadowColor: "border-invalid"
      }
    },

    "input-focused-invalid": 
    {
      include: "input-focused",
      
      style: {
        color: "border-invalid",
        shadowColor: "border-invalid"
      }
    },

    "input-disabled": 
    {
      include: "input",
      
      style: {
        color: "border-input-disabled",
        endColor: "input-disabled",
        shadowBlurRadius: 0
      }
    },

    /*
    ---------------------------------------------------------------------------
      TOOLBAR
    ---------------------------------------------------------------------------
    */

    "toolbar":
    {
      include: "button",
      
      style: 
      {
        startColor: "toolbar-start",
        endColor: "toolbar-end"
      }
    },
    
    "toolbar-button":
    {
      include: "button",
      
        style: {
        color: "transparent",
        innerColorTop: "transparent",
        shadowColor: "transparent",
        startColor: "transparent",
        endColor: "transparent",
        backgroundColor: "transparent"
      }
    },

    "toolbar-separator":
    {
      style: 
      {
        widthLeft: 1,
        widthRight: 1,

        colorLeft: "toolbar-separator-left",
        colorRight: "toolbar-separator-right"
      }
    },

    "toolbar-part":
    {
      style: {
        widthLeft: 1,
        widthRight: 1,

        colorLeft: "toolbar-separator-right",
        colorRight: "toolbar-separator-left"
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      TOOLTIP
    ---------------------------------------------------------------------------
    */
    
    "tooltip-error":
    {
      style: {
        backgroundColor: "tooltip-error",
        radius: 4,
        shadowColor: "shadow",
        shadowBlurRadius: 2,
        shadowLength: 1
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      VIRTUAL WIDGETS
    ---------------------------------------------------------------------------
    */

    "group-item":
    {
      style: {
        startColor: "groupitem-start",
        endColor: "groupitem-end",
        startColorPosition: 0,
        endColorPosition: 100
        
      }
    },
    
    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */
    
    "window-active":
    {
      style: {
        radius: [5, 5, 0, 0],
        shadowBlurRadius: 15,
        shadowLength: 0,
        shadowColor: "shadow-window"
      }
    },
    
    "window-inactive":
    {
      include: "window-active",
      
      style: 
      {
        shadowBlurRadius: 5
      }
    },

    "window-incl-statusbar": 
    {
       include: "window-active",
       
       style: 
       {
         radius: 20
       }
    },

    "window-resize-frame":
    {
      style: {
        radius: [5, 5, 0, 0],
        width: 1,
        color: "border-main"
      }
    },

    "window-resize-frame-incl-statusbar":
    {
       include: "window-resize-frame",
       
       style: {
         radius: 0
       }
    },

    "window-captionbar-active":
    {
      style: {
        width: 1,
        color: "border-button",
        colorTop: "border-captionbar-active-top",
        colorBottom: "border-captionbar-active-bottom",
        startColor: "captionbar-active-start",
        endColor: "captionbar-active-end",
        startColorPosition: 10,
        endColorPosition: 90
      }
    },

    "window-captionbar-inactive":
    {
      include: "window-captionbar-active",
      
      style: {
        color: "border-button",
        colorTop: "border-captionbar-inactive-top",
        colorBottom: "border-captionbar-inactive-bottom",
        startColorPosition: 1,
        endColorPosition: 100,
        startColor: "captionbar-inactive-start",
        endColor: "captionbar-inactive-end"
      }
    },

    "window-statusbar-active":
    {
      include: "input",
      
      style: {
        width: [0, 1, 1, 1],
        color: "border-window",
        endColor: "window-statusbar-background",
        radius: [0, 0, 1, 1]
      }
    },
    
    "window-statusbar-inactive":
    {
      include: "window-statusbar-active",
      
      style: {
        endColor: "transparent",
        backgroundImage: "decoration/window/window-inactive.png"
      }
    },

    "window-pane-active":
    {
      style: {
        radius: [0, 0, 1, 1],
        width: 1,
        innerWidth: 0,
        color: "border-window",
        colorTop: "border-window-top",
        innerColor: "border-window-top",
        backgroundImage: "decoration/window/window-active.png",
        backgroundRepeat: "repeat"
      }
    },
    
    "window-pane-active-incl-statusbar":
    {
      include: "window-pane-active",
      
      style: {
        radius: 0
      }
    },
    
    "window-pane-inactive":
    {
      include: "window-pane-active",
      
      style: {
        backgroundImage: "decoration/window/window-inactive.png"
      }
    },
    
    "window-pane-inactive-incl-statusbar":
    {
      include: "window-pane-inactive",
      
      style: {
        radius: 0
      }
    },
    
    // WINDOW BUTTONS
    
    "window-button":
    {
      include: "button",
      
      style: {
        radius: 15,
        startColor: "transparent",
        endColor: "black",
        startColorPosition: 0,
        endColorPosition: 100
      }
    },
    
    "window-button-hovered":
    {
      include: "window-button",
      
      style: {
        color: "transparent",
        shadowBlurRadius: 5
      }
    },
    
    "window-button-inactive":
    {
      include: "window-button",
      
      style: {
        endColor: "inactive-button"
      }
    },
    
    "minimize-button":
    {
      include: "window-button",
      
      style: {
        endColor: "minimize-button"
      }
    },
    
    "minimize-button-hovered":
    {
      include: "window-button-hovered",
      
      style: {
        shadowColor: "minimize-button-hovered",
        endColor: "minimize-button-hovered"
      }
    },
    
    "maximize-button":
    {
      include: "window-button",
      
      style: {
        endColor: "maximize-button"
      }
    },
    
    "maximize-button-hovered":
    {
      include: "window-button-hovered",
      
      style: {
        shadowColor: "maximize-button-hovered",
        endColor: "maximize-button-hovered"
      }
    },
    
    "restore-button":
    {
      include: "window-button",
      
      style: {
        endColor: "restore-button"
      }
    },
    
    "restore-button-hovered":
    {
      include: "window-button-hovered",
      
      style: {
        shadowColor: "restore-button-hovered",
        endColor: "restore-button-hovered"
      }
    },
    
    "close-button":
    {
      include: "window-button",
      
      style: {
        endColor: "close-button"
      }
    },
    
    "close-button-hovered":
    {
      include: "window-button-hovered",
      
      style: {
        shadowColor: "close-button-hovered",
        endColor: "close-button-hovered"
      }
    }
    
  }
});
