class Vector {
    constructor(components) {
        this.components = components;
    }

    add(other) {
        if (this.components.length !== other.components.length) {
            throw new Error("向量長度不一致！");
        }

        const result = this.components.map((val, i) => val + other.components[i]);
        return new Vector(result);
    }

    sub(other) {
        if (this.components.length !== other.components.length) {
            throw new Error("向量長度不一致！");
        }

        const result = this.components.map((val, i) => val - other.components[i]);
        return new Vector(result);
    }

    dot(other) {
        if (this.components.length !== other.components.length) {
            throw new Error("向量長度不一致！");
        }

        return this.components.reduce((sum, val, i) => sum + val * other.components[i], 0);
    }
}

let a = new Vector([1, 2, 3]);
let b = new Vector([4, 5, 6]);

console.log(a.add(b).sub(b).dot(b));
