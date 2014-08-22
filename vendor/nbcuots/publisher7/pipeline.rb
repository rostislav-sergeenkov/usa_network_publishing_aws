p7callback :deploy do |site, config, env|
  drush_alias = "#{site}.#{env}"

  unless config['build_method'] == 'install'
    # run features revert, as db updates may require features to be in correct state. failure is ok - command might not be found.
    P7BuildKit::drush('fra', drush_alias, site, false)
    # run database updates
    P7BuildKit::drush('updb', drush_alias, site)
    # run features revert again
    P7BuildKit::drush('fra', drush_alias, site, false)
    # clear all caches
    P7BuildKit::drush('cc all', drush_alias, site)
  else
    P7BuildKit::drush('sql-drop', drush_alias, site)
    P7BuildKit::drush("psi #{config['profile']} --account-name=#{config['login']} --account-pass=#{config['password']}", drush_alias, site)
    P7BuildKit::drush('registry-rebuild', drush_alias, site)
  end
end
