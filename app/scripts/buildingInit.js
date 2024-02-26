const db = require("../models");
const Building = db.building;

async function initializeBuildings() {
    try {
        await Promise.all([
            Building.upsert({ name: 'Fitness Center (The Dub)', abbreviation: 'FC', noOfRooms: 80 }),
            Building.upsert({ name: 'Mabee Laboratories', abbreviation: 'ML', noOfRooms: 13 }),
            Building.upsert({ name: 'Garvey Center', abbreviation: 'GC', noOfRooms: 84 }),
            Building.upsert({ name: 'Mabee Learning Center', abbreviation: 'MLC', noOfRooms: 48 }),
            Building.upsert({ name: 'Gaylord Dining Room', abbreviation: 'GDR', noOfRooms: 45 }),
            Building.upsert({ name: 'Church Resources', abbreviation: 'CR', noOfRooms: 58 }),
            Building.upsert({ name: 'Gaylord Hall', abbreviation: 'GH', noOfRooms: 99 }),
            Building.upsert({ name: 'Cogswell-Alexander Hall', abbreviation: 'CAH', noOfRooms: 80 }),
            Building.upsert({ name: 'Gaylord University Center', abbreviation: 'GUC', noOfRooms: 60 }),
            Building.upsert({ name: 'Thelma Gaylord Forum', abbreviation: 'TGF', noOfRooms: 61 }),
            Building.upsert({ name: 'College of Biblical Studies', abbreviation: 'CBS', noOfRooms: 68 }),
            Building.upsert({ name: 'Gotcher Dining Room', abbreviation: 'GDR', noOfRooms: 29 }),
            Building.upsert({ name: 'McIntosh Conservatory', abbreviation: 'MC', noOfRooms: 69 }),
            Building.upsert({ name: 'Tonys Alley', abbreviation: 'TA', noOfRooms: 17 }),
            Building.upsert({ name: 'College of Business Administration', abbreviation: 'CBA', noOfRooms: 86 }),
            Building.upsert({ name: 'Graduate School of Business', abbreviation: 'GSB', noOfRooms: 51 }),
            Building.upsert({ name: 'Mercy Clinic', abbreviation: 'MC', noOfRooms: 4 }),
            Building.upsert({ name: 'University Dining', abbreviation: 'UD', noOfRooms: 56 }),
            Building.upsert({ name: 'College of Engineering & Computer Science', abbreviation: 'CECS', noOfRooms: 76 }),
            Building.upsert({ name: 'Graduate School of Engineering', abbreviation: 'GSE', noOfRooms: 51 }),
            Building.upsert({ name: 'MidFirst Plaza', abbreviation: 'MFP', noOfRooms: 57 }),
            Building.upsert({ name: 'University Services', abbreviation: 'US', noOfRooms: 26 }),
            Building.upsert({ name: 'Philips Welcome Center', abbreviation: 'PWC', noOfRooms: 83 }),
            Building.upsert({ name: 'College of Liberal Arts', abbreviation: 'CLA', noOfRooms: 92 }),
            Building.upsert({ name: 'Graduate School of Theology', abbreviation: 'GST', noOfRooms: 57 }),
            Building.upsert({ name: 'Noble Science Wing', abbreviation: 'NSW', noOfRooms: 48 }),
            Building.upsert({ name: 'Vose Hall', abbreviation: 'VH', noOfRooms: 50 }),
            Building.upsert({ name: 'Registrar', abbreviation: 'REG', noOfRooms: 33 }),
            Building.upsert({ name: 'College of Natural & Health Sciences', abbreviation: 'CNHS', noOfRooms: 58 }),
            Building.upsert({ name: 'Hardeman Auditorium', abbreviation: 'HA', noOfRooms: 49 }),
            Building.upsert({ name: 'North Institute - 3rd Floor', abbreviation: 'NI', noOfRooms: 45 }),
            Building.upsert({ name: 'Vaughn Track', abbreviation: 'VT', noOfRooms: 97 }),
            Building.upsert({ name: 'Counseling Center', abbreviation: 'CC', noOfRooms: 42 }),
            Building.upsert({ name: 'Hartman Place (Remembrance Area)', abbreviation: 'HP', noOfRooms: 77 }),
            Building.upsert({ name: 'Nowlin Center', abbreviation: 'NC', noOfRooms: 31 }),
            Building.upsert({ name: 'Williams-Branch Center for Biblical Studies', abbreviation: 'WCBS', noOfRooms: 38 }),
            Building.upsert({ name: 'Adams Recital Hall', abbreviation: 'ARH', noOfRooms: 69 }),
            Building.upsert({ name: 'Cox Digital Studio', abbreviation: 'CDS', noOfRooms: 14 }),
            Building.upsert({ name: 'Harvey Business Center', abbreviation: 'HBC', noOfRooms: 97 }),
            Building.upsert({ name: 'Payne Athletic Center (The Nest)', abbreviation: 'PAC', noOfRooms: 43 }),
            Building.upsert({ name: 'Admissions - 2nd Floor', abbreviation: 'A', noOfRooms: 84 }),
            Building.upsert({ name: 'David Smith Athletic Center (The Barn)', abbreviation: 'DSAC', noOfRooms: 29 }),
            Building.upsert({ name: 'Help Desk', abbreviation: 'HD', noOfRooms: 24 }),
            Building.upsert({ name: 'Phillips Welcome Center', abbreviation: 'PWC', noOfRooms: 98 }),
            Building.upsert({ name: 'Advancement Housing', abbreviation: 'AH', noOfRooms: 10 }),
            Building.upsert({ name: 'Davisson American Heritage Building', abbreviation: 'DAHB', noOfRooms: 90 }),
            Building.upsert({ name: 'Heritage Plaza', abbreviation: 'HP', noOfRooms: 45 }),

                    ]);

        console.log("Buildings initialized successfully");
    } catch (error) {
        console.log("Initialization failed:", error);
    }
}

module.exports = { initializeBuildings };
