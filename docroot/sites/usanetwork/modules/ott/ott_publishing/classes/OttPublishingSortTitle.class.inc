<?php

/**
 * @file
 * OttPublishingSortTitle Class
 *
 */

/**
 * Class OttPublishingSortTitle
 *
 * This class will be able to convert Words into Numbers in a very simple way.
 *
 */
class OttPublishingSortTitle {
  /**
   * Written numbers.
   */
  public static $keys = array('one' => '1', 'two' => '2', 'three' => '3',
    'four' => '4', 'five' => '5', 'six' => '6', 'seven' => '7', 'eight' => '8',
    'nine' => '9', 'ten' => '10', 'eleven' => '11', 'twelve' => '12',
    'thirteen' => '13', 'fourteen' => '14', 'fifteen' => '15',
    'sixteen' => '16', 'seventeen' => '17', 'eighteen' => '18',
    'nineteen' => '19', 'twenty' => '20', 'thirty' => '30', 'forty' => '40',
    'fifty' => '50', 'sixty' => '60', 'seventy' => '70', 'eighty' => '80',
    'ninety' => '90', 'hundred' => '100', 'thousand' => '1000',
    'million' => '1000000', 'billion' => '1000000000'
  );

  /**
   * String to look before written number.
   */
  public static $str_exist = 'episode';

  /**
   * This function will convert words into numbers.
   *
   * @param $string as string
   *
   * @return string
   */
  public static function convertToSortTitle($string) {
    // Removes a, an, the from beginning of the string.
    $string = preg_replace("/^(the|a|an)\b\ */i", "", $string);
    $keys = static::$keys;

    $combined_keys = array_combine(
      array_map(function ($k) {
        return strtolower(static::$str_exist) . ' ' . $k;
      }, array_keys($keys)),
      $keys
    );

    // Convert only if the matching(ex. episode) exists.
    if (static::check_string_exists($combined_keys, strtolower($string))) {
      preg_match_all('#((?:^|and|,| |-)*(\b' . implode('\b|\b', array_keys($keys)) . '\b))+#i', $string, $tokens);
      $tokens = $tokens[0];
      usort($tokens, [get_called_class(), 'strlen_sort']);
      foreach ($tokens as $token) {
        $token = trim(strtolower($token));
        preg_match_all('#(?:(?:and|,| |-)*\b' . implode('\b|\b', array_keys($keys)) . '\b)+#', $token, $words);
        $words = $words[0];
        $num = '0';
        $total = 0;
        foreach ($words as $word) {
          $word = trim($word);
          $val = $keys[$word];
          if (bccomp($val, 100) == -1) {
            $num = bcadd($num, $val);
            continue;
          }
          elseif (bccomp($val, 100) == 0) {
            // Multiply by 1 if the written number like hundred ten instead of
            // one hundred and ten.
            $num = ($num == 0) ? bcmul(1, $val) : bcmul($num, $val);
            continue;
          }
          $num = ($num == 0) ? bcmul(1, $val) : bcmul($num, $val);
          $total = bcadd($total, $num);
          $num = '0';
        }
        $total = bcadd($total, $num);
        $string = preg_replace("#\b$token\b#i", $total, $string);
      }
    }

    return $string;
  }

  /**
   * String sort function.
   *
   * @param $a
   * @param $b
   *
   * @return int
   */
  public static function strlen_sort($a, $b) {
    if (strlen($a) > strlen($b)) {
      return -1;
    }
    elseif (strlen($a) < strlen($b)) {
      return 1;
    }
    return 0;
  }

  /**
   * This function will check the string exists in given array keys.
   *
   * @param $combined_keys as array
   * @param $string as string
   *
   * @return bool
   */
  public static function check_string_exists($combined_keys, $string) {
    foreach ($combined_keys as $key => $value) {
      if (strpos($string, $key) !== FALSE) {
        return TRUE;
      }
    }
    return FALSE;
  }
}
