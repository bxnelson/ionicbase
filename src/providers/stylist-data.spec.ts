import { StylistData } from './stylist-data';

let stylistData = null;
describe('Stylist Data Service', ()=>{
    beforeEach(()=> {
        stylistData = new StylistData();
    });

    it('it should find stylists named Heather', ()=>{
        let result = stylistData.getStylists('Heather');
        expect(Array.isArray(result)).toBeTruthy();
        expect(result.length).toBeGreaterThan(0);
    });
});