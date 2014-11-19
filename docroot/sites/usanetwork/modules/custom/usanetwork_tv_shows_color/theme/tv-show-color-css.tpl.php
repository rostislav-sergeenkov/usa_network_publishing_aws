<?php
//generate css file
?>
.show-<?php print $node_code; ?>.show-color-border:before, .show-<?php print $node_code; ?>.asset-img.show:before {
  background: <?php print $primary_color_code; ?>;
}
.show-<?php print $node_code; ?>.item-hover:hover {
  background: <?php print $primary_color_code; ?>;
}
.show-<?php print $node_code; ?> .icons-block a {
  color: <?php print $primary_color_code; ?>!important;
}
.show-<?php print $node_code; ?> .show-color, .show-<?php print $node_code; ?>.show-color {
  background: <?php print $primary_color_code; ?>;
}
.show-<?php print $node_code; ?> .show-color.secondary, .show-<?php print $node_code; ?>.show-color.secondary {
  background: <?php print $secondary_color_code; ?>;
}
.show-<?php print $node_code; ?> .show-color.secondary:before, .show-<?php print $node_code; ?>.show-color.secondary:before {
  background: <?php print $tertiary_color_code; ?>;
}
.show-<?php print $node_code; ?> .show-color.tertiary, .show-<?php print $node_code; ?>.show-color.tertiary {
  background: <?php print $tertiary_color_code; ?>;
}
.show-<?php print $node_code; ?> .show-color.tertiary:before, .show-<?php print $node_code; ?>.show-color.tertiary:before {
  background: <?php print $secondary_color_code; ?>;
}
.show-<?php print $node_code; ?> .show-color.hover-avail:hover, .show-<?php print $node_code; ?>.show-color.hover-avail:hover {
  background: <?php print $tertiary_color_code; ?>;
}
.show-<?php print $node_code; ?> .show-border {
  border-color: <?php print $primary_color_code; ?> !important;
}
.show-<?php print $node_code; ?> .show-border.secondary {
  border-color: <?php print $secondary_color_code; ?> !important;
}
.show-<?php print $node_code; ?> .show-border.tertiary {
  border-color: <?php print $tertiary_color_code; ?> !important;
}
