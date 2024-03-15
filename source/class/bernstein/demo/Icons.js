/* ************************************************************************

   Copyright:
     2024 Dmitrii Zolotov

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Dmitrii Zolotov (goldim)

************************************************************************ */

/**
 * @usefont(MaterialIcons)
 */
qx.Class.define("bernstein.demo.Icons", {
    extend: qx.core.Object,
  
    members: {
      getIcon(name){
        const icons = {
          TABLE_SHOW_DIALOG: "info/32",
          TABLE_LIST_ADD: "add/16",
          TABLE_LIST_REMOVE: "remove/16",
          TABLE_SHOW_SELECTION: "select_all/16",
          TABLE_EDIT_UNDO: "undo/16",
          TABLE_CALENDAR: "calendar_month/16",
          MEDIA_PLAYER_SKIP_BACK: "skip_previous/16",
          MEDIA_PLAYER_SKIP_FORWARD: "skip_next/16",
          MEDIA_PLAYER_START: "play_arrow/22",
          MEDIA_PLAYER_PAUSE: "pause/22",
          WEB_BROWSER_PREVIOUS: "arrow_back/16",
          WEB_BROWSER_NEXT: "arrow_forward/16",
          WEB_BROWSER_GO: "start/16",
          GO_HOME: "home/22",
          WIKIPEDIA: "feed/22",
          YOUTUBE: "smart_display/22",
          WIDGET_BROWSER: "widgets/32",
          CALCULATOR: "calculate/32",
          COLOR_SELECTOR: "palette/32",
          TABLE: "table_view/32",
          MEDIA_PLAYER: "audiotrack/32",
          WEB_BROWSER: "language/32",
          WIDGET_BROWSER_SMALL: "widgets/16",
          CALCULATOR_SMALL: "calculate/16",
          COLOR_SELECTOR_SMALL: "palette/16",
          TABLE_SMALL: "table_view/16",
          MEDIA_PLAYER_SMALL: "audiotrack/16",
          WEB_BROWSER_SMALL: "language/16",
        }
        return icons[name] ? "@MaterialIcons/" + icons[name]: undefined;
      }
    }
});