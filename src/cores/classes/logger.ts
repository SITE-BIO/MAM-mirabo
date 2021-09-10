import winston from 'winston';
const { combine, timestamp, label, printf } = winston.format;

const simplePrintFormat = combine(
  timestamp(),
  printf(({ level, message, timestamp }) => {
    return `${level.toUpperCase()} [${timestamp}]: ${message}`;
  })
)

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error', format: simplePrintFormat}),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});



if(process.env.DEBUG === 'true') {
  logger.add(new winston.transports.Console({format: simplePrintFormat}))
}

export default logger;