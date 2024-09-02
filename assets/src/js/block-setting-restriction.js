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
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { Disabled } from '@wordpress/components';
import { store as blockEditorStore, InspectorControls } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

// Higher-Order Component to wrap InspectorControls
const withDynamicInspectorControls = createHigherOrderComponent( ( OriginalComponent ) => {
    return ( props ) => {
        const { name: blockName, clientId } = props;
        const currentUserId = bsrConfig.userId;

        // console.log( "Props:", props );
        // console.log( "Current User ID:", currentUserId );
        // console.log( "Block Name:", blockName );

        // Function to check if the current user is in the matching array
        const isUserInMatchingArray = ( blockName, currentUserId ) => {
            const bsrOptionsData = bsrConfig.bsrData;

            if ( bsrOptionsData.hasOwnProperty( blockName ) ) {
                const matchingArray = bsrOptionsData[ blockName ];

                return matchingArray.includes( currentUserId );
            }

            return false;
        };

        // Check if the user should have access to block settings
        const userHasAccess = isUserInMatchingArray( blockName, currentUserId );

        // console.log( "Has Access:", userHasAccess );
        // console.log( "Current User ID:", currentUserId );
        // console.log( "Block Name:", blockName );

        if ( userHasAccess ) {
            // Disable block settings for the user
            console.log(props);
            return (
                <Fragment>
                    <OriginalComponent {...props} />
                    {/* <InspectorControls>
                        {props.children.filter((child) => {
                            const panelId = child.props.id || child.props.className;

                            if ( panelId.includes('color') || panelId.includes('typography') ) {
                                return false;
                            }

                            return true;
                        })}
                    </InspectorControls> */}
                    {/* <Disabled>
                        <div style={ { opacity: 0.6, backgroundColor: '#eee', border: '2px dashed #999' } }>
                            <OriginalComponent {...props} />
                        </div>
                    </Disabled> */}
                </Fragment>
            );
        } else {
            console.log("Here...");
        }

        return <OriginalComponent {...props} />;
    };
}, 'withDynamicInspectorControls');

addFilter(
    // 'editor.InspectorControls',
    'editor.BlockEdit',
    'block-setting-restriction/with-dynamic-inspector-controls',
    withDynamicInspectorControls
);
