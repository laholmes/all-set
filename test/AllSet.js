import { AllSet } from '../src/AllSet';

describe('AllSet', () => {
    let setA;
    beforeEach(() => {
        setA = new AllSet([1, 2, 3, 4]);
    });
    it('isSuperset should return appropriate boolean', () => {
        let setB = new AllSet([1, 2]);
        let isSuperset = setA.isSuperset(setB);
        expect(isSuperset).toBeTruthy();
    });
    it('union should return set elements from A and/or B', () => {
        let setC = new AllSet([5, 6, 7, 8]);
        let union = setA.union(setC);
        expect(union).toEqual(new Set([1, 2, 3, 4, 5, 6, 7, 8]));
    });
    it('intersection should return set containing elements in both A and B', () => {
        let setD = new AllSet([3, 4, 5, 6]);
        let intersection = setA.intersection(setD);
        expect(intersection).toEqual(new Set([3, 4]));
    });
    it('complement should return elements from A not in B', () => {
        let setE = new AllSet([3, 4, 5, 6]);
        let complement = setA.complement(setE);
        expect(complement).toEqual(new Set([1, 2]));
    });
    it('cardinality should return number of elements in A', () => {
        expect(setA.cardinality).toEqual(4);
    });
    it('cartesianProduct should return cartesianProduct set', () => {
        let setF = new AllSet([5, 6]);
        let cartesianProduct = setA.cartesianProduct(setF);
        expect(cartesianProduct).toEqual(new Set(
            [
                [1, 5],
                [1, 6],
                [2, 5],
                [2, 6],
                [3, 5],
                [3, 6],
                [4, 5],
                [4, 6]
            ]
        ));
    });
});
