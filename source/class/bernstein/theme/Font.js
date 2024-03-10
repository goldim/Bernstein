/* ************************************************************************

   Copyright:
     2015-2021 Norbert Schröder

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Norbert Schröder (scro34)

************************************************************************ */

/**
 * @asset(resource/bernstein/fonts/fa-solid-900.ttf)
 */
qx.Theme.define("bernstein.theme.Font",
{
  fonts:
  {
    "default":
    {
      size: 13,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? 
        [ "Lucida Grande" ] : 
        [ "Segoe UI", "MS Sans Serif", "Arial", "sans-serif" ]
    },

    "bold":
    {
      size: 13,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? 
        [ "Lucida Grande" ] : 
        [ "Segoe UI", "MS Sans Serif", "Arial", "sans-serif" ],
      bold: true
    },

    "small":
    {
      size: 11,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? 
        [ "Lucida Grande" ] : 
        [ "Segoe UI", "MS Sans Serif", "Arial", "sans-serif" ]
    },

    "monospace":
    {
      size: 12,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? 
        [ "Lucida Console", "Monaco" ] : 
        [ "Consolas", "DejaVu Sans Mono", "Courier New", "monospace" ]
    },
    
    "headline":
    {
      size: 14,
      lineHeight: 1.4,
      family: (qx.core.Environment.get("os.name") === "osx") ? 
        [ "Lucida Grande" ] : 
        [ "MS Sans Serif", "Arial", "sans-serif" ],
      bold: true
    }
  }
});
