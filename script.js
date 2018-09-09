



class ArrayList {



    push(val) {

        const result = Array.prototype.push.call(this, val)
        return result;

    }
    pop() {

        return Array.prototype.pop.call(this)


    }

    unshift(val) {

        return Array.prototype.unshift.call(this, val)

    }

    map(func) {

        return Array.prototype.map.call(this, func)
    }
    filter(func) {

        return Array.prototype.filter.call(this, func)

    }
    clear() {

        for (let i = 0; i <= this.length; i++) {

            this.pop();
        }

        reduce(func); {

            return Array.prototype.reduce.call(this, func(ac, c));
        }



    }


}
let a = new ArrayList();