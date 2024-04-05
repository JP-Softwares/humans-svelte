export const Media = {
    Mobile: 768,
    Tablet: 1280,
    PC: 1280
};

export let width = 0;

/**
 * @param {number} width 
 */
export function getMediaType(width) {
    return width <= Media.Mobile ? 
		Media.Mobile : 
		width <= Media.Tablet ?
			Media.Tablet :
			width > Media.PC ? Media.PC : Media.PC;
}