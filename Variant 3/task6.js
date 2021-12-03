//1) The constructor is in lines 2-6. (this.)
//2)Attributes: Name, reg_nr, activities 
//Methods:addActivity

// 3) 
this.remActivity = function(n){
		var i = this.activities.indexOf(n);
    if (i !== -1) {
    this.activities.splice(i,1);
    }
 }
