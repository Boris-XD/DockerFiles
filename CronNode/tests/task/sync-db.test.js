const { syncDB } = require('../../Task/sync-db');

describe('Test to SyncDB', () =>{
    test('Should be execute 3 times', () => { 
        syncDB();
        const times = syncDB();
        expect(times).toBe(2);
    })
});