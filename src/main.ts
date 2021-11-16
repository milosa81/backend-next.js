import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Migrator } from './migrations/migrator';
import { QuerystringTransformPipe } from './shared/pipes/querystring-transform-pipe';

async function bootstrap() {
	var migrator = new Migrator();
	migrator.migrate();

	const app = await NestFactory.create(ApplicationModule);

	const options = new DocumentBuilder()
		.setTitle('NGInvoicing Backend')
		.setDescription('The NGInvoicing Backend API description')
		.setVersion('1.0')
		.addTag('Customers')
		.addTag('CustomerTypes')
		.addTag('Invoices')
		.addTag('InvoiceStates')
		.addTag('Profile')
		.addTag('Skus')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/api', app, document);

	app.useGlobalPipes(new QuerystringTransformPipe());
	app.useGlobalPipes(new ValidationPipe());

	await app.listen(3000);
}
bootstrap();
