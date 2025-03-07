
Hooks.on("ready", function() {
  console.log("Artificer (13th Age) class injecting data into the system...");

  /*
   * Add new race - this enables race recognition.
   */
  // ARCHMAGE.raceList["newrace"] = "NewRace";

  /*
   * Add new class name to classList - this enable class recognition.
   */
  CONFIG.ARCHMAGE.classList["artificer"] = "Artificer";

  /*
   * Add class stats to classes - this enables base stats autoconfiguration.
   */
  CONFIG.ARCHMAGE.classes["artificer"] = {
    hp: 6,                  // Base hp modifier
    ac_lgt: 12,             // Base AC in light/no armor (best value)
    ac_hvy: 14,             // Base AC in heavy armour
    ac_hvy_pen: -2,         // Attack penalty for wearing heavy armour
    shld_pen: -2,           // Attack penalty for using a shield
    pd: 11,                 // Base PD
    md: 11,                 // Base MD
    rec_die: 6,             // Recovery die size (number of faces), before talents/feats
    wpn_1h: 6,              // Weapon die size (# of faces), one-handed melee (best number without penalty)
    wpn_2h: 8,              // Weapon die size (# of faces), two-handed melee (best number without penalty if possible)
    wpn_2h_pen: 0,          // Attack penalty for using indicated two-handed weapon
    wpn_rngd: 6,            // Weapon die size (# of faces), ranged (best number without penalties)
    skilled_warrior: false  // Whether the class counts as a skilled warrior for multiclassing purposes
  };

  /*
   * Add class description pack - adds descriptions to class page in power importer.
   */
  CONFIG.ARCHMAGE.classPacks.push("classes-artificer");

  /* 
   * Add some picks to keyModifiers - this sets the default Key Modifier upon selecting two recognized class names.
   * Due to the way this is stored in the system the new class must be added to all other classes that come earlier in
   * alphabetical order and all classes that come after it must be added to this class entry.
   */
  CONFIG.ARCHMAGE.keyModifiers['artificer'] = {
    'barbarian': ['str', 'int'],
    'bard': ['int', 'cha'],
    'chaosmage': ['int', 'cha'],
    'cleric':  ['wis', 'int'],
    'commander': ['cha', 'int'],
    'druid': ['wis', 'int'],
    'fighter': ['str', 'int'],
    'monk': ['dex', 'int'],
    'necromancer': ['int', 'cha'],
    'occultist': ['int', 'cha'],
    'paladin': ['str', 'int'],
    'ranger': ['dex', 'int'],
    'rogue': ['dex', 'int'],
    'sorcerer':['int', 'cha'],
    'wizard':['int', 'dex']
  };

  /*
   * Add custom resources - this configures the specified resource(s) and its(their) rest behavior.
   * These are stored as an array of couples (arrays) with the resource label and rest behavior, such as:
   * - none: do not modify the resource on resting
   * - quick: refill the resource on any rest
   * - full: refill the resource on a full heal up only
   * - quickreset: reset the resource to zero on any rest
   * - fullreset: reset the resource to zero on a full heal up only
   */
  // CONFIG.ARCHMAGE.classResources['artificer'] = [["My New Resource 1", "quick"], ["My New Resource 2", "none"]];

  console.log("Artificer (13th Age) class loaded succesfully." );
  console.log("Emotive (13th Age) class injecting data into the system...");
  CONFIG.ARCHMAGE.classList["emotive"] = "Emotive";
  CONFIG.ARCHMAGE.classes["emotive"] = {
    hp: 7,                  // Base hp modifier
    ac_lgt: 12,             // Base AC in light/no armor (best value)
    ac_hvy: 13,             // Base AC in heavy armour
    ac_hvy_pen: -2,	    // Attack penalty for wearing heavy armour
    shld_pen: -0,           // Attack penalty for using a shield
    pd: 11,                 // Base PD
    md: 10,                 // Base MD
    rec_die: 8,             // Recovery die size (number of faces), before talents/feats
    wpn_1h: 8,              // Weapon die size (# of faces), one-handed melee (best number without penalty)
    wpn_2h: 10,              // Weapon die size (# of faces), two-handed melee (best number without penalty if possible)
    wpn_2h_pen: 0,          // Attack penalty for using indicated two-handed weapon
    wpn_rngd: 4,            // Weapon die size (# of faces), ranged (best number without penalties)
    skilled_warrior: true  // Whether the class counts as a skilled warrior for multiclassing purposes
  };
  CONFIG.ARCHMAGE.classPacks.push("classes-emotive");
  CONFIG.ARCHMAGE.keyModifiers['artificer']['emotive'] = ['int', 'cha'];
  CONFIG.ARCHMAGE.keyModifiers['barbarian']['emotive'] = ['str', 'cha'];
  CONFIG.ARCHMAGE.keyModifiers['bard']['emotive'] = ['dex', 'cha'];
  CONFIG.ARCHMAGE.keyModifiers['chaosmage']['emotive'] = ['dex', 'cha'];
  CONFIG.ARCHMAGE.keyModifiers['cleric']['emotive'] = ['str', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['commander']['emotive'] = ['str', 'cha'];
  CONFIG.ARCHMAGE.keyModifiers['druid']['emotive'] = ['str', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['emotive'] = {
    'fighter': ['str', 'cha'],
    'monk': ['dex', 'cha'],
    'necromancer': ['int', 'cha'],
    'occultist': ['int', 'cha'],
    'paladin': ['str', 'cha'],
    'ranger': ['dex', 'cha'],
    'rogue': ['dex', 'cha'],
    'sorcerer':['dex', 'cha'],
    'wizard':['int', 'cha']
  };

  /*
   * Add custom resources - this configures the specified resource(s) and its(their) rest behavior.
   * These are stored as an array of couples (arrays) with the resource label and rest behavior, such as:
   * - none: do not modify the resource on resting
   * - quick: refill the resource on any rest
   * - full: refill the resource on a full heal up only
   * - quickreset: reset the resource to zero on any rest
   * - fullreset: reset the resource to zero on a full heal up only
   */
  // CONFIG.ARCHMAGE.classResources['emotive'] = [["My New Resource 1", "quick"], ["My New Resource 2", "none"]];

  console.log("Emotive (13th Age) class loaded succesfully." );
  console.log("Shaman (13th Age) class injecting data into the system...");
  CONFIG.ARCHMAGE.classList["shaman"] = "Shaman";
  CONFIG.ARCHMAGE.classes["shaman"] = {
    hp: 6,                  // Base hp modifier
    ac_lgt: 10,             // Base AC in light/no armor (best value)
    ac_hvy: 13,             // Base AC in heavy armour
    ac_hvy_pen: -2,	    // Attack penalty for wearing heavy armour
    shld_pen: -1,           // Attack penalty for using a shield
    pd: 10,                 // Base PD
    md: 12,                 // Base MD
    rec_die: 6,             // Recovery die size (number of faces), before talents/feats
    wpn_1h: 6,              // Weapon die size (# of faces), one-handed melee (best number without penalty)
    wpn_2h: 8,              // Weapon die size (# of faces), two-handed melee (best number without penalty if possible)
    wpn_2h_pen: 0,          // Attack penalty for using indicated two-handed weapon
    wpn_rngd: 6,            // Weapon die size (# of faces), ranged (best number without penalties)
    skilled_warrior: false  // Whether the class counts as a skilled warrior for multiclassing purposes
  };
  CONFIG.ARCHMAGE.classPacks.push("classes-shaman");
  CONFIG.ARCHMAGE.keyModifiers['artificer']['shaman'] = ['int', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['barbarian']['shaman'] = ['str', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['bard']['shaman'] = ['wis', 'cha'];
  CONFIG.ARCHMAGE.keyModifiers['chaosmage']['shaman'] = ['wis', 'cha'];
  CONFIG.ARCHMAGE.keyModifiers['cleric']['shaman'] = ['str', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['commander']['shaman'] = ['wis', 'cha'];
  CONFIG.ARCHMAGE.keyModifiers['druid']['shaman'] = ['str', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['emotive']['shaman'] = ['str', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['fighter']['shaman'] = ['str', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['monk']['shaman'] = ['dex', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['necromancer']['shaman'] = ['int', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['occultist']['shaman'] = ['int', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['paladin']['shaman'] = ['str', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['ranger']['shaman'] = ['str', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['rogue']['shaman'] = ['dex', 'wis'];
  CONFIG.ARCHMAGE.keyModifiers['shaman'] = {
    'sorcerer':['cha', 'wis'],
    'wizard':['int', 'wis']
  };

  /*
   * Add custom resources - this configures the specified resource(s) and its(their) rest behavior.
   * These are stored as an array of couples (arrays) with the resource label and rest behavior, such as:
   * - none: do not modify the resource on resting
   * - quick: refill the resource on any rest
   * - full: refill the resource on a full heal up only
   * - quickreset: reset the resource to zero on any rest
   * - fullreset: reset the resource to zero on a full heal up only
   */
  // CONFIG.ARCHMAGE.classResources['shaman'] = [["My New Resource 1", "quick"], ["My New Resource 2", "none"]];

  console.log("Shaman (13th Age) class loaded succesfully." );

});
