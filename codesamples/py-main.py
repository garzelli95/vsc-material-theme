import json
import time
import pika
import sys
import os


def main():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='msgbroker'))
    channel = connection.channel()

    something = None
    something = 5
    print(f'Ciao {something * 2}')

    channel.queue_declare(queue='q-resize-job', durable=True)

    def callback(ch, method, properties: bool, body: str):
        print(' [x] Received new job')
        job = json.loads(body.decode())
        print(f' [.] Processing job {job["id"]}...')
        # fetch image from object storage
        time.sleep(5)
        print(' [x] Done')

    channel.basic_consume(queue='q-resize-job',
                          on_message_callback=callback,
                          auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()


if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print('Interrupted')
        try:
            sys.exit(0)
        except SystemExit:
            os._exit(0)
