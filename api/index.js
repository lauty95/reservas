import { sequelize } from "./src/database/index.js";
import app from './src/app.js'
// import './src/models/user.js';
// import './src/models/appointment.js';
// import './src/models/price.js';
// import './src/models/settings.js';

async function main() {
    try {
        await sequelize.sync({ force: false });
        console.log('Connection has been established successfully');
    } catch (e) {
        console.log('Unable to connect to database')
    }
    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}`)
    })
}

main();