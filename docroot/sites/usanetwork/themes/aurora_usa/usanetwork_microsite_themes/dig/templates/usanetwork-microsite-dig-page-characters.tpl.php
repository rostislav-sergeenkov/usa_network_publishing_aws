<?php
/**
 * Template of Characters page
 *
 * Variables:
 * - $people - array of people:
 * -  - $people[n]['id'] - machine-readable id of person
 * -  - $people[n]['quotes'] - array of person quotes:
 * -  -  - $people[n]['quotes'][m]['quote'] - string value of quote field
 * -  -  - $people[n]['quotes'][m]['source'] - string value of source field
 * -  - $people[n]['title'] - the title of the person
 * -  - $people[n]['description'] - the description of the person
 * - $characters_navigation - pre-rendered list of navigation links
 * - $background_url - the URL of page background
 */
?>
<?php if (!empty($background_url)): ?>
<div class="microsite-section-container" data-bg-url="<?php print $background_url; ?>">
  <?php endif; ?>
<?php if (!empty($people)): ?>
  <ul>
    <?php foreach ($people as $person_key => $person): ?>
      <li id="<?php print !empty($person['id']) ? $person['id'] : 'undefined'; ?>">
        <?php if (!empty($person['quotes'])): ?>
          <div class="left-pane">
            <div class="caption">
              <ul>
                <?php foreach ($person['quotes'] as $quotation_key => $quotation): ?>
                  <?php if (!empty($quotation['quote']) && !empty($quotation['source'])): ?>
                    <li<?php if ($quotation_key == 0): print ' class="active"'; endif; ?>>
                      <?php if (!empty($quotation['quote'])): ?>
                        <div class="quote">
                          <?php print $quotation['quote']; ?>
                        </div>
                      <?php endif; ?>
                      <?php if (!empty($quotation['source'])): ?>
                        <div class="quote-source">
                          <?php print $quotation['source']; ?>
                        </div>
                      <?php endif; ?>
                    </li>
                  <?php endif; ?>
                <?php endforeach; ?>
              </ul>
            </div>
          </div>
        <?php endif; ?>
        <div class="right-pane">
          <?php if (!empty($person['title'])): ?>
            <h2><?php print $person['title']; ?></h2>
          <?php endif; ?>
          <div class="underline"></div>
          <?php if (!empty($characters_navigation)): ?>
            <div class="character-nav">
              <div class="prev"><span>&lt;</span></div>
              <ul>
                <?php print $characters_navigation; ?>
              </ul>
              <div class="next"><span>&gt;</span></div>
            </div>
          <?php endif; ?>
          <?php if (!empty($person['title'])): ?>
            <h3><?php print $person['title']; ?></h3>
          <?php endif; ?>
          <?php if (!empty($person['description'])): ?>
            <div class="text">
              <?php print $person['description']; ?>
            </div>
          <?php endif; ?>
          <div class="ad300x250"><center>Ad goes here!</center></div><!-- Maksim: <center></center> - IS DEPRECATED TAG! -->
        </div>
      </li>
    <?php endforeach; ?>
  </ul>
<?php endif; ?>
<?php if (!empty($background_url)): ?>
  </div>
<?php endif; ?>
