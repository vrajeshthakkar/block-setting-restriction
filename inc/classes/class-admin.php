<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    Block_Setting_Restriction
 * @subpackage Block_Setting_Restriction/admin
 * @author     Multidots <info@multidots.com>
 */

namespace Block_Setting_Restriction\Inc;

use Block_Setting_Restriction\Inc\Traits\Singleton;

/**
 * Main class file.
 */
class Admin {

	use Singleton;

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'BLOCK_SETTING_RESTRICTION_VERSION' ) ) {
			$this->version = BLOCK_SETTING_RESTRICTION_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->setup_admin_hooks();
	}

	/**
	 * Function is used to define admin hooks.
	 *
	 * @since   1.0.0
	 */
	public function setup_admin_hooks() {
		add_action( 'admin_menu', array( $this, 'block_setting_restriction_add_plugin_page' ) );
		add_action( 'admin_init', array( $this, 'block_setting_restriction_page_init' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
		add_action( 'admin_init', array( $this, 'block_setting_restriction_register_settings' ) );
		// add_action( 'enqueue_block_editor_assets', array( $this, 'block_setting_restriction_enqueue_core_block_script' ) );
		// add_filter( 'block_editor_settings_all', array( $this, 'remove_block_inspector_control' ) );
		// add_filter( 'register_block_type_args', array( $this, 'remove_color_typography_from_paragraph_block' ), 10, 2 );
	}

	// public function remove_block_inspector_control( $settings ) {
	// 	// Check if the paragraph block is present in the settings
	// 	if (isset($settings['blocks']['core/paragraph'])) {
	// 		// Remove color settings
	// 		$settings['blocks']['core/paragraph']['supports']['color'] = false;

	// 		// Remove typography settings
	// 		$settings['blocks']['core/paragraph']['supports']['typography'] = false;
	// 	}

	// 	return $settings;

	//  error_log( print_r( $block_types, true ) );
	// }

	// public function remove_color_typography_from_paragraph_block( $settings, $name ) {
	// 	if ( 'core/paragraph' === $name ) {
	// 		$settings['supports']['color'] = false;
	// 		$settings['supports']['typography'] = false;
	// 	}
	// 	return $settings;
	// }

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'select2-css', 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css' );

		wp_enqueue_style( 'block-setting-restriction', BLOCK_SETTING_RESTRICTION_URL . 'assets/build/admin.css', array(), $this->version, 'all' );
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {
		wp_enqueue_script( 'select2-js', 'https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js', array( 'jquery' ), null, true );

		wp_enqueue_script( 'block-setting-restriction', BLOCK_SETTING_RESTRICTION_URL . 'assets/build/admin.js', array( 'jquery', 'wp-hooks' ), $this->version, false );

		$bsr_data = get_option( 'bsr_data' );

		wp_localize_script(
			'block-setting-restriction',
			'siteConfig',
			array(
				'ajaxUrl'    => admin_url( 'admin-ajax.php' ),
				'ajax_nonce' => wp_create_nonce( 'loadmore_post_nonce' ),
			)
		);

		// Working.
		wp_enqueue_script(
			'bsr-modifier',
			BLOCK_SETTING_RESTRICTION_URL . 'assets/build/restriction.js',
			array( 'wp-hooks', 'wp-compose', 'wp-editor', 'wp-element', 'wp-data', 'wp-components' ),
			filemtime( BLOCK_SETTING_RESTRICTION_DIR . 'assets/build/restriction.js' ),
			true
		);
		wp_localize_script(
			'bsr-modifier',
			'bsrConfig',
			array(
				'bsrData' => $this->block_setting_restriction_option_data(),
				'userId'  => wp_get_current_user()->ID,
			)
		);
	}

	/**
	 * Enqueue script to apply user role checks to core blocks.
	 */
	// public function block_setting_restriction_enqueue_core_block_script() {
	// 	wp_enqueue_script(
	// 		'bsr-modifier',
	// 		BLOCK_SETTING_RESTRICTION_URL . 'assets/build/restriction.js',
	// 		array('wp-blocks', 'wp-element', 'wp-components', 'wp-data', 'wp-hooks'),
	// 		filemtime( BLOCK_SETTING_RESTRICTION_DIR . 'assets/build/restriction.js' ),
	// 		true
	// 	);
	// 	wp_localize_script(
	// 		'bsr-modifier',
	// 		'bsrConfig',
	// 		array(
	// 			'bsrData' => $this->block_setting_restriction_option_data(),
	// 			'userId'  => wp_get_current_user()->ID,
	// 		)
	// 	);
	// }

	/**
	 *
	 */
	public function block_setting_restriction_register_settings() {
		register_setting( 'block_setting_restriction_option_group', 'bsr_data' );
	}

	/**
	 *
	 */
	public function block_setting_restriction_option_data() {
		$bsr_data = get_option( 'bsr_data' );

		return ! empty( $bsr_data ) ? $bsr_data : array();
	}

	/**
	 * Function is used to create plugin page.
	 *
	 * @since   1.0.0
	 */
	public function block_setting_restriction_add_plugin_page() {
		add_menu_page(
			__( 'Block Setting Restriction', 'block-setting-restriction' ),
			__( 'Block Setting Restriction', 'block-setting-restriction' ),
			'manage_options',
			'block-setting-restriction',
			array( $this, 'block_setting_restriction_create_admin_page' ),
			'dashicons-admin-generic',
			2
		);
	}

	/**
	 * Function is used to create admin page.
	 *
	 * @since   1.0.0
	 */
	public function block_setting_restriction_create_admin_page() {
		$registered_blocks = $this->block_setting_restriction_get_blocks();
		$registered_users  = get_users();
		$bsr_data          = get_option( 'bsr_data' );
		?>

		<div class="wrap">
			<h2><?php esc_html_e( 'Block Setting Restriction', 'block-setting-restriction' ); ?></h2>
			<?php settings_errors(); ?>

			<form method="post" id="blockSettingRestrictionForm" action="options.php">
				<?php settings_fields( 'block_setting_restriction_option_group' ); ?>
				<div id="poststuff">
					<div id="post-body" class="metabox-holder">
						<div id="postbox-container-1" class="postbox-container">
							<div id="side-sortables" class="meta-box-sortables ui-sortable">
								<div class="postbox">
									<div class="postbox-header">
										<h2 class="hndle"><span><?php esc_html_e( 'Block Setting', 'block-setting-restriction' ); ?></span></h2>
									</div>
									<div class="inside">
										<?php
										if ( ! empty( $registered_blocks ) ) {
											foreach ( $registered_blocks as $block_key => $block_value ) {
												$block_label = ! empty( $block_value ) ? $block_value . ' [ ' . $block_key . ' ]' : $block_key;
												?>
												<div class="bsr-form-group">
													<div class="bsr-form-item">
														<span><?php esc_html_e( $block_label, 'block-setting-restriction' ); ?></span>
													</div>
													<div class="bsr-form-item">
														<select multiple name="bsr_data[<?php echo esc_attr( $block_key ); ?>][]" class="bsr-form-select">
															<?php
															foreach ( $registered_users as $the_user ) {
																?>
																<option value="<?php echo esc_attr( $the_user->ID ); ?>" 
																	<?php echo in_array( $the_user->ID, $bsr_data[ $block_key ] ?? array() ) ? 'selected' : ''; ?>>
																	<?php echo esc_html( $the_user->display_name ); ?>
																</option>
																<?php
															}
															?>
														</select>
													</div>
												</div>
												<?php
											}
										}
										?>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<?php submit_button(); ?>
			</form>
		</div>
		<?php
	}

	/**
	 * Function is used to get the registered blocks.
	 *
	 * @since   1.0.0
	 */
	private function block_setting_restriction_get_blocks() {
		$blocks     = \WP_Block_Type_Registry::get_instance()->get_all_registered();
		$block_list = array();

		foreach ( $blocks as $block_name => $block_type ) {
			$block_list[ $block_name ] = $block_type->title;
		}

		return $block_list;
	}

	/**
	 * Function is used register settings.
	 *
	 * @since   1.0.0
	 */
	public function block_setting_restriction_page_init() {
		register_setting(
			'block_setting_restriction_option_group',
			'block_setting_restriction_option_name',
			array( $this, 'block_setting_restriction_sanitize' )
		);

		add_settings_section(
			'block_setting_restriction_setting_section',
			__( 'Settings', 'block-setting-restriction' ),
			array( $this, 'block_setting_restriction_section_info' ),
			'block-setting-restriction-admin'
		);

		add_settings_field(
			'sample_0',
			__( 'Sample', 'block-setting-restriction' ),
			array( $this, 'sample_0_callback' ),
			'block-setting-restriction-admin',
			'block_setting_restriction_setting_section'
		);
	}

	/**
	 * Function is used to sanitise inputs.
	 *
	 * @since   1.0.0
	 */
	public function block_setting_restriction_sanitize( $input ) {
		$sanitary_values = array();
		if ( isset( $input['sample_0'] ) ) {
			$sanitary_values['sample_0'] = sanitize_text_field( $input['sample_0'] );
		}

		return $sanitary_values;
	}

	/**
	 * Used to show section info.
	 *
	 * @since   1.0.0
	 */
	public function block_setting_restriction_section_info() {

	}

	/**
	 * Settings field callback function.
	 *
	 * @since   1.0.0
	 */
	public function sample_0_callback() {

	}
}
