<!DOCTYPE html>
<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <?php if (!empty($styles)): ?>
    <?php foreach ($styles as $style): ?>
      <?php print $style; ?>
    <?php endforeach; ?>
  <?php endif; ?>

  <?php if ($show_id): ?>
    <script type="text/javascript"> var $show_id = <?php print $show_id; ?>; </script>
  <?php endif; ?>

  <?php if (!empty($scripts)): ?>
    <?php foreach ($scripts as $script): ?>
      <?php print $script; ?>
    <?php endforeach; ?>
  <?php endif; ?>
</head>
<!--[if IE 9]>
  <div class="ie ie9">
 <![endif]-->
  <header>
    <?php print $menu; ?>
  </header>
  <!--[if IE 9]>
  </div>
<![endif]-->
</html>
