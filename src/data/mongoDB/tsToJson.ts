// MongoDB 모듈과 필요한 라이브러리를 불러옵니다.
const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// after code refactoring
const url = 'mongodb+srv://hm00081:<password>@metaphorvis.fgjuxmc.mongodb.net/?retryWrites=true&w=majority&appName=metaphorVIS';
const dbName = 'hm00081';
const client = new MongoClient(url);

export async function importData() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('hm00081');

        const tsFilePath = path.join(__dirname, 'myData.ts');

        const tsData = require(tsFilePath).default;

        const insertResult = await collection.insertOne(tsData);
        console.log('Inserted document:', insertResult);
    } catch (err) {
        console.error('Error importing data:', err);
    } finally {
        await client.close();
    }
}

importData();
