<?php
/**
 * Abstract class for Block Registration
 *
 * @package block-setting-restriction
 */

namespace Block_Setting_Restriction\Inc;

use Block_Setting_Restriction\Inc\Traits\Singleton;

/**
 * Base Block class for all of our blocks.
 */
abstract class Block_Base {
	use Singleton;

	/**
	 * Block arguments.
	 *
	 * @var array args passed to block.
	 */
	protected $_block_args = array();

	/**
	 * Block name.
	 *
	 * @var name of the block.
	 */
	protected $_block;

	/**
	 * Register Block. Called on `init`.
	 */
	final public function init(): void {
		$name            = "block-setting-restriction/{$this->_block}";
		$render_callback = 'render_callback';

		if ( method_exists( $this, $render_callback ) ) {
			$this->_block_args['render_callback'] = array( $this, $render_callback );
		}

		// Set default, assume no block registration to this point.
		$has_block = false;

		// Check the register and determine if we have a block already by name.
		if ( class_exists( '\WP_Block_Type_Registry', false ) ) {
			$registry  = \WP_Block_Type_Registry::get_instance();
			$has_block = $registry->is_registered( $name );
		}

		$block_directory = BLOCK_SETTING_RESTRICTION_SRC_BLOCK_DIR_PATH . '/' . $this->_block;

		// If this is a custom block, and it's not yet registered.
		// Register.
		if ( ! $has_block ) {
			register_block_type(
				$block_directory,
				$this->_block_args
			);
		}
	}
}
