import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Box height="150px" />
		<Components.Gallery>
			<Override slot="Item 0" srcFull="https://images.unsplash.com/photo-1611095787946-fd5e3ed08285?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" srcPreview="https://images.unsplash.com/photo-1611095787946-fd5e3ed08285?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Item 1" srcFull="https://images.unsplash.com/photo-1614788679832-7879205af178?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" srcPreview="https://images.unsplash.com/photo-1614788679832-7879205af178?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Item 2" srcFull="https://images.unsplash.com/photo-1614626169098-380f51607eb2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614626169098-380f51607eb2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item" />
			<Override slot="Item 3" srcFull="https://images.unsplash.com/photo-1614783509000-ccf2306e1a71?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614783509000-ccf2306e1a71?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 4" srcFull="https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 5" srcFull="https://images.unsplash.com/photo-1614714379087-799d7e877fda?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614714379087-799d7e877fda?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 6" srcFull="https://images.unsplash.com/photo-1614712257486-8a238b88bbdc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614712257486-8a238b88bbdc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 7" srcFull="https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
		</Components.Gallery>
		<Box height="100px" />
		<Text text-align="left" color="#000000" font="22px/1.2 --fontFamily-serifGaramond">
			Галерея имеет следующие пропсы:{" "}
		</Text>
		<Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="700 20px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Название
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="700 20px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Описание
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="700 20px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Дефолтное значение
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Кол-во изображений
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Кол-во изображений галереи
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					8
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Кол-во столбцов
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Кол-во столбцов с изображениями
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					4
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Ширина отступов
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Ширина отступов между изображениями. Задаются в любых измерениях (px, %, pt и т.д.) Если указать просто цифру, то задается в px
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					10
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Автоматически заполнять свободные места
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					В случае, если в галерее образуются свободные места, заполнять его изображением, который помещается в это место.{" "}
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Включен
				</Text>
			</Box>
			<Box />
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Отключить скролл
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					При открытии полной картинки, возможность скрола окна пропадает{" "}
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Включен
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Отключить лоадер для полной картинки
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					При открытии полной картинки, если она еще не прогрузилась, показывается лоадер. Как только картинка загрузится, лоадер исчезнет.
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Включен
				</Text>
			</Box>
			<Box />
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Варианты загрузки изображений
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						В конструкторе:{" "}
						<br />
					</Strong>
					- При выборе "Все сразу" и "При скроле"  - загружаются и показываются сразу все имеющиеся изображения;
					<br />
					- При выборе "По клику" - Загружаются и показываются кол-во изображений, помещающиеся в полтора экрана. Снизу появляется кнопка "Загрузить еще". По клику, подгружаются столько же изображений.
					<br />
					{"\n"}
					<Strong
						data-q-widget-type="PRIMITIVE"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
					>
						На сайте:{" "}
					</Strong>
					<br />
					{"\n"}- Если выбрано "Все сразу

" - 
загружаются и показываются сразу все имеющиеся изображения;
					<br />
					{"\n"}- Если выбрано "
При скроле
" - 
Загружаются и показываются кол-во изображений, помещающиеся в полтора экрана. Далее, при скроле подгружаются повторно такие же количества изображений.
					<br />
					{"\n"}- Если выбрано " 
По клику

 " -  
