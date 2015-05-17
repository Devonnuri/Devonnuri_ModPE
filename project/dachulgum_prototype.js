var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

var MediaFile{
	"tutorBgImg":"http://devonnuricdn.esy.es/dachulgum/bg_tutor.png",
	"logo":"http://devonnuricdn.esy.es/devonnuri_logo.png"
};

function newLevel(){
	showTutor();
}

function showTutor(){
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				//image variable
				var image = new android.widget.ImageView(ctx);
				image.setImageBitmap(MediaFile.tutorBgImg);
				image.setScaleType(android.widget.ImageView.ScaleType.CENTER_CROP);
				image.setAlpha(1.0);
				//parameter variable
				var params = new android.widget.RelativeLayout.LayoutParams(-1, -1);

				//layout variable
				var layout = new android.widget.RelativeLayout(ctx);
				layout.setGravity(android.view.Gravity.CENTER);
				layout.setBackgroundColor(android.graphics.Color.GRAY);
				layout.setLayoutParams(params);

				//ctx window variable
				var window = new android.widget.PopupWindow(image);
				window.setFocusable(true);
				window.showAtLocation(ctx.getWIndow().getDecorView(), android.view.Gravity.CENTER, 0,0);
			}catch(e){
				print(e);
			}
		}
	}));
}