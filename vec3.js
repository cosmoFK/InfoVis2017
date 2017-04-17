// Constructor
Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}
//Add method
Vec3.prototype.add = function(v)
{
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
}
//Sum method
Vec3.prototype.sum = function()
{
    return this.x + this.y + this.z;
}
//min method
Vec3.prototype.min = function()
{
    var u =x;
    if(x>y){
	u=y;
    }
    if(y>z){
	u=z;
    }
    if(x>z){
	u=z
    }
    return u;
}
//Max method
Vec3.prototype.max = function()
{
    var u =x;
    if(x<y){
	u=y;
    }
    if(y<z){
	u=z;
    }
    if(x<z){
	u=z
    }
    return u;
}
//mid method
Vec3.prototype.mid = function()
{
   
    return this.x+this.y+this.z-this.min()-this.max();
}
