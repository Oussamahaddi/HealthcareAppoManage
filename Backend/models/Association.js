import { DataTypes } from "sequelize";

import {
    AdminModel,
    ClientModel,
    UserModel,
    TechnicienModel,
    ChefModel,
    SuccurcalModel,
    ClientEntrModel
} from "./index.js";

/**
 * @type one to one association
 * @desc store association on property user inside object clientModel
 * @access public
 */

ClientModel.user = ClientModel.hasOne(UserModel, {
    foreignKey: "actor_id",
    constraints: false,
    scope: { role: "client" }
});
UserModel.client = UserModel.belongsTo(ClientModel, {
    foreignKey: "actor_id",
    constraints: false
});

/**
 * @type one to one
 * @desc ....
 * @access public
 */

AdminModel.user = AdminModel.hasOne(UserModel, {
    foreignKey: "actor_id",
    constraints: false,
    scope: { role: "admin" }
});
UserModel.admin = UserModel.belongsTo(AdminModel, {
    foreignKey: "actor_id",
    constraints: false
});
/**
 * @type one to one association
 * @desc store association on property user inside object TechnicienModel
 * @access public
 */
TechnicienModel.user = TechnicienModel.hasOne(UserModel, {
    foreignKey: "actor_id",
    constraints: false,
    scope: { role: "technicien" }
});
UserModel.technicien = UserModel.belongsTo(TechnicienModel, {
    foreignKey: "actor_id",
    constraints: false
});

/**
 * @type one to one association
 * @desc store association on property user inside object ChefModel
 * @access public
 */
ChefModel.user = ChefModel.hasOne(UserModel, {
    foreignKey: "actor_id",
    constraints: false,
    scope: { role: "Chef" }
});
UserModel.Chef = UserModel.belongsTo(ChefModel, {
    foreignKey: "actor_id",
    constraints: false
});


/**
 * @type {Association}
 * @description Establishes a "belongsTo" association where a Succursal has many Chefs.
 * @access public
*/

SuccurcalModel.hasOne(ChefModel, {
    constraints: false,
  });
  ChefModel.belongsTo(SuccurcalModel);

  /**
 * @type one to one association
 * @desc store association on property user inside object ClientEntrepriseModel
 * @access public
 */
ClientEntrModel.user = ClientEntrModel.hasOne(UserModel, {
    foreignKey: "actor_id",
    constraints: false,
    scope: { role: "entreprise" }
});
UserModel.entreprise = UserModel.belongsTo(ClientEntrModel, {
    foreignKey: "actor_id",
    constraints: false
});
