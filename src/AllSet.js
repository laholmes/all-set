export class AllSet extends Set {
    get cardinality() {
        return this.size;
    }

    isSuperset(subset) {
        for (let elem of subset) {
            if (!this.has(elem)) {
                return false;
            }
        }
        return true;
    }
    union(setB) {
        let union = new Set(this);
        for (let elem of setB) {
            union.add(elem);
        }
        return union;
    }
    intersection(setB) {
        let intersection = new Set();
        for (let elem of setB) {
            if (this.has(elem)) {
                intersection.add(elem);
            }
        }
        return intersection;
    }
    complement(setB) {
        let complement = new Set(this);
        for (let elem of setB) {
            complement.delete(elem);
        }
        return complement;
    }
    cartesianProduct(setB) {
        let cartesianProduct = new Set();
        for (let item of this) {
            for (let bItem of setB) {
                cartesianProduct.add([item, bItem]);
            }
        }
        return cartesianProduct;
    }
}