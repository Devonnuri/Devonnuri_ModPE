var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function newLevel(){
	showTutor();
}

function showTutor(){
	ctx.runOnUiThread(new java.lang.Runnable({
		run: function(){
			try{
				//�Ķ���� ����
				var params = new android.widget.RelativeLayout.LayoutParams(-1, -1);

				//���̾ƿ� ���� ����
				var layout = new android.widget.RelativeLayout(ctx);
				layout.setGravity(android.view.Gravity.CENTER);
				layout.setBackgroundColor(android.graphics.Color.GRAY);
				layout.setLayoutParams(params);

				//ȭ�� ����
				var window = new andorid.widget.PopupWindow(layout.-1,-1);
				window.setFocusable(true);
				window.showAtLocation(ctx.getWIndow().getDecorView(), android.view.Gravity.CENTER, 0,0);
			}catch(e){
				print(e);
			}
		}
	}));
}