Загружаются и показываются кол-во изображений, помещающиеся в полтора экрана. Снизу появляется кнопка "Загрузить еще". По клику, подгружаются столько же изображений.
					<br />
					<br />
					{"\n\n"}Кол-во подгружаемых изображений завит от размера самого галереи и размеров блоков с изображениями.{" "}
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Все сразу
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Соотношения сторон
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					<Strong>
						auto{" "}
					</Strong>
					- Пропорции изображений не меняются.
					<br />
					16:9, 4:3, 3:2, 1:1, 2:3, 3:4,  9:16
					<br />
					<br />
					Соотношение сторон рассчитывается от ширина изображений.{" "}
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					auto
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Максимальная ширина изображений
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Максимальная ширина блока с изображением. 1fr - занимает все свободное пространство, с учетом количество столбцов
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					1fr
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Минимальная ширина изображений
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Минимальная ширина блока с изображением.{" "}
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					80
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Отключить лоадер для превью
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Если превью изображений не прогрузились, показывается лоадер. 
Как только картинка загрузится, лоадер исчезнет.{"\n\n"}
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					80
				</Text>
			</Box>
		</Box>
		<Text text-align="left" color="#000000" font="22px/1.2 --fontFamily-serifGaramond">
			Примеры галереи с кнопкой
		</Text>
		<Components.Gallery loaderFormatProp="По кнопке" galleryItemCountProp="20" columnsCountProp="3" ratioFormatsProp="1:1">
			<Override slot="Item 0" srcFull="https://images.unsplash.com/photo-1611095787946-fd5e3ed08285?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" srcPreview="https://images.unsplash.com/photo-1611095787946-fd5e3ed08285?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Item 1" srcFull="https://images.unsplash.com/photo-1614788679832-7879205af178?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" srcPreview="https://images.unsplash.com/photo-1614788679832-7879205af178?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Item 2" srcFull="https://images.unsplash.com/photo-1614626169098-380f51607eb2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614626169098-380f51607eb2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item" />
			<Override slot="Item 3" srcFull="https://images.unsplash.com/photo-1614783509000-ccf2306e1a71?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614783509000-ccf2306e1a71?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 4" srcFull="https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 5" srcFull="https://images.unsplash.com/photo-1614714379087-799d7e877fda?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614714379087-799d7e877fda?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 6" srcFull="https://images.unsplash.com/photo-1614712257486-8a238b88bbdc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614712257486-8a238b88bbdc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 7" srcFull="https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
		</Components.Gallery>
		<Text text-align="left" color="#000000" font="22px/1.2 --fontFamily-serifGaramond">
			Примеры галереи с скролом
		</Text>
		<Components.Gallery loaderFormatProp="При скроле" galleryItemCountProp="20" columnsCountProp="3" ratioFormatsProp="1:1">
			<Override slot="Item 0" srcFull="https://images.unsplash.com/photo-1611095787946-fd5e3ed08285?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" srcPreview="https://images.unsplash.com/photo-1611095787946-fd5e3ed08285?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Item 1" srcFull="https://images.unsplash.com/photo-1614788679832-7879205af178?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" srcPreview="https://images.unsplash.com/photo-1614788679832-7879205af178?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Item 2" srcFull="https://images.unsplash.com/photo-1614626169098-380f51607eb2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614626169098-380f51607eb2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item" />
			<Override slot="Item 3" srcFull="https://images.unsplash.com/photo-1614783509000-ccf2306e1a71?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614783509000-ccf2306e1a71?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 4" srcFull="https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 5" srcFull="https://images.unsplash.com/photo-1614714379087-799d7e877fda?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614714379087-799d7e877fda?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 6" srcFull="https://images.unsplash.com/photo-1614712257486-8a238b88bbdc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614712257486-8a238b88bbdc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 7" srcFull="https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
		</Components.Gallery>
		<Text text-align="left" color="#000000" font="22px/1.2 --fontFamily-serifGaramond">
			Дочерний элемент галереи имеет следующие пропсы:{" "}
		</Text>
		<Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="700 20px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Название
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="700 20px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Описание
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="700 20px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Дефолтное значение
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Категория image full
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Все стандартные пропсы изображений, для полной картинки
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				/>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Категория image preview
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Все стандартные пропсы изображений, для превью картинки{"\n\n"}
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				/>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Ширина в столбцах
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Ширина элемента в кол-ве столбцах
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					1
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Высота в столбцах{"\n\n"}
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Ширина элемента в кол-ве столбцах. В случае, если элемент занимает всю ширину галереи, высота не увеличивается. Это поведение грида.{" "}
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					1
				</Text>
			</Box>
			<Box />
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Растянуть на всю ширину и высоту
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Изображение растягивается на всю ширину и высоту блока, если пропорции картинки не совпадают с пропорциями блока
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Включен
				</Text>
			</Box>
			<Box display="flex">
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					Показать изображения
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="2"
				>
					Когда галочка активна, показывается полная картинка lightbox
				</Text>
				<Text
					text-align="left"
					color="#000000"
					font="16px/1.2 --fontFamily-serifGaramond"
					border-width="1px"
					border-style="solid"
					padding="10px 15px 10px 15px"
					margin="0 0px 0 0px"
					flex="1"
				>
					отключен
				</Text>
			</Box>
		</Box>
		<Text text-align="left" color="#000000" font="22px/1.2 --fontFamily-serifGaramond">
			Пример галереи с разными размерами изображений
		</Text>
		<Components.Gallery loaderFormatProp="Все сразу" ratioFormatsProp="1:1">
			<Override slot="Item 0" srcFull="https://images.unsplash.com/photo-1611095787946-fd5e3ed08285?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" srcPreview="https://images.unsplash.com/photo-1611095787946-fd5e3ed08285?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" columsCountProp="2" />
			<Override slot="Item 1" srcFull="https://images.unsplash.com/photo-1614788679832-7879205af178?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" srcPreview="https://images.unsplash.com/photo-1614788679832-7879205af178?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000" />
			<Override slot="Item 2" srcFull="https://images.unsplash.com/photo-1614626169098-380f51607eb2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614626169098-380f51607eb2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item" columsCountProp="1" />
			<Override slot="Item 3" srcFull="https://images.unsplash.com/photo-1614783509000-ccf2306e1a71?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614783509000-ccf2306e1a71?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override slot="Item 4" srcFull="https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614631446501-abcf76949eca?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
			<Override
				slot="Item 5"
				srcFull="https://images.unsplash.com/photo-1614714379087-799d7e877fda?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
				srcPreview="https://images.unsplash.com/photo-1614714379087-799d7e877fda?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
				rowsCountProp="1"
				columsCountProp="1"
			/>
			<Override slot="Item 6" srcFull="https://images.unsplash.com/photo-1614712257486-8a238b88bbdc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614712257486-8a238b88bbdc?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" columsCountProp="4" />
			<Override slot="Item 7" srcFull="https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" srcPreview="https://images.unsplash.com/photo-1614630536429-74e43f302c31?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000" />
		</Components.Gallery>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});