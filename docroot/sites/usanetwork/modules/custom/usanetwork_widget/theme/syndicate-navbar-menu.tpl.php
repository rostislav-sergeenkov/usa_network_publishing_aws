<!DOCTYPE html>
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <?php print $styles; ?> 
  <?php if ($show_id): ?>
  <script type="text/javascript"> var $show_id = <?php print $show_id; ?>; </script>
  <?php endif; ?>
  <script>var $env = "<?php print _usanetwork_widget_get_environment(); ?>";</script>
  <script src="<?php print $library_js_path; ?>"></script>
  <script src="<?php print $widget_js_path; ?>"></script>
</head>
<!--[if IE 9]>
  <div class="ie ie9">
 <![endif]-->
<h3>page body goes here..</h3>
<div id="usanetwork-main-menu"></div>
<!--[if IE 9]>
</div>
<![endif]-->
</html>
