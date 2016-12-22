<?php
/**
 * $title - title of block
 * $persons - array of persons
 *  name - Name of character
 *  role - Name of role
 *  image - Image url of character.
 * )
 */
?>

<div class="cast-and-crew-block show-border">
  <h2 class="section-title">
    <span class="section-title-wrapper show-border secondary"><?php print !empty($title) ? $title : ''; ?></span>
  </h2>
  <?php if (!empty($persons)) : ?>
    <ul>
      <?php foreach ($persons as $person) :?>
        <li class="block-item">
          <div class="node node-usanetwork-promo cast-promo">
            <a href="<?php print (!empty($person['url']))? $person['url']: '#'; ?>">
              <div class="meta-wrapper">
                <div class="meta-wrapper-inner">
                  <div class="meta">
                    <?php if (!empty($person['name'])): ?>
                      <div class="title"><?php print $person['name']; ?></div>
                    <?php endif; ?>
                    <?php if (!empty($person['role'])): ?>
                      <div class="additional"><?php print $person['role']; ?></div>
                    <?php endif; ?>
                  </div>
                </div>
              </div>
              <?php if (!empty($person['image'])): ?>
                <div class="asset-img"><img src="<?php print $person['image']; ?>" alt=""/></div>
              <?php endif; ?>
            </a>
          </div>
        </li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>
</div>


