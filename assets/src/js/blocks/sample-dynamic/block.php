<?php
/**
 * Registers the block-setting-restriction/sample-dynamic block.
 *
 * @global array    $attrs   Block attributes passed to the render callback.
 * @global string   $content Block content from InnerBlocks passed to the render callback.
 * @global WP_Block $block   Block registration object.
 *
 * @package block-setting-restriction
 */

namespace Block_Setting_Restriction\Blocks;

use Block_Setting_Restriction\Inc\Block_Base;
use WP_Block;

/**
 *  Class for the block-setting-restriction/sample-dynamic block.
 */
class Sample_Dynamic extends Block_Base {

	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->_block = 'sample-dynamic';
		$this->setup_hooks();
	}

	/**
	 * To register action/filter.
	 *
	 * @return void
	 */
	protected function setup_hooks() {}

	/**
	 * Render block.
	 *
	 * @param array    $attributes   Block attributes.
	 * @param string   $content      Block content.
	 * @param WP_Block $block        Block object.
	 * @return string
	 */
	public function render_callback(
		// phpcs:disable VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
		array $attributes,
		string $content,
		WP_Block $block
		// phpcs:enable
	): string {

		// get string of attributes of the features that the block supports.
		$wrapper_attributes = get_block_wrapper_attributes();

		// attributes.
		$heading = isset( $attributes['heading'] ) ? $attributes['heading'] : '';

		ob_start();
		?>
		<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
			<?php if ( ! empty( $heading ) ) : ?>
				<h2><?php echo esc_html( $heading ); ?></h2>
			<?php endif; ?>
		</div>
		<?php
		return ob_get_clean();
	}
}
