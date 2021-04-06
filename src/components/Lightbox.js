import React, { useCallback, useEffect, useState } from 'react';
import { useOverrides } from '@quarkly/components';
import { Box, Icon, Image } from '@quarkly/widgets';
import ScrollBlocker from './Scrollblock';
import Loader from './Loader';
import { IoMdClose } from "react-icons/io";
const overrides = {
	'Overlay': {
		kind: 'Box',
		props: {
			'display': 'flex',
			'align-items': 'center',
			'justify-content': 'center',
			'background': 'rgba(0, 0, 0, .7)',
			'position': 'fixed',
			'bottom': 0,
			'right': 0,
			'left': 0,
			'top': 0
		}
	},
	'Overlay :Open': {
		kind: 'Box',
		props: {
			'opacity': 1,
			'visibility': 'visible',
			'transition-duration': '.3s',
			'transition-property': 'opacity, visibility, z-index',
			'z-index': 110
		}
	},
	'Overlay :Close': {
		kind: 'Box',
		props: {
			'opacity': 0,
			'visibility': 'hidden',
			'transition-duration': '.3s',
			'transition-property': 'opacity, visibility, z-index',
			'z-index': -1
		}
	},
	'Image': {
		kind: 'Lightbox Image'
	},
	'Close': {
		kind: 'Icon',
		props: {
			'size': '30px',
			'color': '#fff',
			'position': 'absolute',
			'top': '15px',
			'right': '20px',
			'cursor': 'pointer',
			'category': 'io',
			'icon': IoMdClose,
			'z-index': '124'
		}
	},
	'Loader': {
		kind: 'Icon'
	}
};
const zoomInStyles = {
	'max-width': '100%',
	'max-height': '100%',
	'cursor': 'zoom-out'
};
const zoomOutStyles = {
	'max-width': '80%',
	'max-height': '80%',
	'cursor': 'zoom-in'
};
const openStyles = {
	'opacity': 1,
	'visibility': 'visible',
	'transform': 'scale(1)',
	'transition-duration': '.3s',
	'transition-timing-function': 'ease-in-out',
	'transition-property': 'opacity, visibility, z-index, transform, max-height, max-width',
	'z-index': 110
};
const closeStyles = {
	'opacity': 0,
	'visibility': 'hidden',
	'transform': 'scale(.9)',
	'transition-duration': '.3s',
	'transition-timing-function': 'ease-in-out',
	'transition-property': 'opacity, visibility, z-index, transform, max-height, max-width',
	'z-index': -1
};

const stopEventClick = e => {
	e.stopPropagation();
	e.cancelBubble = true;
};

const Lightbox = ({
	defaultFullImageSrc,
	loadImage,
	somePictureParams,
	setSomePictureParams,
	isOpen,
	setOpen,
	isBigImage,
	setBigImage,
	isZoom,
	setZoom,
	offScrollProp,
	fullLoaderStatusProp,
	imageClicked,
	setImageClicked,
	...props
}) => {
	const [isLoadingFullImage, setLoadingFullImage] = useState(true);
	useEffect(() => {
		if (!isOpen) ScrollBlocker.enable();
	}, [isOpen]);
	const closeLightbox = useCallback(() => {
		setLoadingFullImage(true);
		setOpen(false);
		setZoom(false);
		setImageClicked(false);
		setBigImage(false);
		setSomePictureParams({});
		if (offScrollProp) ScrollBlocker.enable();
	}, [offScrollProp, isOpen]);
	const closeImageOnEsc = useCallback(e => {
		if (e.keyCode === 27) closeLightbox();
	}, [isOpen]);
	const zoomImageOnClick = useCallback(e => {
		stopEventClick(e);
		setZoom(!isZoom);
	}, [isZoom]);
	useEffect(() => {
		if (imageClicked) {
			setOpen(true);
			loadImage(somePictureParams.src || defaultFullImageSrc).then(img => {
				setLoadingFullImage(false);
				if (offScrollProp) ScrollBlocker.disable();
				if (img.width > window.innerWidth) setBigImage(true);
			});
			window.addEventListener('keydown', closeImageOnEsc);
			return () => window.removeEventListener('keydown', closeImageOnEsc);
		}
	}, [imageClicked]);
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <Box {...rest}>
		 
		<Box onClick={closeLightbox} {...override('Overlay', `Overlay ${isOpen ? ':Open' : ':Close'}`)}>
			<Icon onClick={closeLightbox} {...override('Close')} />
			<Image
				margin='0 auto'
				max-width='80%'
				max-height='80%'
				min-height='0'
				min-weight='0'
				src={!isLoadingFullImage && somePictureParams['src'] || defaultFullImageSrc}
				title={!isLoadingFullImage && somePictureParams['title']}
				alt={!isLoadingFullImage && somePictureParams['alt']}
				srcset={!isLoadingFullImage && somePictureParams['srcset']}
				sizes={!isLoadingFullImage && somePictureParams['sizes']}
				object-fit={!isLoadingFullImage && somePictureParams['object-fit']}
				object-position={!isLoadingFullImage && somePictureParams['object-position']}
				loading={!isLoadingFullImage && somePictureParams['loading']}
				onClick={zoomImageOnClick}
				{...isZoom ? isBigImage && zoomInStyles : isBigImage && zoomOutStyles}
				{...isOpen ? openStyles : closeStyles}
				{...override('Image')}
			/>
			 
			{!fullLoaderStatusProp && <Loader {...override('Loader')} isLoading={isLoadingFullImage} />}
		</Box>
	</Box>;
};

Object.assign(Lightbox, {
	overrides
});
export default Lightbox;