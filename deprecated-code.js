//    if (message.author.bot === client.user.id) { return };
//     //add message author to database if not already there
//     const result = await profileSchema.findOne({
//         userId: message.author.id
//     })
//     if (!result) {
//         await new profileSchema({
//             userId: message.author.id,
//             coins: 0
//         }).save()
//         console.log("Added new profile to database")
//         const InventoryCreation = await Inventory.findOne({
//             userId: message.author.id
//         })
//         if (!InventoryCreation) {
//             await new Inventory({
//                 userId: message.author.id,
//             }).save()
//         }
//     };
// IN MESSAGECREATE EVENT!