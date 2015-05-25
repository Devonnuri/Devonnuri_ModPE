//context
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function shopDialog(){
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{

			}catch(e){
				clientMessage(e);
			}
		}
	}))
}