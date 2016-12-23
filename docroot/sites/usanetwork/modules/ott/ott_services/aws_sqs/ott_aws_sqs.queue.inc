<?php

/**
 * @file
 * Definition of OttAwsSqsQueue.
 */

/**
 * Ott Amazon queue.
 */
class OttAwsSqsQueue extends AwsSqsQueue {
  /**
   * @var string $message Latest sent message.
   */
  private $message;

  /**
   * Returns the queue object for a given name.
   *
   * @return object
   */
  static public function get($name) {
    return new OttAwsSqsQueue($name);
  }
  /**
   * Send an item to the AWS Queue.
   *
   * Careful, you can only store data up to 64kb.
   * @todo Add link to documentation here. I think this info is out of date.
   *    I believe now you can store more. But you get charged as if it's an additional
   *    request.
   *
   * Invokes SqsClient::sendMessage().
   *  http://docs.aws.amazon.com/aws-sdk-php-2/latest/class-Aws.Sqs.SqsClient.html#_sendMessage
   *
   * @param $data
   *   Can be of any type, mostly array or object. Will be stored
   *   serialized in the queue sytem. If an item retreived from the queue is
   *   being re-submitted to the queue (if is_object($item) && $item->data &&
   *   item->item_id), only $item->data will be stored.
   * @param $context
   *   Message context storage.
   *
   * @return bool
   */
  public function createItem($data, $context = NULL) {
    // Check to see if someone is trying to save an item originally retrieved
    // from the queue. If so, this really should have been submitted as
    // $item->data, not $item. Reformat this so we don't save metadata or
    // confuse item_ids downstream.
    if (is_object($data) && property_exists($data, 'data') && property_exists($data, 'item_id')) {
      $text = t('Do not re-queue whole items retrieved from the SQS queue. This included metadata, like the item_id. Pass $item->data to createItem() as a parameter, rather than passing the entire $item. $item->data is being saved. The rest is being ignored.');
      $data = $data->data;
      watchdog('aws_sqs', $text, array(), WATCHDOG_ERROR);
    }

    // @todo Add a check here for message size? Log it?

    // Create a new message object
    $message = array(
      'QueueUrl' => $this->getQueueUrl(),
      'MessageBody' => $data,
    );

    // Allow other modules alter the message content.
    drupal_alter('aws_sqs_queue_send_message', $message, $context);

    // Store message body before sending.
    $this->setMessage($message);

    // Create a new message object.
    $result = $this->getClient()->sendMessage($message);

    return (bool) $result;
  }

  /**
   * Return latest sent message.
   *
   * @return string
   */
  public function getMessage() {
    return $this->message;
  }

  /**
   * Sets latest sent message.
   *
   * @param string $message
   */
  public function setMessage($message) {
    $this->message = $message;
  }
}
