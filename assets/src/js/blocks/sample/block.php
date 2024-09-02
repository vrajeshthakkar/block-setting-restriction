<?php
/**
 * Registers the block-setting-restriction/sample block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package block-setting-restriction
 */

namespace Block_Setting_Restriction\Blocks;

use Block_Setting_Restriction\Inc\Block_Base;

/**
 *  Class for the block-setting-restriction/sample block.
 */
class Sample extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample';
	}
}
