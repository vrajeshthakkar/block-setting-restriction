<?php
/**
 * The core plugin class.
 *
 * @since      1.0.0
 * @package    Block_Setting_Restriction
 * @subpackage Block_Setting_Restriction/includes
 * @author     Multidots <info@multidots.com>
 */

namespace Block_Setting_Restriction\Inc;

use Block_Setting_Restriction\Inc\Blocks;
use Block_Setting_Restriction\Inc\Traits\Singleton;

/**
 * Main class File.
 */
class Block_Setting_Restriction {


	use Singleton;

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Block_Setting_Restriction_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'BLOCK_SETTING_RESTRICTION_VERSION' ) ) {
			$this->version = BLOCK_SETTING_RESTRICTION_VERSION;
		} else {
			$this->version = '1.1.0';
		}
		$this->plugin_name = 'block-setting-restriction';

		Front::get_instance();
		Admin::get_instance();
		Activator::get_instance();
		Deactivator::get_instance();
		I18::get_instance();
		Blocks::get_instance();

	}
}
