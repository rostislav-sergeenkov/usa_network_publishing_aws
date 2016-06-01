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
  <?php if($new_design): ;?>
    <div class="usa-section-title show-border">
      <h2 class="title"><?php print !empty($title) ? $title : ''; ?></h2>
    </div>
  <?php else: ; ?>
    <h2 class="section-title">
      <span class="section-title-wrapper show-border secondary"><?php print !empty($title) ? $title : ''; ?></span>
    </h2>
  <?php endif; ?>
  <?php if (!empty($persons)) : ?>
    <ul>
      <?php foreach ($persons as $person) :?>
        <li class="block-item">
          <div class="node node-usanetwork-promo <?php print($new_design)? 'usa-cast-promo': 'cast-promo';?>">
            <a href="<?php print (!empty($person['url']))? $person['url']: '#'; ?>">
              <?php if (!empty($person['image'])): ?>
                <div class="asset-img"><?php print $person['image']; ?></div>
              <?php endif; ?>
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
            </a>
          </div>
        </li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>
</div>


