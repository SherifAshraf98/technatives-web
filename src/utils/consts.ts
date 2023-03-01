export const HEADER_HEIGHT = 64;
export const HEADER_HEIGHT_MOBILE = 56;

export const screenHeight = (mobile: boolean = false) =>
	`calc(100vh - ${mobile ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT}px)`;
