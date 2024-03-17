import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';
const collectionName = 'myCollection';

export async function loadDataToMongoDB() {
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const modules = [
            'BN11B',
            'CAA20',
            'CGK21',
            'CSL12',
            'CSL16',
            'DMC09',
            'EAIA17',
            'EYG15',
            'FA20',
            'FAKM15',
            'FCF09',
            'GGS12MT',
            'GGS12ST',
            'GGS12TPS',
            'GYS14',
            'HYZ13',
            'JTM11',
            'JSM16',
            'JX17',
            'KSBK15',
            'KWL09',
            'LGX16',
            'LJC18',
            'LLN14',
            'LWW13',
            'MA16',
            'MDD10',
            'MDDD16',
            'MDJW07',
            'MEV16',
            'MHK16',
            'MLG06',
            'MVM17',
            'MWSO08',
            'PC15PV',
            'REP15',
            'RRR19',
            'RSRY12',
            'SCS16',
            'SCS17',
            'SCS19',
            'SRJ13',
            'SSK12',
            'VWH13',
            'XD99',
            'XWL17',
            'XWS16',
            'YCC20',
            'YFS10',
            'YSK14',
            'ZGWZ14',
            'ZLW13',
            'WHWS12',
            'FZC18',
            'ATSC06',
            'DJM12',
            'MEA17',
            'SFJ16',
            'XJX21',
            'ASG21',
        ];
        for (const moduleName of modules) {
            const moduleData = require(`./data/${moduleName}`).default;
            await collection.insertOne({ moduleName, ...moduleData });
        }

        console.log('All data has been loaded to MongoDB');
    } catch (err) {
        console.error('Error loading data to MongoDB:', err);
    } finally {
        await client.close();
    }
}
