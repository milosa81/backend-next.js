import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);

	const options = new DocumentBuilder()
		.setTitle('NGInvoicing Backend')
		.setDescription('The NGInvoicing Backend API description')
		.setVersion('1.0')
		.addTag('Customers')
		.addTag('CustomerTypes')
		.addTag('Skus')
		.addTag('Profile')
		.build();
	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('/api', app, document);

	app.useGlobalPipes(new ValidationPipe());

	await app.listen(3000);
}
bootstrap();
