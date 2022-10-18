export const Env = {
    messageBrokerAddress: process.env['RABBITMQ_ADDRESS'] || 'amqp://rabbitmq:pass@localhost:5672'
}
