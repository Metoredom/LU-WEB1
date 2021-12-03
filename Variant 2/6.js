Person.prototype.printInfo = function(){
    return this.name.first + " " + this.name.last + " has the following interests:" + this.interests.join(',');
};