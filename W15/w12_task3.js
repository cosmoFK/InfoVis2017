function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();
    var Element =0;
    screen.init( volume, {
	width: window.innerWidth * 0.8,
        height: window.innerHeight,
	targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
	
    var colorSlider = document.querySelector('input[type = "range"]');
    var cmap = [];
    for ( var i = 0; i < 256; i++ )
    {
     var S = i / 255.0; // [0,1]
        var R = Math.max( Math.cos( ( S - 1.0 ) * Math.PI ), 0.0 );
        var G = Math.max( Math.cos( ( S - 0.5 ) * Math.PI ), 0.0 );
        var B = Math.max( Math.cos( S * Math.PI ), 0.0 );
        var color = new THREE.Color( R, G, B );
        cmap.push( [ S, '0x' + color.getHexString() ] );
    }
    var surfaces = Isosurfaces( volume, isovalue, colorSlider.value);
    surfaces.material.color = new THREE.Color().setHex( cmap[ colorSlider.value ][1] );
    screen.scene.add( surfaces );
    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });
    window.addEventListener( 'resize', function() {
        screen.resize( [ window.innerWidth * 0.8, window.innerHeight ] );
    });
    screen.loop();
}
function changeValue(value) {
   
    
}
