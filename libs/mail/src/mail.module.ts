import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

@Module({
<<<<<<< HEAD
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
=======
  imports: [],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule { }
>>>>>>> main
