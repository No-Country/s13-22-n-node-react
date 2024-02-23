import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from "@nestjs/common";

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse();
    const req = ctx.getRequest();
    const codes = ["23503", "23505", "23502"];

    let message: string;

    let status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const msg =
    exception instanceof HttpException ? exception.getResponse() : exception;
    console.log(msg);

    const queryErrorKey = msg.driverError?.code;
    const timedOutError = msg.name

    if (codes.includes(queryErrorKey)) {
      status = 400;
      message = msg.driverError.detail;
    } else if (msg.statusCode === 400 || msg.statusCode === 401 || msg.statusCode === 404) {
      status = msg.statusCode;
      message = msg;
    } else if (msg.status) {
      status = msg.status;
      message = msg.message;
    } else if(timedOutError){
      status = msg.http_code;
      message = msg.message;
    }

    this.logger.error(`Status: ${status} Error: ${JSON.stringify(message)}`);

    res.status(status).json({
      timestamp: new Date().toISOString(),
      path: req.url,
      detail: message,
    });
  }
}
