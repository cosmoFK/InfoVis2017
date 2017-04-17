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
function AreaOfTriangle(v0,v1,v2){
    var vec1 = new Array();
    var vec2 = new Array();
    vec1[0] = v1.x - v0.x;
    vec1[1] = v1.y - v0.y;
    vec1[2] = v1.z - v0.z;
    vec2[0] = v2.x - v0.x;
    vec2[1] = v2.y - v0.y;
    vec2[2] = v2.z - v0.z;
    var vec3 = new Array();
    vec3[0]=vec1[1]*vec2[2]-vec1[2]*vec2[1];
    vec3[1]=vec1[2]*vec2[0]-vec1[0]*vec2[2];
    vec3[2]=vec1[0]*vec2[1]-vec1[1]*vec2[0];
    return Math.sqrt(Math.pow(vec3[0],2)+Math.pow(vec3[1],2)+Math.pow(vec3[2],2))/2;
}
