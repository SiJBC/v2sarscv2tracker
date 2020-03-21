module.exports = function (sequelize, DataTypes) {
  var Listing = sequelize.define("Listing", {
    // active_listing: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: true
    // },
    person_reporting: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 140]
      }
    },
    infection_date: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 750]
      }
    },
    prognosis_date: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0, 750]
      }
    },
    infection_description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0]
      }
    },
    symptoms_description: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [0]
      }
    },
    incident_description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0]
      }
    },
    symptoms_description: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0]
      }
    },

    user_location: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0]
      }
    },

    user_condition: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [0]
      }
    },
  });

  Listing.associate = function (models) {
    Listing.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Listing;
};
