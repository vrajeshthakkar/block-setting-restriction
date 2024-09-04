// /**
//  * Adds a filter to modify or extend the behavior of WordPress blocks or other functionalities.
//  *
//  * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-hooks/
//  */
// import { addFilter } from '@wordpress/hooks';

// const bsrOptionsData = bsrConfig.bsrData;
// const currentUserId = bsrConfig.userId;

// addFilter(
//     'blockEditor.useSetting.before',
//     'conditional-block/useSetting.before',
//     (settingValue, settingName, clientId, blockName) => {

//         if (bsrOptionsData.hasOwnProperty(blockName)) {
//             const matchingArray = bsrOptionsData[blockName];

//             if (matchingArray.includes(currentUserId)) {
//                 // console.log("Current user ID exists in matching array.");

//                 // Get all block settings
//                 const blockSettings = wp.blocks.getBlockType(blockName);

//                 if ( blockSettings ) {
//                     // Combine supports and any other relevant settings
//                     const allSettings = {
//                         ...blockSettings.supports,
//                         ...blockSettings.attributes,
//                         // ...blockSettings.deprecated,
//                     };

//                     // console.log(`All Settings for ${blockName}: `, allSettings);
//                     const settingNames = Object.keys(allSettings);
//                     console.log("Setting name: ", settingName);
//                     console.log("Available Setting Names: ", settingNames);

//                     // if (settingNames.includes(settingName)) {
//                     //     return false;
//                     // } else {
//                     //     console.log("Setting not found in above object" );
//                     // }

//                     return false;
//                 }
//             } else {
//                 console.log("Not Exists");
//             }
//         }

//         return settingValue;
//     }
// );


// ------------------------------------------ SOLUTION 2 ------------------------------------------
import domReady from '@wordpress/dom-ready';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { Disabled } from '@wordpress/components';
import { store as blockEditorStore, InspectorControls } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

// domReady(() => {

    // const withDynamicInspectorControls = (settings, name) => {
    //     console.log("Settings: ", settings);
    //     if ( name === 'core/paragraph' ) {
    //         return settings;
    //     }
    // }

    // addFilter(
    //     'blocks.registerBlockType',
    //     'block-setting-restriction/with-dynamic-inspector-controls',
    //     withDynamicInspectorControls
    // )


    // Function to disable specific supports based on conditions
    const disableBlockSupports = (controls, block) => {
        const bsrOptionsData = bsrConfig.bsrData;
        const theCurrentUserId = bsrConfig.userId;

        console.log("controls: ", controls);

        const isUserInMatchingArray = ( blockName, currentUserId ) => {
            if ( bsrOptionsData.hasOwnProperty( blockName ) ) {
                const matchingArray = bsrOptionsData[ blockName ];

                return matchingArray.includes( currentUserId );
            }

            return false;
        };

        const userHasAccess = isUserInMatchingArray( name, theCurrentUserId );

        if ( ! userHasAccess ) {
            if ( 'core/paragraph' === name ) {
                settings.supports = {
                    ...settings.supports,
                    color: false,
                    typography: false,
                    __experimentalBorder: false,
                    spacing: false,
                };
            }
        }

        return controls;
    };

    // Apply the filter to modify block supports
    addFilter(
        'blocks.inspectorControls',
        'my-plugin/disable-block-supports',
        disableBlockSupports
    );


    // const withDynamicInspectorControls = createHigherOrderComponent( ( OriginalComponent ) => {
    //     return ( props ) => {
    //         const { name: blockName, clientId } = props;
    //         const currentUserId = bsrConfig.userId;

    //         const isUserInMatchingArray = ( blockName, currentUserId ) => {
    //             const bsrOptionsData = bsrConfig.bsrData;
    
    //             if ( bsrOptionsData.hasOwnProperty( blockName ) ) {
    //                 const matchingArray = bsrOptionsData[ blockName ];
    
    //                 return matchingArray.includes( currentUserId );
    //             }
    
    //             return false;
    //         };
    
    //         // Check if the user should have access to block settings
    //         const userHasAccess = isUserInMatchingArray( blockName, currentUserId );
    
    //         console.log( "Has Access:", userHasAccess );
    //         console.log( "Current User ID:", currentUserId );
    //         console.log( "Block Name:", blockName );
    
    //         if ( userHasAccess ) {
    //             // Disable block settings for the user
    //             console.log(props);
    //             return (
    //                 <Fragment>
    //                     <Disabled>
    //                         <div style={ { opacity: 0.6, backgroundColor: '#eee', border: '2px dashed #999' } }>
    //                             <OriginalComponent {...props} />
    //                         </div>
    //                     </Disabled>
    //                 </Fragment>
    //             );
    //         } else {
    //             console.log("Here...");
    //         }
    
    //         return <OriginalComponent {...props} />;
    //     };
    // }, 'withDynamicInspectorControls');
    
    // addFilter(
    //     'editor.InspectorControls',
    //     // 'editor.BlockEdit',
    //     'block-setting-restriction/with-dynamic-inspector-controls',
    //     withDynamicInspectorControls
    // );
// });


jQuery(document).ready(function($) {
    $(document).on("keyup", ".bsr-form-group #searchBlockName", function() {
        var value = $(this).val().toLowerCase();
        console.log(value);
        $("#blockSettingRestrictionForm .bsr-form-group.has-filter").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});