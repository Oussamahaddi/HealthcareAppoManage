import {
    ServiceModel,
    ExigenceServiceModel,
    AdminModel,
    ClientModel,
    UserModel,
    TechnicienModel,
    ChefModel,
    SuccurcalModel,
    ClientEntrModel,
    EmployeModels,
} from "./index.js";
import ROLE_LIST from "../config/Role_list.js";
import { ReservationModel } from "./ReservationModel.js";
import { ReclamationModel } from "./ReclamationModel.js";

/**
 * @models {ClientModel} , {UserModel}
 * @type one to one association
 * @desc store association on property user inside object clientModel
 * @access private
 */

ClientModel.user = ClientModel.hasOne(UserModel, {
    foreignKey: "actor_id",
    constraints: false,
    scope: { role: ROLE_LIST.client }
});
UserModel.client = UserModel.belongsTo(ClientModel, {
    foreignKey: "actor_id",
    constraints: false
});

/**
 * @models {AdminModel} , {UserModel}
 * @type one to one association
 * @desc ....
 * @access private
 */

AdminModel.user = AdminModel.hasOne(UserModel, {
    foreignKey: "actor_id",
    constraints: false,
    scope: { role: ROLE_LIST.admin }
});
UserModel.admin = UserModel.belongsTo(AdminModel, {
    foreignKey: "actor_id",
    constraints: false
});

/**
 * @models {TechnicienModel} , {UserModel}
 * @type one to one association
 * @desc store association on property user inside object TechnicienModel
 * @access private
 */

TechnicienModel.user = TechnicienModel.hasOne(UserModel, {
    foreignKey: "actor_id",
    constraints: false,
    scope: { role: ROLE_LIST.technicien }
});
UserModel.technicien = UserModel.belongsTo(TechnicienModel, {
    foreignKey: "actor_id",
    constraints: false
});

/**
 * @models {ChefModel} , {UserModel}
 * @type one to one association
 * @desc store association on property user inside object ChefModel
 * @access private
 */

ChefModel.user = ChefModel.hasOne(UserModel, {
    foreignKey: "actor_id",
    constraints: false,
    scope: { role: ROLE_LIST.chef }
});
UserModel.Chef = UserModel.belongsTo(ChefModel, {
    foreignKey: "actor_id",
    constraints: false
});

/**
 * @models {SuccurcalModel} , {ChefModel}
 * @type one to one association
 * @description Establishes a "belongsTo" association where a Succursal has many Chefs.
 * @access private
 */

SuccurcalModel.hasOne(ChefModel, {
    constraints: false
});
ChefModel.belongsTo(SuccurcalModel);

/**
 * @models {ClientEntrModel} , {UserModel}
 * @type one to one association
 * @desc store association on property user inside object ClientEntrepriseModel
 * @access public
 */
ClientEntrModel.user = ClientEntrModel.hasOne(UserModel, {
    foreignKey: "actor_id",
    constraints: false,
    scope: { role: ROLE_LIST.entreprise }
});
UserModel.entreprise = UserModel.belongsTo(ClientEntrModel, {
    foreignKey: "actor_id",
    constraints: false
});

/**
 * @models {SuccurcalModel} , {ServiceModel}
 * @type many to many association
 * @desc store association on  table pivot
 * @access private
 */

SuccurcalModel.belongsToMany(ServiceModel, {
    through: "SuccurcalServicePivot"
});
ServiceModel.belongsToMany(SuccurcalModel, {
    through: "SuccurcalServicePivot"
});

/**
 * @models {ServiceModel} , {ExigenceServiceModel}
 * @type many to many association {Association}
 * @desc store association on  table pivot
 * @access private
 */

ServiceModel.hasMany(ExigenceServiceModel, {
    onDelete: "CASCADE"
});
ExigenceServiceModel.belongsTo(ServiceModel);

/**
 * @models {ReservationModel} , {UserModel}
 * @type one to many association {Association}
 * @desc store association on property inside object clientModel
 * @access private
 */

UserModel.reservation = UserModel.hasMany(ReservationModel, {
    foreignKey : {
        allowNull : false,
    },
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
});
ReservationModel.user = ReservationModel.belongsTo(UserModel);

/**
 * @models {ReservationModel} , {SuccurcalModel}
 * @type one to many association {Association}
 * @desc store association on property inside object clientEnteModel
 * @access private
 */

SuccurcalModel.reservation = SuccurcalModel.hasMany(ReservationModel, {
    foreignKey : {
        allowNull : false,
    },
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
});
ReservationModel.succurcal = ReservationModel.belongsTo(SuccurcalModel);

/**
 * @models {ReclamationModel} , {UserModel}
 * @type one to many association {Association}
 * @desc store association on property inside object clientEnteModel
 * @access private
 */

UserModel.reclamation = UserModel.hasMany(ReclamationModel, {
    foreignKey : {
        allowNull : false,
    },
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
});
ReclamationModel.user = ReclamationModel.belongsTo(UserModel);

/**
 * @models {ReclamationModel} , {TechnicienModel}
 * @type one to many association {Association}
 * @desc store association on property inside object clientEnteModel
 * @access private
 */

TechnicienModel.reclamation = TechnicienModel.hasMany(ReclamationModel, {
    foreignKey : {
        allowNull : false,
    },
    onDelete : "CASCADE",
    onUpdate : "CASCADE",
});
ReclamationModel.technicien = ReclamationModel.belongsTo(UserModel);

/**
 * @models {ClientEntrModel} , {EmployeModels}
 * @type one to many association {Association}
 * @desc 
 * @access private
 */


ClientEntrModel.hasMany(EmployeModels, {
    constraints: false
});
EmployeModels.belongsTo(ClientEntrModel);
