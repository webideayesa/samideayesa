import partLib from '../PartLibrary';

/**
 * Sets Item Category in PartCreate.action
 * @param {*} context The context proxy depending on where this rule is being called from.
 */
export default function PartCreateUpdateSetOdataItemCategory(context) {
    if (!context) {
        throw new TypeError('Context can\'t be null or undefined');
    }
    return partLib.partCreateUpdateSetODataValue(context, 'ItemCategory');
}
