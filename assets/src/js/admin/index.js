import { addFilter } from '@wordpress/hooks';

const removeAllSupports = (settings, name) => {
	// console.log(settings);
    const blocksToModify = [
        'core/paragraph',
        'core/heading',
    ];

    if ( blocksToModify.includes( name ) ) {
        return {
            ...settings,
            supports: {},
        };
    }

    return settings;
};

// addFilter(
//     'blocks.registerBlockType',
//     'my-plugin/remove-all-supports',
//     removeAllSupports
// );

/**
 * File admin.js.
 *
 * Handles admin scripts
 */
(function ($) {
	'use strict';

	jQuery(document).ready(function($) {
		$('.bsr-form-select').select2({
			width: '100%',
			placeholder: 'Select users',
			allowClear: true
		});

		$(document).on("keyup", "#searchBlockName", function() {
			var value = $(this).val().toLowerCase();

			$("#blockList tr").filter(function() {
				$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
			});
		});

		// fetch('http://practice.local/wp-json/block-setting-register/v1/get-bsr-data')
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        //     // Use the data as needed
        // })
        // .catch(error => {
        //     console.error('Error fetching option data:', error);
        // });
	});
})(jQuery);
