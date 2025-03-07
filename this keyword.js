//this with arrow function::

const student56 = {
    name2:"pransu",
    age2:45,
    group:"man",
    prop:this,
    getName:function(){
        console.log(this);
        return this.name2;
    },
    getage2: function() {
        console.log(this);//parents scope=>window
        return this.age2;
    },
    getinfo:function(){
        setTimeout(()=>{
            console.log(this);
        },3000);
    },
    getinfo2:function(){
        setTimeout(()=>{
            console.log(this);
        },3000);
    },
};

//"this  Keyword in js::"
const student = {
    name:"pranshu",
    age:78,
    math:90,
    phy:79,
    chem:89,
    getAvg(){
        console.log(this);
        let avg = (this.math + this.phy + this.chem)/3;
        console.log(`${this.name} got avg marks  = ${avg}`);
    }
}
function getAvg() {
    console.log(this);
}
